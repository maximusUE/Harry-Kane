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
 * 🎬 SHOT 01: EL BALÓN DE ORO EN PARÍS Y EL APLAUSO DE LAS LEYENDAS
 * Global Frames: 0 -> 480 (0.00s -> 16.00s | 480 frames = 16.00s)
 * - Fase A (f0 - f299 | 0.00s - 9.98s): "Por eso hoy, cuando el mundo lo vio levantar el Balón de Oro 2026 en París, el aplauso no fue para un simple delantero que metió muchos goles."
 * - Fase B (f299 - f480 | 9.98s - 16.00s): "El aplauso de pie de las leyendas fue para un hombre que se negó a ser una víctima de su destino."
 */
export const Shot01BallonDorParis: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const entrance = spring({
    frame,
    fps,
    config: { damping: 18, mass: 0.9 },
  });

  const isPhaseB = frame >= 299;

  return (
    <AbsoluteFill style={{ width: 3840, height: 2160, overflow: "hidden", backgroundColor: "#07080B" }}>
      {/* 🎬 FASE A (f0 - f299 | 0.00s - 9.98s): Titular de Prensa Oficial "FRANCE FOOTBALL" */}
      <Sequence from={0} durationInFrames={299}>
        <div style={{ position: "absolute", inset: 0, overflow: "hidden" }}>
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "radial-gradient(circle at center, #2E2410 0%, #07080B 85%)",
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
                transform: `scale(${interpolate(frame, [0, 299], [1.0, 1.045], { extrapolateRight: "clamp" })})`,
              }}
            >
              <Img
                src={staticFile("titular_france_football_ballon_dor_2026.png")}
                style={{ width: "100%", height: "auto", display: "block" }}
              />
            </div>
          </div>
        </div>
      </Sequence>

      {/* 🎬 FASE B (f299 - f480 | 9.98s - 16.00s): "El aplauso de pie de las leyendas fue para un hombre que se negó a ser una víctima..." */}
      <Sequence from={299} durationInFrames={181}>
        <div style={{ position: "absolute", inset: 0, overflow: "hidden" }}>
          <Img
            src={staticFile("kane_titan_01_kiss_ballondor.jpg")}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              filter: "contrast(1.25) brightness(0.55) saturate(1.1)",
              transform: `scale(${interpolate(frame, [299, 480], [1.0, 1.07], { extrapolateRight: "clamp" })})`,
            }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(90deg, rgba(7,8,11,0.94) 0%, rgba(7,8,11,0.45) 55%, rgba(7,8,11,0.9) 100%)",
            }}
          />

          <div
            style={{
              position: "absolute",
              bottom: 280,
              left: 180,
              display: "flex",
              gap: 44,
              zIndex: 25,
            }}
          >
            <div
              style={{
                padding: "38px 56px",
                backgroundColor: "rgba(18, 21, 30, 0.92)",
                border: "2px solid rgba(245, 197, 24, 0.8)",
                borderRadius: 24,
                backdropFilter: "blur(20px)",
                boxShadow: "0 25px 70px rgba(0,0,0,0.9)",
              }}
            >
              <div style={{ fontSize: 22, fontWeight: 800, color: "#F5C518", letterSpacing: 4 }}>
                THÉÂTRE DU CHÂTELET · PARÍS
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
                EL TRIBUTO DE LAS LEYENDAS
              </div>
              <div style={{ fontSize: 24, fontWeight: 700, color: "#94A3B8", marginTop: 8 }}>
                Respeto unánime de los más grandes de la historia
              </div>
            </div>

            <div
              style={{
                padding: "38px 56px",
                backgroundColor: "rgba(18, 21, 30, 0.92)",
                border: "2px solid rgba(16, 185, 129, 0.75)",
                borderRadius: 24,
                backdropFilter: "blur(20px)",
                boxShadow: "0 25px 70px rgba(0,0,0,0.9)",
              }}
            >
              <div style={{ fontSize: 22, fontWeight: 800, color: "#10B981", letterSpacing: 4 }}>
                FILOSOFÍA INQUEBRANTABLE
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
                CERO PAPEL DE VÍCTIMA
              </div>
              <div style={{ fontSize: 24, fontWeight: 700, color: "#94A3B8", marginTop: 8 }}>
                15 años forjando el carácter en la sombra
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
            border: "1.5px solid rgba(245, 197, 24, 0.75)",
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
              ? "EXPEDIENTE MDC · HOMBRES DE HIERRO // EL TRIBUTO FINAL"
              : "EXPEDIENTE MDC · PARÍS 2026 // LA CIMA DEL MUNDO"}
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
              text="SE NEGÓ A SER VÍCTIMA DE SU DESTINO"
              startFrame={300}
              durationInFrames={32}
              currentFrame={frame}
              cursorColor="#10B981"
            />
          ) : (
            <TypewriterText
              text="EL BALÓN DE ORO EN PARÍS: 2026"
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

