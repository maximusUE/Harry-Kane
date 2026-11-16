import React from "react";
import {
  AbsoluteFill,
  interpolate,
  Sequence,
  spring,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
  Img,
} from "remotion";
import { TypewriterText } from "../../components/TypewriterText";

/**
 * 🎬 SHOT 03: ¿CUÁL ES TU ARSENAL HOY? (EL ESPEJO DEL ESPECTADOR)
 * Global Frames: 877 -> 1418 (29.22s -> 47.27s | 541 frames = 18.05s)
 * - Fase A (f0 - f52 | 29.22s - 30.96s): "¿Cuál es tu Arsenal hoy?"
 * - Fase B (f52 - f324 | 30.96s - 40.02s): "¿Quién fue la persona que te dijo que no servías, que estabas demasiado viejo, demasiado gordo, demasiado quebrado para lograr algo grande?"
 * - Fase C (f324 - f541 | 40.02s - 47.27s): "¿Cuál es esa derrota que llevas años arrastrando y que usas como excusa para no volver a intentar nada con el alma?"
 */
export const Shot03CualEsTuArsenal: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const entrance = spring({
    frame,
    fps,
    config: { damping: 18, mass: 0.9 },
  });

  const isPhaseC = frame >= 324;
  const isPhaseB = frame >= 52 && frame < 324;

  return (
    <AbsoluteFill style={{ width: 3840, height: 2160, overflow: "hidden", backgroundColor: "#07080B" }}>
      {/* 🎬 FASE A + B (f0 - f324 | 29.22s - 40.02s): La pregunta implacable frente a la lluvia */}
      <Sequence from={0} durationInFrames={324}>
        <div style={{ position: "absolute", inset: 0, overflow: "hidden" }}>
          <Img
            src={staticFile("hombre_resiliencia_ventana_lluvia.jpg")}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              filter: "contrast(1.3) brightness(0.55) saturate(0.9)",
              transform: `scale(${interpolate(frame, [0, 324], [1.0, 1.08], { extrapolateRight: "clamp" })})`,
            }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(180deg, rgba(7,8,11,0.85) 0%, rgba(7,8,11,0.4) 45%, rgba(7,8,11,0.94) 100%)",
            }}
          />

          {isPhaseB && (
            <div
              style={{
                position: "absolute",
                bottom: 280,
                left: 180,
                right: 180,
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: 40,
                zIndex: 25,
              }}
            >
              <div
                style={{
                  padding: "40px 48px",
                  backgroundColor: "rgba(18, 21, 30, 0.92)",
                  border: "2px solid rgba(239, 68, 68, 0.75)",
                  borderRadius: 24,
                  backdropFilter: "blur(20px)",
                  boxShadow: "0 25px 70px rgba(0,0,0,0.85)",
                }}
              >
                <div style={{ fontSize: 20, fontWeight: 800, color: "#EF4444", letterSpacing: 4 }}>
                  LA ETIQUETA AJENA #01
                </div>
                <div
                  style={{
                    fontSize: 48,
                    fontWeight: 950,
                    color: "#FFFFFF",
                    fontFamily: "Cabinet Grotesk, Montserrat, sans-serif",
                    marginTop: 12,
                  }}
                >
                  “NO SIRVES / NO TE ALCANZA”
                </div>
                <div style={{ fontSize: 22, color: "#94A3B8", marginTop: 10 }}>
                  El rechazo inicial que te dijeron que aceptaras
                </div>
              </div>

              <div
                style={{
                  padding: "40px 48px",
                  backgroundColor: "rgba(18, 21, 30, 0.92)",
                  border: "2px solid rgba(245, 197, 24, 0.75)",
                  borderRadius: 24,
                  backdropFilter: "blur(20px)",
                  boxShadow: "0 25px 70px rgba(0,0,0,0.85)",
                }}
              >
                <div style={{ fontSize: 20, fontWeight: 800, color: "#F5C518", letterSpacing: 4 }}>
                  LA ETIQUETA AJENA #02
                </div>
                <div
                  style={{
                    fontSize: 48,
                    fontWeight: 950,
                    color: "#FFFFFF",
                    fontFamily: "Cabinet Grotesk, Montserrat, sans-serif",
                    marginTop: 12,
                  }}
                >
                  “DEMASIADO VIEJO O QUEBRADO”
                </div>
                <div style={{ fontSize: 22, color: "#94A3B8", marginTop: 10 }}>
                  Las dudas con las que intentaron limitar tu techo
                </div>
              </div>

              <div
                style={{
                  padding: "40px 48px",
                  backgroundColor: "rgba(18, 21, 30, 0.92)",
                  border: "2px solid rgba(56, 189, 248, 0.75)",
                  borderRadius: 24,
                  backdropFilter: "blur(20px)",
                  boxShadow: "0 25px 70px rgba(0,0,0,0.85)",
                }}
              >
                <div style={{ fontSize: 20, fontWeight: 800, color: "#38BDF8", letterSpacing: 4 }}>
                  LA PREGUNTA MDC
                </div>
                <div
                  style={{
                    fontSize: 48,
                    fontWeight: 950,
                    color: "#FFFFFF",
                    fontFamily: "Cabinet Grotesk, Montserrat, sans-serif",
                    marginTop: 12,
                  }}
                >
                  ¿LES VAS A DAR LA RAZÓN?
                </div>
                <div style={{ fontSize: 22, color: "#94A3B8", marginTop: 10 }}>
                  Tu respuesta en los hechos define quién eres
                </div>
              </div>
            </div>
          )}
        </div>
      </Sequence>

      {/* 🎬 FASE C (f324 - f541 | 40.02s - 47.27s): "¿Cuál es esa derrota que llevas años arrastrando...?" */}
      <Sequence from={324} durationInFrames={217}>
        <div style={{ position: "absolute", inset: 0, overflow: "hidden" }}>
          <Img
            src={staticFile("tunel_vestuarios_silueta_derrota.jpg")}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              filter: "contrast(1.3) brightness(0.45) saturate(0.8)",
              transform: `scale(${interpolate(frame, [324, 541], [1.0, 1.07], { extrapolateRight: "clamp" })})`,
            }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(90deg, rgba(7,8,11,0.92) 0%, rgba(7,8,11,0.45) 55%, rgba(7,8,11,0.9) 100%)",
            }}
          />

          <div
            style={{
              position: "absolute",
              bottom: 280,
              left: 180,
              maxWidth: 1600,
              padding: "44px 60px",
              backgroundColor: "rgba(18, 21, 30, 0.94)",
              border: "2px solid rgba(239, 68, 68, 0.8)",
              borderRadius: 24,
              backdropFilter: "blur(20px)",
              boxShadow: "0 25px 70px rgba(0,0,0,0.95)",
            }}
          >
            <div style={{ fontSize: 22, fontWeight: 800, color: "#EF4444", letterSpacing: 4 }}>
              EL PURGATORIO INTERIOR
            </div>
            <div
              style={{
                fontSize: 60,
                fontWeight: 950,
                color: "#FFFFFF",
                fontFamily: "Cabinet Grotesk, Montserrat, sans-serif",
                marginTop: 12,
                lineHeight: 1.2,
              }}
            >
              ¿USAS LA DERROTA PASADA COMO EXCUSA?
            </div>
            <div style={{ fontSize: 26, color: "#94A3B8", marginTop: 12, lineHeight: 1.35 }}>
              Para no volver a intentar nada con el alma y quedarte en la comodidad del resentimiento.
            </div>
          </div>
        </div>
      </Sequence>

      {/* 🏷️ OVERLAY DE TÍTULO SUPERIOR SINCRONIZADO AL AUDIO */}
      <div
        style={{
          position: "absolute",
          top: 220,
          left: 180,
          opacity: entrance,
          transform: `translateY(${(1 - entrance) * 30}px)`,
          zIndex: 30,
        }}
      >
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 16,
            padding: "10px 28px",
            backgroundColor: "rgba(18, 21, 30, 0.9)",
            border: `1.5px solid ${
              isPhaseC
                ? "rgba(239, 68, 68, 0.75)"
                : isPhaseB
                ? "rgba(245, 197, 24, 0.75)"
                : "rgba(56, 189, 248, 0.75)"
            }`,
            borderRadius: 100,
            backdropFilter: "blur(16px)",
            boxShadow: "0 8px 24px rgba(0,0,0,0.6)",
          }}
        >
          <div
            style={{
              width: 12,
              height: 12,
              borderRadius: "50%",
              backgroundColor: isPhaseC ? "#EF4444" : isPhaseB ? "#F5C518" : "#38BDF8",
              boxShadow: `0 0 14px ${isPhaseC ? "#EF4444" : isPhaseB ? "#F5C518" : "#38BDF8"}`,
            }}
          />
          <span
            style={{
              fontFamily: "Cabinet Grotesk, Montserrat, sans-serif",
              fontSize: 24,
              fontWeight: 900,
              letterSpacing: 4,
              color: isPhaseC ? "#EF4444" : isPhaseB ? "#F5C518" : "#38BDF8",
              textTransform: "uppercase",
            }}
          >
            {isPhaseC
              ? "EXPEDIENTE MDC · FRACTURA DEL PASADO // LA FACTURA PENDIENTE"
              : isPhaseB
              ? "EXPEDIENTE MDC · EL VEREDICTO DE TU ENTORNO // ROMPE EL TECHO"
              : "EXPEDIENTE MDC · EL ESPEJO DE TU VIDA // RESPONDE ESTO"}
          </span>
        </div>

        <h1
          style={{
            fontFamily: "Cabinet Grotesk, Montserrat, sans-serif",
            fontSize: 82,
            fontWeight: 950,
            color: "#FFFFFF",
            margin: "20px 0 0 0",
            letterSpacing: 1,
            textShadow: "0 10px 40px rgba(0,0,0,0.95)",
          }}
        >
          {isPhaseC ? (
            <TypewriterText
              text="¿CUÁL ES LA DERROTA QUE USAS DE EXCUSA?"
              startFrame={325}
              durationInFrames={32}
              currentFrame={frame}
              cursorColor="#EF4444"
            />
          ) : isPhaseB ? (
            <TypewriterText
              text="¿QUIÉN TE DIJO QUE NO SERVÍAS?"
              startFrame={53}
              durationInFrames={34}
              currentFrame={frame}
              cursorColor="#F5C518"
            />
          ) : (
            <TypewriterText
              text="¿CUÁL ES TU ARSENAL HOY?"
              startFrame={2}
              durationInFrames={30}
              currentFrame={frame}
              cursorColor="#38BDF8"
            />
          )}
        </h1>
      </div>
    </AbsoluteFill>
  );
};

