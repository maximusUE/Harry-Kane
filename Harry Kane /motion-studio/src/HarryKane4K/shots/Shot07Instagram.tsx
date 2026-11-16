import React from "react";
import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { Cinematic4KBackground } from "../Cinematic4KBackground";

export const Shot07Instagram: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const cardSpring = spring({
    frame,
    fps,
    config: { damping: 14, mass: 0.8 },
  });

  // Continuous subtle 3D tilt
  const tiltY = interpolate(Math.sin(frame / 40), [-1, 1], [-2.5, 2.5]);
  const tiltX = interpolate(Math.cos(frame / 50), [-1, 1], [1.5, -1.5]);

  // Likes counter accelerates smoothly up to 3,840,000
  const likes = Math.floor(
    interpolate(frame, [20, 240], [180000, 3840200], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    })
  );

  // Paparazzi flashing in photo section
  const flash = interpolate(Math.sin(frame / 7), [-1, 1], [0, 0.28]);
  const opacity = interpolate(frame, [0, 12, 275, 291], [0, 1, 1, 0]);

  return (
    <AbsoluteFill style={{ width: 3840, height: 2160, perspective: 2000 }}>
      <Cinematic4KBackground theme="gold" />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
          opacity,
          transform: `rotateY(${tiltY}deg) rotateX(${tiltX}deg)`,
        }}
      >
        {/* Mockup Instagram 4K */}
        <div
          style={{
            transform: `scale(${Math.max(0, cardSpring)})`,
            width: "1150px",
            backgroundColor: "#111216",
            borderRadius: "44px",
            border: "3px solid rgba(255, 255, 255, 0.16)",
            boxShadow: "0 60px 140px rgba(0, 0, 0, 0.95)",
            overflow: "hidden",
            fontFamily: "system-ui, -apple-system, sans-serif",
          }}
        >
          {/* Header */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              padding: "30px 40px",
              borderBottom: "2px solid rgba(255, 255, 255, 0.08)",
            }}
          >
            <div
              style={{
                width: "84px",
                height: "84px",
                borderRadius: "50%",
                background: "linear-gradient(135deg, #F5DE88 0%, #E5B842 100%)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: 900,
                color: "#000000",
                fontSize: "34px",
              }}
            >
              HK
            </div>
            <div style={{ marginLeft: "24px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <span
                  style={{ color: "#FFFFFF", fontWeight: 800, fontSize: "32px" }}
                >
                  harrykane
                </span>
                <span style={{ color: "#38BDF8", fontSize: "28px" }}>✓</span>
              </div>
              <span style={{ color: "#94A3B8", fontSize: "22px" }}>
                Théâtre du Châtelet, Paris
              </span>
            </div>
          </div>

          {/* Foto con Flashes Paparazzi */}
          <div
            style={{
              height: "640px",
              background:
                "linear-gradient(180deg, #1A1C24 0%, #0C0D12 100%)",
              position: "relative",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div style={{ fontSize: "140px", marginBottom: "20px" }}>🏆✨</div>
            <span
              style={{
                color: "#E5B842",
                fontSize: "38px",
                fontWeight: 900,
                letterSpacing: "8px",
                textTransform: "uppercase",
              }}
            >
              ESMOQUIN PERFECTO • LUCES DORADAS
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

          {/* Likes Footer */}
          <div style={{ padding: "30px 40px" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "16px",
                color: "#EF4444",
                fontSize: "36px",
              }}
            >
              <span>❤️</span>
              <span
                style={{
                  color: "#FFFFFF",
                  fontWeight: 900,
                  fontSize: "34px",
                }}
              >
                {likes.toLocaleString("es-ES")} Me gusta
              </span>
            </div>
            <p
              style={{
                color: "#94A3B8",
                fontSize: "26px",
                marginTop: "16px",
                margin: 0,
                lineHeight: 1.4,
              }}
            >
              <strong style={{ color: "#FFFFFF" }}>harrykane</strong> Sueño cumplido.
              Gracias a los que nunca dejaron de creer en los días oscuros.
            </p>
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};
