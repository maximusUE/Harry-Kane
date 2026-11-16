import React from "react";
import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { Cinematic4KBackground } from "../Cinematic4KBackground";

export const Shot04Broadcast: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Numbers roll and lock right at frame 45 ("150 países")
  const count = Math.min(
    150,
    Math.floor(
      interpolate(frame, [5, 45], [0, 150], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
      })
    )
  );

  const entrance = spring({
    frame,
    fps,
    config: { damping: 12, mass: 0.6 },
  });

  const shockwave = spring({
    frame: frame - 45,
    fps,
    config: { damping: 10, mass: 0.5 },
  });

  const pulse = interpolate(Math.sin(frame / 5), [-1, 1], [0.3, 1]);
  const opacity = interpolate(frame, [0, 8, 72, 81], [0, 1, 1, 0]);

  return (
    <AbsoluteFill style={{ width: 3840, height: 2160 }}>
      <Cinematic4KBackground theme="deepNavy" />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
          transform: `scale(${Math.max(0, entrance)})`,
          opacity,
          textAlign: "center",
        }}
      >
        {/* Live Indicator */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "20px",
            backgroundColor: "rgba(239, 68, 68, 0.16)",
            border: "2px solid rgba(239, 68, 68, 0.5)",
            padding: "16px 48px",
            borderRadius: "60px",
            marginBottom: "40px",
          }}
        >
          <div
            style={{
              width: "22px",
              height: "22px",
              borderRadius: "50%",
              backgroundColor: "#EF4444",
              opacity: pulse,
              boxShadow: "0 0 25px #EF4444",
            }}
          />
          <span
            style={{
              color: "#EF4444",
              fontSize: "32px",
              fontWeight: 900,
              letterSpacing: "8px",
              textTransform: "uppercase",
              fontFamily: "system-ui, sans-serif",
            }}
          >
            TRANSMISIÓN GLOBAL EN DIRECTO
          </span>
        </div>

        {/* Cifra Monstruosa en 4K */}
        <div
          style={{
            fontSize: "280px",
            fontWeight: 900,
            lineHeight: 1,
            color: "#FFFFFF",
            letterSpacing: "-6px",
            fontFamily: "system-ui, -apple-system, sans-serif",
            transform: `scale(${frame >= 45 ? 1 + (shockwave * 0.04) : 1})`,
          }}
        >
          +{count}{" "}
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
            fontSize: "44px",
            letterSpacing: "8px",
            marginTop: "30px",
            textTransform: "uppercase",
            fontFamily: "system-ui, sans-serif",
          }}
        >
          Millones de miradas sintonizadas al mismo segundo
        </p>
      </div>
    </AbsoluteFill>
  );
};
