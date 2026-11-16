import React from "react";
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { Cinematic4KBackground } from "../Cinematic4KBackground";

export const Shot01Paris: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Entrance spring
  const entrance = spring({
    frame,
    fps,
    config: { damping: 14, mass: 0.8 },
  });

  const cameraScale = interpolate(frame, [0, 60], [0.98, 1.08]);
  const letterSpacing = interpolate(frame, [0, 60], [22, 38]);
  const opacity = interpolate(frame, [0, 10, 52, 60], [0, 1, 1, 0]);

  return (
    <AbsoluteFill style={{ width: 3840, height: 2160 }}>
      <Cinematic4KBackground theme="gold" intensity={1.2} />
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
        <span
          style={{
            transform: `scale(${Math.max(0, entrance)})`,
            fontSize: "260px",
            fontWeight: 900,
            color: "#FFFFFF",
            letterSpacing: `${letterSpacing}px`,
            textTransform: "uppercase",
            fontFamily: "system-ui, -apple-system, sans-serif",
            textShadow: "0 0 100px rgba(229, 184, 66, 0.5)",
          }}
        >
          PARÍS
        </span>
        <div
          style={{
            width: `${interpolate(frame, [10, 45], [0, 160], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
            })}px`,
            height: "5px",
            backgroundColor: "#E5B842",
            marginTop: "30px",
            boxShadow: "0 0 25px #E5B842",
          }}
        />
      </div>
    </AbsoluteFill>
  );
};
