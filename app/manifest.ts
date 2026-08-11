import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "حلول رقمية للعراق",
    short_name: "حلول العراق",
    description: "مواقع وتطبيقات وأنظمة وأتمتة أعمال موجّهة إلى السوق العراقي.",
    start_url: "/ar",
    scope: "/",
    display: "standalone",
    background_color: "#06111f",
    theme_color: "#081827",
    orientation: "any",
    lang: "ar",
    dir: "rtl",
    icons: [
      { src: "/app-icon-192.png", sizes: "192x192", type: "image/png", purpose: "any" },
      { src: "/app-icon-512.png", sizes: "512x512", type: "image/png", purpose: "any" },
      { src: "/app-icon-512.png", sizes: "512x512", type: "image/png", purpose: "maskable" },
    ],
  };
}
