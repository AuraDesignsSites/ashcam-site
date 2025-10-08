import { Seo } from './seo';
import { organizationLd, localBusinessLd, faqLd } from './orgData';

interface PageSEOProps {
  page: 'home' | 'about' | 'products' | 'gallery' | 'contact' | 'service-areas' | 'not-found';
  customTitle?: string;
  customDescription?: string;
  keywords?: string[];
  canonical?: string;
  structuredData?: any[];
  breadcrumbs?: Array<{name: string, url: string}>;
}

// Optimized titles under 60 characters with target keywords and location
const PAGE_TITLES = {
  home: "AshCam Cutting Solutions — T.C.T Blades Toronto & GTA",
  about: "About AshCam Cutting Solutions — Toronto T.C.T Tools",
  products: "T.C.T Cutting Blades — Toronto & GTA | AshCam",
  gallery: "T.C.T Blades Gallery — AshCam Cutting Solutions Toronto",
  contact: "Contact AshCam Cutting Solutions — Toronto T.C.T Tools",
  'service-areas': "Service Areas — AshCam T.C.T Tools Toronto & GTA",
  'not-found': "Page Not Found — AshCam Cutting Solutions"
};

// Optimized descriptions under 160 characters with CTAs and keywords
const PAGE_DESCRIPTIONS = {
  home: "Premium T.C.T blades and cutting tools with fast delivery across Toronto and the GTA. Professional cutting solutions since 1964. Get a quote today!",
  about: "Learn about AshCam Cutting Solutions Ltd, Toronto's trusted supplier of premium T.C.T cutting blades and industrial tools. Contact us for expert advice.",
  products: "Professional T.C.T cutting blades for concrete, masonry, metal, and tile cutting across Toronto, Vaughan, Markham, and GTA. Order now!",
  gallery: "View our premium T.C.T cutting blades in action. Professional cutting tools for concrete, masonry, metal, and tile applications. See our products!",
  contact: "Contact AshCam Cutting Solutions for quotes and technical advice. Serving Toronto, Vaughan, Markham, and the GTA. Call us today!",
  'service-areas': "AshCam Cutting Solutions delivery and expert support across Toronto, Vaughan, Markham, and the GTA. Fast local delivery available.",
  'not-found': "The page you're looking for doesn't exist. Return to AshCam Cutting Solutions for premium T.C.T cutting tools across Toronto & GTA."
};

// Target keywords for each page
const PAGE_KEYWORDS = {
  home: [
    "AshCam Cutting Solutions",
    "T.C.T blades Toronto",
    "cutting tools GTA",
    "concrete saw blades Toronto",
    "masonry blades GTA",
    "industrial cutting tools Toronto"
  ],
  about: [
    "AshCam Cutting Solutions about",
    "Toronto industrial tools company",
    "T.C.T blades manufacturer Toronto",
    "cutting tools supplier GTA",
    "AshCam company history"
  ],
  products: [
    "T.C.T cutting blades Toronto",
    "concrete saw blades GTA",
    "metal cutting tools Vaughan",
    "T.C.T blades Markham",
    "cutting discs Richmond Hill",
    "steel cutting blades"
  ],
  gallery: [
    "AshCam product gallery",
    "T.C.T blades photos Toronto",
    "cutting tools images GTA",
    "industrial tools gallery",
    "saw blades pictures"
  ],
  contact: [
    "contact AshCam Cutting Solutions",
    "AshCam Cutting Solutions contact",
    "contact cutting tools Toronto",
    "quote T.C.T blades GTA",
    "Toronto industrial tools supplier"
  ],
  'service-areas': [
    "AshCam Cutting Solutions service areas",
    "AshCam Cutting Solutions Toronto",
    "AshCam Cutting Solutions GTA",
    "Toronto T.C.T blades",
    "GTA cutting tools"
  ],
  'not-found': [
    "AshCam Cutting Solutions",
    "T.C.T cutting tools Toronto",
    "cutting blades GTA"
  ]
};

export function PageSEO({ 
  page, 
  customTitle, 
  customDescription, 
  keywords, 
  canonical, 
  structuredData = [], 
  breadcrumbs = [] 
}: PageSEOProps) {
  const title = customTitle || PAGE_TITLES[page];
  const description = customDescription || PAGE_DESCRIPTIONS[page];
  const pageKeywords = keywords || PAGE_KEYWORDS[page];

  // Validate title length
  if (title.length > 60) {
    console.warn(`Title too long (${title.length} chars): ${title}`);
  }

  // Validate description length
  if (description.length > 160) {
    console.warn(`Description too long (${description.length} chars): ${description}`);
  }

  return (
    <Seo
      title={title}
      description={description}
      keywords={pageKeywords}
      canonical={canonical || (page === 'home' ? '/' : `/${page}`)}
      structuredData={structuredData}
      breadcrumbs={breadcrumbs}
    />
  );
}

// Convenience components for each page
export function HomePageSEO() {
  return (
    <PageSEO
      page="home"
      structuredData={[organizationLd(), localBusinessLd(), faqLd()]}
    />
  );
}

export function AboutPageSEO() {
  return (
    <PageSEO
      page="about"
      structuredData={[organizationLd()]}
      breadcrumbs={[
        { name: "Home", url: "/" },
        { name: "About", url: "/about" }
      ]}
    />
  );
}

export function ProductsPageSEO() {
  return (
    <PageSEO
      page="products"
      structuredData={productSchemas}
      breadcrumbs={[
        { name: "Home", url: "/" },
        { name: "Products", url: "/products" }
      ]}
    />
  );
}

export function GalleryPageSEO() {
  return (
    <PageSEO
      page="gallery"
      breadcrumbs={[
        { name: "Home", url: "/" },
        { name: "Gallery", url: "/gallery" }
      ]}
    />
  );
}

export function ContactPageSEO() {
  return (
    <PageSEO
      page="contact"
    />
  );
}

export function ServiceAreasPageSEO() {
  return (
    <PageSEO
      page="service-areas"
    />
  );
}

export function NotFoundPageSEO() {
  return (
    <PageSEO
      page="not-found"
      noindex={true}
    />
  );
}

// Product schemas for products page
const productSchemas = [
  {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "T.C.T Saw Blade",
    "description": "High-performance T.C.T cutting blades for metals, aluminum, wood, concrete, masonry, and tile applications",
    "brand": {
      "@type": "Brand",
      "name": "AshCam Cutting Solutions"
    },
    "offers": {
      "@type": "Offer",
      "priceCurrency": "CAD",
      "availability": "https://schema.org/InStock",
      "seller": {
        "@type": "Organization",
        "name": "AshCam Cutting Solutions Ltd"
      }
    }
  }
];
