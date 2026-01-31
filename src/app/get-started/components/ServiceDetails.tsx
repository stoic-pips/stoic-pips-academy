"use client";

import { useTheme } from "next-themes";
import { Service } from "@/data/Service";
import { inter } from "@/lib/fonts";

export default function ServiceDetails({
  title,
  description,
  price,
  originalPrice,
  features,
}: Service) {
  const { theme } = useTheme();

  const headingColor = theme === "dark" ? "text-white" : "text-gray-900";
  const textColor = theme === "dark" ? "text-gray-300" : "text-gray-600";
  const borderColor = theme === "dark" ? "border-gray-700" : "border-gray-200";
  const cardBg = theme === "dark" ? "bg-gray-800" : "bg-white";

  const safeFeatures = features || [];

  return (
    <div className="lg:col-span-1">
      <div className={`rounded-xl p-6 ${cardBg} border ${borderColor} shadow-sm sticky top-8`}>
        {/* Header */}
        <div className="text-center mb-6">
          <h2 className={`text-xl font-semibold mb-3 ${headingColor} ${inter.className}`}>
            {title}
          </h2>

          <div className="flex items-center justify-center space-x-2 mb-4">
            {originalPrice && (
              <span className={`line-through text-sm ${inter.className} ${theme === "dark" ? "text-gray-500" : "text-gray-400"
                }`}>
                {originalPrice}
              </span>
            )}
            <span className={`text-2xl font-semibold ${inter.className} ${theme === "dark" ? "text-blue-400" : "text-blue-600"
              }`}>
              {price}
            </span>
          </div>
        </div>

        {/* Description */}
        <p className={`text-center mb-6 text-sm leading-relaxed ${inter.className} ${textColor}`}>
          {description}
        </p>

        {/* Features */}
        <div className="mb-6">
          <h3 className={`text-lg font-semibold mb-4 ${headingColor} ${inter.className}`}>
            Includes:
          </h3>
          <div className="space-y-2">
            {safeFeatures.map((feature: string, idx: number) => (
              <div key={idx} className="flex items-start gap-2">
                <span className={`mt-1 text-sm ${theme === "dark" ? "text-blue-400" : "text-blue-600"
                  }`}>•</span>
                <span className={`text-sm ${textColor} ${inter.className}`}>
                  {feature}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits */}
        <div className={`p-4 rounded-lg border ${borderColor} ${theme === "dark" ? "bg-gray-700" : "bg-gray-50"
          }`}>
          <h4 className={`font-semibold mb-3 text-sm ${headingColor} ${inter.className}`}>
            Benefits
          </h4>
          <ul className={`text-xs space-y-1 ${textColor} ${inter.className}`}>
            <li>• Lifetime access</li>
            <li>• Daily analysis</li>
            <li>• Trading community</li>
            <li>• Personal support</li>
          </ul>
        </div>
      </div>
    </div>
  );
}