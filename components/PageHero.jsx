import { IMAGES } from "@/lib/siteData";
import Reveal from "./Reveal";

/** Compact page hero with real cloud photo background + pastel overlay */
export default function PageHero({ eyebrow, title, subtitle, children }) {
  return (
    <section className="relative overflow-hidden px-4 pt-0 pb-8 md:pb-12">
      <div className="absolute inset-0 -z-10">
       
        
      </div>

      <Reveal eager as="div" className="relative mx-auto mt-6 max-w-4xl text-center md:mt-8">
        {eyebrow && (
          <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-slate2">
            {eyebrow}
          </p>
        )}
        <h1 
          className="mx-auto mt-3 max-w-3xl text-3xl leading-[1.08] tracking-tight md:text-4xl lg:text-5xl"
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