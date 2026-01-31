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
    ? "bg-gradient-to-r from-purple-500 to-pink-500"
    : "bg-gradient-to-r from-blue-500 to-purple-600";

  return (
    <div
      className={`
        relative group transition-all duration-500 ease-out flex-shrink-0
        w-80 md:w-60 lg:w-[400px] mx-4
        ${isHovered ? 'scale-105 z-10' : 'scale-100'}
        rounded-3xl overflow-hidden
        ${theme === "dark"
          ? "bg-gray-800/50 hover:bg-gray-700/50 border border-gray-700"
          : "bg-white/60 hover:bg-white/80 border border-gray-200"
        }
      `}
      onMouseEnter={() => onHover(service.id)}
      onMouseLeave={() => onHover(null)}
    >
      {/* Hover Gradient Overlay */}
      {isHovered && (
        <div className={`absolute inset-0 rounded-3xl opacity-100 transition-opacity duration-500 ${
          theme === "dark"
            ? "bg-gradient-to-br from-purple-500/10 to-pink-500/10"
            : "bg-gradient-to-br from-blue-500/10 to-purple-500/10"
        }`} />
      )}

      <div className="relative p-8 flex flex-col h-full">
        {/* Service Header */}
        <div className="text-center mb-8">
          {/* Icon */}
          <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-4 transition-all duration-300 ${
            theme === "dark"
              ? "bg-purple-500/20 border border-purple-500/30"
              : "bg-blue-500/20 border border-blue-500/30"
          } ${isHovered ? 'scale-110' : ''}`}>
            <span className="text-2xl">
              {service.icon ? <service.icon size={24} color={service.iconColor} /> : "🚀"}
            </span>
          </div>
          
          <h3 className={`text-xl font-bold mb-3 transition-colors duration-300 ${inter.className} ${
            isHovered 
              ? 'text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600'
              : theme === "dark" ? 'text-white' : 'text-gray-900'
          }`}>
            {service.title}
          </h3>
          
          <p className={`text-sm leading-relaxed transition-colors duration-300 ${inter.className} ${
            theme === "dark" ? 'text-gray-400' : 'text-gray-600'
          }`}>
            {service.description}
          </p>
        </div>

        {/* Pricing */}
        <div className="text-center mb-8">
          {service.originalPrice && (
            <p className={`text-sm line-through mb-2 transition-colors duration-300 ${inter.className} ${
              theme === "dark" ? 'text-gray-500' : 'text-gray-400'
            }`}>
              {service.originalPrice}
            </p>
          )}
          <p className={`text-3xl font-bold transition-all duration-300 ${inter.className} ${
            isHovered 
              ? 'text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 scale-110'
              : theme === "dark" ? 'text-white' : 'text-gray-900'
          }`}>
            {service.price}
          </p>
        </div>

        {/* Features List */}
        <div className="flex-1 mb-8">
          <ul className="space-y-3">
            {service.features.map((feature, idx) => (
              <li 
                key={idx} 
                className="flex items-start gap-3 group/item transition-all duration-300 hover:translate-x-1"
              >
                <span className={`text-lg flex-shrink-0 ${
                  theme === "dark" ? "text-purple-400" : "text-blue-500"
                }`}>✓</span>
                <span className={`text-sm leading-relaxed transition-colors duration-300 ${inter.className} ${
                  theme === "dark" ? 'text-gray-300' : 'text-gray-700'
                }`}>
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
            w-full py-3 font-semibold rounded-2xl transition-all duration-300 transform border-2
            ${isHovered 
              ? 'shadow-lg scale-105' 
              : ''
            } text-white ${buttonGradient} hover:shadow-xl
          `}
        >
          Get Started
        </Button>
      </div>
    </div>
  );
}