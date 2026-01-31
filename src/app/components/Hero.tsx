"use client";

import { Playfair_Display, Inter } from "next/font/google";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import BackgroundOverlay from "./BackgroundOverlay";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export default function Hero() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    console.log("Home page mounted - Theme:", theme);
  }, []);

  if (!mounted) {
    return (
      <section className="h-screen bg-gray-100 dark:bg-gray-900 animate-pulse" />
    );
  }

  return (
    <section
      className={`relative min-h-screen flex items-center pt-32 overflow-hidden transition-all duration-1000 ${theme === "dark" ? "bg-background" : "bg-slate-50"
        }`}
    >
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] rounded-full bg-secondary/10 blur-[120px] animate-pulse"></div>
        <div className="absolute top-[20%] right-[5%] w-[30%] h-[30%] rounded-full bg-primary/5 blur-[100px]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full text-center">

        {/* Centered Content */}
        <div className="flex flex-col items-center justify-center animate-in fade-in zoom-in duration-1000 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-secondary/30 bg-secondary/10 text-secondary mb-8 backdrop-blur-md">
            <span className="w-2 h-2 bg-secondary rounded-full animate-ping"></span>
            <span className={`${inter.className} text-xs font-bold uppercase tracking-[0.2em] tech-tracking`}>
              Stoic Pips Inc. Flagship
            </span>
          </div>

          <h1 className={`${playfair.className} text-4xl md:text-5xl lg:text-6xl font-black leading-relaxed mb-8 tracking-tight`}>
            <span className={theme === "dark" ? "text-white" : "text-gray-900"}>
              The Intersection of <br />
            </span>
            <span className="text-gradient-emerald-gold">
              Ancient Wisdom <br />
            </span>
            <span className={theme === "dark" ? "text-white" : "text-gray-900"}>
              & Automated Execution.
            </span>
          </h1>

          <p className={`${inter.className} text-lg md:text-xl max-w-3xl mb-12 leading-relaxed opacity-80 tech-tracking ${theme === "dark" ? "text-slate-300" : "text-gray-600"
            }`}>
            Positioning <span className="text-secondary font-bold italic">Dunam AI</span> as the apex of trading technology, harmonized with the discipline of Stoic philosophy.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center w-full sm:w-auto">
            <a
              href="https://app.stoicpips.com"
              className={`group px-10 py-5 rounded-2xl font-black text-matte-charcoal text-center transition-all duration-500 hover:scale-105 active:scale-95 text-xs uppercase tracking-[0.2em] tech-tracking ${theme === "dark"
                ? "bg-primary shadow-[0_0_20px_rgba(197,160,89,0.3)] hover:shadow-primary/50"
                : "bg-primary shadow-xl"
                }`}
            >
              Launch Dunam AI
            </a>

            <a
              href="#academy"
              className="group px-10 py-5 rounded-2xl font-bold border-2 border-primary/40 text-primary backdrop-blur-md text-center transition-all duration-500 hover:bg-primary/10 active:scale-95 uppercase tracking-[0.2em] tech-tracking text-xs"
            >
              Enter the Academy
            </a>
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-3 gap-12 mt-16 pt-8 border-t border-secondary/10 w-full sm:w-auto overflow-hidden">
            <div>
              <p className="text-2xl font-black text-primary">2K+</p>
              <p className="text-[10px] font-black uppercase tracking-[0.2em] tech-tracking opacity-60">Members</p>
            </div>
            <div>
              <p className="text-2xl font-black text-secondary">92%</p>
              <p className="text-[10px] font-black uppercase tracking-[0.2em] tech-tracking opacity-60">Success Rate</p>
            </div>
            <div>
              <p className="text-2xl font-black text-primary">24/7</p>
              <p className="text-[10px] font-black uppercase tracking-[0.2em] tech-tracking opacity-60">AI Support</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
