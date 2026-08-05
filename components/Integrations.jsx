"use client";

import Reveal from "./Reveal";
import BackgroundAccent from "./BackgroundAccent";
import { 
  Video, 
  CreditCard, 
  MessageSquare, 
  Zap,
  Shield,
  Mail,
  Smartphone,
  ArrowRight
} from "lucide-react";
import { useState } from "react";

// Using reliable CDN for logos
const integrationGroups = [
  { 
    label: "Video", 
    items: ["Zoom", "MS Teams", "Google Meet", "Jitsi"],
    icon: Video,
    color: "from-blue-400 to-blue-600",
    description: "Seamless video conferencing integration for virtual classrooms and meetings.",
    images: [
      "/icons8-zoom.svg",
      "/icons8-microsoft-teams-2019-48.png",
      "/icons8-google-meet.svg",
      "/500px-Logo_Jitsi.svg.webp",
    ]
  },
  { 
    label: "Payments", 
    items: ["Stripe", "PayPal"],
    icon: CreditCard,
    color: "from-green-400 to-green-600",
    description: "Secure payment processing for tuition, fees, and donations.",
    images: [
      "/icons8-stripe.svg",
      "/icons8-paypal.svg",

    ]
  },
  {
    label: "Messaging & files",
    items: ["WhatsApp",  "SharePoint", "OneDrive", "Google Drive"],
    icon: MessageSquare,
    color: "from-purple-400 to-purple-600",
    description: "Collaborative tools for file sharing, communication, and document management.",
    images: [
      "/icons8-whatsapp.svg",
    
      "/icons8-sharepoint (1).svg",
      "/icons8-onedrive (1).svg",
      "/icons8-google-drive.svg",
    ]
  },
];

// Client component for logo images
function LogoImage({ src, alt, className }) {
  const [hasError, setHasError] = useState(false);
  
  if (hasError) {
    return (
      <div className="h-full w-full bg-gradient-to-br from-iris/10 to-indigo-400/10 rounded-lg flex items-center justify-center">
        <span className="text-[10px] font-semibold text-slate2/50">{alt?.charAt(0) || '?'}</span>
      </div>
    );
  }
  
  return (
    <img 
      src={src} 
      alt={alt || "Integration"}
      className={className}
      loading="lazy"
      onError={() => setHasError(true)}
    />
  );
}

// Client component for logo grid items
function LogoGridItem({ img, alt }) {
  return (
    <div 
      className="relative aspect-square overflow-hidden rounded-lg bg-white p-1.5 shadow-sm transition-all duration-300 hover:scale-110 hover:shadow-md"
    >
      <LogoImage 
        src={img} 
        alt={alt} 
        className="h-full w-full object-contain opacity-80 transition-opacity duration-300 group-hover:opacity-100"
      />
    </div>
  );
}

export default function Integrations() {
  return (
    <section className="relative overflow-hidden px-4 py-14 md:py-22">
      <BackgroundAccent variant="diagonal" className="opacity-50" />

      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <Reveal className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-ink/10 bg-white/70 px-4 py-1.5 text-[12px] font-medium uppercase tracking-[0.22em] text-slate2 backdrop-blur">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-iris/70" />
              <span className="eyebrow" />
            </span>
            Integrations
          </span>
          <h2 
            className="mt-3 text-3xl leading-tight tracking-tight md:text-5xl"
            style={{ fontFamily: "'Onest', sans-serif", fontWeight: 500 }}
          >
            Plays well with <span className="text-iris">your</span> stack
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-slate2 md:text-base">
            Connect the tools you already love. Blackstone Academia integrates seamlessly with your favorite platforms.
          </p>
        </Reveal>

        {/* Full Width Integration Cards */}
        <div className="mt-12 space-y-6">
          {integrationGroups.map((group, gi) => {
            const Icon = group.icon;
            
            return (
              <Reveal key={group.label} delay={gi * 120} as="div">
                <div className="group relative overflow-hidden rounded-2xl bg-white/70 p-6 shadow-lg backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-xl">
                  {/* Gradient overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${group.color} opacity-5 transition-opacity duration-500 group-hover:opacity-15`} />
                  
                  <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center gap-6">
                    {/* Left section - Icon and Title */}
                    <div className="flex items-start gap-4 lg:w-1/4">
                      <div className={`rounded-xl bg-gradient-to-r ${group.color} p-3 shadow-lg`}>
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-ink/90">
                          {group.label}
                        </h3>
                        <p className="mt-1 text-sm text-slate2/70">
                          {group.items.length} integrations
                        </p>
                      </div>
                    </div>

                    {/* Middle section - Logo Grid */}
                    <div className="lg:w-2/5">
                      <div className="grid grid-cols-4 gap-2 max-w-xs">
                        {group.images.slice(0, 4).map((img, idx) => (
                          <LogoGridItem 
                            key={idx}
                            img={img}
                            alt={group.items[idx] || "Integration"}
                          />
                        ))}
                      </div>
                    </div>

                    {/* Right section - Description and Tags */}
                    <div className="lg:w-1/3 flex flex-col gap-3">
                      <p className="text-sm text-slate2/80 leading-relaxed">
                        {group.description}
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {group.items.slice(0, 4).map((name, i) => (
                          <span
                            key={name}
                            className="inline-flex items-center gap-1 rounded-full bg-white/60 px-3 py-1 text-xs font-medium text-ink/70 shadow-sm"
                          >
                            <span className="h-1 w-1 rounded-full bg-iris/40" />
                            {name}
                          </span>
                        ))}
                        
                      </div>
                    </div>

                   
                  </div>

                  {/* Subtle border effect */}
                  <div className="absolute inset-0 rounded-2xl border border-white/30 pointer-events-none" />
                </div>
              </Reveal>
            );
          })}
        </div>

{/* Bottom Features - Highlighted Showcase with Sky-Blue to Peach to Black Gradient */}
<Reveal delay={350} className="mt-10">
  <div className="relative overflow-hidden rounded-xl p-6 backdrop-blur-sm shadow-lg shadow-iris/10 border border-white/20 bg-white/50">
    <div className="relative z-10">
      {/* Header */}
      <div className="text-center mb-6">
        <h3 className="mt-2 text-lg font-semibold text-ink">
          Built-in security & communication tools
        </h3>
        <p className="mt-1 text-xs text-slate2/80">
          Everything you need to keep your academy connected and secure
        </p>
      </div>

      {/* Features Grid - All 4 items with same peach color */}
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {/* Item 1 - Peach */}
        <div className="group flex flex-col items-center justify-center gap-1.5 rounded-lg bg-gradient-to-br from-peach-50/80 to-white/50 backdrop-blur p-4 shadow-sm transition-all duration-300 hover:shadow-md hover:shadow-peach-300/30 hover:-translate-y-1 h-full min-h-[110px] border-2 border-peach-200 hover:border-peach-300/50">
          <div className="rounded-full bg-gradient-to-br from-peach-300/40 to-peach-500/30 p-2.5 text-peach-600 transition-all duration-300 group-hover:scale-110 group-hover:shadow-md group-hover:shadow-peach-300/30">
            <Shield className="h-5 w-5" />
          </div>
          <div className="text-center">
            <p className="text-md font-semibold text-ink">SSO Integration</p>
            <p className="text-[14px] text-slate2/70">Google </p>
          </div>
        </div>

        {/* Item 2 - Peach */}
        <div className="group flex flex-col items-center justify-center gap-1.5 rounded-lg bg-gradient-to-br from-peach-50/80 to-white/50 backdrop-blur p-4 shadow-sm transition-all duration-300 hover:shadow-md hover:shadow-peach-300/30 hover:-translate-y-1 h-full min-h-[110px] border-2 border-peach-200 hover:border-peach-300/50">
          <div className="rounded-full bg-gradient-to-br from-peach-300/40 to-peach-500/30 p-2.5 text-peach-600 transition-all duration-300 group-hover:scale-110 group-hover:shadow-md group-hover:shadow-peach-300/30">
            <Mail className="h-5 w-5" />
          </div>
          <div className="text-center">
            <p className="text-md font-semibold text-ink">Email Alerts</p>
            <p className="text-[14px] text-slate2/80">Real-time notifications</p>
          </div>
        </div>

        {/* Item 3 - Peach */}
        <div className="group flex flex-col items-center justify-center gap-1.5 rounded-lg bg-gradient-to-br from-peach-50/80 to-white/50 backdrop-blur p-4 shadow-sm transition-all duration-300 hover:shadow-md hover:shadow-peach-300/30 hover:-translate-y-1 h-full min-h-[110px] border-2 border-peach-200 hover:border-peach-300/50">
          <div className="rounded-full bg-gradient-to-br from-peach-300/40 to-peach-500/30 p-2.5 text-peach-600 transition-all duration-300 group-hover:scale-110 group-hover:shadow-md group-hover:shadow-peach-300/30">
            <Smartphone className="h-5 w-5" />
          </div>
          <div className="text-center">
            <p className="text-md font-semibold text-ink">SMS Alerts</p>
            <p className="text-[14px] text-slate2/80">Instant updates</p>
          </div>
        </div>

        {/* Item 4 - Peach */}
        <div className="group flex flex-col items-center justify-center gap-1.5 rounded-lg bg-gradient-to-br from-peach-50/80 to-white/50 backdrop-blur p-4 shadow-sm transition-all duration-300 hover:shadow-md hover:shadow-peach-300/30 hover:-translate-y-1 h-full min-h-[110px] border-2 border-peach-200 hover:border-peach-300/50">
          <div className="rounded-full bg-gradient-to-br from-peach-300/40 to-peach-500/30 p-2.5 text-peach-600 transition-all duration-300 group-hover:scale-110 group-hover:shadow-md group-hover:shadow-peach-300/30">
            <Zap className="h-5 w-5" />
          </div>
          <div className="text-center">
            <p className="text-md font-semibold text-ink">Security</p>
            <p className="text-[14px] text-slate2/80">End-to-end authentication</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</Reveal>
      </div>
    </section>
  );
}