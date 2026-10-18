# EverPet — MVP scaffold

A Next.js 14 starter for EverPet: digital memorials for beloved pets.
English-first UI (overseas market), i18n-ready structure for a later bilingual pass.

## Stack

- Next.js 14 (App Router) + TypeScript
- TailwindCSS + shadcn/ui-style components (`components/ui`)
- Framer Motion for animations
- lucide-react icons

## What's included

- `app/page.tsx` — landing page (hero, how-it-works, features, memory wall, pricing, FAQ, CTA)
- `app/create/page.tsx` — memorial creation, step 1 (basics form; steps 2–3 are next)
- `components/ui/*` — Button, Card, Input, Textarea (shadcn-style, no CLI needed)
- `components/memorial-card.tsx`, `site-header.tsx`, `site-footer.tsx`
- Warm memorial palette (`cream / sand / bark / ember / sage`) in `tailwind.config.ts`

## Run it

```bash
npm install
npm run dev
# open http://localhost:3000
```

## Deploy (recommended for preview)

1. Push this folder to the `EverPet` GitHub repo.
2. Import the repo at [vercel.com/new](https://vercel.com/new) — zero config needed.
3. Every push gets a preview URL; share it from your phone's browser.

## MVP roadmap (next)

1. Steps 2–3 of `/create` (story & timeline, share & tributes)
2. Supabase: `memorials` table + storage bucket for photos
3. Auth (magic link — simplest for pet owners)
4. AI-written tribute (LLM call on the story draft)
5. Bilingual pass (EN → EN + 中文)
