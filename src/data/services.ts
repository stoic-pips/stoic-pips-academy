import { IconBase } from "react-icons";
import { 
  FaUsers, 
  FaUserTie, 
  FaBell, 
  FaChartLine, 
  FaRobot 
} from "react-icons/fa";
import { Service } from "./Service";

export const services: Record<string, Service> = {
  "group-mentorship": {
    title: "Group Mentorship",
    description: "Structured trading guidance from beginner to pro with group sessions.",
    price: "$100",
    originalPrice: "$299",
    features: [
      "Weekly Zoom Mentorship",
      "Lifetime Access",
      "Price Action Mastery",
      "Supply & Demand Training",
    ],
    icon: FaUsers,
    iconColor: "#3B82F6", // Blue
  },
  "1on1-mentorship": {
    title: "1-on-1 Mentorship",
    description: "Personalized one-on-one training with Daniel Anguzu.",
    price: "$300",
    originalPrice: "$499",
    features: [
      "Private Sessions",
      "Signals",
      "Lifetime Access",
      "Custom Strategy Guidance",
    ],
    icon: FaUserTie,
    iconColor: "#10B981", // Green
  },
  "signals": {
    title: "Signals",
    description: "High-probability trading signals for Forex & Indices.",
    price: "$20/month",
    originalPrice: "$50/month",
    features: [
      "Daily Signals",
      "Synthetic Indices",
      "Forex Pairs",
      "Telegram Access",
    ],
    icon: FaBell,
    iconColor: "#F59E0B", // Amber
  },
  "account-management": {
    title: "Account Management",
    description: "We manage your account with professional low-risk strategies.",
    price: "$500",
    originalPrice: "$699",
    features: [
      "Full Management", 
      "Low-Risk Strategy", 
      "Weekly Reports"
    ],
    icon: FaChartLine,
    iconColor: "#8B5CF6", // Purple
  },
  "robot-building": {
    title: "Robot Building",
    description: "Custom robots designed & backtested for your strategy.",
    price: "$600",
    originalPrice: "$1499",
    features: [
      "Custom Bot Design",
      "Backtested Strategy",
      "Installation Support",
      "Lifetime Updates",
    ],
    icon: FaRobot,
    iconColor: "#EF4444", // Red
  },
};