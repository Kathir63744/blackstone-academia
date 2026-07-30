"use client";

import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import { ArrowLeft, ArrowRight, Check, Info, Play, Zap, Users, Clock, BarChart, Shield, BookOpen, Target, TrendingUp, Award, Calendar, MessageCircle, FileText, Settings, Globe, Video } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function FeatureDetailClient({
  feature,
  index,
  next,
  relatedModules,
  workflowImages,
  workflowSteps,
  FEATURES
}) {
  // Check if video exists
  const hasVideo = feature.video && feature.video.trim() !== "";

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

      {/* HOW IT WORKS - AUTO-PLAY VIDEO BANNER */}
      <section className="px-4 py-8 md:py-14">
        <div className="mx-auto max-w-6xl">
          <Reveal className="mb-10 text-center">
            <div className="flex items-center justify-center gap-3">
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-iris/10 text-iris">
                <Video className="h-6 w-6" />
              </span>
              <h2 className="font-display text-3xl tracking-tight text-ink md:text-4xl">
                How It Works
              </h2>
            </div>
            <p className="mt-3 text-[16px] text-slate2 max-w-2xl mx-auto">
              Watch a quick overview of how {feature.title} transforms your educational operations
            </p>
          </Reveal>

          <Reveal delay={60} className="group">
            <div className="overflow-hidden rounded-3xl border border-ink/10 bg-white shadow-lift transition duration-500 hover:shadow-soft motion-safe:hover:-translate-y-2">
              
              {/* Video Container - Zoomed out */}
              <div className="relative w-full bg-black overflow-hidden" style={{ aspectRatio: '16/9' }}>
                <div className="absolute inset-0 flex items-center justify-center">
                  {hasVideo ? (
                    // If video exists, show the video player
                    feature.video.endsWith('.mp4') ? (
                      <video
                        src={feature.video}
                        className="w-[110%] h-[110%] object-contain"
                        autoPlay
                        muted
                        loop
                        playsInline
                        controls={false}
                      />
                    ) : (
                      // For YouTube/Vimeo - use iframe with proper sizing
                      <div className="w-[110%] h-[110%] relative">
                        <iframe
                          src={`${feature.video}?autoplay=1&loop=1&playlist=${feature.video.split('/embed/')[1] || ''}&mute=1&controls=0&showinfo=0&rel=0&modestbranding=1`}
                          title={`${feature.title} overview video`}
                          className="absolute inset-0 w-full h-full"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          style={{ 
                            objectFit: 'contain',
                            width: '100%',
                            height: '100%',
                            border: 'none'
                          }}
                        />
                      </div>
                    )
                  ) : (
                    // Fallback: show image if no video
                    <img
                      src={workflowImages.step1 || feature.image}
                      alt={`${feature.title}`}
                      className="w-[110%] h-[110%] object-contain"
                    />
                  )}
                </div>
                
                {/* Gradient overlay for text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-transparent" />
                
                {/* Content overlay on video */}
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
                      {hasVideo ? "Video Demo" : "Coming Soon"}
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
                        <div className="flex items-center gap-3 mb-3">
                          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-iris/10 text-iris text-sm font-bold">
                            {String(idx + 1).padStart(2, "0")}
                          </span>
                          <div className="h-px flex-1 bg-ink/10" />
                        </div>
                        
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

                <div className="my-8 h-px bg-gradient-to-r from-transparent via-ink/10 to-transparent" />

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