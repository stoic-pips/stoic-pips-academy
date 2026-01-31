"use client";

import Image from "next/image";
import { useTheme } from "next-themes";
import { ServiceCardProps } from "./ServiceCardProps";

export default function ServiceCard({ title, description, icon: Icon, link, image, index }: ServiceCardProps) {
  const { theme } = useTheme();

  // Text colors based on theme
  const titleColor = theme === "dark" ? "text-white" : "text-gray-900";
  const descColor = theme === "dark" ? "text-gray-300" : "text-gray-600";
  const iconColor = theme === "dark" ? "text-purple-400" : "text-blue-600";

  // Card styling based on theme
  const cardBg = theme === "dark"
    ? "bg-gray-800/50 backdrop-blur-sm"
    : "bg-white/80 backdrop-blur-sm";
  const borderColor = theme === "dark"
    ? "border-gray-700 hover:border-purple-500/50"
    : "border-gray-200 hover:border-blue-500/50";
  const hoverGlow = theme === "dark"
    ? "hover:shadow-2xl hover:shadow-purple-500/10"
    : "hover:shadow-2xl hover:shadow-blue-500/10";

  return (
    <div
      className={`group relative luminous-card h-full flex flex-col cursor-pointer transition-all duration-700 hover:-translate-y-4`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Optional Image */}
      {image && (
        <div className="relative h-56 w-full overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent pointer-events-none" />
        </div>
      )}

      {/* Content Container */}
      <div className="flex flex-col flex-grow p-10 relative z-10">
        {/* Icon */}
        <div className="flex justify-center mb-8">
          {Icon && (
            <div className="relative group/icon">
              <div className="absolute -inset-4 bg-[#C5A059]/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="p-5 rounded-3xl relative border border-[#C5A059]/20 glass-pill transition-all duration-300">
                <Icon className={`w-10 h-10 ${theme === "dark" ? "text-[#C5A059]" : "text-[#C5A059]"}`} />
              </div>
            </div>
          )}
        </div>

        {/* Title */}
        <h3 className={`text-2xl font-black text-center mb-6 leading-tight ${theme === "dark" ? "text-white" : "text-gray-900"}`}>
          {title}
        </h3>

        {/* Description */}
        <p className={`text-center leading-relaxed flex-grow text-lg opacity-70 ${theme === "dark" ? "text-slate-300" : "text-gray-600"}`}>
          {description}
        </p>

        {/* CTA Button */}
        <div className="mt-10 text-center">
          <span className={`inline-flex items-center gap-3 px-6 py-3 rounded-full font-black text-[10px] tech-tracking uppercase tracking-widest border transition-all duration-300 glass-pill ${theme === "dark" ? "text-[#C5A059] border-[#C5A059]/20 group-hover:bg-[#C5A059]/10" : "text-[#C5A059] border-[#C5A059]/30 group-hover:bg-[#C5A059]/5"
            }`}>
            Secure Edge
            <span className="text-xl group-hover:translate-x-1 transition-transform">→</span>
          </span>
        </div>
      </div>

      {/* Radiant Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-amber-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
    </div>
  );
}