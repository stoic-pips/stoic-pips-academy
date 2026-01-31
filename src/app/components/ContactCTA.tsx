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
    ? "bg-background"
    : "bg-white";

  const cardBg = currentTheme === "dark"
    ? "bg-[#1B1B1B]/90 backdrop-blur-sm border border-white/5"
    : "bg-slate-50 border border-slate-200";

  const headingColor = currentTheme === "dark" ? "text-white" : "text-gray-900";

  return (
    <section id="contact" className={`relative py-32 px-6 overflow-hidden ${sectionBg}`}>

      {/* Cinematic Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent ${currentTheme === "dark" ? "via-[#C5A059]/30" : "via-[#C5A059]/10"} to-transparent`}></div>
        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] ${currentTheme === "dark" ? "bg-[#C5A059]/5" : "bg-[#C5A059]/3"} blur-[150px] rounded-full`}></div>
      </div>

      <div className="relative max-w-7xl mx-auto space-y-24">
        {/* Header Section */}
        <div className="text-center">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-white/10 glass-pill text-[#708090] mb-8">
            <span className="text-sm font-black uppercase tracking-[0.2em] tech-tracking">Institutional Inquiry</span>
          </div>

          <h2 className={`${playfair.className} text-4xl md:text-5xl xl:text-6xl font-black mb-8 leading-tight ${headingColor}`}>
            Begin Your <br />
            <span className="text-gradient-emerald-gold italic">Ascension.</span>
          </h2>

          <p className={`max-w-3xl mx-auto text-xl leading-relaxed opacity-70 ${inter.className}`}>
            Initiate a high-level dialogue with our executive desk or sync directly with the <span className={theme === "dark" ? "text-white font-bold" : "text-gray-900 font-bold"}>Dunam Ai</span> infrastructure.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-20 items-stretch">
          {/* Institutional Intelligence Card */}
          <div className="luminous-card p-1 bg-gradient-to-br from-[#C5A059]/20 via-white/5 to-[#708090]/20">
            <div className={`${cardBg} rounded-[1.9rem] p-12 h-full flex flex-col justify-between transition-colors duration-500`}>
              <div className="space-y-12">
                <h3 className={`text-3xl font-black ${headingColor}`}>Elite <span className="text-[#C5A059]">Benefits.</span></h3>

                <div className="space-y-8">
                  {[
                    { title: "Quantum Signal Engine", desc: "Access the flagship Dunam Ai technical infrastructure.", icon: "⚡" },
                    { title: "Institutional Mentorship", desc: "Direct consultation with master algorithmic traders.", icon: "🏛️" },
                    { title: "Executive Ecosystem", desc: "Member-only networking and liquidity events.", icon: "💎" }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-6 group">
                      <div className={`w-14 h-14 rounded-2xl glass-pill flex items-center justify-center text-2xl group-hover:border-[#C5A059]/40 transition-all border ${theme === "dark" ? "border-white/10" : "border-slate-200"}`}>
                        {item.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className={`font-black text-lg mb-1 ${headingColor}`}>{item.title}</h4>
                        <p className="text-sm opacity-50 leading-relaxed font-medium">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className={`mt-16 pt-12 border-t ${theme === "dark" ? "border-white/5" : "border-slate-100"} flex items-center gap-8`}>
                <div className="flex -space-x-4">
                  {[1, 2, 3, 4].map(i => (
                    <div key={i} className={`w-10 h-10 rounded-full border-2 ${theme === "dark" ? "border-[#121212] bg-[#1B1B1B]" : "border-white bg-slate-100"}`}></div>
                  ))}
                </div>
                <div className="text-[10px] font-black uppercase tracking-[0.2em] opacity-40 tech-tracking">
                  Join 2,000+ Professionals
                </div>
              </div>
            </div>
          </div>

          {/* Secure Transmission Card (The Form) */}
          <div className={`luminous-card p-12 ${theme === "dark" ? "bg-[#1B1B1B]/40" : "bg-slate-50"} relative flex flex-col justify-center border ${theme === "dark" ? "border-white/5" : "border-slate-200"} rounded-[2rem]`}>
            <div className="absolute top-8 right-8 text-[10px] font-black uppercase tracking-[0.3em] opacity-40 tech-tracking">
              Secure Transmission &bull; AES-256
            </div>
            <ContactForm />
          </div>
        </div>

        {/* Global Support Bridge */}
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { label: "Executive Desk", value: "support@stoicpips.com", icon: "📧" },
            { label: "Direct Sync", value: "+256 706 045 809", icon: "📱" },
            { label: "System Status", value: "Operational", icon: "🟢" }
          ].map((item, i) => (
            <div key={i} className={`glass-pill px-8 py-6 flex items-center gap-6 group hover:border-[#C5A059]/20 transition-all border ${theme === "dark" ? "border-white/5" : "border-slate-200"}`}>
              <span className="text-2xl">{item.icon}</span>
              <div className="flex flex-col">
                <span className="text-[10px] font-black uppercase tracking-[0.2em] opacity-40 tech-tracking">{item.label}</span>
                <span className={`text-sm font-black opacity-80 group-hover:text-[#C5A059] transition-colors ${theme === "dark" ? "" : "text-gray-900"}`}>{item.value}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}