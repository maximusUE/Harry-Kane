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
 * 🎬 SHOT 01: VERANO DE 2023, EL REY DEL TOTTENHAM Y EL VENENO DEL CONFORT
 * Global Frames: 0 -> 642 (0.00s -> 21.40s | 642 frames = 21.40s)
 * - Fase A (f0 - f233 | 0.00s - 7.78s): "En el verano de 2023, con 30 años cumplidos, Harry Kane tomó la decisión más arriesgada de su carrera."
 * - Fase B (f233 - f521 | 7.78s - 17.38s): "Podía haberse quedado en el Tottenham. Era el ídolo intocable, el capitán, el rey del club. Tenía un contrato multimillonario garantizado de por vida."
 * - Fase C (f521 - f642 | 17.38s - 21.40s): "Pero el confort es el veneno más sutil de la ambición."
 */
export const Shot01ComfortZoneKing: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const entrance = spring({
    frame,
    fps,
    config: { damping: 18, mass: 0.9 },
  });

  const isPhaseC = frame >= 521;
  const isPhaseB = frame >= 233 && frame < 521;

  return (
    <AbsoluteFill style={{ width: 3840, height: 2160, overflow: "hidden", backgroundColor: "#07080B" }}>
      {/* 🎬 FASE A (f0 - f233 | 0.00s - 7.78s): "En el verano de 2023, con 30 años cumplidos, Harry Kane tomó la decisión más arriesgada de su carrera." */}
      <Sequence from={0} durationInFrames={233}>
        <div style={{ position: "absolute", inset: 0, overflow: "hidden" }}>
          <Video
            src={staticFile("b3_01_spurs_breakthrough.mp4")}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              filter: "contrast(1.25) brightness(0.55) saturate(1.1)",
              transform: `scale(${interpolate(frame, [0, 233], [1.0, 1.07], { extrapolateRight: "clamp" })})`,
            }}
            muted
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(90deg, rgba(7,8,11,0.92) 0%, rgba(7,8,11,0.45) 55%, rgba(7,8,11,0.88) 100%)",
            }}
          />
          <div
            style={{
              position: "absolute",
              bottom: -30,
              right: 220,
              height: 1620,
              transform: `scale(${interpolate(frame, [0, 233], [1.0, 1.04], { extrapolateRight: "clamp" })})`,
            }}
          >
            <Img
              src={staticFile("harry_kane_spurs_cutout.png")}
              style={{
                height: "100%",
                width: "auto",
                objectFit: "contain",
                filter: "drop-shadow(0 30px 70px rgba(0,0,0,0.95))",
              }}
            />
          </div>
        </div>
      </Sequence>

      {/* 🎬 FASE B (f233 - f521 | 7.78s - 17.38s): "Podía haberse quedado en el Tottenham. Era el ídolo intocable, el capitán, el rey del club..." */}
      <Sequence from={233} durationInFrames={288}>
        <div style={{ position: "absolute", inset: 0, overflow: "hidden" }}>
          <Img
            src={staticFile("kane_premier_golden_boot.png")}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              filter: "contrast(1.22) brightness(0.55) saturate(1.08)",
              transform: `scale(${interpolate(frame, [233, 521], [1.0, 1.07], { extrapolateRight: "clamp" })})`,
            }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(180deg, rgba(7,8,11,0.85) 0%, rgba(7,8,11,0.35) 50%, rgba(7,8,11,0.94) 100%)",
            }}
          />

          {/* Tarjetas de estatus en Tottenham */}
          <div
            style={{
              position: "absolute",
              bottom: 300,
              left: 180,
              display: "flex",
              gap: 44,
              zIndex: 25,
            }}
          >
            <div
              style={{
                padding: "36px 52px",
                backgroundColor: "rgba(18, 21, 30, 0.92)",
                border: "2px solid rgba(56, 189, 248, 0.75)",
                borderRadius: 24,
                backdropFilter: "blur(20px)",
                boxShadow: "0 25px 70px rgba(0,0,0,0.85)",
              }}
            >
              <div style={{ fontSize: 22, fontWeight: 800, color: "#38BDF8", letterSpacing: 4 }}>
                ESTATUS EN LONDRES · 2023
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
                CAPITÁN & REY DEL CLUB
              </div>
              <div style={{ fontSize: 24, fontWeight: 700, color: "#94A3B8", marginTop: 6 }}>
                280 Goles · Máximo Ídolo Histórico de los Spurs
              </div>
            </div>

            <div
              style={{
                padding: "36px 52px",
                backgroundColor: "rgba(18, 21, 30, 0.92)",
                border: "2px solid rgba(245, 197, 24, 0.75)",
                borderRadius: 24,
                backdropFilter: "blur(20px)",
                boxShadow: "0 25px 70px rgba(0,0,0,0.85)",
              }}
            >
              <div style={{ fontSize: 22, fontWeight: 800, color: "#F5C518", letterSpacing: 4 }}>
                ZONA DE CONFORT
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
                CONTRATO DE POR VIDA
              </div>
              <div style={{ fontSize: 24, fontWeight: 700, color: "#94A3B8", marginTop: 6 }}>
                Fortuna multimillonaria garantizada sin arriesgar nada
              </div>
            </div>
          </div>
        </div>
      </Sequence>

      {/* 🎬 FASE C (f521 - f642 | 17.38s - 21.40s): "Pero el confort es el veneno más sutil de la ambición." */}
      <Sequence from={521} durationInFrames={121}>
        <div style={{ position: "absolute", inset: 0, overflow: "hidden" }}>
          <Img
            src={staticFile("estadio_lluvia_nocturna_focos.jpg")}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              filter: "contrast(1.35) brightness(0.42) saturate(0.8)",
              transform: `scale(${interpolate(frame, [521, 642], [1.02, 1.07], { extrapolateRight: "clamp" })})`,
            }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "radial-gradient(circle at center, rgba(239, 68, 68, 0.22) 0%, rgba(7, 8, 11, 0.94) 80%)",
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
                padding: "56px 96px",
                backgroundColor: "rgba(18, 21, 30, 0.94)",
                border: "3px solid #EF4444",
                borderRadius: 28,
                boxShadow: "0 35px 90px rgba(0,0,0,0.95), 0 0 60px rgba(239, 68, 68, 0.35)",
                textAlign: "center",
              }}
            >
              <div style={{ fontSize: 26, fontWeight: 900, color: "#EF4444", letterSpacing: 6 }}>
                LEY DE LA GRANDEZA · MDC
              </div>
              <div
                style={{
                  fontSize: 78,
                  fontWeight: 950,
                  color: "#FFFFFF",
                  fontFamily: "Cabinet Grotesk, Montserrat, sans-serif",
                  marginTop: 16,
                  letterSpacing: 1,
                }}
              >
                “EL CONFORT ES EL VENENO DE LA AMBICIÓN”
              </div>
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
                ? "rgba(56, 189, 248, 0.75)"
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
              backgroundColor: isPhaseC ? "#EF4444" : isPhaseB ? "#38BDF8" : "#F5C518",
              boxShadow: `0 0 14px ${isPhaseC ? "#EF4444" : isPhaseB ? "#38BDF8" : "#F5C518"}`,
            }}
          />
          <span
            style={{
              fontFamily: "Cabinet Grotesk, Montserrat, sans-serif",
              fontSize: 24,
              fontWeight: 900,
              letterSpacing: 4,
              color: isPhaseC ? "#EF4444" : isPhaseB ? "#38BDF8" : "#F5C518",
              textTransform: "uppercase",
            }}
          >
            {isPhaseC
              ? "EXPEDIENTE MDC · FILOSOFÍA DEL TITÁN // ZONA DE CONFORT"
              : isPhaseB
              ? "EXPEDIENTE MDC · LONDRES 2023 // EL REINO SEGURO"
              : "EXPEDIENTE MDC · VERANO DE 2023 // 30 AÑOS CUMPLIDOS"}
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
              text="EL CONFORT ES EL VENENO DE LA AMBICIÓN"
              startFrame={522}
              durationInFrames={32}
              currentFrame={frame}
              cursorColor="#EF4444"
            />
          ) : isPhaseB ? (
            <TypewriterText
              text="EL ÍDOLO INTOCABLE · REY DEL TOTTENHAM"
              startFrame={234}
              durationInFrames={34}
              currentFrame={frame}
              cursorColor="#38BDF8"
            />
          ) : (
            <TypewriterText
              text="LA DECISIÓN MÁS ARRIESGADA DE SU CARRERA"
              startFrame={2}
              durationInFrames={36}
              currentFrame={frame}
              cursorColor="#F5C518"
            />
          )}
        </h1>
      </div>
    </AbsoluteFill>
  );
};
