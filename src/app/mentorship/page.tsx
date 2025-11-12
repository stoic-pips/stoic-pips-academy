"use client";

import { useTheme } from "next-themes";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Button from "../components/button/Button";
import WhyJoinAccordion from "./program/WhyJoinProgram";
import SubPageLayout from "../components/layout/SubPageLayout";
import Curiculum from "./curriculum/Curriculum";
import { Playfair_Display, Inter } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["700", "900"],
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export default function MentorshipPage() {
  const { theme } = useTheme();
  const router = useRouter();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const currentTheme = mounted ? theme : 'light';


  if (!mounted) {
    return (
      <SubPageLayout>
        <section className="min-h-screen px-6 py-20 bg-white dark:bg-gray-900 animate-pulse">
          <div className="max-w-7xl mx-auto space-y-16">
            <div className="text-center">
              <div className="h-16 bg-gray-200 dark:bg-gray-700 rounded-2xl max-w-2xl mx-auto mb-4"></div>
              <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded max-w-3xl mx-auto"></div>
            </div>
          </div>
        </section>
      </SubPageLayout>
    );
  }

  const sectionBg = currentTheme === "dark" 
    ? "bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900" 
    : "bg-gradient-to-br from-white via-blue-50 to-purple-50";

  const headingColor = currentTheme === "dark" ? "text-white" : "text-gray-900";
  const textColor = currentTheme === "dark" ? "text-gray-300" : "text-gray-600";
  const cardBg = currentTheme === "dark"
    ? "bg-gray-800/50 backdrop-blur-sm border border-gray-700"
    : "bg-white/80 backdrop-blur-sm border border-gray-200";

  const gradientText = currentTheme === "dark" 
    ? "bg-gradient-to-r from-purple-400 via-pink-400 to-red-400"
    : "bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600";

  const buttonGradient = currentTheme === "dark"
    ? "bg-gradient-to-r from-purple-500 to-pink-500"
    : "bg-gradient-to-r from-blue-500 to-purple-600";

  return (
    <SubPageLayout>
      <section className={`min-h-screen px-4 sm:px-6 lg:px-8 py-24 transition-all duration-700 ${sectionBg}`}>
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className={`absolute top-1/4 -left-20 w-80 h-80 rounded-full blur-3xl opacity-10 ${
            theme === "dark" ? "bg-purple-500" : "bg-blue-400"
          }`} />
          <div className={`absolute bottom-1/4 -right-20 w-96 h-96 rounded-full blur-3xl opacity-10 ${
            theme === "dark" ? "bg-pink-500" : "bg-purple-400"
          }`} />
        </div>

        <div className="relative max-w-7xl mx-auto space-y-20 z-10">
          {/* Hero Section */}
          <div className="text-center">
            {/* Section Badge */}
            <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border backdrop-blur-sm mb-6 ${
              theme === "dark"
                ? "border-purple-500/30 bg-purple-500/10 text-purple-200"
                : "border-blue-500/30 bg-blue-500/10 text-blue-700"
            }`}>
              <span className="w-2 h-2 bg-current rounded-full animate-pulse"></span>
              <span className={`text-sm font-medium ${inter.className}`}>Premium Mentorship</span>
            </div>

            <h1 className={`${playfair.className} text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight ${headingColor}`}>
              Stoic Pips{" "}
              <span className={`bg-clip-text text-transparent ${gradientText}`}>
                Mentorship
              </span>{" "}
              Program
            </h1>
            <p className={`max-w-3xl mx-auto text-lg md:text-xl leading-relaxed ${inter.className} ${textColor}`}>
              Master Synthetic Indices & Forex with professional price action, supply & demand strategies. 
              Transform from beginner to confident trader with personalized, step-by-step guidance.
            </p>
          </div>

          {/* Why Join Section */}
          <WhyJoinAccordion
            headingColor={headingColor}
            textColor={textColor}
            cardBg={cardBg}
          />

          {/* Curriculum Section */}
          <Curiculum />

          {/* Student Results */}
          <div>
            <div className="text-center mb-12">
              <h2 className={`${playfair.className} text-3xl md:text-4xl font-bold mb-4 ${headingColor}`}>
                Student{" "}
                <span className={`bg-clip-text text-transparent ${gradientText}`}>
                  Success Stories
                </span>
              </h2>
              <p className={`max-w-2xl mx-auto text-lg ${inter.className} ${textColor}`}>
                Hear from traders who transformed their results with our mentorship program
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className={`p-8 rounded-3xl backdrop-blur-sm border-2 transition-all duration-300 hover:scale-105 ${cardBg} ${
                theme === "dark" ? "hover:border-purple-500/50" : "hover:border-blue-500/50"
              }`}>
                <div className={`text-6xl mb-4 text-center ${theme === "dark" ? "text-purple-400" : "text-blue-500"}`}>"</div>
                <p className={`text-lg leading-relaxed italic mb-6 ${inter.className} ${textColor}`}>
                  "I used to blow accounts, but now I trade with discipline and patience. 
                  I made my first 20% month thanks to this mentorship's structured approach."
                </p>
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                    theme === "dark" ? "bg-purple-500/20" : "bg-blue-500/20"
                  }`}>
                    <span className="text-lg">👤</span>
                  </div>
                  <div>
                    <p className={`font-bold ${inter.className} ${
                      theme === "dark" ? "text-purple-300" : "text-blue-600"
                    }`}>Brian K.</p>
                    <p className={`text-sm ${inter.className} ${textColor}`}>6 Months Trading</p>
                  </div>
                </div>
              </div>
              
              <div className={`p-8 rounded-3xl backdrop-blur-sm border-2 transition-all duration-300 hover:scale-105 ${cardBg} ${
                theme === "dark" ? "hover:border-pink-500/50" : "hover:border-purple-500/50"
              }`}>
                <div className={`text-6xl mb-4 text-center ${theme === "dark" ? "text-pink-400" : "text-purple-500"}`}>"</div>
                <p className={`text-lg leading-relaxed italic mb-6 ${inter.className} ${textColor}`}>
                  "Daniel's mentorship gave me clarity on supply & demand. I now wait for quality setups 
                  and avoid overtrading. My consistency has improved dramatically."
                </p>
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                    theme === "dark" ? "bg-pink-500/20" : "bg-purple-500/20"
                  }`}>
                    <span className="text-lg">👤</span>
                  </div>
                  <div>
                    <p className={`font-bold ${inter.className} ${
                      theme === "dark" ? "text-pink-300" : "text-purple-600"
                    }`}>Sarah M.</p>
                    <p className={`text-sm ${inter.className} ${textColor}`}>4 Months Trading</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Pricing CTA */}
          <div className={`rounded-3xl p-12 text-center backdrop-blur-sm border-2 ${cardBg} ${
            theme === "dark" ? "border-purple-500/30" : "border-blue-500/30"
          }`}>
            <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border backdrop-blur-sm mb-6 ${
              theme === "dark"
                ? "border-purple-500/30 bg-purple-500/10 text-purple-200"
                : "border-blue-500/30 bg-blue-500/10 text-blue-700"
            }`}>
              <span className="w-2 h-2 bg-current rounded-full animate-pulse"></span>
              <span className={`text-sm font-medium ${inter.className}`}>Limited Time Offer</span>
            </div>

            <h2 className={`${playfair.className} text-3xl md:text-4xl font-bold mb-4 ${headingColor}`}>
              Start Your Trading{" "}
              <span className={`bg-clip-text text-transparent ${gradientText}`}>
                Transformation
              </span>
            </h2>
            
            <p className={`max-w-2xl mx-auto text-lg mb-8 ${inter.className} ${textColor}`}>
              One-time payment — lifetime access to all mentorship sessions, materials, and community support.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-8">
              <div className="text-center">
                <p className={`text-5xl md:text-6xl font-bold mb-2 ${inter.className} ${
                  theme === "dark" ? "text-purple-300" : "text-blue-600"
                }`}>
                  $199
                </p>
                <p className={`text-sm ${inter.className} ${textColor}`}>One-Time Payment</p>
              </div>
              
              <div className="h-16 w-px bg-gray-400/30 hidden sm:block"></div>
              
              <div className="text-center">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-green-500 text-xl">✓</span>
                  <p className={`font-semibold ${inter.className} ${headingColor}`}>Lifetime Access</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-500 text-xl">✓</span>
                  <p className={`font-semibold ${inter.className} ${headingColor}`}>Community Included</p>
                </div>
              </div>
            </div>

            <Button
              onClick={() => router.push("/checkout/mentorship")}
              className={`px-12 py-4 rounded-2xl font-semibold text-white transition-all duration-300 hover:scale-105 ${buttonGradient}`}
            >
              Enroll Now & Start Learning
            </Button>
            
            <p className={`mt-6 text-sm ${inter.className} ${textColor}`}>
              🔒 Secure checkout • 7-day money-back guarantee • Instant access
            </p>
          </div>
        </div>
      </section>
    </SubPageLayout>
  );
}