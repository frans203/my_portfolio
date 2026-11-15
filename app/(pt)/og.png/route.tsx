import { ImageResponse } from "next/og";

export const dynamic = "force-static";

// Imagem de compartilhamento (Open Graph) gerada no build → out/og.png
export function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          background: "#000000",
          color: "#ffffff",
        }}
      >
        <svg width="96" height="96" viewBox="0 0 64 64" fill="none" stroke="#ffffff" strokeWidth="6" strokeLinecap="square" strokeLinejoin="miter">
          <path d="M11 53V11H53" />
          <path d="M11 32H27" />
          <path d="M37 11V32H53V53H35" />
        </svg>
        <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ fontSize: 28, opacity: 0.7, marginBottom: 24 }}>Francisco Santana Soluções Digitais</div>
        <div style={{ fontSize: 68, fontWeight: 700, lineHeight: 1.1, maxWidth: 960 }}>
          Engenharia de software, dados e agentes de IA.
        </div>
        </div>
      </div>
    ),
    { width: 1200, height: 630 },
  );
}
