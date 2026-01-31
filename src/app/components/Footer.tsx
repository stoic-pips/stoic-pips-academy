"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { EnvelopeIcon } from "@heroicons/react/24/solid";
import { FaTelegramPlane, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { Playfair_Display, Inter } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["700", "900"],
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export default function Footer() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 py-8 mt-24 animate-pulse">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="h-8 bg-gray-300 dark:bg-gray-700 rounded w-48 mb-4 md:mb-0"></div>
            <div className="flex gap-4">
              <div className="h-6 bg-gray-300 dark:bg-gray-700 rounded w-20"></div>
              <div className="h-6 bg-gray-300 dark:bg-gray-700 rounded w-20"></div>
              <div className="h-6 bg-gray-300 dark:bg-gray-700 rounded w-20"></div>
            </div>
          </div>
        </div>
      </footer>
    );
  }

  const sectionBg = theme === "dark"
    ? "bg-[#050a14]"
    : "bg-slate-50";

  const borderColor = theme === "dark" ? "border-white/5" : "border-slate-200";
  const textColor = theme === "dark" ? "text-white" : "text-gray-900";
  const subTextColor = theme === "dark" ? "text-slate-300" : "text-gray-600";
  const cardBg = theme === "dark" ? "bg-slate-900/40" : "bg-slate-50";

  return (
    <footer className={`relative py-24 px-6 overflow-hidden border-t ${borderColor} ${theme === "dark" ? "bg-background" : "bg-white"}`}>

      {/* Footer Ambient Glow */}
      <div className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[300px] bg-gradient-to-t ${theme === "dark" ? "from-[#C5A059]/5" : "from-[#C5A059]/3"} to-transparent blur-[100px] -z-10`}></div>

      <div className="max-w-7xl mx-auto space-y-24">

        {/* Top Section: Brand & Newsletter Bridge */}
        <div className={`grid lg:grid-cols-2 gap-20 items-center pb-24 border-b ${borderColor}`}>
          <div className="space-y-8">
            <h2 className={`${playfair.className} text-4xl font-black ${textColor}`}>
              Stoic Pips <br />
              <span className="text-gradient-emerald-gold italic text-5xl">Inc.</span>
            </h2>
            <p className={`text-xl opacity-60 max-w-md leading-relaxed ${subTextColor}`}>
              Engineering the future of trading through institutional methodology and AI-driven precision.
            </p>
            <div className="flex gap-4">
              {[
                { icon: <FaTelegramPlane />, href: "https://t.me/+Syr6WpolrV1iZjhk", label: "Telegram", color: "hover:border-[#708090]/40" },
                { icon: <FaWhatsapp />, href: "https://wa.me/+256706045809", label: "WhatsApp", color: "hover:border-[#C5A059]/40" },
                { icon: <FaYoutube />, href: "https://www.youtube.com/channel/UCyYDnMSj6e1rTdOvn7whuvw", label: "YouTube", color: "hover:border-[#708090]/40" }
              ].map((social, i) => (
                <a key={i} href={social.href} className={`w-12 h-12 glass-pill flex items-center justify-center text-xl transition-all hover:scale-110 border ${borderColor} ${social.color} ${textColor}`}>
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div className={`luminous-card p-10 ${cardBg} border ${borderColor} rounded-[2rem]`}>
            <h3 className={`text-2xl font-black mb-4 ${textColor}`}>Master Your <span className="text-[#C5A059]">Edge.</span></h3>
            <p className={`text-sm opacity-60 mb-8 ${subTextColor}`}>Join our elite newsletter and receive high-frequency insights directly to your inbox.</p>
            <div className="flex gap-2">
              <input type="text" placeholder="Your executive email" className={`flex-1 bg-white/5 border rounded-xl px-6 outline-none transition-colors font-bold ${theme === "dark" ? "border-white/10 text-white focus:border-[#C5A059]/50" : "border-slate-200 text-gray-900 focus:border-[#C5A059] bg-white"}`} />
              <button className={`px-6 py-4 rounded-xl font-black uppercase tracking-[0.2em] text-[10px] transition-all tech-tracking ${theme === "dark" ? "bg-[#C5A059] text-[#121212]" : "bg-[#121212] text-white hover:bg-black"}`}>Join</button>
            </div>
          </div>
        </div>

        {/* Middle Section: Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
          <div className="space-y-6">
            <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-[#C5A059] tech-tracking">Ecosystem</h4>
            <div className={`flex flex-col gap-4 text-[10px] font-black uppercase tracking-[0.2em] tech-tracking opacity-60 ${textColor}`}>
              <a href="#about" className="hover:text-[#C5A059] hover:opacity-100 transition-all">The Story</a>
              <a href="#pillars" className="hover:text-[#C5A059] hover:opacity-100 transition-all">Pillars of Tech</a>
              <a href="#academy" className="hover:text-[#C5A059] hover:opacity-100 transition-all">Stoic Academy</a>
              <a href="#stoic-edge" className="hover:text-[#C5A059] hover:opacity-100 transition-all">Philosophy</a>
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-[#708090] tech-tracking">Technology</h4>
            <div className={`flex flex-col gap-4 text-[10px] font-black uppercase tracking-[0.2em] tech-tracking opacity-60 ${textColor}`}>
              <a href="https://app.stoicpips.com" className="hover:text-[#708090] hover:opacity-100 transition-all">Dunam Ai Platform</a>
              <a href="https://doc.stoicpips.com" className="hover:text-[#708090] hover:opacity-100 transition-all">Documentation</a>
              <a href="https://doc.stoicpips.com/api" className="hover:text-[#708090] hover:opacity-100 transition-all">API Reference</a>
              <a href="https://github.com/stoicpips" className="hover:text-[#708090] hover:opacity-100 transition-all">Open Source</a>
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-[#708090] tech-tracking">Governance</h4>
            <div className={`flex flex-col gap-4 text-[10px] font-black uppercase tracking-[0.2em] tech-tracking opacity-60 ${textColor}`}>
              <a href="/terms" className="hover:text-[#708090] hover:opacity-100 transition-all">Terms of Service</a>
              <a href="/privacy" className="hover:text-[#708090] hover:opacity-100 transition-all">Privacy Policy</a>
              <a href="/risk" className="hover:text-[#708090] hover:opacity-100 transition-all">Risk Disclaimer</a>
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-[#C5A059] tech-tracking">Support</h4>
            <div className={`flex flex-col gap-4 text-[10px] font-black uppercase tracking-[0.2em] tech-tracking opacity-60 ${textColor}`}>
              <a href="mailto:support@stoicpips.com" className="hover:text-[#C5A059] hover:opacity-100 transition-all">Executive Desk</a>
              <a href="/status" className="hover:text-[#C5A059] hover:opacity-100 transition-all">System Status</a>
              <a href="https://doc.stoicpips.com/faq" className="hover:text-[#C5A059] hover:opacity-100 transition-all">Intelligence Base</a>
            </div>
          </div>
        </div>

        {/* Bottom Section: Legal & Stats */}
        <div className={`pt-12 border-t ${borderColor} flex flex-col md:grid md:grid-cols-3 items-center gap-12`}>
          <div className="flex items-center gap-6">
            <div className="flex flex-col">
              <span className={`text-xl font-black text-[#708090]`}>2K+</span>
              <span className={`text-[10px] uppercase font-black opacity-40 tech-tracking ${textColor}`}>Global Members</span>
            </div>
            <div className={`w-px h-8 ${theme === "dark" ? "bg-white/10" : "bg-slate-200"}`}></div>
            <div className="flex flex-col">
              <span className={`text-xl font-black text-[#C5A059]`}>v1.0.0-beta</span>
              <span className={`text-[10px] uppercase font-black opacity-40 tech-tracking ${textColor}`}>Version Tag</span>
            </div>
          </div>

          <div className={`text-center text-[10px] font-black uppercase tracking-[0.3em] opacity-40 tech-tracking ${textColor}`}>
            &copy; {new Date().getFullYear()} Stoic Pips Inc. &bull; Dunam Ai Flagship
          </div>

          <div className="flex lg:justify-end">
            <div className={`px-6 py-2 glass-pill italic text-sm opacity-60 border ${borderColor} ${textColor}`}>
              "Trade Emotionless."
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}