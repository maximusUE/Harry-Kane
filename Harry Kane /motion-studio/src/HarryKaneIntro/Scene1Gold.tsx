import React from "react";
import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { CinematicBackground } from "./CinematicBackground";

export const Scene1Gold: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Animaciones de entrada
  const badgeSpring = spring({
    frame,
    fps,
    config: { damping: 15, mass: 0.8 },
  });

  const titleSpring = spring({
    frame: frame - 25,
    fps,
    config: { damping: 14, mass: 0.9 },
  });

  const trophySpring = spring({
    frame: frame - 60,
    fps,
    config: { damping: 12, mass: 0.7 },
  });

  const quoteOpacity = interpolate(frame, [150, 180], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const quoteTranslateY = interpolate(frame, [150, 180], [25, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Salida suave antes del corte
  const sceneOpacity = interpolate(frame, [1000, 1050], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill style={{ opacity: sceneOpacity }}>
      <CinematicBackground theme="gold" />

      {/* Contenido Central */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
          padding: "0 100px",
          textAlign: "center",
        }}
      >
        {/* Badge: París 2026 */}
        <div
          style={{
            transform: `scale(${badgeSpring}) translateY(${interpolate(
              badgeSpring,
              [0, 1],
              [-30, 0]
            )}px)`,
            opacity: badgeSpring,
            border: "1px solid rgba(212, 175, 55, 0.4)",
            backgroundColor: "rgba(212, 175, 55, 0.08)",
            padding: "10px 28px",
            borderRadius: "50px",
            marginBottom: "30px",
            backdropFilter: "blur(10px)",
          }}
        >
          <span
            style={{
              color: "#E6CA65",
              fontSize: "20px",
              fontWeight: 700,
              letterSpacing: "4px",
              textTransform: "uppercase",
              fontFamily: "system-ui, -apple-system, sans-serif",
            }}
          >
            ✦ PARÍS • 26 DE OCTUBRE DE 2026 ✦
          </span>
        </div>

        {/* Título Principal Dorado */}
        <div
          style={{
            transform: `scale(${Math.max(0, titleSpring)})`,
            opacity: titleSpring,
            marginBottom: "20px",
          }}
        >
          <h1
            style={{
              fontSize: "92px",
              fontWeight: 900,
              letterSpacing: "-2px",
              margin: 0,
              background:
                "linear-gradient(135deg, #FFFFFF 0%, #F5DE88 40%, #D4AF37 70%, #997A15 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              textTransform: "uppercase",
              fontFamily: "system-ui, -apple-system, sans-serif",
              filter: "drop-shadow(0 15px 35px rgba(212, 175, 55, 0.3))",
            }}
          >
            El Balón de Oro
          </h1>
          <p
            style={{
              color: "rgba(255, 255, 255, 0.7)",
              fontSize: "26px",
              fontWeight: 400,
              letterSpacing: "8px",
              marginTop: "10px",
              textTransform: "uppercase",
              fontFamily: "system-ui, -apple-system, sans-serif",
            }}
          >
            Théâtre du Châtelet
          </p>
        </div>

        {/* Trofeo / Emblema Ilustrado en SVG con Halo */}
        <div
          style={{
            transform: `scale(${Math.max(0, trophySpring)})`,
            opacity: trophySpring,
            margin: "35px 0",
          }}
        >
          <div
            style={{
              width: "120px",
              height: "120px",
              borderRadius: "50%",
              background:
                "radial-gradient(circle, rgba(212,175,55,0.25) 0%, rgba(212,175,55,0.02) 70%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: "1px solid rgba(212, 175, 55, 0.3)",
              boxShadow: "0 0 50px rgba(212, 175, 55, 0.25)",
            }}
          >
            <span style={{ fontSize: "56px" }}>🏆</span>
          </div>
        </div>

        {/* Tarjeta de Ilusión: Lo que la gente cree */}
        <div
          style={{
            opacity: quoteOpacity,
            transform: `translateY(${quoteTranslateY}px)`,
            maxWidth: "920px",
            backgroundColor: "rgba(255, 255, 255, 0.03)",
            border: "1px solid rgba(255, 255, 255, 0.08)",
            padding: "24px 38px",
            borderRadius: "16px",
            backdropFilter: "blur(12px)",
          }}
        >
          <p
            style={{
              color: "#E2E8F0",
              fontSize: "28px",
              fontStyle: "italic",
              fontWeight: 400,
              lineHeight: 1.5,
              margin: 0,
              fontFamily: "Georgia, serif",
            }}
          >
            "Qué afortunado... qué talento natural... nació para triunfar."
          </p>
          <span
            style={{
              display: "block",
              marginTop: "12px",
              color: "#94A3B8",
              fontSize: "16px",
              letterSpacing: "3px",
              textTransform: "uppercase",
              fontFamily: "system-ui, sans-serif",
            }}
          >
            — La ilusión de la gloria que todos ven en redes
          </span>
        </div>
      </div>
    </AbsoluteFill>
  );
};

