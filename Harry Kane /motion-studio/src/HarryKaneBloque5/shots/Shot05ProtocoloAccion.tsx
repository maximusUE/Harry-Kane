import React from "react";
import {
  AbsoluteFill,
  interpolate,
  spring,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
  Img,
} from "remotion";
import { TypewriterText } from "../../components/TypewriterText";

/**
 * 🎬 SHOT 05: EL PROTOCOLO DE ACCIÓN INMEDIATA (3 MANDAMIENTOS)
 * Global Frames: 1799 -> 2402 (59.99s -> 80.07s | 603 frames = 20.08s)
 * - Fase A (f0 - f164 | 59.99s - 65.47s): "No me importa si hoy tienes 20 kilos de más: sal a caminar esta misma noche."
 * - Fase B (f164 - f389 | 65.47s - 72.97s): "No me importa si tu cuenta de banco está en números rojos: haz ese plan financiero hoy y recorta los gastos innecesarios."
 * - Fase C (f389 - f603 | 72.97s - 80.07s): "No me importa si tu cuerpo está lesionado: rehabilítate con disciplina milimétrica día tras día."
 */
export const Shot05ProtocoloAccion: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const entrance = spring({
    frame,
    fps,
    config: { damping: 18, mass: 0.9 },
  });

  const card1 = spring({
    frame,
    fps,
    config: { damping: 15, stiffness: 180 },
  });

  const card2 = spring({
    frame: Math.max(0, frame - 164),
    fps,
    config: { damping: 15, stiffness: 180 },
  });

  const card3 = spring({
    frame: Math.max(0, frame - 389),
    fps,
    config: { damping: 15, stiffness: 180 },
  });

  const isPhaseC = frame >= 389;
  const isPhaseB = frame >= 164 && frame < 389;

  return (
    <AbsoluteFill style={{ width: 3840, height: 2160, overflow: "hidden", backgroundColor: "#07080B" }}>
      <div style={{ position: "absolute", inset: 0, overflow: "hidden" }}>
        <Img
          src={staticFile("estadio_lluvia_nocturna_focos.jpg")}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            filter: "contrast(1.3) brightness(0.4) saturate(0.85)",
            transform: `scale(${interpolate(frame, [0, 603], [1.0, 1.07], { extrapolateRight: "clamp" })})`,
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(circle at center, rgba(18,21,30,0.5) 0%, rgba(7,8,11,0.95) 85%)",
          }}
        />

        {/* 📊 3 TARJETAS DEL PROTOCOLO DE ACCIÓN INMEDIATA */}
        <div
          style={{
            position: "absolute",
            bottom: 280,
            left: 180,
            right: 180,
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 44,
            zIndex: 25,
          }}
        >
          {/* Card 1: 20 Kilos de Más (59.99s) */}
          <div
            style={{
              padding: "48px 52px",
              backgroundColor: "rgba(18, 21, 30, 0.94)",
              border: "2.5px solid rgba(245, 197, 24, 0.8)",
              borderRadius: 26,
              backdropFilter: "blur(20px)",
              boxShadow: "0 25px 70px rgba(0,0,0,0.85)",
              opacity: card1,
              transform: `translateY(${(1 - card1) * 35}px)`,
            }}
          >
            <div style={{ fontSize: 20, fontWeight: 800, color: "#F5C518", letterSpacing: 4 }}>
              MANDAMIENTO #01 · FÍSICO
            </div>
            <div
              style={{
                fontSize: 48,
                fontWeight: 950,
                color: "#FFFFFF",
                fontFamily: "Cabinet Grotesk, Montserrat, sans-serif",
                marginTop: 14,
                lineHeight: 1.15,
              }}
            >
              ¿20 KILOS DE MÁS?
            </div>
            <div
              style={{
                fontSize: 28,
                color: "#F5C518",
                fontWeight: 800,
                marginTop: 14,
                letterSpacing: 1,
              }}
            >
              SAL A CAMINAR ESTA NOCHE
            </div>
            <div style={{ fontSize: 22, color: "#94A3B8", marginTop: 8 }}>
              Cero pretextos de gimnasio o equipo caro
            </div>
          </div>

          {/* Card 2: Cuenta en Números Rojos (65.47s) */}
          <div
            style={{
              padding: "48px 52px",
              backgroundColor: "rgba(18, 21, 30, 0.94)",
              border: "2.5px solid rgba(239, 68, 68, 0.8)",
              borderRadius: 26,
              backdropFilter: "blur(20px)",
              boxShadow: "0 25px 70px rgba(0,0,0,0.85)",
              opacity: isPhaseB || isPhaseC ? card2 : 0,
              transform: `translateY(${(1 - card2) * 35}px)`,
            }}
          >
            <div style={{ fontSize: 20, fontWeight: 800, color: "#EF4444", letterSpacing: 4 }}>
              MANDAMIENTO #02 · FINANZAS
            </div>
            <div
              style={{
                fontSize: 48,
                fontWeight: 950,
                color: "#FFFFFF",
                fontFamily: "Cabinet Grotesk, Montserrat, sans-serif",
                marginTop: 14,
                lineHeight: 1.15,
              }}
            >
              ¿NÚMEROS ROJOS?
            </div>
            <div
              style={{
                fontSize: 28,
                color: "#EF4444",
                fontWeight: 800,
                marginTop: 14,
                letterSpacing: 1,
              }}
            >
              PLAN FINANCIERO HOY
            </div>
            <div style={{ fontSize: 22, color: "#94A3B8", marginTop: 8 }}>
              Corta fugas y asume el control del dinero
            </div>
          </div>

          {/* Card 3: Cuerpo Lesionado (72.97s) */}
          <div
            style={{
              padding: "48px 52px",
              backgroundColor: "rgba(18, 21, 30, 0.94)",
              border: "2.5px solid rgba(56, 189, 248, 0.8)",
              borderRadius: 26,
              backdropFilter: "blur(20px)",
              boxShadow: "0 25px 70px rgba(0,0,0,0.85)",
              opacity: isPhaseC ? card3 : 0,
              transform: `translateY(${(1 - card3) * 35}px)`,
            }}
          >
            <div style={{ fontSize: 20, fontWeight: 800, color: "#38BDF8", letterSpacing: 4 }}>
              MANDAMIENTO #03 · SALUD
            </div>
            <div
              style={{
                fontSize: 48,
                fontWeight: 950,
                color: "#FFFFFF",
                fontFamily: "Cabinet Grotesk, Montserrat, sans-serif",
                marginTop: 14,
                lineHeight: 1.15,
              }}
            >
              ¿CUERPO LESIONADO?
            </div>
            <div
              style={{
                fontSize: 28,
                color: "#38BDF8",
                fontWeight: 800,
                marginTop: 14,
                letterSpacing: 1,
              }}
            >
              DISCIPLINA MILIMÉTRICA
            </div>
            <div style={{ fontSize: 22, color: "#94A3B8", marginTop: 8 }}>
              Rehabilítate día tras día sin rendirte
            </div>
          </div>
        </div>
      </div>

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
                ? "rgba(239, 68, 68, 0.75)"
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
              backgroundColor: isPhaseC ? "#38BDF8" : isPhaseB ? "#EF4444" : "#F5C518",
              boxShadow: `0 0 14px ${isPhaseC ? "#38BDF8" : isPhaseB ? "#EF4444" : "#F5C518"}`,
            }}
          />
          <span
            style={{
              fontFamily: "Cabinet Grotesk, Montserrat, sans-serif",
              fontSize: 24,
              fontWeight: 900,
              letterSpacing: 4,
              color: isPhaseC ? "#38BDF8" : isPhaseB ? "#EF4444" : "#F5C518",
              textTransform: "uppercase",
            }}
          >
            {isPhaseC
              ? "EXPEDIENTE MDC · RECUPERACIÓN TOTAL // DÍA TRAS DÍA"
              : isPhaseB
              ? "EXPEDIENTE MDC · CONTROL FINANCIERO // PLAN DE CHOQUE"
              : "EXPEDIENTE MDC · ACCIÓN INMEDIATA // ESTA MISMA NOCHE"}
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
              text="DISCIPLINA MILIMÉTRICA DÍA TRAS DÍA"
              startFrame={390}
              durationInFrames={32}
              currentFrame={frame}
              cursorColor="#38BDF8"
            />
          ) : isPhaseB ? (
            <TypewriterText
              text="HAZ ESE PLAN FINANCIERO HOY"
              startFrame={165}
              durationInFrames={30}
              currentFrame={frame}
              cursorColor="#EF4444"
            />
          ) : (
            <TypewriterText
              text="SAL A CAMINAR ESTA MISMA NOCHE"
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

