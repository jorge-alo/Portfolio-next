import { ImageResponse } from "next/og"

export const alt = "Jorge Altamirano | Fullstack Web Developer"
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = "image/png"

export default function Image() {
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
          background: "#0B1120",
          color: "#F1F5F9",
        }}
      >
        <div
          style={{
            fontSize: 64,
            fontWeight: 700,
          }}
        >
          Jorge Altamirano
        </div>

        <div
          style={{
            marginTop: 20,
            fontSize: 36,
            color: "#818CF8",
          }}
        >
          Fullstack Web Developer
        </div>

        <div
          style={{
            marginTop: 40,
            fontSize: 24,
            color: "#94A3B8",
          }}
        >
          React · Next.js · Node.js · Express · MySQL
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}