import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { IMAGES } from "@/lib/siteData";
import { ArrowRight } from "lucide-react";

export const metadata = {
  title: "About — Blackstone Academia",
  description:
    "Why Blackstone Academia exists: one platform for online academies to run trials, classes, billing and progress without the chaos.",
};

const values = [
  {
    title: "Built for Educational Institutions",
    desc: "Designed specifically for K-12 schools, universities, language institutes, and professional training centers — not generic LMS platforms.",
  },
  {
    title: "Scalable from Day One",
    desc: "Whether you have 50 students or 50,000, the platform grows with your institution without requiring expensive upgrades or migrations.",
  },
  {
    title: "Industry-Compliant Security",
    desc: "Enterprise-grade security with MFA, SSO, data encryption, and compliance with educational data protection standards worldwide.",
  },
  {
    title: "Real-World Testing",
    desc: "Every feature is battle-tested in live academies before release — because we run our own educational programs on the same platform.",
  },
];



const roles = [
  ["Admin & Staff", "Run daily operations seamlessly — invoicing, reports, announcements, and student support."],
  ["Academic Coach", "Evaluate trials, assign classes, manage student journeys, and track progress."],
  ["Supervisor", "Hire and train teachers, manage feedback, and ensure class quality standards."],
  ["Teacher", "Deliver live classes, set assignments, track earnings, and manage schedules."],
  ["Student & Parent", "Join classes in one tap, track progress, view invoices, and communicate safely."],
];

// Separate images for story and team sections
const SECTION_IMAGES = {
  story: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1600&q=80",
  team: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1600&q=80",
};

export default function AboutPage() {
  return (
    <main>
      <Navbar />

      {/* Hero Section - Starts from top edge */}
      <section className="relative overflow-hidden px-4 pb-12 md:pb-16 -mt-24">
        {/* Background Image */}
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

        <div className="relative mx-auto max-w-4xl text-center pt-28 sm:pt-20 md:pt-28 lg:pt-32">
          <span className="inline-flex items-center gap-2 rounded-full border border-ink/10 bg-white/70 px-4 py-1.5 text-[12px] font-medium uppercase tracking-[0.22em] text-slate2 backdrop-blur">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-iris/70" />
              <span className="eyebrow" />
            </span>
            About Us
          </span>

          <h1 
            className="mx-auto mt-4 max-w-3xl text-2xl leading-[1.08] tracking-tight text-ink sm:text-3xl md:text-4xl lg:text-5xl"
            style={{ fontFamily: "'Onest', sans-serif", fontWeight: 400 }}
          >
            Built for institutions that want to <span className="text-iris">teach</span>, not administrate
          </h1>

          <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-slate2 md:mt-4 md:text-[15px] lg:text-base">
            Blackstone Academia began inside a real online academy drowning in spreadsheets, 
            WhatsApp threads, and manual invoices. We rebuilt the entire operation as one platform 
            — now trusted by educational institutions worldwide.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-3 md:mt-8 md:gap-4">
            <Link
              href="/book-demo"
              className="group inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-white shadow-lift transition hover:bg-iris motion-safe:hover:-translate-y-0.5 md:px-7 md:py-3.5 md:text-[15px]"
            >
              Book a free demo
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 md:h-4 md:w-4" />
            </Link>
            <Link
              href="/features"
              className="rounded-full border border-ink/15 bg-white px-5 py-2.5 text-sm font-medium text-ink transition hover:border-iris/40 hover:text-iris md:px-7 md:py-3.5 md:text-[15px]"
            >
              Explore features
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}


      {/* Story Section */}
      <section className="px-4 py-10 md:py-16">
        <div className="mx-auto grid max-w-6xl items-center gap-8 md:gap-12 lg:grid-cols-2">
          <div className="overflow-hidden rounded-2xl border border-white/80 shadow-soft">
            <img
              src={SECTION_IMAGES.story}
              alt="Students collaborating and learning together"
              className="aspect-[4/3] w-full object-cover"
              loading="lazy"
            />
          </div>
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-ink/10 bg-white/70 px-4 py-1.5 text-[12px] font-medium uppercase tracking-[0.22em] text-slate2 backdrop-blur">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-iris/70" />
                <span className="eyebrow" />
              </span>
              Our Story
            </span>
            <h2 
              className="mt-3 text-2xl leading-[1.15] tracking-tight md:text-3xl lg:text-4xl"
              style={{ fontFamily: "'Onest', sans-serif", fontWeight: 400 }}
            >
              From chaos to <span className="text-iris">one calm</span> workspace
            </h2>
            <div className="mt-4 space-y-3 text-sm leading-relaxed text-slate2 md:mt-6 md:space-y-4 md:text-[15px] lg:text-base">
              <p>
              We are a technology-driven team focused on transforming the way educational institutions manage their day-to-day operations.
              </p>
              <p>
                Our Education Management Solution brings students, faculty, administrators, and management together on one unified platform—making academic management, communication, learning, attendance, assessments, and administration simpler and more efficient.
              </p>
              <p>
              Today, Blackstone Academia empowers universities, colleges
engineering institutions, business schools, and higher education institutions with the tools they need to simplify operations enhance collaboration, improve student experiences and accelerate digital transformation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="px-4 py-10 md:py-14">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-ink/10 bg-white/70 px-4 py-1.5 text-[12px] font-medium uppercase tracking-[0.22em] text-slate2 backdrop-blur">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-iris/70" />
                <span className="eyebrow" />
              </span>
              Our values
            </span>
            <h2 
              className="mt-3 text-2xl leading-[1.15] tracking-tight md:mt-4 md:text-3xl lg:text-4xl"
              style={{ fontFamily: "'Onest', sans-serif", fontWeight: 400 }}
            >
              What we believe
            </h2>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 md:mt-10 md:gap-5">
            {values.map((v) => (
              <article
                key={v.title}
                className="rounded-2xl border border-white/80 bg-white/80 p-5 shadow-lift backdrop-blur md:p-7"
              >
                <h3 
                  className="text-lg md:text-xl"
                  style={{ fontFamily: "'Onest', sans-serif", fontWeight: 400 }}
                >
                  {v.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate2 md:mt-3">{v.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

{/* Roles Section */}
      <section className="px-4 py-10 md:py-14">
        <div className="mx-auto grid max-w-6xl items-center gap-8 md:gap-12 lg:grid-cols-2">
          {/* Left Content */}
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-ink/10 bg-white/70 px-4 py-1.5 text-[12px] font-medium uppercase tracking-[0.22em] text-slate2 backdrop-blur">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-iris/70" />
                <span className="eyebrow" />
              </span>
              Five Portals
            </span>
            <h2 
              className="mt-3 text-2xl leading-[1.15] tracking-tight md:mt-4 md:text-3xl lg:text-4xl"
              style={{ fontFamily: "'Onest', sans-serif", fontWeight: 400 }}
            >
              Five portals, <span className="text-iris">one platform</span>
            </h2>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-slate2 md:mt-5 md:text-[15px] lg:text-base">
              Every person in your institution gets a portal shaped around their
              job — with permissions you control down to the module.
            </p>
            <ul className="mt-5 space-y-3 md:mt-7 md:space-y-4">
              {roles.map(([name, desc]) => (
                <li key={name} className="flex items-start gap-3">
                  <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-ink text-[8px] text-white md:h-6 md:w-6 md:text-[10px]">✓</span>
                  <span>
                    <span 
                      className="block text-sm md:text-[15px]"
                      style={{ fontFamily: "'Onest', sans-serif", fontWeight: 400 }}
                    >
                      {name}
                    </span>
                    <span className="block text-xs text-slate2 md:text-sm">{desc}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Image - Fixed, No Scroll Effect */}
          <div className="overflow-hidden rounded-2xl border border-white/80 shadow-soft">
            <img
              src={SECTION_IMAGES.team}
              alt="Academy team collaborating on educational strategies"
              className="aspect-[4/3.5] w-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 py-12 md:py-16">
        <div className="mx-auto max-w-7xl rounded-2xl bg-step-fade p-6 text-center shadow-soft md:p-10 lg:p-14">
          <h2 
            className="text-2xl leading-[1.15] tracking-tight md:text-3xl lg:text-4xl"
            style={{ fontFamily: "'Onest', sans-serif", fontWeight: 400 }}
          >
            See it working in <span className="text-iris">30 minutes</span>
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-sm text-slate2 md:mt-4 md:text-[15px] lg:text-base">
            Book a live walkthrough and we&apos;ll map the platform to how your
            institution runs today.
          </p>
          <Link
            href="/book-demo"
            className="mt-5 inline-block rounded-full bg-ink px-6 py-3 text-sm font-medium text-white shadow-lift transition hover:bg-ink/85 md:mt-8 md:px-8 md:py-4 md:text-base"
            style={{ fontFamily: "'Onest', sans-serif", fontWeight: 400 }}
          >
            Book a free demo
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}