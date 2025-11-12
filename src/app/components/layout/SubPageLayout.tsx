// components/layout/SubPageLayout.tsx
"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import "../../globals.css";
import Footer from "../Footer";
import { PageWrapper } from "./PageWrapper";
import LayoutProps from "./LayoutProps";
import { Providers } from "../provider/providers";

export default function SubPageLayout({ children }: LayoutProps) {
  const { theme } = useTheme();
  const [hasThemeContext, setHasThemeContext] = useState(false);

  useEffect(() => {
    setHasThemeContext(theme !== undefined);
  }, [theme]);

  const content = (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-white via-blue-50 to-purple-50 dark:bg-gradient-to-br dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-all duration-700">
      <PageWrapper>
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </PageWrapper>
    </div>
  );

  if (!hasThemeContext) {
    return <Providers>{content}</Providers>;
  }

  return content;
}