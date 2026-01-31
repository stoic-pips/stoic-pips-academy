import { useCallback } from "react";
import { Service } from "../Service";
import Button from "../../button/Button";
import { Inter, Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["700", "900"],
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

// Individual pricing card component
export default function PricingCard({
  service,
  theme,
  isHovered,
  onHover,
  router
}: {
  service: Service;
  theme: string;
  isHovered: boolean;
  onHover: (id: string | null) => void;
  router: any;
}) {
  const buttonGradient = theme === "dark"
    ? "bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
    : "bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700";

  const handleClick = useCallback(() => {
    // Convert title to URL-friendly slug
    const serviceSlug = service.title.toLowerCase().replace(/\s+/g, '-');
    router.push(`/get-started/${serviceSlug}`);
  }, [router, service.title]);

  return (
    <div
      className={`
        relative group transition-all duration-500 ease-out
        ${isHovered ? 'scale-105 z-10 shadow-2xl' : 'shadow-lg'}
        ${theme === "dark"
          ? "bg-[#121212]/50 hover:bg-[#1B1B1B]/50 border-white/5"
          : "bg-white/60 hover:bg-white/80 border-slate-100"
        }
        border-r-0 lg:border-r-2 last:border-r-0
        rounded-3xl lg:rounded-none
        mb-6 lg:mb-0
      `}
      // 🔥 FIX: Use service.title instead of service.id
      onMouseEnter={() => onHover(service.title)}
      onMouseLeave={() => onHover(null)}
    >
      {/* Hover Gradient Overlay */}
      {isHovered && (
        <div className={`absolute inset-0 rounded-3xl opacity-100 transition-opacity duration-500 ${theme === "dark"
            ? "bg-gradient-to-br from-[#C5A059]/10 to-[#708090]/10"
            : "bg-gradient-to-br from-[#708090]/5 to-[#C5A059]/5"
          }`} />
      )}

      <div className="relative p-8 flex flex-col h-full">
        {/* Service Header */}
        <div className="text-center mb-8">
          {/* Icon */}
          <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-4 transition-all duration-300 ${theme === "dark"
              ? "bg-[#C5A059]/20 border border-[#C5A059]/30"
              : "bg-[#708090]/10 border border-[#708090]/20"
            } ${isHovered ? 'scale-110' : ''}`}>
            <span className="text-2xl">
              {service.icon ? <service.icon size={24} color={isHovered ? "#C5A059" : (theme === "dark" ? service.iconColor : "#708090")} /> : "🚀"}
            </span>
          </div>

          <h3 className={`text-xl font-black mb-3 transition-colors duration-300 ${inter.className} ${isHovered
              ? 'text-gradient-emerald-gold'
              : theme === "dark" ? 'text-white' : 'text-slate-900'
            }`}>
            {service.title}
          </h3>

          <p className={`text-sm leading-relaxed transition-colors duration-300 ${inter.className} ${theme === "dark" ? 'text-gray-400' : 'text-slate-600'
            }`}>
            {service.description}
          </p>
        </div>

        {/* Pricing */}
        <div className="text-center mb-8">
          {service.originalPrice && (
            <p className={`text-sm line-through mb-2 transition-colors duration-300 ${inter.className} ${theme === "dark" ? 'text-gray-500' : 'text-slate-400'
              }`}>
              {service.originalPrice}
            </p>
          )}
          <p className={`text-3xl font-black transition-all duration-300 ${inter.className} ${isHovered
              ? 'text-gradient-emerald-gold scale-110'
              : theme === "dark" ? 'text-white' : 'text-slate-900'
            }`}>
            {service.price}
          </p>
        </div>

        {/* Features List */}
        <div className="flex-1 mb-8">
          <ul className="space-y-3">
            {service.features.map((feature, idx) => (
              <li
                key={idx}
                className="flex items-start gap-3 group/item transition-all duration-300 hover:translate-x-1"
              >
                <span className={`text-lg flex-shrink-0 ${isHovered ? "text-[#C5A059]" : (theme === "dark" ? "text-[#C5A059]/60" : "text-[#708090]")
                  }`}>✓</span>
                <span className={`text-sm leading-relaxed transition-colors duration-300 ${inter.className} ${theme === "dark" ? 'text-gray-300' : 'text-slate-700'
                  }`}>
                  {feature}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* CTA Button */}
        <Button
          onClick={handleClick}
          className={`
            w-full py-3 font-black uppercase tracking-[0.2em] rounded-2xl transition-all duration-500 border tech-tracking text-[10px]
            ${isHovered
              ? 'shadow-2xl scale-105'
              : ''
            } ${theme === "dark" ? "bg-[#C5A059] text-[#121212] border-transparent" : "bg-[#121212] text-white border-transparent"}
          `}
        >
          Get Started
        </Button>
      </div>
    </div>
  );
}