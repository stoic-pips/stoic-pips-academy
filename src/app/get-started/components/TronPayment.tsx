"use client";

import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

interface TronPaymentProps {
  price: string;
  serviceTitle: string;
  customerEmail: string;
  customerName: string;
  onPaymentSuccess: (transactionId: string) => void;
  onPaymentError: (error: string) => void;
}

interface PaymentDetails {
  tronAddress: string;
  trxAmount: string;
  usdtAmount: string;
  usdAmount: string;
  qrCode: string;
  paymentUrl: string;
  tronScanUrl: string;
  message: string;
}

export default function TronPayment({
  price,
  serviceTitle,
  customerEmail,
  customerName,
  onPaymentSuccess,
  onPaymentError,
}: TronPaymentProps) {
  const { theme } = useTheme();
  const [isLoading, setIsLoading] = useState(true);
  const [paymentDetails, setPaymentDetails] = useState<PaymentDetails | null>(null);

  // Your Tron wallet address
  const TRON_ADDRESS = 'TGFqYWNlZkRrRFpob0VBenlMZTg0cTE2SHdvYllLYzhy';

  useEffect(() => {
    const generatePaymentDetails = async () => {
      setIsLoading(true);

      try {
        // Extract USD amount
        const usdAmount = parseFloat(price.replace(/[^\d.]/g, ''));

        if (isNaN(usdAmount)) {
          throw new Error('Invalid price format');
        }

        // Calculate TRX amount (using approximate rate)
        const trxRate = 0.12;
        const trxAmount = (usdAmount / trxRate).toFixed(2);

        // USDT amount (1:1 with USD)
        const usdtAmount = usdAmount.toFixed(2);

        // Generate QR code
        const qrCode = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(`tron:${TRON_ADDRESS}?contractAddress=TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t&amount=${usdtAmount}000000`)}`;

        const details: PaymentDetails = {
          tronAddress: TRON_ADDRESS,
          trxAmount,
          usdtAmount,
          usdAmount: usdAmount.toFixed(2),
          qrCode,
          paymentUrl: `https://tronlink.org/pay?address=${TRON_ADDRESS}&amount=${usdtAmount}&token=USDT`,
          tronScanUrl: `https://tronscan.org/#/address/${TRON_ADDRESS}`,
          message: `Send ${trxAmount} TRX or ${usdtAmount} USDT to complete your payment. Access granted within 30 minutes of confirmation.`
        };

        setPaymentDetails(details);
        onPaymentSuccess(`TRON-${Date.now()}`);
      } catch (error) {
        console.error('Payment details error:', error);
        onPaymentError('Failed to generate payment details');
      } finally {
        setIsLoading(false);
      }
    };

    generatePaymentDetails();
  }, [price, onPaymentSuccess, onPaymentError]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center p-8">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-emerald-500"></div>
        <span className="ml-2 text-gray-500 dark:text-gray-400">Preparing secure connection...</span>
      </div>
    );
  }

  if (!paymentDetails) {
    return (
      <div className={`p-4 rounded-lg border ${theme === "dark" ? "bg-red-900/20 border-red-800 text-red-300" : "bg-red-50 border-red-200 text-red-700"}`}>
        <p>Failed to load payment details. Please refresh the page.</p>
      </div>
    );
  }

  return (
    <div className="mb-0">
      <h4 className={`text-xl font-bold mb-6 ${theme === "dark" ? "text-white" : "text-gray-900"}`}>
        Tron Payment Instructions
      </h4>

      <div className={`p-6 rounded-2xl border ${theme === "dark" ? "bg-slate-800/50 border-gray-700" : "bg-slate-50 border-gray-200"}`}>
        {/* Success Message */}
        <div className={`mb-6 p-4 rounded-xl border ${theme === "dark" ? "bg-emerald-500/10 border-emerald-500/20 text-emerald-300" : "bg-emerald-50 border-emerald-100 text-emerald-800"}`}>
          <p className="font-bold flex items-center gap-2">
            ✅ Payment instructions ready!
          </p>
          <p className="text-sm opacity-80 mt-1">Scan the QR code below or copy the address manually.</p>
        </div>

        {/* QR Code */}
        <div className="flex justify-center mb-8">
          <div className="text-center group">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={paymentDetails.qrCode}
              alt="Tron QR Code"
              className={`w-64 h-64 border-4 rounded-2xl mx-auto transition-transform duration-500 group-hover:scale-105 ${theme === "dark" ? "border-emerald-500/30" : "border-emerald-500/20"}`}
            />
            <p className="text-sm font-medium mt-3 opacity-60">
              Scan with your Tron wallet app
            </p>
          </div>
        </div>

        {/* Payment Amounts */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <div className={`p-5 rounded-2xl text-center border ${theme === "dark" ? "bg-slate-900 border-gray-700" : "bg-white border-gray-200"}`}>
            <div className={`font-bold text-sm mb-1 ${theme === "dark" ? "text-blue-400" : "text-blue-600"}`}>TRX Payment</div>
            <div className="font-mono text-2xl font-black tracking-tight">{paymentDetails.trxAmount} TRX</div>
            <div className="text-xs opacity-50 mt-1">≈ ${paymentDetails.usdAmount}</div>
          </div>
          <div className={`p-5 rounded-2xl text-center border ${theme === "dark" ? "bg-slate-900 border-gray-700" : "bg-white border-gray-200"}`}>
            <div className={`font-bold text-sm mb-1 ${theme === "dark" ? "text-emerald-400" : "text-emerald-600"}`}>USDT Payment</div>
            <div className="font-mono text-2xl font-black tracking-tight">{paymentDetails.usdtAmount} USDT</div>
            <div className="text-xs opacity-50 mt-1">Tron (TRC20) Network</div>
          </div>
        </div>

        {/* Tron Address */}
        <div className="mb-8">
          <label className={`block font-bold mb-3 ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}>
            Send to Tron Address:
          </label>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <code className={`flex-1 px-4 py-4 rounded-xl text-sm break-all font-mono border ${theme === "dark" ? "bg-slate-900 border-gray-700 text-emerald-400" : "bg-white border-gray-200 text-emerald-700"}`}>
              {paymentDetails.tronAddress}
            </code>
            <button
              onClick={() => {
                navigator.clipboard.writeText(paymentDetails.tronAddress);
                const button = document.getElementById('copy-button');
                if (button) {
                  const originalText = button.textContent;
                  button.textContent = '✅ Copied!';
                  setTimeout(() => {
                    if (button) button.textContent = originalText;
                  }, 2000);
                }
              }}
              id="copy-button"
              className={`px-6 py-4 rounded-xl font-bold text-white transition-all shadow-lg active:scale-95 ${theme === "dark" ? "bg-emerald-600 hover:bg-emerald-500 shadow-emerald-500/20" : "bg-gray-900 hover:bg-black shadow-gray-400/50"}`}
            >
              📋 Copy
            </button>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          <a
            href={paymentDetails.paymentUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="py-3 px-4 bg-[#3375BB] hover:bg-[#2b639e] text-white text-center rounded-xl transition-all font-bold flex items-center justify-center space-x-2 shadow-lg shadow-blue-500/20 hover:-translate-y-0.5"
          >
            <span>🚀</span>
            <span>Open in TronLink</span>
          </a>
          <a
            href={paymentDetails.tronScanUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`py-3 px-4 text-center rounded-xl transition-all font-bold flex items-center justify-center space-x-2 border hover:-translate-y-0.5 ${theme === "dark" ? "bg-slate-800 border-gray-600 hover:bg-slate-700 text-gray-300" : "bg-gray-100 border-gray-200 hover:bg-gray-200 text-gray-700"}`}
          >
            <span>🔍</span>
            <span>View on TronScan</span>
          </a>
        </div>

        {/* Instructions */}
        <div className={`p-5 rounded-2xl border ${theme === "dark" ? "bg-amber-500/5 border-amber-500/20" : "bg-amber-50 border-amber-200"}`}>
          <h5 className={`font-bold mb-3 flex items-center gap-2 ${theme === "dark" ? "text-amber-400" : "text-amber-700"}`}>
            <span>📝</span> Payment Instructions
          </h5>
          <ol className={`text-sm space-y-2 ml-1 ${theme === "dark" ? "text-amber-200/80" : "text-amber-800"}`}>
            <li><strong>1. Exact Amount:</strong> Send exactly <strong>{paymentDetails.trxAmount} TRX</strong> or <strong>{paymentDetails.usdtAmount} USDT</strong>.</li>
            <li><strong>2. Network:</strong> Ensure you are using the <strong className="uppercase">Tron (TRC20)</strong> network.</li>
            <li><strong>3. Confirmation:</strong> Transactions typically confirm in ~30 seconds.</li>
            <li><strong>4. Access:</strong> We&apos;ll email you instant access credentials upon confirmation.</li>
          </ol>
        </div>

        {/* Benefits */}
        <div className={`mt-4 p-4 rounded-xl border flex items-start gap-3 ${theme === "dark" ? "bg-blue-500/5 border-blue-500/10" : "bg-blue-50 border-blue-100"}`}>
          <span className="text-xl">⚡</span>
          <p className={`text-sm ${theme === "dark" ? "text-blue-300" : "text-blue-800"}`}>
            <strong>Why Tron?</strong> Lightning-fast 2-second settlements, near-zero fees ($0.001), and the most reliable USDT infrastructure in the world.
          </p>
        </div>
      </div>
    </div>
  );

}