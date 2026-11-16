import React from "react";
import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { Cinematic4KBackground } from "../Cinematic4KBackground";

export const Shot13MirrorBody: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps, durationInFrames } = useVideoConfig();

  const cardSpring = spring({
    frame,
    fps,
    config: { damping: 14, mass: 0.8 },
  });

  const cameraScale = interpolate(frame, [0, durationInFrames], [0.96, 1.05]);
  const opacity = interpolate(frame, [0, 8, Math.max(10, durationInFrames - 8), durationInFrames], [0, 1, 1, 0]);

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
          transform: `scale(${cameraScale})`,
          opacity,
          textAlign: "center",
          padding: "0 100px",
        }}
      >
        <span
          style={{
            color: "#38BDF8",
            fontSize: "36px",
            letterSpacing: "12px",
            textTransform: "uppercase",
            fontWeight: 800,
            marginBottom: "40px",
            fontFamily: "system-ui, sans-serif",
          }}
        >
          EL PRIMER ESPEJO DE TU VIDA
        </span>

        {/* Tarjeta Central 4K */}
        <div
          style={{
            transform: `scale(${Math.max(0, cardSpring)})`,
            backgroundColor: "rgba(15, 23, 42, 0.85)",
            border: "3px solid rgba(56, 189, 248, 0.4)",
            borderRadius: "40px",
            padding: "70px 100px",
            maxWidth: "1800px",
            boxShadow: "0 40px 100px rgba(0,0,0,0.9)",
          }}
        >
          <div style={{ fontSize: "120px", marginBottom: "30px" }}>⚖️🪞</div>
          <h2
            style={{
              color: "#FFFFFF",
              fontSize: "76px",
              fontWeight: 900,
              letterSpacing: "-2px",
              margin: 0,
              fontFamily: "system-ui, sans-serif",
            }}
          >
            TU CUERPO Y TU SALUD
          </h2>
          <p
            style={{
              color: "#CBD5E1",
              fontSize: "42px",
              fontStyle: "italic",
              fontFamily: "Georgia, serif",
              marginTop: "24px",
              lineHeight: 1.4,
              margin: "24px 0 0 0",
            }}
          >
            "A lo mejor hoy te sobran 20 kilos y te da vergüenza mirarte al espejo en las mañanas..."
          </p>
        </div>
      </div>
    </AbsoluteFill>
  );
};
