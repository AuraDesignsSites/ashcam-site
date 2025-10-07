import React from 'react';
import { organizationLd, localBusinessLd, faqLd } from './orgData';

export interface SeoProps {
  title: string;
  description: string;
  keywords?: string[];
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  noindex?: boolean;
  structuredData?: any[];
  breadcrumbs?: Array<{name: string, url: string}>;
}

export function Seo({
  title,
  description,
  keywords,
  canonical,
  ogImage,
  ogType = "website",
  noindex = false,
  structuredData = [],
  breadcrumbs = []
}: SeoProps) {
  const siteUrl = import.meta.env.VITE_SITE_URL || "https://ashcamcuttingsolution.ca";
  const fullTitle = title.includes("AshCam") ? title : `${title} | AshCam Cutting Solutions`;
  const canonicalUrl = canonical ? `${siteUrl}${canonical}` : siteUrl;
  const ogImageUrl = ogImage ? `${siteUrl}${ogImage}` : `${siteUrl}/src/assets/ashcam-logoV2.png`;

  // Limit keywords to 12 items max
  const limitedKeywords = keywords ? keywords.slice(0, 12) : [];

  // Generate breadcrumb structured data
  const breadcrumbLd = breadcrumbs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((crumb, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": crumb.name,
      "item": `${siteUrl}${crumb.url}`
    }))
  } : null;

  const allStructuredData = [...structuredData];
  if (breadcrumbLd) {
    allStructuredData.push(breadcrumbLd);
  }

  return (
    <>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {limitedKeywords.length > 0 && (
        <meta name="keywords" content={limitedKeywords.join(", ")} />
      )}
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={ogImageUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="AshCam Cutting Solutions - Industrial T.C.T Cutting Tools" />
      <meta property="og:site_name" content="AshCam Cutting Solutions" />
      <meta property="og:locale" content="en_CA" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImageUrl} />
      <meta name="twitter:image:alt" content="AshCam Cutting Solutions - Industrial T.C.T Cutting Tools" />
      <meta name="twitter:site" content="@AshCamCutting" />
      <meta name="twitter:creator" content="@AshCamCutting" />
      
      {/* Robots */}
      {noindex && <meta name="robots" content="noindex, nofollow" />}
      
      {/* Structured Data */}
      {allStructuredData.map((data, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
        />
      ))}
    </>
  );
}

// Pre-configured SEO components for common pages
export function HomeSeo() {
  return (
    <Seo
      title="AshCam Cutting Solutions — Industrial T.C.T Cutting Tools Toronto & GTA"
      description="AshCam Cutting Solutions Ltd: Premium T.C.T blades and masonry cutting tools with fast delivery across Toronto and the GTA — including Vaughan, Markham, Richmond Hill, Mississauga, and Brampton."
      keywords={[
        "AshCam Cutting Solutions",
        "AshCam Cutting Solutions Ltd",
        "Toronto T.C.T blades",
        "GTA cutting tools", 
        "concrete saw blades Toronto",
        "masonry blades GTA",
        "industrial cutting tools Toronto",
        "T.C.T blades Vaughan",
        "Markham cutting tools",
        "Richmond Hill blades",
        "AshCam Toronto",
        "cutting tools company Toronto"
      ]}
      canonical="/"
      structuredData={[organizationLd(), localBusinessLd(), faqLd()]}
    />
  );
}

export function ContactSeo() {
  return (
    <Seo
      title="Contact AshCam Cutting Solutions — Toronto & GTA Cutting Tool Experts"
      description="Contact AshCam Cutting Solutions for quotes and technical advice. Serving Toronto, Vaughan, Markham, Richmond Hill, Mississauga, Brampton, and the GTA."
      keywords={[
        "contact AshCam Cutting Solutions",
        "AshCam Cutting Solutions contact",
        "contact cutting tools Toronto",
        "quote T.C.T blades GTA",
        "Toronto industrial tools supplier",
        "AshCam Cutting Solutions phone",
        "AshCam Cutting Solutions email"
      ]}
      canonical="/contact"
    />
  );
}

export function ServiceAreasSeo() {
  return (
    <Seo
      title="AshCam Cutting Solutions Service Areas — Toronto & GTA T.C.T Cutting Tools"
      description="AshCam Cutting Solutions delivery and expert support across Toronto, Vaughan, Markham, Richmond Hill, Mississauga, Brampton, and the GTA."
      keywords={[
        "AshCam Cutting Solutions service areas",
        "AshCam Cutting Solutions Toronto",
        "AshCam Cutting Solutions GTA",
        "Toronto T.C.T blades",
        "GTA cutting tools",
        "Markham concrete saw blades",
        "Vaughan masonry blades",
        "Richmond Hill T.C.T blades"
      ]}
      canonical="/service-areas"
    />
  );
}

export function AboutSeo() {
  return (
    <Seo
      title="About AshCam Cutting Solutions — Toronto Industrial Tools"
      description="Learn about AshCam Cutting Solutions Ltd, Toronto's trusted supplier of premium T.C.T cutting blades and industrial tools. Serving the GTA since 1964."
      keywords={[
        "AshCam Cutting Solutions about",
        "Toronto industrial tools company",
        "T.C.T blades manufacturer Toronto",
        "cutting tools supplier GTA",
        "AshCam company history",
        "industrial tools Toronto"
      ]}
      canonical="/about"
      structuredData={[organizationLd()]}
      breadcrumbs={[
        { name: "Home", url: "/" },
        { name: "About", url: "/about" }
      ]}
    />
  );
}

export function GallerySeo() {
  return (
    <Seo
      title="Product Gallery — AshCam Cutting Solutions T.C.T Blades"
      description="View our premium T.C.T cutting blades in action. Professional cutting tools for concrete, masonry, metal, and tile applications across Toronto & GTA."
      keywords={[
        "AshCam product gallery",
        "T.C.T blades photos Toronto",
        "cutting tools images GTA",
        "industrial tools gallery",
        "saw blades pictures",
        "cutting equipment photos"
      ]}
      canonical="/gallery"
      breadcrumbs={[
        { name: "Home", url: "/" },
        { name: "Gallery", url: "/gallery" }
      ]}
    />
  );
}
