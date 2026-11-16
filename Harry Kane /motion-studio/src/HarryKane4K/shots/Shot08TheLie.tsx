import React from "react";
import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { Cinematic4KBackground } from "../Cinematic4KBackground";

export const Shot08TheLie: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // "y el cerebro humano..."
  const headerOpacity = interpolate(frame, [0, 20], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // "Qué afortunado..." (frame 150)
  const quote1 = spring({ frame: frame - 150, fps, config: { damping: 13 } });

  // "Qué talento natural..." (frame 210)
  const quote2 = spring({ frame: frame - 210, fps, config: { damping: 13 } });

  // "Nació para triunfar." (frame 260)
  const quote3 = spring({ frame: frame - 260, fps, config: { damping: 13 } });

  // Stamp slams down at frame 275 with camera shake
  const stamp = spring({ frame: frame - 275, fps, config: { damping: 9, mass: 0.5 } });
  const shakeX = frame >= 275 && frame <= 295 ? Math.sin(frame * 2) * 12 : 0;
  const shakeY = frame >= 275 && frame <= 295 ? Math.cos(frame * 2) * 8 : 0;

  const opacity = interpolate(frame, [0, 15, 310, 330], [0, 1, 1, 0]);

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
          transform: `translate(${shakeX}px, ${shakeY}px)`,
          opacity,
          textAlign: "center",
          padding: "0 100px",
        }}
      >
        <div style={{ opacity: headerOpacity, marginBottom: "50px" }}>
          <span
            style={{
              color: "#64748B",
              fontSize: "36px",
              letterSpacing: "12px",
              textTransform: "uppercase",
              fontWeight: 800,
              fontFamily: "system-ui, sans-serif",
            }}
          >
            Y EL CEREBRO HUMANO, PEREZOSO PARA ENTENDER EL DOLOR AJENO, PIENSA:
          </span>
        </div>

        {frame >= 145 && (
          <div
            style={{
              transform: `scale(${Math.max(0, quote1)})`,
              fontSize: "90px",
              fontWeight: 800,
              color: "#E2E8F0",
              fontStyle: "italic",
              fontFamily: "Georgia, serif",
              marginBottom: "20px",
            }}
          >
            "Qué afortunado..."
          </div>
        )}

        {frame >= 205 && (
          <div
            style={{
              transform: `scale(${Math.max(0, quote2)})`,
              fontSize: "105px",
              fontWeight: 800,
              color: "#E5B842",
              fontStyle: "italic",
              fontFamily: "Georgia, serif",
              marginBottom: "20px",
            }}
          >
            "Qué talento natural..."
          </div>
        )}

        {frame >= 255 && (
          <div
            style={{
              transform: `scale(${Math.max(0, quote3)})`,
              fontSize: "125px",
              fontWeight: 900,
              color: "#FFFFFF",
              fontStyle: "italic",
              fontFamily: "Georgia, serif",
              marginBottom: "50px",
            }}
          >
            "Nació para triunfar."
          </div>
        )}

        {frame >= 275 && (
          <div
            style={{
              transform: `scale(${Math.max(0, stamp)}) rotate(-2deg)`,
              backgroundColor: "rgba(239, 68, 68, 0.16)",
              border: "4px solid #EF4444",
              padding: "24px 60px",
              borderRadius: "24px",
              color: "#EF4444",
              fontSize: "44px",
              fontWeight: 900,
              letterSpacing: "8px",
              textTransform: "uppercase",
              fontFamily: "system-ui, sans-serif",
              boxShadow: "0 20px 60px rgba(239, 68, 68, 0.35)",
            }}
          >
            ✖ LA GRAN MENTIRA DEL ÉXITO AJENO
          </div>
        )}
      </div>
    </AbsoluteFill>
  );
};
