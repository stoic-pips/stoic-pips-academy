"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { testimonials } from "./testimonials";
import { Playfair_Display, Inter } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["700", "900"],
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export default function TestimonialsSection() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const gradientText = theme === "dark"
    ? "bg-gradient-to-r from-emerald-400 via-teal-400 to-amber-400"
    : "bg-gradient-to-r from-emerald-600 via-teal-600 to-amber-600";

  const sectionBg = theme === "dark"
    ? "bg-[#050a14]"
    : "bg-gradient-to-b from-white via-emerald-50/30 to-white";

  return (
    <section id="testimonials" className={`relative py-24 px-4 sm:px-6 lg:px-8 ${sectionBg}`}>

      <div className="relative max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border backdrop-blur-sm mb-6 ${theme === "dark"
            ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-200"
            : "border-emerald-500/30 bg-emerald-500/10 text-emerald-700"
            }`}>
            <span className="w-2 h-2 bg-current rounded-full animate-pulse"></span>
            <span className={`text-sm font-medium ${inter.className}`}>Success Stories</span>
          </div>

          <h2 className={`${playfair.className} text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight ${theme === "dark" ? "text-white" : "text-gray-900"
            }`}>
            Transforming{" "}
            <span className={`bg-clip-text text-transparent ${gradientText}`}>
              Lives
            </span>{" "}
            Through Trading
          </h2>

          <p className={`max-w-2xl mx-auto text-lg leading-relaxed ${inter.className} ${theme === "dark" ? "text-gray-300" : "text-gray-600"
            }`}>
            Join thousands of traders who transformed their results and achieved financial
            freedom with the Dunam Ai ecosystem.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`group relative rounded-3xl p-8 backdrop-blur-sm border-2 ${theme === "dark"
                ? "bg-slate-900/50 border-gray-800 hover:border-emerald-500/50"
                : "bg-white shadow-xl shadow-slate-200/60 border-slate-100 hover:border-emerald-500/30"
                } transform transition-all duration-500 hover:-translate-y-2`}
            >
              <div className={`absolute -top-3 -left-3 w-8 h-8 rounded-full flex items-center justify-center ${theme === "dark" ? "bg-emerald-500" : "bg-emerald-600"
                } text-white`}>
                <span className="text-lg">"</span>
              </div>

              <p className={`text-lg leading-relaxed mb-6 italic ${inter.className} ${theme === "dark" ? "text-gray-300" : "text-gray-600"
                }`}>
                "{testimonial.text}"
              </p>

              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-gray-300 dark:border-gray-600"
                />
                <div className="text-left">
                  <h3 className={`font-bold text-lg ${theme === "dark" ? "text-white" : "text-gray-900"
                    }`}>
                    {testimonial.name}
                  </h3>
                  <p className={`text-sm ${theme === "dark" ? "text-emerald-400" : "text-emerald-600"
                    }`}>
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className={`inline-flex flex-col sm:flex-row items-center gap-6 p-8 rounded-3xl backdrop-blur-sm border ${theme === "dark"
            ? "bg-gray-800/50 border-gray-700"
            : "bg-white/50 border-gray-200"
            } max-w-2xl mx-auto`}>
            <div className="text-left">
              <h3 className={`text-xl font-bold mb-2 ${inter.className} ${theme === "dark" ? "text-white" : "text-gray-900"
                }`}>
                Ready to Write Your Success Story?
              </h3>
              <p className={theme === "dark" ? "text-gray-300" : "text-gray-600"}>
                Join our community of successful traders today.
              </p>
            </div>
            <a
              href="https://app.stoicpips.com"
              className={`px-8 py-3 rounded-2xl font-bold uppercase tracking-widest text-sm text-white transition-all duration-300 hover:scale-105 active:scale-95 ${theme === "dark"
                ? "bg-gradient-to-r from-emerald-500 to-emerald-600 shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-emerald-500/50"
                : "bg-gray-900 shadow-xl"
                }`}
            >
              Launch App
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}