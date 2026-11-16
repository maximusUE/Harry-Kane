import React from "react";
import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";

export const Shot1Paris: React.FC = () => {
  const frame = useCurrentFrame();

  // Cámara: Zoom lento continuo hacia adelante (Ken Burns)
  const cameraScale = interpolate(frame, [0, 90], [1, 1.08]);

  // Tipografía: Expansión de espaciado cinematográfico
  const letterSpacing = interpolate(frame, [0, 80], [14, 28]);
  const opacity = interpolate(frame, [0, 20, 75, 90], [0, 1, 1, 0]);

  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#050507",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
      }}
    >
      {/* Luz tenue de fondo */}
      <div
        style={{
          position: "absolute",
          width: "600px",
          height: "600px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(212, 175, 55, 0.12) 0%, transparent 70%)",
          filter: "blur(50px)",
        }}
      />

      {/* Título: Solo una palabra con máxima elegancia */}
      <div
        style={{
          transform: `scale(${cameraScale})`,
          opacity,
          textAlign: "center",
        }}
      >
        <span
          style={{
            fontSize: "120px",
            fontWeight: 900,
            color: "#F8FAFC",
            letterSpacing: `${letterSpacing}px`,
            textTransform: "uppercase",
            fontFamily: "system-ui, -apple-system, sans-serif",
            textShadow: "0 0 50px rgba(255, 255, 255, 0.2)",
          }}
        >
          PARÍS
        </span>
        <div
          style={{
            width: "60px",
            height: "2px",
            backgroundColor: "#D4AF37",
            margin: "20px auto 0",
            opacity: 0.8,
          }}
        />
      </div>
    </AbsoluteFill>
  );
};

