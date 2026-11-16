import React from "react";
import {
  AbsoluteFill,
  interpolate,
  Sequence,
  spring,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
  Video,
} from "remotion";
import { TypewriterText } from "../../components/TypewriterText";

/**
 * 🎬 SHOT 06: GIMNASIO A LAS 06:00 AM, NUTRICIÓN Y FUERZA EN LA NIEVE
 * Global Frames: 2512 -> 2788 (83.74s -> 92.92s | 276 frames = 9.20s)
 * - Fase A (f0 - f123 | 83.74s - 87.84s): "Se encerró en el gimnasio del club a las seis de la mañana."
 * - Fase B (f123 - f200 | 87.84s - 90.42s): "Perfeccionó cada detalle de su nutrición."
 * - Fase C (f200 - f276 | 90.42s - 92.92s): "Trabajó la fuerza explosiva en la nieve."
 */
export const Shot06Gym6AMAndSnow: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const entrance = spring({
    frame,
    fps,
    config: { damping: 18, mass: 0.9 },
  });

  const isPhaseC = frame >= 200;
  const isPhaseB = frame >= 123 && frame < 200;

  return (
    <AbsoluteFill style={{ width: 3840, height: 2160, overflow: "hidden", backgroundColor: "#07080B" }}>
      {/* 🎬 FASE A + B (f0 - f200 | 83.74s - 90.42s): Gimnasio 06:00 AM + Precisión en Nutrición */}
      <Sequence from={0} durationInFrames={200}>
        <div style={{ position: "absolute", inset: 0, overflow: "hidden" }}>
          <Video
            src={staticFile("kane_remate_area.mp4")}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              filter: isPhaseB
                ? "contrast(1.3) brightness(0.45) saturate(1.1)"
                : "contrast(1.35) brightness(0.48) saturate(0.85)",
              transform: `scale(${interpolate(frame, [0, 200], [1.0, 1.07], { extrapolateRight: "clamp" })})`,
            }}
            muted
            loop
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(90deg, rgba(7,8,11,0.92) 0%, rgba(7,8,11,0.5) 55%, rgba(7,8,11,0.92) 100%)",
            }}
          />

          {/* ⏱️ HUD CRONÓMETRO SÄBENER STRASSE 06:00 AM / NUTRICIÓN ÉLITE */}
          <div
            style={{
              position: "absolute",
              bottom: 310,
              left: 180,
              display: "flex",
              gap: 48,
              alignItems: "center",
              zIndex: 25,
            }}
          >
            <div
              style={{
                padding: "36px 56px",
                backgroundColor: "rgba(18, 21, 30, 0.92)",
                border: "2px solid rgba(245, 197, 24, 0.75)",
                borderRadius: 24,
                backdropFilter: "blur(20px)",
                boxShadow: "0 25px 70px rgba(0,0,0,0.85), 0 0 40px rgba(245, 197, 24, 0.25)",
              }}
            >
              <div style={{ fontSize: 22, fontWeight: 800, color: "#94A3B8", letterSpacing: 4 }}>
                SÄBENER STRASSE · MÚNICH
              </div>
              <div
                style={{
                  fontSize: 88,
                  fontWeight: 950,
                  color: "#F5C518",
                  fontFamily: "JetBrains Mono, monospace",
                  letterSpacing: 4,
                  marginTop: 6,
                }}
              >
                06:00:00 AM
              </div>
              <div style={{ fontSize: 24, fontWeight: 700, color: "#FFFFFF", marginTop: 6 }}>
                PRIMER JUGADOR EN EL GIMNASIO DEL CLUB
              </div>
            </div>

            {isPhaseB && (
              <div
                style={{
                  padding: "36px 56px",
                  backgroundColor: "rgba(18, 21, 30, 0.92)",
                  border: "2px solid rgba(16, 185, 129, 0.75)",
                  borderRadius: 24,
                  backdropFilter: "blur(20px)",
                  boxShadow: "0 25px 70px rgba(0,0,0,0.85), 0 0 40px rgba(16, 185, 129, 0.25)",
                }}
              >
                <div style={{ fontSize: 22, fontWeight: 800, color: "#10B981", letterSpacing: 4 }}>
                  BIOMETRÍA & RECUPERACIÓN
                </div>
                <div
                  style={{
                    fontSize: 64,
                    fontWeight: 950,
                    color: "#FFFFFF",
                    fontFamily: "Cabinet Grotesk, Montserrat, sans-serif",
                    marginTop: 10,
                  }}
                >
                  NUTRICIÓN MILIMÉTRICA
                </div>
                <div style={{ fontSize: 24, fontWeight: 700, color: "#94A3B8", marginTop: 8 }}>
                  Optimización metabólica de alto rendimiento a los 31 años
                </div>
              </div>
            )}
          </div>
        </div>
      </Sequence>

      {/* 🎬 FASE C (f200 - f276 | 90.42s - 92.92s): "Trabajó la fuerza explosiva en la nieve." */}
      <Sequence from={200} durationInFrames={76}>
        <div style={{ position: "absolute", inset: 0, overflow: "hidden" }}>
          <Video
            src={staticFile("broll/broll_09_running_rain.mp4")}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              filter: "contrast(1.35) brightness(0.58) saturate(0.7) hue-rotate(185deg)",
              transform: `scale(${interpolate(frame, [200, 276], [1.02, 1.08], { extrapolateRight: "clamp" })})`,
            }}
            muted
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "radial-gradient(circle at center, rgba(56, 189, 248, 0.18) 0%, rgba(7, 8, 11, 0.92) 85%)",
            }}
          />

          <div
            style={{
              position: "absolute",
              bottom: 310,
              left: 180,
              padding: "36px 56px",
              backgroundColor: "rgba(18, 21, 30, 0.92)",
              border: "2px solid rgba(56, 189, 248, 0.8)",
              borderRadius: 24,
              backdropFilter: "blur(20px)",
              boxShadow: "0 25px 70px rgba(0,0,0,0.9), 0 0 45px rgba(56, 189, 248, 0.3)",
            }}
          >
            <div style={{ fontSize: 22, fontWeight: 800, color: "#38BDF8", letterSpacing: 4 }}>
              ACONDICIONAMIENTO INVERNAL · BAVIERA
            </div>
            <div
              style={{
                fontSize: 64,
                fontWeight: 950,
                color: "#FFFFFF",
                fontFamily: "Cabinet Grotesk, Montserrat, sans-serif",
                marginTop: 8,
              }}
            >
              POTENCIA EXPLOSIVA BAJO CERO
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
                ? "rgba(56, 189, 248, 0.75)"
                : isPhaseB
                ? "rgba(16, 185, 129, 0.75)"
                : "rgba(245, 197, 24, 0.75)"
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
              backgroundColor: isPhaseC ? "#38BDF8" : isPhaseB ? "#10B981" : "#F5C518",
              boxShadow: `0 0 14px ${isPhaseC ? "#38BDF8" : isPhaseB ? "#10B981" : "#F5C518"}`,
            }}
          />
          <span
            style={{
              fontFamily: "Cabinet Grotesk, Montserrat, sans-serif",
              fontSize: 24,
              fontWeight: 900,
              letterSpacing: 4,
              color: isPhaseC ? "#38BDF8" : isPhaseB ? "#10B981" : "#F5C518",
              textTransform: "uppercase",
            }}
          >
            {isPhaseC
              ? "EXPEDIENTE MDC · INVIERNO EN MÚNICH // RESISTENCIA EXTREMA"
              : isPhaseB
              ? "EXPEDIENTE MDC · DISCIPLINA INVISIBLE // BIO-RENDIMIENTO"
              : "EXPEDIENTE MDC · 06:00 AM // EL TRABAJO EN LA SOMBRA"}
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
              text="FUERZA EXPLOSIVA BAJO LA NIEVE"
              startFrame={201}
              durationInFrames={28}
              currentFrame={frame}
              cursorColor="#38BDF8"
            />
          ) : isPhaseB ? (
            <TypewriterText
              text="PRECISIÓN MILIMÉTRICA EN SU NUTRICIÓN"
              startFrame={124}
              durationInFrames={30}
              currentFrame={frame}
              cursorColor="#10B981"
            />
          ) : (
            <TypewriterText
              text="GIMNASIO DEL CLUB A LAS 06:00 AM"
              startFrame={2}
              durationInFrames={32}
              currentFrame={frame}
              cursorColor="#F5C518"
            />
          )}
        </h1>
      </div>
    </AbsoluteFill>
  );
};

