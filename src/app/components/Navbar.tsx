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

  const navContainerStyles = scrolled
    ? "top-4 scale-95 px-4"
    : "top-0 scale-100 px-0";



  const pillStyles = scrolled
    ? `backdrop-blur-xl border shadow-2xl rounded-[2rem] px-6 lg:px-10 py-2 transition-all duration-500 ${theme === "dark"
      ? "bg-slate-900/80 border-white/10"
      : "bg-white/80 border-slate-200/50 shadow-slate-200/50"
    }`
    : "bg-transparent py-4";

  const linkColor = theme === "dark" ? "text-slate-200" : "text-gray-700";
  const linkHover = "hover:text-primary transition-all duration-300 hover:scale-105";

  const mobileMenuBg = theme === "dark"
    ? "backdrop-blur-xl bg-slate-900/90 border border-white/10 rounded-[2rem] mt-4 p-8 space-y-4 shadow-2xl"
    : "backdrop-blur-xl bg-white/90 border border-slate-200 rounded-[2rem] mt-4 p-8 space-y-4 shadow-2xl ring-1 ring-slate-900/5";

  const gradientText = "text-gradient-emerald-gold";

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] ${navContainerStyles}`}
    >
      <div className={`max-w-7xl mx-auto transition-all duration-700 ${pillStyles}`}>
        <div className="flex justify-between items-center h-16 lg:h-18">
          <Link href="/" className="flex items-center group">
            <div className="relative">
              <img
                src={theme === "dark" ? "/logo_white.svg" : "/logo_black.svg"}
                alt="Stoic Pips Inc."
                className="h-10 lg:h-12 transition-transform duration-500 group-hover:rotate-12"
              />
              <div className="absolute -inset-2 bg-primary/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>

            <h1 className={`${playfair.className} text-lg lg:text-xl font-bold cursor-pointer ml-3 tracking-tight`}>
              <span className={theme === "dark" ? "text-white" : "text-gray-900"}>
                Stoic Pips{" "}
              </span>
              <span className={gradientText}>
                Inc.
              </span>
            </h1>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-10">
            <div className={`flex space-x-10 font-medium ${inter.className}`}>
              {[
                { href: "#about", label: "About" },
                { href: "#pillars", label: "Ecosystem" },
                {
                  href: "#academy",
                  label: "Academy",
                  children: [
                    { href: "/courses", label: "Courses" },
                    { href: "/mentorship", label: "Mentorship" }
                  ]
                },
                { href: "https://doc.stoicpips.com", label: "Docs" },
              ].map((item) => (
                <div key={item.label} className="group relative flex items-center">
                  <Link
                    href={item.href}
                    className={`${linkColor} ${linkHover} font-bold text-[10px] tracking-[0.2em] uppercase tech-tracking`}
                  >
                    {item.label}
                  </Link>
                  {item.children && (
                    <div className="absolute top-full left-0 mt-4 w-48 py-4 bg-deep-slate border border-white/10 rounded-2xl opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300 shadow-2xl z-50">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-6 py-2 text-[10px] font-black uppercase tracking-[0.2em] tech-tracking text-slate-400 hover:text-primary hover:bg-white/5 transition-all"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="flex items-center gap-6 border-l border-white/10 pl-8">
              <DarkModeToggle />

              {/* CTA Button */}
              <Link
                href="https://dunam.stoicpips.com"
                className={`px-8 py-2.5 rounded-full font-black text-matte-charcoal transition-all duration-300 hover:scale-110 active:scale-95 text-[10px] uppercase tracking-[0.2em] tech-tracking ${theme === "dark"
                  ? "bg-primary shadow-[0_0_20px_rgba(197,160,89,0.3)] hover:shadow-primary/50"
                  : "bg-matte-charcoal text-white shadow-xl hover:bg-black"
                  } ${inter.className}`}
              >
                Launch App
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-4 lg:hidden">
            <DarkModeToggle />
            <button
              className={`${linkColor} p-2 rounded-xl glass-pill focus:outline-none transition-transform active:scale-90 border ${theme === "dark" ? "border-white/10" : "border-slate-200"}`}
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <XMarkIcon className="w-6 h-6 text-primary" /> : <Bars3Icon className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className={`lg:hidden ${mobileMenuBg} transition-all duration-500 animate-in fade-in slide-in-from-top-4`}>
            {[
              { href: "#about", label: "About" },
              { href: "#pillars", label: "Ecosystem" },
              { href: "#academy", label: "Academy" },
              { href: "https://doc.stoicpips.com", label: "Docs" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`${linkColor} hover:text-primary block font-black py-3 transition-colors tech-tracking uppercase text-[10px] tracking-[0.2em] ${inter.className}`}
              >
                {item.label}
              </Link>
            ))}

            {/* Mobile CTA Button */}
            <Link
              href="https://dunam.stoicpips.com"
              onClick={() => setIsOpen(false)}
              className={`block w-full mt-6 px-6 py-4 rounded-2xl font-black uppercase tracking-[0.2em] text-[10px] transition-all duration-300 tech-tracking ${theme === "dark"
                ? "bg-primary text-matte-charcoal shadow-lg shadow-primary/25"
                : "bg-matte-charcoal text-white"
                } ${inter.className}`}
            >
              Launch Platform
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}