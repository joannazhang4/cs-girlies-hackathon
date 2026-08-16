import { useEffect, useState } from 'react';
import { Bell, BellOff, BellRing, CircleAlert, X } from 'lucide-react';
import { useMedications } from '../context/MedicationContext';
import {
  checkAndFireReminders,
  getNotificationPermission,
  notificationsSupported,
  requestNotificationPermission,
  sendTestNotification,
} from '../utils/reminders';

const DISMISS_KEY = 'mtrack.reminderBannerDismissed';
const ENABLED_KEY = 'mtrack.remindersEnabled';

/** Opt-in banner for browser reminders, plus the background polling loop once granted. */
export function ReminderBanner() {
  const { medications, doseLogs } = useMedications();
  const [permission, setPermission] = useState(getNotificationPermission());
  const [dismissed, setDismissed] = useState(() => localStorage.getItem(DISMISS_KEY) === '1');
  // Independent of browser permission — lets the user pause reminders in-app
  // without needing to touch browser site settings (which JS can't do anyway).
  const [remindersEnabled, setRemindersEnabled] = useState(() => localStorage.getItem(ENABLED_KEY) !== '0');
  const [statusMessage, setStatusMessage] = useState<string | null>(null);
  const [testResult, setTestResult] = useState<string | null>(null);

  useEffect(() => {
    console.log(
      '[MedTrack] ReminderBanner mounted/updated — supported:',
      notificationsSupported(),
      'permission:',
      permission,
      'dismissed:',
      dismissed,
      'remindersEnabled:',
      remindersEnabled,
      `(dismissed reads localStorage["${DISMISS_KEY}"] =`,
      localStorage.getItem(DISMISS_KEY),
      ')'
    );
  }, [permission, dismissed, remindersEnabled]);

  useEffect(() => {
    if (permission !== 'granted' || !remindersEnabled) return;
    checkAndFireReminders(medications, doseLogs);
    const interval = setInterval(() => checkAndFireReminders(medications, doseLogs), 60000);
    return () => clearInterval(interval);
  }, [permission, remindersEnabled, medications, doseLogs]);

  if (dismissed) return null;

  if (!notificationsSupported()) {
    return (
      <Banner tone="warn">
        <CircleAlert size={16} className="shrink-0" />
        <span>This browser doesn't support notifications, so dose reminders can't be enabled here.</span>
        <DismissButton onClick={() => setDismissed(true)} />
      </Banner>
    );
  }

  const enable = async () => {
    setStatusMessage(null);
    try {
      const result = await requestNotificationPermission();
      setPermission(result);
      if (result === 'granted') {
        setStatusMessage('Notifications enabled.');
      } else if (result === 'denied') {
        setStatusMessage(
          'The browser returned "denied" — likely because notifications are blocked for this site already. Check your browser\'s site permissions (in Edge: click the icon left of the address bar, or edge://settings/content/notifications) and allow notifications for this address, then reload.'
        );
      } else {
        setStatusMessage(`Browser returned "${result}".`);
      }
    } catch (err) {
      setStatusMessage(`Request failed: ${err instanceof Error ? err.message : String(err)}`);
    }
  };

  const runTest = () => {
    const result = sendTestNotification();
    setTestResult(result.ok ? 'Test notification sent — check your system notifications.' : `Failed: ${result.error}`);
  };

  const dismiss = () => {
    localStorage.setItem(DISMISS_KEY, '1');
    setDismissed(true);
  };

  const turnOff = () => {
    localStorage.setItem(ENABLED_KEY, '0');
    setRemindersEnabled(false);
    setTestResult(null);
  };

  const turnOn = () => {
    localStorage.setItem(ENABLED_KEY, '1');
    setRemindersEnabled(true);
  };

  if (permission === 'granted' && remindersEnabled) {
    return (
      <Banner tone="brand">
        <BellRing size={16} className="shrink-0" />
        <span>Reminders are on. We'll check every minute for doses that are due.</span>
        <div className="ml-auto flex shrink-0 items-center gap-2">
          <button onClick={runTest} className="text-xs font-medium text-brand-700 hover:underline">
            Send test notification
          </button>
          <button onClick={turnOff} className="text-xs font-medium text-brand-700 hover:underline">
            Turn off
          </button>
          <DismissButton onClick={dismiss} />
        </div>
        {testResult && <div className="basis-full pt-1 text-xs text-brand-700">{testResult}</div>}
      </Banner>
    );
  }

  if (permission === 'granted' && !remindersEnabled) {
    return (
      <Banner tone="warn">
        <BellOff size={16} className="shrink-0" />
        <span>Reminders are paused — you won't be notified when a dose is due.</span>
        <div className="ml-auto flex shrink-0 items-center gap-2">
          <button onClick={turnOn} className="rounded-lg bg-brand-500 px-3 py-1.5 text-xs font-medium text-white hover:bg-brand-600">
            Turn back on
          </button>
          <DismissButton onClick={dismiss} />
        </div>
      </Banner>
    );
  }

  return (
    <Banner tone="brand">
      <Bell size={16} className="shrink-0" />
      <span>Turn on reminders to get notified when it's time to take a dose.</span>
      <div className="ml-auto flex shrink-0 items-center gap-2">
        <span className="text-xs text-brand-600/70">(permission: {permission})</span>
        <button
          onClick={enable}
          className="rounded-lg bg-brand-500 px-3 py-1.5 text-xs font-medium text-white hover:bg-brand-600"
        >
          Enable
        </button>
        <DismissButton onClick={dismiss} />
      </div>
      {statusMessage && <div className="basis-full pt-1 text-xs text-brand-800">{statusMessage}</div>}
    </Banner>
  );
}

function Banner({ tone, children }: { tone: 'brand' | 'warn'; children: React.ReactNode }) {
  const toneClass =
    tone === 'brand' ? 'border-brand-200 bg-brand-50 text-brand-800' : 'border-snooze-500/30 bg-snooze-50 text-snooze-700';
  return (
    <div className={`mb-4 flex flex-wrap items-center gap-3 rounded-xl border px-4 py-3 text-sm ${toneClass}`}>
      {children}
    </div>
  );
}

function DismissButton({ onClick }: { onClick: () => void }) {
  return (
    <button onClick={onClick} className="text-brand-400 hover:text-brand-600" title="Dismiss">
      <X size={16} />
    </button>
  );
}
