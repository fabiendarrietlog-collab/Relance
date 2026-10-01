import { ImageResponse } from "next/og";

export const alt = "Relance : vos devis sans réponse se relancent tout seuls";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

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
          background: "#F6F1E7",
          color: "#16130F",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 32,
            fontWeight: 700,
            letterSpacing: 6,
            color: "#C2410C",
          }}
        >
          RELANCE
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 32,
            fontSize: 84,
            fontWeight: 800,
            lineHeight: 1.05,
          }}
        >
          Vos devis sans réponse se relancent tout seuls.
        </div>
        <div style={{ display: "flex", marginTop: 40, fontSize: 34 }}>
          35 € par mois. Sans engagement.
        </div>
      </div>
    ),
    { ...size }
  );
}
