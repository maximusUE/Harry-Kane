import React from "react";
import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";

interface CinematicBackgroundProps {
  theme?: "gold" | "darkRed" | "deepBlue";
}

export const CinematicBackground: React.FC<CinematicBackgroundProps> = ({
  theme = "gold",
}) => {
  const frame = useCurrentFrame();

  const primaryGlow =
    theme === "gold"
      ? "rgba(212, 175, 55, 0.15)"
      : theme === "darkRed"
      ? "rgba(220, 38, 38, 0.12)"
      : "rgba(59, 130, 246, 0.12)";

  const pulse = interpolate(
    Math.sin(frame / 25),
    [-1, 1],
    [0.85, 1.15]
  );

  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#070709",
        overflow: "hidden",
      }}
    >
      {/* Luz ambiental central */}
      <div
        style={{
          position: "absolute",
          top: "35%",
          left: "50%",
          width: "900px",
          height: "900px",
          transform: `translate(-50%, -50%) scale(${pulse})`,
          background: `radial-gradient(circle, ${primaryGlow} 0%, rgba(7, 7, 9, 0) 70%)`,
          filter: "blur(60px)",
          pointerEvents: "none",
        }}
      />

      {/* Grid sutil de fondo cinematográfico */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
          opacity: 0.6,
        }}
      />

      {/* Viñeta cinematográfica en los bordes */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(circle at center, transparent 40%, rgba(0, 0, 0, 0.85) 100%)",
          pointerEvents: "none",
        }}
      />
    </AbsoluteFill>
  );
};

