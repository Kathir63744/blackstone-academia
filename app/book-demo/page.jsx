import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DemoBooking from "@/components/DemoBooking";
import PageHero from "@/components/PageHero";
import Testimonials from "@/components/Testimonials";

export const metadata = {
  title: "Book a Demo — Blackstone Academia",
  description:
    "Book a free 30-minute live walkthrough of Blackstone Academia, tailored to your academy.",
};

export default function BookDemoPage() {
  return (
    <main>
      <Navbar />
      <PageHero
        eyebrow="Free live demo"
        title="Let's walk through it together"
        subtitle="Pick a slot below. Your request goes straight to our admin team and we'll confirm by email."
      />
      <DemoBooking />
      <Testimonials />
      <Footer />
    </main>
  );
}