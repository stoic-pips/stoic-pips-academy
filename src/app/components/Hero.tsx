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

  const gradientText = theme === "dark" 
    ? "bg-gradient-to-r from-purple-400 via-pink-400 to-red-400"
    : "bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600";

  const buttonGradient = theme === "dark"
    ? "bg-gradient-to-r from-purple-500 to-pink-500"
    : "bg-gradient-to-r from-blue-500 to-purple-600";

  const secondaryButton = theme === "dark"
    ? "border-purple-400 text-purple-300 hover:bg-purple-500/20"
    : "border-blue-500 text-blue-600 hover:bg-blue-500/20";

  return (
    <section 
  style={{ paddingTop: 'var(--navbar-height, 80px)' }}
  className={`relative min-h-screen flex items-center justify-center overflow-hidden transition-all duration-700 ${
      theme === "dark" 
        ? "bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900" 
        : "bg-gradient-to-br from-white via-blue-50 to-purple-50"
    }`}>
      
      <BackgroundOverlay />
      
      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8 xl:px-12 flex flex-col items-center text-center">
        
        {/* Badge
        <div className={`mb-8 px-4 py-2 rounded-full border backdrop-blur-sm transition-all duration-500 ${
          theme === "dark" 
            ? "border-purple-500/30 bg-purple-500/10 text-purple-200" 
            : "border-blue-500/30 bg-blue-500/10 text-blue-700"
        }`}>
          <span className={`${inter.className} text-sm font-medium tracking-wide`}>
            🚀 Premium Trading Education
          </span>
        </div> */}

        {/* Main Heading */}
        <div className="space-y-4 mb-8">
          <h1 className={`${playfair.className} text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight md:leading-tight lg:leading-tight`}>
            <span className={`block bg-clip-text text-transparent ${gradientText}`}>
              Master Trading
            </span>
            <span className={`block ${theme === "dark" ? "text-white" : "text-gray-900"} mt-2`}>
              with Precision
            </span>
          </h1>
        </div>

        {/* Subheading */}
        <p className={`${inter.className} text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto mb-10 leading-relaxed ${
          theme === "dark" ? "text-gray-300" : "text-gray-700"
        }`}>
          Learn professional price action, supply & demand, and institutional trading 
          strategies with <span className={`font-bold ${gradientText} bg-clip-text text-transparent`}>Stoic Pips Academy</span>.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-16">
          <a
            href="/mentorship"
            className={`group relative px-8 py-4 rounded-2xl font-semibold text-white shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-2xl ${buttonGradient}`}
          >
            Start Your Journey
          </a>

          <a
            href="/courses"
            className={`group px-8 py-4 rounded-2xl font-semibold border-2 backdrop-blur-sm transition-all duration-300 hover:scale-105 ${secondaryButton}`}
          >
            Explore Courses
          </a>
        </div>
      </div>
    </section>
  );
}