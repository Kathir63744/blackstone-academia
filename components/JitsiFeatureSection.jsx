import { 
  VideoCameraIcon, 
  ChatBubbleLeftRightIcon, 
  ShareIcon, 
  ShieldCheckIcon,
  ClockIcon,
  NoSymbolIcon,
  CpuChipIcon,
  ServerIcon,
  GlobeAltIcon,
  UserGroupIcon,
  DevicePhoneMobileIcon,
  PresentationChartBarIcon,
  MicrophoneIcon,
  SparklesIcon,
  LockClosedIcon
} from '@heroicons/react/24/outline';

const ACCENT = "#6E93E0";

const JitsiFeatureSection = () => {
  const features = [
    {
      icon: <ClockIcon className="h-6 w-6" />,
      tag: "No time caps",
      title: "Unlimited Class Duration",
      description: "No hour limits — never run short of hours mid-lesson. Teach and learn without boundaries.",
    },
    {
      icon: <NoSymbolIcon className="h-6 w-6" />,
      tag: "Always on",
      title: "Zero Class Interruptions",
      description: "Sessions run end to end, with no cutoffs or drops. Seamless learning experience.",
    },
    {
      icon: <CpuChipIcon className="h-6 w-6" />,
      tag: "Jitsi core",
      title: "Built In-House on Jitsi",
      description: "Developed by our engineers on secure, open-source Jitsi — video, chat, and screen share fully integrated.",
    },
  ];

  const jitsiAdvantages = [
    {
      icon: <ShieldCheckIcon className="h-5 w-5" />,
      title: "Open-source & security-audited",
      description: "Transparent codebase regularly reviewed for vulnerabilities",
    },
    {
      icon: <ServerIcon className="h-5 w-5" />,
      title: "End-to-end encryption",
      description: "Your conversations stay private and secure",
    },
    {
      icon: <GlobeAltIcon className="h-5 w-5" />,
      title: "Self-hosted — data stays yours",
      description: "Complete control over your data and infrastructure",
    },
    {
      icon: <UserGroupIcon className="h-5 w-5" />,
      title: "No peer-user license fees",
      description: "Scalable without additional per-user costs",
    },
    {
      icon: <DevicePhoneMobileIcon className="h-5 w-5" />,
      title: "Browser-based — no installs",
      description: "Access instantly from any device with a browser",
    },
  ];

  const classroomTools = [
    "Capture",
    "Zoom",
    "Share",
    "Record",
    "Whiteboard",
    "Chat",
    "File",
    "Settings",
  ];

  const ticker = [
    "Unlimited duration",
    "Zero interruptions",
    "Open source",
    "End-to-end encrypted",
    "Self-hosted",
    "No per-user fees",
    "Browser-based",
    "Built in-house on Jitsi",
  ];

  const participants = [
    { initials: "JD", name: "John Doe", speaking: true },
    { initials: "AM", name: "A. Mehta" },
    { initials: "SR", name: "S. Rao" },
    { initials: "KP", name: "K. Patel" },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-sky-50 via-white to-cream-50 py-20 px-6 sm:px-12 lg:px-24 2xl:px-32">
      {/* Ambient field - light and airy */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute -top-32 left-1/4 h-96 w-96 rounded-full blur-[140px]"
          style={{ backgroundColor: ACCENT, opacity: 0.15 }}
        />
        <div className="absolute -bottom-40 right-1/4 h-96 w-96 rounded-full bg-sky-200/20 blur-[140px]" />
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(110,147,224,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(110,147,224,0.08) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
            maskImage: "radial-gradient(ellipse at 50% 0%, #000 40%, transparent 75%)",
            WebkitMaskImage: "radial-gradient(ellipse at 50% 0%, #000 40%, transparent 75%)",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center">
          <span className="mx-auto mb-7 inline-flex items-center gap-2.5 rounded-full border border-sky-200/60 bg-white/80 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.2em] text-slate-600 backdrop-blur shadow-lift">
            <span className="relative flex h-1.5 w-1.5">
              <span
                className="absolute inline-flex h-full w-full  rounded-full"
                style={{ backgroundColor: ACCENT }}
              />
              <span
                className="relative inline-flex h-1.5 w-1.5 rounded-full"
                style={{ backgroundColor: ACCENT }}
              />
            </span>
            Our Flagship Feature — Built on Jitsi
          </span>

          <h2 className="text-4xl leading-[1.15] tracking-tight md:text-5xl">
            Unlimited Live Classes.
            <span
              className="block  text-iris"
              
            >
              Zero Interruptions.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-slate-600">
            The highlight of our product — an in-house live video application, engineered by our own
            developers on <span className="font-semibold text-slate-800">Jitsi</span>.
          </p>
        </div>

        {/* Ticker — the Jitsi claims, on repeat */}
        <div
          className="relative mt-12 overflow-hidden border-y border-sky-200/30 py-3"
          style={{
            maskImage: "linear-gradient(90deg, transparent, #000 12%, #000 88%, transparent)",
            WebkitMaskImage: "linear-gradient(90deg, transparent, #000 12%, #000 88%, transparent)",
          }}
        >
          <div className="jitsi-ticker flex w-max items-center gap-10 whitespace-nowrap">
            {[...ticker, ...ticker].map((item, i) => (
              <span
                key={i}
                className="flex items-center gap-10 text-[13px] font-medium uppercase tracking-[0.18em] text-slate-500"
              >
                {item}
                <span className="h-1 w-1 rounded-full" style={{ backgroundColor: ACCENT }} />
              </span>
            ))}
          </div>
        </div>

        {/* Main Features Grid */}
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-3xl border border-sky-200/40 bg-white/70 p-8 backdrop-blur-sm shadow-lift transition duration-500 hover:border-sky-300/60 hover:bg-white/90 motion-safe:hover:-translate-y-1.5 hover:shadow-soft"
            >
              {/* corner glow on hover */}
              <div
                className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-30"
                style={{ backgroundColor: ACCENT }}
              />

              <div className="relative flex items-start justify-between">
                <div
                  className="flex h-14 w-14 items-center justify-center rounded-2xl text-sky-600 ring-1 ring-sky-200/40 transition-transform duration-500 group-hover:scale-105"
                  style={{ background: `linear-gradient(140deg, ${ACCENT}22, rgba(255,255,255,0.6))` }}
                >
                  {feature.icon}
                </div>
                <span className="rounded-full border border-sky-200/40 bg-white/60 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-500">
                  {feature.tag}
                </span>
              </div>

              <h3 className="relative mt-7 text-xl font-semibold text-slate-800">{feature.title}</h3>
              <p className="relative mt-3 leading-relaxed text-slate-600">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Jitsi Advantage */}
        <div className="mt-8 overflow-hidden rounded-[32px] border border-sky-200/40 bg-white/60 shadow-lift">
          <div className="grid lg:grid-cols-2">
            {/* Left — why Jitsi */}
            <div className="p-8 lg:p-12">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-100/60 ring-1 ring-emerald-200/40">
                  <ShieldCheckIcon className="h-6 w-6 text-emerald-600" />
                </div>
                <span className="text-sm font-semibold uppercase tracking-[0.16em] text-emerald-600">
                  The Jitsi Advantage
                </span>
              </div>

              <h3 className="text-3xl font-bold tracking-tight text-slate-800">Why We Chose Jitsi</h3>
              <p className="mt-3 max-w-md text-[15px] leading-relaxed text-slate-600">
                Jitsi is the open-source backbone every class runs on — and because we deploy it
                ourselves, none of it is rented from a third party.
              </p>

              <div className="mt-8 space-y-2">
                {jitsiAdvantages.map((advantage, index) => (
                  <div
                    key={index}
                    className="group flex items-start gap-4 rounded-2xl border border-transparent p-3.5 transition duration-300 hover:border-sky-200/40 hover:bg-white/50"
                  >
                    <div
                      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl text-sky-600 ring-1 ring-sky-200/40 transition duration-300 group-hover:ring-sky-300/60"
                      style={{ backgroundColor: `${ACCENT}18` }}
                    >
                      {advantage.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-800">{advantage.title}</h4>
                      <p className="mt-0.5 text-sm text-slate-600">{advantage.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — live classroom mockup */}
            <div className="relative flex flex-col items-center justify-center border-t border-sky-200/30 bg-gradient-to-br from-sky-50/60 via-white/80 to-cream-50/60 p-8 lg:border-l lg:border-t-0 lg:p-12">
              <div className="w-full max-w-md overflow-hidden rounded-2xl border border-sky-200/40 bg-white shadow-xl">
                {/* Window chrome */}
                <div className="flex items-center justify-between border-b border-sky-200/30 bg-sky-50/60 px-4 py-3">
                  <div className="flex items-center gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
                    <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
                    <span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />
                  </div>
                  <span className="text-[11px] font-medium tracking-wide text-slate-500">
                    Jitsi · Live Classroom
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-red-100 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-red-600 ring-1 ring-red-200/40">
                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-red-500" />
                    Live
                  </span>
                </div>

                {/* Participant grid */}
                <div className="grid grid-cols-2 gap-1.5 bg-sky-50/40 p-1.5">
                  {participants.map((p) => (
                    <div
                      key={p.initials}
                      className="relative flex aspect-[4/3] items-center justify-center rounded-lg bg-gradient-to-br from-sky-100/60 to-white"
                      style={
                        p.speaking
                          ? { boxShadow: `inset 0 0 0 2px ${ACCENT}` }
                          : undefined
                      }
                    >
                      <span
                        className="flex h-10 w-10 items-center justify-center rounded-full text-xs font-bold text-white"
                        style={{ background: `linear-gradient(140deg, ${ACCENT}, #3B5FA8)` }}
                      >
                        {p.initials}
                      </span>
                      <span className="absolute bottom-1.5 left-2 text-[10px] font-medium text-slate-700">
                        {p.name}
                      </span>
                      {p.speaking && (
                        <MicrophoneIcon
                          className="absolute bottom-1.5 right-2 h-3.5 w-3.5"
                          style={{ color: ACCENT }}
                        />
                      )}
                    </div>
                  ))}
                </div>

                {/* Tool rail */}
                <div className="grid grid-cols-4 gap-1.5 px-3 py-3">
                  {classroomTools.map((tool, idx) => (
                    <div
                      key={idx}
                      className="rounded-lg border border-sky-200/30 bg-white/60 py-1.5 text-center text-[10.5px] font-medium text-slate-600"
                    >
                      {tool}
                    </div>
                  ))}
                </div>

                {/* Control bar */}
                <div className="flex items-center justify-between border-t border-sky-200/30 bg-sky-50/40 px-4 py-3">
                  <span className="inline-flex items-center gap-1.5 text-[11px] text-slate-500">
                    <UserGroupIcon className="h-3.5 w-3.5" />
                    12 participants
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="grid h-7 w-7 place-items-center rounded-full bg-sky-100 text-slate-700">
                      <MicrophoneIcon className="h-3.5 w-3.5" />
                    </span>
                    <span className="grid h-7 w-7 place-items-center rounded-full bg-sky-100 text-slate-700">
                      <VideoCameraIcon className="h-3.5 w-3.5" />
                    </span>
                    <span className="grid h-7 w-7 place-items-center rounded-full bg-sky-100 text-slate-700">
                      <ShareIcon className="h-3.5 w-3.5" />
                    </span>
                    <span className="grid h-7 w-7 place-items-center rounded-full bg-sky-100 text-slate-700">
                      <ChatBubbleLeftRightIcon className="h-3.5 w-3.5" />
                    </span>
                    <span className="grid h-7 w-7 place-items-center rounded-full bg-red-400 text-white">
                      <NoSymbolIcon className="h-3.5 w-3.5" />
                    </span>
                  </div>
                </div>
              </div>

              <p className="mt-5 flex items-center gap-2 text-center text-xs text-slate-500">
                <SparklesIcon className="h-3.5 w-3.5 text-sky-500" />
                Our own Jitsi deployment, running a live class
              </p>
            </div>
          </div>

          {/* Closing announcement strip */}
          <div className="flex flex-wrap items-center justify-between gap-5 border-t border-sky-200/30 bg-sky-50/40 px-8 py-6 lg:px-12">
            <div className="flex items-center gap-4">
              <div
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-sky-600 ring-1 ring-sky-200/40"
                style={{ backgroundColor: `${ACCENT}18` }}
              >
                <LockClosedIcon className="h-5 w-5" />
              </div>
              <div>
                <p className="font-semibold text-slate-800">
                  Every class you run is powered by Jitsi — hosted by us, owned by you.
                </p>
                <p className="mt-0.5 text-sm text-slate-600">
                  No third-party meeting licences. No per-seat billing. No expiry timer.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-5 text-slate-600">
              <span className="inline-flex items-center gap-2 text-sm">
                <PresentationChartBarIcon className="h-4 w-4" />
                Whiteboard
              </span>
              <span className="inline-flex items-center gap-2 text-sm">
                <ClockIcon className="h-4 w-4" />
                Unlimited
              </span>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes jitsiTicker {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        .jitsi-ticker { animation: jitsiTicker 30s linear infinite; }
        @media (prefers-reduced-motion: reduce) {
          .jitsi-ticker { animation: none; }
        }
      `}</style>
    </section>
  );
};

export default JitsiFeatureSection;