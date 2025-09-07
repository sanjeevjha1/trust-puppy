# TrustPuppy.ai

Elegant, privacy‑first AI site with working waitlist API.

## Quick Start

```bash
# 1) Install deps
npm install

# 2) Run dev server
npm run dev
# open http://localhost:3000
```

## Optional: Connect Mailchimp (waitlist storage)
Create a Mailchimp audience, then set the following env vars (Vercel Dashboard ➜ Project Settings ➜ Environment Variables or a `.env.local` file):

```
MAILCHIMP_API_KEY=YOUR_KEY-us21
MAILCHIMP_AUDIENCE_ID=YOUR_LIST_ID
```

Without these, the API still returns success and logs emails server-side.

## Deploy
- **Vercel** (recommended): import the repo and set env vars.
- Assign your domain: **TrustPuppy.ai** (or any you choose).

## Tech
- Next.js (App Router), Tailwind, Framer Motion, Lucide icons
- Minimal UI components (Button, Card, Input, Tabs)
- Light, elegant palette and airy spacing
