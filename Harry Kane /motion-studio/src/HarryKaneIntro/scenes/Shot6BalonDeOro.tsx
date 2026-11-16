import React from "react";
import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";

export const Shot6BalonDeOro: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Flash blanco inicial de entrada (0 a 10 frames)
  const flashOpacity = interpolate(frame, [0, 6, 18], [0.8, 0.4, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const emblemSpring = spring({
    frame: frame - 5,
    fps,
    config: { damping: 11, mass: 0.6 },
  });

  const titleSpring = spring({
    frame: frame - 15,
    fps,
    config: { damping: 13, mass: 0.8 },
  });

  const cameraScale = interpolate(frame, [0, 180], [0.95, 1.08]);
  const opacity = interpolate(frame, [0, 10, 165, 180], [0, 1, 1, 0]);

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
      {/* Luz Dorada Expansiva */}
      <div
        style={{
          position: "absolute",
          width: "800px",
          height: "800px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(212, 175, 55, 0.28) 0%, transparent 65%)",
          filter: "blur(60px)",
        }}
      />

      <div
        style={{
          transform: `scale(${cameraScale})`,
          opacity,
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {/* Emblema del Trofeo con Brillo */}
        <div
          style={{
            transform: `scale(${Math.max(0, emblemSpring)})`,
            width: "140px",
            height: "140px",
            borderRadius: "50%",
            backgroundColor: "rgba(212, 175, 55, 0.12)",
            border: "2px solid rgba(212, 175, 55, 0.5)",
            boxShadow: "0 0 60px rgba(212, 175, 55, 0.4)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "30px",
          }}
        >
          <span style={{ fontSize: "65px" }}>🏆</span>
        </div>

        {/* Título Monumental */}
        <h1
          style={{
            transform: `scale(${Math.max(0, titleSpring)})`,
            fontSize: "105px",
            fontWeight: 900,
            letterSpacing: "-2px",
            margin: 0,
            textTransform: "uppercase",
            fontFamily: "system-ui, -apple-system, sans-serif",
            background:
              "linear-gradient(135deg, #FFFFFF 0%, #F5DE88 35%, #D4AF37 70%, #8A6812 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            filter: "drop-shadow(0 15px 40px rgba(212, 175, 55, 0.35))",
          }}
        >
          El Balón de Oro
        </h1>

        <p
          style={{
            color: "#E2E8F0",
            fontSize: "24px",
            fontWeight: 600,
            letterSpacing: "10px",
            marginTop: "16px",
            textTransform: "uppercase",
            fontFamily: "system-ui, sans-serif",
          }}
        >
          La Gloria Máxima del Planeta
        </p>
      </div>

      {/* Flash inicial */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor: "#FFFFFF",
          opacity: flashOpacity,
          pointerEvents: "none",
        }}
      />
    </AbsoluteFill>
  );
};

