import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import ContactForm from "./ContactForm";
import { Playfair_Display, Inter } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["700", "900"],
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export default function ContactCTA() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const currentTheme = mounted ? theme : 'light';

  const sectionBg = currentTheme === "dark" 
    ? "bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900" 
    : "bg-gradient-to-br from-white via-blue-50 to-purple-50";

  const gradientText = currentTheme === "dark" 
    ? "bg-gradient-to-r from-purple-400 via-pink-400 to-red-400"
    : "bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600";

  const buttonGradient = currentTheme === "dark"
    ? "bg-gradient-to-r from-purple-500 to-pink-500"
    : "bg-gradient-to-r from-blue-500 to-purple-600";

  if (!mounted) {
    return (
      <section className="min-h-screen flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-4xl mx-auto w-full text-center">
          <div className="h-12 bg-gray-200 dark:bg-gray-700 rounded-2xl max-w-md mx-auto mb-6 animate-pulse"></div>
          <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded-xl max-w-2xl mx-auto mb-16"></div>
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-3xl p-8 border border-white/20 dark:border-gray-700/50 shadow-2xl animate-pulse">
            <div className="space-y-4">
              <div className="h-12 bg-gray-200 dark:bg-gray-700 rounded-xl"></div>
              <div className="h-12 bg-gray-200 dark:bg-gray-700 rounded-xl"></div>
              <div className="h-32 bg-gray-200 dark:bg-gray-700 rounded-xl"></div>
              <div className="h-12 bg-gray-200 dark:bg-gray-700 rounded-xl"></div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      id="contact"
      className={`relative min-h-screen flex items-center justify-center py-24 px-4 sm:px-6 lg:px-8 overflow-hidden transition-all duration-700 ${sectionBg}`}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className={`absolute top-1/4 left-1/4 w-72 h-72 rounded-full blur-3xl opacity-10 ${
          currentTheme === "dark" ? "bg-purple-500" : "bg-blue-400"
        }`}></div>
        <div className={`absolute bottom-1/4 right-1/4 w-72 h-72 rounded-full blur-3xl opacity-10 ${
          currentTheme === "dark" ? "bg-pink-500" : "bg-purple-400"
        }`}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto w-full z-10">
        {/* Header Section */}
        <div className="text-center mb-20">
          {/* Section Badge */}
          <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border backdrop-blur-sm mb-6 ${
            currentTheme === "dark"
              ? "border-purple-500/30 bg-purple-500/10 text-purple-200"
              : "border-blue-500/30 bg-blue-500/10 text-blue-700"
          }`}>
            <span className="w-2 h-2 bg-current rounded-full animate-pulse"></span>
            <span className={`text-sm font-medium ${inter.className}`}>Get In Touch</span>
          </div>
          
          {/* Main Heading */}
          <h1 className={`${playfair.className} text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight ${
            currentTheme === "dark" ? "text-white" : "text-gray-900"
          }`}>
            Start Your{" "}
            <span className={`bg-clip-text text-transparent ${gradientText}`}>
              Trading Journey
            </span>
          </h1>
          
          {/* Subheading */}
          <p className={`max-w-2xl mx-auto text-lg md:text-xl leading-relaxed ${inter.className} ${
            currentTheme === "dark" ? "text-gray-300" : "text-gray-600"
          }`}>
            Ready to transform your trading? Let's discuss how we can help you achieve consistent profitability and financial freedom.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h2 className={`text-3xl font-bold mb-4 ${playfair.className} ${
                currentTheme === "dark" ? "text-white" : "text-gray-900"
              }`}>
                Why Choose Stoic Pips?
              </h2>
              <div className="space-y-4">
                {[
                  {
                    icon: "🎯",
                    title: "Proven Strategies",
                    description: "Learn institutional trading methods that actually work"
                  },
                  {
                    icon: "🧠",
                    title: "Mindset Coaching",
                    description: "Develop the discipline needed for consistent success"
                  },
                  {
                    icon: "📈",
                    title: "Live Mentorship",
                    description: "Get personalized guidance from experienced traders"
                  },
                  {
                    icon: "🤝",
                    title: "Community Support",
                    description: "Join a network of dedicated traders"
                  }
                ].map((item, index) => (
                  <div key={index} className={`flex items-start gap-4 p-4 rounded-2xl backdrop-blur-sm border transition-all duration-300 ${
                    currentTheme === "dark"
                      ? "bg-gray-800/50 border-gray-700 hover:border-purple-500/30"
                      : "bg-white/50 border-gray-200 hover:border-blue-500/30"
                  }`}>
                    <span className="text-2xl">{item.icon}</span>
                    <div>
                      <h3 className={`font-semibold mb-1 ${inter.className} ${
                        currentTheme === "dark" ? "text-white" : "text-gray-900"
                      }`}>
                        {item.title}
                      </h3>
                      <p className={`text-sm ${inter.className} ${
                        currentTheme === "dark" ? "text-gray-300" : "text-gray-600"
                      }`}>
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Contact */}
            <div className={`p-6 rounded-3xl backdrop-blur-sm border ${
              currentTheme === "dark"
                ? "bg-gray-800/50 border-gray-700"
                : "bg-white/50 border-gray-200"
            }`}>
              <h3 className={`text-xl font-bold mb-4 ${inter.className} ${
                currentTheme === "dark" ? "text-white" : "text-gray-900"
              }`}>
                Quick Contact
              </h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <span className={`p-2 rounded-lg ${
                    currentTheme === "dark" ? "bg-purple-500/20" : "bg-blue-500/20"
                  }`}>
                    📧
                  </span>
                  <div>
                    <p className={`font-medium ${inter.className} ${
                      currentTheme === "dark" ? "text-gray-200" : "text-gray-700"
                    }`}>
                      support@stoicpips.com
                    </p>
                    <p className={`text-sm ${currentTheme === "dark" ? "text-gray-400" : "text-gray-500"}`}>
                      Email Support
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className={`p-2 rounded-lg ${
                    currentTheme === "dark" ? "bg-pink-500/20" : "bg-purple-500/20"
                  }`}>
                    ⚡
                  </span>
                  <div>
                    <p className={`font-medium ${inter.className} ${
                      currentTheme === "dark" ? "text-gray-200" : "text-gray-700"
                    }`}>
                      24-48 Hour Response
                    </p>
                    <p className={`text-sm ${currentTheme === "dark" ? "text-gray-400" : "text-gray-500"}`}>
                      Quick Replies
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form Container */}
          <div className={`
            relative rounded-3xl p-8 backdrop-blur-xl border-2 transition-all duration-500 hover:shadow-2xl
            ${currentTheme === "dark" 
              ? "bg-gray-800/50 border-gray-700 hover:border-purple-500/50 shadow-xl" 
              : "bg-white/80 border-gray-200 hover:border-blue-500/50 shadow-2xl"
            }
          `}>
            <ContactForm />
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className={`inline-flex flex-col sm:flex-row items-center gap-6 p-8 rounded-3xl backdrop-blur-sm border max-w-4xl mx-auto ${
            currentTheme === "dark"
              ? "bg-gray-800/50 border-gray-700"
              : "bg-white/50 border-gray-200"
          }`}>
            <div className="text-left">
              <h3 className={`text-xl font-bold mb-2 ${inter.className} ${
                currentTheme === "dark" ? "text-white" : "text-gray-900"
              }`}>
                Ready to Transform Your Trading?
              </h3>
              <p className={`${inter.className} ${
                currentTheme === "dark" ? "text-gray-300" : "text-gray-600"
              }`}>
                Join 2,000+ successful traders who changed their financial future.
              </p>
            </div>
            <a
              href="#contact"
              className={`px-8 py-3 rounded-2xl font-semibold text-white transition-all duration-300 hover:scale-105 ${buttonGradient}`}
            >
              Start Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}