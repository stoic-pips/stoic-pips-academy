import { IconType } from "react-icons";

export interface Service {
  id?: string;
  title: string;
  description: string;
  price: string;
  originalPrice?: string;
  features: string[];
  icon: IconType;
  iconColor: string;
}