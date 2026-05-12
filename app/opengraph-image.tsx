import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const alt = "Rishima Menon — Marketer & Creator";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#f4ecdf",
          color: "#1f1c18",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          fontFamily: "Georgia, serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            fontSize: 22,
            letterSpacing: 4,
            textTransform: "uppercase",
            opacity: 0.7,
          }}
        >
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 999,
              background: "#1f1c18",
              color: "#f4ecdf",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 28,
              fontStyle: "italic",
            }}
          >
            R
          </div>
          <div style={{ display: "flex" }}>Rishima Menon</div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            fontSize: 92,
            lineHeight: 1.05,
            letterSpacing: -2,
          }}
        >
          <div style={{ display: "flex" }}>Content people</div>
          <div style={{ display: "flex" }}>
            <span style={{ fontStyle: "italic", color: "#a48faa" }}>
              actually
            </span>
            <span style={{ marginLeft: 18 }}>want to watch.</span>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 22,
            letterSpacing: 2,
            textTransform: "uppercase",
            opacity: 0.7,
          }}
        >
          <span>Marketer · Creator</span>
          <span>London → India</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
