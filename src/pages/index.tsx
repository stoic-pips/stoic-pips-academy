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
import NewsletterSection from "@/app/components/NewsletterSection";

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

      <OurServices />

      <PricingServices />

      <RecommendedBrokers />

      <TestimonialsSection />

      <FAQ />

      <ContactCTA />

      <NewsletterSection />
    </Layout>
  );
}
