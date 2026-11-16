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
 * 🎬 SHOT 02: LA APUESTA DE MÚNICH Y LA FÓRMULA MATEMÁTICA DE LOS 11 AÑOS
 * Global Frames: 642 -> 1042 (21.40s -> 34.72s | 400 frames = 13.33s)
 * - Fase A (f0 - f217 | 21.40s - 28.62s): "Kane lo dejó todo y firmó por el Bayern Múnich, un club que había ganado la Bundesliga durante 11 años seguidos."
 * - Fase B (f217 - f400 | 28.62s - 34.72s): "Parecía una fórmula matemática perfecta: Llego a Alemania y gano mi primer trofeo en seis meses."
 */
export const Shot02BayernFormula11Years: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const entrance = spring({
    frame,
    fps,
    config: { damping: 18, mass: 0.9 },
  });

  const formulaEntrance = spring({
    frame: Math.max(0, frame - 217),
    fps,
    config: { damping: 16, mass: 0.85 },
  });

  return (
    <AbsoluteFill style={{ width: 3840, height: 2160, overflow: "hidden", backgroundColor: "#07080B" }}>
      {/* 🎬 FASE A (f0 - f217 | 21.40s - 28.62s): Titular The Athletic + 11 Años Seguidos Campeón */}
      <Sequence from={0} durationInFrames={217}>
        <div style={{ position: "absolute", inset: 0, overflow: "hidden" }}>
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "radial-gradient(circle at center, #1E1318 0%, #07080B 85%)",
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
                border: "2px solid rgba(245, 197, 24, 0.45)",
                boxShadow: "0 35px 90px rgba(0,0,0,0.95), 0 0 45px rgba(245, 197, 24, 0.22)",
                transform: `scale(${interpolate(frame, [0, 217], [1.0, 1.045], { extrapolateRight: "clamp" })})`,
              }}
            >
              <Img
                src={staticFile("titular_athletic_bayern_transfer_2023.png")}
                style={{ width: "100%", height: "auto", display: "block" }}
              />
            </div>
          </div>
        </div>
      </Sequence>

      {/* 🎬 FASE B (f217 - f400 | 28.62s - 34.72s): La Fórmula Matemática Perfecta (11 Bundesligas -> Trofeo en 6 meses) */}
      <Sequence from={217} durationInFrames={183}>
        <div style={{ position: "absolute", inset: 0, overflow: "hidden" }}>
          <Img
            src={staticFile("estadio_lluvia_nocturna_focos.jpg")}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              filter: "contrast(1.25) brightness(0.45)",
              transform: `scale(${interpolate(frame, [217, 400], [1.01, 1.06], { extrapolateRight: "clamp" })})`,
            }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(135deg, rgba(7,8,11,0.94) 0%, rgba(18,21,30,0.75) 50%, rgba(7,8,11,0.95) 100%)",
            }}
          />

          {/* Panel de Ecuación Matemática Bayern */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              paddingTop: 80,
              zIndex: 20,
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 44,
                opacity: formulaEntrance,
                transform: `translateY(${(1 - formulaEntrance) * 40}px)`,
              }}
            >
              {/* Bloque 1: 11 Años Seguidos */}
              <div
                style={{
                  width: 820,
                  padding: "48px 54px",
                  borderRadius: 28,
                  backgroundColor: "rgba(18, 21, 30, 0.92)",
                  border: "2px solid rgba(245, 197, 24, 0.55)",
                  boxShadow: "0 30px 70px rgba(0,0,0,0.9)",
                  textAlign: "center",
                }}
              >
                <div style={{ fontSize: 22, color: "rgba(255,255,255,0.65)", fontWeight: 800, letterSpacing: 3 }}>
                  HEGEMONÍA BUNDESLIGA (2013-2023)
                </div>
                <div
                  style={{
                    fontSize: 112,
                    fontWeight: 950,
                    color: "#F5C518",
                    marginTop: 12,
                    fontFamily: "Cabinet Grotesk, Montserrat, sans-serif",
                  }}
                >
                  11 AÑOS
                </div>
                <div style={{ fontSize: 28, color: "#FFFFFF", fontWeight: 800, marginTop: 8 }}>
                  CAMPEÓN ININTERRUMPIDO
                </div>
              </div>

              <div style={{ fontSize: 96, fontWeight: 950, color: "#F5C518" }}>+</div>

              {/* Bloque 2: Goleador de Élite */}
              <div
                style={{
                  width: 820,
                  padding: "48px 54px",
                  borderRadius: 28,
                  backgroundColor: "rgba(18, 21, 30, 0.92)",
                  border: "2px solid rgba(56, 189, 248, 0.55)",
                  boxShadow: "0 30px 70px rgba(0,0,0,0.9)",
                  textAlign: "center",
                }}
              >
                <div style={{ fontSize: 22, color: "rgba(255,255,255,0.65)", fontWeight: 800, letterSpacing: 3 }}>
                  EL MEJOR NUEVE DEL PLANETA
                </div>
                <div
                  style={{
                    fontSize: 112,
                    fontWeight: 950,
                    color: "#38BDF8",
                    marginTop: 12,
                    fontFamily: "Cabinet Grotesk, Montserrat, sans-serif",
                  }}
                >
                  €100M
                </div>
                <div style={{ fontSize: 28, color: "#FFFFFF", fontWeight: 800, marginTop: 8 }}>
                  LLEGA AL GIGANTE BÁVARO
                </div>
              </div>

              <div style={{ fontSize: 96, fontWeight: 950, color: "#F5C518" }}>=</div>

              {/* Bloque 3: Trofeo en 6 Meses */}
              <div
                style={{
                  width: 860,
                  padding: "48px 54px",
                  borderRadius: 28,
                  backgroundColor: "rgba(18, 21, 30, 0.95)",
                  border: "2.5px solid #10B981",
                  boxShadow: "0 30px 80px rgba(0,0,0,0.95), 0 0 45px rgba(16, 185, 129, 0.3)",
                  textAlign: "center",
                }}
              >
                <div style={{ fontSize: 22, color: "#10B981", fontWeight: 900, letterSpacing: 3 }}>
                  ECUACIÓN TEÓRICA PERFECTA
                </div>
                <div
                  style={{
                    fontSize: 96,
                    fontWeight: 950,
                    color: "#FFFFFF",
                    marginTop: 16,
                    fontFamily: "Cabinet Grotesk, Montserrat, sans-serif",
                  }}
                >
                  6 MESES
                </div>
                <div style={{ fontSize: 28, color: "#10B981", fontWeight: 900, marginTop: 8 }}>
                  PRIMER TROFEO GARANTIZADO
                </div>
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
            border: "1.5px solid rgba(245, 197, 24, 0.65)",
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
            {frame < 217
              ? "EXPEDIENTE MDC · MÚNICH 2023 // HEGEMONÍA DE 11 AÑOS"
              : "EXPEDIENTE MDC · CÁLCULO DE PROBABILIDAD // 99.9% ÉXITO"}
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
            textShadow: "0 10px 40px rgba(0,0,0,0.95), 0 0 50px rgba(245,197,24,0.3)",
          }}
        >
          {frame < 217 ? (
            <TypewriterText
              text="BAYERN MÚNICH: 11 BUNDESLIGAS SEGUIDAS"
              startFrame={2}
              durationInFrames={34}
              currentFrame={frame}
              cursorColor="#F5C518"
            />
          ) : (
            <TypewriterText
              text="LA FÓRMULA MATEMÁTICA PERFECTA"
              startFrame={218}
              durationInFrames={32}
              currentFrame={frame}
              cursorColor="#10B981"
            />
          )}
        </h1>
      </div>

      {/* 📊 BADGE INFERIOR SINCRONIZADO AL AUDIO */}
      <div
        style={{
          position: "absolute",
          bottom: 160,
          left: 180,
          maxWidth: 1550,
          background: "rgba(18, 21, 30, 0.92)",
          border: "1.5px solid rgba(245, 197, 24, 0.45)",
          backdropFilter: "blur(18px)",
          borderRadius: 20,
          padding: "24px 38px",
          display: "flex",
          alignItems: "center",
          gap: 32,
          boxShadow: "0 20px 50px rgba(0,0,0,0.85)",
          zIndex: 30,
        }}
      >
        <div
          style={{
            width: 6,
            height: 60,
            backgroundColor: frame < 217 ? "#F5C518" : "#10B981",
            borderRadius: 3,
            boxShadow: `0 0 12px ${frame < 217 ? "#F5C518" : "#10B981"}`,
          }}
        />
        <div>
          <div style={{ fontSize: 18, color: "rgba(255,255,255,0.65)", fontWeight: 700, letterSpacing: 2 }}>
            {frame < 217 ? "TRASPASO RÉCORD · FC BAYERN MÜNCHEN" : "LA PROMESA ALEMANA"}
          </div>
          <div style={{ fontSize: 30, color: "#FFFFFF", fontWeight: 700, marginTop: 4, lineHeight: 1.35 }}>
            {frame < 217
              ? "Deja atrás toda su vida en Inglaterra para fichar por el campeón invencible de Alemania."
              : "“Llego a Alemania y gano mi primer trofeo en seis meses.”"}
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};

