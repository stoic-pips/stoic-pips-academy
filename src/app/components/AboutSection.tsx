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
    ? "bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400"
    : "bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500";

  const sectionBg = theme === "dark"
    ? "bg-[#050a14]"
    : "bg-slate-50";

  const cardBg = theme === "dark"
    ? "bg-slate-900/50 border-gray-800"
    : "bg-white/80 border-gray-100";

  return (
    <section id="about" className={`relative py-32 px-6 overflow-hidden bg-background`}>

      {/* Decorative Orbs */}
      <div className={`absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/5 blur-[120px] -z-10 animate-pulse`}></div>
      <div className={`absolute bottom-0 left-0 w-[300px] h-[300px] bg-primary/5 blur-[100px] -z-10`}></div>

      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* Left: The "Insight" Visual */}
          <div className="relative order-2 lg:order-1">
            <div className="luminous-card p-1 lg:p-1.5 bg-gradient-to-br from-primary/20 via-white/5 to-secondary/20">
              <div className={`${theme === "dark" ? "bg-slate-950/90" : "bg-slate-50"} rounded-[1.9rem] p-8 lg:p-12 transition-colors duration-500 border ${theme === "dark" ? "border-transparent" : "border-slate-200"}`}>
                <div className="grid grid-cols-2 gap-8 mb-12">
                  {[
                    { label: "Elite Members", value: "2K+", icon: "👥", color: "text-secondary" },
                    { label: "Win Ratio", value: "76%", icon: "🎯", color: "text-primary" },
                    { label: "AI Accuracy", value: "92%", icon: "🤖", color: "text-secondary" },
                    { label: "Success Stories", value: "500+", icon: "🏆", color: "text-primary" }
                  ].map((stat, i) => (
                    <div key={i} className="group cursor-default">
                      <span className="text-2xl mb-2 block">{stat.icon}</span>
                      <p className={`text-3xl font-black ${stat.color} mb-1 transition-transform group-hover:scale-110`}>{stat.value}</p>
                      <p className={`text-[10px] uppercase tracking-[0.2em] font-black tech-tracking opacity-60 ${theme === "dark" ? "text-white" : "text-secondary"}`}>{stat.label}</p>
                    </div>
                  ))}
                </div>

                {/* Progress Visual */}
                <div className={`space-y-6 pt-8 border-t ${theme === "dark" ? "border-white/10" : "border-slate-200"}`}>
                  <div className={`relative h-1 w-full ${theme === "dark" ? "bg-white/5" : "bg-slate-200"} rounded-full overflow-hidden`}>
                    <div className="absolute top-0 left-0 h-full w-[85%] bg-gradient-to-r from-primary to-secondary animate-pulse"></div>
                  </div>
                  <div className={`flex justify-between items-center text-[10px] uppercase tracking-[0.2em] font-black opacity-50 tech-tracking ${theme === "dark" ? "text-white" : "text-secondary"}`}>
                    <span>Institutional Alignment</span>
                    <span>85% Optimized</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Overlapping Floating Element */}
            <div className="absolute -bottom-10 -right-10 hidden md:block animate-bounce shadow-2xl">
              <div className={`luminous-card p-6 border ${theme === "dark" ? "border-primary/20 bg-primary/5" : "border-slate-200 bg-background"} backdrop-blur-3xl rounded-2xl`}>
                <p className="text-[10px] font-black uppercase tracking-[0.2em] mb-2 text-primary tech-tracking">Master Level</p>
                <p className={`text-sm font-medium italic ${theme === "dark" ? "opacity-80 text-white" : "text-gray-900"}`}>&quot;Consistency is the currency of the professional.&quot;</p>
              </div>
            </div>
          </div>

          {/* Right: The Narrative */}
          <div className="order-1 lg:order-2 space-y-10">
            <div className="space-y-4">
              <div className={`inline-flex items-center gap-3 px-4 py-2 rounded-full border glass-pill text-secondary border-glass-border`}>
                <span className="text-[10px] font-black uppercase tracking-[0.2em] tech-tracking">{mounted ? "Dunam Ai Story" : "..."}</span>
              </div>

              <h2 className={`${playfair.className} text-4xl md:text-5xl font-black leading-tight ${theme === "dark" ? "text-white" : "text-gray-900"}`}>
                Beyond <br />
                <span className="text-gradient-emerald-gold italic">Education.</span>
              </h2>
            </div>

            <div className={`${inter.className} space-y-8 text-lg md:text-xl leading-relaxed opacity-80`}>
              <p className={theme === "dark" ? "text-slate-300" : "text-gray-600"}>
                At <span className={`${theme === "dark" ? "text-white" : "text-gray-900"} font-black`}>Stoic Pips Inc.</span>, we don&apos;t just teach trading; we engineer <span className="text-primary font-black">Emotionless Profitability</span>.
              </p>

              <p className={`border-l-4 border-primary pl-8 italic ${theme === "dark" ? "text-slate-300" : "text-gray-600 font-medium"}`}>
                Our mission is to bridge the gap between retail struggle and institutional mastery through the perfect synergy of human discipline and <span className="text-primary font-black underline decoration-primary/30 underline-offset-8">Dunam Ai</span> intelligence.
              </p>

              <p className={theme === "dark" ? "text-slate-300" : "text-gray-600"}>
                Founded on the principles of Stoicism and precision, we&apos;ve built a sanctuary for traders who are tired of the noise and ready for the results.
              </p>
            </div>

            <div className="pt-8">
              <a href="#pillars" className="inline-flex items-center gap-4 text-primary font-black uppercase tracking-[0.2em] group tech-tracking text-xs">
                <span className="group-hover:mr-2 transition-all">Discover the Ecosystem</span>
                <span className="text-2xl group-hover:translate-x-2 transition-transform">→</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}