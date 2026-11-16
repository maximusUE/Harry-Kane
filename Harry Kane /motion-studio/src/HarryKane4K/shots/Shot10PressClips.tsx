import React from "react";
import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { Cinematic4KBackground } from "../Cinematic4KBackground";

export const Shot10PressClips: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Card 1 drops on "The Kane Curse"
  const card1 = spring({ frame: frame - 40, fps, config: { damping: 14 } });
  // Card 2 drops on "eterno segundón"
  const card2 = spring({ frame: frame - 180, fps, config: { damping: 14 } });
  // Card 3 drops on "sangre maldita / 6 finales"
  const card3 = spring({ frame: frame - 300, fps, config: { damping: 14 } });

  const opacity = interpolate(frame, [0, 15, 435, 456], [0, 1, 1, 0]);

  return (
    <AbsoluteFill style={{ width: 3840, height: 2160 }}>
      <Cinematic4KBackground theme="crimson" />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
          opacity,
          padding: "0 100px",
        }}
      >
        <span
          style={{
            color: "#EF4444",
            fontSize: "36px",
            letterSpacing: "12px",
            textTransform: "uppercase",
            fontWeight: 800,
            marginBottom: "70px",
            fontFamily: "system-ui, sans-serif",
          }}
        >
          EL ACOSO MEDIÁTICO Y LAS BURLAS
        </span>

        <div
          style={{
            display: "flex",
            gap: "50px",
            justifyContent: "center",
            width: "100%",
            maxWidth: "2800px",
          }}
        >
          {/* Tarjeta 1 */}
          <div
            style={{
              flex: 1,
              transform: `scale(${Math.max(0, card1)}) rotate(-2deg)`,
              backgroundColor: "#16161C",
              border: "3px solid #272733",
              borderLeft: "12px solid #EF4444",
              padding: "45px 50px",
              borderRadius: "24px",
              boxShadow: "0 40px 80px rgba(0,0,0,0.8)",
            }}
          >
            <div style={{ color: "#71717A", fontSize: "24px", fontWeight: 800 }}>
              PRENSA BRITÁNICA
            </div>
            <div
              style={{
                color: "#FFFFFF",
                fontSize: "48px",
                fontWeight: 900,
                marginTop: "16px",
                fontFamily: "system-ui, sans-serif",
              }}
            >
              "THE KANE CURSE"
            </div>
            <p
              style={{
                color: "#94A3B8",
                fontSize: "26px",
                marginTop: "16px",
                margin: 0,
                lineHeight: 1.4,
              }}
            >
              Convirtieron su apellido en sinónimo de derrota
            </p>
          </div>

          {/* Tarjeta 2 */}
          <div
            style={{
              flex: 1,
              transform: `scale(${Math.max(0, card2)}) rotate(1deg)`,
              backgroundColor: "#16161C",
              border: "3px solid #272733",
              borderLeft: "12px solid #EAB308",
              padding: "45px 50px",
              borderRadius: "24px",
              boxShadow: "0 40px 80px rgba(0,0,0,0.8)",
            }}
          >
            <div style={{ color: "#71717A", fontSize: "24px", fontWeight: 800 }}>
              REDES SOCIALES
            </div>
            <div
              style={{
                color: "#FFFFFF",
                fontSize: "48px",
                fontWeight: 900,
                marginTop: "16px",
                fontFamily: "system-ui, sans-serif",
              }}
            >
              "ETERNO SEGUNDÓN"
            </div>
            <p
              style={{
                color: "#94A3B8",
                fontSize: "26px",
                marginTop: "16px",
                margin: 0,
                lineHeight: 1.4,
              }}
            >
              "Dijeron que no tenía carácter para los días grandes"
            </p>
          </div>

          {/* Tarjeta 3 */}
          <div
            style={{
              flex: 1,
              transform: `scale(${Math.max(0, card3)}) rotate(-1deg)`,
              backgroundColor: "#16161C",
              border: "3px solid #272733",
              borderLeft: "12px solid #DC2626",
              padding: "45px 50px",
              borderRadius: "24px",
              boxShadow: "0 40px 80px rgba(0,0,0,0.8)",
            }}
          >
            <div style={{ color: "#71717A", fontSize: "24px", fontWeight: 800 }}>
              ESTADÍSTICA CRUEL
            </div>
            <div
              style={{
                color: "#FFFFFF",
                fontSize: "48px",
                fontWeight: 900,
                marginTop: "16px",
                fontFamily: "system-ui, sans-serif",
              }}
            >
              "6 FINALES SIN GANAR"
            </div>
            <p
              style={{
                color: "#94A3B8",
                fontSize: "26px",
                marginTop: "16px",
                margin: 0,
                lineHeight: 1.4,
              }}
            >
              "Dijeron que su sangre estaba maldita"
            </p>
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};
