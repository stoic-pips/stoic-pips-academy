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
    ? "bg-gradient-to-r from-purple-400 via-pink-400 to-red-400"
    : "bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600";

  const sectionBg = theme === "dark" 
    ? "bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900" 
    : "bg-gradient-to-br from-white via-blue-50 to-purple-50";

  const buttonGradient = theme === "dark"
    ? "bg-gradient-to-r from-purple-500 to-pink-500"
    : "bg-gradient-to-r from-blue-500 to-purple-600";

  return (
    <section id="testimonials" className={`relative py-24 px-4 sm:px-6 lg:px-8 ${sectionBg}`}>
      
      <div className="relative max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border backdrop-blur-sm mb-6 ${
            theme === "dark"
              ? "border-purple-500/30 bg-purple-500/10 text-purple-200"
              : "border-blue-500/30 bg-blue-500/10 text-blue-700"
          }`}>
            <span className="w-2 h-2 bg-current rounded-full animate-pulse"></span>
            <span className={`text-sm font-medium ${inter.className}`}>Success Stories</span>
          </div>

          <h2 className={`${playfair.className} text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight ${
            theme === "dark" ? "text-white" : "text-gray-900"
          }`}>
            Transforming{" "}
            <span className={`bg-clip-text text-transparent ${gradientText}`}>
              Lives
            </span>{" "}
            Through Trading
          </h2>

          <p className={`max-w-2xl mx-auto text-lg leading-relaxed ${inter.className} ${
            theme === "dark" ? "text-gray-300" : "text-gray-600"
          }`}>
            Join thousands of traders who transformed their results and achieved financial 
            freedom with our proven mentorship programs.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`group relative rounded-3xl p-8 backdrop-blur-sm border-2 ${
                theme === "dark"
                  ? "bg-gray-800/50 border-gray-700 hover:border-purple-500/50"
                  : "bg-white/80 border-gray-200 hover:border-blue-500/50"
              } transform transition-all duration-500 hover:-translate-y-2`}
            >
              {/* Testimonial content remains the same but with consistent colors */}
              <div className={`absolute -top-3 -left-3 w-8 h-8 rounded-full flex items-center justify-center ${
                theme === "dark" ? "bg-purple-500" : "bg-blue-500"
              } text-white`}>
                <span className="text-lg">"</span>
              </div>

              <p className={`text-lg leading-relaxed mb-6 italic ${inter.className} ${
                theme === "dark" ? "text-gray-300" : "text-gray-600"
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
                  <h3 className={`font-bold text-lg ${
                    theme === "dark" ? "text-white" : "text-gray-900"
                  }`}>
                    {testimonial.name}
                  </h3>
                  <p className={`text-sm ${
                    theme === "dark" ? "text-purple-300" : "text-blue-600"
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
          <div className={`inline-flex flex-col sm:flex-row items-center gap-6 p-8 rounded-3xl backdrop-blur-sm border ${
            theme === "dark"
              ? "bg-gray-800/50 border-gray-700"
              : "bg-white/50 border-gray-200"
          } max-w-2xl mx-auto`}>
            <div className="text-left">
              <h3 className={`text-xl font-bold mb-2 ${inter.className} ${
                theme === "dark" ? "text-white" : "text-gray-900"
              }`}>
                Ready to Write Your Success Story?
              </h3>
              <p className={theme === "dark" ? "text-gray-300" : "text-gray-600"}>
                Join our community of successful traders today.
              </p>
            </div>
            <a
              href="/mentorship"
              className={`px-8 py-3 rounded-2xl font-semibold text-white transition-all duration-300 hover:scale-105 ${buttonGradient}`}
            >
              Start Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}