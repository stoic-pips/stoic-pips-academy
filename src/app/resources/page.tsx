"use client";

import { useTheme } from "next-themes";
import SubPageLayout from "../components/layout/SubPageLayout";
import BookRecommendations from "./book-recommendations/BookRecommendations";

export default function Resources() {
  const { theme } = useTheme();

  const headingColor = theme === "dark" ? "text-white" : "text-gray-900";
  const textColor = theme === "dark" ? "text-gray-300" : "text-gray-700";
  const bgColor = theme === "dark" ? "bg-gray-900" : "bg-gray-50";
  const linkColor = theme === "dark" ? "text-blue-400 hover:text-blue-500" : "text-blue-600 hover:text-blue-700";

  return (
    <SubPageLayout>
      <section className={` min-h-screen py-20`}>
        <div className="max-w-5xl mx-auto px-6">
          <h2 className={`text-3xl font-bold mb-6 ${headingColor}`}>
            Resources
          </h2>

          <p className={`mb-6 ${textColor}`}>
            Founded in 2024, Stoic Pips focuses on discipline, mindset, and strategy to grow your trading journey. Below are some helpful resources, educational links, and recommended books for traders of all levels.
          </p>

          <div className="mb-8">
            <h3 className={`text-2xl font-semibold mb-4 ${headingColor}`}>Downloadable Resources</h3>
            <ul className={`list-disc pl-5 ${textColor}`}>
              <li>
                <a href="/downloads/trading-journal-template.pdf" download className={linkColor}>
                  Trading Journal Template (PDF)
                </a>
              </li>
              <li>
                <a href="/downloads/swing-trading-guide.pdf" download className={linkColor}>
                  Swing Trading Guide (PDF)
                </a>
              </li>
              <li>
                <a href="/downloads/supply-demand-cheatsheet.pdf" download className={linkColor}>
                  Supply & Demand Cheat Sheet (PDF)
                </a>
              </li>
            </ul>
          </div>

          <div className="mb-8">
            <h3 className={`text-2xl font-semibold mb-4 ${headingColor}`}>Educational Links</h3>
            <ul className={`list-disc pl-5 ${textColor}`}>
              <li>
                <a href="https://www.babypips.com/learn/forex" target="_blank" rel="noopener noreferrer" className={linkColor}>
                  BabyPips – Forex Education
                </a>
              </li>
              <li>
                <a href="https://www.babypips.com/learn/forex/trading-psychology" target="_blank" rel="noopener noreferrer" className={linkColor}>
                  BabyPips – Trading Psychology
                </a>
              </li>
              <li>
                <a href="https://www.babypips.com/learn/forex/technical-analysis" target="_blank" rel="noopener noreferrer" className={linkColor}>
                  BabyPips – Technical Analysis
                </a>
              </li>
            </ul>
          </div>

            <BookRecommendations />
        </div>
      </section>
    </SubPageLayout>
  );
}
