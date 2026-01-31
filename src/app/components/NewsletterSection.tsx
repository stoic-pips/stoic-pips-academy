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
    ? "bg-background"
    : "bg-white";

  const cardBg = theme === "dark"
    ? "bg-[#1B1B1B]/90 backdrop-blur-sm border border-white/5"
    : "bg-slate-50 border border-slate-200";

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
    <section className={`py-32 px-6 overflow-hidden ${sectionBg}`}>
      <div className="max-w-7xl mx-auto space-y-20">
        <div className="text-center">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-white/10 glass-pill text-[#708090] mb-8">
            <span className="text-sm font-black uppercase tracking-[0.2em] tech-tracking">Institutional Intelligence</span>
          </div>

          <h2 className={`${playfair.className} text-4xl md:text-5xl font-black mb-8 ${headingColor}`}>
            Master the <br />
            <span className="text-gradient-emerald-gold italic">Spectrum.</span>
          </h2>
          <p className={`max-w-3xl mx-auto text-xl opacity-70 leading-relaxed font-medium ${inter.className}`}>
            Join 2,000+ elite members receiving high-frequency market intelligence and <span className={theme === "dark" ? "text-white" : "text-gray-900"}>Dunam Ai</span> synchronization updates.
          </p>
        </div>

        <div className="luminous-card p-1 bg-gradient-to-r from-[#C5A059]/20 via-white/5 to-[#708090]/20 max-w-5xl mx-auto">
          <div className={`${cardBg} rounded-[1.9rem] p-12 md:p-16 flex flex-col lg:flex-row items-center gap-16 relative overflow-hidden transition-colors duration-500`}>

            {/* Benefits Grid */}
            <div className="lg:w-1/2 grid sm:grid-cols-2 gap-8">
              {benefits.map((benefit, i) => (
                <div key={i} className="space-y-4">
                  <div className={`w-12 h-12 rounded-2xl glass-pill flex items-center justify-center text-xl border ${theme === "dark" ? "border-white/10" : "border-slate-200"}`}>
                    {benefit.icon}
                  </div>
                  <h4 className={`font-black text-lg ${headingColor}`}>{benefit.title}</h4>
                  <p className="text-sm opacity-50 leading-relaxed">{benefit.description}</p>
                </div>
              ))}
            </div>

            <div className={`w-px h-64 ${theme === "dark" ? "bg-white/5" : "bg-slate-200"} hidden lg:block`}></div>

            {/* Subscription Form */}
            <div className="lg:w-1/2 w-full">
              {isSubscribed ? (
                <div className="text-center space-y-6">
                  <div className="w-20 h-20 rounded-full bg-[#C5A059]/20 border border-[#C5A059]/40 flex items-center justify-center mx-auto text-3xl text-[#C5A059]">
                    ✓
                  </div>
                  <h3 className={`text-3xl font-black ${headingColor}`}>Transmission <span className="text-[#C5A059]">Locked.</span></h3>
                  <p className="opacity-60">Success. You are now synchronized with our intelligence stream.</p>
                </div>
              ) : (
                <div className="space-y-10">
                  <div className="space-y-2">
                    <h3 className={`text-3xl font-black ${headingColor}`}>Join the <span className="text-[#C5A059]">Core.</span></h3>
                    <p className="text-xs opacity-40 uppercase tracking-[0.2em] font-black tech-tracking">Secure executive synchronization</p>
                  </div>

                  <form onSubmit={handleSubscribe} className="space-y-4">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Your primary secure email"
                      className={`w-full bg-white/5 border rounded-2xl px-8 py-5 outline-none transition-all font-bold ${theme === "dark" ? "border-white/10 focus:border-[#C5A059]/50 text-white" : "border-slate-200 focus:border-[#C5A059] text-gray-900"
                        }`}
                      required
                      disabled={isLoading}
                    />
                    <button
                      type="submit"
                      disabled={isLoading}
                      className={`w-full py-5 rounded-2xl font-black uppercase tracking-[0.2em] text-[10px] text-white transition-all duration-500 hover:scale-[1.02] active:scale-95 disabled:opacity-50 tech-tracking ${theme === "dark"
                        ? "bg-[#C5A059] text-[#121212] shadow-[0_0_20px_rgba(197,160,89,0.3)] hover:shadow-[#C5A059]/50"
                        : "bg-[#121212] text-white shadow-xl hover:bg-black"
                        }`}
                    >
                      {isLoading ? "Synchronizing..." : "Initiate Access"}
                    </button>
                    <p className="text-[10px] text-center opacity-30 font-black uppercase tracking-[0.2em] tech-tracking">
                      Zero Spam &bull; Institutional Privacy &bull; 1-Click Unsubscribe
                    </p>
                  </form>
                </div>
              )}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}