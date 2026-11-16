import React from "react";
import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";

export const Shot4Paises: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const counter = Math.min(
    150,
    Math.floor(
      interpolate(frame, [0, 45], [0, 150], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
      })
    )
  );

  const springIn = spring({
    frame,
    fps,
    config: { damping: 12, mass: 0.6 },
  });

  const livePulse = interpolate(
    Math.sin(frame / 6),
    [-1, 1],
    [0.4, 1]
  );

  const opacity = interpolate(frame, [0, 15, 135, 150], [0, 1, 1, 0]);

  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#050508",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          transform: `scale(${Math.max(0, springIn)})`,
          opacity,
          textAlign: "center",
        }}
      >
        {/* Indicador Live */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "10px",
            backgroundColor: "rgba(239, 68, 68, 0.15)",
            border: "1px solid rgba(239, 68, 68, 0.4)",
            padding: "8px 24px",
            borderRadius: "30px",
            marginBottom: "20px",
          }}
        >
          <div
            style={{
              width: "12px",
              height: "12px",
              borderRadius: "50%",
              backgroundColor: "#EF4444",
              opacity: livePulse,
              boxShadow: "0 0 12px #EF4444",
            }}
          />
          <span
            style={{
              color: "#EF4444",
              fontSize: "16px",
              fontWeight: 800,
              letterSpacing: "4px",
              textTransform: "uppercase",
              fontFamily: "system-ui, sans-serif",
            }}
          >
            TRANSMISIÓN GLOBAL EN DIRECTO
          </span>
        </div>

        {/* Cifra Monumental */}
        <div
          style={{
            fontSize: "130px",
            fontWeight: 900,
            lineHeight: 1,
            color: "#FFFFFF",
            fontFamily: "system-ui, -apple-system, sans-serif",
            letterSpacing: "-4px",
          }}
        >
          +{counter}{" "}
          <span
            style={{
              background:
                "linear-gradient(135deg, #38BDF8 0%, #818CF8 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            PAÍSES
          </span>
        </div>

        <p
          style={{
            color: "#94A3B8",
            fontSize: "24px",
            letterSpacing: "4px",
            marginTop: "16px",
            textTransform: "uppercase",
            fontFamily: "system-ui, sans-serif",
          }}
        >
          Millones de miradas fijas en un solo hombre
        </p>
      </div>
    </AbsoluteFill>
  );
};

