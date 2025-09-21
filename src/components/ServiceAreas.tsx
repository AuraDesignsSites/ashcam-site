import React from "react";
import { Link } from "react-router-dom";
import { SERVICE_AREAS } from "@/lib/orgData";

export default function ServiceAreas({ heading = "Serving Toronto & the GTA" }: { heading?: string }) {
  return (
    <section aria-labelledby="service-areas-heading" className="py-12 bg-warm-cream">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 id="service-areas-heading" className="text-3xl font-bold text-center mb-6">
          {heading}
        </h2>
        <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
          Fast delivery and support across Toronto and the Greater Toronto Area, including nearby cities.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 max-w-4xl mx-auto">
          {SERVICE_AREAS.map(city => (
            <Link
              key={city}
              to={`/contact?city=${encodeURIComponent(city)}`}
              className="block p-3 text-center bg-background rounded-lg border hover:border-primary hover:bg-primary/5 transition-colors"
              aria-label={`Contact us for service in ${city}`}
            >
              <span className="text-sm font-medium text-foreground">{city}</span>
            </Link>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link
            to="/contact"
            className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
          >
            Get a Quote for Your Area
          </Link>
        </div>
      </div>
    </section>
  );
}
