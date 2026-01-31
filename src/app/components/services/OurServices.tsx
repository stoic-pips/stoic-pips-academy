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
    ? "bg-gradient-to-r from-emerald-400 via-teal-400 to-amber-500"
    : "bg-gradient-to-r from-emerald-600 via-teal-700 to-amber-600";

  const sectionBg = theme === "dark"
    ? "bg-[#050a14]"
    : "bg-slate-50";

  const buttonGradient = theme === "dark"
    ? "bg-gradient-to-r from-emerald-500 to-teal-600"
    : "bg-gradient-to-r from-emerald-600 to-teal-700";

  return (
    <div id="services" className="relative py-12 px-6 overflow-hidden">

      {/* Mesh Gradient Background */}
      <div className="absolute inset-0 pointer-events-none opacity-50">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#708090]/5 blur-[150px] rounded-full"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-24">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-white/10 glass-pill text-[#708090] mb-8">
            <span className="text-sm font-black uppercase tracking-[0.2em] tech-tracking">Institutional Ecosystem</span>
          </div>

          <h2 className={`${playfair.className} text-3xl md:text-4xl lg:text-5xl font-black mb-8 leading-tight ${theme === "dark" ? "text-white" : "text-gray-900"}`}>
            Engineered for <br />
            <span className="text-gradient-emerald-gold italic">Superiority.</span>
          </h2>

          <p className={`max-w-3xl mx-auto text-xl leading-relaxed opacity-70 ${inter.className}`}>
            Explore the <span className="text-white font-bold">Dunam Ai</span> ecosystem — a seamless integration of high-frequency intelligence and professional methodology.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
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


      </div>
    </div>
  );
}