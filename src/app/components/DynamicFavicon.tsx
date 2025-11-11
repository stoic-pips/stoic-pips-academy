"use client";

import { useEffect } from "react";
import { useTheme } from "next-themes";

export default function DynamicFavicon() {
  const { theme, systemTheme } = useTheme();

  useEffect(() => {
    const currentTheme = theme === "system" ? systemTheme : theme;

    // pick favicon based on theme
    const favicon = currentTheme === "dark" ? "/logo_white.svg" : "/logo_back.svg";

    // find or create the <link rel="icon"> element
    let link: HTMLLinkElement | null = document.querySelector("link[rel*='icon']");
    if (!link) {
      link = document.createElement("link");
      link.rel = "icon";
      document.head.appendChild(link);
    }

    // update the icon href
    link.href = favicon;
  }, [theme, systemTheme]);

  return null;
}
