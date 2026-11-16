import React from "react";
import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";

export const Shot2Date: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const entrance = spring({
    frame,
    fps,
    config: { damping: 14, mass: 0.7 },
  });

  const cameraScale = interpolate(frame, [0, 90], [0.95, 1.05]);
  const opacity = interpolate(frame, [0, 15, 75, 90], [0, 1, 1, 0]);

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
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {/* Etiqueta superior */}
        <div
          style={{
            transform: `translateY(${interpolate(entrance, [0, 1], [20, 0])}px)`,
            color: "#D4AF37",
            fontSize: "18px",
            fontWeight: 700,
            letterSpacing: "6px",
            textTransform: "uppercase",
            marginBottom: "16px",
            fontFamily: "system-ui, sans-serif",
          }}
        >
          GALA INTERNACIONAL
        </div>

        {/* Fecha monumental */}
        <div
          style={{
            transform: `scale(${entrance})`,
            fontSize: "68px",
            fontWeight: 900,
            color: "#FFFFFF",
            letterSpacing: "-1px",
            fontFamily: "system-ui, -apple-system, sans-serif",
            textTransform: "uppercase",
            textShadow: "0 10px 30px rgba(0, 0, 0, 0.8)",
          }}
        >
          26 DE OCTUBRE, 2026
        </div>

        {/* Lugar */}
        <div
          style={{
            marginTop: "16px",
            backgroundColor: "rgba(255, 255, 255, 0.05)",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            padding: "8px 24px",
            borderRadius: "30px",
            color: "#94A3B8",
            fontSize: "18px",
            letterSpacing: "4px",
            textTransform: "uppercase",
            fontFamily: "system-ui, sans-serif",
          }}
        >
          Théâtre du Châtelet • París
        </div>
      </div>
    </AbsoluteFill>
  );
};

