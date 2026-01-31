"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Playfair_Display, Inter } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["700", "900"],
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export default function AboutSection() {
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

  const cardBg = theme === "dark"
    ? "bg-gray-800/50 border-gray-700"
    : "bg-white/80 border-gray-200";

  return (
    <section id="about" className={`relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden ${sectionBg}`}>
      <div className="relative max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20">
          
          {/* Visual Section */}
          <div className="w-full lg:w-1/2 relative">
            <div className={`relative rounded-3xl p-8 backdrop-blur-sm border-2 ${cardBg}`}>
              {/* Trading Metrics */}
              <div className="space-y-6">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className={theme === "dark" ? "text-purple-300" : "text-blue-600"}>Success Rate</span>
                    <span className="text-sm text-gray-500">95%</span>
                  </div>
                  <div className={`h-2 rounded-full ${theme === "dark" ? "bg-gray-700" : "bg-gray-200"}`}>
                    <div className="h-full rounded-full bg-gradient-to-r from-green-400 to-blue-500 w-11/12"></div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {[
                    { label: "Win Rate", value: "76%", color: "text-green-400" },
                    { label: "Risk/Reward", value: "1:3.2", color: "text-blue-400" },
                    { label: "Consistency", value: "89%", color: "text-purple-400" },
                    { label: "Satisfaction", value: "98%", color: "text-pink-400" }
                  ].map((metric, index) => (
                    <div key={index} className="text-center p-3 rounded-xl bg-gray-900/5 dark:bg-white/5">
                      <div className={`text-xl font-bold ${metric.color}`}>{metric.value}</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">{metric.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="w-full lg:w-1/2 space-y-8">
            {/* Section Badge */}
            <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border backdrop-blur-sm ${
              theme === "dark"
                ? "border-purple-500/30 bg-purple-500/10 text-purple-200"
                : "border-blue-500/30 bg-blue-500/10 text-blue-700"
            }`}>
              <span className="w-2 h-2 bg-current rounded-full animate-pulse"></span>
              <span className={`text-sm font-medium ${inter.className}`}>Our Story</span>
            </div>

            <h2 className={`${playfair.className} text-4xl md:text-5xl lg:text-6xl font-bold leading-tight ${
              theme === "dark" ? "text-white" : "text-gray-900"
            }`}>
              Transforming{" "}
              <span className={`bg-clip-text text-transparent ${gradientText}`}>
                Traders
              </span>{" "}
              Into Masters
            </h2>

            <div className={`space-y-6 text-lg leading-relaxed ${inter.className} ${
              theme === "dark" ? "text-gray-300" : "text-gray-600"
            }`}>
              <p>
                At <span className={theme === "dark" ? "text-purple-300" : "text-blue-600"}>Stoic Pips Academy</span>, 
                we transform beginners into consistently profitable traders through mastery of institutional trading strategies.
              </p>

              <p>
                Founded by <span className={theme === "dark" ? "text-pink-300" : "text-purple-600"}>Daniel</span>, 
                our philosophy centers on discipline, mindset, and strategy for sustainable trading success.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}