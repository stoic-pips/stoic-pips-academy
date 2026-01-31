"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Playfair_Display, Inter } from "next/font/google";
import { motion } from "framer-motion";

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
        <section id="stoic-edge" className="relative py-32 px-6 overflow-hidden bg-background">
            {/* Background elements */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 blur-[120px] rounded-full"></div>
            </div>

            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 text-primary mb-8">
                        <span className="text-sm font-black uppercase tracking-[0.2em] tech-tracking">The Philosophy</span>
                    </div>

                    <h2 className={`${playfair.className} text-4xl md:text-5xl font-black mb-8 leading-relaxed ${theme === "dark" ? "text-white" : "text-gray-900"}`}>
                        The <span className="text-gradient-emerald-gold italic">Stoic Edge</span> <br />
                        Coded into Reality.
                    </h2>

                    <p className={`text-xl leading-relaxed opacity-70 mb-12 ${inter.className}`}>
                        We&apos;ve taken the timeless principles of Marcus Aurelius and engineered them into the very core of Dunam AI. Risk management is no longer a choice—it&apos;s an algorithm.
                    </p>

                    <div className="space-y-6">
                        {[
                            { title: "Amor Fati", description: "Accepting market outcomes without emotional turbulence." },
                            { title: "Premeditatio Malorum", description: "Advanced risk mitigation protocols for every possible downside." },
                            { title: "Dichotomy of Control", description: "Focusing execution solely on high-probability variables." }
                        ].map((principle, i) => (
                            <motion.div
                                key={i}
                                className="flex gap-6 items-start"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                            >
                                <span className="text-primary font-black text-2xl">0{i + 1}</span>
                                <div>
                                    <h4 className="font-black text-lg mb-1">{principle.title}</h4>
                                    <p className="opacity-60 text-sm">{principle.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                <motion.div
                    className="relative"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                >
                    <div className="luminous-card p-1 bg-gradient-to-br from-primary/20 via-white/5 to-secondary/20">
                        <div className={`${theme === "dark" ? "bg-slate-950/90" : "bg-slate-50"} rounded-[1.9rem] p-8 lg:p-12 overflow-hidden relative transition-colors duration-500 border ${theme === "dark" ? "border-transparent" : "border-slate-200"}`}>
                            {/* Visual representation of "Coded Philosophy" */}
                            <div className="absolute top-0 right-0 p-8 opacity-20 pointer-events-none">
                                <span className={`${playfair.className} text-9xl italic font-black text-primary`}>S</span>
                            </div>
                            <div className="relative z-10">
                                <div className={`font-mono text-[10px] md:text-xs space-y-2 ${theme === "dark" ? "text-secondary opacity-80" : "text-slate-500"}`}>
                                    <p><span className="text-primary">class</span> StoicRiskEngine &#123;</p>
                                    <p className="pl-4"><span className="text-primary/70">private</span> emotion: <span className="text-secondary">boolean</span> = <span className="text-secondary">false</span>;</p>
                                    <p className="pl-4"><span className="text-primary/70">private</span> maxDrawdown: <span className="text-secondary">number</span> = <span className="text-secondary">0.02</span>;</p>
                                    <p className="pl-4"><span className="text-secondary">execute</span>(signal: TradeSignal) &#123;</p>
                                    <p className="pl-8"><span className="text-primary/70">if</span> (this.<span className="text-secondary">isLogical</span>(signal) && this.<span className="text-secondary">withinRisk</span>()) &#123;</p>
                                    <p className="pl-12">return this.<span className="text-secondary">openPosition</span>(signal);</p>
                                    <p className="pl-8">&#125;</p>
                                    <p className="pl-8">return <span className="text-primary">&quot;Stay Disciplined&quot;</span>;</p>
                                    <p className="pl-4">&#125;</p>
                                    <p>&#125;</p>
                                </div>
                                <div className={`mt-12 p-6 border-l-2 border-primary ${theme === "dark" ? "bg-primary/5" : "bg-primary/10"} italic transition-colors`}>
                                    <p className={`text-sm ${theme === "dark" ? "opacity-80 text-white" : "text-gray-900 font-medium"}`}>&quot;You have power over your mind - not outside events. Realize this, and you will find strength.&quot;</p>
                                    <p className={`text-[10px] font-black mt-3 uppercase tracking-[0.2em] tech-tracking text-primary`}>— Marcus Aurelius</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
