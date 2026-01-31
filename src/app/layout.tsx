import { Providers } from "./components/provider/providers";
import "./globals.css";
import { geistSans, geistMono, playfair, inter } from "@/lib/fonts";

export const metadata = {
  title: "Stoic Pips Inc. | Dunam Ai - Future of Algorithmic Trading",
  description: "Stoic Pips Inc. pioneered the fusion of ancient Stoic philosophy with high-frequency AI trading. Discover Dunam Ai—our institutional-grade ecosystem designed for precision, discipline, and consistent profitability.",
  icons: {
    icon: "/favicon.ico", // ✅ simple and consistent
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} ${inter.variable}`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
