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
    
    const bgGradient = theme === "dark"
      ? "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500"
      : "bg-gradient-to-r from-blue-400 to-purple-400 hover:from-blue-300 hover:to-purple-300";

    return `${bgGradient} text-white hover:opacity-90 cursor-pointer`;
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