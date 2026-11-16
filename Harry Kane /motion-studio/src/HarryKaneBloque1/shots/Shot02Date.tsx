import React from "react";
import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { Cinematic4KBackground } from "../Cinematic4KBackground";

export const Shot02Date: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps, durationInFrames } = useVideoConfig();

  const entranceBadge = spring({
    frame,
    fps,
    config: { damping: 14, mass: 0.7 },
  });

  const entranceDate = spring({
    frame: frame - 10,
    fps,
    config: { damping: 12, mass: 0.6 },
  });

  const entrancePlace = spring({
    frame: frame - 25,
    fps,
    config: { damping: 15, mass: 0.8 },
  });

  const cameraScale = interpolate(frame, [0, durationInFrames], [0.97, 1.05]);
  const opacity = interpolate(frame, [0, 6, Math.max(8, durationInFrames - 6), durationInFrames], [0, 1, 1, 0]);

  return (
    <AbsoluteFill style={{ width: 3840, height: 2160 }}>
      <Cinematic4KBackground theme="gold" />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
          transform: `scale(${cameraScale})`,
          opacity,
          textAlign: "center",
        }}
      >
        <div
          style={{
            transform: `translateY(${interpolate(entranceBadge, [0, 1], [30, 0])}px)`,
            opacity: entranceBadge,
            color: "#E5B842",
            fontSize: "36px",
            fontWeight: 800,
            letterSpacing: "14px",
            textTransform: "uppercase",
            marginBottom: "30px",
            fontFamily: "system-ui, sans-serif",
          }}
        >
          GALA INTERNACIONAL DEL FÚTBOL
        </div>

        <h1
          style={{
            transform: `scale(${Math.max(0, entranceDate)})`,
            fontSize: "155px",
            fontWeight: 900,
            color: "#FFFFFF",
            letterSpacing: "-2px",
            textTransform: "uppercase",
            margin: 0,
            fontFamily: "system-ui, -apple-system, sans-serif",
            textShadow: "0 20px 60px rgba(0, 0, 0, 0.9)",
          }}
        >
          26 DE OCTUBRE, 2026
        </h1>

        <div
          style={{
            transform: `scale(${Math.max(0, entrancePlace)})`,
            opacity: entrancePlace,
            marginTop: "35px",
            backgroundColor: "rgba(255, 255, 255, 0.05)",
            border: "2px solid rgba(255, 255, 255, 0.12)",
            padding: "16px 48px",
            borderRadius: "60px",
            color: "#94A3B8",
            fontSize: "32px",
            letterSpacing: "8px",
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
