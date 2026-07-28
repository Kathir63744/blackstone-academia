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

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <StatsBar />
      <About />
      <Features />
      <Customization />
      <HowItWorks />
      <Integrations />
      <Plans />
      <Testimonials />
      <DemoBooking />
      <Footer />
    </main>
  );
}
