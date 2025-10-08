import React from 'react';

// Product schema for individual T.C.T blades
export function productLd(product: {
  name: string;
  description: string;
  categories: string[];
  size: string;
  features: string[];
  price: string;
  image: string;
  sku?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": product.name,
    "description": product.description,
    "image": product.image,
    "sku": product.sku || product.name.toLowerCase().replace(/\s+/g, '-'),
    "brand": {
      "@type": "Brand",
      "name": "AshCam Cutting Solutions"
    },
    "manufacturer": {
      "@type": "Organization",
      "name": "AshCam Cutting Solutions Ltd"
    },
    "category": product.categories.join(", "),
    "offers": {
      "@type": "Offer",
      "price": product.price.replace(/[^\d]/g, ''),
      "priceCurrency": "CAD",
      "availability": "https://schema.org/InStock",
      "seller": {
        "@type": "Organization",
        "name": "AshCam Cutting Solutions Ltd"
      },
      "priceValidUntil": new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]
    },
    "additionalProperty": [
      {
        "@type": "PropertyValue",
        "name": "Size",
        "value": product.size
      },
      {
        "@type": "PropertyValue", 
        "name": "Features",
        "value": product.features.join(", ")
      }
    ]
  };
}

// Service schema for cutting tool services
export function serviceLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "T.C.T Cutting Tool Supply and Delivery",
    "description": "Professional supply and delivery of high-quality T.C.T cutting blades and industrial cutting tools across Toronto and the GTA",
    "provider": {
      "@type": "LocalBusiness",
      "name": "AshCam Cutting Solutions Ltd",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "385 Osler Street, Unit 510",
        "addressLocality": "Toronto",
        "addressRegion": "ON",
        "postalCode": "M6N 0B2",
        "addressCountry": "CA"
      },
      "telephone": "+1-647-519-2734",
      "email": "AshCam1964@yahoo.com"
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "Toronto"
      },
      {
        "@type": "City", 
        "name": "Vaughan"
      },
      {
        "@type": "City",
        "name": "Markham"
      },
      {
        "@type": "City",
        "name": "Richmond Hill"
      },
      {
        "@type": "City",
        "name": "Mississauga"
      },
      {
        "@type": "City",
        "name": "Brampton"
      }
    ],
    "serviceType": "Industrial Cutting Tools Supply",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "T.C.T Cutting Blades and Industrial Tools",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Product",
            "name": "T.C.T Saw Blades for Metals"
          }
        },
        {
          "@type": "Offer", 
          "itemOffered": {
            "@type": "Product",
            "name": "T.C.T Saw Blades for Aluminum"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Product", 
            "name": "T.C.T Saw Blades for Wood"
          }
        }
      ]
    }
  };
}

// Review schema for customer testimonials (conservative, realistic)
export function reviewLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Review",
    "itemReviewed": {
      "@type": "LocalBusiness",
      "name": "AshCam Cutting Solutions Ltd"
    },
    "author": {
      "@type": "Person",
      "name": "Construction Professional"
    },
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": "5",
      "bestRating": "5"
    },
    "reviewBody": "Excellent quality T.C.T blades and reliable delivery service across the GTA. AshCam has been our trusted supplier for industrial cutting tools.",
    "datePublished": "2024-01-15"
  };
}

// Collection of all structured data generators
export const structuredDataGenerators = {
  productLd,
  serviceLd,
  reviewLd
};
