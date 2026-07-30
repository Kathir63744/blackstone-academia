import "./globals.css";

export const metadata = {
  title: "Blackstone Academia — Run your entire online academy on one platform",
  description:
    "Blackstone Academia is an all-in-one academy management SaaS: student & teacher portals, live classes, billing, assessments, analytics and full customization. Book a free demo.",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: [
      { url: "/apple-icon.png" },
    ],
    shortcut: ["/favicon.ico"],
    other: [
      {
        rel: "icon",
        url: "/logo.svg",
      },
    ],
  },
  // Open Graph tags for social sharing
  openGraph: {
    title: "Blackstone Academia — Run your entire online academy on one platform",
    description:
      "Blackstone Academia is an all-in-one academy management SaaS: student & teacher portals, live classes, billing, assessments, analytics and full customization.",
    url: "https://blackstoneacademia.com",
    siteName: "Blackstone Academia",
    images: [
      {
        url: "/logo.svg",
        width: 800,
        height: 600,
        alt: "Blackstone Academia Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  // Twitter card for social sharing
  twitter: {
    card: "summary_large_image",
    title: "Blackstone Academia — Run your entire online academy on one platform",
    description:
      "Blackstone Academia is an all-in-one academy management SaaS: student & teacher portals, live classes, billing, assessments, analytics and full customization.",
    images: ["/logo.svg"],
  },
};

/**
 * FONT STRATEGY (single-family site)
 * ------------------------------------------------------------------
 * Only "Onest" is loaded — no Fraunces, no Inter, no Plus Jakarta Sans.
 * Every weight the site needs (400/500/600/700/800) comes from this one
 * request, so there is exactly one typeface rendering anywhere on the
 * site — headings, body copy, buttons, form fields, the lot.
 *
 * Pair this with the tailwind.config font family block:
 *   fontFamily: {
 *     sans: ['Onest', 'ui-sans-serif', 'system-ui', 'sans-serif'],
 *     display: ['Onest', 'ui-sans-serif', 'system-ui', 'sans-serif'], // alias, same face
 *   }
 * Keeping `display` as an alias of `sans` means components that still
 * reference `font-display` (feature detail page, StatsShowcase, etc.)
 * automatically render in Onest too — no need to hunt down every class.
 */
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Onest:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-sky-fade min-h-screen font-sans antialiased">{children}</body>
    </html>
  );
}