"use client";

import { useTheme } from "next-themes";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import Button from "../button/Button";
import { services } from "@/data/services";
import { Playfair_Display, Inter } from "next/font/google";
import { Service } from "./Service";
import ServiceCard from "./card/ServicePricingCard";
import Carousel from "./Carousel/Carousel";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["700", "900"],
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export default function PricingServices() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const currentTheme = mounted ? (theme || 'light') : 'light';

  const sectionBg = currentTheme === "dark"
    ? "bg-transparent"
    : "bg-gradient-to-br from-white via-indigo-50 to-cyan-50";

  const gradientText = currentTheme === "dark"
    ? "bg-gradient-to-r from-emerald-400 via-teal-400 to-amber-500"
    : "bg-gradient-to-r from-emerald-600 via-teal-700 to-amber-600";

  const buttonGradient = currentTheme === "dark"
    ? "bg-gradient-to-r from-cyan-500 to-blue-600"
    : "bg-gradient-to-r from-blue-600 to-indigo-600";

  const servicesArray: Service[] = Object.entries(services).map(([id, service]) => ({
    id,
    ...service,
  }));

  if (!mounted) {
    return (
      <section className="min-h-screen flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto w-full">
          <div className="text-center mb-20">
            <div className="h-12 bg-gray-200 dark:bg-gray-700 rounded-2xl max-w-md mx-auto mb-6 animate-pulse"></div>
            <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded-xl max-w-2xl mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-0 rounded-2xl overflow-hidden border-2 border-gray-300 dark:border-gray-600">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="bg-white/80 dark:bg-gray-800/80 p-8 border-r-2 border-gray-300 dark:border-gray-600 last:border-r-0 animate-pulse">
                <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded-lg w-3/4 mx-auto mb-4"></div>
                <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-full mb-6"></div>
                <div className="h-12 bg-gray-200 dark:bg-gray-700 rounded-xl w-1/2 mx-auto mb-8"></div>
                <div className="space-y-3">
                  {[1, 2, 3, 4, 5].map((j) => (
                    <div key={j} className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-gray-200 dark:bg-gray-700 rounded-full"></div>
                      <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded flex-1"></div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <div id="pricing" className="relative py-12 px-6 overflow-hidden">

      {/* Atmospheric Glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[20%] right-0 w-[600px] h-[600px] bg-[#708090]/5 blur-[150px] rounded-full"></div>
        <div className="absolute bottom-[10%] left-0 w-[400px] h-[400px] bg-[#C5A059]/5 blur-[120px] rounded-full"></div>
      </div>

      <div className="relative max-w-7xl mx-auto w-full z-10">
        {/* Header Section */}
        <div className="text-center mb-24">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-white/10 glass-pill text-[#C5A059] mb-8">
            <span className="text-sm font-black uppercase tracking-[0.2em] tech-tracking">Institutional Access</span>
          </div>

          <h2 className={`${playfair.className} text-3xl md:text-4xl lg:text-5xl font-black mb-8 leading-tight ${currentTheme === "dark" ? "text-white" : "text-gray-900"}`}>
            Secure Your <br />
            <span className="text-gradient-emerald-gold italic">Legacy.</span>
          </h2>

          <p className={`max-w-3xl mx-auto text-xl leading-relaxed opacity-70 ${inter.className}`}>
            Choose the membership tier that aligns with your professional ambitions. All plans include full <span className="text-white font-bold">Dunam Ai</span> synchronization.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative -mx-6 lg:mx-0">
          <Carousel className="pb-12">
            {servicesArray.map((service) => (
              <div key={service.id} className="snap-start flex-shrink-0">
                <ServiceCard
                  service={service}
                  isHovered={hoveredCard === service.id}
                  onHover={setHoveredCard}
                  theme={currentTheme}
                />
              </div>
            ))}
          </Carousel>
        </div>

        {/* Trust & Verification */}
        <div className="text-center mt-20">
          <div className="inline-flex items-center gap-8 py-6 px-12 glass-pill rounded-full border-white/5">
            <div className="flex flex-col">
              <span className="text-xs uppercase tracking-[0.2em] opacity-40 font-black tech-tracking">Secure Checkout</span>
              <span className="text-sm font-bold">Encrypted via Blockchain & Stripe</span>
            </div>
            <div className="w-px h-8 bg-white/10"></div>
            <div className="flex flex-col">
              <span className="text-xs uppercase tracking-[0.2em] opacity-40 font-black tech-tracking">Satisfaction</span>
              <span className="text-sm font-bold">98% Retention Rate</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}