import fs from 'fs';
import path from 'path';

const siteUrl = process.env.VITE_SITE_URL || 'https://ashcamcuttingsolution.ca';

const routes = [
  '/',
  '/about',
  '/products',
  '/gallery',
  '/contact',
  '/service-areas'
];

const generateSitemap = () => {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes.map(route => `  <url>
    <loc>${siteUrl}${route}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${route === '/' ? '1.0' : '0.8'}</priority>
  </url>`).join('\n')}
</urlset>`;

  const publicDir = path.join(process.cwd(), 'public');
  const sitemapPath = path.join(publicDir, 'sitemap.xml');
  
  // Ensure public directory exists
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }
  
  fs.writeFileSync(sitemapPath, sitemap);
  console.log(`Sitemap generated at ${sitemapPath}`);
  console.log(`Included ${routes.length} routes`);
};

generateSitemap();
