"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Playfair_Display, Inter } from "next/font/google";
import { useRouter } from "next/navigation";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["700", "900"],
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export default function Custom404() {
  const { theme } = useTheme();
  const router = useRouter();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900 animate-pulse">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="h-16 bg-gray-200 dark:bg-gray-700 rounded-2xl max-w-md mx-auto mb-6"></div>
          <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded max-w-xl mx-auto mb-8"></div>
          <div className="h-12 bg-gray-200 dark:bg-gray-700 rounded-xl max-w-sm mx-auto"></div>
        </div>
      </div>
    );
  }

  const sectionBg = theme === "dark" 
    ? "bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900" 
    : "bg-gradient-to-br from-white via-blue-50 to-purple-50";

  const gradientText = theme === "dark" 
    ? "bg-gradient-to-r from-purple-400 via-pink-400 to-red-400"
    : "bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600";

  const buttonGradient = theme === "dark"
    ? "bg-gradient-to-r from-purple-500 to-pink-500"
    : "bg-gradient-to-r from-blue-500 to-purple-600";

  return (
    <div className={`min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 transition-all duration-700 ${sectionBg}`}>
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className={`absolute top-1/4 -left-20 w-80 h-80 rounded-full blur-3xl opacity-10 ${
          theme === "dark" ? "bg-purple-500" : "bg-blue-400"
        }`} />
        <div className={`absolute bottom-1/4 -right-20 w-96 h-96 rounded-full blur-3xl opacity-10 ${
          theme === "dark" ? "bg-pink-500" : "bg-purple-400"
        }`} />
      </div>

      <div className="relative max-w-2xl mx-auto text-center z-10">
        {/* Error Code */}
        <div className="mb-8">
          <div className={`text-8xl md:text-9xl font-bold mb-4 ${playfair.className} ${
            theme === "dark" ? "text-gray-700" : "text-gray-200"
          }`}>
            404
          </div>
          <div className={`relative -mt-20 md:-mt-24 ${playfair.className}`}>
            <h1 className={`text-4xl md:text-5xl font-bold mb-4 ${
              theme === "dark" ? "text-white" : "text-gray-900"
            }`}>
              Page{" "}
              <span className={`bg-clip-text text-transparent ${gradientText}`}>
                Not Found
              </span>
            </h1>
          </div>
        </div>

        {/* Message */}
        <p className={`max-w-md mx-auto text-lg md:text-xl leading-relaxed mb-8 ${inter.className} ${
          theme === "dark" ? "text-gray-300" : "text-gray-600"
        }`}>
          The page you're looking for doesn't exist or is still under development. 
          Let's get you back to trading success!
        </p>

        {/* Illustration/Icon */}
        <div className="mb-8">
          <div className={`inline-flex items-center justify-center w-24 h-24 rounded-3xl mb-4 ${
            theme === "dark" 
              ? "bg-purple-500/20 border border-purple-500/30" 
              : "bg-blue-500/20 border border-blue-500/30"
          }`}>
            <span className="text-4xl">🔍</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <button
            onClick={() => router.back()}
            className={`px-8 py-3 rounded-2xl font-semibold transition-all duration-300 ${
              theme === "dark"
                ? "bg-purple-500/10 border border-purple-500/30 text-purple-300 hover:bg-purple-500/20"
                : "bg-blue-500/10 border border-blue-500/30 text-blue-700 hover:bg-blue-500/20"
            } hover:scale-105 ${inter.className}`}
          >
            ← Go Back
          </button>
          
          <Link
            href="/"
            className={`px-8 py-3 rounded-2xl font-semibold text-white transition-all duration-300 ${buttonGradient} hover:scale-105 ${inter.className}`}
          >
            Home Page
          </Link>
        </div>

        {/* Quick Links */}
        <div className={`p-6 rounded-3xl backdrop-blur-sm border ${
          theme === "dark"
            ? "bg-gray-800/50 border-gray-700"
            : "bg-white/80 border-gray-200"
        }`}>
          <h3 className={`text-lg font-bold mb-4 ${inter.className} ${
            theme === "dark" ? "text-white" : "text-gray-900"
          }`}>
            Popular Pages
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { href: "/mentorship", label: "Mentorship", icon: "🎯" },
              { href: "/services", label: "Services", icon: "💼" },
              { href: "/brokers", label: "Brokers", icon: "📊" },
              { href: "/course", label: "Courses", icon: "📚" },
            ].map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className={`flex items-center gap-3 p-3 rounded-xl transition-all duration-300 ${
                  theme === "dark"
                    ? "bg-gray-700/50 hover:bg-gray-700 text-gray-300"
                    : "bg-gray-100 hover:bg-gray-200 text-gray-700"
                } hover:scale-105 ${inter.className}`}
              >
                <span className="text-lg">{link.icon}</span>
                <span className="font-medium">{link.label}</span>
              </Link>
            ))}
          </div>
        </div>

        {/* Support Contact */}
        <div className="mt-8">
          <p className={`text-sm ${inter.className} ${
            theme === "dark" ? "text-gray-400" : "text-gray-500"
          }`}>
            Need help?{" "}
            <a 
              href="mailto:support@stoicpips.com" 
              className={`font-semibold hover:underline ${
                theme === "dark" ? "text-purple-400" : "text-blue-600"
              }`}
            >
              Contact Support
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}