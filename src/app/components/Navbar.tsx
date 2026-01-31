"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import DarkModeToggle from "./button/DarkModeToggle";
import { useTheme } from "next-themes";
import { Playfair_Display, Inter } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["700", "900"],
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export default function Navbar() {
  const { theme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!mounted) {
    return (
      <nav className="fixed w-full top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
          <div className="h-8 bg-gray-300 dark:bg-gray-700 rounded w-32 animate-pulse"></div>
          <div className="hidden md:flex gap-6">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="h-6 bg-gray-300 dark:bg-gray-700 rounded w-16 animate-pulse"></div>
            ))}
          </div>
          <div className="w-8 h-8 bg-gray-300 dark:bg-gray-700 rounded animate-pulse"></div>
        </div>
      </nav>
    );
  }

  const navBackground = scrolled
    ? theme === "dark"
      ? "bg-gray-900/80 backdrop-blur-xl border-b border-gray-800"
      : "bg-white/80 backdrop-blur-xl border-b border-gray-200"
    : "bg-transparent";

  const linkColor = theme === "dark" ? "text-gray-200" : "text-gray-700";
  const linkHover = theme === "dark" 
    ? "hover:text-purple-300 transition-colors duration-300" 
    : "hover:text-blue-600 transition-colors duration-300";

  const mobileMenuBg = theme === "dark"
    ? "bg-gray-900/95 backdrop-blur-xl border-t border-gray-800"
    : "bg-white/95 backdrop-blur-xl border-t border-gray-200";

  const gradientText = theme === "dark" 
    ? "bg-gradient-to-r from-purple-400 via-pink-400 to-red-400"
    : "bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600";

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-500 ${navBackground}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          <Link href="/" className="flex items-center">
            <img
              src={theme === "dark" ? "/logo_white.svg" : "/logo_black.svg"}
              alt="Stoic Pips Academy"
              className="h-13 lg:h-15"
            />

            <h1 className={`${playfair.className} text-2xl lg:text-3xl font-bold cursor-pointer ml-2`}>
              <span className={theme === "dark" ? "text-white" : "text-gray-900"}>
                Stoic Pips{" "}
              </span>
              <span className={`bg-clip-text text-transparent ${gradientText}`}>
                Academy
              </span>
            </h1>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            <div className={`flex space-x-8 font-medium ${inter.className}`}>
              {[
                { href: "#about", label: "About" },
                { href: "#services", label: "Services" },
                { href: "#brokers", label: "Brokers" },
                { href: "#testimonials", label: "Testimonials" },
                { href: "#faq", label: "FAQ" },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`${linkColor} ${linkHover} font-semibold`}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* CTA Button */}
            <Link
              href="#contact"
              className={`ml-4 px-6 py-2 rounded-2xl font-semibold text-white transition-all duration-300 hover:scale-105 ${
                theme === "dark"
                  ? "bg-gradient-to-r from-purple-500 to-pink-500 hover:shadow-lg hover:shadow-purple-500/25"
                  : "bg-gradient-to-r from-blue-500 to-purple-600 hover:shadow-lg hover:shadow-blue-500/25"
              } ${inter.className}`}
            >
              Get Started
            </Link>

            <DarkModeToggle />
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-4 lg:hidden">
            <DarkModeToggle />
            <button
              className={`${linkColor} focus:outline-none`}
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <XMarkIcon className="w-6 h-6" /> : <Bars3Icon className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className={`lg:hidden ${mobileMenuBg} rounded-2xl mt-2 mb-4 p-6 space-y-4 transition-all duration-300 shadow-2xl`}>
            {[
              { href: "#about", label: "About" },
              { href: "#services", label: "Services" },
              { href: "#brokers", label: "Brokers" },
              { href: "#testimonials", label: "Testimonials" },
              { href: "#faq", label: "FAQ" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`${linkColor} ${linkHover} block text-lg font-semibold py-3 ${inter.className}`}
              >
                {item.label}
              </Link>
            ))}
            
            {/* Mobile CTA Button */}
            <Link
              href="#contact"
              onClick={() => setIsOpen(false)}
              className={`block w-full mt-6 px-6 py-3 rounded-2xl font-semibold text-white text-center transition-all duration-300 ${
                theme === "dark"
                  ? "bg-gradient-to-r from-purple-500 to-pink-500 hover:shadow-lg hover:shadow-purple-500/25"
                  : "bg-gradient-to-r from-blue-500 to-purple-600 hover:shadow-lg hover:shadow-blue-500/25"
              } ${inter.className}`}
            >
              Start Trading Journey
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}