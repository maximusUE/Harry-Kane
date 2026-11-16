import React from "react";
import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { Cinematic4KBackground } from "../Cinematic4KBackground";

export const Shot05StreetKid: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps, durationInFrames } = useVideoConfig();

  // "un hombre de 33 años" (frame 10)
  const badgeSpring = spring({
    frame: frame - 10,
    fps,
    config: { damping: 13, mass: 0.7 },
  });

  // "el trofeo con el que sueña cada niño" (frame 70)
  const line1Opacity = interpolate(frame, [60, 85], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // "que alguna vez pateó una botella en la calle" (frame 140)
  const line2Opacity = interpolate(frame, [170, 195], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const cameraPan = interpolate(frame, [0, durationInFrames], [0.96, 1.06]);
  const opacity = interpolate(frame, [0, 8, Math.max(10, durationInFrames - 8), durationInFrames], [0, 1, 1, 0]);

  return (
    <AbsoluteFill style={{ width: 3840, height: 2160 }}>
      <Cinematic4KBackground theme="noir" />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
          transform: `scale(${cameraPan})`,
          opacity,
          textAlign: "center",
          maxWidth: "2800px",
          margin: "0 auto",
          padding: "0 80px",
        }}
      >
        <div
          style={{
            transform: `scale(${Math.max(0, badgeSpring)})`,
            opacity: badgeSpring,
            border: "2px solid rgba(229, 184, 66, 0.4)",
            backgroundColor: "rgba(229, 184, 66, 0.1)",
            padding: "16px 50px",
            borderRadius: "60px",
            marginBottom: "50px",
          }}
        >
          <span
            style={{
              color: "#F5DE88",
              fontSize: "36px",
              fontWeight: 800,
              letterSpacing: "8px",
              textTransform: "uppercase",
              fontFamily: "system-ui, sans-serif",
            }}
          >
            33 AÑOS DE EDAD • LONDRES A PARÍS
          </span>
        </div>

        <h2
          style={{
            opacity: line1Opacity,
            fontSize: "115px",
            fontWeight: 800,
            lineHeight: 1.25,
            color: "#F8FAFC",
            fontFamily: "Georgia, serif",
            fontStyle: "italic",
            margin: 0,
          }}
        >
          "El trofeo con el que sueña cada niño..."
        </h2>

        {frame >= 135 && (
          <h2
            style={{
              opacity: line2Opacity,
              fontSize: "105px",
              fontWeight: 800,
              lineHeight: 1.25,
              color: "#E5B842",
              fontFamily: "Georgia, serif",
              fontStyle: "italic",
              marginTop: "25px",
            }}
          >
            "...que alguna vez pateó una botella en la calle."
          </h2>
        )}

        <div
          style={{
            width: "180px",
            height: "4px",
            background:
              "linear-gradient(90deg, transparent, #E5B842, transparent)",
            marginTop: "60px",
          }}
        />
      </div>
    </AbsoluteFill>
  );
};
