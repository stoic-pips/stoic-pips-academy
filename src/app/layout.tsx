import DynamicFavicon from "./components/DynamicFavicon";
import { Providers } from "./components/provider/providers";
import "./globals.css";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Stoic Pips Inc. | Dunam Ai - Future of Algorithmic Trading",
  description: "Stoic Pips Inc. pioneered the fusion of ancient Stoic philosophy with high-frequency AI trading. Discover Dunam Ai—our institutional-grade ecosystem designed for precision, discipline, and consistent profitability.",
  icons: {
    icon: [
      {
        url: "/logo_black.svg",
        type: "image/svg+xml",
      },
      {
        url: "/favicon.ico",
        sizes: "any",
      },
    ],
    apple: [
      {
        url: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/logo_black.svg" type="image/svg+xml" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
