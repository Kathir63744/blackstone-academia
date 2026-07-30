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
  PresentationChartBarIcon
} from '@heroicons/react/24/outline';

const JitsiFeatureSection = () => {
  const features = [
    {
      icon: <VideoCameraIcon className="h-6 w-6" />,
      title: "Unlimited Class Duration",
      description: "No hour limits — never run short of hours mid-lesson. Teach and learn without boundaries.",
    },
    {
      icon: <NoSymbolIcon className="h-6 w-6" />,
      title: "Zero Class Interruptions",
      description: "Sessions run end to end, with no cutoffs or drops. Seamless learning experience.",
    },
    {
      icon: <CpuChipIcon className="h-6 w-6" />,
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

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-sky-100/50 via-white/70 to-cream-100/50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-white/80 bg-white/70 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-slate2 shadow-lift backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-[#6E93E0]" />
            Our Flagship Feature — Built on Jitsi
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            Unlimited Live Classes.
            <span className="block text-slate-900">Zero Interruptions.</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            The highlight of our product — an in-house live video application, engineered by our own developers on Jitsi.
          </p>
        </div>

        {/* Main Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-sky-100/90 via-white/90 to-cream-100/90 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-sky-200/50 hover:border-sky-300/70"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-sky-200/80 to-cream-200/80 rounded-xl flex items-center justify-center text-sky-600 mb-6 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-3">
                {feature.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Jitsi Advantage Section */}
        <div className="bg-gradient-to-br from-sky-100/90 via-white/90 to-cream-100/90 rounded-3xl shadow-lg overflow-hidden border border-sky-200/50 mb-16">
          <div className="grid lg:grid-cols-2">
            {/* Left - Jitsi Advantage Content */}
            <div className="p-8 lg:p-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-emerald-100/80 to-green-100/80 rounded-lg flex items-center justify-center">
                  <ShieldCheckIcon className="h-6 w-6 text-emerald-600" />
                </div>
                <span className="text-sm font-semibold text-emerald-600 uppercase tracking-wider">
                  The Jitsi Advantage
                </span>
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-6">
                Why We Chose Jitsi
              </h3>
              <div className="space-y-4">
                {jitsiAdvantages.map((advantage, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 rounded-lg hover:bg-sky-50/70 transition-colors duration-200">
                    <div className="w-6 h-6 text-sky-600 flex-shrink-0 mt-0.5">
                      {advantage.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-800">
                        {advantage.title}
                      </h4>
                      <p className="text-sm text-slate-600">
                        {advantage.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right - App Preview */}
            <div className="bg-gradient-to-br from-sky-50/50 via-white/50 to-cream-50/50 p-8 lg:p-12 flex flex-col justify-center items-center">
              <div className="w-full max-w-sm bg-gradient-to-br from-white/95 to-cream-100/95 rounded-2xl shadow-xl overflow-hidden border border-sky-200/50">
                <div className="bg-gradient-to-r from-sky-100/80 to-cream-100/80 px-4 py-3 flex items-center justify-between border-b border-sky-200/50">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  </div>
                  <span className="text-xs text-slate-500 font-medium">
                    Live Classroom
                  </span>
                </div>
                <div className="p-6">
                  <div className="bg-gradient-to-br from-sky-100/70 to-cream-100/70 rounded-xl p-4 mb-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-gradient-to-br from-sky-400 to-sky-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                          JD
                        </div>
                        <span className="text-sm font-medium text-slate-800">John Doe</span>
                      </div>
                      <span className="text-xs bg-emerald-400 text-white px-2 py-0.5 rounded-full">Live</span>
                    </div>
                    <div className="mt-4 grid grid-cols-3 gap-2">
                      {classroomTools.map((tool, idx) => (
                        <div
                          key={idx}
                          className="bg-white/80 text-xs text-center py-2 rounded-lg text-slate-700 font-medium hover:bg-white transition-colors cursor-default border border-sky-200/30"
                        >
                          {tool}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      <div className="w-6 h-6 bg-slate-200 rounded-full flex items-center justify-center text-xs">
                        👤
                      </div>
                      <span className="text-xs text-slate-500">12 participants</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 bg-red-400 rounded-full"></div>
                      <div className="w-6 h-6 bg-green-400 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-xs text-slate-500 mt-4 text-center">
                Our live classroom app in action
              </p>
            </div>
          </div>
        </div>

        {/* Course Content Preview */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-sky-100/90 via-white/90 to-cream-100/90 rounded-2xl p-8 shadow-lg border border-sky-200/50">
            <h3 className="text-lg font-semibold text-slate-800 mb-4">My Classes</h3>
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-gradient-to-r from-sky-50/70 to-cream-50/70 border border-sky-200/30">
                <h4 className="text-sm font-medium text-slate-700 mb-1">Course Content</h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
              <div className="p-4 rounded-xl bg-gradient-to-r from-sky-50/70 to-cream-50/70 border border-sky-200/30">
                <h4 className="text-sm font-medium text-slate-700 mb-1">To be added</h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-br from-sky-600 via-sky-500 to-cyan-500 rounded-2xl p-8 shadow-lg flex flex-col items-center justify-center text-center text-white">
            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-4">
              <span className="text-3xl">✨</span>
            </div>
            <h3 className="text-xl font-bold mb-2">WPS AI</h3>
            <p className="text-sky-100 max-w-sm">
              AI-powered learning tools integrated into your classroom experience
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JitsiFeatureSection;