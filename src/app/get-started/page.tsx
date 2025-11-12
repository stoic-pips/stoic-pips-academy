"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Service } from "@/data/Service";
import PriceSummary from "./components/PriceSummary";
import ServiceDetails from "./components/ServiceDetails";
import SubPageLayout from "../components/layout/SubPageLayout";
import TronPayment from "./components/TronPayment";
import { Playfair_Display, Inter } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["700", "900"],
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

// Add default values in case props are undefined
const defaultService: Partial<Service> = {
  title: "Trading Course",
  description: "Master trading with our comprehensive course",
  price: "$299",
  features: [
    "Daily market analysis",
    "Risk management strategies", 
    "Trading community access",
    "Lifetime course updates"
  ]
};

export default function GetStartedPage({
  title,
  description,
  price,
  originalPrice,
  features,
  icon,
  iconColor
}: Service) {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [formData, setFormData] = useState<Record<string, string>>({});
  const [paymentStatus, setPaymentStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [transactionId, setTransactionId] = useState('');

  useEffect(() => {
    setMounted(true);
    console.log("Get Started page mounted - Theme:", theme);
  }, []);

  if (!mounted) return null;

  // Use default values if props are undefined
  const safeTitle = title || defaultService.title || "Trading Course";
  const safeDescription = description || defaultService.description || "Master trading with our comprehensive course";
  const safePrice = price || defaultService.price || "$299";
  const safeFeatures = features || defaultService.features || [];
  const safeOriginalPrice = originalPrice;

  if (!mounted) {
    return (
      <SubPageLayout>
        <section className="px-4 sm:px-6 lg:px-8 py-24 bg-white dark:bg-gray-900 animate-pulse">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <div className="h-12 bg-gray-200 dark:bg-gray-700 rounded-2xl max-w-md mx-auto mb-4"></div>
              <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded max-w-2xl mx-auto"></div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 h-96 bg-gray-200 dark:bg-gray-700 rounded-2xl"></div>
              <div className="h-96 bg-gray-200 dark:bg-gray-700 rounded-2xl"></div>
            </div>
          </div>
        </section>
      </SubPageLayout>
    );
  }

  const headingColor = theme === "dark" ? "text-white" : "text-gray-900";
  const textColor = theme === "dark" ? "text-gray-300" : "text-gray-600";
  const borderColor = theme === "dark" ? "border-gray-700" : "border-gray-200";

  const gradientText = theme === "dark" 
    ? "bg-gradient-to-r from-purple-400 via-pink-400 to-red-400"
    : "bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600";

  const sectionBg = theme === "dark" 
    ? "bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900" 
    : "bg-gradient-to-br from-white via-blue-50 to-purple-50";

  const cardBg = theme === "dark"
    ? "bg-gray-800/50 border-gray-700"
    : "bg-white/80 border-gray-200";

  const handlePaymentSuccess = (txId: string) => {
    setPaymentStatus('success');
    setTransactionId(txId);
  };

  const handlePaymentError = (error: string) => {
    setPaymentStatus('error');
    console.error('Payment error:', error);
  };

  const handleFormDataChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  // Validate form before showing Tron payment
  const isFormValid = () => {
    return formData.name && formData.email;
  };

  return (
    <SubPageLayout>
      <section className={`px-4 sm:px-6 lg:px-8 py-24 transition-all duration-700 ${sectionBg}`}>
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className={`absolute top-1/4 -left-20 w-80 h-80 rounded-full blur-3xl opacity-10 ${
            theme === "dark" ? "bg-purple-500" : "bg-blue-400"
          }`} />
          <div className={`absolute bottom-1/4 -right-20 w-96 h-96 rounded-full blur-3xl opacity-10 ${
            theme === "dark" ? "bg-pink-500" : "bg-purple-400"
          }`} />
        </div>

        <div className={`relative max-w-7xl mx-auto z-10 ${sectionBg}`}>
          {/* Header Section */}
          <div className="text-center mb-16">
            {/* Section Badge */}
            <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border backdrop-blur-sm mb-6 ${
              theme === "dark"
                ? "border-purple-500/30 bg-purple-500/10 text-purple-200"
                : "border-blue-500/30 bg-blue-500/10 text-blue-700"
            }`}>
              <span className="w-2 h-2 bg-current rounded-full animate-pulse"></span>
              <span className={`text-sm font-medium ${inter.className}`}>Complete Enrollment</span>
            </div>

            <h1 className={`${playfair.className} text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight ${headingColor}`}>
              Join{" "}
              <span className={`bg-clip-text text-transparent ${gradientText}`}>
                Stoic Pips
              </span>{" "}
              Academy
            </h1>
            <p className={`max-w-2xl mx-auto text-lg md:text-xl leading-relaxed ${inter.className} ${textColor}`}>
              Complete your enrollment and start your journey to trading mastery
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Left Side - Payment Section */}
            <div className="lg:col-span-2">
              <div className={`rounded-3xl p-8 border-2 backdrop-blur-sm ${cardBg} ${borderColor} shadow-2xl`}>
                <h3 className={`${playfair.className} text-2xl md:text-3xl font-bold mb-6 ${headingColor}`}>
                  Complete Your{" "}
                  <span className={`bg-clip-text text-transparent ${gradientText}`}>
                    Payment
                  </span>
                </h3>

                <PriceSummary 
                  title={safeTitle} 
                  description={safeDescription} 
                  price={safePrice}
                  originalPrice={safeOriginalPrice}
                  features={safeFeatures}
                  icon={icon}
                  iconColor={iconColor}
                />

                {/* Customer Information Form */}
                <div className={`mb-8 p-6 rounded-2xl border-2 backdrop-blur-sm ${
                  theme === "dark" 
                    ? "bg-gray-800/30 border-gray-700" 
                    : "bg-white/60 border-gray-200"
                }`}>
                  <h4 className={`text-xl font-bold mb-4 ${inter.className} ${headingColor}`}>
                    Your Information
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className={`block mb-2 text-sm font-medium ${inter.className} ${textColor}`}>
                        Full Name *
                      </label>
                      <input
                        type="text"
                        value={formData.name || ""}
                        onChange={(e) => handleFormDataChange('name', e.target.value)}
                        className={`w-full p-3 rounded-xl border-2 ${inter.className} ${
                          theme === "dark" 
                            ? "border-gray-600 bg-gray-700/50 text-white placeholder-gray-400 focus:border-purple-500" 
                            : "border-gray-300 bg-white/80 text-gray-900 placeholder-gray-500 focus:border-blue-500"
                        } focus:outline-none focus:ring-2 focus:ring-opacity-20 transition-all duration-300`}
                        placeholder="John Doe"
                        required
                      />
                    </div>
                    <div>
                      <label className={`block mb-2 text-sm font-medium ${inter.className} ${textColor}`}>
                        Email Address *
                      </label>
                      <input
                        type="email"
                        value={formData.email || ""}
                        onChange={(e) => handleFormDataChange('email', e.target.value)}
                        className={`w-full p-3 rounded-xl border-2 ${inter.className} ${
                          theme === "dark" 
                            ? "border-gray-600 bg-gray-700/50 text-white placeholder-gray-400 focus:border-purple-500" 
                            : "border-gray-300 bg-white/80 text-gray-900 placeholder-gray-500 focus:border-blue-500"
                        } focus:outline-none focus:ring-2 focus:ring-opacity-20 transition-all duration-300`}
                        placeholder="john@example.com"
                        required
                      />
                    </div>
                    <div>
                      <label className={`block mb-2 text-sm font-medium ${inter.className} ${textColor}`}>
                        Phone Number (Optional)
                      </label>
                      <input
                        type="tel"
                        value={formData.phone || ""}
                        onChange={(e) => handleFormDataChange('phone', e.target.value)}
                        className={`w-full p-3 rounded-xl border-2 ${inter.className} ${
                          theme === "dark" 
                            ? "border-gray-600 bg-gray-700/50 text-white placeholder-gray-400 focus:border-purple-500" 
                            : "border-gray-300 bg-white/80 text-gray-900 placeholder-gray-500 focus:border-blue-500"
                        } focus:outline-none focus:ring-2 focus:ring-opacity-20 transition-all duration-300`}
                        placeholder="+256 712 345 678"
                      />
                    </div>
                    <div>
                      <label className={`block mb-2 text-sm font-medium ${inter.className} ${textColor}`}>
                        Country
                      </label>
                      <select
                        value={formData.country || ""}
                        onChange={(e) => handleFormDataChange('country', e.target.value)}
                        className={`w-full p-3 rounded-xl border-2 ${inter.className} ${
                          theme === "dark" 
                            ? "border-gray-600 bg-gray-700/50 text-white focus:border-purple-500" 
                            : "border-gray-300 bg-white/80 text-gray-900 focus:border-blue-500"
                        } focus:outline-none focus:ring-2 focus:ring-opacity-20 transition-all duration-300`}
                      >
                        <option value="">Select your country</option>
                        <option value="UG">Uganda</option>
                        <option value="KE">Kenya</option>
                        <option value="TZ">Tanzania</option>
                        <option value="RW">Rwanda</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>
                  
                  {!isFormValid() && (
                    <div className={`mt-4 p-4 rounded-xl border-2 ${
                      theme === "dark" 
                        ? "bg-yellow-900/20 border-yellow-700/50" 
                        : "bg-yellow-50 border-yellow-200"
                    }`}>
                      <p className={`text-sm ${inter.className} ${
                        theme === "dark" ? "text-yellow-300" : "text-yellow-700"
                      }`}>
                        💡 Please fill in your name and email to see payment options.
                      </p>
                    </div>
                  )}
                </div>

                {/* Tron Payment Component - Only show if form is valid */}
                {isFormValid() && (
                  <TronPayment
                    price={safePrice}
                    serviceTitle={safeTitle}
                    customerEmail={formData.email}
                    customerName={formData.name}
                    onPaymentSuccess={handlePaymentSuccess}
                    onPaymentError={handlePaymentError}
                  />
                )}

                {/* Payment Status Display */}
                {paymentStatus === 'success' && (
                  <div className={`mt-6 p-6 rounded-2xl border-2 ${
                    theme === "dark" 
                      ? "bg-green-900/20 border-green-700/50" 
                      : "bg-green-50 border-green-200"
                  }`}>
                    <div className="flex items-center space-x-3">
                      <span className="text-green-600 dark:text-green-400 text-2xl">✅</span>
                      <div>
                        <p className={`font-bold ${inter.className} ${
                          theme === "dark" ? "text-green-300" : "text-green-800"
                        }`}>
                          Tron Payment Instructions Ready!
                        </p>
                        <p className={`text-sm ${inter.className} ${
                          theme === "dark" ? "text-green-400" : "text-green-700"
                        }`}>
                          Please complete the payment using the Tron instructions above.
                          Access will be granted within 30 minutes of payment confirmation.
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {paymentStatus === 'error' && (
                  <div className={`mt-6 p-6 rounded-2xl border-2 ${
                    theme === "dark" 
                      ? "bg-red-900/20 border-red-700/50" 
                      : "bg-red-50 border-red-200"
                  }`}>
                    <div className="flex items-center space-x-3">
                      <span className="text-red-600 dark:text-red-400 text-2xl">❌</span>
                      <div>
                        <p className={`font-bold ${inter.className} ${
                          theme === "dark" ? "text-red-300" : "text-red-800"
                        }`}>
                          Payment Setup Failed
                        </p>
                        <p className={`text-sm ${inter.className} ${
                          theme === "dark" ? "text-red-400" : "text-red-700"
                        }`}>
                          Please refresh the page and try again.
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                <div className="mt-8 text-center">
                  <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border backdrop-blur-sm mb-4 ${
                    theme === "dark"
                      ? "border-purple-500/30 bg-purple-500/10 text-purple-200"
                      : "border-blue-500/30 bg-blue-500/10 text-blue-700"
                  }`}>
                    <span className="text-lg">Ⓣ</span>
                    <span className={`text-sm font-medium ${inter.className}`}>Pay with Tron (TRX/USDT)</span>
                  </div>
                  <p className={`text-sm ${inter.className} ${textColor} mb-4`}>
                    Fast & Low Fees • 7-day money-back guarantee • Instant access
                  </p>
                  
                  {/* Support Info */}
                  <div className={`p-4 rounded-2xl backdrop-blur-sm border ${
                    theme === "dark" 
                      ? "bg-gray-800/30 border-gray-700" 
                      : "bg-white/60 border-gray-200"
                  }`}>
                    <p className={`text-sm ${inter.className} ${
                      theme === "dark" ? "text-gray-400" : "text-gray-600"
                    }`}>
                      Need help with Tron payment? Contact:{' '}
                      <a 
                        href="mailto:stoicpip@gmail.com" 
                        className={`font-semibold hover:underline ${
                          theme === "dark" ? "text-purple-400" : "text-blue-600"
                        }`}
                      >
                        stoicpip@gmail.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <ServiceDetails
              title={safeTitle} 
              description={safeDescription} 
              price={safePrice}
              originalPrice={safeOriginalPrice}
              features={safeFeatures}
              icon={icon}
              iconColor={iconColor}
            />
          </div>
        </div>
      </section>
    </SubPageLayout>
  );
}