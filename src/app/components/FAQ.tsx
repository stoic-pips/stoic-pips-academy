"use client";

import { useState, useEffect } from "react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/solid";
import { useTheme } from "next-themes";
import { faqs } from "@/data/faq";
import { motion } from "framer-motion";
import { playfair, inter } from "@/lib/fonts";

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

  const sectionBg = "bg-background";

  const headingColor = "text-foreground";
  const textColor = "text-muted-foreground";
  const borderColor = "border-glass-border";

  return (
    <section id="faq" className={`relative py-32 px-6 overflow-hidden ${sectionBg}`}>

      {/* Atmospheric Glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className={`absolute top-1/2 left-0 w-[500px] h-[500px] bg-secondary/5 blur-[150px] rounded-full`}></div>
        <div className={`absolute top-1/2 right-0 w-[500px] h-[500px] bg-primary/5 blur-[150px] rounded-full`}></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <div className={`inline-flex items-center gap-3 px-4 py-2 rounded-full border glass-pill text-secondary mb-8 border-glass-border`}>
            <span className="text-[10px] font-black uppercase tracking-[0.2em] tech-tracking">Intelligence Base</span>
          </div>

          <h2 className={`${playfair.className} text-4xl md:text-5xl xl:text-6xl font-black mb-8 leading-tight ${headingColor}`}>
            The Stoic <br />
            <span className="text-gradient-emerald-gold italic">Blueprint.</span>
          </h2>

          <p className={`max-w-3xl mx-auto text-xl leading-relaxed opacity-70 ${inter.className}`}>
            Uncover the logic behind the <span className="text-primary font-bold">Dunam Ai</span> ecosystem and the methodology of Stoic Pips Inc.
          </p>
        </motion.div>

        {/* FAQ Items */}
        <div className="max-w-4xl mx-auto space-y-6">
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.question}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`group transition-all duration-700 ${openIndex === index ? "luminous-card p-[1px] bg-gradient-to-r from-primary/30 to-secondary/30 shadow-2xl" : `border-b border-glass-border`
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
                  <div className={`w-10 h-10 rounded-full glass-pill flex items-center justify-center transition-all duration-700 border ${openIndex === index ? "rotate-180 bg-primary text-matte-charcoal border-transparent" : "border-glass-border opacity-40 group-hover:opacity-100"
                    }`}>
                    <ChevronDownIcon className="w-5 h-5" />
                  </div>
                </button>

                <div className={`overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] ${openIndex === index ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                  }`}>
                  <div className="px-8 pb-10">
                    <p className={`text-lg leading-relaxed font-medium max-w-3xl border-l-2 border-primary/30 pl-8 text-muted-foreground`}>
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}