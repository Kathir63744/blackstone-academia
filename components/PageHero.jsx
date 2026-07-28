import { IMAGES } from "@/lib/siteData";
import Reveal from "./Reveal";

/** Compact page hero with real cloud photo background + pastel overlay */
export default function PageHero({ eyebrow, title, subtitle, children }) {
  return (
    <section className="relative overflow-hidden px-4 pb-12 pt-12 md:pt-16">
      <div className="absolute inset-0 -z-10">
        <img
          src={IMAGES.skyClouds}
          alt=""
          aria-hidden="true"
          className="h-full w-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-sky1/55 to-cream" />
      </div>

      <Reveal eager as="div" className="relative mx-auto max-w-4xl text-center">
        {eyebrow && (
          <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-slate2">
            {eyebrow}
          </p>
        )}
        <h1 
          className="mx-auto mt-3 max-w-3xl text-4xl leading-[1.08] tracking-tight md:text-5xl"
          style={{ 
            fontFamily: "'Onest', sans-serif", 
            fontWeight: 400,
            color: "#10233F"
          }}
        >
          {title}
        </h1>
        {subtitle && (
          <p 
            className="mx-auto mt-4 max-w-xl text-[15px] leading-relaxed text-slate2 md:text-base"
            style={{ fontFamily: "'Onest', sans-serif", fontWeight: 400 }}
          >
            {subtitle}
          </p>
        )}
        {children}
      </Reveal>
    </section>
  );
}