"use client";

import { services } from "@/data/services";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import GetStartedPage from "../page";

export default function GetStartedServicePage() {
  const params = useParams();
  const [service, setService] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (params?.service) {
      const serviceData = services[params.service as string];
      setService(serviceData);
      setLoading(false);
    }
  }, [params]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-400">Loading service...</p>
        </div>
      </div>
    );
  }

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Service Not Found
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            The service you're looking for doesn't exist.
          </p>
        </div>
      </div>
    );
  }

  return <GetStartedPage {...service} />;
}