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
      className={`group relative rounded-3xl overflow-hidden border-2 ${cardBg} ${borderColor} 
                 shadow-lg ${hoverGlow} transform transition-all duration-500 hover:-translate-y-2 
                 cursor-pointer h-full flex flex-col`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Optional Image */}
      {image && (
        <div className="relative h-48 w-full overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-700"
          />
          {/* Gradient overlay */}
          <div className={`absolute inset-0 bg-gradient-to-t ${
            theme === "dark" 
              ? "from-gray-900/80 via-gray-900/20 to-transparent" 
              : "from-white/50 via-white/10 to-transparent"
          } pointer-events-none`} />
        </div>
      )}

      {/* Content Container */}
      <div className="flex flex-col flex-grow p-8 relative z-10">
        {/* Icon */}
        <div className="flex justify-center mb-6">
          {Icon && (
            <div className={`p-4 rounded-2xl ${
              theme === "dark" 
                ? "bg-purple-500/10 border border-purple-500/20" 
                : "bg-blue-500/10 border border-blue-500/20"
            }`}>
              <Icon className={`w-8 h-8 ${iconColor}`} />
            </div>
          )}
        </div>

        {/* Title */}
        <h3 className={`text-2xl font-bold text-center mb-4 leading-tight ${titleColor}`}>
          {title}
        </h3>

        {/* Description */}
        <p className={`text-center leading-relaxed flex-grow ${descColor}`}>
          {description}
        </p>

        {/* CTA Button */}
        <div className="mt-6 text-center">
          <span className={`inline-flex items-center gap-2 px-4 py-2 rounded-2xl font-semibold text-sm transition-all duration-300 group-hover:gap-3 ${
            theme === "dark"
              ? "text-purple-300 bg-purple-500/10 hover:bg-purple-500/20"
              : "text-blue-600 bg-blue-500/10 hover:bg-blue-500/20"
          }`}>
            Learn More
            <svg 
              className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </span>
        </div>
      </div>

      {/* Hover effect background */}
      <div className={`absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
        theme === "dark"
          ? "bg-gradient-to-br from-purple-500/5 to-pink-500/5"
          : "bg-gradient-to-br from-blue-500/5 to-purple-500/5"
      }`} />
    </div>
  );
}