import React from "react";
import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";

export const Shot7Instagram: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const cardSpring = spring({
    frame,
    fps,
    config: { damping: 14, mass: 0.8 },
  });

  // Contador de Likes dinámico
  const likesCount = Math.floor(
    interpolate(frame, [15, 120], [120000, 2840900], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    })
  );

  // Paparazzi Flash
  const flash = interpolate(
    Math.sin(frame / 7),
    [-1, 1],
    [0, 0.25]
  );

  const opacity = interpolate(frame, [0, 15, 165, 180], [0, 1, 1, 0]);

  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#070709",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          transform: `scale(${Math.max(0, cardSpring)}) rotate(-1deg)`,
          opacity,
          width: "560px",
          backgroundColor: "#121215",
          borderRadius: "24px",
          border: "1px solid rgba(255, 255, 255, 0.12)",
          boxShadow: "0 25px 60px rgba(0, 0, 0, 0.8)",
          overflow: "hidden",
          fontFamily: "system-ui, -apple-system, sans-serif",
        }}
      >
        {/* Cabecera de Usuario */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            padding: "16px 20px",
            borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
          }}
        >
          <div
            style={{
              width: "44px",
              height: "44px",
              borderRadius: "50%",
              background: "linear-gradient(135deg, #F5DE88 0%, #D4AF37 100%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: 800,
              color: "#000000",
              fontSize: "18px",
            }}
          >
            HK
          </div>
          <div style={{ marginLeft: "14px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
              <span
                style={{ color: "#FFFFFF", fontWeight: 700, fontSize: "16px" }}
              >
                harrykane
              </span>
              <span style={{ color: "#38BDF8", fontSize: "14px" }}>✓</span>
            </div>
            <span style={{ color: "#94A3B8", fontSize: "12px" }}>
              Théâtre du Châtelet, Paris
            </span>
          </div>
        </div>

        {/* Foto de la Gala con Esmoquin y Flash */}
        <div
          style={{
            height: "320px",
            background:
              "linear-gradient(180deg, #1A1A22 0%, #0D0D11 100%)",
            position: "relative",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div style={{ fontSize: "70px", marginBottom: "10px" }}>🏆✨</div>
          <span
            style={{
              color: "#D4AF37",
              fontSize: "20px",
              fontWeight: 800,
              letterSpacing: "4px",
              textTransform: "uppercase",
            }}
          >
            ESMOQUIN PERFECTO
          </span>
          <span
            style={{
              color: "#E2E8F0",
              fontSize: "14px",
              marginTop: "6px",
              opacity: 0.8,
            }}
          >
            Sonrisa radiante • Luces doradas
          </span>

          {/* Flash paparazzi overlay */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              backgroundColor: "#FFFFFF",
              opacity: flash,
              pointerEvents: "none",
            }}
          />
        </div>

        {/* Contador de Likes en vivo */}
        <div style={{ padding: "16px 20px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              color: "#EF4444",
              fontSize: "18px",
            }}
          >
            <span>❤️</span>
            <span
              style={{
                color: "#FFFFFF",
                fontWeight: 800,
                fontSize: "17px",
              }}
            >
              {likesCount.toLocaleString("es-ES")} Me gusta
            </span>
          </div>
          <p
            style={{
              color: "#94A3B8",
              fontSize: "14px",
              marginTop: "10px",
              margin: 0,
            }}
          >
            <strong style={{ color: "#FFFFFF" }}>harrykane</strong> Sueño cumplido.
            Gracias a todos los que creyeron.
          </p>
        </div>
      </div>
    </AbsoluteFill>
  );
};

