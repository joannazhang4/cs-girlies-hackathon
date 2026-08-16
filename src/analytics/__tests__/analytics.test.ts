import { describe, expect, it } from 'vitest';
import type { DoseLog, Medication } from '../../types';
import { computeAdherence, timeOfDay } from '../adherence';
import { computeRisk } from '../risk';
import { computeChanges, activeOn } from '../changes';
import { explainInteraction, DISCLAIMER } from '../explain';
import { checkInteractions } from '../../engine/interactionEngine';
import { computeInsights } from '../index';

function med(overrides: Partial<Medication> & { id: string; name: string }): Medication {
  return {
    dose: '10mg',
    startDate: '2020-01-01',
    endDate: '2099-01-01',
    firstTime: '08:00',
    frequencySegments: [{ intervalHours: 24, untilDate: '2099-01-01' }],
    frequencyText: 'every 24 hours',
    color: '#26a690',
    createdAt: '2020-01-01T00:00:00.000Z',
    ...overrides,
  };
}

function log(medicationId: string, date: string, time: string, status: DoseLog['status']): DoseLog {
  return { id: `${medicationId}-${date}-${time}`, medicationId, date, time, status };
}

/** ISO date N days before today, so tests don't rot. */
function daysAgo(n: number): string {
  const d = new Date();
  d.setDate(d.getDate() - n);
  const pad = (x: number) => String(x).padStart(2, '0');
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
}

describe('timeOfDay bucketing', () => {
  it('buckets by hour', () => {
    expect(timeOfDay('08:00')).toBe('morning');
    expect(timeOfDay('13:30')).toBe('afternoon');
    expect(timeOfDay('20:00')).toBe('evening');
    expect(timeOfDay('02:00')).toBe('night');
  });

  it('handles boundaries', () => {
    expect(timeOfDay('05:00')).toBe('morning');
    expect(timeOfDay('11:59')).toBe('morning');
    expect(timeOfDay('12:00')).toBe('afternoon');
    expect(timeOfDay('17:00')).toBe('evening');
    expect(timeOfDay('23:59')).toBe('evening');
    expect(timeOfDay('04:59')).toBe('night');
  });
});

describe('adherence', () => {
  it('excludes pending doses from the denominator', () => {
    // A medication starting today with no logs: today's dose may be due or
    // upcoming, but either way nothing has resolved, so adherence is null
    // rather than 0%.
    const m = med({ id: 'a', name: 'Sertraline', startDate: daysAgo(0) });
    const report = computeAdherence([m], []);
    expect(report.overall).toBeNull();
  });

  it('counts unlogged past doses as missed', () => {
    const m = med({ id: 'a', name: 'Sertraline', startDate: daysAgo(3), endDate: daysAgo(1) });
    const report = computeAdherence([m], []);
    expect(report.counts.missed).toBe(3);
    expect(report.overall).toBe(0);
  });

  it('computes a straightforward rate', () => {
    const m = med({ id: 'a', name: 'Sertraline', startDate: daysAgo(3), endDate: daysAgo(1) });
    const logs = [
      log('a', daysAgo(3), '08:00', 'taken'),
      log('a', daysAgo(2), '08:00', 'taken'),
      log('a', daysAgo(1), '08:00', 'skipped'),
    ];
    const report = computeAdherence([m], logs);
    expect(report.counts.taken).toBe(2);
    expect(report.counts.skipped).toBe(1);
    expect(report.overall).toBeCloseTo(2 / 3, 10);
  });

  it('breaks adherence down by time of day', () => {
    // 5 days of each so both buckets clear the minimum-sample guard.
    const morning = med({
      id: 'am',
      name: 'Sertraline',
      firstTime: '08:00',
      startDate: daysAgo(5),
      endDate: daysAgo(1),
    });
    const evening = med({
      id: 'pm',
      name: 'Metformin',
      firstTime: '20:00',
      startDate: daysAgo(5),
      endDate: daysAgo(1),
    });
    const logs = [1, 2, 3, 4, 5].map((d) => log('am', daysAgo(d), '08:00', 'taken'));
    // evening doses left unlogged -> missed
    const report = computeAdherence([morning, evening], logs);
    expect(report.byTimeOfDay.morning).toBe(1);
    expect(report.byTimeOfDay.evening).toBe(0);
    expect(report.insights.some((s) => s.includes('evening'))).toBe(true);
  });

  it('does not claim a time-of-day pattern from too few doses', () => {
    // Two evening doses is noise, not a pattern worth naming to a user.
    const morning = med({ id: 'am', name: 'Sertraline', firstTime: '08:00', startDate: daysAgo(2), endDate: daysAgo(1) });
    const evening = med({ id: 'pm', name: 'Metformin', firstTime: '20:00', startDate: daysAgo(2), endDate: daysAgo(1) });
    const logs = [log('am', daysAgo(2), '08:00', 'taken'), log('am', daysAgo(1), '08:00', 'taken')];
    const report = computeAdherence([morning, evening], logs);
    expect(report.insights.some((s) => s.includes('most likely to miss'))).toBe(false);
  });

  it('reports per-medication adherence', () => {
    const m = med({ id: 'a', name: 'Sertraline', startDate: daysAgo(2), endDate: daysAgo(1) });
    const logs = [log('a', daysAgo(2), '08:00', 'taken'), log('a', daysAgo(1), '08:00', 'taken')];
    const report = computeAdherence([m], logs);
    expect(report.byMedication['a']).toBe(1);
  });

  it('never counts future doses', () => {
    const m = med({ id: 'a', name: 'Sertraline', startDate: daysAgo(1), endDate: '2099-01-01' });
    const report = computeAdherence([m], []);
    // Only yesterday and today can appear; nothing from 2099.
    expect(report.counts.total).toBeLessThanOrEqual(2);
  });
});

describe('risk', () => {
  it('ranks high severity first', () => {
    const { interactions } = checkInteractions(['Coumadin', 'Advil', 'Prilosec', 'Plavix']);
    const risk = computeRisk(interactions);
    expect(risk.ranked[0].severity).toBe('high');
    expect(risk.topConcern?.severity).toBe('high');
  });

  it('reports a clear regimen', () => {
    const risk = computeRisk(checkInteractions(['Tylenol', 'Amoxil']).interactions);
    expect(risk.score).toBe(0);
    expect(risk.topConcern).toBeNull();
    expect(risk.headline).toContain('No known interactions');
  });

  it('caps the score at 100', () => {
    const risk = computeRisk({
      high: Array(10).fill({
        drug_a: 'a',
        drug_b: 'b',
        severity: 'high',
        mechanism: '',
        evidence: '',
      }),
      moderate: [],
      low: [],
    });
    expect(risk.score).toBe(100);
  });

  it('ranks one high above many lows', () => {
    const oneHigh = computeRisk(checkInteractions(['Coumadin', 'Advil']).interactions);
    const manyLow = computeRisk(checkInteractions(['Lipitor', 'Plavix', 'Synthroid', 'Prilosec']).interactions);
    expect(oneHigh.score).toBeGreaterThan(manyLow.counts.low * 4);
  });
});

describe('changes', () => {
  it('detects an added medication and its new interaction', () => {
    const meds = [
      med({ id: 'a', name: 'Coumadin', startDate: '2020-01-01' }),
      // added today
      med({ id: 'b', name: 'Advil', startDate: daysAgo(0) }),
    ];
    const report = computeChanges(meds);
    expect(report.added).toEqual(['ibuprofen']);
    expect(report.removed).toEqual([]);
    expect(report.newInteractions).toHaveLength(1);
    expect(report.newInteractions[0].severity).toBe('high');
    expect(report.summary).toContain('was added');
    expect(report.summary).toContain('1 new potential interaction');
  });

  it('reports no changes for a stable regimen', () => {
    const meds = [med({ id: 'a', name: 'Coumadin' }), med({ id: 'b', name: 'Advil' })];
    const report = computeChanges(meds);
    expect(report.hasChanges).toBe(false);
    expect(report.summary).toBe('No changes to your regimen.');
  });

  it('detects a removed medication', () => {
    const meds = [
      med({ id: 'a', name: 'Coumadin' }),
      med({ id: 'b', name: 'Advil', startDate: '2020-01-01', endDate: daysAgo(1) }),
    ];
    const report = computeChanges(meds);
    expect(report.removed).toEqual(['ibuprofen']);
    expect(report.resolvedInteractions).toHaveLength(1);
  });

  it('does not treat a brand-name rename as a change', () => {
    // Same drug, different spelling, added today — should be a no-op.
    const meds = [med({ id: 'a', name: 'ibuprofen' }), med({ id: 'b', name: 'Advil', startDate: daysAgo(0) })];
    const report = computeChanges(meds);
    expect(report.added).toEqual([]);
    expect(report.hasChanges).toBe(false);
  });

  it('activeOn respects date ranges', () => {
    const meds = [
      med({ id: 'a', name: 'Advil', startDate: '2020-01-01', endDate: '2020-06-01' }),
      med({ id: 'b', name: 'Coumadin', startDate: '2020-01-01', endDate: '2099-01-01' }),
    ];
    expect(activeOn(meds, '2020-03-01').map((m) => m.id)).toEqual(['a', 'b']);
    expect(activeOn(meds, '2021-03-01').map((m) => m.id)).toEqual(['b']);
  });
});

describe('explanations', () => {
  const interaction = checkInteractions(['Coumadin', 'Advil']).interactions.high[0];

  it('produces a stable, order-independent pair id', () => {
    expect(explainInteraction(interaction).pairId).toBe('ibuprofen+warfarin');
  });

  it('draws only on the stored mechanism and evidence', () => {
    const e = explainInteraction(interaction);
    // The mechanism text must appear verbatim — no paraphrasing that could
    // drift into an unsupported medical claim.
    expect(e.plainLanguage).toContain(interaction.mechanism);
    expect(e.evidence).toContain(interaction.evidence.replace(/\.$/, ''));
  });

  it('always carries the disclaimer', () => {
    expect(explainInteraction(interaction).disclaimer).toBe(DISCLAIMER);
  });

  it('never advises stopping a medication', () => {
    const e = explainInteraction(interaction);
    expect(e.plainLanguage.toLowerCase()).not.toContain('stop taking');
    expect(e.plainLanguage.toLowerCase()).not.toContain('you should stop');
  });
});

describe('computeInsights', () => {
  it('assembles the full report', () => {
    const meds = [
      med({ id: 'a', name: 'Coumadin', startDate: daysAgo(5) }),
      med({ id: 'b', name: 'Advil', startDate: daysAgo(5) }),
    ];
    const logs = [log('a', daysAgo(5), '08:00', 'taken')];
    const insights = computeInsights(meds, logs);

    expect(insights.risk.counts.high).toBe(1);
    expect(insights.explanations).toHaveLength(1);
    expect(insights.adherence.counts.total).toBeGreaterThan(0);
    expect(insights.unresolvedMedications).toEqual([]);
    expect(insights.generatedAt).toMatch(/^\d{4}-\d{2}-\d{2}T/);
  });

  it('surfaces unrecognised medication names', () => {
    const meds = [med({ id: 'a', name: 'Coumadin' }), med({ id: 'b', name: 'Fictitium' })];
    const insights = computeInsights(meds, []);
    expect(insights.unresolvedMedications).toEqual(['Fictitium']);
  });

  it('ignores medications whose course has finished', () => {
    const meds = [
      med({ id: 'a', name: 'Coumadin' }),
      med({ id: 'b', name: 'Advil', startDate: '2020-01-01', endDate: '2020-02-01' }),
    ];
    const insights = computeInsights(meds, []);
    expect(insights.risk.counts.high).toBe(0);
  });
});
