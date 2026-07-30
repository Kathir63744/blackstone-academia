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

const industries = [
  {
    icon: <GraduationCap className="h-7 w-7" />,
    title: "K-12 Schools",
    description: "Complete school management with student portals, parent communication, and curriculum delivery.",
    features: ["Student Portals", "Parent Communication", "Curriculum Management", "Assessment Tools"],
    image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=1200&q=80",
    stats: "500+ Schools",
    color: "from-blue-600/60 to-blue-800/80",
    badgeColor: "bg-blue-500/20 text-blue-300",
    useCase: "Primary & Secondary Schools"
  },
  {
    icon: <Building2 className="h-7 w-7" />,
    title: "Universities & Colleges",
    description: "Manage large student populations, faculty coordination, and multi-department operations.",
    features: ["Multi-Department", "Faculty Management", "Course Registration", "Analytics"],
    image: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1200&q=80",
    stats: "200+ Institutions",
    color: "from-purple-600/60 to-purple-800/80",
    badgeColor: "bg-purple-500/20 text-purple-300",
    useCase: "Higher Education"
  },
  {
    icon: <Languages className="h-7 w-7" />,
    title: "Language Institutes",
    description: "Teach languages with multi-lingual support, level-based progression, and interactive tools.",
    features: ["Multi-Language", "Level-Based Progression", "Speaking Practice", "Certification"],
    image: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?auto=format&fit=crop&w=1200&q=80",
    stats: "300+ Languages",
    color: "from-emerald-600/60 to-emerald-800/80",
    badgeColor: "bg-emerald-500/20 text-emerald-300",
    useCase: "Language Learning"
  },
  {
    icon: <Briefcase className="h-7 w-7" />,
    title: "Professional Training",
    description: "Deliver professional development with certifications, continuing education, and corporate training.",
    features: ["Certification", "Course Management", "Corporate Training", "CE Credits"],
    image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=1200&q=80",
    stats: "10,000+ Learners",
    color: "from-rose-600/60 to-rose-800/80",
    badgeColor: "bg-rose-500/20 text-rose-300",
    useCase: "Professional Development"
  },
  {
    icon: <Laptop className="h-7 w-7" />,
    title: "Online Tutoring Platforms",
    description: "Scale your tutoring business with live classes, automated billing, and progress tracking.",
    features: ["Live Classes", "One-on-One Tutoring", "Progress Tracking", "Automated Billing"],
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1200&q=80",
    stats: "1,000+ Tutors",
    color: "from-teal-600/60 to-teal-800/80",
    badgeColor: "bg-teal-500/20 text-teal-300",
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

      {/* Industry Cards - Even Spacing & Sizes */}
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
                <div className="group relative h-[360px] overflow-hidden rounded-2xl shadow-lg transition duration-500 hover:shadow-2xl motion-safe:hover:-translate-y-2">
                  {/* Background Image */}
                  <div className="absolute inset-0">
                    <Image
                      src={industry.image}
                      alt={industry.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, 400px"
                    />
                  </div>
                  
                  {/* Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-b ${industry.color}`} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  
                  {/* Content - Evenly Spaced */}
                  <div className="relative z-10 flex h-full flex-col justify-between p-6">
                    {/* Top: Icon and Stats */}
                    <div className="flex items-start justify-between">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/20 backdrop-blur text-white shadow-lg">
                        {industry.icon}
                      </div>
                      <span className={`inline-flex items-center gap-1 rounded-full ${industry.badgeColor} px-3 py-1 text-[11px] font-semibold backdrop-blur`}>
                        <TrendingUp className="h-3 w-3" />
                        {industry.stats}
                      </span>
                    </div>

                    {/* Bottom: Title, Description, Features - Even Spacing */}
                    <div className="space-y-3">
                      <h3 className="font-display text-2xl font-bold tracking-tight text-white">
                        {industry.title}
                      </h3>
                      <p className="text-sm leading-relaxed text-white/80 line-clamp-2">
                        {industry.description}
                      </p>
                      
                      {/* Use Case Badge */}
                      <div>
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-white/15 backdrop-blur px-3 py-1 text-[11px] font-medium text-white/85">
                          <Star className="h-3.5 w-3.5" />
                          {industry.useCase}
                        </span>
                      </div>

                      {/* Feature Tags - Evenly Spaced */}
                      <div className="flex flex-wrap gap-2 pt-1">
                        {industry.features.slice(0, 3).map((feature) => (
                          <span
                            key={feature}
                            className="inline-flex items-center gap-1.5 rounded-full bg-white/20 backdrop-blur px-3 py-1.5 text-[13px] font-medium text-white/95"
                          >
                            <CheckCircle className="h-3.5 w-3.5 text-white/50" />
                            {feature}
                          </span>
                        ))}
                        {industry.features.length > 3 && (
                          <span className="text-[12px] text-white/50 font-medium">
                            +{industry.features.length - 3}
                          </span>
                        )}
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