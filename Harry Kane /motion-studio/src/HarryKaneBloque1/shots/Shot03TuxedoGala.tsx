import React from "react";
import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { Cinematic4KBackground } from "../Cinematic4KBackground";

export const Shot03TuxedoGala: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps, durationInFrames } = useVideoConfig();

  // Continuous camera drift
  const panScale = interpolate(frame, [0, durationInFrames], [1, 1.09]);
  const panY = interpolate(frame, [0, durationInFrames], [0, -35]);

  // Elements synchronized to exact words:
  // "los mejores futbolistas del planeta" (frame 20 to 90)
  const mainTitleSpring = spring({
    frame: frame - 10,
    fps,
    config: { damping: 13, mass: 0.8 },
  });

  // "de presidentes de clubes" (frame 95)
  const badgeClubs = spring({
    frame: frame - 95,
    fps,
    config: { damping: 14, mass: 0.7 },
  });

  // "de cámaras" (frame 140)
  const badgeCameras = spring({
    frame: frame - 140,
    fps,
    config: { damping: 14, mass: 0.7 },
  });

  const opacity = interpolate(frame, [0, 8, Math.max(10, durationInFrames - 8), durationInFrames], [0, 1, 1, 0]);

  return (
    <AbsoluteFill style={{ width: 3840, height: 2160, overflow: "hidden" }}>
      <Cinematic4KBackground theme="gold" />

      <div
        style={{
          position: "absolute",
          inset: 0,
          transform: `scale(${panScale}) translateY(${panY}px)`,
          opacity,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "0 100px",
        }}
      >
        {/* Título Principal */}
        <div
          style={{
            transform: `scale(${Math.max(0, mainTitleSpring)})`,
            marginBottom: "50px",
          }}
        >
          <span
            style={{
              color: "#94A3B8",
              fontSize: "36px",
              letterSpacing: "14px",
              textTransform: "uppercase",
              fontWeight: 800,
              fontFamily: "system-ui, sans-serif",
              display: "block",
              marginBottom: "20px",
            }}
          >
            ANTE LAS MIRADAS DE
          </span>
          <h1
            style={{
              fontSize: "140px",
              fontWeight: 900,
              color: "#FFFFFF",
              letterSpacing: "-2px",
              lineHeight: 1.1,
              margin: 0,
              fontFamily: "system-ui, -apple-system, sans-serif",
              textTransform: "uppercase",
            }}
          >
            Los Mejores Futbolistas
            <br />
            <span
              style={{
                background: "linear-gradient(135deg, #FFFFFF 0%, #F5DE88 40%, #E5B842 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Del Planeta
            </span>
          </h1>
        </div>

        {/* Badges secuenciales que se disparan con la voz */}
        <div
          style={{
            display: "flex",
            gap: "35px",
            justifyContent: "center",
            marginTop: "20px",
          }}
        >
          {frame >= 90 && (
            <div
              style={{
                transform: `scale(${Math.max(0, badgeClubs)})`,
                border: "2px solid rgba(229, 184, 66, 0.4)",
                backgroundColor: "rgba(229, 184, 66, 0.12)",
                padding: "20px 50px",
                borderRadius: "50px",
                boxShadow: "0 10px 40px rgba(0,0,0,0.8)",
              }}
            >
              <span
                style={{
                  color: "#F5DE88",
                  fontSize: "32px",
                  fontWeight: 800,
                  letterSpacing: "6px",
                  textTransform: "uppercase",
                  fontFamily: "system-ui, sans-serif",
                }}
              >
                ✦ Presidentes de Clubes ✦
              </span>
            </div>
          )}

          {frame >= 135 && (
            <div
              style={{
                transform: `scale(${Math.max(0, badgeCameras)})`,
                border: "2px solid rgba(255, 255, 255, 0.2)",
                backgroundColor: "rgba(255, 255, 255, 0.08)",
                padding: "20px 50px",
                borderRadius: "50px",
                boxShadow: "0 10px 40px rgba(0,0,0,0.8)",
              }}
            >
              <span
                style={{
                  color: "#FFFFFF",
                  fontSize: "32px",
                  fontWeight: 800,
                  letterSpacing: "6px",
                  textTransform: "uppercase",
                  fontFamily: "system-ui, sans-serif",
                }}
              >
                📹 Cámaras Internacionales
              </span>
            </div>
          )}
        </div>
      </div>
    </AbsoluteFill>
  );
};
