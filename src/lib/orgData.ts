// Service areas and regions for Toronto & GTA local SEO
export const SERVICE_AREAS = [
  "Toronto", "Markham", "Richmond Hill", "Vaughan", "Mississauga", "Brampton",
  "Scarborough", "North York", "Etobicoke", "York", "East York",
  "Pickering", "Ajax", "Whitby", "Oshawa",
  "Aurora", "Newmarket", "Stouffville", "King City", "Maple", "Thornhill", "Uxbridge",
  "Oakville", "Burlington", "Milton", "Halton Hills", "Caledon",
  "Hamilton"
];

export const REGIONS = ["GTA", "Peel Region", "York Region", "Durham Region", "Halton Region"];

// Organization data for JSON-LD
export const organizationData = {
  name: "AshCam Cutting Solutions Ltd",
  description: "Premium diamond blades and masonry cutting tools with fast delivery across Toronto and the GTA",
  url: import.meta.env.VITE_SITE_URL || "https://ashcamcutting.com",
  logo: import.meta.env.VITE_SITE_URL ? `${import.meta.env.VITE_SITE_URL}/src/assets/ashcam-logo.png` : "/src/assets/ashcam-logo.png",
  address: {
    streetAddress: "385 Osler Street, Unit 510",
    addressLocality: "Toronto",
    addressRegion: "ON",
    postalCode: "M6N 0B2",
    addressCountry: "CA"
  },
  contactPoint: {
    telephone: "+1-647-519-2734",
    contactType: "customer service",
    email: "AshCam1964@yahoo.com"
  },
  areaServed: [...SERVICE_AREAS, ...REGIONS]
};

// LocalBusiness JSON-LD generator
export function localBusinessLd() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": organizationData.name,
    "description": organizationData.description,
    "url": organizationData.url,
    "logo": organizationData.logo,
    "image": organizationData.logo,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": organizationData.address.streetAddress,
      "addressLocality": organizationData.address.addressLocality,
      "addressRegion": organizationData.address.addressRegion,
      "postalCode": organizationData.address.postalCode,
      "addressCountry": organizationData.address.addressCountry
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": organizationData.contactPoint.telephone,
      "contactType": organizationData.contactPoint.contactType,
      "email": organizationData.contactPoint.email
    },
    "areaServed": organizationData.areaServed,
    "serviceType": "Industrial Cutting Tools and Diamond Blades",
    "priceRange": "$$"
  };
}

// Organization JSON-LD generator
export function organizationLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": organizationData.name,
    "description": organizationData.description,
    "url": organizationData.url,
    "logo": organizationData.logo,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": organizationData.address.streetAddress,
      "addressLocality": organizationData.address.addressLocality,
      "addressRegion": organizationData.address.addressRegion,
      "postalCode": organizationData.address.postalCode,
      "addressCountry": organizationData.address.addressCountry
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": organizationData.contactPoint.telephone,
      "contactType": organizationData.contactPoint.contactType,
      "email": organizationData.contactPoint.email
    }
  };
}
