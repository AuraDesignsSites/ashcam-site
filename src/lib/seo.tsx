import React from 'react';
import { organizationLd, localBusinessLd, faqLd } from './orgData';
import { serviceLd, reviewLd } from './StructuredData';

export interface SeoProps {
  title: string;
  description: string;
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
  canonical,
  ogImage,
  ogType = "website",
  noindex = false,
  structuredData = [],
  breadcrumbs = []
}: SeoProps) {
  const siteUrl = import.meta.env.VITE_SITE_URL || "https://ashcamcuttingsolution.ca";
  const fullTitle = title.includes("AshCam") ? title : `${title} | AshCam Cutting Solutions`;
  const canonicalUrl = canonical ? `${siteUrl}${canonical.startsWith('/') ? canonical : `/${canonical}`}` : siteUrl;
  const ogImageUrl = ogImage ? `${siteUrl}${ogImage}` : `${siteUrl}/src/assets/ashcam-logoV2.png`;

  // Keywords removed - not used for ranking and can be considered spammy

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
      title="AshCam Cutting Solutions — T.C.T Blades Toronto & GTA"
      description="Premium T.C.T blades and cutting tools with fast delivery across Toronto and the GTA. Professional cutting solutions since 1964. Get a quote today!"
      canonical="/"
      structuredData={[organizationLd(), localBusinessLd(), faqLd(), reviewLd()]}
    />
  );
}

export function ContactSeo() {
  return (
    <Seo
      title="Contact AshCam Cutting Solutions — Toronto T.C.T Tools"
      description="Contact AshCam Cutting Solutions for quotes and technical advice. Serving Toronto, Vaughan, Markham, and the GTA. Call us today!"
      canonical="/contact"
    />
  );
}

export function ServiceAreasSeo() {
  return (
    <Seo
      title="Service Areas — AshCam T.C.T Tools Toronto & GTA"
      description="AshCam Cutting Solutions delivery and expert support across Toronto, Vaughan, Markham, and the GTA. Fast local delivery available."
      canonical="/service-areas"
      structuredData={[serviceLd()]}
    />
  );
}

export function AboutSeo() {
  return (
    <Seo
      title="About AshCam Cutting Solutions — Toronto T.C.T Tools"
      description="Learn about AshCam Cutting Solutions Ltd, Toronto's trusted supplier of premium T.C.T cutting blades and industrial tools. Contact us for expert advice."
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
      title="T.C.T Blades Gallery — AshCam Cutting Solutions Toronto"
      description="View our premium T.C.T cutting blades in action. Professional cutting tools for concrete, masonry, metal, and tile applications. See our products!"
      canonical="/gallery"
      breadcrumbs={[
        { name: "Home", url: "/" },
        { name: "Gallery", url: "/gallery" }
      ]}
    />
  );
}

export function FAQSeo() {
  return (
    <Seo
      title="FAQ — AshCam Cutting Solutions Toronto T.C.T Tools"
      description="Frequently asked questions about AshCam's T.C.T cutting blades, delivery across Toronto & GTA, pricing, and industrial cutting solutions. Get expert answers."
      canonical="/faq"
      structuredData={[organizationLd(), faqLd()]}
      breadcrumbs={[
        { name: "Home", url: "/" },
        { name: "FAQ", url: "/faq" }
      ]}
    />
  );
}
