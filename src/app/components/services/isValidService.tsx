import { Service } from "./Service";

// Safe service validator
export default function isValidService(service: unknown): service is Service {
  return typeof service === 'object' &&
    service !== null &&
    'title' in service &&
    'price' in service &&
    'features' in service &&
    Array.isArray((service as { features: unknown }).features);
}