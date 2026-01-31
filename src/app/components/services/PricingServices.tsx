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
    ? "bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900" 
    : "bg-gradient-to-br from-white via-blue-50 to-purple-50";

  const gradientText = currentTheme === "dark" 
    ? "bg-gradient-to-r from-purple-400 via-pink-400 to-red-400"
    : "bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600";

  const buttonGradient = currentTheme === "dark"
    ? "bg-gradient-to-r from-purple-500 to-pink-500"
    : "bg-gradient-to-r from-blue-500 to-purple-600";

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
    <section className={`relative min-h-screen flex items-center justify-center py-24 px-4 sm:px-6 lg:px-8 overflow-hidden transition-all duration-700 ${sectionBg}`}>
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className={`absolute top-1/4 -left-20 w-80 h-80 rounded-full blur-3xl opacity-10 ${
          currentTheme === "dark" ? "bg-purple-500" : "bg-blue-400"
        }`} />
        <div className={`absolute bottom-1/4 -right-20 w-96 h-96 rounded-full blur-3xl opacity-10 ${
          currentTheme === "dark" ? "bg-pink-500" : "bg-purple-400"
        }`} />
      </div>

      <div className="relative max-w-7xl mx-auto w-full z-10">
        {/* Header Section */}
        <div className="text-center mb-20">
          {/* Section Badge */}
          <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border backdrop-blur-sm mb-6 ${
            currentTheme === "dark"
              ? "border-purple-500/30 bg-purple-500/10 text-purple-200"
              : "border-blue-500/30 bg-blue-500/10 text-blue-700"
          }`}>
            <span className="w-2 h-2 bg-current rounded-full animate-pulse"></span>
            <span className={`text-sm font-medium ${inter.className}`}>Pricing Plans</span>
          </div>
          
          {/* Main Heading */}
          <h1 className={`${playfair.className} text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight ${
            currentTheme === "dark" ? "text-white" : "text-gray-900"
          }`}>
            Choose Your{" "}
            <span className={`bg-clip-text text-transparent ${gradientText}`}>
              Trading Plan
            </span>
          </h1>
          
          {/* Subheading */}
          <p className={`max-w-2xl mx-auto text-lg md:text-xl leading-relaxed ${inter.className} ${
            currentTheme === "dark" ? "text-gray-300" : "text-gray-600"
          }`}>
            Select the perfect mentorship program to accelerate your trading journey and achieve consistent profitability.
          </p>
        </div>

        {/* Carousel Container */}
        <Carousel className="mb-16">
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

        {/* Trust Badge */}
        <div className="text-center mt-16">
          <div className={`inline-flex flex-col sm:flex-row items-center gap-6 p-8 rounded-3xl backdrop-blur-sm border max-w-2xl mx-auto ${
            currentTheme === "dark"
              ? "bg-gray-800/50 border-gray-700"
              : "bg-white/50 border-gray-200"
          }`}>
            <div className="text-left">
              <h3 className={`text-xl font-bold mb-2 ${inter.className} ${
                currentTheme === "dark" ? "text-white" : "text-gray-900"
              }`}>
                Start Your Trading Transformation Today
              </h3>
              <p className={`${inter.className} ${
                currentTheme === "dark" ? "text-gray-300" : "text-gray-600"
              }`}>
                Join 2,000+ successful traders with our proven mentorship programs.
              </p>
            </div>
            <a
              href="#contact"
              className={`px-8 py-3 rounded-2xl font-semibold text-white transition-all duration-300 hover:scale-105 ${buttonGradient}`}
            >
              Start Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}