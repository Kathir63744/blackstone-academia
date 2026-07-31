import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import { 
  ArrowRight, 
  Sparkles,
  Zap,
  Shield,
  Clock,
  CheckCircle,
  Play,
  TrendingUp,
  Star,
  GraduationCap,
  Building2,
  Languages,
  Briefcase,
  Laptop,
  Users
} from "lucide-react";

/* Per-card `color` / `badgeColor` removed — every card now shares one scrim,
   so the grid reads as a set instead of five unrelated components. */
const industries = [
  {
    icon: <GraduationCap className="h-6 w-6" />,
    title: "K-12 Schools",
    description: "Complete school management with student portals, parent communication, and curriculum delivery.",
    features: ["Student Portals", "Parent Communication", "Curriculum Management", "Assessment Tools"],
    image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=1200&q=80",
    stats: "500+ Schools",
    useCase: "Primary & Secondary Schools"
  },
  {
    icon: <Building2 className="h-6 w-6" />,
    title: "Universities & Colleges",
    description: "Manage large student populations, faculty coordination, and multi-department operations.",
    features: ["Multi-Department", "Faculty Management", "Course Registration", "Analytics"],
    image: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1200&q=80",
    stats: "200+ Institutions",
    useCase: "Higher Education"
  },
  {
    icon: <Languages className="h-6 w-6" />,
    title: "Language Institutes",
    description: "Teach languages with multi-lingual support, level-based progression, and interactive tools.",
    features: ["Multi-Language", "Level-Based Progression", "Speaking Practice", "Certification"],
    image: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?auto=format&fit=crop&w=1200&q=80",
    stats: "300+ Languages",
    useCase: "Language Learning"
  },
  {
    icon: <Briefcase className="h-6 w-6" />,
    title: "Professional Training",
    description: "Deliver professional development with certifications, continuing education, and corporate training.",
    features: ["Certification", "Course Management", "Corporate Training", "CE Credits"],
    image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=1200&q=80",
    stats: "10,000+ Learners",
    useCase: "Professional Development"
  },
  {
    icon: <Laptop className="h-6 w-6" />,
    title: "Online Tutoring Platforms",
    description: "Scale your tutoring business with live classes, automated billing, and progress tracking.",
    features: ["Live Classes", "One-on-One Tutoring", "Progress Tracking", "Automated Billing"],
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1200&q=80",
    stats: "1,000+ Tutors",
    useCase: "Online Tutoring"
  }
];

const benefits = [
  {
    icon: <Zap className="h-5 w-5" />,
    title: "All-in-One Platform",
    description: "Everything you need in one place — no integrations, no add-ons.",
  },
  {
    icon: <Clock className="h-5 w-5" />,
    title: "Scale with Ease",
    description: "Grow your institution without growing your administrative burden.",
  },
  {
    icon: <Shield className="h-5 w-5" />,
    title: "Enterprise Security",
    description: "Bank-grade security and compliance for your institution's data.",
  },
  {
    icon: <Sparkles className="h-5 w-5" />,
    title: "Future-Ready",
    description: "Built for modern education with AI-powered tools and analytics.",
  }
];

export const metadata = {
  title: "Industry Solutions — Blackstone Academia",
  description: "Discover how Blackstone Academia serves educational institutions worldwide.",
};

export default function IndustryPage() {
  return (
    <main className="bg-gradient-to-b from-sky1/70 via-white to-sky1/50">
      <Navbar />

      {/* Hero Section */}
      <section className="relative px-4 pt-16 pb-8 md:pt-20 md:pb-10 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-iris/30 rounded-full blur-[150px]" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-sky1/30 rounded-full blur-[150px]" />
        </div>
        <div className="relative z-10 mx-auto max-w-6xl text-center">
          <Reveal eager>
            <span className="inline-flex items-center gap-2 rounded-full border border-ink/10 bg-white/70 px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.22em] text-slate2 backdrop-blur">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-iris/70" />
                <span className="eyebrow" />
              </span>
              Industry Solutions
            </span>
            <h1 className="mt-5 text-3xl leading-[1.05] tracking-tight text-ink md:text-5xl lg:text-6xl">
              One Platform for Every
              <span className="block text-iris">Educational Institution</span>
            </h1>
            <p className="mt-3 max-w-2xl mx-auto text-[15px] leading-relaxed text-slate2 md:text-base">
              From K-12 schools to universities and professional training centers — 
              Blackstone Academia adapts to your unique educational needs.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/book-demo"
                className="group inline-flex items-center gap-2 rounded-full bg-ink px-6 py-2.5 text-[14px] font-medium text-white shadow-lift transition hover:bg-iris motion-safe:hover:-translate-y-0.5"
              >
                Book a free demo
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <Link
                href="/features"
                className="rounded-full border border-ink/15 bg-white px-6 py-2.5 text-[14px] font-medium text-ink transition hover:border-iris/40 hover:text-iris"
              >
                Explore modules
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Industry Cards */}
      <section className="px-4 py-12 md:py-16 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-sky1/90 via-white/90 to-cream/90" />
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-1/2 w-96 h-96 bg-iris/5 rounded-full blur-3xl -translate-x-1/2" />
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-sky1/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-iris/5 rounded-full blur-3xl" />
        </div>
        
        <div className="relative z-10 mx-auto max-w-6xl">
          <Reveal className="mb-10 text-center">
            <h2 className="font-display text-3xl tracking-tight text-ink md:text-4xl">
              Solutions for Every Educational Sector
            </h2>
            <p className="mt-2 text-[15px] text-slate2">
              Discover how Blackstone Academia can transform your institution
            </p>
          </Reveal>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry, i) => (
              <Reveal key={industry.title} delay={i * 60}>
                <div className="group relative h-[440px] overflow-hidden rounded-[28px] ring-1 ring-ink/5 shadow-[0_18px_40px_-20px_rgba(15,23,42,0.45)] transition duration-500 hover:shadow-[0_30px_60px_-24px_rgba(15,23,42,0.55)] motion-safe:hover:-translate-y-2">
                  {/* Background Image */}
                  <div className="absolute inset-0">
                    <Image
                      src={industry.image}
                      alt=""
                      aria-hidden="true"
                      fill
                      className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.08]"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 400px"
                    />
                  </div>

                  {/* Overlay — identical on every card. Three passes: a flat
                      knock-down so no photo is too bright, a bottom scrim that
                      carries the text, and a soft top vignette for the badges. */}
                  <div className="absolute inset-0 bg-ink/35 transition-colors duration-500 group-hover:bg-ink/25" />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/75 via-45% to-transparent" />
                  <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-ink/55 to-transparent" />

                  {/* Content */}
                  <div className="relative z-10 flex h-full flex-col p-6">
                    {/* Top: icon + stat */}
                    <div className="flex items-start justify-between">
                      <span className="grid h-12 w-12 place-items-center rounded-2xl bg-white/15 text-white ring-1 ring-white/25 backdrop-blur-md transition duration-500 group-hover:bg-white group-hover:text-ink">
                        {industry.icon}
                      </span>
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1.5 text-[11px] font-semibold text-white ring-1 ring-white/25 backdrop-blur-md">
                        <TrendingUp className="h-3 w-3" />
                        {industry.stats}
                      </span>
                    </div>

                    {/* Bottom: copy + highlighted features */}
                    <div className="mt-auto">
                      <span className="inline-flex items-center gap-1.5 text-[10.5px] font-semibold uppercase tracking-[0.2em] text-sky-200/90">
                        <Star className="h-3 w-3" />
                        {industry.useCase}
                      </span>

                      <h3 className="mt-2 font-display text-[26px] font-bold leading-tight tracking-tight text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]">
                        {industry.title}
                      </h3>

                      <p className="mt-1.5 line-clamp-2 text-[13.5px] leading-relaxed text-white/80">
                        {industry.description}
                      </p>

                      {/* The features panel — a frosted plate lifts them off the
                          photo entirely, so they stay legible on any image. */}
                      <div className="mt-4 rounded-2xl bg-white/10 p-3.5 ring-1 ring-white/20 backdrop-blur-md transition duration-500 group-hover:bg-white/15 group-hover:ring-white/30">
                        <p className="mb-2.5 text-[9.5px] font-semibold uppercase tracking-[0.2em] text-white/55">
                          What&apos;s included
                        </p>
                        <ul className="grid grid-cols-2 gap-x-3 gap-y-2">
                          {industry.features.map((feature) => (
                            <li
                              key={feature}
                              className="flex items-start gap-1.5 text-[12.5px] font-medium leading-snug text-white"
                            >
                              <CheckCircle className="mt-px h-3.5 w-3.5 shrink-0 text-sky-300" />
                              <span className="line-clamp-2">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="px-4 py-12 md:py-16 relative overflow-hidden">
        <div className="relative z-10 mx-auto max-w-6xl">
          <Reveal className="mb-10 text-center">
            <h2 className="font-display text-3xl tracking-tight text-ink md:text-4xl">
              Why Institutions Choose Us
            </h2>
            <p className="mt-2 text-[15px] text-slate2">
              The platform built for modern education
            </p>
          </Reveal>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit, i) => (
              <Reveal key={benefit.title} delay={i * 60}>
                <div className="group relative rounded-2xl p-6 text-center shadow-lg shadow-black/5 transition duration-300 hover:shadow-xl hover:shadow-iris/10 motion-safe:hover:-translate-y-1 bg-gradient-to-br from-sky1/90 via-white/90 to-cream/90 border border-white/60">
                  {/* Glass shine effect */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none" />
                  
                  <div className="relative z-10">
                    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-iris/20 to-indigo-400/20 text-iris transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg group-hover:shadow-iris/20">
                      {benefit.icon}
                    </div>
                    <h3 className="mt-4 font-display text-base font-medium text-ink">
                      {benefit.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate2/90">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 py-16 md:py-20">
        <Reveal className="mx-auto max-w-6xl">
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-iris/20 via-sky1/20 to-iris/10 p-px shadow-soft">
            <div className="relative rounded-[inherit] bg-white/90 px-8 py-12 text-center backdrop-blur-xl md:px-12">
              <div className="absolute top-0 right-0 w-48 h-48 bg-iris/10 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-sky1/10 rounded-full blur-3xl" />
              
              <div className="relative z-10">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-green-100 px-3 py-1 text-[10px] font-semibold text-green-700">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400" />
                    <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-green-500" />
                  </span>
                  Available Now
                </span>
                <h2 className="mt-4 text-3xl tracking-tight text-ink md:text-4xl">
                  Ready to Transform Your Institution?
                </h2>
                <p className="relative mx-auto mt-3 max-w-md text-[15px] text-slate2">
                  Join 1,000+ educational institutions already using Blackstone Academia.
                </p>
                <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
                  <Link
                    href="/book-demo"
                    className="group inline-flex items-center gap-2 rounded-full bg-ink px-7 py-3 text-[15px] font-medium text-white shadow-lift transition hover:bg-iris motion-safe:hover:-translate-y-0.5"
                  >
                    Book a free demo
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </Link>
                  <Link
                    href="/features"
                    className="group inline-flex items-center gap-2 rounded-full border border-ink/15 bg-white px-7 py-3 text-[15px] font-medium text-ink transition hover:border-iris/40 hover:text-iris"
                  >
                    <Play className="h-4 w-4" />
                    Explore modules
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      <Footer />
    </main>
  );
}