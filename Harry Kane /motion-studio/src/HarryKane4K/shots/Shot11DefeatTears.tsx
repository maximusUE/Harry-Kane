import React from "react";
import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { Cinematic4KBackground } from "../Cinematic4KBackground";

export const Shot11DefeatTears: React.FC = () => {
  const frame = useCurrentFrame();

  // ZOOM DE ÉNFASIS: Acercamiento dramático continuo
  const emphasisZoom = interpolate(frame, [0, 405], [1, 1.25], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const line1Opacity = interpolate(frame, [10, 35], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const line2Opacity = interpolate(frame, [165, 195], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const line3Opacity = interpolate(frame, [285, 315], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const opacity = interpolate(frame, [0, 15, 385, 405], [0, 1, 1, 0]);

  return (
    <AbsoluteFill style={{ width: 3840, height: 2160, overflow: "hidden" }}>
      <Cinematic4KBackground theme="crimson" intensity={1.1} />
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
          padding: "0 100px",
        }}
      >
        <div
          style={{
            width: "1600px",
            backgroundColor: "rgba(18, 18, 24, 0.8)",
            border: "3px solid rgba(239, 68, 68, 0.4)",
            borderRadius: "40px",
            boxShadow: "0 50px 120px rgba(0, 0, 0, 0.95)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "80px 100px",
          }}
        >
          <div style={{ fontSize: "150px", marginBottom: "30px" }}>🌧️💔</div>
          <h2
            style={{
              opacity: line1Opacity,
              color: "#FFFFFF",
              fontSize: "68px",
              fontWeight: 900,
              letterSpacing: "-1px",
              margin: 0,
              fontFamily: "system-ui, -apple-system, sans-serif",
            }}
          >
            SOLO EN EL TÚNEL DE LOS ESTADIOS
          </h2>

          {frame >= 165 && (
            <p
              style={{
                opacity: line2Opacity,
                color: "#CBD5E1",
                fontSize: "40px",
                fontStyle: "italic",
                fontFamily: "Georgia, serif",
                marginTop: "30px",
                lineHeight: 1.4,
                margin: "30px 0 0 0",
              }}
            >
              "Quince años viendo cómo otros levantaban copas en su cara... mientras él caminaba solo..."
            </p>
          )}

          {frame >= 285 && (
            <p
              style={{
                opacity: line3Opacity,
                color: "#EF4444",
                fontSize: "44px",
                fontWeight: 800,
                letterSpacing: "4px",
                textTransform: "uppercase",
                fontFamily: "system-ui, sans-serif",
                marginTop: "30px",
                margin: "30px 0 0 0",
              }}
            >
              Con los ojos llenos de lágrimas y el corazón destrozado.
            </p>
          )}
        </div>
      </div>
    </AbsoluteFill>
  );
};
