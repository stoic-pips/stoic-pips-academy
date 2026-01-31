import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { inter } from "./layout";

export default function ContactForm() {
  const { theme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  if (!mounted) return null;

  const currentTheme = theme === 'system' ? systemTheme : theme || 'light';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch("https://formspree.io/f/meorkqzl", {
        method: "POST",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          service: formData.service,
          message: formData.message,
          _subject: `New Contact: ${formData.name} - ${formData.service || 'General Inquiry'}`,
          _replyto: formData.email,
        })
      });

      console.log('Response status:', response.status);

      if (response.ok) {
        const result = await response.json();
        console.log('Formspree response:', result);

        setSubmitStatus("success");
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: '',
          message: ''
        });
      } else {
        console.error('Formspree error:', await response.text());
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error('Fetch error:', error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Input classes
  const inputClasses = `w-full p-4 rounded-xl border transition-all duration-300 font-bold text-sm ${inter.className} ${currentTheme === "dark"
    ? "border-white/10 bg-white/5 text-white placeholder-white/20 focus:border-primary/50"
    : "border-slate-200 bg-background text-gray-900 placeholder-slate-400 focus:border-primary"
    } focus:outline-none`;

  const labelClasses = `block mb-2 text-[10px] font-black uppercase tracking-[0.2em] tech-tracking ${currentTheme === "dark" ? "text-primary/60" : "text-secondary"
    }`;

  const buttonClasses = `w-full py-5 rounded-2xl font-black uppercase tracking-[0.2em] text-[10px] text-white transition-all duration-500 tech-tracking ${currentTheme === "dark"
    ? "bg-primary text-matte-charcoal shadow-[0_0_20px_rgba(197,160,89,0.3)] hover:shadow-primary/50"
    : "bg-matte-charcoal text-white shadow-xl hover:bg-black"
    } hover:scale-[1.02] active:scale-95 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`;

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Status Messages */}
      {submitStatus === "success" && (
        <div className={`p-4 rounded-xl border-2 ${currentTheme === "dark"
          ? "bg-green-900/20 border-green-700/50 text-green-300"
          : "bg-green-50 border-green-200 text-green-800"
          }`}>
          ✅ Thank you! Your message has been sent successfully. We&apos;ll get back to you within 24 hours.
        </div>
      )}

      {submitStatus === "error" && (
        <div className={`p-4 rounded-xl border-2 ${currentTheme === "dark"
          ? "bg-red-900/20 border-red-700/50 text-red-300"
          : "bg-red-50 border-red-200 text-red-800"
          }`}>
          ❌ There was an error sending your message. Please try again or email us directly.
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className={labelClasses}>
            Full Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={inputClasses}
            placeholder="John Doe"
            required
            disabled={isSubmitting}
          />
        </div>

        <div>
          <label htmlFor="email" className={labelClasses}>
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={inputClasses}
            placeholder="john@example.com"
            required
            disabled={isSubmitting}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="phone" className={labelClasses}>
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className={inputClasses}
            placeholder="+256 712 345 678"
            disabled={isSubmitting}
          />
        </div>

        <div>
          <label htmlFor="service" className={labelClasses}>
            Interested In
          </label>
          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            className={inputClasses}
            disabled={isSubmitting}
          >
            <option value="">Select a service</option>
            <option value="Mentorship Program">Mentorship Program</option>
            <option value="Trading Course">Trading Course</option>
            <option value="Broker Guidance">Broker Guidance</option>
            <option value="General Inquiry">General Inquiry</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className={labelClasses}>
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={5}
          className={`${inputClasses} resize-none`}
          placeholder="Tell us about your trading goals and how we can help you..."
          required
          disabled={isSubmitting}
        />
      </div>

      <button
        type="submit"
        className={buttonClasses}
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <span className="flex items-center justify-center">
            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Sending...
          </span>
        ) : (
          "Send Message"
        )}
      </button>

      <p className={`text-center text-sm ${inter.className} ${currentTheme === "dark" ? "text-gray-400" : "text-gray-600"
        }`}>
        We&apos;ll get back to you within 24 hours
      </p>
    </form>
  );
}