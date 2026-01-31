"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Playfair_Display, Inter } from "next/font/google";
import { CpuChipIcon, AcademicCapIcon, CommandLineIcon } from "@heroicons/react/24/outline";

const playfair = Playfair_Display({
    subsets: ["latin"],
    weight: ["700", "900"],
});

const inter = Inter({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600"],
});

export default function ThreePillars() {
    const { theme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    const pillars = [
        {
            id: "01",
            title: "Proprietary Tech",
            description: "The Dunam AI engine, built for speed and zero-emotion execution. Institutional precision at your fingertips.",
            icon: <CpuChipIcon className="w-8 h-8 text-[#708090]" />,
            color: "text-[#708090]",
            border: "border-[#708090]/20",
            bg: "bg-[#708090]/5"
        },
        {
            id: "02",
            title: "Academy & Mentorship",
            description: "The legacy education branch, training the next generation of disciplined traders through stoic principles.",
            icon: <AcademicCapIcon className="w-8 h-8 text-[#C5A059]" />,
            color: "text-[#C5A059]",
            border: "border-[#C5A059]/20",
            bg: "bg-[#C5A059]/5"
        },
        {
            id: "03",
            title: "Infrastructure",
            description: "Our API and developer tools for the wider trading community. Build the future of finance with us.",
            icon: <CommandLineIcon className="w-8 h-8 text-[#C5A059]" />,
            color: "text-[#C5A059]",
            border: "border-[#C5A059]/20",
            bg: "bg-[#C5A059]/5"
        }
    ];

    return (
        <section id="pillars" className={`relative py-32 px-6 overflow-hidden ${theme === "dark" ? "bg-background" : "bg-white"}`}>
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-24">
                    <h2 className={`${playfair.className} text-3xl md:text-4xl lg:text-5xl font-black mb-6 ${theme === "dark" ? "text-white" : "text-gray-900"}`}>
                        Our Three <span className="text-gradient-emerald-gold italic">Pillars.</span>
                    </h2>
                    <p className={`max-w-2xl mx-auto text-lg opacity-70 ${inter.className} tech-tracking uppercase text-[10px] font-black`}>
                        Solidifying the future of FinTech & EdTech
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {pillars.map((pillar) => (
                        <div key={pillar.id} className={`p-8 rounded-[2rem] border ${pillar.border} ${pillar.bg} backdrop-blur-sm transition-all duration-500 hover:scale-[1.02] group`}>
                            <div className="flex justify-between items-start mb-8">
                                <div className={`p-4 rounded-2xl transition-colors ${theme === "dark" ? "bg-white/5 border border-white/10 group-hover:border-[#C5A059]/30" : "bg-slate-50 border border-slate-200 group-hover:border-[#C5A059]/30"}`}>
                                    {pillar.icon}
                                </div>
                                <span className={`text-5xl font-black opacity-10 ${pillar.color}`}>{pillar.id}</span>
                            </div>
                            <h3 className={`text-2xl font-black mb-4 ${theme === "dark" ? "text-white" : "text-gray-900"}`}>
                                {pillar.title}
                            </h3>
                            <p className={`text-sm leading-relaxed opacity-60 ${inter.className}`}>
                                {pillar.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
