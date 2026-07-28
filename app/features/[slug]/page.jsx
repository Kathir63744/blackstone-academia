import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { FEATURES, getFeature } from "@/lib/siteData";

/**
 * @typedef {{ label: string, value: string }} Highlight
 * @typedef {{
 *   slug: string,
 *   title: string,
 *   tagline: string,
 *   summary: string,
 *   overview: string,
 *   icon: string,
 *   image: string,
 *   highlights: Highlight[],
 *   capabilities: string[]
 * }} Feature
 */

export function generateStaticParams() {
  return FEATURES.map((f) => ({ slug: f.slug }));
}

export function generateMetadata({ params }) {
  const feature = getFeature(params.slug);
  if (!feature) return {};
  return {
    title: `${feature.title} — Blackstone Academia`,
    description: feature.summary,
  };
}

export default function FeatureDetailPage({ params }) {
  const feature = getFeature(params.slug);
  if (!feature) notFound();

  const index = FEATURES.findIndex((f) => f.slug === feature.slug);
  const next = FEATURES[(index + 1) % FEATURES.length];

  return (
    /* Sky-blue base: a soft wash from sky at the top through white and back,
       so the page reads blue without the cards fighting it. */
    <main className="bg-gradient-to-b from-sky1/70 via-white to-sky1/50">
      <Navbar />

      {/* ------------------------------------------------------------------
          BANNER — the same overlay treatment as the cards on /features, so
          arriving here feels like the card opened rather than a new design.
      ------------------------------------------------------------------ */}
      <section className="px-4 pt-6">
        <Reveal eager className="mx-auto max-w-6xl">
          <div className="relative h-72 overflow-hidden rounded-2xl md:h-96">
            <img
              src={feature.image}
              alt=""
              aria-hidden="true"
              className="absolute inset-0 h-full w-full object-cover"
              loading="eager"
            />
            <span className="absolute inset-0 bg-gradient-to-t from-ink/95 via-ink/60 to-ink/25" />
            <span className="absolute inset-0 bg-iris/15" />

            <Link
              href="/features"
              className="group absolute left-6 top-6 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-[13px] font-medium text-white backdrop-blur transition hover:bg-white hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <ArrowLeft className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-0.5" />
              All features
            </Link>
            <span className="absolute right-6 top-6 font-display text-sm text-white/70">
              {String(index + 1).padStart(2, "0")} /{" "}
              {String(FEATURES.length).padStart(2, "0")}
            </span>

            <div className="absolute inset-x-6 bottom-6 md:inset-x-10 md:bottom-10">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-white/15 text-xl backdrop-blur">
                {feature.icon}
              </span>
              <h1 className="mt-4 font-display text-3xl leading-[1.05] tracking-tight text-white md:text-5xl">
                {feature.title}
              </h1>
              <p className="mt-1.5 font-display text-lg italic text-white/80 md:text-xl">
                {feature.tagline}
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      {/* ------------------------------------------------------------------
          OVERVIEW + NUMBERS
      ------------------------------------------------------------------ */}
      <section className="px-4 py-10 md:py-14">
        <div className="mx-auto grid max-w-6xl gap-4 lg:grid-cols-[1.4fr_1fr]">
          <Reveal className="rounded-2xl border border-ink/10 bg-white p-6 shadow-lift md:p-8">
            <p className="font-display text-xl leading-snug text-ink md:text-2xl">
              {feature.summary}
            </p>
            <p className="mt-4 text-[15px] leading-relaxed text-slate2">
              {feature.overview}
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                href="/book-demo"
                className="group inline-flex items-center gap-2 rounded-full bg-ink px-7 py-3.5 text-[15px] font-semibold text-white shadow-lift transition hover:bg-iris motion-safe:hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-iris focus-visible:ring-offset-2 focus-visible:ring-offset-white"
              >
                See it in a demo
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <Link
                href="/features"
                className="rounded-full border border-ink/15 bg-white px-7 py-3.5 text-[15px] font-semibold text-ink transition hover:border-iris/40 hover:text-iris motion-safe:hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-iris"
              >
                Browse all modules
              </Link>
            </div>
          </Reveal>

          <Reveal
            delay={80}
            className="grid gap-px overflow-hidden rounded-2xl border border-ink/10 bg-ink/10 shadow-lift"
          >
            {feature.highlights.map((h) => (
              <div
                key={h.label}
                className="flex items-baseline justify-between gap-6 bg-white px-6 py-5 transition-colors duration-300 hover:bg-sky1/30"
              >
                <span className="text-[10.5px] font-semibold uppercase tracking-[0.2em] text-slate2">
                  {h.label}
                </span>
                <span className="font-display text-2xl leading-none text-ink">
                  {h.value}
                </span>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ------------------------------------------------------------------
          CAPABILITIES — every tile identical in size, padding and rhythm.
      ------------------------------------------------------------------ */}
      <section className="px-4 pb-10 md:pb-14">
        <div className="mx-auto max-w-6xl">
          <Reveal className="mb-5 flex items-end gap-5 border-b border-ink/10 pb-4">
            <h2 className="font-display text-2xl tracking-tight text-ink md:text-3xl">
              What&apos;s included
            </h2>
            <span className="h-px flex-1 bg-ink/10" />
            <span className="font-display text-sm text-slate2">
              {String(feature.capabilities.length).padStart(2, "0")} capabilities
            </span>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {feature.capabilities.map((c, i) => (
              <Reveal
                key={c}
                as="div"
                delay={i * 50}
                className="flex min-h-[8.5rem] flex-col gap-4 rounded-2xl border border-ink/10 bg-white p-6 shadow-lift transition duration-300 hover:border-iris/30 motion-safe:hover:-translate-y-1"
              >
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-sky1/50 text-iris">
                  <Check className="h-4 w-4" />
                </span>
                <p className="text-[15px] leading-relaxed text-ink">{c}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------
          NEXT MODULE — same banner language, half height.
      ------------------------------------------------------------------ */}
      {next && next.slug !== feature.slug && (
        <section className="px-4 pb-16 md:pb-24">
          <Reveal className="mx-auto max-w-6xl">
            <Link
              href={`/features/${next.slug}`}
              className="group relative flex h-44 items-end overflow-hidden rounded-2xl p-6 transition duration-300 motion-safe:hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-iris focus-visible:ring-offset-2 focus-visible:ring-offset-white md:h-52 md:p-8"
            >
              <img
                src={next.image}
                alt=""
                aria-hidden="true"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out motion-safe:group-hover:scale-105"
                loading="lazy"
              />
              <span className="absolute inset-0 bg-gradient-to-t from-ink/95 via-ink/60 to-ink/25" />
              <span className="absolute inset-0 bg-iris/15 transition-colors duration-500 group-hover:bg-iris/30" />

              <div className="relative flex w-full flex-wrap items-center gap-5">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-white/15 text-xl backdrop-blur">
                  {next.icon}
                </span>
                <div className="min-w-0">
                  <p className="text-[10.5px] font-semibold uppercase tracking-[0.28em] text-white/65">
                    Next module
                  </p>
                  <p className="mt-1 font-display text-2xl tracking-tight text-white md:text-3xl">
                    {next.title}
                  </p>
                </div>
                <span className="ml-auto grid h-11 w-11 shrink-0 place-items-center rounded-full border border-white/30 text-white transition duration-300 group-hover:border-transparent group-hover:bg-white group-hover:text-ink">
                  <ArrowRight className="h-4 w-4" />
                </span>
              </div>
            </Link>
          </Reveal>
        </section>
      )}

      <Footer />
    </main>
  );
}