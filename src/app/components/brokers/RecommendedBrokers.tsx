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
    ? "bg-[#121212]"
    : "bg-white";

  const headingColor = theme === "dark" ? "text-white" : "text-gray-900";
  const textColor = theme === "dark" ? "text-gray-300" : "text-gray-600";
  const cardBg = theme === "dark"
    ? "bg-[#1B1B1B]/40 backdrop-blur-sm"
    : "bg-white/80 backdrop-blur-sm";
  const borderColor = theme === "dark"
    ? "border-white/5 hover:border-[#C5A059]/30"
    : "border-slate-100 hover:border-[#C5A059]/30";
  const bgImage = theme === "dark" ? "/world_light.svg" : "/world_dark.svg";

  return (
    <section
      id="brokers"
      className={`relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden transition-all duration-700 ${sectionBg}`}
    >
      {/* Background Elements */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-[0.1] pointer-events-none transition-all duration-500"
        style={{ backgroundImage: `url(${bgImage})` }}
      />
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className={`absolute top-1/4 -left-20 w-80 h-80 rounded-full blur-[100px] opacity-10 ${theme === "dark" ? "bg-[#708090]" : "bg-[#708090]/50"
          }`} />
        <div className={`absolute bottom-1/4 -right-20 w-96 h-96 rounded-full blur-[100px] opacity-10 ${theme === "dark" ? "bg-[#C5A059]" : "bg-[#C5A059]/50"
          }`} />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-20">
          {/* Section Badge */}
          <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border backdrop-blur-sm mb-6 ${theme === "dark"
            ? "border-white/10 bg-white/5 text-[#C5A059]"
            : "border-slate-200 bg-slate-50 text-[#C5A059]"
            }`}>
            <span className="w-2 h-2 bg-current rounded-full animate-pulse"></span>
            <span className={`text-xs font-black uppercase tracking-[0.2em] tech-tracking ${inter.className}`}>Trusted Partners</span>
          </div>

          {/* Main Heading */}
          <h2 className={`${playfair.className} text-3xl md:text-4xl lg:text-5xl font-black mb-6 leading-tight ${headingColor}`}>
            Recommended <br />
            <span className="text-gradient-emerald-gold italic">
              Ecosystem Partners.
            </span>
          </h2>

          {/* Subheading */}
          <p className={`max-w-2xl mx-auto text-lg leading-relaxed opacity-70 ${inter.className}`}>
            We personally vet and trade with these trusted brokers. Start with confidence
            using platforms we know and recommend for optimal trading performance.
          </p>
        </div>

        {/* Brokers Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {brokers.map((broker, index) => (
            <div
              key={broker.name}
              className={`group relative rounded-[2rem] ${cardBg} backdrop-blur-sm border border-transparent ${borderColor} 
                         shadow-lg hover:shadow-2xl transform transition-all duration-500 hover:-translate-y-2 
                         flex flex-col items-center overflow-hidden p-10 text-center h-full`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Broker Logo */}
              {broker.image && (
                <div className="relative w-20 h-20 mb-8 rounded-3xl overflow-hidden shadow-xl group-hover:shadow-2xl transition-all duration-500">
                  <Image
                    src={broker.image}
                    alt={broker.name}
                    fill
                    className="object-cover transform group-hover:scale-110 transition-transform duration-1000"
                    sizes="80px"
                  />
                </div>
              )}

              {/* Broker Name */}
              <h3 className={`text-2xl font-black mb-4 ${headingColor} ${playfair.className}`}>
                {broker.name}
              </h3>

              {/* Description */}
              <p className={`mb-8 leading-relaxed flex-grow text-sm opacity-70 ${inter.className}`}>
                {broker.description}
              </p>

              {/* Features */}
              {broker.features && (
                <div className="w-full mb-8 space-y-3">
                  {broker.features.slice(0, 3).map((feature, i) => (
                    <div key={i} className={`text-xs font-bold ${textColor} flex items-center justify-center gap-3`}>
                      <span className={`w-1.5 h-1.5 rounded-full bg-[#C5A059]`} />
                      {feature}
                    </div>
                  ))}
                </div>
              )}

              {/* Rating */}
              {/* Rating */}
              {broker.rating && (
                <div className="flex items-center justify-center gap-2 mb-10">
                  <div className="flex text-[#C5A059]">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-sm">
                        {i < Math.floor(broker.rating) ? "★" : "☆"}
                      </span>
                    ))}
                  </div>
                  <span className={`text-xs font-black tech-tracking opacity-40`}>({broker.rating})</span>
                </div>
              )}

              {/* CTA Button */}
              <a
                href={broker.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full mt-auto"
              >
                <Button
                  className={`w-full py-5 rounded-2xl font-black uppercase tracking-[0.2em] text-[10px] transform active:scale-95 transition-all duration-500 tech-tracking`}
                >
                  Create Account
                  <span className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300 text-lg">→</span>
                </Button>
              </a>

              {/* Hover Effect Background */}
              <div className={`absolute inset-0 rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none ${theme === "dark"
                ? "bg-gradient-to-br from-[#C5A059]/5 to-[#708090]/5"
                : "bg-gradient-to-br from-[#708090]/5 to-[#C5A059]/5"
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