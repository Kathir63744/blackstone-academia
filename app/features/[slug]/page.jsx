import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import { ArrowLeft, ArrowRight, Check, Info, Play, Zap, Users, Clock, BarChart, Shield, BookOpen, Target, TrendingUp, Award, Calendar, MessageCircle, FileText, Settings, Globe } from "lucide-react";
import { FEATURES, getFeature, WORKFLOW_IMAGES } from "@/lib/siteData";
import Image from "next/image";

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

  // Get related modules (excluding current)
  const relatedModules = FEATURES.filter((f) => f.slug !== feature.slug).slice(0, 3);

  // Get workflow images for this module
  const workflowImages = WORKFLOW_IMAGES[feature.slug] || WORKFLOW_IMAGES["student-portal"];

  // Define workflow steps based on module type with more descriptive content
  const getWorkflowSteps = (slug) => {
    const workflows = {
      "student-portal": [
        { 
          icon: <BookOpen className="h-6 w-6" />, 
          title: "Discover & Enroll", 
          desc: "Students explore courses, register for trials, and enroll in programs that match their goals. The entire journey from discovery to enrollment happens in minutes.",
          detail: "Browse courses • Schedule trials • Instant enrollment"
        },
        { 
          icon: <Calendar className="h-6 w-6" />, 
          title: "Learn & Engage", 
          desc: "Access curriculum, join live classes, submit assignments, and track progress. Everything needed for academic success is available 24/7 from any device.",
          detail: "Live classes • Curriculum access • Assignment submission"
        },
        { 
          icon: <Award className="h-6 w-6" />, 
          title: "Achieve & Grow", 
          desc: "Track rankings, receive certificates, and access performance analytics. Students see their progress and achievements in real-time.",
          detail: "Real-time rankings • Auto-certificates • Progress tracking"
        },
      ],
      "teacher-portal": [
        { 
          icon: <Calendar className="h-6 w-6" />, 
          title: "Plan & Schedule", 
          desc: "Set up class schedules, manage trials, and coordinate with students. The intelligent scheduling system automatically handles conflicts and leave requests.",
          detail: "Smart scheduling • Leave management • Auto-replacement"
        },
        { 
          icon: <TrendingUp className="h-6 w-6" />, 
          title: "Teach & Track", 
          desc: "Deliver engaging lessons, monitor student participation, and track performance metrics. Every student's progress is visible in real-time.",
          detail: "Live teaching • Performance tracking • Student analytics"
        },
        { 
          icon: <Award className="h-6 w-6" />, 
          title: "Grow & Earn", 
          desc: "Transparent earnings tracking, performance rankings, and professional development tools help teachers grow their careers.",
          detail: "Earnings dashboard • Performance rankings • Career growth"
        },
      ],
      "academic-coach-portal": [
        { 
          icon: <Target className="h-6 w-6" />, 
          title: "Assess & Plan", 
          desc: "Evaluate student performance, identify intervention needs, and create personalized development plans. Data-driven insights guide every decision.",
          detail: "Performance evaluation • Intervention planning • Goal setting"
        },
        { 
          icon: <Users className="h-6 w-6" />, 
          title: "Guide & Support", 
          desc: "Provide targeted support through one-on-one coaching, resource recommendations, and progress monitoring. Every student gets the attention they need.",
          detail: "One-on-one coaching • Resource recommendations • Progress monitoring"
        },
        { 
          icon: <TrendingUp className="h-6 w-6" />, 
          title: "Track & Optimize", 
          desc: "Monitor student outcomes, adjust intervention strategies, and celebrate successes. Continuous improvement drives student achievement.",
          detail: "Outcome tracking • Strategy optimization • Success celebration"
        },
      ],
      "supervisor-portal": [
        { 
          icon: <BarChart className="h-6 w-6" />, 
          title: "Monitor & Evaluate", 
          desc: "Comprehensive dashboards provide real-time visibility into teacher performance, student outcomes, and institutional health.",
          detail: "Real-time dashboards • Performance metrics • Quality assurance"
        },
        { 
          icon: <Shield className="h-6 w-6" />, 
          title: "Ensure Quality", 
          desc: "Maintain high standards through automated quality checks, compliance monitoring, and continuous improvement programs.",
          detail: "Quality monitoring • Compliance tracking • Standards enforcement"
        },
        { 
          icon: <TrendingUp className="h-6 w-6" />, 
          title: "Lead & Innovate", 
          desc: "Drive institutional excellence with strategic insights, resource optimization, and data-backed decision making.",
          detail: "Strategic insights • Resource optimization • Innovation leadership"
        },
      ],
      "admin-portal": [
        { 
          icon: <Settings className="h-6 w-6" />, 
          title: "Manage Operations", 
          desc: "Centralized control over enrollment, staffing, facilities, and resources. Every aspect of institutional operations is streamlined.",
          detail: "Enrollment management • Staff scheduling • Resource planning"
        },
        { 
          icon: <FileText className="h-6 w-6" />, 
          title: "Handle Finances", 
          desc: "Comprehensive financial management including billing, payments, expense tracking, and financial reporting.",
          detail: "Billing automation • Payment processing • Financial reporting"
        },
        { 
          icon: <Globe className="h-6 w-6" />, 
          title: "Scale & Expand", 
          desc: "Multi-campus coordination, regulatory compliance, and strategic planning tools support institutional growth.",
          detail: "Multi-campus tools • Compliance management • Growth planning"
        },
      ],
      "live-classes": [
        { 
          icon: <Play className="h-6 w-6" />, 
          title: "Connect & Start", 
          desc: "Seamlessly integrate with Zoom, MS Teams, Google Meet, or Jitsi. Classes start with a single click from the platform.",
          detail: "4 video platforms • One-click start • Auto-integration"
        },
        { 
          icon: <Users className="h-6 w-6" />, 
          title: "Teach & Interact", 
          desc: "Engage students with interactive tools, screen sharing, and real-time participation. Learning is active and collaborative.",
          detail: "Interactive tools • Screen sharing • Active participation"
        },
        { 
          icon: <Clock className="h-6 w-6" />, 
          title: "Record & Review", 
          desc: "Automatic recording with cloud storage, organized by class. Students can review lessons anytime, anywhere.",
          detail: "Auto-recording • Cloud storage • 24/7 access"
        },
      ],
      "billing-finance": [
        { 
          icon: <FileText className="h-6 w-6" />, 
          title: "Invoice & Collect", 
          desc: "Automated invoicing with multi-currency support. Students receive professional invoices via email and WhatsApp.",
          detail: "Auto-invoicing • Multi-currency • Instant delivery"
        },
        { 
          icon: <Shield className="h-6 w-6" />, 
          title: "Process & Secure", 
          desc: "Secure payment processing through Stripe and PayPal. Global payments made simple and safe.",
          detail: "Stripe + PayPal • Global payments • Secure processing"
        },
        { 
          icon: <BarChart className="h-6 w-6" />, 
          title: "Track & Report", 
          desc: "Real-time financial dashboard with expense tracking, revenue analytics, and comprehensive reporting.",
          detail: "Financial dashboard • Expense tracking • Revenue analytics"
        },
      ],
      "assessments-rankings": [
        { 
          icon: <Target className="h-6 w-6" />, 
          title: "Assess & Evaluate", 
          desc: "Create and administer assessments with instant grading. Students receive immediate feedback on their performance.",
          detail: "Online assessments • Auto-grading • Instant feedback"
        },
        { 
          icon: <TrendingUp className="h-6 w-6" />, 
          title: "Rank & Compare", 
          desc: "Transparent ranking systems based on performance, behavior, and timeliness. Fair competition drives excellence.",
          detail: "Performance rankings • Behavior tracking • Fair competition"
        },
        { 
          icon: <Award className="h-6 w-6" />, 
          title: "Recognize & Reward", 
          desc: "Automated certificates, recognition programs, and achievement tracking motivate students to excel.",
          detail: "Auto-certificates • Recognition programs • Achievement tracking"
        },
      ],
      "communication": [
        { 
          icon: <MessageCircle className="h-6 w-6" />, 
          title: "Connect & Chat", 
          desc: "Real-time messaging with file sharing, emojis, and audio messages. Connect instantly with students, teachers, and staff.",
          detail: "Real-time chat • File sharing • Audio messages"
        },
        { 
          icon: <Globe className="h-6 w-6" />, 
          title: "Broadcast & Notify", 
          desc: "Reach everyone through email, WhatsApp, and SMS. Automated notifications keep everyone informed.",
          detail: "Email + WhatsApp + SMS • Automated notifications • Broadcast tools"
        },
        { 
          icon: <Shield className="h-6 w-6" />, 
          title: "Log & Track", 
          desc: "Complete conversation history stored for accountability. Every communication is tracked and searchable.",
          detail: "Conversation logs • Searchable history • Accountability"
        },
      ],
      "analytics-reports": [
        { 
          icon: <BarChart className="h-6 w-6" />, 
          title: "Visualize & Understand", 
          desc: "Comprehensive dashboards transform complex data into actionable insights. See what matters at a glance.",
          detail: "Interactive dashboards • Data visualization • Actionable insights"
        },
        { 
          icon: <TrendingUp className="h-6 w-6" />, 
          title: "Monitor & Alert", 
          desc: "Early warning systems detect issues before they become problems. Proactive intervention drives success.",
          detail: "Early warnings • Proactive alerts • Risk detection"
        },
        { 
          icon: <Award className="h-6 w-6" />, 
          title: "Report & Improve", 
          desc: "Automated reports delivered daily, weekly, and monthly. Data-driven improvement is built into the workflow.",
          detail: "Automated reports • Performance improvement • Data-driven decisions"
        },
      ],
      "security-compliance": [
        { 
          icon: <Shield className="h-6 w-6" />, 
          title: "Protect & Secure", 
          desc: "Enterprise-grade security with SSO, MFA, and advanced encryption. Student data and payments are always protected.",
          detail: "SSO + MFA • Advanced encryption • Data protection"
        },
        { 
          icon: <Settings className="h-6 w-6" />, 
          title: "Control & Manage", 
          desc: "Granular access controls, session management, and geo-based restrictions ensure appropriate access.",
          detail: "Access control • Session management • Geo-restrictions"
        },
        { 
          icon: <Clock className="h-6 w-6" />, 
          title: "Comply & Monitor", 
          desc: "Automatic deactivation of dormant accounts, compliance monitoring, and audit trails for complete accountability.",
          detail: "Auto-deactivation • Compliance monitoring • Audit trails"
        },
      ],
    };
    return workflows[slug] || workflows["student-portal"];
  };

  const workflowSteps = getWorkflowSteps(feature.slug);

  return (
    <main className="bg-gradient-to-b from-sky1/70 via-white to-sky1/50">
      <Navbar />

      {/* BANNER */}
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

      {/* OVERVIEW + NUMBERS */}
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
<section className="px-4 py-8 md:py-14">
  <div className="mx-auto max-w-6xl">
    <Reveal className="mb-10 text-center">
      <div className="flex items-center justify-center gap-3">
        <span className="grid h-12 w-12 place-items-center rounded-xl bg-iris/10 text-iris">
          <Info className="h-6 w-6" />
        </span>
        <h2 className="font-display text-3xl tracking-tight text-ink md:text-4xl">
          How It Works
        </h2>
      </div>
      <p className="mt-3 text-[16px] text-slate2 max-w-2xl mx-auto">
        A complete workflow designed to transform your educational operations
      </p>
    </Reveal>

    {/* Main Image Frame */}
    <Reveal delay={60} className="group">
      <div className="overflow-hidden rounded-3xl border border-ink/10 bg-white shadow-lift transition duration-500 hover:shadow-soft motion-safe:hover:-translate-y-2">
        
        {/* Image Container - Fixed height for consistency */}
        <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden ">
          {/* Use img tag for better SVG support */}
          <img
            src={workflowImages.step1 || feature.image}
            alt={`${feature.title} workflow`}
            className="w-full h-full object-cover"
            style={{ 
              objectPosition: 'center',
              display: 'block'
            }}
          />
          
          {/* Gradient overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-transparent" />
          
          {/* Main visual content overlay - positioned at bottom */}
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 z-10">
            <div className="flex items-end justify-between flex-wrap gap-4">
              <div>
                <span className="text-4xl md:text-5xl mb-2 block opacity-90">{feature.icon}</span>
                <h3 className="font-display font-onest text-2xl md:text-3xl text-white font-semibold drop-shadow-lg">
                  {feature.title}
                </h3>
                <p className="mt-1 text-base md:text-lg text-white/90 max-w-2xl drop-shadow-lg">
                  {feature.tagline}
                </p>
              </div>
              <span className="flex items-center gap-2 text-xs bg-white/20 backdrop-blur-sm px-3 py-1.5 rounded-full text-white">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-green-400 animate-pulse" />
                Live Demo
              </span>
            </div>
          </div>
        </div>

        {/* Content - How It Works Details */}
        <div className="p-6 md:p-10">
          <div className="grid gap-8 md:grid-cols-3">
            {workflowSteps.map((step, idx) => (
              <div key={idx} className="relative">
                <div className="flex flex-col items-start">
                  {/* Step Number */}
                  <div className="flex items-center gap-3 mb-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-iris/10 text-iris text-sm font-bold">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    <div className="h-px flex-1 bg-ink/10" />
                  </div>
                  
                  {/* Icon and Title */}
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-iris/10 text-iris">
                      {step.icon}
                    </div>
                    <div>
                      <h4 className="font-display text-lg font-medium text-ink">
                        {step.title}
                      </h4>
                      <p className="mt-2 text-sm leading-relaxed text-slate2">
                        {step.desc}
                      </p>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {step.detail.split(" • ").map((item, i) => (
                          <span key={i} className="inline-flex items-center gap-1 text-xs text-iris/70">
                            <span className="inline-block h-1 w-1 rounded-full bg-iris/30" />
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Arrow between steps */}
                {idx < workflowSteps.length - 1 && (
                  <div className="hidden md:block absolute -right-4 top-1/2 -translate-y-1/2">
                    <div className="h-8 w-8 rounded-full border border-ink/10 bg-white flex items-center justify-center text-slate2/40">
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Divider */}
          <div className="my-8 h-px bg-gradient-to-r from-transparent via-ink/10 to-transparent" />

          {/* Bottom CTA */}
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100 text-green-600">
                <Check className="h-5 w-5" />
              </span>
              <div>
                <p className="text-sm font-medium text-ink">Ready to transform your institution?</p>
                <p className="text-xs text-slate2">See how {feature.title} can work for you</p>
              </div>
            </div>
            <Link
              href="/book-demo"
              className="group inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-[14px] font-semibold text-white transition hover:bg-iris motion-safe:hover:-translate-y-0.5"
            >
              Request a live demo
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>
      </div>
    </Reveal>
  </div>
</section>

      {/* CAPABILITIES */}
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



      {/* NEXT MODULE */}
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