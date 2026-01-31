import { Geist, Geist_Mono, Playfair_Display, Inter } from "next/font/google";

export const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

export const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const playfair = Playfair_Display({
    subsets: ["latin"],
    weight: ["400", "700", "900"],
    variable: "--font-playfair",
});

export const inter = Inter({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600"],
    variable: "--font-inter",
});
