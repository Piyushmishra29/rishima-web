import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#F4ECDF",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "Georgia, serif",
        }}
      >
        <div
          style={{
            width: 130,
            height: 130,
            borderRadius: "50%",
            background: "#1F1C18",
            color: "#F4ECDF",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontStyle: "italic",
            fontWeight: 400,
            fontSize: 96,
            letterSpacing: -2,
            lineHeight: 1,
            paddingBottom: 8,
          }}
        >
          R
        </div>
      </div>
    ),
    { ...size }
  );
}
