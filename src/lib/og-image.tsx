import { ImageResponse } from "next/og";
import { siteConfig } from "@/data/site";

export const ogImageSize = { width: 1200, height: 630 };

export function renderOgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "linear-gradient(135deg, #0a0908 0%, #2a2826 100%)",
          color: "#ffffff",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 32,
            fontWeight: 600,
            letterSpacing: 4,
            textTransform: "uppercase",
            color: "#d9b36c",
          }}
        >
          {siteConfig.shortName}
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 24,
            fontSize: 60,
            fontWeight: 700,
            lineHeight: 1.15,
            maxWidth: 900,
          }}
        >
          {siteConfig.tagline}
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 32,
            fontSize: 28,
            color: "#a39c92",
          }}
        >
          {siteConfig.name}
        </div>
      </div>
    ),
    { ...ogImageSize }
  );
}
