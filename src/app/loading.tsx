"use client";

import { motion } from "framer-motion";

export default function Loading() {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-background">
            <div className="relative flex flex-col items-center">
                {/* Animated Stoic Pips Logo/Spinner */}
                <div className="relative w-24 h-24">
                    <motion.div
                        className="absolute inset-0 rounded-full border-t-4 border-l-4 border-primary"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                    />
                    <motion.div
                        className="absolute inset-4 rounded-full border-b-4 border-r-4 border-secondary opacity-70"
                        animate={{ rotate: -360 }}
                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-2xl font-black text-primary animate-pulse">S</span>
                    </div>
                </div>

                <motion.p
                    className="mt-8 text-sm font-black tracking-[0.3em] uppercase text-foreground/80"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                >
                    Initializing Algorithm...
                </motion.p>
            </div>
        </div>
    );
}
