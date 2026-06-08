import { MetadataRoute } from "next";

export const dynamic = "force-static";  
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*", // Applies to all search engines

      allow: "/",   // Allow crawling these pages
      disallow: ["/api/", "/admin/", "/dashboard/"],  // Block these
    },
    sitemap: "https://vamvam-uniport.com/sitemap.xml",
  };
}