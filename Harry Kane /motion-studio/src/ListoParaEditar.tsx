import React from "react";
import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";

export const ListoParaEditar: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps, durationInFrames } = useVideoConfig();

  // Animación suave de entrada elástica
  const textScale = spring({
    frame,
    fps,
    config: { damping: 12, mass: 0.6 },
  });

  // Halo de luz verde neón / listo para acción
  const glowPulse = interpolate(
    Math.sin(frame / 8),
    [-1, 1],
    [0.7, 1.2]
  );

  // Fade out suave en el último segundo
  const opacity = interpolate(
    frame,
    [0, 15, durationInFrames - 15, durationInFrames],
    [0, 1, 1, 0]
  );

  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#07090E",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        opacity,
      }}
    >
      {/* Luz radial de fondo */}
      <div
        style={{
          position: "absolute",
          width: "700px",
          height: "700px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(16, 185, 129, 0.25) 0%, transparent 65%)",
          filter: "blur(60px)",
          transform: `scale(${glowPulse})`,
        }}
      />

      <div
        style={{
          transform: `scale(${Math.max(0, textScale)})`,
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {/* Badge de confirmación */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            backgroundColor: "rgba(16, 185, 129, 0.12)",
            border: "1px solid rgba(16, 185, 129, 0.4)",
            padding: "8px 24px",
            borderRadius: "50px",
            marginBottom: "25px",
          }}
        >
          <div
            style={{
              width: "10px",
              height: "10px",
              borderRadius: "50%",
              backgroundColor: "#10B981",
              boxShadow: "0 0 10px #10B981",
            }}
          />
          <span
            style={{
              color: "#34D399",
              fontSize: "16px",
              fontWeight: 800,
              letterSpacing: "4px",
              textTransform: "uppercase",
              fontFamily: "system-ui, sans-serif",
            }}
          >
            SISTEMA CONFIGURADO CON ÉXITO
          </span>
        </div>

        {/* Texto animado protagonista */}
        <h1
          style={{
            fontSize: "110px",
            fontWeight: 900,
            letterSpacing: "-2px",
            margin: 0,
            fontFamily: "system-ui, -apple-system, sans-serif",
            background:
              "linear-gradient(135deg, #FFFFFF 0%, #A7F3D0 40%, #10B981 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            filter: "drop-shadow(0 20px 40px rgba(16, 185, 129, 0.35))",
          }}
        >
          Listo para editar
        </h1>

        <p
          style={{
            color: "#94A3B8",
            fontSize: "24px",
            letterSpacing: "6px",
            marginTop: "20px",
            textTransform: "uppercase",
            fontFamily: "system-ui, sans-serif",
          }}
        >
          Antigravity • Motor de Video & Transcripción
        </p>
      </div>
    </AbsoluteFill>
  );
};

