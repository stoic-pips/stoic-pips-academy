import { Service } from "./Service";

// Safe service validator
export default function isValidService(service: any): service is Service {
  return service && 
         typeof service.id === 'string' && 
         service.title && 
         service.price && 
         Array.isArray(service.features);
}