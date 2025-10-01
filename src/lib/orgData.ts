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
  description: "Premium T.C.T blades and masonry cutting tools with fast delivery across Toronto and the GTA",
  url: import.meta.env.VITE_SITE_URL || "https://ashcamcutting.com",
  logo: import.meta.env.VITE_SITE_URL ? `${import.meta.env.VITE_SITE_URL}/src/assets/ashcam-logoV2.png` : "/src/assets/ashcam-logoV2.png",
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
  areaServed: [...SERVICE_AREAS, ...REGIONS],
  openingHours: "Mo-Su 07:00-22:00"
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
    "serviceType": "Industrial Cutting Tools and T.C.T Blades",
    "priceRange": "$$",
    "openingHours": organizationData.openingHours,
    "sameAs": [
      "https://www.facebook.com/AshCamCuttingSolutions",
      "https://www.linkedin.com/company/ashcam-cutting-solutions"
    ]
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

// FAQ JSON-LD generator
export function faqLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What types of cutting blades does AshCam Cutting Solutions offer?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "AshCam Cutting Solutions specializes in T.C.T (Tungsten Carbide Tipped) cutting blades for metals, aluminum, wood, concrete, masonry, and tile applications. We offer blades in 6½, 7¼, and 14 inch sizes."
        }
      },
      {
        "@type": "Question",
        "name": "Do you deliver cutting tools across the GTA?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we provide fast delivery across Toronto and the Greater Toronto Area, including Vaughan, Markham, Richmond Hill, Mississauga, Brampton, and surrounding communities."
        }
      },
      {
        "@type": "Question",
        "name": "What are your business hours?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We're open 7 days a week from 7:00 AM to 10:00 PM to support your project timelines across the GTA."
        }
      },
      {
        "@type": "Question",
        "name": "Can I get a custom quote for specific cutting requirements?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely! Contact us at +1-647-519-2734 or AshCam1964@yahoo.com for expert advice and competitive quotes on all your cutting tool needs."
        }
      },
      {
        "@type": "Question",
        "name": "Are your cutting blades suitable for industrial applications?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, our T.C.T cutting blades are engineered for both small contractors and large-scale industrial operations, meeting the highest industry standards for precision and durability."
        }
      }
    ]
  };
}
