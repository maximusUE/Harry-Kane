import React from "react";
import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { CinematicBackground } from "./CinematicBackground";

export const Scene2Struggle: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Animación del número 15 (Contador dinámico)
  const yearsNumber = Math.min(
    15,
    Math.floor(
      interpolate(frame, [15, 75], [0, 15], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
      })
    )
  );

  const titleSpring = spring({
    frame,
    fps,
    config: { damping: 12, mass: 0.6 },
  });

  // Tarjetas flotantes de titulares con delay
  const card1Spring = spring({
    frame: frame - 40,
    fps,
    config: { damping: 14, mass: 0.8 },
  });

  const card2Spring = spring({
    frame: frame - 65,
    fps,
    config: { damping: 14, mass: 0.8 },
  });

  const card3Spring = spring({
    frame: frame - 90,
    fps,
    config: { damping: 14, mass: 0.8 },
  });

  const sceneOpacity = interpolate(frame, [1000, 1050], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill style={{ opacity: sceneOpacity }}>
      <CinematicBackground theme="darkRed" />

      {/* Shake sutil al inicio */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
          padding: "0 80px",
          textAlign: "center",
        }}
      >
        {/* Título de advertencia / La verdad incómoda */}
        <div
          style={{
            transform: `scale(${Math.max(0, titleSpring)})`,
            opacity: titleSpring,
            marginBottom: "15px",
          }}
        >
          <span
            style={{
              color: "#EF4444",
              fontSize: "22px",
              fontWeight: 800,
              letterSpacing: "6px",
              textTransform: "uppercase",
              fontFamily: "system-ui, sans-serif",
              backgroundColor: "rgba(239, 68, 68, 0.12)",
              padding: "8px 24px",
              borderRadius: "40px",
              border: "1px solid rgba(239, 68, 68, 0.3)",
            }}
          >
            LO QUE EL MUNDO PREFIERE OLVIDAR
          </span>
        </div>

        {/* Cifra Monstruosa: 15 AÑOS */}
        <div style={{ margin: "20px 0" }}>
          <div
            style={{
              fontSize: "140px",
              fontWeight: 900,
              lineHeight: 1,
              letterSpacing: "-4px",
              color: "#F8FAFC",
              fontFamily: "system-ui, -apple-system, sans-serif",
              textShadow: "0 10px 40px rgba(0, 0, 0, 0.8)",
            }}
          >
            {yearsNumber} <span style={{ color: "#EF4444" }}>AÑOS</span>
          </div>
          <p
            style={{
              fontSize: "28px",
              color: "#94A3B8",
              marginTop: "12px",
              letterSpacing: "4px",
              textTransform: "uppercase",
              fontFamily: "system-ui, sans-serif",
            }}
          >
            Siendo el blanco de burlas en todo el planeta
          </p>
        </div>

        {/* Titulares Agresivos / Tarjetas Brutalistas */}
        <div
          style={{
            display: "flex",
            gap: "24px",
            marginTop: "40px",
            flexWrap: "wrap",
            justifyContent: "center",
            maxWidth: "1200px",
          }}
        >
          {/* Card 1 */}
          <div
            style={{
              transform: `scale(${Math.max(0, card1Spring)}) rotate(-2deg)`,
              opacity: card1Spring,
              backgroundColor: "#18181B",
              border: "2px solid #27272A",
              borderLeft: "6px solid #EF4444",
              padding: "20px 32px",
              borderRadius: "12px",
              boxShadow: "0 20px 30px rgba(0, 0, 0, 0.5)",
            }}
          >
            <div style={{ color: "#71717A", fontSize: "14px", fontWeight: 700 }}>
              PRENSA BRITÁNICA
            </div>
            <div
              style={{
                color: "#FFFFFF",
                fontSize: "26px",
                fontWeight: 800,
                marginTop: "6px",
              }}
            >
              "THE KANE CURSE"
            </div>
          </div>

          {/* Card 2 */}
          <div
            style={{
              transform: `scale(${Math.max(0, card2Spring)}) rotate(1deg)`,
              opacity: card2Spring,
              backgroundColor: "#18181B",
              border: "2px solid #27272A",
              borderLeft: "6px solid #EAB308",
              padding: "20px 32px",
              borderRadius: "12px",
              boxShadow: "0 20px 30px rgba(0, 0, 0, 0.5)",
            }}
          >
            <div style={{ color: "#71717A", fontSize: "14px", fontWeight: 700 }}>
              REDES SOCIALES
            </div>
            <div
              style={{
                color: "#FFFFFF",
                fontSize: "26px",
                fontWeight: 800,
                marginTop: "6px",
              }}
            >
              "ETERNO SEGUNDÓN"
            </div>
          </div>

          {/* Card 3 */}
          <div
            style={{
              transform: `scale(${Math.max(0, card3Spring)}) rotate(-1deg)`,
              opacity: card3Spring,
              backgroundColor: "#18181B",
              border: "2px solid #27272A",
              borderLeft: "6px solid #DC2626",
              padding: "20px 32px",
              borderRadius: "12px",
              boxShadow: "0 20px 30px rgba(0, 0, 0, 0.5)",
            }}
          >
            <div style={{ color: "#71717A", fontSize: "14px", fontWeight: 700 }}>
              ESTADÍSTICA CRUEL
            </div>
            <div
              style={{
                color: "#FFFFFF",
                fontSize: "26px",
                fontWeight: 800,
                marginTop: "6px",
              }}
            >
              "6 FINALES PERDIDAS"
            </div>
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};

