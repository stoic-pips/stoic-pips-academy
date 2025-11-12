// components/ThemeDebug.tsx
"use client";

import { useTheme } from "next-themes";
import { useEffect } from "react";

export default function ThemeDebug() {
  const { theme, systemTheme, setTheme } = useTheme();

  useEffect(() => {
    console.log("ThemeDebug - Theme:", theme);
    console.log("ThemeDebug - System Theme:", systemTheme);
  }, [theme, systemTheme]);

  return (
    <div className="fixed top-4 right-4 p-4 bg-yellow-100 dark:bg-yellow-900 border border-yellow-400 rounded-lg z-50">
      <p className="text-sm font-mono">
        Theme: {theme || "undefined"}<br/>
        System: {systemTheme || "undefined"}
      </p>
      <div className="mt-2 space-x-2">
        <button 
          onClick={() => setTheme("light")}
          className="px-2 py-1 bg-blue-500 text-white text-xs rounded"
        >
          Light
        </button>
        <button 
          onClick={() => setTheme("dark")}
          className="px-2 py-1 bg-gray-800 text-white text-xs rounded"
        >
          Dark
        </button>
      </div>
    </div>
  );
}