import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#1F1C18",
          color: "#F4ECDF",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "Georgia, serif",
          fontStyle: "italic",
          fontWeight: 400,
          fontSize: 44,
          letterSpacing: -1,
          lineHeight: 1,
          paddingBottom: 4,
          borderRadius: "50%",
        }}
      >
        R
      </div>
    ),
    { ...size }
  );
}
