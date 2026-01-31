"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { testimonials } from "./testimonials";
import { motion } from "framer-motion";
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

  const gradientText = "text-gradient-emerald-gold";

  const sectionBg = "bg-background";

  return (
    <div id="testimonials" className="relative py-12 px-4 sm:px-6 lg:px-8">

      <div className="relative max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border backdrop-blur-sm mb-6 border-primary/20 bg-primary/10 text-primary`}>
            <span className="w-2 h-2 bg-current rounded-full animate-pulse"></span>
            <span className={`text-sm font-medium ${inter.className}`}>Success Stories</span>
          </div>

          <h2 className={`${playfair.className} text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight ${theme === "dark" ? "text-white" : "text-gray-900"
            }`}>
            Transforming{" "}
            <span className={gradientText}>
              Lives
            </span>{" "}
            Through Trading
          </h2>

          <p className={`max-w-2xl mx-auto text-lg leading-relaxed ${inter.className} ${theme === "dark" ? "text-gray-300" : "text-gray-600"
            }`}>
            Join thousands of traders who transformed their results and achieved financial
            freedom with the Dunam Ai ecosystem.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`group luminous-card p-8 hover:-translate-y-2`}
            >
              <div className={`absolute -top-3 -left-3 w-8 h-8 rounded-full flex items-center justify-center bg-primary text-matte-charcoal`}>
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
                  className="w-14 h-14 rounded-full object-cover border-2 border-glass-border"
                />
                <div className="text-left">
                  <h3 className={`font-bold text-lg ${theme === "dark" ? "text-white" : "text-gray-900"
                    }`}>
                    {testimonial.name}
                  </h3>
                  <p className={`text-sm text-primary`}>
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className={`inline-flex flex-col sm:flex-row items-center gap-6 p-8 rounded-3xl backdrop-blur-sm border bg-glass border-glass-border max-w-2xl mx-auto`}>
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
              className={`px-8 py-3 rounded-2xl font-bold uppercase tracking-widest text-sm text-matte-charcoal transition-all duration-300 hover:scale-105 active:scale-95 bg-primary shadow-xl`}
            >
              Launch App
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}