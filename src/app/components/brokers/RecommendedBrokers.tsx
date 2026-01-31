"use client";

import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Button from "../button/Button";
import { brokers } from "./brokers";
import { Playfair_Display, Inter } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["700", "900"],
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export default function RecommendedBrokers() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <section className="py-24 bg-white dark:bg-gray-800 animate-pulse">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="h-12 bg-gray-300 dark:bg-gray-700 rounded w-1/3 mx-auto mb-4"></div>
            <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-1/2 mx-auto"></div>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="h-80 bg-gray-300 dark:bg-gray-700 rounded-3xl"></div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  const sectionBg = theme === "dark" 
    ? "bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900" 
    : "bg-gradient-to-br from-white via-blue-50/20 to-purple-50/10";
  
  const headingColor = theme === "dark" ? "text-white" : "text-gray-900";
  const textColor = theme === "dark" ? "text-gray-300" : "text-gray-600";
  const cardBg = theme === "dark" 
    ? "bg-gray-800/50 backdrop-blur-sm" 
    : "bg-white/80 backdrop-blur-sm";
  const borderColor = theme === "dark" 
    ? "border-gray-700 hover:border-purple-500/50" 
    : "border-gray-200 hover:border-blue-500/50";
  const bgImage = theme === "dark" ? "/world_light.svg" : "/world_dark.svg";

  return (
    <section
      id="brokers"
      className={`relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden transition-all duration-700 ${sectionBg}`}
    >
      {/* Background Elements */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-[0.15] pointer-events-none transition-all duration-500"
        style={{ backgroundImage: `url(${bgImage})` }}
      />
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className={`absolute top-1/4 -left-20 w-80 h-80 rounded-full blur-3xl opacity-10 ${
          theme === "dark" ? "bg-purple-500" : "bg-blue-400"
        }`} />
        <div className={`absolute bottom-1/4 -right-20 w-96 h-96 rounded-full blur-3xl opacity-10 ${
          theme === "dark" ? "bg-pink-500" : "bg-purple-400"
        }`} />
      </div>

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
            <span className={`text-sm font-medium ${inter.className}`}>Trusted Partners</span>
          </div>

          {/* Main Heading */}
          <h2 className={`${playfair.className} text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight ${headingColor}`}>
            Recommended{" "}
            <span className={`bg-clip-text text-transparent bg-gradient-to-r ${
              theme === "dark"
                ? "from-purple-400 via-pink-400 to-red-400"
                : "from-blue-600 via-purple-600 to-pink-600"
            }`}>
              Brokers
            </span>
          </h2>

          {/* Subheading */}
          <p className={`max-w-2xl mx-auto text-lg md:text-xl leading-relaxed ${textColor} ${inter.className}`}>
            We personally vet and trade with these trusted brokers. Start with confidence 
            using platforms we know and recommend for optimal trading performance.
          </p>
        </div>

        {/* Brokers Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {brokers.map((broker, index) => (
            <div
              key={broker.name}
              className={`group relative rounded-3xl ${cardBg} backdrop-blur-sm border-2 ${borderColor} 
                         shadow-lg hover:shadow-2xl transform transition-all duration-500 hover:-translate-y-2 
                         flex flex-col items-center overflow-hidden p-8 text-center h-full`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Broker Logo */}
              {broker.image && (
                <div className="relative w-20 h-20 mb-6 rounded-2xl overflow-hidden shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                  <Image
                    src={broker.image}
                    alt={broker.name}
                    fill
                    className="object-cover transform group-hover:scale-105 transition-transform duration-300"
                    sizes="80px"
                  />
                </div>
              )}

              {/* Broker Name */}
              <h3 className={`text-2xl font-bold mb-3 ${headingColor}`}>
                {broker.name}
              </h3>

              {/* Description */}
              <p className={`mb-6 leading-relaxed flex-grow ${textColor} ${inter.className}`}>
                {broker.description}
              </p>

              {/* Features */}
              {broker.features && (
                <div className="w-full mb-6 space-y-2">
                  {broker.features.slice(0, 3).map((feature, i) => (
                    <div key={i} className={`text-sm ${textColor} flex items-center justify-center gap-2`}>
                      <span className={`w-1.5 h-1.5 rounded-full ${
                        theme === "dark" ? "bg-purple-400" : "bg-blue-500"
                      }`} />
                      {feature}
                    </div>
                  ))}
                </div>
              )}

              {/* Rating */}
              {broker.rating && (
                <div className="flex items-center justify-center gap-2 mb-6">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-sm">
                        {i < Math.floor(broker.rating) ? "★" : "☆"}
                      </span>
                    ))}
                  </div>
                  <span className={`text-sm ${textColor}`}>({broker.rating})</span>
                </div>
              )}

              {/* CTA Button */}
              <a
                href={broker.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full"
              >
                <Button 
                  className="w-full group-hover:shadow-lg transition-all duration-300"
                >
                  Create Account
                  <span className="ml-2 transform group-hover:translate-x-1 transition-transform duration-200">→</span>
                </Button>
              </a>

              {/* Hover Effect Background */}
              <div className={`absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                theme === "dark"
                  ? "bg-gradient-to-br from-purple-500/5 to-pink-500/5"
                  : "bg-gradient-to-br from-blue-500/5 to-purple-500/5"
              }`} />
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <div className="text-center mt-12">
          <p className={`text-sm ${textColor} italic ${inter.className}`}>
            All brokers are regulated and personally tested by our trading team
          </p>
        </div>
      </div>
    </section>
  );
}