import React from "react";
import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";

export const Shot8LaMentira: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Entradas escalonadas de las 3 frases
  const quote1Spring = spring({
    frame: frame - 10,
    fps,
    config: { damping: 14, mass: 0.7 },
  });

  const quote2Spring = spring({
    frame: frame - 55,
    fps,
    config: { damping: 14, mass: 0.7 },
  });

  const quote3Spring = spring({
    frame: frame - 100,
    fps,
    config: { damping: 14, mass: 0.7 },
  });

  // Stamp final: La ilusión
  const stampSpring = spring({
    frame: frame - 140,
    fps,
    config: { damping: 12, mass: 0.6 },
  });

  const opacity = interpolate(frame, [0, 15, 195, 210], [0, 1, 1, 0]);

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
          opacity,
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "0 40px",
        }}
      >
        <span
          style={{
            color: "#64748B",
            fontSize: "18px",
            letterSpacing: "6px",
            textTransform: "uppercase",
            marginBottom: "30px",
            fontFamily: "system-ui, sans-serif",
            fontWeight: 700,
          }}
        >
          EL CEREBRO PEREZOSO SIEMPRE PIENSA:
        </span>

        {/* Cita 1 */}
        {frame >= 10 && (
          <div
            style={{
              transform: `scale(${Math.max(0, quote1Spring)})`,
              fontSize: "48px",
              fontWeight: 800,
              color: "#E2E8F0",
              fontStyle: "italic",
              fontFamily: "Georgia, serif",
              marginBottom: "12px",
            }}
          >
            "Qué afortunado..."
          </div>
        )}

        {/* Cita 2 */}
        {frame >= 55 && (
          <div
            style={{
              transform: `scale(${Math.max(0, quote2Spring)})`,
              fontSize: "54px",
              fontWeight: 800,
              color: "#F5DE88",
              fontStyle: "italic",
              fontFamily: "Georgia, serif",
              marginBottom: "12px",
            }}
          >
            "Qué talento natural..."
          </div>
        )}

        {/* Cita 3 */}
        {frame >= 100 && (
          <div
            style={{
              transform: `scale(${Math.max(0, quote3Spring)})`,
              fontSize: "62px",
              fontWeight: 900,
              color: "#FFFFFF",
              fontStyle: "italic",
              fontFamily: "Georgia, serif",
              marginBottom: "35px",
            }}
          >
            "Nació para triunfar."
          </div>
        )}

        {/* Stamp de advertencia */}
        {frame >= 140 && (
          <div
            style={{
              transform: `scale(${Math.max(0, stampSpring)}) rotate(-2deg)`,
              backgroundColor: "rgba(239, 68, 68, 0.15)",
              border: "2px solid #EF4444",
              padding: "12px 30px",
              borderRadius: "12px",
              color: "#EF4444",
              fontSize: "22px",
              fontWeight: 900,
              letterSpacing: "4px",
              textTransform: "uppercase",
              fontFamily: "system-ui, sans-serif",
              boxShadow: "0 10px 30px rgba(239, 68, 68, 0.2)",
            }}
          >
            ✖ LA GRAN MENTIRA DEL DOLOR AJENO
          </div>
        )}
      </div>
    </AbsoluteFill>
  );
};

