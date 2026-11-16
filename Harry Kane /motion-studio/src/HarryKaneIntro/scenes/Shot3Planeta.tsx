import React from "react";
import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";

export const Shot3Planeta: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const titleSpring = spring({
    frame,
    fps,
    config: { damping: 13, mass: 0.8 },
  });

  const badgesSpring = spring({
    frame: frame - 20,
    fps,
    config: { damping: 15, mass: 0.8 },
  });

  const cameraScale = interpolate(frame, [0, 150], [1.05, 0.98]);
  const opacity = interpolate(frame, [0, 15, 135, 150], [0, 1, 1, 0]);

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
          transform: `scale(${cameraScale})`,
          opacity,
          textAlign: "center",
          padding: "0 40px",
        }}
      >
        <span
          style={{
            color: "#94A3B8",
            fontSize: "20px",
            letterSpacing: "6px",
            textTransform: "uppercase",
            fontFamily: "system-ui, sans-serif",
            fontWeight: 600,
            display: "block",
            marginBottom: "16px",
          }}
        >
          ANTE LAS MIRADAS DE
        </span>

        <h2
          style={{
            transform: `scale(${Math.max(0, titleSpring)})`,
            fontSize: "76px",
            fontWeight: 900,
            color: "#FFFFFF",
            letterSpacing: "-2px",
            lineHeight: 1.1,
            margin: 0,
            fontFamily: "system-ui, -apple-system, sans-serif",
            textTransform: "uppercase",
          }}
        >
          Los Mejores Futbolistas
          <br />
          <span
            style={{
              background:
                "linear-gradient(135deg, #F5DE88 0%, #D4AF37 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Del Planeta
          </span>
        </h2>

        {/* Badges de jerarquía */}
        <div
          style={{
            transform: `scale(${Math.max(0, badgesSpring)})`,
            opacity: badgesSpring,
            display: "flex",
            gap: "20px",
            justifyContent: "center",
            marginTop: "30px",
          }}
        >
          <div
            style={{
              border: "1px solid rgba(212, 175, 55, 0.3)",
              backgroundColor: "rgba(212, 175, 55, 0.08)",
              padding: "8px 20px",
              borderRadius: "20px",
              color: "#E6CA65",
              fontSize: "15px",
              fontWeight: 700,
              letterSpacing: "3px",
              textTransform: "uppercase",
            }}
          >
            Presidentes de Clubes
          </div>
          <div
            style={{
              border: "1px solid rgba(255, 255, 255, 0.15)",
              backgroundColor: "rgba(255, 255, 255, 0.05)",
              padding: "8px 20px",
              borderRadius: "20px",
              color: "#E2E8F0",
              fontSize: "15px",
              fontWeight: 700,
              letterSpacing: "3px",
              textTransform: "uppercase",
            }}
          >
            Leyendas del Fútbol
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};

