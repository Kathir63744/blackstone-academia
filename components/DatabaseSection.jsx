import { 
  ServerStackIcon,
  BoltIcon,
  ClockIcon,
  ShieldCheckIcon,
  CpuChipIcon,
  ArrowPathIcon,
  DocumentDuplicateIcon,
  GlobeAltIcon,
  CheckBadgeIcon,
  ChartBarIcon,
  LockClosedIcon,
  CloudArrowUpIcon,
  CircleStackIcon,
  RocketLaunchIcon,
  ScaleIcon
} from '@heroicons/react/24/outline';

const ACCENT = "#6E93E0";

const RedisDatabaseSection = () => {
  const features = [
    {
      icon: <BoltIcon className="h-6 w-6" />,
      tag: "Lightning fast",
      title: "Real-Time Slot Booking",
      description: "Atomic operations ensure zero double-booking, even under high concurrent student traffic.",
    },
    {
      icon: <ArrowPathIcon className="h-6 w-6" />,
      tag: "Always consistent",
      title: "Instant Data Sync",
      description: "Redis-powered resolvers fetch hot data instantly with automatic fallback to primary database.",
    },
    {
      icon: <ClockIcon className="h-6 w-6" />,
      tag: "Near real-time",
      title: "Live Session Evaluation",
      description: "Teacher performance and session quality are evaluated immediately after class completion.",
    },
  ];

  const redisAdvantages = [
    {
      icon: <ShieldCheckIcon className="h-5 w-5" />,
      title: "Atomic operations with Lua scripts",
      description: "Safe slot locking and booking without race conditions",
    },
    {
      icon: <DocumentDuplicateIcon className="h-5 w-5" />,
      title: "Deduplication & idempotency",
      description: "Evaluation keys prevent duplicate scoring and processing",
    },
    {
      icon: <CpuChipIcon className="h-5 w-5" />,
      title: "In-memory speed for hot data",
      description: "Sub-millisecond response times for frequently accessed data",
    },
    {
      icon: <GlobeAltIcon className="h-5 w-5" />,
      title: "Session state management",
      description: "Track meeting lifecycle — CREATED, LIVE, ENDED — in Redis",
    },
    {
      icon: <CloudArrowUpIcon className="h-5 w-5" />,
      title: "Auto-expiring temporary locks",
      description: "Prevent deadlocks and ensure smooth booking workflows",
    },
  ];

  const ticker = [
    "Atomic operations",
    "Sub-millisecond speed",
    "Auto-expiring locks",
    "Deduplication",
    "In-memory cache",
    "Session tracking",
    "Idempotent ops",
    "Real-time sync",
  ];

  return (
    <section className="relative overflow-hidden bg-[#f2eee7] py-20 px-6 sm:px-12 lg:px-24 2xl:px-32">
      <div className="relative mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-ink/10 bg-white/70 px-4 mb-6 py-1.5 text-[12px] font-medium uppercase tracking-[0.22em] text-slate2 backdrop-blur">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full  rounded-full bg-sky-500/50" />
              <span className="eyebrow" />
            </span>
           Our Grade Performance — Powered by Redis
          </span>

          <h2 className="text-4xl leading-[1.15] tracking-tight md:text-5xl">
            <span className="text-ink">Redis</span> at the Core.
            <span className="block text-ink">
              Speed Meets Reliability.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-slate-600">
            Our platform uses <span className="font-semibold text-slate-800">Redis</span> to power real-time slot booking, session management, and live evaluations — ensuring zero conflicts and lightning-fast responses.
          </p>
        </div>

        {/* Ticker — Redis claims, on repeat */}
        <div
          className="relative mt-12 overflow-hidden border-y border-orange-200/30 py-3"
          style={{
            maskImage: "linear-gradient(90deg, transparent, #000 12%, #000 88%, transparent)",
            WebkitMaskImage: "linear-gradient(90deg, transparent, #000 12%, #000 88%, transparent)",
          }}
        >
          <div className="redis-ticker flex w-max items-center gap-10 whitespace-nowrap">
            {[...ticker, ...ticker].map((item, i) => (
              <span
                key={i}
                className="flex items-center gap-10 text-[13px] font-medium uppercase tracking-[0.18em] text-slate-500"
              >
                {item}
                <span className="h-1 w-1 rounded-full" style={{ backgroundColor: "#F97316" }} />
              </span>
            ))}
          </div>
        </div>

        {/* Redis Advantage Section - Now contains everything */}
        <div className="mt-14 overflow-hidden rounded-[32px] border border-orange-200/40 bg-white/60 shadow-lift">
          <div className="grid lg:grid-cols-2">
            {/* Left — Why Redis + Feature Cards */}
            <div className="p-8 lg:p-12">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-100/60 ring-1 ring-orange-200/40">
                  <ServerStackIcon className="h-6 w-6 text-orange-600" />
                </div>
                <span className="text-sm font-semibold uppercase tracking-[0.16em] text-orange-600">
                  The Redis Advantage
                </span>
              </div>

              <h3 className="text-3xl font-bold tracking-tight text-slate-800">Why We Use Redis</h3>
              <p className="mt-3 max-w-md text-[15px] leading-relaxed text-slate-600">
                Redis is the in-memory powerhouse that powers real-time booking, session tracking, and evaluations — all with sub-millisecond performance.
              </p>

              {/* Feature Cards now inside the left panel */}
              <div className="mt-8 space-y-4">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="group rounded-2xl border border-sky-200/30  p-5 backdrop-blur-sm transition duration-300 hover:border-sky-200/30 hover:bg-white/20 hover:shadow-soft"
                  >
                    <div className="flex items-start gap-4">
                      <div
                        className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-sky-600 ring-1 ring-sky-200/40 transition-transform duration-300 group-hover:scale-105"
                        
                      >
                        {feature.icon}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3">
                          <h4 className="font-semibold text-slate-800">{feature.title}</h4>
                          <span className="rounded-full border border-orange-200/40  px-2.5 py-0.5 text-[9px] font-semibold uppercase tracking-[0.12em] text-slate-500">
                            {feature.tag}
                          </span>
                        </div>
                        <p className="mt-0.5 text-sm leading-relaxed text-slate-600">{feature.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — Redis Dashboard as Image */}
            <div className="relative flex flex-col items-center justify-center border-t border-orange-200/30 bg-gradient-to-br from-orange-50/60 via-white/80 to-cream-50/60 p-8 lg:border-l lg:border-t-0 lg:p-12">
              <div className="w-full max-w-xl overflow-hidden rounded-2xl border border-orange-200/40 bg-white shadow-xl aspect-square">
  {/* Dashboard Image */}
  <img
    src="/redis6.png"
    alt="Redis Performance Dashboard"
    className="w-full h-full object-cover"
    loading="lazy"
  />
</div>

              <p className="mt-5 flex items-center gap-2 text-center text-xs text-slate-500">
                <RocketLaunchIcon className="h-3.5 w-3.5 text-orange-500" />
                Real-time Redis performance dashboard
              </p>
            </div>
          </div>

          {/* Closing announcement strip */}
          <div className="flex flex-wrap items-center justify-between gap-5 border-t border-orange-200/30 bg-orange-50/40 px-8 py-6 lg:px-12">
            <div className="flex items-center gap-4">
              <div
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-orange-600 ring-1 ring-orange-200/40"
                style={{ backgroundColor: `${ACCENT}18` }}
              >
                <LockClosedIcon className="h-5 w-5" />
              </div>
              <div>
                <p className="font-semibold text-slate-800">
                  Redis ensures every booking, session, and evaluation is processed instantly and reliably.
                </p>
                <p className="mt-0.5 text-sm text-slate-600">
                  Zero conflicts. Sub-millisecond latency. Enterprise-grade performance at scale.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-5 text-slate-600">
              <span className="inline-flex items-center gap-2 text-sm">
                <ChartBarIcon className="h-4 w-4" />
                Real-time
              </span>
              <span className="inline-flex items-center gap-2 text-sm">
                <BoltIcon className="h-4 w-4" />
                Atomic
              </span>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes redisTicker {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        .redis-ticker { animation: redisTicker 30s linear infinite; }
        @media (prefers-reduced-motion: reduce) {
          .redis-ticker { animation: none; }
        }
      `}</style>
    </section>
  );
};

export default RedisDatabaseSection;