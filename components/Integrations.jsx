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
    images: [
      "/icons8-zoom.svg",
      "/icons8-microsoft-teams-2019-48.png",
      "/icons8-google-meet.svg",
      "/500px-Logo_Jitsi.svg.webp",
    ]
  },
  { 
    label: "Payments", 
    items: ["Stripe", "PayPal", "Wise"],
    icon: CreditCard,
    color: "from-green-400 to-green-600",
    images: [
      "/icons8-stripe.svg",
      "/icons8-paypal.svg",
      "/icons8-wise.svg",
    ]
  },
  {
    label: "Messaging & files",
    items: ["WhatsApp", "Office 365", "SharePoint", "OneDrive", "Google Drive"],
    icon: MessageSquare,
    color: "from-purple-400 to-purple-600",
    images: [
      "/icons8-whatsapp.svg",
      "/icons8-office-365.svg",
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
    <section className="relative overflow-hidden px-4 py-16 md:py-24">
      <BackgroundAccent variant="diagonal" className="opacity-50" />

      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <Reveal className="text-center">
          <span className="eyebrow ">
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

        {/* Split View: Left - Logo Showcase with Faded Style */}
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {/* Left Column - Logo Showcase with Faded Style */}
          <Reveal delay={100} className="relative">
            <div className="grid grid-cols-2 gap-3">
              {integrationGroups.map((group, gi) => (
                <Reveal key={group.label} delay={gi * 80} y={20}>
                  <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white/80 to-white/40 p-4 shadow-lg backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-xl">
                    {/* Gradient Overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${group.color} opacity-5 transition-opacity duration-500 group-hover:opacity-15`} />
                    
                    {/* Content */}
                    <div className="relative z-10">
                      <div className={`inline-flex rounded-full bg-gradient-to-r ${group.color} p-1.5`}>
                        <group.icon className="h-4 w-4 text-white" />
                      </div>
                      <p className="mt-2 text-xs font-semibold uppercase tracking-wide text-slate2/80">
                        {group.label}
                      </p>
                      
                      {/* Logo images grid */}
                      <div className="mt-3 grid grid-cols-4 gap-1.5">
                        {group.images.slice(0, 4).map((img, idx) => (
                          <LogoGridItem 
                            key={idx}
                            img={img}
                            alt={group.items[idx] || "Integration"}
                          />
                        ))}
                      </div>
                      
                      <p className="mt-2 text-[10px] font-medium text-slate2/60 truncate">
                        {group.items.slice(0, 4).join(", ")}
                        {group.items.length > 4 && " + more"}
                      </p>
                    </div>
                    
                    {/* Faded border effect */}
                    <div className="absolute inset-0 rounded-2xl border border-white/20 pointer-events-none" />
                  </div>
                </Reveal>
              ))}
            </div>
          </Reveal>

          {/* Right Column - Integration Categories */}
          <div className="space-y-6">
            {integrationGroups.map((group, gi) => {
              const Icon = group.icon;
              
              return (
                <Reveal key={group.label} delay={gi * 110 + 50} as="div">
                  <div className="group rounded-2xl bg-white/70 p-5 shadow-lg backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                    <div className="flex items-center gap-3">
                      <div className={`rounded-full bg-gradient-to-r ${group.color} p-2`}>
                        <Icon className="h-4 w-4 text-white" />
                      </div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-slate2/80">
                        {group.label}
                      </p>
                      <ArrowRight className="ml-auto h-4 w-4 text-slate2/30 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-iris" />
                    </div>
                    
                    <div className="mt-3 flex flex-wrap gap-2">
                      {group.items.map((name, i) => (
                        <Reveal
                          key={name}
                          delay={gi * 110 + i * 40 + 100}
                          y={12}
                          as="span"
                          className="group/item inline-flex items-center gap-1.5 rounded-full border border-ink/5 bg-white/60 px-4 py-1.5 text-xs font-medium text-ink/70 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-iris/20 hover:bg-white hover:text-iris hover:shadow-md"
                        >
                          <span className="h-1.5 w-1.5 rounded-full bg-iris/20 transition-colors duration-300 group-hover/item:bg-iris" />
                          {name}
                        </Reveal>
                      ))}
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>

        {/* Bottom Features */}
        <Reveal delay={350} className="mt-12">
          <div className="rounded-2xl bg-white/60 p-6 backdrop-blur-sm shadow-inner">
            <div className="flex flex-wrap items-center justify-center gap-6">
              <div className="flex items-center gap-2">
                <Shield className="h-4 w-4 text-iris" />
                <span className="text-xs text-slate2">SSO with Google & Apple</span>
              </div>
              <div className="h-6 w-px bg-ink/10" />
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-iris" />
                <span className="text-xs text-slate2">Email notifications</span>
              </div>
              <div className="h-6 w-px bg-ink/10" />
              <div className="flex items-center gap-2">
                <Smartphone className="h-4 w-4 text-iris" />
                <span className="text-xs text-slate2">SMS alerts</span>
              </div>
              <div className="h-6 w-px bg-ink/10" />
              <div className="flex items-center gap-2">
                <Zap className="h-4 w-4 text-iris" />
                <span className="text-xs text-slate2">Two-factor authentication</span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}