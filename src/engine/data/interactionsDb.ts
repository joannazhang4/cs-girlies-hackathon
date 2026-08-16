/**
 * Pairwise drug-interaction database.
 *
 * ~2,348 pairs generated from well-established, textbook-level interaction
 * mechanisms (the kind any pharmacology reference lists — NSAID + anticoagulant
 * bleeding risk, SSRI + MAOI serotonin syndrome, opioid + benzodiazepine
 * respiratory depression, and similar) applied across the drugs in
 * `drugAliases.ts`. Every `drug_a` / `drug_b` here must exist as a key there.
 *
 * This is a curated, class-based dataset for a consumer-facing prototype, not
 * a substitute for a licensed clinical drug-interaction database. See
 * `src/engine/README.md` for how it was built, its limitations, and how to
 * extend or replace it.
 *
 * `mechanism` and `evidence` are the ONLY source material the plain-language
 * explanation layer is allowed to draw on — see `analytics/explain.ts`.
 */

export type Severity = 'high' | 'moderate' | 'low';

export interface Interaction {
  drug_a: string;
  drug_b: string;
  severity: Severity;
  mechanism: string;
  evidence: string;
}

export const INTERACTIONS_DB: Interaction[] = [
  {
    drug_a: "alprazolam",
    drug_b: "aripiprazole",
    severity: "moderate",
    mechanism:
      "Both cause CNS depression; combined use increases sedation and, in vulnerable patients, respiratory depression risk.",
    evidence:
      "Clinical guidance recommends caution when combining antipsychotics with benzodiazepines, especially in older adults.",
  },
  {
    drug_a: "alprazolam",
    drug_b: "clonazepam",
    severity: "high",
    mechanism:
      "Additive central nervous system depression from combining two benzodiazepines.",
    evidence:
      "Clinical guidance advises against concurrent benzodiazepine use due to sedation and respiratory depression risk.",
  },
  {
    drug_a: "alprazolam",
    drug_b: "codeine",
    severity: "high",
    mechanism:
      "Both depress the central nervous system; combined use significantly raises the risk of profound sedation and fatal respiratory depression.",
    evidence:
      "FDA boxed warning specifically addresses the combination of opioids and benzodiazepines.",
  },
  {
    drug_a: "alprazolam",
    drug_b: "cyclobenzaprine",
    severity: "moderate",
    mechanism:
      "Both cause CNS depression; combined use increases sedation and fall risk.",
    evidence:
      "Clinical guidance flags this combination for increased sedation risk, particularly in older adults.",
  },
  {
    drug_a: "alprazolam",
    drug_b: "diazepam",
    severity: "high",
    mechanism:
      "Additive central nervous system depression from combining two benzodiazepines.",
    evidence:
      "Clinical guidance advises against concurrent benzodiazepine use due to sedation and respiratory depression risk.",
  },
  {
    drug_a: "alprazolam",
    drug_b: "diphenhydramine",
    severity: "moderate",
    mechanism:
      "Both cause CNS depression; combined use increases sedation and impairs alertness.",
    evidence:
      "Product labeling for sedating antihistamines warns against combining with other CNS depressants.",
  },
  {
    drug_a: "alprazolam",
    drug_b: "eszopiclone",
    severity: "high",
    mechanism:
      "Additive CNS depression between benzodiazepines and non-benzodiazepine hypnotics increases sedation and fall risk.",
    evidence:
      "Clinical guidance recommends avoiding concurrent use of multiple sedative-hypnotic agents.",
  },
  {
    drug_a: "alprazolam",
    drug_b: "fentanyl",
    severity: "high",
    mechanism:
      "Both depress the central nervous system; combined use significantly raises the risk of profound sedation and fatal respiratory depression.",
    evidence:
      "FDA boxed warning specifically addresses the combination of opioids and benzodiazepines.",
  },
  {
    drug_a: "alprazolam",
    drug_b: "hydrocodone",
    severity: "high",
    mechanism:
      "Both depress the central nervous system; combined use significantly raises the risk of profound sedation and fatal respiratory depression.",
    evidence:
      "FDA boxed warning specifically addresses the combination of opioids and benzodiazepines.",
  },
  {
    drug_a: "alprazolam",
    drug_b: "lorazepam",
    severity: "high",
    mechanism:
      "Additive central nervous system depression from combining two benzodiazepines.",
    evidence:
      "Clinical guidance advises against concurrent benzodiazepine use due to sedation and respiratory depression risk.",
  },
  {
    drug_a: "alprazolam",
    drug_b: "morphine",
    severity: "high",
    mechanism:
      "Both depress the central nervous system; combined use significantly raises the risk of profound sedation and fatal respiratory depression.",
    evidence:
      "FDA boxed warning specifically addresses the combination of opioids and benzodiazepines.",
  },
  {
    drug_a: "alprazolam",
    drug_b: "olanzapine",
    severity: "moderate",
    mechanism:
      "Both cause CNS depression; combined use increases sedation and, in vulnerable patients, respiratory depression risk.",
    evidence:
      "Clinical guidance recommends caution when combining antipsychotics with benzodiazepines, especially in older adults.",
  },
  {
    drug_a: "alprazolam",
    drug_b: "oxycodone",
    severity: "high",
    mechanism:
      "Both depress the central nervous system; combined use significantly raises the risk of profound sedation and fatal respiratory depression.",
    evidence:
      "FDA boxed warning specifically addresses the combination of opioids and benzodiazepines.",
  },
  {
    drug_a: "alprazolam",
    drug_b: "quetiapine",
    severity: "moderate",
    mechanism:
      "Both cause CNS depression; combined use increases sedation and, in vulnerable patients, respiratory depression risk.",
    evidence:
      "Clinical guidance recommends caution when combining antipsychotics with benzodiazepines, especially in older adults.",
  },
  {
    drug_a: "alprazolam",
    drug_b: "risperidone",
    severity: "moderate",
    mechanism:
      "Both cause CNS depression; combined use increases sedation and, in vulnerable patients, respiratory depression risk.",
    evidence:
      "Clinical guidance recommends caution when combining antipsychotics with benzodiazepines, especially in older adults.",
  },
  {
    drug_a: "alprazolam",
    drug_b: "temazepam",
    severity: "high",
    mechanism:
      "Additive central nervous system depression from combining two benzodiazepines.",
    evidence:
      "Clinical guidance advises against concurrent benzodiazepine use due to sedation and respiratory depression risk.",
  },
  {
    drug_a: "alprazolam",
    drug_b: "zolpidem",
    severity: "high",
    mechanism:
      "Additive CNS depression between benzodiazepines and non-benzodiazepine hypnotics increases sedation and fall risk.",
    evidence:
      "Clinical guidance recommends avoiding concurrent use of multiple sedative-hypnotic agents.",
  },
  {
    drug_a: "amiloride",
    drug_b: "captopril",
    severity: "moderate",
    mechanism:
      "Both raise serum potassium; combined use increases the risk of hyperkalemia.",
    evidence:
      "Clinical monitoring guidelines recommend checking potassium when combining these agents.",
  },
  {
    drug_a: "amiloride",
    drug_b: "enalapril",
    severity: "moderate",
    mechanism:
      "Both raise serum potassium; combined use increases the risk of hyperkalemia.",
    evidence:
      "Clinical monitoring guidelines recommend checking potassium when combining these agents.",
  },
  {
    drug_a: "amiloride",
    drug_b: "irbesartan",
    severity: "moderate",
    mechanism:
      "Both raise serum potassium; combined use increases the risk of hyperkalemia.",
    evidence:
      "Clinical monitoring guidelines recommend checking potassium when combining these agents.",
  },
  {
    drug_a: "amiloride",
    drug_b: "lisinopril",
    severity: "moderate",
    mechanism:
      "Both raise serum potassium; combined use increases the risk of hyperkalemia.",
    evidence:
      "Clinical monitoring guidelines recommend checking potassium when combining these agents.",
  },
  {
    drug_a: "amiloride",
    drug_b: "losartan",
    severity: "moderate",
    mechanism:
      "Both raise serum potassium; combined use increases the risk of hyperkalemia.",
    evidence:
      "Clinical monitoring guidelines recommend checking potassium when combining these agents.",
  },
  {
    drug_a: "amiloride",
    drug_b: "olmesartan",
    severity: "moderate",
    mechanism:
      "Both raise serum potassium; combined use increases the risk of hyperkalemia.",
    evidence:
      "Clinical monitoring guidelines recommend checking potassium when combining these agents.",
  },
  {
    drug_a: "amiloride",
    drug_b: "ramipril",
    severity: "moderate",
    mechanism:
      "Both raise serum potassium; combined use increases the risk of hyperkalemia.",
    evidence:
      "Clinical monitoring guidelines recommend checking potassium when combining these agents.",
  },
  {
    drug_a: "amiloride",
    drug_b: "valsartan",
    severity: "moderate",
    mechanism:
      "Both raise serum potassium; combined use increases the risk of hyperkalemia.",
    evidence:
      "Clinical monitoring guidelines recommend checking potassium when combining these agents.",
  },
  {
    drug_a: "amlodipine",
    drug_b: "atenolol",
    severity: "moderate",
    mechanism:
      "Both slow cardiac conduction; combined use can cause excessive bradycardia or heart block.",
    evidence:
      "Clinical guidelines recommend caution and ECG monitoring when combining these agents, particularly non-dihydropyridine calcium channel blockers.",
  },
  {
    drug_a: "amlodipine",
    drug_b: "carvedilol",
    severity: "moderate",
    mechanism:
      "Both slow cardiac conduction; combined use can cause excessive bradycardia or heart block.",
    evidence:
      "Clinical guidelines recommend caution and ECG monitoring when combining these agents, particularly non-dihydropyridine calcium channel blockers.",
  },
  {
    drug_a: "amlodipine",
    drug_b: "metoprolol",
    severity: "moderate",
    mechanism:
      "Both slow cardiac conduction; combined use can cause excessive bradycardia or heart block.",
    evidence:
      "Clinical guidelines recommend caution and ECG monitoring when combining these agents, particularly non-dihydropyridine calcium channel blockers.",
  },
  {
    drug_a: "amlodipine",
    drug_b: "propranolol",
    severity: "moderate",
    mechanism:
      "Both slow cardiac conduction; combined use can cause excessive bradycardia or heart block.",
    evidence:
      "Clinical guidelines recommend caution and ECG monitoring when combining these agents, particularly non-dihydropyridine calcium channel blockers.",
  },
  {
    drug_a: "apixaban",
    drug_b: "aspirin",
    severity: "high",
    mechanism:
      "NSAIDs inhibit platelet aggregation and can displace anticoagulants from protein binding, increasing bleeding risk.",
    evidence:
      "Multiple clinical studies show increased GI bleeding risk when NSAIDs are combined with anticoagulants.",
  },
  {
    drug_a: "apixaban",
    drug_b: "carbamazepine",
    severity: "moderate",
    mechanism:
      "Several antiepileptics induce hepatic enzymes that alter anticoagulant metabolism, making dosing harder to stabilize.",
    evidence:
      "Guidelines recommend close INR monitoring when combining enzyme-inducing antiepileptics with anticoagulants.",
  },
  {
    drug_a: "apixaban",
    drug_b: "celecoxib",
    severity: "high",
    mechanism:
      "NSAIDs inhibit platelet aggregation and can displace anticoagulants from protein binding, increasing bleeding risk.",
    evidence:
      "Multiple clinical studies show increased GI bleeding risk when NSAIDs are combined with anticoagulants.",
  },
  {
    drug_a: "apixaban",
    drug_b: "citalopram",
    severity: "moderate",
    mechanism:
      "SSRIs impair platelet aggregation and, combined with anticoagulants, can further raise bleeding risk.",
    evidence:
      "Cohort studies report increased bleeding events with SSRI + anticoagulant combinations.",
  },
  {
    drug_a: "apixaban",
    drug_b: "clopidogrel",
    severity: "high",
    mechanism:
      "Combined anticoagulant and antiplatelet effects substantially increase bleeding risk.",
    evidence:
      "Well documented in anticoagulation therapy guidelines; concurrent use requires close monitoring.",
  },
  {
    drug_a: "apixaban",
    drug_b: "dabigatran",
    severity: "high",
    mechanism:
      "Combining two anticoagulants compounds bleeding risk without a clear additional therapeutic benefit.",
    evidence:
      "Clinical guidelines generally advise against combining anticoagulants outside of specific supervised protocols.",
  },
  {
    drug_a: "apixaban",
    drug_b: "diclofenac",
    severity: "high",
    mechanism:
      "NSAIDs inhibit platelet aggregation and can displace anticoagulants from protein binding, increasing bleeding risk.",
    evidence:
      "Multiple clinical studies show increased GI bleeding risk when NSAIDs are combined with anticoagulants.",
  },
  {
    drug_a: "apixaban",
    drug_b: "escitalopram",
    severity: "moderate",
    mechanism:
      "SSRIs impair platelet aggregation and, combined with anticoagulants, can further raise bleeding risk.",
    evidence:
      "Cohort studies report increased bleeding events with SSRI + anticoagulant combinations.",
  },
  {
    drug_a: "apixaban",
    drug_b: "fluoxetine",
    severity: "moderate",
    mechanism:
      "SSRIs impair platelet aggregation and, combined with anticoagulants, can further raise bleeding risk.",
    evidence:
      "Cohort studies report increased bleeding events with SSRI + anticoagulant combinations.",
  },
  {
    drug_a: "apixaban",
    drug_b: "gabapentin",
    severity: "moderate",
    mechanism:
      "Several antiepileptics induce hepatic enzymes that alter anticoagulant metabolism, making dosing harder to stabilize.",
    evidence:
      "Guidelines recommend close INR monitoring when combining enzyme-inducing antiepileptics with anticoagulants.",
  },
  {
    drug_a: "apixaban",
    drug_b: "heparin",
    severity: "high",
    mechanism:
      "Combining two anticoagulants compounds bleeding risk without a clear additional therapeutic benefit.",
    evidence:
      "Clinical guidelines generally advise against combining anticoagulants outside of specific supervised protocols.",
  },
  {
    drug_a: "apixaban",
    drug_b: "ibuprofen",
    severity: "high",
    mechanism:
      "NSAIDs inhibit platelet aggregation and can displace anticoagulants from protein binding, increasing bleeding risk.",
    evidence:
      "Multiple clinical studies show increased GI bleeding risk when NSAIDs are combined with anticoagulants.",
  },
  {
    drug_a: "apixaban",
    drug_b: "indomethacin",
    severity: "high",
    mechanism:
      "NSAIDs inhibit platelet aggregation and can displace anticoagulants from protein binding, increasing bleeding risk.",
    evidence:
      "Multiple clinical studies show increased GI bleeding risk when NSAIDs are combined with anticoagulants.",
  },
  {
    drug_a: "apixaban",
    drug_b: "ketorolac",
    severity: "high",
    mechanism:
      "NSAIDs inhibit platelet aggregation and can displace anticoagulants from protein binding, increasing bleeding risk.",
    evidence:
      "Multiple clinical studies show increased GI bleeding risk when NSAIDs are combined with anticoagulants.",
  },
  {
    drug_a: "apixaban",
    drug_b: "lamotrigine",
    severity: "moderate",
    mechanism:
      "Several antiepileptics induce hepatic enzymes that alter anticoagulant metabolism, making dosing harder to stabilize.",
    evidence:
      "Guidelines recommend close INR monitoring when combining enzyme-inducing antiepileptics with anticoagulants.",
  },
  {
    drug_a: "apixaban",
    drug_b: "meloxicam",
    severity: "high",
    mechanism:
      "NSAIDs inhibit platelet aggregation and can displace anticoagulants from protein binding, increasing bleeding risk.",
    evidence:
      "Multiple clinical studies show increased GI bleeding risk when NSAIDs are combined with anticoagulants.",
  },
  {
    drug_a: "apixaban",
    drug_b: "naproxen",
    severity: "high",
    mechanism:
      "NSAIDs inhibit platelet aggregation and can displace anticoagulants from protein binding, increasing bleeding risk.",
    evidence:
      "Multiple clinical studies show increased GI bleeding risk when NSAIDs are combined with anticoagulants.",
  },
  {
    drug_a: "apixaban",
    drug_b: "paroxetine",
    severity: "moderate",
    mechanism:
      "SSRIs impair platelet aggregation and, combined with anticoagulants, can further raise bleeding risk.",
    evidence:
      "Cohort studies report increased bleeding events with SSRI + anticoagulant combinations.",
  },
  {
    drug_a: "apixaban",
    drug_b: "phenytoin",
    severity: "moderate",
    mechanism:
      "Several antiepileptics induce hepatic enzymes that alter anticoagulant metabolism, making dosing harder to stabilize.",
    evidence:
      "Guidelines recommend close INR monitoring when combining enzyme-inducing antiepileptics with anticoagulants.",
  },
  {
    drug_a: "apixaban",
    drug_b: "rivaroxaban",
    severity: "high",
    mechanism:
      "Combining two anticoagulants compounds bleeding risk without a clear additional therapeutic benefit.",
    evidence:
      "Clinical guidelines generally advise against combining anticoagulants outside of specific supervised protocols.",
  },
  {
    drug_a: "apixaban",
    drug_b: "sertraline",
    severity: "moderate",
    mechanism:
      "SSRIs impair platelet aggregation and, combined with anticoagulants, can further raise bleeding risk.",
    evidence:
      "Cohort studies report increased bleeding events with SSRI + anticoagulant combinations.",
  },
  {
    drug_a: "apixaban",
    drug_b: "valproate",
    severity: "moderate",
    mechanism:
      "Several antiepileptics induce hepatic enzymes that alter anticoagulant metabolism, making dosing harder to stabilize.",
    evidence:
      "Guidelines recommend close INR monitoring when combining enzyme-inducing antiepileptics with anticoagulants.",
  },
  {
    drug_a: "apixaban",
    drug_b: "warfarin",
    severity: "high",
    mechanism:
      "Combining two anticoagulants compounds bleeding risk without a clear additional therapeutic benefit.",
    evidence:
      "Clinical guidelines generally advise against combining anticoagulants outside of specific supervised protocols.",
  },
  {
    drug_a: "aripiprazole",
    drug_b: "clonazepam",
    severity: "moderate",
    mechanism:
      "Both cause CNS depression; combined use increases sedation and, in vulnerable patients, respiratory depression risk.",
    evidence:
      "Clinical guidance recommends caution when combining antipsychotics with benzodiazepines, especially in older adults.",
  },
  {
    drug_a: "aripiprazole",
    drug_b: "diazepam",
    severity: "moderate",
    mechanism:
      "Both cause CNS depression; combined use increases sedation and, in vulnerable patients, respiratory depression risk.",
    evidence:
      "Clinical guidance recommends caution when combining antipsychotics with benzodiazepines, especially in older adults.",
  },
  {
    drug_a: "aripiprazole",
    drug_b: "lorazepam",
    severity: "moderate",
    mechanism:
      "Both cause CNS depression; combined use increases sedation and, in vulnerable patients, respiratory depression risk.",
    evidence:
      "Clinical guidance recommends caution when combining antipsychotics with benzodiazepines, especially in older adults.",
  },
  {
    drug_a: "aripiprazole",
    drug_b: "temazepam",
    severity: "moderate",
    mechanism:
      "Both cause CNS depression; combined use increases sedation and, in vulnerable patients, respiratory depression risk.",
    evidence:
      "Clinical guidance recommends caution when combining antipsychotics with benzodiazepines, especially in older adults.",
  },
  {
    drug_a: "aripiprazole",
    drug_b: "tramadol",
    severity: "low",
    mechanism:
      "Some antipsychotics have mild serotonergic activity that may add to that of other serotonergic agents.",
    evidence:
      "Evidence is limited; clinical significance is considered minor for most patients but worth noting.",
  },
  {
    drug_a: "aripiprazole",
    drug_b: "trazodone",
    severity: "low",
    mechanism:
      "Some antipsychotics have mild serotonergic activity that may add to that of other serotonergic agents.",
    evidence:
      "Evidence is limited; clinical significance is considered minor for most patients but worth noting.",
  },
  {
    drug_a: "aspirin",
    drug_b: "captopril",
    severity: "moderate",
    mechanism:
      "NSAIDs can reduce the antihypertensive effect of ACE inhibitors and impair renal function.",
    evidence:
      "Documented in hypertension management guidelines.",
  },
  {
    drug_a: "aspirin",
    drug_b: "celecoxib",
    severity: "low",
    mechanism:
      "Combining two NSAIDs adds to GI and renal risk without added therapeutic benefit.",
    evidence:
      "Clinical guidance generally advises against routine use of multiple NSAIDs concurrently.",
  },
  {
    drug_a: "aspirin",
    drug_b: "citalopram",
    severity: "moderate",
    mechanism:
      "SSRIs combined with NSAIDs may increase risk of GI bleeding due to reduced platelet serotonin uptake.",
    evidence:
      "Observational studies report elevated bleeding risk with SSRI + NSAID combinations.",
  },
  {
    drug_a: "aspirin",
    drug_b: "clopidogrel",
    severity: "moderate",
    mechanism:
      "NSAIDs may add to the antiplatelet effect and irritate the GI lining, raising bleeding risk.",
    evidence:
      "Observational studies report elevated bleeding risk with antiplatelet + NSAID combinations.",
  },
  {
    drug_a: "aspirin",
    drug_b: "dabigatran",
    severity: "high",
    mechanism:
      "NSAIDs inhibit platelet aggregation and can displace anticoagulants from protein binding, increasing bleeding risk.",
    evidence:
      "Multiple clinical studies show increased GI bleeding risk when NSAIDs are combined with anticoagulants.",
  },
  {
    drug_a: "aspirin",
    drug_b: "diclofenac",
    severity: "low",
    mechanism:
      "Combining two NSAIDs adds to GI and renal risk without added therapeutic benefit.",
    evidence:
      "Clinical guidance generally advises against routine use of multiple NSAIDs concurrently.",
  },
  {
    drug_a: "aspirin",
    drug_b: "enalapril",
    severity: "moderate",
    mechanism:
      "NSAIDs can reduce the antihypertensive effect of ACE inhibitors and impair renal function.",
    evidence:
      "Documented in hypertension management guidelines.",
  },
  {
    drug_a: "aspirin",
    drug_b: "escitalopram",
    severity: "moderate",
    mechanism:
      "SSRIs combined with NSAIDs may increase risk of GI bleeding due to reduced platelet serotonin uptake.",
    evidence:
      "Observational studies report elevated bleeding risk with SSRI + NSAID combinations.",
  },
  {
    drug_a: "aspirin",
    drug_b: "fluoxetine",
    severity: "moderate",
    mechanism:
      "SSRIs combined with NSAIDs may increase risk of GI bleeding due to reduced platelet serotonin uptake.",
    evidence:
      "Observational studies report elevated bleeding risk with SSRI + NSAID combinations.",
  },
  {
    drug_a: "aspirin",
    drug_b: "heparin",
    severity: "high",
    mechanism:
      "NSAIDs inhibit platelet aggregation and can displace anticoagulants from protein binding, increasing bleeding risk.",
    evidence:
      "Multiple clinical studies show increased GI bleeding risk when NSAIDs are combined with anticoagulants.",
  },
  {
    drug_a: "aspirin",
    drug_b: "ibuprofen",
    severity: "low",
    mechanism:
      "Combining two NSAIDs adds to GI and renal risk without added therapeutic benefit.",
    evidence:
      "Clinical guidance generally advises against routine use of multiple NSAIDs concurrently.",
  },
  {
    drug_a: "aspirin",
    drug_b: "indomethacin",
    severity: "low",
    mechanism:
      "Combining two NSAIDs adds to GI and renal risk without added therapeutic benefit.",
    evidence:
      "Clinical guidance generally advises against routine use of multiple NSAIDs concurrently.",
  },
  {
    drug_a: "aspirin",
    drug_b: "irbesartan",
    severity: "moderate",
    mechanism:
      "NSAIDs can reduce the antihypertensive effect of ARBs and impair renal function.",
    evidence:
      "Documented in hypertension management guidelines.",
  },
  {
    drug_a: "aspirin",
    drug_b: "ketorolac",
    severity: "low",
    mechanism:
      "Combining two NSAIDs adds to GI and renal risk without added therapeutic benefit.",
    evidence:
      "Clinical guidance generally advises against routine use of multiple NSAIDs concurrently.",
  },
  {
    drug_a: "aspirin",
    drug_b: "lisinopril",
    severity: "moderate",
    mechanism:
      "NSAIDs can reduce the antihypertensive effect of ACE inhibitors and impair renal function.",
    evidence:
      "Documented in hypertension management guidelines.",
  },
  {
    drug_a: "aspirin",
    drug_b: "lithium",
    severity: "moderate",
    mechanism:
      "NSAIDs can reduce renal clearance of lithium, raising lithium levels toward toxicity.",
    evidence:
      "Product labeling for lithium warns against combining with NSAIDs without monitoring lithium levels.",
  },
  {
    drug_a: "aspirin",
    drug_b: "losartan",
    severity: "moderate",
    mechanism:
      "NSAIDs can reduce the antihypertensive effect of ARBs and impair renal function.",
    evidence:
      "Documented in hypertension management guidelines.",
  },
  {
    drug_a: "aspirin",
    drug_b: "meloxicam",
    severity: "low",
    mechanism:
      "Combining two NSAIDs adds to GI and renal risk without added therapeutic benefit.",
    evidence:
      "Clinical guidance generally advises against routine use of multiple NSAIDs concurrently.",
  },
  {
    drug_a: "aspirin",
    drug_b: "naproxen",
    severity: "low",
    mechanism:
      "Combining two NSAIDs adds to GI and renal risk without added therapeutic benefit.",
    evidence:
      "Clinical guidance generally advises against routine use of multiple NSAIDs concurrently.",
  },
  {
    drug_a: "aspirin",
    drug_b: "olmesartan",
    severity: "moderate",
    mechanism:
      "NSAIDs can reduce the antihypertensive effect of ARBs and impair renal function.",
    evidence:
      "Documented in hypertension management guidelines.",
  },
  {
    drug_a: "aspirin",
    drug_b: "paroxetine",
    severity: "moderate",
    mechanism:
      "SSRIs combined with NSAIDs may increase risk of GI bleeding due to reduced platelet serotonin uptake.",
    evidence:
      "Observational studies report elevated bleeding risk with SSRI + NSAID combinations.",
  },
  {
    drug_a: "aspirin",
    drug_b: "ramipril",
    severity: "moderate",
    mechanism:
      "NSAIDs can reduce the antihypertensive effect of ACE inhibitors and impair renal function.",
    evidence:
      "Documented in hypertension management guidelines.",
  },
  {
    drug_a: "aspirin",
    drug_b: "rivaroxaban",
    severity: "high",
    mechanism:
      "NSAIDs inhibit platelet aggregation and can displace anticoagulants from protein binding, increasing bleeding risk.",
    evidence:
      "Multiple clinical studies show increased GI bleeding risk when NSAIDs are combined with anticoagulants.",
  },
  {
    drug_a: "aspirin",
    drug_b: "sertraline",
    severity: "moderate",
    mechanism:
      "SSRIs combined with NSAIDs may increase risk of GI bleeding due to reduced platelet serotonin uptake.",
    evidence:
      "Observational studies report elevated bleeding risk with SSRI + NSAID combinations.",
  },
  {
    drug_a: "aspirin",
    drug_b: "valsartan",
    severity: "moderate",
    mechanism:
      "NSAIDs can reduce the antihypertensive effect of ARBs and impair renal function.",
    evidence:
      "Documented in hypertension management guidelines.",
  },
  {
    drug_a: "aspirin",
    drug_b: "warfarin",
    severity: "high",
    mechanism:
      "NSAIDs inhibit platelet aggregation and can displace anticoagulants from protein binding, increasing bleeding risk.",
    evidence:
      "Multiple clinical studies show increased GI bleeding risk when NSAIDs are combined with anticoagulants.",
  },
  {
    drug_a: "atenolol",
    drug_b: "carvedilol",
    severity: "low",
    mechanism:
      "Combining two beta blockers adds to heart-rate-lowering effects without added benefit.",
    evidence:
      "Clinical guidance generally advises against routine use of multiple beta blockers concurrently.",
  },
  {
    drug_a: "atenolol",
    drug_b: "diltiazem",
    severity: "moderate",
    mechanism:
      "Both slow cardiac conduction; combined use can cause excessive bradycardia or heart block.",
    evidence:
      "Clinical guidelines recommend caution and ECG monitoring when combining these agents, particularly non-dihydropyridine calcium channel blockers.",
  },
  {
    drug_a: "atenolol",
    drug_b: "glimepiride",
    severity: "moderate",
    mechanism:
      "Beta blockers can mask the warning signs of hypoglycemia such as tremor and rapid heartbeat.",
    evidence:
      "Clinical guidelines advise caution and closer glucose monitoring when combined.",
  },
  {
    drug_a: "atenolol",
    drug_b: "glipizide",
    severity: "moderate",
    mechanism:
      "Beta blockers can mask the warning signs of hypoglycemia such as tremor and rapid heartbeat.",
    evidence:
      "Clinical guidelines advise caution and closer glucose monitoring when combined.",
  },
  {
    drug_a: "atenolol",
    drug_b: "glyburide",
    severity: "moderate",
    mechanism:
      "Beta blockers can mask the warning signs of hypoglycemia such as tremor and rapid heartbeat.",
    evidence:
      "Clinical guidelines advise caution and closer glucose monitoring when combined.",
  },
  {
    drug_a: "atenolol",
    drug_b: "insulin_glargine",
    severity: "moderate",
    mechanism:
      "Beta blockers can mask the warning signs of hypoglycemia such as tremor and rapid heartbeat.",
    evidence:
      "Clinical guidelines advise caution and closer glucose monitoring when combined.",
  },
  {
    drug_a: "atenolol",
    drug_b: "metformin",
    severity: "moderate",
    mechanism:
      "Beta blockers can mask the warning signs of hypoglycemia such as tremor and rapid heartbeat.",
    evidence:
      "Clinical guidelines advise caution and closer glucose monitoring when combined.",
  },
  {
    drug_a: "atenolol",
    drug_b: "metoprolol",
    severity: "low",
    mechanism:
      "Combining two beta blockers adds to heart-rate-lowering effects without added benefit.",
    evidence:
      "Clinical guidance generally advises against routine use of multiple beta blockers concurrently.",
  },
  {
    drug_a: "atenolol",
    drug_b: "propranolol",
    severity: "low",
    mechanism:
      "Combining two beta blockers adds to heart-rate-lowering effects without added benefit.",
    evidence:
      "Clinical guidance generally advises against routine use of multiple beta blockers concurrently.",
  },
  {
    drug_a: "atenolol",
    drug_b: "verapamil",
    severity: "moderate",
    mechanism:
      "Both slow cardiac conduction; combined use can cause excessive bradycardia or heart block.",
    evidence:
      "Clinical guidelines recommend caution and ECG monitoring when combining these agents, particularly non-dihydropyridine calcium channel blockers.",
  },
  {
    drug_a: "atorvastatin",
    drug_b: "azithromycin",
    severity: "moderate",
    mechanism:
      "Macrolide antibiotics inhibit CYP3A4 metabolism of many statins, raising statin levels and myopathy/rhabdomyolysis risk.",
    evidence:
      "Product labeling for CYP3A4-metabolized statins warns against combining with strong CYP3A4 inhibitors like macrolides.",
  },
  {
    drug_a: "atorvastatin",
    drug_b: "ciprofloxacin",
    severity: "low",
    mechanism:
      "Some evidence suggests a modest additive risk of muscle-related effects when combined.",
    evidence:
      "Evidence is limited; clinical significance is considered minor for most patients.",
  },
  {
    drug_a: "atorvastatin",
    drug_b: "clarithromycin",
    severity: "moderate",
    mechanism:
      "Macrolide antibiotics inhibit CYP3A4 metabolism of many statins, raising statin levels and myopathy/rhabdomyolysis risk.",
    evidence:
      "Product labeling for CYP3A4-metabolized statins warns against combining with strong CYP3A4 inhibitors like macrolides.",
  },
  {
    drug_a: "atorvastatin",
    drug_b: "erythromycin",
    severity: "moderate",
    mechanism:
      "Macrolide antibiotics inhibit CYP3A4 metabolism of many statins, raising statin levels and myopathy/rhabdomyolysis risk.",
    evidence:
      "Product labeling for CYP3A4-metabolized statins warns against combining with strong CYP3A4 inhibitors like macrolides.",
  },
  {
    drug_a: "atorvastatin",
    drug_b: "levofloxacin",
    severity: "low",
    mechanism:
      "Some evidence suggests a modest additive risk of muscle-related effects when combined.",
    evidence:
      "Evidence is limited; clinical significance is considered minor for most patients.",
  },
  {
    drug_a: "azithromycin",
    drug_b: "digoxin",
    severity: "moderate",
    mechanism:
      "Some macrolides can raise digoxin levels via reduced gut metabolism, increasing toxicity risk.",
    evidence:
      "Product labeling for digoxin notes elevated levels when combined with certain macrolides.",
  },
  {
    drug_a: "azithromycin",
    drug_b: "lovastatin",
    severity: "moderate",
    mechanism:
      "Macrolide antibiotics inhibit CYP3A4 metabolism of many statins, raising statin levels and myopathy/rhabdomyolysis risk.",
    evidence:
      "Product labeling for CYP3A4-metabolized statins warns against combining with strong CYP3A4 inhibitors like macrolides.",
  },
  {
    drug_a: "azithromycin",
    drug_b: "pravastatin",
    severity: "moderate",
    mechanism:
      "Macrolide antibiotics inhibit CYP3A4 metabolism of many statins, raising statin levels and myopathy/rhabdomyolysis risk.",
    evidence:
      "Product labeling for CYP3A4-metabolized statins warns against combining with strong CYP3A4 inhibitors like macrolides.",
  },
  {
    drug_a: "azithromycin",
    drug_b: "rosuvastatin",
    severity: "moderate",
    mechanism:
      "Macrolide antibiotics inhibit CYP3A4 metabolism of many statins, raising statin levels and myopathy/rhabdomyolysis risk.",
    evidence:
      "Product labeling for CYP3A4-metabolized statins warns against combining with strong CYP3A4 inhibitors like macrolides.",
  },
  {
    drug_a: "azithromycin",
    drug_b: "simvastatin",
    severity: "moderate",
    mechanism:
      "Macrolide antibiotics inhibit CYP3A4 metabolism of many statins, raising statin levels and myopathy/rhabdomyolysis risk.",
    evidence:
      "Product labeling for CYP3A4-metabolized statins warns against combining with strong CYP3A4 inhibitors like macrolides.",
  },
  {
    drug_a: "captopril",
    drug_b: "celecoxib",
    severity: "moderate",
    mechanism:
      "NSAIDs can reduce the antihypertensive effect of ACE inhibitors and impair renal function.",
    evidence:
      "Documented in hypertension management guidelines.",
  },
  {
    drug_a: "captopril",
    drug_b: "diclofenac",
    severity: "moderate",
    mechanism:
      "NSAIDs can reduce the antihypertensive effect of ACE inhibitors and impair renal function.",
    evidence:
      "Documented in hypertension management guidelines.",
  },
  {
    drug_a: "captopril",
    drug_b: "ibuprofen",
    severity: "moderate",
    mechanism:
      "NSAIDs can reduce the antihypertensive effect of ACE inhibitors and impair renal function.",
    evidence:
      "Documented in hypertension management guidelines.",
  },
  {
    drug_a: "captopril",
    drug_b: "indomethacin",
    severity: "moderate",
    mechanism:
      "NSAIDs can reduce the antihypertensive effect of ACE inhibitors and impair renal function.",
    evidence:
      "Documented in hypertension management guidelines.",
  },
  {
    drug_a: "captopril",
    drug_b: "irbesartan",
    severity: "moderate",
    mechanism:
      "Dual blockade of the renin-angiotensin system can increase risk of hyperkalemia and hypotension.",
    evidence:
      "Guidelines generally recommend against combining ACE inhibitors with ARBs.",
  },
  {
    drug_a: "captopril",
    drug_b: "ketorolac",
    severity: "moderate",
    mechanism:
      "NSAIDs can reduce the antihypertensive effect of ACE inhibitors and impair renal function.",
    evidence:
      "Documented in hypertension management guidelines.",
  },
  {
    drug_a: "captopril",
    drug_b: "lithium",
    severity: "moderate",
    mechanism:
      "ACE inhibitors can reduce renal clearance of lithium, raising lithium levels toward toxicity.",
    evidence:
      "Product labeling for lithium warns against combining with ACE inhibitors without monitoring lithium levels.",
  },
  {
    drug_a: "captopril",
    drug_b: "losartan",
    severity: "moderate",
    mechanism:
      "Dual blockade of the renin-angiotensin system can increase risk of hyperkalemia and hypotension.",
    evidence:
      "Guidelines generally recommend against combining ACE inhibitors with ARBs.",
  },
  {
    drug_a: "captopril",
    drug_b: "meloxicam",
    severity: "moderate",
    mechanism:
      "NSAIDs can reduce the antihypertensive effect of ACE inhibitors and impair renal function.",
    evidence:
      "Documented in hypertension management guidelines.",
  },
  {
    drug_a: "captopril",
    drug_b: "naproxen",
    severity: "moderate",
    mechanism:
      "NSAIDs can reduce the antihypertensive effect of ACE inhibitors and impair renal function.",
    evidence:
      "Documented in hypertension management guidelines.",
  },
  {
    drug_a: "captopril",
    drug_b: "olmesartan",
    severity: "moderate",
    mechanism:
      "Dual blockade of the renin-angiotensin system can increase risk of hyperkalemia and hypotension.",
    evidence:
      "Guidelines generally recommend against combining ACE inhibitors with ARBs.",
  },
  {
    drug_a: "captopril",
    drug_b: "spironolactone",
    severity: "moderate",
    mechanism:
      "Both raise serum potassium; combined use increases the risk of hyperkalemia.",
    evidence:
      "Clinical monitoring guidelines recommend checking potassium when combining these agents.",
  },
  {
    drug_a: "captopril",
    drug_b: "valsartan",
    severity: "moderate",
    mechanism:
      "Dual blockade of the renin-angiotensin system can increase risk of hyperkalemia and hypotension.",
    evidence:
      "Guidelines generally recommend against combining ACE inhibitors with ARBs.",
  },
  {
    drug_a: "carbamazepine",
    drug_b: "dabigatran",
    severity: "moderate",
    mechanism:
      "Several antiepileptics induce hepatic enzymes that alter anticoagulant metabolism, making dosing harder to stabilize.",
    evidence:
      "Guidelines recommend close INR monitoring when combining enzyme-inducing antiepileptics with anticoagulants.",
  },
  {
    drug_a: "carbamazepine",
    drug_b: "gabapentin",
    severity: "low",
    mechanism:
      "Combining certain antiepileptics can alter one another's blood levels via shared metabolic pathways.",
    evidence:
      "Product labeling recommends monitoring levels when combining these agents.",
  },
  {
    drug_a: "carbamazepine",
    drug_b: "heparin",
    severity: "moderate",
    mechanism:
      "Several antiepileptics induce hepatic enzymes that alter anticoagulant metabolism, making dosing harder to stabilize.",
    evidence:
      "Guidelines recommend close INR monitoring when combining enzyme-inducing antiepileptics with anticoagulants.",
  },
  {
    drug_a: "carbamazepine",
    drug_b: "lamotrigine",
    severity: "low",
    mechanism:
      "Combining certain antiepileptics can alter one another's blood levels via shared metabolic pathways.",
    evidence:
      "Product labeling recommends monitoring levels when combining these agents.",
  },
  {
    drug_a: "carbamazepine",
    drug_b: "phenytoin",
    severity: "low",
    mechanism:
      "Combining certain antiepileptics can alter one another's blood levels via shared metabolic pathways.",
    evidence:
      "Product labeling recommends monitoring levels when combining these agents.",
  },
  {
    drug_a: "carbamazepine",
    drug_b: "rivaroxaban",
    severity: "moderate",
    mechanism:
      "Several antiepileptics induce hepatic enzymes that alter anticoagulant metabolism, making dosing harder to stabilize.",
    evidence:
      "Guidelines recommend close INR monitoring when combining enzyme-inducing antiepileptics with anticoagulants.",
  },
  {
    drug_a: "carbamazepine",
    drug_b: "valproate",
    severity: "low",
    mechanism:
      "Combining certain antiepileptics can alter one another's blood levels via shared metabolic pathways.",
    evidence:
      "Product labeling recommends monitoring levels when combining these agents.",
  },
  {
    drug_a: "carbamazepine",
    drug_b: "warfarin",
    severity: "moderate",
    mechanism:
      "Several antiepileptics induce hepatic enzymes that alter anticoagulant metabolism, making dosing harder to stabilize.",
    evidence:
      "Guidelines recommend close INR monitoring when combining enzyme-inducing antiepileptics with anticoagulants.",
  },
  {
    drug_a: "carvedilol",
    drug_b: "diltiazem",
    severity: "moderate",
    mechanism:
      "Both slow cardiac conduction; combined use can cause excessive bradycardia or heart block.",
    evidence:
      "Clinical guidelines recommend caution and ECG monitoring when combining these agents, particularly non-dihydropyridine calcium channel blockers.",
  },
  {
    drug_a: "carvedilol",
    drug_b: "glimepiride",
    severity: "moderate",
    mechanism:
      "Beta blockers can mask the warning signs of hypoglycemia such as tremor and rapid heartbeat.",
    evidence:
      "Clinical guidelines advise caution and closer glucose monitoring when combined.",
  },
  {
    drug_a: "carvedilol",
    drug_b: "glipizide",
    severity: "moderate",
    mechanism:
      "Beta blockers can mask the warning signs of hypoglycemia such as tremor and rapid heartbeat.",
    evidence:
      "Clinical guidelines advise caution and closer glucose monitoring when combined.",
  },
  {
    drug_a: "carvedilol",
    drug_b: "glyburide",
    severity: "moderate",
    mechanism:
      "Beta blockers can mask the warning signs of hypoglycemia such as tremor and rapid heartbeat.",
    evidence:
      "Clinical guidelines advise caution and closer glucose monitoring when combined.",
  },
  {
    drug_a: "carvedilol",
    drug_b: "insulin_glargine",
    severity: "moderate",
    mechanism:
      "Beta blockers can mask the warning signs of hypoglycemia such as tremor and rapid heartbeat.",
    evidence:
      "Clinical guidelines advise caution and closer glucose monitoring when combined.",
  },
  {
    drug_a: "carvedilol",
    drug_b: "metformin",
    severity: "moderate",
    mechanism:
      "Beta blockers can mask the warning signs of hypoglycemia such as tremor and rapid heartbeat.",
    evidence:
      "Clinical guidelines advise caution and closer glucose monitoring when combined.",
  },
  {
    drug_a: "carvedilol",
    drug_b: "metoprolol",
    severity: "low",
    mechanism:
      "Combining two beta blockers adds to heart-rate-lowering effects without added benefit.",
    evidence:
      "Clinical guidance generally advises against routine use of multiple beta blockers concurrently.",
  },
  {
    drug_a: "carvedilol",
    drug_b: "propranolol",
    severity: "low",
    mechanism:
      "Combining two beta blockers adds to heart-rate-lowering effects without added benefit.",
    evidence:
      "Clinical guidance generally advises against routine use of multiple beta blockers concurrently.",
  },
  {
    drug_a: "carvedilol",
    drug_b: "verapamil",
    severity: "moderate",
    mechanism:
      "Both slow cardiac conduction; combined use can cause excessive bradycardia or heart block.",
    evidence:
      "Clinical guidelines recommend caution and ECG monitoring when combining these agents, particularly non-dihydropyridine calcium channel blockers.",
  },
  {
    drug_a: "celecoxib",
    drug_b: "citalopram",
    severity: "moderate",
    mechanism:
      "SSRIs combined with NSAIDs may increase risk of GI bleeding due to reduced platelet serotonin uptake.",
    evidence:
      "Observational studies report elevated bleeding risk with SSRI + NSAID combinations.",
  },
  {
    drug_a: "celecoxib",
    drug_b: "clopidogrel",
    severity: "moderate",
    mechanism:
      "NSAIDs may add to the antiplatelet effect and irritate the GI lining, raising bleeding risk.",
    evidence:
      "Observational studies report elevated bleeding risk with antiplatelet + NSAID combinations.",
  },
  {
    drug_a: "celecoxib",
    drug_b: "dabigatran",
    severity: "high",
    mechanism:
      "NSAIDs inhibit platelet aggregation and can displace anticoagulants from protein binding, increasing bleeding risk.",
    evidence:
      "Multiple clinical studies show increased GI bleeding risk when NSAIDs are combined with anticoagulants.",
  },
  {
    drug_a: "celecoxib",
    drug_b: "diclofenac",
    severity: "low",
    mechanism:
      "Combining two NSAIDs adds to GI and renal risk without added therapeutic benefit.",
    evidence:
      "Clinical guidance generally advises against routine use of multiple NSAIDs concurrently.",
  },
  {
    drug_a: "celecoxib",
    drug_b: "enalapril",
    severity: "moderate",
    mechanism:
      "NSAIDs can reduce the antihypertensive effect of ACE inhibitors and impair renal function.",
    evidence:
      "Documented in hypertension management guidelines.",
  },
  {
    drug_a: "celecoxib",
    drug_b: "escitalopram",
    severity: "moderate",
    mechanism:
      "SSRIs combined with NSAIDs may increase risk of GI bleeding due to reduced platelet serotonin uptake.",
    evidence:
      "Observational studies report elevated bleeding risk with SSRI + NSAID combinations.",
  },
  {
    drug_a: "celecoxib",
    drug_b: "fluoxetine",
    severity: "moderate",
    mechanism:
      "SSRIs combined with NSAIDs may increase risk of GI bleeding due to reduced platelet serotonin uptake.",
    evidence:
      "Observational studies report elevated bleeding risk with SSRI + NSAID combinations.",
  },
  {
    drug_a: "celecoxib",
    drug_b: "heparin",
    severity: "high",
    mechanism:
      "NSAIDs inhibit platelet aggregation and can displace anticoagulants from protein binding, increasing bleeding risk.",
    evidence:
      "Multiple clinical studies show increased GI bleeding risk when NSAIDs are combined with anticoagulants.",
  },
  {
    drug_a: "celecoxib",
    drug_b: "ibuprofen",
    severity: "low",
    mechanism:
      "Combining two NSAIDs adds to GI and renal risk without added therapeutic benefit.",
    evidence:
      "Clinical guidance generally advises against routine use of multiple NSAIDs concurrently.",
  },
  {
    drug_a: "celecoxib",
    drug_b: "indomethacin",
    severity: "low",
    mechanism:
      "Combining two NSAIDs adds to GI and renal risk without added therapeutic benefit.",
    evidence:
      "Clinical guidance generally advises against routine use of multiple NSAIDs concurrently.",
  },
  {
    drug_a: "celecoxib",
    drug_b: "irbesartan",
    severity: "moderate",
    mechanism:
      "NSAIDs can reduce the antihypertensive effect of ARBs and impair renal function.",
    evidence:
      "Documented in hypertension management guidelines.",
  },
  {
    drug_a: "celecoxib",
    drug_b: "ketorolac",
    severity: "low",
    mechanism:
      "Combining two NSAIDs adds to GI and renal risk without added therapeutic benefit.",
    evidence:
      "Clinical guidance generally advises against routine use of multiple NSAIDs concurrently.",
  },
  {
    drug_a: "celecoxib",
    drug_b: "lisinopril",
    severity: "moderate",
    mechanism:
      "NSAIDs can reduce the antihypertensive effect of ACE inhibitors and impair renal function.",
    evidence:
      "Documented in hypertension management guidelines.",
  },
  {
    drug_a: "celecoxib",
    drug_b: "lithium",
    severity: "moderate",
    mechanism:
      "NSAIDs can reduce renal clearance of lithium, raising lithium levels toward toxicity.",
    evidence:
      "Product labeling for lithium warns against combining with NSAIDs without monitoring lithium levels.",
  },
  {
    drug_a: "celecoxib",
    drug_b: "losartan",
    severity: "moderate",
    mechanism:
      "NSAIDs can reduce the antihypertensive effect of ARBs and impair renal function.",
    evidence:
      "Documented in hypertension management guidelines.",
  },
  {
    drug_a: "celecoxib",
    drug_b: "meloxicam",
    severity: "low",
    mechanism:
      "Combining two NSAIDs adds to GI and renal risk without added therapeutic benefit.",
    evidence:
      "Clinical guidance generally advises against routine use of multiple NSAIDs concurrently.",
  },
  {
    drug_a: "celecoxib",
    drug_b: "naproxen",
    severity: "low",
    mechanism:
      "Combining two NSAIDs adds to GI and renal risk without added therapeutic benefit.",
    evidence:
      "Clinical guidance generally advises against routine use of multiple NSAIDs concurrently.",
  },
  {
    drug_a: "celecoxib",
    drug_b: "olmesartan",
    severity: "moderate",
    mechanism:
      "NSAIDs can reduce the antihypertensive effect of ARBs and impair renal function.",
    evidence:
      "Documented in hypertension management guidelines.",
  },
  {
    drug_a: "celecoxib",
    drug_b: "paroxetine",
    severity: "moderate",
    mechanism:
      "SSRIs combined with NSAIDs may increase risk of GI bleeding due to reduced platelet serotonin uptake.",
    evidence:
      "Observational studies report elevated bleeding risk with SSRI + NSAID combinations.",
  },
  {
    drug_a: "celecoxib",
    drug_b: "ramipril",
    severity: "moderate",
    mechanism:
      "NSAIDs can reduce the antihypertensive effect of ACE inhibitors and impair renal function.",
    evidence:
      "Documented in hypertension management guidelines.",
  },
  {
    drug_a: "celecoxib",
    drug_b: "rivaroxaban",
    severity: "high",
    mechanism:
      "NSAIDs inhibit platelet aggregation and can displace anticoagulants from protein binding, increasing bleeding risk.",
    evidence:
      "Multiple clinical studies show increased GI bleeding risk when NSAIDs are combined with anticoagulants.",
  },
  {
    drug_a: "celecoxib",
    drug_b: "sertraline",
    severity: "moderate",
    mechanism:
      "SSRIs combined with NSAIDs may increase risk of GI bleeding due to reduced platelet serotonin uptake.",
    evidence:
      "Observational studies report elevated bleeding risk with SSRI + NSAID combinations.",
  },
  {
    drug_a: "celecoxib",
    drug_b: "valsartan",
    severity: "moderate",
    mechanism:
      "NSAIDs can reduce the antihypertensive effect of ARBs and impair renal function.",
    evidence:
      "Documented in hypertension management guidelines.",
  },
  {
    drug_a: "celecoxib",
    drug_b: "warfarin",
    severity: "high",
    mechanism:
      "NSAIDs inhibit platelet aggregation and can displace anticoagulants from protein binding, increasing bleeding risk.",
    evidence:
      "Multiple clinical studies show increased GI bleeding risk when NSAIDs are combined with anticoagulants.",
  },
  {
    drug_a: "ciprofloxacin",
    drug_b: "lovastatin",
    severity: "low",
    mechanism:
      "Some evidence suggests a modest additive risk of muscle-related effects when combined.",
    evidence:
      "Evidence is limited; clinical significance is considered minor for most patients.",
  },
  {
    drug_a: "ciprofloxacin",
    drug_b: "pravastatin",
    severity: "low",
    mechanism:
      "Some evidence suggests a modest additive risk of muscle-related effects when combined.",
    evidence:
      "Evidence is limited; clinical significance is considered minor for most patients.",
  },
  {
    drug_a: "ciprofloxacin",
    drug_b: "rosuvastatin",
    severity: "low",
    mechanism:
      "Some evidence suggests a modest additive risk of muscle-related effects when combined.",
    evidence:
      "Evidence is limited; clinical significance is considered minor for most patients.",
  },
  {
    drug_a: "ciprofloxacin",
    drug_b: "simvastatin",
    severity: "low",
    mechanism:
      "Some evidence suggests a modest additive risk of muscle-related effects when combined.",
    evidence:
      "Evidence is limited; clinical significance is considered minor for most patients.",
  },
  {
    drug_a: "citalopram",
    drug_b: "dabigatran",
    severity: "moderate",
    mechanism:
      "SSRIs impair platelet aggregation and, combined with anticoagulants, can further raise bleeding risk.",
    evidence:
      "Cohort studies report increased bleeding events with SSRI + anticoagulant combinations.",
  },
  {
    drug_a: "citalopram",
    drug_b: "diclofenac",
    severity: "moderate",
    mechanism:
      "SSRIs combined with NSAIDs may increase risk of GI bleeding due to reduced platelet serotonin uptake.",
    evidence:
      "Observational studies report elevated bleeding risk with SSRI + NSAID combinations.",
  },
  {
    drug_a: "citalopram",
    drug_b: "heparin",
    severity: "moderate",
    mechanism:
      "SSRIs impair platelet aggregation and, combined with anticoagulants, can further raise bleeding risk.",
    evidence:
      "Cohort studies report increased bleeding events with SSRI + anticoagulant combinations.",
  },
  {
    drug_a: "citalopram",
    drug_b: "ibuprofen",
    severity: "moderate",
    mechanism:
      "SSRIs combined with NSAIDs may increase risk of GI bleeding due to reduced platelet serotonin uptake.",
    evidence:
      "Observational studies report elevated bleeding risk with SSRI + NSAID combinations.",
  },
  {
    drug_a: "citalopram",
    drug_b: "indomethacin",
    severity: "moderate",
    mechanism:
      "SSRIs combined with NSAIDs may increase risk of GI bleeding due to reduced platelet serotonin uptake.",
    evidence:
      "Observational studies report elevated bleeding risk with SSRI + NSAID combinations.",
  },
  {
    drug_a: "citalopram",
    drug_b: "ketorolac",
    severity: "moderate",
    mechanism:
      "SSRIs combined with NSAIDs may increase risk of GI bleeding due to reduced platelet serotonin uptake.",
    evidence:
      "Observational studies report elevated bleeding risk with SSRI + NSAID combinations.",
  },
  {
    drug_a: "citalopram",
    drug_b: "meloxicam",
    severity: "moderate",
    mechanism:
      "SSRIs combined with NSAIDs may increase risk of GI bleeding due to reduced platelet serotonin uptake.",
    evidence:
      "Observational studies report elevated bleeding risk with SSRI + NSAID combinations.",
  },
  {
    drug_a: "citalopram",
    drug_b: "naproxen",
    severity: "moderate",
    mechanism:
      "SSRIs combined with NSAIDs may increase risk of GI bleeding due to reduced platelet serotonin uptake.",
    evidence:
      "Observational studies report elevated bleeding risk with SSRI + NSAID combinations.",
  },
  {
    drug_a: "citalopram",
    drug_b: "phenelzine",
    severity: "high",
    mechanism:
      "Both increase serotonin activity; combining them can precipitate serotonin syndrome.",
    evidence:
      "FDA labeling contraindicates combining SSRIs with MAOIs due to serotonergic effects.",
  },
  {
    drug_a: "citalopram",
    drug_b: "rivaroxaban",
    severity: "moderate",
    mechanism:
      "SSRIs impair platelet aggregation and, combined with anticoagulants, can further raise bleeding risk.",
    evidence:
      "Cohort studies report increased bleeding events with SSRI + anticoagulant combinations.",
  },
  {
    drug_a: "citalopram",
    drug_b: "tramadol",
    severity: "high",
    mechanism:
      "Both increase serotonin activity, raising the risk of serotonin syndrome.",
    evidence:
      "FDA labeling warns against combining SSRIs with other serotonergic agents such as tramadol.",
  },
  {
    drug_a: "citalopram",
    drug_b: "tranylcypromine",
    severity: "high",
    mechanism:
      "Both increase serotonin activity; combining them can precipitate serotonin syndrome.",
    evidence:
      "FDA labeling contraindicates combining SSRIs with MAOIs due to serotonergic effects.",
  },
  {
    drug_a: "citalopram",
    drug_b: "trazodone",
    severity: "high",
    mechanism:
      "Both increase serotonin activity, raising the risk of serotonin syndrome.",
    evidence:
      "FDA labeling warns against combining SSRIs with other serotonergic agents such as tramadol.",
  },
  {
    drug_a: "citalopram",
    drug_b: "warfarin",
    severity: "moderate",
    mechanism:
      "SSRIs impair platelet aggregation and, combined with anticoagulants, can further raise bleeding risk.",
    evidence:
      "Cohort studies report increased bleeding events with SSRI + anticoagulant combinations.",
  },
  {
    drug_a: "clarithromycin",
    drug_b: "digoxin",
    severity: "moderate",
    mechanism:
      "Some macrolides can raise digoxin levels via reduced gut metabolism, increasing toxicity risk.",
    evidence:
      "Product labeling for digoxin notes elevated levels when combined with certain macrolides.",
  },
  {
    drug_a: "clarithromycin",
    drug_b: "lovastatin",
    severity: "moderate",
    mechanism:
      "Macrolide antibiotics inhibit CYP3A4 metabolism of many statins, raising statin levels and myopathy/rhabdomyolysis risk.",
    evidence:
      "Product labeling for CYP3A4-metabolized statins warns against combining with strong CYP3A4 inhibitors like macrolides.",
  },
  {
    drug_a: "clarithromycin",
    drug_b: "pravastatin",
    severity: "moderate",
    mechanism:
      "Macrolide antibiotics inhibit CYP3A4 metabolism of many statins, raising statin levels and myopathy/rhabdomyolysis risk.",
    evidence:
      "Product labeling for CYP3A4-metabolized statins warns against combining with strong CYP3A4 inhibitors like macrolides.",
  },
  {
    drug_a: "clarithromycin",
    drug_b: "rosuvastatin",
    severity: "moderate",
    mechanism:
      "Macrolide antibiotics inhibit CYP3A4 metabolism of many statins, raising statin levels and myopathy/rhabdomyolysis risk.",
    evidence:
      "Product labeling for CYP3A4-metabolized statins warns against combining with strong CYP3A4 inhibitors like macrolides.",
  },
  {
    drug_a: "clarithromycin",
    drug_b: "simvastatin",
    severity: "moderate",
    mechanism:
      "Macrolide antibiotics inhibit CYP3A4 metabolism of many statins, raising statin levels and myopathy/rhabdomyolysis risk.",
    evidence:
      "Product labeling for CYP3A4-metabolized statins warns against combining with strong CYP3A4 inhibitors like macrolides.",
  },
  {
    drug_a: "clonazepam",
    drug_b: "codeine",
    severity: "high",
    mechanism:
      "Both depress the central nervous system; combined use significantly raises the risk of profound sedation and fatal respiratory depression.",
    evidence:
      "FDA boxed warning specifically addresses the combination of opioids and benzodiazepines.",
  },
  {
    drug_a: "clonazepam",
    drug_b: "cyclobenzaprine",
    severity: "moderate",
    mechanism:
      "Both cause CNS depression; combined use increases sedation and fall risk.",
    evidence:
      "Clinical guidance flags this combination for increased sedation risk, particularly in older adults.",
  },
  {
    drug_a: "clonazepam",
    drug_b: "diazepam",
    severity: "high",
    mechanism:
      "Additive central nervous system depression from combining two benzodiazepines.",
    evidence:
      "Clinical guidance advises against concurrent benzodiazepine use due to sedation and respiratory depression risk.",
  },
  {
    drug_a: "clonazepam",
    drug_b: "diphenhydramine",
    severity: "moderate",
    mechanism:
      "Both cause CNS depression; combined use increases sedation and impairs alertness.",
    evidence:
      "Product labeling for sedating antihistamines warns against combining with other CNS depressants.",
  },
  {
    drug_a: "clonazepam",
    drug_b: "eszopiclone",
    severity: "high",
    mechanism:
      "Additive CNS depression between benzodiazepines and non-benzodiazepine hypnotics increases sedation and fall risk.",
    evidence:
      "Clinical guidance recommends avoiding concurrent use of multiple sedative-hypnotic agents.",
  },
  {
    drug_a: "clonazepam",
    drug_b: "fentanyl",
    severity: "high",
    mechanism:
      "Both depress the central nervous system; combined use significantly raises the risk of profound sedation and fatal respiratory depression.",
    evidence:
      "FDA boxed warning specifically addresses the combination of opioids and benzodiazepines.",
  },
  {
    drug_a: "clonazepam",
    drug_b: "hydrocodone",
    severity: "high",
    mechanism:
      "Both depress the central nervous system; combined use significantly raises the risk of profound sedation and fatal respiratory depression.",
    evidence:
      "FDA boxed warning specifically addresses the combination of opioids and benzodiazepines.",
  },
  {
    drug_a: "clonazepam",
    drug_b: "lorazepam",
    severity: "high",
    mechanism:
      "Additive central nervous system depression from combining two benzodiazepines.",
    evidence:
      "Clinical guidance advises against concurrent benzodiazepine use due to sedation and respiratory depression risk.",
  },
  {
    drug_a: "clonazepam",
    drug_b: "morphine",
    severity: "high",
    mechanism:
      "Both depress the central nervous system; combined use significantly raises the risk of profound sedation and fatal respiratory depression.",
    evidence:
      "FDA boxed warning specifically addresses the combination of opioids and benzodiazepines.",
  },
  {
    drug_a: "clonazepam",
    drug_b: "olanzapine",
    severity: "moderate",
    mechanism:
      "Both cause CNS depression; combined use increases sedation and, in vulnerable patients, respiratory depression risk.",
    evidence:
      "Clinical guidance recommends caution when combining antipsychotics with benzodiazepines, especially in older adults.",
  },
  {
    drug_a: "clonazepam",
    drug_b: "oxycodone",
    severity: "high",
    mechanism:
      "Both depress the central nervous system; combined use significantly raises the risk of profound sedation and fatal respiratory depression.",
    evidence:
      "FDA boxed warning specifically addresses the combination of opioids and benzodiazepines.",
  },
  {
    drug_a: "clonazepam",
    drug_b: "quetiapine",
    severity: "moderate",
    mechanism:
      "Both cause CNS depression; combined use increases sedation and, in vulnerable patients, respiratory depression risk.",
    evidence:
      "Clinical guidance recommends caution when combining antipsychotics with benzodiazepines, especially in older adults.",
  },
  {
    drug_a: "clonazepam",
    drug_b: "risperidone",
    severity: "moderate",
    mechanism:
      "Both cause CNS depression; combined use increases sedation and, in vulnerable patients, respiratory depression risk.",
    evidence:
      "Clinical guidance recommends caution when combining antipsychotics with benzodiazepines, especially in older adults.",
  },
  {
    drug_a: "clonazepam",
    drug_b: "temazepam",
    severity: "high",
    mechanism:
      "Additive central nervous system depression from combining two benzodiazepines.",
    evidence:
      "Clinical guidance advises against concurrent benzodiazepine use due to sedation and respiratory depression risk.",
  },
  {
    drug_a: "clonazepam",
    drug_b: "zolpidem",
    severity: "high",
    mechanism:
      "Additive CNS depression between benzodiazepines and non-benzodiazepine hypnotics increases sedation and fall risk.",
    evidence:
      "Clinical guidance recommends avoiding concurrent use of multiple sedative-hypnotic agents.",
  },
  {
    drug_a: "clopidogrel",
    drug_b: "dabigatran",
    severity: "high",
    mechanism:
      "Combined anticoagulant and antiplatelet effects substantially increase bleeding risk.",
    evidence:
      "Well documented in anticoagulation therapy guidelines; concurrent use requires close monitoring.",
  },
  {
    drug_a: "clopidogrel",
    drug_b: "diclofenac",
    severity: "moderate",
    mechanism:
      "NSAIDs may add to the antiplatelet effect and irritate the GI lining, raising bleeding risk.",
    evidence:
      "Observational studies report elevated bleeding risk with antiplatelet + NSAID combinations.",
  },
  {
    drug_a: "clopidogrel",
    drug_b: "esomeprazole",
    severity: "moderate",
    mechanism:
      "Certain PPIs inhibit CYP2C19, reducing conversion of clopidogrel to its active metabolite.",
    evidence:
      "FDA warning recommends avoiding concomitant use of CYP2C19-inhibiting PPIs with clopidogrel when possible.",
  },
  {
    drug_a: "clopidogrel",
    drug_b: "heparin",
    severity: "high",
    mechanism:
      "Combined anticoagulant and antiplatelet effects substantially increase bleeding risk.",
    evidence:
      "Well documented in anticoagulation therapy guidelines; concurrent use requires close monitoring.",
  },
  {
    drug_a: "clopidogrel",
    drug_b: "ibuprofen",
    severity: "moderate",
    mechanism:
      "NSAIDs may add to the antiplatelet effect and irritate the GI lining, raising bleeding risk.",
    evidence:
      "Observational studies report elevated bleeding risk with antiplatelet + NSAID combinations.",
  },
  {
    drug_a: "clopidogrel",
    drug_b: "indomethacin",
    severity: "moderate",
    mechanism:
      "NSAIDs may add to the antiplatelet effect and irritate the GI lining, raising bleeding risk.",
    evidence:
      "Observational studies report elevated bleeding risk with antiplatelet + NSAID combinations.",
  },
  {
    drug_a: "clopidogrel",
    drug_b: "ketorolac",
    severity: "moderate",
    mechanism:
      "NSAIDs may add to the antiplatelet effect and irritate the GI lining, raising bleeding risk.",
    evidence:
      "Observational studies report elevated bleeding risk with antiplatelet + NSAID combinations.",
  },
  {
    drug_a: "clopidogrel",
    drug_b: "lansoprazole",
    severity: "moderate",
    mechanism:
      "Certain PPIs inhibit CYP2C19, reducing conversion of clopidogrel to its active metabolite.",
    evidence:
      "FDA warning recommends avoiding concomitant use of CYP2C19-inhibiting PPIs with clopidogrel when possible.",
  },
  {
    drug_a: "clopidogrel",
    drug_b: "meloxicam",
    severity: "moderate",
    mechanism:
      "NSAIDs may add to the antiplatelet effect and irritate the GI lining, raising bleeding risk.",
    evidence:
      "Observational studies report elevated bleeding risk with antiplatelet + NSAID combinations.",
  },
  {
    drug_a: "clopidogrel",
    drug_b: "naproxen",
    severity: "moderate",
    mechanism:
      "NSAIDs may add to the antiplatelet effect and irritate the GI lining, raising bleeding risk.",
    evidence:
      "Observational studies report elevated bleeding risk with antiplatelet + NSAID combinations.",
  },
  {
    drug_a: "clopidogrel",
    drug_b: "omeprazole",
    severity: "moderate",
    mechanism:
      "Certain PPIs inhibit CYP2C19, reducing conversion of clopidogrel to its active metabolite.",
    evidence:
      "FDA warning recommends avoiding concomitant use of CYP2C19-inhibiting PPIs with clopidogrel when possible.",
  },
  {
    drug_a: "clopidogrel",
    drug_b: "pantoprazole",
    severity: "moderate",
    mechanism:
      "Certain PPIs inhibit CYP2C19, reducing conversion of clopidogrel to its active metabolite.",
    evidence:
      "FDA warning recommends avoiding concomitant use of CYP2C19-inhibiting PPIs with clopidogrel when possible.",
  },
  {
    drug_a: "clopidogrel",
    drug_b: "rivaroxaban",
    severity: "high",
    mechanism:
      "Combined anticoagulant and antiplatelet effects substantially increase bleeding risk.",
    evidence:
      "Well documented in anticoagulation therapy guidelines; concurrent use requires close monitoring.",
  },
  {
    drug_a: "clopidogrel",
    drug_b: "warfarin",
    severity: "high",
    mechanism:
      "Combined anticoagulant and antiplatelet effects substantially increase bleeding risk.",
    evidence:
      "Well documented in anticoagulation therapy guidelines; concurrent use requires close monitoring.",
  },
  {
    drug_a: "codeine",
    drug_b: "cyclobenzaprine",
    severity: "moderate",
    mechanism:
      "Both cause CNS depression; combined use increases sedation and fall risk.",
    evidence:
      "Clinical guidance flags this combination for increased sedation risk, particularly in older adults.",
  },
  {
    drug_a: "codeine",
    drug_b: "diazepam",
    severity: "high",
    mechanism:
      "Both depress the central nervous system; combined use significantly raises the risk of profound sedation and fatal respiratory depression.",
    evidence:
      "FDA boxed warning specifically addresses the combination of opioids and benzodiazepines.",
  },
  {
    drug_a: "codeine",
    drug_b: "diphenhydramine",
    severity: "moderate",
    mechanism:
      "Both cause CNS depression; combined use increases sedation and fall risk, especially in older adults.",
    evidence:
      "Clinical guidance flags this combination for increased sedation risk.",
  },
  {
    drug_a: "codeine",
    drug_b: "eszopiclone",
    severity: "high",
    mechanism:
      "Both depress the central nervous system, increasing sedation and respiratory depression risk.",
    evidence:
      "FDA labeling warns against combining opioids with sedative-hypnotics.",
  },
  {
    drug_a: "codeine",
    drug_b: "fentanyl",
    severity: "moderate",
    mechanism:
      "Combining two opioids adds to central nervous system and respiratory depression without clear added benefit.",
    evidence:
      "Clinical guidelines advise against routinely combining multiple opioid agents outside specialist supervision.",
  },
  {
    drug_a: "codeine",
    drug_b: "hydrocodone",
    severity: "moderate",
    mechanism:
      "Combining two opioids adds to central nervous system and respiratory depression without clear added benefit.",
    evidence:
      "Clinical guidelines advise against routinely combining multiple opioid agents outside specialist supervision.",
  },
  {
    drug_a: "codeine",
    drug_b: "lorazepam",
    severity: "high",
    mechanism:
      "Both depress the central nervous system; combined use significantly raises the risk of profound sedation and fatal respiratory depression.",
    evidence:
      "FDA boxed warning specifically addresses the combination of opioids and benzodiazepines.",
  },
  {
    drug_a: "codeine",
    drug_b: "morphine",
    severity: "moderate",
    mechanism:
      "Combining two opioids adds to central nervous system and respiratory depression without clear added benefit.",
    evidence:
      "Clinical guidelines advise against routinely combining multiple opioid agents outside specialist supervision.",
  },
  {
    drug_a: "codeine",
    drug_b: "oxycodone",
    severity: "moderate",
    mechanism:
      "Combining two opioids adds to central nervous system and respiratory depression without clear added benefit.",
    evidence:
      "Clinical guidelines advise against routinely combining multiple opioid agents outside specialist supervision.",
  },
  {
    drug_a: "codeine",
    drug_b: "temazepam",
    severity: "high",
    mechanism:
      "Both depress the central nervous system; combined use significantly raises the risk of profound sedation and fatal respiratory depression.",
    evidence:
      "FDA boxed warning specifically addresses the combination of opioids and benzodiazepines.",
  },
  {
    drug_a: "codeine",
    drug_b: "zolpidem",
    severity: "high",
    mechanism:
      "Both depress the central nervous system, increasing sedation and respiratory depression risk.",
    evidence:
      "FDA labeling warns against combining opioids with sedative-hypnotics.",
  },
  {
    drug_a: "cyclobenzaprine",
    drug_b: "diazepam",
    severity: "moderate",
    mechanism:
      "Both cause CNS depression; combined use increases sedation and fall risk.",
    evidence:
      "Clinical guidance flags this combination for increased sedation risk, particularly in older adults.",
  },
  {
    drug_a: "cyclobenzaprine",
    drug_b: "fentanyl",
    severity: "moderate",
    mechanism:
      "Both cause CNS depression; combined use increases sedation and fall risk.",
    evidence:
      "Clinical guidance flags this combination for increased sedation risk, particularly in older adults.",
  },
  {
    drug_a: "cyclobenzaprine",
    drug_b: "hydrocodone",
    severity: "moderate",
    mechanism:
      "Both cause CNS depression; combined use increases sedation and fall risk.",
    evidence:
      "Clinical guidance flags this combination for increased sedation risk, particularly in older adults.",
  },
  {
    drug_a: "cyclobenzaprine",
    drug_b: "lorazepam",
    severity: "moderate",
    mechanism:
      "Both cause CNS depression; combined use increases sedation and fall risk.",
    evidence:
      "Clinical guidance flags this combination for increased sedation risk, particularly in older adults.",
  },
  {
    drug_a: "cyclobenzaprine",
    drug_b: "morphine",
    severity: "moderate",
    mechanism:
      "Both cause CNS depression; combined use increases sedation and fall risk.",
    evidence:
      "Clinical guidance flags this combination for increased sedation risk, particularly in older adults.",
  },
  {
    drug_a: "cyclobenzaprine",
    drug_b: "oxycodone",
    severity: "moderate",
    mechanism:
      "Both cause CNS depression; combined use increases sedation and fall risk.",
    evidence:
      "Clinical guidance flags this combination for increased sedation risk, particularly in older adults.",
  },
  {
    drug_a: "cyclobenzaprine",
    drug_b: "temazepam",
    severity: "moderate",
    mechanism:
      "Both cause CNS depression; combined use increases sedation and fall risk.",
    evidence:
      "Clinical guidance flags this combination for increased sedation risk, particularly in older adults.",
  },
  {
    drug_a: "dabigatran",
    drug_b: "diclofenac",
    severity: "high",
    mechanism:
      "NSAIDs inhibit platelet aggregation and can displace anticoagulants from protein binding, increasing bleeding risk.",
    evidence:
      "Multiple clinical studies show increased GI bleeding risk when NSAIDs are combined with anticoagulants.",
  },
  {
    drug_a: "dabigatran",
    drug_b: "escitalopram",
    severity: "moderate",
    mechanism:
      "SSRIs impair platelet aggregation and, combined with anticoagulants, can further raise bleeding risk.",
    evidence:
      "Cohort studies report increased bleeding events with SSRI + anticoagulant combinations.",
  },
  {
    drug_a: "dabigatran",
    drug_b: "fluoxetine",
    severity: "moderate",
    mechanism:
      "SSRIs impair platelet aggregation and, combined with anticoagulants, can further raise bleeding risk.",
    evidence:
      "Cohort studies report increased bleeding events with SSRI + anticoagulant combinations.",
  },
  {
    drug_a: "dabigatran",
    drug_b: "gabapentin",
    severity: "moderate",
    mechanism:
      "Several antiepileptics induce hepatic enzymes that alter anticoagulant metabolism, making dosing harder to stabilize.",
    evidence:
      "Guidelines recommend close INR monitoring when combining enzyme-inducing antiepileptics with anticoagulants.",
  },
  {
    drug_a: "dabigatran",
    drug_b: "heparin",
    severity: "high",
    mechanism:
      "Combining two anticoagulants compounds bleeding risk without a clear additional therapeutic benefit.",
    evidence:
      "Clinical guidelines generally advise against combining anticoagulants outside of specific supervised protocols.",
  },
  {
    drug_a: "dabigatran",
    drug_b: "ibuprofen",
    severity: "high",
    mechanism:
      "NSAIDs inhibit platelet aggregation and can displace anticoagulants from protein binding, increasing bleeding risk.",
    evidence:
      "Multiple clinical studies show increased GI bleeding risk when NSAIDs are combined with anticoagulants.",
  },
  {
    drug_a: "dabigatran",
    drug_b: "indomethacin",
    severity: "high",
    mechanism:
      "NSAIDs inhibit platelet aggregation and can displace anticoagulants from protein binding, increasing bleeding risk.",
    evidence:
      "Multiple clinical studies show increased GI bleeding risk when NSAIDs are combined with anticoagulants.",
  },
  {
    drug_a: "dabigatran",
    drug_b: "ketorolac",
    severity: "high",
    mechanism:
      "NSAIDs inhibit platelet aggregation and can displace anticoagulants from protein binding, increasing bleeding risk.",
    evidence:
      "Multiple clinical studies show increased GI bleeding risk when NSAIDs are combined with anticoagulants.",
  },
  {
    drug_a: "dabigatran",
    drug_b: "lamotrigine",
    severity: "moderate",
    mechanism:
      "Several antiepileptics induce hepatic enzymes that alter anticoagulant metabolism, making dosing harder to stabilize.",
    evidence:
      "Guidelines recommend close INR monitoring when combining enzyme-inducing antiepileptics with anticoagulants.",
  },
  {
    drug_a: "dabigatran",
    drug_b: "meloxicam",
    severity: "high",
    mechanism:
      "NSAIDs inhibit platelet aggregation and can displace anticoagulants from protein binding, increasing bleeding risk.",
    evidence:
      "Multiple clinical studies show increased GI bleeding risk when NSAIDs are combined with anticoagulants.",
  },
  {
    drug_a: "dabigatran",
    drug_b: "naproxen",
    severity: "high",
    mechanism:
      "NSAIDs inhibit platelet aggregation and can displace anticoagulants from protein binding, increasing bleeding risk.",
    evidence:
      "Multiple clinical studies show increased GI bleeding risk when NSAIDs are combined with anticoagulants.",
  },
  {
    drug_a: "dabigatran",
    drug_b: "paroxetine",
    severity: "moderate",
    mechanism:
      "SSRIs impair platelet aggregation and, combined with anticoagulants, can further raise bleeding risk.",
    evidence:
      "Cohort studies report increased bleeding events with SSRI + anticoagulant combinations.",
  },
  {
    drug_a: "dabigatran",
    drug_b: "phenytoin",
    severity: "moderate",
    mechanism:
      "Several antiepileptics induce hepatic enzymes that alter anticoagulant metabolism, making dosing harder to stabilize.",
    evidence:
      "Guidelines recommend close INR monitoring when combining enzyme-inducing antiepileptics with anticoagulants.",
  },
  {
    drug_a: "dabigatran",
    drug_b: "rivaroxaban",
    severity: "high",
    mechanism:
      "Combining two anticoagulants compounds bleeding risk without a clear additional therapeutic benefit.",
    evidence:
      "Clinical guidelines generally advise against combining anticoagulants outside of specific supervised protocols.",
  },
  {
    drug_a: "dabigatran",
    drug_b: "sertraline",
    severity: "moderate",
    mechanism:
      "SSRIs impair platelet aggregation and, combined with anticoagulants, can further raise bleeding risk.",
    evidence:
      "Cohort studies report increased bleeding events with SSRI + anticoagulant combinations.",
  },
  {
    drug_a: "dabigatran",
    drug_b: "valproate",
    severity: "moderate",
    mechanism:
      "Several antiepileptics induce hepatic enzymes that alter anticoagulant metabolism, making dosing harder to stabilize.",
    evidence:
      "Guidelines recommend close INR monitoring when combining enzyme-inducing antiepileptics with anticoagulants.",
  },
  {
    drug_a: "dabigatran",
    drug_b: "warfarin",
    severity: "high",
    mechanism:
      "Combining two anticoagulants compounds bleeding risk without a clear additional therapeutic benefit.",
    evidence:
      "Clinical guidelines generally advise against combining anticoagulants outside of specific supervised protocols.",
  },
  {
    drug_a: "dexamethasone",
    drug_b: "glimepiride",
    severity: "moderate",
    mechanism:
      "Corticosteroids can raise blood glucose, counteracting the glucose-lowering effect of antidiabetic medications.",
    evidence:
      "Clinical monitoring guidelines suggest glucose monitoring when combined.",
  },
  {
    drug_a: "dexamethasone",
    drug_b: "glipizide",
    severity: "moderate",
    mechanism:
      "Corticosteroids can raise blood glucose, counteracting the glucose-lowering effect of antidiabetic medications.",
    evidence:
      "Clinical monitoring guidelines suggest glucose monitoring when combined.",
  },
  {
    drug_a: "dexamethasone",
    drug_b: "glyburide",
    severity: "moderate",
    mechanism:
      "Corticosteroids can raise blood glucose, counteracting the glucose-lowering effect of antidiabetic medications.",
    evidence:
      "Clinical monitoring guidelines suggest glucose monitoring when combined.",
  },
  {
    drug_a: "dexamethasone",
    drug_b: "insulin_glargine",
    severity: "moderate",
    mechanism:
      "Corticosteroids can raise blood glucose, counteracting the glucose-lowering effect of antidiabetic medications.",
    evidence:
      "Clinical monitoring guidelines suggest glucose monitoring when combined.",
  },
  {
    drug_a: "dexamethasone",
    drug_b: "metformin",
    severity: "moderate",
    mechanism:
      "Corticosteroids can raise blood glucose, counteracting the glucose-lowering effect of antidiabetic medications.",
    evidence:
      "Clinical monitoring guidelines suggest glucose monitoring when combined.",
  },
  {
    drug_a: "diazepam",
    drug_b: "diphenhydramine",
    severity: "moderate",
    mechanism:
      "Both cause CNS depression; combined use increases sedation and impairs alertness.",
    evidence:
      "Product labeling for sedating antihistamines warns against combining with other CNS depressants.",
  },
  {
    drug_a: "diazepam",
    drug_b: "eszopiclone",
    severity: "high",
    mechanism:
      "Additive CNS depression between benzodiazepines and non-benzodiazepine hypnotics increases sedation and fall risk.",
    evidence:
      "Clinical guidance recommends avoiding concurrent use of multiple sedative-hypnotic agents.",
  },
  {
    drug_a: "diazepam",
    drug_b: "fentanyl",
    severity: "high",
    mechanism:
      "Both depress the central nervous system; combined use significantly raises the risk of profound sedation and fatal respiratory depression.",
    evidence:
      "FDA boxed warning specifically addresses the combination of opioids and benzodiazepines.",
  },
  {
    drug_a: "diazepam",
    drug_b: "hydrocodone",
    severity: "high",
    mechanism:
      "Both depress the central nervous system; combined use significantly raises the risk of profound sedation and fatal respiratory depression.",
    evidence:
      "FDA boxed warning specifically addresses the combination of opioids and benzodiazepines.",
  },
  {
    drug_a: "diazepam",
    drug_b: "lorazepam",
    severity: "high",
    mechanism:
      "Additive central nervous system depression from combining two benzodiazepines.",
    evidence:
      "Clinical guidance advises against concurrent benzodiazepine use due to sedation and respiratory depression risk.",
  },
  {
    drug_a: "diazepam",
    drug_b: "morphine",
    severity: "high",
    mechanism:
      "Both depress the central nervous system; combined use significantly raises the risk of profound sedation and fatal respiratory depression.",
    evidence:
      "FDA boxed warning specifically addresses the combination of opioids and benzodiazepines.",
  },
  {
    drug_a: "diazepam",
    drug_b: "olanzapine",
    severity: "moderate",
    mechanism:
      "Both cause CNS depression; combined use increases sedation and, in vulnerable patients, respiratory depression risk.",
    evidence:
      "Clinical guidance recommends caution when combining antipsychotics with benzodiazepines, especially in older adults.",
  },
  {
    drug_a: "diazepam",
    drug_b: "oxycodone",
    severity: "high",
    mechanism:
      "Both depress the central nervous system; combined use significantly raises the risk of profound sedation and fatal respiratory depression.",
    evidence:
      "FDA boxed warning specifically addresses the combination of opioids and benzodiazepines.",
  },
  {
    drug_a: "diazepam",
    drug_b: "quetiapine",
    severity: "moderate",
    mechanism:
      "Both cause CNS depression; combined use increases sedation and, in vulnerable patients, respiratory depression risk.",
    evidence:
      "Clinical guidance recommends caution when combining antipsychotics with benzodiazepines, especially in older adults.",
  },
  {
    drug_a: "diazepam",
    drug_b: "risperidone",
    severity: "moderate",
    mechanism:
      "Both cause CNS depression; combined use increases sedation and, in vulnerable patients, respiratory depression risk.",
    evidence:
      "Clinical guidance recommends caution when combining antipsychotics with benzodiazepines, especially in older adults.",
  },
  {
    drug_a: "diazepam",
    drug_b: "temazepam",
    severity: "high",
    mechanism:
      "Additive central nervous system depression from combining two benzodiazepines.",
    evidence:
      "Clinical guidance advises against concurrent benzodiazepine use due to sedation and respiratory depression risk.",
  },
  {
    drug_a: "diazepam",
    drug_b: "zolpidem",
    severity: "high",
    mechanism:
      "Additive CNS depression between benzodiazepines and non-benzodiazepine hypnotics increases sedation and fall risk.",
    evidence:
      "Clinical guidance recommends avoiding concurrent use of multiple sedative-hypnotic agents.",
  },
  {
    drug_a: "diclofenac",
    drug_b: "enalapril",
    severity: "moderate",
    mechanism:
      "NSAIDs can reduce the antihypertensive effect of ACE inhibitors and impair renal function.",
    evidence:
      "Documented in hypertension management guidelines.",
  },
  {
    drug_a: "diclofenac",
    drug_b: "escitalopram",
    severity: "moderate",
    mechanism:
      "SSRIs combined with NSAIDs may increase risk of GI bleeding due to reduced platelet serotonin uptake.",
    evidence:
      "Observational studies report elevated bleeding risk with SSRI + NSAID combinations.",
  },
  {
    drug_a: "diclofenac",
    drug_b: "fluoxetine",
    severity: "moderate",
    mechanism:
      "SSRIs combined with NSAIDs may increase risk of GI bleeding due to reduced platelet serotonin uptake.",
    evidence:
      "Observational studies report elevated bleeding risk with SSRI + NSAID combinations.",
  },
  {
    drug_a: "diclofenac",
    drug_b: "heparin",
    severity: "high",
    mechanism:
      "NSAIDs inhibit platelet aggregation and can displace anticoagulants from protein binding, increasing bleeding risk.",
    evidence:
      "Multiple clinical studies show increased GI bleeding risk when NSAIDs are combined with anticoagulants.",
  },
  {
    drug_a: "diclofenac",
    drug_b: "ibuprofen",
    severity: "low",
    mechanism:
      "Combining two NSAIDs adds to GI and renal risk without added therapeutic benefit.",
    evidence:
      "Clinical guidance generally advises against routine use of multiple NSAIDs concurrently.",
  },
  {
    drug_a: "diclofenac",
    drug_b: "indomethacin",
    severity: "low",
    mechanism:
      "Combining two NSAIDs adds to GI and renal risk without added therapeutic benefit.",
    evidence:
      "Clinical guidance generally advises against routine use of multiple NSAIDs concurrently.",
  },
  {
    drug_a: "diclofenac",
    drug_b: "irbesartan",
    severity: "moderate",
    mechanism:
      "NSAIDs can reduce the antihypertensive effect of ARBs and impair renal function.",
    evidence:
      "Documented in hypertension management guidelines.",
  },
  {
    drug_a: "diclofenac",
    drug_b: "ketorolac",
    severity: "low",
    mechanism:
      "Combining two NSAIDs adds to GI and renal risk without added therapeutic benefit.",
    evidence:
      "Clinical guidance generally advises against routine use of multiple NSAIDs concurrently.",
  },
  {
    drug_a: "diclofenac",
    drug_b: "lisinopril",
    severity: "moderate",
    mechanism:
      "NSAIDs can reduce the antihypertensive effect of ACE inhibitors and impair renal function.",
    evidence:
      "Documented in hypertension management guidelines.",
  },
  {
    drug_a: "diclofenac",
    drug_b: "lithium",
    severity: "moderate",
    mechanism:
      "NSAIDs can reduce renal clearance of lithium, raising lithium levels toward toxicity.",
    evidence:
      "Product labeling for lithium warns against combining with NSAIDs without monitoring lithium levels.",
  },
  {
    drug_a: "diclofenac",
    drug_b: "losartan",
    severity: "moderate",
    mechanism:
      "NSAIDs can reduce the antihypertensive effect of ARBs and impair renal function.",
    evidence:
      "Documented in hypertension management guidelines.",
  },
  {
    drug_a: "diclofenac",
    drug_b: "meloxicam",
    severity: "low",
    mechanism:
      "Combining two NSAIDs adds to GI and renal risk without added therapeutic benefit.",
    evidence:
      "Clinical guidance generally advises against routine use of multiple NSAIDs concurrently.",
  },
  {
    drug_a: "diclofenac",
    drug_b: "naproxen",
    severity: "low",
    mechanism:
      "Combining two NSAIDs adds to GI and renal risk without added therapeutic benefit.",
    evidence:
      "Clinical guidance generally advises against routine use of multiple NSAIDs concurrently.",
  },
  {
    drug_a: "diclofenac",
    drug_b: "olmesartan",
    severity: "moderate",
    mechanism:
      "NSAIDs can reduce the antihypertensive effect of ARBs and impair renal function.",
    evidence:
      "Documented in hypertension management guidelines.",
  },
  {
    drug_a: "diclofenac",
    drug_b: "paroxetine",
    severity: "moderate",
    mechanism:
      "SSRIs combined with NSAIDs may increase risk of GI bleeding due to reduced platelet serotonin uptake.",
    evidence:
      "Observational studies report elevated bleeding risk with SSRI + NSAID combinations.",
  },
  {
    drug_a: "diclofenac",
    drug_b: "ramipril",
    severity: "moderate",
    mechanism:
      "NSAIDs can reduce the antihypertensive effect of ACE inhibitors and impair renal function.",
    evidence:
      "Documented in hypertension management guidelines.",
  },
  {
    drug_a: "diclofenac",
    drug_b: "rivaroxaban",
    severity: "high",
    mechanism:
      "NSAIDs inhibit platelet aggregation and can displace anticoagulants from protein binding, increasing bleeding risk.",
    evidence:
      "Multiple clinical studies show increased GI bleeding risk when NSAIDs are combined with anticoagulants.",
  },
  {
    drug_a: "diclofenac",
    drug_b: "sertraline",
    severity: "moderate",
    mechanism:
      "SSRIs combined with NSAIDs may increase risk of GI bleeding due to reduced platelet serotonin uptake.",
    evidence:
      "Observational studies report elevated bleeding risk with SSRI + NSAID combinations.",
  },
  {
    drug_a: "diclofenac",
    drug_b: "valsartan",
    severity: "moderate",
    mechanism:
      "NSAIDs can reduce the antihypertensive effect of ARBs and impair renal function.",
    evidence:
      "Documented in hypertension management guidelines.",
  },
  {
    drug_a: "diclofenac",
    drug_b: "warfarin",
    severity: "high",
    mechanism:
      "NSAIDs inhibit platelet aggregation and can displace anticoagulants from protein binding, increasing bleeding risk.",
    evidence:
      "Multiple clinical studies show increased GI bleeding risk when NSAIDs are combined with anticoagulants.",
  },
  {
    drug_a: "digoxin",
    drug_b: "erythromycin",
    severity: "moderate",
    mechanism:
      "Some macrolides can raise digoxin levels via reduced gut metabolism, increasing toxicity risk.",
    evidence:
      "Product labeling for digoxin notes elevated levels when combined with certain macrolides.",
  },
  {
    drug_a: "digoxin",
    drug_b: "furosemide",
    severity: "moderate",
    mechanism:
      "Diuretic-induced potassium loss can increase the risk of digoxin toxicity.",
    evidence:
      "Clinical monitoring guidelines recommend checking potassium and digoxin levels when combined.",
  },
  {
    drug_a: "digoxin",
    drug_b: "hydrochlorothiazide",
    severity: "moderate",
    mechanism:
      "Diuretic-induced potassium loss can increase the risk of digoxin toxicity.",
    evidence:
      "Clinical monitoring guidelines recommend checking potassium and digoxin levels when combined.",
  },
  {
    drug_a: "diltiazem",
    drug_b: "metoprolol",
    severity: "moderate",
    mechanism:
      "Both slow cardiac conduction; combined use can cause excessive bradycardia or heart block.",
    evidence:
      "Clinical guidelines recommend caution and ECG monitoring when combining these agents, particularly non-dihydropyridine calcium channel blockers.",
  },
  {
    drug_a: "diltiazem",
    drug_b: "propranolol",
    severity: "moderate",
    mechanism:
      "Both slow cardiac conduction; combined use can cause excessive bradycardia or heart block.",
    evidence:
      "Clinical guidelines recommend caution and ECG monitoring when combining these agents, particularly non-dihydropyridine calcium channel blockers.",
  },
  {
    drug_a: "diphenhydramine",
    drug_b: "fentanyl",
    severity: "moderate",
    mechanism:
      "Both cause CNS depression; combined use increases sedation and fall risk, especially in older adults.",
    evidence:
      "Clinical guidance flags this combination for increased sedation risk.",
  },
  {
    drug_a: "diphenhydramine",
    drug_b: "hydrocodone",
    severity: "moderate",
    mechanism:
      "Both cause CNS depression; combined use increases sedation and fall risk, especially in older adults.",
    evidence:
      "Clinical guidance flags this combination for increased sedation risk.",
  },
  {
    drug_a: "diphenhydramine",
    drug_b: "lorazepam",
    severity: "moderate",
    mechanism:
      "Both cause CNS depression; combined use increases sedation and impairs alertness.",
    evidence:
      "Product labeling for sedating antihistamines warns against combining with other CNS depressants.",
  },
  {
    drug_a: "diphenhydramine",
    drug_b: "morphine",
    severity: "moderate",
    mechanism:
      "Both cause CNS depression; combined use increases sedation and fall risk, especially in older adults.",
    evidence:
      "Clinical guidance flags this combination for increased sedation risk.",
  },
  {
    drug_a: "diphenhydramine",
    drug_b: "oxycodone",
    severity: "moderate",
    mechanism:
      "Both cause CNS depression; combined use increases sedation and fall risk, especially in older adults.",
    evidence:
      "Clinical guidance flags this combination for increased sedation risk.",
  },
  {
    drug_a: "diphenhydramine",
    drug_b: "temazepam",
    severity: "moderate",
    mechanism:
      "Both cause CNS depression; combined use increases sedation and impairs alertness.",
    evidence:
      "Product labeling for sedating antihistamines warns against combining with other CNS depressants.",
  },
  {
    drug_a: "duloxetine",
    drug_b: "phenelzine",
    severity: "high",
    mechanism:
      "Both increase serotonin and norepinephrine activity, raising the risk of serotonin syndrome and hypertensive crisis.",
    evidence:
      "FDA labeling contraindicates combining SNRIs with MAOIs.",
  },
  {
    drug_a: "duloxetine",
    drug_b: "tramadol",
    severity: "high",
    mechanism:
      "Both increase serotonin activity, raising the risk of serotonin syndrome.",
    evidence:
      "Case reports and FDA labeling describe elevated serotonin syndrome risk with this combination.",
  },
  {
    drug_a: "duloxetine",
    drug_b: "tranylcypromine",
    severity: "high",
    mechanism:
      "Both increase serotonin and norepinephrine activity, raising the risk of serotonin syndrome and hypertensive crisis.",
    evidence:
      "FDA labeling contraindicates combining SNRIs with MAOIs.",
  },
  {
    drug_a: "duloxetine",
    drug_b: "trazodone",
    severity: "high",
    mechanism:
      "Both increase serotonin activity, raising the risk of serotonin syndrome.",
    evidence:
      "Case reports and FDA labeling describe elevated serotonin syndrome risk with this combination.",
  },
  {
    drug_a: "enalapril",
    drug_b: "ibuprofen",
    severity: "moderate",
    mechanism:
      "NSAIDs can reduce the antihypertensive effect of ACE inhibitors and impair renal function.",
    evidence:
      "Documented in hypertension management guidelines.",
  },
  {
    drug_a: "enalapril",
    drug_b: "indomethacin",
    severity: "moderate",
    mechanism:
      "NSAIDs can reduce the antihypertensive effect of ACE inhibitors and impair renal function.",
    evidence:
      "Documented in hypertension management guidelines.",
  },
  {
    drug_a: "enalapril",
    drug_b: "irbesartan",
    severity: "moderate",
    mechanism:
      "Dual blockade of the renin-angiotensin system can increase risk of hyperkalemia and hypotension.",
    evidence:
      "Guidelines generally recommend against combining ACE inhibitors with ARBs.",
  },
  {
    drug_a: "enalapril",
    drug_b: "ketorolac",
    severity: "moderate",
    mechanism:
      "NSAIDs can reduce the antihypertensive effect of ACE inhibitors and impair renal function.",
    evidence:
      "Documented in hypertension management guidelines.",
  },
  {
    drug_a: "enalapril",
    drug_b: "lithium",
    severity: "moderate",
    mechanism:
      "ACE inhibitors can reduce renal clearance of lithium, raising lithium levels toward toxicity.",
    evidence:
      "Product labeling for lithium warns against combining with ACE inhibitors without monitoring lithium levels.",
  },
  {
    drug_a: "enalapril",
    drug_b: "losartan",
    severity: "moderate",
    mechanism:
      "Dual blockade of the renin-angiotensin system can increase risk of hyperkalemia and hypotension.",
    evidence:
      "Guidelines generally recommend against combining ACE inhibitors with ARBs.",
  },
  {
    drug_a: "enalapril",
    drug_b: "meloxicam",
    severity: "moderate",
    mechanism:
      "NSAIDs can reduce the antihypertensive effect of ACE inhibitors and impair renal function.",
    evidence:
      "Documented in hypertension management guidelines.",
  },
  {
    drug_a: "enalapril",
    drug_b: "naproxen",
    severity: "moderate",
    mechanism:
      "NSAIDs can reduce the antihypertensive effect of ACE inhibitors and impair renal function.",
    evidence:
      "Documented in hypertension management guidelines.",
  },
  {
    drug_a: "enalapril",
    drug_b: "olmesartan",
    severity: "moderate",
    mechanism:
      "Dual blockade of the renin-angiotensin system can increase risk of hyperkalemia and hypotension.",
    evidence:
      "Guidelines generally recommend against combining ACE inhibitors with ARBs.",
  },
  {
    drug_a: "enalapril",
    drug_b: "spironolactone",
    severity: "moderate",
    mechanism:
      "Both raise serum potassium; combined use increases the risk of hyperkalemia.",
    evidence:
      "Clinical monitoring guidelines recommend checking potassium when combining these agents.",
  },
  {
    drug_a: "enalapril",
    drug_b: "valsartan",
    severity: "moderate",
    mechanism:
      "Dual blockade of the renin-angiotensin system can increase risk of hyperkalemia and hypotension.",
    evidence:
      "Guidelines generally recommend against combining ACE inhibitors with ARBs.",
  },
  {
    drug_a: "erythromycin",
    drug_b: "lovastatin",
    severity: "moderate",
    mechanism:
      "Macrolide antibiotics inhibit CYP3A4 metabolism of many statins, raising statin levels and myopathy/rhabdomyolysis risk.",
    evidence:
      "Product labeling for CYP3A4-metabolized statins warns against combining with strong CYP3A4 inhibitors like macrolides.",
  },
  {
    drug_a: "erythromycin",
    drug_b: "pravastatin",
    severity: "moderate",
    mechanism:
      "Macrolide antibiotics inhibit CYP3A4 metabolism of many statins, raising statin levels and myopathy/rhabdomyolysis risk.",
    evidence:
      "Product labeling for CYP3A4-metabolized statins warns against combining with strong CYP3A4 inhibitors like macrolides.",
  },
  {
    drug_a: "erythromycin",
    drug_b: "rosuvastatin",
    severity: "moderate",
    mechanism:
      "Macrolide antibiotics inhibit CYP3A4 metabolism of many statins, raising statin levels and myopathy/rhabdomyolysis risk.",
    evidence:
      "Product labeling for CYP3A4-metabolized statins warns against combining with strong CYP3A4 inhibitors like macrolides.",
  },
  {
    drug_a: "erythromycin",
    drug_b: "simvastatin",
    severity: "moderate",
    mechanism:
      "Macrolide antibiotics inhibit CYP3A4 metabolism of many statins, raising statin levels and myopathy/rhabdomyolysis risk.",
    evidence:
      "Product labeling for CYP3A4-metabolized statins warns against combining with strong CYP3A4 inhibitors like macrolides.",
  },
  {
    drug_a: "escitalopram",
    drug_b: "heparin",
    severity: "moderate",
    mechanism:
      "SSRIs impair platelet aggregation and, combined with anticoagulants, can further raise bleeding risk.",
    evidence:
      "Cohort studies report increased bleeding events with SSRI + anticoagulant combinations.",
  },
  {
    drug_a: "escitalopram",
    drug_b: "ibuprofen",
    severity: "moderate",
    mechanism:
      "SSRIs combined with NSAIDs may increase risk of GI bleeding due to reduced platelet serotonin uptake.",
    evidence:
      "Observational studies report elevated bleeding risk with SSRI + NSAID combinations.",
  },
  {
    drug_a: "escitalopram",
    drug_b: "indomethacin",
    severity: "moderate",
    mechanism:
      "SSRIs combined with NSAIDs may increase risk of GI bleeding due to reduced platelet serotonin uptake.",
    evidence:
      "Observational studies report elevated bleeding risk with SSRI + NSAID combinations.",
  },
  {
    drug_a: "escitalopram",
    drug_b: "ketorolac",
    severity: "moderate",
    mechanism:
      "SSRIs combined with NSAIDs may increase risk of GI bleeding due to reduced platelet serotonin uptake.",
    evidence:
      "Observational studies report elevated bleeding risk with SSRI + NSAID combinations.",
  },
  {
    drug_a: "escitalopram",
    drug_b: "meloxicam",
    severity: "moderate",
    mechanism:
      "SSRIs combined with NSAIDs may increase risk of GI bleeding due to reduced platelet serotonin uptake.",
    evidence:
      "Observational studies report elevated bleeding risk with SSRI + NSAID combinations.",
  },
  {
    drug_a: "escitalopram",
    drug_b: "naproxen",
    severity: "moderate",
    mechanism:
      "SSRIs combined with NSAIDs may increase risk of GI bleeding due to reduced platelet serotonin uptake.",
    evidence:
      "Observational studies report elevated bleeding risk with SSRI + NSAID combinations.",
  },
  {
    drug_a: "escitalopram",
    drug_b: "phenelzine",
    severity: "high",
    mechanism:
      "Both increase serotonin activity; combining them can precipitate serotonin syndrome.",
    evidence:
      "FDA labeling contraindicates combining SSRIs with MAOIs due to serotonergic effects.",
  },
  {
    drug_a: "escitalopram",
    drug_b: "rivaroxaban",
    severity: "moderate",
    mechanism:
      "SSRIs impair platelet aggregation and, combined with anticoagulants, can further raise bleeding risk.",
    evidence:
      "Cohort studies report increased bleeding events with SSRI + anticoagulant combinations.",
  },
  {
    drug_a: "escitalopram",
    drug_b: "tramadol",
    severity: "high",
    mechanism:
      "Both increase serotonin activity, raising the risk of serotonin syndrome.",
    evidence:
      "FDA labeling warns against combining SSRIs with other serotonergic agents such as tramadol.",
  },
  {
    drug_a: "escitalopram",
    drug_b: "tranylcypromine",
    severity: "high",
    mechanism:
      "Both increase serotonin activity; combining them can precipitate serotonin syndrome.",
    evidence:
      "FDA labeling contraindicates combining SSRIs with MAOIs due to serotonergic effects.",
  },
  {
    drug_a: "escitalopram",
    drug_b: "trazodone",
    severity: "high",
    mechanism:
      "Both increase serotonin activity, raising the risk of serotonin syndrome.",
    evidence:
      "FDA labeling warns against combining SSRIs with other serotonergic agents such as tramadol.",
  },
  {
    drug_a: "escitalopram",
    drug_b: "warfarin",
    severity: "moderate",
    mechanism:
      "SSRIs impair platelet aggregation and, combined with anticoagulants, can further raise bleeding risk.",
    evidence:
      "Cohort studies report increased bleeding events with SSRI + anticoagulant combinations.",
  },
  {
    drug_a: "esomeprazole",
    drug_b: "levothyroxine",
    severity: "low",
    mechanism:
      "Reduced gastric acidity from PPIs may impair levothyroxine absorption.",
    evidence:
      "Case reports suggest spacing doses can mitigate the effect.",
  },
  {
    drug_a: "eszopiclone",
    drug_b: "fentanyl",
    severity: "high",
    mechanism:
      "Both depress the central nervous system, increasing sedation and respiratory depression risk.",
    evidence:
      "FDA labeling warns against combining opioids with sedative-hypnotics.",
  },
  {
    drug_a: "eszopiclone",
    drug_b: "hydrocodone",
    severity: "high",
    mechanism:
      "Both depress the central nervous system, increasing sedation and respiratory depression risk.",
    evidence:
      "FDA labeling warns against combining opioids with sedative-hypnotics.",
  },
  {
    drug_a: "eszopiclone",
    drug_b: "lorazepam",
    severity: "high",
    mechanism:
      "Additive CNS depression between benzodiazepines and non-benzodiazepine hypnotics increases sedation and fall risk.",
    evidence:
      "Clinical guidance recommends avoiding concurrent use of multiple sedative-hypnotic agents.",
  },
  {
    drug_a: "eszopiclone",
    drug_b: "morphine",
    severity: "high",
    mechanism:
      "Both depress the central nervous system, increasing sedation and respiratory depression risk.",
    evidence:
      "FDA labeling warns against combining opioids with sedative-hypnotics.",
  },
  {
    drug_a: "eszopiclone",
    drug_b: "oxycodone",
    severity: "high",
    mechanism:
      "Both depress the central nervous system, increasing sedation and respiratory depression risk.",
    evidence:
      "FDA labeling warns against combining opioids with sedative-hypnotics.",
  },
  {
    drug_a: "eszopiclone",
    drug_b: "temazepam",
    severity: "high",
    mechanism:
      "Additive CNS depression between benzodiazepines and non-benzodiazepine hypnotics increases sedation and fall risk.",
    evidence:
      "Clinical guidance recommends avoiding concurrent use of multiple sedative-hypnotic agents.",
  },
  {
    drug_a: "fentanyl",
    drug_b: "hydrocodone",
    severity: "moderate",
    mechanism:
      "Combining two opioids adds to central nervous system and respiratory depression without clear added benefit.",
    evidence:
      "Clinical guidelines advise against routinely combining multiple opioid agents outside specialist supervision.",
  },
  {
    drug_a: "fentanyl",
    drug_b: "lorazepam",
    severity: "high",
    mechanism:
      "Both depress the central nervous system; combined use significantly raises the risk of profound sedation and fatal respiratory depression.",
    evidence:
      "FDA boxed warning specifically addresses the combination of opioids and benzodiazepines.",
  },
  {
    drug_a: "fentanyl",
    drug_b: "morphine",
    severity: "moderate",
    mechanism:
      "Combining two opioids adds to central nervous system and respiratory depression without clear added benefit.",
    evidence:
      "Clinical guidelines advise against routinely combining multiple opioid agents outside specialist supervision.",
  },
  {
    drug_a: "fentanyl",
    drug_b: "oxycodone",
    severity: "moderate",
    mechanism:
      "Combining two opioids adds to central nervous system and respiratory depression without clear added benefit.",
    evidence:
      "Clinical guidelines advise against routinely combining multiple opioid agents outside specialist supervision.",
  },
  {
    drug_a: "fentanyl",
    drug_b: "temazepam",
    severity: "high",
    mechanism:
      "Both depress the central nervous system; combined use significantly raises the risk of profound sedation and fatal respiratory depression.",
    evidence:
      "FDA boxed warning specifically addresses the combination of opioids and benzodiazepines.",
  },
  {
    drug_a: "fentanyl",
    drug_b: "zolpidem",
    severity: "high",
    mechanism:
      "Both depress the central nervous system, increasing sedation and respiratory depression risk.",
    evidence:
      "FDA labeling warns against combining opioids with sedative-hypnotics.",
  },
  {
    drug_a: "fluoxetine",
    drug_b: "heparin",
    severity: "moderate",
    mechanism:
      "SSRIs impair platelet aggregation and, combined with anticoagulants, can further raise bleeding risk.",
    evidence:
      "Cohort studies report increased bleeding events with SSRI + anticoagulant combinations.",
  },
  {
    drug_a: "fluoxetine",
    drug_b: "ibuprofen",
    severity: "moderate",
    mechanism:
      "SSRIs combined with NSAIDs may increase risk of GI bleeding due to reduced platelet serotonin uptake.",
    evidence:
      "Observational studies report elevated bleeding risk with SSRI + NSAID combinations.",
  },
  {
    drug_a: "fluoxetine",
    drug_b: "indomethacin",
    severity: "moderate",
    mechanism:
      "SSRIs combined with NSAIDs may increase risk of GI bleeding due to reduced platelet serotonin uptake.",
    evidence:
      "Observational studies report elevated bleeding risk with SSRI + NSAID combinations.",
  },
  {
    drug_a: "fluoxetine",
    drug_b: "ketorolac",
    severity: "moderate",
    mechanism:
      "SSRIs combined with NSAIDs may increase risk of GI bleeding due to reduced platelet serotonin uptake.",
    evidence:
      "Observational studies report elevated bleeding risk with SSRI + NSAID combinations.",
  },
  {
    drug_a: "fluoxetine",
    drug_b: "meloxicam",
    severity: "moderate",
    mechanism:
      "SSRIs combined with NSAIDs may increase risk of GI bleeding due to reduced platelet serotonin uptake.",
    evidence:
      "Observational studies report elevated bleeding risk with SSRI + NSAID combinations.",
  },
  {
    drug_a: "fluoxetine",
    drug_b: "naproxen",
    severity: "moderate",
    mechanism:
      "SSRIs combined with NSAIDs may increase risk of GI bleeding due to reduced platelet serotonin uptake.",
    evidence:
      "Observational studies report elevated bleeding risk with SSRI + NSAID combinations.",
  },
  {
    drug_a: "fluoxetine",
    drug_b: "phenelzine",
    severity: "high",
    mechanism:
      "Both increase serotonin activity; combining them can precipitate serotonin syndrome.",
    evidence:
      "FDA labeling contraindicates combining SSRIs with MAOIs due to serotonergic effects.",
  },
  {
    drug_a: "fluoxetine",
    drug_b: "rivaroxaban",
    severity: "moderate",
    mechanism:
      "SSRIs impair platelet aggregation and, combined with anticoagulants, can further raise bleeding risk.",
    evidence:
      "Cohort studies report increased bleeding events with SSRI + anticoagulant combinations.",
  },
  {
    drug_a: "fluoxetine",
    drug_b: "tramadol",
    severity: "high",
    mechanism:
      "Both increase serotonin activity, raising the risk of serotonin syndrome.",
    evidence:
      "FDA labeling warns against combining SSRIs with other serotonergic agents such as tramadol.",
  },
  {
    drug_a: "fluoxetine",
    drug_b: "tranylcypromine",
    severity: "high",
    mechanism:
      "Both increase serotonin activity; combining them can precipitate serotonin syndrome.",
    evidence:
      "FDA labeling contraindicates combining SSRIs with MAOIs due to serotonergic effects.",
  },
  {
    drug_a: "fluoxetine",
    drug_b: "trazodone",
    severity: "high",
    mechanism:
      "Both increase serotonin activity, raising the risk of serotonin syndrome.",
    evidence:
      "FDA labeling warns against combining SSRIs with other serotonergic agents such as tramadol.",
  },
  {
    drug_a: "fluoxetine",
    drug_b: "warfarin",
    severity: "moderate",
    mechanism:
      "SSRIs impair platelet aggregation and, combined with anticoagulants, can further raise bleeding risk.",
    evidence:
      "Cohort studies report increased bleeding events with SSRI + anticoagulant combinations.",
  },
  {
    drug_a: "furosemide",
    drug_b: "lithium",
    severity: "moderate",
    mechanism:
      "Diuretics can reduce renal clearance of lithium, raising lithium levels toward toxicity.",
    evidence:
      "Clinical guidelines recommend monitoring lithium levels closely when starting or adjusting diuretics.",
  },
  {
    drug_a: "gabapentin",
    drug_b: "heparin",
    severity: "moderate",
    mechanism:
      "Several antiepileptics induce hepatic enzymes that alter anticoagulant metabolism, making dosing harder to stabilize.",
    evidence:
      "Guidelines recommend close INR monitoring when combining enzyme-inducing antiepileptics with anticoagulants.",
  },
  {
    drug_a: "gabapentin",
    drug_b: "lamotrigine",
    severity: "low",
    mechanism:
      "Combining certain antiepileptics can alter one another's blood levels via shared metabolic pathways.",
    evidence:
      "Product labeling recommends monitoring levels when combining these agents.",
  },
  {
    drug_a: "gabapentin",
    drug_b: "phenytoin",
    severity: "low",
    mechanism:
      "Combining certain antiepileptics can alter one another's blood levels via shared metabolic pathways.",
    evidence:
      "Product labeling recommends monitoring levels when combining these agents.",
  },
  {
    drug_a: "gabapentin",
    drug_b: "rivaroxaban",
    severity: "moderate",
    mechanism:
      "Several antiepileptics induce hepatic enzymes that alter anticoagulant metabolism, making dosing harder to stabilize.",
    evidence:
      "Guidelines recommend close INR monitoring when combining enzyme-inducing antiepileptics with anticoagulants.",
  },
  {
    drug_a: "gabapentin",
    drug_b: "valproate",
    severity: "low",
    mechanism:
      "Combining certain antiepileptics can alter one another's blood levels via shared metabolic pathways.",
    evidence:
      "Product labeling recommends monitoring levels when combining these agents.",
  },
  {
    drug_a: "gabapentin",
    drug_b: "warfarin",
    severity: "moderate",
    mechanism:
      "Several antiepileptics induce hepatic enzymes that alter anticoagulant metabolism, making dosing harder to stabilize.",
    evidence:
      "Guidelines recommend close INR monitoring when combining enzyme-inducing antiepileptics with anticoagulants.",
  },
  {
    drug_a: "glimepiride",
    drug_b: "methylprednisolone",
    severity: "moderate",
    mechanism:
      "Corticosteroids can raise blood glucose, counteracting the glucose-lowering effect of antidiabetic medications.",
    evidence:
      "Clinical monitoring guidelines suggest glucose monitoring when combined.",
  },
  {
    drug_a: "glimepiride",
    drug_b: "metoprolol",
    severity: "moderate",
    mechanism:
      "Beta blockers can mask the warning signs of hypoglycemia such as tremor and rapid heartbeat.",
    evidence:
      "Clinical guidelines advise caution and closer glucose monitoring when combined.",
  },
  {
    drug_a: "glimepiride",
    drug_b: "prednisone",
    severity: "moderate",
    mechanism:
      "Corticosteroids can raise blood glucose, counteracting the glucose-lowering effect of antidiabetic medications.",
    evidence:
      "Clinical monitoring guidelines suggest glucose monitoring when combined.",
  },
  {
    drug_a: "glimepiride",
    drug_b: "propranolol",
    severity: "moderate",
    mechanism:
      "Beta blockers can mask the warning signs of hypoglycemia such as tremor and rapid heartbeat.",
    evidence:
      "Clinical guidelines advise caution and closer glucose monitoring when combined.",
  },
  {
    drug_a: "glipizide",
    drug_b: "methylprednisolone",
    severity: "moderate",
    mechanism:
      "Corticosteroids can raise blood glucose, counteracting the glucose-lowering effect of antidiabetic medications.",
    evidence:
      "Clinical monitoring guidelines suggest glucose monitoring when combined.",
  },
  {
    drug_a: "glipizide",
    drug_b: "metoprolol",
    severity: "moderate",
    mechanism:
      "Beta blockers can mask the warning signs of hypoglycemia such as tremor and rapid heartbeat.",
    evidence:
      "Clinical guidelines advise caution and closer glucose monitoring when combined.",
  },
  {
    drug_a: "glipizide",
    drug_b: "prednisone",
    severity: "moderate",
    mechanism:
      "Corticosteroids can raise blood glucose, counteracting the glucose-lowering effect of antidiabetic medications.",
    evidence:
      "Clinical monitoring guidelines suggest glucose monitoring when combined.",
  },
  {
    drug_a: "glipizide",
    drug_b: "propranolol",
    severity: "moderate",
    mechanism:
      "Beta blockers can mask the warning signs of hypoglycemia such as tremor and rapid heartbeat.",
    evidence:
      "Clinical guidelines advise caution and closer glucose monitoring when combined.",
  },
  {
    drug_a: "glyburide",
    drug_b: "methylprednisolone",
    severity: "moderate",
    mechanism:
      "Corticosteroids can raise blood glucose, counteracting the glucose-lowering effect of antidiabetic medications.",
    evidence:
      "Clinical monitoring guidelines suggest glucose monitoring when combined.",
  },
  {
    drug_a: "glyburide",
    drug_b: "metoprolol",
    severity: "moderate",
    mechanism:
      "Beta blockers can mask the warning signs of hypoglycemia such as tremor and rapid heartbeat.",
    evidence:
      "Clinical guidelines advise caution and closer glucose monitoring when combined.",
  },
  {
    drug_a: "glyburide",
    drug_b: "prednisone",
    severity: "moderate",
    mechanism:
      "Corticosteroids can raise blood glucose, counteracting the glucose-lowering effect of antidiabetic medications.",
    evidence:
      "Clinical monitoring guidelines suggest glucose monitoring when combined.",
  },
  {
    drug_a: "glyburide",
    drug_b: "propranolol",
    severity: "moderate",
    mechanism:
      "Beta blockers can mask the warning signs of hypoglycemia such as tremor and rapid heartbeat.",
    evidence:
      "Clinical guidelines advise caution and closer glucose monitoring when combined.",
  },
  {
    drug_a: "heparin",
    drug_b: "ibuprofen",
    severity: "high",
    mechanism:
      "NSAIDs inhibit platelet aggregation and can displace anticoagulants from protein binding, increasing bleeding risk.",
    evidence:
      "Multiple clinical studies show increased GI bleeding risk when NSAIDs are combined with anticoagulants.",
  },
  {
    drug_a: "heparin",
    drug_b: "indomethacin",
    severity: "high",
    mechanism:
      "NSAIDs inhibit platelet aggregation and can displace anticoagulants from protein binding, increasing bleeding risk.",
    evidence:
      "Multiple clinical studies show increased GI bleeding risk when NSAIDs are combined with anticoagulants.",
  },
  {
    drug_a: "heparin",
    drug_b: "ketorolac",
    severity: "high",
    mechanism:
      "NSAIDs inhibit platelet aggregation and can displace anticoagulants from protein binding, increasing bleeding risk.",
    evidence:
      "Multiple clinical studies show increased GI bleeding risk when NSAIDs are combined with anticoagulants.",
  },
  {
    drug_a: "heparin",
    drug_b: "lamotrigine",
    severity: "moderate",
    mechanism:
      "Several antiepileptics induce hepatic enzymes that alter anticoagulant metabolism, making dosing harder to stabilize.",
    evidence:
      "Guidelines recommend close INR monitoring when combining enzyme-inducing antiepileptics with anticoagulants.",
  },
  {
    drug_a: "heparin",
    drug_b: "meloxicam",
    severity: "high",
    mechanism:
      "NSAIDs inhibit platelet aggregation and can displace anticoagulants from protein binding, increasing bleeding risk.",
    evidence:
      "Multiple clinical studies show increased GI bleeding risk when NSAIDs are combined with anticoagulants.",
  },
  {
    drug_a: "heparin",
    drug_b: "naproxen",
    severity: "high",
    mechanism:
      "NSAIDs inhibit platelet aggregation and can displace anticoagulants from protein binding, increasing bleeding risk.",
    evidence:
      "Multiple clinical studies show increased GI bleeding risk when NSAIDs are combined with anticoagulants.",
  },
  {
    drug_a: "heparin",
    drug_b: "paroxetine",
    severity: "moderate",
    mechanism:
      "SSRIs impair platelet aggregation and, combined with anticoagulants, can further raise bleeding risk.",
    evidence:
      "Cohort studies report increased bleeding events with SSRI + anticoagulant combinations.",
  },
  {
    drug_a: "heparin",
    drug_b: "phenytoin",
    severity: "moderate",
    mechanism:
      "Several antiepileptics induce hepatic enzymes that alter anticoagulant metabolism, making dosing harder to stabilize.",
    evidence:
      "Guidelines recommend close INR monitoring when combining enzyme-inducing antiepileptics with anticoagulants.",
  },
  {
    drug_a: "heparin",
    drug_b: "rivaroxaban",
    severity: "high",
    mechanism:
      "Combining two anticoagulants compounds bleeding risk without a clear additional therapeutic benefit.",
    evidence:
      "Clinical guidelines generally advise against combining anticoagulants outside of specific supervised protocols.",
  },
  {
    drug_a: "heparin",
    drug_b: "sertraline",
    severity: "moderate",
    mechanism:
      "SSRIs impair platelet aggregation and, combined with anticoagulants, can further raise bleeding risk.",
    evidence:
      "Cohort studies report increased bleeding events with SSRI + anticoagulant combinations.",
  },
  {
    drug_a: "heparin",
    drug_b: "valproate",
    severity: "moderate",
    mechanism:
      "Several antiepileptics induce hepatic enzymes that alter anticoagulant metabolism, making dosing harder to stabilize.",
    evidence:
      "Guidelines recommend close INR monitoring when combining enzyme-inducing antiepileptics with anticoagulants.",
  },
  {
    drug_a: "heparin",
    drug_b: "warfarin",
    severity: "high",
    mechanism:
      "Combining two anticoagulants compounds bleeding risk without a clear additional therapeutic benefit.",
    evidence:
      "Clinical guidelines generally advise against combining anticoagulants outside of specific supervised protocols.",
  },
  {
    drug_a: "hydrochlorothiazide",
    drug_b: "lithium",
    severity: "moderate",
    mechanism:
      "Diuretics can reduce renal clearance of lithium, raising lithium levels toward toxicity.",
    evidence:
      "Clinical guidelines recommend monitoring lithium levels closely when starting or adjusting diuretics.",
  },
  {
    drug_a: "hydrocodone",
    drug_b: "lorazepam",
    severity: "high",
    mechanism:
      "Both depress the central nervous system; combined use significantly raises the risk of profound sedation and fatal respiratory depression.",
    evidence:
      "FDA boxed warning specifically addresses the combination of opioids and benzodiazepines.",
  },
  {
    drug_a: "hydrocodone",
    drug_b: "morphine",
    severity: "moderate",
    mechanism:
      "Combining two opioids adds to central nervous system and respiratory depression without clear added benefit.",
    evidence:
      "Clinical guidelines advise against routinely combining multiple opioid agents outside specialist supervision.",
  },
  {
    drug_a: "hydrocodone",
    drug_b: "oxycodone",
    severity: "moderate",
    mechanism:
      "Combining two opioids adds to central nervous system and respiratory depression without clear added benefit.",
    evidence:
      "Clinical guidelines advise against routinely combining multiple opioid agents outside specialist supervision.",
  },
  {
    drug_a: "hydrocodone",
    drug_b: "temazepam",
    severity: "high",
    mechanism:
      "Both depress the central nervous system; combined use significantly raises the risk of profound sedation and fatal respiratory depression.",
    evidence:
      "FDA boxed warning specifically addresses the combination of opioids and benzodiazepines.",
  },
  {
    drug_a: "hydrocodone",
    drug_b: "zolpidem",
    severity: "high",
    mechanism:
      "Both depress the central nervous system, increasing sedation and respiratory depression risk.",
    evidence:
      "FDA labeling warns against combining opioids with sedative-hypnotics.",
  },
  {
    drug_a: "ibuprofen",
    drug_b: "indomethacin",
    severity: "low",
    mechanism:
      "Combining two NSAIDs adds to GI and renal risk without added therapeutic benefit.",
    evidence:
      "Clinical guidance generally advises against routine use of multiple NSAIDs concurrently.",
  },
  {
    drug_a: "ibuprofen",
    drug_b: "irbesartan",
    severity: "moderate",
    mechanism:
      "NSAIDs can reduce the antihypertensive effect of ARBs and impair renal function.",
    evidence:
      "Documented in hypertension management guidelines.",
  },
  {
    drug_a: "ibuprofen",
    drug_b: "ketorolac",
    severity: "low",
    mechanism:
      "Combining two NSAIDs adds to GI and renal risk without added therapeutic benefit.",
    evidence:
      "Clinical guidance generally advises against routine use of multiple NSAIDs concurrently.",
  },
  {
    drug_a: "ibuprofen",
    drug_b: "lisinopril",
    severity: "moderate",
    mechanism:
      "NSAIDs can reduce the antihypertensive effect of ACE inhibitors and impair renal function.",
    evidence:
      "Documented in hypertension management guidelines.",
  },
  {
    drug_a: "ibuprofen",
    drug_b: "lithium",
    severity: "moderate",
    mechanism:
      "NSAIDs can reduce renal clearance of lithium, raising lithium levels toward toxicity.",
    evidence:
      "Product labeling for lithium warns against combining with NSAIDs without monitoring lithium levels.",
  },
  {
    drug_a: "ibuprofen",
    drug_b: "losartan",
    severity: "moderate",
    mechanism:
      "NSAIDs can reduce the antihypertensive effect of ARBs and impair renal function.",
    evidence:
      "Documented in hypertension management guidelines.",
  },
  {
    drug_a: "ibuprofen",
    drug_b: "meloxicam",
    severity: "low",
    mechanism:
      "Combining two NSAIDs adds to GI and renal risk without added therapeutic benefit.",
    evidence:
      "Clinical guidance generally advises against routine use of multiple NSAIDs concurrently.",
  },
  {
    drug_a: "ibuprofen",
    drug_b: "naproxen",
    severity: "low",
    mechanism:
      "Combining two NSAIDs adds to GI and renal risk without added therapeutic benefit.",
    evidence:
      "Clinical guidance generally advises against routine use of multiple NSAIDs concurrently.",
  },
  {
    drug_a: "ibuprofen",
    drug_b: "olmesartan",
    severity: "moderate",
    mechanism:
      "NSAIDs can reduce the antihypertensive effect of ARBs and impair renal function.",
    evidence:
      "Documented in hypertension management guidelines.",
  },
  {
    drug_a: "ibuprofen",
    drug_b: "paroxetine",
    severity: "moderate",
    mechanism:
      "SSRIs combined with NSAIDs may increase risk of GI bleeding due to reduced platelet serotonin uptake.",
    evidence:
      "Observational studies report elevated bleeding risk with SSRI + NSAID combinations.",
  },
  {
    drug_a: "ibuprofen",
    drug_b: "ramipril",
    severity: "moderate",
    mechanism:
      "NSAIDs can reduce the antihypertensive effect of ACE inhibitors and impair renal function.",
    evidence:
      "Documented in hypertension management guidelines.",
  },
  {
    drug_a: "ibuprofen",
    drug_b: "rivaroxaban",
    severity: "high",
    mechanism:
      "NSAIDs inhibit platelet aggregation and can displace anticoagulants from protein binding, increasing bleeding risk.",
    evidence:
      "Multiple clinical studies show increased GI bleeding risk when NSAIDs are combined with anticoagulants.",
  },
  {
    drug_a: "ibuprofen",
    drug_b: "sertraline",
    severity: "moderate",
    mechanism:
      "SSRIs combined with NSAIDs may increase risk of GI bleeding due to reduced platelet serotonin uptake.",
    evidence:
      "Observational studies report elevated bleeding risk with SSRI + NSAID combinations.",
  },
  {
    drug_a: "ibuprofen",
    drug_b: "valsartan",
    severity: "moderate",
    mechanism:
      "NSAIDs can reduce the antihypertensive effect of ARBs and impair renal function.",
    evidence:
      "Documented in hypertension management guidelines.",
  },
  {
    drug_a: "ibuprofen",
    drug_b: "warfarin",
    severity: "high",
    mechanism:
      "NSAIDs inhibit platelet aggregation and can displace anticoagulants from protein binding, increasing bleeding risk.",
    evidence:
      "Multiple clinical studies show increased GI bleeding risk when NSAIDs are combined with anticoagulants.",
  },
  {
    drug_a: "indomethacin",
    drug_b: "irbesartan",
    severity: "moderate",
    mechanism:
      "NSAIDs can reduce the antihypertensive effect of ARBs and impair renal function.",
    evidence:
      "Documented in hypertension management guidelines.",
  },
  {
    drug_a: "indomethacin",
    drug_b: "ketorolac",
    severity: "low",
    mechanism:
      "Combining two NSAIDs adds to GI and renal risk without added therapeutic benefit.",
    evidence:
      "Clinical guidance generally advises against routine use of multiple NSAIDs concurrently.",
  },
  {
    drug_a: "indomethacin",
    drug_b: "lisinopril",
    severity: "moderate",
    mechanism:
      "NSAIDs can reduce the antihypertensive effect of ACE inhibitors and impair renal function.",
    evidence:
      "Documented in hypertension management guidelines.",
  },
  {
    drug_a: "indomethacin",
    drug_b: "lithium",
    severity: "moderate",
    mechanism:
      "NSAIDs can reduce renal clearance of lithium, raising lithium levels toward toxicity.",
    evidence:
      "Product labeling for lithium warns against combining with NSAIDs without monitoring lithium levels.",
  },
  {
    drug_a: "indomethacin",
    drug_b: "losartan",
    severity: "moderate",
    mechanism:
      "NSAIDs can reduce the antihypertensive effect of ARBs and impair renal function.",
    evidence:
      "Documented in hypertension management guidelines.",
  },
  {
    drug_a: "indomethacin",
    drug_b: "meloxicam",
    severity: "low",
    mechanism:
      "Combining two NSAIDs adds to GI and renal risk without added therapeutic benefit.",
    evidence:
      "Clinical guidance generally advises against routine use of multiple NSAIDs concurrently.",
  },
  {
    drug_a: "indomethacin",
    drug_b: "naproxen",
    severity: "low",
    mechanism:
      "Combining two NSAIDs adds to GI and renal risk without added therapeutic benefit.",
    evidence:
      "Clinical guidance generally advises against routine use of multiple NSAIDs concurrently.",
  },
  {
    drug_a: "indomethacin",
    drug_b: "olmesartan",
    severity: "moderate",
    mechanism:
      "NSAIDs can reduce the antihypertensive effect of ARBs and impair renal function.",
    evidence:
      "Documented in hypertension management guidelines.",
  },
  {
    drug_a: "indomethacin",
    drug_b: "paroxetine",
    severity: "moderate",
    mechanism:
      "SSRIs combined with NSAIDs may increase risk of GI bleeding due to reduced platelet serotonin uptake.",
    evidence:
      "Observational studies report elevated bleeding risk with SSRI + NSAID combinations.",
  },
  {
    drug_a: "indomethacin",
    drug_b: "ramipril",
    severity: "moderate",
    mechanism:
      "NSAIDs can reduce the antihypertensive effect of ACE inhibitors and impair renal function.",
    evidence:
      "Documented in hypertension management guidelines.",
  },
  {
    drug_a: "indomethacin",
    drug_b: "rivaroxaban",
    severity: "high",
    mechanism:
      "NSAIDs inhibit platelet aggregation and can displace anticoagulants from protein binding, increasing bleeding risk.",
    evidence:
      "Multiple clinical studies show increased GI bleeding risk when NSAIDs are combined with anticoagulants.",
  },
  {
    drug_a: "indomethacin",
    drug_b: "sertraline",
    severity: "moderate",
    mechanism:
      "SSRIs combined with NSAIDs may increase risk of GI bleeding due to reduced platelet serotonin uptake.",
    evidence:
      "Observational studies report elevated bleeding risk with SSRI + NSAID combinations.",
  },
  {
    drug_a: "indomethacin",
    drug_b: "valsartan",
    severity: "moderate",
    mechanism:
      "NSAIDs can reduce the antihypertensive effect of ARBs and impair renal function.",
    evidence:
      "Documented in hypertension management guidelines.",
  },
  {
    drug_a: "indomethacin",
    drug_b: "warfarin",
    severity: "high",
    mechanism:
      "NSAIDs inhibit platelet aggregation and can displace anticoagulants from protein binding, increasing bleeding risk.",
    evidence:
      "Multiple clinical studies show increased GI bleeding risk when NSAIDs are combined with anticoagulants.",
  },
  {
    drug_a: "insulin_glargine",
    drug_b: "methylprednisolone",
    severity: "moderate",
    mechanism:
      "Corticosteroids can raise blood glucose, counteracting the glucose-lowering effect of antidiabetic medications.",
    evidence:
      "Clinical monitoring guidelines suggest glucose monitoring when combined.",
  },
  {
    drug_a: "insulin_glargine",
    drug_b: "metoprolol",
    severity: "moderate",
    mechanism:
      "Beta blockers can mask the warning signs of hypoglycemia such as tremor and rapid heartbeat.",
    evidence:
      "Clinical guidelines advise caution and closer glucose monitoring when combined.",
  },
  {
    drug_a: "insulin_glargine",
    drug_b: "prednisone",
    severity: "moderate",
    mechanism:
      "Corticosteroids can raise blood glucose, counteracting the glucose-lowering effect of antidiabetic medications.",
    evidence:
      "Clinical monitoring guidelines suggest glucose monitoring when combined.",
  },
  {
    drug_a: "insulin_glargine",
    drug_b: "propranolol",
    severity: "moderate",
    mechanism:
      "Beta blockers can mask the warning signs of hypoglycemia such as tremor and rapid heartbeat.",
    evidence:
      "Clinical guidelines advise caution and closer glucose monitoring when combined.",
  },
  {
    drug_a: "irbesartan",
    drug_b: "ketorolac",
    severity: "moderate",
    mechanism:
      "NSAIDs can reduce the antihypertensive effect of ARBs and impair renal function.",
    evidence:
      "Documented in hypertension management guidelines.",
  },
  {
    drug_a: "irbesartan",
    drug_b: "lisinopril",
    severity: "moderate",
    mechanism:
      "Dual blockade of the renin-angiotensin system can increase risk of hyperkalemia and hypotension.",
    evidence:
      "Guidelines generally recommend against combining ACE inhibitors with ARBs.",
  },
  {
    drug_a: "irbesartan",
    drug_b: "meloxicam",
    severity: "moderate",
    mechanism:
      "NSAIDs can reduce the antihypertensive effect of ARBs and impair renal function.",
    evidence:
      "Documented in hypertension management guidelines.",
  },
  {
    drug_a: "irbesartan",
    drug_b: "naproxen",
    severity: "moderate",
    mechanism:
      "NSAIDs can reduce the antihypertensive effect of ARBs and impair renal function.",
    evidence:
      "Documented in hypertension management guidelines.",
  },
  {
    drug_a: "irbesartan",
    drug_b: "ramipril",
    severity: "moderate",
    mechanism:
      "Dual blockade of the renin-angiotensin system can increase risk of hyperkalemia and hypotension.",
    evidence:
      "Guidelines generally recommend against combining ACE inhibitors with ARBs.",
  },
  {
    drug_a: "irbesartan",
    drug_b: "spironolactone",
    severity: "moderate",
    mechanism:
      "Both raise serum potassium; combined use increases the risk of hyperkalemia.",
    evidence:
      "Clinical monitoring guidelines recommend checking potassium when combining these agents.",
  },
  {
    drug_a: "ketorolac",
    drug_b: "lisinopril",
    severity: "moderate",
    mechanism:
      "NSAIDs can reduce the antihypertensive effect of ACE inhibitors and impair renal function.",
    evidence:
      "Documented in hypertension management guidelines.",
  },
  {
    drug_a: "ketorolac",
    drug_b: "lithium",
    severity: "moderate",
    mechanism:
      "NSAIDs can reduce renal clearance of lithium, raising lithium levels toward toxicity.",
    evidence:
      "Product labeling for lithium warns against combining with NSAIDs without monitoring lithium levels.",
  },
  {
    drug_a: "ketorolac",
    drug_b: "losartan",
    severity: "moderate",
    mechanism:
      "NSAIDs can reduce the antihypertensive effect of ARBs and impair renal function.",
    evidence:
      "Documented in hypertension management guidelines.",
  },
  {
    drug_a: "ketorolac",
    drug_b: "meloxicam",
    severity: "low",
    mechanism:
      "Combining two NSAIDs adds to GI and renal risk without added therapeutic benefit.",
    evidence:
      "Clinical guidance generally advises against routine use of multiple NSAIDs concurrently.",
  },
  {
    drug_a: "ketorolac",
    drug_b: "naproxen",
    severity: "low",
    mechanism:
      "Combining two NSAIDs adds to GI and renal risk without added therapeutic benefit.",
    evidence:
      "Clinical guidance generally advises against routine use of multiple NSAIDs concurrently.",
  },
  {
    drug_a: "ketorolac",
    drug_b: "olmesartan",
    severity: "moderate",
    mechanism:
      "NSAIDs can reduce the antihypertensive effect of ARBs and impair renal function.",
    evidence:
      "Documented in hypertension management guidelines.",
  },
  {
    drug_a: "ketorolac",
    drug_b: "paroxetine",
    severity: "moderate",
    mechanism:
      "SSRIs combined with NSAIDs may increase risk of GI bleeding due to reduced platelet serotonin uptake.",
    evidence:
      "Observational studies report elevated bleeding risk with SSRI + NSAID combinations.",
  },
  {
    drug_a: "ketorolac",
    drug_b: "ramipril",
    severity: "moderate",
    mechanism:
      "NSAIDs can reduce the antihypertensive effect of ACE inhibitors and impair renal function.",
    evidence:
      "Documented in hypertension management guidelines.",
  },
  {
    drug_a: "ketorolac",
    drug_b: "rivaroxaban",
    severity: "high",
    mechanism:
      "NSAIDs inhibit platelet aggregation and can displace anticoagulants from protein binding, increasing bleeding risk.",
    evidence:
      "Multiple clinical studies show increased GI bleeding risk when NSAIDs are combined with anticoagulants.",
  },
  {
    drug_a: "ketorolac",
    drug_b: "sertraline",
    severity: "moderate",
    mechanism:
      "SSRIs combined with NSAIDs may increase risk of GI bleeding due to reduced platelet serotonin uptake.",
    evidence:
      "Observational studies report elevated bleeding risk with SSRI + NSAID combinations.",
  },
  {
    drug_a: "ketorolac",
    drug_b: "valsartan",
    severity: "moderate",
    mechanism:
      "NSAIDs can reduce the antihypertensive effect of ARBs and impair renal function.",
    evidence:
      "Documented in hypertension management guidelines.",
  },
  {
    drug_a: "ketorolac",
    drug_b: "warfarin",
    severity: "high",
    mechanism:
      "NSAIDs inhibit platelet aggregation and can displace anticoagulants from protein binding, increasing bleeding risk.",
    evidence:
      "Multiple clinical studies show increased GI bleeding risk when NSAIDs are combined with anticoagulants.",
  },
  {
    drug_a: "lamotrigine",
    drug_b: "phenytoin",
    severity: "low",
    mechanism:
      "Combining certain antiepileptics can alter one another's blood levels via shared metabolic pathways.",
    evidence:
      "Product labeling recommends monitoring levels when combining these agents.",
  },
  {
    drug_a: "lamotrigine",
    drug_b: "rivaroxaban",
    severity: "moderate",
    mechanism:
      "Several antiepileptics induce hepatic enzymes that alter anticoagulant metabolism, making dosing harder to stabilize.",
    evidence:
      "Guidelines recommend close INR monitoring when combining enzyme-inducing antiepileptics with anticoagulants.",
  },
  {
    drug_a: "lamotrigine",
    drug_b: "valproate",
    severity: "low",
    mechanism:
      "Combining certain antiepileptics can alter one another's blood levels via shared metabolic pathways.",
    evidence:
      "Product labeling recommends monitoring levels when combining these agents.",
  },
  {
    drug_a: "lamotrigine",
    drug_b: "warfarin",
    severity: "moderate",
    mechanism:
      "Several antiepileptics induce hepatic enzymes that alter anticoagulant metabolism, making dosing harder to stabilize.",
    evidence:
      "Guidelines recommend close INR monitoring when combining enzyme-inducing antiepileptics with anticoagulants.",
  },
  {
    drug_a: "lansoprazole",
    drug_b: "levothyroxine",
    severity: "low",
    mechanism:
      "Reduced gastric acidity from PPIs may impair levothyroxine absorption.",
    evidence:
      "Case reports suggest spacing doses can mitigate the effect.",
  },
  {
    drug_a: "levofloxacin",
    drug_b: "lovastatin",
    severity: "low",
    mechanism:
      "Some evidence suggests a modest additive risk of muscle-related effects when combined.",
    evidence:
      "Evidence is limited; clinical significance is considered minor for most patients.",
  },
  {
    drug_a: "levofloxacin",
    drug_b: "pravastatin",
    severity: "low",
    mechanism:
      "Some evidence suggests a modest additive risk of muscle-related effects when combined.",
    evidence:
      "Evidence is limited; clinical significance is considered minor for most patients.",
  },
  {
    drug_a: "levofloxacin",
    drug_b: "rosuvastatin",
    severity: "low",
    mechanism:
      "Some evidence suggests a modest additive risk of muscle-related effects when combined.",
    evidence:
      "Evidence is limited; clinical significance is considered minor for most patients.",
  },
  {
    drug_a: "levofloxacin",
    drug_b: "simvastatin",
    severity: "low",
    mechanism:
      "Some evidence suggests a modest additive risk of muscle-related effects when combined.",
    evidence:
      "Evidence is limited; clinical significance is considered minor for most patients.",
  },
  {
    drug_a: "levothyroxine",
    drug_b: "omeprazole",
    severity: "low",
    mechanism:
      "Reduced gastric acidity from PPIs may impair levothyroxine absorption.",
    evidence:
      "Case reports suggest spacing doses can mitigate the effect.",
  },
  {
    drug_a: "levothyroxine",
    drug_b: "pantoprazole",
    severity: "low",
    mechanism:
      "Reduced gastric acidity from PPIs may impair levothyroxine absorption.",
    evidence:
      "Case reports suggest spacing doses can mitigate the effect.",
  },
  {
    drug_a: "lisinopril",
    drug_b: "lithium",
    severity: "moderate",
    mechanism:
      "ACE inhibitors can reduce renal clearance of lithium, raising lithium levels toward toxicity.",
    evidence:
      "Product labeling for lithium warns against combining with ACE inhibitors without monitoring lithium levels.",
  },
  {
    drug_a: "lisinopril",
    drug_b: "losartan",
    severity: "moderate",
    mechanism:
      "Dual blockade of the renin-angiotensin system can increase risk of hyperkalemia and hypotension.",
    evidence:
      "Guidelines generally recommend against combining ACE inhibitors with ARBs.",
  },
  {
    drug_a: "lisinopril",
    drug_b: "meloxicam",
    severity: "moderate",
    mechanism:
      "NSAIDs can reduce the antihypertensive effect of ACE inhibitors and impair renal function.",
    evidence:
      "Documented in hypertension management guidelines.",
  },
  {
    drug_a: "lisinopril",
    drug_b: "naproxen",
    severity: "moderate",
    mechanism:
      "NSAIDs can reduce the antihypertensive effect of ACE inhibitors and impair renal function.",
    evidence:
      "Documented in hypertension management guidelines.",
  },
  {
    drug_a: "lisinopril",
    drug_b: "olmesartan",
    severity: "moderate",
    mechanism:
      "Dual blockade of the renin-angiotensin system can increase risk of hyperkalemia and hypotension.",
    evidence:
      "Guidelines generally recommend against combining ACE inhibitors with ARBs.",
  },
  {
    drug_a: "lisinopril",
    drug_b: "spironolactone",
    severity: "moderate",
    mechanism:
      "Both raise serum potassium; combined use increases the risk of hyperkalemia.",
    evidence:
      "Clinical monitoring guidelines recommend checking potassium when combining these agents.",
  },
  {
    drug_a: "lisinopril",
    drug_b: "valsartan",
    severity: "moderate",
    mechanism:
      "Dual blockade of the renin-angiotensin system can increase risk of hyperkalemia and hypotension.",
    evidence:
      "Guidelines generally recommend against combining ACE inhibitors with ARBs.",
  },
  {
    drug_a: "lithium",
    drug_b: "meloxicam",
    severity: "moderate",
    mechanism:
      "NSAIDs can reduce renal clearance of lithium, raising lithium levels toward toxicity.",
    evidence:
      "Product labeling for lithium warns against combining with NSAIDs without monitoring lithium levels.",
  },
  {
    drug_a: "lithium",
    drug_b: "naproxen",
    severity: "moderate",
    mechanism:
      "NSAIDs can reduce renal clearance of lithium, raising lithium levels toward toxicity.",
    evidence:
      "Product labeling for lithium warns against combining with NSAIDs without monitoring lithium levels.",
  },
  {
    drug_a: "lithium",
    drug_b: "ramipril",
    severity: "moderate",
    mechanism:
      "ACE inhibitors can reduce renal clearance of lithium, raising lithium levels toward toxicity.",
    evidence:
      "Product labeling for lithium warns against combining with ACE inhibitors without monitoring lithium levels.",
  },
  {
    drug_a: "lorazepam",
    drug_b: "morphine",
    severity: "high",
    mechanism:
      "Both depress the central nervous system; combined use significantly raises the risk of profound sedation and fatal respiratory depression.",
    evidence:
      "FDA boxed warning specifically addresses the combination of opioids and benzodiazepines.",
  },
  {
    drug_a: "lorazepam",
    drug_b: "olanzapine",
    severity: "moderate",
    mechanism:
      "Both cause CNS depression; combined use increases sedation and, in vulnerable patients, respiratory depression risk.",
    evidence:
      "Clinical guidance recommends caution when combining antipsychotics with benzodiazepines, especially in older adults.",
  },
  {
    drug_a: "lorazepam",
    drug_b: "oxycodone",
    severity: "high",
    mechanism:
      "Both depress the central nervous system; combined use significantly raises the risk of profound sedation and fatal respiratory depression.",
    evidence:
      "FDA boxed warning specifically addresses the combination of opioids and benzodiazepines.",
  },
  {
    drug_a: "lorazepam",
    drug_b: "quetiapine",
    severity: "moderate",
    mechanism:
      "Both cause CNS depression; combined use increases sedation and, in vulnerable patients, respiratory depression risk.",
    evidence:
      "Clinical guidance recommends caution when combining antipsychotics with benzodiazepines, especially in older adults.",
  },
  {
    drug_a: "lorazepam",
    drug_b: "risperidone",
    severity: "moderate",
    mechanism:
      "Both cause CNS depression; combined use increases sedation and, in vulnerable patients, respiratory depression risk.",
    evidence:
      "Clinical guidance recommends caution when combining antipsychotics with benzodiazepines, especially in older adults.",
  },
  {
    drug_a: "lorazepam",
    drug_b: "temazepam",
    severity: "high",
    mechanism:
      "Additive central nervous system depression from combining two benzodiazepines.",
    evidence:
      "Clinical guidance advises against concurrent benzodiazepine use due to sedation and respiratory depression risk.",
  },
  {
    drug_a: "lorazepam",
    drug_b: "zolpidem",
    severity: "high",
    mechanism:
      "Additive CNS depression between benzodiazepines and non-benzodiazepine hypnotics increases sedation and fall risk.",
    evidence:
      "Clinical guidance recommends avoiding concurrent use of multiple sedative-hypnotic agents.",
  },
  {
    drug_a: "losartan",
    drug_b: "meloxicam",
    severity: "moderate",
    mechanism:
      "NSAIDs can reduce the antihypertensive effect of ARBs and impair renal function.",
    evidence:
      "Documented in hypertension management guidelines.",
  },
  {
    drug_a: "losartan",
    drug_b: "naproxen",
    severity: "moderate",
    mechanism:
      "NSAIDs can reduce the antihypertensive effect of ARBs and impair renal function.",
    evidence:
      "Documented in hypertension management guidelines.",
  },
  {
    drug_a: "losartan",
    drug_b: "ramipril",
    severity: "moderate",
    mechanism:
      "Dual blockade of the renin-angiotensin system can increase risk of hyperkalemia and hypotension.",
    evidence:
      "Guidelines generally recommend against combining ACE inhibitors with ARBs.",
  },
  {
    drug_a: "losartan",
    drug_b: "spironolactone",
    severity: "moderate",
    mechanism:
      "Both raise serum potassium; combined use increases the risk of hyperkalemia.",
    evidence:
      "Clinical monitoring guidelines recommend checking potassium when combining these agents.",
  },
  {
    drug_a: "meloxicam",
    drug_b: "naproxen",
    severity: "low",
    mechanism:
      "Combining two NSAIDs adds to GI and renal risk without added therapeutic benefit.",
    evidence:
      "Clinical guidance generally advises against routine use of multiple NSAIDs concurrently.",
  },
  {
    drug_a: "meloxicam",
    drug_b: "olmesartan",
    severity: "moderate",
    mechanism:
      "NSAIDs can reduce the antihypertensive effect of ARBs and impair renal function.",
    evidence:
      "Documented in hypertension management guidelines.",
  },
  {
    drug_a: "meloxicam",
    drug_b: "paroxetine",
    severity: "moderate",
    mechanism:
      "SSRIs combined with NSAIDs may increase risk of GI bleeding due to reduced platelet serotonin uptake.",
    evidence:
      "Observational studies report elevated bleeding risk with SSRI + NSAID combinations.",
  },
  {
    drug_a: "meloxicam",
    drug_b: "ramipril",
    severity: "moderate",
    mechanism:
      "NSAIDs can reduce the antihypertensive effect of ACE inhibitors and impair renal function.",
    evidence:
      "Documented in hypertension management guidelines.",
  },
  {
    drug_a: "meloxicam",
    drug_b: "rivaroxaban",
    severity: "high",
    mechanism:
      "NSAIDs inhibit platelet aggregation and can displace anticoagulants from protein binding, increasing bleeding risk.",
    evidence:
      "Multiple clinical studies show increased GI bleeding risk when NSAIDs are combined with anticoagulants.",
  },
  {
    drug_a: "meloxicam",
    drug_b: "sertraline",
    severity: "moderate",
    mechanism:
      "SSRIs combined with NSAIDs may increase risk of GI bleeding due to reduced platelet serotonin uptake.",
    evidence:
      "Observational studies report elevated bleeding risk with SSRI + NSAID combinations.",
  },
  {
    drug_a: "meloxicam",
    drug_b: "valsartan",
    severity: "moderate",
    mechanism:
      "NSAIDs can reduce the antihypertensive effect of ARBs and impair renal function.",
    evidence:
      "Documented in hypertension management guidelines.",
  },
  {
    drug_a: "meloxicam",
    drug_b: "warfarin",
    severity: "high",
    mechanism:
      "NSAIDs inhibit platelet aggregation and can displace anticoagulants from protein binding, increasing bleeding risk.",
    evidence:
      "Multiple clinical studies show increased GI bleeding risk when NSAIDs are combined with anticoagulants.",
  },
  {
    drug_a: "metformin",
    drug_b: "methylprednisolone",
    severity: "moderate",
    mechanism:
      "Corticosteroids can raise blood glucose, counteracting the glucose-lowering effect of antidiabetic medications.",
    evidence:
      "Clinical monitoring guidelines suggest glucose monitoring when combined.",
  },
  {
    drug_a: "metformin",
    drug_b: "metoprolol",
    severity: "moderate",
    mechanism:
      "Beta blockers can mask the warning signs of hypoglycemia such as tremor and rapid heartbeat.",
    evidence:
      "Clinical guidelines advise caution and closer glucose monitoring when combined.",
  },
  {
    drug_a: "metformin",
    drug_b: "prednisone",
    severity: "moderate",
    mechanism:
      "Corticosteroids can raise blood glucose, counteracting the glucose-lowering effect of antidiabetic medications.",
    evidence:
      "Clinical monitoring guidelines suggest glucose monitoring when combined.",
  },
  {
    drug_a: "metformin",
    drug_b: "propranolol",
    severity: "moderate",
    mechanism:
      "Beta blockers can mask the warning signs of hypoglycemia such as tremor and rapid heartbeat.",
    evidence:
      "Clinical guidelines advise caution and closer glucose monitoring when combined.",
  },
  {
    drug_a: "metoprolol",
    drug_b: "propranolol",
    severity: "low",
    mechanism:
      "Combining two beta blockers adds to heart-rate-lowering effects without added benefit.",
    evidence:
      "Clinical guidance generally advises against routine use of multiple beta blockers concurrently.",
  },
  {
    drug_a: "metoprolol",
    drug_b: "verapamil",
    severity: "moderate",
    mechanism:
      "Both slow cardiac conduction; combined use can cause excessive bradycardia or heart block.",
    evidence:
      "Clinical guidelines recommend caution and ECG monitoring when combining these agents, particularly non-dihydropyridine calcium channel blockers.",
  },
  {
    drug_a: "morphine",
    drug_b: "oxycodone",
    severity: "moderate",
    mechanism:
      "Combining two opioids adds to central nervous system and respiratory depression without clear added benefit.",
    evidence:
      "Clinical guidelines advise against routinely combining multiple opioid agents outside specialist supervision.",
  },
  {
    drug_a: "morphine",
    drug_b: "temazepam",
    severity: "high",
    mechanism:
      "Both depress the central nervous system; combined use significantly raises the risk of profound sedation and fatal respiratory depression.",
    evidence:
      "FDA boxed warning specifically addresses the combination of opioids and benzodiazepines.",
  },
  {
    drug_a: "morphine",
    drug_b: "zolpidem",
    severity: "high",
    mechanism:
      "Both depress the central nervous system, increasing sedation and respiratory depression risk.",
    evidence:
      "FDA labeling warns against combining opioids with sedative-hypnotics.",
  },
  {
    drug_a: "naproxen",
    drug_b: "olmesartan",
    severity: "moderate",
    mechanism:
      "NSAIDs can reduce the antihypertensive effect of ARBs and impair renal function.",
    evidence:
      "Documented in hypertension management guidelines.",
  },
  {
    drug_a: "naproxen",
    drug_b: "paroxetine",
    severity: "moderate",
    mechanism:
      "SSRIs combined with NSAIDs may increase risk of GI bleeding due to reduced platelet serotonin uptake.",
    evidence:
      "Observational studies report elevated bleeding risk with SSRI + NSAID combinations.",
  },
  {
    drug_a: "naproxen",
    drug_b: "ramipril",
    severity: "moderate",
    mechanism:
      "NSAIDs can reduce the antihypertensive effect of ACE inhibitors and impair renal function.",
    evidence:
      "Documented in hypertension management guidelines.",
  },
  {
    drug_a: "naproxen",
    drug_b: "rivaroxaban",
    severity: "high",
    mechanism:
      "NSAIDs inhibit platelet aggregation and can displace anticoagulants from protein binding, increasing bleeding risk.",
    evidence:
      "Multiple clinical studies show increased GI bleeding risk when NSAIDs are combined with anticoagulants.",
  },
  {
    drug_a: "naproxen",
    drug_b: "sertraline",
    severity: "moderate",
    mechanism:
      "SSRIs combined with NSAIDs may increase risk of GI bleeding due to reduced platelet serotonin uptake.",
    evidence:
      "Observational studies report elevated bleeding risk with SSRI + NSAID combinations.",
  },
  {
    drug_a: "naproxen",
    drug_b: "valsartan",
    severity: "moderate",
    mechanism:
      "NSAIDs can reduce the antihypertensive effect of ARBs and impair renal function.",
    evidence:
      "Documented in hypertension management guidelines.",
  },
  {
    drug_a: "naproxen",
    drug_b: "warfarin",
    severity: "high",
    mechanism:
      "NSAIDs inhibit platelet aggregation and can displace anticoagulants from protein binding, increasing bleeding risk.",
    evidence:
      "Multiple clinical studies show increased GI bleeding risk when NSAIDs are combined with anticoagulants.",
  },
  {
    drug_a: "olanzapine",
    drug_b: "temazepam",
    severity: "moderate",
    mechanism:
      "Both cause CNS depression; combined use increases sedation and, in vulnerable patients, respiratory depression risk.",
    evidence:
      "Clinical guidance recommends caution when combining antipsychotics with benzodiazepines, especially in older adults.",
  },
  {
    drug_a: "olanzapine",
    drug_b: "tramadol",
    severity: "low",
    mechanism:
      "Some antipsychotics have mild serotonergic activity that may add to that of other serotonergic agents.",
    evidence:
      "Evidence is limited; clinical significance is considered minor for most patients but worth noting.",
  },
  {
    drug_a: "olanzapine",
    drug_b: "trazodone",
    severity: "low",
    mechanism:
      "Some antipsychotics have mild serotonergic activity that may add to that of other serotonergic agents.",
    evidence:
      "Evidence is limited; clinical significance is considered minor for most patients but worth noting.",
  },
  {
    drug_a: "olmesartan",
    drug_b: "ramipril",
    severity: "moderate",
    mechanism:
      "Dual blockade of the renin-angiotensin system can increase risk of hyperkalemia and hypotension.",
    evidence:
      "Guidelines generally recommend against combining ACE inhibitors with ARBs.",
  },
  {
    drug_a: "olmesartan",
    drug_b: "spironolactone",
    severity: "moderate",
    mechanism:
      "Both raise serum potassium; combined use increases the risk of hyperkalemia.",
    evidence:
      "Clinical monitoring guidelines recommend checking potassium when combining these agents.",
  },
  {
    drug_a: "oxycodone",
    drug_b: "temazepam",
    severity: "high",
    mechanism:
      "Both depress the central nervous system; combined use significantly raises the risk of profound sedation and fatal respiratory depression.",
    evidence:
      "FDA boxed warning specifically addresses the combination of opioids and benzodiazepines.",
  },
  {
    drug_a: "oxycodone",
    drug_b: "zolpidem",
    severity: "high",
    mechanism:
      "Both depress the central nervous system, increasing sedation and respiratory depression risk.",
    evidence:
      "FDA labeling warns against combining opioids with sedative-hypnotics.",
  },
  {
    drug_a: "paroxetine",
    drug_b: "phenelzine",
    severity: "high",
    mechanism:
      "Both increase serotonin activity; combining them can precipitate serotonin syndrome.",
    evidence:
      "FDA labeling contraindicates combining SSRIs with MAOIs due to serotonergic effects.",
  },
  {
    drug_a: "paroxetine",
    drug_b: "rivaroxaban",
    severity: "moderate",
    mechanism:
      "SSRIs impair platelet aggregation and, combined with anticoagulants, can further raise bleeding risk.",
    evidence:
      "Cohort studies report increased bleeding events with SSRI + anticoagulant combinations.",
  },
  {
    drug_a: "paroxetine",
    drug_b: "tramadol",
    severity: "high",
    mechanism:
      "Both increase serotonin activity, raising the risk of serotonin syndrome.",
    evidence:
      "FDA labeling warns against combining SSRIs with other serotonergic agents such as tramadol.",
  },
  {
    drug_a: "paroxetine",
    drug_b: "tranylcypromine",
    severity: "high",
    mechanism:
      "Both increase serotonin activity; combining them can precipitate serotonin syndrome.",
    evidence:
      "FDA labeling contraindicates combining SSRIs with MAOIs due to serotonergic effects.",
  },
  {
    drug_a: "paroxetine",
    drug_b: "trazodone",
    severity: "high",
    mechanism:
      "Both increase serotonin activity, raising the risk of serotonin syndrome.",
    evidence:
      "FDA labeling warns against combining SSRIs with other serotonergic agents such as tramadol.",
  },
  {
    drug_a: "paroxetine",
    drug_b: "warfarin",
    severity: "moderate",
    mechanism:
      "SSRIs impair platelet aggregation and, combined with anticoagulants, can further raise bleeding risk.",
    evidence:
      "Cohort studies report increased bleeding events with SSRI + anticoagulant combinations.",
  },
  {
    drug_a: "phenelzine",
    drug_b: "sertraline",
    severity: "high",
    mechanism:
      "Both increase serotonin activity; combining them can precipitate serotonin syndrome.",
    evidence:
      "FDA labeling contraindicates combining SSRIs with MAOIs due to serotonergic effects.",
  },
  {
    drug_a: "phenelzine",
    drug_b: "tramadol",
    severity: "high",
    mechanism:
      "Both increase serotonin activity, raising the risk of serotonin syndrome.",
    evidence:
      "FDA labeling warns against combining serotonergic agents with MAOIs.",
  },
  {
    drug_a: "phenelzine",
    drug_b: "trazodone",
    severity: "high",
    mechanism:
      "Both increase serotonin activity, raising the risk of serotonin syndrome.",
    evidence:
      "FDA labeling warns against combining serotonergic agents with MAOIs.",
  },
  {
    drug_a: "phenelzine",
    drug_b: "venlafaxine",
    severity: "high",
    mechanism:
      "Both increase serotonin and norepinephrine activity, raising the risk of serotonin syndrome and hypertensive crisis.",
    evidence:
      "FDA labeling contraindicates combining SNRIs with MAOIs.",
  },
  {
    drug_a: "phenytoin",
    drug_b: "rivaroxaban",
    severity: "moderate",
    mechanism:
      "Several antiepileptics induce hepatic enzymes that alter anticoagulant metabolism, making dosing harder to stabilize.",
    evidence:
      "Guidelines recommend close INR monitoring when combining enzyme-inducing antiepileptics with anticoagulants.",
  },
  {
    drug_a: "phenytoin",
    drug_b: "valproate",
    severity: "low",
    mechanism:
      "Combining certain antiepileptics can alter one another's blood levels via shared metabolic pathways.",
    evidence:
      "Product labeling recommends monitoring levels when combining these agents.",
  },
  {
    drug_a: "phenytoin",
    drug_b: "warfarin",
    severity: "moderate",
    mechanism:
      "Several antiepileptics induce hepatic enzymes that alter anticoagulant metabolism, making dosing harder to stabilize.",
    evidence:
      "Guidelines recommend close INR monitoring when combining enzyme-inducing antiepileptics with anticoagulants.",
  },
  {
    drug_a: "propranolol",
    drug_b: "verapamil",
    severity: "moderate",
    mechanism:
      "Both slow cardiac conduction; combined use can cause excessive bradycardia or heart block.",
    evidence:
      "Clinical guidelines recommend caution and ECG monitoring when combining these agents, particularly non-dihydropyridine calcium channel blockers.",
  },
  {
    drug_a: "quetiapine",
    drug_b: "temazepam",
    severity: "moderate",
    mechanism:
      "Both cause CNS depression; combined use increases sedation and, in vulnerable patients, respiratory depression risk.",
    evidence:
      "Clinical guidance recommends caution when combining antipsychotics with benzodiazepines, especially in older adults.",
  },
  {
    drug_a: "quetiapine",
    drug_b: "tramadol",
    severity: "low",
    mechanism:
      "Some antipsychotics have mild serotonergic activity that may add to that of other serotonergic agents.",
    evidence:
      "Evidence is limited; clinical significance is considered minor for most patients but worth noting.",
  },
  {
    drug_a: "quetiapine",
    drug_b: "trazodone",
    severity: "low",
    mechanism:
      "Some antipsychotics have mild serotonergic activity that may add to that of other serotonergic agents.",
    evidence:
      "Evidence is limited; clinical significance is considered minor for most patients but worth noting.",
  },
  {
    drug_a: "ramipril",
    drug_b: "spironolactone",
    severity: "moderate",
    mechanism:
      "Both raise serum potassium; combined use increases the risk of hyperkalemia.",
    evidence:
      "Clinical monitoring guidelines recommend checking potassium when combining these agents.",
  },
  {
    drug_a: "ramipril",
    drug_b: "valsartan",
    severity: "moderate",
    mechanism:
      "Dual blockade of the renin-angiotensin system can increase risk of hyperkalemia and hypotension.",
    evidence:
      "Guidelines generally recommend against combining ACE inhibitors with ARBs.",
  },
  {
    drug_a: "risperidone",
    drug_b: "temazepam",
    severity: "moderate",
    mechanism:
      "Both cause CNS depression; combined use increases sedation and, in vulnerable patients, respiratory depression risk.",
    evidence:
      "Clinical guidance recommends caution when combining antipsychotics with benzodiazepines, especially in older adults.",
  },
  {
    drug_a: "risperidone",
    drug_b: "tramadol",
    severity: "low",
    mechanism:
      "Some antipsychotics have mild serotonergic activity that may add to that of other serotonergic agents.",
    evidence:
      "Evidence is limited; clinical significance is considered minor for most patients but worth noting.",
  },
  {
    drug_a: "risperidone",
    drug_b: "trazodone",
    severity: "low",
    mechanism:
      "Some antipsychotics have mild serotonergic activity that may add to that of other serotonergic agents.",
    evidence:
      "Evidence is limited; clinical significance is considered minor for most patients but worth noting.",
  },
  {
    drug_a: "rivaroxaban",
    drug_b: "sertraline",
    severity: "moderate",
    mechanism:
      "SSRIs impair platelet aggregation and, combined with anticoagulants, can further raise bleeding risk.",
    evidence:
      "Cohort studies report increased bleeding events with SSRI + anticoagulant combinations.",
  },
  {
    drug_a: "rivaroxaban",
    drug_b: "valproate",
    severity: "moderate",
    mechanism:
      "Several antiepileptics induce hepatic enzymes that alter anticoagulant metabolism, making dosing harder to stabilize.",
    evidence:
      "Guidelines recommend close INR monitoring when combining enzyme-inducing antiepileptics with anticoagulants.",
  },
  {
    drug_a: "rivaroxaban",
    drug_b: "warfarin",
    severity: "high",
    mechanism:
      "Combining two anticoagulants compounds bleeding risk without a clear additional therapeutic benefit.",
    evidence:
      "Clinical guidelines generally advise against combining anticoagulants outside of specific supervised protocols.",
  },
  {
    drug_a: "sertraline",
    drug_b: "tramadol",
    severity: "high",
    mechanism:
      "Both increase serotonin activity, raising the risk of serotonin syndrome.",
    evidence:
      "FDA labeling warns against combining SSRIs with other serotonergic agents such as tramadol.",
  },
  {
    drug_a: "sertraline",
    drug_b: "tranylcypromine",
    severity: "high",
    mechanism:
      "Both increase serotonin activity; combining them can precipitate serotonin syndrome.",
    evidence:
      "FDA labeling contraindicates combining SSRIs with MAOIs due to serotonergic effects.",
  },
  {
    drug_a: "sertraline",
    drug_b: "trazodone",
    severity: "high",
    mechanism:
      "Both increase serotonin activity, raising the risk of serotonin syndrome.",
    evidence:
      "FDA labeling warns against combining SSRIs with other serotonergic agents such as tramadol.",
  },
  {
    drug_a: "sertraline",
    drug_b: "warfarin",
    severity: "moderate",
    mechanism:
      "SSRIs impair platelet aggregation and, combined with anticoagulants, can further raise bleeding risk.",
    evidence:
      "Cohort studies report increased bleeding events with SSRI + anticoagulant combinations.",
  },
  {
    drug_a: "spironolactone",
    drug_b: "valsartan",
    severity: "moderate",
    mechanism:
      "Both raise serum potassium; combined use increases the risk of hyperkalemia.",
    evidence:
      "Clinical monitoring guidelines recommend checking potassium when combining these agents.",
  },
  {
    drug_a: "temazepam",
    drug_b: "zolpidem",
    severity: "high",
    mechanism:
      "Additive CNS depression between benzodiazepines and non-benzodiazepine hypnotics increases sedation and fall risk.",
    evidence:
      "Clinical guidance recommends avoiding concurrent use of multiple sedative-hypnotic agents.",
  },
  {
    drug_a: "tramadol",
    drug_b: "tranylcypromine",
    severity: "high",
    mechanism:
      "Both increase serotonin activity, raising the risk of serotonin syndrome.",
    evidence:
      "FDA labeling warns against combining serotonergic agents with MAOIs.",
  },
  {
    drug_a: "tramadol",
    drug_b: "venlafaxine",
    severity: "high",
    mechanism:
      "Both increase serotonin activity, raising the risk of serotonin syndrome.",
    evidence:
      "Case reports and FDA labeling describe elevated serotonin syndrome risk with this combination.",
  },
  {
    drug_a: "tranylcypromine",
    drug_b: "trazodone",
    severity: "high",
    mechanism:
      "Both increase serotonin activity, raising the risk of serotonin syndrome.",
    evidence:
      "FDA labeling warns against combining serotonergic agents with MAOIs.",
  },
  {
    drug_a: "tranylcypromine",
    drug_b: "venlafaxine",
    severity: "high",
    mechanism:
      "Both increase serotonin and norepinephrine activity, raising the risk of serotonin syndrome and hypertensive crisis.",
    evidence:
      "FDA labeling contraindicates combining SNRIs with MAOIs.",
  },
  {
    drug_a: "trazodone",
    drug_b: "venlafaxine",
    severity: "high",
    mechanism:
      "Both increase serotonin activity, raising the risk of serotonin syndrome.",
    evidence:
      "Case reports and FDA labeling describe elevated serotonin syndrome risk with this combination.",
  },
  {
    drug_a: "valproate",
    drug_b: "warfarin",
    severity: "moderate",
    mechanism:
      "Several antiepileptics induce hepatic enzymes that alter anticoagulant metabolism, making dosing harder to stabilize.",
    evidence:
      "Guidelines recommend close INR monitoring when combining enzyme-inducing antiepileptics with anticoagulants.",
  },
  {
    drug_a: "alprazolam",
    drug_b: "baclofen",
    severity: "moderate",
    mechanism:
      "Both cause CNS depression; combined use increases sedation and fall risk, especially in older adults.",
    evidence:
      "Muscle relaxant labeling warns of additive sedation with benzodiazepines.",
  },
  {
    drug_a: "alprazolam",
    drug_b: "carisoprodol",
    severity: "moderate",
    mechanism:
      "Both cause CNS depression; combined use increases sedation and fall risk, especially in older adults.",
    evidence:
      "Muscle relaxant labeling warns of additive sedation with benzodiazepines.",
  },
  {
    drug_a: "alprazolam",
    drug_b: "chlordiazepoxide",
    severity: "moderate",
    mechanism:
      "Additive central nervous system depression from combining two benzodiazepines.",
    evidence:
      "Clinical guidance advises against routinely combining two benzodiazepines.",
  },
  {
    drug_a: "alprazolam",
    drug_b: "clorazepate",
    severity: "moderate",
    mechanism:
      "Additive central nervous system depression from combining two benzodiazepines.",
    evidence:
      "Clinical guidance advises against routinely combining two benzodiazepines.",
  },
  {
    drug_a: "alprazolam",
    drug_b: "hydroxyzine",
    severity: "moderate",
    mechanism:
      "Both cause CNS depression; combined use increases sedation and impairs alertness.",
    evidence:
      "Antihistamine labeling warns of additive sedation with benzodiazepines.",
  },
  {
    drug_a: "alprazolam",
    drug_b: "methocarbamol",
    severity: "moderate",
    mechanism:
      "Both cause CNS depression; combined use increases sedation and fall risk, especially in older adults.",
    evidence:
      "Muscle relaxant labeling warns of additive sedation with benzodiazepines.",
  },
  {
    drug_a: "alprazolam",
    drug_b: "midazolam",
    severity: "moderate",
    mechanism:
      "Additive central nervous system depression from combining two benzodiazepines.",
    evidence:
      "Clinical guidance advises against routinely combining two benzodiazepines.",
  },
  {
    drug_a: "alprazolam",
    drug_b: "oxazepam",
    severity: "moderate",
    mechanism:
      "Additive central nervous system depression from combining two benzodiazepines.",
    evidence:
      "Clinical guidance advises against routinely combining two benzodiazepines.",
  },
  {
    drug_a: "alprazolam",
    drug_b: "promethazine",
    severity: "moderate",
    mechanism:
      "Both cause CNS depression; combined use increases sedation and impairs alertness.",
    evidence:
      "Antihistamine labeling warns of additive sedation with benzodiazepines.",
  },
  {
    drug_a: "alprazolam",
    drug_b: "ramelteon",
    severity: "moderate",
    mechanism:
      "Additive CNS depression between benzodiazepines and other sedative-hypnotics increases sedation and fall risk.",
    evidence:
      "Sedative-hypnotic labeling warns against combination with benzodiazepines.",
  },
  {
    drug_a: "alprazolam",
    drug_b: "suvorexant",
    severity: "moderate",
    mechanism:
      "Additive CNS depression between benzodiazepines and other sedative-hypnotics increases sedation and fall risk.",
    evidence:
      "Sedative-hypnotic labeling warns against combination with benzodiazepines.",
  },
  {
    drug_a: "alprazolam",
    drug_b: "tizanidine",
    severity: "moderate",
    mechanism:
      "Both cause CNS depression; combined use increases sedation and fall risk, especially in older adults.",
    evidence:
      "Muscle relaxant labeling warns of additive sedation with benzodiazepines.",
  },
  {
    drug_a: "alprazolam",
    drug_b: "zaleplon",
    severity: "moderate",
    mechanism:
      "Additive CNS depression between benzodiazepines and non-benzodiazepine hypnotics increases sedation and fall risk.",
    evidence:
      "Sedative-hypnotic labeling warns against combination with benzodiazepines.",
  },
  {
    drug_a: "amiloride",
    drug_b: "triamterene",
    severity: "moderate",
    mechanism:
      "Both raise serum potassium; combined use increases the risk of hyperkalemia.",
    evidence:
      "Guidelines recommend against combining two potassium-sparing diuretics.",
  },
  {
    drug_a: "amiodarone",
    drug_b: "atorvastatin",
    severity: "moderate",
    mechanism:
      "Amiodarone-class antiarrhythmics inhibit CYP3A4, raising statin levels and myopathy risk.",
    evidence:
      "Statin labeling notes dose limits when combined with amiodarone.",
  },
  {
    drug_a: "amiodarone",
    drug_b: "azithromycin",
    severity: "high",
    mechanism:
      "Macrolides can prolong the QT interval and add to the effect of QT-prolonging antiarrhythmics.",
    evidence:
      "Drug-induced long QT reference lists flag this combination as a torsades risk.",
  },
  {
    drug_a: "amiodarone",
    drug_b: "ciprofloxacin",
    severity: "high",
    mechanism:
      "Fluoroquinolones can prolong the QT interval and add to the effect of QT-prolonging antiarrhythmics.",
    evidence:
      "Drug-induced long QT reference lists flag this combination as a torsades risk.",
  },
  {
    drug_a: "amiodarone",
    drug_b: "citalopram",
    severity: "high",
    mechanism:
      "Both prolong the QT interval; combined use meaningfully raises the risk of dangerous arrhythmia.",
    evidence:
      "Drug-induced long QT reference lists flag this combination as a torsades risk.",
  },
  {
    drug_a: "amiodarone",
    drug_b: "clarithromycin",
    severity: "high",
    mechanism:
      "Macrolides can prolong the QT interval and add to the effect of QT-prolonging antiarrhythmics.",
    evidence:
      "Drug-induced long QT reference lists flag this combination as a torsades risk.",
  },
  {
    drug_a: "amiodarone",
    drug_b: "digoxin",
    severity: "moderate",
    mechanism:
      "Amiodarone-class antiarrhythmics can raise digoxin levels via reduced clearance, increasing toxicity risk.",
    evidence:
      "Digoxin labeling recommends dose reduction when amiodarone is co-prescribed.",
  },
  {
    drug_a: "amiodarone",
    drug_b: "dronedarone",
    severity: "high",
    mechanism:
      "Both prolong the QT interval; combined use meaningfully raises the risk of dangerous arrhythmia.",
    evidence:
      "Guidelines recommend against combining two QT-prolonging antiarrhythmics.",
  },
  {
    drug_a: "amiodarone",
    drug_b: "erythromycin",
    severity: "high",
    mechanism:
      "Macrolides can prolong the QT interval and add to the effect of QT-prolonging antiarrhythmics.",
    evidence:
      "Drug-induced long QT reference lists flag this combination as a torsades risk.",
  },
  {
    drug_a: "amiodarone",
    drug_b: "flecainide",
    severity: "high",
    mechanism:
      "Both prolong the QT interval; combined use meaningfully raises the risk of dangerous arrhythmia.",
    evidence:
      "Guidelines recommend against combining two QT-prolonging antiarrhythmics.",
  },
  {
    drug_a: "amiodarone",
    drug_b: "haloperidol",
    severity: "high",
    mechanism:
      "Both prolong the QT interval; combined use meaningfully raises the risk of dangerous arrhythmia.",
    evidence:
      "Drug-induced long QT reference lists flag this combination as a torsades risk.",
  },
  {
    drug_a: "amiodarone",
    drug_b: "levofloxacin",
    severity: "high",
    mechanism:
      "Both prolong the QT interval; combined use meaningfully raises the risk of dangerous arrhythmia.",
    evidence:
      "Drug-induced long QT reference lists flag this combination as a torsades risk.",
  },
  {
    drug_a: "amiodarone",
    drug_b: "lovastatin",
    severity: "moderate",
    mechanism:
      "Amiodarone-class antiarrhythmics inhibit CYP3A4, raising statin levels and myopathy risk.",
    evidence:
      "Statin labeling notes dose limits when combined with amiodarone.",
  },
  {
    drug_a: "amiodarone",
    drug_b: "methadone",
    severity: "high",
    mechanism:
      "Both prolong the QT interval; combined use meaningfully raises the risk of dangerous arrhythmia.",
    evidence:
      "Drug-induced long QT reference lists flag this combination as a torsades risk.",
  },
  {
    drug_a: "amiodarone",
    drug_b: "moxifloxacin",
    severity: "high",
    mechanism:
      "Both prolong the QT interval; combined use meaningfully raises the risk of dangerous arrhythmia.",
    evidence:
      "Drug-induced long QT reference lists flag this combination as a torsades risk.",
  },
  {
    drug_a: "amiodarone",
    drug_b: "ofloxacin",
    severity: "high",
    mechanism:
      "Fluoroquinolones can prolong the QT interval and add to the effect of QT-prolonging antiarrhythmics.",
    evidence:
      "Drug-induced long QT reference lists flag this combination as a torsades risk.",
  },
  {
    drug_a: "amiodarone",
    drug_b: "ondansetron",
    severity: "high",
    mechanism:
      "Both prolong the QT interval; combined use meaningfully raises the risk of dangerous arrhythmia.",
    evidence:
      "Drug-induced long QT reference lists flag this combination as a torsades risk.",
  },
  {
    drug_a: "amiodarone",
    drug_b: "propafenone",
    severity: "high",
    mechanism:
      "Both prolong the QT interval; combined use meaningfully raises the risk of dangerous arrhythmia.",
    evidence:
      "Guidelines recommend against combining two QT-prolonging antiarrhythmics.",
  },
  {
    drug_a: "amiodarone",
    drug_b: "simvastatin",
    severity: "moderate",
    mechanism:
      "Amiodarone-class antiarrhythmics inhibit CYP3A4, raising statin levels and myopathy risk.",
    evidence:
      "Statin labeling notes dose limits when combined with amiodarone.",
  },
  {
    drug_a: "amiodarone",
    drug_b: "sotalol",
    severity: "high",
    mechanism:
      "Both prolong the QT interval; combined use meaningfully raises the risk of dangerous arrhythmia.",
    evidence:
      "Guidelines recommend against combining two QT-prolonging antiarrhythmics.",
  },
  {
    drug_a: "amiodarone",
    drug_b: "ziprasidone",
    severity: "high",
    mechanism:
      "Both prolong the QT interval; combined use meaningfully raises the risk of dangerous arrhythmia.",
    evidence:
      "Drug-induced long QT reference lists flag this combination as a torsades risk.",
  },
  {
    drug_a: "amphetamine_dextroamphetamine",
    drug_b: "citalopram",
    severity: "low",
    mechanism:
      "Both can raise blood pressure and heart rate; combined use warrants monitoring though serious interaction is uncommon.",
    evidence:
      "Prescribing references note additive cardiovascular effects with modest clinical significance.",
  },
  {
    drug_a: "amphetamine_dextroamphetamine",
    drug_b: "escitalopram",
    severity: "low",
    mechanism:
      "Both can raise blood pressure and heart rate; combined use warrants monitoring though serious interaction is uncommon.",
    evidence:
      "Prescribing references note additive cardiovascular effects with modest clinical significance.",
  },
  {
    drug_a: "amphetamine_dextroamphetamine",
    drug_b: "fluoxetine",
    severity: "low",
    mechanism:
      "Both can raise blood pressure and heart rate; combined use warrants monitoring though serious interaction is uncommon.",
    evidence:
      "Prescribing references note additive cardiovascular effects with modest clinical significance.",
  },
  {
    drug_a: "amphetamine_dextroamphetamine",
    drug_b: "fluvoxamine",
    severity: "low",
    mechanism:
      "Both can raise blood pressure and heart rate; combined use warrants monitoring though serious interaction is uncommon.",
    evidence:
      "Prescribing references note additive cardiovascular effects with modest clinical significance.",
  },
  {
    drug_a: "amphetamine_dextroamphetamine",
    drug_b: "paroxetine",
    severity: "low",
    mechanism:
      "Both can raise blood pressure and heart rate; combined use warrants monitoring though serious interaction is uncommon.",
    evidence:
      "Prescribing references note additive cardiovascular effects with modest clinical significance.",
  },
  {
    drug_a: "amphetamine_dextroamphetamine",
    drug_b: "sertraline",
    severity: "low",
    mechanism:
      "Both can raise blood pressure and heart rate; combined use warrants monitoring though serious interaction is uncommon.",
    evidence:
      "Prescribing references note additive cardiovascular effects with modest clinical significance.",
  },
  {
    drug_a: "apixaban",
    drug_b: "budesonide",
    severity: "moderate",
    mechanism:
      "Corticosteroids can irritate the GI lining and alter clotting factor levels, adding to anticoagulant bleeding risk.",
    evidence:
      "Case reports describe elevated INR and GI bleeding with combined corticosteroid and anticoagulant use.",
  },
  {
    drug_a: "apixaban",
    drug_b: "desvenlafaxine",
    severity: "moderate",
    mechanism:
      "Serotonergic antidepressants impair platelet aggregation and, combined with anticoagulants, can further raise bleeding risk.",
    evidence:
      "Case-control studies report increased bleeding risk with serotonergic antidepressant and anticoagulant co-therapy.",
  },
  {
    drug_a: "apixaban",
    drug_b: "dipyridamole",
    severity: "high",
    mechanism:
      "Combined anticoagulant and antiplatelet effects substantially increase bleeding risk.",
    evidence:
      "Cardiology guidelines require careful risk-benefit assessment before combining these therapies.",
  },
  {
    drug_a: "apixaban",
    drug_b: "edoxaban",
    severity: "high",
    mechanism:
      "Combining two anticoagulants compounds bleeding risk without a clear additional therapeutic benefit.",
    evidence:
      "Guidelines recommend against routine combination of two anticoagulants outside specific bridging protocols.",
  },
  {
    drug_a: "apixaban",
    drug_b: "enoxaparin",
    severity: "high",
    mechanism:
      "Combining two anticoagulants compounds bleeding risk without a clear additional therapeutic benefit.",
    evidence:
      "Guidelines recommend against routine combination of two anticoagulants outside specific bridging protocols.",
  },
  {
    drug_a: "apixaban",
    drug_b: "fluconazole",
    severity: "high",
    mechanism:
      "Azole antifungals inhibit hepatic enzymes that metabolize anticoagulants, sharply raising anticoagulant levels and bleeding risk.",
    evidence:
      "Labeling for azole antifungals lists anticoagulants among drugs requiring dose adjustment or close monitoring.",
  },
  {
    drug_a: "apixaban",
    drug_b: "fluticasone",
    severity: "moderate",
    mechanism:
      "Corticosteroids can irritate the GI lining and alter clotting factor levels, adding to anticoagulant bleeding risk.",
    evidence:
      "Case reports describe elevated INR and GI bleeding with combined corticosteroid and anticoagulant use.",
  },
  {
    drug_a: "apixaban",
    drug_b: "fluvoxamine",
    severity: "moderate",
    mechanism:
      "SSRIs impair platelet aggregation and, combined with anticoagulants, can further raise bleeding risk.",
    evidence:
      "Case-control studies report increased bleeding risk with SSRI and anticoagulant co-therapy.",
  },
  {
    drug_a: "apixaban",
    drug_b: "hydrocortisone",
    severity: "moderate",
    mechanism:
      "Corticosteroids can irritate the GI lining and alter clotting factor levels, adding to anticoagulant bleeding risk.",
    evidence:
      "Case reports describe elevated INR and GI bleeding with combined corticosteroid and anticoagulant use.",
  },
  {
    drug_a: "apixaban",
    drug_b: "itraconazole",
    severity: "high",
    mechanism:
      "Azole antifungals inhibit hepatic enzymes that metabolize anticoagulants, sharply raising anticoagulant levels and bleeding risk.",
    evidence:
      "Labeling for azole antifungals lists anticoagulants among drugs requiring dose adjustment or close monitoring.",
  },
  {
    drug_a: "apixaban",
    drug_b: "ketoconazole",
    severity: "high",
    mechanism:
      "Azole antifungals inhibit hepatic enzymes that metabolize anticoagulants, sharply raising anticoagulant levels and bleeding risk.",
    evidence:
      "Labeling for azole antifungals lists anticoagulants among drugs requiring dose adjustment or close monitoring.",
  },
  {
    drug_a: "apixaban",
    drug_b: "levomilnacipran",
    severity: "moderate",
    mechanism:
      "Serotonergic antidepressants impair platelet aggregation and, combined with anticoagulants, can further raise bleeding risk.",
    evidence:
      "Case-control studies report increased bleeding risk with serotonergic antidepressant and anticoagulant co-therapy.",
  },
  {
    drug_a: "apixaban",
    drug_b: "moxifloxacin",
    severity: "moderate",
    mechanism:
      "Fluoroquinolones can potentiate anticoagulant effect, raising bleeding risk.",
    evidence:
      "Labeling for anticoagulants notes increased INR when fluoroquinolone antibiotics are co-prescribed.",
  },
  {
    drug_a: "apixaban",
    drug_b: "ofloxacin",
    severity: "moderate",
    mechanism:
      "Fluoroquinolones can potentiate anticoagulant effect, raising bleeding risk.",
    evidence:
      "Labeling for anticoagulants notes increased INR when fluoroquinolone antibiotics are co-prescribed.",
  },
  {
    drug_a: "apixaban",
    drug_b: "prasugrel",
    severity: "high",
    mechanism:
      "Combined anticoagulant and antiplatelet effects substantially increase bleeding risk.",
    evidence:
      "Cardiology guidelines require careful risk-benefit assessment before combining these therapies.",
  },
  {
    drug_a: "apixaban",
    drug_b: "ticagrelor",
    severity: "high",
    mechanism:
      "Combined anticoagulant and antiplatelet effects substantially increase bleeding risk.",
    evidence:
      "Cardiology guidelines require careful risk-benefit assessment before combining these therapies.",
  },
  {
    drug_a: "apixaban",
    drug_b: "triamcinolone",
    severity: "moderate",
    mechanism:
      "Corticosteroids can irritate the GI lining and alter clotting factor levels, adding to anticoagulant bleeding risk.",
    evidence:
      "Case reports describe elevated INR and GI bleeding with combined corticosteroid and anticoagulant use.",
  },
  {
    drug_a: "aripiprazole",
    drug_b: "clozapine",
    severity: "moderate",
    mechanism:
      "Combining two antipsychotics adds to sedation, metabolic, and QT-prolongation risk without clear added benefit.",
    evidence:
      "Guidelines generally recommend against routine antipsychotic polypharmacy.",
  },
  {
    drug_a: "aripiprazole",
    drug_b: "haloperidol",
    severity: "moderate",
    mechanism:
      "Combining two antipsychotics adds to sedation, metabolic, and QT-prolongation risk without clear added benefit.",
    evidence:
      "Guidelines generally recommend against routine antipsychotic polypharmacy.",
  },
  {
    drug_a: "aripiprazole",
    drug_b: "lurasidone",
    severity: "moderate",
    mechanism:
      "Combining two antipsychotics adds to sedation, metabolic, and QT-prolongation risk without clear added benefit.",
    evidence:
      "Guidelines generally recommend against routine antipsychotic polypharmacy.",
  },
  {
    drug_a: "aripiprazole",
    drug_b: "ondansetron",
    severity: "moderate",
    mechanism:
      "Some antipsychotics have mild serotonergic activity that may add to that of other serotonergic agents.",
    evidence:
      "Case reports describe serotonin syndrome features when antipsychotics are combined with strongly serotonergic drugs.",
  },
  {
    drug_a: "aripiprazole",
    drug_b: "paliperidone",
    severity: "moderate",
    mechanism:
      "Combining two antipsychotics adds to sedation, metabolic, and QT-prolongation risk without clear added benefit.",
    evidence:
      "Guidelines generally recommend against routine antipsychotic polypharmacy.",
  },
  {
    drug_a: "aripiprazole",
    drug_b: "rizatriptan",
    severity: "moderate",
    mechanism:
      "Some antipsychotics have mild serotonergic activity that may add to that of other serotonergic agents.",
    evidence:
      "Case reports describe serotonin syndrome features when antipsychotics are combined with strongly serotonergic drugs.",
  },
  {
    drug_a: "aripiprazole",
    drug_b: "st_johns_wort",
    severity: "moderate",
    mechanism:
      "Some antipsychotics have mild serotonergic activity that may add to that of other serotonergic agents.",
    evidence:
      "Case reports describe serotonin syndrome features when antipsychotics are combined with strongly serotonergic drugs.",
  },
  {
    drug_a: "aripiprazole",
    drug_b: "sumatriptan",
    severity: "moderate",
    mechanism:
      "Some antipsychotics have mild serotonergic activity that may add to that of other serotonergic agents.",
    evidence:
      "Case reports describe serotonin syndrome features when antipsychotics are combined with strongly serotonergic drugs.",
  },
  {
    drug_a: "aripiprazole",
    drug_b: "ziprasidone",
    severity: "moderate",
    mechanism:
      "Combining two antipsychotics adds to sedation, metabolic, and QT-prolongation risk without clear added benefit.",
    evidence:
      "Guidelines generally recommend against routine antipsychotic polypharmacy.",
  },
  {
    drug_a: "atenolol",
    drug_b: "bisoprolol",
    severity: "low",
    mechanism:
      "Combining two beta blockers adds to heart-rate-lowering effects without added benefit.",
    evidence:
      "Guidelines recommend against routine combination of two beta blockers.",
  },
  {
    drug_a: "atenolol",
    drug_b: "canagliflozin",
    severity: "low",
    mechanism:
      "Beta blockers can mask the warning signs of hypoglycemia such as tremor and rapid heartbeat.",
    evidence:
      "Diabetes management guidance notes blunted hypoglycemia awareness with beta blocker use.",
  },
  {
    drug_a: "atenolol",
    drug_b: "dapagliflozin",
    severity: "low",
    mechanism:
      "Beta blockers can mask the warning signs of hypoglycemia such as tremor and rapid heartbeat.",
    evidence:
      "Diabetes management guidance notes blunted hypoglycemia awareness with beta blocker use.",
  },
  {
    drug_a: "atenolol",
    drug_b: "dulaglutide",
    severity: "low",
    mechanism:
      "Beta blockers can mask the warning signs of hypoglycemia such as tremor and rapid heartbeat.",
    evidence:
      "Diabetes management guidance notes blunted hypoglycemia awareness with beta blocker use.",
  },
  {
    drug_a: "atenolol",
    drug_b: "empagliflozin",
    severity: "low",
    mechanism:
      "Beta blockers can mask the warning signs of hypoglycemia such as tremor and rapid heartbeat.",
    evidence:
      "Diabetes management guidance notes blunted hypoglycemia awareness with beta blocker use.",
  },
  {
    drug_a: "atenolol",
    drug_b: "insulin_aspart",
    severity: "low",
    mechanism:
      "Beta blockers can mask the warning signs of hypoglycemia such as tremor and rapid heartbeat.",
    evidence:
      "Diabetes management guidance notes blunted hypoglycemia awareness with beta blocker use.",
  },
  {
    drug_a: "atenolol",
    drug_b: "insulin_lispro",
    severity: "low",
    mechanism:
      "Beta blockers can mask the warning signs of hypoglycemia such as tremor and rapid heartbeat.",
    evidence:
      "Diabetes management guidance notes blunted hypoglycemia awareness with beta blocker use.",
  },
  {
    drug_a: "atenolol",
    drug_b: "labetalol",
    severity: "low",
    mechanism:
      "Combining two beta blockers adds to heart-rate-lowering effects without added benefit.",
    evidence:
      "Guidelines recommend against routine combination of two beta blockers.",
  },
  {
    drug_a: "atenolol",
    drug_b: "linagliptin",
    severity: "low",
    mechanism:
      "Beta blockers can mask the warning signs of hypoglycemia such as tremor and rapid heartbeat.",
    evidence:
      "Diabetes management guidance notes blunted hypoglycemia awareness with beta blocker use.",
  },
  {
    drug_a: "atenolol",
    drug_b: "liraglutide",
    severity: "low",
    mechanism:
      "Beta blockers can mask the warning signs of hypoglycemia such as tremor and rapid heartbeat.",
    evidence:
      "Diabetes management guidance notes blunted hypoglycemia awareness with beta blocker use.",
  },
  {
    drug_a: "atenolol",
    drug_b: "nadolol",
    severity: "low",
    mechanism:
      "Combining two beta blockers adds to heart-rate-lowering effects without added benefit.",
    evidence:
      "Guidelines recommend against routine combination of two beta blockers.",
  },
  {
    drug_a: "atenolol",
    drug_b: "nebivolol",
    severity: "low",
    mechanism:
      "Combining two beta blockers adds to heart-rate-lowering effects without added benefit.",
    evidence:
      "Guidelines recommend against routine combination of two beta blockers.",
  },
  {
    drug_a: "atenolol",
    drug_b: "pioglitazone",
    severity: "low",
    mechanism:
      "Beta blockers can mask the warning signs of hypoglycemia such as tremor and rapid heartbeat.",
    evidence:
      "Diabetes management guidance notes blunted hypoglycemia awareness with beta blocker use.",
  },
  {
    drug_a: "atenolol",
    drug_b: "saxagliptin",
    severity: "low",
    mechanism:
      "Beta blockers can mask the warning signs of hypoglycemia such as tremor and rapid heartbeat.",
    evidence:
      "Diabetes management guidance notes blunted hypoglycemia awareness with beta blocker use.",
  },
  {
    drug_a: "atenolol",
    drug_b: "semaglutide",
    severity: "low",
    mechanism:
      "Beta blockers can mask the warning signs of hypoglycemia such as tremor and rapid heartbeat.",
    evidence:
      "Diabetes management guidance notes blunted hypoglycemia awareness with beta blocker use.",
  },
  {
    drug_a: "atenolol",
    drug_b: "sitagliptin",
    severity: "low",
    mechanism:
      "Beta blockers can mask the warning signs of hypoglycemia such as tremor and rapid heartbeat.",
    evidence:
      "Diabetes management guidance notes blunted hypoglycemia awareness with beta blocker use.",
  },
  {
    drug_a: "atenolol",
    drug_b: "sotalol",
    severity: "low",
    mechanism:
      "Combining two beta blockers adds to heart-rate-lowering effects without added benefit.",
    evidence:
      "Guidelines recommend against routine combination of two beta blockers.",
  },
  {
    drug_a: "azilsartan",
    drug_b: "amiloride",
    severity: "moderate",
    mechanism:
      "Both raise serum potassium; combined use increases the risk of hyperkalemia.",
    evidence:
      "Labeling for potassium-sparing diuretics warns of hyperkalemia risk with ARBs.",
  },
  {
    drug_a: "azilsartan",
    drug_b: "lithium",
    severity: "moderate",
    mechanism:
      "ARBs can reduce renal clearance of lithium, similar to ACE inhibitors, raising lithium levels toward toxicity.",
    evidence:
      "Case reports describe lithium toxicity with concurrent ARB use, warranting level monitoring.",
  },
  {
    drug_a: "azilsartan",
    drug_b: "spironolactone",
    severity: "moderate",
    mechanism:
      "Both raise serum potassium; combined use increases the risk of hyperkalemia.",
    evidence:
      "Labeling for potassium-sparing diuretics warns of hyperkalemia risk with ARBs.",
  },
  {
    drug_a: "azilsartan",
    drug_b: "triamterene",
    severity: "moderate",
    mechanism:
      "Both raise serum potassium; combined use increases the risk of hyperkalemia.",
    evidence:
      "Labeling for potassium-sparing diuretics warns of hyperkalemia risk with ARBs.",
  },
  {
    drug_a: "azithromycin",
    drug_b: "azathioprine",
    severity: "moderate",
    mechanism:
      "Macrolides inhibit CYP3A4 metabolism of calcineurin inhibitors, raising levels and toxicity risk.",
    evidence:
      "Transplant medicine guidance requires immunosuppressant level monitoring when macrolide antibiotics are added.",
  },
  {
    drug_a: "azithromycin",
    drug_b: "cyclosporine",
    severity: "moderate",
    mechanism:
      "Macrolides inhibit CYP3A4 metabolism of calcineurin inhibitors, raising levels and toxicity risk.",
    evidence:
      "Transplant medicine guidance requires immunosuppressant level monitoring when macrolide antibiotics are added.",
  },
  {
    drug_a: "azithromycin",
    drug_b: "methotrexate",
    severity: "moderate",
    mechanism:
      "Macrolides inhibit CYP3A4 metabolism of calcineurin inhibitors, raising levels and toxicity risk.",
    evidence:
      "Transplant medicine guidance requires immunosuppressant level monitoring when macrolide antibiotics are added.",
  },
  {
    drug_a: "azithromycin",
    drug_b: "mycophenolate",
    severity: "moderate",
    mechanism:
      "Macrolides inhibit CYP3A4 metabolism of calcineurin inhibitors, raising levels and toxicity risk.",
    evidence:
      "Transplant medicine guidance requires immunosuppressant level monitoring when macrolide antibiotics are added.",
  },
  {
    drug_a: "azithromycin",
    drug_b: "tacrolimus",
    severity: "moderate",
    mechanism:
      "Macrolides inhibit CYP3A4 metabolism of calcineurin inhibitors, raising levels and toxicity risk.",
    evidence:
      "Transplant medicine guidance requires immunosuppressant level monitoring when macrolide antibiotics are added.",
  },
  {
    drug_a: "benazepril",
    drug_b: "amiloride",
    severity: "moderate",
    mechanism:
      "Both raise serum potassium; combined use increases the risk of hyperkalemia.",
    evidence:
      "Labeling for potassium-sparing diuretics warns of hyperkalemia risk with ACE inhibitors.",
  },
  {
    drug_a: "benazepril",
    drug_b: "azilsartan",
    severity: "moderate",
    mechanism:
      "Dual blockade of the renin-angiotensin system can increase risk of hyperkalemia and hypotension.",
    evidence:
      "Guidelines generally recommend against combining ACE inhibitors and ARBs.",
  },
  {
    drug_a: "benazepril",
    drug_b: "candesartan",
    severity: "moderate",
    mechanism:
      "Dual blockade of the renin-angiotensin system can increase risk of hyperkalemia and hypotension.",
    evidence:
      "Guidelines generally recommend against combining ACE inhibitors and ARBs.",
  },
  {
    drug_a: "benazepril",
    drug_b: "irbesartan",
    severity: "moderate",
    mechanism:
      "Dual blockade of the renin-angiotensin system can increase risk of hyperkalemia and hypotension.",
    evidence:
      "Guidelines generally recommend against combining ACE inhibitors and ARBs.",
  },
  {
    drug_a: "benazepril",
    drug_b: "lithium",
    severity: "moderate",
    mechanism:
      "ACE inhibitors can reduce renal clearance of lithium, raising lithium levels toward toxicity.",
    evidence:
      "Lithium labeling warns of elevated levels with concurrent ACE inhibitor use, warranting level monitoring.",
  },
  {
    drug_a: "benazepril",
    drug_b: "losartan",
    severity: "moderate",
    mechanism:
      "Dual blockade of the renin-angiotensin system can increase risk of hyperkalemia and hypotension.",
    evidence:
      "Guidelines generally recommend against combining ACE inhibitors and ARBs.",
  },
  {
    drug_a: "benazepril",
    drug_b: "olmesartan",
    severity: "moderate",
    mechanism:
      "Dual blockade of the renin-angiotensin system can increase risk of hyperkalemia and hypotension.",
    evidence:
      "Guidelines generally recommend against combining ACE inhibitors and ARBs.",
  },
  {
    drug_a: "benazepril",
    drug_b: "spironolactone",
    severity: "moderate",
    mechanism:
      "Both raise serum potassium; combined use increases the risk of hyperkalemia.",
    evidence:
      "Labeling for potassium-sparing diuretics warns of hyperkalemia risk with ACE inhibitors.",
  },
  {
    drug_a: "benazepril",
    drug_b: "telmisartan",
    severity: "moderate",
    mechanism:
      "Dual blockade of the renin-angiotensin system can increase risk of hyperkalemia and hypotension.",
    evidence:
      "Guidelines generally recommend against combining ACE inhibitors and ARBs.",
  },
  {
    drug_a: "benazepril",
    drug_b: "triamterene",
    severity: "moderate",
    mechanism:
      "Both raise serum potassium; combined use increases the risk of hyperkalemia.",
    evidence:
      "Labeling for potassium-sparing diuretics warns of hyperkalemia risk with ACE inhibitors.",
  },
  {
    drug_a: "benazepril",
    drug_b: "valsartan",
    severity: "moderate",
    mechanism:
      "Dual blockade of the renin-angiotensin system can increase risk of hyperkalemia and hypotension.",
    evidence:
      "Guidelines generally recommend against combining ACE inhibitors and ARBs.",
  },
  {
    drug_a: "bisoprolol",
    drug_b: "canagliflozin",
    severity: "low",
    mechanism:
      "Beta blockers can mask the warning signs of hypoglycemia such as tremor and rapid heartbeat.",
    evidence:
      "Diabetes management guidance notes blunted hypoglycemia awareness with beta blocker use.",
  },
  {
    drug_a: "bisoprolol",
    drug_b: "carvedilol",
    severity: "low",
    mechanism:
      "Combining two beta blockers adds to heart-rate-lowering effects without added benefit.",
    evidence:
      "Guidelines recommend against routine combination of two beta blockers.",
  },
  {
    drug_a: "bisoprolol",
    drug_b: "dapagliflozin",
    severity: "low",
    mechanism:
      "Beta blockers can mask the warning signs of hypoglycemia such as tremor and rapid heartbeat.",
    evidence:
      "Diabetes management guidance notes blunted hypoglycemia awareness with beta blocker use.",
  },
  {
    drug_a: "bisoprolol",
    drug_b: "diltiazem",
    severity: "moderate",
    mechanism:
      "Both slow cardiac conduction; combined use can cause excessive bradycardia or heart block.",
    evidence:
      "Cardiology guidance recommends caution combining beta blockers with non-dihydropyridine calcium channel blockers.",
  },
  {
    drug_a: "bisoprolol",
    drug_b: "dulaglutide",
    severity: "low",
    mechanism:
      "Beta blockers can mask the warning signs of hypoglycemia such as tremor and rapid heartbeat.",
    evidence:
      "Diabetes management guidance notes blunted hypoglycemia awareness with beta blocker use.",
  },
  {
    drug_a: "bisoprolol",
    drug_b: "empagliflozin",
    severity: "low",
    mechanism:
      "Beta blockers can mask the warning signs of hypoglycemia such as tremor and rapid heartbeat.",
    evidence:
      "Diabetes management guidance notes blunted hypoglycemia awareness with beta blocker use.",
  },
  {
    drug_a: "bisoprolol",
    drug_b: "glimepiride",
    severity: "low",
    mechanism:
      "Beta blockers can mask the warning signs of hypoglycemia such as tremor and rapid heartbeat.",
    evidence:
      "Diabetes management guidance notes blunted hypoglycemia awareness with beta blocker use.",
  },
  {
    drug_a: "bisoprolol",
    drug_b: "glipizide",
    severity: "low",
    mechanism:
      "Beta blockers can mask the warning signs of hypoglycemia such as tremor and rapid heartbeat.",
    evidence:
      "Diabetes management guidance notes blunted hypoglycemia awareness with beta blocker use.",
  },
  {
    drug_a: "bisoprolol",
    drug_b: "glyburide",
    severity: "low",
    mechanism:
      "Beta blockers can mask the warning signs of hypoglycemia such as tremor and rapid heartbeat.",
    evidence:
      "Diabetes management guidance notes blunted hypoglycemia awareness with beta blocker use.",
  },
  {
    drug_a: "bisoprolol",
    drug_b: "insulin_aspart",
    severity: "low",
    mechanism:
      "Beta blockers can mask the warning signs of hypoglycemia such as tremor and rapid heartbeat.",
    evidence:
      "Diabetes management guidance notes blunted hypoglycemia awareness with beta blocker use.",
  },
  {
    drug_a: "bisoprolol",
    drug_b: "insulin_glargine",
    severity: "low",
    mechanism:
      "Beta blockers can mask the warning signs of hypoglycemia such as tremor and rapid heartbeat.",
    evidence:
      "Diabetes management guidance notes blunted hypoglycemia awareness with beta blocker use.",
  },
  {
    drug_a: "bisoprolol",
    drug_b: "insulin_lispro",
    severity: "low",
    mechanism:
      "Beta blockers can mask the warning signs of hypoglycemia such as tremor and rapid heartbeat.",
    evidence:
      "Diabetes management guidance notes blunted hypoglycemia awareness with beta blocker use.",
  },
  {
    drug_a: "bisoprolol",
    drug_b: "labetalol",
    severity: "low",
    mechanism:
      "Combining two beta blockers adds to heart-rate-lowering effects without added benefit.",
    evidence:
      "Guidelines recommend against routine combination of two beta blockers.",
  },
  {
    drug_a: "bisoprolol",
    drug_b: "linagliptin",
    severity: "low",
    mechanism:
      "Beta blockers can mask the warning signs of hypoglycemia such as tremor and rapid heartbeat.",
    evidence:
      "Diabetes management guidance notes blunted hypoglycemia awareness with beta blocker use.",
  },
  {
    drug_a: "bisoprolol",
    drug_b: "liraglutide",
    severity: "low",
    mechanism:
      "Beta blockers can mask the warning signs of hypoglycemia such as tremor and rapid heartbeat.",
    evidence:
      "Diabetes management guidance notes blunted hypoglycemia awareness with beta blocker use.",
  },
  {
    drug_a: "bisoprolol",
    drug_b: "metformin",
    severity: "low",
    mechanism:
      "Beta blockers can mask the warning signs of hypoglycemia such as tremor and rapid heartbeat.",
    evidence:
      "Diabetes management guidance notes blunted hypoglycemia awareness with beta blocker use.",
  },
  {
    drug_a: "bisoprolol",
    drug_b: "metoprolol",
    severity: "low",
    mechanism:
      "Combining two beta blockers adds to heart-rate-lowering effects without added benefit.",
    evidence:
      "Guidelines recommend against routine combination of two beta blockers.",
  },
  {
    drug_a: "bisoprolol",
    drug_b: "nadolol",
    severity: "low",
    mechanism:
      "Combining two beta blockers adds to heart-rate-lowering effects without added benefit.",
    evidence:
      "Guidelines recommend against routine combination of two beta blockers.",
  },
  {
    drug_a: "bisoprolol",
    drug_b: "nebivolol",
    severity: "low",
    mechanism:
      "Combining two beta blockers adds to heart-rate-lowering effects without added benefit.",
    evidence:
      "Guidelines recommend against routine combination of two beta blockers.",
  },
  {
    drug_a: "bisoprolol",
    drug_b: "pioglitazone",
    severity: "low",
    mechanism:
      "Beta blockers can mask the warning signs of hypoglycemia such as tremor and rapid heartbeat.",
    evidence:
      "Diabetes management guidance notes blunted hypoglycemia awareness with beta blocker use.",
  },
  {
    drug_a: "bisoprolol",
    drug_b: "propranolol",
    severity: "low",
    mechanism:
      "Combining two beta blockers adds to heart-rate-lowering effects without added benefit.",
    evidence:
      "Guidelines recommend against routine combination of two beta blockers.",
  },
  {
    drug_a: "bisoprolol",
    drug_b: "saxagliptin",
    severity: "low",
    mechanism:
      "Beta blockers can mask the warning signs of hypoglycemia such as tremor and rapid heartbeat.",
    evidence:
      "Diabetes management guidance notes blunted hypoglycemia awareness with beta blocker use.",
  },
  {
    drug_a: "bisoprolol",
    drug_b: "semaglutide",
    severity: "low",
    mechanism:
      "Beta blockers can mask the warning signs of hypoglycemia such as tremor and rapid heartbeat.",
    evidence:
      "Diabetes management guidance notes blunted hypoglycemia awareness with beta blocker use.",
  },
  {
    drug_a: "bisoprolol",
    drug_b: "sitagliptin",
    severity: "low",
    mechanism:
      "Beta blockers can mask the warning signs of hypoglycemia such as tremor and rapid heartbeat.",
    evidence:
      "Diabetes management guidance notes blunted hypoglycemia awareness with beta blocker use.",
  },
  {
    drug_a: "bisoprolol",
    drug_b: "sotalol",
    severity: "low",
    mechanism:
      "Combining two beta blockers adds to heart-rate-lowering effects without added benefit.",
    evidence:
      "Guidelines recommend against routine combination of two beta blockers.",
  },
  {
    drug_a: "bisoprolol",
    drug_b: "verapamil",
    severity: "moderate",
    mechanism:
      "Both slow cardiac conduction; combined use can cause excessive bradycardia or heart block.",
    evidence:
      "Cardiology guidance recommends caution combining beta blockers with non-dihydropyridine calcium channel blockers.",
  },
  {
    drug_a: "budesonide",
    drug_b: "canagliflozin",
    severity: "moderate",
    mechanism:
      "Corticosteroids can raise blood glucose, counteracting the glucose-lowering effect of antidiabetic medications.",
    evidence:
      "Endocrinology guidance recommends closer glucose monitoring when corticosteroids are added.",
  },
  {
    drug_a: "budesonide",
    drug_b: "dapagliflozin",
    severity: "moderate",
    mechanism:
      "Corticosteroids can raise blood glucose, counteracting the glucose-lowering effect of antidiabetic medications.",
    evidence:
      "Endocrinology guidance recommends closer glucose monitoring when corticosteroids are added.",
  },
  {
    drug_a: "budesonide",
    drug_b: "dulaglutide",
    severity: "moderate",
    mechanism:
      "Corticosteroids can raise blood glucose, counteracting the glucose-lowering effect of antidiabetic medications.",
    evidence:
      "Endocrinology guidance recommends closer glucose monitoring when corticosteroids are added.",
  },
  {
    drug_a: "budesonide",
    drug_b: "empagliflozin",
    severity: "moderate",
    mechanism:
      "Corticosteroids can raise blood glucose, counteracting the glucose-lowering effect of antidiabetic medications.",
    evidence:
      "Endocrinology guidance recommends closer glucose monitoring when corticosteroids are added.",
  },
  {
    drug_a: "budesonide",
    drug_b: "glimepiride",
    severity: "moderate",
    mechanism:
      "Corticosteroids can raise blood glucose, counteracting the glucose-lowering effect of antidiabetic medications.",
    evidence:
      "Endocrinology guidance recommends closer glucose monitoring when corticosteroids are added.",
  },
  {
    drug_a: "budesonide",
    drug_b: "glipizide",
    severity: "moderate",
    mechanism:
      "Corticosteroids can raise blood glucose, counteracting the glucose-lowering effect of antidiabetic medications.",
    evidence:
      "Endocrinology guidance recommends closer glucose monitoring when corticosteroids are added.",
  },
  {
    drug_a: "budesonide",
    drug_b: "glyburide",
    severity: "moderate",
    mechanism:
      "Corticosteroids can raise blood glucose, counteracting the glucose-lowering effect of antidiabetic medications.",
    evidence:
      "Endocrinology guidance recommends closer glucose monitoring when corticosteroids are added.",
  },
  {
    drug_a: "budesonide",
    drug_b: "insulin_aspart",
    severity: "moderate",
    mechanism:
      "Corticosteroids can raise blood glucose, counteracting the glucose-lowering effect of antidiabetic medications.",
    evidence:
      "Endocrinology guidance recommends closer glucose monitoring when corticosteroids are added.",
  },
  {
    drug_a: "budesonide",
    drug_b: "insulin_glargine",
    severity: "moderate",
    mechanism:
      "Corticosteroids can raise blood glucose, counteracting the glucose-lowering effect of antidiabetic medications.",
    evidence:
      "Endocrinology guidance recommends closer glucose monitoring when corticosteroids are added.",
  },
  {
    drug_a: "budesonide",
    drug_b: "insulin_lispro",
    severity: "moderate",
    mechanism:
      "Corticosteroids can raise blood glucose, counteracting the glucose-lowering effect of antidiabetic medications.",
    evidence:
      "Endocrinology guidance recommends closer glucose monitoring when corticosteroids are added.",
  },
  {
    drug_a: "budesonide",
    drug_b: "linagliptin",
    severity: "moderate",
    mechanism:
      "Corticosteroids can raise blood glucose, counteracting the glucose-lowering effect of antidiabetic medications.",
    evidence:
      "Endocrinology guidance recommends closer glucose monitoring when corticosteroids are added.",
  },
  {
    drug_a: "budesonide",
    drug_b: "liraglutide",
    severity: "moderate",
    mechanism:
      "Corticosteroids can raise blood glucose, counteracting the glucose-lowering effect of antidiabetic medications.",
    evidence:
      "Endocrinology guidance recommends closer glucose monitoring when corticosteroids are added.",
  },
  {
    drug_a: "budesonide",
    drug_b: "metformin",
    severity: "moderate",
    mechanism:
      "Corticosteroids can raise blood glucose, counteracting the glucose-lowering effect of antidiabetic medications.",
    evidence:
      "Endocrinology guidance recommends closer glucose monitoring when corticosteroids are added.",
  },
  {
    drug_a: "budesonide",
    drug_b: "pioglitazone",
    severity: "moderate",
    mechanism:
      "Corticosteroids can raise blood glucose, counteracting the glucose-lowering effect of antidiabetic medications.",
    evidence:
      "Endocrinology guidance recommends closer glucose monitoring when corticosteroids are added.",
  },
  {
    drug_a: "budesonide",
    drug_b: "saxagliptin",
    severity: "moderate",
    mechanism:
      "Corticosteroids can raise blood glucose, counteracting the glucose-lowering effect of antidiabetic medications.",
    evidence:
      "Endocrinology guidance recommends closer glucose monitoring when corticosteroids are added.",
  },
  {
    drug_a: "budesonide",
    drug_b: "semaglutide",
    severity: "moderate",
    mechanism:
      "Corticosteroids can raise blood glucose, counteracting the glucose-lowering effect of antidiabetic medications.",
    evidence:
      "Endocrinology guidance recommends closer glucose monitoring when corticosteroids are added.",
  },
  {
    drug_a: "budesonide",
    drug_b: "sitagliptin",
    severity: "moderate",
    mechanism:
      "Corticosteroids can raise blood glucose, counteracting the glucose-lowering effect of antidiabetic medications.",
    evidence:
      "Endocrinology guidance recommends closer glucose monitoring when corticosteroids are added.",
  },
  {
    drug_a: "bumetanide",
    drug_b: "digoxin",
    severity: "moderate",
    mechanism:
      "Diuretic-induced potassium loss can increase the risk of digoxin toxicity.",
    evidence:
      "Digoxin labeling warns that hypokalemia from diuretics increases toxicity risk.",
  },
  {
    drug_a: "bumetanide",
    drug_b: "lithium",
    severity: "moderate",
    mechanism:
      "Diuretics can reduce renal clearance of lithium, raising lithium levels toward toxicity.",
    evidence:
      "Lithium labeling warns of elevated levels with concurrent diuretic use, warranting level monitoring.",
  },
  {
    drug_a: "buprenorphine",
    drug_b: "alprazolam",
    severity: "high",
    mechanism:
      "Both depress the central nervous system; combined use significantly raises the risk of profound sedation and fatal respiratory depression.",
    evidence:
      "FDA boxed warning covers concurrent opioid and benzodiazepine use.",
  },
  {
    drug_a: "buprenorphine",
    drug_b: "baclofen",
    severity: "moderate",
    mechanism:
      "Both cause CNS depression; combined use increases sedation and fall risk, especially in older adults.",
    evidence:
      "Muscle relaxant labeling warns of additive sedation with opioids.",
  },
  {
    drug_a: "buprenorphine",
    drug_b: "carisoprodol",
    severity: "moderate",
    mechanism:
      "Both cause CNS depression; combined use increases sedation and fall risk, especially in older adults.",
    evidence:
      "Muscle relaxant labeling warns of additive sedation with opioids.",
  },
  {
    drug_a: "buprenorphine",
    drug_b: "chlordiazepoxide",
    severity: "high",
    mechanism:
      "Both depress the central nervous system; combined use significantly raises the risk of profound sedation and fatal respiratory depression.",
    evidence:
      "FDA boxed warning covers concurrent opioid and benzodiazepine use.",
  },
  {
    drug_a: "buprenorphine",
    drug_b: "citalopram",
    severity: "high",
    mechanism:
      "Both increase serotonin activity, raising the risk of serotonin syndrome.",
    evidence:
      "Case reports and FDA labeling describe elevated serotonin syndrome risk with this combination.",
  },
  {
    drug_a: "buprenorphine",
    drug_b: "clonazepam",
    severity: "high",
    mechanism:
      "Both depress the central nervous system; combined use significantly raises the risk of profound sedation and fatal respiratory depression.",
    evidence:
      "FDA boxed warning covers concurrent opioid and benzodiazepine use.",
  },
  {
    drug_a: "buprenorphine",
    drug_b: "clorazepate",
    severity: "high",
    mechanism:
      "Both depress the central nervous system; combined use significantly raises the risk of profound sedation and fatal respiratory depression.",
    evidence:
      "FDA boxed warning covers concurrent opioid and benzodiazepine use.",
  },
  {
    drug_a: "buprenorphine",
    drug_b: "codeine",
    severity: "moderate",
    mechanism:
      "Combining two opioids adds to central nervous system and respiratory depression without clear added benefit.",
    evidence:
      "Prescribing guidance recommends against concurrent use of multiple opioid analgesics outside supervised rotation.",
  },
  {
    drug_a: "buprenorphine",
    drug_b: "cyclobenzaprine",
    severity: "moderate",
    mechanism:
      "Both cause CNS depression; combined use increases sedation and fall risk, especially in older adults.",
    evidence:
      "Muscle relaxant labeling warns of additive sedation with opioids.",
  },
  {
    drug_a: "buprenorphine",
    drug_b: "desvenlafaxine",
    severity: "high",
    mechanism:
      "Both increase serotonin activity, raising the risk of serotonin syndrome.",
    evidence:
      "Case reports and FDA labeling describe elevated serotonin syndrome risk with this combination.",
  },
  {
    drug_a: "buprenorphine",
    drug_b: "diazepam",
    severity: "high",
    mechanism:
      "Both depress the central nervous system; combined use significantly raises the risk of profound sedation and fatal respiratory depression.",
    evidence:
      "FDA boxed warning covers concurrent opioid and benzodiazepine use.",
  },
  {
    drug_a: "buprenorphine",
    drug_b: "diphenhydramine",
    severity: "moderate",
    mechanism:
      "Both cause CNS depression; combined use increases sedation and, in vulnerable patients, respiratory depression risk.",
    evidence:
      "Product labeling for sedating antihistamines warns against combination with opioid analgesics.",
  },
  {
    drug_a: "buprenorphine",
    drug_b: "duloxetine",
    severity: "high",
    mechanism:
      "Both increase serotonin activity, raising the risk of serotonin syndrome.",
    evidence:
      "Case reports and FDA labeling describe elevated serotonin syndrome risk with this combination.",
  },
  {
    drug_a: "buprenorphine",
    drug_b: "escitalopram",
    severity: "high",
    mechanism:
      "Both increase serotonin activity, raising the risk of serotonin syndrome.",
    evidence:
      "Case reports and FDA labeling describe elevated serotonin syndrome risk with this combination.",
  },
  {
    drug_a: "buprenorphine",
    drug_b: "eszopiclone",
    severity: "high",
    mechanism:
      "Both depress the central nervous system; combined use significantly raises the risk of profound sedation and fatal respiratory depression.",
    evidence:
      "FDA boxed warning covers concurrent opioid and CNS depressant use, including non-benzodiazepine hypnotics.",
  },
  {
    drug_a: "buprenorphine",
    drug_b: "fentanyl",
    severity: "moderate",
    mechanism:
      "Combining two opioids adds to central nervous system and respiratory depression without clear added benefit.",
    evidence:
      "Prescribing guidance recommends against concurrent use of multiple opioid analgesics outside supervised rotation.",
  },
  {
    drug_a: "buprenorphine",
    drug_b: "fluoxetine",
    severity: "high",
    mechanism:
      "Both increase serotonin activity, raising the risk of serotonin syndrome.",
    evidence:
      "Case reports and FDA labeling describe elevated serotonin syndrome risk with this combination.",
  },
  {
    drug_a: "buprenorphine",
    drug_b: "fluvoxamine",
    severity: "high",
    mechanism:
      "Both increase serotonin activity, raising the risk of serotonin syndrome.",
    evidence:
      "Case reports and FDA labeling describe elevated serotonin syndrome risk with this combination.",
  },
  {
    drug_a: "buprenorphine",
    drug_b: "hydrocodone",
    severity: "moderate",
    mechanism:
      "Combining two opioids adds to central nervous system and respiratory depression without clear added benefit.",
    evidence:
      "Prescribing guidance recommends against concurrent use of multiple opioid analgesics outside supervised rotation.",
  },
  {
    drug_a: "buprenorphine",
    drug_b: "hydromorphone",
    severity: "moderate",
    mechanism:
      "Combining two opioids adds to central nervous system and respiratory depression without clear added benefit.",
    evidence:
      "Prescribing guidance recommends against concurrent use of multiple opioid analgesics outside supervised rotation.",
  },
  {
    drug_a: "buprenorphine",
    drug_b: "hydroxyzine",
    severity: "moderate",
    mechanism:
      "Both cause CNS depression; combined use increases sedation and, in vulnerable patients, respiratory depression risk.",
    evidence:
      "Product labeling for sedating antihistamines warns against combination with opioid analgesics.",
  },
  {
    drug_a: "buprenorphine",
    drug_b: "levomilnacipran",
    severity: "high",
    mechanism:
      "Both increase serotonin activity, raising the risk of serotonin syndrome.",
    evidence:
      "Case reports and FDA labeling describe elevated serotonin syndrome risk with this combination.",
  },
  {
    drug_a: "buprenorphine",
    drug_b: "lorazepam",
    severity: "high",
    mechanism:
      "Both depress the central nervous system; combined use significantly raises the risk of profound sedation and fatal respiratory depression.",
    evidence:
      "FDA boxed warning covers concurrent opioid and benzodiazepine use.",
  },
  {
    drug_a: "buprenorphine",
    drug_b: "meperidine",
    severity: "moderate",
    mechanism:
      "Combining two opioids adds to central nervous system and respiratory depression without clear added benefit.",
    evidence:
      "Prescribing guidance recommends against concurrent use of multiple opioid analgesics outside supervised rotation.",
  },
  {
    drug_a: "buprenorphine",
    drug_b: "methadone",
    severity: "moderate",
    mechanism:
      "Combining two opioids adds to central nervous system and respiratory depression without clear added benefit.",
    evidence:
      "Prescribing guidance recommends against concurrent use of multiple opioid analgesics outside supervised rotation.",
  },
  {
    drug_a: "buprenorphine",
    drug_b: "methocarbamol",
    severity: "moderate",
    mechanism:
      "Both cause CNS depression; combined use increases sedation and fall risk, especially in older adults.",
    evidence:
      "Muscle relaxant labeling warns of additive sedation with opioids.",
  },
  {
    drug_a: "buprenorphine",
    drug_b: "midazolam",
    severity: "high",
    mechanism:
      "Both depress the central nervous system; combined use significantly raises the risk of profound sedation and fatal respiratory depression.",
    evidence:
      "FDA boxed warning covers concurrent opioid and benzodiazepine use.",
  },
  {
    drug_a: "buprenorphine",
    drug_b: "morphine",
    severity: "moderate",
    mechanism:
      "Combining two opioids adds to central nervous system and respiratory depression without clear added benefit.",
    evidence:
      "Prescribing guidance recommends against concurrent use of multiple opioid analgesics outside supervised rotation.",
  },
  {
    drug_a: "buprenorphine",
    drug_b: "ondansetron",
    severity: "high",
    mechanism:
      "Both increase serotonin activity, raising the risk of serotonin syndrome.",
    evidence:
      "Case reports and FDA labeling describe elevated serotonin syndrome risk with this combination.",
  },
  {
    drug_a: "buprenorphine",
    drug_b: "oxazepam",
    severity: "high",
    mechanism:
      "Both depress the central nervous system; combined use significantly raises the risk of profound sedation and fatal respiratory depression.",
    evidence:
      "FDA boxed warning covers concurrent opioid and benzodiazepine use.",
  },
  {
    drug_a: "buprenorphine",
    drug_b: "oxycodone",
    severity: "moderate",
    mechanism:
      "Combining two opioids adds to central nervous system and respiratory depression without clear added benefit.",
    evidence:
      "Prescribing guidance recommends against concurrent use of multiple opioid analgesics outside supervised rotation.",
  },
  {
    drug_a: "buprenorphine",
    drug_b: "oxymorphone",
    severity: "moderate",
    mechanism:
      "Combining two opioids adds to central nervous system and respiratory depression without clear added benefit.",
    evidence:
      "Prescribing guidance recommends against concurrent use of multiple opioid analgesics outside supervised rotation.",
  },
  {
    drug_a: "buprenorphine",
    drug_b: "paroxetine",
    severity: "high",
    mechanism:
      "Both increase serotonin activity, raising the risk of serotonin syndrome.",
    evidence:
      "Case reports and FDA labeling describe elevated serotonin syndrome risk with this combination.",
  },
  {
    drug_a: "buprenorphine",
    drug_b: "phenelzine",
    severity: "high",
    mechanism:
      "Both increase serotonin activity; combining them can precipitate serotonin syndrome.",
    evidence:
      "MAOIs carry labeled contraindications or strong warnings against use with serotonergic opioids.",
  },
  {
    drug_a: "buprenorphine",
    drug_b: "promethazine",
    severity: "moderate",
    mechanism:
      "Both cause CNS depression; combined use increases sedation and, in vulnerable patients, respiratory depression risk.",
    evidence:
      "Product labeling for sedating antihistamines warns against combination with opioid analgesics.",
  },
  {
    drug_a: "buprenorphine",
    drug_b: "rizatriptan",
    severity: "high",
    mechanism:
      "Both increase serotonin activity, raising the risk of serotonin syndrome.",
    evidence:
      "Case reports and FDA labeling describe elevated serotonin syndrome risk with this combination.",
  },
  {
    drug_a: "buprenorphine",
    drug_b: "sertraline",
    severity: "high",
    mechanism:
      "Both increase serotonin activity, raising the risk of serotonin syndrome.",
    evidence:
      "Case reports and FDA labeling describe elevated serotonin syndrome risk with this combination.",
  },
  {
    drug_a: "buprenorphine",
    drug_b: "st_johns_wort",
    severity: "high",
    mechanism:
      "Both increase serotonin activity, raising the risk of serotonin syndrome.",
    evidence:
      "Case reports and FDA labeling describe elevated serotonin syndrome risk with this combination.",
  },
  {
    drug_a: "buprenorphine",
    drug_b: "sumatriptan",
    severity: "high",
    mechanism:
      "Both increase serotonin activity, raising the risk of serotonin syndrome.",
    evidence:
      "Case reports and FDA labeling describe elevated serotonin syndrome risk with this combination.",
  },
  {
    drug_a: "buprenorphine",
    drug_b: "temazepam",
    severity: "high",
    mechanism:
      "Both depress the central nervous system; combined use significantly raises the risk of profound sedation and fatal respiratory depression.",
    evidence:
      "FDA boxed warning covers concurrent opioid and benzodiazepine use.",
  },
  {
    drug_a: "buprenorphine",
    drug_b: "tizanidine",
    severity: "moderate",
    mechanism:
      "Both cause CNS depression; combined use increases sedation and fall risk, especially in older adults.",
    evidence:
      "Muscle relaxant labeling warns of additive sedation with opioids.",
  },
  {
    drug_a: "buprenorphine",
    drug_b: "tramadol",
    severity: "moderate",
    mechanism:
      "Combining two opioids adds to central nervous system and respiratory depression without clear added benefit.",
    evidence:
      "Prescribing guidance recommends against concurrent use of multiple opioid analgesics outside supervised rotation.",
  },
  {
    drug_a: "buprenorphine",
    drug_b: "tranylcypromine",
    severity: "high",
    mechanism:
      "Both increase serotonin activity; combining them can precipitate serotonin syndrome.",
    evidence:
      "MAOIs carry labeled contraindications or strong warnings against use with serotonergic opioids.",
  },
  {
    drug_a: "buprenorphine",
    drug_b: "venlafaxine",
    severity: "high",
    mechanism:
      "Both increase serotonin activity, raising the risk of serotonin syndrome.",
    evidence:
      "Case reports and FDA labeling describe elevated serotonin syndrome risk with this combination.",
  },
  {
    drug_a: "buprenorphine",
    drug_b: "zaleplon",
    severity: "high",
    mechanism:
      "Both depress the central nervous system; combined use significantly raises the risk of profound sedation and fatal respiratory depression.",
    evidence:
      "FDA boxed warning covers concurrent opioid and CNS depressant use, including non-benzodiazepine hypnotics.",
  },
  {
    drug_a: "buprenorphine",
    drug_b: "zolpidem",
    severity: "high",
    mechanism:
      "Both depress the central nervous system; combined use significantly raises the risk of profound sedation and fatal respiratory depression.",
    evidence:
      "FDA boxed warning covers concurrent opioid and CNS depressant use, including non-benzodiazepine hypnotics.",
  },
  {
    drug_a: "candesartan",
    drug_b: "amiloride",
    severity: "moderate",
    mechanism:
      "Both raise serum potassium; combined use increases the risk of hyperkalemia.",
    evidence:
      "Labeling for potassium-sparing diuretics warns of hyperkalemia risk with ARBs.",
  },
  {
    drug_a: "candesartan",
    drug_b: "lithium",
    severity: "moderate",
    mechanism:
      "ARBs can reduce renal clearance of lithium, similar to ACE inhibitors, raising lithium levels toward toxicity.",
    evidence:
      "Case reports describe lithium toxicity with concurrent ARB use, warranting level monitoring.",
  },
  {
    drug_a: "candesartan",
    drug_b: "spironolactone",
    severity: "moderate",
    mechanism:
      "Both raise serum potassium; combined use increases the risk of hyperkalemia.",
    evidence:
      "Labeling for potassium-sparing diuretics warns of hyperkalemia risk with ARBs.",
  },
  {
    drug_a: "candesartan",
    drug_b: "triamterene",
    severity: "moderate",
    mechanism:
      "Both raise serum potassium; combined use increases the risk of hyperkalemia.",
    evidence:
      "Labeling for potassium-sparing diuretics warns of hyperkalemia risk with ARBs.",
  },
  {
    drug_a: "captopril",
    drug_b: "azilsartan",
    severity: "moderate",
    mechanism:
      "Dual blockade of the renin-angiotensin system can increase risk of hyperkalemia and hypotension.",
    evidence:
      "Guidelines generally recommend against combining ACE inhibitors and ARBs.",
  },
  {
    drug_a: "captopril",
    drug_b: "candesartan",
    severity: "moderate",
    mechanism:
      "Dual blockade of the renin-angiotensin system can increase risk of hyperkalemia and hypotension.",
    evidence:
      "Guidelines generally recommend against combining ACE inhibitors and ARBs.",
  },
  {
    drug_a: "captopril",
    drug_b: "telmisartan",
    severity: "moderate",
    mechanism:
      "Dual blockade of the renin-angiotensin system can increase risk of hyperkalemia and hypotension.",
    evidence:
      "Guidelines generally recommend against combining ACE inhibitors and ARBs.",
  },
  {
    drug_a: "captopril",
    drug_b: "triamterene",
    severity: "moderate",
    mechanism:
      "Both raise serum potassium; combined use increases the risk of hyperkalemia.",
    evidence:
      "Labeling for potassium-sparing diuretics warns of hyperkalemia risk with ACE inhibitors.",
  },
  {
    drug_a: "carbamazepine",
    drug_b: "edoxaban",
    severity: "moderate",
    mechanism:
      "Several antiepileptics induce hepatic enzymes that alter anticoagulant metabolism, making dosing harder to stabilize.",
    evidence:
      "Guidelines recommend close INR monitoring when combining enzyme-inducing antiepileptics with anticoagulants.",
  },
  {
    drug_a: "carbamazepine",
    drug_b: "enoxaparin",
    severity: "moderate",
    mechanism:
      "Several antiepileptics induce hepatic enzymes that alter anticoagulant metabolism, making dosing harder to stabilize.",
    evidence:
      "Guidelines recommend close INR monitoring when combining enzyme-inducing antiepileptics with anticoagulants.",
  },
  {
    drug_a: "carbamazepine",
    drug_b: "lacosamide",
    severity: "moderate",
    mechanism:
      "Combining certain antiepileptics can alter one another’s blood levels via shared metabolic pathways.",
    evidence:
      "Neurology guidance recommends level monitoring when combining enzyme-inducing and non-inducing antiepileptics.",
  },
  {
    drug_a: "carbamazepine",
    drug_b: "levetiracetam",
    severity: "moderate",
    mechanism:
      "Combining certain antiepileptics can alter one another’s blood levels via shared metabolic pathways.",
    evidence:
      "Neurology guidance recommends level monitoring when combining enzyme-inducing and non-inducing antiepileptics.",
  },
  {
    drug_a: "carbamazepine",
    drug_b: "oxcarbazepine",
    severity: "moderate",
    mechanism:
      "Combining certain antiepileptics can alter one another’s blood levels via shared metabolic pathways.",
    evidence:
      "Neurology guidance recommends level monitoring when combining enzyme-inducing antiepileptics.",
  },
  {
    drug_a: "carbamazepine",
    drug_b: "pregabalin",
    severity: "moderate",
    mechanism:
      "Combining certain antiepileptics can alter one another’s blood levels via shared metabolic pathways.",
    evidence:
      "Neurology guidance recommends level monitoring when combining enzyme-inducing and non-inducing antiepileptics.",
  },
  {
    drug_a: "carbamazepine",
    drug_b: "topiramate",
    severity: "moderate",
    mechanism:
      "Combining certain antiepileptics can alter one another’s blood levels via shared metabolic pathways.",
    evidence:
      "Neurology guidance recommends level monitoring when combining enzyme-inducing and non-inducing antiepileptics.",
  },
  {
    drug_a: "carbamazepine",
    drug_b: "zonisamide",
    severity: "moderate",
    mechanism:
      "Combining certain antiepileptics can alter one another’s blood levels via shared metabolic pathways.",
    evidence:
      "Neurology guidance recommends level monitoring when combining enzyme-inducing and non-inducing antiepileptics.",
  },
  {
    drug_a: "carvedilol",
    drug_b: "canagliflozin",
    severity: "low",
    mechanism:
      "Beta blockers can mask the warning signs of hypoglycemia such as tremor and rapid heartbeat.",
    evidence:
      "Diabetes management guidance notes blunted hypoglycemia awareness with beta blocker use.",
  },
  {
    drug_a: "carvedilol",
    drug_b: "dapagliflozin",
    severity: "low",
    mechanism:
      "Beta blockers can mask the warning signs of hypoglycemia such as tremor and rapid heartbeat.",
    evidence:
      "Diabetes management guidance notes blunted hypoglycemia awareness with beta blocker use.",
  },
  {
    drug_a: "carvedilol",
    drug_b: "dulaglutide",
    severity: "low",
    mechanism:
      "Beta blockers can mask the warning signs of hypoglycemia such as tremor and rapid heartbeat.",
    evidence:
      "Diabetes management guidance notes blunted hypoglycemia awareness with beta blocker use.",
  },
  {
    drug_a: "carvedilol",
    drug_b: "empagliflozin",
    severity: "low",
    mechanism:
      "Beta blockers can mask the warning signs of hypoglycemia such as tremor and rapid heartbeat.",
    evidence:
      "Diabetes management guidance notes blunted hypoglycemia awareness with beta blocker use.",
  },
  {
    drug_a: "carvedilol",
    drug_b: "insulin_aspart",
    severity: "low",
    mechanism:
      "Beta blockers can mask the warning signs of hypoglycemia such as tremor and rapid heartbeat.",
    evidence:
      "Diabetes management guidance notes blunted hypoglycemia awareness with beta blocker use.",
  },
  {
    drug_a: "carvedilol",
    drug_b: "insulin_lispro",
    severity: "low",
    mechanism:
      "Beta blockers can mask the warning signs of hypoglycemia such as tremor and rapid heartbeat.",
    evidence:
      "Diabetes management guidance notes blunted hypoglycemia awareness with beta blocker use.",
  },
  {
    drug_a: "carvedilol",
    drug_b: "labetalol",
    severity: "low",
    mechanism:
      "Combining two beta blockers adds to heart-rate-lowering effects without added benefit.",
    evidence:
      "Guidelines recommend against routine combination of two beta blockers.",
  },
  {
    drug_a: "carvedilol",
    drug_b: "linagliptin",
    severity: "low",
    mechanism:
      "Beta blockers can mask the warning signs of hypoglycemia such as tremor and rapid heartbeat.",
    evidence:
      "Diabetes management guidance notes blunted hypoglycemia awareness with beta blocker use.",
  },
  {
    drug_a: "carvedilol",
    drug_b: "liraglutide",
    severity: "low",
    mechanism:
      "Beta blockers can mask the warning signs of hypoglycemia such as tremor and rapid heartbeat.",
    evidence:
      "Diabetes management guidance notes blunted hypoglycemia awareness with beta blocker use.",
  },
  {
    drug_a: "carvedilol",
    drug_b: "nadolol",
    severity: "low",
    mechanism:
      "Combining two beta blockers adds to heart-rate-lowering effects without added benefit.",
    evidence:
      "Guidelines recommend against routine combination of two beta blockers.",
  },
  {
    drug_a: "carvedilol",
    drug_b: "nebivolol",
    severity: "low",
    mechanism:
      "Combining two beta blockers adds to heart-rate-lowering effects without added benefit.",
    evidence:
      "Guidelines recommend against routine combination of two beta blockers.",
  },
  {
    drug_a: "carvedilol",
    drug_b: "pioglitazone",
    severity: "low",
    mechanism:
      "Beta blockers can mask the warning signs of hypoglycemia such as tremor and rapid heartbeat.",
    evidence:
      "Diabetes management guidance notes blunted hypoglycemia awareness with beta blocker use.",
  },
  {
    drug_a: "carvedilol",
    drug_b: "saxagliptin",
    severity: "low",
    mechanism:
      "Beta blockers can mask the warning signs of hypoglycemia such as tremor and rapid heartbeat.",
    evidence:
      "Diabetes management guidance notes blunted hypoglycemia awareness with beta blocker use.",
  },
  {
    drug_a: "carvedilol",
    drug_b: "semaglutide",
    severity: "low",
    mechanism:
      "Beta blockers can mask the warning signs of hypoglycemia such as tremor and rapid heartbeat.",
    evidence:
      "Diabetes management guidance notes blunted hypoglycemia awareness with beta blocker use.",
  },
  {
    drug_a: "carvedilol",
    drug_b: "sitagliptin",
    severity: "low",
    mechanism:
      "Beta blockers can mask the warning signs of hypoglycemia such as tremor and rapid heartbeat.",
    evidence:
      "Diabetes management guidance notes blunted hypoglycemia awareness with beta blocker use.",
  },
  {
    drug_a: "carvedilol",
    drug_b: "sotalol",
    severity: "low",
    mechanism:
      "Combining two beta blockers adds to heart-rate-lowering effects without added benefit.",
    evidence:
      "Guidelines recommend against routine combination of two beta blockers.",
  },
  {
    drug_a: "celecoxib",
    drug_b: "azilsartan",
    severity: "moderate",
    mechanism:
      "NSAIDs can reduce the antihypertensive effect of ARBs and impair renal function.",
    evidence:
      "Labeling for both drug classes notes reduced antihypertensive effect and renal risk with combined use.",
  },
  {
    drug_a: "celecoxib",
    drug_b: "benazepril",
    severity: "moderate",
    mechanism:
      "NSAIDs can reduce the antihypertensive effect of ACE inhibitors and impair renal function.",
    evidence:
      "Labeling for both drug classes notes reduced antihypertensive effect and renal risk with combined use.",
  },
  {
    drug_a: "celecoxib",
    drug_b: "budesonide",
    severity: "moderate",
    mechanism:
      "Both irritate the GI lining; combined use substantially increases risk of ulcers and GI bleeding.",
    evidence:
      "Guidelines recommend gastroprotection when NSAIDs and corticosteroids are combined.",
  },
  {
    drug_a: "celecoxib",
    drug_b: "candesartan",
    severity: "moderate",
    mechanism:
      "NSAIDs can reduce the antihypertensive effect of ARBs and impair renal function.",
    evidence:
      "Labeling for both drug classes notes reduced antihypertensive effect and renal risk with combined use.",
  },
  {
    drug_a: "celecoxib",
    drug_b: "desvenlafaxine",
    severity: "moderate",
    mechanism:
      "SSRIs combined with NSAIDs may increase risk of GI bleeding due to reduced platelet serotonin uptake.",
    evidence:
      "Observational studies link serotonergic antidepressant + NSAID combinations to higher GI bleeding rates.",
  },
  {
    drug_a: "celecoxib",
    drug_b: "dipyridamole",
    severity: "moderate",
    mechanism:
      "NSAIDs may add to the antiplatelet effect and irritate the GI lining, raising bleeding risk.",
    evidence:
      "Cardiology guidance flags added GI bleeding risk when NSAIDs are combined with antiplatelet therapy.",
  },
  {
    drug_a: "celecoxib",
    drug_b: "edoxaban",
    severity: "high",
    mechanism:
      "NSAIDs inhibit platelet aggregation and can displace anticoagulants from protein binding, increasing bleeding risk.",
    evidence:
      "Labeling for anticoagulants warns of increased bleeding risk with concurrent NSAID use.",
  },
  {
    drug_a: "celecoxib",
    drug_b: "enoxaparin",
    severity: "high",
    mechanism:
      "NSAIDs inhibit platelet aggregation and can displace anticoagulants from protein binding, increasing bleeding risk.",
    evidence:
      "Labeling for anticoagulants warns of increased bleeding risk with concurrent NSAID use.",
  },
  {
    drug_a: "celecoxib",
    drug_b: "etodolac",
    severity: "low",
    mechanism:
      "Combining two NSAIDs adds to GI and renal risk without added therapeutic benefit.",
    evidence:
      "Guidelines recommend against routine combination of two NSAIDs.",
  },
  {
    drug_a: "celecoxib",
    drug_b: "fluticasone",
    severity: "moderate",
    mechanism:
      "Both irritate the GI lining; combined use substantially increases risk of ulcers and GI bleeding.",
    evidence:
      "Guidelines recommend gastroprotection when NSAIDs and corticosteroids are combined.",
  },
  {
    drug_a: "celecoxib",
    drug_b: "fluvoxamine",
    severity: "moderate",
    mechanism:
      "SSRIs combined with NSAIDs may increase risk of GI bleeding due to reduced platelet serotonin uptake.",
    evidence:
      "Observational studies link SSRI + NSAID combinations to higher GI bleeding rates.",
  },
  {
    drug_a: "celecoxib",
    drug_b: "fosinopril",
    severity: "moderate",
    mechanism:
      "NSAIDs can reduce the antihypertensive effect of ACE inhibitors and impair renal function.",
    evidence:
      "Labeling for both drug classes notes reduced antihypertensive effect and renal risk with combined use.",
  },
  {
    drug_a: "celecoxib",
    drug_b: "hydrocortisone",
    severity: "moderate",
    mechanism:
      "Both irritate the GI lining; combined use substantially increases risk of ulcers and GI bleeding.",
    evidence:
      "Guidelines recommend gastroprotection when NSAIDs and corticosteroids are combined.",
  },
  {
    drug_a: "celecoxib",
    drug_b: "levomilnacipran",
    severity: "moderate",
    mechanism:
      "SSRIs combined with NSAIDs may increase risk of GI bleeding due to reduced platelet serotonin uptake.",
    evidence:
      "Observational studies link serotonergic antidepressant + NSAID combinations to higher GI bleeding rates.",
  },
  {
    drug_a: "celecoxib",
    drug_b: "nabumetone",
    severity: "low",
    mechanism:
      "Combining two NSAIDs adds to GI and renal risk without added therapeutic benefit.",
    evidence:
      "Guidelines recommend against routine combination of two NSAIDs.",
  },
  {
    drug_a: "celecoxib",
    drug_b: "perindopril",
    severity: "moderate",
    mechanism:
      "NSAIDs can reduce the antihypertensive effect of ACE inhibitors and impair renal function.",
    evidence:
      "Labeling for both drug classes notes reduced antihypertensive effect and renal risk with combined use.",
  },
  {
    drug_a: "celecoxib",
    drug_b: "piroxicam",
    severity: "low",
    mechanism:
      "Combining two NSAIDs adds to GI and renal risk without added therapeutic benefit.",
    evidence:
      "Guidelines recommend against routine combination of two NSAIDs.",
  },
  {
    drug_a: "celecoxib",
    drug_b: "prasugrel",
    severity: "moderate",
    mechanism:
      "NSAIDs may add to the antiplatelet effect and irritate the GI lining, raising bleeding risk.",
    evidence:
      "Cardiology guidance flags added GI bleeding risk when NSAIDs are combined with antiplatelet therapy.",
  },
  {
    drug_a: "celecoxib",
    drug_b: "quinapril",
    severity: "moderate",
    mechanism:
      "NSAIDs can reduce the antihypertensive effect of ACE inhibitors and impair renal function.",
    evidence:
      "Labeling for both drug classes notes reduced antihypertensive effect and renal risk with combined use.",
  },
  {
    drug_a: "celecoxib",
    drug_b: "sulindac",
    severity: "low",
    mechanism:
      "Combining two NSAIDs adds to GI and renal risk without added therapeutic benefit.",
    evidence:
      "Guidelines recommend against routine combination of two NSAIDs.",
  },
  {
    drug_a: "celecoxib",
    drug_b: "telmisartan",
    severity: "moderate",
    mechanism:
      "NSAIDs can reduce the antihypertensive effect of ARBs and impair renal function.",
    evidence:
      "Labeling for both drug classes notes reduced antihypertensive effect and renal risk with combined use.",
  },
  {
    drug_a: "celecoxib",
    drug_b: "ticagrelor",
    severity: "moderate",
    mechanism:
      "NSAIDs may add to the antiplatelet effect and irritate the GI lining, raising bleeding risk.",
    evidence:
      "Cardiology guidance flags added GI bleeding risk when NSAIDs are combined with antiplatelet therapy.",
  },
  {
    drug_a: "celecoxib",
    drug_b: "trandolapril",
    severity: "moderate",
    mechanism:
      "NSAIDs can reduce the antihypertensive effect of ACE inhibitors and impair renal function.",
    evidence:
      "Labeling for both drug classes notes reduced antihypertensive effect and renal risk with combined use.",
  },
  {
    drug_a: "celecoxib",
    drug_b: "triamcinolone",
    severity: "moderate",
    mechanism:
      "Both irritate the GI lining; combined use substantially increases risk of ulcers and GI bleeding.",
    evidence:
      "Guidelines recommend gastroprotection when NSAIDs and corticosteroids are combined.",
  },
  {
    drug_a: "chlordiazepoxide",
    drug_b: "baclofen",
    severity: "moderate",
    mechanism:
      "Both cause CNS depression; combined use increases sedation and fall risk, especially in older adults.",
    evidence:
      "Muscle relaxant labeling warns of additive sedation with benzodiazepines.",
  },
  {
    drug_a: "chlordiazepoxide",
    drug_b: "carisoprodol",
    severity: "moderate",
    mechanism:
      "Both cause CNS depression; combined use increases sedation and fall risk, especially in older adults.",
    evidence:
      "Muscle relaxant labeling warns of additive sedation with benzodiazepines.",
  },
  {
    drug_a: "chlordiazepoxide",
    drug_b: "clonazepam",
    severity: "moderate",
    mechanism:
      "Additive central nervous system depression from combining two benzodiazepines.",
    evidence:
      "Clinical guidance advises against routinely combining two benzodiazepines.",
  },
  {
    drug_a: "chlordiazepoxide",
    drug_b: "clorazepate",
    severity: "moderate",
    mechanism:
      "Additive central nervous system depression from combining two benzodiazepines.",
    evidence:
      "Clinical guidance advises against routinely combining two benzodiazepines.",
  },
  {
    drug_a: "chlordiazepoxide",
    drug_b: "cyclobenzaprine",
    severity: "moderate",
    mechanism:
      "Both cause CNS depression; combined use increases sedation and fall risk, especially in older adults.",
    evidence:
      "Muscle relaxant labeling warns of additive sedation with benzodiazepines.",
  },
  {
    drug_a: "chlordiazepoxide",
    drug_b: "diazepam",
    severity: "moderate",
    mechanism:
      "Additive central nervous system depression from combining two benzodiazepines.",
    evidence:
      "Clinical guidance advises against routinely combining two benzodiazepines.",
  },
  {
    drug_a: "chlordiazepoxide",
    drug_b: "diphenhydramine",
    severity: "moderate",
    mechanism:
      "Both cause CNS depression; combined use increases sedation and impairs alertness.",
    evidence:
      "Antihistamine labeling warns of additive sedation with benzodiazepines.",
  },
  {
    drug_a: "chlordiazepoxide",
    drug_b: "eszopiclone",
    severity: "moderate",
    mechanism:
      "Additive CNS depression between benzodiazepines and non-benzodiazepine hypnotics increases sedation and fall risk.",
    evidence:
      "Sedative-hypnotic labeling warns against combination with benzodiazepines.",
  },
  {
    drug_a: "chlordiazepoxide",
    drug_b: "hydroxyzine",
    severity: "moderate",
    mechanism:
      "Both cause CNS depression; combined use increases sedation and impairs alertness.",
    evidence:
      "Antihistamine labeling warns of additive sedation with benzodiazepines.",
  },
  {
    drug_a: "chlordiazepoxide",
    drug_b: "lorazepam",
    severity: "moderate",
    mechanism:
      "Additive central nervous system depression from combining two benzodiazepines.",
    evidence:
      "Clinical guidance advises against routinely combining two benzodiazepines.",
  },
  {
    drug_a: "chlordiazepoxide",
    drug_b: "methocarbamol",
    severity: "moderate",
    mechanism:
      "Both cause CNS depression; combined use increases sedation and fall risk, especially in older adults.",
    evidence:
      "Muscle relaxant labeling warns of additive sedation with benzodiazepines.",
  },
  {
    drug_a: "chlordiazepoxide",
    drug_b: "midazolam",
    severity: "moderate",
    mechanism:
      "Additive central nervous system depression from combining two benzodiazepines.",
    evidence:
      "Clinical guidance advises against routinely combining two benzodiazepines.",
  },
  {
    drug_a: "chlordiazepoxide",
    drug_b: "oxazepam",
    severity: "moderate",
    mechanism:
      "Additive central nervous system depression from combining two benzodiazepines.",
    evidence:
      "Clinical guidance advises against routinely combining two benzodiazepines.",
  },
  {
    drug_a: "chlordiazepoxide",
    drug_b: "promethazine",
    severity: "moderate",
    mechanism:
      "Both cause CNS depression; combined use increases sedation and impairs alertness.",
    evidence:
      "Antihistamine labeling warns of additive sedation with benzodiazepines.",
  },
  {
    drug_a: "chlordiazepoxide",
    drug_b: "ramelteon",
    severity: "moderate",
    mechanism:
      "Additive CNS depression between benzodiazepines and other sedative-hypnotics increases sedation and fall risk.",
    evidence:
      "Sedative-hypnotic labeling warns against combination with benzodiazepines.",
  },
  {
    drug_a: "chlordiazepoxide",
    drug_b: "suvorexant",
    severity: "moderate",
    mechanism:
      "Additive CNS depression between benzodiazepines and other sedative-hypnotics increases sedation and fall risk.",
    evidence:
      "Sedative-hypnotic labeling warns against combination with benzodiazepines.",
  },
  {
    drug_a: "chlordiazepoxide",
    drug_b: "temazepam",
    severity: "moderate",
    mechanism:
      "Additive central nervous system depression from combining two benzodiazepines.",
    evidence:
      "Clinical guidance advises against routinely combining two benzodiazepines.",
  },
  {
    drug_a: "chlordiazepoxide",
    drug_b: "tizanidine",
    severity: "moderate",
    mechanism:
      "Both cause CNS depression; combined use increases sedation and fall risk, especially in older adults.",
    evidence:
      "Muscle relaxant labeling warns of additive sedation with benzodiazepines.",
  },
  {
    drug_a: "chlordiazepoxide",
    drug_b: "zaleplon",
    severity: "moderate",
    mechanism:
      "Additive CNS depression between benzodiazepines and non-benzodiazepine hypnotics increases sedation and fall risk.",
    evidence:
      "Sedative-hypnotic labeling warns against combination with benzodiazepines.",
  },
  {
    drug_a: "chlordiazepoxide",
    drug_b: "zolpidem",
    severity: "moderate",
    mechanism:
      "Additive CNS depression between benzodiazepines and non-benzodiazepine hypnotics increases sedation and fall risk.",
    evidence:
      "Sedative-hypnotic labeling warns against combination with benzodiazepines.",
  },
  {
    drug_a: "chlorthalidone",
    drug_b: "digoxin",
    severity: "moderate",
    mechanism:
      "Diuretic-induced potassium loss can increase the risk of digoxin toxicity.",
    evidence:
      "Digoxin labeling warns that hypokalemia from diuretics increases toxicity risk.",
  },
  {
    drug_a: "chlorthalidone",
    drug_b: "lithium",
    severity: "moderate",
    mechanism:
      "Diuretics can reduce renal clearance of lithium, raising lithium levels toward toxicity.",
    evidence:
      "Lithium labeling warns of elevated levels with concurrent diuretic use, warranting level monitoring.",
  },
  {
    drug_a: "cimetidine",
    drug_b: "fluconazole",
    severity: "moderate",
    mechanism:
      "Reduced gastric acidity from H2 blockers can impair absorption of azole antifungals that require an acidic environment.",
    evidence:
      "Antifungal labeling notes reduced bioavailability with concurrent acid-suppressing therapy.",
  },
  {
    drug_a: "cimetidine",
    drug_b: "itraconazole",
    severity: "moderate",
    mechanism:
      "Reduced gastric acidity from H2 blockers can impair absorption of azole antifungals that require an acidic environment.",
    evidence:
      "Antifungal labeling notes reduced bioavailability with concurrent acid-suppressing therapy.",
  },
  {
    drug_a: "cimetidine",
    drug_b: "ketoconazole",
    severity: "moderate",
    mechanism:
      "Reduced gastric acidity from H2 blockers can impair absorption of azole antifungals that require an acidic environment.",
    evidence:
      "Antifungal labeling notes reduced bioavailability with concurrent acid-suppressing therapy.",
  },
  {
    drug_a: "cimetidine",
    drug_b: "levothyroxine",
    severity: "low",
    mechanism:
      "Reduced gastric acidity from H2 blockers may impair thyroid hormone absorption.",
    evidence:
      "Endocrinology guidance recommends separating dosing times and monitoring thyroid levels.",
  },
  {
    drug_a: "cimetidine",
    drug_b: "liothyronine",
    severity: "low",
    mechanism:
      "Reduced gastric acidity from H2 blockers may impair thyroid hormone absorption.",
    evidence:
      "Endocrinology guidance recommends separating dosing times and monitoring thyroid levels.",
  },
  {
    drug_a: "citalopram",
    drug_b: "haloperidol",
    severity: "moderate",
    mechanism:
      "Both prolong the QT interval; combined use raises the risk of dangerous arrhythmia.",
    evidence:
      "Drug-induced long QT reference lists flag this combination.",
  },
  {
    drug_a: "citalopram",
    drug_b: "moxifloxacin",
    severity: "moderate",
    mechanism:
      "Both prolong the QT interval; combined use raises the risk of dangerous arrhythmia.",
    evidence:
      "Drug-induced long QT reference lists flag this combination.",
  },
  {
    drug_a: "citalopram",
    drug_b: "ondansetron",
    severity: "moderate",
    mechanism:
      "Both prolong the QT interval; combined use raises the risk of dangerous arrhythmia.",
    evidence:
      "Drug-induced long QT reference lists flag this combination.",
  },
  {
    drug_a: "citalopram",
    drug_b: "ziprasidone",
    severity: "moderate",
    mechanism:
      "Both prolong the QT interval; combined use raises the risk of dangerous arrhythmia.",
    evidence:
      "Drug-induced long QT reference lists flag this combination.",
  },
  {
    drug_a: "clarithromycin",
    drug_b: "azathioprine",
    severity: "moderate",
    mechanism:
      "Macrolides inhibit CYP3A4 metabolism of calcineurin inhibitors, raising levels and toxicity risk.",
    evidence:
      "Transplant medicine guidance requires immunosuppressant level monitoring when macrolide antibiotics are added.",
  },
  {
    drug_a: "clarithromycin",
    drug_b: "cyclosporine",
    severity: "moderate",
    mechanism:
      "Macrolides inhibit CYP3A4 metabolism of calcineurin inhibitors, raising levels and toxicity risk.",
    evidence:
      "Transplant medicine guidance requires immunosuppressant level monitoring when macrolide antibiotics are added.",
  },
  {
    drug_a: "clarithromycin",
    drug_b: "methotrexate",
    severity: "moderate",
    mechanism:
      "Macrolides inhibit CYP3A4 metabolism of calcineurin inhibitors, raising levels and toxicity risk.",
    evidence:
      "Transplant medicine guidance requires immunosuppressant level monitoring when macrolide antibiotics are added.",
  },
  {
    drug_a: "clarithromycin",
    drug_b: "mycophenolate",
    severity: "moderate",
    mechanism:
      "Macrolides inhibit CYP3A4 metabolism of calcineurin inhibitors, raising levels and toxicity risk.",
    evidence:
      "Transplant medicine guidance requires immunosuppressant level monitoring when macrolide antibiotics are added.",
  },
  {
    drug_a: "clarithromycin",
    drug_b: "tacrolimus",
    severity: "moderate",
    mechanism:
      "Macrolides inhibit CYP3A4 metabolism of calcineurin inhibitors, raising levels and toxicity risk.",
    evidence:
      "Transplant medicine guidance requires immunosuppressant level monitoring when macrolide antibiotics are added.",
  },
  {
    drug_a: "clonazepam",
    drug_b: "baclofen",
    severity: "moderate",
    mechanism:
      "Both cause CNS depression; combined use increases sedation and fall risk, especially in older adults.",
    evidence:
      "Muscle relaxant labeling warns of additive sedation with benzodiazepines.",
  },
  {
    drug_a: "clonazepam",
    drug_b: "carisoprodol",
    severity: "moderate",
    mechanism:
      "Both cause CNS depression; combined use increases sedation and fall risk, especially in older adults.",
    evidence:
      "Muscle relaxant labeling warns of additive sedation with benzodiazepines.",
  },
  {
    drug_a: "clonazepam",
    drug_b: "clorazepate",
    severity: "moderate",
    mechanism:
      "Additive central nervous system depression from combining two benzodiazepines.",
    evidence:
      "Clinical guidance advises against routinely combining two benzodiazepines.",
  },
  {
    drug_a: "clonazepam",
    drug_b: "hydroxyzine",
    severity: "moderate",
    mechanism:
      "Both cause CNS depression; combined use increases sedation and impairs alertness.",
    evidence:
      "Antihistamine labeling warns of additive sedation with benzodiazepines.",
  },
  {
    drug_a: "clonazepam",
    drug_b: "methocarbamol",
    severity: "moderate",
    mechanism:
      "Both cause CNS depression; combined use increases sedation and fall risk, especially in older adults.",
    evidence:
      "Muscle relaxant labeling warns of additive sedation with benzodiazepines.",
  },
  {
    drug_a: "clonazepam",
    drug_b: "midazolam",
    severity: "moderate",
    mechanism:
      "Additive central nervous system depression from combining two benzodiazepines.",
    evidence:
      "Clinical guidance advises against routinely combining two benzodiazepines.",
  },
  {
    drug_a: "clonazepam",
    drug_b: "oxazepam",
    severity: "moderate",
    mechanism:
      "Additive central nervous system depression from combining two benzodiazepines.",
    evidence:
      "Clinical guidance advises against routinely combining two benzodiazepines.",
  },
  {
    drug_a: "clonazepam",
    drug_b: "promethazine",
    severity: "moderate",
    mechanism:
      "Both cause CNS depression; combined use increases sedation and impairs alertness.",
    evidence:
      "Antihistamine labeling warns of additive sedation with benzodiazepines.",
  },
  {
    drug_a: "clonazepam",
    drug_b: "ramelteon",
    severity: "moderate",
    mechanism:
      "Additive CNS depression between benzodiazepines and other sedative-hypnotics increases sedation and fall risk.",
    evidence:
      "Sedative-hypnotic labeling warns against combination with benzodiazepines.",
  },
  {
    drug_a: "clonazepam",
    drug_b: "suvorexant",
    severity: "moderate",
    mechanism:
      "Additive CNS depression between benzodiazepines and other sedative-hypnotics increases sedation and fall risk.",
    evidence:
      "Sedative-hypnotic labeling warns against combination with benzodiazepines.",
  },
  {
    drug_a: "clonazepam",
    drug_b: "tizanidine",
    severity: "moderate",
    mechanism:
      "Both cause CNS depression; combined use increases sedation and fall risk, especially in older adults.",
    evidence:
      "Muscle relaxant labeling warns of additive sedation with benzodiazepines.",
  },
  {
    drug_a: "clonazepam",
    drug_b: "zaleplon",
    severity: "moderate",
    mechanism:
      "Additive CNS depression between benzodiazepines and non-benzodiazepine hypnotics increases sedation and fall risk.",
    evidence:
      "Sedative-hypnotic labeling warns against combination with benzodiazepines.",
  },
  {
    drug_a: "clorazepate",
    drug_b: "baclofen",
    severity: "moderate",
    mechanism:
      "Both cause CNS depression; combined use increases sedation and fall risk, especially in older adults.",
    evidence:
      "Muscle relaxant labeling warns of additive sedation with benzodiazepines.",
  },
  {
    drug_a: "clorazepate",
    drug_b: "carisoprodol",
    severity: "moderate",
    mechanism:
      "Both cause CNS depression; combined use increases sedation and fall risk, especially in older adults.",
    evidence:
      "Muscle relaxant labeling warns of additive sedation with benzodiazepines.",
  },
  {
    drug_a: "clorazepate",
    drug_b: "cyclobenzaprine",
    severity: "moderate",
    mechanism:
      "Both cause CNS depression; combined use increases sedation and fall risk, especially in older adults.",
    evidence:
      "Muscle relaxant labeling warns of additive sedation with benzodiazepines.",
  },
  {
    drug_a: "clorazepate",
    drug_b: "diazepam",
    severity: "moderate",
    mechanism:
      "Additive central nervous system depression from combining two benzodiazepines.",
    evidence:
      "Clinical guidance advises against routinely combining two benzodiazepines.",
  },
  {
    drug_a: "clorazepate",
    drug_b: "diphenhydramine",
    severity: "moderate",
    mechanism:
      "Both cause CNS depression; combined use increases sedation and impairs alertness.",
    evidence:
      "Antihistamine labeling warns of additive sedation with benzodiazepines.",
  },
  {
    drug_a: "clorazepate",
    drug_b: "eszopiclone",
    severity: "moderate",
    mechanism:
      "Additive CNS depression between benzodiazepines and non-benzodiazepine hypnotics increases sedation and fall risk.",
    evidence:
      "Sedative-hypnotic labeling warns against combination with benzodiazepines.",
  },
  {
    drug_a: "clorazepate",
    drug_b: "hydroxyzine",
    severity: "moderate",
    mechanism:
      "Both cause CNS depression; combined use increases sedation and impairs alertness.",
    evidence:
      "Antihistamine labeling warns of additive sedation with benzodiazepines.",
  },
  {
    drug_a: "clorazepate",
    drug_b: "lorazepam",
    severity: "moderate",
    mechanism:
      "Additive central nervous system depression from combining two benzodiazepines.",
    evidence:
      "Clinical guidance advises against routinely combining two benzodiazepines.",
  },
  {
    drug_a: "clorazepate",
    drug_b: "methocarbamol",
    severity: "moderate",
    mechanism:
      "Both cause CNS depression; combined use increases sedation and fall risk, especially in older adults.",
    evidence:
      "Muscle relaxant labeling warns of additive sedation with benzodiazepines.",
  },
  {
    drug_a: "clorazepate",
    drug_b: "midazolam",
    severity: "moderate",
    mechanism:
      "Additive central nervous system depression from combining two benzodiazepines.",
    evidence:
      "Clinical guidance advises against routinely combining two benzodiazepines.",
  },
  {
    drug_a: "clorazepate",
    drug_b: "oxazepam",
    severity: "moderate",
    mechanism:
      "Additive central nervous system depression from combining two benzodiazepines.",
    evidence:
      "Clinical guidance advises against routinely combining two benzodiazepines.",
  },
  {
    drug_a: "clorazepate",
    drug_b: "promethazine",
    severity: "moderate",
    mechanism:
      "Both cause CNS depression; combined use increases sedation and impairs alertness.",
    evidence:
      "Antihistamine labeling warns of additive sedation with benzodiazepines.",
  },
  {
    drug_a: "clorazepate",
    drug_b: "ramelteon",
    severity: "moderate",
    mechanism:
      "Additive CNS depression between benzodiazepines and other sedative-hypnotics increases sedation and fall risk.",
    evidence:
      "Sedative-hypnotic labeling warns against combination with benzodiazepines.",
  },
  {
    drug_a: "clorazepate",
    drug_b: "suvorexant",
    severity: "moderate",
    mechanism:
      "Additive CNS depression between benzodiazepines and other sedative-hypnotics increases sedation and fall risk.",
    evidence:
      "Sedative-hypnotic labeling warns against combination with benzodiazepines.",
  },
  {
    drug_a: "clorazepate",
    drug_b: "temazepam",
    severity: "moderate",
    mechanism:
      "Additive central nervous system depression from combining two benzodiazepines.",
    evidence:
      "Clinical guidance advises against routinely combining two benzodiazepines.",
  },
  {
    drug_a: "clorazepate",
    drug_b: "tizanidine",
    severity: "moderate",
    mechanism:
      "Both cause CNS depression; combined use increases sedation and fall risk, especially in older adults.",
    evidence:
      "Muscle relaxant labeling warns of additive sedation with benzodiazepines.",
  },
  {
    drug_a: "clorazepate",
    drug_b: "zaleplon",
    severity: "moderate",
    mechanism:
      "Additive CNS depression between benzodiazepines and non-benzodiazepine hypnotics increases sedation and fall risk.",
    evidence:
      "Sedative-hypnotic labeling warns against combination with benzodiazepines.",
  },
  {
    drug_a: "clorazepate",
    drug_b: "zolpidem",
    severity: "moderate",
    mechanism:
      "Additive CNS depression between benzodiazepines and non-benzodiazepine hypnotics increases sedation and fall risk.",
    evidence:
      "Sedative-hypnotic labeling warns against combination with benzodiazepines.",
  },
  {
    drug_a: "clozapine",
    drug_b: "haloperidol",
    severity: "moderate",
    mechanism:
      "Combining two antipsychotics adds to sedation, metabolic, and QT-prolongation risk without clear added benefit.",
    evidence:
      "Guidelines generally recommend against routine antipsychotic polypharmacy.",
  },
  {
    drug_a: "clozapine",
    drug_b: "lurasidone",
    severity: "moderate",
    mechanism:
      "Combining two antipsychotics adds to sedation, metabolic, and QT-prolongation risk without clear added benefit.",
    evidence:
      "Guidelines generally recommend against routine antipsychotic polypharmacy.",
  },
  {
    drug_a: "clozapine",
    drug_b: "olanzapine",
    severity: "moderate",
    mechanism:
      "Combining two antipsychotics adds to sedation, metabolic, and QT-prolongation risk without clear added benefit.",
    evidence:
      "Guidelines generally recommend against routine antipsychotic polypharmacy.",
  },
  {
    drug_a: "clozapine",
    drug_b: "ondansetron",
    severity: "moderate",
    mechanism:
      "Some antipsychotics have mild serotonergic activity that may add to that of other serotonergic agents.",
    evidence:
      "Case reports describe serotonin syndrome features when antipsychotics are combined with strongly serotonergic drugs.",
  },
  {
    drug_a: "clozapine",
    drug_b: "paliperidone",
    severity: "moderate",
    mechanism:
      "Combining two antipsychotics adds to sedation, metabolic, and QT-prolongation risk without clear added benefit.",
    evidence:
      "Guidelines generally recommend against routine antipsychotic polypharmacy.",
  },
  {
    drug_a: "clozapine",
    drug_b: "quetiapine",
    severity: "moderate",
    mechanism:
      "Combining two antipsychotics adds to sedation, metabolic, and QT-prolongation risk without clear added benefit.",
    evidence:
      "Guidelines generally recommend against routine antipsychotic polypharmacy.",
  },
  {
    drug_a: "clozapine",
    drug_b: "risperidone",
    severity: "moderate",
    mechanism:
      "Combining two antipsychotics adds to sedation, metabolic, and QT-prolongation risk without clear added benefit.",
    evidence:
      "Guidelines generally recommend against routine antipsychotic polypharmacy.",
  },
  {
    drug_a: "clozapine",
    drug_b: "rizatriptan",
    severity: "moderate",
    mechanism:
      "Some antipsychotics have mild serotonergic activity that may add to that of other serotonergic agents.",
    evidence:
      "Case reports describe serotonin syndrome features when antipsychotics are combined with strongly serotonergic drugs.",
  },
  {
    drug_a: "clozapine",
    drug_b: "st_johns_wort",
    severity: "moderate",
    mechanism:
      "Some antipsychotics have mild serotonergic activity that may add to that of other serotonergic agents.",
    evidence:
      "Case reports describe serotonin syndrome features when antipsychotics are combined with strongly serotonergic drugs.",
  },
  {
    drug_a: "clozapine",
    drug_b: "sumatriptan",
    severity: "moderate",
    mechanism:
      "Some antipsychotics have mild serotonergic activity that may add to that of other serotonergic agents.",
    evidence:
      "Case reports describe serotonin syndrome features when antipsychotics are combined with strongly serotonergic drugs.",
  },
  {
    drug_a: "clozapine",
    drug_b: "tramadol",
    severity: "moderate",
    mechanism:
      "Some antipsychotics have mild serotonergic activity that may add to that of other serotonergic agents.",
    evidence:
      "Case reports describe serotonin syndrome features when antipsychotics are combined with strongly serotonergic drugs.",
  },
  {
    drug_a: "clozapine",
    drug_b: "ziprasidone",
    severity: "moderate",
    mechanism:
      "Combining two antipsychotics adds to sedation, metabolic, and QT-prolongation risk without clear added benefit.",
    evidence:
      "Guidelines generally recommend against routine antipsychotic polypharmacy.",
  },
  {
    drug_a: "codeine",
    drug_b: "baclofen",
    severity: "moderate",
    mechanism:
      "Both cause CNS depression; combined use increases sedation and fall risk, especially in older adults.",
    evidence:
      "Muscle relaxant labeling warns of additive sedation with opioids.",
  },
  {
    drug_a: "codeine",
    drug_b: "carisoprodol",
    severity: "moderate",
    mechanism:
      "Both cause CNS depression; combined use increases sedation and fall risk, especially in older adults.",
    evidence:
      "Muscle relaxant labeling warns of additive sedation with opioids.",
  },
  {
    drug_a: "codeine",
    drug_b: "chlordiazepoxide",
    severity: "high",
    mechanism:
      "Both depress the central nervous system; combined use significantly raises the risk of profound sedation and fatal respiratory depression.",
    evidence:
      "FDA boxed warning covers concurrent opioid and benzodiazepine use.",
  },
  {
    drug_a: "codeine",
    drug_b: "clorazepate",
    severity: "high",
    mechanism:
      "Both depress the central nervous system; combined use significantly raises the risk of profound sedation and fatal respiratory depression.",
    evidence:
      "FDA boxed warning covers concurrent opioid and benzodiazepine use.",
  },
  {
    drug_a: "codeine",
    drug_b: "desvenlafaxine",
    severity: "high",
    mechanism:
      "Both increase serotonin activity, raising the risk of serotonin syndrome.",
    evidence:
      "Case reports and FDA labeling describe elevated serotonin syndrome risk with this combination.",
  },
  {
    drug_a: "codeine",
    drug_b: "fluvoxamine",
    severity: "high",
    mechanism:
      "Both increase serotonin activity, raising the risk of serotonin syndrome.",
    evidence:
      "Case reports and FDA labeling describe elevated serotonin syndrome risk with this combination.",
  },
  {
    drug_a: "codeine",
    drug_b: "hydromorphone",
    severity: "moderate",
    mechanism:
      "Combining two opioids adds to central nervous system and respiratory depression without clear added benefit.",
    evidence:
      "Prescribing guidance recommends against concurrent use of multiple opioid analgesics outside supervised rotation.",
  },
  {
    drug_a: "codeine",
    drug_b: "hydroxyzine",
    severity: "moderate",
    mechanism:
      "Both cause CNS depression; combined use increases sedation and, in vulnerable patients, respiratory depression risk.",
    evidence:
      "Product labeling for sedating antihistamines warns against combination with opioid analgesics.",
  },
  {
    drug_a: "codeine",
    drug_b: "levomilnacipran",
    severity: "high",
    mechanism:
      "Both increase serotonin activity, raising the risk of serotonin syndrome.",
    evidence:
      "Case reports and FDA labeling describe elevated serotonin syndrome risk with this combination.",
  },
  {
    drug_a: "codeine",
    drug_b: "meperidine",
    severity: "moderate",
    mechanism:
      "Combining two opioids adds to central nervous system and respiratory depression without clear added benefit.",
    evidence:
      "Prescribing guidance recommends against concurrent use of multiple opioid analgesics outside supervised rotation.",
  },
  {
    drug_a: "codeine",
    drug_b: "methadone",
    severity: "moderate",
    mechanism:
      "Combining two opioids adds to central nervous system and respiratory depression without clear added benefit.",
    evidence:
      "Prescribing guidance recommends against concurrent use of multiple opioid analgesics outside supervised rotation.",
  },
  {
    drug_a: "codeine",
    drug_b: "methocarbamol",
    severity: "moderate",
    mechanism:
      "Both cause CNS depression; combined use increases sedation and fall risk, especially in older adults.",
    evidence:
      "Muscle relaxant labeling warns of additive sedation with opioids.",
  },
  {
    drug_a: "codeine",
    drug_b: "midazolam",
    severity: "high",
    mechanism:
      "Both depress the central nervous system; combined use significantly raises the risk of profound sedation and fatal respiratory depression.",
    evidence:
      "FDA boxed warning covers concurrent opioid and benzodiazepine use.",
  },
  {
    drug_a: "codeine",
    drug_b: "ondansetron",
    severity: "high",
    mechanism:
      "Both increase serotonin activity, raising the risk of serotonin syndrome.",
    evidence:
      "Case reports and FDA labeling describe elevated serotonin syndrome risk with this combination.",
  },
  {
    drug_a: "codeine",
    drug_b: "oxazepam",
    severity: "high",
    mechanism:
      "Both depress the central nervous system; combined use significantly raises the risk of profound sedation and fatal respiratory depression.",
    evidence:
      "FDA boxed warning covers concurrent opioid and benzodiazepine use.",
  },
  {
    drug_a: "codeine",
    drug_b: "oxymorphone",
    severity: "moderate",
    mechanism:
      "Combining two opioids adds to central nervous system and respiratory depression without clear added benefit.",
    evidence:
      "Prescribing guidance recommends against concurrent use of multiple opioid analgesics outside supervised rotation.",
  },
  {
    drug_a: "codeine",
    drug_b: "promethazine",
    severity: "moderate",
    mechanism:
      "Both cause CNS depression; combined use increases sedation and, in vulnerable patients, respiratory depression risk.",
    evidence:
      "Product labeling for sedating antihistamines warns against combination with opioid analgesics.",
  },
  {
    drug_a: "codeine",
    drug_b: "rizatriptan",
    severity: "high",
    mechanism:
      "Both increase serotonin activity, raising the risk of serotonin syndrome.",
    evidence:
      "Case reports and FDA labeling describe elevated serotonin syndrome risk with this combination.",
  },
  {
    drug_a: "codeine",
    drug_b: "st_johns_wort",
    severity: "high",
    mechanism:
      "Both increase serotonin activity, raising the risk of serotonin syndrome.",
    evidence:
      "Case reports and FDA labeling describe elevated serotonin syndrome risk with this combination.",
  },
  {
    drug_a: "codeine",
    drug_b: "sumatriptan",
    severity: "high",
    mechanism:
      "Both increase serotonin activity, raising the risk of serotonin syndrome.",
    evidence:
      "Case reports and FDA labeling describe elevated serotonin syndrome risk with this combination.",
  },
  {
    drug_a: "codeine",
    drug_b: "tizanidine",
    severity: "moderate",
    mechanism:
      "Both cause CNS depression; combined use increases sedation and fall risk, especially in older adults.",
    evidence:
      "Muscle relaxant labeling warns of additive sedation with opioids.",
  },
  {
    drug_a: "codeine",
    drug_b: "zaleplon",
    severity: "high",
    mechanism:
      "Both depress the central nervous system; combined use significantly raises the risk of profound sedation and fatal respiratory depression.",
    evidence:
      "FDA boxed warning covers concurrent opioid and CNS depressant use, including non-benzodiazepine hypnotics.",
  },
  {
    drug_a: "dabigatran",
    drug_b: "budesonide",
    severity: "moderate",
    mechanism:
      "Corticosteroids can irritate the GI lining and alter clotting factor levels, adding to anticoagulant bleeding risk.",
    evidence:
      "Case reports describe elevated INR and GI bleeding with combined corticosteroid and anticoagulant use.",
  },
  {
    drug_a: "dabigatran",
    drug_b: "desvenlafaxine",
    severity: "moderate",
    mechanism:
      "Serotonergic antidepressants impair platelet aggregation and, combined with anticoagulants, can further raise bleeding risk.",
    evidence:
      "Case-control studies report increased bleeding risk with serotonergic antidepressant and anticoagulant co-therapy.",
  },
  {
    drug_a: "dabigatran",
    drug_b: "dipyridamole",
    severity: "high",
    mechanism:
      "Combined anticoagulant and antiplatelet effects substantially increase bleeding risk.",
    evidence:
      "Cardiology guidelines require careful risk-benefit assessment before combining these therapies.",
  },
  {
    drug_a: "dabigatran",
    drug_b: "edoxaban",
    severity: "high",
    mechanism:
      "Combining two anticoagulants compounds bleeding risk without a clear additional therapeutic benefit.",
    evidence:
      "Guidelines recommend against routine combination of two anticoagulants outside specific bridging protocols.",
  },
  {
    drug_a: "dabigatran",
    drug_b: "enoxaparin",
    severity: "high",
    mechanism:
      "Combining two anticoagulants compounds bleeding risk without a clear additional therapeutic benefit.",
    evidence:
      "Guidelines recommend against routine combination of two anticoagulants outside specific bridging protocols.",
  },
  {
    drug_a: "dabigatran",
    drug_b: "fluconazole",
    severity: "high",
    mechanism:
      "Azole antifungals inhibit hepatic enzymes that metabolize anticoagulants, sharply raising anticoagulant levels and bleeding risk.",
    evidence:
      "Labeling for azole antifungals lists anticoagulants among drugs requiring dose adjustment or close monitoring.",
  },
  {
    drug_a: "dabigatran",
    drug_b: "fluticasone",
    severity: "moderate",
    mechanism:
      "Corticosteroids can irritate the GI lining and alter clotting factor levels, adding to anticoagulant bleeding risk.",
    evidence:
      "Case reports describe elevated INR and GI bleeding with combined corticosteroid and anticoagulant use.",
  },
  {
    drug_a: "dabigatran",
    drug_b: "fluvoxamine",
    severity: "moderate",
    mechanism:
      "SSRIs impair platelet aggregation and, combined with anticoagulants, can further raise bleeding risk.",
    evidence:
      "Case-control studies report increased bleeding risk with SSRI and anticoagulant co-therapy.",
  },
  {
    drug_a: "dabigatran",
    drug_b: "hydrocortisone",
    severity: "moderate",
    mechanism:
      "Corticosteroids can irritate the GI lining and alter clotting factor levels, adding to anticoagulant bleeding risk.",
    evidence:
      "Case reports describe elevated INR and GI bleeding with combined corticosteroid and anticoagulant use.",
  },
  {
    drug_a: "dabigatran",
    drug_b: "itraconazole",
    severity: "high",
    mechanism:
      "Azole antifungals inhibit hepatic enzymes that metabolize anticoagulants, sharply raising anticoagulant levels and bleeding risk.",
    evidence:
      "Labeling for azole antifungals lists anticoagulants among drugs requiring dose adjustment or close monitoring.",
  },
  {
    drug_a: "dabigatran",
    drug_b: "ketoconazole",
    severity: "high",
    mechanism:
      "Azole antifungals inhibit hepatic enzymes that metabolize anticoagulants, sharply raising anticoagulant levels and bleeding risk.",
    evidence:
      "Labeling for azole antifungals lists anticoagulants among drugs requiring dose adjustment or close monitoring.",
  },
  {
    drug_a: "dabigatran",
    drug_b: "levomilnacipran",
    severity: "moderate",
    mechanism:
      "Serotonergic antidepressants impair platelet aggregation and, combined with anticoagulants, can further raise bleeding risk.",
    evidence:
      "Case-control studies report increased bleeding risk with serotonergic antidepressant and anticoagulant co-therapy.",
  },
  {
    drug_a: "dabigatran",
    drug_b: "moxifloxacin",
    severity: "moderate",
    mechanism:
      "Fluoroquinolones can potentiate anticoagulant effect, raising bleeding risk.",
    evidence:
      "Labeling for anticoagulants notes increased INR when fluoroquinolone antibiotics are co-prescribed.",
  },
  {
    drug_a: "dabigatran",
    drug_b: "ofloxacin",
    severity: "moderate",
    mechanism:
      "Fluoroquinolones can potentiate anticoagulant effect, raising bleeding risk.",
    evidence:
      "Labeling for anticoagulants notes increased INR when fluoroquinolone antibiotics are co-prescribed.",
  },
  {
    drug_a: "dabigatran",
    drug_b: "prasugrel",
    severity: "high",
    mechanism:
      "Combined anticoagulant and antiplatelet effects substantially increase bleeding risk.",
    evidence:
      "Cardiology guidelines require careful risk-benefit assessment before combining these therapies.",
  },
  {
    drug_a: "dabigatran",
    drug_b: "ticagrelor",
    severity: "high",
    mechanism:
      "Combined anticoagulant and antiplatelet effects substantially increase bleeding risk.",
    evidence:
      "Cardiology guidelines require careful risk-benefit assessment before combining these therapies.",
  },
  {
    drug_a: "dabigatran",
    drug_b: "triamcinolone",
    severity: "moderate",
    mechanism:
      "Corticosteroids can irritate the GI lining and alter clotting factor levels, adding to anticoagulant bleeding risk.",
    evidence:
      "Case reports describe elevated INR and GI bleeding with combined corticosteroid and anticoagulant use.",
  },
  {
    drug_a: "dexamethasone",
    drug_b: "canagliflozin",
    severity: "moderate",
    mechanism:
      "Corticosteroids can raise blood glucose, counteracting the glucose-lowering effect of antidiabetic medications.",
    evidence:
      "Endocrinology guidance recommends closer glucose monitoring when corticosteroids are added.",
  },
  {
    drug_a: "dexamethasone",
    drug_b: "dapagliflozin",
    severity: "moderate",
    mechanism:
      "Corticosteroids can raise blood glucose, counteracting the glucose-lowering effect of antidiabetic medications.",
    evidence:
      "Endocrinology guidance recommends closer glucose monitoring when corticosteroids are added.",
  },
  {
    drug_a: "dexamethasone",
    drug_b: "dulaglutide",
    severity: "moderate",
    mechanism:
      "Corticosteroids can raise blood glucose, counteracting the glucose-lowering effect of antidiabetic medications.",
    evidence:
      "Endocrinology guidance recommends closer glucose monitoring when corticosteroids are added.",
  },
  {
    drug_a: "dexamethasone",
    drug_b: "empagliflozin",
    severity: "moderate",
    mechanism:
      "Corticosteroids can raise blood glucose, counteracting the glucose-lowering effect of antidiabetic medications.",
    evidence:
      "Endocrinology guidance recommends closer glucose monitoring when corticosteroids are added.",
  },
  {
    drug_a: "dexamethasone",
    drug_b: "insulin_aspart",
    severity: "moderate",
    mechanism:
      "Corticosteroids can raise blood glucose, counteracting the glucose-lowering effect of antidiabetic medications.",
    evidence:
      "Endocrinology guidance recommends closer glucose monitoring when corticosteroids are added.",
  },
  {
    drug_a: "dexamethasone",
    drug_b: "insulin_lispro",
    severity: "moderate",
    mechanism:
      "Corticosteroids can raise blood glucose, counteracting the glucose-lowering effect of antidiabetic medications.",
    evidence:
      "Endocrinology guidance recommends closer glucose monitoring when corticosteroids are added.",
  },
  {
    drug_a: "dexamethasone",
    drug_b: "linagliptin",
    severity: "moderate",
    mechanism:
      "Corticosteroids can raise blood glucose, counteracting the glucose-lowering effect of antidiabetic medications.",
    evidence:
      "Endocrinology guidance recommends closer glucose monitoring when corticosteroids are added.",
  },
  {
    drug_a: "dexamethasone",
    drug_b: "liraglutide",
    severity: "moderate",
    mechanism:
      "Corticosteroids can raise blood glucose, counteracting the glucose-lowering effect of antidiabetic medications.",
    evidence:
      "Endocrinology guidance recommends closer glucose monitoring when corticosteroids are added.",
  },
  {
    drug_a: "dexamethasone",
    drug_b: "pioglitazone",
    severity: "moderate",
    mechanism:
      "Corticosteroids can raise blood glucose, counteracting the glucose-lowering effect of antidiabetic medications.",
    evidence:
      "Endocrinology guidance recommends closer glucose monitoring when corticosteroids are added.",
  },
  {
    drug_a: "dexamethasone",
    drug_b: "saxagliptin",
    severity: "moderate",
    mechanism:
      "Corticosteroids can raise blood glucose, counteracting the glucose-lowering effect of antidiabetic medications.",
    evidence:
      "Endocrinology guidance recommends closer glucose monitoring when corticosteroids are added.",
  },
  {
    drug_a: "dexamethasone",
    drug_b: "semaglutide",
    severity: "moderate",
    mechanism:
      "Corticosteroids can raise blood glucose, counteracting the glucose-lowering effect of antidiabetic medications.",
    evidence:
      "Endocrinology guidance recommends closer glucose monitoring when corticosteroids are added.",
  },
  {
    drug_a: "dexamethasone",
    drug_b: "sitagliptin",
    severity: "moderate",
    mechanism:
      "Corticosteroids can raise blood glucose, counteracting the glucose-lowering effect of antidiabetic medications.",
    evidence:
      "Endocrinology guidance recommends closer glucose monitoring when corticosteroids are added.",
  },
  {
    drug_a: "dexlansoprazole",
    drug_b: "fluconazole",
    severity: "moderate",
    mechanism:
      "Reduced gastric acidity from PPIs can impair absorption of azole antifungals that require an acidic environment.",
    evidence:
      "Antifungal labeling notes reduced bioavailability with concurrent acid-suppressing therapy.",
  },
  {
    drug_a: "dexlansoprazole",
    drug_b: "itraconazole",
    severity: "moderate",
    mechanism:
      "Reduced gastric acidity from PPIs can impair absorption of azole antifungals that require an acidic environment.",
    evidence:
      "Antifungal labeling notes reduced bioavailability with concurrent acid-suppressing therapy.",
  },
  {
    drug_a: "dexlansoprazole",
    drug_b: "ketoconazole",
    severity: "moderate",
    mechanism:
      "Reduced gastric acidity from PPIs can impair absorption of azole antifungals that require an acidic environment.",
    evidence:
      "Antifungal labeling notes reduced bioavailability with concurrent acid-suppressing therapy.",
  },
  {
    drug_a: "dexlansoprazole",
    drug_b: "levothyroxine",
    severity: "low",
    mechanism:
      "Reduced gastric acidity from PPIs may impair levothyroxine absorption.",
    evidence:
      "Endocrinology guidance recommends separating dosing times and monitoring thyroid levels.",
  },
  {
    drug_a: "dexlansoprazole",
    drug_b: "liothyronine",
    severity: "low",
    mechanism:
      "Reduced gastric acidity from PPIs may impair levothyroxine absorption.",
    evidence:
      "Endocrinology guidance recommends separating dosing times and monitoring thyroid levels.",
  },
  {
    drug_a: "diazepam",
    drug_b: "baclofen",
    severity: "moderate",
    mechanism:
      "Both cause CNS depression; combined use increases sedation and fall risk, especially in older adults.",
    evidence:
      "Muscle relaxant labeling warns of additive sedation with benzodiazepines.",
  },
  {
    drug_a: "diazepam",
    drug_b: "carisoprodol",
    severity: "moderate",
    mechanism:
      "Both cause CNS depression; combined use increases sedation and fall risk, especially in older adults.",
    evidence:
      "Muscle relaxant labeling warns of additive sedation with benzodiazepines.",
  },
  {
    drug_a: "diazepam",
    drug_b: "hydroxyzine",
    severity: "moderate",
    mechanism:
      "Both cause CNS depression; combined use increases sedation and impairs alertness.",
    evidence:
      "Antihistamine labeling warns of additive sedation with benzodiazepines.",
  },
  {
    drug_a: "diazepam",
    drug_b: "methocarbamol",
    severity: "moderate",
    mechanism:
      "Both cause CNS depression; combined use increases sedation and fall risk, especially in older adults.",
    evidence:
      "Muscle relaxant labeling warns of additive sedation with benzodiazepines.",
  },
  {
    drug_a: "diazepam",
    drug_b: "midazolam",
    severity: "moderate",
    mechanism:
      "Additive central nervous system depression from combining two benzodiazepines.",
    evidence:
      "Clinical guidance advises against routinely combining two benzodiazepines.",
  },
  {
    drug_a: "diazepam",
    drug_b: "oxazepam",
    severity: "moderate",
    mechanism:
      "Additive central nervous system depression from combining two benzodiazepines.",
    evidence:
      "Clinical guidance advises against routinely combining two benzodiazepines.",
  },
  {
    drug_a: "diazepam",
    drug_b: "promethazine",
    severity: "moderate",
    mechanism:
      "Both cause CNS depression; combined use increases sedation and impairs alertness.",
    evidence:
      "Antihistamine labeling warns of additive sedation with benzodiazepines.",
  },
  {
    drug_a: "diazepam",
    drug_b: "ramelteon",
    severity: "moderate",
    mechanism:
      "Additive CNS depression between benzodiazepines and other sedative-hypnotics increases sedation and fall risk.",
    evidence:
      "Sedative-hypnotic labeling warns against combination with benzodiazepines.",
  },
  {
    drug_a: "diazepam",
    drug_b: "suvorexant",
    severity: "moderate",
    mechanism:
      "Additive CNS depression between benzodiazepines and other sedative-hypnotics increases sedation and fall risk.",
    evidence:
      "Sedative-hypnotic labeling warns against combination with benzodiazepines.",
  },
  {
    drug_a: "diazepam",
    drug_b: "tizanidine",
    severity: "moderate",
    mechanism:
      "Both cause CNS depression; combined use increases sedation and fall risk, especially in older adults.",
    evidence:
      "Muscle relaxant labeling warns of additive sedation with benzodiazepines.",
  },
  {
    drug_a: "diazepam",
    drug_b: "zaleplon",
    severity: "moderate",
    mechanism:
      "Additive CNS depression between benzodiazepines and non-benzodiazepine hypnotics increases sedation and fall risk.",
    evidence:
      "Sedative-hypnotic labeling warns against combination with benzodiazepines.",
  },
  {
    drug_a: "diclofenac",
    drug_b: "azilsartan",
    severity: "moderate",
    mechanism:
      "NSAIDs can reduce the antihypertensive effect of ARBs and impair renal function.",
    evidence:
      "Labeling for both drug classes notes reduced antihypertensive effect and renal risk with combined use.",
  },
  {
    drug_a: "diclofenac",
    drug_b: "benazepril",
    severity: "moderate",
    mechanism:
      "NSAIDs can reduce the antihypertensive effect of ACE inhibitors and impair renal function.",
    evidence:
      "Labeling for both drug classes notes reduced antihypertensive effect and renal risk with combined use.",
  },
  {
    drug_a: "diclofenac",
    drug_b: "budesonide",
    severity: "moderate",
    mechanism:
      "Both irritate the GI lining; combined use substantially increases risk of ulcers and GI bleeding.",
    evidence:
      "Guidelines recommend gastroprotection when NSAIDs and corticosteroids are combined.",
  },
  {
    drug_a: "diclofenac",
    drug_b: "candesartan",
    severity: "moderate",
    mechanism:
      "NSAIDs can reduce the antihypertensive effect of ARBs and impair renal function.",
    evidence:
      "Labeling for both drug classes notes reduced antihypertensive effect and renal risk with combined use.",
  },
  {
    drug_a: "diclofenac",
    drug_b: "desvenlafaxine",
    severity: "moderate",
    mechanism:
      "SSRIs combined with NSAIDs may increase risk of GI bleeding due to reduced platelet serotonin uptake.",
    evidence:
      "Observational studies link serotonergic antidepressant + NSAID combinations to higher GI bleeding rates.",
  },
  {
    drug_a: "diclofenac",
    drug_b: "dipyridamole",
    severity: "moderate",
    mechanism:
      "NSAIDs may add to the antiplatelet effect and irritate the GI lining, raising bleeding risk.",
    evidence:
      "Cardiology guidance flags added GI bleeding risk when NSAIDs are combined with antiplatelet therapy.",
  },
  {
    drug_a: "diclofenac",
    drug_b: "edoxaban",
    severity: "high",
    mechanism:
      "NSAIDs inhibit platelet aggregation and can displace anticoagulants from protein binding, increasing bleeding risk.",
    evidence:
      "Labeling for anticoagulants warns of increased bleeding risk with concurrent NSAID use.",
  },
  {
    drug_a: "diclofenac",
    drug_b: "enoxaparin",
    severity: "high",
    mechanism:
      "NSAIDs inhibit platelet aggregation and can displace anticoagulants from protein binding, increasing bleeding risk.",
    evidence:
      "Labeling for anticoagulants warns of increased bleeding risk with concurrent NSAID use.",
  },
  {
    drug_a: "diclofenac",
    drug_b: "etodolac",
    severity: "low",
    mechanism:
      "Combining two NSAIDs adds to GI and renal risk without added therapeutic benefit.",
    evidence:
      "Guidelines recommend against routine combination of two NSAIDs.",
  },
  {
    drug_a: "diclofenac",
    drug_b: "fluticasone",
    severity: "moderate",
    mechanism:
      "Both irritate the GI lining; combined use substantially increases risk of ulcers and GI bleeding.",
    evidence:
      "Guidelines recommend gastroprotection when NSAIDs and corticosteroids are combined.",
  },
  {
    drug_a: "diclofenac",
    drug_b: "fluvoxamine",
    severity: "moderate",
    mechanism:
      "SSRIs combined with NSAIDs may increase risk of GI bleeding due to reduced platelet serotonin uptake.",
    evidence:
      "Observational studies link SSRI + NSAID combinations to higher GI bleeding rates.",
  },
  {
    drug_a: "diclofenac",
    drug_b: "fosinopril",
    severity: "moderate",
    mechanism:
      "NSAIDs can reduce the antihypertensive effect of ACE inhibitors and impair renal function.",
    evidence:
      "Labeling for both drug classes notes reduced antihypertensive effect and renal risk with combined use.",
  },
  {
    drug_a: "diclofenac",
    drug_b: "hydrocortisone",
    severity: "moderate",
    mechanism:
      "Both irritate the GI lining; combined use substantially increases risk of ulcers and GI bleeding.",
    evidence:
      "Guidelines recommend gastroprotection when NSAIDs and corticosteroids are combined.",
  },
  {
    drug_a: "diclofenac",
    drug_b: "levomilnacipran",
    severity: "moderate",
    mechanism:
      "SSRIs combined with NSAIDs may increase risk of GI bleeding due to reduced platelet serotonin uptake.",
    evidence:
      "Observational studies link serotonergic antidepressant + NSAID combinations to higher GI bleeding rates.",
  },
  {
    drug_a: "diclofenac",
    drug_b: "nabumetone",
    severity: "low",
    mechanism:
      "Combining two NSAIDs adds to GI and renal risk without added therapeutic benefit.",
    evidence:
      "Guidelines recommend against routine combination of two NSAIDs.",
  },
  {
    drug_a: "diclofenac",
    drug_b: "perindopril",
    severity: "moderate",
    mechanism:
      "NSAIDs can reduce the antihypertensive effect of ACE inhibitors and impair renal function.",
    evidence:
      "Labeling for both drug classes notes reduced antihypertensive effect and renal risk with combined use.",
  },
  {
    drug_a: "diclofenac",
    drug_b: "piroxicam",
    severity: "low",
    mechanism:
      "Combining two NSAIDs adds to GI and renal risk without added therapeutic benefit.",
    evidence:
      "Guidelines recommend against routine combination of two NSAIDs.",
  },
  {
    drug_a: "diclofenac",
    drug_b: "prasugrel",
    severity: "moderate",
    mechanism:
      "NSAIDs may add to the antiplatelet effect and irritate the GI lining, raising bleeding risk.",
    evidence:
      "Cardiology guidance flags added GI bleeding risk when NSAIDs are combined with antiplatelet therapy.",
  },
  {
    drug_a: "diclofenac",
    drug_b: "quinapril",
    severity: "moderate",
    mechanism:
      "NSAIDs can reduce the antihypertensive effect of ACE inhibitors and impair renal function.",
    evidence:
      "Labeling for both drug classes notes reduced antihypertensive effect and renal risk with combined use.",
  },
  {
    drug_a: "diclofenac",
    drug_b: "sulindac",
    severity: "low",
    mechanism:
      "Combining two NSAIDs adds to GI and renal risk without added therapeutic benefit.",
    evidence:
      "Guidelines recommend against routine combination of two NSAIDs.",
  },
  {
    drug_a: "diclofenac",
    drug_b: "telmisartan",
    severity: "moderate",
    mechanism:
      "NSAIDs can reduce the antihypertensive effect of ARBs and impair renal function.",
    evidence:
      "Labeling for both drug classes notes reduced antihypertensive effect and renal risk with combined use.",
  },
  {
    drug_a: "diclofenac",
    drug_b: "ticagrelor",
    severity: "moderate",
    mechanism:
      "NSAIDs may add to the antiplatelet effect and irritate the GI lining, raising bleeding risk.",
    evidence:
      "Cardiology guidance flags added GI bleeding risk when NSAIDs are combined with antiplatelet therapy.",
  },
  {
    drug_a: "diclofenac",
    drug_b: "trandolapril",
    severity: "moderate",
    mechanism:
      "NSAIDs can reduce the antihypertensive effect of ACE inhibitors and impair renal function.",
    evidence:
      "Labeling for both drug classes notes reduced antihypertensive effect and renal risk with combined use.",
  },
  {
    drug_a: "diclofenac",
    drug_b: "triamcinolone",
    severity: "moderate",
    mechanism:
      "Both irritate the GI lining; combined use substantially increases risk of ulcers and GI bleeding.",
    evidence:
      "Guidelines recommend gastroprotection when NSAIDs and corticosteroids are combined.",
  },
  {
    drug_a: "diphenhydramine",
    drug_b: "baclofen",
    severity: "moderate",
    mechanism:
      "Both cause CNS depression; combined use increases sedation and fall risk, especially in older adults.",
    evidence:
      "Product labeling warns of additive sedation between antihistamines and muscle relaxants.",
  },
  {
    drug_a: "diphenhydramine",
    drug_b: "carisoprodol",
    severity: "moderate",
    mechanism:
      "Both cause CNS depression; combined use increases sedation and fall risk, especially in older adults.",
    evidence:
      "Product labeling warns of additive sedation between antihistamines and muscle relaxants.",
  },
  {
    drug_a: "diphenhydramine",
    drug_b: "methocarbamol",
    severity: "moderate",
    mechanism:
      "Both cause CNS depression; combined use increases sedation and fall risk, especially in older adults.",
    evidence:
      "Product labeling warns of additive sedation between antihistamines and muscle relaxants.",
  },
  {
    drug_a: "diphenhydramine",
    drug_b: "tizanidine",
    severity: "moderate",
    mechanism:
      "Both cause CNS depression; combined use increases sedation and fall risk, especially in older adults.",
    evidence:
      "Product labeling warns of additive sedation between antihistamines and muscle relaxants.",
  },
  {
    drug_a: "dronedarone",
    drug_b: "atorvastatin",
    severity: "moderate",
    mechanism:
      "Amiodarone-class antiarrhythmics inhibit CYP3A4, raising statin levels and myopathy risk.",
    evidence:
      "Statin labeling notes dose limits when combined with amiodarone.",
  },
  {
    drug_a: "dronedarone",
    drug_b: "azithromycin",
    severity: "high",
    mechanism:
      "Macrolides can prolong the QT interval and add to the effect of QT-prolonging antiarrhythmics.",
    evidence:
      "Drug-induced long QT reference lists flag this combination as a torsades risk.",
  },
  {
    drug_a: "dronedarone",
    drug_b: "ciprofloxacin",
    severity: "high",
    mechanism:
      "Fluoroquinolones can prolong the QT interval and add to the effect of QT-prolonging antiarrhythmics.",
    evidence:
      "Drug-induced long QT reference lists flag this combination as a torsades risk.",
  },
  {
    drug_a: "dronedarone",
    drug_b: "citalopram",
    severity: "high",
    mechanism:
      "Both prolong the QT interval; combined use meaningfully raises the risk of dangerous arrhythmia.",
    evidence:
      "Drug-induced long QT reference lists flag this combination as a torsades risk.",
  },
  {
    drug_a: "dronedarone",
    drug_b: "clarithromycin",
    severity: "high",
    mechanism:
      "Macrolides can prolong the QT interval and add to the effect of QT-prolonging antiarrhythmics.",
    evidence:
      "Drug-induced long QT reference lists flag this combination as a torsades risk.",
  },
  {
    drug_a: "dronedarone",
    drug_b: "digoxin",
    severity: "moderate",
    mechanism:
      "Amiodarone-class antiarrhythmics can raise digoxin levels via reduced clearance, increasing toxicity risk.",
    evidence:
      "Digoxin labeling recommends dose reduction when amiodarone is co-prescribed.",
  },
  {
    drug_a: "dronedarone",
    drug_b: "erythromycin",
    severity: "high",
    mechanism:
      "Macrolides can prolong the QT interval and add to the effect of QT-prolonging antiarrhythmics.",
    evidence:
      "Drug-induced long QT reference lists flag this combination as a torsades risk.",
  },
  {
    drug_a: "dronedarone",
    drug_b: "flecainide",
    severity: "high",
    mechanism:
      "Both prolong the QT interval; combined use meaningfully raises the risk of dangerous arrhythmia.",
    evidence:
      "Guidelines recommend against combining two QT-prolonging antiarrhythmics.",
  },
  {
    drug_a: "dronedarone",
    drug_b: "haloperidol",
    severity: "high",
    mechanism:
      "Both prolong the QT interval; combined use meaningfully raises the risk of dangerous arrhythmia.",
    evidence:
      "Drug-induced long QT reference lists flag this combination as a torsades risk.",
  },
  {
    drug_a: "dronedarone",
    drug_b: "levofloxacin",
    severity: "high",
    mechanism:
      "Both prolong the QT interval; combined use meaningfully raises the risk of dangerous arrhythmia.",
    evidence:
      "Drug-induced long QT reference lists flag this combination as a torsades risk.",
  },
  {
    drug_a: "dronedarone",
    drug_b: "lovastatin",
    severity: "moderate",
    mechanism:
      "Amiodarone-class antiarrhythmics inhibit CYP3A4, raising statin levels and myopathy risk.",
    evidence:
      "Statin labeling notes dose limits when combined with amiodarone.",
  },
  {
    drug_a: "dronedarone",
    drug_b: "methadone",
    severity: "high",
    mechanism:
      "Both prolong the QT interval; combined use meaningfully raises the risk of dangerous arrhythmia.",
    evidence:
      "Drug-induced long QT reference lists flag this combination as a torsades risk.",
  },
  {
    drug_a: "dronedarone",
    drug_b: "moxifloxacin",
    severity: "high",
    mechanism:
      "Both prolong the QT interval; combined use meaningfully raises the risk of dangerous arrhythmia.",
    evidence:
      "Drug-induced long QT reference lists flag this combination as a torsades risk.",
  },
  {
    drug_a: "dronedarone",
    drug_b: "ofloxacin",
    severity: "high",
    mechanism:
      "Fluoroquinolones can prolong the QT interval and add to the effect of QT-prolonging antiarrhythmics.",
    evidence:
      "Drug-induced long QT reference lists flag this combination as a torsades risk.",
  },
  {
    drug_a: "dronedarone",
    drug_b: "ondansetron",
    severity: "high",
    mechanism:
      "Both prolong the QT interval; combined use meaningfully raises the risk of dangerous arrhythmia.",
    evidence:
      "Drug-induced long QT reference lists flag this combination as a torsades risk.",
  },
  {
    drug_a: "dronedarone",
    drug_b: "propafenone",
    severity: "high",
    mechanism:
      "Both prolong the QT interval; combined use meaningfully raises the risk of dangerous arrhythmia.",
    evidence:
      "Guidelines recommend against combining two QT-prolonging antiarrhythmics.",
  },
  {
    drug_a: "dronedarone",
    drug_b: "simvastatin",
    severity: "moderate",
    mechanism:
      "Amiodarone-class antiarrhythmics inhibit CYP3A4, raising statin levels and myopathy risk.",
    evidence:
      "Statin labeling notes dose limits when combined with amiodarone.",
  },
  {
    drug_a: "dronedarone",
    drug_b: "sotalol",
    severity: "high",
    mechanism:
      "Both prolong the QT interval; combined use meaningfully raises the risk of dangerous arrhythmia.",
    evidence:
      "Guidelines recommend against combining two QT-prolonging antiarrhythmics.",
  },
  {
    drug_a: "dronedarone",
    drug_b: "ziprasidone",
    severity: "high",
    mechanism:
      "Both prolong the QT interval; combined use meaningfully raises the risk of dangerous arrhythmia.",
    evidence:
      "Drug-induced long QT reference lists flag this combination as a torsades risk.",
  },
  {
    drug_a: "edoxaban",
    drug_b: "aspirin",
    severity: "high",
    mechanism:
      "Combined anticoagulant and antiplatelet effects substantially increase bleeding risk.",
    evidence:
      "Cardiology guidelines require careful risk-benefit assessment before combining these therapies.",
  },
  {
    drug_a: "edoxaban",
    drug_b: "azithromycin",
    severity: "moderate",
    mechanism:
      "Macrolides inhibit hepatic enzymes that metabolize anticoagulants, raising anticoagulant levels and bleeding risk.",
    evidence:
      "Guidelines recommend closer INR monitoring when macrolides are added to anticoagulant therapy.",
  },
  {
    drug_a: "edoxaban",
    drug_b: "budesonide",
    severity: "moderate",
    mechanism:
      "Corticosteroids can irritate the GI lining and alter clotting factor levels, adding to anticoagulant bleeding risk.",
    evidence:
      "Case reports describe elevated INR and GI bleeding with combined corticosteroid and anticoagulant use.",
  },
  {
    drug_a: "edoxaban",
    drug_b: "ciprofloxacin",
    severity: "moderate",
    mechanism:
      "Fluoroquinolones can potentiate anticoagulant effect, raising bleeding risk.",
    evidence:
      "Labeling for anticoagulants notes increased INR when fluoroquinolone antibiotics are co-prescribed.",
  },
  {
    drug_a: "edoxaban",
    drug_b: "citalopram",
    severity: "moderate",
    mechanism:
      "SSRIs impair platelet aggregation and, combined with anticoagulants, can further raise bleeding risk.",
    evidence:
      "Case-control studies report increased bleeding risk with SSRI and anticoagulant co-therapy.",
  },
  {
    drug_a: "edoxaban",
    drug_b: "clarithromycin",
    severity: "moderate",
    mechanism:
      "Macrolides inhibit hepatic enzymes that metabolize anticoagulants, raising anticoagulant levels and bleeding risk.",
    evidence:
      "Guidelines recommend closer INR monitoring when macrolides are added to anticoagulant therapy.",
  },
  {
    drug_a: "edoxaban",
    drug_b: "clopidogrel",
    severity: "high",
    mechanism:
      "Combined anticoagulant and antiplatelet effects substantially increase bleeding risk.",
    evidence:
      "Cardiology guidelines require careful risk-benefit assessment before combining these therapies.",
  },
  {
    drug_a: "edoxaban",
    drug_b: "desvenlafaxine",
    severity: "moderate",
    mechanism:
      "Serotonergic antidepressants impair platelet aggregation and, combined with anticoagulants, can further raise bleeding risk.",
    evidence:
      "Case-control studies report increased bleeding risk with serotonergic antidepressant and anticoagulant co-therapy.",
  },
  {
    drug_a: "edoxaban",
    drug_b: "dexamethasone",
    severity: "moderate",
    mechanism:
      "Corticosteroids can irritate the GI lining and alter clotting factor levels, adding to anticoagulant bleeding risk.",
    evidence:
      "Case reports describe elevated INR and GI bleeding with combined corticosteroid and anticoagulant use.",
  },
  {
    drug_a: "edoxaban",
    drug_b: "dipyridamole",
    severity: "high",
    mechanism:
      "Combined anticoagulant and antiplatelet effects substantially increase bleeding risk.",
    evidence:
      "Cardiology guidelines require careful risk-benefit assessment before combining these therapies.",
  },
  {
    drug_a: "edoxaban",
    drug_b: "duloxetine",
    severity: "moderate",
    mechanism:
      "Serotonergic antidepressants impair platelet aggregation and, combined with anticoagulants, can further raise bleeding risk.",
    evidence:
      "Case-control studies report increased bleeding risk with serotonergic antidepressant and anticoagulant co-therapy.",
  },
  {
    drug_a: "edoxaban",
    drug_b: "enoxaparin",
    severity: "high",
    mechanism:
      "Combining two anticoagulants compounds bleeding risk without a clear additional therapeutic benefit.",
    evidence:
      "Guidelines recommend against routine combination of two anticoagulants outside specific bridging protocols.",
  },
  {
    drug_a: "edoxaban",
    drug_b: "erythromycin",
    severity: "moderate",
    mechanism:
      "Macrolides inhibit hepatic enzymes that metabolize anticoagulants, raising anticoagulant levels and bleeding risk.",
    evidence:
      "Guidelines recommend closer INR monitoring when macrolides are added to anticoagulant therapy.",
  },
  {
    drug_a: "edoxaban",
    drug_b: "escitalopram",
    severity: "moderate",
    mechanism:
      "SSRIs impair platelet aggregation and, combined with anticoagulants, can further raise bleeding risk.",
    evidence:
      "Case-control studies report increased bleeding risk with SSRI and anticoagulant co-therapy.",
  },
  {
    drug_a: "edoxaban",
    drug_b: "fluconazole",
    severity: "high",
    mechanism:
      "Azole antifungals inhibit hepatic enzymes that metabolize anticoagulants, sharply raising anticoagulant levels and bleeding risk.",
    evidence:
      "Labeling for azole antifungals lists anticoagulants among drugs requiring dose adjustment or close monitoring.",
  },
  {
    drug_a: "edoxaban",
    drug_b: "fluoxetine",
    severity: "moderate",
    mechanism:
      "SSRIs impair platelet aggregation and, combined with anticoagulants, can further raise bleeding risk.",
    evidence:
      "Case-control studies report increased bleeding risk with SSRI and anticoagulant co-therapy.",
  },
  {
    drug_a: "edoxaban",
    drug_b: "fluticasone",
    severity: "moderate",
    mechanism:
      "Corticosteroids can irritate the GI lining and alter clotting factor levels, adding to anticoagulant bleeding risk.",
    evidence:
      "Case reports describe elevated INR and GI bleeding with combined corticosteroid and anticoagulant use.",
  },
  {
    drug_a: "edoxaban",
    drug_b: "fluvoxamine",
    severity: "moderate",
    mechanism:
      "SSRIs impair platelet aggregation and, combined with anticoagulants, can further raise bleeding risk.",
    evidence:
      "Case-control studies report increased bleeding risk with SSRI and anticoagulant co-therapy.",
  },
  {
    drug_a: "edoxaban",
    drug_b: "heparin",
    severity: "high",
    mechanism:
      "Combining two anticoagulants compounds bleeding risk without a clear additional therapeutic benefit.",
    evidence:
      "Guidelines recommend against routine combination of two anticoagulants outside specific bridging protocols.",
  },
  {
    drug_a: "edoxaban",
    drug_b: "hydrocortisone",
    severity: "moderate",
    mechanism:
      "Corticosteroids can irritate the GI lining and alter clotting factor levels, adding to anticoagulant bleeding risk.",
    evidence:
      "Case reports describe elevated INR and GI bleeding with combined corticosteroid and anticoagulant use.",
  },
  {
    drug_a: "edoxaban",
    drug_b: "itraconazole",
    severity: "high",
    mechanism:
      "Azole antifungals inhibit hepatic enzymes that metabolize anticoagulants, sharply raising anticoagulant levels and bleeding risk.",
    evidence:
      "Labeling for azole antifungals lists anticoagulants among drugs requiring dose adjustment or close monitoring.",
  },
  {
    drug_a: "edoxaban",
    drug_b: "ketoconazole",
    severity: "high",
    mechanism:
      "Azole antifungals inhibit hepatic enzymes that metabolize anticoagulants, sharply raising anticoagulant levels and bleeding risk.",
    evidence:
      "Labeling for azole antifungals lists anticoagulants among drugs requiring dose adjustment or close monitoring.",
  },
  {
    drug_a: "edoxaban",
    drug_b: "levofloxacin",
    severity: "moderate",
    mechanism:
      "Fluoroquinolones can potentiate anticoagulant effect, raising bleeding risk.",
    evidence:
      "Labeling for anticoagulants notes increased INR when fluoroquinolone antibiotics are co-prescribed.",
  },
  {
    drug_a: "edoxaban",
    drug_b: "levomilnacipran",
    severity: "moderate",
    mechanism:
      "Serotonergic antidepressants impair platelet aggregation and, combined with anticoagulants, can further raise bleeding risk.",
    evidence:
      "Case-control studies report increased bleeding risk with serotonergic antidepressant and anticoagulant co-therapy.",
  },
  {
    drug_a: "edoxaban",
    drug_b: "methylprednisolone",
    severity: "moderate",
    mechanism:
      "Corticosteroids can irritate the GI lining and alter clotting factor levels, adding to anticoagulant bleeding risk.",
    evidence:
      "Case reports describe elevated INR and GI bleeding with combined corticosteroid and anticoagulant use.",
  },
  {
    drug_a: "edoxaban",
    drug_b: "moxifloxacin",
    severity: "moderate",
    mechanism:
      "Fluoroquinolones can potentiate anticoagulant effect, raising bleeding risk.",
    evidence:
      "Labeling for anticoagulants notes increased INR when fluoroquinolone antibiotics are co-prescribed.",
  },
  {
    drug_a: "edoxaban",
    drug_b: "ofloxacin",
    severity: "moderate",
    mechanism:
      "Fluoroquinolones can potentiate anticoagulant effect, raising bleeding risk.",
    evidence:
      "Labeling for anticoagulants notes increased INR when fluoroquinolone antibiotics are co-prescribed.",
  },
  {
    drug_a: "edoxaban",
    drug_b: "paroxetine",
    severity: "moderate",
    mechanism:
      "SSRIs impair platelet aggregation and, combined with anticoagulants, can further raise bleeding risk.",
    evidence:
      "Case-control studies report increased bleeding risk with SSRI and anticoagulant co-therapy.",
  },
  {
    drug_a: "edoxaban",
    drug_b: "prasugrel",
    severity: "high",
    mechanism:
      "Combined anticoagulant and antiplatelet effects substantially increase bleeding risk.",
    evidence:
      "Cardiology guidelines require careful risk-benefit assessment before combining these therapies.",
  },
  {
    drug_a: "edoxaban",
    drug_b: "prednisone",
    severity: "moderate",
    mechanism:
      "Corticosteroids can irritate the GI lining and alter clotting factor levels, adding to anticoagulant bleeding risk.",
    evidence:
      "Case reports describe elevated INR and GI bleeding with combined corticosteroid and anticoagulant use.",
  },
  {
    drug_a: "edoxaban",
    drug_b: "rivaroxaban",
    severity: "high",
    mechanism:
      "Combining two anticoagulants compounds bleeding risk without a clear additional therapeutic benefit.",
    evidence:
      "Guidelines recommend against routine combination of two anticoagulants outside specific bridging protocols.",
  },
  {
    drug_a: "edoxaban",
    drug_b: "sertraline",
    severity: "moderate",
    mechanism:
      "SSRIs impair platelet aggregation and, combined with anticoagulants, can further raise bleeding risk.",
    evidence:
      "Case-control studies report increased bleeding risk with SSRI and anticoagulant co-therapy.",
  },
  {
    drug_a: "edoxaban",
    drug_b: "ticagrelor",
    severity: "high",
    mechanism:
      "Combined anticoagulant and antiplatelet effects substantially increase bleeding risk.",
    evidence:
      "Cardiology guidelines require careful risk-benefit assessment before combining these therapies.",
  },
  {
    drug_a: "edoxaban",
    drug_b: "triamcinolone",
    severity: "moderate",
    mechanism:
      "Corticosteroids can irritate the GI lining and alter clotting factor levels, adding to anticoagulant bleeding risk.",
    evidence:
      "Case reports describe elevated INR and GI bleeding with combined corticosteroid and anticoagulant use.",
  },
  {
    drug_a: "edoxaban",
    drug_b: "venlafaxine",
    severity: "moderate",
    mechanism:
      "Serotonergic antidepressants impair platelet aggregation and, combined with anticoagulants, can further raise bleeding risk.",
    evidence:
      "Case-control studies report increased bleeding risk with serotonergic antidepressant and anticoagulant co-therapy.",
  },
  {
    drug_a: "edoxaban",
    drug_b: "warfarin",
    severity: "high",
    mechanism:
      "Combining two anticoagulants compounds bleeding risk without a clear additional therapeutic benefit.",
    evidence:
      "Guidelines recommend against routine combination of two anticoagulants outside specific bridging protocols.",
  },
  {
    drug_a: "enalapril",
    drug_b: "azilsartan",
    severity: "moderate",
    mechanism:
      "Dual blockade of the renin-angiotensin system can increase risk of hyperkalemia and hypotension.",
    evidence:
      "Guidelines generally recommend against combining ACE inhibitors and ARBs.",
  },
  {
    drug_a: "enalapril",
    drug_b: "candesartan",
    severity: "moderate",
    mechanism:
      "Dual blockade of the renin-angiotensin system can increase risk of hyperkalemia and hypotension.",
    evidence:
      "Guidelines generally recommend against combining ACE inhibitors and ARBs.",
  },
  {
    drug_a: "enalapril",
    drug_b: "telmisartan",
    severity: "moderate",
    mechanism:
      "Dual blockade of the renin-angiotensin system can increase risk of hyperkalemia and hypotension.",
    evidence:
      "Guidelines generally recommend against combining ACE inhibitors and ARBs.",
  },
  {
    drug_a: "enalapril",
    drug_b: "triamterene",
    severity: "moderate",
    mechanism:
      "Both raise serum potassium; combined use increases the risk of hyperkalemia.",
    evidence:
      "Labeling for potassium-sparing diuretics warns of hyperkalemia risk with ACE inhibitors.",
  },
  {
    drug_a: "enoxaparin",
    drug_b: "aspirin",
    severity: "high",
    mechanism:
      "Combined anticoagulant and antiplatelet effects substantially increase bleeding risk.",
    evidence:
      "Cardiology guidelines require careful risk-benefit assessment before combining these therapies.",
  },
  {
    drug_a: "enoxaparin",
    drug_b: "azithromycin",
    severity: "moderate",
    mechanism:
      "Macrolides inhibit hepatic enzymes that metabolize anticoagulants, raising anticoagulant levels and bleeding risk.",
    evidence:
      "Guidelines recommend closer INR monitoring when macrolides are added to anticoagulant therapy.",
  },
  {
    drug_a: "enoxaparin",
    drug_b: "budesonide",
    severity: "moderate",
    mechanism:
      "Corticosteroids can irritate the GI lining and alter clotting factor levels, adding to anticoagulant bleeding risk.",
    evidence:
      "Case reports describe elevated INR and GI bleeding with combined corticosteroid and anticoagulant use.",
  },
  {
    drug_a: "enoxaparin",
    drug_b: "ciprofloxacin",
    severity: "moderate",
    mechanism:
      "Fluoroquinolones can potentiate anticoagulant effect, raising bleeding risk.",
    evidence:
      "Labeling for anticoagulants notes increased INR when fluoroquinolone antibiotics are co-prescribed.",
  },
  {
    drug_a: "enoxaparin",
    drug_b: "citalopram",
    severity: "moderate",
    mechanism:
      "SSRIs impair platelet aggregation and, combined with anticoagulants, can further raise bleeding risk.",
    evidence:
      "Case-control studies report increased bleeding risk with SSRI and anticoagulant co-therapy.",
  },
  {
    drug_a: "enoxaparin",
    drug_b: "clarithromycin",
    severity: "moderate",
    mechanism:
      "Macrolides inhibit hepatic enzymes that metabolize anticoagulants, raising anticoagulant levels and bleeding risk.",
    evidence:
      "Guidelines recommend closer INR monitoring when macrolides are added to anticoagulant therapy.",
  },
  {
    drug_a: "enoxaparin",
    drug_b: "clopidogrel",
    severity: "high",
    mechanism:
      "Combined anticoagulant and antiplatelet effects substantially increase bleeding risk.",
    evidence:
      "Cardiology guidelines require careful risk-benefit assessment before combining these therapies.",
  },
  {
    drug_a: "enoxaparin",
    drug_b: "desvenlafaxine",
    severity: "moderate",
    mechanism:
      "Serotonergic antidepressants impair platelet aggregation and, combined with anticoagulants, can further raise bleeding risk.",
    evidence:
      "Case-control studies report increased bleeding risk with serotonergic antidepressant and anticoagulant co-therapy.",
  },
  {
    drug_a: "enoxaparin",
    drug_b: "dexamethasone",
    severity: "moderate",
    mechanism:
      "Corticosteroids can irritate the GI lining and alter clotting factor levels, adding to anticoagulant bleeding risk.",
    evidence:
      "Case reports describe elevated INR and GI bleeding with combined corticosteroid and anticoagulant use.",
  },
  {
    drug_a: "enoxaparin",
    drug_b: "dipyridamole",
    severity: "high",
    mechanism:
      "Combined anticoagulant and antiplatelet effects substantially increase bleeding risk.",
    evidence:
      "Cardiology guidelines require careful risk-benefit assessment before combining these therapies.",
  },
  {
    drug_a: "enoxaparin",
    drug_b: "duloxetine",
    severity: "moderate",
    mechanism:
      "Serotonergic antidepressants impair platelet aggregation and, combined with anticoagulants, can further raise bleeding risk.",
    evidence:
      "Case-control studies report increased bleeding risk with serotonergic antidepressant and anticoagulant co-therapy.",
  },
  {
    drug_a: "enoxaparin",
    drug_b: "erythromycin",
    severity: "moderate",
    mechanism:
      "Macrolides inhibit hepatic enzymes that metabolize anticoagulants, raising anticoagulant levels and bleeding risk.",
    evidence:
      "Guidelines recommend closer INR monitoring when macrolides are added to anticoagulant therapy.",
  },
  {
    drug_a: "enoxaparin",
    drug_b: "escitalopram",
    severity: "moderate",
    mechanism:
      "SSRIs impair platelet aggregation and, combined with anticoagulants, can further raise bleeding risk.",
    evidence:
      "Case-control studies report increased bleeding risk with SSRI and anticoagulant co-therapy.",
  },
  {
    drug_a: "enoxaparin",
    drug_b: "fluconazole",
    severity: "high",
    mechanism:
      "Azole antifungals inhibit hepatic enzymes that metabolize anticoagulants, sharply raising anticoagulant levels and bleeding risk.",
    evidence:
      "Labeling for azole antifungals lists anticoagulants among drugs requiring dose adjustment or close monitoring.",
  },
  {
    drug_a: "enoxaparin",
    drug_b: "fluoxetine",
    severity: "moderate",
    mechanism:
      "SSRIs impair platelet aggregation and, combined with anticoagulants, can further raise bleeding risk.",
    evidence:
      "Case-control studies report increased bleeding risk with SSRI and anticoagulant co-therapy.",
  },
  {
    drug_a: "enoxaparin",
    drug_b: "fluticasone",
    severity: "moderate",
    mechanism:
      "Corticosteroids can irritate the GI lining and alter clotting factor levels, adding to anticoagulant bleeding risk.",
    evidence:
      "Case reports describe elevated INR and GI bleeding with combined corticosteroid and anticoagulant use.",
  },
  {
    drug_a: "enoxaparin",
    drug_b: "fluvoxamine",
    severity: "moderate",
    mechanism:
      "SSRIs impair platelet aggregation and, combined with anticoagulants, can further raise bleeding risk.",
    evidence:
      "Case-control studies report increased bleeding risk with SSRI and anticoagulant co-therapy.",
  },
  {
    drug_a: "enoxaparin",
    drug_b: "heparin",
    severity: "high",
    mechanism:
      "Combining two anticoagulants compounds bleeding risk without a clear additional therapeutic benefit.",
    evidence:
      "Guidelines recommend against routine combination of two anticoagulants outside specific bridging protocols.",
  },
  {
    drug_a: "enoxaparin",
    drug_b: "hydrocortisone",
    severity: "moderate",
    mechanism:
      "Corticosteroids can irritate the GI lining and alter clotting factor levels, adding to anticoagulant bleeding risk.",
    evidence:
      "Case reports describe elevated INR and GI bleeding with combined corticosteroid and anticoagulant use.",
  },
  {
    drug_a: "enoxaparin",
    drug_b: "itraconazole",
    severity: "high",
    mechanism:
      "Azole antifungals inhibit hepatic enzymes that metabolize anticoagulants, sharply raising anticoagulant levels and bleeding risk.",
    evidence:
      "Labeling for azole antifungals lists anticoagulants among drugs requiring dose adjustment or close monitoring.",
  },
  {
    drug_a: "enoxaparin",
    drug_b: "ketoconazole",
    severity: "high",
    mechanism:
      "Azole antifungals inhibit hepatic enzymes that metabolize anticoagulants, sharply raising anticoagulant levels and bleeding risk.",
    evidence:
      "Labeling for azole antifungals lists anticoagulants among drugs requiring dose adjustment or close monitoring.",
  },
  {
    drug_a: "enoxaparin",
    drug_b: "levofloxacin",
    severity: "moderate",
    mechanism:
      "Fluoroquinolones can potentiate anticoagulant effect, raising bleeding risk.",
    evidence:
      "Labeling for anticoagulants notes increased INR when fluoroquinolone antibiotics are co-prescribed.",
  },
  {
    drug_a: "enoxaparin",
    drug_b: "levomilnacipran",
    severity: "moderate",
    mechanism:
      "Serotonergic antidepressants impair platelet aggregation and, combined with anticoagulants, can further raise bleeding risk.",
    evidence:
      "Case-control studies report increased bleeding risk with serotonergic antidepressant and anticoagulant co-therapy.",
  },
  {
    drug_a: "enoxaparin",
    drug_b: "methylprednisolone",
    severity: "moderate",
    mechanism:
      "Corticosteroids can irritate the GI lining and alter clotting factor levels, adding to anticoagulant bleeding risk.",
    evidence:
      "Case reports describe elevated INR and GI bleeding with combined corticosteroid and anticoagulant use.",
  },
  {
    drug_a: "enoxaparin",
    drug_b: "moxifloxacin",
    severity: "moderate",
    mechanism:
      "Fluoroquinolones can potentiate anticoagulant effect, raising bleeding risk.",
    evidence:
      "Labeling for anticoagulants notes increased INR when fluoroquinolone antibiotics are co-prescribed.",
  },
  {
    drug_a: "enoxaparin",
    drug_b: "ofloxacin",
    severity: "moderate",
    mechanism:
      "Fluoroquinolones can potentiate anticoagulant effect, raising bleeding risk.",
    evidence:
      "Labeling for anticoagulants notes increased INR when fluoroquinolone antibiotics are co-prescribed.",
  },
  {
    drug_a: "enoxaparin",
    drug_b: "paroxetine",
    severity: "moderate",
    mechanism:
      "SSRIs impair platelet aggregation and, combined with anticoagulants, can further raise bleeding risk.",
    evidence:
      "Case-control studies report increased bleeding risk with SSRI and anticoagulant co-therapy.",
  },
  {
    drug_a: "enoxaparin",
    drug_b: "prasugrel",
    severity: "high",
    mechanism:
      "Combined anticoagulant and antiplatelet effects substantially increase bleeding risk.",
    evidence:
      "Cardiology guidelines require careful risk-benefit assessment before combining these therapies.",
  },
  {
    drug_a: "enoxaparin",
    drug_b: "prednisone",
    severity: "moderate",
    mechanism:
      "Corticosteroids can irritate the GI lining and alter clotting factor levels, adding to anticoagulant bleeding risk.",
    evidence:
      "Case reports describe elevated INR and GI bleeding with combined corticosteroid and anticoagulant use.",
  },
  {
    drug_a: "enoxaparin",
    drug_b: "rivaroxaban",
    severity: "high",
    mechanism:
      "Combining two anticoagulants compounds bleeding risk without a clear additional therapeutic benefit.",
    evidence:
      "Guidelines recommend against routine combination of two anticoagulants outside specific bridging protocols.",
  },
  {
    drug_a: "enoxaparin",
    drug_b: "sertraline",
    severity: "moderate",
    mechanism:
      "SSRIs impair platelet aggregation and, combined with anticoagulants, can further raise bleeding risk.",
    evidence:
      "Case-control studies report increased bleeding risk with SSRI and anticoagulant co-therapy.",
  },
  {
    drug_a: "enoxaparin",
    drug_b: "ticagrelor",
    severity: "high",
    mechanism:
      "Combined anticoagulant and antiplatelet effects substantially increase bleeding risk.",
    evidence:
      "Cardiology guidelines require careful risk-benefit assessment before combining these therapies.",
  },
  {
    drug_a: "enoxaparin",
    drug_b: "triamcinolone",
    severity: "moderate",
    mechanism:
      "Corticosteroids can irritate the GI lining and alter clotting factor levels, adding to anticoagulant bleeding risk.",
    evidence:
      "Case reports describe elevated INR and GI bleeding with combined corticosteroid and anticoagulant use.",
  },
  {
    drug_a: "enoxaparin",
    drug_b: "venlafaxine",
    severity: "moderate",
    mechanism:
      "Serotonergic antidepressants impair platelet aggregation and, combined with anticoagulants, can further raise bleeding risk.",
    evidence:
      "Case-control studies report increased bleeding risk with serotonergic antidepressant and anticoagulant co-therapy.",
  },
  {
    drug_a: "enoxaparin",
    drug_b: "warfarin",
    severity: "high",
    mechanism:
      "Combining two anticoagulants compounds bleeding risk without a clear additional therapeutic benefit.",
    evidence:
      "Guidelines recommend against routine combination of two anticoagulants outside specific bridging protocols.",
  },
  {
    drug_a: "erythromycin",
    drug_b: "azathioprine",
    severity: "moderate",
    mechanism:
      "Macrolides inhibit CYP3A4 metabolism of calcineurin inhibitors, raising levels and toxicity risk.",
    evidence:
      "Transplant medicine guidance requires immunosuppressant level monitoring when macrolide antibiotics are added.",
  },
  {
    drug_a: "erythromycin",
    drug_b: "cyclosporine",
    severity: "moderate",
    mechanism:
      "Macrolides inhibit CYP3A4 metabolism of calcineurin inhibitors, raising levels and toxicity risk.",
    evidence:
      "Transplant medicine guidance requires immunosuppressant level monitoring when macrolide antibiotics are added.",
  },
  {
    drug_a: "erythromycin",
    drug_b: "methotrexate",
    severity: "moderate",
    mechanism:
      "Macrolides inhibit CYP3A4 metabolism of calcineurin inhibitors, raising levels and toxicity risk.",
    evidence:
      "Transplant medicine guidance requires immunosuppressant level monitoring when macrolide antibiotics are added.",
  },
  {
    drug_a: "erythromycin",
    drug_b: "mycophenolate",
    severity: "moderate",
    mechanism:
      "Macrolides inhibit CYP3A4 metabolism of calcineurin inhibitors, raising levels and toxicity risk.",
    evidence:
      "Transplant medicine guidance requires immunosuppressant level monitoring when macrolide antibiotics are added.",
  },
  {
    drug_a: "erythromycin",
    drug_b: "tacrolimus",
    severity: "moderate",
    mechanism:
      "Macrolides inhibit CYP3A4 metabolism of calcineurin inhibitors, raising levels and toxicity risk.",
    evidence:
      "Transplant medicine guidance requires immunosuppressant level monitoring when macrolide antibiotics are added.",
  },
  {
    drug_a: "esomeprazole",
    drug_b: "fluconazole",
    severity: "moderate",
    mechanism:
      "Reduced gastric acidity from PPIs can impair absorption of azole antifungals that require an acidic environment.",
    evidence:
      "Antifungal labeling notes reduced bioavailability with concurrent acid-suppressing therapy.",
  },
  {
    drug_a: "esomeprazole",
    drug_b: "itraconazole",
    severity: "moderate",
    mechanism:
      "Reduced gastric acidity from PPIs can impair absorption of azole antifungals that require an acidic environment.",
    evidence:
      "Antifungal labeling notes reduced bioavailability with concurrent acid-suppressing therapy.",
  },
  {
    drug_a: "esomeprazole",
    drug_b: "ketoconazole",
    severity: "moderate",
    mechanism:
      "Reduced gastric acidity from PPIs can impair absorption of azole antifungals that require an acidic environment.",
    evidence:
      "Antifungal labeling notes reduced bioavailability with concurrent acid-suppressing therapy.",
  },
  {
    drug_a: "esomeprazole",
    drug_b: "liothyronine",
    severity: "low",
    mechanism:
      "Reduced gastric acidity from PPIs may impair levothyroxine absorption.",
    evidence:
      "Endocrinology guidance recommends separating dosing times and monitoring thyroid levels.",
  },
  {
    drug_a: "etodolac",
    drug_b: "apixaban",
    severity: "high",
    mechanism:
      "NSAIDs inhibit platelet aggregation and can displace anticoagulants from protein binding, increasing bleeding risk.",
    evidence:
      "Labeling for anticoagulants warns of increased bleeding risk with concurrent NSAID use.",
  },
  {
    drug_a: "etodolac",
    drug_b: "aspirin",
    severity: "moderate",
    mechanism:
      "NSAIDs may add to the antiplatelet effect and irritate the GI lining, raising bleeding risk.",
    evidence:
      "Cardiology guidance flags added GI bleeding risk when NSAIDs are combined with antiplatelet therapy.",
  },
  {
    drug_a: "etodolac",
    drug_b: "azilsartan",
    severity: "moderate",
    mechanism:
      "NSAIDs can reduce the antihypertensive effect of ARBs and impair renal function.",
    evidence:
      "Labeling for both drug classes notes reduced antihypertensive effect and renal risk with combined use.",
  },
  {
    drug_a: "etodolac",
    drug_b: "benazepril",
    severity: "moderate",
    mechanism:
      "NSAIDs can reduce the antihypertensive effect of ACE inhibitors and impair renal function.",
    evidence:
      "Labeling for both drug classes notes reduced antihypertensive effect and renal risk with combined use.",
  },
  {
    drug_a: "etodolac",
    drug_b: "budesonide",
    severity: "moderate",
    mechanism:
      "Both irritate the GI lining; combined use substantially increases risk of ulcers and GI bleeding.",
    evidence:
      "Guidelines recommend gastroprotection when NSAIDs and corticosteroids are combined.",
  },
  {
    drug_a: "etodolac",
    drug_b: "candesartan",
    severity: "moderate",
    mechanism:
      "NSAIDs can reduce the antihypertensive effect of ARBs and impair renal function.",
    evidence:
      "Labeling for both drug classes notes reduced antihypertensive effect and renal risk with combined use.",
  },
  {
    drug_a: "etodolac",
    drug_b: "captopril",
    severity: "moderate",
    mechanism:
      "NSAIDs can reduce the antihypertensive effect of ACE inhibitors and impair renal function.",
    evidence:
      "Labeling for both drug classes notes reduced antihypertensive effect and renal risk with combined use.",
  },
  {
    drug_a: "etodolac",
    drug_b: "citalopram",
    severity: "moderate",
    mechanism:
      "SSRIs combined with NSAIDs may increase risk of GI bleeding due to reduced platelet serotonin uptake.",
    evidence:
      "Observational studies link SSRI + NSAID combinations to higher GI bleeding rates.",
  },
  {
    drug_a: "etodolac",
    drug_b: "clopidogrel",
    severity: "moderate",
    mechanism:
      "NSAIDs may add to the antiplatelet effect and irritate the GI lining, raising bleeding risk.",
    evidence:
      "Cardiology guidance flags added GI bleeding risk when NSAIDs are combined with antiplatelet therapy.",
  },
  {
    drug_a: "etodolac",
    drug_b: "dabigatran",
    severity: "high",
    mechanism:
      "NSAIDs inhibit platelet aggregation and can displace anticoagulants from protein binding, increasing bleeding risk.",
    evidence:
      "Labeling for anticoagulants warns of increased bleeding risk with concurrent NSAID use.",
  },
  {
    drug_a: "etodolac",
    drug_b: "desvenlafaxine",
    severity: "moderate",
    mechanism:
      "SSRIs combined with NSAIDs may increase risk of GI bleeding due to reduced platelet serotonin uptake.",
    evidence:
      "Observational studies link serotonergic antidepressant + NSAID combinations to higher GI bleeding rates.",
  },
  {
    drug_a: "etodolac",
    drug_b: "dexamethasone",
    severity: "moderate",
    mechanism:
      "Both irritate the GI lining; combined use substantially increases risk of ulcers and GI bleeding.",
    evidence:
      "Guidelines recommend gastroprotection when NSAIDs and corticosteroids are combined.",
  },
  {
    drug_a: "etodolac",
    drug_b: "dipyridamole",
    severity: "moderate",
    mechanism:
      "NSAIDs may add to the antiplatelet effect and irritate the GI lining, raising bleeding risk.",
    evidence:
      "Cardiology guidance flags added GI bleeding risk when NSAIDs are combined with antiplatelet therapy.",
  },
  {
    drug_a: "etodolac",
    drug_b: "duloxetine",
    severity: "moderate",
    mechanism:
      "SSRIs combined with NSAIDs may increase risk of GI bleeding due to reduced platelet serotonin uptake.",
    evidence:
      "Observational studies link serotonergic antidepressant + NSAID combinations to higher GI bleeding rates.",
  },
  {
    drug_a: "etodolac",
    drug_b: "edoxaban",
    severity: "high",
    mechanism:
      "NSAIDs inhibit platelet aggregation and can displace anticoagulants from protein binding, increasing bleeding risk.",
    evidence:
      "Labeling for anticoagulants warns of increased bleeding risk with concurrent NSAID use.",
  },
  {
    drug_a: "etodolac",
    drug_b: "enalapril",
    severity: "moderate",
    mechanism:
      "NSAIDs can reduce the antihypertensive effect of ACE inhibitors and impair renal function.",
    evidence:
      "Labeling for both drug classes notes reduced antihypertensive effect and renal risk with combined use.",
  },
  {
    drug_a: "etodolac",
    drug_b: "enoxaparin",
    severity: "high",
    mechanism:
      "NSAIDs inhibit platelet aggregation and can displace anticoagulants from protein binding, increasing bleeding risk.",
    evidence:
      "Labeling for anticoagulants warns of increased bleeding risk with concurrent NSAID use.",
  },
  {
    drug_a: "etodolac",
    drug_b: "escitalopram",
    severity: "moderate",
    mechanism:
      "SSRIs combined with NSAIDs may increase risk of GI bleeding due to reduced platelet serotonin uptake.",
    evidence:
      "Observational studies link SSRI + NSAID combinations to higher GI bleeding rates.",
  },
  {
    drug_a: "etodolac",
    drug_b: "fluoxetine",
    severity: "moderate",
    mechanism:
      "SSRIs combined with NSAIDs may increase risk of GI bleeding due to reduced platelet serotonin uptake.",
    evidence:
      "Observational studies link SSRI + NSAID combinations to higher GI bleeding rates.",
  },
  {
    drug_a: "etodolac",
    drug_b: "fluticasone",
    severity: "moderate",
    mechanism:
      "Both irritate the GI lining; combined use substantially increases risk of ulcers and GI bleeding.",
    evidence:
      "Guidelines recommend gastroprotection when NSAIDs and corticosteroids are combined.",
  },
  {
    drug_a: "etodolac",
    drug_b: "fluvoxamine",
    severity: "moderate",
    mechanism:
      "SSRIs combined with NSAIDs may increase risk of GI bleeding due to reduced platelet serotonin uptake.",
    evidence:
      "Observational studies link SSRI + NSAID combinations to higher GI bleeding rates.",
  },
  {
    drug_a: "etodolac",
    drug_b: "fosinopril",
    severity: "moderate",
    mechanism:
      "NSAIDs can reduce the antihypertensive effect of ACE inhibitors and impair renal function.",
    evidence:
      "Labeling for both drug classes notes reduced antihypertensive effect and renal risk with combined use.",
  },
  {
    drug_a: "etodolac",
    drug_b: "heparin",
    severity: "high",
    mechanism:
      "NSAIDs inhibit platelet aggregation and can displace anticoagulants from protein binding, increasing bleeding risk.",
    evidence:
      "Labeling for anticoagulants warns of increased bleeding risk with concurrent NSAID use.",
  },
  {
    drug_a: "etodolac",
    drug_b: "hydrocortisone",
    severity: "moderate",
    mechanism:
      "Both irritate the GI lining; combined use substantially increases risk of ulcers and GI bleeding.",
    evidence:
      "Guidelines recommend gastroprotection when NSAIDs and corticosteroids are combined.",
  },
  {
    drug_a: "etodolac",
    drug_b: "ibuprofen",
    severity: "low",
    mechanism:
      "Combining two NSAIDs adds to GI and renal risk without added therapeutic benefit.",
    evidence:
      "Guidelines recommend against routine combination of two NSAIDs.",
  },
  {
    drug_a: "etodolac",
    drug_b: "indomethacin",
    severity: "low",
    mechanism:
      "Combining two NSAIDs adds to GI and renal risk without added therapeutic benefit.",
    evidence:
      "Guidelines recommend against routine combination of two NSAIDs.",
  },
  {
    drug_a: "etodolac",
    drug_b: "irbesartan",
    severity: "moderate",
    mechanism:
      "NSAIDs can reduce the antihypertensive effect of ARBs and impair renal function.",
    evidence:
      "Labeling for both drug classes notes reduced antihypertensive effect and renal risk with combined use.",
  },
  {
    drug_a: "etodolac",
    drug_b: "ketorolac",
    severity: "low",
    mechanism:
      "Combining two NSAIDs adds to GI and renal risk without added therapeutic benefit.",
    evidence:
      "Guidelines recommend against routine combination of two NSAIDs.",
  },
  {
    drug_a: "etodolac",
    drug_b: "levomilnacipran",
    severity: "moderate",
    mechanism:
      "SSRIs combined with NSAIDs may increase risk of GI bleeding due to reduced platelet serotonin uptake.",
    evidence:
      "Observational studies link serotonergic antidepressant + NSAID combinations to higher GI bleeding rates.",
  },
  {
    drug_a: "etodolac",
    drug_b: "lisinopril",
    severity: "moderate",
    mechanism:
      "NSAIDs can reduce the antihypertensive effect of ACE inhibitors and impair renal function.",
    evidence:
      "Labeling for both drug classes notes reduced antihypertensive effect and renal risk with combined use.",
  },
  {
    drug_a: "etodolac",
    drug_b: "lithium",
    severity: "moderate",
    mechanism:
      "NSAIDs can reduce renal clearance of lithium, raising lithium levels toward toxicity.",
    evidence:
      "Lithium labeling warns of elevated levels with concurrent NSAID use, warranting level monitoring.",
  },
  {
    drug_a: "etodolac",
    drug_b: "losartan",
    severity: "moderate",
    mechanism:
      "NSAIDs can reduce the antihypertensive effect of ARBs and impair renal function.",
    evidence:
      "Labeling for both drug classes notes reduced antihypertensive effect and renal risk with combined use.",
  },
  {
    drug_a: "etodolac",
    drug_b: "meloxicam",
    severity: "low",
    mechanism:
      "Combining two NSAIDs adds to GI and renal risk without added therapeutic benefit.",
    evidence:
      "Guidelines recommend against routine combination of two NSAIDs.",
  },
  {
    drug_a: "etodolac",
    drug_b: "methylprednisolone",
    severity: "moderate",
    mechanism:
      "Both irritate the GI lining; combined use substantially increases risk of ulcers and GI bleeding.",
    evidence:
      "Guidelines recommend gastroprotection when NSAIDs and corticosteroids are combined.",
  },
  {
    drug_a: "etodolac",
    drug_b: "nabumetone",
    severity: "low",
    mechanism:
      "Combining two NSAIDs adds to GI and renal risk without added therapeutic benefit.",
    evidence:
      "Guidelines recommend against routine combination of two NSAIDs.",
  },
  {
    drug_a: "etodolac",
    drug_b: "naproxen",
    severity: "low",
    mechanism:
      "Combining two NSAIDs adds to GI and renal risk without added therapeutic benefit.",
    evidence:
      "Guidelines recommend against routine combination of two NSAIDs.",
  },
  {
    drug_a: "etodolac",
    drug_b: "olmesartan",
    severity: "moderate",
    mechanism:
      "NSAIDs can reduce the antihypertensive effect of ARBs and impair renal function.",
    evidence:
      "Labeling for both drug classes notes reduced antihypertensive effect and renal risk with combined use.",
  },
  {
    drug_a: "etodolac",
    drug_b: "paroxetine",
    severity: "moderate",
    mechanism:
      "SSRIs combined with NSAIDs may increase risk of GI bleeding due to reduced platelet serotonin uptake.",
    evidence:
      "Observational studies link SSRI + NSAID combinations to higher GI bleeding rates.",
  },
  {
    drug_a: "etodolac",
    drug_b: "perindopril",
    severity: "moderate",
    mechanism:
      "NSAIDs can reduce the antihypertensive effect of ACE inhibitors and impair renal function.",
    evidence:
      "Labeling for both drug classes notes reduced antihypertensive effect and renal risk with combined use.",
  },
  {
    drug_a: "etodolac",
    drug_b: "piroxicam",
    severity: "low",
    mechanism:
      "Combining two NSAIDs adds to GI and renal risk without added therapeutic benefit.",
    evidence:
      "Guidelines recommend against routine combination of two NSAIDs.",
  },
  {
    drug_a: "etodolac",
    drug_b: "prasugrel",
    severity: "moderate",
    mechanism:
      "NSAIDs may add to the antiplatelet effect and irritate the GI lining, raising bleeding risk.",
    evidence:
      "Cardiology guidance flags added GI bleeding risk when NSAIDs are combined with antiplatelet therapy.",
  },
  {
    drug_a: "etodolac",
    drug_b: "prednisone",
    severity: "moderate",
    mechanism:
      "Both irritate the GI lining; combined use substantially increases risk of ulcers and GI bleeding.",
    evidence:
      "Guidelines recommend gastroprotection when NSAIDs and corticosteroids are combined.",
  },
  {
    drug_a: "etodolac",
    drug_b: "quinapril",
    severity: "moderate",
    mechanism:
      "NSAIDs can reduce the antihypertensive effect of ACE inhibitors and impair renal function.",
    evidence:
      "Labeling for both drug classes notes reduced antihypertensive effect and renal risk with combined use.",
  },
  {
    drug_a: "etodolac",
    drug_b: "ramipril",
    severity: "moderate",
    mechanism:
      "NSAIDs can reduce the antihypertensive effect of ACE inhibitors and impair renal function.",
    evidence:
      "Labeling for both drug classes notes reduced antihypertensive effect and renal risk with combined use.",
  },
  {
    drug_a: "etodolac",
    drug_b: "rivaroxaban",
    severity: "high",
    mechanism:
      "NSAIDs inhibit platelet aggregation and can displace anticoagulants from protein binding, increasing bleeding risk.",
    evidence:
      "Labeling for anticoagulants warns of increased bleeding risk with concurrent NSAID use.",
  },
  {
    drug_a: "etodolac",
    drug_b: "sertraline",
    severity: "moderate",
    mechanism:
      "SSRIs combined with NSAIDs may increase risk of GI bleeding due to reduced platelet serotonin uptake.",
    evidence:
      "Observational studies link SSRI + NSAID combinations to higher GI bleeding rates.",
  },
  {
    drug_a: "etodolac",
    drug_b: "sulindac",
    severity: "low",
    mechanism:
      "Combining two NSAIDs adds to GI and renal risk without added therapeutic benefit.",
    evidence:
      "Guidelines recommend against routine combination of two NSAIDs.",
  },
  {
    drug_a: "etodolac",
    drug_b: "telmisartan",
    severity: "moderate",
    mechanism:
      "NSAIDs can reduce the antihypertensive effect of ARBs and impair renal function.",
    evidence:
      "Labeling for both drug classes notes reduced antihypertensive effect and renal risk with combined use.",
  },
  {
    drug_a: "etodolac",
    drug_b: "ticagrelor",
    severity: "moderate",
    mechanism:
      "NSAIDs may add to the antiplatelet effect and irritate the GI lining, raising bleeding risk.",
    evidence:
      "Cardiology guidance flags added GI bleeding risk when NSAIDs are combined with antiplatelet therapy.",
  },
  {
    drug_a: "etodolac",
    drug_b: "trandolapril",
    severity: "moderate",
    mechanism:
      "NSAIDs can reduce the antihypertensive effect of ACE inhibitors and impair renal function.",
    evidence:
      "Labeling for both drug classes notes reduced antihypertensive effect and renal risk with combined use.",
  },
  {
    drug_a: "etodolac",
    drug_b: "triamcinolone",
    severity: "moderate",
    mechanism:
      "Both irritate the GI lining; combined use substantially increases risk of ulcers and GI bleeding.",
    evidence:
      "Guidelines recommend gastroprotection when NSAIDs and corticosteroids are combined.",
  },
  {
    drug_a: "etodolac",
    drug_b: "valsartan",
    severity: "moderate",
    mechanism:
      "NSAIDs can reduce the antihypertensive effect of ARBs and impair renal function.",
    evidence:
      "Labeling for both drug classes notes reduced antihypertensive effect and renal risk with combined use.",
  },
  {
    drug_a: "etodolac",
    drug_b: "venlafaxine",
    severity: "moderate",
    mechanism:
      "SSRIs combined with NSAIDs may increase risk of GI bleeding due to reduced platelet serotonin uptake.",
    evidence:
      "Observational studies link serotonergic antidepressant + NSAID combinations to higher GI bleeding rates.",
  },
  {
    drug_a: "etodolac",
    drug_b: "warfarin",
    severity: "high",
    mechanism:
      "NSAIDs inhibit platelet aggregation and can displace anticoagulants from protein binding, increasing bleeding risk.",
    evidence:
      "Labeling for anticoagulants warns of increased bleeding risk with concurrent NSAID use.",
  },
  {
    drug_a: "famotidine",
    drug_b: "fluconazole",
    severity: "moderate",
    mechanism:
      "Reduced gastric acidity from H2 blockers can impair absorption of azole antifungals that require an acidic environment.",
    evidence:
      "Antifungal labeling notes reduced bioavailability with concurrent acid-suppressing therapy.",
  },
  {
    drug_a: "famotidine",
    drug_b: "itraconazole",
    severity: "moderate",
    mechanism:
      "Reduced gastric acidity from H2 blockers can impair absorption of azole antifungals that require an acidic environment.",
    evidence:
      "Antifungal labeling notes reduced bioavailability with concurrent acid-suppressing therapy.",
  },
  {
    drug_a: "famotidine",
    drug_b: "ketoconazole",
    severity: "moderate",
    mechanism:
      "Reduced gastric acidity from H2 blockers can impair absorption of azole antifungals that require an acidic environment.",
    evidence:
      "Antifungal labeling notes reduced bioavailability with concurrent acid-suppressing therapy.",
  },
  {
    drug_a: "famotidine",
    drug_b: "levothyroxine",
    severity: "low",
    mechanism:
      "Reduced gastric acidity from H2 blockers may impair thyroid hormone absorption.",
    evidence:
      "Endocrinology guidance recommends separating dosing times and monitoring thyroid levels.",
  },
  {
    drug_a: "famotidine",
    drug_b: "liothyronine",
    severity: "low",
    mechanism:
      "Reduced gastric acidity from H2 blockers may impair thyroid hormone absorption.",
    evidence:
      "Endocrinology guidance recommends separating dosing times and monitoring thyroid levels.",
  },
  {
    drug_a: "fentanyl",
    drug_b: "baclofen",
    severity: "moderate",
    mechanism:
      "Both cause CNS depression; combined use increases sedation and fall risk, especially in older adults.",
    evidence:
      "Muscle relaxant labeling warns of additive sedation with opioids.",
  },
  {
    drug_a: "fentanyl",
    drug_b: "carisoprodol",
    severity: "moderate",
    mechanism:
      "Both cause CNS depression; combined use increases sedation and fall risk, especially in older adults.",
    evidence:
      "Muscle relaxant labeling warns of additive sedation with opioids.",
  },
  {
    drug_a: "fentanyl",
    drug_b: "chlordiazepoxide",
    severity: "high",
    mechanism:
      "Both depress the central nervous system; combined use significantly raises the risk of profound sedation and fatal respiratory depression.",
    evidence:
      "FDA boxed warning covers concurrent opioid and benzodiazepine use.",
  },
  {
    drug_a: "fentanyl",
    drug_b: "clorazepate",
    severity: "high",
    mechanism:
      "Both depress the central nervous system; combined use significantly raises the risk of profound sedation and fatal respiratory depression.",
    evidence:
      "FDA boxed warning covers concurrent opioid and benzodiazepine use.",
  },
  {
    drug_a: "fentanyl",
    drug_b: "desvenlafaxine",
    severity: "high",
    mechanism:
      "Both increase serotonin activity, raising the risk of serotonin syndrome.",
    evidence:
      "Case reports and FDA labeling describe elevated serotonin syndrome risk with this combination.",
  },
  {
    drug_a: "fentanyl",
    drug_b: "fluvoxamine",
    severity: "high",
    mechanism:
      "Both increase serotonin activity, raising the risk of serotonin syndrome.",
    evidence:
      "Case reports and FDA labeling describe elevated serotonin syndrome risk with this combination.",
  },
  {
    drug_a: "fentanyl",
    drug_b: "hydromorphone",
    severity: "moderate",
    mechanism:
      "Combining two opioids adds to central nervous system and respiratory depression without clear added benefit.",
    evidence:
      "Prescribing guidance recommends against concurrent use of multiple opioid analgesics outside supervised rotation.",
  },
  {
    drug_a: "fentanyl",
    drug_b: "hydroxyzine",
    severity: "moderate",
    mechanism:
      "Both cause CNS depression; combined use increases sedation and, in vulnerable patients, respiratory depression risk.",
    evidence:
      "Product labeling for sedating antihistamines warns against combination with opioid analgesics.",
  },
  {
    drug_a: "fentanyl",
    drug_b: "levomilnacipran",
    severity: "high",
    mechanism:
      "Both increase serotonin activity, raising the risk of serotonin syndrome.",
    evidence:
      "Case reports and FDA labeling describe elevated serotonin syndrome risk with this combination.",
  },
  {
    drug_a: "fentanyl",
    drug_b: "meperidine",
    severity: "moderate",
    mechanism:
      "Combining two opioids adds to central nervous system and respiratory depression without clear added benefit.",
    evidence:
      "Prescribing guidance recommends against concurrent use of multiple opioid analgesics outside supervised rotation.",
  },
  {
    drug_a: "fentanyl",
    drug_b: "methadone",
    severity: "moderate",
    mechanism:
      "Combining two opioids adds to central nervous system and respiratory depression without clear added benefit.",
    evidence:
      "Prescribing guidance recommends against concurrent use of multiple opioid analgesics outside supervised rotation.",
  },
  {
    drug_a: "fentanyl",
    drug_b: "methocarbamol",
    severity: "moderate",
    mechanism:
      "Both cause CNS depression; combined use increases sedation and fall risk, especially in older adults.",
    evidence:
      "Muscle relaxant labeling warns of additive sedation with opioids.",
  },
  {
    drug_a: "fentanyl",
    drug_b: "midazolam",
    severity: "high",
    mechanism:
      "Both depress the central nervous system; combined use significantly raises the risk of profound sedation and fatal respiratory depression.",
    evidence:
      "FDA boxed warning covers concurrent opioid and benzodiazepine use.",
  },
  {
    drug_a: "fentanyl",
    drug_b: "ondansetron",
    severity: "high",
    mechanism:
      "Both increase serotonin activity, raising the risk of serotonin syndrome.",
    evidence:
      "Case reports and FDA labeling describe elevated serotonin syndrome risk with this combination.",
  },
  {
    drug_a: "fentanyl",
    drug_b: "oxazepam",
    severity: "high",
    mechanism:
      "Both depress the central nervous system; combined use significantly raises the risk of profound sedation and fatal respiratory depression.",
    evidence:
      "FDA boxed warning covers concurrent opioid and benzodiazepine use.",
  },
  {
    drug_a: "fentanyl",
    drug_b: "oxymorphone",
    severity: "moderate",
    mechanism:
      "Combining two opioids adds to central nervous system and respiratory depression without clear added benefit.",
    evidence:
      "Prescribing guidance recommends against concurrent use of multiple opioid analgesics outside supervised rotation.",
  },
  {
    drug_a: "fentanyl",
    drug_b: "promethazine",
    severity: "moderate",
    mechanism:
      "Both cause CNS depression; combined use increases sedation and, in vulnerable patients, respiratory depression risk.",
    evidence:
      "Product labeling for sedating antihistamines warns against combination with opioid analgesics.",
  },
  {
    drug_a: "fentanyl",
    drug_b: "rizatriptan",
    severity: "high",
    mechanism:
      "Both increase serotonin activity, raising the risk of serotonin syndrome.",
    evidence:
      "Case reports and FDA labeling describe elevated serotonin syndrome risk with this combination.",
  },
  {
    drug_a: "fentanyl",
    drug_b: "st_johns_wort",
    severity: "high",
    mechanism:
      "Both increase serotonin activity, raising the risk of serotonin syndrome.",
    evidence:
      "Case reports and FDA labeling describe elevated serotonin syndrome risk with this combination.",
  },
  {
    drug_a: "fentanyl",
    drug_b: "sumatriptan",
    severity: "high",
    mechanism:
      "Both increase serotonin activity, raising the risk of serotonin syndrome.",
    evidence:
      "Case reports and FDA labeling describe elevated serotonin syndrome risk with this combination.",
  },
  {
    drug_a: "fentanyl",
    drug_b: "tizanidine",
    severity: "moderate",
    mechanism:
      "Both cause CNS depression; combined use increases sedation and fall risk, especially in older adults.",
    evidence:
      "Muscle relaxant labeling warns of additive sedation with opioids.",
  },
  {
    drug_a: "fentanyl",
    drug_b: "zaleplon",
    severity: "high",
    mechanism:
      "Both depress the central nervous system; combined use significantly raises the risk of profound sedation and fatal respiratory depression.",
    evidence:
      "FDA boxed warning covers concurrent opioid and CNS depressant use, including non-benzodiazepine hypnotics.",
  },
  {
    drug_a: "flecainide",
    drug_b: "atorvastatin",
    severity: "moderate",
    mechanism:
      "Amiodarone-class antiarrhythmics inhibit CYP3A4, raising statin levels and myopathy risk.",
    evidence:
      "Statin labeling notes dose limits when combined with amiodarone.",
  },
  {
    drug_a: "flecainide",
    drug_b: "azithromycin",
    severity: "high",
    mechanism:
      "Macrolides can prolong the QT interval and add to the effect of QT-prolonging antiarrhythmics.",
    evidence:
      "Drug-induced long QT reference lists flag this combination as a torsades risk.",
  },
  {
    drug_a: "flecainide",
    drug_b: "ciprofloxacin",
    severity: "high",
    mechanism:
      "Fluoroquinolones can prolong the QT interval and add to the effect of QT-prolonging antiarrhythmics.",
    evidence:
      "Drug-induced long QT reference lists flag this combination as a torsades risk.",
  },
  {
    drug_a: "flecainide",
    drug_b: "citalopram",
    severity: "high",
    mechanism:
      "Both prolong the QT interval; combined use meaningfully raises the risk of dangerous arrhythmia.",
    evidence:
      "Drug-induced long QT reference lists flag this combination as a torsades risk.",
  },
  {
    drug_a: "flecainide",
    drug_b: "clarithromycin",
    severity: "high",
    mechanism:
      "Macrolides can prolong the QT interval and add to the effect of QT-prolonging antiarrhythmics.",
    evidence:
      "Drug-induced long QT reference lists flag this combination as a torsades risk.",
  },
  {
    drug_a: "flecainide",
    drug_b: "digoxin",
    severity: "moderate",
    mechanism:
      "Amiodarone-class antiarrhythmics can raise digoxin levels via reduced clearance, increasing toxicity risk.",
    evidence:
      "Digoxin labeling recommends dose reduction when amiodarone is co-prescribed.",
  },
  {
    drug_a: "flecainide",
    drug_b: "erythromycin",
    severity: "high",
    mechanism:
      "Macrolides can prolong the QT interval and add to the effect of QT-prolonging antiarrhythmics.",
    evidence:
      "Drug-induced long QT reference lists flag this combination as a torsades risk.",
  },
  {
    drug_a: "flecainide",
    drug_b: "haloperidol",
    severity: "high",
    mechanism:
      "Both prolong the QT interval; combined use meaningfully raises the risk of dangerous arrhythmia.",
    evidence:
      "Drug-induced long QT reference lists flag this combination as a torsades risk.",
  },
  {
    drug_a: "flecainide",
    drug_b: "levofloxacin",
    severity: "high",
    mechanism:
      "Both prolong the QT interval; combined use meaningfully raises the risk of dangerous arrhythmia.",
    evidence:
      "Drug-induced long QT reference lists flag this combination as a torsades risk.",
  },
  {
    drug_a: "flecainide",
    drug_b: "lovastatin",
    severity: "moderate",
    mechanism:
      "Amiodarone-class antiarrhythmics inhibit CYP3A4, raising statin levels and myopathy risk.",
    evidence:
      "Statin labeling notes dose limits when combined with amiodarone.",
  },
  {
    drug_a: "flecainide",
    drug_b: "methadone",
    severity: "high",
    mechanism:
      "Both prolong the QT interval; combined use meaningfully raises the risk of dangerous arrhythmia.",
    evidence:
      "Drug-induced long QT reference lists flag this combination as a torsades risk.",
  },
  {
    drug_a: "flecainide",
    drug_b: "moxifloxacin",
    severity: "high",
    mechanism:
      "Both prolong the QT interval; combined use meaningfully raises the risk of dangerous arrhythmia.",
    evidence:
      "Drug-induced long QT reference lists flag this combination as a torsades risk.",
  },
  {
    drug_a: "flecainide",
    drug_b: "ofloxacin",
    severity: "high",
    mechanism:
      "Fluoroquinolones can prolong the QT interval and add to the effect of QT-prolonging antiarrhythmics.",
    evidence:
      "Drug-induced long QT reference lists flag this combination as a torsades risk.",
  },
  {
    drug_a: "flecainide",
    drug_b: "ondansetron",
    severity: "high",
    mechanism:
      "Both prolong the QT interval; combined use meaningfully raises the risk of dangerous arrhythmia.",
    evidence:
      "Drug-induced long QT reference lists flag this combination as a torsades risk.",
  },
  {
    drug_a: "flecainide",
    drug_b: "propafenone",
    severity: "high",
    mechanism:
      "Both prolong the QT interval; combined use meaningfully raises the risk of dangerous arrhythmia.",
    evidence:
      "Guidelines recommend against combining two QT-prolonging antiarrhythmics.",
  },
  {
    drug_a: "flecainide",
    drug_b: "simvastatin",
    severity: "moderate",
    mechanism:
      "Amiodarone-class antiarrhythmics inhibit CYP3A4, raising statin levels and myopathy risk.",
    evidence:
      "Statin labeling notes dose limits when combined with amiodarone.",
  },
  {
    drug_a: "flecainide",
    drug_b: "sotalol",
    severity: "high",
    mechanism:
      "Both prolong the QT interval; combined use meaningfully raises the risk of dangerous arrhythmia.",
    evidence:
      "Guidelines recommend against combining two QT-prolonging antiarrhythmics.",
  },
  {
    drug_a: "flecainide",
    drug_b: "ziprasidone",
    severity: "high",
    mechanism:
      "Both prolong the QT interval; combined use meaningfully raises the risk of dangerous arrhythmia.",
    evidence:
      "Drug-induced long QT reference lists flag this combination as a torsades risk.",
  },
  {
    drug_a: "fluconazole",
    drug_b: "alprazolam",
    severity: "moderate",
    mechanism:
      "Azole antifungals inhibit CYP3A4 metabolism of some benzodiazepines, increasing sedation.",
    evidence:
      "Benzodiazepine labeling notes elevated levels when combined with azole antifungals.",
  },
  {
    drug_a: "fluconazole",
    drug_b: "atorvastatin",
    severity: "high",
    mechanism:
      "Azole antifungals strongly inhibit CYP3A4 metabolism of many statins, raising statin levels and myopathy/rhabdomyolysis risk.",
    evidence:
      "Statin labeling warns against or limits dosing with strong CYP3A4 inhibitors like azole antifungals.",
  },
  {
    drug_a: "fluconazole",
    drug_b: "azathioprine",
    severity: "moderate",
    mechanism:
      "Azole antifungals inhibit CYP3A4 metabolism of calcineurin inhibitors, raising levels and toxicity risk.",
    evidence:
      "Transplant medicine guidance requires immunosuppressant level monitoring when azole antifungals are added.",
  },
  {
    drug_a: "fluconazole",
    drug_b: "chlordiazepoxide",
    severity: "moderate",
    mechanism:
      "Azole antifungals inhibit CYP3A4 metabolism of some benzodiazepines, increasing sedation.",
    evidence:
      "Benzodiazepine labeling notes elevated levels when combined with azole antifungals.",
  },
  {
    drug_a: "fluconazole",
    drug_b: "clonazepam",
    severity: "moderate",
    mechanism:
      "Azole antifungals inhibit CYP3A4 metabolism of some benzodiazepines, increasing sedation.",
    evidence:
      "Benzodiazepine labeling notes elevated levels when combined with azole antifungals.",
  },
  {
    drug_a: "fluconazole",
    drug_b: "clorazepate",
    severity: "moderate",
    mechanism:
      "Azole antifungals inhibit CYP3A4 metabolism of some benzodiazepines, increasing sedation.",
    evidence:
      "Benzodiazepine labeling notes elevated levels when combined with azole antifungals.",
  },
  {
    drug_a: "fluconazole",
    drug_b: "cyclosporine",
    severity: "moderate",
    mechanism:
      "Azole antifungals inhibit CYP3A4 metabolism of calcineurin inhibitors, raising levels and toxicity risk.",
    evidence:
      "Transplant medicine guidance requires immunosuppressant level monitoring when azole antifungals are added.",
  },
  {
    drug_a: "fluconazole",
    drug_b: "diazepam",
    severity: "moderate",
    mechanism:
      "Azole antifungals inhibit CYP3A4 metabolism of some benzodiazepines, increasing sedation.",
    evidence:
      "Benzodiazepine labeling notes elevated levels when combined with azole antifungals.",
  },
  {
    drug_a: "fluconazole",
    drug_b: "lorazepam",
    severity: "moderate",
    mechanism:
      "Azole antifungals inhibit CYP3A4 metabolism of some benzodiazepines, increasing sedation.",
    evidence:
      "Benzodiazepine labeling notes elevated levels when combined with azole antifungals.",
  },
  {
    drug_a: "fluconazole",
    drug_b: "lovastatin",
    severity: "high",
    mechanism:
      "Azole antifungals strongly inhibit CYP3A4 metabolism of many statins, raising statin levels and myopathy/rhabdomyolysis risk.",
    evidence:
      "Statin labeling warns against or limits dosing with strong CYP3A4 inhibitors like azole antifungals.",
  },
  {
    drug_a: "fluconazole",
    drug_b: "methotrexate",
    severity: "moderate",
    mechanism:
      "Azole antifungals inhibit CYP3A4 metabolism of calcineurin inhibitors, raising levels and toxicity risk.",
    evidence:
      "Transplant medicine guidance requires immunosuppressant level monitoring when azole antifungals are added.",
  },
  {
    drug_a: "fluconazole",
    drug_b: "midazolam",
    severity: "moderate",
    mechanism:
      "Azole antifungals inhibit CYP3A4 metabolism of some benzodiazepines, increasing sedation.",
    evidence:
      "Benzodiazepine labeling notes elevated levels when combined with azole antifungals.",
  },
  {
    drug_a: "fluconazole",
    drug_b: "mycophenolate",
    severity: "moderate",
    mechanism:
      "Azole antifungals inhibit CYP3A4 metabolism of calcineurin inhibitors, raising levels and toxicity risk.",
    evidence:
      "Transplant medicine guidance requires immunosuppressant level monitoring when azole antifungals are added.",
  },
  {
    drug_a: "fluconazole",
    drug_b: "oxazepam",
    severity: "moderate",
    mechanism:
      "Azole antifungals inhibit CYP3A4 metabolism of some benzodiazepines, increasing sedation.",
    evidence:
      "Benzodiazepine labeling notes elevated levels when combined with azole antifungals.",
  },
  {
    drug_a: "fluconazole",
    drug_b: "sildenafil",
    severity: "moderate",
    mechanism:
      "Azole antifungals inhibit CYP3A4 metabolism of PDE5 inhibitors, raising levels and hypotension risk.",
    evidence:
      "PDE5 inhibitor labeling recommends dose limits when combined with azole antifungals.",
  },
  {
    drug_a: "fluconazole",
    drug_b: "simvastatin",
    severity: "high",
    mechanism:
      "Azole antifungals strongly inhibit CYP3A4 metabolism of many statins, raising statin levels and myopathy/rhabdomyolysis risk.",
    evidence:
      "Statin labeling warns against or limits dosing with strong CYP3A4 inhibitors like azole antifungals.",
  },
  {
    drug_a: "fluconazole",
    drug_b: "tacrolimus",
    severity: "moderate",
    mechanism:
      "Azole antifungals inhibit CYP3A4 metabolism of calcineurin inhibitors, raising levels and toxicity risk.",
    evidence:
      "Transplant medicine guidance requires immunosuppressant level monitoring when azole antifungals are added.",
  },
  {
    drug_a: "fluconazole",
    drug_b: "tadalafil",
    severity: "moderate",
    mechanism:
      "Azole antifungals inhibit CYP3A4 metabolism of PDE5 inhibitors, raising levels and hypotension risk.",
    evidence:
      "PDE5 inhibitor labeling recommends dose limits when combined with azole antifungals.",
  },
  {
    drug_a: "fluconazole",
    drug_b: "temazepam",
    severity: "moderate",
    mechanism:
      "Azole antifungals inhibit CYP3A4 metabolism of some benzodiazepines, increasing sedation.",
    evidence:
      "Benzodiazepine labeling notes elevated levels when combined with azole antifungals.",
  },
  {
    drug_a: "fluconazole",
    drug_b: "vardenafil",
    severity: "moderate",
    mechanism:
      "Azole antifungals inhibit CYP3A4 metabolism of PDE5 inhibitors, raising levels and hypotension risk.",
    evidence:
      "PDE5 inhibitor labeling recommends dose limits when combined with azole antifungals.",
  },
  {
    drug_a: "fluticasone",
    drug_b: "canagliflozin",
    severity: "moderate",
    mechanism:
      "Corticosteroids can raise blood glucose, counteracting the glucose-lowering effect of antidiabetic medications.",
    evidence:
      "Endocrinology guidance recommends closer glucose monitoring when corticosteroids are added.",
  },
  {
    drug_a: "fluticasone",
    drug_b: "dapagliflozin",
    severity: "moderate",
    mechanism:
      "Corticosteroids can raise blood glucose, counteracting the glucose-lowering effect of antidiabetic medications.",
    evidence:
      "Endocrinology guidance recommends closer glucose monitoring when corticosteroids are added.",
  },
  {
    drug_a: "fluticasone",
    drug_b: "dulaglutide",
    severity: "moderate",
    mechanism:
      "Corticosteroids can raise blood glucose, counteracting the glucose-lowering effect of antidiabetic medications.",
    evidence:
      "Endocrinology guidance recommends closer glucose monitoring when corticosteroids are added.",
  },
  {
    drug_a: "fluticasone",
    drug_b: "empagliflozin",
    severity: "moderate",
    mechanism:
      "Corticosteroids can raise blood glucose, counteracting the glucose-lowering effect of antidiabetic medications.",
    evidence:
      "Endocrinology guidance recommends closer glucose monitoring when corticosteroids are added.",
  },
  {
    drug_a: "fluticasone",
    drug_b: "glimepiride",
    severity: "moderate",
    mechanism:
      "Corticosteroids can raise blood glucose, counteracting the glucose-lowering effect of antidiabetic medications.",
    evidence:
      "Endocrinology guidance recommends closer glucose monitoring when corticosteroids are added.",
  },
  {
    drug_a: "fluticasone",
    drug_b: "glipizide",
    severity: "moderate",
    mechanism:
      "Corticosteroids can raise blood glucose, counteracting the glucose-lowering effect of antidiabetic medications.",
    evidence:
      "Endocrinology guidance recommends closer glucose monitoring when corticosteroids are added.",
  },
  {
    drug_a: "fluticasone",
    drug_b: "glyburide",
    severity: "moderate",
    mechanism:
      "Corticosteroids can raise blood glucose, counteracting the glucose-lowering effect of antidiabetic medications.",
    evidence:
      "Endocrinology guidance recommends closer glucose monitoring when corticosteroids are added.",
  },
  {
    drug_a: "fluticasone",
    drug_b: "insulin_aspart",
    severity: "moderate",
    mechanism:
      "Corticosteroids can raise blood glucose, counteracting the glucose-lowering effect of antidiabetic medications.",
    evidence:
      "Endocrinology guidance recommends closer glucose monitoring when corticosteroids are added.",
  },
  {
    drug_a: "fluticasone",
    drug_b: "insulin_glargine",
    severity: "moderate",
    mechanism:
      "Corticosteroids can raise blood glucose, counteracting the glucose-lowering effect of antidiabetic medications.",
    evidence:
      "Endocrinology guidance recommends closer glucose monitoring when corticosteroids are added.",
  },
  {
    drug_a: "fluticasone",
    drug_b: "insulin_lispro",
    severity: "moderate",
    mechanism:
      "Corticosteroids can raise blood glucose, counteracting the glucose-lowering effect of antidiabetic medications.",
    evidence:
      "Endocrinology guidance recommends closer glucose monitoring when corticosteroids are added.",
  },
  {
    drug_a: "fluticasone",
    drug_b: "linagliptin",
    severity: "moderate",
    mechanism:
      "Corticosteroids can raise blood glucose, counteracting the glucose-lowering effect of antidiabetic medications.",
    evidence:
      "Endocrinology guidance recommends closer glucose monitoring when corticosteroids are added.",
  },
  {
    drug_a: "fluticasone",
    drug_b: "liraglutide",
    severity: "moderate",
    mechanism:
      "Corticosteroids can raise blood glucose, counteracting the glucose-lowering effect of antidiabetic medications.",
    evidence:
      "Endocrinology guidance recommends closer glucose monitoring when corticosteroids are added.",
  },
  {
    drug_a: "fluticasone",
    drug_b: "metformin",
    severity: "moderate",
    mechanism:
      "Corticosteroids can raise blood glucose, counteracting the glucose-lowering effect of antidiabetic medications.",
    evidence:
      "Endocrinology guidance recommends closer glucose monitoring when corticosteroids are added.",
  },
  {
    drug_a: "fluticasone",
    drug_b: "pioglitazone",
    severity: "moderate",
    mechanism:
      "Corticosteroids can raise blood glucose, counteracting the glucose-lowering effect of antidiabetic medications.",
    evidence:
      "Endocrinology guidance recommends closer glucose monitoring when corticosteroids are added.",
  },
  {
    drug_a: "fluticasone",
    drug_b: "saxagliptin",
    severity: "moderate",
    mechanism:
      "Corticosteroids can raise blood glucose, counteracting the glucose-lowering effect of antidiabetic medications.",
    evidence:
      "Endocrinology guidance recommends closer glucose monitoring when corticosteroids are added.",
  },
  {
    drug_a: "fluticasone",
    drug_b: "semaglutide",
    severity: "moderate",
    mechanism:
      "Corticosteroids can raise blood glucose, counteracting the glucose-lowering effect of antidiabetic medications.",
    evidence:
      "Endocrinology guidance recommends closer glucose monitoring when corticosteroids are added.",
  },
  {
    drug_a: "fluticasone",
    drug_b: "sitagliptin",
    severity: "moderate",
    mechanism:
      "Corticosteroids can raise blood glucose, counteracting the glucose-lowering effect of antidiabetic medications.",
    evidence:
      "Endocrinology guidance recommends closer glucose monitoring when corticosteroids are added.",
  },
  {
    drug_a: "fosinopril",
    drug_b: "amiloride",
    severity: "moderate",
    mechanism:
      "Both raise serum potassium; combined use increases the risk of hyperkalemia.",
    evidence:
      "Labeling for potassium-sparing diuretics warns of hyperkalemia risk with ACE inhibitors.",
  },
  {
    drug_a: "fosinopril",
    drug_b: "azilsartan",
    severity: "moderate",
    mechanism:
      "Dual blockade of the renin-angiotensin system can increase risk of hyperkalemia and hypotension.",
    evidence:
      "Guidelines generally recommend against combining ACE inhibitors and ARBs.",
  },
  {
    drug_a: "fosinopril",
    drug_b: "candesartan",
    severity: "moderate",
    mechanism:
      "Dual blockade of the renin-angiotensin system can increase risk of hyperkalemia and hypotension.",
    evidence:
      "Guidelines generally recommend against combining ACE inhibitors and ARBs.",
  },
  {
    drug_a: "fosinopril",
    drug_b: "irbesartan",
    severity: "moderate",
    mechanism:
      "Dual blockade of the renin-angiotensin system can increase risk of hyperkalemia and hypotension.",
    evidence:
      "Guidelines generally recommend against combining ACE inhibitors and ARBs.",
  },
  {
    drug_a: "fosinopril",
    drug_b: "lithium",
    severity: "moderate",
    mechanism:
      "ACE inhibitors can reduce renal clearance of lithium, raising lithium levels toward toxicity.",
    evidence:
      "Lithium labeling warns of elevated levels with concurrent ACE inhibitor use, warranting level monitoring.",
  },
  {
    drug_a: "fosinopril",
    drug_b: "losartan",
    severity: "moderate",
    mechanism:
      "Dual blockade of the renin-angiotensin system can increase risk of hyperkalemia and hypotension.",
    evidence:
      "Guidelines generally recommend against combining ACE inhibitors and ARBs.",
  },
  {
    drug_a: "fosinopril",
    drug_b: "olmesartan",
    severity: "moderate",
    mechanism:
      "Dual blockade of the renin-angiotensin system can increase risk of hyperkalemia and hypotension.",
    evidence:
      "Guidelines generally recommend against combining ACE inhibitors and ARBs.",
  },
  {
    drug_a: "fosinopril",
    drug_b: "spironolactone",
    severity: "moderate",
    mechanism:
      "Both raise serum potassium; combined use increases the risk of hyperkalemia.",
    evidence:
      "Labeling for potassium-sparing diuretics warns of hyperkalemia risk with ACE inhibitors.",
  },
  {
    drug_a: "fosinopril",
    drug_b: "telmisartan",
    severity: "moderate",
    mechanism:
      "Dual blockade of the renin-angiotensin system can increase risk of hyperkalemia and hypotension.",
    evidence:
      "Guidelines generally recommend against combining ACE inhibitors and ARBs.",
  },
  {
    drug_a: "fosinopril",
    drug_b: "triamterene",
    severity: "moderate",
    mechanism:
      "Both raise serum potassium; combined use increases the risk of hyperkalemia.",
    evidence:
      "Labeling for potassium-sparing diuretics warns of hyperkalemia risk with ACE inhibitors.",
  },
  {
    drug_a: "fosinopril",
    drug_b: "valsartan",
    severity: "moderate",
    mechanism:
      "Dual blockade of the renin-angiotensin system can increase risk of hyperkalemia and hypotension.",
    evidence:
      "Guidelines generally recommend against combining ACE inhibitors and ARBs.",
  },
  {
    drug_a: "haloperidol",
    drug_b: "levofloxacin",
    severity: "moderate",
    mechanism:
      "Both prolong the QT interval; combined use raises the risk of dangerous arrhythmia.",
    evidence:
      "Drug-induced long QT reference lists flag this combination.",
  },
  {
    drug_a: "haloperidol",
    drug_b: "lurasidone",
    severity: "moderate",
    mechanism:
      "Combining two antipsychotics adds to sedation, metabolic, and QT-prolongation risk without clear added benefit.",
    evidence:
      "Guidelines generally recommend against routine antipsychotic polypharmacy.",
  },
  {
    drug_a: "haloperidol",
    drug_b: "methadone",
    severity: "moderate",
    mechanism:
      "Both prolong the QT interval; combined use raises the risk of dangerous arrhythmia.",
    evidence:
      "Drug-induced long QT reference lists flag this combination.",
  },
  {
    drug_a: "haloperidol",
    drug_b: "moxifloxacin",
    severity: "moderate",
    mechanism:
      "Both prolong the QT interval; combined use raises the risk of dangerous arrhythmia.",
    evidence:
      "Drug-induced long QT reference lists flag this combination.",
  },
  {
    drug_a: "haloperidol",
    drug_b: "olanzapine",
    severity: "moderate",
    mechanism:
      "Combining two antipsychotics adds to sedation, metabolic, and QT-prolongation risk without clear added benefit.",
    evidence:
      "Guidelines generally recommend against routine antipsychotic polypharmacy.",
  },
  {
    drug_a: "haloperidol",
    drug_b: "ondansetron",
    severity: "moderate",
    mechanism:
      "Both prolong the QT interval; combined use raises the risk of dangerous arrhythmia.",
    evidence:
      "Drug-induced long QT reference lists flag this combination.",
  },
  {
    drug_a: "haloperidol",
    drug_b: "paliperidone",
    severity: "moderate",
    mechanism:
      "Combining two antipsychotics adds to sedation, metabolic, and QT-prolongation risk without clear added benefit.",
    evidence:
      "Guidelines generally recommend against routine antipsychotic polypharmacy.",
  },
  {
    drug_a: "haloperidol",
    drug_b: "quetiapine",
    severity: "moderate",
    mechanism:
      "Combining two antipsychotics adds to sedation, metabolic, and QT-prolongation risk without clear added benefit.",
    evidence:
      "Guidelines generally recommend against routine antipsychotic polypharmacy.",
  },
  {
    drug_a: "haloperidol",
    drug_b: "risperidone",
    severity: "moderate",
    mechanism:
      "Combining two antipsychotics adds to sedation, metabolic, and QT-prolongation risk without clear added benefit.",
    evidence:
      "Guidelines generally recommend against routine antipsychotic polypharmacy.",
  },
  {
    drug_a: "haloperidol",
    drug_b: "rizatriptan",
    severity: "moderate",
    mechanism:
      "Some antipsychotics have mild serotonergic activity that may add to that of other serotonergic agents.",
    evidence:
      "Case reports describe serotonin syndrome features when antipsychotics are combined with strongly serotonergic drugs.",
  },
  {
    drug_a: "haloperidol",
    drug_b: "st_johns_wort",
    severity: "moderate",
    mechanism:
      "Some antipsychotics have mild serotonergic activity that may add to that of other serotonergic agents.",
    evidence:
      "Case reports describe serotonin syndrome features when antipsychotics are combined with strongly serotonergic drugs.",
  },
  {
    drug_a: "haloperidol",
    drug_b: "sumatriptan",
    severity: "moderate",
    mechanism:
      "Some antipsychotics have mild serotonergic activity that may add to that of other serotonergic agents.",
    evidence:
      "Case reports describe serotonin syndrome features when antipsychotics are combined with strongly serotonergic drugs.",
  },
  {
    drug_a: "haloperidol",
    drug_b: "tramadol",
    severity: "moderate",
    mechanism:
      "Some antipsychotics have mild serotonergic activity that may add to that of other serotonergic agents.",
    evidence:
      "Case reports describe serotonin syndrome features when antipsychotics are combined with strongly serotonergic drugs.",
  },
  {
    drug_a: "haloperidol",
    drug_b: "ziprasidone",
    severity: "moderate",
    mechanism:
      "Both prolong the QT interval; combined use raises the risk of dangerous arrhythmia.",
    evidence:
      "Drug-induced long QT reference lists flag this combination.",
  },
  {
    drug_a: "heparin",
    drug_b: "budesonide",
    severity: "moderate",
    mechanism:
      "Corticosteroids can irritate the GI lining and alter clotting factor levels, adding to anticoagulant bleeding risk.",
    evidence:
      "Case reports describe elevated INR and GI bleeding with combined corticosteroid and anticoagulant use.",
  },
  {
    drug_a: "heparin",
    drug_b: "desvenlafaxine",
    severity: "moderate",
    mechanism:
      "Serotonergic antidepressants impair platelet aggregation and, combined with anticoagulants, can further raise bleeding risk.",
    evidence:
      "Case-control studies report increased bleeding risk with serotonergic antidepressant and anticoagulant co-therapy.",
  },
  {
    drug_a: "heparin",
    drug_b: "dipyridamole",
    severity: "high",
    mechanism:
      "Combined anticoagulant and antiplatelet effects substantially increase bleeding risk.",
    evidence:
      "Cardiology guidelines require careful risk-benefit assessment before combining these therapies.",
  },
  {
    drug_a: "heparin",
    drug_b: "fluconazole",
    severity: "high",
    mechanism:
      "Azole antifungals inhibit hepatic enzymes that metabolize anticoagulants, sharply raising anticoagulant levels and bleeding risk.",
    evidence:
      "Labeling for azole antifungals lists anticoagulants among drugs requiring dose adjustment or close monitoring.",
  },
  {
    drug_a: "heparin",
    drug_b: "fluticasone",
    severity: "moderate",
    mechanism:
      "Corticosteroids can irritate the GI lining and alter clotting factor levels, adding to anticoagulant bleeding risk.",
    evidence:
      "Case reports describe elevated INR and GI bleeding with combined corticosteroid and anticoagulant use.",
  },
  {
    drug_a: "heparin",
    drug_b: "fluvoxamine",
    severity: "moderate",
    mechanism:
      "SSRIs impair platelet aggregation and, combined with anticoagulants, can further raise bleeding risk.",
    evidence:
      "Case-control studies report increased bleeding risk with SSRI and anticoagulant co-therapy.",
  },
  {
    drug_a: "heparin",
    drug_b: "hydrocortisone",
    severity: "moderate",
    mechanism:
      "Corticosteroids can irritate the GI lining and alter clotting factor levels, adding to anticoagulant bleeding risk.",
    evidence:
      "Case reports describe elevated INR and GI bleeding with combined corticosteroid and anticoagulant use.",
  },
  {
    drug_a: "heparin",
    drug_b: "itraconazole",
    severity: "high",
    mechanism:
      "Azole antifungals inhibit hepatic enzymes that metabolize anticoagulants, sharply raising anticoagulant levels and bleeding risk.",
    evidence:
      "Labeling for azole antifungals lists anticoagulants among drugs requiring dose adjustment or close monitoring.",
  },
  {
    drug_a: "heparin",
    drug_b: "ketoconazole",
    severity: "high",
    mechanism:
      "Azole antifungals inhibit hepatic enzymes that metabolize anticoagulants, sharply raising anticoagulant levels and bleeding risk.",
    evidence:
      "Labeling for azole antifungals lists anticoagulants among drugs requiring dose adjustment or close monitoring.",
  },
  {
    drug_a: "heparin",
    drug_b: "levomilnacipran",
    severity: "moderate",
    mechanism:
      "Serotonergic antidepressants impair platelet aggregation and, combined with anticoagulants, can further raise bleeding risk.",
    evidence:
      "Case-control studies report increased bleeding risk with serotonergic antidepressant and anticoagulant co-therapy.",
  },
  {
    drug_a: "heparin",
    drug_b: "moxifloxacin",
    severity: "moderate",
    mechanism:
      "Fluoroquinolones can potentiate anticoagulant effect, raising bleeding risk.",
    evidence:
      "Labeling for anticoagulants notes increased INR when fluoroquinolone antibiotics are co-prescribed.",
  },
  {
    drug_a: "heparin",
    drug_b: "ofloxacin",
    severity: "moderate",
    mechanism:
      "Fluoroquinolones can potentiate anticoagulant effect, raising bleeding risk.",
    evidence:
      "Labeling for anticoagulants notes increased INR when fluoroquinolone antibiotics are co-prescribed.",
  },
  {
    drug_a: "heparin",
    drug_b: "prasugrel",
    severity: "high",
    mechanism:
      "Combined anticoagulant and antiplatelet effects substantially increase bleeding risk.",
    evidence:
      "Cardiology guidelines require careful risk-benefit assessment before combining these therapies.",
  },
  {
    drug_a: "heparin",
    drug_b: "ticagrelor",
    severity: "high",
    mechanism:
      "Combined anticoagulant and antiplatelet effects substantially increase bleeding risk.",
    evidence:
      "Cardiology guidelines require careful risk-benefit assessment before combining these therapies.",
  },
  {
    drug_a: "heparin",
    drug_b: "triamcinolone",
    severity: "moderate",
    mechanism:
      "Corticosteroids can irritate the GI lining and alter clotting factor levels, adding to anticoagulant bleeding risk.",
    evidence:
      "Case reports describe elevated INR and GI bleeding with combined corticosteroid and anticoagulant use.",
  },
  {
    drug_a: "hydrocodone",
    drug_b: "baclofen",
    severity: "moderate",
    mechanism:
      "Both cause CNS depression; combined use increases sedation and fall risk, especially in older adults.",
    evidence:
      "Muscle relaxant labeling warns of additive sedation with opioids.",
  },
  {
    drug_a: "hydrocodone",
    drug_b: "carisoprodol",
    severity: "moderate",
    mechanism:
      "Both cause CNS depression; combined use increases sedation and fall risk, especially in older adults.",
    evidence:
      "Muscle relaxant labeling warns of additive sedation with opioids.",
  },
  {
    drug_a: "hydrocodone",
    drug_b: "chlordiazepoxide",
    severity: "high",
    mechanism:
      "Both depress the central nervous system; combined use significantly raises the risk of profound sedation and fatal respiratory depression.",
    evidence:
      "FDA boxed warning covers concurrent opioid and benzodiazepine use.",
  },
  {
    drug_a: "hydrocodone",
    drug_b: "clorazepate",
    severity: "high",
    mechanism:
      "Both depress the central nervous system; combined use significantly raises the risk of profound sedation and fatal respiratory depression.",
    evidence:
      "FDA boxed warning covers concurrent opioid and benzodiazepine use.",
  },
  {
    drug_a: "hydrocodone",
    drug_b: "desvenlafaxine",
    severity: "high",
    mechanism:
      "Both increase serotonin activity, raising the risk of serotonin syndrome.",
    evidence:
      "Case reports and FDA labeling describe elevated serotonin syndrome risk with this combination.",
  },
  {
    drug_a: "hydrocodone",
    drug_b: "fluvoxamine",
    severity: "high",
    mechanism:
      "Both increase serotonin activity, raising the risk of serotonin syndrome.",
    evidence:
      "Case reports and FDA labeling describe elevated serotonin syndrome risk with this combination.",
  },
  {
    drug_a: "hydrocodone",
    drug_b: "hydromorphone",
    severity: "moderate",
    mechanism:
      "Combining two opioids adds to central nervous system and respiratory depression without clear added benefit.",
    evidence:
      "Prescribing guidance recommends against concurrent use of multiple opioid analgesics outside supervised rotation.",
  },
  {
    drug_a: "hydrocodone",
    drug_b: "hydroxyzine",
    severity: "moderate",
    mechanism:
      "Both cause CNS depression; combined use increases sedation and, in vulnerable patients, respiratory depression risk.",
    evidence:
      "Product labeling for sedating antihistamines warns against combination with opioid analgesics.",
  },
  {
    drug_a: "hydrocodone",
    drug_b: "levomilnacipran",
    severity: "high",
    mechanism:
      "Both increase serotonin activity, raising the risk of serotonin syndrome.",
    evidence:
      "Case reports and FDA labeling describe elevated serotonin syndrome risk with this combination.",
  },
  {
    drug_a: "hydrocodone",
    drug_b: "meperidine",
    severity: "moderate",
    mechanism:
      "Combining two opioids adds to central nervous system and respiratory depression without clear added benefit.",
    evidence:
      "Prescribing guidance recommends against concurrent use of multiple opioid analgesics outside supervised rotation.",
  },
  {
    drug_a: "hydrocodone",
    drug_b: "methadone",
    severity: "moderate",
    mechanism:
      "Combining two opioids adds to central nervous system and respiratory depression without clear added benefit.",
    evidence:
      "Prescribing guidance recommends against concurrent use of multiple opioid analgesics outside supervised rotation.",
  },
  {
    drug_a: "hydrocodone",
    drug_b: "methocarbamol",
    severity: "moderate",
    mechanism:
      "Both cause CNS depression; combined use increases sedation and fall risk, especially in older adults.",
    evidence:
      "Muscle relaxant labeling warns of additive sedation with opioids.",
  },
  {
    drug_a: "hydrocodone",
    drug_b: "midazolam",
    severity: "high",
    mechanism:
      "Both depress the central nervous system; combined use significantly raises the risk of profound sedation and fatal respiratory depression.",
    evidence:
      "FDA boxed warning covers concurrent opioid and benzodiazepine use.",
  },
  {
    drug_a: "hydrocodone",
    drug_b: "ondansetron",
    severity: "high",
    mechanism:
      "Both increase serotonin activity, raising the risk of serotonin syndrome.",
    evidence:
      "Case reports and FDA labeling describe elevated serotonin syndrome risk with this combination.",
  },
  {
    drug_a: "hydrocodone",
    drug_b: "oxazepam",
    severity: "high",
    mechanism:
      "Both depress the central nervous system; combined use significantly raises the risk of profound sedation and fatal respiratory depression.",
    evidence:
      "FDA boxed warning covers concurrent opioid and benzodiazepine use.",
  },
  {
    drug_a: "hydrocodone",
    drug_b: "oxymorphone",
    severity: "moderate",
    mechanism:
      "Combining two opioids adds to central nervous system and respiratory depression without clear added benefit.",
    evidence:
      "Prescribing guidance recommends against concurrent use of multiple opioid analgesics outside supervised rotation.",
  },
  {
    drug_a: "hydrocodone",
    drug_b: "promethazine",
    severity: "moderate",
    mechanism:
      "Both cause CNS depression; combined use increases sedation and, in vulnerable patients, respiratory depression risk.",
    evidence:
      "Product labeling for sedating antihistamines warns against combination with opioid analgesics.",
  },
  {
    drug_a: "hydrocodone",
    drug_b: "rizatriptan",
    severity: "high",
    mechanism:
      "Both increase serotonin activity, raising the risk of serotonin syndrome.",
    evidence:
      "Case reports and FDA labeling describe elevated serotonin syndrome risk with this combination.",
  },
  {
    drug_a: "hydrocodone",
    drug_b: "st_johns_wort",
    severity: "high",
    mechanism:
      "Both increase serotonin activity, raising the risk of serotonin syndrome.",
    evidence:
      "Case reports and FDA labeling describe elevated serotonin syndrome risk with this combination.",
  },
  {
    drug_a: "hydrocodone",
    drug_b: "sumatriptan",
    severity: "high",
    mechanism:
      "Both increase serotonin activity, raising the risk of serotonin syndrome.",
    evidence:
      "Case reports and FDA labeling describe elevated serotonin syndrome risk with this combination.",
  },
  {
    drug_a: "hydrocodone",
    drug_b: "tizanidine",
    severity: "moderate",
    mechanism:
      "Both cause CNS depression; combined use increases sedation and fall risk, especially in older adults.",
    evidence:
      "Muscle relaxant labeling warns of additive sedation with opioids.",
  },
  {
    drug_a: "hydrocodone",
    drug_b: "zaleplon",
    severity: "high",
    mechanism:
      "Both depress the central nervous system; combined use significantly raises the risk of profound sedation and fatal respiratory depression.",
    evidence:
      "FDA boxed warning covers concurrent opioid and CNS depressant use, including non-benzodiazepine hypnotics.",
  },
  {
    drug_a: "hydrocortisone",
    drug_b: "canagliflozin",
    severity: "moderate",
    mechanism:
      "Corticosteroids can raise blood glucose, counteracting the glucose-lowering effect of antidiabetic medications.",
    evidence:
      "Endocrinology guidance recommends closer glucose monitoring when corticosteroids are added.",
  },
  {
    drug_a: "hydrocortisone",
    drug_b: "dapagliflozin",
    severity: "moderate",
    mechanism:
      "Corticosteroids can raise blood glucose, counteracting the glucose-lowering effect of antidiabetic medications.",
    evidence:
      "Endocrinology guidance recommends closer glucose monitoring when corticosteroids are added.",
  },
  {
    drug_a: "hydrocortisone",
    drug_b: "dulaglutide",
    severity: "moderate",
    mechanism:
      "Corticosteroids can raise blood glucose, counteracting the glucose-lowering effect of antidiabetic medications.",
    evidence:
      "Endocrinology guidance recommends closer glucose monitoring when corticosteroids are added.",
  },
  {
    drug_a: "hydrocortisone",
    drug_b: "empagliflozin",
    severity: "moderate",
    mechanism:
      "Corticosteroids can raise blood glucose, counteracting the glucose-lowering effect of antidiabetic medications.",
    evidence:
      "Endocrinology guidance recommends closer glucose monitoring when corticosteroids are added.",
  },
  {
    drug_a: "hydrocortisone",
    drug_b: "glimepiride",
    severity: "moderate",
    mechanism:
      "Corticosteroids can raise blood glucose, counteracting the glucose-lowering effect of antidiabetic medications.",
    evidence:
      "Endocrinology guidance recommends closer glucose monitoring when corticosteroids are added.",
  },
  {
    drug_a: "hydrocortisone",
    drug_b: "glipizide",
    severity: "moderate",
    mechanism:
      "Corticosteroids can raise blood glucose, counteracting the glucose-lowering effect of antidiabetic medications.",
    evidence:
      "Endocrinology guidance recommends closer glucose monitoring when corticosteroids are added.",
  },
  {
    drug_a: "hydrocortisone",
    drug_b: "glyburide",
    severity: "moderate",
    mechanism:
      "Corticosteroids can raise blood glucose, counteracting the glucose-lowering effect of antidiabetic medications.",
    evidence:
      "Endocrinology guidance recommends closer glucose monitoring when corticosteroids are added.",
  },
  {
    drug_a: "hydrocortisone",
    drug_b: "insulin_aspart",
    severity: "moderate",
    mechanism:
      "Corticosteroids can raise blood glucose, counteracting the glucose-lowering effect of antidiabetic medications.",
    evidence:
      "Endocrinology guidance recommends closer glucose monitoring when corticosteroids are added.",
  },
  {
    drug_a: "hydrocortisone",
    drug_b: "insulin_glargine",
    severity: "moderate",
    mechanism:
      "Corticosteroids can raise blood glucose, counteracting the glucose-lowering effect of antidiabetic medications.",
    evidence:
      "Endocrinology guidance recommends closer glucose monitoring when corticosteroids are added.",
  },
  {
    drug_a: "hydrocortisone",
    drug_b: "insulin_lispro",
    severity: "moderate",
    mechanism:
      "Corticosteroids can raise blood glucose, counteracting the glucose-lowering effect of antidiabetic medications.",
    evidence:
      "Endocrinology guidance recommends closer glucose monitoring when corticosteroids are added.",
  },
  {
    drug_a: "hydrocortisone",
    drug_b: "linagliptin",
    severity: "moderate",
    mechanism:
      "Corticosteroids can raise blood glucose, counteracting the glucose-lowering effect of antidiabetic medications.",
    evidence:
      "Endocrinology guidance recommends closer glucose monitoring when corticosteroids are added.",
  },
  {
    drug_a: "hydrocortisone",
    drug_b: "liraglutide",
    severity: "moderate",
    mechanism:
      "Corticosteroids can raise blood glucose, counteracting the glucose-lowering effect of antidiabetic medications.",
    evidence:
      "Endocrinology guidance recommends closer glucose monitoring when corticosteroids are added.",
  },
  {
    drug_a: "hydrocortisone",
    drug_b: "metformin",
    severity: "moderate",
    mechanism:
      "Corticosteroids can raise blood glucose, counteracting the glucose-lowering effect of antidiabetic medications.",
    evidence:
      "Endocrinology guidance recommends closer glucose monitoring when corticosteroids are added.",
  },
  {
    drug_a: "hydrocortisone",
    drug_b: "pioglitazone",
    severity: "moderate",
    mechanism:
      "Corticosteroids can raise blood glucose, counteracting the glucose-lowering effect of antidiabetic medications.",
    evidence:
      "Endocrinology guidance recommends closer glucose monitoring when corticosteroids are added.",
  },
  {
    drug_a: "hydrocortisone",
    drug_b: "saxagliptin",
    severity: "moderate",
    mechanism:
      "Corticosteroids can raise blood glucose, counteracting the glucose-lowering effect of antidiabetic medications.",
    evidence:
      "Endocrinology guidance recommends closer glucose monitoring when corticosteroids are added.",
  },
  {
    drug_a: "hydrocortisone",
    drug_b: "semaglutide",
    severity: "moderate",
    mechanism:
      "Corticosteroids can raise blood glucose, counteracting the glucose-lowering effect of antidiabetic medications.",
    evidence:
      "Endocrinology guidance recommends closer glucose monitoring when corticosteroids are added.",
  },
  {
    drug_a: "hydrocortisone",
    drug_b: "sitagliptin",
    severity: "moderate",
    mechanism:
      "Corticosteroids can raise blood glucose, counteracting the glucose-lowering effect of antidiabetic medications.",
    evidence:
      "Endocrinology guidance recommends closer glucose monitoring when corticosteroids are added.",
  },
  {
    drug_a: "hydromorphone",
    drug_b: "alprazolam",
    severity: "high",
    mechanism:
      "Both depress the central nervous system; combined use significantly raises the risk of profound sedation and fatal respiratory depression.",
    evidence:
      "FDA boxed warning covers concurrent opioid and benzodiazepine use.",
  },
  {
    drug_a: "hydromorphone",
    drug_b: "baclofen",
    severity: "moderate",
    mechanism:
      "Both cause CNS depression; combined use increases sedation and fall risk, especially in older adults.",
    evidence:
      "Muscle relaxant labeling warns of additive sedation with opioids.",
  },
  {
    drug_a: "hydromorphone",
    drug_b: "carisoprodol",
    severity: "moderate",
    mechanism:
      "Both cause CNS depression; combined use increases sedation and fall risk, especially in older adults.",
    evidence:
      "Muscle relaxant labeling warns of additive sedation with opioids.",
  },
  {
    drug_a: "hydromorphone",
    drug_b: "chlordiazepoxide",
    severity: "high",
    mechanism:
      "Both depress the central nervous system; combined use significantly raises the risk of profound sedation and fatal respiratory depression.",
    evidence:
      "FDA boxed warning covers concurrent opioid and benzodiazepine use.",
  },
  {
    drug_a: "hydromorphone",
    drug_b: "citalopram",
    severity: "high",
    mechanism:
      "Both increase serotonin activity, raising the risk of serotonin syndrome.",
    evidence:
      "Case reports and FDA labeling describe elevated serotonin syndrome risk with this combination.",
  },
  {
    drug_a: "hydromorphone",
    drug_b: "clonazepam",
    severity: "high",
    mechanism:
      "Both depress the central nervous system; combined use significantly raises the risk of profound sedation and fatal respiratory depression.",
    evidence:
      "FDA boxed warning covers concurrent opioid and benzodiazepine use.",
  },
  {
    drug_a: "hydromorphone",
    drug_b: "clorazepate",
    severity: "high",
    mechanism:
      "Both depress the central nervous system; combined use significantly raises the risk of profound sedation and fatal respiratory depression.",
    evidence:
      "FDA boxed warning covers concurrent opioid and benzodiazepine use.",
  },
  {
    drug_a: "hydromorphone",
    drug_b: "cyclobenzaprine",
    severity: "moderate",
    mechanism:
      "Both cause CNS depression; combined use increases sedation and fall risk, especially in older adults.",
    evidence:
      "Muscle relaxant labeling warns of additive sedation with opioids.",
  },
  {
    drug_a: "hydromorphone",
    drug_b: "desvenlafaxine",
    severity: "high",
    mechanism:
      "Both increase serotonin activity, raising the risk of serotonin syndrome.",
    evidence:
      "Case reports and FDA labeling describe elevated serotonin syndrome risk with this combination.",
  },
  {
    drug_a: "hydromorphone",
    drug_b: "diazepam",
    severity: "high",
    mechanism:
      "Both depress the central nervous system; combined use significantly raises the risk of profound sedation and fatal respiratory depression.",
    evidence:
      "FDA boxed warning covers concurrent opioid and benzodiazepine use.",
  },
  {
    drug_a: "hydromorphone",
    drug_b: "diphenhydramine",
    severity: "moderate",
    mechanism:
      "Both cause CNS depression; combined use increases sedation and, in vulnerable patients, respiratory depression risk.",
    evidence:
      "Product labeling for sedating antihistamines warns against combination with opioid analgesics.",
  },
  {
    drug_a: "hydromorphone",
    drug_b: "duloxetine",
    severity: "high",
    mechanism:
      "Both increase serotonin activity, raising the risk of serotonin syndrome.",
    evidence:
      "Case reports and FDA labeling describe elevated serotonin syndrome risk with this combination.",
  },
  {
    drug_a: "hydromorphone",
    drug_b: "escitalopram",
    severity: "high",
    mechanism:
      "Both increase serotonin activity, raising the risk of serotonin syndrome.",
    evidence:
      "Case reports and FDA labeling describe elevated serotonin syndrome risk with this combination.",
  },
  {
    drug_a: "hydromorphone",
    drug_b: "eszopiclone",
    severity: "high",
    mechanism:
      "Both depress the central nervous system; combined use significantly raises the risk of profound sedation and fatal respiratory depression.",
    evidence:
      "FDA boxed warning covers concurrent opioid and CNS depressant use, including non-benzodiazepine hypnotics.",
  },
  {
    drug_a: "hydromorphone",
    drug_b: "fluoxetine",
    severity: "high",
    mechanism:
      "Both increase serotonin activity, raising the risk of serotonin syndrome.",
    evidence:
      "Case reports and FDA labeling describe elevated serotonin syndrome risk with this combination.",
  },
  {
    drug_a: "hydromorphone",
    drug_b: "fluvoxamine",
    severity: "high",
    mechanism:
      "Both increase serotonin activity, raising the risk of serotonin syndrome.",
    evidence:
      "Case reports and FDA labeling describe elevated serotonin syndrome risk with this combination.",
  },
  {
    drug_a: "hydromorphone",
    drug_b: "hydroxyzine",
    severity: "moderate",
    mechanism:
      "Both cause CNS depression; combined use increases sedation and, in vulnerable patients, respiratory depression risk.",
    evidence:
      "Product labeling for sedating antihistamines warns against combination with opioid analgesics.",
  },
  {
    drug_a: "hydromorphone",
    drug_b: "levomilnacipran",
    severity: "high",
    mechanism:
      "Both increase serotonin activity, raising the risk of serotonin syndrome.",
    evidence:
      "Case reports and FDA labeling describe elevated serotonin syndrome risk with this combination.",
  },
  {
    drug_a: "hydromorphone",
    drug_b: "lorazepam",
    severity: "high",
    mechanism:
      "Both depress the central nervous system; combined use significantly raises the risk of profound sedation and fatal respiratory depression.",
    evidence:
      "FDA boxed warning covers concurrent opioid and benzodiazepine use.",
  },
  {
    drug_a: "hydromorphone",
    drug_b: "meperidine",
    severity: "moderate",
    mechanism:
      "Combining two opioids adds to central nervous system and respiratory depression without clear added benefit.",
    evidence:
      "Prescribing guidance recommends against concurrent use of multiple opioid analgesics outside supervised rotation.",
  },
  {
    drug_a: "hydromorphone",
    drug_b: "methadone",
    severity: "moderate",
    mechanism:
      "Combining two opioids adds to central nervous system and respiratory depression without clear added benefit.",
    evidence:
      "Prescribing guidance recommends against concurrent use of multiple opioid analgesics outside supervised rotation.",
  },
  {
    drug_a: "hydromorphone",
    drug_b: "methocarbamol",
    severity: "moderate",
    mechanism:
      "Both cause CNS depression; combined use increases sedation and fall risk, especially in older adults.",
    evidence:
      "Muscle relaxant labeling warns of additive sedation with opioids.",
  },
  {
    drug_a: "hydromorphone",
    drug_b: "midazolam",
    severity: "high",
    mechanism:
      "Both depress the central nervous system; combined use significantly raises the risk of profound sedation and fatal respiratory depression.",
    evidence:
      "FDA boxed warning covers concurrent opioid and benzodiazepine use.",
  },
  {
    drug_a: "hydromorphone",
    drug_b: "morphine",
    severity: "moderate",
    mechanism:
      "Combining two opioids adds to central nervous system and respiratory depression without clear added benefit.",
    evidence:
      "Prescribing guidance recommends against concurrent use of multiple opioid analgesics outside supervised rotation.",
  },
  {
    drug_a: "hydromorphone",
    drug_b: "ondansetron",
    severity: "high",
    mechanism:
      "Both increase serotonin activity, raising the risk of serotonin syndrome.",
    evidence:
      "Case reports and FDA labeling describe elevated serotonin syndrome risk with this combination.",
  },
  {
    drug_a: "hydromorphone",
    drug_b: "oxazepam",
    severity: "high",
    mechanism:
      "Both depress the central nervous system; combined use significantly raises the risk of profound sedation and fatal respiratory depression.",
    evidence:
      "FDA boxed warning covers concurrent opioid and benzodiazepine use.",
  },
  {
    drug_a: "hydromorphone",
    drug_b: "oxycodone",
    severity: "moderate",
    mechanism:
      "Combining two opioids adds to central nervous system and respiratory depression without clear added benefit.",
    evidence:
      "Prescribing guidance recommends against concurrent use of multiple opioid analgesics outside supervised rotation.",
  },
  {
    drug_a: "hydromorphone",
    drug_b: "oxymorphone",
    severity: "moderate",
    mechanism:
      "Combining two opioids adds to central nervous system and respiratory depression without clear added benefit.",
    evidence:
      "Prescribing guidance recommends against concurrent use of multiple opioid analgesics outside supervised rotation.",
  },
  {
    drug_a: "hydromorphone",
    drug_b: "paroxetine",
    severity: "high",
    mechanism:
      "Both increase serotonin activity, raising the risk of serotonin syndrome.",
    evidence:
      "Case reports and FDA labeling describe elevated serotonin syndrome risk with this combination.",
  },
  {
    drug_a: "hydromorphone",
    drug_b: "phenelzine",
    severity: "high",
    mechanism:
      "Both increase serotonin activity; combining them can precipitate serotonin syndrome.",
    evidence:
      "MAOIs carry labeled contraindications or strong warnings against use with serotonergic opioids.",
  },
  {
    drug_a: "hydromorphone",
    drug_b: "promethazine",
    severity: "moderate",
    mechanism:
      "Both cause CNS depression; combined use increases sedation and, in vulnerable patients, respiratory depression risk.",
    evidence:
      "Product labeling for sedating antihistamines warns against combination with opioid analgesics.",
  },
  {
    drug_a: "hydromorphone",
    drug_b: "rizatriptan",
    severity: "high",
    mechanism:
      "Both increase serotonin activity, raising the risk of serotonin syndrome.",
    evidence:
      "Case reports and FDA labeling describe elevated serotonin syndrome risk with this combination.",
  },
  {
    drug_a: "hydromorphone",
    drug_b: "sertraline",
    severity: "high",
    mechanism:
      "Both increase serotonin activity, raising the risk of serotonin syndrome.",
    evidence:
      "Case reports and FDA labeling describe elevated serotonin syndrome risk with this combination.",
  },
  {
    drug_a: "hydromorphone",
    drug_b: "st_johns_wort",
    severity: "high",
    mechanism:
      "Both increase serotonin activity, raising the risk of serotonin syndrome.",
    evidence:
      "Case reports and FDA labeling describe elevated serotonin syndrome risk with this combination.",
  },
  {
    drug_a: "hydromorphone",
    drug_b: "sumatriptan",
    severity: "high",
    mechanism:
      "Both increase serotonin activity, raising the risk of serotonin syndrome.",
    evidence:
      "Case reports and FDA labeling describe elevated serotonin syndrome risk with this combination.",
  },
  {
    drug_a: "hydromorphone",
    drug_b: "temazepam",
    severity: "high",
    mechanism:
      "Both depress the central nervous system; combined use significantly raises the risk of profound sedation and fatal respiratory depression.",
    evidence:
      "FDA boxed warning covers concurrent opioid and benzodiazepine use.",
  },
  {
    drug_a: "hydromorphone",
    drug_b: "tizanidine",
    severity: "moderate",
    mechanism:
      "Both cause CNS depression; combined use increases sedation and fall risk, especially in older adults.",
    evidence:
      "Muscle relaxant labeling warns of additive sedation with opioids.",
  },
  {
    drug_a: "hydromorphone",
    drug_b: "tramadol",
    severity: "moderate",
    mechanism:
      "Combining two opioids adds to central nervous system and respiratory depression without clear added benefit.",
    evidence:
      "Prescribing guidance recommends against concurrent use of multiple opioid analgesics outside supervised rotation.",
  },
  {
    drug_a: "hydromorphone",
    drug_b: "tranylcypromine",
    severity: "high",
    mechanism:
      "Both increase serotonin activity; combining them can precipitate serotonin syndrome.",
    evidence:
      "MAOIs carry labeled contraindications or strong warnings against use with serotonergic opioids.",
  },
  {
    drug_a: "hydromorphone",
    drug_b: "venlafaxine",
    severity: "high",
    mechanism:
      "Both increase serotonin activity, raising the risk of serotonin syndrome.",
    evidence:
      "Case reports and FDA labeling describe elevated serotonin syndrome risk with this combination.",
  },
  {
    drug_a: "hydromorphone",
    drug_b: "zaleplon",
    severity: "high",
    mechanism:
      "Both depress the central nervous system; combined use significantly raises the risk of profound sedation and fatal respiratory depression.",
    evidence:
      "FDA boxed warning covers concurrent opioid and CNS depressant use, including non-benzodiazepine hypnotics.",
  },
  {
    drug_a: "hydromorphone",
    drug_b: "zolpidem",
    severity: "high",
    mechanism:
      "Both depress the central nervous system; combined use significantly raises the risk of profound sedation and fatal respiratory depression.",
    evidence:
      "FDA boxed warning covers concurrent opioid and CNS depressant use, including non-benzodiazepine hypnotics.",
  },
  {
    drug_a: "hydroxyzine",
    drug_b: "baclofen",
    severity: "moderate",
    mechanism:
      "Both cause CNS depression; combined use increases sedation and fall risk, especially in older adults.",
    evidence:
      "Product labeling warns of additive sedation between antihistamines and muscle relaxants.",
  },
  {
    drug_a: "hydroxyzine",
    drug_b: "carisoprodol",
    severity: "moderate",
    mechanism:
      "Both cause CNS depression; combined use increases sedation and fall risk, especially in older adults.",
    evidence:
      "Product labeling warns of additive sedation between antihistamines and muscle relaxants.",
  },
  {
    drug_a: "hydroxyzine",
    drug_b: "cyclobenzaprine",
    severity: "moderate",
    mechanism:
      "Both cause CNS depression; combined use increases sedation and fall risk, especially in older adults.",
    evidence:
      "Product labeling warns of additive sedation between antihistamines and muscle relaxants.",
  },
  {
    drug_a: "hydroxyzine",
    drug_b: "methocarbamol",
    severity: "moderate",
    mechanism:
      "Both cause CNS depression; combined use increases sedation and fall risk, especially in older adults.",
    evidence:
      "Product labeling warns of additive sedation between antihistamines and muscle relaxants.",
  },
  {
    drug_a: "hydroxyzine",
    drug_b: "tizanidine",
    severity: "moderate",
    mechanism:
      "Both cause CNS depression; combined use increases sedation and fall risk, especially in older adults.",
    evidence:
      "Product labeling warns of additive sedation between antihistamines and muscle relaxants.",
  },
  {
    drug_a: "ibuprofen",
    drug_b: "azilsartan",
    severity: "moderate",
    mechanism:
      "NSAIDs can reduce the antihypertensive effect of ARBs and impair renal function.",
    evidence:
      "Labeling for both drug classes notes reduced antihypertensive effect and renal risk with combined use.",
  },
  {
    drug_a: "ibuprofen",
    drug_b: "benazepril",
    severity: "moderate",
    mechanism:
      "NSAIDs can reduce the antihypertensive effect of ACE inhibitors and impair renal function.",
    evidence:
      "Labeling for both drug classes notes reduced antihypertensive effect and renal risk with combined use.",
  },
  {
    drug_a: "ibuprofen",
    drug_b: "budesonide",
    severity: "moderate",
    mechanism:
      "Both irritate the GI lining; combined use substantially increases risk of ulcers and GI bleeding.",
    evidence:
      "Guidelines recommend gastroprotection when NSAIDs and corticosteroids are combined.",
  },
  {
    drug_a: "ibuprofen",
    drug_b: "candesartan",
    severity: "moderate",
    mechanism:
      "NSAIDs can reduce the antihypertensive effect of ARBs and impair renal function.",
    evidence:
      "Labeling for both drug classes notes reduced antihypertensive effect and renal risk with combined use.",
  },
  {
    drug_a: "ibuprofen",
    drug_b: "desvenlafaxine",
    severity: "moderate",
    mechanism:
      "SSRIs combined with NSAIDs may increase risk of GI bleeding due to reduced platelet serotonin uptake.",
    evidence:
      "Observational studies link serotonergic antidepressant + NSAID combinations to higher GI bleeding rates.",
  },
  {
    drug_a: "ibuprofen",
    drug_b: "dipyridamole",
    severity: "moderate",
    mechanism:
      "NSAIDs may add to the antiplatelet effect and irritate the GI lining, raising bleeding risk.",
    evidence:
      "Cardiology guidance flags added GI bleeding risk when NSAIDs are combined with antiplatelet therapy.",
  },
  {
    drug_a: "ibuprofen",
    drug_b: "edoxaban",
    severity: "high",
    mechanism:
      "NSAIDs inhibit platelet aggregation and can displace anticoagulants from protein binding, increasing bleeding risk.",
    evidence:
      "Labeling for anticoagulants warns of increased bleeding risk with concurrent NSAID use.",
  },
  {
    drug_a: "ibuprofen",
    drug_b: "enoxaparin",
    severity: "high",
    mechanism:
      "NSAIDs inhibit platelet aggregation and can displace anticoagulants from protein binding, increasing bleeding risk.",
    evidence:
      "Labeling for anticoagulants warns of increased bleeding risk with concurrent NSAID use.",
  },
  {
    drug_a: "ibuprofen",
    drug_b: "fluticasone",
    severity: "moderate",
    mechanism:
      "Both irritate the GI lining; combined use substantially increases risk of ulcers and GI bleeding.",
    evidence:
      "Guidelines recommend gastroprotection when NSAIDs and corticosteroids are combined.",
  },
  {
    drug_a: "ibuprofen",
    drug_b: "fluvoxamine",
    severity: "moderate",
    mechanism:
      "SSRIs combined with NSAIDs may increase risk of GI bleeding due to reduced platelet serotonin uptake.",
    evidence:
      "Observational studies link SSRI + NSAID combinations to higher GI bleeding rates.",
  },
  {
    drug_a: "ibuprofen",
    drug_b: "fosinopril",
    severity: "moderate",
    mechanism:
      "NSAIDs can reduce the antihypertensive effect of ACE inhibitors and impair renal function.",
    evidence:
      "Labeling for both drug classes notes reduced antihypertensive effect and renal risk with combined use.",
  },
  {
    drug_a: "ibuprofen",
    drug_b: "hydrocortisone",
    severity: "moderate",
    mechanism:
      "Both irritate the GI lining; combined use substantially increases risk of ulcers and GI bleeding.",
    evidence:
      "Guidelines recommend gastroprotection when NSAIDs and corticosteroids are combined.",
  },
  {
    drug_a: "ibuprofen",
    drug_b: "levomilnacipran",
    severity: "moderate",
    mechanism:
      "SSRIs combined with NSAIDs may increase risk of GI bleeding due to reduced platelet serotonin uptake.",
    evidence:
      "Observational studies link serotonergic antidepressant + NSAID combinations to higher GI bleeding rates.",
  },
  {
    drug_a: "ibuprofen",
    drug_b: "nabumetone",
    severity: "low",
    mechanism:
      "Combining two NSAIDs adds to GI and renal risk without added therapeutic benefit.",
    evidence:
      "Guidelines recommend against routine combination of two NSAIDs.",
  },
  {
    drug_a: "ibuprofen",
    drug_b: "perindopril",
    severity: "moderate",
    mechanism:
      "NSAIDs can reduce the antihypertensive effect of ACE inhibitors and impair renal function.",
    evidence:
      "Labeling for both drug classes notes reduced antihypertensive effect and renal risk with combined use.",
  },
  {
    drug_a: "ibuprofen",
    drug_b: "piroxicam",
    severity: "low",
    mechanism:
      "Combining two NSAIDs adds to GI and renal risk without added therapeutic benefit.",
    evidence:
      "Guidelines recommend against routine combination of two NSAIDs.",
  },
  {
    drug_a: "ibuprofen",
    drug_b: "prasugrel",
    severity: "moderate",
    mechanism:
      "NSAIDs may add to the antiplatelet effect and irritate the GI lining, raising bleeding risk.",
    evidence:
      "Cardiology guidance flags added GI bleeding risk when NSAIDs are combined with antiplatelet therapy.",
  },
  {
    drug_a: "ibuprofen",
    drug_b: "quinapril",
    severity: "moderate",
    mechanism:
      "NSAIDs can reduce the antihypertensive effect of ACE inhibitors and impair renal function.",
    evidence:
      "Labeling for both drug classes notes reduced antihypertensive effect and renal risk with combined use.",
  },
  {
    drug_a: "ibuprofen",
    drug_b: "sulindac",
    severity: "low",
    mechanism:
      "Combining two NSAIDs adds to GI and renal risk without added therapeutic benefit.",
    evidence:
      "Guidelines recommend against routine combination of two NSAIDs.",
  },
  {
    drug_a: "ibuprofen",
    drug_b: "telmisartan",
    severity: "moderate",
    mechanism:
      "NSAIDs can reduce the antihypertensive effect of ARBs and impair renal function.",
    evidence:
      "Labeling for both drug classes notes reduced antihypertensive effect and renal risk with combined use.",
  },
  {
    drug_a: "ibuprofen",
    drug_b: "ticagrelor",
    severity: "moderate",
    mechanism:
      "NSAIDs may add to the antiplatelet effect and irritate the GI lining, raising bleeding risk.",
    evidence:
      "Cardiology guidance flags added GI bleeding risk when NSAIDs are combined with antiplatelet therapy.",
  },
  {
    drug_a: "ibuprofen",
    drug_b: "trandolapril",
    severity: "moderate",
    mechanism:
      "NSAIDs can reduce the antihypertensive effect of ACE inhibitors and impair renal function.",
    evidence:
      "Labeling for both drug classes notes reduced antihypertensive effect and renal risk with combined use.",
  },
  {
    drug_a: "ibuprofen",
    drug_b: "triamcinolone",
    severity: "moderate",
    mechanism:
      "Both irritate the GI lining; combined use substantially increases risk of ulcers and GI bleeding.",
    evidence:
      "Guidelines recommend gastroprotection when NSAIDs and corticosteroids are combined.",
  },
  {
    drug_a: "indomethacin",
    drug_b: "azilsartan",
    severity: "moderate",
    mechanism:
      "NSAIDs can reduce the antihypertensive effect of ARBs and impair renal function.",
    evidence:
      "Labeling for both drug classes notes reduced antihypertensive effect and renal risk with combined use.",
  },
  {
    drug_a: "indomethacin",
    drug_b: "benazepril",
    severity: "moderate",
    mechanism:
      "NSAIDs can reduce the antihypertensive effect of ACE inhibitors and impair renal function.",
    evidence:
      "Labeling for both drug classes notes reduced antihypertensive effect and renal risk with combined use.",
  },
  {
    drug_a: "indomethacin",
    drug_b: "budesonide",
    severity: "moderate",
    mechanism:
      "Both irritate the GI lining; combined use substantially increases risk of ulcers and GI bleeding.",
    evidence:
      "Guidelines recommend gastroprotection when NSAIDs and corticosteroids are combined.",
  },
  {
    drug_a: "indomethacin",
    drug_b: "candesartan",
    severity: "moderate",
    mechanism:
      "NSAIDs can reduce the antihypertensive effect of ARBs and impair renal function.",
    evidence:
      "Labeling for both drug classes notes reduced antihypertensive effect and renal risk with combined use.",
  },
  {
    drug_a: "indomethacin",
    drug_b: "desvenlafaxine",
    severity: "moderate",
    mechanism:
      "SSRIs combined with NSAIDs may increase risk of GI bleeding due to reduced platelet serotonin uptake.",
    evidence:
      "Observational studies link serotonergic antidepressant + NSAID combinations to higher GI bleeding rates.",
  },
  {
    drug_a: "indomethacin",
    drug_b: "dipyridamole",
    severity: "moderate",
    mechanism:
      "NSAIDs may add to the antiplatelet effect and irritate the GI lining, raising bleeding risk.",
    evidence:
      "Cardiology guidance flags added GI bleeding risk when NSAIDs are combined with antiplatelet therapy.",
  },
  {
    drug_a: "indomethacin",
    drug_b: "edoxaban",
    severity: "high",
    mechanism:
      "NSAIDs inhibit platelet aggregation and can displace anticoagulants from protein binding, increasing bleeding risk.",
    evidence:
      "Labeling for anticoagulants warns of increased bleeding risk with concurrent NSAID use.",
  },
  {
    drug_a: "indomethacin",
    drug_b: "enoxaparin",
    severity: "high",
    mechanism:
      "NSAIDs inhibit platelet aggregation and can displace anticoagulants from protein binding, increasing bleeding risk.",
    evidence:
      "Labeling for anticoagulants warns of increased bleeding risk with concurrent NSAID use.",
  },
  {
    drug_a: "indomethacin",
    drug_b: "fluticasone",
    severity: "moderate",
    mechanism:
      "Both irritate the GI lining; combined use substantially increases risk of ulcers and GI bleeding.",
    evidence:
      "Guidelines recommend gastroprotection when NSAIDs and corticosteroids are combined.",
  },
  {
    drug_a: "indomethacin",
    drug_b: "fluvoxamine",
    severity: "moderate",
    mechanism:
      "SSRIs combined with NSAIDs may increase risk of GI bleeding due to reduced platelet serotonin uptake.",
    evidence:
      "Observational studies link SSRI + NSAID combinations to higher GI bleeding rates.",
  },
  {
    drug_a: "indomethacin",
    drug_b: "fosinopril",
    severity: "moderate",
    mechanism:
      "NSAIDs can reduce the antihypertensive effect of ACE inhibitors and impair renal function.",
    evidence:
      "Labeling for both drug classes notes reduced antihypertensive effect and renal risk with combined use.",
  },
  {
    drug_a: "indomethacin",
    drug_b: "hydrocortisone",
    severity: "moderate",
    mechanism:
      "Both irritate the GI lining; combined use substantially increases risk of ulcers and GI bleeding.",
    evidence:
      "Guidelines recommend gastroprotection when NSAIDs and corticosteroids are combined.",
  },
  {
    drug_a: "indomethacin",
    drug_b: "levomilnacipran",
    severity: "moderate",
    mechanism:
      "SSRIs combined with NSAIDs may increase risk of GI bleeding due to reduced platelet serotonin uptake.",
    evidence:
      "Observational studies link serotonergic antidepressant + NSAID combinations to higher GI bleeding rates.",
  },
  {
    drug_a: "indomethacin",
    drug_b: "nabumetone",
    severity: "low",
    mechanism:
      "Combining two NSAIDs adds to GI and renal risk without added therapeutic benefit.",
    evidence:
      "Guidelines recommend against routine combination of two NSAIDs.",
  },
  {
    drug_a: "indomethacin",
    drug_b: "perindopril",
    severity: "moderate",
    mechanism:
      "NSAIDs can reduce the antihypertensive effect of ACE inhibitors and impair renal function.",
    evidence:
      "Labeling for both drug classes notes reduced antihypertensive effect and renal risk with combined use.",
  },
  {
    drug_a: "indomethacin",
    drug_b: "piroxicam",
    severity: "low",
    mechanism:
      "Combining two NSAIDs adds to GI and renal risk without added therapeutic benefit.",
    evidence:
      "Guidelines recommend against routine combination of two NSAIDs.",
  },
  {
    drug_a: "indomethacin",
    drug_b: "prasugrel",
    severity: "moderate",
    mechanism:
      "NSAIDs may add to the antiplatelet effect and irritate the GI lining, raising bleeding risk.",
    evidence:
      "Cardiology guidance flags added GI bleeding risk when NSAIDs are combined with antiplatelet therapy.",
  },
  {
    drug_a: "indomethacin",
    drug_b: "quinapril",
    severity: "moderate",
    mechanism:
      "NSAIDs can reduce the antihypertensive effect of ACE inhibitors and impair renal function.",
    evidence:
      "Labeling for both drug classes notes reduced antihypertensive effect and renal risk with combined use.",
  },
  {
    drug_a: "indomethacin",
    drug_b: "sulindac",
    severity: "low",
    mechanism:
      "Combining two NSAIDs adds to GI and renal risk without added therapeutic benefit.",
    evidence:
      "Guidelines recommend against routine combination of two NSAIDs.",
  },
  {
    drug_a: "indomethacin",
    drug_b: "telmisartan",
    severity: "moderate",
    mechanism:
      "NSAIDs can reduce the antihypertensive effect of ARBs and impair renal function.",
    evidence:
      "Labeling for both drug classes notes reduced antihypertensive effect and renal risk with combined use.",
  },
  {
    drug_a: "indomethacin",
    drug_b: "ticagrelor",
    severity: "moderate",
    mechanism:
      "NSAIDs may add to the antiplatelet effect and irritate the GI lining, raising bleeding risk.",
    evidence:
      "Cardiology guidance flags added GI bleeding risk when NSAIDs are combined with antiplatelet therapy.",
  },
  {
    drug_a: "indomethacin",
    drug_b: "trandolapril",
    severity: "moderate",
    mechanism:
      "NSAIDs can reduce the antihypertensive effect of ACE inhibitors and impair renal function.",
    evidence:
      "Labeling for both drug classes notes reduced antihypertensive effect and renal risk with combined use.",
  },
  {
    drug_a: "indomethacin",
    drug_b: "triamcinolone",
    severity: "moderate",
    mechanism:
      "Both irritate the GI lining; combined use substantially increases risk of ulcers and GI bleeding.",
    evidence:
      "Guidelines recommend gastroprotection when NSAIDs and corticosteroids are combined.",
  },
  {
    drug_a: "irbesartan",
    drug_b: "triamterene",
    severity: "moderate",
    mechanism:
      "Both raise serum potassium; combined use increases the risk of hyperkalemia.",
    evidence:
      "Labeling for potassium-sparing diuretics warns of hyperkalemia risk with ARBs.",
  },
  {
    drug_a: "itraconazole",
    drug_b: "alprazolam",
    severity: "moderate",
    mechanism:
      "Azole antifungals inhibit CYP3A4 metabolism of some benzodiazepines, increasing sedation.",
    evidence:
      "Benzodiazepine labeling notes elevated levels when combined with azole antifungals.",
  },
  {
    drug_a: "itraconazole",
    drug_b: "atorvastatin",
    severity: "high",
    mechanism:
      "Azole antifungals strongly inhibit CYP3A4 metabolism of many statins, raising statin levels and myopathy/rhabdomyolysis risk.",
    evidence:
      "Statin labeling warns against or limits dosing with strong CYP3A4 inhibitors like azole antifungals.",
  },
  {
    drug_a: "itraconazole",
    drug_b: "azathioprine",
    severity: "moderate",
    mechanism:
      "Azole antifungals inhibit CYP3A4 metabolism of calcineurin inhibitors, raising levels and toxicity risk.",
    evidence:
      "Transplant medicine guidance requires immunosuppressant level monitoring when azole antifungals are added.",
  },
  {
    drug_a: "itraconazole",
    drug_b: "chlordiazepoxide",
    severity: "moderate",
    mechanism:
      "Azole antifungals inhibit CYP3A4 metabolism of some benzodiazepines, increasing sedation.",
    evidence:
      "Benzodiazepine labeling notes elevated levels when combined with azole antifungals.",
  },
  {
    drug_a: "itraconazole",
    drug_b: "clonazepam",
    severity: "moderate",
    mechanism:
      "Azole antifungals inhibit CYP3A4 metabolism of some benzodiazepines, increasing sedation.",
    evidence:
      "Benzodiazepine labeling notes elevated levels when combined with azole antifungals.",
  },
  {
    drug_a: "itraconazole",
    drug_b: "clorazepate",
    severity: "moderate",
    mechanism:
      "Azole antifungals inhibit CYP3A4 metabolism of some benzodiazepines, increasing sedation.",
    evidence:
      "Benzodiazepine labeling notes elevated levels when combined with azole antifungals.",
  },
  {
    drug_a: "itraconazole",
    drug_b: "cyclosporine",
    severity: "moderate",
    mechanism:
      "Azole antifungals inhibit CYP3A4 metabolism of calcineurin inhibitors, raising levels and toxicity risk.",
    evidence:
      "Transplant medicine guidance requires immunosuppressant level monitoring when azole antifungals are added.",
  },
  {
    drug_a: "itraconazole",
    drug_b: "diazepam",
    severity: "moderate",
    mechanism:
      "Azole antifungals inhibit CYP3A4 metabolism of some benzodiazepines, increasing sedation.",
    evidence:
      "Benzodiazepine labeling notes elevated levels when combined with azole antifungals.",
  },
  {
    drug_a: "itraconazole",
    drug_b: "lorazepam",
    severity: "moderate",
    mechanism:
      "Azole antifungals inhibit CYP3A4 metabolism of some benzodiazepines, increasing sedation.",
    evidence:
      "Benzodiazepine labeling notes elevated levels when combined with azole antifungals.",
  },
  {
    drug_a: "itraconazole",
    drug_b: "lovastatin",
    severity: "high",
    mechanism:
      "Azole antifungals strongly inhibit CYP3A4 metabolism of many statins, raising statin levels and myopathy/rhabdomyolysis risk.",
    evidence:
      "Statin labeling warns against or limits dosing with strong CYP3A4 inhibitors like azole antifungals.",
  },
  {
    drug_a: "itraconazole",
    drug_b: "methotrexate",
    severity: "moderate",
    mechanism:
      "Azole antifungals inhibit CYP3A4 metabolism of calcineurin inhibitors, raising levels and toxicity risk.",
    evidence:
      "Transplant medicine guidance requires immunosuppressant level monitoring when azole antifungals are added.",
  },
  {
    drug_a: "itraconazole",
    drug_b: "midazolam",
    severity: "moderate",
    mechanism:
      "Azole antifungals inhibit CYP3A4 metabolism of some benzodiazepines, increasing sedation.",
    evidence:
      "Benzodiazepine labeling notes elevated levels when combined with azole antifungals.",
  },
  {
    drug_a: "itraconazole",
    drug_b: "mycophenolate",
    severity: "moderate",
    mechanism:
      "Azole antifungals inhibit CYP3A4 metabolism of calcineurin inhibitors, raising levels and toxicity risk.",
    evidence:
      "Transplant medicine guidance requires immunosuppressant level monitoring when azole antifungals are added.",
  },
  {
    drug_a: "itraconazole",
    drug_b: "oxazepam",
    severity: "moderate",
    mechanism:
      "Azole antifungals inhibit CYP3A4 metabolism of some benzodiazepines, increasing sedation.",
    evidence:
      "Benzodiazepine labeling notes elevated levels when combined with azole antifungals.",
  },
  {
    drug_a: "itraconazole",
    drug_b: "sildenafil",
    severity: "moderate",
    mechanism:
      "Azole antifungals inhibit CYP3A4 metabolism of PDE5 inhibitors, raising levels and hypotension risk.",
    evidence:
      "PDE5 inhibitor labeling recommends dose limits when combined with azole antifungals.",
  },
  {
    drug_a: "itraconazole",
    drug_b: "simvastatin",
    severity: "high",
    mechanism:
      "Azole antifungals strongly inhibit CYP3A4 metabolism of many statins, raising statin levels and myopathy/rhabdomyolysis risk.",
    evidence:
      "Statin labeling warns against or limits dosing with strong CYP3A4 inhibitors like azole antifungals.",
  },
  {
    drug_a: "itraconazole",
    drug_b: "tacrolimus",
    severity: "moderate",
    mechanism:
      "Azole antifungals inhibit CYP3A4 metabolism of calcineurin inhibitors, raising levels and toxicity risk.",
    evidence:
      "Transplant medicine guidance requires immunosuppressant level monitoring when azole antifungals are added.",
  },
  {
    drug_a: "itraconazole",
    drug_b: "tadalafil",
    severity: "moderate",
    mechanism:
      "Azole antifungals inhibit CYP3A4 metabolism of PDE5 inhibitors, raising levels and hypotension risk.",
    evidence:
      "PDE5 inhibitor labeling recommends dose limits when combined with azole antifungals.",
  },
  {
    drug_a: "itraconazole",
    drug_b: "temazepam",
    severity: "moderate",
    mechanism:
      "Azole antifungals inhibit CYP3A4 metabolism of some benzodiazepines, increasing sedation.",
    evidence:
      "Benzodiazepine labeling notes elevated levels when combined with azole antifungals.",
  },
  {
    drug_a: "itraconazole",
    drug_b: "vardenafil",
    severity: "moderate",
    mechanism:
      "Azole antifungals inhibit CYP3A4 metabolism of PDE5 inhibitors, raising levels and hypotension risk.",
    evidence:
      "PDE5 inhibitor labeling recommends dose limits when combined with azole antifungals.",
  },
  {
    drug_a: "ketoconazole",
    drug_b: "alprazolam",
    severity: "moderate",
    mechanism:
      "Azole antifungals inhibit CYP3A4 metabolism of some benzodiazepines, increasing sedation.",
    evidence:
      "Benzodiazepine labeling notes elevated levels when combined with azole antifungals.",
  },
  {
    drug_a: "ketoconazole",
    drug_b: "atorvastatin",
    severity: "high",
    mechanism:
      "Azole antifungals strongly inhibit CYP3A4 metabolism of many statins, raising statin levels and myopathy/rhabdomyolysis risk.",
    evidence:
      "Statin labeling warns against or limits dosing with strong CYP3A4 inhibitors like azole antifungals.",
  },
  {
    drug_a: "ketoconazole",
    drug_b: "azathioprine",
    severity: "moderate",
    mechanism:
      "Azole antifungals inhibit CYP3A4 metabolism of calcineurin inhibitors, raising levels and toxicity risk.",
    evidence:
      "Transplant medicine guidance requires immunosuppressant level monitoring when azole antifungals are added.",
  },
  {
    drug_a: "ketoconazole",
    drug_b: "chlordiazepoxide",
    severity: "moderate",
    mechanism:
      "Azole antifungals inhibit CYP3A4 metabolism of some benzodiazepines, increasing sedation.",
    evidence:
      "Benzodiazepine labeling notes elevated levels when combined with azole antifungals.",
  },
  {
    drug_a: "ketoconazole",
    drug_b: "clonazepam",
    severity: "moderate",
    mechanism:
      "Azole antifungals inhibit CYP3A4 metabolism of some benzodiazepines, increasing sedation.",
    evidence:
      "Benzodiazepine labeling notes elevated levels when combined with azole antifungals.",
  },
  {
    drug_a: "ketoconazole",
    drug_b: "clorazepate",
    severity: "moderate",
    mechanism:
      "Azole antifungals inhibit CYP3A4 metabolism of some benzodiazepines, increasing sedation.",
    evidence:
      "Benzodiazepine labeling notes elevated levels when combined with azole antifungals.",
  },
  {
    drug_a: "ketoconazole",
    drug_b: "cyclosporine",
    severity: "moderate",
    mechanism:
      "Azole antifungals inhibit CYP3A4 metabolism of calcineurin inhibitors, raising levels and toxicity risk.",
    evidence:
      "Transplant medicine guidance requires immunosuppressant level monitoring when azole antifungals are added.",
  },
  {
    drug_a: "ketoconazole",
    drug_b: "diazepam",
    severity: "moderate",
    mechanism:
      "Azole antifungals inhibit CYP3A4 metabolism of some benzodiazepines, increasing sedation.",
    evidence:
      "Benzodiazepine labeling notes elevated levels when combined with azole antifungals.",
  },
  {
    drug_a: "ketoconazole",
    drug_b: "lorazepam",
    severity: "moderate",
    mechanism:
      "Azole antifungals inhibit CYP3A4 metabolism of some benzodiazepines, increasing sedation.",
    evidence:
      "Benzodiazepine labeling notes elevated levels when combined with azole antifungals.",
  },
  {
    drug_a: "ketoconazole",
    drug_b: "lovastatin",
    severity: "high",
    mechanism:
      "Azole antifungals strongly inhibit CYP3A4 metabolism of many statins, raising statin levels and myopathy/rhabdomyolysis risk.",
    evidence:
      "Statin labeling warns against or limits dosing with strong CYP3A4 inhibitors like azole antifungals.",
  },
  {
    drug_a: "ketoconazole",
    drug_b: "methotrexate",
    severity: "moderate",
    mechanism:
      "Azole antifungals inhibit CYP3A4 metabolism of calcineurin inhibitors, raising levels and toxicity risk.",
    evidence:
      "Transplant medicine guidance requires immunosuppressant level monitoring when azole antifungals are added.",
  },
  {
    drug_a: "ketoconazole",
    drug_b: "midazolam",
    severity: "moderate",
    mechanism:
      "Azole antifungals inhibit CYP3A4 metabolism of some benzodiazepines, increasing sedation.",
    evidence:
      "Benzodiazepine labeling notes elevated levels when combined with azole antifungals.",
  },
  {
    drug_a: "ketoconazole",
    drug_b: "mycophenolate",
    severity: "moderate",
    mechanism:
      "Azole antifungals inhibit CYP3A4 metabolism of calcineurin inhibitors, raising levels and toxicity risk.",
    evidence:
      "Transplant medicine guidance requires immunosuppressant level monitoring when azole antifungals are added.",
  },
  {
    drug_a: "ketoconazole",
    drug_b: "oxazepam",
    severity: "moderate",
    mechanism:
      "Azole antifungals inhibit CYP3A4 metabolism of some benzodiazepines, increasing sedation.",
    evidence:
      "Benzodiazepine labeling notes elevated levels when combined with azole antifungals.",
  },
  {
    drug_a: "ketoconazole",
    drug_b: "sildenafil",
    severity: "moderate",
    mechanism:
      "Azole antifungals inhibit CYP3A4 metabolism of PDE5 inhibitors, raising levels and hypotension risk.",
    evidence:
      "PDE5 inhibitor labeling recommends dose limits when combined with azole antifungals.",
  },
  {
    drug_a: "ketoconazole",
    drug_b: "simvastatin",
    severity: "high",
    mechanism:
      "Azole antifungals strongly inhibit CYP3A4 metabolism of many statins, raising statin levels and myopathy/rhabdomyolysis risk.",
    evidence:
      "Statin labeling warns against or limits dosing with strong CYP3A4 inhibitors like azole antifungals.",
  },
  {
    drug_a: "ketoconazole",
    drug_b: "tacrolimus",
    severity: "moderate",
    mechanism:
      "Azole antifungals inhibit CYP3A4 metabolism of calcineurin inhibitors, raising levels and toxicity risk.",
    evidence:
      "Transplant medicine guidance requires immunosuppressant level monitoring when azole antifungals are added.",
  },
  {
    drug_a: "ketoconazole",
    drug_b: "tadalafil",
    severity: "moderate",
    mechanism:
      "Azole antifungals inhibit CYP3A4 metabolism of PDE5 inhibitors, raising levels and hypotension risk.",
    evidence:
      "PDE5 inhibitor labeling recommends dose limits when combined with azole antifungals.",
  },
  {
    drug_a: "ketoconazole",
    drug_b: "temazepam",
    severity: "moderate",
    mechanism:
      "Azole antifungals inhibit CYP3A4 metabolism of some benzodiazepines, increasing sedation.",
    evidence:
      "Benzodiazepine labeling notes elevated levels when combined with azole antifungals.",
  },
  {
    drug_a: "ketoconazole",
    drug_b: "vardenafil",
    severity: "moderate",
    mechanism:
      "Azole antifungals inhibit CYP3A4 metabolism of PDE5 inhibitors, raising levels and hypotension risk.",
    evidence:
      "PDE5 inhibitor labeling recommends dose limits when combined with azole antifungals.",
  },
  {
    drug_a: "ketorolac",
    drug_b: "azilsartan",
    severity: "moderate",
    mechanism:
      "NSAIDs can reduce the antihypertensive effect of ARBs and impair renal function.",
    evidence:
      "Labeling for both drug classes notes reduced antihypertensive effect and renal risk with combined use.",
  },
  {
    drug_a: "ketorolac",
    drug_b: "benazepril",
    severity: "moderate",
    mechanism:
      "NSAIDs can reduce the antihypertensive effect of ACE inhibitors and impair renal function.",
    evidence:
      "Labeling for both drug classes notes reduced antihypertensive effect and renal risk with combined use.",
  },
  {
    drug_a: "ketorolac",
    drug_b: "budesonide",
    severity: "moderate",
    mechanism:
      "Both irritate the GI lining; combined use substantially increases risk of ulcers and GI bleeding.",
    evidence:
      "Guidelines recommend gastroprotection when NSAIDs and corticosteroids are combined.",
  },
  {
    drug_a: "ketorolac",
    drug_b: "candesartan",
    severity: "moderate",
    mechanism:
      "NSAIDs can reduce the antihypertensive effect of ARBs and impair renal function.",
    evidence:
      "Labeling for both drug classes notes reduced antihypertensive effect and renal risk with combined use.",
  },
  {
    drug_a: "ketorolac",
    drug_b: "desvenlafaxine",
    severity: "moderate",
    mechanism:
      "SSRIs combined with NSAIDs may increase risk of GI bleeding due to reduced platelet serotonin uptake.",
    evidence:
      "Observational studies link serotonergic antidepressant + NSAID combinations to higher GI bleeding rates.",
  },
  {
    drug_a: "ketorolac",
    drug_b: "dipyridamole",
    severity: "moderate",
    mechanism:
      "NSAIDs may add to the antiplatelet effect and irritate the GI lining, raising bleeding risk.",
    evidence:
      "Cardiology guidance flags added GI bleeding risk when NSAIDs are combined with antiplatelet therapy.",
  },
  {
    drug_a: "ketorolac",
    drug_b: "edoxaban",
    severity: "high",
    mechanism:
      "NSAIDs inhibit platelet aggregation and can displace anticoagulants from protein binding, increasing bleeding risk.",
    evidence:
      "Labeling for anticoagulants warns of increased bleeding risk with concurrent NSAID use.",
  },
  {
    drug_a: "ketorolac",
    drug_b: "enoxaparin",
    severity: "high",
    mechanism:
      "NSAIDs inhibit platelet aggregation and can displace anticoagulants from protein binding, increasing bleeding risk.",
    evidence:
      "Labeling for anticoagulants warns of increased bleeding risk with concurrent NSAID use.",
  },
  {
    drug_a: "ketorolac",
    drug_b: "fluticasone",
    severity: "moderate",
    mechanism:
      "Both irritate the GI lining; combined use substantially increases risk of ulcers and GI bleeding.",
    evidence:
      "Guidelines recommend gastroprotection when NSAIDs and corticosteroids are combined.",
  },
  {
    drug_a: "ketorolac",
    drug_b: "fluvoxamine",
    severity: "moderate",
    mechanism:
      "SSRIs combined with NSAIDs may increase risk of GI bleeding due to reduced platelet serotonin uptake.",
    evidence:
      "Observational studies link SSRI + NSAID combinations to higher GI bleeding rates.",
  },
  {
    drug_a: "ketorolac",
    drug_b: "fosinopril",
    severity: "moderate",
    mechanism:
      "NSAIDs can reduce the antihypertensive effect of ACE inhibitors and impair renal function.",
    evidence:
      "Labeling for both drug classes notes reduced antihypertensive effect and renal risk with combined use.",
  },
  {
    drug_a: "ketorolac",
    drug_b: "hydrocortisone",
    severity: "moderate",
    mechanism:
      "Both irritate the GI lining; combined use substantially increases risk of ulcers and GI bleeding.",
    evidence:
      "Guidelines recommend gastroprotection when NSAIDs and corticosteroids are combined.",
  },
  {
    drug_a: "ketorolac",
    drug_b: "levomilnacipran",
    severity: "moderate",
    mechanism:
      "SSRIs combined with NSAIDs may increase risk of GI bleeding due to reduced platelet serotonin uptake.",
    evidence:
      "Observational studies link serotonergic antidepressant + NSAID combinations to higher GI bleeding rates.",
  },
  {
    drug_a: "ketorolac",
    drug_b: "nabumetone",
    severity: "low",
    mechanism:
      "Combining two NSAIDs adds to GI and renal risk without added therapeutic benefit.",
    evidence:
      "Guidelines recommend against routine combination of two NSAIDs.",
  },
  {
    drug_a: "ketorolac",
    drug_b: "perindopril",
    severity: "moderate",
    mechanism:
      "NSAIDs can reduce the antihypertensive effect of ACE inhibitors and impair renal function.",
    evidence:
      "Labeling for both drug classes notes reduced antihypertensive effect and renal risk with combined use.",
  },
  {
    drug_a: "ketorolac",
    drug_b: "piroxicam",
    severity: "low",
    mechanism:
      "Combining two NSAIDs adds to GI and renal risk without added therapeutic benefit.",
    evidence:
      "Guidelines recommend against routine combination of two NSAIDs.",
  },
  {
    drug_a: "ketorolac",
    drug_b: "prasugrel",
    severity: "moderate",
    mechanism:
      "NSAIDs may add to the antiplatelet effect and irritate the GI lining, raising bleeding risk.",
    evidence:
      "Cardiology guidance flags added GI bleeding risk when NSAIDs are combined with antiplatelet therapy.",
  },
  {
    drug_a: "ketorolac",
    drug_b: "quinapril",
    severity: "moderate",
    mechanism:
      "NSAIDs can reduce the antihypertensive effect of ACE inhibitors and impair renal function.",
    evidence:
      "Labeling for both drug classes notes reduced antihypertensive effect and renal risk with combined use.",
  },
  {
    drug_a: "ketorolac",
    drug_b: "sulindac",
    severity: "low",
    mechanism:
      "Combining two NSAIDs adds to GI and renal risk without added therapeutic benefit.",
    evidence:
      "Guidelines recommend against routine combination of two NSAIDs.",
  },
  {
    drug_a: "ketorolac",
    drug_b: "telmisartan",
    severity: "moderate",
    mechanism:
      "NSAIDs can reduce the antihypertensive effect of ARBs and impair renal function.",
    evidence:
      "Labeling for both drug classes notes reduced antihypertensive effect and renal risk with combined use.",
  },
  {
    drug_a: "ketorolac",
    drug_b: "ticagrelor",
    severity: "moderate",
    mechanism:
      "NSAIDs may add to the antiplatelet effect and irritate the GI lining, raising bleeding risk.",
    evidence:
      "Cardiology guidance flags added GI bleeding risk when NSAIDs are combined with antiplatelet therapy.",
  },
  {
    drug_a: "ketorolac",
    drug_b: "trandolapril",
    severity: "moderate",
    mechanism:
      "NSAIDs can reduce the antihypertensive effect of ACE inhibitors and impair renal function.",
    evidence:
      "Labeling for both drug classes notes reduced antihypertensive effect and renal risk with combined use.",
  },
  {
    drug_a: "ketorolac",
    drug_b: "triamcinolone",
    severity: "moderate",
    mechanism:
      "Both irritate the GI lining; combined use substantially increases risk of ulcers and GI bleeding.",
    evidence:
      "Guidelines recommend gastroprotection when NSAIDs and corticosteroids are combined.",
  },
  {
    drug_a: "labetalol",
    drug_b: "canagliflozin",
    severity: "low",
    mechanism:
      "Beta blockers can mask the warning signs of hypoglycemia such as tremor and rapid heartbeat.",
    evidence:
      "Diabetes management guidance notes blunted hypoglycemia awareness with beta blocker use.",
  },
  {
    drug_a: "labetalol",
    drug_b: "dapagliflozin",
    severity: "low",
    mechanism:
      "Beta blockers can mask the warning signs of hypoglycemia such as tremor and rapid heartbeat.",
    evidence:
      "Diabetes management guidance notes blunted hypoglycemia awareness with beta blocker use.",
  },
  {
    drug_a: "labetalol",
    drug_b: "diltiazem",
    severity: "moderate",
    mechanism:
      "Both slow cardiac conduction; combined use can cause excessive bradycardia or heart block.",
    evidence:
      "Cardiology guidance recommends caution combining beta blockers with non-dihydropyridine calcium channel blockers.",
  },
  {
    drug_a: "labetalol",
    drug_b: "dulaglutide",
    severity: "low",
    mechanism:
      "Beta blockers can mask the warning signs of hypoglycemia such as tremor and rapid heartbeat.",
    evidence:
      "Diabetes management guidance notes blunted hypoglycemia awareness with beta blocker use.",
  },
  {
    drug_a: "labetalol",
    drug_b: "empagliflozin",
    severity: "low",
    mechanism:
      "Beta blockers can mask the warning signs of hypoglycemia such as tremor and rapid heartbeat.",
    evidence:
      "Diabetes management guidance notes blunted hypoglycemia awareness with beta blocker use.",
  },
  {
    drug_a: "labetalol",
    drug_b: "glimepiride",
    severity: "low",
    mechanism:
      "Beta blockers can mask the warning signs of hypoglycemia such as tremor and rapid heartbeat.",
    evidence:
      "Diabetes management guidance notes blunted hypoglycemia awareness with beta blocker use.",
  },
  {
    drug_a: "labetalol",
    drug_b: "glipizide",
    severity: "low",
    mechanism:
      "Beta blockers can mask the warning signs of hypoglycemia such as tremor and rapid heartbeat.",
    evidence:
      "Diabetes management guidance notes blunted hypoglycemia awareness with beta blocker use.",
  },
  {
    drug_a: "labetalol",
    drug_b: "glyburide",
    severity: "low",
    mechanism:
      "Beta blockers can mask the warning signs of hypoglycemia such as tremor and rapid heartbeat.",
    evidence:
      "Diabetes management guidance notes blunted hypoglycemia awareness with beta blocker use.",
  },
  {
    drug_a: "labetalol",
    drug_b: "insulin_aspart",
    severity: "low",
    mechanism:
      "Beta blockers can mask the warning signs of hypoglycemia such as tremor and rapid heartbeat.",
    evidence:
      "Diabetes management guidance notes blunted hypoglycemia awareness with beta blocker use.",
  },
  {
    drug_a: "labetalol",
    drug_b: "insulin_glargine",
    severity: "low",
    mechanism:
      "Beta blockers can mask the warning signs of hypoglycemia such as tremor and rapid heartbeat.",
    evidence:
      "Diabetes management guidance notes blunted hypoglycemia awareness with beta blocker use.",
  },
  {
    drug_a: "labetalol",
    drug_b: "insulin_lispro",
    severity: "low",
    mechanism:
      "Beta blockers can mask the warning signs of hypoglycemia such as tremor and rapid heartbeat.",
    evidence:
      "Diabetes management guidance notes blunted hypoglycemia awareness with beta blocker use.",
  },
  {
    drug_a: "labetalol",
    drug_b: "linagliptin",
    severity: "low",
    mechanism:
      "Beta blockers can mask the warning signs of hypoglycemia such as tremor and rapid heartbeat.",
    evidence:
      "Diabetes management guidance notes blunted hypoglycemia awareness with beta blocker use.",
  },
  {
    drug_a: "labetalol",
    drug_b: "liraglutide",
    severity: "low",
    mechanism:
      "Beta blockers can mask the warning signs of hypoglycemia such as tremor and rapid heartbeat.",
    evidence:
      "Diabetes management guidance notes blunted hypoglycemia awareness with beta blocker use.",
  },
  {
    drug_a: "labetalol",
    drug_b: "metformin",
    severity: "low",
    mechanism:
      "Beta blockers can mask the warning signs of hypoglycemia such as tremor and rapid heartbeat.",
    evidence:
      "Diabetes management guidance notes blunted hypoglycemia awareness with beta blocker use.",
  },
  {
    drug_a: "labetalol",
    drug_b: "metoprolol",
    severity: "low",
    mechanism:
      "Combining two beta blockers adds to heart-rate-lowering effects without added benefit.",
    evidence:
      "Guidelines recommend against routine combination of two beta blockers.",
  },
  {
    drug_a: "labetalol",
    drug_b: "nadolol",
    severity: "low",
    mechanism:
      "Combining two beta blockers adds to heart-rate-lowering effects without added benefit.",
    evidence:
      "Guidelines recommend against routine combination of two beta blockers.",
  },
  {
    drug_a: "labetalol",
    drug_b: "nebivolol",
    severity: "low",
    mechanism:
      "Combining two beta blockers adds to heart-rate-lowering effects without added benefit.",
    evidence:
      "Guidelines recommend against routine combination of two beta blockers.",
  },
  {
    drug_a: "labetalol",
    drug_b: "pioglitazone",
    severity: "low",
    mechanism:
      "Beta blockers can mask the warning signs of hypoglycemia such as tremor and rapid heartbeat.",
    evidence:
      "Diabetes management guidance notes blunted hypoglycemia awareness with beta blocker use.",
  },
  {
    drug_a: "labetalol",
    drug_b: "propranolol",
    severity: "low",
    mechanism:
      "Combining two beta blockers adds to heart-rate-lowering effects without added benefit.",
    evidence:
      "Guidelines recommend against routine combination of two beta blockers.",
  },
  {
    drug_a: "labetalol",
    drug_b: "saxagliptin",
    severity: "low",
    mechanism:
      "Beta blockers can mask the warning signs of hypoglycemia such as tremor and rapid heartbeat.",
    evidence:
      "Diabetes management guidance notes blunted hypoglycemia awareness with beta blocker use.",
  },
  {
    drug_a: "labetalol",
    drug_b: "semaglutide",
    severity: "low",
    mechanism:
      "Beta blockers can mask the warning signs of hypoglycemia such as tremor and rapid heartbeat.",
    evidence:
      "Diabetes management guidance notes blunted hypoglycemia awareness with beta blocker use.",
  },
  {
    drug_a: "labetalol",
    drug_b: "sitagliptin",
    severity: "low",
    mechanism:
      "Beta blockers can mask the warning signs of hypoglycemia such as tremor and rapid heartbeat.",
    evidence:
      "Diabetes management guidance notes blunted hypoglycemia awareness with beta blocker use.",
  },
  {
    drug_a: "labetalol",
    drug_b: "sotalol",
    severity: "low",
    mechanism:
      "Combining two beta blockers adds to heart-rate-lowering effects without added benefit.",
    evidence:
      "Guidelines recommend against routine combination of two beta blockers.",
  },
  {
    drug_a: "labetalol",
    drug_b: "verapamil",
    severity: "moderate",
    mechanism:
      "Both slow cardiac conduction; combined use can cause excessive bradycardia or heart block.",
    evidence:
      "Cardiology guidance recommends caution combining beta blockers with non-dihydropyridine calcium channel blockers.",
  },
  {
    drug_a: "lansoprazole",
    drug_b: "fluconazole",
    severity: "moderate",
    mechanism:
      "Reduced gastric acidity from PPIs can impair absorption of azole antifungals that require an acidic environment.",
    evidence:
      "Antifungal labeling notes reduced bioavailability with concurrent acid-suppressing therapy.",
  },
  {
    drug_a: "lansoprazole",
    drug_b: "itraconazole",
    severity: "moderate",
    mechanism:
      "Reduced gastric acidity from PPIs can impair absorption of azole antifungals that require an acidic environment.",
    evidence:
      "Antifungal labeling notes reduced bioavailability with concurrent acid-suppressing therapy.",
  },
  {
    drug_a: "lansoprazole",
    drug_b: "ketoconazole",
    severity: "moderate",
    mechanism:
      "Reduced gastric acidity from PPIs can impair absorption of azole antifungals that require an acidic environment.",
    evidence:
      "Antifungal labeling notes reduced bioavailability with concurrent acid-suppressing therapy.",
  },
  {
    drug_a: "lansoprazole",
    drug_b: "liothyronine",
    severity: "low",
    mechanism:
      "Reduced gastric acidity from PPIs may impair levothyroxine absorption.",
    evidence:
      "Endocrinology guidance recommends separating dosing times and monitoring thyroid levels.",
  },
  {
    drug_a: "levofloxacin",
    drug_b: "methadone",
    severity: "moderate",
    mechanism:
      "Both prolong the QT interval; combined use raises the risk of dangerous arrhythmia.",
    evidence:
      "Drug-induced long QT reference lists flag this combination.",
  },
  {
    drug_a: "levofloxacin",
    drug_b: "moxifloxacin",
    severity: "moderate",
    mechanism:
      "Both prolong the QT interval; combined use raises the risk of dangerous arrhythmia.",
    evidence:
      "Drug-induced long QT reference lists flag this combination.",
  },
  {
    drug_a: "levofloxacin",
    drug_b: "ondansetron",
    severity: "moderate",
    mechanism:
      "Both prolong the QT interval; combined use raises the risk of dangerous arrhythmia.",
    evidence:
      "Drug-induced long QT reference lists flag this combination.",
  },
  {
    drug_a: "levofloxacin",
    drug_b: "ziprasidone",
    severity: "moderate",
    mechanism:
      "Both prolong the QT interval; combined use raises the risk of dangerous arrhythmia.",
    evidence:
      "Drug-induced long QT reference lists flag this combination.",
  },
  {
    drug_a: "lisdexamfetamine",
    drug_b: "citalopram",
    severity: "low",
    mechanism:
      "Both can raise blood pressure and heart rate; combined use warrants monitoring though serious interaction is uncommon.",
    evidence:
      "Prescribing references note additive cardiovascular effects with modest clinical significance.",
  },
  {
    drug_a: "lisdexamfetamine",
    drug_b: "escitalopram",
    severity: "low",
    mechanism:
      "Both can raise blood pressure and heart rate; combined use warrants monitoring though serious interaction is uncommon.",
    evidence:
      "Prescribing references note additive cardiovascular effects with modest clinical significance.",
  },
  {
    drug_a: "lisdexamfetamine",
    drug_b: "fluoxetine",
    severity: "low",
    mechanism:
      "Both can raise blood pressure and heart rate; combined use warrants monitoring though serious interaction is uncommon.",
    evidence:
      "Prescribing references note additive cardiovascular effects with modest clinical significance.",
  },
  {
    drug_a: "lisdexamfetamine",
    drug_b: "fluvoxamine",
    severity: "low",
    mechanism:
      "Both can raise blood pressure and heart rate; combined use warrants monitoring though serious interaction is uncommon.",
    evidence:
      "Prescribing references note additive cardiovascular effects with modest clinical significance.",
  },
  {
    drug_a: "lisdexamfetamine",
    drug_b: "paroxetine",
    severity: "low",
    mechanism:
      "Both can raise blood pressure and heart rate; combined use warrants monitoring though serious interaction is uncommon.",
    evidence:
      "Prescribing references note additive cardiovascular effects with modest clinical significance.",
  },
  {
    drug_a: "lisdexamfetamine",
    drug_b: "sertraline",
    severity: "low",
    mechanism:
      "Both can raise blood pressure and heart rate; combined use warrants monitoring though serious interaction is uncommon.",
    evidence:
      "Prescribing references note additive cardiovascular effects with modest clinical significance.",
  },
  {
    drug_a: "lisinopril",
    drug_b: "azilsartan",
    severity: "moderate",
    mechanism:
      "Dual blockade of the renin-angiotensin system can increase risk of hyperkalemia and hypotension.",
    evidence:
      "Guidelines generally recommend against combining ACE inhibitors and ARBs.",
  },
  {
    drug_a: "lisinopril",
    drug_b: "candesartan",
    severity: "moderate",
    mechanism:
      "Dual blockade of the renin-angiotensin system can increase risk of hyperkalemia and hypotension.",
    evidence:
      "Guidelines generally recommend against combining ACE inhibitors and ARBs.",
  },
  {
    drug_a: "lisinopril",
    drug_b: "telmisartan",
    severity: "moderate",
    mechanism:
      "Dual blockade of the renin-angiotensin system can increase risk of hyperkalemia and hypotension.",
    evidence:
      "Guidelines generally recommend against combining ACE inhibitors and ARBs.",
  },
  {
    drug_a: "lisinopril",
    drug_b: "triamterene",
    severity: "moderate",
    mechanism:
      "Both raise serum potassium; combined use increases the risk of hyperkalemia.",
    evidence:
      "Labeling for potassium-sparing diuretics warns of hyperkalemia risk with ACE inhibitors.",
  },
  {
    drug_a: "lorazepam",
    drug_b: "baclofen",
    severity: "moderate",
    mechanism:
      "Both cause CNS depression; combined use increases sedation and fall risk, especially in older adults.",
    evidence:
      "Muscle relaxant labeling warns of additive sedation with benzodiazepines.",
  },
  {
    drug_a: "lorazepam",
    drug_b: "carisoprodol",
    severity: "moderate",
    mechanism:
      "Both cause CNS depression; combined use increases sedation and fall risk, especially in older adults.",
    evidence:
      "Muscle relaxant labeling warns of additive sedation with benzodiazepines.",
  },
  {
    drug_a: "lorazepam",
    drug_b: "hydroxyzine",
    severity: "moderate",
    mechanism:
      "Both cause CNS depression; combined use increases sedation and impairs alertness.",
    evidence:
      "Antihistamine labeling warns of additive sedation with benzodiazepines.",
  },
  {
    drug_a: "lorazepam",
    drug_b: "methocarbamol",
    severity: "moderate",
    mechanism:
      "Both cause CNS depression; combined use increases sedation and fall risk, especially in older adults.",
    evidence:
      "Muscle relaxant labeling warns of additive sedation with benzodiazepines.",
  },
  {
    drug_a: "lorazepam",
    drug_b: "midazolam",
    severity: "moderate",
    mechanism:
      "Additive central nervous system depression from combining two benzodiazepines.",
    evidence:
      "Clinical guidance advises against routinely combining two benzodiazepines.",
  },
  {
    drug_a: "lorazepam",
    drug_b: "oxazepam",
    severity: "moderate",
    mechanism:
      "Additive central nervous system depression from combining two benzodiazepines.",
    evidence:
      "Clinical guidance advises against routinely combining two benzodiazepines.",
  },
  {
    drug_a: "lorazepam",
    drug_b: "promethazine",
    severity: "moderate",
    mechanism:
      "Both cause CNS depression; combined use increases sedation and impairs alertness.",
    evidence:
      "Antihistamine labeling warns of additive sedation with benzodiazepines.",
  },
  {
    drug_a: "lorazepam",
    drug_b: "ramelteon",
    severity: "moderate",
    mechanism:
      "Additive CNS depression between benzodiazepines and other sedative-hypnotics increases sedation and fall risk.",
    evidence:
      "Sedative-hypnotic labeling warns against combination with benzodiazepines.",
  },
  {
    drug_a: "lorazepam",
    drug_b: "suvorexant",
    severity: "moderate",
    mechanism:
      "Additive CNS depression between benzodiazepines and other sedative-hypnotics increases sedation and fall risk.",
    evidence:
      "Sedative-hypnotic labeling warns against combination with benzodiazepines.",
  },
  {
    drug_a: "lorazepam",
    drug_b: "tizanidine",
    severity: "moderate",
    mechanism:
      "Both cause CNS depression; combined use increases sedation and fall risk, especially in older adults.",
    evidence:
      "Muscle relaxant labeling warns of additive sedation with benzodiazepines.",
  },
  {
    drug_a: "lorazepam",
    drug_b: "zaleplon",
    severity: "moderate",
    mechanism:
      "Additive CNS depression between benzodiazepines and non-benzodiazepine hypnotics increases sedation and fall risk.",
    evidence:
      "Sedative-hypnotic labeling warns against combination with benzodiazepines.",
  },
  {
    drug_a: "losartan",
    drug_b: "triamterene",
    severity: "moderate",
    mechanism:
      "Both raise serum potassium; combined use increases the risk of hyperkalemia.",
    evidence:
      "Labeling for potassium-sparing diuretics warns of hyperkalemia risk with ARBs.",
  },
  {
    drug_a: "lurasidone",
    drug_b: "olanzapine",
    severity: "moderate",
    mechanism:
      "Combining two antipsychotics adds to sedation, metabolic, and QT-prolongation risk without clear added benefit.",
    evidence:
      "Guidelines generally recommend against routine antipsychotic polypharmacy.",
  },
  {
    drug_a: "lurasidone",
    drug_b: "ondansetron",
    severity: "moderate",
    mechanism:
      "Some antipsychotics have mild serotonergic activity that may add to that of other serotonergic agents.",
    evidence:
      "Case reports describe serotonin syndrome features when antipsychotics are combined with strongly serotonergic drugs.",
  },
  {
    drug_a: "lurasidone",
    drug_b: "paliperidone",
    severity: "moderate",
    mechanism:
      "Combining two antipsychotics adds to sedation, metabolic, and QT-prolongation risk without clear added benefit.",
    evidence:
      "Guidelines generally recommend against routine antipsychotic polypharmacy.",
  },
  {
    drug_a: "lurasidone",
    drug_b: "quetiapine",
    severity: "moderate",
    mechanism:
      "Combining two antipsychotics adds to sedation, metabolic, and QT-prolongation risk without clear added benefit.",
    evidence:
      "Guidelines generally recommend against routine antipsychotic polypharmacy.",
  },
  {
    drug_a: "lurasidone",
    drug_b: "risperidone",
    severity: "moderate",
    mechanism:
      "Combining two antipsychotics adds to sedation, metabolic, and QT-prolongation risk without clear added benefit.",
    evidence:
      "Guidelines generally recommend against routine antipsychotic polypharmacy.",
  },
  {
    drug_a: "lurasidone",
    drug_b: "rizatriptan",
    severity: "moderate",
    mechanism:
      "Some antipsychotics have mild serotonergic activity that may add to that of other serotonergic agents.",
    evidence:
      "Case reports describe serotonin syndrome features when antipsychotics are combined with strongly serotonergic drugs.",
  },
  {
    drug_a: "lurasidone",
    drug_b: "st_johns_wort",
    severity: "moderate",
    mechanism:
      "Some antipsychotics have mild serotonergic activity that may add to that of other serotonergic agents.",
    evidence:
      "Case reports describe serotonin syndrome features when antipsychotics are combined with strongly serotonergic drugs.",
  },
  {
    drug_a: "lurasidone",
    drug_b: "sumatriptan",
    severity: "moderate",
    mechanism:
      "Some antipsychotics have mild serotonergic activity that may add to that of other serotonergic agents.",
    evidence:
      "Case reports describe serotonin syndrome features when antipsychotics are combined with strongly serotonergic drugs.",
  },
  {
    drug_a: "lurasidone",
    drug_b: "tramadol",
    severity: "moderate",
    mechanism:
      "Some antipsychotics have mild serotonergic activity that may add to that of other serotonergic agents.",
    evidence:
      "Case reports describe serotonin syndrome features when antipsychotics are combined with strongly serotonergic drugs.",
  },
  {
    drug_a: "lurasidone",
    drug_b: "ziprasidone",
    severity: "moderate",
    mechanism:
      "Combining two antipsychotics adds to sedation, metabolic, and QT-prolongation risk without clear added benefit.",
    evidence:
      "Guidelines generally recommend against routine antipsychotic polypharmacy.",
  },
  {
    drug_a: "meloxicam",
    drug_b: "azilsartan",
    severity: "moderate",
    mechanism:
      "NSAIDs can reduce the antihypertensive effect of ARBs and impair renal function.",
    evidence:
      "Labeling for both drug classes notes reduced antihypertensive effect and renal risk with combined use.",
  },
  {
    drug_a: "meloxicam",
    drug_b: "benazepril",
    severity: "moderate",
    mechanism:
      "NSAIDs can reduce the antihypertensive effect of ACE inhibitors and impair renal function.",
    evidence:
      "Labeling for both drug classes notes reduced antihypertensive effect and renal risk with combined use.",
  },
  {
    drug_a: "meloxicam",
    drug_b: "budesonide",
    severity: "moderate",
    mechanism:
      "Both irritate the GI lining; combined use substantially increases risk of ulcers and GI bleeding.",
    evidence:
      "Guidelines recommend gastroprotection when NSAIDs and corticosteroids are combined.",
  },
  {
    drug_a: "meloxicam",
    drug_b: "candesartan",
    severity: "moderate",
    mechanism:
      "NSAIDs can reduce the antihypertensive effect of ARBs and impair renal function.",
    evidence:
      "Labeling for both drug classes notes reduced antihypertensive effect and renal risk with combined use.",
  },
  {
    drug_a: "meloxicam",
    drug_b: "desvenlafaxine",
    severity: "moderate",
    mechanism:
      "SSRIs combined with NSAIDs may increase risk of GI bleeding due to reduced platelet serotonin uptake.",
    evidence:
      "Observational studies link serotonergic antidepressant + NSAID combinations to higher GI bleeding rates.",
  },
  {
    drug_a: "meloxicam",
    drug_b: "dipyridamole",
    severity: "moderate",
    mechanism:
      "NSAIDs may add to the antiplatelet effect and irritate the GI lining, raising bleeding risk.",
    evidence:
      "Cardiology guidance flags added GI bleeding risk when NSAIDs are combined with antiplatelet therapy.",
  },
  {
    drug_a: "meloxicam",
    drug_b: "edoxaban",
    severity: "high",
    mechanism:
      "NSAIDs inhibit platelet aggregation and can displace anticoagulants from protein binding, increasing bleeding risk.",
    evidence:
      "Labeling for anticoagulants warns of increased bleeding risk with concurrent NSAID use.",
  },
  {
    drug_a: "meloxicam",
    drug_b: "enoxaparin",
    severity: "high",
    mechanism:
      "NSAIDs inhibit platelet aggregation and can displace anticoagulants from protein binding, increasing bleeding risk.",
    evidence:
      "Labeling for anticoagulants warns of increased bleeding risk with concurrent NSAID use.",
  },
  {
    drug_a: "meloxicam",
    drug_b: "fluticasone",
    severity: "moderate",
    mechanism:
      "Both irritate the GI lining; combined use substantially increases risk of ulcers and GI bleeding.",
    evidence:
      "Guidelines recommend gastroprotection when NSAIDs and corticosteroids are combined.",
  },
  {
    drug_a: "meloxicam",
    drug_b: "fluvoxamine",
    severity: "moderate",
    mechanism:
      "SSRIs combined with NSAIDs may increase risk of GI bleeding due to reduced platelet serotonin uptake.",
    evidence:
      "Observational studies link SSRI + NSAID combinations to higher GI bleeding rates.",
  },
  {
    drug_a: "meloxicam",
    drug_b: "fosinopril",
    severity: "moderate",
    mechanism:
      "NSAIDs can reduce the antihypertensive effect of ACE inhibitors and impair renal function.",
    evidence:
      "Labeling for both drug classes notes reduced antihypertensive effect and renal risk with combined use.",
  },
  {
    drug_a: "meloxicam",
    drug_b: "hydrocortisone",
    severity: "moderate",
    mechanism:
      "Both irritate the GI lining; combined use substantially increases risk of ulcers and GI bleeding.",
    evidence:
      "Guidelines recommend gastroprotection when NSAIDs and corticosteroids are combined.",
  },
  {
    drug_a: "meloxicam",
    drug_b: "levomilnacipran",
    severity: "moderate",
    mechanism:
      "SSRIs combined with NSAIDs may increase risk of GI bleeding due to reduced platelet serotonin uptake.",
    evidence:
      "Observational studies link serotonergic antidepressant + NSAID combinations to higher GI bleeding rates.",
  },
  {
    drug_a: "meloxicam",
    drug_b: "nabumetone",
    severity: "low",
    mechanism:
      "Combining two NSAIDs adds to GI and renal risk without added therapeutic benefit.",
    evidence:
      "Guidelines recommend against routine combination of two NSAIDs.",
  },
  {
    drug_a: "meloxicam",
    drug_b: "perindopril",
    severity: "moderate",
    mechanism:
      "NSAIDs can reduce the antihypertensive effect of ACE inhibitors and impair renal function.",
    evidence:
      "Labeling for both drug classes notes reduced antihypertensive effect and renal risk with combined use.",
  },
  {
    drug_a: "meloxicam",
    drug_b: "piroxicam",
    severity: "low",
    mechanism:
      "Combining two NSAIDs adds to GI and renal risk without added therapeutic benefit.",
    evidence:
      "Guidelines recommend against routine combination of two NSAIDs.",
  },
  {
    drug_a: "meloxicam",
    drug_b: "prasugrel",
    severity: "moderate",
    mechanism:
      "NSAIDs may add to the antiplatelet effect and irritate the GI lining, raising bleeding risk.",
    evidence:
      "Cardiology guidance flags added GI bleeding risk when NSAIDs are combined with antiplatelet therapy.",
  },
  {
    drug_a: "meloxicam",
    drug_b: "quinapril",
    severity: "moderate",
    mechanism:
      "NSAIDs can reduce the antihypertensive effect of ACE inhibitors and impair renal function.",
    evidence:
      "Labeling for both drug classes notes reduced antihypertensive effect and renal risk with combined use.",
  },
  {
    drug_a: "meloxicam",
    drug_b: "sulindac",
    severity: "low",
    mechanism:
      "Combining two NSAIDs adds to GI and renal risk without added therapeutic benefit.",
    evidence:
      "Guidelines recommend against routine combination of two NSAIDs.",
  },
  {
    drug_a: "meloxicam",
    drug_b: "telmisartan",
    severity: "moderate",
    mechanism:
      "NSAIDs can reduce the antihypertensive effect of ARBs and impair renal function.",
    evidence:
      "Labeling for both drug classes notes reduced antihypertensive effect and renal risk with combined use.",
  },
  {
    drug_a: "meloxicam",
    drug_b: "ticagrelor",
    severity: "moderate",
    mechanism:
      "NSAIDs may add to the antiplatelet effect and irritate the GI lining, raising bleeding risk.",
    evidence:
      "Cardiology guidance flags added GI bleeding risk when NSAIDs are combined with antiplatelet therapy.",
  },
  {
    drug_a: "meloxicam",
    drug_b: "trandolapril",
    severity: "moderate",
    mechanism:
      "NSAIDs can reduce the antihypertensive effect of ACE inhibitors and impair renal function.",
    evidence:
      "Labeling for both drug classes notes reduced antihypertensive effect and renal risk with combined use.",
  },
  {
    drug_a: "meloxicam",
    drug_b: "triamcinolone",
    severity: "moderate",
    mechanism:
      "Both irritate the GI lining; combined use substantially increases risk of ulcers and GI bleeding.",
    evidence:
      "Guidelines recommend gastroprotection when NSAIDs and corticosteroids are combined.",
  },
  {
    drug_a: "meperidine",
    drug_b: "alprazolam",
    severity: "high",
    mechanism:
      "Both depress the central nervous system; combined use significantly raises the risk of profound sedation and fatal respiratory depression.",
    evidence:
      "FDA boxed warning covers concurrent opioid and benzodiazepine use.",
  },
  {
    drug_a: "meperidine",
    drug_b: "baclofen",
    severity: "moderate",
    mechanism:
      "Both cause CNS depression; combined use increases sedation and fall risk, especially in older adults.",
    evidence:
      "Muscle relaxant labeling warns of additive sedation with opioids.",
  },
  {
    drug_a: "meperidine",
    drug_b: "carisoprodol",
    severity: "moderate",
    mechanism:
      "Both cause CNS depression; combined use increases sedation and fall risk, especially in older adults.",
    evidence:
      "Muscle relaxant labeling warns of additive sedation with opioids.",
  },
  {
    drug_a: "meperidine",
    drug_b: "chlordiazepoxide",
    severity: "high",
    mechanism:
      "Both depress the central nervous system; combined use significantly raises the risk of profound sedation and fatal respiratory depression.",
    evidence:
      "FDA boxed warning covers concurrent opioid and benzodiazepine use.",
  },
  {
    drug_a: "meperidine",
    drug_b: "citalopram",
    severity: "high",
    mechanism:
      "Both increase serotonin activity, raising the risk of serotonin syndrome.",
    evidence:
      "Case reports and FDA labeling describe elevated serotonin syndrome risk with this combination.",
  },
  {
    drug_a: "meperidine",
    drug_b: "clonazepam",
    severity: "high",
    mechanism:
      "Both depress the central nervous system; combined use significantly raises the risk of profound sedation and fatal respiratory depression.",
    evidence:
      "FDA boxed warning covers concurrent opioid and benzodiazepine use.",
  },
  {
    drug_a: "meperidine",
    drug_b: "clorazepate",
    severity: "high",
    mechanism:
      "Both depress the central nervous system; combined use significantly raises the risk of profound sedation and fatal respiratory depression.",
    evidence:
      "FDA boxed warning covers concurrent opioid and benzodiazepine use.",
  },
  {
    drug_a: "meperidine",
    drug_b: "cyclobenzaprine",
    severity: "moderate",
    mechanism:
      "Both cause CNS depression; combined use increases sedation and fall risk, especially in older adults.",
    evidence:
      "Muscle relaxant labeling warns of additive sedation with opioids.",
  },
  {
    drug_a: "meperidine",
    drug_b: "desvenlafaxine",
    severity: "high",
    mechanism:
      "Both increase serotonin activity, raising the risk of serotonin syndrome.",
    evidence:
      "Case reports and FDA labeling describe elevated serotonin syndrome risk with this combination.",
  },
  {
    drug_a: "meperidine",
    drug_b: "diazepam",
    severity: "high",
    mechanism:
      "Both depress the central nervous system; combined use significantly raises the risk of profound sedation and fatal respiratory depression.",
    evidence:
      "FDA boxed warning covers concurrent opioid and benzodiazepine use.",
  },
  {
    drug_a: "meperidine",
    drug_b: "diphenhydramine",
    severity: "moderate",
    mechanism:
      "Both cause CNS depression; combined use increases sedation and, in vulnerable patients, respiratory depression risk.",
    evidence:
      "Product labeling for sedating antihistamines warns against combination with opioid analgesics.",
  },
  {
    drug_a: "meperidine",
    drug_b: "duloxetine",
    severity: "high",
    mechanism:
      "Both increase serotonin activity, raising the risk of serotonin syndrome.",
    evidence:
      "Case reports and FDA labeling describe elevated serotonin syndrome risk with this combination.",
  },
  {
    drug_a: "meperidine",
    drug_b: "escitalopram",
    severity: "high",
    mechanism:
      "Both increase serotonin activity, raising the risk of serotonin syndrome.",
    evidence:
      "Case reports and FDA labeling describe elevated serotonin syndrome risk with this combination.",
  },
  {
    drug_a: "meperidine",
    drug_b: "eszopiclone",
    severity: "high",
    mechanism:
      "Both depress the central nervous system; combined use significantly raises the risk of profound sedation and fatal respiratory depression.",
    evidence:
      "FDA boxed warning covers concurrent opioid and CNS depressant use, including non-benzodiazepine hypnotics.",
  },
  {
    drug_a: "meperidine",
    drug_b: "fluoxetine",
    severity: "high",
    mechanism:
      "Both increase serotonin activity, raising the risk of serotonin syndrome.",
    evidence:
      "Case reports and FDA labeling describe elevated serotonin syndrome risk with this combination.",
  },
  {
    drug_a: "meperidine",
    drug_b: "fluvoxamine",
    severity: "high",
    mechanism:
      "Both increase serotonin activity, raising the risk of serotonin syndrome.",
    evidence:
      "Case reports and FDA labeling describe elevated serotonin syndrome risk with this combination.",
  },
  {
    drug_a: "meperidine",
    drug_b: "hydroxyzine",
    severity: "moderate",
    mechanism:
      "Both cause CNS depression; combined use increases sedation and, in vulnerable patients, respiratory depression risk.",
    evidence:
      "Product labeling for sedating antihistamines warns against combination with opioid analgesics.",
  },
  {
    drug_a: "meperidine",
    drug_b: "levomilnacipran",
    severity: "high",
    mechanism:
      "Both increase serotonin activity, raising the risk of serotonin syndrome.",
    evidence:
      "Case reports and FDA labeling describe elevated serotonin syndrome risk with this combination.",
  },
  {
    drug_a: "meperidine",
    drug_b: "lorazepam",
    severity: "high",
    mechanism:
      "Both depress the central nervous system; combined use significantly raises the risk of profound sedation and fatal respiratory depression.",
    evidence:
      "FDA boxed warning covers concurrent opioid and benzodiazepine use.",
  },
  {
    drug_a: "meperidine",
    drug_b: "methadone",
    severity: "moderate",
    mechanism:
      "Combining two opioids adds to central nervous system and respiratory depression without clear added benefit.",
    evidence:
      "Prescribing guidance recommends against concurrent use of multiple opioid analgesics outside supervised rotation.",
  },
  {
    drug_a: "meperidine",
    drug_b: "methocarbamol",
    severity: "moderate",
    mechanism:
      "Both cause CNS depression; combined use increases sedation and fall risk, especially in older adults.",
    evidence:
      "Muscle relaxant labeling warns of additive sedation with opioids.",
  },
  {
    drug_a: "meperidine",
    drug_b: "midazolam",
    severity: "high",
    mechanism:
      "Both depress the central nervous system; combined use significantly raises the risk of profound sedation and fatal respiratory depression.",
    evidence:
      "FDA boxed warning covers concurrent opioid and benzodiazepine use.",
  },
  {
    drug_a: "meperidine",
    drug_b: "morphine",
    severity: "moderate",
    mechanism:
      "Combining two opioids adds to central nervous system and respiratory depression without clear added benefit.",
    evidence:
      "Prescribing guidance recommends against concurrent use of multiple opioid analgesics outside supervised rotation.",
  },
  {
    drug_a: "meperidine",
    drug_b: "ondansetron",
    severity: "high",
    mechanism:
      "Both increase serotonin activity, raising the risk of serotonin syndrome.",
    evidence:
      "Case reports and FDA labeling describe elevated serotonin syndrome risk with this combination.",
  },
  {
    drug_a: "meperidine",
    drug_b: "oxazepam",
    severity: "high",
    mechanism:
      "Both depress the central nervous system; combined use significantly raises the risk of profound sedation and fatal respiratory depression.",
    evidence:
      "FDA boxed warning covers concurrent opioid and benzodiazepine use.",
  },
  {
    drug_a: "meperidine",
    drug_b: "oxycodone",
    severity: "moderate",
    mechanism:
      "Combining two opioids adds to central nervous system and respiratory depression without clear added benefit.",
    evidence:
      "Prescribing guidance recommends against concurrent use of multiple opioid analgesics outside supervised rotation.",
  },
  {
    drug_a: "meperidine",
    drug_b: "oxymorphone",
    severity: "moderate",
    mechanism:
      "Combining two opioids adds to central nervous system and respiratory depression without clear added benefit.",
    evidence:
      "Prescribing guidance recommends against concurrent use of multiple opioid analgesics outside supervised rotation.",
  },
  {
    drug_a: "meperidine",
    drug_b: "paroxetine",
    severity: "high",
    mechanism:
      "Both increase serotonin activity, raising the risk of serotonin syndrome.",
    evidence:
      "Case reports and FDA labeling describe elevated serotonin syndrome risk with this combination.",
  },
  {
    drug_a: "meperidine",
    drug_b: "phenelzine",
    severity: "high",
    mechanism:
      "Both increase serotonin activity; combining them can precipitate serotonin syndrome.",
    evidence:
      "MAOIs carry labeled contraindications or strong warnings against use with serotonergic opioids.",
  },
  {
    drug_a: "meperidine",
    drug_b: "promethazine",
    severity: "moderate",
    mechanism:
      "Both cause CNS depression; combined use increases sedation and, in vulnerable patients, respiratory depression risk.",
    evidence:
      "Product labeling for sedating antihistamines warns against combination with opioid analgesics.",
  },
  {
    drug_a: "meperidine",
    drug_b: "rizatriptan",
    severity: "high",
    mechanism:
      "Both increase serotonin activity, raising the risk of serotonin syndrome.",
    evidence:
      "Case reports and FDA labeling describe elevated serotonin syndrome risk with this combination.",
  },
  {
    drug_a: "meperidine",
    drug_b: "sertraline",
    severity: "high",
    mechanism:
      "Both increase serotonin activity, raising the risk of serotonin syndrome.",
    evidence:
      "Case reports and FDA labeling describe elevated serotonin syndrome risk with this combination.",
  },
  {
    drug_a: "meperidine",
    drug_b: "st_johns_wort",
    severity: "high",
    mechanism:
      "Both increase serotonin activity, raising the risk of serotonin syndrome.",
    evidence:
      "Case reports and FDA labeling describe elevated serotonin syndrome risk with this combination.",
  },
  {
    drug_a: "meperidine",
    drug_b: "sumatriptan",
    severity: "high",
    mechanism:
      "Both increase serotonin activity, raising the risk of serotonin syndrome.",
    evidence:
      "Case reports and FDA labeling describe elevated serotonin syndrome risk with this combination.",
  },
  {
    drug_a: "meperidine",
    drug_b: "temazepam",
    severity: "high",
    mechanism:
      "Both depress the central nervous system; combined use significantly raises the risk of profound sedation and fatal respiratory depression.",
    evidence:
      "FDA boxed warning covers concurrent opioid and benzodiazepine use.",
  },
  {
    drug_a: "meperidine",
    drug_b: "tizanidine",
    severity: "moderate",
    mechanism:
      "Both cause CNS depression; combined use increases sedation and fall risk, especially in older adults.",
    evidence:
      "Muscle relaxant labeling warns of additive sedation with opioids.",
  },
  {
    drug_a: "meperidine",
    drug_b: "tramadol",
    severity: "moderate",
    mechanism:
      "Combining two opioids adds to central nervous system and respiratory depression without clear added benefit.",
    evidence:
      "Prescribing guidance recommends against concurrent use of multiple opioid analgesics outside supervised rotation.",
  },
  {
    drug_a: "meperidine",
    drug_b: "tranylcypromine",
    severity: "high",
    mechanism:
      "Both increase serotonin activity; combining them can precipitate serotonin syndrome.",
    evidence:
      "MAOIs carry labeled contraindications or strong warnings against use with serotonergic opioids.",
  },
  {
    drug_a: "meperidine",
    drug_b: "venlafaxine",
    severity: "high",
    mechanism:
      "Both increase serotonin activity, raising the risk of serotonin syndrome.",
    evidence:
      "Case reports and FDA labeling describe elevated serotonin syndrome risk with this combination.",
  },
  {
    drug_a: "meperidine",
    drug_b: "zaleplon",
    severity: "high",
    mechanism:
      "Both depress the central nervous system; combined use significantly raises the risk of profound sedation and fatal respiratory depression.",
    evidence:
      "FDA boxed warning covers concurrent opioid and CNS depressant use, including non-benzodiazepine hypnotics.",
  },
  {
    drug_a: "meperidine",
    drug_b: "zolpidem",
    severity: "high",
    mechanism:
      "Both depress the central nervous system; combined use significantly raises the risk of profound sedation and fatal respiratory depression.",
    evidence:
      "FDA boxed warning covers concurrent opioid and CNS depressant use, including non-benzodiazepine hypnotics.",
  },
  {
    drug_a: "methadone",
    drug_b: "alprazolam",
    severity: "high",
    mechanism:
      "Both depress the central nervous system; combined use significantly raises the risk of profound sedation and fatal respiratory depression.",
    evidence:
      "FDA boxed warning covers concurrent opioid and benzodiazepine use.",
  },
  {
    drug_a: "methadone",
    drug_b: "baclofen",
    severity: "moderate",
    mechanism:
      "Both cause CNS depression; combined use increases sedation and fall risk, especially in older adults.",
    evidence:
      "Muscle relaxant labeling warns of additive sedation with opioids.",
  },
  {
    drug_a: "methadone",
    drug_b: "carisoprodol",
    severity: "moderate",
    mechanism:
      "Both cause CNS depression; combined use increases sedation and fall risk, especially in older adults.",
    evidence:
      "Muscle relaxant labeling warns of additive sedation with opioids.",
  },
  {
    drug_a: "methadone",
    drug_b: "chlordiazepoxide",
    severity: "high",
    mechanism:
      "Both depress the central nervous system; combined use significantly raises the risk of profound sedation and fatal respiratory depression.",
    evidence:
      "FDA boxed warning covers concurrent opioid and benzodiazepine use.",
  },
  {
    drug_a: "methadone",
    drug_b: "citalopram",
    severity: "high",
    mechanism:
      "Both increase serotonin activity, raising the risk of serotonin syndrome.",
    evidence:
      "Case reports and FDA labeling describe elevated serotonin syndrome risk with this combination.",
  },
  {
    drug_a: "methadone",
    drug_b: "clonazepam",
    severity: "high",
    mechanism:
      "Both depress the central nervous system; combined use significantly raises the risk of profound sedation and fatal respiratory depression.",
    evidence:
      "FDA boxed warning covers concurrent opioid and benzodiazepine use.",
  },
  {
    drug_a: "methadone",
    drug_b: "clorazepate",
    severity: "high",
    mechanism:
      "Both depress the central nervous system; combined use significantly raises the risk of profound sedation and fatal respiratory depression.",
    evidence:
      "FDA boxed warning covers concurrent opioid and benzodiazepine use.",
  },
  {
    drug_a: "methadone",
    drug_b: "cyclobenzaprine",
    severity: "moderate",
    mechanism:
      "Both cause CNS depression; combined use increases sedation and fall risk, especially in older adults.",
    evidence:
      "Muscle relaxant labeling warns of additive sedation with opioids.",
  },
  {
    drug_a: "methadone",
    drug_b: "desvenlafaxine",
    severity: "high",
    mechanism:
      "Both increase serotonin activity, raising the risk of serotonin syndrome.",
    evidence:
      "Case reports and FDA labeling describe elevated serotonin syndrome risk with this combination.",
  },
  {
    drug_a: "methadone",
    drug_b: "diazepam",
    severity: "high",
    mechanism:
      "Both depress the central nervous system; combined use significantly raises the risk of profound sedation and fatal respiratory depression.",
    evidence:
      "FDA boxed warning covers concurrent opioid and benzodiazepine use.",
  },
  {
    drug_a: "methadone",
    drug_b: "diphenhydramine",
    severity: "moderate",
    mechanism:
      "Both cause CNS depression; combined use increases sedation and, in vulnerable patients, respiratory depression risk.",
    evidence:
      "Product labeling for sedating antihistamines warns against combination with opioid analgesics.",
  },
  {
    drug_a: "methadone",
    drug_b: "duloxetine",
    severity: "high",
    mechanism:
      "Both increase serotonin activity, raising the risk of serotonin syndrome.",
    evidence:
      "Case reports and FDA labeling describe elevated serotonin syndrome risk with this combination.",
  },
  {
    drug_a: "methadone",
    drug_b: "escitalopram",
    severity: "high",
    mechanism:
      "Both increase serotonin activity, raising the risk of serotonin syndrome.",
    evidence:
      "Case reports and FDA labeling describe elevated serotonin syndrome risk with this combination.",
  },
  {
    drug_a: "methadone",
    drug_b: "eszopiclone",
    severity: "high",
    mechanism:
      "Both depress the central nervous system; combined use significantly raises the risk of profound sedation and fatal respiratory depression.",
    evidence:
      "FDA boxed warning covers concurrent opioid and CNS depressant use, including non-benzodiazepine hypnotics.",
  },
  {
    drug_a: "methadone",
    drug_b: "fluoxetine",
    severity: "high",
    mechanism:
      "Both increase serotonin activity, raising the risk of serotonin syndrome.",
    evidence:
      "Case reports and FDA labeling describe elevated serotonin syndrome risk with this combination.",
  },
  {
    drug_a: "methadone",
    drug_b: "fluvoxamine",
    severity: "high",
    mechanism:
      "Both increase serotonin activity, raising the risk of serotonin syndrome.",
    evidence:
      "Case reports and FDA labeling describe elevated serotonin syndrome risk with this combination.",
  },
  {
    drug_a: "methadone",
    drug_b: "hydroxyzine",
    severity: "moderate",
    mechanism:
      "Both cause CNS depression; combined use increases sedation and, in vulnerable patients, respiratory depression risk.",
    evidence:
      "Product labeling for sedating antihistamines warns against combination with opioid analgesics.",
  },
  {
    drug_a: "methadone",
    drug_b: "levomilnacipran",
    severity: "high",
    mechanism:
      "Both increase serotonin activity, raising the risk of serotonin syndrome.",
    evidence:
      "Case reports and FDA labeling describe elevated serotonin syndrome risk with this combination.",
  },
  {
    drug_a: "methadone",
    drug_b: "lorazepam",
    severity: "high",
    mechanism:
      "Both depress the central nervous system; combined use significantly raises the risk of profound sedation and fatal respiratory depression.",
    evidence:
      "FDA boxed warning covers concurrent opioid and benzodiazepine use.",
  },
  {
    drug_a: "methadone",
    drug_b: "methocarbamol",
    severity: "moderate",
    mechanism:
      "Both cause CNS depression; combined use increases sedation and fall risk, especially in older adults.",
    evidence:
      "Muscle relaxant labeling warns of additive sedation with opioids.",
  },
  {
    drug_a: "methadone",
    drug_b: "midazolam",
    severity: "high",
    mechanism:
      "Both depress the central nervous system; combined use significantly raises the risk of profound sedation and fatal respiratory depression.",
    evidence:
      "FDA boxed warning covers concurrent opioid and benzodiazepine use.",
  },
  {
    drug_a: "methadone",
    drug_b: "morphine",
    severity: "moderate",
    mechanism:
      "Combining two opioids adds to central nervous system and respiratory depression without clear added benefit.",
    evidence:
      "Prescribing guidance recommends against concurrent use of multiple opioid analgesics outside supervised rotation.",
  },
  {
    drug_a: "methadone",
    drug_b: "moxifloxacin",
    severity: "moderate",
    mechanism:
      "Both prolong the QT interval; combined use raises the risk of dangerous arrhythmia.",
    evidence:
      "Drug-induced long QT reference lists flag this combination.",
  },
  {
    drug_a: "methadone",
    drug_b: "ondansetron",
    severity: "high",
    mechanism:
      "Both increase serotonin activity, raising the risk of serotonin syndrome.",
    evidence:
      "Case reports and FDA labeling describe elevated serotonin syndrome risk with this combination.",
  },
  {
    drug_a: "methadone",
    drug_b: "oxazepam",
    severity: "high",
    mechanism:
      "Both depress the central nervous system; combined use significantly raises the risk of profound sedation and fatal respiratory depression.",
    evidence:
      "FDA boxed warning covers concurrent opioid and benzodiazepine use.",
  },
  {
    drug_a: "methadone",
    drug_b: "oxycodone",
    severity: "moderate",
    mechanism:
      "Combining two opioids adds to central nervous system and respiratory depression without clear added benefit.",
    evidence:
      "Prescribing guidance recommends against concurrent use of multiple opioid analgesics outside supervised rotation.",
  },
  {
    drug_a: "methadone",
    drug_b: "oxymorphone",
    severity: "moderate",
    mechanism:
      "Combining two opioids adds to central nervous system and respiratory depression without clear added benefit.",
    evidence:
      "Prescribing guidance recommends against concurrent use of multiple opioid analgesics outside supervised rotation.",
  },
  {
    drug_a: "methadone",
    drug_b: "paroxetine",
    severity: "high",
    mechanism:
      "Both increase serotonin activity, raising the risk of serotonin syndrome.",
    evidence:
      "Case reports and FDA labeling describe elevated serotonin syndrome risk with this combination.",
  },
  {
    drug_a: "methadone",
    drug_b: "phenelzine",
    severity: "high",
    mechanism:
      "Both increase serotonin activity; combining them can precipitate serotonin syndrome.",
    evidence:
      "MAOIs carry labeled contraindications or strong warnings against use with serotonergic opioids.",
  },
  {
    drug_a: "methadone",
    drug_b: "promethazine",
    severity: "moderate",
    mechanism:
      "Both cause CNS depression; combined use increases sedation and, in vulnerable patients, respiratory depression risk.",
    evidence:
      "Product labeling for sedating antihistamines warns against combination with opioid analgesics.",
  },
  {
    drug_a: "methadone",
    drug_b: "rizatriptan",
    severity: "high",
    mechanism:
      "Both increase serotonin activity, raising the risk of serotonin syndrome.",
    evidence:
      "Case reports and FDA labeling describe elevated serotonin syndrome risk with this combination.",
  },
  {
    drug_a: "methadone",
    drug_b: "sertraline",
    severity: "high",
    mechanism:
      "Both increase serotonin activity, raising the risk of serotonin syndrome.",
    evidence:
      "Case reports and FDA labeling describe elevated serotonin syndrome risk with this combination.",
  },
  {
    drug_a: "methadone",
    drug_b: "st_johns_wort",
    severity: "high",
    mechanism:
      "Both increase serotonin activity, raising the risk of serotonin syndrome.",
    evidence:
      "Case reports and FDA labeling describe elevated serotonin syndrome risk with this combination.",
  },
  {
    drug_a: "methadone",
    drug_b: "sumatriptan",
    severity: "high",
    mechanism:
      "Both increase serotonin activity, raising the risk of serotonin syndrome.",
    evidence:
      "Case reports and FDA labeling describe elevated serotonin syndrome risk with this combination.",
  },
  {
    drug_a: "methadone",
    drug_b: "temazepam",
    severity: "high",
    mechanism:
      "Both depress the central nervous system; combined use significantly raises the risk of profound sedation and fatal respiratory depression.",
    evidence:
      "FDA boxed warning covers concurrent opioid and benzodiazepine use.",
  },
  {
    drug_a: "methadone",
    drug_b: "tizanidine",
    severity: "moderate",
    mechanism:
      "Both cause CNS depression; combined use increases sedation and fall risk, especially in older adults.",
    evidence:
      "Muscle relaxant labeling warns of additive sedation with opioids.",
  },
  {
    drug_a: "methadone",
    drug_b: "tramadol",
    severity: "moderate",
    mechanism:
      "Combining two opioids adds to central nervous system and respiratory depression without clear added benefit.",
    evidence:
      "Prescribing guidance recommends against concurrent use of multiple opioid analgesics outside supervised rotation.",
  },
  {
    drug_a: "methadone",
    drug_b: "tranylcypromine",
    severity: "high",
    mechanism:
      "Both increase serotonin activity; combining them can precipitate serotonin syndrome.",
    evidence:
      "MAOIs carry labeled contraindications or strong warnings against use with serotonergic opioids.",
  },
  {
    drug_a: "methadone",
    drug_b: "venlafaxine",
    severity: "high",
    mechanism:
      "Both increase serotonin activity, raising the risk of serotonin syndrome.",
    evidence:
      "Case reports and FDA labeling describe elevated serotonin syndrome risk with this combination.",
  },
  {
    drug_a: "methadone",
    drug_b: "zaleplon",
    severity: "high",
    mechanism:
      "Both depress the central nervous system; combined use significantly raises the risk of profound sedation and fatal respiratory depression.",
    evidence:
      "FDA boxed warning covers concurrent opioid and CNS depressant use, including non-benzodiazepine hypnotics.",
  },
  {
    drug_a: "methadone",
    drug_b: "ziprasidone",
    severity: "moderate",
    mechanism:
      "Both prolong the QT interval; combined use raises the risk of dangerous arrhythmia.",
    evidence:
      "Drug-induced long QT reference lists flag this combination.",
  },
  {
    drug_a: "methadone",
    drug_b: "zolpidem",
    severity: "high",
    mechanism:
      "Both depress the central nervous system; combined use significantly raises the risk of profound sedation and fatal respiratory depression.",
    evidence:
      "FDA boxed warning covers concurrent opioid and CNS depressant use, including non-benzodiazepine hypnotics.",
  },
  {
    drug_a: "methylphenidate",
    drug_b: "citalopram",
    severity: "low",
    mechanism:
      "Both can raise blood pressure and heart rate; combined use warrants monitoring though serious interaction is uncommon.",
    evidence:
      "Prescribing references note additive cardiovascular effects with modest clinical significance.",
  },
  {
    drug_a: "methylphenidate",
    drug_b: "escitalopram",
    severity: "low",
    mechanism:
      "Both can raise blood pressure and heart rate; combined use warrants monitoring though serious interaction is uncommon.",
    evidence:
      "Prescribing references note additive cardiovascular effects with modest clinical significance.",
  },
  {
    drug_a: "methylphenidate",
    drug_b: "fluoxetine",
    severity: "low",
    mechanism:
      "Both can raise blood pressure and heart rate; combined use warrants monitoring though serious interaction is uncommon.",
    evidence:
      "Prescribing references note additive cardiovascular effects with modest clinical significance.",
  },
  {
    drug_a: "methylphenidate",
    drug_b: "fluvoxamine",
    severity: "low",
    mechanism:
      "Both can raise blood pressure and heart rate; combined use warrants monitoring though serious interaction is uncommon.",
    evidence:
      "Prescribing references note additive cardiovascular effects with modest clinical significance.",
  },
  {
    drug_a: "methylphenidate",
    drug_b: "paroxetine",
    severity: "low",
    mechanism:
      "Both can raise blood pressure and heart rate; combined use warrants monitoring though serious interaction is uncommon.",
    evidence:
      "Prescribing references note additive cardiovascular effects with modest clinical significance.",
  },
  {
    drug_a: "methylphenidate",
    drug_b: "sertraline",
    severity: "low",
    mechanism:
      "Both can raise blood pressure and heart rate; combined use warrants monitoring though serious interaction is uncommon.",
    evidence:
      "Prescribing references note additive cardiovascular effects with modest clinical significance.",
  },
  {
    drug_a: "methylprednisolone",
    drug_b: "canagliflozin",
    severity: "moderate",
    mechanism:
      "Corticosteroids can raise blood glucose, counteracting the glucose-lowering effect of antidiabetic medications.",
    evidence:
      "Endocrinology guidance recommends closer glucose monitoring when corticosteroids are added.",
  },
  {
    drug_a: "methylprednisolone",
    drug_b: "dapagliflozin",
    severity: "moderate",
    mechanism:
      "Corticosteroids can raise blood glucose, counteracting the glucose-lowering effect of antidiabetic medications.",
    evidence:
      "Endocrinology guidance recommends closer glucose monitoring when corticosteroids are added.",
  },
  {
    drug_a: "methylprednisolone",
    drug_b: "dulaglutide",
    severity: "moderate",
    mechanism:
      "Corticosteroids can raise blood glucose, counteracting the glucose-lowering effect of antidiabetic medications.",
    evidence:
      "Endocrinology guidance recommends closer glucose monitoring when corticosteroids are added.",
  },
  {
    drug_a: "methylprednisolone",
    drug_b: "empagliflozin",
    severity: "moderate",
    mechanism:
      "Corticosteroids can raise blood glucose, counteracting the glucose-lowering effect of antidiabetic medications.",
    evidence:
      "Endocrinology guidance recommends closer glucose monitoring when corticosteroids are added.",
  },
  {
    drug_a: "methylprednisolone",
    drug_b: "insulin_aspart",
    severity: "moderate",
    mechanism:
      "Corticosteroids can raise blood glucose, counteracting the glucose-lowering effect of antidiabetic medications.",
    evidence:
      "Endocrinology guidance recommends closer glucose monitoring when corticosteroids are added.",
  },
  {
    drug_a: "methylprednisolone",
    drug_b: "insulin_lispro",
    severity: "moderate",
    mechanism:
      "Corticosteroids can raise blood glucose, counteracting the glucose-lowering effect of antidiabetic medications.",
    evidence:
      "Endocrinology guidance recommends closer glucose monitoring when corticosteroids are added.",
  },
  {
    drug_a: "methylprednisolone",
    drug_b: "linagliptin",
    severity: "moderate",
    mechanism:
      "Corticosteroids can raise blood glucose, counteracting the glucose-lowering effect of antidiabetic medications.",
    evidence:
      "Endocrinology guidance recommends closer glucose monitoring when corticosteroids are added.",
  },
  {
    drug_a: "methylprednisolone",
    drug_b: "liraglutide",
    severity: "moderate",
    mechanism:
      "Corticosteroids can raise blood glucose, counteracting the glucose-lowering effect of antidiabetic medications.",
    evidence:
      "Endocrinology guidance recommends closer glucose monitoring when corticosteroids are added.",
  },
  {
    drug_a: "methylprednisolone",
    drug_b: "pioglitazone",
    severity: "moderate",
    mechanism:
      "Corticosteroids can raise blood glucose, counteracting the glucose-lowering effect of antidiabetic medications.",
    evidence:
      "Endocrinology guidance recommends closer glucose monitoring when corticosteroids are added.",
  },
  {
    drug_a: "methylprednisolone",
    drug_b: "saxagliptin",
    severity: "moderate",
    mechanism:
      "Corticosteroids can raise blood glucose, counteracting the glucose-lowering effect of antidiabetic medications.",
    evidence:
      "Endocrinology guidance recommends closer glucose monitoring when corticosteroids are added.",
  },
  {
    drug_a: "methylprednisolone",
    drug_b: "semaglutide",
    severity: "moderate",
    mechanism:
      "Corticosteroids can raise blood glucose, counteracting the glucose-lowering effect of antidiabetic medications.",
    evidence:
      "Endocrinology guidance recommends closer glucose monitoring when corticosteroids are added.",
  },
  {
    drug_a: "methylprednisolone",
    drug_b: "sitagliptin",
    severity: "moderate",
    mechanism:
      "Corticosteroids can raise blood glucose, counteracting the glucose-lowering effect of antidiabetic medications.",
    evidence:
      "Endocrinology guidance recommends closer glucose monitoring when corticosteroids are added.",
  },
  {
    drug_a: "metoprolol",
    drug_b: "canagliflozin",
    severity: "low",
    mechanism:
      "Beta blockers can mask the warning signs of hypoglycemia such as tremor and rapid heartbeat.",
    evidence:
      "Diabetes management guidance notes blunted hypoglycemia awareness with beta blocker use.",
  },
  {
    drug_a: "metoprolol",
    drug_b: "dapagliflozin",
    severity: "low",
    mechanism:
      "Beta blockers can mask the warning signs of hypoglycemia such as tremor and rapid heartbeat.",
    evidence:
      "Diabetes management guidance notes blunted hypoglycemia awareness with beta blocker use.",
  },
  {
    drug_a: "metoprolol",
    drug_b: "dulaglutide",
    severity: "low",
    mechanism:
      "Beta blockers can mask the warning signs of hypoglycemia such as tremor and rapid heartbeat.",
    evidence:
      "Diabetes management guidance notes blunted hypoglycemia awareness with beta blocker use.",
  },
  {
    drug_a: "metoprolol",
    drug_b: "empagliflozin",
    severity: "low",
    mechanism:
      "Beta blockers can mask the warning signs of hypoglycemia such as tremor and rapid heartbeat.",
    evidence:
      "Diabetes management guidance notes blunted hypoglycemia awareness with beta blocker use.",
  },
  {
    drug_a: "metoprolol",
    drug_b: "insulin_aspart",
    severity: "low",
    mechanism:
      "Beta blockers can mask the warning signs of hypoglycemia such as tremor and rapid heartbeat.",
    evidence:
      "Diabetes management guidance notes blunted hypoglycemia awareness with beta blocker use.",
  },
  {
    drug_a: "metoprolol",
    drug_b: "insulin_lispro",
    severity: "low",
    mechanism:
      "Beta blockers can mask the warning signs of hypoglycemia such as tremor and rapid heartbeat.",
    evidence:
      "Diabetes management guidance notes blunted hypoglycemia awareness with beta blocker use.",
  },
  {
    drug_a: "metoprolol",
    drug_b: "linagliptin",
    severity: "low",
    mechanism:
      "Beta blockers can mask the warning signs of hypoglycemia such as tremor and rapid heartbeat.",
    evidence:
      "Diabetes management guidance notes blunted hypoglycemia awareness with beta blocker use.",
  },
  {
    drug_a: "metoprolol",
    drug_b: "liraglutide",
    severity: "low",
    mechanism:
      "Beta blockers can mask the warning signs of hypoglycemia such as tremor and rapid heartbeat.",
    evidence:
      "Diabetes management guidance notes blunted hypoglycemia awareness with beta blocker use.",
  },
  {
    drug_a: "metoprolol",
    drug_b: "nadolol",
    severity: "low",
    mechanism:
      "Combining two beta blockers adds to heart-rate-lowering effects without added benefit.",
    evidence:
      "Guidelines recommend against routine combination of two beta blockers.",
  },
  {
    drug_a: "metoprolol",
    drug_b: "nebivolol",
    severity: "low",
    mechanism:
      "Combining two beta blockers adds to heart-rate-lowering effects without added benefit.",
    evidence:
      "Guidelines recommend against routine combination of two beta blockers.",
  },
  {
    drug_a: "metoprolol",
    drug_b: "pioglitazone",
    severity: "low",
    mechanism:
      "Beta blockers can mask the warning signs of hypoglycemia such as tremor and rapid heartbeat.",
    evidence:
      "Diabetes management guidance notes blunted hypoglycemia awareness with beta blocker use.",
  },
  {
    drug_a: "metoprolol",
    drug_b: "saxagliptin",
    severity: "low",
    mechanism:
      "Beta blockers can mask the warning signs of hypoglycemia such as tremor and rapid heartbeat.",
    evidence:
      "Diabetes management guidance notes blunted hypoglycemia awareness with beta blocker use.",
  },
  {
    drug_a: "metoprolol",
    drug_b: "semaglutide",
    severity: "low",
    mechanism:
      "Beta blockers can mask the warning signs of hypoglycemia such as tremor and rapid heartbeat.",
    evidence:
      "Diabetes management guidance notes blunted hypoglycemia awareness with beta blocker use.",
  },
  {
    drug_a: "metoprolol",
    drug_b: "sitagliptin",
    severity: "low",
    mechanism:
      "Beta blockers can mask the warning signs of hypoglycemia such as tremor and rapid heartbeat.",
    evidence:
      "Diabetes management guidance notes blunted hypoglycemia awareness with beta blocker use.",
  },
  {
    drug_a: "metoprolol",
    drug_b: "sotalol",
    severity: "low",
    mechanism:
      "Combining two beta blockers adds to heart-rate-lowering effects without added benefit.",
    evidence:
      "Guidelines recommend against routine combination of two beta blockers.",
  },
  {
    drug_a: "midazolam",
    drug_b: "baclofen",
    severity: "moderate",
    mechanism:
      "Both cause CNS depression; combined use increases sedation and fall risk, especially in older adults.",
    evidence:
      "Muscle relaxant labeling warns of additive sedation with benzodiazepines.",
  },
  {
    drug_a: "midazolam",
    drug_b: "carisoprodol",
    severity: "moderate",
    mechanism:
      "Both cause CNS depression; combined use increases sedation and fall risk, especially in older adults.",
    evidence:
      "Muscle relaxant labeling warns of additive sedation with benzodiazepines.",
  },
  {
    drug_a: "midazolam",
    drug_b: "cyclobenzaprine",
    severity: "moderate",
    mechanism:
      "Both cause CNS depression; combined use increases sedation and fall risk, especially in older adults.",
    evidence:
      "Muscle relaxant labeling warns of additive sedation with benzodiazepines.",
  },
  {
    drug_a: "midazolam",
    drug_b: "diphenhydramine",
    severity: "moderate",
    mechanism:
      "Both cause CNS depression; combined use increases sedation and impairs alertness.",
    evidence:
      "Antihistamine labeling warns of additive sedation with benzodiazepines.",
  },
  {
    drug_a: "midazolam",
    drug_b: "eszopiclone",
    severity: "moderate",
    mechanism:
      "Additive CNS depression between benzodiazepines and non-benzodiazepine hypnotics increases sedation and fall risk.",
    evidence:
      "Sedative-hypnotic labeling warns against combination with benzodiazepines.",
  },
  {
    drug_a: "midazolam",
    drug_b: "hydroxyzine",
    severity: "moderate",
    mechanism:
      "Both cause CNS depression; combined use increases sedation and impairs alertness.",
    evidence:
      "Antihistamine labeling warns of additive sedation with benzodiazepines.",
  },
  {
    drug_a: "midazolam",
    drug_b: "methocarbamol",
    severity: "moderate",
    mechanism:
      "Both cause CNS depression; combined use increases sedation and fall risk, especially in older adults.",
    evidence:
      "Muscle relaxant labeling warns of additive sedation with benzodiazepines.",
  },
  {
    drug_a: "midazolam",
    drug_b: "oxazepam",
    severity: "moderate",
    mechanism:
      "Additive central nervous system depression from combining two benzodiazepines.",
    evidence:
      "Clinical guidance advises against routinely combining two benzodiazepines.",
  },
  {
    drug_a: "midazolam",
    drug_b: "promethazine",
    severity: "moderate",
    mechanism:
      "Both cause CNS depression; combined use increases sedation and impairs alertness.",
    evidence:
      "Antihistamine labeling warns of additive sedation with benzodiazepines.",
  },
  {
    drug_a: "midazolam",
    drug_b: "ramelteon",
    severity: "moderate",
    mechanism:
      "Additive CNS depression between benzodiazepines and other sedative-hypnotics increases sedation and fall risk.",
    evidence:
      "Sedative-hypnotic labeling warns against combination with benzodiazepines.",
  },
  {
    drug_a: "midazolam",
    drug_b: "suvorexant",
    severity: "moderate",
    mechanism:
      "Additive CNS depression between benzodiazepines and other sedative-hypnotics increases sedation and fall risk.",
    evidence:
      "Sedative-hypnotic labeling warns against combination with benzodiazepines.",
  },
  {
    drug_a: "midazolam",
    drug_b: "temazepam",
    severity: "moderate",
    mechanism:
      "Additive central nervous system depression from combining two benzodiazepines.",
    evidence:
      "Clinical guidance advises against routinely combining two benzodiazepines.",
  },
  {
    drug_a: "midazolam",
    drug_b: "tizanidine",
    severity: "moderate",
    mechanism:
      "Both cause CNS depression; combined use increases sedation and fall risk, especially in older adults.",
    evidence:
      "Muscle relaxant labeling warns of additive sedation with benzodiazepines.",
  },
  {
    drug_a: "midazolam",
    drug_b: "zaleplon",
    severity: "moderate",
    mechanism:
      "Additive CNS depression between benzodiazepines and non-benzodiazepine hypnotics increases sedation and fall risk.",
    evidence:
      "Sedative-hypnotic labeling warns against combination with benzodiazepines.",
  },
  {
    drug_a: "midazolam",
    drug_b: "zolpidem",
    severity: "moderate",
    mechanism:
      "Additive CNS depression between benzodiazepines and non-benzodiazepine hypnotics increases sedation and fall risk.",
    evidence:
      "Sedative-hypnotic labeling warns against combination with benzodiazepines.",
  },
  {
    drug_a: "morphine",
    drug_b: "baclofen",
    severity: "moderate",
    mechanism:
      "Both cause CNS depression; combined use increases sedation and fall risk, especially in older adults.",
    evidence:
      "Muscle relaxant labeling warns of additive sedation with opioids.",
  },
  {
    drug_a: "morphine",
    drug_b: "carisoprodol",
    severity: "moderate",
    mechanism:
      "Both cause CNS depression; combined use increases sedation and fall risk, especially in older adults.",
    evidence:
      "Muscle relaxant labeling warns of additive sedation with opioids.",
  },
  {
    drug_a: "morphine",
    drug_b: "chlordiazepoxide",
    severity: "high",
    mechanism:
      "Both depress the central nervous system; combined use significantly raises the risk of profound sedation and fatal respiratory depression.",
    evidence:
      "FDA boxed warning covers concurrent opioid and benzodiazepine use.",
  },
  {
    drug_a: "morphine",
    drug_b: "clorazepate",
    severity: "high",
    mechanism:
      "Both depress the central nervous system; combined use significantly raises the risk of profound sedation and fatal respiratory depression.",
    evidence:
      "FDA boxed warning covers concurrent opioid and benzodiazepine use.",
  },
  {
    drug_a: "morphine",
    drug_b: "desvenlafaxine",
    severity: "high",
    mechanism:
      "Both increase serotonin activity, raising the risk of serotonin syndrome.",
    evidence:
      "Case reports and FDA labeling describe elevated serotonin syndrome risk with this combination.",
  },
  {
    drug_a: "morphine",
    drug_b: "fluvoxamine",
    severity: "high",
    mechanism:
      "Both increase serotonin activity, raising the risk of serotonin syndrome.",
    evidence:
      "Case reports and FDA labeling describe elevated serotonin syndrome risk with this combination.",
  },
  {
    drug_a: "morphine",
    drug_b: "hydroxyzine",
    severity: "moderate",
    mechanism:
      "Both cause CNS depression; combined use increases sedation and, in vulnerable patients, respiratory depression risk.",
    evidence:
      "Product labeling for sedating antihistamines warns against combination with opioid analgesics.",
  },
  {
    drug_a: "morphine",
    drug_b: "levomilnacipran",
    severity: "high",
    mechanism:
      "Both increase serotonin activity, raising the risk of serotonin syndrome.",
    evidence:
      "Case reports and FDA labeling describe elevated serotonin syndrome risk with this combination.",
  },
  {
    drug_a: "morphine",
    drug_b: "methocarbamol",
    severity: "moderate",
    mechanism:
      "Both cause CNS depression; combined use increases sedation and fall risk, especially in older adults.",
    evidence:
      "Muscle relaxant labeling warns of additive sedation with opioids.",
  },
  {
    drug_a: "morphine",
    drug_b: "midazolam",
    severity: "high",
    mechanism:
      "Both depress the central nervous system; combined use significantly raises the risk of profound sedation and fatal respiratory depression.",
    evidence:
      "FDA boxed warning covers concurrent opioid and benzodiazepine use.",
  },
  {
    drug_a: "morphine",
    drug_b: "ondansetron",
    severity: "high",
    mechanism:
      "Both increase serotonin activity, raising the risk of serotonin syndrome.",
    evidence:
      "Case reports and FDA labeling describe elevated serotonin syndrome risk with this combination.",
  },
  {
    drug_a: "morphine",
    drug_b: "oxazepam",
    severity: "high",
    mechanism:
      "Both depress the central nervous system; combined use significantly raises the risk of profound sedation and fatal respiratory depression.",
    evidence:
      "FDA boxed warning covers concurrent opioid and benzodiazepine use.",
  },
  {
    drug_a: "morphine",
    drug_b: "oxymorphone",
    severity: "moderate",
    mechanism:
      "Combining two opioids adds to central nervous system and respiratory depression without clear added benefit.",
    evidence:
      "Prescribing guidance recommends against concurrent use of multiple opioid analgesics outside supervised rotation.",
  },
  {
    drug_a: "morphine",
    drug_b: "promethazine",
    severity: "moderate",
    mechanism:
      "Both cause CNS depression; combined use increases sedation and, in vulnerable patients, respiratory depression risk.",
    evidence:
      "Product labeling for sedating antihistamines warns against combination with opioid analgesics.",
  },
  {
    drug_a: "morphine",
    drug_b: "rizatriptan",
    severity: "high",
    mechanism:
      "Both increase serotonin activity, raising the risk of serotonin syndrome.",
    evidence:
      "Case reports and FDA labeling describe elevated serotonin syndrome risk with this combination.",
  },
  {
    drug_a: "morphine",
    drug_b: "st_johns_wort",
    severity: "high",
    mechanism:
      "Both increase serotonin activity, raising the risk of serotonin syndrome.",
    evidence:
      "Case reports and FDA labeling describe elevated serotonin syndrome risk with this combination.",
  },
  {
    drug_a: "morphine",
    drug_b: "sumatriptan",
    severity: "high",
    mechanism:
      "Both increase serotonin activity, raising the risk of serotonin syndrome.",
    evidence:
      "Case reports and FDA labeling describe elevated serotonin syndrome risk with this combination.",
  },
  {
    drug_a: "morphine",
    drug_b: "tizanidine",
    severity: "moderate",
    mechanism:
      "Both cause CNS depression; combined use increases sedation and fall risk, especially in older adults.",
    evidence:
      "Muscle relaxant labeling warns of additive sedation with opioids.",
  },
  {
    drug_a: "morphine",
    drug_b: "zaleplon",
    severity: "high",
    mechanism:
      "Both depress the central nervous system; combined use significantly raises the risk of profound sedation and fatal respiratory depression.",
    evidence:
      "FDA boxed warning covers concurrent opioid and CNS depressant use, including non-benzodiazepine hypnotics.",
  },
  {
    drug_a: "moxifloxacin",
    drug_b: "ondansetron",
    severity: "moderate",
    mechanism:
      "Both prolong the QT interval; combined use raises the risk of dangerous arrhythmia.",
    evidence:
      "Drug-induced long QT reference lists flag this combination.",
  },
  {
    drug_a: "moxifloxacin",
    drug_b: "ziprasidone",
    severity: "moderate",
    mechanism:
      "Both prolong the QT interval; combined use raises the risk of dangerous arrhythmia.",
    evidence:
      "Drug-induced long QT reference lists flag this combination.",
  },
  {
    drug_a: "nabumetone",
    drug_b: "apixaban",
    severity: "high",
    mechanism:
      "NSAIDs inhibit platelet aggregation and can displace anticoagulants from protein binding, increasing bleeding risk.",
    evidence:
      "Labeling for anticoagulants warns of increased bleeding risk with concurrent NSAID use.",
  },
  {
    drug_a: "nabumetone",
    drug_b: "aspirin",
    severity: "moderate",
    mechanism:
      "NSAIDs may add to the antiplatelet effect and irritate the GI lining, raising bleeding risk.",
    evidence:
      "Cardiology guidance flags added GI bleeding risk when NSAIDs are combined with antiplatelet therapy.",
  },
  {
    drug_a: "nabumetone",
    drug_b: "azilsartan",
    severity: "moderate",
    mechanism:
      "NSAIDs can reduce the antihypertensive effect of ARBs and impair renal function.",
    evidence:
      "Labeling for both drug classes notes reduced antihypertensive effect and renal risk with combined use.",
  },
  {
    drug_a: "nabumetone",
    drug_b: "benazepril",
    severity: "moderate",
    mechanism:
      "NSAIDs can reduce the antihypertensive effect of ACE inhibitors and impair renal function.",
    evidence:
      "Labeling for both drug classes notes reduced antihypertensive effect and renal risk with combined use.",
  },
  {
    drug_a: "nabumetone",
    drug_b: "budesonide",
    severity: "moderate",
    mechanism:
      "Both irritate the GI lining; combined use substantially increases risk of ulcers and GI bleeding.",
    evidence:
      "Guidelines recommend gastroprotection when NSAIDs and corticosteroids are combined.",
  },
  {
    drug_a: "nabumetone",
    drug_b: "candesartan",
    severity: "moderate",
    mechanism:
      "NSAIDs can reduce the antihypertensive effect of ARBs and impair renal function.",
    evidence:
      "Labeling for both drug classes notes reduced antihypertensive effect and renal risk with combined use.",
  },
  {
    drug_a: "nabumetone",
    drug_b: "captopril",
    severity: "moderate",
    mechanism:
      "NSAIDs can reduce the antihypertensive effect of ACE inhibitors and impair renal function.",
    evidence:
      "Labeling for both drug classes notes reduced antihypertensive effect and renal risk with combined use.",
  },
  {
    drug_a: "nabumetone",
    drug_b: "citalopram",
    severity: "moderate",
    mechanism:
      "SSRIs combined with NSAIDs may increase risk of GI bleeding due to reduced platelet serotonin uptake.",
    evidence:
      "Observational studies link SSRI + NSAID combinations to higher GI bleeding rates.",
  },
  {
    drug_a: "nabumetone",
    drug_b: "clopidogrel",
    severity: "moderate",
    mechanism:
      "NSAIDs may add to the antiplatelet effect and irritate the GI lining, raising bleeding risk.",
    evidence:
      "Cardiology guidance flags added GI bleeding risk when NSAIDs are combined with antiplatelet therapy.",
  },
  {
    drug_a: "nabumetone",
    drug_b: "dabigatran",
    severity: "high",
    mechanism:
      "NSAIDs inhibit platelet aggregation and can displace anticoagulants from protein binding, increasing bleeding risk.",
    evidence:
      "Labeling for anticoagulants warns of increased bleeding risk with concurrent NSAID use.",
  },
  {
    drug_a: "nabumetone",
    drug_b: "desvenlafaxine",
    severity: "moderate",
    mechanism:
      "SSRIs combined with NSAIDs may increase risk of GI bleeding due to reduced platelet serotonin uptake.",
    evidence:
      "Observational studies link serotonergic antidepressant + NSAID combinations to higher GI bleeding rates.",
  },
  {
    drug_a: "nabumetone",
    drug_b: "dexamethasone",
    severity: "moderate",
    mechanism:
      "Both irritate the GI lining; combined use substantially increases risk of ulcers and GI bleeding.",
    evidence:
      "Guidelines recommend gastroprotection when NSAIDs and corticosteroids are combined.",
  },
  {
    drug_a: "nabumetone",
    drug_b: "dipyridamole",
    severity: "moderate",
    mechanism:
      "NSAIDs may add to the antiplatelet effect and irritate the GI lining, raising bleeding risk.",
    evidence:
      "Cardiology guidance flags added GI bleeding risk when NSAIDs are combined with antiplatelet therapy.",
  },
  {
    drug_a: "nabumetone",
    drug_b: "duloxetine",
    severity: "moderate",
    mechanism:
      "SSRIs combined with NSAIDs may increase risk of GI bleeding due to reduced platelet serotonin uptake.",
    evidence:
      "Observational studies link serotonergic antidepressant + NSAID combinations to higher GI bleeding rates.",
  },
  {
    drug_a: "nabumetone",
    drug_b: "edoxaban",
    severity: "high",
    mechanism:
      "NSAIDs inhibit platelet aggregation and can displace anticoagulants from protein binding, increasing bleeding risk.",
    evidence:
      "Labeling for anticoagulants warns of increased bleeding risk with concurrent NSAID use.",
  },
  {
    drug_a: "nabumetone",
    drug_b: "enalapril",
    severity: "moderate",
    mechanism:
      "NSAIDs can reduce the antihypertensive effect of ACE inhibitors and impair renal function.",
    evidence:
      "Labeling for both drug classes notes reduced antihypertensive effect and renal risk with combined use.",
  },
  {
    drug_a: "nabumetone",
    drug_b: "enoxaparin",
    severity: "high",
    mechanism:
      "NSAIDs inhibit platelet aggregation and can displace anticoagulants from protein binding, increasing bleeding risk.",
    evidence:
      "Labeling for anticoagulants warns of increased bleeding risk with concurrent NSAID use.",
  },
  {
    drug_a: "nabumetone",
    drug_b: "escitalopram",
    severity: "moderate",
    mechanism:
      "SSRIs combined with NSAIDs may increase risk of GI bleeding due to reduced platelet serotonin uptake.",
    evidence:
      "Observational studies link SSRI + NSAID combinations to higher GI bleeding rates.",
  },
  {
    drug_a: "nabumetone",
    drug_b: "fluoxetine",
    severity: "moderate",
    mechanism:
      "SSRIs combined with NSAIDs may increase risk of GI bleeding due to reduced platelet serotonin uptake.",
    evidence:
      "Observational studies link SSRI + NSAID combinations to higher GI bleeding rates.",
  },
  {
    drug_a: "nabumetone",
    drug_b: "fluticasone",
    severity: "moderate",
    mechanism:
      "Both irritate the GI lining; combined use substantially increases risk of ulcers and GI bleeding.",
    evidence:
      "Guidelines recommend gastroprotection when NSAIDs and corticosteroids are combined.",
  },
  {
    drug_a: "nabumetone",
    drug_b: "fluvoxamine",
    severity: "moderate",
    mechanism:
      "SSRIs combined with NSAIDs may increase risk of GI bleeding due to reduced platelet serotonin uptake.",
    evidence:
      "Observational studies link SSRI + NSAID combinations to higher GI bleeding rates.",
  },
  {
    drug_a: "nabumetone",
    drug_b: "fosinopril",
    severity: "moderate",
    mechanism:
      "NSAIDs can reduce the antihypertensive effect of ACE inhibitors and impair renal function.",
    evidence:
      "Labeling for both drug classes notes reduced antihypertensive effect and renal risk with combined use.",
  },
  {
    drug_a: "nabumetone",
    drug_b: "heparin",
    severity: "high",
    mechanism:
      "NSAIDs inhibit platelet aggregation and can displace anticoagulants from protein binding, increasing bleeding risk.",
    evidence:
      "Labeling for anticoagulants warns of increased bleeding risk with concurrent NSAID use.",
  },
  {
    drug_a: "nabumetone",
    drug_b: "hydrocortisone",
    severity: "moderate",
    mechanism:
      "Both irritate the GI lining; combined use substantially increases risk of ulcers and GI bleeding.",
    evidence:
      "Guidelines recommend gastroprotection when NSAIDs and corticosteroids are combined.",
  },
  {
    drug_a: "nabumetone",
    drug_b: "irbesartan",
    severity: "moderate",
    mechanism:
      "NSAIDs can reduce the antihypertensive effect of ARBs and impair renal function.",
    evidence:
      "Labeling for both drug classes notes reduced antihypertensive effect and renal risk with combined use.",
  },
  {
    drug_a: "nabumetone",
    drug_b: "levomilnacipran",
    severity: "moderate",
    mechanism:
      "SSRIs combined with NSAIDs may increase risk of GI bleeding due to reduced platelet serotonin uptake.",
    evidence:
      "Observational studies link serotonergic antidepressant + NSAID combinations to higher GI bleeding rates.",
  },
  {
    drug_a: "nabumetone",
    drug_b: "lisinopril",
    severity: "moderate",
    mechanism:
      "NSAIDs can reduce the antihypertensive effect of ACE inhibitors and impair renal function.",
    evidence:
      "Labeling for both drug classes notes reduced antihypertensive effect and renal risk with combined use.",
  },
  {
    drug_a: "nabumetone",
    drug_b: "lithium",
    severity: "moderate",
    mechanism:
      "NSAIDs can reduce renal clearance of lithium, raising lithium levels toward toxicity.",
    evidence:
      "Lithium labeling warns of elevated levels with concurrent NSAID use, warranting level monitoring.",
  },
  {
    drug_a: "nabumetone",
    drug_b: "losartan",
    severity: "moderate",
    mechanism:
      "NSAIDs can reduce the antihypertensive effect of ARBs and impair renal function.",
    evidence:
      "Labeling for both drug classes notes reduced antihypertensive effect and renal risk with combined use.",
  },
  {
    drug_a: "nabumetone",
    drug_b: "methylprednisolone",
    severity: "moderate",
    mechanism:
      "Both irritate the GI lining; combined use substantially increases risk of ulcers and GI bleeding.",
    evidence:
      "Guidelines recommend gastroprotection when NSAIDs and corticosteroids are combined.",
  },
  {
    drug_a: "nabumetone",
    drug_b: "naproxen",
    severity: "low",
    mechanism:
      "Combining two NSAIDs adds to GI and renal risk without added therapeutic benefit.",
    evidence:
      "Guidelines recommend against routine combination of two NSAIDs.",
  },
  {
    drug_a: "nabumetone",
    drug_b: "olmesartan",
    severity: "moderate",
    mechanism:
      "NSAIDs can reduce the antihypertensive effect of ARBs and impair renal function.",
    evidence:
      "Labeling for both drug classes notes reduced antihypertensive effect and renal risk with combined use.",
  },
  {
    drug_a: "nabumetone",
    drug_b: "paroxetine",
    severity: "moderate",
    mechanism:
      "SSRIs combined with NSAIDs may increase risk of GI bleeding due to reduced platelet serotonin uptake.",
    evidence:
      "Observational studies link SSRI + NSAID combinations to higher GI bleeding rates.",
  },
  {
    drug_a: "nabumetone",
    drug_b: "perindopril",
    severity: "moderate",
    mechanism:
      "NSAIDs can reduce the antihypertensive effect of ACE inhibitors and impair renal function.",
    evidence:
      "Labeling for both drug classes notes reduced antihypertensive effect and renal risk with combined use.",
  },
  {
    drug_a: "nabumetone",
    drug_b: "piroxicam",
    severity: "low",
    mechanism:
      "Combining two NSAIDs adds to GI and renal risk without added therapeutic benefit.",
    evidence:
      "Guidelines recommend against routine combination of two NSAIDs.",
  },
  {
    drug_a: "nabumetone",
    drug_b: "prasugrel",
    severity: "moderate",
    mechanism:
      "NSAIDs may add to the antiplatelet effect and irritate the GI lining, raising bleeding risk.",
    evidence:
      "Cardiology guidance flags added GI bleeding risk when NSAIDs are combined with antiplatelet therapy.",
  },
  {
    drug_a: "nabumetone",
    drug_b: "prednisone",
    severity: "moderate",
    mechanism:
      "Both irritate the GI lining; combined use substantially increases risk of ulcers and GI bleeding.",
    evidence:
      "Guidelines recommend gastroprotection when NSAIDs and corticosteroids are combined.",
  },
  {
    drug_a: "nabumetone",
    drug_b: "quinapril",
    severity: "moderate",
    mechanism:
      "NSAIDs can reduce the antihypertensive effect of ACE inhibitors and impair renal function.",
    evidence:
      "Labeling for both drug classes notes reduced antihypertensive effect and renal risk with combined use.",
  },
  {
    drug_a: "nabumetone",
    drug_b: "ramipril",
    severity: "moderate",
    mechanism:
      "NSAIDs can reduce the antihypertensive effect of ACE inhibitors and impair renal function.",
    evidence:
      "Labeling for both drug classes notes reduced antihypertensive effect and renal risk with combined use.",
  },
  {
    drug_a: "nabumetone",
    drug_b: "rivaroxaban",
    severity: "high",
    mechanism:
      "NSAIDs inhibit platelet aggregation and can displace anticoagulants from protein binding, increasing bleeding risk.",
    evidence:
      "Labeling for anticoagulants warns of increased bleeding risk with concurrent NSAID use.",
  },
  {
    drug_a: "nabumetone",
    drug_b: "sertraline",
    severity: "moderate",
    mechanism:
      "SSRIs combined with NSAIDs may increase risk of GI bleeding due to reduced platelet serotonin uptake.",
    evidence:
      "Observational studies link SSRI + NSAID combinations to higher GI bleeding rates.",
  },
  {
    drug_a: "nabumetone",
    drug_b: "sulindac",
    severity: "low",
    mechanism:
      "Combining two NSAIDs adds to GI and renal risk without added therapeutic benefit.",
    evidence:
      "Guidelines recommend against routine combination of two NSAIDs.",
  },
  {
    drug_a: "nabumetone",
    drug_b: "telmisartan",
    severity: "moderate",
    mechanism:
      "NSAIDs can reduce the antihypertensive effect of ARBs and impair renal function.",
    evidence:
      "Labeling for both drug classes notes reduced antihypertensive effect and renal risk with combined use.",
  },
  {
    drug_a: "nabumetone",
    drug_b: "ticagrelor",
    severity: "moderate",
    mechanism:
      "NSAIDs may add to the antiplatelet effect and irritate the GI lining, raising bleeding risk.",
    evidence:
      "Cardiology guidance flags added GI bleeding risk when NSAIDs are combined with antiplatelet therapy.",
  },
  {
    drug_a: "nabumetone",
    drug_b: "trandolapril",
    severity: "moderate",
    mechanism:
      "NSAIDs can reduce the antihypertensive effect of ACE inhibitors and impair renal function.",
    evidence:
      "Labeling for both drug classes notes reduced antihypertensive effect and renal risk with combined use.",
  },
  {
    drug_a: "nabumetone",
    drug_b: "triamcinolone",
    severity: "moderate",
    mechanism:
      "Both irritate the GI lining; combined use substantially increases risk of ulcers and GI bleeding.",
    evidence:
      "Guidelines recommend gastroprotection when NSAIDs and corticosteroids are combined.",
  },
  {
    drug_a: "nabumetone",
    drug_b: "valsartan",
    severity: "moderate",
    mechanism:
      "NSAIDs can reduce the antihypertensive effect of ARBs and impair renal function.",
    evidence:
      "Labeling for both drug classes notes reduced antihypertensive effect and renal risk with combined use.",
  },
  {
    drug_a: "nabumetone",
    drug_b: "venlafaxine",
    severity: "moderate",
    mechanism:
      "SSRIs combined with NSAIDs may increase risk of GI bleeding due to reduced platelet serotonin uptake.",
    evidence:
      "Observational studies link serotonergic antidepressant + NSAID combinations to higher GI bleeding rates.",
  },
  {
    drug_a: "nabumetone",
    drug_b: "warfarin",
    severity: "high",
    mechanism:
      "NSAIDs inhibit platelet aggregation and can displace anticoagulants from protein binding, increasing bleeding risk.",
    evidence:
      "Labeling for anticoagulants warns of increased bleeding risk with concurrent NSAID use.",
  },
  {
    drug_a: "nadolol",
    drug_b: "canagliflozin",
    severity: "low",
    mechanism:
      "Beta blockers can mask the warning signs of hypoglycemia such as tremor and rapid heartbeat.",
    evidence:
      "Diabetes management guidance notes blunted hypoglycemia awareness with beta blocker use.",
  },
  {
    drug_a: "nadolol",
    drug_b: "dapagliflozin",
    severity: "low",
    mechanism:
      "Beta blockers can mask the warning signs of hypoglycemia such as tremor and rapid heartbeat.",
    evidence:
      "Diabetes management guidance notes blunted hypoglycemia awareness with beta blocker use.",
  },
  {
    drug_a: "nadolol",
    drug_b: "diltiazem",
    severity: "moderate",
    mechanism:
      "Both slow cardiac conduction; combined use can cause excessive bradycardia or heart block.",
    evidence:
      "Cardiology guidance recommends caution combining beta blockers with non-dihydropyridine calcium channel blockers.",
  },
  {
    drug_a: "nadolol",
    drug_b: "dulaglutide",
    severity: "low",
    mechanism:
      "Beta blockers can mask the warning signs of hypoglycemia such as tremor and rapid heartbeat.",
    evidence:
      "Diabetes management guidance notes blunted hypoglycemia awareness with beta blocker use.",
  },
  {
    drug_a: "nadolol",
    drug_b: "empagliflozin",
    severity: "low",
    mechanism:
      "Beta blockers can mask the warning signs of hypoglycemia such as tremor and rapid heartbeat.",
    evidence:
      "Diabetes management guidance notes blunted hypoglycemia awareness with beta blocker use.",
  },
  {
    drug_a: "nadolol",
    drug_b: "glimepiride",
    severity: "low",
    mechanism:
      "Beta blockers can mask the warning signs of hypoglycemia such as tremor and rapid heartbeat.",
    evidence:
      "Diabetes management guidance notes blunted hypoglycemia awareness with beta blocker use.",
  },
  {
    drug_a: "nadolol",
    drug_b: "glipizide",
    severity: "low",
    mechanism:
      "Beta blockers can mask the warning signs of hypoglycemia such as tremor and rapid heartbeat.",
    evidence:
      "Diabetes management guidance notes blunted hypoglycemia awareness with beta blocker use.",
  },
  {
    drug_a: "nadolol",
    drug_b: "glyburide",
    severity: "low",
    mechanism:
      "Beta blockers can mask the warning signs of hypoglycemia such as tremor and rapid heartbeat.",
    evidence:
      "Diabetes management guidance notes blunted hypoglycemia awareness with beta blocker use.",
  },
  {
    drug_a: "nadolol",
    drug_b: "insulin_aspart",
    severity: "low",
    mechanism:
      "Beta blockers can mask the warning signs of hypoglycemia such as tremor and rapid heartbeat.",
    evidence:
      "Diabetes management guidance notes blunted hypoglycemia awareness with beta blocker use.",
  },
  {
    drug_a: "nadolol",
    drug_b: "insulin_glargine",
    severity: "low",
    mechanism:
      "Beta blockers can mask the warning signs of hypoglycemia such as tremor and rapid heartbeat.",
    evidence:
      "Diabetes management guidance notes blunted hypoglycemia awareness with beta blocker use.",
  },
  {
    drug_a: "nadolol",
    drug_b: "insulin_lispro",
    severity: "low",
    mechanism:
      "Beta blockers can mask the warning signs of hypoglycemia such as tremor and rapid heartbeat.",
    evidence:
      "Diabetes management guidance notes blunted hypoglycemia awareness with beta blocker use.",
  },
  {
    drug_a: "nadolol",
    drug_b: "linagliptin",
    severity: "low",
    mechanism:
      "Beta blockers can mask the warning signs of hypoglycemia such as tremor and rapid heartbeat.",
    evidence:
      "Diabetes management guidance notes blunted hypoglycemia awareness with beta blocker use.",
  },
  {
    drug_a: "nadolol",
    drug_b: "liraglutide",
    severity: "low",
    mechanism:
      "Beta blockers can mask the warning signs of hypoglycemia such as tremor and rapid heartbeat.",
    evidence:
      "Diabetes management guidance notes blunted hypoglycemia awareness with beta blocker use.",
  },
  {
    drug_a: "nadolol",
    drug_b: "metformin",
    severity: "low",
    mechanism:
      "Beta blockers can mask the warning signs of hypoglycemia such as tremor and rapid heartbeat.",
    evidence:
      "Diabetes management guidance notes blunted hypoglycemia awareness with beta blocker use.",
  },
  {
    drug_a: "nadolol",
    drug_b: "nebivolol",
    severity: "low",
    mechanism:
      "Combining two beta blockers adds to heart-rate-lowering effects without added benefit.",
    evidence:
      "Guidelines recommend against routine combination of two beta blockers.",
  },
  {
    drug_a: "nadolol",
    drug_b: "pioglitazone",
    severity: "low",
    mechanism:
      "Beta blockers can mask the warning signs of hypoglycemia such as tremor and rapid heartbeat.",
    evidence:
      "Diabetes management guidance notes blunted hypoglycemia awareness with beta blocker use.",
  },
  {
    drug_a: "nadolol",
    drug_b: "propranolol",
    severity: "low",
    mechanism:
      "Combining two beta blockers adds to heart-rate-lowering effects without added benefit.",
    evidence:
      "Guidelines recommend against routine combination of two beta blockers.",
  },
  {
    drug_a: "nadolol",
    drug_b: "saxagliptin",
    severity: "low",
    mechanism:
      "Beta blockers can mask the warning signs of hypoglycemia such as tremor and rapid heartbeat.",
    evidence:
      "Diabetes management guidance notes blunted hypoglycemia awareness with beta blocker use.",
  },
  {
    drug_a: "nadolol",
    drug_b: "semaglutide",
    severity: "low",
    mechanism:
      "Beta blockers can mask the warning signs of hypoglycemia such as tremor and rapid heartbeat.",
    evidence:
      "Diabetes management guidance notes blunted hypoglycemia awareness with beta blocker use.",
  },
  {
    drug_a: "nadolol",
    drug_b: "sitagliptin",
    severity: "low",
    mechanism:
      "Beta blockers can mask the warning signs of hypoglycemia such as tremor and rapid heartbeat.",
    evidence:
      "Diabetes management guidance notes blunted hypoglycemia awareness with beta blocker use.",
  },
  {
    drug_a: "nadolol",
    drug_b: "sotalol",
    severity: "low",
    mechanism:
      "Combining two beta blockers adds to heart-rate-lowering effects without added benefit.",
    evidence:
      "Guidelines recommend against routine combination of two beta blockers.",
  },
  {
    drug_a: "nadolol",
    drug_b: "verapamil",
    severity: "moderate",
    mechanism:
      "Both slow cardiac conduction; combined use can cause excessive bradycardia or heart block.",
    evidence:
      "Cardiology guidance recommends caution combining beta blockers with non-dihydropyridine calcium channel blockers.",
  },
  {
    drug_a: "naproxen",
    drug_b: "azilsartan",
    severity: "moderate",
    mechanism:
      "NSAIDs can reduce the antihypertensive effect of ARBs and impair renal function.",
    evidence:
      "Labeling for both drug classes notes reduced antihypertensive effect and renal risk with combined use.",
  },
  {
    drug_a: "naproxen",
    drug_b: "benazepril",
    severity: "moderate",
    mechanism:
      "NSAIDs can reduce the antihypertensive effect of ACE inhibitors and impair renal function.",
    evidence:
      "Labeling for both drug classes notes reduced antihypertensive effect and renal risk with combined use.",
  },
  {
    drug_a: "naproxen",
    drug_b: "budesonide",
    severity: "moderate",
    mechanism:
      "Both irritate the GI lining; combined use substantially increases risk of ulcers and GI bleeding.",
    evidence:
      "Guidelines recommend gastroprotection when NSAIDs and corticosteroids are combined.",
  },
  {
    drug_a: "naproxen",
    drug_b: "candesartan",
    severity: "moderate",
    mechanism:
      "NSAIDs can reduce the antihypertensive effect of ARBs and impair renal function.",
    evidence:
      "Labeling for both drug classes notes reduced antihypertensive effect and renal risk with combined use.",
  },
  {
    drug_a: "naproxen",
    drug_b: "desvenlafaxine",
    severity: "moderate",
    mechanism:
      "SSRIs combined with NSAIDs may increase risk of GI bleeding due to reduced platelet serotonin uptake.",
    evidence:
      "Observational studies link serotonergic antidepressant + NSAID combinations to higher GI bleeding rates.",
  },
  {
    drug_a: "naproxen",
    drug_b: "dipyridamole",
    severity: "moderate",
    mechanism:
      "NSAIDs may add to the antiplatelet effect and irritate the GI lining, raising bleeding risk.",
    evidence:
      "Cardiology guidance flags added GI bleeding risk when NSAIDs are combined with antiplatelet therapy.",
  },
  {
    drug_a: "naproxen",
    drug_b: "edoxaban",
    severity: "high",
    mechanism:
      "NSAIDs inhibit platelet aggregation and can displace anticoagulants from protein binding, increasing bleeding risk.",
    evidence:
      "Labeling for anticoagulants warns of increased bleeding risk with concurrent NSAID use.",
  },
  {
    drug_a: "naproxen",
    drug_b: "enoxaparin",
    severity: "high",
    mechanism:
      "NSAIDs inhibit platelet aggregation and can displace anticoagulants from protein binding, increasing bleeding risk.",
    evidence:
      "Labeling for anticoagulants warns of increased bleeding risk with concurrent NSAID use.",
  },
  {
    drug_a: "naproxen",
    drug_b: "fluticasone",
    severity: "moderate",
    mechanism:
      "Both irritate the GI lining; combined use substantially increases risk of ulcers and GI bleeding.",
    evidence:
      "Guidelines recommend gastroprotection when NSAIDs and corticosteroids are combined.",
  },
  {
    drug_a: "naproxen",
    drug_b: "fluvoxamine",
    severity: "moderate",
    mechanism:
      "SSRIs combined with NSAIDs may increase risk of GI bleeding due to reduced platelet serotonin uptake.",
    evidence:
      "Observational studies link SSRI + NSAID combinations to higher GI bleeding rates.",
  },
  {
    drug_a: "naproxen",
    drug_b: "fosinopril",
    severity: "moderate",
    mechanism:
      "NSAIDs can reduce the antihypertensive effect of ACE inhibitors and impair renal function.",
    evidence:
      "Labeling for both drug classes notes reduced antihypertensive effect and renal risk with combined use.",
  },
  {
    drug_a: "naproxen",
    drug_b: "hydrocortisone",
    severity: "moderate",
    mechanism:
      "Both irritate the GI lining; combined use substantially increases risk of ulcers and GI bleeding.",
    evidence:
      "Guidelines recommend gastroprotection when NSAIDs and corticosteroids are combined.",
  },
  {
    drug_a: "naproxen",
    drug_b: "levomilnacipran",
    severity: "moderate",
    mechanism:
      "SSRIs combined with NSAIDs may increase risk of GI bleeding due to reduced platelet serotonin uptake.",
    evidence:
      "Observational studies link serotonergic antidepressant + NSAID combinations to higher GI bleeding rates.",
  },
  {
    drug_a: "naproxen",
    drug_b: "perindopril",
    severity: "moderate",
    mechanism:
      "NSAIDs can reduce the antihypertensive effect of ACE inhibitors and impair renal function.",
    evidence:
      "Labeling for both drug classes notes reduced antihypertensive effect and renal risk with combined use.",
  },
  {
    drug_a: "naproxen",
    drug_b: "piroxicam",
    severity: "low",
    mechanism:
      "Combining two NSAIDs adds to GI and renal risk without added therapeutic benefit.",
    evidence:
      "Guidelines recommend against routine combination of two NSAIDs.",
  },
  {
    drug_a: "naproxen",
    drug_b: "prasugrel",
    severity: "moderate",
    mechanism:
      "NSAIDs may add to the antiplatelet effect and irritate the GI lining, raising bleeding risk.",
    evidence:
      "Cardiology guidance flags added GI bleeding risk when NSAIDs are combined with antiplatelet therapy.",
  },
  {
    drug_a: "naproxen",
    drug_b: "quinapril",
    severity: "moderate",
    mechanism:
      "NSAIDs can reduce the antihypertensive effect of ACE inhibitors and impair renal function.",
    evidence:
      "Labeling for both drug classes notes reduced antihypertensive effect and renal risk with combined use.",
  },
  {
    drug_a: "naproxen",
    drug_b: "sulindac",
    severity: "low",
    mechanism:
      "Combining two NSAIDs adds to GI and renal risk without added therapeutic benefit.",
    evidence:
      "Guidelines recommend against routine combination of two NSAIDs.",
  },
  {
    drug_a: "naproxen",
    drug_b: "telmisartan",
    severity: "moderate",
    mechanism:
      "NSAIDs can reduce the antihypertensive effect of ARBs and impair renal function.",
    evidence:
      "Labeling for both drug classes notes reduced antihypertensive effect and renal risk with combined use.",
  },
  {
    drug_a: "naproxen",
    drug_b: "ticagrelor",
    severity: "moderate",
    mechanism:
      "NSAIDs may add to the antiplatelet effect and irritate the GI lining, raising bleeding risk.",
    evidence:
      "Cardiology guidance flags added GI bleeding risk when NSAIDs are combined with antiplatelet therapy.",
  },
  {
    drug_a: "naproxen",
    drug_b: "trandolapril",
    severity: "moderate",
    mechanism:
      "NSAIDs can reduce the antihypertensive effect of ACE inhibitors and impair renal function.",
    evidence:
      "Labeling for both drug classes notes reduced antihypertensive effect and renal risk with combined use.",
  },
  {
    drug_a: "naproxen",
    drug_b: "triamcinolone",
    severity: "moderate",
    mechanism:
      "Both irritate the GI lining; combined use substantially increases risk of ulcers and GI bleeding.",
    evidence:
      "Guidelines recommend gastroprotection when NSAIDs and corticosteroids are combined.",
  },
  {
    drug_a: "nebivolol",
    drug_b: "canagliflozin",
    severity: "low",
    mechanism:
      "Beta blockers can mask the warning signs of hypoglycemia such as tremor and rapid heartbeat.",
    evidence:
      "Diabetes management guidance notes blunted hypoglycemia awareness with beta blocker use.",
  },
  {
    drug_a: "nebivolol",
    drug_b: "dapagliflozin",
    severity: "low",
    mechanism:
      "Beta blockers can mask the warning signs of hypoglycemia such as tremor and rapid heartbeat.",
    evidence:
      "Diabetes management guidance notes blunted hypoglycemia awareness with beta blocker use.",
  },
  {
    drug_a: "nebivolol",
    drug_b: "diltiazem",
    severity: "moderate",
    mechanism:
      "Both slow cardiac conduction; combined use can cause excessive bradycardia or heart block.",
    evidence:
      "Cardiology guidance recommends caution combining beta blockers with non-dihydropyridine calcium channel blockers.",
  },
  {
    drug_a: "nebivolol",
    drug_b: "dulaglutide",
    severity: "low",
    mechanism:
      "Beta blockers can mask the warning signs of hypoglycemia such as tremor and rapid heartbeat.",
    evidence:
      "Diabetes management guidance notes blunted hypoglycemia awareness with beta blocker use.",
  },
  {
    drug_a: "nebivolol",
    drug_b: "empagliflozin",
    severity: "low",
    mechanism:
      "Beta blockers can mask the warning signs of hypoglycemia such as tremor and rapid heartbeat.",
    evidence:
      "Diabetes management guidance notes blunted hypoglycemia awareness with beta blocker use.",
  },
  {
    drug_a: "nebivolol",
    drug_b: "glimepiride",
    severity: "low",
    mechanism:
      "Beta blockers can mask the warning signs of hypoglycemia such as tremor and rapid heartbeat.",
    evidence:
      "Diabetes management guidance notes blunted hypoglycemia awareness with beta blocker use.",
  },
  {
    drug_a: "nebivolol",
    drug_b: "glipizide",
    severity: "low",
    mechanism:
      "Beta blockers can mask the warning signs of hypoglycemia such as tremor and rapid heartbeat.",
    evidence:
      "Diabetes management guidance notes blunted hypoglycemia awareness with beta blocker use.",
  },
  {
    drug_a: "nebivolol",
    drug_b: "glyburide",
    severity: "low",
    mechanism:
      "Beta blockers can mask the warning signs of hypoglycemia such as tremor and rapid heartbeat.",
    evidence:
      "Diabetes management guidance notes blunted hypoglycemia awareness with beta blocker use.",
  },
  {
    drug_a: "nebivolol",
    drug_b: "insulin_aspart",
    severity: "low",
    mechanism:
      "Beta blockers can mask the warning signs of hypoglycemia such as tremor and rapid heartbeat.",
    evidence:
      "Diabetes management guidance notes blunted hypoglycemia awareness with beta blocker use.",
  },
  {
    drug_a: "nebivolol",
    drug_b: "insulin_glargine",
    severity: "low",
    mechanism:
      "Beta blockers can mask the warning signs of hypoglycemia such as tremor and rapid heartbeat.",
    evidence:
      "Diabetes management guidance notes blunted hypoglycemia awareness with beta blocker use.",
  },
  {
    drug_a: "nebivolol",
    drug_b: "insulin_lispro",
    severity: "low",
    mechanism:
      "Beta blockers can mask the warning signs of hypoglycemia such as tremor and rapid heartbeat.",
    evidence:
      "Diabetes management guidance notes blunted hypoglycemia awareness with beta blocker use.",
  },
  {
    drug_a: "nebivolol",
    drug_b: "linagliptin",
    severity: "low",
    mechanism:
      "Beta blockers can mask the warning signs of hypoglycemia such as tremor and rapid heartbeat.",
    evidence:
      "Diabetes management guidance notes blunted hypoglycemia awareness with beta blocker use.",
  },
  {
    drug_a: "nebivolol",
    drug_b: "liraglutide",
    severity: "low",
    mechanism:
      "Beta blockers can mask the warning signs of hypoglycemia such as tremor and rapid heartbeat.",
    evidence:
      "Diabetes management guidance notes blunted hypoglycemia awareness with beta blocker use.",
  },
  {
    drug_a: "nebivolol",
    drug_b: "metformin",
    severity: "low",
    mechanism:
      "Beta blockers can mask the warning signs of hypoglycemia such as tremor and rapid heartbeat.",
    evidence:
      "Diabetes management guidance notes blunted hypoglycemia awareness with beta blocker use.",
  },
  {
    drug_a: "nebivolol",
    drug_b: "pioglitazone",
    severity: "low",
    mechanism:
      "Beta blockers can mask the warning signs of hypoglycemia such as tremor and rapid heartbeat.",
    evidence:
      "Diabetes management guidance notes blunted hypoglycemia awareness with beta blocker use.",
  },
  {
    drug_a: "nebivolol",
    drug_b: "propranolol",
    severity: "low",
    mechanism:
      "Combining two beta blockers adds to heart-rate-lowering effects without added benefit.",
    evidence:
      "Guidelines recommend against routine combination of two beta blockers.",
  },
  {
    drug_a: "nebivolol",
    drug_b: "saxagliptin",
    severity: "low",
    mechanism:
      "Beta blockers can mask the warning signs of hypoglycemia such as tremor and rapid heartbeat.",
    evidence:
      "Diabetes management guidance notes blunted hypoglycemia awareness with beta blocker use.",
  },
  {
    drug_a: "nebivolol",
    drug_b: "semaglutide",
    severity: "low",
    mechanism:
      "Beta blockers can mask the warning signs of hypoglycemia such as tremor and rapid heartbeat.",
    evidence:
      "Diabetes management guidance notes blunted hypoglycemia awareness with beta blocker use.",
  },
  {
    drug_a: "nebivolol",
    drug_b: "sitagliptin",
    severity: "low",
    mechanism:
      "Beta blockers can mask the warning signs of hypoglycemia such as tremor and rapid heartbeat.",
    evidence:
      "Diabetes management guidance notes blunted hypoglycemia awareness with beta blocker use.",
  },
  {
    drug_a: "nebivolol",
    drug_b: "sotalol",
    severity: "low",
    mechanism:
      "Combining two beta blockers adds to heart-rate-lowering effects without added benefit.",
    evidence:
      "Guidelines recommend against routine combination of two beta blockers.",
  },
  {
    drug_a: "nebivolol",
    drug_b: "verapamil",
    severity: "moderate",
    mechanism:
      "Both slow cardiac conduction; combined use can cause excessive bradycardia or heart block.",
    evidence:
      "Cardiology guidance recommends caution combining beta blockers with non-dihydropyridine calcium channel blockers.",
  },
  {
    drug_a: "nizatidine",
    drug_b: "fluconazole",
    severity: "moderate",
    mechanism:
      "Reduced gastric acidity from H2 blockers can impair absorption of azole antifungals that require an acidic environment.",
    evidence:
      "Antifungal labeling notes reduced bioavailability with concurrent acid-suppressing therapy.",
  },
  {
    drug_a: "nizatidine",
    drug_b: "itraconazole",
    severity: "moderate",
    mechanism:
      "Reduced gastric acidity from H2 blockers can impair absorption of azole antifungals that require an acidic environment.",
    evidence:
      "Antifungal labeling notes reduced bioavailability with concurrent acid-suppressing therapy.",
  },
  {
    drug_a: "nizatidine",
    drug_b: "ketoconazole",
    severity: "moderate",
    mechanism:
      "Reduced gastric acidity from H2 blockers can impair absorption of azole antifungals that require an acidic environment.",
    evidence:
      "Antifungal labeling notes reduced bioavailability with concurrent acid-suppressing therapy.",
  },
  {
    drug_a: "nizatidine",
    drug_b: "levothyroxine",
    severity: "low",
    mechanism:
      "Reduced gastric acidity from H2 blockers may impair thyroid hormone absorption.",
    evidence:
      "Endocrinology guidance recommends separating dosing times and monitoring thyroid levels.",
  },
  {
    drug_a: "nizatidine",
    drug_b: "liothyronine",
    severity: "low",
    mechanism:
      "Reduced gastric acidity from H2 blockers may impair thyroid hormone absorption.",
    evidence:
      "Endocrinology guidance recommends separating dosing times and monitoring thyroid levels.",
  },
  {
    drug_a: "olanzapine",
    drug_b: "ondansetron",
    severity: "moderate",
    mechanism:
      "Some antipsychotics have mild serotonergic activity that may add to that of other serotonergic agents.",
    evidence:
      "Case reports describe serotonin syndrome features when antipsychotics are combined with strongly serotonergic drugs.",
  },
  {
    drug_a: "olanzapine",
    drug_b: "paliperidone",
    severity: "moderate",
    mechanism:
      "Combining two antipsychotics adds to sedation, metabolic, and QT-prolongation risk without clear added benefit.",
    evidence:
      "Guidelines generally recommend against routine antipsychotic polypharmacy.",
  },
  {
    drug_a: "olanzapine",
    drug_b: "rizatriptan",
    severity: "moderate",
    mechanism:
      "Some antipsychotics have mild serotonergic activity that may add to that of other serotonergic agents.",
    evidence:
      "Case reports describe serotonin syndrome features when antipsychotics are combined with strongly serotonergic drugs.",
  },
  {
    drug_a: "olanzapine",
    drug_b: "st_johns_wort",
    severity: "moderate",
    mechanism:
      "Some antipsychotics have mild serotonergic activity that may add to that of other serotonergic agents.",
    evidence:
      "Case reports describe serotonin syndrome features when antipsychotics are combined with strongly serotonergic drugs.",
  },
  {
    drug_a: "olanzapine",
    drug_b: "sumatriptan",
    severity: "moderate",
    mechanism:
      "Some antipsychotics have mild serotonergic activity that may add to that of other serotonergic agents.",
    evidence:
      "Case reports describe serotonin syndrome features when antipsychotics are combined with strongly serotonergic drugs.",
  },
  {
    drug_a: "olanzapine",
    drug_b: "ziprasidone",
    severity: "moderate",
    mechanism:
      "Combining two antipsychotics adds to sedation, metabolic, and QT-prolongation risk without clear added benefit.",
    evidence:
      "Guidelines generally recommend against routine antipsychotic polypharmacy.",
  },
  {
    drug_a: "olmesartan",
    drug_b: "triamterene",
    severity: "moderate",
    mechanism:
      "Both raise serum potassium; combined use increases the risk of hyperkalemia.",
    evidence:
      "Labeling for potassium-sparing diuretics warns of hyperkalemia risk with ARBs.",
  },
  {
    drug_a: "omeprazole",
    drug_b: "fluconazole",
    severity: "moderate",
    mechanism:
      "Reduced gastric acidity from PPIs can impair absorption of azole antifungals that require an acidic environment.",
    evidence:
      "Antifungal labeling notes reduced bioavailability with concurrent acid-suppressing therapy.",
  },
  {
    drug_a: "omeprazole",
    drug_b: "itraconazole",
    severity: "moderate",
    mechanism:
      "Reduced gastric acidity from PPIs can impair absorption of azole antifungals that require an acidic environment.",
    evidence:
      "Antifungal labeling notes reduced bioavailability with concurrent acid-suppressing therapy.",
  },
  {
    drug_a: "omeprazole",
    drug_b: "ketoconazole",
    severity: "moderate",
    mechanism:
      "Reduced gastric acidity from PPIs can impair absorption of azole antifungals that require an acidic environment.",
    evidence:
      "Antifungal labeling notes reduced bioavailability with concurrent acid-suppressing therapy.",
  },
  {
    drug_a: "omeprazole",
    drug_b: "liothyronine",
    severity: "low",
    mechanism:
      "Reduced gastric acidity from PPIs may impair levothyroxine absorption.",
    evidence:
      "Endocrinology guidance recommends separating dosing times and monitoring thyroid levels.",
  },
  {
    drug_a: "ondansetron",
    drug_b: "ziprasidone",
    severity: "moderate",
    mechanism:
      "Both prolong the QT interval; combined use raises the risk of dangerous arrhythmia.",
    evidence:
      "Drug-induced long QT reference lists flag this combination.",
  },
  {
    drug_a: "oxazepam",
    drug_b: "baclofen",
    severity: "moderate",
    mechanism:
      "Both cause CNS depression; combined use increases sedation and fall risk, especially in older adults.",
    evidence:
      "Muscle relaxant labeling warns of additive sedation with benzodiazepines.",
  },
  {
    drug_a: "oxazepam",
    drug_b: "carisoprodol",
    severity: "moderate",
    mechanism:
      "Both cause CNS depression; combined use increases sedation and fall risk, especially in older adults.",
    evidence:
      "Muscle relaxant labeling warns of additive sedation with benzodiazepines.",
  },
  {
    drug_a: "oxazepam",
    drug_b: "cyclobenzaprine",
    severity: "moderate",
    mechanism:
      "Both cause CNS depression; combined use increases sedation and fall risk, especially in older adults.",
    evidence:
      "Muscle relaxant labeling warns of additive sedation with benzodiazepines.",
  },
  {
    drug_a: "oxazepam",
    drug_b: "diphenhydramine",
    severity: "moderate",
    mechanism:
      "Both cause CNS depression; combined use increases sedation and impairs alertness.",
    evidence:
      "Antihistamine labeling warns of additive sedation with benzodiazepines.",
  },
  {
    drug_a: "oxazepam",
    drug_b: "eszopiclone",
    severity: "moderate",
    mechanism:
      "Additive CNS depression between benzodiazepines and non-benzodiazepine hypnotics increases sedation and fall risk.",
    evidence:
      "Sedative-hypnotic labeling warns against combination with benzodiazepines.",
  },
  {
    drug_a: "oxazepam",
    drug_b: "hydroxyzine",
    severity: "moderate",
    mechanism:
      "Both cause CNS depression; combined use increases sedation and impairs alertness.",
    evidence:
      "Antihistamine labeling warns of additive sedation with benzodiazepines.",
  },
  {
    drug_a: "oxazepam",
    drug_b: "methocarbamol",
    severity: "moderate",
    mechanism:
      "Both cause CNS depression; combined use increases sedation and fall risk, especially in older adults.",
    evidence:
      "Muscle relaxant labeling warns of additive sedation with benzodiazepines.",
  },
  {
    drug_a: "oxazepam",
    drug_b: "promethazine",
    severity: "moderate",
    mechanism:
      "Both cause CNS depression; combined use increases sedation and impairs alertness.",
    evidence:
      "Antihistamine labeling warns of additive sedation with benzodiazepines.",
  },
  {
    drug_a: "oxazepam",
    drug_b: "ramelteon",
    severity: "moderate",
    mechanism:
      "Additive CNS depression between benzodiazepines and other sedative-hypnotics increases sedation and fall risk.",
    evidence:
      "Sedative-hypnotic labeling warns against combination with benzodiazepines.",
  },
  {
    drug_a: "oxazepam",
    drug_b: "suvorexant",
    severity: "moderate",
    mechanism:
      "Additive CNS depression between benzodiazepines and other sedative-hypnotics increases sedation and fall risk.",
    evidence:
      "Sedative-hypnotic labeling warns against combination with benzodiazepines.",
  },
  {
    drug_a: "oxazepam",
    drug_b: "temazepam",
    severity: "moderate",
    mechanism:
      "Additive central nervous system depression from combining two benzodiazepines.",
    evidence:
      "Clinical guidance advises against routinely combining two benzodiazepines.",
  },
  {
    drug_a: "oxazepam",
    drug_b: "tizanidine",
    severity: "moderate",
    mechanism:
      "Both cause CNS depression; combined use increases sedation and fall risk, especially in older adults.",
    evidence:
      "Muscle relaxant labeling warns of additive sedation with benzodiazepines.",
  },
  {
    drug_a: "oxazepam",
    drug_b: "zaleplon",
    severity: "moderate",
    mechanism:
      "Additive CNS depression between benzodiazepines and non-benzodiazepine hypnotics increases sedation and fall risk.",
    evidence:
      "Sedative-hypnotic labeling warns against combination with benzodiazepines.",
  },
  {
    drug_a: "oxazepam",
    drug_b: "zolpidem",
    severity: "moderate",
    mechanism:
      "Additive CNS depression between benzodiazepines and non-benzodiazepine hypnotics increases sedation and fall risk.",
    evidence:
      "Sedative-hypnotic labeling warns against combination with benzodiazepines.",
  },
  {
    drug_a: "oxcarbazepine",
    drug_b: "apixaban",
    severity: "moderate",
    mechanism:
      "Several antiepileptics induce hepatic enzymes that alter anticoagulant metabolism, making dosing harder to stabilize.",
    evidence:
      "Guidelines recommend close INR monitoring when combining enzyme-inducing antiepileptics with anticoagulants.",
  },
  {
    drug_a: "oxcarbazepine",
    drug_b: "dabigatran",
    severity: "moderate",
    mechanism:
      "Several antiepileptics induce hepatic enzymes that alter anticoagulant metabolism, making dosing harder to stabilize.",
    evidence:
      "Guidelines recommend close INR monitoring when combining enzyme-inducing antiepileptics with anticoagulants.",
  },
  {
    drug_a: "oxcarbazepine",
    drug_b: "edoxaban",
    severity: "moderate",
    mechanism:
      "Several antiepileptics induce hepatic enzymes that alter anticoagulant metabolism, making dosing harder to stabilize.",
    evidence:
      "Guidelines recommend close INR monitoring when combining enzyme-inducing antiepileptics with anticoagulants.",
  },
  {
    drug_a: "oxcarbazepine",
    drug_b: "enoxaparin",
    severity: "moderate",
    mechanism:
      "Several antiepileptics induce hepatic enzymes that alter anticoagulant metabolism, making dosing harder to stabilize.",
    evidence:
      "Guidelines recommend close INR monitoring when combining enzyme-inducing antiepileptics with anticoagulants.",
  },
  {
    drug_a: "oxcarbazepine",
    drug_b: "gabapentin",
    severity: "moderate",
    mechanism:
      "Combining certain antiepileptics can alter one another’s blood levels via shared metabolic pathways.",
    evidence:
      "Neurology guidance recommends level monitoring when combining enzyme-inducing and non-inducing antiepileptics.",
  },
  {
    drug_a: "oxcarbazepine",
    drug_b: "heparin",
    severity: "moderate",
    mechanism:
      "Several antiepileptics induce hepatic enzymes that alter anticoagulant metabolism, making dosing harder to stabilize.",
    evidence:
      "Guidelines recommend close INR monitoring when combining enzyme-inducing antiepileptics with anticoagulants.",
  },
  {
    drug_a: "oxcarbazepine",
    drug_b: "lacosamide",
    severity: "moderate",
    mechanism:
      "Combining certain antiepileptics can alter one another’s blood levels via shared metabolic pathways.",
    evidence:
      "Neurology guidance recommends level monitoring when combining enzyme-inducing and non-inducing antiepileptics.",
  },
  {
    drug_a: "oxcarbazepine",
    drug_b: "lamotrigine",
    severity: "moderate",
    mechanism:
      "Combining certain antiepileptics can alter one another’s blood levels via shared metabolic pathways.",
    evidence:
      "Neurology guidance recommends level monitoring when combining enzyme-inducing and non-inducing antiepileptics.",
  },
  {
    drug_a: "oxcarbazepine",
    drug_b: "levetiracetam",
    severity: "moderate",
    mechanism:
      "Combining certain antiepileptics can alter one another’s blood levels via shared metabolic pathways.",
    evidence:
      "Neurology guidance recommends level monitoring when combining enzyme-inducing and non-inducing antiepileptics.",
  },
  {
    drug_a: "oxcarbazepine",
    drug_b: "phenytoin",
    severity: "moderate",
    mechanism:
      "Combining certain antiepileptics can alter one another’s blood levels via shared metabolic pathways.",
    evidence:
      "Neurology guidance recommends level monitoring when combining enzyme-inducing antiepileptics.",
  },
  {
    drug_a: "oxcarbazepine",
    drug_b: "pregabalin",
    severity: "moderate",
    mechanism:
      "Combining certain antiepileptics can alter one another’s blood levels via shared metabolic pathways.",
    evidence:
      "Neurology guidance recommends level monitoring when combining enzyme-inducing and non-inducing antiepileptics.",
  },
  {
    drug_a: "oxcarbazepine",
    drug_b: "rivaroxaban",
    severity: "moderate",
    mechanism:
      "Several antiepileptics induce hepatic enzymes that alter anticoagulant metabolism, making dosing harder to stabilize.",
    evidence:
      "Guidelines recommend close INR monitoring when combining enzyme-inducing antiepileptics with anticoagulants.",
  },
  {
    drug_a: "oxcarbazepine",
    drug_b: "topiramate",
    severity: "moderate",
    mechanism:
      "Combining certain antiepileptics can alter one another’s blood levels via shared metabolic pathways.",
    evidence:
      "Neurology guidance recommends level monitoring when combining enzyme-inducing and non-inducing antiepileptics.",
  },
  {
    drug_a: "oxcarbazepine",
    drug_b: "valproate",
    severity: "moderate",
    mechanism:
      "Combining certain antiepileptics can alter one another’s blood levels via shared metabolic pathways.",
    evidence:
      "Neurology guidance recommends level monitoring when combining enzyme-inducing and non-inducing antiepileptics.",
  },
  {
    drug_a: "oxcarbazepine",
    drug_b: "warfarin",
    severity: "moderate",
    mechanism:
      "Several antiepileptics induce hepatic enzymes that alter anticoagulant metabolism, making dosing harder to stabilize.",
    evidence:
      "Guidelines recommend close INR monitoring when combining enzyme-inducing antiepileptics with anticoagulants.",
  },
  {
    drug_a: "oxcarbazepine",
    drug_b: "zonisamide",
    severity: "moderate",
    mechanism:
      "Combining certain antiepileptics can alter one another’s blood levels via shared metabolic pathways.",
    evidence:
      "Neurology guidance recommends level monitoring when combining enzyme-inducing and non-inducing antiepileptics.",
  },
  {
    drug_a: "oxycodone",
    drug_b: "baclofen",
    severity: "moderate",
    mechanism:
      "Both cause CNS depression; combined use increases sedation and fall risk, especially in older adults.",
    evidence:
      "Muscle relaxant labeling warns of additive sedation with opioids.",
  },
  {
    drug_a: "oxycodone",
    drug_b: "carisoprodol",
    severity: "moderate",
    mechanism:
      "Both cause CNS depression; combined use increases sedation and fall risk, especially in older adults.",
    evidence:
      "Muscle relaxant labeling warns of additive sedation with opioids.",
  },
  {
    drug_a: "oxycodone",
    drug_b: "chlordiazepoxide",
    severity: "high",
    mechanism:
      "Both depress the central nervous system; combined use significantly raises the risk of profound sedation and fatal respiratory depression.",
    evidence:
      "FDA boxed warning covers concurrent opioid and benzodiazepine use.",
  },
  {
    drug_a: "oxycodone",
    drug_b: "clorazepate",
    severity: "high",
    mechanism:
      "Both depress the central nervous system; combined use significantly raises the risk of profound sedation and fatal respiratory depression.",
    evidence:
      "FDA boxed warning covers concurrent opioid and benzodiazepine use.",
  },
  {
    drug_a: "oxycodone",
    drug_b: "desvenlafaxine",
    severity: "high",
    mechanism:
      "Both increase serotonin activity, raising the risk of serotonin syndrome.",
    evidence:
      "Case reports and FDA labeling describe elevated serotonin syndrome risk with this combination.",
  },
  {
    drug_a: "oxycodone",
    drug_b: "fluvoxamine",
    severity: "high",
    mechanism:
      "Both increase serotonin activity, raising the risk of serotonin syndrome.",
    evidence:
      "Case reports and FDA labeling describe elevated serotonin syndrome risk with this combination.",
  },
  {
    drug_a: "oxycodone",
    drug_b: "hydroxyzine",
    severity: "moderate",
    mechanism:
      "Both cause CNS depression; combined use increases sedation and, in vulnerable patients, respiratory depression risk.",
    evidence:
      "Product labeling for sedating antihistamines warns against combination with opioid analgesics.",
  },
  {
    drug_a: "oxycodone",
    drug_b: "levomilnacipran",
    severity: "high",
    mechanism:
      "Both increase serotonin activity, raising the risk of serotonin syndrome.",
    evidence:
      "Case reports and FDA labeling describe elevated serotonin syndrome risk with this combination.",
  },
  {
    drug_a: "oxycodone",
    drug_b: "methocarbamol",
    severity: "moderate",
    mechanism:
      "Both cause CNS depression; combined use increases sedation and fall risk, especially in older adults.",
    evidence:
      "Muscle relaxant labeling warns of additive sedation with opioids.",
  },
  {
    drug_a: "oxycodone",
    drug_b: "midazolam",
    severity: "high",
    mechanism:
      "Both depress the central nervous system; combined use significantly raises the risk of profound sedation and fatal respiratory depression.",
    evidence:
      "FDA boxed warning covers concurrent opioid and benzodiazepine use.",
  },
  {
    drug_a: "oxycodone",
    drug_b: "ondansetron",
    severity: "high",
    mechanism:
      "Both increase serotonin activity, raising the risk of serotonin syndrome.",
    evidence:
      "Case reports and FDA labeling describe elevated serotonin syndrome risk with this combination.",
  },
  {
    drug_a: "oxycodone",
    drug_b: "oxazepam",
    severity: "high",
    mechanism:
      "Both depress the central nervous system; combined use significantly raises the risk of profound sedation and fatal respiratory depression.",
    evidence:
      "FDA boxed warning covers concurrent opioid and benzodiazepine use.",
  },
  {
    drug_a: "oxycodone",
    drug_b: "oxymorphone",
    severity: "moderate",
    mechanism:
      "Combining two opioids adds to central nervous system and respiratory depression without clear added benefit.",
    evidence:
      "Prescribing guidance recommends against concurrent use of multiple opioid analgesics outside supervised rotation.",
  },
  {
    drug_a: "oxycodone",
    drug_b: "promethazine",
    severity: "moderate",
    mechanism:
      "Both cause CNS depression; combined use increases sedation and, in vulnerable patients, respiratory depression risk.",
    evidence:
      "Product labeling for sedating antihistamines warns against combination with opioid analgesics.",
  },
  {
    drug_a: "oxycodone",
    drug_b: "rizatriptan",
    severity: "high",
    mechanism:
      "Both increase serotonin activity, raising the risk of serotonin syndrome.",
    evidence:
      "Case reports and FDA labeling describe elevated serotonin syndrome risk with this combination.",
  },
  {
    drug_a: "oxycodone",
    drug_b: "st_johns_wort",
    severity: "high",
    mechanism:
      "Both increase serotonin activity, raising the risk of serotonin syndrome.",
    evidence:
      "Case reports and FDA labeling describe elevated serotonin syndrome risk with this combination.",
  },
  {
    drug_a: "oxycodone",
    drug_b: "sumatriptan",
    severity: "high",
    mechanism:
      "Both increase serotonin activity, raising the risk of serotonin syndrome.",
    evidence:
      "Case reports and FDA labeling describe elevated serotonin syndrome risk with this combination.",
  },
  {
    drug_a: "oxycodone",
    drug_b: "tizanidine",
    severity: "moderate",
    mechanism:
      "Both cause CNS depression; combined use increases sedation and fall risk, especially in older adults.",
    evidence:
      "Muscle relaxant labeling warns of additive sedation with opioids.",
  },
  {
    drug_a: "oxycodone",
    drug_b: "zaleplon",
    severity: "high",
    mechanism:
      "Both depress the central nervous system; combined use significantly raises the risk of profound sedation and fatal respiratory depression.",
    evidence:
      "FDA boxed warning covers concurrent opioid and CNS depressant use, including non-benzodiazepine hypnotics.",
  },
  {
    drug_a: "oxymorphone",
    drug_b: "alprazolam",
    severity: "high",
    mechanism:
      "Both depress the central nervous system; combined use significantly raises the risk of profound sedation and fatal respiratory depression.",
    evidence:
      "FDA boxed warning covers concurrent opioid and benzodiazepine use.",
  },
  {
    drug_a: "oxymorphone",
    drug_b: "baclofen",
    severity: "moderate",
    mechanism:
      "Both cause CNS depression; combined use increases sedation and fall risk, especially in older adults.",
    evidence:
      "Muscle relaxant labeling warns of additive sedation with opioids.",
  },
  {
    drug_a: "oxymorphone",
    drug_b: "carisoprodol",
    severity: "moderate",
    mechanism:
      "Both cause CNS depression; combined use increases sedation and fall risk, especially in older adults.",
    evidence:
      "Muscle relaxant labeling warns of additive sedation with opioids.",
  },
  {
    drug_a: "oxymorphone",
    drug_b: "chlordiazepoxide",
    severity: "high",
    mechanism:
      "Both depress the central nervous system; combined use significantly raises the risk of profound sedation and fatal respiratory depression.",
    evidence:
      "FDA boxed warning covers concurrent opioid and benzodiazepine use.",
  },
  {
    drug_a: "oxymorphone",
    drug_b: "citalopram",
    severity: "high",
    mechanism:
      "Both increase serotonin activity, raising the risk of serotonin syndrome.",
    evidence:
      "Case reports and FDA labeling describe elevated serotonin syndrome risk with this combination.",
  },
  {
    drug_a: "oxymorphone",
    drug_b: "clonazepam",
    severity: "high",
    mechanism:
      "Both depress the central nervous system; combined use significantly raises the risk of profound sedation and fatal respiratory depression.",
    evidence:
      "FDA boxed warning covers concurrent opioid and benzodiazepine use.",
  },
  {
    drug_a: "oxymorphone",
    drug_b: "clorazepate",
    severity: "high",
    mechanism:
      "Both depress the central nervous system; combined use significantly raises the risk of profound sedation and fatal respiratory depression.",
    evidence:
      "FDA boxed warning covers concurrent opioid and benzodiazepine use.",
  },
  {
    drug_a: "oxymorphone",
    drug_b: "cyclobenzaprine",
    severity: "moderate",
    mechanism:
      "Both cause CNS depression; combined use increases sedation and fall risk, especially in older adults.",
    evidence:
      "Muscle relaxant labeling warns of additive sedation with opioids.",
  },
  {
    drug_a: "oxymorphone",
    drug_b: "desvenlafaxine",
    severity: "high",
    mechanism:
      "Both increase serotonin activity, raising the risk of serotonin syndrome.",
    evidence:
      "Case reports and FDA labeling describe elevated serotonin syndrome risk with this combination.",
  },
  {
    drug_a: "oxymorphone",
    drug_b: "diazepam",
    severity: "high",
    mechanism:
      "Both depress the central nervous system; combined use significantly raises the risk of profound sedation and fatal respiratory depression.",
    evidence:
      "FDA boxed warning covers concurrent opioid and benzodiazepine use.",
  },
  {
    drug_a: "oxymorphone",
    drug_b: "diphenhydramine",
    severity: "moderate",
    mechanism:
      "Both cause CNS depression; combined use increases sedation and, in vulnerable patients, respiratory depression risk.",
    evidence:
      "Product labeling for sedating antihistamines warns against combination with opioid analgesics.",
  },
  {
    drug_a: "oxymorphone",
    drug_b: "duloxetine",
    severity: "high",
    mechanism:
      "Both increase serotonin activity, raising the risk of serotonin syndrome.",
    evidence:
      "Case reports and FDA labeling describe elevated serotonin syndrome risk with this combination.",
  },
  {
    drug_a: "oxymorphone",
    drug_b: "escitalopram",
    severity: "high",
    mechanism:
      "Both increase serotonin activity, raising the risk of serotonin syndrome.",
    evidence:
      "Case reports and FDA labeling describe elevated serotonin syndrome risk with this combination.",
  },
  {
    drug_a: "oxymorphone",
    drug_b: "eszopiclone",
    severity: "high",
    mechanism:
      "Both depress the central nervous system; combined use significantly raises the risk of profound sedation and fatal respiratory depression.",
    evidence:
      "FDA boxed warning covers concurrent opioid and CNS depressant use, including non-benzodiazepine hypnotics.",
  },
  {
    drug_a: "oxymorphone",
    drug_b: "fluoxetine",
    severity: "high",
    mechanism:
      "Both increase serotonin activity, raising the risk of serotonin syndrome.",
    evidence:
      "Case reports and FDA labeling describe elevated serotonin syndrome risk with this combination.",
  },
  {
    drug_a: "oxymorphone",
    drug_b: "fluvoxamine",
    severity: "high",
    mechanism:
      "Both increase serotonin activity, raising the risk of serotonin syndrome.",
    evidence:
      "Case reports and FDA labeling describe elevated serotonin syndrome risk with this combination.",
  },
  {
    drug_a: "oxymorphone",
    drug_b: "hydroxyzine",
    severity: "moderate",
    mechanism:
      "Both cause CNS depression; combined use increases sedation and, in vulnerable patients, respiratory depression risk.",
    evidence:
      "Product labeling for sedating antihistamines warns against combination with opioid analgesics.",
  },
  {
    drug_a: "oxymorphone",
    drug_b: "levomilnacipran",
    severity: "high",
    mechanism:
      "Both increase serotonin activity, raising the risk of serotonin syndrome.",
    evidence:
      "Case reports and FDA labeling describe elevated serotonin syndrome risk with this combination.",
  },
  {
    drug_a: "oxymorphone",
    drug_b: "lorazepam",
    severity: "high",
    mechanism:
      "Both depress the central nervous system; combined use significantly raises the risk of profound sedation and fatal respiratory depression.",
    evidence:
      "FDA boxed warning covers concurrent opioid and benzodiazepine use.",
  },
  {
    drug_a: "oxymorphone",
    drug_b: "methocarbamol",
    severity: "moderate",
    mechanism:
      "Both cause CNS depression; combined use increases sedation and fall risk, especially in older adults.",
    evidence:
      "Muscle relaxant labeling warns of additive sedation with opioids.",
  },
  {
    drug_a: "oxymorphone",
    drug_b: "midazolam",
    severity: "high",
    mechanism:
      "Both depress the central nervous system; combined use significantly raises the risk of profound sedation and fatal respiratory depression.",
    evidence:
      "FDA boxed warning covers concurrent opioid and benzodiazepine use.",
  },
  {
    drug_a: "oxymorphone",
    drug_b: "ondansetron",
    severity: "high",
    mechanism:
      "Both increase serotonin activity, raising the risk of serotonin syndrome.",
    evidence:
      "Case reports and FDA labeling describe elevated serotonin syndrome risk with this combination.",
  },
  {
    drug_a: "oxymorphone",
    drug_b: "oxazepam",
    severity: "high",
    mechanism:
      "Both depress the central nervous system; combined use significantly raises the risk of profound sedation and fatal respiratory depression.",
    evidence:
      "FDA boxed warning covers concurrent opioid and benzodiazepine use.",
  },
  {
    drug_a: "oxymorphone",
    drug_b: "paroxetine",
    severity: "high",
    mechanism:
      "Both increase serotonin activity, raising the risk of serotonin syndrome.",
    evidence:
      "Case reports and FDA labeling describe elevated serotonin syndrome risk with this combination.",
  },
  {
    drug_a: "oxymorphone",
    drug_b: "phenelzine",
    severity: "high",
    mechanism:
      "Both increase serotonin activity; combining them can precipitate serotonin syndrome.",
    evidence:
      "MAOIs carry labeled contraindications or strong warnings against use with serotonergic opioids.",
  },
  {
    drug_a: "oxymorphone",
    drug_b: "promethazine",
    severity: "moderate",
    mechanism:
      "Both cause CNS depression; combined use increases sedation and, in vulnerable patients, respiratory depression risk.",
    evidence:
      "Product labeling for sedating antihistamines warns against combination with opioid analgesics.",
  },
  {
    drug_a: "oxymorphone",
    drug_b: "rizatriptan",
    severity: "high",
    mechanism:
      "Both increase serotonin activity, raising the risk of serotonin syndrome.",
    evidence:
      "Case reports and FDA labeling describe elevated serotonin syndrome risk with this combination.",
  },
  {
    drug_a: "oxymorphone",
    drug_b: "sertraline",
    severity: "high",
    mechanism:
      "Both increase serotonin activity, raising the risk of serotonin syndrome.",
    evidence:
      "Case reports and FDA labeling describe elevated serotonin syndrome risk with this combination.",
  },
  {
    drug_a: "oxymorphone",
    drug_b: "st_johns_wort",
    severity: "high",
    mechanism:
      "Both increase serotonin activity, raising the risk of serotonin syndrome.",
    evidence:
      "Case reports and FDA labeling describe elevated serotonin syndrome risk with this combination.",
  },
  {
    drug_a: "oxymorphone",
    drug_b: "sumatriptan",
    severity: "high",
    mechanism:
      "Both increase serotonin activity, raising the risk of serotonin syndrome.",
    evidence:
      "Case reports and FDA labeling describe elevated serotonin syndrome risk with this combination.",
  },
  {
    drug_a: "oxymorphone",
    drug_b: "temazepam",
    severity: "high",
    mechanism:
      "Both depress the central nervous system; combined use significantly raises the risk of profound sedation and fatal respiratory depression.",
    evidence:
      "FDA boxed warning covers concurrent opioid and benzodiazepine use.",
  },
  {
    drug_a: "oxymorphone",
    drug_b: "tizanidine",
    severity: "moderate",
    mechanism:
      "Both cause CNS depression; combined use increases sedation and fall risk, especially in older adults.",
    evidence:
      "Muscle relaxant labeling warns of additive sedation with opioids.",
  },
  {
    drug_a: "oxymorphone",
    drug_b: "tramadol",
    severity: "moderate",
    mechanism:
      "Combining two opioids adds to central nervous system and respiratory depression without clear added benefit.",
    evidence:
      "Prescribing guidance recommends against concurrent use of multiple opioid analgesics outside supervised rotation.",
  },
  {
    drug_a: "oxymorphone",
    drug_b: "tranylcypromine",
    severity: "high",
    mechanism:
      "Both increase serotonin activity; combining them can precipitate serotonin syndrome.",
    evidence:
      "MAOIs carry labeled contraindications or strong warnings against use with serotonergic opioids.",
  },
  {
    drug_a: "oxymorphone",
    drug_b: "venlafaxine",
    severity: "high",
    mechanism:
      "Both increase serotonin activity, raising the risk of serotonin syndrome.",
    evidence:
      "Case reports and FDA labeling describe elevated serotonin syndrome risk with this combination.",
  },
  {
    drug_a: "oxymorphone",
    drug_b: "zaleplon",
    severity: "high",
    mechanism:
      "Both depress the central nervous system; combined use significantly raises the risk of profound sedation and fatal respiratory depression.",
    evidence:
      "FDA boxed warning covers concurrent opioid and CNS depressant use, including non-benzodiazepine hypnotics.",
  },
  {
    drug_a: "oxymorphone",
    drug_b: "zolpidem",
    severity: "high",
    mechanism:
      "Both depress the central nervous system; combined use significantly raises the risk of profound sedation and fatal respiratory depression.",
    evidence:
      "FDA boxed warning covers concurrent opioid and CNS depressant use, including non-benzodiazepine hypnotics.",
  },
  {
    drug_a: "paliperidone",
    drug_b: "ondansetron",
    severity: "moderate",
    mechanism:
      "Some antipsychotics have mild serotonergic activity that may add to that of other serotonergic agents.",
    evidence:
      "Case reports describe serotonin syndrome features when antipsychotics are combined with strongly serotonergic drugs.",
  },
  {
    drug_a: "paliperidone",
    drug_b: "quetiapine",
    severity: "moderate",
    mechanism:
      "Combining two antipsychotics adds to sedation, metabolic, and QT-prolongation risk without clear added benefit.",
    evidence:
      "Guidelines generally recommend against routine antipsychotic polypharmacy.",
  },
  {
    drug_a: "paliperidone",
    drug_b: "risperidone",
    severity: "moderate",
    mechanism:
      "Combining two antipsychotics adds to sedation, metabolic, and QT-prolongation risk without clear added benefit.",
    evidence:
      "Guidelines generally recommend against routine antipsychotic polypharmacy.",
  },
  {
    drug_a: "paliperidone",
    drug_b: "rizatriptan",
    severity: "moderate",
    mechanism:
      "Some antipsychotics have mild serotonergic activity that may add to that of other serotonergic agents.",
    evidence:
      "Case reports describe serotonin syndrome features when antipsychotics are combined with strongly serotonergic drugs.",
  },
  {
    drug_a: "paliperidone",
    drug_b: "st_johns_wort",
    severity: "moderate",
    mechanism:
      "Some antipsychotics have mild serotonergic activity that may add to that of other serotonergic agents.",
    evidence:
      "Case reports describe serotonin syndrome features when antipsychotics are combined with strongly serotonergic drugs.",
  },
  {
    drug_a: "paliperidone",
    drug_b: "sumatriptan",
    severity: "moderate",
    mechanism:
      "Some antipsychotics have mild serotonergic activity that may add to that of other serotonergic agents.",
    evidence:
      "Case reports describe serotonin syndrome features when antipsychotics are combined with strongly serotonergic drugs.",
  },
  {
    drug_a: "paliperidone",
    drug_b: "tramadol",
    severity: "moderate",
    mechanism:
      "Some antipsychotics have mild serotonergic activity that may add to that of other serotonergic agents.",
    evidence:
      "Case reports describe serotonin syndrome features when antipsychotics are combined with strongly serotonergic drugs.",
  },
  {
    drug_a: "paliperidone",
    drug_b: "ziprasidone",
    severity: "moderate",
    mechanism:
      "Combining two antipsychotics adds to sedation, metabolic, and QT-prolongation risk without clear added benefit.",
    evidence:
      "Guidelines generally recommend against routine antipsychotic polypharmacy.",
  },
  {
    drug_a: "pantoprazole",
    drug_b: "fluconazole",
    severity: "moderate",
    mechanism:
      "Reduced gastric acidity from PPIs can impair absorption of azole antifungals that require an acidic environment.",
    evidence:
      "Antifungal labeling notes reduced bioavailability with concurrent acid-suppressing therapy.",
  },
  {
    drug_a: "pantoprazole",
    drug_b: "itraconazole",
    severity: "moderate",
    mechanism:
      "Reduced gastric acidity from PPIs can impair absorption of azole antifungals that require an acidic environment.",
    evidence:
      "Antifungal labeling notes reduced bioavailability with concurrent acid-suppressing therapy.",
  },
  {
    drug_a: "pantoprazole",
    drug_b: "ketoconazole",
    severity: "moderate",
    mechanism:
      "Reduced gastric acidity from PPIs can impair absorption of azole antifungals that require an acidic environment.",
    evidence:
      "Antifungal labeling notes reduced bioavailability with concurrent acid-suppressing therapy.",
  },
  {
    drug_a: "pantoprazole",
    drug_b: "liothyronine",
    severity: "low",
    mechanism:
      "Reduced gastric acidity from PPIs may impair levothyroxine absorption.",
    evidence:
      "Endocrinology guidance recommends separating dosing times and monitoring thyroid levels.",
  },
  {
    drug_a: "perindopril",
    drug_b: "amiloride",
    severity: "moderate",
    mechanism:
      "Both raise serum potassium; combined use increases the risk of hyperkalemia.",
    evidence:
      "Labeling for potassium-sparing diuretics warns of hyperkalemia risk with ACE inhibitors.",
  },
  {
    drug_a: "perindopril",
    drug_b: "azilsartan",
    severity: "moderate",
    mechanism:
      "Dual blockade of the renin-angiotensin system can increase risk of hyperkalemia and hypotension.",
    evidence:
      "Guidelines generally recommend against combining ACE inhibitors and ARBs.",
  },
  {
    drug_a: "perindopril",
    drug_b: "candesartan",
    severity: "moderate",
    mechanism:
      "Dual blockade of the renin-angiotensin system can increase risk of hyperkalemia and hypotension.",
    evidence:
      "Guidelines generally recommend against combining ACE inhibitors and ARBs.",
  },
  {
    drug_a: "perindopril",
    drug_b: "irbesartan",
    severity: "moderate",
    mechanism:
      "Dual blockade of the renin-angiotensin system can increase risk of hyperkalemia and hypotension.",
    evidence:
      "Guidelines generally recommend against combining ACE inhibitors and ARBs.",
  },
  {
    drug_a: "perindopril",
    drug_b: "lithium",
    severity: "moderate",
    mechanism:
      "ACE inhibitors can reduce renal clearance of lithium, raising lithium levels toward toxicity.",
    evidence:
      "Lithium labeling warns of elevated levels with concurrent ACE inhibitor use, warranting level monitoring.",
  },
  {
    drug_a: "perindopril",
    drug_b: "losartan",
    severity: "moderate",
    mechanism:
      "Dual blockade of the renin-angiotensin system can increase risk of hyperkalemia and hypotension.",
    evidence:
      "Guidelines generally recommend against combining ACE inhibitors and ARBs.",
  },
  {
    drug_a: "perindopril",
    drug_b: "olmesartan",
    severity: "moderate",
    mechanism:
      "Dual blockade of the renin-angiotensin system can increase risk of hyperkalemia and hypotension.",
    evidence:
      "Guidelines generally recommend against combining ACE inhibitors and ARBs.",
  },
  {
    drug_a: "perindopril",
    drug_b: "spironolactone",
    severity: "moderate",
    mechanism:
      "Both raise serum potassium; combined use increases the risk of hyperkalemia.",
    evidence:
      "Labeling for potassium-sparing diuretics warns of hyperkalemia risk with ACE inhibitors.",
  },
  {
    drug_a: "perindopril",
    drug_b: "telmisartan",
    severity: "moderate",
    mechanism:
      "Dual blockade of the renin-angiotensin system can increase risk of hyperkalemia and hypotension.",
    evidence:
      "Guidelines generally recommend against combining ACE inhibitors and ARBs.",
  },
  {
    drug_a: "perindopril",
    drug_b: "triamterene",
    severity: "moderate",
    mechanism:
      "Both raise serum potassium; combined use increases the risk of hyperkalemia.",
    evidence:
      "Labeling for potassium-sparing diuretics warns of hyperkalemia risk with ACE inhibitors.",
  },
  {
    drug_a: "perindopril",
    drug_b: "valsartan",
    severity: "moderate",
    mechanism:
      "Dual blockade of the renin-angiotensin system can increase risk of hyperkalemia and hypotension.",
    evidence:
      "Guidelines generally recommend against combining ACE inhibitors and ARBs.",
  },
  {
    drug_a: "phenelzine",
    drug_b: "amitriptyline",
    severity: "high",
    mechanism:
      "Both increase serotonin and norepinephrine activity, raising the risk of serotonin syndrome and hypertensive crisis.",
    evidence:
      "TCA labeling contraindicates or strongly warns against combination with MAOIs.",
  },
  {
    drug_a: "phenelzine",
    drug_b: "amphetamine_dextroamphetamine",
    severity: "high",
    mechanism:
      "MAOIs prevent breakdown of norepinephrine, and combined with stimulants can precipitate hypertensive crisis.",
    evidence:
      "Stimulant labeling contraindicates use with MAOIs and within 14 days of stopping one.",
  },
  {
    drug_a: "phenelzine",
    drug_b: "bupropion",
    severity: "high",
    mechanism:
      "Both increase serotonin activity, raising the risk of serotonin syndrome.",
    evidence:
      "Labeling for atypical antidepressants contraindicates use with MAOIs.",
  },
  {
    drug_a: "phenelzine",
    drug_b: "clomipramine",
    severity: "high",
    mechanism:
      "Both increase serotonin and norepinephrine activity, raising the risk of serotonin syndrome and hypertensive crisis.",
    evidence:
      "TCA labeling contraindicates or strongly warns against combination with MAOIs.",
  },
  {
    drug_a: "phenelzine",
    drug_b: "doxepin",
    severity: "high",
    mechanism:
      "Both increase serotonin and norepinephrine activity, raising the risk of serotonin syndrome and hypertensive crisis.",
    evidence:
      "TCA labeling contraindicates or strongly warns against combination with MAOIs.",
  },
  {
    drug_a: "phenelzine",
    drug_b: "imipramine",
    severity: "high",
    mechanism:
      "Both increase serotonin and norepinephrine activity, raising the risk of serotonin syndrome and hypertensive crisis.",
    evidence:
      "TCA labeling contraindicates or strongly warns against combination with MAOIs.",
  },
  {
    drug_a: "phenelzine",
    drug_b: "lisdexamfetamine",
    severity: "high",
    mechanism:
      "MAOIs prevent breakdown of norepinephrine, and combined with stimulants can precipitate hypertensive crisis.",
    evidence:
      "Stimulant labeling contraindicates use with MAOIs and within 14 days of stopping one.",
  },
  {
    drug_a: "phenelzine",
    drug_b: "methylphenidate",
    severity: "high",
    mechanism:
      "MAOIs prevent breakdown of norepinephrine, and combined with stimulants can precipitate hypertensive crisis.",
    evidence:
      "Stimulant labeling contraindicates use with MAOIs and within 14 days of stopping one.",
  },
  {
    drug_a: "phenelzine",
    drug_b: "mirtazapine",
    severity: "high",
    mechanism:
      "Both increase serotonin activity, raising the risk of serotonin syndrome.",
    evidence:
      "Labeling for atypical antidepressants contraindicates use with MAOIs.",
  },
  {
    drug_a: "phenelzine",
    drug_b: "nortriptyline",
    severity: "high",
    mechanism:
      "Both increase serotonin and norepinephrine activity, raising the risk of serotonin syndrome and hypertensive crisis.",
    evidence:
      "TCA labeling contraindicates or strongly warns against combination with MAOIs.",
  },
  {
    drug_a: "phenelzine",
    drug_b: "vortioxetine",
    severity: "high",
    mechanism:
      "Both increase serotonin activity, raising the risk of serotonin syndrome.",
    evidence:
      "Labeling for atypical antidepressants contraindicates use with MAOIs.",
  },
  {
    drug_a: "phenytoin",
    drug_b: "edoxaban",
    severity: "moderate",
    mechanism:
      "Several antiepileptics induce hepatic enzymes that alter anticoagulant metabolism, making dosing harder to stabilize.",
    evidence:
      "Guidelines recommend close INR monitoring when combining enzyme-inducing antiepileptics with anticoagulants.",
  },
  {
    drug_a: "phenytoin",
    drug_b: "enoxaparin",
    severity: "moderate",
    mechanism:
      "Several antiepileptics induce hepatic enzymes that alter anticoagulant metabolism, making dosing harder to stabilize.",
    evidence:
      "Guidelines recommend close INR monitoring when combining enzyme-inducing antiepileptics with anticoagulants.",
  },
  {
    drug_a: "phenytoin",
    drug_b: "lacosamide",
    severity: "moderate",
    mechanism:
      "Combining certain antiepileptics can alter one another’s blood levels via shared metabolic pathways.",
    evidence:
      "Neurology guidance recommends level monitoring when combining enzyme-inducing and non-inducing antiepileptics.",
  },
  {
    drug_a: "phenytoin",
    drug_b: "levetiracetam",
    severity: "moderate",
    mechanism:
      "Combining certain antiepileptics can alter one another’s blood levels via shared metabolic pathways.",
    evidence:
      "Neurology guidance recommends level monitoring when combining enzyme-inducing and non-inducing antiepileptics.",
  },
  {
    drug_a: "phenytoin",
    drug_b: "pregabalin",
    severity: "moderate",
    mechanism:
      "Combining certain antiepileptics can alter one another’s blood levels via shared metabolic pathways.",
    evidence:
      "Neurology guidance recommends level monitoring when combining enzyme-inducing and non-inducing antiepileptics.",
  },
  {
    drug_a: "phenytoin",
    drug_b: "topiramate",
    severity: "moderate",
    mechanism:
      "Combining certain antiepileptics can alter one another’s blood levels via shared metabolic pathways.",
    evidence:
      "Neurology guidance recommends level monitoring when combining enzyme-inducing and non-inducing antiepileptics.",
  },
  {
    drug_a: "phenytoin",
    drug_b: "zonisamide",
    severity: "moderate",
    mechanism:
      "Combining certain antiepileptics can alter one another’s blood levels via shared metabolic pathways.",
    evidence:
      "Neurology guidance recommends level monitoring when combining enzyme-inducing and non-inducing antiepileptics.",
  },
  {
    drug_a: "piroxicam",
    drug_b: "apixaban",
    severity: "high",
    mechanism:
      "NSAIDs inhibit platelet aggregation and can displace anticoagulants from protein binding, increasing bleeding risk.",
    evidence:
      "Labeling for anticoagulants warns of increased bleeding risk with concurrent NSAID use.",
  },
  {
    drug_a: "piroxicam",
    drug_b: "aspirin",
    severity: "moderate",
    mechanism:
      "NSAIDs may add to the antiplatelet effect and irritate the GI lining, raising bleeding risk.",
    evidence:
      "Cardiology guidance flags added GI bleeding risk when NSAIDs are combined with antiplatelet therapy.",
  },
  {
    drug_a: "piroxicam",
    drug_b: "azilsartan",
    severity: "moderate",
    mechanism:
      "NSAIDs can reduce the antihypertensive effect of ARBs and impair renal function.",
    evidence:
      "Labeling for both drug classes notes reduced antihypertensive effect and renal risk with combined use.",
  },
  {
    drug_a: "piroxicam",
    drug_b: "benazepril",
    severity: "moderate",
    mechanism:
      "NSAIDs can reduce the antihypertensive effect of ACE inhibitors and impair renal function.",
    evidence:
      "Labeling for both drug classes notes reduced antihypertensive effect and renal risk with combined use.",
  },
  {
    drug_a: "piroxicam",
    drug_b: "budesonide",
    severity: "moderate",
    mechanism:
      "Both irritate the GI lining; combined use substantially increases risk of ulcers and GI bleeding.",
    evidence:
      "Guidelines recommend gastroprotection when NSAIDs and corticosteroids are combined.",
  },
  {
    drug_a: "piroxicam",
    drug_b: "candesartan",
    severity: "moderate",
    mechanism:
      "NSAIDs can reduce the antihypertensive effect of ARBs and impair renal function.",
    evidence:
      "Labeling for both drug classes notes reduced antihypertensive effect and renal risk with combined use.",
  },
  {
    drug_a: "piroxicam",
    drug_b: "captopril",
    severity: "moderate",
    mechanism:
      "NSAIDs can reduce the antihypertensive effect of ACE inhibitors and impair renal function.",
    evidence:
      "Labeling for both drug classes notes reduced antihypertensive effect and renal risk with combined use.",
  },
  {
    drug_a: "piroxicam",
    drug_b: "citalopram",
    severity: "moderate",
    mechanism:
      "SSRIs combined with NSAIDs may increase risk of GI bleeding due to reduced platelet serotonin uptake.",
    evidence:
      "Observational studies link SSRI + NSAID combinations to higher GI bleeding rates.",
  },
  {
    drug_a: "piroxicam",
    drug_b: "clopidogrel",
    severity: "moderate",
    mechanism:
      "NSAIDs may add to the antiplatelet effect and irritate the GI lining, raising bleeding risk.",
    evidence:
      "Cardiology guidance flags added GI bleeding risk when NSAIDs are combined with antiplatelet therapy.",
  },
  {
    drug_a: "piroxicam",
    drug_b: "dabigatran",
    severity: "high",
    mechanism:
      "NSAIDs inhibit platelet aggregation and can displace anticoagulants from protein binding, increasing bleeding risk.",
    evidence:
      "Labeling for anticoagulants warns of increased bleeding risk with concurrent NSAID use.",
  },
  {
    drug_a: "piroxicam",
    drug_b: "desvenlafaxine",
    severity: "moderate",
    mechanism:
      "SSRIs combined with NSAIDs may increase risk of GI bleeding due to reduced platelet serotonin uptake.",
    evidence:
      "Observational studies link serotonergic antidepressant + NSAID combinations to higher GI bleeding rates.",
  },
  {
    drug_a: "piroxicam",
    drug_b: "dexamethasone",
    severity: "moderate",
    mechanism:
      "Both irritate the GI lining; combined use substantially increases risk of ulcers and GI bleeding.",
    evidence:
      "Guidelines recommend gastroprotection when NSAIDs and corticosteroids are combined.",
  },
  {
    drug_a: "piroxicam",
    drug_b: "dipyridamole",
    severity: "moderate",
    mechanism:
      "NSAIDs may add to the antiplatelet effect and irritate the GI lining, raising bleeding risk.",
    evidence:
      "Cardiology guidance flags added GI bleeding risk when NSAIDs are combined with antiplatelet therapy.",
  },
  {
    drug_a: "piroxicam",
    drug_b: "duloxetine",
    severity: "moderate",
    mechanism:
      "SSRIs combined with NSAIDs may increase risk of GI bleeding due to reduced platelet serotonin uptake.",
    evidence:
      "Observational studies link serotonergic antidepressant + NSAID combinations to higher GI bleeding rates.",
  },
  {
    drug_a: "piroxicam",
    drug_b: "edoxaban",
    severity: "high",
    mechanism:
      "NSAIDs inhibit platelet aggregation and can displace anticoagulants from protein binding, increasing bleeding risk.",
    evidence:
      "Labeling for anticoagulants warns of increased bleeding risk with concurrent NSAID use.",
  },
  {
    drug_a: "piroxicam",
    drug_b: "enalapril",
    severity: "moderate",
    mechanism:
      "NSAIDs can reduce the antihypertensive effect of ACE inhibitors and impair renal function.",
    evidence:
      "Labeling for both drug classes notes reduced antihypertensive effect and renal risk with combined use.",
  },
  {
    drug_a: "piroxicam",
    drug_b: "enoxaparin",
    severity: "high",
    mechanism:
      "NSAIDs inhibit platelet aggregation and can displace anticoagulants from protein binding, increasing bleeding risk.",
    evidence:
      "Labeling for anticoagulants warns of increased bleeding risk with concurrent NSAID use.",
  },
  {
    drug_a: "piroxicam",
    drug_b: "escitalopram",
    severity: "moderate",
    mechanism:
      "SSRIs combined with NSAIDs may increase risk of GI bleeding due to reduced platelet serotonin uptake.",
    evidence:
      "Observational studies link SSRI + NSAID combinations to higher GI bleeding rates.",
  },
  {
    drug_a: "piroxicam",
    drug_b: "fluoxetine",
    severity: "moderate",
    mechanism:
      "SSRIs combined with NSAIDs may increase risk of GI bleeding due to reduced platelet serotonin uptake.",
    evidence:
      "Observational studies link SSRI + NSAID combinations to higher GI bleeding rates.",
  },
  {
    drug_a: "piroxicam",
    drug_b: "fluticasone",
    severity: "moderate",
    mechanism:
      "Both irritate the GI lining; combined use substantially increases risk of ulcers and GI bleeding.",
    evidence:
      "Guidelines recommend gastroprotection when NSAIDs and corticosteroids are combined.",
  },
  {
    drug_a: "piroxicam",
    drug_b: "fluvoxamine",
    severity: "moderate",
    mechanism:
      "SSRIs combined with NSAIDs may increase risk of GI bleeding due to reduced platelet serotonin uptake.",
    evidence:
      "Observational studies link SSRI + NSAID combinations to higher GI bleeding rates.",
  },
  {
    drug_a: "piroxicam",
    drug_b: "fosinopril",
    severity: "moderate",
    mechanism:
      "NSAIDs can reduce the antihypertensive effect of ACE inhibitors and impair renal function.",
    evidence:
      "Labeling for both drug classes notes reduced antihypertensive effect and renal risk with combined use.",
  },
  {
    drug_a: "piroxicam",
    drug_b: "heparin",
    severity: "high",
    mechanism:
      "NSAIDs inhibit platelet aggregation and can displace anticoagulants from protein binding, increasing bleeding risk.",
    evidence:
      "Labeling for anticoagulants warns of increased bleeding risk with concurrent NSAID use.",
  },
  {
    drug_a: "piroxicam",
    drug_b: "hydrocortisone",
    severity: "moderate",
    mechanism:
      "Both irritate the GI lining; combined use substantially increases risk of ulcers and GI bleeding.",
    evidence:
      "Guidelines recommend gastroprotection when NSAIDs and corticosteroids are combined.",
  },
  {
    drug_a: "piroxicam",
    drug_b: "irbesartan",
    severity: "moderate",
    mechanism:
      "NSAIDs can reduce the antihypertensive effect of ARBs and impair renal function.",
    evidence:
      "Labeling for both drug classes notes reduced antihypertensive effect and renal risk with combined use.",
  },
  {
    drug_a: "piroxicam",
    drug_b: "levomilnacipran",
    severity: "moderate",
    mechanism:
      "SSRIs combined with NSAIDs may increase risk of GI bleeding due to reduced platelet serotonin uptake.",
    evidence:
      "Observational studies link serotonergic antidepressant + NSAID combinations to higher GI bleeding rates.",
  },
  {
    drug_a: "piroxicam",
    drug_b: "lisinopril",
    severity: "moderate",
    mechanism:
      "NSAIDs can reduce the antihypertensive effect of ACE inhibitors and impair renal function.",
    evidence:
      "Labeling for both drug classes notes reduced antihypertensive effect and renal risk with combined use.",
  },
  {
    drug_a: "piroxicam",
    drug_b: "lithium",
    severity: "moderate",
    mechanism:
      "NSAIDs can reduce renal clearance of lithium, raising lithium levels toward toxicity.",
    evidence:
      "Lithium labeling warns of elevated levels with concurrent NSAID use, warranting level monitoring.",
  },
  {
    drug_a: "piroxicam",
    drug_b: "losartan",
    severity: "moderate",
    mechanism:
      "NSAIDs can reduce the antihypertensive effect of ARBs and impair renal function.",
    evidence:
      "Labeling for both drug classes notes reduced antihypertensive effect and renal risk with combined use.",
  },
  {
    drug_a: "piroxicam",
    drug_b: "methylprednisolone",
    severity: "moderate",
    mechanism:
      "Both irritate the GI lining; combined use substantially increases risk of ulcers and GI bleeding.",
    evidence:
      "Guidelines recommend gastroprotection when NSAIDs and corticosteroids are combined.",
  },
  {
    drug_a: "piroxicam",
    drug_b: "olmesartan",
    severity: "moderate",
    mechanism:
      "NSAIDs can reduce the antihypertensive effect of ARBs and impair renal function.",
    evidence:
      "Labeling for both drug classes notes reduced antihypertensive effect and renal risk with combined use.",
  },
  {
    drug_a: "piroxicam",
    drug_b: "paroxetine",
    severity: "moderate",
    mechanism:
      "SSRIs combined with NSAIDs may increase risk of GI bleeding due to reduced platelet serotonin uptake.",
    evidence:
      "Observational studies link SSRI + NSAID combinations to higher GI bleeding rates.",
  },
  {
    drug_a: "piroxicam",
    drug_b: "perindopril",
    severity: "moderate",
    mechanism:
      "NSAIDs can reduce the antihypertensive effect of ACE inhibitors and impair renal function.",
    evidence:
      "Labeling for both drug classes notes reduced antihypertensive effect and renal risk with combined use.",
  },
  {
    drug_a: "piroxicam",
    drug_b: "prasugrel",
    severity: "moderate",
    mechanism:
      "NSAIDs may add to the antiplatelet effect and irritate the GI lining, raising bleeding risk.",
    evidence:
      "Cardiology guidance flags added GI bleeding risk when NSAIDs are combined with antiplatelet therapy.",
  },
  {
    drug_a: "piroxicam",
    drug_b: "prednisone",
    severity: "moderate",
    mechanism:
      "Both irritate the GI lining; combined use substantially increases risk of ulcers and GI bleeding.",
    evidence:
      "Guidelines recommend gastroprotection when NSAIDs and corticosteroids are combined.",
  },
  {
    drug_a: "piroxicam",
    drug_b: "quinapril",
    severity: "moderate",
    mechanism:
      "NSAIDs can reduce the antihypertensive effect of ACE inhibitors and impair renal function.",
    evidence:
      "Labeling for both drug classes notes reduced antihypertensive effect and renal risk with combined use.",
  },
  {
    drug_a: "piroxicam",
    drug_b: "ramipril",
    severity: "moderate",
    mechanism:
      "NSAIDs can reduce the antihypertensive effect of ACE inhibitors and impair renal function.",
    evidence:
      "Labeling for both drug classes notes reduced antihypertensive effect and renal risk with combined use.",
  },
  {
    drug_a: "piroxicam",
    drug_b: "rivaroxaban",
    severity: "high",
    mechanism:
      "NSAIDs inhibit platelet aggregation and can displace anticoagulants from protein binding, increasing bleeding risk.",
    evidence:
      "Labeling for anticoagulants warns of increased bleeding risk with concurrent NSAID use.",
  },
  {
    drug_a: "piroxicam",
    drug_b: "sertraline",
    severity: "moderate",
    mechanism:
      "SSRIs combined with NSAIDs may increase risk of GI bleeding due to reduced platelet serotonin uptake.",
    evidence:
      "Observational studies link SSRI + NSAID combinations to higher GI bleeding rates.",
  },
  {
    drug_a: "piroxicam",
    drug_b: "sulindac",
    severity: "low",
    mechanism:
      "Combining two NSAIDs adds to GI and renal risk without added therapeutic benefit.",
    evidence:
      "Guidelines recommend against routine combination of two NSAIDs.",
  },
  {
    drug_a: "piroxicam",
    drug_b: "telmisartan",
    severity: "moderate",
    mechanism:
      "NSAIDs can reduce the antihypertensive effect of ARBs and impair renal function.",
    evidence:
      "Labeling for both drug classes notes reduced antihypertensive effect and renal risk with combined use.",
  },
  {
    drug_a: "piroxicam",
    drug_b: "ticagrelor",
    severity: "moderate",
    mechanism:
      "NSAIDs may add to the antiplatelet effect and irritate the GI lining, raising bleeding risk.",
    evidence:
      "Cardiology guidance flags added GI bleeding risk when NSAIDs are combined with antiplatelet therapy.",
  },
  {
    drug_a: "piroxicam",
    drug_b: "trandolapril",
    severity: "moderate",
    mechanism:
      "NSAIDs can reduce the antihypertensive effect of ACE inhibitors and impair renal function.",
    evidence:
      "Labeling for both drug classes notes reduced antihypertensive effect and renal risk with combined use.",
  },
  {
    drug_a: "piroxicam",
    drug_b: "triamcinolone",
    severity: "moderate",
    mechanism:
      "Both irritate the GI lining; combined use substantially increases risk of ulcers and GI bleeding.",
    evidence:
      "Guidelines recommend gastroprotection when NSAIDs and corticosteroids are combined.",
  },
  {
    drug_a: "piroxicam",
    drug_b: "valsartan",
    severity: "moderate",
    mechanism:
      "NSAIDs can reduce the antihypertensive effect of ARBs and impair renal function.",
    evidence:
      "Labeling for both drug classes notes reduced antihypertensive effect and renal risk with combined use.",
  },
  {
    drug_a: "piroxicam",
    drug_b: "venlafaxine",
    severity: "moderate",
    mechanism:
      "SSRIs combined with NSAIDs may increase risk of GI bleeding due to reduced platelet serotonin uptake.",
    evidence:
      "Observational studies link serotonergic antidepressant + NSAID combinations to higher GI bleeding rates.",
  },
  {
    drug_a: "piroxicam",
    drug_b: "warfarin",
    severity: "high",
    mechanism:
      "NSAIDs inhibit platelet aggregation and can displace anticoagulants from protein binding, increasing bleeding risk.",
    evidence:
      "Labeling for anticoagulants warns of increased bleeding risk with concurrent NSAID use.",
  },
  {
    drug_a: "prednisone",
    drug_b: "canagliflozin",
    severity: "moderate",
    mechanism:
      "Corticosteroids can raise blood glucose, counteracting the glucose-lowering effect of antidiabetic medications.",
    evidence:
      "Endocrinology guidance recommends closer glucose monitoring when corticosteroids are added.",
  },
  {
    drug_a: "prednisone",
    drug_b: "dapagliflozin",
    severity: "moderate",
    mechanism:
      "Corticosteroids can raise blood glucose, counteracting the glucose-lowering effect of antidiabetic medications.",
    evidence:
      "Endocrinology guidance recommends closer glucose monitoring when corticosteroids are added.",
  },
  {
    drug_a: "prednisone",
    drug_b: "dulaglutide",
    severity: "moderate",
    mechanism:
      "Corticosteroids can raise blood glucose, counteracting the glucose-lowering effect of antidiabetic medications.",
    evidence:
      "Endocrinology guidance recommends closer glucose monitoring when corticosteroids are added.",
  },
  {
    drug_a: "prednisone",
    drug_b: "empagliflozin",
    severity: "moderate",
    mechanism:
      "Corticosteroids can raise blood glucose, counteracting the glucose-lowering effect of antidiabetic medications.",
    evidence:
      "Endocrinology guidance recommends closer glucose monitoring when corticosteroids are added.",
  },
  {
    drug_a: "prednisone",
    drug_b: "insulin_aspart",
    severity: "moderate",
    mechanism:
      "Corticosteroids can raise blood glucose, counteracting the glucose-lowering effect of antidiabetic medications.",
    evidence:
      "Endocrinology guidance recommends closer glucose monitoring when corticosteroids are added.",
  },
  {
    drug_a: "prednisone",
    drug_b: "insulin_lispro",
    severity: "moderate",
    mechanism:
      "Corticosteroids can raise blood glucose, counteracting the glucose-lowering effect of antidiabetic medications.",
    evidence:
      "Endocrinology guidance recommends closer glucose monitoring when corticosteroids are added.",
  },
  {
    drug_a: "prednisone",
    drug_b: "linagliptin",
    severity: "moderate",
    mechanism:
      "Corticosteroids can raise blood glucose, counteracting the glucose-lowering effect of antidiabetic medications.",
    evidence:
      "Endocrinology guidance recommends closer glucose monitoring when corticosteroids are added.",
  },
  {
    drug_a: "prednisone",
    drug_b: "liraglutide",
    severity: "moderate",
    mechanism:
      "Corticosteroids can raise blood glucose, counteracting the glucose-lowering effect of antidiabetic medications.",
    evidence:
      "Endocrinology guidance recommends closer glucose monitoring when corticosteroids are added.",
  },
  {
    drug_a: "prednisone",
    drug_b: "pioglitazone",
    severity: "moderate",
    mechanism:
      "Corticosteroids can raise blood glucose, counteracting the glucose-lowering effect of antidiabetic medications.",
    evidence:
      "Endocrinology guidance recommends closer glucose monitoring when corticosteroids are added.",
  },
  {
    drug_a: "prednisone",
    drug_b: "saxagliptin",
    severity: "moderate",
    mechanism:
      "Corticosteroids can raise blood glucose, counteracting the glucose-lowering effect of antidiabetic medications.",
    evidence:
      "Endocrinology guidance recommends closer glucose monitoring when corticosteroids are added.",
  },
  {
    drug_a: "prednisone",
    drug_b: "semaglutide",
    severity: "moderate",
    mechanism:
      "Corticosteroids can raise blood glucose, counteracting the glucose-lowering effect of antidiabetic medications.",
    evidence:
      "Endocrinology guidance recommends closer glucose monitoring when corticosteroids are added.",
  },
  {
    drug_a: "prednisone",
    drug_b: "sitagliptin",
    severity: "moderate",
    mechanism:
      "Corticosteroids can raise blood glucose, counteracting the glucose-lowering effect of antidiabetic medications.",
    evidence:
      "Endocrinology guidance recommends closer glucose monitoring when corticosteroids are added.",
  },
  {
    drug_a: "promethazine",
    drug_b: "baclofen",
    severity: "moderate",
    mechanism:
      "Both cause CNS depression; combined use increases sedation and fall risk, especially in older adults.",
    evidence:
      "Product labeling warns of additive sedation between antihistamines and muscle relaxants.",
  },
  {
    drug_a: "promethazine",
    drug_b: "carisoprodol",
    severity: "moderate",
    mechanism:
      "Both cause CNS depression; combined use increases sedation and fall risk, especially in older adults.",
    evidence:
      "Product labeling warns of additive sedation between antihistamines and muscle relaxants.",
  },
  {
    drug_a: "promethazine",
    drug_b: "cyclobenzaprine",
    severity: "moderate",
    mechanism:
      "Both cause CNS depression; combined use increases sedation and fall risk, especially in older adults.",
    evidence:
      "Product labeling warns of additive sedation between antihistamines and muscle relaxants.",
  },
  {
    drug_a: "promethazine",
    drug_b: "methocarbamol",
    severity: "moderate",
    mechanism:
      "Both cause CNS depression; combined use increases sedation and fall risk, especially in older adults.",
    evidence:
      "Product labeling warns of additive sedation between antihistamines and muscle relaxants.",
  },
  {
    drug_a: "promethazine",
    drug_b: "tizanidine",
    severity: "moderate",
    mechanism:
      "Both cause CNS depression; combined use increases sedation and fall risk, especially in older adults.",
    evidence:
      "Product labeling warns of additive sedation between antihistamines and muscle relaxants.",
  },
  {
    drug_a: "propafenone",
    drug_b: "atorvastatin",
    severity: "moderate",
    mechanism:
      "Amiodarone-class antiarrhythmics inhibit CYP3A4, raising statin levels and myopathy risk.",
    evidence:
      "Statin labeling notes dose limits when combined with amiodarone.",
  },
  {
    drug_a: "propafenone",
    drug_b: "azithromycin",
    severity: "high",
    mechanism:
      "Macrolides can prolong the QT interval and add to the effect of QT-prolonging antiarrhythmics.",
    evidence:
      "Drug-induced long QT reference lists flag this combination as a torsades risk.",
  },
  {
    drug_a: "propafenone",
    drug_b: "ciprofloxacin",
    severity: "high",
    mechanism:
      "Fluoroquinolones can prolong the QT interval and add to the effect of QT-prolonging antiarrhythmics.",
    evidence:
      "Drug-induced long QT reference lists flag this combination as a torsades risk.",
  },
  {
    drug_a: "propafenone",
    drug_b: "citalopram",
    severity: "high",
    mechanism:
      "Both prolong the QT interval; combined use meaningfully raises the risk of dangerous arrhythmia.",
    evidence:
      "Drug-induced long QT reference lists flag this combination as a torsades risk.",
  },
  {
    drug_a: "propafenone",
    drug_b: "clarithromycin",
    severity: "high",
    mechanism:
      "Macrolides can prolong the QT interval and add to the effect of QT-prolonging antiarrhythmics.",
    evidence:
      "Drug-induced long QT reference lists flag this combination as a torsades risk.",
  },
  {
    drug_a: "propafenone",
    drug_b: "digoxin",
    severity: "moderate",
    mechanism:
      "Amiodarone-class antiarrhythmics can raise digoxin levels via reduced clearance, increasing toxicity risk.",
    evidence:
      "Digoxin labeling recommends dose reduction when amiodarone is co-prescribed.",
  },
  {
    drug_a: "propafenone",
    drug_b: "erythromycin",
    severity: "high",
    mechanism:
      "Macrolides can prolong the QT interval and add to the effect of QT-prolonging antiarrhythmics.",
    evidence:
      "Drug-induced long QT reference lists flag this combination as a torsades risk.",
  },
  {
    drug_a: "propafenone",
    drug_b: "haloperidol",
    severity: "high",
    mechanism:
      "Both prolong the QT interval; combined use meaningfully raises the risk of dangerous arrhythmia.",
    evidence:
      "Drug-induced long QT reference lists flag this combination as a torsades risk.",
  },
  {
    drug_a: "propafenone",
    drug_b: "levofloxacin",
    severity: "high",
    mechanism:
      "Both prolong the QT interval; combined use meaningfully raises the risk of dangerous arrhythmia.",
    evidence:
      "Drug-induced long QT reference lists flag this combination as a torsades risk.",
  },
  {
    drug_a: "propafenone",
    drug_b: "lovastatin",
    severity: "moderate",
    mechanism:
      "Amiodarone-class antiarrhythmics inhibit CYP3A4, raising statin levels and myopathy risk.",
    evidence:
      "Statin labeling notes dose limits when combined with amiodarone.",
  },
  {
    drug_a: "propafenone",
    drug_b: "methadone",
    severity: "high",
    mechanism:
      "Both prolong the QT interval; combined use meaningfully raises the risk of dangerous arrhythmia.",
    evidence:
      "Drug-induced long QT reference lists flag this combination as a torsades risk.",
  },
  {
    drug_a: "propafenone",
    drug_b: "moxifloxacin",
    severity: "high",
    mechanism:
      "Both prolong the QT interval; combined use meaningfully raises the risk of dangerous arrhythmia.",
    evidence:
      "Drug-induced long QT reference lists flag this combination as a torsades risk.",
  },
  {
    drug_a: "propafenone",
    drug_b: "ofloxacin",
    severity: "high",
    mechanism:
      "Fluoroquinolones can prolong the QT interval and add to the effect of QT-prolonging antiarrhythmics.",
    evidence:
      "Drug-induced long QT reference lists flag this combination as a torsades risk.",
  },
  {
    drug_a: "propafenone",
    drug_b: "ondansetron",
    severity: "high",
    mechanism:
      "Both prolong the QT interval; combined use meaningfully raises the risk of dangerous arrhythmia.",
    evidence:
      "Drug-induced long QT reference lists flag this combination as a torsades risk.",
  },
  {
    drug_a: "propafenone",
    drug_b: "simvastatin",
    severity: "moderate",
    mechanism:
      "Amiodarone-class antiarrhythmics inhibit CYP3A4, raising statin levels and myopathy risk.",
    evidence:
      "Statin labeling notes dose limits when combined with amiodarone.",
  },
  {
    drug_a: "propafenone",
    drug_b: "sotalol",
    severity: "high",
    mechanism:
      "Both prolong the QT interval; combined use meaningfully raises the risk of dangerous arrhythmia.",
    evidence:
      "Guidelines recommend against combining two QT-prolonging antiarrhythmics.",
  },
  {
    drug_a: "propafenone",
    drug_b: "ziprasidone",
    severity: "high",
    mechanism:
      "Both prolong the QT interval; combined use meaningfully raises the risk of dangerous arrhythmia.",
    evidence:
      "Drug-induced long QT reference lists flag this combination as a torsades risk.",
  },
  {
    drug_a: "propranolol",
    drug_b: "canagliflozin",
    severity: "low",
    mechanism:
      "Beta blockers can mask the warning signs of hypoglycemia such as tremor and rapid heartbeat.",
    evidence:
      "Diabetes management guidance notes blunted hypoglycemia awareness with beta blocker use.",
  },
  {
    drug_a: "propranolol",
    drug_b: "dapagliflozin",
    severity: "low",
    mechanism:
      "Beta blockers can mask the warning signs of hypoglycemia such as tremor and rapid heartbeat.",
    evidence:
      "Diabetes management guidance notes blunted hypoglycemia awareness with beta blocker use.",
  },
  {
    drug_a: "propranolol",
    drug_b: "dulaglutide",
    severity: "low",
    mechanism:
      "Beta blockers can mask the warning signs of hypoglycemia such as tremor and rapid heartbeat.",
    evidence:
      "Diabetes management guidance notes blunted hypoglycemia awareness with beta blocker use.",
  },
  {
    drug_a: "propranolol",
    drug_b: "empagliflozin",
    severity: "low",
    mechanism:
      "Beta blockers can mask the warning signs of hypoglycemia such as tremor and rapid heartbeat.",
    evidence:
      "Diabetes management guidance notes blunted hypoglycemia awareness with beta blocker use.",
  },
  {
    drug_a: "propranolol",
    drug_b: "insulin_aspart",
    severity: "low",
    mechanism:
      "Beta blockers can mask the warning signs of hypoglycemia such as tremor and rapid heartbeat.",
    evidence:
      "Diabetes management guidance notes blunted hypoglycemia awareness with beta blocker use.",
  },
  {
    drug_a: "propranolol",
    drug_b: "insulin_lispro",
    severity: "low",
    mechanism:
      "Beta blockers can mask the warning signs of hypoglycemia such as tremor and rapid heartbeat.",
    evidence:
      "Diabetes management guidance notes blunted hypoglycemia awareness with beta blocker use.",
  },
  {
    drug_a: "propranolol",
    drug_b: "linagliptin",
    severity: "low",
    mechanism:
      "Beta blockers can mask the warning signs of hypoglycemia such as tremor and rapid heartbeat.",
    evidence:
      "Diabetes management guidance notes blunted hypoglycemia awareness with beta blocker use.",
  },
  {
    drug_a: "propranolol",
    drug_b: "liraglutide",
    severity: "low",
    mechanism:
      "Beta blockers can mask the warning signs of hypoglycemia such as tremor and rapid heartbeat.",
    evidence:
      "Diabetes management guidance notes blunted hypoglycemia awareness with beta blocker use.",
  },
  {
    drug_a: "propranolol",
    drug_b: "pioglitazone",
    severity: "low",
    mechanism:
      "Beta blockers can mask the warning signs of hypoglycemia such as tremor and rapid heartbeat.",
    evidence:
      "Diabetes management guidance notes blunted hypoglycemia awareness with beta blocker use.",
  },
  {
    drug_a: "propranolol",
    drug_b: "saxagliptin",
    severity: "low",
    mechanism:
      "Beta blockers can mask the warning signs of hypoglycemia such as tremor and rapid heartbeat.",
    evidence:
      "Diabetes management guidance notes blunted hypoglycemia awareness with beta blocker use.",
  },
  {
    drug_a: "propranolol",
    drug_b: "semaglutide",
    severity: "low",
    mechanism:
      "Beta blockers can mask the warning signs of hypoglycemia such as tremor and rapid heartbeat.",
    evidence:
      "Diabetes management guidance notes blunted hypoglycemia awareness with beta blocker use.",
  },
  {
    drug_a: "propranolol",
    drug_b: "sitagliptin",
    severity: "low",
    mechanism:
      "Beta blockers can mask the warning signs of hypoglycemia such as tremor and rapid heartbeat.",
    evidence:
      "Diabetes management guidance notes blunted hypoglycemia awareness with beta blocker use.",
  },
  {
    drug_a: "propranolol",
    drug_b: "sotalol",
    severity: "low",
    mechanism:
      "Combining two beta blockers adds to heart-rate-lowering effects without added benefit.",
    evidence:
      "Guidelines recommend against routine combination of two beta blockers.",
  },
  {
    drug_a: "quetiapine",
    drug_b: "ondansetron",
    severity: "moderate",
    mechanism:
      "Some antipsychotics have mild serotonergic activity that may add to that of other serotonergic agents.",
    evidence:
      "Case reports describe serotonin syndrome features when antipsychotics are combined with strongly serotonergic drugs.",
  },
  {
    drug_a: "quetiapine",
    drug_b: "rizatriptan",
    severity: "moderate",
    mechanism:
      "Some antipsychotics have mild serotonergic activity that may add to that of other serotonergic agents.",
    evidence:
      "Case reports describe serotonin syndrome features when antipsychotics are combined with strongly serotonergic drugs.",
  },
  {
    drug_a: "quetiapine",
    drug_b: "st_johns_wort",
    severity: "moderate",
    mechanism:
      "Some antipsychotics have mild serotonergic activity that may add to that of other serotonergic agents.",
    evidence:
      "Case reports describe serotonin syndrome features when antipsychotics are combined with strongly serotonergic drugs.",
  },
  {
    drug_a: "quetiapine",
    drug_b: "sumatriptan",
    severity: "moderate",
    mechanism:
      "Some antipsychotics have mild serotonergic activity that may add to that of other serotonergic agents.",
    evidence:
      "Case reports describe serotonin syndrome features when antipsychotics are combined with strongly serotonergic drugs.",
  },
  {
    drug_a: "quetiapine",
    drug_b: "ziprasidone",
    severity: "moderate",
    mechanism:
      "Combining two antipsychotics adds to sedation, metabolic, and QT-prolongation risk without clear added benefit.",
    evidence:
      "Guidelines generally recommend against routine antipsychotic polypharmacy.",
  },
  {
    drug_a: "quinapril",
    drug_b: "amiloride",
    severity: "moderate",
    mechanism:
      "Both raise serum potassium; combined use increases the risk of hyperkalemia.",
    evidence:
      "Labeling for potassium-sparing diuretics warns of hyperkalemia risk with ACE inhibitors.",
  },
  {
    drug_a: "quinapril",
    drug_b: "azilsartan",
    severity: "moderate",
    mechanism:
      "Dual blockade of the renin-angiotensin system can increase risk of hyperkalemia and hypotension.",
    evidence:
      "Guidelines generally recommend against combining ACE inhibitors and ARBs.",
  },
  {
    drug_a: "quinapril",
    drug_b: "candesartan",
    severity: "moderate",
    mechanism:
      "Dual blockade of the renin-angiotensin system can increase risk of hyperkalemia and hypotension.",
    evidence:
      "Guidelines generally recommend against combining ACE inhibitors and ARBs.",
  },
  {
    drug_a: "quinapril",
    drug_b: "irbesartan",
    severity: "moderate",
    mechanism:
      "Dual blockade of the renin-angiotensin system can increase risk of hyperkalemia and hypotension.",
    evidence:
      "Guidelines generally recommend against combining ACE inhibitors and ARBs.",
  },
  {
    drug_a: "quinapril",
    drug_b: "lithium",
    severity: "moderate",
    mechanism:
      "ACE inhibitors can reduce renal clearance of lithium, raising lithium levels toward toxicity.",
    evidence:
      "Lithium labeling warns of elevated levels with concurrent ACE inhibitor use, warranting level monitoring.",
  },
  {
    drug_a: "quinapril",
    drug_b: "losartan",
    severity: "moderate",
    mechanism:
      "Dual blockade of the renin-angiotensin system can increase risk of hyperkalemia and hypotension.",
    evidence:
      "Guidelines generally recommend against combining ACE inhibitors and ARBs.",
  },
  {
    drug_a: "quinapril",
    drug_b: "olmesartan",
    severity: "moderate",
    mechanism:
      "Dual blockade of the renin-angiotensin system can increase risk of hyperkalemia and hypotension.",
    evidence:
      "Guidelines generally recommend against combining ACE inhibitors and ARBs.",
  },
  {
    drug_a: "quinapril",
    drug_b: "spironolactone",
    severity: "moderate",
    mechanism:
      "Both raise serum potassium; combined use increases the risk of hyperkalemia.",
    evidence:
      "Labeling for potassium-sparing diuretics warns of hyperkalemia risk with ACE inhibitors.",
  },
  {
    drug_a: "quinapril",
    drug_b: "telmisartan",
    severity: "moderate",
    mechanism:
      "Dual blockade of the renin-angiotensin system can increase risk of hyperkalemia and hypotension.",
    evidence:
      "Guidelines generally recommend against combining ACE inhibitors and ARBs.",
  },
  {
    drug_a: "quinapril",
    drug_b: "triamterene",
    severity: "moderate",
    mechanism:
      "Both raise serum potassium; combined use increases the risk of hyperkalemia.",
    evidence:
      "Labeling for potassium-sparing diuretics warns of hyperkalemia risk with ACE inhibitors.",
  },
  {
    drug_a: "quinapril",
    drug_b: "valsartan",
    severity: "moderate",
    mechanism:
      "Dual blockade of the renin-angiotensin system can increase risk of hyperkalemia and hypotension.",
    evidence:
      "Guidelines generally recommend against combining ACE inhibitors and ARBs.",
  },
  {
    drug_a: "rabeprazole",
    drug_b: "fluconazole",
    severity: "moderate",
    mechanism:
      "Reduced gastric acidity from PPIs can impair absorption of azole antifungals that require an acidic environment.",
    evidence:
      "Antifungal labeling notes reduced bioavailability with concurrent acid-suppressing therapy.",
  },
  {
    drug_a: "rabeprazole",
    drug_b: "itraconazole",
    severity: "moderate",
    mechanism:
      "Reduced gastric acidity from PPIs can impair absorption of azole antifungals that require an acidic environment.",
    evidence:
      "Antifungal labeling notes reduced bioavailability with concurrent acid-suppressing therapy.",
  },
  {
    drug_a: "rabeprazole",
    drug_b: "ketoconazole",
    severity: "moderate",
    mechanism:
      "Reduced gastric acidity from PPIs can impair absorption of azole antifungals that require an acidic environment.",
    evidence:
      "Antifungal labeling notes reduced bioavailability with concurrent acid-suppressing therapy.",
  },
  {
    drug_a: "rabeprazole",
    drug_b: "levothyroxine",
    severity: "low",
    mechanism:
      "Reduced gastric acidity from PPIs may impair levothyroxine absorption.",
    evidence:
      "Endocrinology guidance recommends separating dosing times and monitoring thyroid levels.",
  },
  {
    drug_a: "rabeprazole",
    drug_b: "liothyronine",
    severity: "low",
    mechanism:
      "Reduced gastric acidity from PPIs may impair levothyroxine absorption.",
    evidence:
      "Endocrinology guidance recommends separating dosing times and monitoring thyroid levels.",
  },
  {
    drug_a: "ramipril",
    drug_b: "azilsartan",
    severity: "moderate",
    mechanism:
      "Dual blockade of the renin-angiotensin system can increase risk of hyperkalemia and hypotension.",
    evidence:
      "Guidelines generally recommend against combining ACE inhibitors and ARBs.",
  },
  {
    drug_a: "ramipril",
    drug_b: "candesartan",
    severity: "moderate",
    mechanism:
      "Dual blockade of the renin-angiotensin system can increase risk of hyperkalemia and hypotension.",
    evidence:
      "Guidelines generally recommend against combining ACE inhibitors and ARBs.",
  },
  {
    drug_a: "ramipril",
    drug_b: "telmisartan",
    severity: "moderate",
    mechanism:
      "Dual blockade of the renin-angiotensin system can increase risk of hyperkalemia and hypotension.",
    evidence:
      "Guidelines generally recommend against combining ACE inhibitors and ARBs.",
  },
  {
    drug_a: "ramipril",
    drug_b: "triamterene",
    severity: "moderate",
    mechanism:
      "Both raise serum potassium; combined use increases the risk of hyperkalemia.",
    evidence:
      "Labeling for potassium-sparing diuretics warns of hyperkalemia risk with ACE inhibitors.",
  },
  {
    drug_a: "ranitidine",
    drug_b: "fluconazole",
    severity: "moderate",
    mechanism:
      "Reduced gastric acidity from H2 blockers can impair absorption of azole antifungals that require an acidic environment.",
    evidence:
      "Antifungal labeling notes reduced bioavailability with concurrent acid-suppressing therapy.",
  },
  {
    drug_a: "ranitidine",
    drug_b: "itraconazole",
    severity: "moderate",
    mechanism:
      "Reduced gastric acidity from H2 blockers can impair absorption of azole antifungals that require an acidic environment.",
    evidence:
      "Antifungal labeling notes reduced bioavailability with concurrent acid-suppressing therapy.",
  },
  {
    drug_a: "ranitidine",
    drug_b: "ketoconazole",
    severity: "moderate",
    mechanism:
      "Reduced gastric acidity from H2 blockers can impair absorption of azole antifungals that require an acidic environment.",
    evidence:
      "Antifungal labeling notes reduced bioavailability with concurrent acid-suppressing therapy.",
  },
  {
    drug_a: "ranitidine",
    drug_b: "levothyroxine",
    severity: "low",
    mechanism:
      "Reduced gastric acidity from H2 blockers may impair thyroid hormone absorption.",
    evidence:
      "Endocrinology guidance recommends separating dosing times and monitoring thyroid levels.",
  },
  {
    drug_a: "ranitidine",
    drug_b: "liothyronine",
    severity: "low",
    mechanism:
      "Reduced gastric acidity from H2 blockers may impair thyroid hormone absorption.",
    evidence:
      "Endocrinology guidance recommends separating dosing times and monitoring thyroid levels.",
  },
  {
    drug_a: "risperidone",
    drug_b: "ondansetron",
    severity: "moderate",
    mechanism:
      "Some antipsychotics have mild serotonergic activity that may add to that of other serotonergic agents.",
    evidence:
      "Case reports describe serotonin syndrome features when antipsychotics are combined with strongly serotonergic drugs.",
  },
  {
    drug_a: "risperidone",
    drug_b: "rizatriptan",
    severity: "moderate",
    mechanism:
      "Some antipsychotics have mild serotonergic activity that may add to that of other serotonergic agents.",
    evidence:
      "Case reports describe serotonin syndrome features when antipsychotics are combined with strongly serotonergic drugs.",
  },
  {
    drug_a: "risperidone",
    drug_b: "st_johns_wort",
    severity: "moderate",
    mechanism:
      "Some antipsychotics have mild serotonergic activity that may add to that of other serotonergic agents.",
    evidence:
      "Case reports describe serotonin syndrome features when antipsychotics are combined with strongly serotonergic drugs.",
  },
  {
    drug_a: "risperidone",
    drug_b: "sumatriptan",
    severity: "moderate",
    mechanism:
      "Some antipsychotics have mild serotonergic activity that may add to that of other serotonergic agents.",
    evidence:
      "Case reports describe serotonin syndrome features when antipsychotics are combined with strongly serotonergic drugs.",
  },
  {
    drug_a: "risperidone",
    drug_b: "ziprasidone",
    severity: "moderate",
    mechanism:
      "Combining two antipsychotics adds to sedation, metabolic, and QT-prolongation risk without clear added benefit.",
    evidence:
      "Guidelines generally recommend against routine antipsychotic polypharmacy.",
  },
  {
    drug_a: "rivaroxaban",
    drug_b: "budesonide",
    severity: "moderate",
    mechanism:
      "Corticosteroids can irritate the GI lining and alter clotting factor levels, adding to anticoagulant bleeding risk.",
    evidence:
      "Case reports describe elevated INR and GI bleeding with combined corticosteroid and anticoagulant use.",
  },
  {
    drug_a: "rivaroxaban",
    drug_b: "desvenlafaxine",
    severity: "moderate",
    mechanism:
      "Serotonergic antidepressants impair platelet aggregation and, combined with anticoagulants, can further raise bleeding risk.",
    evidence:
      "Case-control studies report increased bleeding risk with serotonergic antidepressant and anticoagulant co-therapy.",
  },
  {
    drug_a: "rivaroxaban",
    drug_b: "dipyridamole",
    severity: "high",
    mechanism:
      "Combined anticoagulant and antiplatelet effects substantially increase bleeding risk.",
    evidence:
      "Cardiology guidelines require careful risk-benefit assessment before combining these therapies.",
  },
  {
    drug_a: "rivaroxaban",
    drug_b: "fluconazole",
    severity: "high",
    mechanism:
      "Azole antifungals inhibit hepatic enzymes that metabolize anticoagulants, sharply raising anticoagulant levels and bleeding risk.",
    evidence:
      "Labeling for azole antifungals lists anticoagulants among drugs requiring dose adjustment or close monitoring.",
  },
  {
    drug_a: "rivaroxaban",
    drug_b: "fluticasone",
    severity: "moderate",
    mechanism:
      "Corticosteroids can irritate the GI lining and alter clotting factor levels, adding to anticoagulant bleeding risk.",
    evidence:
      "Case reports describe elevated INR and GI bleeding with combined corticosteroid and anticoagulant use.",
  },
  {
    drug_a: "rivaroxaban",
    drug_b: "fluvoxamine",
    severity: "moderate",
    mechanism:
      "SSRIs impair platelet aggregation and, combined with anticoagulants, can further raise bleeding risk.",
    evidence:
      "Case-control studies report increased bleeding risk with SSRI and anticoagulant co-therapy.",
  },
  {
    drug_a: "rivaroxaban",
    drug_b: "hydrocortisone",
    severity: "moderate",
    mechanism:
      "Corticosteroids can irritate the GI lining and alter clotting factor levels, adding to anticoagulant bleeding risk.",
    evidence:
      "Case reports describe elevated INR and GI bleeding with combined corticosteroid and anticoagulant use.",
  },
  {
    drug_a: "rivaroxaban",
    drug_b: "itraconazole",
    severity: "high",
    mechanism:
      "Azole antifungals inhibit hepatic enzymes that metabolize anticoagulants, sharply raising anticoagulant levels and bleeding risk.",
    evidence:
      "Labeling for azole antifungals lists anticoagulants among drugs requiring dose adjustment or close monitoring.",
  },
  {
    drug_a: "rivaroxaban",
    drug_b: "ketoconazole",
    severity: "high",
    mechanism:
      "Azole antifungals inhibit hepatic enzymes that metabolize anticoagulants, sharply raising anticoagulant levels and bleeding risk.",
    evidence:
      "Labeling for azole antifungals lists anticoagulants among drugs requiring dose adjustment or close monitoring.",
  },
  {
    drug_a: "rivaroxaban",
    drug_b: "levomilnacipran",
    severity: "moderate",
    mechanism:
      "Serotonergic antidepressants impair platelet aggregation and, combined with anticoagulants, can further raise bleeding risk.",
    evidence:
      "Case-control studies report increased bleeding risk with serotonergic antidepressant and anticoagulant co-therapy.",
  },
  {
    drug_a: "rivaroxaban",
    drug_b: "moxifloxacin",
    severity: "moderate",
    mechanism:
      "Fluoroquinolones can potentiate anticoagulant effect, raising bleeding risk.",
    evidence:
      "Labeling for anticoagulants notes increased INR when fluoroquinolone antibiotics are co-prescribed.",
  },
  {
    drug_a: "rivaroxaban",
    drug_b: "ofloxacin",
    severity: "moderate",
    mechanism:
      "Fluoroquinolones can potentiate anticoagulant effect, raising bleeding risk.",
    evidence:
      "Labeling for anticoagulants notes increased INR when fluoroquinolone antibiotics are co-prescribed.",
  },
  {
    drug_a: "rivaroxaban",
    drug_b: "prasugrel",
    severity: "high",
    mechanism:
      "Combined anticoagulant and antiplatelet effects substantially increase bleeding risk.",
    evidence:
      "Cardiology guidelines require careful risk-benefit assessment before combining these therapies.",
  },
  {
    drug_a: "rivaroxaban",
    drug_b: "ticagrelor",
    severity: "high",
    mechanism:
      "Combined anticoagulant and antiplatelet effects substantially increase bleeding risk.",
    evidence:
      "Cardiology guidelines require careful risk-benefit assessment before combining these therapies.",
  },
  {
    drug_a: "rivaroxaban",
    drug_b: "triamcinolone",
    severity: "moderate",
    mechanism:
      "Corticosteroids can irritate the GI lining and alter clotting factor levels, adding to anticoagulant bleeding risk.",
    evidence:
      "Case reports describe elevated INR and GI bleeding with combined corticosteroid and anticoagulant use.",
  },
  {
    drug_a: "sildenafil",
    drug_b: "amiodarone",
    severity: "moderate",
    mechanism:
      "PDE5 inhibitors can add to blood-pressure-lowering effects and, with amiodarone-class drugs, add QT-related risk.",
    evidence:
      "Cardiology guidance recommends caution combining PDE5 inhibitors with antiarrhythmics.",
  },
  {
    drug_a: "sildenafil",
    drug_b: "dronedarone",
    severity: "moderate",
    mechanism:
      "PDE5 inhibitors can add to blood-pressure-lowering effects and, with amiodarone-class drugs, add QT-related risk.",
    evidence:
      "Cardiology guidance recommends caution combining PDE5 inhibitors with antiarrhythmics.",
  },
  {
    drug_a: "sildenafil",
    drug_b: "flecainide",
    severity: "moderate",
    mechanism:
      "PDE5 inhibitors can add to blood-pressure-lowering effects and, with amiodarone-class drugs, add QT-related risk.",
    evidence:
      "Cardiology guidance recommends caution combining PDE5 inhibitors with antiarrhythmics.",
  },
  {
    drug_a: "sildenafil",
    drug_b: "propafenone",
    severity: "moderate",
    mechanism:
      "PDE5 inhibitors can add to blood-pressure-lowering effects and, with amiodarone-class drugs, add QT-related risk.",
    evidence:
      "Cardiology guidance recommends caution combining PDE5 inhibitors with antiarrhythmics.",
  },
  {
    drug_a: "sildenafil",
    drug_b: "sotalol",
    severity: "moderate",
    mechanism:
      "PDE5 inhibitors can add to blood-pressure-lowering effects and, with amiodarone-class drugs, add QT-related risk.",
    evidence:
      "Cardiology guidance recommends caution combining PDE5 inhibitors with antiarrhythmics.",
  },
  {
    drug_a: "sotalol",
    drug_b: "atorvastatin",
    severity: "moderate",
    mechanism:
      "Amiodarone-class antiarrhythmics inhibit CYP3A4, raising statin levels and myopathy risk.",
    evidence:
      "Statin labeling notes dose limits when combined with amiodarone.",
  },
  {
    drug_a: "sotalol",
    drug_b: "azithromycin",
    severity: "high",
    mechanism:
      "Macrolides can prolong the QT interval and add to the effect of QT-prolonging antiarrhythmics.",
    evidence:
      "Drug-induced long QT reference lists flag this combination as a torsades risk.",
  },
  {
    drug_a: "sotalol",
    drug_b: "canagliflozin",
    severity: "low",
    mechanism:
      "Beta blockers can mask the warning signs of hypoglycemia such as tremor and rapid heartbeat.",
    evidence:
      "Diabetes management guidance notes blunted hypoglycemia awareness with beta blocker use.",
  },
  {
    drug_a: "sotalol",
    drug_b: "ciprofloxacin",
    severity: "high",
    mechanism:
      "Fluoroquinolones can prolong the QT interval and add to the effect of QT-prolonging antiarrhythmics.",
    evidence:
      "Drug-induced long QT reference lists flag this combination as a torsades risk.",
  },
  {
    drug_a: "sotalol",
    drug_b: "citalopram",
    severity: "high",
    mechanism:
      "Both prolong the QT interval; combined use meaningfully raises the risk of dangerous arrhythmia.",
    evidence:
      "Drug-induced long QT reference lists flag this combination as a torsades risk.",
  },
  {
    drug_a: "sotalol",
    drug_b: "clarithromycin",
    severity: "high",
    mechanism:
      "Macrolides can prolong the QT interval and add to the effect of QT-prolonging antiarrhythmics.",
    evidence:
      "Drug-induced long QT reference lists flag this combination as a torsades risk.",
  },
  {
    drug_a: "sotalol",
    drug_b: "dapagliflozin",
    severity: "low",
    mechanism:
      "Beta blockers can mask the warning signs of hypoglycemia such as tremor and rapid heartbeat.",
    evidence:
      "Diabetes management guidance notes blunted hypoglycemia awareness with beta blocker use.",
  },
  {
    drug_a: "sotalol",
    drug_b: "digoxin",
    severity: "moderate",
    mechanism:
      "Amiodarone-class antiarrhythmics can raise digoxin levels via reduced clearance, increasing toxicity risk.",
    evidence:
      "Digoxin labeling recommends dose reduction when amiodarone is co-prescribed.",
  },
  {
    drug_a: "sotalol",
    drug_b: "diltiazem",
    severity: "moderate",
    mechanism:
      "Both slow cardiac conduction; combined use can cause excessive bradycardia or heart block.",
    evidence:
      "Cardiology guidance recommends caution combining beta blockers with non-dihydropyridine calcium channel blockers.",
  },
  {
    drug_a: "sotalol",
    drug_b: "dulaglutide",
    severity: "low",
    mechanism:
      "Beta blockers can mask the warning signs of hypoglycemia such as tremor and rapid heartbeat.",
    evidence:
      "Diabetes management guidance notes blunted hypoglycemia awareness with beta blocker use.",
  },
  {
    drug_a: "sotalol",
    drug_b: "empagliflozin",
    severity: "low",
    mechanism:
      "Beta blockers can mask the warning signs of hypoglycemia such as tremor and rapid heartbeat.",
    evidence:
      "Diabetes management guidance notes blunted hypoglycemia awareness with beta blocker use.",
  },
  {
    drug_a: "sotalol",
    drug_b: "erythromycin",
    severity: "high",
    mechanism:
      "Macrolides can prolong the QT interval and add to the effect of QT-prolonging antiarrhythmics.",
    evidence:
      "Drug-induced long QT reference lists flag this combination as a torsades risk.",
  },
  {
    drug_a: "sotalol",
    drug_b: "glimepiride",
    severity: "low",
    mechanism:
      "Beta blockers can mask the warning signs of hypoglycemia such as tremor and rapid heartbeat.",
    evidence:
      "Diabetes management guidance notes blunted hypoglycemia awareness with beta blocker use.",
  },
  {
    drug_a: "sotalol",
    drug_b: "glipizide",
    severity: "low",
    mechanism:
      "Beta blockers can mask the warning signs of hypoglycemia such as tremor and rapid heartbeat.",
    evidence:
      "Diabetes management guidance notes blunted hypoglycemia awareness with beta blocker use.",
  },
  {
    drug_a: "sotalol",
    drug_b: "glyburide",
    severity: "low",
    mechanism:
      "Beta blockers can mask the warning signs of hypoglycemia such as tremor and rapid heartbeat.",
    evidence:
      "Diabetes management guidance notes blunted hypoglycemia awareness with beta blocker use.",
  },
  {
    drug_a: "sotalol",
    drug_b: "haloperidol",
    severity: "high",
    mechanism:
      "Both prolong the QT interval; combined use meaningfully raises the risk of dangerous arrhythmia.",
    evidence:
      "Drug-induced long QT reference lists flag this combination as a torsades risk.",
  },
  {
    drug_a: "sotalol",
    drug_b: "insulin_aspart",
    severity: "low",
    mechanism:
      "Beta blockers can mask the warning signs of hypoglycemia such as tremor and rapid heartbeat.",
    evidence:
      "Diabetes management guidance notes blunted hypoglycemia awareness with beta blocker use.",
  },
  {
    drug_a: "sotalol",
    drug_b: "insulin_glargine",
    severity: "low",
    mechanism:
      "Beta blockers can mask the warning signs of hypoglycemia such as tremor and rapid heartbeat.",
    evidence:
      "Diabetes management guidance notes blunted hypoglycemia awareness with beta blocker use.",
  },
  {
    drug_a: "sotalol",
    drug_b: "insulin_lispro",
    severity: "low",
    mechanism:
      "Beta blockers can mask the warning signs of hypoglycemia such as tremor and rapid heartbeat.",
    evidence:
      "Diabetes management guidance notes blunted hypoglycemia awareness with beta blocker use.",
  },
  {
    drug_a: "sotalol",
    drug_b: "levofloxacin",
    severity: "high",
    mechanism:
      "Both prolong the QT interval; combined use meaningfully raises the risk of dangerous arrhythmia.",
    evidence:
      "Drug-induced long QT reference lists flag this combination as a torsades risk.",
  },
  {
    drug_a: "sotalol",
    drug_b: "linagliptin",
    severity: "low",
    mechanism:
      "Beta blockers can mask the warning signs of hypoglycemia such as tremor and rapid heartbeat.",
    evidence:
      "Diabetes management guidance notes blunted hypoglycemia awareness with beta blocker use.",
  },
  {
    drug_a: "sotalol",
    drug_b: "liraglutide",
    severity: "low",
    mechanism:
      "Beta blockers can mask the warning signs of hypoglycemia such as tremor and rapid heartbeat.",
    evidence:
      "Diabetes management guidance notes blunted hypoglycemia awareness with beta blocker use.",
  },
  {
    drug_a: "sotalol",
    drug_b: "lovastatin",
    severity: "moderate",
    mechanism:
      "Amiodarone-class antiarrhythmics inhibit CYP3A4, raising statin levels and myopathy risk.",
    evidence:
      "Statin labeling notes dose limits when combined with amiodarone.",
  },
  {
    drug_a: "sotalol",
    drug_b: "metformin",
    severity: "low",
    mechanism:
      "Beta blockers can mask the warning signs of hypoglycemia such as tremor and rapid heartbeat.",
    evidence:
      "Diabetes management guidance notes blunted hypoglycemia awareness with beta blocker use.",
  },
  {
    drug_a: "sotalol",
    drug_b: "methadone",
    severity: "high",
    mechanism:
      "Both prolong the QT interval; combined use meaningfully raises the risk of dangerous arrhythmia.",
    evidence:
      "Drug-induced long QT reference lists flag this combination as a torsades risk.",
  },
  {
    drug_a: "sotalol",
    drug_b: "moxifloxacin",
    severity: "high",
    mechanism:
      "Both prolong the QT interval; combined use meaningfully raises the risk of dangerous arrhythmia.",
    evidence:
      "Drug-induced long QT reference lists flag this combination as a torsades risk.",
  },
  {
    drug_a: "sotalol",
    drug_b: "ofloxacin",
    severity: "high",
    mechanism:
      "Fluoroquinolones can prolong the QT interval and add to the effect of QT-prolonging antiarrhythmics.",
    evidence:
      "Drug-induced long QT reference lists flag this combination as a torsades risk.",
  },
  {
    drug_a: "sotalol",
    drug_b: "ondansetron",
    severity: "high",
    mechanism:
      "Both prolong the QT interval; combined use meaningfully raises the risk of dangerous arrhythmia.",
    evidence:
      "Drug-induced long QT reference lists flag this combination as a torsades risk.",
  },
  {
    drug_a: "sotalol",
    drug_b: "pioglitazone",
    severity: "low",
    mechanism:
      "Beta blockers can mask the warning signs of hypoglycemia such as tremor and rapid heartbeat.",
    evidence:
      "Diabetes management guidance notes blunted hypoglycemia awareness with beta blocker use.",
  },
  {
    drug_a: "sotalol",
    drug_b: "saxagliptin",
    severity: "low",
    mechanism:
      "Beta blockers can mask the warning signs of hypoglycemia such as tremor and rapid heartbeat.",
    evidence:
      "Diabetes management guidance notes blunted hypoglycemia awareness with beta blocker use.",
  },
  {
    drug_a: "sotalol",
    drug_b: "semaglutide",
    severity: "low",
    mechanism:
      "Beta blockers can mask the warning signs of hypoglycemia such as tremor and rapid heartbeat.",
    evidence:
      "Diabetes management guidance notes blunted hypoglycemia awareness with beta blocker use.",
  },
  {
    drug_a: "sotalol",
    drug_b: "simvastatin",
    severity: "moderate",
    mechanism:
      "Amiodarone-class antiarrhythmics inhibit CYP3A4, raising statin levels and myopathy risk.",
    evidence:
      "Statin labeling notes dose limits when combined with amiodarone.",
  },
  {
    drug_a: "sotalol",
    drug_b: "sitagliptin",
    severity: "low",
    mechanism:
      "Beta blockers can mask the warning signs of hypoglycemia such as tremor and rapid heartbeat.",
    evidence:
      "Diabetes management guidance notes blunted hypoglycemia awareness with beta blocker use.",
  },
  {
    drug_a: "sotalol",
    drug_b: "verapamil",
    severity: "moderate",
    mechanism:
      "Both slow cardiac conduction; combined use can cause excessive bradycardia or heart block.",
    evidence:
      "Cardiology guidance recommends caution combining beta blockers with non-dihydropyridine calcium channel blockers.",
  },
  {
    drug_a: "sotalol",
    drug_b: "ziprasidone",
    severity: "high",
    mechanism:
      "Both prolong the QT interval; combined use meaningfully raises the risk of dangerous arrhythmia.",
    evidence:
      "Drug-induced long QT reference lists flag this combination as a torsades risk.",
  },
  {
    drug_a: "spironolactone",
    drug_b: "triamterene",
    severity: "moderate",
    mechanism:
      "Both raise serum potassium; combined use increases the risk of hyperkalemia.",
    evidence:
      "Guidelines recommend against combining two potassium-sparing diuretics.",
  },
  {
    drug_a: "sulindac",
    drug_b: "apixaban",
    severity: "high",
    mechanism:
      "NSAIDs inhibit platelet aggregation and can displace anticoagulants from protein binding, increasing bleeding risk.",
    evidence:
      "Labeling for anticoagulants warns of increased bleeding risk with concurrent NSAID use.",
  },
  {
    drug_a: "sulindac",
    drug_b: "aspirin",
    severity: "moderate",
    mechanism:
      "NSAIDs may add to the antiplatelet effect and irritate the GI lining, raising bleeding risk.",
    evidence:
      "Cardiology guidance flags added GI bleeding risk when NSAIDs are combined with antiplatelet therapy.",
  },
  {
    drug_a: "sulindac",
    drug_b: "azilsartan",
    severity: "moderate",
    mechanism:
      "NSAIDs can reduce the antihypertensive effect of ARBs and impair renal function.",
    evidence:
      "Labeling for both drug classes notes reduced antihypertensive effect and renal risk with combined use.",
  },
  {
    drug_a: "sulindac",
    drug_b: "benazepril",
    severity: "moderate",
    mechanism:
      "NSAIDs can reduce the antihypertensive effect of ACE inhibitors and impair renal function.",
    evidence:
      "Labeling for both drug classes notes reduced antihypertensive effect and renal risk with combined use.",
  },
  {
    drug_a: "sulindac",
    drug_b: "budesonide",
    severity: "moderate",
    mechanism:
      "Both irritate the GI lining; combined use substantially increases risk of ulcers and GI bleeding.",
    evidence:
      "Guidelines recommend gastroprotection when NSAIDs and corticosteroids are combined.",
  },
  {
    drug_a: "sulindac",
    drug_b: "candesartan",
    severity: "moderate",
    mechanism:
      "NSAIDs can reduce the antihypertensive effect of ARBs and impair renal function.",
    evidence:
      "Labeling for both drug classes notes reduced antihypertensive effect and renal risk with combined use.",
  },
  {
    drug_a: "sulindac",
    drug_b: "captopril",
    severity: "moderate",
    mechanism:
      "NSAIDs can reduce the antihypertensive effect of ACE inhibitors and impair renal function.",
    evidence:
      "Labeling for both drug classes notes reduced antihypertensive effect and renal risk with combined use.",
  },
  {
    drug_a: "sulindac",
    drug_b: "citalopram",
    severity: "moderate",
    mechanism:
      "SSRIs combined with NSAIDs may increase risk of GI bleeding due to reduced platelet serotonin uptake.",
    evidence:
      "Observational studies link SSRI + NSAID combinations to higher GI bleeding rates.",
  },
  {
    drug_a: "sulindac",
    drug_b: "clopidogrel",
    severity: "moderate",
    mechanism:
      "NSAIDs may add to the antiplatelet effect and irritate the GI lining, raising bleeding risk.",
    evidence:
      "Cardiology guidance flags added GI bleeding risk when NSAIDs are combined with antiplatelet therapy.",
  },
  {
    drug_a: "sulindac",
    drug_b: "dabigatran",
    severity: "high",
    mechanism:
      "NSAIDs inhibit platelet aggregation and can displace anticoagulants from protein binding, increasing bleeding risk.",
    evidence:
      "Labeling for anticoagulants warns of increased bleeding risk with concurrent NSAID use.",
  },
  {
    drug_a: "sulindac",
    drug_b: "desvenlafaxine",
    severity: "moderate",
    mechanism:
      "SSRIs combined with NSAIDs may increase risk of GI bleeding due to reduced platelet serotonin uptake.",
    evidence:
      "Observational studies link serotonergic antidepressant + NSAID combinations to higher GI bleeding rates.",
  },
  {
    drug_a: "sulindac",
    drug_b: "dexamethasone",
    severity: "moderate",
    mechanism:
      "Both irritate the GI lining; combined use substantially increases risk of ulcers and GI bleeding.",
    evidence:
      "Guidelines recommend gastroprotection when NSAIDs and corticosteroids are combined.",
  },
  {
    drug_a: "sulindac",
    drug_b: "dipyridamole",
    severity: "moderate",
    mechanism:
      "NSAIDs may add to the antiplatelet effect and irritate the GI lining, raising bleeding risk.",
    evidence:
      "Cardiology guidance flags added GI bleeding risk when NSAIDs are combined with antiplatelet therapy.",
  },
  {
    drug_a: "sulindac",
    drug_b: "duloxetine",
    severity: "moderate",
    mechanism:
      "SSRIs combined with NSAIDs may increase risk of GI bleeding due to reduced platelet serotonin uptake.",
    evidence:
      "Observational studies link serotonergic antidepressant + NSAID combinations to higher GI bleeding rates.",
  },
  {
    drug_a: "sulindac",
    drug_b: "edoxaban",
    severity: "high",
    mechanism:
      "NSAIDs inhibit platelet aggregation and can displace anticoagulants from protein binding, increasing bleeding risk.",
    evidence:
      "Labeling for anticoagulants warns of increased bleeding risk with concurrent NSAID use.",
  },
  {
    drug_a: "sulindac",
    drug_b: "enalapril",
    severity: "moderate",
    mechanism:
      "NSAIDs can reduce the antihypertensive effect of ACE inhibitors and impair renal function.",
    evidence:
      "Labeling for both drug classes notes reduced antihypertensive effect and renal risk with combined use.",
  },
  {
    drug_a: "sulindac",
    drug_b: "enoxaparin",
    severity: "high",
    mechanism:
      "NSAIDs inhibit platelet aggregation and can displace anticoagulants from protein binding, increasing bleeding risk.",
    evidence:
      "Labeling for anticoagulants warns of increased bleeding risk with concurrent NSAID use.",
  },
  {
    drug_a: "sulindac",
    drug_b: "escitalopram",
    severity: "moderate",
    mechanism:
      "SSRIs combined with NSAIDs may increase risk of GI bleeding due to reduced platelet serotonin uptake.",
    evidence:
      "Observational studies link SSRI + NSAID combinations to higher GI bleeding rates.",
  },
  {
    drug_a: "sulindac",
    drug_b: "fluoxetine",
    severity: "moderate",
    mechanism:
      "SSRIs combined with NSAIDs may increase risk of GI bleeding due to reduced platelet serotonin uptake.",
    evidence:
      "Observational studies link SSRI + NSAID combinations to higher GI bleeding rates.",
  },
  {
    drug_a: "sulindac",
    drug_b: "fluticasone",
    severity: "moderate",
    mechanism:
      "Both irritate the GI lining; combined use substantially increases risk of ulcers and GI bleeding.",
    evidence:
      "Guidelines recommend gastroprotection when NSAIDs and corticosteroids are combined.",
  },
  {
    drug_a: "sulindac",
    drug_b: "fluvoxamine",
    severity: "moderate",
    mechanism:
      "SSRIs combined with NSAIDs may increase risk of GI bleeding due to reduced platelet serotonin uptake.",
    evidence:
      "Observational studies link SSRI + NSAID combinations to higher GI bleeding rates.",
  },
  {
    drug_a: "sulindac",
    drug_b: "fosinopril",
    severity: "moderate",
    mechanism:
      "NSAIDs can reduce the antihypertensive effect of ACE inhibitors and impair renal function.",
    evidence:
      "Labeling for both drug classes notes reduced antihypertensive effect and renal risk with combined use.",
  },
  {
    drug_a: "sulindac",
    drug_b: "heparin",
    severity: "high",
    mechanism:
      "NSAIDs inhibit platelet aggregation and can displace anticoagulants from protein binding, increasing bleeding risk.",
    evidence:
      "Labeling for anticoagulants warns of increased bleeding risk with concurrent NSAID use.",
  },
  {
    drug_a: "sulindac",
    drug_b: "hydrocortisone",
    severity: "moderate",
    mechanism:
      "Both irritate the GI lining; combined use substantially increases risk of ulcers and GI bleeding.",
    evidence:
      "Guidelines recommend gastroprotection when NSAIDs and corticosteroids are combined.",
  },
  {
    drug_a: "sulindac",
    drug_b: "irbesartan",
    severity: "moderate",
    mechanism:
      "NSAIDs can reduce the antihypertensive effect of ARBs and impair renal function.",
    evidence:
      "Labeling for both drug classes notes reduced antihypertensive effect and renal risk with combined use.",
  },
  {
    drug_a: "sulindac",
    drug_b: "levomilnacipran",
    severity: "moderate",
    mechanism:
      "SSRIs combined with NSAIDs may increase risk of GI bleeding due to reduced platelet serotonin uptake.",
    evidence:
      "Observational studies link serotonergic antidepressant + NSAID combinations to higher GI bleeding rates.",
  },
  {
    drug_a: "sulindac",
    drug_b: "lisinopril",
    severity: "moderate",
    mechanism:
      "NSAIDs can reduce the antihypertensive effect of ACE inhibitors and impair renal function.",
    evidence:
      "Labeling for both drug classes notes reduced antihypertensive effect and renal risk with combined use.",
  },
  {
    drug_a: "sulindac",
    drug_b: "lithium",
    severity: "moderate",
    mechanism:
      "NSAIDs can reduce renal clearance of lithium, raising lithium levels toward toxicity.",
    evidence:
      "Lithium labeling warns of elevated levels with concurrent NSAID use, warranting level monitoring.",
  },
  {
    drug_a: "sulindac",
    drug_b: "losartan",
    severity: "moderate",
    mechanism:
      "NSAIDs can reduce the antihypertensive effect of ARBs and impair renal function.",
    evidence:
      "Labeling for both drug classes notes reduced antihypertensive effect and renal risk with combined use.",
  },
  {
    drug_a: "sulindac",
    drug_b: "methylprednisolone",
    severity: "moderate",
    mechanism:
      "Both irritate the GI lining; combined use substantially increases risk of ulcers and GI bleeding.",
    evidence:
      "Guidelines recommend gastroprotection when NSAIDs and corticosteroids are combined.",
  },
  {
    drug_a: "sulindac",
    drug_b: "olmesartan",
    severity: "moderate",
    mechanism:
      "NSAIDs can reduce the antihypertensive effect of ARBs and impair renal function.",
    evidence:
      "Labeling for both drug classes notes reduced antihypertensive effect and renal risk with combined use.",
  },
  {
    drug_a: "sulindac",
    drug_b: "paroxetine",
    severity: "moderate",
    mechanism:
      "SSRIs combined with NSAIDs may increase risk of GI bleeding due to reduced platelet serotonin uptake.",
    evidence:
      "Observational studies link SSRI + NSAID combinations to higher GI bleeding rates.",
  },
  {
    drug_a: "sulindac",
    drug_b: "perindopril",
    severity: "moderate",
    mechanism:
      "NSAIDs can reduce the antihypertensive effect of ACE inhibitors and impair renal function.",
    evidence:
      "Labeling for both drug classes notes reduced antihypertensive effect and renal risk with combined use.",
  },
  {
    drug_a: "sulindac",
    drug_b: "prasugrel",
    severity: "moderate",
    mechanism:
      "NSAIDs may add to the antiplatelet effect and irritate the GI lining, raising bleeding risk.",
    evidence:
      "Cardiology guidance flags added GI bleeding risk when NSAIDs are combined with antiplatelet therapy.",
  },
  {
    drug_a: "sulindac",
    drug_b: "prednisone",
    severity: "moderate",
    mechanism:
      "Both irritate the GI lining; combined use substantially increases risk of ulcers and GI bleeding.",
    evidence:
      "Guidelines recommend gastroprotection when NSAIDs and corticosteroids are combined.",
  },
  {
    drug_a: "sulindac",
    drug_b: "quinapril",
    severity: "moderate",
    mechanism:
      "NSAIDs can reduce the antihypertensive effect of ACE inhibitors and impair renal function.",
    evidence:
      "Labeling for both drug classes notes reduced antihypertensive effect and renal risk with combined use.",
  },
  {
    drug_a: "sulindac",
    drug_b: "ramipril",
    severity: "moderate",
    mechanism:
      "NSAIDs can reduce the antihypertensive effect of ACE inhibitors and impair renal function.",
    evidence:
      "Labeling for both drug classes notes reduced antihypertensive effect and renal risk with combined use.",
  },
  {
    drug_a: "sulindac",
    drug_b: "rivaroxaban",
    severity: "high",
    mechanism:
      "NSAIDs inhibit platelet aggregation and can displace anticoagulants from protein binding, increasing bleeding risk.",
    evidence:
      "Labeling for anticoagulants warns of increased bleeding risk with concurrent NSAID use.",
  },
  {
    drug_a: "sulindac",
    drug_b: "sertraline",
    severity: "moderate",
    mechanism:
      "SSRIs combined with NSAIDs may increase risk of GI bleeding due to reduced platelet serotonin uptake.",
    evidence:
      "Observational studies link SSRI + NSAID combinations to higher GI bleeding rates.",
  },
  {
    drug_a: "sulindac",
    drug_b: "telmisartan",
    severity: "moderate",
    mechanism:
      "NSAIDs can reduce the antihypertensive effect of ARBs and impair renal function.",
    evidence:
      "Labeling for both drug classes notes reduced antihypertensive effect and renal risk with combined use.",
  },
  {
    drug_a: "sulindac",
    drug_b: "ticagrelor",
    severity: "moderate",
    mechanism:
      "NSAIDs may add to the antiplatelet effect and irritate the GI lining, raising bleeding risk.",
    evidence:
      "Cardiology guidance flags added GI bleeding risk when NSAIDs are combined with antiplatelet therapy.",
  },
  {
    drug_a: "sulindac",
    drug_b: "trandolapril",
    severity: "moderate",
    mechanism:
      "NSAIDs can reduce the antihypertensive effect of ACE inhibitors and impair renal function.",
    evidence:
      "Labeling for both drug classes notes reduced antihypertensive effect and renal risk with combined use.",
  },
  {
    drug_a: "sulindac",
    drug_b: "triamcinolone",
    severity: "moderate",
    mechanism:
      "Both irritate the GI lining; combined use substantially increases risk of ulcers and GI bleeding.",
    evidence:
      "Guidelines recommend gastroprotection when NSAIDs and corticosteroids are combined.",
  },
  {
    drug_a: "sulindac",
    drug_b: "valsartan",
    severity: "moderate",
    mechanism:
      "NSAIDs can reduce the antihypertensive effect of ARBs and impair renal function.",
    evidence:
      "Labeling for both drug classes notes reduced antihypertensive effect and renal risk with combined use.",
  },
  {
    drug_a: "sulindac",
    drug_b: "venlafaxine",
    severity: "moderate",
    mechanism:
      "SSRIs combined with NSAIDs may increase risk of GI bleeding due to reduced platelet serotonin uptake.",
    evidence:
      "Observational studies link serotonergic antidepressant + NSAID combinations to higher GI bleeding rates.",
  },
  {
    drug_a: "sulindac",
    drug_b: "warfarin",
    severity: "high",
    mechanism:
      "NSAIDs inhibit platelet aggregation and can displace anticoagulants from protein binding, increasing bleeding risk.",
    evidence:
      "Labeling for anticoagulants warns of increased bleeding risk with concurrent NSAID use.",
  },
  {
    drug_a: "tadalafil",
    drug_b: "amiodarone",
    severity: "moderate",
    mechanism:
      "PDE5 inhibitors can add to blood-pressure-lowering effects and, with amiodarone-class drugs, add QT-related risk.",
    evidence:
      "Cardiology guidance recommends caution combining PDE5 inhibitors with antiarrhythmics.",
  },
  {
    drug_a: "tadalafil",
    drug_b: "dronedarone",
    severity: "moderate",
    mechanism:
      "PDE5 inhibitors can add to blood-pressure-lowering effects and, with amiodarone-class drugs, add QT-related risk.",
    evidence:
      "Cardiology guidance recommends caution combining PDE5 inhibitors with antiarrhythmics.",
  },
  {
    drug_a: "tadalafil",
    drug_b: "flecainide",
    severity: "moderate",
    mechanism:
      "PDE5 inhibitors can add to blood-pressure-lowering effects and, with amiodarone-class drugs, add QT-related risk.",
    evidence:
      "Cardiology guidance recommends caution combining PDE5 inhibitors with antiarrhythmics.",
  },
  {
    drug_a: "tadalafil",
    drug_b: "propafenone",
    severity: "moderate",
    mechanism:
      "PDE5 inhibitors can add to blood-pressure-lowering effects and, with amiodarone-class drugs, add QT-related risk.",
    evidence:
      "Cardiology guidance recommends caution combining PDE5 inhibitors with antiarrhythmics.",
  },
  {
    drug_a: "tadalafil",
    drug_b: "sotalol",
    severity: "moderate",
    mechanism:
      "PDE5 inhibitors can add to blood-pressure-lowering effects and, with amiodarone-class drugs, add QT-related risk.",
    evidence:
      "Cardiology guidance recommends caution combining PDE5 inhibitors with antiarrhythmics.",
  },
  {
    drug_a: "telmisartan",
    drug_b: "amiloride",
    severity: "moderate",
    mechanism:
      "Both raise serum potassium; combined use increases the risk of hyperkalemia.",
    evidence:
      "Labeling for potassium-sparing diuretics warns of hyperkalemia risk with ARBs.",
  },
  {
    drug_a: "telmisartan",
    drug_b: "lithium",
    severity: "moderate",
    mechanism:
      "ARBs can reduce renal clearance of lithium, similar to ACE inhibitors, raising lithium levels toward toxicity.",
    evidence:
      "Case reports describe lithium toxicity with concurrent ARB use, warranting level monitoring.",
  },
  {
    drug_a: "telmisartan",
    drug_b: "spironolactone",
    severity: "moderate",
    mechanism:
      "Both raise serum potassium; combined use increases the risk of hyperkalemia.",
    evidence:
      "Labeling for potassium-sparing diuretics warns of hyperkalemia risk with ARBs.",
  },
  {
    drug_a: "telmisartan",
    drug_b: "triamterene",
    severity: "moderate",
    mechanism:
      "Both raise serum potassium; combined use increases the risk of hyperkalemia.",
    evidence:
      "Labeling for potassium-sparing diuretics warns of hyperkalemia risk with ARBs.",
  },
  {
    drug_a: "temazepam",
    drug_b: "baclofen",
    severity: "moderate",
    mechanism:
      "Both cause CNS depression; combined use increases sedation and fall risk, especially in older adults.",
    evidence:
      "Muscle relaxant labeling warns of additive sedation with benzodiazepines.",
  },
  {
    drug_a: "temazepam",
    drug_b: "carisoprodol",
    severity: "moderate",
    mechanism:
      "Both cause CNS depression; combined use increases sedation and fall risk, especially in older adults.",
    evidence:
      "Muscle relaxant labeling warns of additive sedation with benzodiazepines.",
  },
  {
    drug_a: "temazepam",
    drug_b: "hydroxyzine",
    severity: "moderate",
    mechanism:
      "Both cause CNS depression; combined use increases sedation and impairs alertness.",
    evidence:
      "Antihistamine labeling warns of additive sedation with benzodiazepines.",
  },
  {
    drug_a: "temazepam",
    drug_b: "methocarbamol",
    severity: "moderate",
    mechanism:
      "Both cause CNS depression; combined use increases sedation and fall risk, especially in older adults.",
    evidence:
      "Muscle relaxant labeling warns of additive sedation with benzodiazepines.",
  },
  {
    drug_a: "temazepam",
    drug_b: "promethazine",
    severity: "moderate",
    mechanism:
      "Both cause CNS depression; combined use increases sedation and impairs alertness.",
    evidence:
      "Antihistamine labeling warns of additive sedation with benzodiazepines.",
  },
  {
    drug_a: "temazepam",
    drug_b: "ramelteon",
    severity: "moderate",
    mechanism:
      "Additive CNS depression between benzodiazepines and other sedative-hypnotics increases sedation and fall risk.",
    evidence:
      "Sedative-hypnotic labeling warns against combination with benzodiazepines.",
  },
  {
    drug_a: "temazepam",
    drug_b: "suvorexant",
    severity: "moderate",
    mechanism:
      "Additive CNS depression between benzodiazepines and other sedative-hypnotics increases sedation and fall risk.",
    evidence:
      "Sedative-hypnotic labeling warns against combination with benzodiazepines.",
  },
  {
    drug_a: "temazepam",
    drug_b: "tizanidine",
    severity: "moderate",
    mechanism:
      "Both cause CNS depression; combined use increases sedation and fall risk, especially in older adults.",
    evidence:
      "Muscle relaxant labeling warns of additive sedation with benzodiazepines.",
  },
  {
    drug_a: "temazepam",
    drug_b: "zaleplon",
    severity: "moderate",
    mechanism:
      "Additive CNS depression between benzodiazepines and non-benzodiazepine hypnotics increases sedation and fall risk.",
    evidence:
      "Sedative-hypnotic labeling warns against combination with benzodiazepines.",
  },
  {
    drug_a: "torsemide",
    drug_b: "digoxin",
    severity: "moderate",
    mechanism:
      "Diuretic-induced potassium loss can increase the risk of digoxin toxicity.",
    evidence:
      "Digoxin labeling warns that hypokalemia from diuretics increases toxicity risk.",
  },
  {
    drug_a: "torsemide",
    drug_b: "lithium",
    severity: "moderate",
    mechanism:
      "Diuretics can reduce renal clearance of lithium, raising lithium levels toward toxicity.",
    evidence:
      "Lithium labeling warns of elevated levels with concurrent diuretic use, warranting level monitoring.",
  },
  {
    drug_a: "tramadol",
    drug_b: "baclofen",
    severity: "moderate",
    mechanism:
      "Both cause CNS depression; combined use increases sedation and fall risk, especially in older adults.",
    evidence:
      "Muscle relaxant labeling warns of additive sedation with opioids.",
  },
  {
    drug_a: "tramadol",
    drug_b: "carisoprodol",
    severity: "moderate",
    mechanism:
      "Both cause CNS depression; combined use increases sedation and fall risk, especially in older adults.",
    evidence:
      "Muscle relaxant labeling warns of additive sedation with opioids.",
  },
  {
    drug_a: "tramadol",
    drug_b: "chlordiazepoxide",
    severity: "high",
    mechanism:
      "Both depress the central nervous system; combined use significantly raises the risk of profound sedation and fatal respiratory depression.",
    evidence:
      "FDA boxed warning covers concurrent opioid and benzodiazepine use.",
  },
  {
    drug_a: "tramadol",
    drug_b: "clorazepate",
    severity: "high",
    mechanism:
      "Both depress the central nervous system; combined use significantly raises the risk of profound sedation and fatal respiratory depression.",
    evidence:
      "FDA boxed warning covers concurrent opioid and benzodiazepine use.",
  },
  {
    drug_a: "tramadol",
    drug_b: "desvenlafaxine",
    severity: "high",
    mechanism:
      "Both increase serotonin activity, raising the risk of serotonin syndrome.",
    evidence:
      "Case reports and FDA labeling describe elevated serotonin syndrome risk with this combination.",
  },
  {
    drug_a: "tramadol",
    drug_b: "fluvoxamine",
    severity: "high",
    mechanism:
      "Both increase serotonin activity, raising the risk of serotonin syndrome.",
    evidence:
      "Case reports and FDA labeling describe elevated serotonin syndrome risk with this combination.",
  },
  {
    drug_a: "tramadol",
    drug_b: "hydroxyzine",
    severity: "moderate",
    mechanism:
      "Both cause CNS depression; combined use increases sedation and, in vulnerable patients, respiratory depression risk.",
    evidence:
      "Product labeling for sedating antihistamines warns against combination with opioid analgesics.",
  },
  {
    drug_a: "tramadol",
    drug_b: "levomilnacipran",
    severity: "high",
    mechanism:
      "Both increase serotonin activity, raising the risk of serotonin syndrome.",
    evidence:
      "Case reports and FDA labeling describe elevated serotonin syndrome risk with this combination.",
  },
  {
    drug_a: "tramadol",
    drug_b: "methocarbamol",
    severity: "moderate",
    mechanism:
      "Both cause CNS depression; combined use increases sedation and fall risk, especially in older adults.",
    evidence:
      "Muscle relaxant labeling warns of additive sedation with opioids.",
  },
  {
    drug_a: "tramadol",
    drug_b: "midazolam",
    severity: "high",
    mechanism:
      "Both depress the central nervous system; combined use significantly raises the risk of profound sedation and fatal respiratory depression.",
    evidence:
      "FDA boxed warning covers concurrent opioid and benzodiazepine use.",
  },
  {
    drug_a: "tramadol",
    drug_b: "ondansetron",
    severity: "high",
    mechanism:
      "Both increase serotonin activity, raising the risk of serotonin syndrome.",
    evidence:
      "Case reports and FDA labeling describe elevated serotonin syndrome risk with this combination.",
  },
  {
    drug_a: "tramadol",
    drug_b: "oxazepam",
    severity: "high",
    mechanism:
      "Both depress the central nervous system; combined use significantly raises the risk of profound sedation and fatal respiratory depression.",
    evidence:
      "FDA boxed warning covers concurrent opioid and benzodiazepine use.",
  },
  {
    drug_a: "tramadol",
    drug_b: "promethazine",
    severity: "moderate",
    mechanism:
      "Both cause CNS depression; combined use increases sedation and, in vulnerable patients, respiratory depression risk.",
    evidence:
      "Product labeling for sedating antihistamines warns against combination with opioid analgesics.",
  },
  {
    drug_a: "tramadol",
    drug_b: "rizatriptan",
    severity: "high",
    mechanism:
      "Both increase serotonin activity, raising the risk of serotonin syndrome.",
    evidence:
      "Case reports and FDA labeling describe elevated serotonin syndrome risk with this combination.",
  },
  {
    drug_a: "tramadol",
    drug_b: "st_johns_wort",
    severity: "high",
    mechanism:
      "Both increase serotonin activity, raising the risk of serotonin syndrome.",
    evidence:
      "Case reports and FDA labeling describe elevated serotonin syndrome risk with this combination.",
  },
  {
    drug_a: "tramadol",
    drug_b: "sumatriptan",
    severity: "high",
    mechanism:
      "Both increase serotonin activity, raising the risk of serotonin syndrome.",
    evidence:
      "Case reports and FDA labeling describe elevated serotonin syndrome risk with this combination.",
  },
  {
    drug_a: "tramadol",
    drug_b: "tizanidine",
    severity: "moderate",
    mechanism:
      "Both cause CNS depression; combined use increases sedation and fall risk, especially in older adults.",
    evidence:
      "Muscle relaxant labeling warns of additive sedation with opioids.",
  },
  {
    drug_a: "tramadol",
    drug_b: "zaleplon",
    severity: "high",
    mechanism:
      "Both depress the central nervous system; combined use significantly raises the risk of profound sedation and fatal respiratory depression.",
    evidence:
      "FDA boxed warning covers concurrent opioid and CNS depressant use, including non-benzodiazepine hypnotics.",
  },
  {
    drug_a: "trandolapril",
    drug_b: "amiloride",
    severity: "moderate",
    mechanism:
      "Both raise serum potassium; combined use increases the risk of hyperkalemia.",
    evidence:
      "Labeling for potassium-sparing diuretics warns of hyperkalemia risk with ACE inhibitors.",
  },
  {
    drug_a: "trandolapril",
    drug_b: "azilsartan",
    severity: "moderate",
    mechanism:
      "Dual blockade of the renin-angiotensin system can increase risk of hyperkalemia and hypotension.",
    evidence:
      "Guidelines generally recommend against combining ACE inhibitors and ARBs.",
  },
  {
    drug_a: "trandolapril",
    drug_b: "candesartan",
    severity: "moderate",
    mechanism:
      "Dual blockade of the renin-angiotensin system can increase risk of hyperkalemia and hypotension.",
    evidence:
      "Guidelines generally recommend against combining ACE inhibitors and ARBs.",
  },
  {
    drug_a: "trandolapril",
    drug_b: "irbesartan",
    severity: "moderate",
    mechanism:
      "Dual blockade of the renin-angiotensin system can increase risk of hyperkalemia and hypotension.",
    evidence:
      "Guidelines generally recommend against combining ACE inhibitors and ARBs.",
  },
  {
    drug_a: "trandolapril",
    drug_b: "lithium",
    severity: "moderate",
    mechanism:
      "ACE inhibitors can reduce renal clearance of lithium, raising lithium levels toward toxicity.",
    evidence:
      "Lithium labeling warns of elevated levels with concurrent ACE inhibitor use, warranting level monitoring.",
  },
  {
    drug_a: "trandolapril",
    drug_b: "losartan",
    severity: "moderate",
    mechanism:
      "Dual blockade of the renin-angiotensin system can increase risk of hyperkalemia and hypotension.",
    evidence:
      "Guidelines generally recommend against combining ACE inhibitors and ARBs.",
  },
  {
    drug_a: "trandolapril",
    drug_b: "olmesartan",
    severity: "moderate",
    mechanism:
      "Dual blockade of the renin-angiotensin system can increase risk of hyperkalemia and hypotension.",
    evidence:
      "Guidelines generally recommend against combining ACE inhibitors and ARBs.",
  },
  {
    drug_a: "trandolapril",
    drug_b: "spironolactone",
    severity: "moderate",
    mechanism:
      "Both raise serum potassium; combined use increases the risk of hyperkalemia.",
    evidence:
      "Labeling for potassium-sparing diuretics warns of hyperkalemia risk with ACE inhibitors.",
  },
  {
    drug_a: "trandolapril",
    drug_b: "telmisartan",
    severity: "moderate",
    mechanism:
      "Dual blockade of the renin-angiotensin system can increase risk of hyperkalemia and hypotension.",
    evidence:
      "Guidelines generally recommend against combining ACE inhibitors and ARBs.",
  },
  {
    drug_a: "trandolapril",
    drug_b: "triamterene",
    severity: "moderate",
    mechanism:
      "Both raise serum potassium; combined use increases the risk of hyperkalemia.",
    evidence:
      "Labeling for potassium-sparing diuretics warns of hyperkalemia risk with ACE inhibitors.",
  },
  {
    drug_a: "trandolapril",
    drug_b: "valsartan",
    severity: "moderate",
    mechanism:
      "Dual blockade of the renin-angiotensin system can increase risk of hyperkalemia and hypotension.",
    evidence:
      "Guidelines generally recommend against combining ACE inhibitors and ARBs.",
  },
  {
    drug_a: "tranylcypromine",
    drug_b: "amitriptyline",
    severity: "high",
    mechanism:
      "Both increase serotonin and norepinephrine activity, raising the risk of serotonin syndrome and hypertensive crisis.",
    evidence:
      "TCA labeling contraindicates or strongly warns against combination with MAOIs.",
  },
  {
    drug_a: "tranylcypromine",
    drug_b: "amphetamine_dextroamphetamine",
    severity: "high",
    mechanism:
      "MAOIs prevent breakdown of norepinephrine, and combined with stimulants can precipitate hypertensive crisis.",
    evidence:
      "Stimulant labeling contraindicates use with MAOIs and within 14 days of stopping one.",
  },
  {
    drug_a: "tranylcypromine",
    drug_b: "bupropion",
    severity: "high",
    mechanism:
      "Both increase serotonin activity, raising the risk of serotonin syndrome.",
    evidence:
      "Labeling for atypical antidepressants contraindicates use with MAOIs.",
  },
  {
    drug_a: "tranylcypromine",
    drug_b: "clomipramine",
    severity: "high",
    mechanism:
      "Both increase serotonin and norepinephrine activity, raising the risk of serotonin syndrome and hypertensive crisis.",
    evidence:
      "TCA labeling contraindicates or strongly warns against combination with MAOIs.",
  },
  {
    drug_a: "tranylcypromine",
    drug_b: "doxepin",
    severity: "high",
    mechanism:
      "Both increase serotonin and norepinephrine activity, raising the risk of serotonin syndrome and hypertensive crisis.",
    evidence:
      "TCA labeling contraindicates or strongly warns against combination with MAOIs.",
  },
  {
    drug_a: "tranylcypromine",
    drug_b: "imipramine",
    severity: "high",
    mechanism:
      "Both increase serotonin and norepinephrine activity, raising the risk of serotonin syndrome and hypertensive crisis.",
    evidence:
      "TCA labeling contraindicates or strongly warns against combination with MAOIs.",
  },
  {
    drug_a: "tranylcypromine",
    drug_b: "lisdexamfetamine",
    severity: "high",
    mechanism:
      "MAOIs prevent breakdown of norepinephrine, and combined with stimulants can precipitate hypertensive crisis.",
    evidence:
      "Stimulant labeling contraindicates use with MAOIs and within 14 days of stopping one.",
  },
  {
    drug_a: "tranylcypromine",
    drug_b: "methylphenidate",
    severity: "high",
    mechanism:
      "MAOIs prevent breakdown of norepinephrine, and combined with stimulants can precipitate hypertensive crisis.",
    evidence:
      "Stimulant labeling contraindicates use with MAOIs and within 14 days of stopping one.",
  },
  {
    drug_a: "tranylcypromine",
    drug_b: "mirtazapine",
    severity: "high",
    mechanism:
      "Both increase serotonin activity, raising the risk of serotonin syndrome.",
    evidence:
      "Labeling for atypical antidepressants contraindicates use with MAOIs.",
  },
  {
    drug_a: "tranylcypromine",
    drug_b: "nortriptyline",
    severity: "high",
    mechanism:
      "Both increase serotonin and norepinephrine activity, raising the risk of serotonin syndrome and hypertensive crisis.",
    evidence:
      "TCA labeling contraindicates or strongly warns against combination with MAOIs.",
  },
  {
    drug_a: "tranylcypromine",
    drug_b: "vortioxetine",
    severity: "high",
    mechanism:
      "Both increase serotonin activity, raising the risk of serotonin syndrome.",
    evidence:
      "Labeling for atypical antidepressants contraindicates use with MAOIs.",
  },
  {
    drug_a: "triamcinolone",
    drug_b: "canagliflozin",
    severity: "moderate",
    mechanism:
      "Corticosteroids can raise blood glucose, counteracting the glucose-lowering effect of antidiabetic medications.",
    evidence:
      "Endocrinology guidance recommends closer glucose monitoring when corticosteroids are added.",
  },
  {
    drug_a: "triamcinolone",
    drug_b: "dapagliflozin",
    severity: "moderate",
    mechanism:
      "Corticosteroids can raise blood glucose, counteracting the glucose-lowering effect of antidiabetic medications.",
    evidence:
      "Endocrinology guidance recommends closer glucose monitoring when corticosteroids are added.",
  },
  {
    drug_a: "triamcinolone",
    drug_b: "dulaglutide",
    severity: "moderate",
    mechanism:
      "Corticosteroids can raise blood glucose, counteracting the glucose-lowering effect of antidiabetic medications.",
    evidence:
      "Endocrinology guidance recommends closer glucose monitoring when corticosteroids are added.",
  },
  {
    drug_a: "triamcinolone",
    drug_b: "empagliflozin",
    severity: "moderate",
    mechanism:
      "Corticosteroids can raise blood glucose, counteracting the glucose-lowering effect of antidiabetic medications.",
    evidence:
      "Endocrinology guidance recommends closer glucose monitoring when corticosteroids are added.",
  },
  {
    drug_a: "triamcinolone",
    drug_b: "glimepiride",
    severity: "moderate",
    mechanism:
      "Corticosteroids can raise blood glucose, counteracting the glucose-lowering effect of antidiabetic medications.",
    evidence:
      "Endocrinology guidance recommends closer glucose monitoring when corticosteroids are added.",
  },
  {
    drug_a: "triamcinolone",
    drug_b: "glipizide",
    severity: "moderate",
    mechanism:
      "Corticosteroids can raise blood glucose, counteracting the glucose-lowering effect of antidiabetic medications.",
    evidence:
      "Endocrinology guidance recommends closer glucose monitoring when corticosteroids are added.",
  },
  {
    drug_a: "triamcinolone",
    drug_b: "glyburide",
    severity: "moderate",
    mechanism:
      "Corticosteroids can raise blood glucose, counteracting the glucose-lowering effect of antidiabetic medications.",
    evidence:
      "Endocrinology guidance recommends closer glucose monitoring when corticosteroids are added.",
  },
  {
    drug_a: "triamcinolone",
    drug_b: "insulin_aspart",
    severity: "moderate",
    mechanism:
      "Corticosteroids can raise blood glucose, counteracting the glucose-lowering effect of antidiabetic medications.",
    evidence:
      "Endocrinology guidance recommends closer glucose monitoring when corticosteroids are added.",
  },
  {
    drug_a: "triamcinolone",
    drug_b: "insulin_glargine",
    severity: "moderate",
    mechanism:
      "Corticosteroids can raise blood glucose, counteracting the glucose-lowering effect of antidiabetic medications.",
    evidence:
      "Endocrinology guidance recommends closer glucose monitoring when corticosteroids are added.",
  },
  {
    drug_a: "triamcinolone",
    drug_b: "insulin_lispro",
    severity: "moderate",
    mechanism:
      "Corticosteroids can raise blood glucose, counteracting the glucose-lowering effect of antidiabetic medications.",
    evidence:
      "Endocrinology guidance recommends closer glucose monitoring when corticosteroids are added.",
  },
  {
    drug_a: "triamcinolone",
    drug_b: "linagliptin",
    severity: "moderate",
    mechanism:
      "Corticosteroids can raise blood glucose, counteracting the glucose-lowering effect of antidiabetic medications.",
    evidence:
      "Endocrinology guidance recommends closer glucose monitoring when corticosteroids are added.",
  },
  {
    drug_a: "triamcinolone",
    drug_b: "liraglutide",
    severity: "moderate",
    mechanism:
      "Corticosteroids can raise blood glucose, counteracting the glucose-lowering effect of antidiabetic medications.",
    evidence:
      "Endocrinology guidance recommends closer glucose monitoring when corticosteroids are added.",
  },
  {
    drug_a: "triamcinolone",
    drug_b: "metformin",
    severity: "moderate",
    mechanism:
      "Corticosteroids can raise blood glucose, counteracting the glucose-lowering effect of antidiabetic medications.",
    evidence:
      "Endocrinology guidance recommends closer glucose monitoring when corticosteroids are added.",
  },
  {
    drug_a: "triamcinolone",
    drug_b: "pioglitazone",
    severity: "moderate",
    mechanism:
      "Corticosteroids can raise blood glucose, counteracting the glucose-lowering effect of antidiabetic medications.",
    evidence:
      "Endocrinology guidance recommends closer glucose monitoring when corticosteroids are added.",
  },
  {
    drug_a: "triamcinolone",
    drug_b: "saxagliptin",
    severity: "moderate",
    mechanism:
      "Corticosteroids can raise blood glucose, counteracting the glucose-lowering effect of antidiabetic medications.",
    evidence:
      "Endocrinology guidance recommends closer glucose monitoring when corticosteroids are added.",
  },
  {
    drug_a: "triamcinolone",
    drug_b: "semaglutide",
    severity: "moderate",
    mechanism:
      "Corticosteroids can raise blood glucose, counteracting the glucose-lowering effect of antidiabetic medications.",
    evidence:
      "Endocrinology guidance recommends closer glucose monitoring when corticosteroids are added.",
  },
  {
    drug_a: "triamcinolone",
    drug_b: "sitagliptin",
    severity: "moderate",
    mechanism:
      "Corticosteroids can raise blood glucose, counteracting the glucose-lowering effect of antidiabetic medications.",
    evidence:
      "Endocrinology guidance recommends closer glucose monitoring when corticosteroids are added.",
  },
  {
    drug_a: "valsartan",
    drug_b: "triamterene",
    severity: "moderate",
    mechanism:
      "Both raise serum potassium; combined use increases the risk of hyperkalemia.",
    evidence:
      "Labeling for potassium-sparing diuretics warns of hyperkalemia risk with ARBs.",
  },
  {
    drug_a: "vardenafil",
    drug_b: "amiodarone",
    severity: "moderate",
    mechanism:
      "PDE5 inhibitors can add to blood-pressure-lowering effects and, with amiodarone-class drugs, add QT-related risk.",
    evidence:
      "Cardiology guidance recommends caution combining PDE5 inhibitors with antiarrhythmics.",
  },
  {
    drug_a: "vardenafil",
    drug_b: "dronedarone",
    severity: "moderate",
    mechanism:
      "PDE5 inhibitors can add to blood-pressure-lowering effects and, with amiodarone-class drugs, add QT-related risk.",
    evidence:
      "Cardiology guidance recommends caution combining PDE5 inhibitors with antiarrhythmics.",
  },
  {
    drug_a: "vardenafil",
    drug_b: "flecainide",
    severity: "moderate",
    mechanism:
      "PDE5 inhibitors can add to blood-pressure-lowering effects and, with amiodarone-class drugs, add QT-related risk.",
    evidence:
      "Cardiology guidance recommends caution combining PDE5 inhibitors with antiarrhythmics.",
  },
  {
    drug_a: "vardenafil",
    drug_b: "propafenone",
    severity: "moderate",
    mechanism:
      "PDE5 inhibitors can add to blood-pressure-lowering effects and, with amiodarone-class drugs, add QT-related risk.",
    evidence:
      "Cardiology guidance recommends caution combining PDE5 inhibitors with antiarrhythmics.",
  },
  {
    drug_a: "vardenafil",
    drug_b: "sotalol",
    severity: "moderate",
    mechanism:
      "PDE5 inhibitors can add to blood-pressure-lowering effects and, with amiodarone-class drugs, add QT-related risk.",
    evidence:
      "Cardiology guidance recommends caution combining PDE5 inhibitors with antiarrhythmics.",
  },
  {
    drug_a: "warfarin",
    drug_b: "budesonide",
    severity: "moderate",
    mechanism:
      "Corticosteroids can irritate the GI lining and alter clotting factor levels, adding to anticoagulant bleeding risk.",
    evidence:
      "Case reports describe elevated INR and GI bleeding with combined corticosteroid and anticoagulant use.",
  },
  {
    drug_a: "warfarin",
    drug_b: "desvenlafaxine",
    severity: "moderate",
    mechanism:
      "Serotonergic antidepressants impair platelet aggregation and, combined with anticoagulants, can further raise bleeding risk.",
    evidence:
      "Case-control studies report increased bleeding risk with serotonergic antidepressant and anticoagulant co-therapy.",
  },
  {
    drug_a: "warfarin",
    drug_b: "dipyridamole",
    severity: "high",
    mechanism:
      "Combined anticoagulant and antiplatelet effects substantially increase bleeding risk.",
    evidence:
      "Cardiology guidelines require careful risk-benefit assessment before combining these therapies.",
  },
  {
    drug_a: "warfarin",
    drug_b: "fluconazole",
    severity: "high",
    mechanism:
      "Azole antifungals inhibit hepatic enzymes that metabolize anticoagulants, sharply raising anticoagulant levels and bleeding risk.",
    evidence:
      "Labeling for azole antifungals lists anticoagulants among drugs requiring dose adjustment or close monitoring.",
  },
  {
    drug_a: "warfarin",
    drug_b: "fluticasone",
    severity: "moderate",
    mechanism:
      "Corticosteroids can irritate the GI lining and alter clotting factor levels, adding to anticoagulant bleeding risk.",
    evidence:
      "Case reports describe elevated INR and GI bleeding with combined corticosteroid and anticoagulant use.",
  },
  {
    drug_a: "warfarin",
    drug_b: "fluvoxamine",
    severity: "moderate",
    mechanism:
      "SSRIs impair platelet aggregation and, combined with anticoagulants, can further raise bleeding risk.",
    evidence:
      "Case-control studies report increased bleeding risk with SSRI and anticoagulant co-therapy.",
  },
  {
    drug_a: "warfarin",
    drug_b: "hydrocortisone",
    severity: "moderate",
    mechanism:
      "Corticosteroids can irritate the GI lining and alter clotting factor levels, adding to anticoagulant bleeding risk.",
    evidence:
      "Case reports describe elevated INR and GI bleeding with combined corticosteroid and anticoagulant use.",
  },
  {
    drug_a: "warfarin",
    drug_b: "itraconazole",
    severity: "high",
    mechanism:
      "Azole antifungals inhibit hepatic enzymes that metabolize anticoagulants, sharply raising anticoagulant levels and bleeding risk.",
    evidence:
      "Labeling for azole antifungals lists anticoagulants among drugs requiring dose adjustment or close monitoring.",
  },
  {
    drug_a: "warfarin",
    drug_b: "ketoconazole",
    severity: "high",
    mechanism:
      "Azole antifungals inhibit hepatic enzymes that metabolize anticoagulants, sharply raising anticoagulant levels and bleeding risk.",
    evidence:
      "Labeling for azole antifungals lists anticoagulants among drugs requiring dose adjustment or close monitoring.",
  },
  {
    drug_a: "warfarin",
    drug_b: "levomilnacipran",
    severity: "moderate",
    mechanism:
      "Serotonergic antidepressants impair platelet aggregation and, combined with anticoagulants, can further raise bleeding risk.",
    evidence:
      "Case-control studies report increased bleeding risk with serotonergic antidepressant and anticoagulant co-therapy.",
  },
  {
    drug_a: "warfarin",
    drug_b: "moxifloxacin",
    severity: "moderate",
    mechanism:
      "Fluoroquinolones can potentiate anticoagulant effect, raising bleeding risk.",
    evidence:
      "Labeling for anticoagulants notes increased INR when fluoroquinolone antibiotics are co-prescribed.",
  },
  {
    drug_a: "warfarin",
    drug_b: "ofloxacin",
    severity: "moderate",
    mechanism:
      "Fluoroquinolones can potentiate anticoagulant effect, raising bleeding risk.",
    evidence:
      "Labeling for anticoagulants notes increased INR when fluoroquinolone antibiotics are co-prescribed.",
  },
  {
    drug_a: "warfarin",
    drug_b: "prasugrel",
    severity: "high",
    mechanism:
      "Combined anticoagulant and antiplatelet effects substantially increase bleeding risk.",
    evidence:
      "Cardiology guidelines require careful risk-benefit assessment before combining these therapies.",
  },
  {
    drug_a: "warfarin",
    drug_b: "ticagrelor",
    severity: "high",
    mechanism:
      "Combined anticoagulant and antiplatelet effects substantially increase bleeding risk.",
    evidence:
      "Cardiology guidelines require careful risk-benefit assessment before combining these therapies.",
  },
  {
    drug_a: "warfarin",
    drug_b: "triamcinolone",
    severity: "moderate",
    mechanism:
      "Corticosteroids can irritate the GI lining and alter clotting factor levels, adding to anticoagulant bleeding risk.",
    evidence:
      "Case reports describe elevated INR and GI bleeding with combined corticosteroid and anticoagulant use.",
  },
  {
    drug_a: "ziprasidone",
    drug_b: "rizatriptan",
    severity: "moderate",
    mechanism:
      "Some antipsychotics have mild serotonergic activity that may add to that of other serotonergic agents.",
    evidence:
      "Case reports describe serotonin syndrome features when antipsychotics are combined with strongly serotonergic drugs.",
  },
  {
    drug_a: "ziprasidone",
    drug_b: "st_johns_wort",
    severity: "moderate",
    mechanism:
      "Some antipsychotics have mild serotonergic activity that may add to that of other serotonergic agents.",
    evidence:
      "Case reports describe serotonin syndrome features when antipsychotics are combined with strongly serotonergic drugs.",
  },
  {
    drug_a: "ziprasidone",
    drug_b: "sumatriptan",
    severity: "moderate",
    mechanism:
      "Some antipsychotics have mild serotonergic activity that may add to that of other serotonergic agents.",
    evidence:
      "Case reports describe serotonin syndrome features when antipsychotics are combined with strongly serotonergic drugs.",
  },
  {
    drug_a: "ziprasidone",
    drug_b: "tramadol",
    severity: "moderate",
    mechanism:
      "Some antipsychotics have mild serotonergic activity that may add to that of other serotonergic agents.",
    evidence:
      "Case reports describe serotonin syndrome features when antipsychotics are combined with strongly serotonergic drugs.",
  },
  {
    drug_a: "allopurinol",
    drug_b: "azathioprine",
    severity: "high",
    mechanism:
      "Allopurinol inhibits xanthine oxidase, the enzyme that clears azathioprine, raising levels toward severe bone marrow toxicity.",
    evidence:
      "Azathioprine labeling requires a major dose reduction (to about a quarter or a third) when combined with allopurinol.",
  },
  {
    drug_a: "allopurinol",
    drug_b: "warfarin",
    severity: "moderate",
    mechanism:
      "Allopurinol can inhibit hepatic enzymes that metabolize warfarin, raising anticoagulant levels.",
    evidence:
      "Case reports describe elevated INR when allopurinol is added to warfarin therapy.",
  },
  {
    drug_a: "azithromycin",
    drug_b: "colchicine",
    severity: "high",
    mechanism:
      "Macrolides inhibit CYP3A4/P-glycoprotein clearance of colchicine, raising levels toward toxicity.",
    evidence:
      "Colchicine labeling contraindicates or strongly limits use with macrolide antibiotics.",
  },
  {
    drug_a: "celecoxib",
    drug_b: "methotrexate",
    severity: "high",
    mechanism:
      "NSAIDs can reduce renal clearance of methotrexate, raising levels toward toxicity.",
    evidence:
      "Methotrexate labeling warns of increased toxicity risk with concurrent NSAID use, especially at higher methotrexate doses.",
  },
  {
    drug_a: "clarithromycin",
    drug_b: "colchicine",
    severity: "high",
    mechanism:
      "Macrolides inhibit CYP3A4/P-glycoprotein clearance of colchicine, raising levels toward toxicity.",
    evidence:
      "Colchicine labeling contraindicates or strongly limits use with macrolide antibiotics.",
  },
  {
    drug_a: "colchicine",
    drug_b: "erythromycin",
    severity: "high",
    mechanism:
      "Macrolides inhibit CYP3A4/P-glycoprotein clearance of colchicine, raising levels toward toxicity.",
    evidence:
      "Colchicine labeling contraindicates or strongly limits use with macrolide antibiotics.",
  },
  {
    drug_a: "diclofenac",
    drug_b: "methotrexate",
    severity: "high",
    mechanism:
      "NSAIDs can reduce renal clearance of methotrexate, raising levels toward toxicity.",
    evidence:
      "Methotrexate labeling warns of increased toxicity risk with concurrent NSAID use, especially at higher methotrexate doses.",
  },
  {
    drug_a: "etodolac",
    drug_b: "methotrexate",
    severity: "high",
    mechanism:
      "NSAIDs can reduce renal clearance of methotrexate, raising levels toward toxicity.",
    evidence:
      "Methotrexate labeling warns of increased toxicity risk with concurrent NSAID use, especially at higher methotrexate doses.",
  },
  {
    drug_a: "ibuprofen",
    drug_b: "methotrexate",
    severity: "high",
    mechanism:
      "NSAIDs can reduce renal clearance of methotrexate, raising levels toward toxicity.",
    evidence:
      "Methotrexate labeling warns of increased toxicity risk with concurrent NSAID use, especially at higher methotrexate doses.",
  },
  {
    drug_a: "indomethacin",
    drug_b: "methotrexate",
    severity: "high",
    mechanism:
      "NSAIDs can reduce renal clearance of methotrexate, raising levels toward toxicity.",
    evidence:
      "Methotrexate labeling warns of increased toxicity risk with concurrent NSAID use, especially at higher methotrexate doses.",
  },
  {
    drug_a: "ketorolac",
    drug_b: "methotrexate",
    severity: "high",
    mechanism:
      "NSAIDs can reduce renal clearance of methotrexate, raising levels toward toxicity.",
    evidence:
      "Methotrexate labeling warns of increased toxicity risk with concurrent NSAID use, especially at higher methotrexate doses.",
  },
  {
    drug_a: "meloxicam",
    drug_b: "methotrexate",
    severity: "high",
    mechanism:
      "NSAIDs can reduce renal clearance of methotrexate, raising levels toward toxicity.",
    evidence:
      "Methotrexate labeling warns of increased toxicity risk with concurrent NSAID use, especially at higher methotrexate doses.",
  },
  {
    drug_a: "methotrexate",
    drug_b: "nabumetone",
    severity: "high",
    mechanism:
      "NSAIDs can reduce renal clearance of methotrexate, raising levels toward toxicity.",
    evidence:
      "Methotrexate labeling warns of increased toxicity risk with concurrent NSAID use, especially at higher methotrexate doses.",
  },
  {
    drug_a: "methotrexate",
    drug_b: "naproxen",
    severity: "high",
    mechanism:
      "NSAIDs can reduce renal clearance of methotrexate, raising levels toward toxicity.",
    evidence:
      "Methotrexate labeling warns of increased toxicity risk with concurrent NSAID use, especially at higher methotrexate doses.",
  },
  {
    drug_a: "methotrexate",
    drug_b: "piroxicam",
    severity: "high",
    mechanism:
      "NSAIDs can reduce renal clearance of methotrexate, raising levels toward toxicity.",
    evidence:
      "Methotrexate labeling warns of increased toxicity risk with concurrent NSAID use, especially at higher methotrexate doses.",
  },
  {
    drug_a: "methotrexate",
    drug_b: "sulindac",
    severity: "high",
    mechanism:
      "NSAIDs can reduce renal clearance of methotrexate, raising levels toward toxicity.",
    evidence:
      "Methotrexate labeling warns of increased toxicity risk with concurrent NSAID use, especially at higher methotrexate doses.",
  },
  {
    drug_a: "methotrexate",
    drug_b: "trimethoprim_sulfamethoxazole",
    severity: "high",
    mechanism:
      "Both inhibit folate metabolism; combined use can cause severe bone marrow suppression.",
    evidence:
      "Methotrexate labeling warns against combination with trimethoprim-sulfamethoxazole.",
  },
  {
    drug_a: "amiloride",
    drug_b: "potassium_chloride",
    severity: "moderate",
    mechanism:
      "Both raise serum potassium; combined use increases the risk of hyperkalemia.",
    evidence:
      "Labeling for potassium supplements warns against routine use with potassium-sparing diuretics.",
  },
  {
    drug_a: "apixaban",
    drug_b: "fish_oil",
    severity: "low",
    mechanism:
      "High-dose fish oil has mild antiplatelet activity that may add to anticoagulant bleeding risk.",
    evidence:
      "Supplement-drug interaction references note a modest additive bleeding risk at high doses.",
  },
  {
    drug_a: "apixaban",
    drug_b: "st_johns_wort",
    severity: "moderate",
    mechanism:
      "St. John’s wort induces hepatic enzymes that speed anticoagulant clearance, reducing effectiveness.",
    evidence:
      "Anticoagulant labeling warns that St. John’s wort can reduce anticoagulant efficacy.",
  },
  {
    drug_a: "aripiprazole",
    drug_b: "metoclopramide",
    severity: "moderate",
    mechanism:
      "Both block dopamine receptors; combined use increases the risk of extrapyramidal symptoms.",
    evidence:
      "Metoclopramide labeling warns of added extrapyramidal risk with antipsychotics.",
  },
  {
    drug_a: "aspirin",
    drug_b: "fish_oil",
    severity: "low",
    mechanism:
      "High-dose fish oil has mild antiplatelet activity that may add to antiplatelet drug effects.",
    evidence:
      "Supplement-drug interaction references note a modest additive bleeding risk at high doses.",
  },
  {
    drug_a: "atorvastatin",
    drug_b: "st_johns_wort",
    severity: "moderate",
    mechanism:
      "St. John’s wort induces CYP3A4, reducing statin levels and effectiveness.",
    evidence:
      "Herbal-drug interaction references note reduced statin efficacy with St. John’s wort.",
  },
  {
    drug_a: "azilsartan",
    drug_b: "potassium_chloride",
    severity: "moderate",
    mechanism:
      "Both raise serum potassium; combined use increases the risk of hyperkalemia.",
    evidence:
      "Labeling for potassium supplements warns of hyperkalemia risk with ARBs.",
  },
  {
    drug_a: "benazepril",
    drug_b: "potassium_chloride",
    severity: "moderate",
    mechanism:
      "Both raise serum potassium; combined use increases the risk of hyperkalemia.",
    evidence:
      "Labeling for potassium supplements warns of hyperkalemia risk with ACE inhibitors.",
  },
  {
    drug_a: "calcium_carbonate",
    drug_b: "levothyroxine",
    severity: "low",
    mechanism:
      "Calcium can bind levothyroxine in the gut and reduce its absorption.",
    evidence:
      "Endocrinology guidance recommends separating levothyroxine and calcium dosing by several hours.",
  },
  {
    drug_a: "calcium_carbonate",
    drug_b: "liothyronine",
    severity: "low",
    mechanism:
      "Calcium can bind levothyroxine in the gut and reduce its absorption.",
    evidence:
      "Endocrinology guidance recommends separating levothyroxine and calcium dosing by several hours.",
  },
  {
    drug_a: "candesartan",
    drug_b: "potassium_chloride",
    severity: "moderate",
    mechanism:
      "Both raise serum potassium; combined use increases the risk of hyperkalemia.",
    evidence:
      "Labeling for potassium supplements warns of hyperkalemia risk with ARBs.",
  },
  {
    drug_a: "captopril",
    drug_b: "potassium_chloride",
    severity: "moderate",
    mechanism:
      "Both raise serum potassium; combined use increases the risk of hyperkalemia.",
    evidence:
      "Labeling for potassium supplements warns of hyperkalemia risk with ACE inhibitors.",
  },
  {
    drug_a: "citalopram",
    drug_b: "st_johns_wort",
    severity: "high",
    mechanism:
      "Both increase serotonin activity; combining them can precipitate serotonin syndrome.",
    evidence:
      "Herbal-drug interaction references document serotonin syndrome cases with St. John’s wort and SSRIs.",
  },
  {
    drug_a: "clopidogrel",
    drug_b: "fish_oil",
    severity: "low",
    mechanism:
      "High-dose fish oil has mild antiplatelet activity that may add to antiplatelet drug effects.",
    evidence:
      "Supplement-drug interaction references note a modest additive bleeding risk at high doses.",
  },
  {
    drug_a: "clozapine",
    drug_b: "metoclopramide",
    severity: "moderate",
    mechanism:
      "Both block dopamine receptors; combined use increases the risk of extrapyramidal symptoms.",
    evidence:
      "Metoclopramide labeling warns of added extrapyramidal risk with antipsychotics.",
  },
  {
    drug_a: "dabigatran",
    drug_b: "fish_oil",
    severity: "low",
    mechanism:
      "High-dose fish oil has mild antiplatelet activity that may add to anticoagulant bleeding risk.",
    evidence:
      "Supplement-drug interaction references note a modest additive bleeding risk at high doses.",
  },
  {
    drug_a: "dabigatran",
    drug_b: "st_johns_wort",
    severity: "moderate",
    mechanism:
      "St. John’s wort induces hepatic enzymes that speed anticoagulant clearance, reducing effectiveness.",
    evidence:
      "Anticoagulant labeling warns that St. John’s wort can reduce anticoagulant efficacy.",
  },
  {
    drug_a: "desvenlafaxine",
    drug_b: "st_johns_wort",
    severity: "high",
    mechanism:
      "Both increase serotonin activity; combining them can precipitate serotonin syndrome.",
    evidence:
      "Herbal-drug interaction references document serotonin syndrome cases with St. John’s wort and serotonergic antidepressants.",
  },
  {
    drug_a: "dipyridamole",
    drug_b: "fish_oil",
    severity: "low",
    mechanism:
      "High-dose fish oil has mild antiplatelet activity that may add to antiplatelet drug effects.",
    evidence:
      "Supplement-drug interaction references note a modest additive bleeding risk at high doses.",
  },
  {
    drug_a: "duloxetine",
    drug_b: "st_johns_wort",
    severity: "high",
    mechanism:
      "Both increase serotonin activity; combining them can precipitate serotonin syndrome.",
    evidence:
      "Herbal-drug interaction references document serotonin syndrome cases with St. John’s wort and serotonergic antidepressants.",
  },
  {
    drug_a: "edoxaban",
    drug_b: "fish_oil",
    severity: "low",
    mechanism:
      "High-dose fish oil has mild antiplatelet activity that may add to anticoagulant bleeding risk.",
    evidence:
      "Supplement-drug interaction references note a modest additive bleeding risk at high doses.",
  },
  {
    drug_a: "edoxaban",
    drug_b: "st_johns_wort",
    severity: "moderate",
    mechanism:
      "St. John’s wort induces hepatic enzymes that speed anticoagulant clearance, reducing effectiveness.",
    evidence:
      "Anticoagulant labeling warns that St. John’s wort can reduce anticoagulant efficacy.",
  },
  {
    drug_a: "enalapril",
    drug_b: "potassium_chloride",
    severity: "moderate",
    mechanism:
      "Both raise serum potassium; combined use increases the risk of hyperkalemia.",
    evidence:
      "Labeling for potassium supplements warns of hyperkalemia risk with ACE inhibitors.",
  },
  {
    drug_a: "enoxaparin",
    drug_b: "fish_oil",
    severity: "low",
    mechanism:
      "High-dose fish oil has mild antiplatelet activity that may add to anticoagulant bleeding risk.",
    evidence:
      "Supplement-drug interaction references note a modest additive bleeding risk at high doses.",
  },
  {
    drug_a: "enoxaparin",
    drug_b: "st_johns_wort",
    severity: "moderate",
    mechanism:
      "St. John’s wort induces hepatic enzymes that speed anticoagulant clearance, reducing effectiveness.",
    evidence:
      "Anticoagulant labeling warns that St. John’s wort can reduce anticoagulant efficacy.",
  },
  {
    drug_a: "escitalopram",
    drug_b: "st_johns_wort",
    severity: "high",
    mechanism:
      "Both increase serotonin activity; combining them can precipitate serotonin syndrome.",
    evidence:
      "Herbal-drug interaction references document serotonin syndrome cases with St. John’s wort and SSRIs.",
  },
  {
    drug_a: "fish_oil",
    drug_b: "heparin",
    severity: "low",
    mechanism:
      "High-dose fish oil has mild antiplatelet activity that may add to anticoagulant bleeding risk.",
    evidence:
      "Supplement-drug interaction references note a modest additive bleeding risk at high doses.",
  },
  {
    drug_a: "fish_oil",
    drug_b: "prasugrel",
    severity: "low",
    mechanism:
      "High-dose fish oil has mild antiplatelet activity that may add to antiplatelet drug effects.",
    evidence:
      "Supplement-drug interaction references note a modest additive bleeding risk at high doses.",
  },
  {
    drug_a: "fish_oil",
    drug_b: "rivaroxaban",
    severity: "low",
    mechanism:
      "High-dose fish oil has mild antiplatelet activity that may add to anticoagulant bleeding risk.",
    evidence:
      "Supplement-drug interaction references note a modest additive bleeding risk at high doses.",
  },
  {
    drug_a: "fish_oil",
    drug_b: "ticagrelor",
    severity: "low",
    mechanism:
      "High-dose fish oil has mild antiplatelet activity that may add to antiplatelet drug effects.",
    evidence:
      "Supplement-drug interaction references note a modest additive bleeding risk at high doses.",
  },
  {
    drug_a: "fish_oil",
    drug_b: "warfarin",
    severity: "low",
    mechanism:
      "High-dose fish oil has mild antiplatelet activity that may add to anticoagulant bleeding risk.",
    evidence:
      "Supplement-drug interaction references note a modest additive bleeding risk at high doses.",
  },
  {
    drug_a: "fluoxetine",
    drug_b: "st_johns_wort",
    severity: "high",
    mechanism:
      "Both increase serotonin activity; combining them can precipitate serotonin syndrome.",
    evidence:
      "Herbal-drug interaction references document serotonin syndrome cases with St. John’s wort and SSRIs.",
  },
  {
    drug_a: "fluvoxamine",
    drug_b: "st_johns_wort",
    severity: "high",
    mechanism:
      "Both increase serotonin activity; combining them can precipitate serotonin syndrome.",
    evidence:
      "Herbal-drug interaction references document serotonin syndrome cases with St. John’s wort and SSRIs.",
  },
  {
    drug_a: "fosinopril",
    drug_b: "potassium_chloride",
    severity: "moderate",
    mechanism:
      "Both raise serum potassium; combined use increases the risk of hyperkalemia.",
    evidence:
      "Labeling for potassium supplements warns of hyperkalemia risk with ACE inhibitors.",
  },
  {
    drug_a: "haloperidol",
    drug_b: "metoclopramide",
    severity: "moderate",
    mechanism:
      "Both block dopamine receptors; combined use increases the risk of extrapyramidal symptoms.",
    evidence:
      "Metoclopramide labeling warns of added extrapyramidal risk with antipsychotics.",
  },
  {
    drug_a: "heparin",
    drug_b: "st_johns_wort",
    severity: "moderate",
    mechanism:
      "St. John’s wort induces hepatic enzymes that speed anticoagulant clearance, reducing effectiveness.",
    evidence:
      "Anticoagulant labeling warns that St. John’s wort can reduce anticoagulant efficacy.",
  },
  {
    drug_a: "irbesartan",
    drug_b: "potassium_chloride",
    severity: "moderate",
    mechanism:
      "Both raise serum potassium; combined use increases the risk of hyperkalemia.",
    evidence:
      "Labeling for potassium supplements warns of hyperkalemia risk with ARBs.",
  },
  {
    drug_a: "iron_sulfate",
    drug_b: "levothyroxine",
    severity: "low",
    mechanism:
      "Iron can bind levothyroxine in the gut and reduce its absorption.",
    evidence:
      "Endocrinology guidance recommends separating levothyroxine and iron dosing by several hours.",
  },
  {
    drug_a: "iron_sulfate",
    drug_b: "liothyronine",
    severity: "low",
    mechanism:
      "Iron can bind levothyroxine in the gut and reduce its absorption.",
    evidence:
      "Endocrinology guidance recommends separating levothyroxine and iron dosing by several hours.",
  },
  {
    drug_a: "levomilnacipran",
    drug_b: "st_johns_wort",
    severity: "high",
    mechanism:
      "Both increase serotonin activity; combining them can precipitate serotonin syndrome.",
    evidence:
      "Herbal-drug interaction references document serotonin syndrome cases with St. John’s wort and serotonergic antidepressants.",
  },
  {
    drug_a: "lisinopril",
    drug_b: "potassium_chloride",
    severity: "moderate",
    mechanism:
      "Both raise serum potassium; combined use increases the risk of hyperkalemia.",
    evidence:
      "Labeling for potassium supplements warns of hyperkalemia risk with ACE inhibitors.",
  },
  {
    drug_a: "losartan",
    drug_b: "potassium_chloride",
    severity: "moderate",
    mechanism:
      "Both raise serum potassium; combined use increases the risk of hyperkalemia.",
    evidence:
      "Labeling for potassium supplements warns of hyperkalemia risk with ARBs.",
  },
  {
    drug_a: "lovastatin",
    drug_b: "st_johns_wort",
    severity: "moderate",
    mechanism:
      "St. John’s wort induces CYP3A4, reducing statin levels and effectiveness.",
    evidence:
      "Herbal-drug interaction references note reduced statin efficacy with St. John’s wort.",
  },
  {
    drug_a: "lurasidone",
    drug_b: "metoclopramide",
    severity: "moderate",
    mechanism:
      "Both block dopamine receptors; combined use increases the risk of extrapyramidal symptoms.",
    evidence:
      "Metoclopramide labeling warns of added extrapyramidal risk with antipsychotics.",
  },
  {
    drug_a: "metoclopramide",
    drug_b: "olanzapine",
    severity: "moderate",
    mechanism:
      "Both block dopamine receptors; combined use increases the risk of extrapyramidal symptoms.",
    evidence:
      "Metoclopramide labeling warns of added extrapyramidal risk with antipsychotics.",
  },
  {
    drug_a: "metoclopramide",
    drug_b: "paliperidone",
    severity: "moderate",
    mechanism:
      "Both block dopamine receptors; combined use increases the risk of extrapyramidal symptoms.",
    evidence:
      "Metoclopramide labeling warns of added extrapyramidal risk with antipsychotics.",
  },
  {
    drug_a: "metoclopramide",
    drug_b: "quetiapine",
    severity: "moderate",
    mechanism:
      "Both block dopamine receptors; combined use increases the risk of extrapyramidal symptoms.",
    evidence:
      "Metoclopramide labeling warns of added extrapyramidal risk with antipsychotics.",
  },
  {
    drug_a: "metoclopramide",
    drug_b: "risperidone",
    severity: "moderate",
    mechanism:
      "Both block dopamine receptors; combined use increases the risk of extrapyramidal symptoms.",
    evidence:
      "Metoclopramide labeling warns of added extrapyramidal risk with antipsychotics.",
  },
  {
    drug_a: "metoclopramide",
    drug_b: "ziprasidone",
    severity: "moderate",
    mechanism:
      "Both block dopamine receptors; combined use increases the risk of extrapyramidal symptoms.",
    evidence:
      "Metoclopramide labeling warns of added extrapyramidal risk with antipsychotics.",
  },
  {
    drug_a: "olmesartan",
    drug_b: "potassium_chloride",
    severity: "moderate",
    mechanism:
      "Both raise serum potassium; combined use increases the risk of hyperkalemia.",
    evidence:
      "Labeling for potassium supplements warns of hyperkalemia risk with ARBs.",
  },
  {
    drug_a: "paroxetine",
    drug_b: "st_johns_wort",
    severity: "high",
    mechanism:
      "Both increase serotonin activity; combining them can precipitate serotonin syndrome.",
    evidence:
      "Herbal-drug interaction references document serotonin syndrome cases with St. John’s wort and SSRIs.",
  },
  {
    drug_a: "perindopril",
    drug_b: "potassium_chloride",
    severity: "moderate",
    mechanism:
      "Both raise serum potassium; combined use increases the risk of hyperkalemia.",
    evidence:
      "Labeling for potassium supplements warns of hyperkalemia risk with ACE inhibitors.",
  },
  {
    drug_a: "phenelzine",
    drug_b: "st_johns_wort",
    severity: "high",
    mechanism:
      "Both increase serotonin activity; combining them can precipitate serotonin syndrome.",
    evidence:
      "Herbal-drug interaction references warn against combining St. John’s wort with MAOIs.",
  },
  {
    drug_a: "potassium_chloride",
    drug_b: "quinapril",
    severity: "moderate",
    mechanism:
      "Both raise serum potassium; combined use increases the risk of hyperkalemia.",
    evidence:
      "Labeling for potassium supplements warns of hyperkalemia risk with ACE inhibitors.",
  },
  {
    drug_a: "potassium_chloride",
    drug_b: "ramipril",
    severity: "moderate",
    mechanism:
      "Both raise serum potassium; combined use increases the risk of hyperkalemia.",
    evidence:
      "Labeling for potassium supplements warns of hyperkalemia risk with ACE inhibitors.",
  },
  {
    drug_a: "potassium_chloride",
    drug_b: "spironolactone",
    severity: "moderate",
    mechanism:
      "Both raise serum potassium; combined use increases the risk of hyperkalemia.",
    evidence:
      "Labeling for potassium supplements warns against routine use with potassium-sparing diuretics.",
  },
  {
    drug_a: "potassium_chloride",
    drug_b: "telmisartan",
    severity: "moderate",
    mechanism:
      "Both raise serum potassium; combined use increases the risk of hyperkalemia.",
    evidence:
      "Labeling for potassium supplements warns of hyperkalemia risk with ARBs.",
  },
  {
    drug_a: "potassium_chloride",
    drug_b: "trandolapril",
    severity: "moderate",
    mechanism:
      "Both raise serum potassium; combined use increases the risk of hyperkalemia.",
    evidence:
      "Labeling for potassium supplements warns of hyperkalemia risk with ACE inhibitors.",
  },
  {
    drug_a: "potassium_chloride",
    drug_b: "triamterene",
    severity: "moderate",
    mechanism:
      "Both raise serum potassium; combined use increases the risk of hyperkalemia.",
    evidence:
      "Labeling for potassium supplements warns against routine use with potassium-sparing diuretics.",
  },
  {
    drug_a: "potassium_chloride",
    drug_b: "valsartan",
    severity: "moderate",
    mechanism:
      "Both raise serum potassium; combined use increases the risk of hyperkalemia.",
    evidence:
      "Labeling for potassium supplements warns of hyperkalemia risk with ARBs.",
  },
  {
    drug_a: "rivaroxaban",
    drug_b: "st_johns_wort",
    severity: "moderate",
    mechanism:
      "St. John’s wort induces hepatic enzymes that speed anticoagulant clearance, reducing effectiveness.",
    evidence:
      "Anticoagulant labeling warns that St. John’s wort can reduce anticoagulant efficacy.",
  },
  {
    drug_a: "sertraline",
    drug_b: "st_johns_wort",
    severity: "high",
    mechanism:
      "Both increase serotonin activity; combining them can precipitate serotonin syndrome.",
    evidence:
      "Herbal-drug interaction references document serotonin syndrome cases with St. John’s wort and SSRIs.",
  },
  {
    drug_a: "simvastatin",
    drug_b: "st_johns_wort",
    severity: "moderate",
    mechanism:
      "St. John’s wort induces CYP3A4, reducing statin levels and effectiveness.",
    evidence:
      "Herbal-drug interaction references note reduced statin efficacy with St. John’s wort.",
  },
  {
    drug_a: "st_johns_wort",
    drug_b: "tranylcypromine",
    severity: "high",
    mechanism:
      "Both increase serotonin activity; combining them can precipitate serotonin syndrome.",
    evidence:
      "Herbal-drug interaction references warn against combining St. John’s wort with MAOIs.",
  },
  {
    drug_a: "st_johns_wort",
    drug_b: "venlafaxine",
    severity: "high",
    mechanism:
      "Both increase serotonin activity; combining them can precipitate serotonin syndrome.",
    evidence:
      "Herbal-drug interaction references document serotonin syndrome cases with St. John’s wort and serotonergic antidepressants.",
  },
  {
    drug_a: "st_johns_wort",
    drug_b: "warfarin",
    severity: "moderate",
    mechanism:
      "St. John’s wort induces hepatic enzymes that speed anticoagulant clearance, reducing effectiveness.",
    evidence:
      "Anticoagulant labeling warns that St. John’s wort can reduce anticoagulant efficacy.",
  },
];
