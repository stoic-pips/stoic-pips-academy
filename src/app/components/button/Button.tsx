"use client";

import { useTheme } from "next-themes";
import Link from "next/link";
import { ButtonProps } from "./ButtonProps";

export default function Button({
  children,
  onClick,
  type = "button",
  className = "",
  href,
  disabled = false,
}: ButtonProps) {
  const { theme } = useTheme();

  const baseClasses = `px-6 py-3 rounded-xl font-semibold shadow-md transition-all duration-300 ${className}`;

  const getButtonStyles = () => {
    if (disabled) {
      return theme === "dark"
        ? "bg-gray-600 text-gray-400 cursor-not-allowed"
        : "bg-gray-300 text-gray-500 cursor-not-allowed";
    }

    const buttonStyles = theme === "dark"
      ? "bg-[#C5A059] text-[#121212] hover:bg-[#B8860B]"
      : "bg-[#121212] text-white hover:bg-black";

    return `${buttonStyles} cursor-pointer`;
  };

  const buttonClasses = `${baseClasses} ${getButtonStyles()}`;

  if (href) {
    return (
      <Link
        href={href}
        className={buttonClasses}
        aria-disabled={disabled}
        onClick={(e) => disabled && e.preventDefault()}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={disabled ? undefined : onClick}
      className={buttonClasses}
      disabled={disabled}
    >
      {children}
    </button>
  );
}