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
            title: "Dunam Ai Infrastructure",
            description: "Proprietary HFT ecosystem built on neural-network architecture and institutional liquidity.",
            icon: <CpuChipIcon className="w-8 h-8 text-secondary" />,
            color: "text-secondary",
            border: "border-secondary/20",
            bg: "bg-secondary/5"
        },
        {
            id: "02",
            title: "Institutional Methodology",
            description: "Professional desk-level training designed to bridge the gap between retail and quantitative analysis.",
            icon: <AcademicCapIcon className="w-8 h-8 text-primary" />,
            color: "text-primary",
            border: "border-primary/20",
            bg: "bg-primary/5"
        },
        {
            id: "03",
            title: "Execution Discipline",
            description: "Strict risk protocols and emotional neutrality frameworks mandated for institutional-grade performance.",
            icon: <CommandLineIcon className="w-8 h-8 text-primary" />,
            color: "text-primary",
            border: "border-primary/20",
            bg: "bg-primary/5"
        }
    ];

    return (
        <section id="pillars" className={`relative py-32 px-6 overflow-hidden bg-background`}>
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
                                <div className={`p-4 rounded-2xl transition-colors ${theme === "dark" ? "bg-white/5 border border-white/10 group-hover:border-primary/30" : "bg-slate-50 border border-slate-200 group-hover:border-primary/30"}`}>
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
