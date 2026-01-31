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
    ? "bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900" 
    : "bg-gradient-to-br from-white via-blue-50 to-purple-50";
  
  const headingColor = currentTheme === "dark" ? "text-white" : "text-gray-900";
  const textColor = currentTheme === "dark" ? "text-gray-300" : "text-gray-600";
  const cardBg = currentTheme === "dark" ? "bg-gray-800/50 backdrop-blur-sm" : "bg-white/80 backdrop-blur-sm";
  const hoverBg = currentTheme === "dark" ? "hover:bg-gray-700/30" : "hover:bg-gray-50/80";
  const borderColor = currentTheme === "dark" ? "border-gray-700" : "border-gray-200";
  
  const gradientText = currentTheme === "dark" 
    ? "bg-gradient-to-r from-purple-400 via-pink-400 to-red-400"
    : "bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600";

  const buttonGradient = currentTheme === "dark"
    ? "bg-gradient-to-r from-purple-500 to-pink-500"
    : "bg-gradient-to-r from-blue-500 to-purple-600";

  // Show loading state during initial render to avoid flash
  if (!mounted) {
    return (
      <section className="bg-gray-50 py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="h-12 bg-gray-200 rounded-lg max-w-md mx-auto mb-4"></div>
            <div className="h-6 bg-gray-200 rounded max-w-2xl mx-auto"></div>
          </div>
          <div className="max-w-4xl mx-auto space-y-3">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="bg-white rounded-2xl shadow-sm p-5 animate-pulse">
                <div className="h-6 bg-gray-200 rounded w-3/4"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      id="faq"
      className={`relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden transition-all duration-700 ${sectionBg}`}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className={`absolute top-1/4 -left-20 w-80 h-80 rounded-full blur-3xl opacity-10 ${
          currentTheme === "dark" ? "bg-purple-500" : "bg-blue-400"
        }`} />
        <div className={`absolute bottom-1/4 -right-20 w-96 h-96 rounded-full blur-3xl opacity-10 ${
          currentTheme === "dark" ? "bg-pink-500" : "bg-purple-400"
        }`} />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-20">
          {/* Section Badge */}
          <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border backdrop-blur-sm mb-6 ${
            currentTheme === "dark"
              ? "border-purple-500/30 bg-purple-500/10 text-purple-200"
              : "border-blue-500/30 bg-blue-500/10 text-blue-700"
          }`}>
            <span className="w-2 h-2 bg-current rounded-full animate-pulse"></span>
            <span className={`text-sm font-medium ${inter.className}`}>FAQ</span>
          </div>

          {/* Main Heading */}
          <h2 className={`${playfair.className} text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight ${headingColor}`}>
            Frequently{" "}
            <span className={`bg-clip-text text-transparent ${gradientText}`}>
              Asked
            </span>{" "}
            Questions
          </h2>

          {/* Subheading */}
          <p className={`max-w-2xl mx-auto text-lg md:text-xl leading-relaxed ${textColor} ${inter.className}`}>
            Everything you need to know about joining Stoic Pips Academy and starting your trading journey
          </p>
        </div>

        {/* FAQ Items */}
        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={faq.question}
              className={`group rounded-2xl border-2 backdrop-blur-sm transition-all duration-300 ${cardBg} ${borderColor} ${
                openIndex === index 
                  ? currentTheme === "dark" 
                    ? 'ring-2 ring-purple-500/30 border-purple-500/50' 
                    : 'ring-2 ring-blue-500/30 border-blue-500/50'
                  : 'hover:border-gray-300 dark:hover:border-gray-600'
              }`}
            >
              <button
                onClick={() => toggleIndex(index)}
                className={`w-full px-8 py-6 flex justify-between items-center text-left font-semibold focus:outline-none transition-all duration-300 rounded-2xl ${headingColor} ${hoverBg}`}
              >
                <span className={`text-lg md:text-xl pr-8 ${inter.className}`}>{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUpIcon className={`w-6 h-6 flex-shrink-0 ${
                    currentTheme === "dark" ? "text-purple-400" : "text-blue-500"
                  }`} />
                ) : (
                  <ChevronDownIcon className={`w-6 h-6 flex-shrink-0 ${
                    currentTheme === "dark" ? "text-gray-400" : "text-gray-500"
                  }`} />
                )}
              </button>
              
              {openIndex === index && (
                <div className="px-8 pb-6 transition-all duration-300">
                  <div className={`text-lg leading-relaxed ${textColor} ${inter.className} border-l-4 ${
                    currentTheme === "dark" ? "border-purple-500" : "border-blue-500"
                  } pl-6`}>
                    {faq.answer}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}