import React from "react";
import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { Cinematic4KBackground } from "../Cinematic4KBackground";

export const Shot06BallonDor: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Instant snap zoom
  const emphasisZoom = interpolate(frame, [0, 20, 63], [0.85, 1.08, 1.15], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const flashOpacity = interpolate(frame, [0, 4, 15], [0.95, 0.4, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const shockwaveScale = interpolate(frame, [0, 35], [0.5, 3.5]);
  const shockwaveOpacity = interpolate(frame, [0, 8, 35], [0.8, 0.5, 0]);

  const titleSpring = spring({
    frame: frame - 2,
    fps,
    config: { damping: 11, mass: 0.5 },
  });

  const opacity = interpolate(frame, [0, 6, 55, 63], [0, 1, 1, 0]);

  return (
    <AbsoluteFill style={{ width: 3840, height: 2160, overflow: "hidden" }}>
      <Cinematic4KBackground theme="gold" intensity={1.6} />

      {/* Onda expansiva de oro puro */}
      <div
        style={{
          position: "absolute",
          top: "45%",
          left: "50%",
          transform: `translate(-50%, -50%) scale(${shockwaveScale})`,
          width: "800px",
          height: "800px",
          borderRadius: "50%",
          border: "8px solid #E5B842",
          opacity: shockwaveOpacity,
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
          transform: `scale(${emphasisZoom})`,
          opacity,
          textAlign: "center",
        }}
      >
        {/* Trofeo Monumental */}
        <div
          style={{
            width: "300px",
            height: "300px",
            borderRadius: "50%",
            backgroundColor: "rgba(229, 184, 66, 0.16)",
            border: "5px solid rgba(229, 184, 66, 0.8)",
            boxShadow: "0 0 140px rgba(229, 184, 66, 0.6)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "40px",
          }}
        >
          <span style={{ fontSize: "160px" }}>🏆</span>
        </div>

        {/* Título en Oro Puro 4K */}
        <h1
          style={{
            transform: `scale(${Math.max(0, titleSpring)})`,
            fontSize: "220px",
            fontWeight: 900,
            letterSpacing: "-4px",
            margin: 0,
            textTransform: "uppercase",
            fontFamily: "system-ui, -apple-system, sans-serif",
            background:
              "linear-gradient(135deg, #FFFFFF 0%, #F5DE88 35%, #E5B842 70%, #997A15 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            filter: "drop-shadow(0 30px 80px rgba(229, 184, 66, 0.5))",
          }}
        >
          El Balón de Oro
        </h1>

        <p
          style={{
            color: "#E2E8F0",
            fontSize: "44px",
            fontWeight: 800,
            letterSpacing: "18px",
            marginTop: "25px",
            textTransform: "uppercase",
            fontFamily: "system-ui, sans-serif",
          }}
        >
          La Gloria Máxima del Planeta
        </p>
      </div>

      {/* Flash inicial de entrada */}
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
