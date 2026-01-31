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
import Loading from "@/app/loading";
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
    return <Loading />;
  }

  return (
    <Layout>
      <Hero />

      <AboutSection />

      <ThreePillars />

      <StoicEdge />

      {/* Academy Dedicated Section */}
      <section id="academy" className="scroll-mt-20 bg-background">
        <div className="py-32">
          <div className="max-w-7xl mx-auto px-6 text-center mb-24">
            <div className={`inline-flex items-center gap-3 px-4 py-2 rounded-full border mb-8 ${theme === "dark" ? "border-white/10 glass-pill text-[#708090]" : "border-slate-200 text-[#708090]"}`}>
              <span className="text-[10px] font-black uppercase tracking-[0.2em] tech-tracking">Knowledge Institution</span>
            </div>

            <h2 className={`${playfair.className} text-4xl md:text-5xl lg:text-6xl font-black mb-8 ${theme === "dark" ? "text-white" : "text-gray-900"}`}>
              The Stoic <span className="text-gradient-emerald-gold italic">Academy.</span>
            </h2>

            <p className={`tech-tracking uppercase text-[10px] font-black tracking-[0.3em] ${theme === "dark" ? "text-[#C5A059]" : "text-[#C5A059]"}`}>
              Legacy Education & Mentorship
            </p>
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
