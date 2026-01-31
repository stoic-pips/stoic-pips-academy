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
    ? "bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900" 
    : "bg-gradient-to-br from-white via-blue-50 to-purple-50";
  
  const borderColor = theme === "dark" ? "border-gray-700" : "border-gray-200";
  const textColor = theme === "dark" ? "text-white" : "text-gray-900";
  const subTextColor = theme === "dark" ? "text-gray-300" : "text-gray-600";

  const gradientText = theme === "dark" 
    ? "bg-gradient-to-r from-purple-400 via-pink-400 to-red-400"
    : "bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600";

  return (
    <footer
      className={`relative border-t ${borderColor} py-12 transition-all duration-700 ${sectionBg}`}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className={`absolute bottom-0 left-0 w-64 h-64 rounded-full blur-3xl opacity-10 ${
          theme === "dark" ? "bg-purple-500" : "bg-blue-400"
        }`} />
        <div className={`absolute bottom-0 right-0 w-48 h-48 rounded-full blur-3xl opacity-10 ${
          theme === "dark" ? "bg-pink-500" : "bg-purple-400"
        }`} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Main Footer Content */}
      <div className="flex flex-col lg:flex-row items-center justify-between gap-8 mb-8">
        {/* Brand Section */}
        <div className="text-center lg:text-left">
          <h1 className={`${playfair.className} text-3xl font-bold mb-2 ${textColor}`}>
            Stoic Pips{" "}
            <span className={`bg-clip-text text-transparent ${gradientText}`}>
              Academy
            </span>
          </h1>
          <p className={`text-lg max-w-md ${subTextColor} ${inter.className}`}>
            Transforming traders through disciplined strategies and proven mentorship.
          </p>
        </div>

        {/* Social Links - Modern Design */}
        <div className="flex flex-col sm:flex-row items-center gap-3">
          {[
            {
              icon: <EnvelopeIcon className="w-5 h-5" />,
              href: "mailto:stoicpips@gmail.com",
              label: "Email",
              color: "blue",
              gradient: "from-blue-500 to-blue-600"
            },
            {
              icon: <FaYoutube className="w-5 h-5" />,
              href: "https://www.youtube.com/channel/UCyYDnMSj6e1rTdOvn7whuvw",
              label: "YouTube",
              color: "red",
              gradient: "from-red-500 to-red-600"
            },
            {
              icon: <FaTelegramPlane className="w-5 h-5" />,
              href: "https://t.me/+Syr6WpolrV1iZjhk",
              label: "Telegram",
              color: "blue",
              gradient: "from-blue-400 to-blue-500"
            },
            {
              icon: <FaWhatsapp className="w-5 h-5" />,
              href: "https://wa.me/+256706045809",
              label: "WhatsApp",
              color: "green",
              gradient: "from-green-500 to-green-600"
            }
          ].map((social, index) => (
            <a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative flex items-center gap-3 px-4 py-3 rounded-2xl backdrop-blur-sm border transition-all duration-300 hover:scale-105 ${
                theme === "dark"
                  ? `border-${social.color}-500/30 bg-${social.color}-500/10 text-${social.color}-200 hover:bg-${social.color}-500/20`
                  : `border-${social.color}-500/30 bg-${social.color}-500/10 text-${social.color}-700 hover:bg-${social.color}-500/20`
              }`}
            >
              {/* Animated Background on Hover */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${social.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
              
              {/* Icon */}
              <div className={`relative z-10 ${theme === "dark" ? `text-${social.color}-400` : `text-${social.color}-600`}`}>
                {social.icon}
              </div>
              
              {/* Label */}
              <span className={`relative z-10 font-medium ${inter.className}`}>
                {social.label}
              </span>

              {/* Hover Arrow */}
              <svg 
                className={`w-4 h-4 relative z-10 transform transition-transform duration-300 group-hover:translate-x-1 ${
                  theme === "dark" ? `text-${social.color}-400` : `text-${social.color}-600`
                } opacity-0 group-hover:opacity-100`}
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          ))}
        </div>
        </div>
        {/* Additional Links */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 py-6 border-t border-gray-200 dark:border-gray-700">
          <div className="flex flex-wrap justify-center gap-6">
            <a
              href="/mentorship"
              className={`hover:underline transition-all duration-300 ${subTextColor} ${inter.className}`}
            >
              Mentorship
            </a>
            <a
              href="/courses"
              className={`hover:underline transition-all duration-300 ${subTextColor} ${inter.className}`}
            >
              Courses
            </a>
            <a
              href="/brokers"
              className={`hover:underline transition-all duration-300 ${subTextColor} ${inter.className}`}
            >
              Brokers
            </a>
            <a
              href="/about"
              className={`hover:underline transition-all duration-300 ${subTextColor} ${inter.className}`}
            >
              About
            </a>
            <a
              href="/contact"
              className={`hover:underline transition-all duration-300 ${subTextColor} ${inter.className}`}
            >
              Contact
            </a>
          </div>

          {/* Quick Stats */}
          <div className="flex items-center gap-6 text-sm">
            <div className="text-center">
              <div className={`font-bold text-lg ${theme === "dark" ? "text-purple-300" : "text-blue-600"}`}>
                2K+
              </div>
              <div className={subTextColor}>Traders</div>
            </div>
            <div className="text-center">
              <div className={`font-bold text-lg ${theme === "dark" ? "text-pink-300" : "text-purple-600"}`}>
                95%
              </div>
              <div className={subTextColor}>Success Rate</div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className={`text-center pt-6 border-t border-gray-200 dark:border-gray-700 ${subTextColor} ${inter.className}`}>
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Stoic Pips Academy. All rights reserved.{" "}
            <span className="block sm:inline mt-1 sm:mt-0">
              Transforming traders, building legacies.
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}