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
 * 🎬 SHOT 05: EL GUION MÁS CRUEL Y LA LECCIÓN DE CERO PRETEXTOS
 * Global Frames: 1946 -> 2512 (64.86s -> 83.74s | 566 frames = 18.88s)
 * - Fase A (f0 - f231 | 64.86s - 72.56s): "Si un guionista de cine hubiera querido quebrar psicológicamente a un personaje, no habría escrito un guión más cruel."
 * - Fase B (f231 - f356 | 72.56s - 76.74s): "Pero aquí está la gran lección: mientras la prensa se reía,"
 * - Fase C (f356 - f566 | 76.74s - 83.74s): "Kane no dio una sola conferencia de prensa para poner pretextos. No culpó a sus compañeros (f467). No culpó al entrenador (f517)."
 */
export const Shot05ZeroExcusesSilence: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const entrance = spring({
    frame,
    fps,
    config: { damping: 18, mass: 0.9 },
  });

  const card1 = spring({
    frame: Math.max(0, frame - 356),
    fps,
    config: { damping: 15, stiffness: 180 },
  });

  const card2 = spring({
    frame: Math.max(0, frame - 467),
    fps,
    config: { damping: 15, stiffness: 180 },
  });

  const card3 = spring({
    frame: Math.max(0, frame - 517),
    fps,
    config: { damping: 15, stiffness: 180 },
  });

  const isPhaseC = frame >= 356;
  const isPhaseB = frame >= 231 && frame < 356;

  return (
    <AbsoluteFill style={{ width: 3840, height: 2160, overflow: "hidden", backgroundColor: "#07080B" }}>
      {/* 🎬 FASE A (f0 - f231 | 64.86s - 72.56s): "Si un guionista de cine hubiera querido quebrar psicológicamente..." */}
      <Sequence from={0} durationInFrames={231}>
        <div style={{ position: "absolute", inset: 0, overflow: "hidden" }}>
          <Img
            src={staticFile("tunel_vestuarios_silueta_derrota.jpg")}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              filter: "contrast(1.3) brightness(0.45) saturate(0.75)",
              transform: `scale(${interpolate(frame, [0, 231], [1.0, 1.07], { extrapolateRight: "clamp" })})`,
            }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(90deg, rgba(7,8,11,0.94) 0%, rgba(7,8,11,0.6) 55%, rgba(7,8,11,0.92) 100%)",
            }}
          />
          <div
            style={{
              position: "absolute",
              bottom: -40,
              right: 220,
              height: 1580,
              transform: `scale(${interpolate(frame, [0, 231], [1.0, 1.04], { extrapolateRight: "clamp" })})`,
            }}
          >
            <Img
              src={staticFile("harry_kane_despair_cutout.png")}
              style={{
                height: "100%",
                width: "auto",
                objectFit: "contain",
                filter: "drop-shadow(0 30px 80px rgba(0,0,0,0.95)) contrast(1.15)",
              }}
            />
          </div>
        </div>
      </Sequence>

      {/* 🎬 FASE B (f231 - f356 | 72.56s - 76.74s): "Pero aquí está la gran lección: mientras la prensa se reía," */}
      <Sequence from={231} durationInFrames={125}>
        <div style={{ position: "absolute", inset: 0, overflow: "hidden" }}>
          <Img
            src={staticFile("hombre_resiliencia_ventana_lluvia.jpg")}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              filter: "contrast(1.28) brightness(0.55) saturate(0.9)",
              transform: `scale(${interpolate(frame, [231, 356], [1.0, 1.06], { extrapolateRight: "clamp" })})`,
            }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(180deg, rgba(7,8,11,0.88) 0%, rgba(7,8,11,0.45) 45%, rgba(7,8,11,0.92) 100%)",
            }}
          />
        </div>
      </Sequence>

      {/* 🎬 FASE C (f356 - f566 | 76.74s - 83.74s): "Kane no dio una sola conferencia... No culpó a sus compañeros. No culpó al entrenador." */}
      <Sequence from={356} durationInFrames={210}>
        <div style={{ position: "absolute", inset: 0, overflow: "hidden" }}>
          <Img
            src={staticFile("estadio_lluvia_nocturna_focos.jpg")}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              filter: "contrast(1.3) brightness(0.38) saturate(0.8)",
              transform: `scale(${interpolate(frame, [356, 566], [1.0, 1.06], { extrapolateRight: "clamp" })})`,
            }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "radial-gradient(circle at 50% 60%, rgba(18,21,30,0.45) 0%, rgba(7,8,11,0.94) 85%)",
            }}
          />

          {/* 📊 3 TARJETAS ESTOICAS SINCRONIZADAS A CADA FRASE HABLADA */}
          <div
            style={{
              position: "absolute",
              bottom: 290,
              left: 180,
              right: 180,
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 44,
              zIndex: 26,
            }}
          >
            {/* Card 1: 76.74s (local f356) */}
            <div
              style={{
                padding: "44px 48px",
                backgroundColor: "rgba(18, 21, 30, 0.92)",
                border: "2px solid rgba(245, 197, 24, 0.7)",
                borderRadius: 24,
                backdropFilter: "blur(20px)",
                boxShadow: "0 25px 70px rgba(0,0,0,0.85), 0 0 35px rgba(245, 197, 24, 0.2)",
                opacity: card1,
                transform: `translateY(${(1 - card1) * 40}px) scale(${0.94 + card1 * 0.06})`,
              }}
            >
              <div style={{ fontSize: 22, fontWeight: 800, color: "#F5C518", letterSpacing: 4 }}>
                CÓDIGO ESTOICO #01
              </div>
              <div
                style={{
                  fontSize: 48,
                  fontWeight: 950,
                  color: "#FFFFFF",
                  marginTop: 14,
                  lineHeight: 1.15,
                  fontFamily: "Cabinet Grotesk, Montserrat, sans-serif",
                }}
              >
                0 CONFERENCIAS DE PRETEXTOS
              </div>
              <div style={{ fontSize: 24, color: "#94A3B8", marginTop: 12, fontWeight: 600 }}>
                Silencio absoluto ante la prensa europea
              </div>
            </div>

            {/* Card 2: 80.42s (local f467) */}
            <div
              style={{
                padding: "44px 48px",
                backgroundColor: "rgba(18, 21, 30, 0.92)",
                border: "2px solid rgba(56, 189, 248, 0.7)",
                borderRadius: 24,
                backdropFilter: "blur(20px)",
                boxShadow: "0 25px 70px rgba(0,0,0,0.85), 0 0 35px rgba(56, 189, 248, 0.2)",
                opacity: frame >= 467 ? card2 : 0,
                transform: `translateY(${(1 - card2) * 40}px) scale(${0.94 + card2 * 0.06})`,
              }}
            >
              <div style={{ fontSize: 22, fontWeight: 800, color: "#38BDF8", letterSpacing: 4 }}>
                CÓDIGO ESTOICO #02
              </div>
              <div
                style={{
                  fontSize: 48,
                  fontWeight: 950,
                  color: "#FFFFFF",
                  marginTop: 14,
                  lineHeight: 1.15,
                  fontFamily: "Cabinet Grotesk, Montserrat, sans-serif",
                }}
              >
                NO CULPÓ A SUS COMPAÑEROS
              </div>
              <div style={{ fontSize: 24, color: "#94A3B8", marginTop: 12, fontWeight: 600 }}>
                Liderazgo de vestuario sin señalar a nadie
              </div>
            </div>

            {/* Card 3: 82.10s (local f517) */}
            <div
              style={{
                padding: "44px 48px",
                backgroundColor: "rgba(18, 21, 30, 0.92)",
                border: "2px solid rgba(16, 185, 129, 0.75)",
                borderRadius: 24,
                backdropFilter: "blur(20px)",
                boxShadow: "0 25px 70px rgba(0,0,0,0.85), 0 0 35px rgba(16, 185, 129, 0.25)",
                opacity: frame >= 517 ? card3 : 0,
                transform: `translateY(${(1 - card3) * 40}px) scale(${0.94 + card3 * 0.06})`,
              }}
            >
              <div style={{ fontSize: 22, fontWeight: 800, color: "#10B981", letterSpacing: 4 }}>
                CÓDIGO ESTOICO #03
              </div>
              <div
                style={{
                  fontSize: 48,
                  fontWeight: 950,
                  color: "#FFFFFF",
                  marginTop: 14,
                  lineHeight: 1.15,
                  fontFamily: "Cabinet Grotesk, Montserrat, sans-serif",
                }}
              >
                NO CULPÓ AL ENTRENADOR
              </div>
              <div style={{ fontSize: 24, color: "#94A3B8", marginTop: 12, fontWeight: 600 }}>
                Responsabilidad extrema sobre sus hombros
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
                ? "rgba(16, 185, 129, 0.7)"
                : isPhaseB
                ? "rgba(245, 197, 24, 0.7)"
                : "rgba(239, 68, 68, 0.7)"
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
              backgroundColor: isPhaseC ? "#10B981" : isPhaseB ? "#F5C518" : "#EF4444",
              boxShadow: `0 0 14px ${isPhaseC ? "#10B981" : isPhaseB ? "#F5C518" : "#EF4444"}`,
            }}
          />
          <span
            style={{
              fontFamily: "Cabinet Grotesk, Montserrat, sans-serif",
              fontSize: 24,
              fontWeight: 900,
              letterSpacing: 4,
              color: isPhaseC ? "#10B981" : isPhaseB ? "#F5C518" : "#EF4444",
              textTransform: "uppercase",
            }}
          >
            {isPhaseC
              ? "EXPEDIENTE MDC · CÓDIGO DE HIERRO // RESPONSABILIDAD EXTREMA"
              : isPhaseB
              ? "EXPEDIENTE MDC · PUNTO DE QUIEBRE // LA RESPUESTA DEL LÍDER"
              : "EXPEDIENTE MDC · PRUEBA PSICOLÓGICA // EL LÍMITE HUMANO"}
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
              text="CERO PRETEXTOS. CERO EXCUSAS."
              startFrame={357}
              durationInFrames={30}
              currentFrame={frame}
              cursorColor="#10B981"
            />
          ) : isPhaseB ? (
            <TypewriterText
              text="AQUÍ ESTÁ LA GRAN LECCIÓN DE GRANDEZA"
              startFrame={232}
              durationInFrames={32}
              currentFrame={frame}
              cursorColor="#F5C518"
            />
          ) : (
            <TypewriterText
              text="EL GUION MÁS CRUEL PARA QUEBRAR A UN HOMBRE"
              startFrame={2}
              durationInFrames={36}
              currentFrame={frame}
              cursorColor="#EF4444"
            />
          )}
        </h1>
      </div>
    </AbsoluteFill>
  );
};

