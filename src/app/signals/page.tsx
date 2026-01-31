"use client";

import { useTheme } from "next-themes";
import { useRouter } from "next/navigation";
import SubPageLayout from "../components/layout/SubPageLayout";
import Button from "../components/button/Button";

export default function Signals() {
  const { theme } = useTheme();
  const router = useRouter();

  const headingColor = theme === "dark" ? "text-white" : "text-gray-900";
  const textColor = theme === "dark" ? "text-gray-300" : "text-gray-700";
  const bgColor = theme === "dark" ? "bg-gray-900" : "bg-gray-50";
  const buttonBg = theme === "dark" ? "bg-blue-600 hover:bg-blue-700" : "bg-blue-500 hover:bg-blue-600";
  const buttonText = "text-white";

  const handleSubscribe = () => {
    router.push("/subscribe"); // Replace with actual subscription page
  };

  return (
    <SubPageLayout>
      <section className={`min-h-screen py-20`}>
        <div className="max-w-5xl mx-auto px-6">
          <h2 className={`text-3xl font-bold mb-6 ${headingColor}`}>
            Signals with Stoic Pips
          </h2>

          <p className={`mb-4 ${textColor}`}>
            Founded in 2024, Stoic Pips focuses on discipline, mindset, and strategy to help traders grow their trading journey. Our signals are designed to give actionable guidance while teaching you professional trading practices.
          </p>

          <p className={`mb-4 ${textColor}`}>
            <strong>How Signals Are Provided:</strong>
          </p>

          <ul className={`list-disc pl-5 mb-6 ${textColor}`}>
            <li>
              <strong>Real-Time Alerts:</strong> Instant notifications via Telegram when a trade setup aligns with our strategy.
            </li>
            <li>
              <strong>Clear Entry & Exit Levels:</strong> Exact entry, stop-loss, and take-profit targets for every signal.
            </li>
            <li>
              <strong>Market Context:</strong> Each signal includes reasoning and analysis so you learn as you trade.
            </li>
            <li>
              <strong>Coverage:</strong> Focus on synthetic indices (VIX 50, VIX 75) and selected Forex pairs (XAU/USD, GBP/JPY).
            </li>
            <li>
              <strong>Educational Approach:</strong> Signals act as mini-lessons on price action, supply & demand, and risk management.
            </li>
          </ul>

          <p className={`mb-6 ${textColor}`}>
            Following Stoic Pips signals helps traders save time on analysis, avoid emotional decisions, and grow accounts while building professional trading skills.
          </p>

            <Button>
                Subscribe Now
            </Button>
        </div>
      </section>
    </SubPageLayout>
  );
}
