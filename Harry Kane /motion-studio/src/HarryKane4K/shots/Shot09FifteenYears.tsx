import React from "react";
import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { Cinematic4KBackground } from "../Cinematic4KBackground";

export const Shot09FifteenYears: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Number rolls and hits 15 right at frame 99 ("15 años")
  const count = Math.min(
    15,
    Math.floor(
      interpolate(frame, [30, 99], [0, 15], {
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

  const punch = spring({
    frame: frame - 99,
    fps,
    config: { damping: 10, mass: 0.5 },
  });

  const cameraScale = interpolate(frame, [0, 279], [1, 1.09]);
  const opacity = interpolate(frame, [0, 12, 260, 279], [0, 1, 1, 0]);

  return (
    <AbsoluteFill style={{ width: 3840, height: 2160 }}>
      <Cinematic4KBackground theme="crimson" intensity={1.3} />
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
            transform: `scale(${Math.max(0, entrance)})`,
            backgroundColor: "rgba(239, 68, 68, 0.15)",
            border: "3px solid rgba(239, 68, 68, 0.6)",
            padding: "16px 50px",
            borderRadius: "60px",
            marginBottom: "30px",
          }}
        >
          <span
            style={{
              color: "#EF4444",
              fontSize: "36px",
              fontWeight: 900,
              letterSpacing: "10px",
              textTransform: "uppercase",
              fontFamily: "system-ui, sans-serif",
            }}
          >
            LO QUE EL MUNDO PREFIERE OLVIDAR
          </span>
        </div>

        {/* Cifra Monstruosa */}
        <div
          style={{
            fontSize: "340px",
            fontWeight: 900,
            lineHeight: 1,
            color: "#FFFFFF",
            fontFamily: "system-ui, -apple-system, sans-serif",
            letterSpacing: "-8px",
            transform: `scale(${frame >= 99 ? 1 + punch * 0.05 : 1})`,
          }}
        >
          {count} <span style={{ color: "#EF4444" }}>AÑOS</span>
        </div>

        <p
          style={{
            color: "#CBD5E1",
            fontSize: "48px",
            letterSpacing: "8px",
            marginTop: "30px",
            textTransform: "uppercase",
            fontFamily: "system-ui, sans-serif",
          }}
        >
          Siendo el hazmerreír de las redes sociales en todo el planeta
        </p>
      </div>
    </AbsoluteFill>
  );
};
