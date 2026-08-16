# cs-girlies-hackathon

MedTrack — a medication tracker with a calendar-based adherence history, take/skip/snooze tracking, reminders, and Supabase-backed accounts with client-side encrypted data.

## Development

```bash
npm install
npm run dev
```

Requires a `.env.local` with `VITE_SUPABASE_URL` and `VITE_SUPABASE_PUBLISHABLE_KEY` (see `.env.example`). Run `supabase/schema.sql` in the Supabase SQL editor before first use.
