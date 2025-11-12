"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Playfair_Display, Inter } from "next/font/google";
import SubPageLayout from "../components/layout/SubPageLayout";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["700", "900"],
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export default function Courses() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <SubPageLayout>
        <section className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900 animate-pulse">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="h-16 bg-gray-200 dark:bg-gray-700 rounded-2xl max-w-md mx-auto mb-6"></div>
            <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded max-w-2xl mx-auto mb-12"></div>
            <div className="h-12 bg-gray-200 dark:bg-gray-700 rounded-xl max-w-lg mx-auto"></div>
          </div>
        </section>
      </SubPageLayout>
    );
  }

  const sectionBg = theme === "dark" 
    ? "bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900" 
    : "bg-gradient-to-br from-white via-blue-50 to-purple-50";

  const gradientText = theme === "dark" 
    ? "bg-gradient-to-r from-purple-400 via-pink-400 to-red-400"
    : "bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600";

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    try {
      // Send to Formspree
      const response = await fetch("https://formspree.io/f/meorkqzl", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          _subject: "New Course Waitlist Subscriber",
          _replyto: email,
        }),
      });

      if (response.ok) {
        setIsSubscribed(true);
        setEmail("");
        console.log("Successfully subscribed:", email);
      } else {
        console.error("Subscription failed");
      }
    } catch (error) {
      console.error("Error subscribing:", error);
    }
  };

  return (
    <SubPageLayout>
      <section className={`min-h-screen flex items-center justify-center py-24 px-4 sm:px-6 lg:px-8 transition-all duration-700 ${sectionBg}`}>
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className={`absolute top-1/4 -left-20 w-80 h-80 rounded-full blur-3xl opacity-10 ${
            theme === "dark" ? "bg-purple-500" : "bg-blue-400"
          }`} />
          <div className={`absolute bottom-1/4 -right-20 w-96 h-96 rounded-full blur-3xl opacity-10 ${
            theme === "dark" ? "bg-pink-500" : "bg-purple-400"
          }`} />
        </div>

        <div className="relative max-w-4xl mx-auto text-center z-10">
          {/* Section Badge */}
          <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border backdrop-blur-sm mb-8 ${
            theme === "dark"
              ? "border-purple-500/30 bg-purple-500/10 text-purple-200"
              : "border-blue-500/30 bg-blue-500/10 text-blue-700"
          }`}>
            <span className="w-2 h-2 bg-current rounded-full animate-pulse"></span>
            <span className={`text-sm font-medium ${inter.className}`}>Coming Soon</span>
          </div>

          {/* Main Heading */}
          <h1 className={`${playfair.className} text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight ${
            theme === "dark" ? "text-white" : "text-gray-900"
          }`}>
            Advanced Trading{" "}
            <span className={`bg-clip-text text-transparent ${gradientText}`}>
              Course
            </span>
          </h1>

          {/* Subheading */}
          <p className={`max-w-2xl mx-auto text-lg md:text-xl lg:text-2xl leading-relaxed mb-12 ${inter.className} ${
            theme === "dark" ? "text-gray-300" : "text-gray-600"
          }`}>
            We're crafting something extraordinary for serious traders. 
            Get ready to elevate your trading to the next level.
          </p>

          {/* Countdown/Progress Section */}
          <div className={`max-w-md mx-auto p-8 rounded-3xl backdrop-blur-sm border-2 mb-12 ${
            theme === "dark"
              ? "bg-gray-800/50 border-gray-700"
              : "bg-white/80 border-gray-200"
          }`}>
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${
                theme === "dark" 
                  ? "bg-purple-500/20 border border-purple-500/30" 
                  : "bg-blue-500/20 border border-blue-500/30"
              }`}>
                <span className="text-2xl">⏳</span>
              </div>
              <div>
                <h3 className={`text-xl font-bold ${inter.className} ${
                  theme === "dark" ? "text-white" : "text-gray-900"
                }`}>
                  In Development
                </h3>
                <p className={`text-sm ${inter.className} ${
                  theme === "dark" ? "text-gray-400" : "text-gray-600"
                }`}>
                  Estimated launch: Q1 2026
                </p>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="mb-4">
              <div className={`h-2 rounded-full ${
                theme === "dark" ? "bg-gray-700" : "bg-gray-200"
              }`}>
                <div className="h-full rounded-full bg-gradient-to-r from-blue-500 to-purple-500 w-3/4 animate-pulse"></div>
              </div>
              <p className={`text-sm mt-2 ${inter.className} ${
                theme === "dark" ? "text-gray-400" : "text-gray-600"
              }`}>
                75% Complete
              </p>
            </div>
          </div>

          {/* Email Notification Signup */}
          <div className={`max-w-lg mx-auto p-8 rounded-3xl backdrop-blur-sm border-2 ${
            theme === "dark"
              ? "bg-gray-800/50 border-gray-700"
              : "bg-white/80 border-gray-200"
          }`}>
            {isSubscribed ? (
              <div className="text-center">
                <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${
                  theme === "dark" 
                    ? "bg-green-500/20 border border-green-500/30" 
                    : "bg-green-500/20 border border-green-500/30"
                }`}>
                  <span className="text-2xl text-green-500">✅</span>
                </div>
                <h3 className={`text-xl font-bold mb-2 ${inter.className} ${
                  theme === "dark" ? "text-white" : "text-gray-900"
                }`}>
                  You're on the list!
                </h3>
                <p className={`${inter.className} ${
                  theme === "dark" ? "text-gray-300" : "text-gray-600"
                }`}>
                  We'll notify you as soon as the course launches. Get ready for something special!
                </p>
              </div>
            ) : (
              <>
                <h3 className={`text-xl font-bold mb-4 text-center ${inter.className} ${
                  theme === "dark" ? "text-white" : "text-gray-900"
                }`}>
                  Get Notified First
                </h3>
                <p className={`text-center mb-6 ${inter.className} ${
                  theme === "dark" ? "text-gray-300" : "text-gray-600"
                }`}>
                  Be the first to know when we launch and get exclusive early access offers.
                </p>
                <form onSubmit={handleSubscribe} className="space-y-4">
                  <div className="flex flex-col sm:flex-row gap-3">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      className={`flex-1 px-4 py-3 rounded-xl border-2 ${inter.className} ${
                        theme === "dark" 
                          ? "border-gray-600 bg-gray-700/50 text-white placeholder-gray-400 focus:border-purple-500" 
                          : "border-gray-300 bg-white text-gray-900 placeholder-gray-500 focus:border-blue-500"
                      } focus:outline-none focus:ring-2 focus:ring-opacity-20 transition-all duration-300`}
                      required
                    />
                    <button
                      type="submit"
                      className={`px-6 py-3 rounded-xl font-semibold text-white transition-all duration-300 ${
                        theme === "dark"
                          ? "bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
                          : "bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
                      } hover:scale-105 ${inter.className}`}
                    >
                      Notify Me
                    </button>
                  </div>
                </form>
              </>
            )}
          </div>

          {/* Additional Info */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {[
              {
                icon: "🎯",
                title: "Advanced Strategies",
                description: "Professional trading methodologies"
              },
              {
                icon: "📊",
                title: "Live Analysis",
                description: "Real market case studies"
              },
              {
                icon: "🚀",
                title: "Expert Insights",
                description: "From years of trading experience"
              }
            ].map((feature, index) => (
              <div key={index} className={`p-6 rounded-2xl backdrop-blur-sm border ${
                theme === "dark"
                  ? "bg-gray-800/30 border-gray-700"
                  : "bg-white/50 border-gray-200"
              }`}>
                <div className={`text-3xl mb-3 ${
                  theme === "dark" ? "text-purple-400" : "text-blue-500"
                }`}>
                  {feature.icon}
                </div>
                <h4 className={`font-bold mb-2 ${inter.className} ${
                  theme === "dark" ? "text-white" : "text-gray-900"
                }`}>
                  {feature.title}
                </h4>
                <p className={`text-sm ${inter.className} ${
                  theme === "dark" ? "text-gray-400" : "text-gray-600"
                }`}>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          {/* CTA to existing services */}
          <div className="mt-12 text-center">
            <p className={`mb-6 ${inter.className} ${
              theme === "dark" ? "text-gray-300" : "text-gray-600"
            }`}>
              In the meantime, check out our current offerings
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/mentorship"
                className={`px-8 py-3 rounded-2xl font-semibold transition-all duration-300 ${
                  theme === "dark"
                    ? "bg-purple-500/10 border border-purple-500/30 text-purple-300 hover:bg-purple-500/20"
                    : "bg-blue-500/10 border border-blue-500/30 text-blue-700 hover:bg-blue-500/20"
                } ${inter.className}`}
              >
                View Mentorship
              </a>
              <a
                href="/services"
                className={`px-8 py-3 rounded-2xl font-semibold text-white transition-all duration-300 ${
                  theme === "dark"
                    ? "bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
                    : "bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
                } ${inter.className}`}
              >
                Explore Services
              </a>
            </div>
          </div>
        </div>
      </section>
    </SubPageLayout>
  );
}