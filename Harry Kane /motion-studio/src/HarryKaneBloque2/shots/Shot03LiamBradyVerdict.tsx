import React from "react";
import {
  AbsoluteFill,
  interpolate,
  staticFile,
  useCurrentFrame,
  Video,
} from "remotion";
import { TypewriterText } from "../../components/TypewriterText";

export const Shot03LiamBradyVerdict: React.FC = () => {
  const frame = useCurrentFrame();

  // Duración total: 225 frames (7.5 segundos @ 30fps: Global 630 - 855 | Segundos 0:21.0 - 0:28.5)
  return (
    <AbsoluteFill style={{ width: 3840, height: 2160, overflow: "hidden", backgroundColor: "#06070B" }}>
      {/* 🎬 VIDEO CLIP 1: Niño Harry Kane cruzando las rejas de Hale End (Google Flow) */}
      <div style={{ position: "absolute", inset: 0, overflow: "hidden" }}>
        <Video
          src={staticFile("broll/boy_walking_through_gates_30fps.mp4")}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            filter: "contrast(1.18) brightness(0.82) saturate(0.92)",
            transform: `scale(${interpolate(frame, [0, 225], [1.0, 1.05], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
            })})`,
          }}
        />

        {/* Gradiente cinemático oscuro y viñeta atmosférica para tarde gris londinense */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(180deg, rgba(6,7,11,0.75) 0%, rgba(6,7,11,0.2) 50%, rgba(6,7,11,0.92) 100%)",
          }}
        />

        {/* Typewriter Top Header: "EL VEREDICTO DE LOS TÉCNICOS" */}
        <div
          style={{
            position: "absolute",
            top: 220,
            left: 160,
            display: "flex",
            flexDirection: "column",
            gap: 16,
            zIndex: 20,
          }}
        >
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 16,
              padding: "12px 32px",
              backgroundColor: "rgba(239, 68, 68, 0.2)",
              border: "1.5px solid rgba(239, 68, 68, 0.6)",
              borderRadius: 30,
              backdropFilter: "blur(12px)",
            }}
          >
            <div style={{ width: 10, height: 10, borderRadius: "50%", backgroundColor: "#EF4444" }} />
            <span
              style={{
                fontFamily: "Cabinet Grotesk, Montserrat, sans-serif",
                fontSize: 26,
                fontWeight: 900,
                letterSpacing: 6,
                color: "#FCA5A5",
                textTransform: "uppercase",
              }}
            >
              DESPACHOS DE HALE END · 2001
            </span>
          </div>
          <h2
            style={{
              fontFamily: "Cabinet Grotesk, Montserrat, sans-serif",
              fontSize: 84,
              fontWeight: 950,
              color: "#FFFFFF",
              margin: 0,
              letterSpacing: 4,
              textTransform: "uppercase",
              textShadow: "0 10px 40px rgba(0,0,0,0.95)",
            }}
          >
            <TypewriterText
              text="EL VEREDICTO DE LOS TÉCNICOS"
              startFrame={8}
              durationInFrames={38}
              currentFrame={frame}
              cursorColor="#EF4444"
            />
          </h2>
        </div>

        {/* Lower Third Dossier: LIAM BRADY / ARSENAL FC */}
        {frame >= 90 && (
          <div
            style={{
              position: "absolute",
              bottom: 180,
              left: 160,
              padding: "24px 44px",
              backgroundColor: "rgba(12, 15, 23, 0.88)",
              borderLeft: "8px solid #EF4444",
              borderRadius: "0 18px 18px 0",
              boxShadow: "0 20px 60px rgba(0,0,0,0.9)",
              backdropFilter: "blur(14px)",
              opacity: interpolate(frame, [90, 110], [0, 1], {
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
              }),
              transform: `translateY(${interpolate(frame, [90, 110], [20, 0], {
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
              })}px)`,
              zIndex: 25,
            }}
          >
            <div
              style={{
                fontSize: 26,
                color: "#EF4444",
                fontWeight: 900,
                letterSpacing: 4,
                textTransform: "uppercase",
                fontFamily: "Cabinet Grotesk, Montserrat, sans-serif",
              }}
            >
              DIRECCIÓN DEPORTIVA DE CANTERA
            </div>
            <div
              style={{
                fontSize: 44,
                color: "#FFFFFF",
                fontWeight: 950,
                marginTop: 6,
                fontFamily: "Cabinet Grotesk, Montserrat, sans-serif",
              }}
            >
              Evaluador: Liam Brady · Arsenal Academy
            </div>
          </div>
        )}
      </div>

      {/* Viñeta general */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          boxShadow: "inset 0 0 240px rgba(0,0,0,0.92)",
          pointerEvents: "none",
        }}
      />
    </AbsoluteFill>
  );
};
