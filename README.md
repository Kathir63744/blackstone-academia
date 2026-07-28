# Blackstone Academia — SaaS Marketing & Demo Booking Website

Next.js 14 (App Router) + Tailwind CSS. Multi-page marketing site with a working email backend for demo bookings.

## Run it

```bash
npm install
npm run dev        # http://localhost:3000
```

## Email backend (demo bookings → admin inbox)

1. Copy `.env.example` to `.env.local`
2. Fill in your SMTP details (for Gmail, create an App Password) and `ADMIN_EMAIL`
3. Restart the dev server

Bookings POST to `/api/book-demo` (`app/api/book-demo/route.js`), which validates the data and emails it to the admin with reply-to set to the visitor. **If SMTP isn't configured yet, bookings are logged to the server console instead and the form still succeeds** — so you can develop without credentials.

## Pages

| Route | Purpose |
|---|---|
| `/` | Home — hero, stats, about, feature cards, customization tabs, steps, integrations, testimonials, booking form |
| `/about` | Detailed story, values, six role portals, imagery |
| `/features` | All 8 modules with alternating image rows |
| `/features/[slug]` | Detailed page per module (overview, highlight stats, full capability list, related modules, CTA) — statically generated |
| `/book-demo` | Dedicated booking page with form + testimonials |
| `/api/book-demo` | POST endpoint that emails the booking |

## Content & customization

- **All feature content and images**: `lib/siteData.js` — edit one file to change every feature page.
- **Images**: Unsplash URLs in `lib/siteData.js`. Swap for your own product screenshots/photos anytime (drop files in `/public` and change the paths).
- **Colors & fonts**: `tailwind.config.js` (sky1/sky2/cream/ink/ember palette, Fraunces + Plus Jakarta Sans).
- **Copy**: plain strings at the top of each component in `components/`.
# blackstone-academia
# blackstone-academia
