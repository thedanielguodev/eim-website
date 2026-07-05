import type { MetadataRoute } from "next";
import { siteConfig } from "@/data/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.name,
    short_name: siteConfig.shortName,
    description: siteConfig.description,
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#0a0908",
    icons: [
      {
        src: "/logo.jpg",
        sizes: "192x192",
        type: "image/jpeg",
      },
    ],
  };
}
