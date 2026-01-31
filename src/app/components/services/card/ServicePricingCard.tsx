// components/ServiceCard.tsx
'use client';

import { useTheme } from "next-themes";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { Inter } from "next/font/google";
import { Service } from "../Service";
import Button from "../../button/Button";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

interface ServiceCardProps {
  service: Service;
  isHovered: boolean;
  onHover: (id: string | null) => void;
  theme: string;
}

export default function ServiceCard({ service, isHovered, onHover, theme }: ServiceCardProps) {
  const router = useRouter();

  const buttonGradient = theme === "dark"
    ? "bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500"
    : "bg-gradient-to-r from-emerald-600 to-teal-700 hover:from-emerald-500 hover:to-teal-600";

  return (
    <div
      className={`
        relative group transition-all duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)] flex-shrink-0
        w-85 md:w-65 lg:w-[420px] mx-6 p-1 rounded-[2rem]
        ${theme === "dark" ? "luminous-card" : "bg-white border border-slate-200 shadow-xl shadow-slate-200/50"}
        ${isHovered ? (theme === "dark" ? 'shadow-2xl shadow-[#C5A059]/10' : 'shadow-2xl shadow-[#C5A059]/15 ring-2 ring-[#C5A059]/20') + ' -translate-y-4' : ''}
      `}
      onMouseEnter={() => onHover(service.id)}
      onMouseLeave={() => onHover(null)}
    >
      <div className={`
        rounded-[1.9rem] p-10 flex flex-col h-full relative overflow-hidden transition-colors duration-500
        ${theme === "dark" ? "bg-slate-950/90" : "bg-white"}
      `}>

        {/* Floating Accent */}
        <div className={`absolute -top-24 -right-24 w-48 h-48 blur-[60px] transition-all duration-700 ${theme === "dark" ? "bg-[#C5A059]/10 group-hover:bg-[#C5A059]/20" : "bg-[#C5A059]/5 group-hover:bg-[#C5A059]/10"
          }`}></div>

        {/* Service Header */}
        <div className="text-center mb-10">
          <div className={`inline-flex items-center justify-center w-24 h-24 rounded-3xl mb-8 border transition-all duration-700 ${theme === "dark" ? "glass-pill border-white/5 group-hover:border-[#C5A059]/40" : "bg-slate-50 border-slate-200 group-hover:border-[#C5A059]/30"
            }`}>
            <span className="text-4xl">
              {service.icon ? <service.icon size={36} color={isHovered ? "#C5A059" : (theme === "dark" ? service.iconColor : "#475569")} /> : "🚀"}
            </span>
          </div>

          <h3 className={`text-3xl font-black mb-4 transition-all duration-700 ${inter.className} ${isHovered ? "text-gradient-emerald-gold scale-105" : (theme === "dark" ? "text-white" : "text-slate-900")
            }`}>
            {service.title}
          </h3>

          <p className={`text-sm leading-relaxed font-medium px-4 ${theme === "dark" ? "opacity-60 text-white" : "text-slate-500"}`}>
            {service.description}
          </p>
        </div>

        {/* Pricing */}
        <div className="text-center mb-12 relative">
          {service.originalPrice && (
            <p className={`text-xs line-through mb-2 font-black tracking-widest ${theme === "dark" ? "opacity-40" : "text-slate-400"}`}>
              {service.originalPrice}
            </p>
          )}
          <div className="flex items-center justify-center gap-1">
            <span className={`text-xl font-bold mb-4 ${theme === "dark" ? "opacity-40" : "text-slate-400"}`}>$</span>
            <span className={`text-6xl font-black transition-all duration-1000 ${isHovered ? (theme === "dark" ? "text-white scale-110" : "text-slate-900 scale-110") : (theme === "dark" ? "text-white/90" : "text-slate-900")
              }`}>
              {service.price.replace('$', '')}
            </span>
            <span className={`text-xs font-black mt-6 tracking-widest ${theme === "dark" ? "opacity-30" : "text-slate-400"}`}>/ LIFETIME</span>
          </div>
        </div>

        {/* Features List */}
        <div className="flex-1 mb-12">
          <ul className="space-y-4">
            {service.features.map((feature, idx) => (
              <li
                key={idx}
                className="flex items-center gap-4 group/item transition-all duration-300"
              >
                <div className={`w-6 h-6 rounded-full flex items-center justify-center border transition-colors ${theme === "dark" ? "glass-pill border-white/5 group-hover/item:border-[#C5A059]/40" : "bg-slate-50 border-slate-200"
                  }`}>
                  <span className="text-[10px] text-[#C5A059] font-black">✓</span>
                </div>
                <span className={`text-sm font-bold transition-opacity ${theme === "dark" ? "opacity-70 group-hover/item:opacity-100" : "text-slate-600 group-hover/item:text-slate-900"}`}>
                  {feature}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* CTA Button */}
        <Button
          onClick={() => router.push(`/get-started/${service.id}`)}
          className={`
            w-full py-5 font-black uppercase tracking-[0.2em] rounded-2xl transition-all duration-500 border
            ${theme === "dark"
              ? "bg-[#C5A059] text-[#121212] shadow-[0_0_20px_rgba(197,160,89,0.3)] hover:shadow-[#C5A059]/50 border-transparent"
              : "bg-[#C5A059] text-[#121212] shadow-xl hover:bg-[#B8860B] border-transparent"
            }
            ${isHovered ? '-translate-y-1' : ''}
          `}
        >
          Secure Access
        </Button>
      </div>
    </div >
  );
}