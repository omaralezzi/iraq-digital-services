import type { MetadataRoute } from "next";
export default function robots(): MetadataRoute.Robots { return { rules: [{ userAgent: "*", allow: ["/ar", "/en", "/de"], disallow: ["/*/legal/"] }], sitemap: "https://sifrsifr.one/sitemap.xml" }; }
