import React from "react";
import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";

export const Shot5Sueno: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const numberSpring = spring({
    frame,
    fps,
    config: { damping: 13, mass: 0.7 },
  });

  const quoteOpacity = interpolate(frame, [25, 45], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const cameraPan = interpolate(frame, [0, 150], [0.96, 1.04]);
  const opacity = interpolate(frame, [0, 15, 135, 150], [0, 1, 1, 0]);

  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#060608",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          transform: `scale(${cameraPan})`,
          opacity,
          textAlign: "center",
          maxWidth: "1100px",
          padding: "0 40px",
        }}
      >
        {/* Edad */}
        <div
          style={{
            transform: `scale(${Math.max(0, numberSpring)})`,
            display: "inline-block",
            border: "1px solid rgba(255, 255, 255, 0.15)",
            backgroundColor: "rgba(255, 255, 255, 0.05)",
            padding: "8px 24px",
            borderRadius: "40px",
            marginBottom: "25px",
          }}
        >
          <span
            style={{
              color: "#E2E8F0",
              fontSize: "18px",
              fontWeight: 700,
              letterSpacing: "4px",
              textTransform: "uppercase",
              fontFamily: "system-ui, sans-serif",
            }}
          >
            33 AÑOS DE EDAD
          </span>
        </div>

        {/* Frase poética */}
        <h2
          style={{
            opacity: quoteOpacity,
            fontSize: "58px",
            fontWeight: 800,
            lineHeight: 1.3,
            color: "#F8FAFC",
            fontFamily: "Georgia, serif",
            fontStyle: "italic",
            margin: 0,
          }}
        >
          "El trofeo con el que sueña cada niño que alguna vez pateó una botella en la calle."
        </h2>

        <div
          style={{
            width: "80px",
            height: "3px",
            background:
              "linear-gradient(90deg, transparent, #D4AF37, transparent)",
            margin: "35px auto 0",
          }}
        />
      </div>
    </AbsoluteFill>
  );
};

