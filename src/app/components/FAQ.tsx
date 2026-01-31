"use client";

import { useState, useEffect } from "react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/solid";
import { useTheme } from "next-themes";
import { faqs } from "@/data/faq";
import { Playfair_Display, Inter } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["700", "900"],
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch by only rendering after component mounts
  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Use resolvedTheme for more reliable theme detection, fallback to light
  const currentTheme = mounted ? (resolvedTheme || theme || 'light') : 'light';

  const sectionBg = currentTheme === "dark"
    ? "bg-background"
    : "bg-white";

  const headingColor = currentTheme === "dark" ? "text-white" : "text-gray-900";
  const textColor = currentTheme === "dark" ? "text-slate-300" : "text-gray-600";
  const borderColor = currentTheme === "dark" ? "border-white/5" : "border-slate-200";

  return (
    <section id="faq" className={`relative py-32 px-6 overflow-hidden ${sectionBg}`}>

      {/* Atmospheric Glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className={`absolute top-1/2 left-0 w-[500px] h-[500px] ${currentTheme === "dark" ? "bg-[#708090]/5" : "bg-[#708090]/3"} blur-[150px] rounded-full`}></div>
        <div className={`absolute top-1/2 right-0 w-[500px] h-[500px] ${currentTheme === "dark" ? "bg-[#C5A059]/5" : "bg-[#C5A059]/3"} blur-[150px] rounded-full`}></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-24">
          <div className={`inline-flex items-center gap-3 px-4 py-2 rounded-full border glass-pill text-[#708090] mb-8 ${borderColor}`}>
            <span className="text-[10px] font-black uppercase tracking-[0.2em] tech-tracking">Intelligence Base</span>
          </div>

          <h2 className={`${playfair.className} text-4xl md:text-5xl xl:text-6xl font-black mb-8 leading-tight ${headingColor}`}>
            The Stoic <br />
            <span className="text-gradient-emerald-gold italic">Blueprint.</span>
          </h2>

          <p className={`max-w-3xl mx-auto text-xl leading-relaxed opacity-70 ${inter.className}`}>
            Uncover the logic behind the <span className={currentTheme === "dark" ? "text-white font-bold" : "text-gray-900 font-bold"}>Dunam Ai</span> ecosystem and the methodology of Stoic Pips Inc.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="max-w-4xl mx-auto space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={faq.question}
              className={`group transition-all duration-700 ${openIndex === index ? "luminous-card p-[1px] bg-gradient-to-r from-[#C5A059]/30 to-[#708090]/30 shadow-2xl" : `border-b ${borderColor}`
                }`}
            >
              <div className={`${openIndex === index ? (currentTheme === "dark" ? "bg-slate-950/90" : "bg-slate-50") : "bg-transparent"} transition-all duration-700 rounded-[1.8rem]`}>
                <button
                  onClick={() => toggleIndex(index)}
                  className="w-full px-8 py-10 flex justify-between items-center text-left focus:outline-none"
                >
                  <span className={`text-xl md:text-2xl font-black transition-all duration-500 ${openIndex === index ? (currentTheme === "dark" ? "text-white" : "text-gray-900") : `opacity-60 hover:opacity-100 ${headingColor}`
                    }`}>
                    {faq.question}
                  </span>
                  <div className={`w-10 h-10 rounded-full glass-pill flex items-center justify-center transition-all duration-700 border ${openIndex === index ? "rotate-180 bg-[#C5A059] text-[#121212] border-transparent" : `${borderColor} opacity-40 group-hover:opacity-100`
                    }`}>
                    <ChevronDownIcon className="w-5 h-5" />
                  </div>
                </button>

                <div className={`overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] ${openIndex === index ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                  }`}>
                  <div className="px-8 pb-10">
                    <p className={`text-lg leading-relaxed font-medium max-w-3xl border-l-2 border-[#C5A059]/30 pl-8 ${textColor}`}>
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}