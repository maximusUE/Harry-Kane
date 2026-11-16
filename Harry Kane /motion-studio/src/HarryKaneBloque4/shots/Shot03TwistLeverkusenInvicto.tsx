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
  Img,
} from "remotion";
import { TypewriterText } from "../../components/TypewriterText";

/**
 * 🎬 SHOT 03: LA BOFETADA DEL DESTINO Y EL AÑO INVICTO DEL LEVERKUSEN
 * Global Frames: 1042 -> 1597 (34.72s -> 53.24s | 555 frames = 18.50s)
 * - Fase A (f0 - f147 | 34.72s - 39.62s): "Y entonces, la vida le asestó la bofetada más retorcida de su historia."
 * - Fase B (f147 - f373 | 39.62s - 47.14s): "En la primera temporada de Kane en Alemania, el Bayern no ganó absolutamente nada por primera vez en más de una década."
 * - Fase C (f373 - f555 | 47.14s - 53.24s): "El modesto Bayer Leverkusen firmó la temporada invicta más legendaria en la historia del país."
 */
export const Shot03TwistLeverkusenInvicto: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const entrance = spring({
    frame,
    fps,
    config: { damping: 18, mass: 0.9 },
  });

  const phaseBEntrance = spring({
    frame: Math.max(0, frame - 147),
    fps,
    config: { damping: 16, mass: 0.9 },
  });

  return (
    <AbsoluteFill style={{ width: 3840, height: 2160, overflow: "hidden", backgroundColor: "#07080B" }}>
      {/* 🎬 FASE A (f0 - f147 | 34.72s - 39.62s): La Bofetada en el Debut (Supercopa Leipzig 0-3) */}
      <Sequence from={0} durationInFrames={147}>
        <div style={{ position: "absolute", inset: 0, overflow: "hidden" }}>
          <Video
            src={staticFile("b3_09_supercup2023_leipzig_loss.mp4")}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              filter: "contrast(1.25) brightness(0.78) saturate(1.05)",
              transform: `scale(${interpolate(frame, [0, 147], [1.0, 1.07], { extrapolateRight: "clamp" })})`,
            }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(180deg, rgba(7,8,11,0.85) 0%, rgba(7,8,11,0.25) 50%, rgba(7,8,11,0.92) 100%)",
            }}
          />
        </div>
      </Sequence>

      {/* 🎬 FASE B (f147 - f373 | 39.62s - 47.14s): El Bayern No Ganó Absolutamente Nada */}
      <Sequence from={147} durationInFrames={226}>
        <div style={{ position: "absolute", inset: 0, overflow: "hidden" }}>
          <Video
            src={staticFile("b3_06_bayern_curse_doubt.mp4")}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              filter: "contrast(1.25) brightness(0.68) saturate(0.95)",
              transform: `scale(${interpolate(frame, [147, 373], [1.0, 1.07], { extrapolateRight: "clamp" })})`,
            }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(90deg, rgba(7,8,11,0.94) 0%, rgba(7,8,11,0.4) 55%, rgba(7,8,11,0.88) 100%)",
            }}
          />

          {/* Silueta de Kane en el Banquillo de Múnich */}
          <div
            style={{
              position: "absolute",
              right: 160,
              bottom: 0,
              height: "88%",
              display: "flex",
              alignItems: "flex-end",
              opacity: phaseBEntrance,
              transform: `translateX(${(1 - phaseBEntrance) * 50}px)`,
              zIndex: 20,
            }}
          >
            <Img
              src={staticFile("kane_supercup_bench_sorrow_2023.png")}
              style={{
                height: "100%",
                objectFit: "contain",
                filter: "drop-shadow(0 35px 80px rgba(0,0,0,0.95)) drop-shadow(0 0 35px rgba(239,68,68,0.35))",
              }}
            />
          </div>
        </div>
      </Sequence>

      {/* 🎬 FASE C (f373 - f555 | 47.14s - 53.24s): Portada KICKER — Bayer Leverkusen Invicto */}
      <Sequence from={373} durationInFrames={182}>
        <div style={{ position: "absolute", inset: 0, overflow: "hidden" }}>
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "radial-gradient(circle at center, #221215 0%, #07080B 85%)",
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
                border: "2px solid rgba(239, 68, 68, 0.55)",
                boxShadow: "0 35px 90px rgba(0,0,0,0.95), 0 0 45px rgba(239, 68, 68, 0.28)",
                transform: `scale(${interpolate(frame, [373, 555], [1.0, 1.045], { extrapolateRight: "clamp" })})`,
              }}
            >
              <Img
                src={staticFile("titular_kicker_leverkusen_invicto_2024.png")}
                style={{ width: "100%", height: "auto", display: "block" }}
              />
            </div>
          </div>
        </div>
      </Sequence>

      {/* 🏷️ OVERLAY DE TÍTULO SUPERIOR SINCRONIZADO AL AUDIO (AUDIO-FIRST WORD-LOCK) */}
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
            border: "1.5px solid rgba(239, 68, 68, 0.65)",
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
              backgroundColor: "#EF4444",
              boxShadow: "0 0 14px #EF4444",
            }}
          />
          <span
            style={{
              fontFamily: "Cabinet Grotesk, Montserrat, sans-serif",
              fontSize: 24,
              fontWeight: 900,
              letterSpacing: 4,
              color: "#EF4444",
              textTransform: "uppercase",
            }}
          >
            {frame < 147
              ? "EXPEDIENTE MDC · IRONÍA DEL DESTINO // MÚNICH"
              : frame < 373
              ? "EXPEDIENTE MDC · TEMPORADA 2023-24 // FIN DE LA RACHA"
              : "EXPEDIENTE MDC · MILAGRO HISTÓRICO // LEVERKUSEN INVICTO"}
          </span>
        </div>

        <h1
          style={{
            fontFamily: "Cabinet Grotesk, Montserrat, sans-serif",
            fontSize: 80,
            fontWeight: 950,
            color: "#FFFFFF",
            margin: "20px 0 0 0",
            letterSpacing: 1,
            textShadow: "0 10px 40px rgba(0,0,0,0.95), 0 0 50px rgba(239,68,68,0.35)",
          }}
        >
          {frame < 147 ? (
            <TypewriterText
              text="LA BOFETADA MÁS RETORCIDA DE SU HISTORIA"
              startFrame={2}
              durationInFrames={34}
              currentFrame={frame}
              cursorColor="#EF4444"
            />
          ) : frame < 373 ? (
            <TypewriterText
              text="CERO TÍTULOS EN MÁS DE UNA DÉCADA"
              startFrame={148}
              durationInFrames={34}
              currentFrame={frame}
              cursorColor="#EF4444"
            />
          ) : (
            <TypewriterText
              text="LEVERKUSEN: LA TEMPORADA INVICTA LEGENDARIA"
              startFrame={374}
              durationInFrames={36}
              currentFrame={frame}
              cursorColor="#F5C518"
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
          maxWidth: 1500,
          background: "rgba(18, 21, 30, 0.92)",
          border: "1.5px solid rgba(239, 68, 68, 0.5)",
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
            backgroundColor: "#EF4444",
            borderRadius: 3,
            boxShadow: "0 0 12px #EF4444",
          }}
        />
        <div>
          <div style={{ fontSize: 18, color: "rgba(255,255,255,0.65)", fontWeight: 700, letterSpacing: 2 }}>
            {frame < 147
              ? "EL GOLPE IMPREVISTO"
              : frame < 373
              ? "BAYERN MÚNICH · 2023/2024"
              : "BAYER 04 LEVERKUSEN · CAMPEÓN INVICTO"}
          </div>
          <div style={{ fontSize: 30, color: "#FFFFFF", fontWeight: 700, marginTop: 4, lineHeight: 1.35 }}>
            {frame < 147
              ? "Cuando parecía tener el título asegurado, la realidad le preparó la prueba más dura."
              : frame < 373
              ? "Por primera vez en 12 años, el gigante bávaro cierra el año con las vitrinas vacías."
              : "El modesto Bayer Leverkusen firma la primera Bundesliga invicta en toda la historia de Alemania."}
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};

