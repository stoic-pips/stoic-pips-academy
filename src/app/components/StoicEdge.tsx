"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Playfair_Display, Inter } from "next/font/google";

const playfair = Playfair_Display({
    subsets: ["latin"],
    weight: ["700", "900"],
});

const inter = Inter({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600"],
});

export default function StoicEdge() {
    const { theme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <section id="stoic-edge" className={`relative py-32 px-6 overflow-hidden ${theme === "dark" ? "bg-background" : "bg-white"}`}>
            {/* Background elements */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[600px] h-[600px] bg-[#C5A059]/5 blur-[120px] rounded-full"></div>
            </div>

            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
                <div>
                    <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-[#C5A059]/30 bg-[#C5A059]/10 text-[#C5A059] mb-8">
                        <span className="text-sm font-black uppercase tracking-[0.2em] tech-tracking">The Philosophy</span>
                    </div>

                    <h2 className={`${playfair.className} text-4xl md:text-5xl font-black mb-8 leading-relaxed ${theme === "dark" ? "text-white" : "text-gray-900"}`}>
                        The <span className="text-gradient-emerald-gold italic">Stoic Edge</span> <br />
                        Coded into Reality.
                    </h2>

                    <p className={`text-xl leading-relaxed opacity-70 mb-12 ${inter.className}`}>
                        We've taken the timeless principles of Marcus Aurelius and engineered them into the very core of Dunam AI. Risk management is no longer a choice—it's an algorithm.
                    </p>

                    <div className="space-y-6">
                        {[
                            { title: "Amor Fati", description: "Accepting market outcomes without emotional turbulence." },
                            { title: "Premeditatio Malorum", description: "Advanced risk mitigation protocols for every possible downside." },
                            { title: "Dichotomy of Control", description: "Focusing execution solely on high-probability variables." }
                        ].map((principle, i) => (
                            <div key={i} className="flex gap-6 items-start">
                                <span className="text-[#C5A059] font-black text-2xl">0{i + 1}</span>
                                <div>
                                    <h4 className="font-black text-lg mb-1">{principle.title}</h4>
                                    <p className="opacity-60 text-sm">{principle.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="relative">
                    <div className="luminous-card p-1 bg-gradient-to-br from-[#C5A059]/20 via-white/5 to-[#708090]/20">
                        <div className={`${theme === "dark" ? "bg-slate-950/90" : "bg-slate-50"} rounded-[1.9rem] p-8 lg:p-12 overflow-hidden relative transition-colors duration-500 border ${theme === "dark" ? "border-transparent" : "border-slate-200"}`}>
                            {/* Visual representation of "Coded Philosophy" */}
                            <div className="absolute top-0 right-0 p-8 opacity-20 pointer-events-none">
                                <span className={`${playfair.className} text-9xl italic font-black text-[#C5A059]`}>S</span>
                            </div>
                            <div className="relative z-10">
                                <div className={`font-mono text-[10px] md:text-xs space-y-2 ${theme === "dark" ? "text-[#708090] opacity-80" : "text-slate-500"}`}>
                                    <p><span className="text-[#C5A059]">class</span> StoicRiskEngine &#123;</p>
                                    <p className="pl-4"><span className="text-[#C5A059]/70">private</span> emotion: <span className="text-[#708090]">boolean</span> = <span className="text-[#708090]">false</span>;</p>
                                    <p className="pl-4"><span className="text-[#C5A059]/70">private</span> maxDrawdown: <span className="text-[#708090]">number</span> = <span className="text-[#708090]">0.02</span>;</p>
                                    <p className="pl-4"><span className="text-[#708090]">execute</span>(signal: TradeSignal) &#123;</p>
                                    <p className="pl-8"><span className="text-[#C5A059]/70">if</span> (this.<span className="text-[#708090]">isLogical</span>(signal) && this.<span className="text-[#708090]">withinRisk</span>()) &#123;</p>
                                    <p className="pl-12">return this.<span className="text-[#708090]">openPosition</span>(signal);</p>
                                    <p className="pl-8">&#125;</p>
                                    <p className="pl-8">return <span className="text-[#C5A059]">"Stay Disciplined"</span>;</p>
                                    <p className="pl-4">&#125;</p>
                                    <p>&#125;</p>
                                </div>
                                <div className={`mt-12 p-6 border-l-2 border-[#C5A059] ${theme === "dark" ? "bg-[#C5A059]/5" : "bg-[#C5A059]/10"} italic transition-colors`}>
                                    <p className={`text-sm ${theme === "dark" ? "opacity-80 text-white" : "text-gray-900 font-medium"}`}>"You have power over your mind - not outside events. Realize this, and you will find strength."</p>
                                    <p className={`text-[10px] font-black mt-3 uppercase tracking-[0.2em] tech-tracking ${theme === "dark" ? "text-[#C5A059]" : "text-[#C5A059]"}`}>— Marcus Aurelius</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
