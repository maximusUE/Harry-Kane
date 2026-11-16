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
 * 🎬 SHOT 06: TU PARTIDO APENAS EMPIEZA (15 AÑOS EN LA OSCURIDAD)
 * Global Frames: 2402 -> 2709 (80.07s -> 90.29s | 307 frames = 10.23s)
 * - Fase A (f0 - f152 | 80.07s - 85.15s): "Harry Kane esperó quince años en la oscuridad para vivir su noche en París."
 * - Fase B (f152 - f307 | 85.15s - 90.29s): "Tu partido no ha terminado. Tu historia apenas está empezando en este minuto."
 */
export const Shot06TuHistoriaEmpieza: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const entrance = spring({
    frame,
    fps,
    config: { damping: 18, mass: 0.9 },
  });

  const isPhaseB = frame >= 152;

  return (
    <AbsoluteFill style={{ width: 3840, height: 2160, overflow: "hidden", backgroundColor: "#07080B" }}>
      {/* 🎬 FASE A (f0 - f152 | 80.07s - 85.15s): Kane besando el Balón de Oro / 15 Años en la Oscuridad */}
      <Sequence from={0} durationInFrames={152}>
        <div style={{ position: "absolute", inset: 0, overflow: "hidden" }}>
          <Img
            src={staticFile("kane_titan_01_kiss_ballondor.jpg")}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              filter: "contrast(1.25) brightness(0.55) saturate(1.1)",
              transform: `scale(${interpolate(frame, [0, 152], [1.0, 1.06], { extrapolateRight: "clamp" })})`,
            }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(90deg, rgba(7,8,11,0.92) 0%, rgba(7,8,11,0.4) 55%, rgba(7,8,11,0.9) 100%)",
            }}
          />

          <div
            style={{
              position: "absolute",
              bottom: 280,
              left: 180,
              padding: "40px 56px",
              backgroundColor: "rgba(18, 21, 30, 0.92)",
              border: "2px solid rgba(245, 197, 24, 0.8)",
              borderRadius: 24,
              backdropFilter: "blur(20px)",
              boxShadow: "0 25px 70px rgba(0,0,0,0.9)",
              zIndex: 25,
            }}
          >
            <div style={{ fontSize: 22, fontWeight: 800, color: "#F5C518", letterSpacing: 4 }}>
              LA PRUEBA DEL TIEMPO
            </div>
            <div
              style={{
                fontSize: 72,
                fontWeight: 950,
                color: "#FFFFFF",
                fontFamily: "Cabinet Grotesk, Montserrat, sans-serif",
                marginTop: 10,
              }}
            >
              15 AÑOS EN LA OSCURIDAD
            </div>
            <div style={{ fontSize: 24, color: "#94A3B8", marginTop: 8 }}>
              Para vivir una sola noche de consagración absoluta
            </div>
          </div>
        </div>
      </Sequence>

      {/* 🎬 FASE B (f152 - f307 | 85.15s - 90.29s): "Tu partido no ha terminado. Tu historia apenas está empezando..." */}
      <Sequence from={152} durationInFrames={155}>
        <div style={{ position: "absolute", inset: 0, overflow: "hidden" }}>
          <Img
            src={staticFile("mdc_stadium_bg.jpg")}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              filter: "contrast(1.3) brightness(0.5) saturate(1.1)",
              transform: `scale(${interpolate(frame, [152, 307], [1.0, 1.06], { extrapolateRight: "clamp" })})`,
            }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "radial-gradient(circle at center, rgba(56, 189, 248, 0.22) 0%, rgba(7, 8, 11, 0.94) 80%)",
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
              zIndex: 25,
            }}
          >
            <div
              style={{
                padding: "60px 100px",
                backgroundColor: "rgba(18, 21, 30, 0.94)",
                border: "3px solid #38BDF8",
                borderRadius: 32,
                boxShadow: "0 35px 90px rgba(0,0,0,0.95), 0 0 60px rgba(56, 189, 248, 0.35)",
                textAlign: "center",
              }}
            >
              <div style={{ fontSize: 24, fontWeight: 900, color: "#38BDF8", letterSpacing: 6 }}>
                SENTENCIA FINAL · MDC
              </div>
              <div
                style={{
                  fontSize: 84,
                  fontWeight: 950,
                  color: "#FFFFFF",
                  fontFamily: "Cabinet Grotesk, Montserrat, sans-serif",
                  marginTop: 18,
                  lineHeight: 1.15,
                }}
              >
                “TU PARTIDO NO HA TERMINADO”
              </div>
              <div style={{ fontSize: 32, color: "#94A3B8", marginTop: 16, fontWeight: 600 }}>
                Tu historia apenas está empezando en este minuto
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
            border: `1.5px solid ${isPhaseB ? "rgba(56, 189, 248, 0.75)" : "rgba(245, 197, 24, 0.75)"}`,
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
              backgroundColor: isPhaseB ? "#38BDF8" : "#F5C518",
              boxShadow: `0 0 14px ${isPhaseB ? "#38BDF8" : "#F5C518"}`,
            }}
          />
          <span
            style={{
              fontFamily: "Cabinet Grotesk, Montserrat, sans-serif",
              fontSize: 24,
              fontWeight: 900,
              letterSpacing: 4,
              color: isPhaseB ? "#38BDF8" : "#F5C518",
              textTransform: "uppercase",
            }}
          >
            {isPhaseB
              ? "EXPEDIENTE MDC · EL DESPERTAR DEL TITÁN // EL INICIO"
              : "EXPEDIENTE MDC · 15 AÑOS DE ESPERA // NOCHE EN PARÍS"}
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
          {isPhaseB ? (
            <TypewriterText
              text="TU HISTORIA APENAS ESTÁ EMPEZANDO"
              startFrame={153}
              durationInFrames={32}
              currentFrame={frame}
              cursorColor="#38BDF8"
            />
          ) : (
            <TypewriterText
              text="15 AÑOS EN LA OSCURIDAD"
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

