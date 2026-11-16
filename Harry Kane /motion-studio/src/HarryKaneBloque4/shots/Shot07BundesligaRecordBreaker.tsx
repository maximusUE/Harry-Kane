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
  Video,
} from "remotion";
import { TypewriterText } from "../../components/TypewriterText";

/**
 * 🎬 SHOT 07: DESTROZÓ TODOS LOS RÉCORDS Y UN APETITO VORAZ E INSACIABLE
 * Global Frames: 2788 -> 3106 (92.92s -> 103.52s | 318 frames = 10.60s)
 * - Fase A (f0 - f173 | 92.92s - 98.70s): "Y en la siguiente temporada destrozó todos los registros goleadores de la liga alemana,"
 * - Fase B (f173 - f318 | 98.70s - 103.52s): "liderando al equipo no con palabras, sino con un apetito voraz e insaciable."
 */
export const Shot07BundesligaRecordBreaker: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const entrance = spring({
    frame,
    fps,
    config: { damping: 18, mass: 0.9 },
  });

  const isPhaseB = frame >= 173;

  return (
    <AbsoluteFill style={{ width: 3840, height: 2160, overflow: "hidden", backgroundColor: "#07080B" }}>
      {/* 🎬 FASE A1 (f0 - f95 | 92.92s - 96.08s): Portada BILD Bota de Oro 36 Goles */}
      <Sequence from={0} durationInFrames={95}>
        <div style={{ position: "absolute", inset: 0, overflow: "hidden" }}>
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "radial-gradient(circle at center, #241D0B 0%, #07080B 85%)",
            }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              paddingTop: 120,
            }}
          >
            <div
              style={{
                width: "72%",
                maxWidth: 2350,
                borderRadius: 24,
                overflow: "hidden",
                border: "2px solid rgba(245, 197, 24, 0.65)",
                boxShadow: "0 35px 90px rgba(0,0,0,0.95), 0 0 55px rgba(245, 197, 24, 0.3)",
                transform: `scale(${interpolate(frame, [0, 95], [1.0, 1.04], { extrapolateRight: "clamp" })})`,
              }}
            >
              <Img
                src={staticFile("titular_bild_bota_oro_record_2024.png")}
                style={{ width: "100%", height: "auto", display: "block" }}
              />
            </div>
          </div>
        </div>
      </Sequence>

      {/* 🎬 FASE A2 (f95 - f173 | 96.08s - 98.70s): B-Roll Botas de Oro y Récords en Bundesliga */}
      <Sequence from={95} durationInFrames={78}>
        <div style={{ position: "absolute", inset: 0, overflow: "hidden" }}>
          <Video
            src={staticFile("b3_03_golden_boot_trio.mp4")}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              filter: "contrast(1.25) brightness(0.62) saturate(1.15)",
              transform: `scale(${interpolate(frame, [95, 173], [1.0, 1.06], { extrapolateRight: "clamp" })})`,
            }}
            muted
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(180deg, rgba(7,8,11,0.85) 0%, rgba(7,8,11,0.35) 50%, rgba(7,8,11,0.92) 100%)",
            }}
          />
        </div>
      </Sequence>

      {/* 🎬 FASE B (f173 - f318 | 98.70s - 103.52s): "liderando al equipo no con palabras, sino con un apetito voraz e insaciable." */}
      <Sequence from={173} durationInFrames={145}>
        <div style={{ position: "absolute", inset: 0, overflow: "hidden" }}>
          <Img
            src={staticFile("mdc_stadium_bg.jpg")}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              filter: "contrast(1.3) brightness(0.45) saturate(1.1)",
              transform: `scale(${interpolate(frame, [173, 318], [1.0, 1.06], { extrapolateRight: "clamp" })})`,
            }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "radial-gradient(circle at 70% 50%, rgba(245, 197, 24, 0.22) 0%, rgba(7, 8, 11, 0.94) 80%)",
            }}
          />

          {/* Retrato heroico de Kane + Estadísticas de Récord */}
          <div
            style={{
              position: "absolute",
              bottom: 280,
              left: 180,
              right: 180,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 60,
              zIndex: 25,
            }}
          >
            <div style={{ display: "flex", gap: 40 }}>
              <div
                style={{
                  padding: "40px 56px",
                  backgroundColor: "rgba(18, 21, 30, 0.92)",
                  border: "2px solid rgba(245, 197, 24, 0.8)",
                  borderRadius: 24,
                  backdropFilter: "blur(20px)",
                  boxShadow: "0 25px 70px rgba(0,0,0,0.9), 0 0 45px rgba(245, 197, 24, 0.28)",
                }}
              >
                <div style={{ fontSize: 22, fontWeight: 800, color: "#F5C518", letterSpacing: 4 }}>
                  RÉCORD HISTÓRICO BUNDESLIGA
                </div>
                <div
                  style={{
                    fontSize: 86,
                    fontWeight: 950,
                    color: "#FFFFFF",
                    fontFamily: "Cabinet Grotesk, Montserrat, sans-serif",
                    marginTop: 6,
                  }}
                >
                  36 GOLES DEBUT
                </div>
                <div style={{ fontSize: 24, fontWeight: 700, color: "#94A3B8", marginTop: 6 }}>
                  Bota de Oro Europea · Máximo Goleador del Continente
                </div>
              </div>

              <div
                style={{
                  padding: "40px 56px",
                  backgroundColor: "rgba(18, 21, 30, 0.92)",
                  border: "2px solid rgba(16, 185, 129, 0.75)",
                  borderRadius: 24,
                  backdropFilter: "blur(20px)",
                  boxShadow: "0 25px 70px rgba(0,0,0,0.9), 0 0 45px rgba(16, 185, 129, 0.25)",
                }}
              >
                <div style={{ fontSize: 22, fontWeight: 800, color: "#10B981", letterSpacing: 4 }}>
                  MENTALIDAD DE CAMPEÓN
                </div>
                <div
                  style={{
                    fontSize: 72,
                    fontWeight: 950,
                    color: "#FFFFFF",
                    fontFamily: "Cabinet Grotesk, Montserrat, sans-serif",
                    marginTop: 14,
                  }}
                >
                  HAMBRE INSACIABLE
                </div>
                <div style={{ fontSize: 24, fontWeight: 700, color: "#94A3B8", marginTop: 10 }}>
                  Liderazgo con hechos, no con excusas
                </div>
              </div>
            </div>

            <div
              style={{
                width: 780,
                height: 780,
                borderRadius: 32,
                overflow: "hidden",
                border: "3px solid rgba(245, 197, 24, 0.85)",
                boxShadow: "0 35px 90px rgba(0,0,0,0.95), 0 0 60px rgba(245, 197, 24, 0.35)",
              }}
            >
              <Img
                src={staticFile("kane_gala_ballondor_2024.png")}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
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
            border: "1.5px solid rgba(245, 197, 24, 0.8)",
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
              backgroundColor: "#F5C518",
              boxShadow: "0 0 14px #F5C518",
            }}
          />
          <span
            style={{
              fontFamily: "Cabinet Grotesk, Montserrat, sans-serif",
              fontSize: 24,
              fontWeight: 900,
              letterSpacing: 4,
              color: "#F5C518",
              textTransform: "uppercase",
            }}
          >
            {isPhaseB
              ? "EXPEDIENTE MDC · LIDERAZGO TOTAL // CLÍMAX BLOQUE 4"
              : "EXPEDIENTE MDC · BUNDESLIGA // HISTORIA PURA EN ALEMANIA"}
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
            textShadow: "0 10px 40px rgba(0,0,0,0.95), 0 0 50px rgba(245,197,24,0.35)",
          }}
        >
          {isPhaseB ? (
            <TypewriterText
              text="UN APETITO VORAZ E INSACIABLE"
              startFrame={174}
              durationInFrames={32}
              currentFrame={frame}
              cursorColor="#F5C518"
            />
          ) : (
            <TypewriterText
              text="DESTROZÓ TODOS LOS RÉCORDS EN ALEMANIA"
              startFrame={2}
              durationInFrames={34}
              currentFrame={frame}
              cursorColor="#F5C518"
            />
          )}
        </h1>
      </div>
    </AbsoluteFill>
  );
};

