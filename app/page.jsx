import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import About from "@/components/About";
import Features from "@/components/Features";
import Customization from "@/components/Customization";
import HowItWorks from "@/components/HowItWorks";
import Integrations from "@/components/Integrations";
import Testimonials from "@/components/Testimonials";
import DemoBooking from "@/components/DemoBooking";
import Footer from "@/components/Footer";
import Plans from "@/components/Plans";
import JitsiFeatureSection from "@/components/JitsiFeatureSection";
import Link from "next/link";


export default function Home() {

  
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Features />
      <Customization />
      <HowItWorks />
      <Integrations />
     <JitsiFeatureSection />
      <Testimonials />
    
      <section className="px-4 py-10 md:py-14">
        <div className="mx-auto max-w-7xl rounded-2xl bg-step-fade p-6 text-center shadow-soft md:p-10 lg:p-14">
          <h2 
            className="text-2xl leading-[1.15] tracking-tight md:text-3xl lg:text-4xl"
            style={{ fontFamily: "'Onest', sans-serif", fontWeight: 400 }}
          >
            See it working in 30 minutes
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-sm text-slate2 md:mt-4 md:text-[15px] lg:text-base">
            Book a live walkthrough and we&apos;ll map the platform to how your
            academy runs today.
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
