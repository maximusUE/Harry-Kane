import React from "react";
import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { CinematicBackground } from "./CinematicBackground";

export const Scene3Reflection: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Parte 1: "Este video se trata de ti"
  const introSpring = spring({
    frame,
    fps,
    config: { damping: 14, mass: 0.8 },
  });

  // Salida de la primera parte de la frase
  const introFadeOut = interpolate(frame, [180, 220], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Parte 2: Los 3 Espejos (Salud, Lesión, Deudas) - se activan desde el frame 230
  const mirror1Spring = spring({
    frame: frame - 240,
    fps,
    config: { damping: 14, mass: 0.8 },
  });

  const mirror2Spring = spring({
    frame: frame - 380,
    fps,
    config: { damping: 14, mass: 0.8 },
  });

  const mirror3Spring = spring({
    frame: frame - 520,
    fps,
    config: { damping: 14, mass: 0.8 },
  });

  // Salida de los espejos para el clímax final (frame 1400)
  const mirrorsFadeOut = interpolate(frame, [1350, 1420], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Parte 3: Clímax monumental final
  const climaxSpring = spring({
    frame: frame - 1440,
    fps,
    config: { damping: 12, mass: 0.9 },
  });

  return (
    <AbsoluteFill>
      <CinematicBackground theme="deepBlue" />

      {/* SECCIÓN 1: ROMPIENDO LA CUARTA PARED */}
      {frame < 230 && (
        <div
          style={{
            opacity: introFadeOut,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
            textAlign: "center",
            padding: "0 60px",
          }}
        >
          <div
            style={{
              transform: `scale(${Math.max(0, introSpring)})`,
              opacity: introSpring,
            }}
          >
            <p
              style={{
                color: "#64748B",
                fontSize: "26px",
                letterSpacing: "6px",
                textTransform: "uppercase",
                marginBottom: "20px",
                fontFamily: "system-ui, sans-serif",
                fontWeight: 600,
              }}
            >
              OLVÍDATE DE LA FAMA Y LOS MILLONES POR UN MOMENTO
            </p>
            <h2
              style={{
                fontSize: "82px",
                fontWeight: 900,
                color: "#F8FAFC",
                letterSpacing: "-2px",
                lineHeight: 1.1,
                fontFamily: "system-ui, -apple-system, sans-serif",
                margin: 0,
              }}
            >
              ESTE VIDEO NO ES SOBRE KANE.
              <br />
              <span
                style={{
                  background:
                    "linear-gradient(135deg, #38BDF8 0%, #818CF8 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                ESTE VIDEO SE TRATA DE TI.
              </span>
            </h2>
          </div>
        </div>
      )}

      {/* SECCIÓN 2: LOS 3 ESPEJOS DE VIDA */}
      {frame >= 220 && frame < 1450 && (
        <div
          style={{
            opacity: mirrorsFadeOut,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
            padding: "0 60px",
          }}
        >
          <h3
            style={{
              color: "#94A3B8",
              fontSize: "24px",
              letterSpacing: "5px",
              textTransform: "uppercase",
              marginBottom: "50px",
              fontFamily: "system-ui, sans-serif",
              fontWeight: 700,
            }}
          >
            ¿CUÁL ES TU CALLEJÓN SIN SALIDA HOY?
          </h3>

          <div
            style={{
              display: "flex",
              gap: "30px",
              width: "100%",
              maxWidth: "1350px",
              justifyContent: "center",
            }}
          >
            {/* Espejo 1: Salud / Físico */}
            <div
              style={{
                flex: 1,
                transform: `scale(${Math.max(0, mirror1Spring)})`,
                opacity: mirror1Spring,
                backgroundColor: "rgba(15, 23, 42, 0.7)",
                border: "1px solid rgba(56, 189, 248, 0.3)",
                padding: "40px 30px",
                borderRadius: "20px",
                backdropFilter: "blur(12px)",
                textAlign: "center",
              }}
            >
              <div style={{ fontSize: "50px", marginBottom: "15px" }}>⚖️</div>
              <h4
                style={{
                  color: "#FFFFFF",
                  fontSize: "26px",
                  fontWeight: 800,
                  margin: "0 0 10px 0",
                  fontFamily: "system-ui, sans-serif",
                }}
              >
                Tu Cuerpo / Salud
              </h4>
              <p
                style={{
                  color: "#94A3B8",
                  fontSize: "18px",
                  lineHeight: 1.5,
                  margin: 0,
                }}
              >
                Kilos de más o vergüenza al mirarte al espejo cada mañana
              </p>
            </div>

            {/* Espejo 2: Lesión / Sueño truncado */}
            <div
              style={{
                flex: 1,
                transform: `scale(${Math.max(0, mirror2Spring)})`,
                opacity: mirror2Spring,
                backgroundColor: "rgba(15, 23, 42, 0.7)",
                border: "1px solid rgba(129, 140, 248, 0.3)",
                padding: "40px 30px",
                borderRadius: "20px",
                backdropFilter: "blur(12px)",
                textAlign: "center",
              }}
            >
              <div style={{ fontSize: "50px", marginBottom: "15px" }}>🩹</div>
              <h4
                style={{
                  color: "#FFFFFF",
                  fontSize: "26px",
                  fontWeight: 800,
                  margin: "0 0 10px 0",
                  fontFamily: "system-ui, sans-serif",
                }}
              >
                La Lesión
              </h4>
              <p
                style={{
                  color: "#94A3B8",
                  fontSize: "18px",
                  lineHeight: 1.5,
                  margin: 0,
                }}
              >
                El golpe físico o la recaída que te apartó de lo que amabas
              </p>
            </div>

            {/* Espejo 3: Deudas / Quiebra */}
            <div
              style={{
                flex: 1,
                transform: `scale(${Math.max(0, mirror3Spring)})`,
                opacity: mirror3Spring,
                backgroundColor: "rgba(15, 23, 42, 0.7)",
                border: "1px solid rgba(244, 63, 94, 0.3)",
                padding: "40px 30px",
                borderRadius: "20px",
                backdropFilter: "blur(12px)",
                textAlign: "center",
              }}
            >
              <div style={{ fontSize: "50px", marginBottom: "15px" }}>📉</div>
              <h4
                style={{
                  color: "#FFFFFF",
                  fontSize: "26px",
                  fontWeight: 800,
                  margin: "0 0 10px 0",
                  fontFamily: "system-ui, sans-serif",
                }}
              >
                La Quiebra
              </h4>
              <p
                style={{
                  color: "#94A3B8",
                  fontSize: "18px",
                  lineHeight: 1.5,
                  margin: 0,
                }}
              >
                Endeudado y sintiendo la mirada de lástima de quienes te rodean
              </p>
            </div>
          </div>
        </div>
      )}

      {/* SECCIÓN 3: EL CLÍMAX Y LA VERDAD MONUMENTAL */}
      {frame >= 1420 && (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
            textAlign: "center",
            padding: "0 80px",
          }}
        >
          <div
            style={{
              transform: `scale(${Math.max(0, climaxSpring)})`,
              opacity: climaxSpring,
            }}
          >
            <div
              style={{
                display: "inline-block",
                border: "1px solid rgba(212, 175, 55, 0.5)",
                backgroundColor: "rgba(212, 175, 55, 0.1)",
                padding: "10px 30px",
                borderRadius: "50px",
                marginBottom: "30px",
              }}
            >
              <span
                style={{
                  color: "#F5DE88",
                  fontSize: "18px",
                  fontWeight: 700,
                  letterSpacing: "4px",
                  textTransform: "uppercase",
                }}
              >
                REGLA INQUEBRANTABLE DE VIDA
              </span>
            </div>

            <h2
              style={{
                fontSize: "72px",
                fontWeight: 900,
                color: "#FFFFFF",
                letterSpacing: "-1px",
                lineHeight: 1.2,
                maxWidth: "1300px",
                margin: "0 auto",
                fontFamily: "system-ui, -apple-system, sans-serif",
              }}
            >
              NADIE ESTÁ CONDENADO A PERDER PARA SIEMPRE...
            </h2>

            <h1
              style={{
                fontSize: "86px",
                fontWeight: 900,
                marginTop: "20px",
                background:
                  "linear-gradient(135deg, #FFFFFF 0%, #F5DE88 50%, #D4AF37 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                letterSpacing: "-2px",
                textTransform: "uppercase",
                fontFamily: "system-ui, -apple-system, sans-serif",
                filter: "drop-shadow(0 15px 35px rgba(212, 175, 55, 0.4))",
              }}
            >
              A MENOS QUE DECIDA RENDIRSE.
            </h1>
          </div>
        </div>
      )}
    </AbsoluteFill>
  );
};

