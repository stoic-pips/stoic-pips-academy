"use client";

import { useState } from "react";
import { useTheme } from "next-themes";
import { Playfair_Display, Inter } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["700", "900"],
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export default function NewsletterSection() {
  const { theme } = useTheme();
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);

    try {
      const response = await fetch('/api/newsletter/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      // Check if response is JSON
      const contentType = response.headers.get('content-type');
      if (!contentType || !contentType.includes('application/json')) {
        const text = await response.text();
        console.error('❌ Server returned non-JSON response:', text.substring(0, 200));
        throw new Error('Server error: Invalid response format');
      }

      const result = await response.json();

      if (response.ok) {
        setIsSubscribed(true);
        setEmail("");
        console.log("✅ Successfully subscribed:", email);
      } else {
        console.error("❌ Subscription failed:", result.error);
        alert(result.error || 'Subscription failed. Please try again.');
      }
    } catch (error: any) {
      console.error("❌ Error subscribing:", error);
      alert(error.message || 'Network error. Please check your connection and try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const sectionBg = theme === "dark" 
    ? "bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900" 
    : "bg-gradient-to-br from-white via-blue-50 to-purple-50";

  const cardBg = theme === "dark"
    ? "bg-gray-800/50 backdrop-blur-sm border border-gray-700"
    : "bg-white/80 backdrop-blur-sm border border-gray-200";

  const gradientText = theme === "dark" 
    ? "bg-gradient-to-r from-purple-400 via-pink-400 to-red-400"
    : "bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600";

  const textColor = theme === "dark" ? "text-gray-300" : "text-gray-600";
  const headingColor = theme === "dark" ? "text-white" : "text-gray-900";

  const benefits = [
    {
      icon: "💎",
      title: "Weekly Market Analysis",
      description: "Professional insights on current market conditions"
    },
    {
      icon: "🎯",
      title: "Trading Strategies",
      description: "Actionable setups and risk management tips"
    },
    {
      icon: "🚀",
      title: "Exclusive Content",
      description: "Content not shared anywhere else"
    },
    {
      icon: "📈",
      title: "Performance Tips",
      description: "Psychology and mindset guidance"
    }
  ];

  return (
    <section className={`py-20 px-4 sm:px-6 lg:px-8 transition-all duration-700 ${sectionBg}`}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border backdrop-blur-sm mb-6 ${
            theme === "dark"
              ? "border-purple-500/30 bg-purple-500/10 text-purple-200"
              : "border-blue-500/30 bg-blue-500/10 text-blue-700"
          }`}>
            <span className="w-2 h-2 bg-current rounded-full animate-pulse"></span>
            <span className={`text-sm font-medium ${inter.className}`}>Newsletter</span>
          </div>

          <h2 className={`${playfair.className} text-3xl md:text-4xl font-bold mb-4 ${headingColor}`}>
            Join the{" "}
            <span className={`bg-clip-text text-transparent ${gradientText}`}>
              Stoic Pips
            </span>{" "}
            Inner Circle
          </h2>
          <p className={`max-w-2xl mx-auto text-lg ${inter.className} ${textColor}`}>
            Get exclusive trading insights, market analysis, and professional strategies delivered weekly.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Benefits List */}
          <div className="space-y-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className={`flex-shrink-0 w-12 h-12 rounded-2xl flex items-center justify-center ${
                  theme === "dark" 
                    ? "bg-purple-500/20 border border-purple-500/30" 
                    : "bg-blue-500/20 border border-blue-500/30"
                }`}>
                  <span className="text-xl">{benefit.icon}</span>
                </div>
                <div>
                  <h3 className={`font-bold mb-1 ${inter.className} ${headingColor}`}>
                    {benefit.title}
                  </h3>
                  <p className={`text-sm ${inter.className} ${textColor}`}>
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Signup Form */}
          <div className={`p-8 rounded-3xl backdrop-blur-sm border-2 ${cardBg}`}>
            {isSubscribed ? (
              <div className="text-center">
                <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${
                  theme === "dark" 
                    ? "bg-green-500/20 border border-green-500/30" 
                    : "bg-green-500/20 border border-green-500/30"
                }`}>
                  <span className="text-2xl text-green-500">✅</span>
                </div>
                <h3 className={`text-xl font-bold mb-2 ${inter.className} ${headingColor}`}>
                  Welcome Aboard!
                </h3>
                <p className={`${inter.className} ${textColor}`}>
                  You've successfully joined the Stoic Pips newsletter. 
                  Check your email for a welcome message and get ready for valuable trading insights!
                </p>
              </div>
            ) : (
              <>
                <h3 className={`text-xl font-bold mb-4 text-center ${inter.className} ${headingColor}`}>
                  Start Receiving Insights
                </h3>
                <form onSubmit={handleSubscribe} className="space-y-4">
                  <div>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your best email"
                      className={`w-full px-4 py-3 rounded-xl border-2 ${inter.className} ${
                        theme === "dark" 
                          ? "border-gray-600 bg-gray-700/50 text-white placeholder-gray-400 focus:border-purple-500" 
                          : "border-gray-300 bg-white text-gray-900 placeholder-gray-500 focus:border-blue-500"
                      } focus:outline-none focus:ring-2 focus:ring-opacity-20 transition-all duration-300`}
                      required
                      disabled={isLoading}
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={isLoading}
                    className={`w-full py-3 rounded-xl font-semibold text-white transition-all duration-300 ${
                      theme === "dark"
                        ? "bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
                        : "bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
                    } hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed ${inter.className}`}
                  >
                    {isLoading ? (
                      <div className="flex items-center justify-center gap-2">
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>Subscribing...</span>
                      </div>
                    ) : (
                      "Join Our Free Newsletter"
                    )}
                  </button>
                  <p className={`text-xs text-center ${inter.className} ${
                    theme === "dark" ? "text-gray-400" : "text-gray-500"
                  }`}>
                    Join 2,000+ traders. No spam, unsubscribe anytime.
                  </p>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}