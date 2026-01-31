"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import ServiceCard from "./card/ServiceCard";
import { services } from "./services";
import { Playfair_Display, Inter } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["700", "900"],
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export default function OurServices() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const gradientText = theme === "dark" 
    ? "bg-gradient-to-r from-purple-400 via-pink-400 to-red-400"
    : "bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600";

  const sectionBg = theme === "dark" 
    ? "bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900" 
    : "bg-gradient-to-br from-white via-blue-50 to-purple-50";

  const buttonGradient = theme === "dark"
    ? "bg-gradient-to-r from-purple-500 to-pink-500"
    : "bg-gradient-to-r from-blue-500 to-purple-600";

  return (
    <section id="services" className={`relative py-24 px-4 sm:px-6 lg:px-8 ${sectionBg}`}>
      
      <div className="relative max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-20">
          {/* Section Badge */}
          <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border backdrop-blur-sm mb-6 ${
            theme === "dark"
              ? "border-purple-500/30 bg-purple-500/10 text-purple-200"
              : "border-blue-500/30 bg-blue-500/10 text-blue-700"
          }`}>
            <span className="w-2 h-2 bg-current rounded-full animate-pulse"></span>
            <span className={`text-sm font-medium ${inter.className}`}>What We Offer</span>
          </div>

          <h2 className={`${playfair.className} text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight ${
            theme === "dark" ? "text-white" : "text-gray-900"
          }`}>
            Transform Your{" "}
            <span className={`bg-clip-text text-transparent ${gradientText}`}>
              Trading Journey
            </span>
          </h2>

          <p className={`max-w-2xl mx-auto text-lg leading-relaxed ${inter.className} ${
            theme === "dark" ? "text-gray-300" : "text-gray-600"
          }`}>
            Comprehensive trading education designed to take you from beginner to consistently 
            profitable trader with proven strategies and personalized mentorship.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              description={service.description}
              icon={service.icon}
              link={service.link}
              index={index}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className={`inline-flex flex-col sm:flex-row items-center gap-6 p-8 rounded-3xl backdrop-blur-sm border ${
            theme === "dark"
              ? "bg-gray-800/50 border-gray-700"
              : "bg-white/50 border-gray-200"
          }`}>
            <div className="text-left">
              <h3 className={`text-xl font-bold mb-2 ${inter.className} ${
                theme === "dark" ? "text-white" : "text-gray-900"
              }`}>
                Ready to Start Your Trading Success?
              </h3>
              <p className={theme === "dark" ? "text-gray-300" : "text-gray-600"}>
                Join 2,000+ traders who transformed their results with our proven methods.
              </p>
            </div>
            <a
              href="/mentorship"
              className={`px-8 py-3 rounded-2xl font-semibold text-white transition-all duration-300 hover:scale-105 ${buttonGradient}`}
            >
              Get Started Today
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}