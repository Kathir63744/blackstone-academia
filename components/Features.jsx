"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowRight, ArrowUpRight, Pause, Play } from "lucide-react";
import { FEATURES } from "@/lib/siteData";

/* The active-tab pill is painted with an inline style so it can't be defeated by
   a missing `iris` token or a global button rule. Change this one value to
   re-tint the highlight. */
const ACCENT = "#6e93e0";

/* How long each card holds before the deck advances. */
const SLIDE_MS = 5000;

/* -------------------------------------------------------------------------- */
/*  Module card — one design, all five identical.                             */
/* -------------------------------------------------------------------------- */

function ModuleCard({ item }) {
  return (
    <Link
      href={`/features/${item.slug}`}
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl bg-white ring-1 ring-ink/5 shadow-[0_1px_2px_rgba(15,23,42,0.04),0_14px_36px_-18px_rgba(15,23,42,0.22)] transition duration-500 ease-out hover:-translate-y-1.5 hover:ring-iris/25 hover:shadow-[0_1px_2px_rgba(15,23,42,0.04),0_30px_60px_-24px_rgba(99,102,241,0.45)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-iris focus-visible:ring-offset-2 motion-reduce:transition-none motion-reduce:hover:translate-y-0"
    >
      <div className="relative aspect-[4/3] w-full shrink-0 overflow-hidden">
        <img
          src={item.image}
          alt=""
          aria-hidden="true"
          loading="lazy"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.06] motion-reduce:transform-none"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/55 via-ink/10 to-transparent transition-opacity duration-500 group-hover:opacity-40" />

        <span className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/15 text-white ring-1 ring-white/25 backdrop-blur-md transition duration-500 group-hover:bg-white group-hover:text-ink">
          <ArrowUpRight className="h-4 w-4 transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </span>
      </div>

      <div className="relative flex flex-grow flex-col p-5">
        <span
          className="absolute left-5 top-0 h-px w-10 transition-all duration-500 group-hover:w-20"
          style={{ background: `linear-gradient(to right, ${ACCENT}, transparent)` }}
        />

        <h4 className="mt-3 line-clamp-1 text-lg font-semibold tracking-tight text-ink transition-colors duration-300">
          {item.title}
        </h4>
        <p className="mt-2 line-clamp-2 flex-grow text-sm leading-relaxed text-slate2">
          {item.summary}
        </p>

        <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-ink">
          Explore
          <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1 motion-reduce:transform-none" />
        </span>
      </div>
    </Link>
  );
}

/* -------------------------------------------------------------------------- */
/*  Feature card — wide, dark, split. Deliberately unlike the module cards.    */
/* -------------------------------------------------------------------------- */

function FeatureCard({ item, index, total }) {
  return (
    <article className="relative grid h-full overflow-hidden rounded-3xl bg-ink text-white ring-1 ring-white/10 shadow-[0_40px_80px_-40px_rgba(15,23,42,0.65)] md:grid-cols-[0.8fr_1.2fr]">
      {/* Mobile: the image sits behind the copy instead of beside it */}
      <img
        src={item.image}
        alt=""
        aria-hidden="true"
        loading="lazy"
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover opacity-30 md:hidden"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/85 to-ink/40 md:hidden" />

      <div
        className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full blur-3xl"
        style={{ backgroundColor: ACCENT, opacity: 0.25 }}
      />

      {/* Copy */}
      <div className="relative z-10 flex flex-col justify-between p-7 sm:p-10 lg:p-12">
        <div className="flex items-center gap-3 text-sm tabular-nums text-white/45">
          <span className="text-white">{String(index + 1).padStart(2, "0")}</span>
          <span className="h-px w-8 bg-white/25" />
          <span>{String(total).padStart(2, "0")}</span>
        </div>

        <div className="mt-6">
          <h4 className="text-balance text-2xl font-light leading-[1.15] tracking-tight sm:text-3xl lg:text-[2.25rem]">
            {item.title}
          </h4>
          <p className="mt-3 line-clamp-4 max-w-sm text-sm leading-relaxed text-white/65 sm:text-base">
            {item.summary}
          </p>
        </div>

        <Link
          href={`/features/${item.slug}`}
          className="group mt-6 inline-flex w-fit items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-ink transition duration-300 hover:gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
        >
          Explore {item.title}
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 motion-reduce:transform-none" />
        </Link>
      </div>

      {/* Desktop media, bleeding off the right edge */}
      <div className="relative hidden md:block">
        <img
          src={item.image}
          alt=""
          aria-hidden="true"
          loading="lazy"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover"
        />
        {/* SAME GRADIENT - Now applied to smaller container */}
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/45 to-transparent" />
      </div>
    </article>
  );
}

/* -------------------------------------------------------------------------- */

export default function Features() {
  const modules = FEATURES.slice(0, 5);
  const features = FEATURES.slice(5);
  const total = features.length;

  const tabsRef = useRef(null);
  const tabRefs = useRef([]);

  const [active, setActive] = useState(0);
  const [playing, setPlaying] = useState(true);
  const [paused, setPaused] = useState(false); // hover / focus / hidden tab
  const [reduced, setReduced] = useState(false);
  const [thumb, setThumb] = useState({ left: 0, width: 0, ready: false });

  const running = playing && !paused && !reduced && total > 1;

  const goTo = useCallback((i) => setActive(((i % total) + total) % total), [total]);

  /* Reduced motion + background tab */
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onMq = () => setReduced(mq.matches);
    const onVis = () => setPaused(document.hidden);
    onMq();
    mq.addEventListener("change", onMq);
    document.addEventListener("visibilitychange", onVis);
    return () => {
      mq.removeEventListener("change", onMq);
      document.removeEventListener("visibilitychange", onVis);
    };
  }, []);

  /* Autoplay — one card at a time, looping */
  useEffect(() => {
    if (!running) return;
    const id = setTimeout(() => setActive((a) => (a + 1) % total), SLIDE_MS);
    return () => clearTimeout(id);
  }, [running, active, total]);

  /* Move the sliding highlight under the active pill, and keep it in view */
  const placeThumb = useCallback(() => {
    const el = tabRefs.current[active];
    const bar = tabsRef.current;
    if (!el || !bar) return;
    setThumb({ left: el.offsetLeft, width: el.offsetWidth, ready: true });
    bar.scrollTo({
      left: el.offsetLeft - bar.clientWidth / 2 + el.offsetWidth / 2,
      behavior: reduced ? "auto" : "smooth",
    });
  }, [active, reduced]);

  useEffect(() => {
    placeThumb();
    window.addEventListener("resize", placeThumb);
    return () => window.removeEventListener("resize", placeThumb);
  }, [placeThumb]);

  const onKeyDown = (e) => {
    if (e.key === "ArrowRight") {
      e.preventDefault();
      goTo(active + 1);
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      goTo(active - 1);
    }
  };

  const noScrollbar =
    "[scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden";

  /* Where each card sits relative to the one on top of the deck */
  const cardStyle = (i) => {
    const offset = (i - active + total) % total;
    if (offset === 0) return { transform: "translateY(0) scale(1)", opacity: 1, zIndex: 30 };
    if (total > 2 && offset === total - 1)
      // the card that just left: lifts off the top and fades
      return { transform: "translateY(-44px) scale(0.98)", opacity: 0, zIndex: 40 };
    if (offset === 1) return { transform: "translateY(18px) scale(0.96)", opacity: 1, zIndex: 20 };
    if (offset === 2) return { transform: "translateY(34px) scale(0.93)", opacity: 1, zIndex: 10 };
    return { transform: "translateY(34px) scale(0.93)", opacity: 0, zIndex: 0 };
  };

  return (
    <section id="features" className="relative px-4 py-20 md:py-28">
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-cream/60 via-transparent to-transparent" />
        <div className="absolute -right-40 -top-40 h-96 w-96 rounded-full bg-violet-400/10 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-violet-400/10 blur-3xl" />
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-ink/10 bg-white/70 px-4 py-1.5 text-[12px] font-medium uppercase tracking-[0.22em] text-slate2 backdrop-blur">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-iris/70" />
              <span className="eyebrow" />
            </span>
            Our Features
          </span>
          <h2 className="mt-5 text-balance text-3xl font-light leading-[1.15] tracking-tight sm:text-4xl md:text-5xl">
            Everything to run &{" "}
            <span
              className=" text-iris"
             
            >
              grow
            </span>{" "}
            your university
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-slate2 md:text-lg">
            No stitched-together tools. Every module ships in one platform and works together out of
            the box.
          </p>
        </div>

        {/* ---------------- Modules: uniform grid ------------------------------ */}
        <div className="mt-16">
          <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
            <div>
              <h3 className="text-2xl font-semibold tracking-tight text-ink">Modules</h3>
              <p className="mt-1 text-sm text-slate2">The core portals your academy runs on.</p>
            </div>
            <span
              className="rounded-full px-3 py-1 text-sm font-medium"
              style={{ backgroundColor: `${ACCENT}1A`, color: ACCENT }}
            >
              {modules.length} included
            </span>
          </div>

          {/* Flex with a fixed basis so the last short row centers itself */}
          <div className="flex flex-wrap justify-center gap-6">
            {modules.map((f) => (
              <div key={f.slug} className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]">
                <ModuleCard item={f} />
              </div>
            ))}
          </div>
        </div>

        {/* ---------------- Features: self-playing deck ------------------------ */}
        {total > 0 && (
          <div
            className="mt-24"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            onFocusCapture={() => setPaused(true)}
            onBlurCapture={() => setPaused(false)}
            onKeyDown={onKeyDown}
          >
            <div className="mb-6 text-center">
              <h3 className="text-2xl font-semibold tracking-tight text-ink">Features</h3>
              <p className="mt-1 text-sm text-slate2">
                Plays through on its own — hover to hold, or pick one.
              </p>
            </div>

            {/* Tabs: a sliding highlight rides under the active pill */}
            <div className="mx-auto mb-10 flex max-w-6xl items-center gap-32">
              <div
                ref={tabsRef}
                role="tablist"
                aria-label="Features"
                className={`relative flex flex-1 gap-1 overflow-x-auto rounded-full bg-white/85 p-2.5 ring-1 ring-ink/5 shadow-lg shadow-ink/5 backdrop-blur-md ${noScrollbar}`}
              >
                {/* the highlight itself */}
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute bottom-1.5 top-1.5 rounded-full transition-all duration-500 ease-out"
                  style={{
                    left: thumb.left,
                    width: thumb.width,
                    backgroundColor: ACCENT,
                    boxShadow: `0 6px 18px -6px ${ACCENT}`,
                    opacity: thumb.ready ? 1 : 0,
                  }}
                />

                {features.map((f, i) => {
                  const isActive = i === active;
                  return (
                    <button
                      key={f.slug}
                      ref={(el) => (tabRefs.current[i] = el)}
                      type="button"
                      role="tab"
                      aria-selected={isActive}
                      onClick={() => goTo(i)}
                      className={[
                        "relative z-10 shrink-0 whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium transition-colors duration-300",
                        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
                        isActive ? "text-white" : "text-slate-600 hover:text-ink",
                      ].join(" ")}
                      style={{ color: isActive ? "#fff" : undefined }}
                    >
                      {f.title}
                    </button>
                  );
                })}
              </div>

              
            </div>

            {/* The deck */}
            <div className="relative h-[68vh] max-h-[600px] min-h-[460px] pb-12">
              {features.map((f, i) => {
                const isFront = i === active;
                return (
                  <div
                    key={f.slug}
                    aria-hidden={!isFront}
                    className={[
                      "absolute inset-x-0 top-0 h-[68vh] max-h-[600px] min-h-[460px] origin-top",
                      "transition-all duration-[700ms] ease-[cubic-bezier(0.22,1,0.36,1)]",
                      "motion-reduce:transition-none",
                      isFront ? "" : "pointer-events-none",
                    ].join(" ")}
                    style={cardStyle(i)}
                  >
                    <FeatureCard item={f} index={i} total={total} />
                  </div>
                );
              })}
            </div>

            {/* Timing rail — restarts on each card via the key */}
            <div className="mx-auto mt-2 h-px max-w-3xl overflow-hidden bg-slate-200">
              <div
                key={active}
                className="h-px origin-left"
                style={{
                  backgroundColor: ACCENT,
                  transformOrigin: "left",
                  animation: running ? `featTick ${SLIDE_MS}ms linear forwards` : "none",
                  transform: running ? undefined : "scaleX(1)",
                }}
              />
            </div>
            <style>{`@keyframes featTick { from { transform: scaleX(0); } to { transform: scaleX(1); } }`}</style>
          </div>
        )}

        {/* CTA */}
        <div className="mt-20 text-center">
          <Link
            href="/features"
            className="group inline-flex items-center gap-3 rounded-full bg-ink px-10 py-4 font-semibold text-white transition duration-300 hover:scale-[1.03] hover:shadow-2xl hover:shadow-ink/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 motion-reduce:hover:scale-100"
          >
            Explore all features
            <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1 motion-reduce:transform-none" />
          </Link>
        </div>
      </div>
    </section>
  );
}