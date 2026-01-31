import Layout from "../app/components/layout/Layout";

import PricingServices from "@/app/components/services/PricingServices";
import FAQ from "@/app/components/FAQ";
import ContactCTA from "@/app/components/ContactCTA";
import RecommendedBrokers from "@/app/components/brokers/RecommendedBrokers";
import Hero from "@/app/components/Hero";
import OurServices from "@/app/components/services/OurServices";
import AboutSection from "@/app/components/AboutSection";
import TestimonialsSection from "@/app/components/testimonials/TestimonialsSection";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import ThreePillars from "@/app/components/ThreePillars";
import StoicEdge from "@/app/components/StoicEdge";
import NewsletterSection from "@/app/components/NewsletterSection";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["700", "900"],
});

export default function Home() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    console.log("Home page mounted - Theme:", theme);
  }, [theme]);

  if (!mounted) {
    return <div>Loading...</div>;
  }

  return (
    <Layout>
      <Hero />

      <AboutSection />

      <ThreePillars />

      <StoicEdge />

      {/* Academy Dedicated Section */}
      <section id="academy" className="scroll-mt-20">
        <div className="bg-slate-900/10 py-20">
          <div className="max-w-7xl mx-auto px-6 text-center mb-16">
            <h2 className={`${playfair.className} text-4xl md:text-5xl font-black mb-4`}>
              The Stoic <span className="text-gradient-emerald-gold italic">Academy.</span>
            </h2>
            <p className="opacity-60 tech-tracking uppercase text-xs font-bold">Legacy Education & Mentorship</p>
          </div>
          <OurServices />
          <PricingServices />
          <TestimonialsSection />
        </div>
      </section>

      <RecommendedBrokers />

      <FAQ />

      <ContactCTA />

      <NewsletterSection />
    </Layout>
  );
}
