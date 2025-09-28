import React from 'react';
import { organizationLd, localBusinessLd } from './orgData';

export interface SeoProps {
  title: string;
  description: string;
  keywords?: string[];
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  noindex?: boolean;
  structuredData?: any[];
}

export function Seo({
  title,
  description,
  keywords,
  canonical,
  ogImage,
  ogType = "website",
  noindex = false,
  structuredData = []
}: SeoProps) {
  const siteUrl = import.meta.env.VITE_SITE_URL || "https://ashcamcutting.com";
  const fullTitle = title.includes("AshCam") ? title : `${title} | AshCam Cutting Solutions`;
  const canonicalUrl = canonical ? `${siteUrl}${canonical}` : siteUrl;
  const ogImageUrl = ogImage ? `${siteUrl}${ogImage}` : `${siteUrl}/src/assets/ashcam-logo.png`;

  // Limit keywords to 12 items max
  const limitedKeywords = keywords ? keywords.slice(0, 12) : [];

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
      <meta property="og:site_name" content="AshCam Cutting Solutions" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImageUrl} />
      
      {/* Robots */}
      {noindex && <meta name="robots" content="noindex, nofollow" />}
      
      {/* Structured Data */}
      {structuredData.map((data, index) => (
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
      title="Industrial T.C.T Cutting Tools in Toronto & GTA"
      description="Premium T.C.T blades and masonry cutting tools with fast delivery across Toronto and the GTA — including Vaughan, Markham, Richmond Hill, Mississauga, and Brampton."
      keywords={[
        "Toronto T.C.T blades",
        "GTA cutting tools", 
        "concrete saw blades Toronto",
        "masonry blades GTA",
        "industrial cutting tools Toronto",
        "T.C.T blades Vaughan",
        "Markham cutting tools",
        "Richmond Hill blades"
      ]}
      canonical="/"
      structuredData={[organizationLd(), localBusinessLd()]}
    />
  );
}

export function ContactSeo() {
  return (
    <Seo
      title="Contact — Toronto & GTA Cutting Tool Experts"
      description="Get a quote or technical advice. Serving Toronto, Vaughan, Markham, Richmond Hill, Mississauga, Brampton, and the GTA."
      keywords={[
        "contact cutting tools Toronto",
        "quote T.C.T blades GTA",
        "Toronto industrial tools supplier"
      ]}
      canonical="/contact"
    />
  );
}

export function ServiceAreasSeo() {
  return (
    <Seo
      title="Service Areas — Toronto & GTA T.C.T Cutting Tools"
      description="Delivery and expert support across Toronto, Vaughan, Markham, Richmond Hill, Mississauga, Brampton, and the GTA."
      keywords={[
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
