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

export const Shot03CrueldadEliteCalvario: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const entrance = spring({
    frame,
    fps,
    config: { damping: 18, mass: 0.9 },
  });

  const subEntrance = spring({
    frame: frame - 20,
    fps,
    config: { damping: 20, mass: 1 },
  });

  return (
    <AbsoluteFill style={{ width: 3840, height: 2160, overflow: "hidden", backgroundColor: "#07080B" }}>
      {/* 🎬 CORTE 1 (Frames 0 - 120 | 4.0s): Silueta en el Túnel de Vestuarios */}
      <Sequence from={0} durationInFrames={120}>
        <div style={{ position: "absolute", inset: 0, overflow: "hidden" }}>
          <Img
            src={staticFile("tunel_vestuarios_silueta_derrota.jpg")}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              filter: "contrast(1.3) brightness(0.65) grayscale(0.2)",
              transform: `scale(${interpolate(frame, [0, 120], [1.0, 1.08])})`,
            }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(180deg, rgba(7,8,11,0.85) 0%, rgba(7,8,11,0.2) 50%, rgba(7,8,11,0.92) 100%)",
            }}
          />
        </div>
      </Sequence>

      {/* 🎬 CORTE 2 (Frames 120 - 240 | 4.0s): Estadio MDC Nocturno Iluminado Bajo la Lluvia */}
      <Sequence from={120} durationInFrames={120}>
        <div style={{ position: "absolute", inset: 0, overflow: "hidden" }}>
          <Img
            src={staticFile("mdc_stadium_bg.jpg")}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              filter: "contrast(1.3) brightness(0.6) saturate(1.05)",
              transform: `scale(${1.0 + (frame - 120) * 0.0007})`,
            }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "radial-gradient(circle at center, rgba(7,8,11,0.25) 0%, rgba(7,8,11,0.9) 85%)",
            }}
          />
        </div>
      </Sequence>

      {/* 🎬 CORTE 3 (Frames 240 - 355 | 3.83s): Césped con Confeti y Kane Desesperanza Cutout */}
      <Sequence from={240} durationInFrames={115}>
        <div style={{ position: "absolute", inset: 0, overflow: "hidden" }}>
          <Img
            src={staticFile("cesped_confeti_derrota_final.jpg")}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              filter: "contrast(1.25) brightness(0.6)",
              transform: `scale(${1.01 + (frame - 240) * 0.0006})`,
            }}
          />
          <div
            style={{
              position: "absolute",
              right: 280,
              bottom: 0,
              height: "88%",
              display: "flex",
              alignItems: "flex-end",
            }}
          >
            <Img
              src={staticFile("harry_kane_despair_cutout.png")}
              style={{
                height: "100%",
                objectFit: "contain",
                filter: "drop-shadow(0 30px 70px rgba(0,0,0,0.95)) drop-shadow(0 0 35px rgba(239,68,68,0.2))",
                transform: `scale(${1.0 + (frame - 240) * 0.0005})`,
              }}
            />
          </div>
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(90deg, rgba(7,8,11,0.95) 0%, rgba(7,8,11,0.35) 55%, rgba(7,8,11,0.88) 100%)",
            }}
          />
        </div>
      </Sequence>

      {/* 🎬 CORTE 4 (Frames 355 - 473 | 3.93s): Emblema MDC Cerebro-Circuito + Duelo Mental */}
      <Sequence from={355} durationInFrames={118}>
        <div style={{ position: "absolute", inset: 0, overflow: "hidden" }}>
          <Img
            src={staticFile("mdc_stadium_bg.jpg")}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              filter: "contrast(1.35) brightness(0.4) saturate(0.8)",
              transform: `scale(${1.02 + (frame - 355) * 0.0006})`,
            }}
          />
          {/* MDC Brain-Circuit Logo Pulsating in Core */}
          <div
            style={{
              position: "absolute",
              right: 320,
              top: "50%",
              transform: `translateY(-50%) scale(${1.0 + Math.sin((frame - 355) * 0.1) * 0.03})`,
              width: 700,
              height: 700,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Img
              src={staticFile("mdc_logo_oficial.png")}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
                filter: "drop-shadow(0 0 60px rgba(245, 197, 24, 0.45)) drop-shadow(0 0 100px rgba(239, 68, 68, 0.3))",
              }}
            />
          </div>
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(90deg, rgba(7,8,11,0.95) 0%, rgba(7,8,11,0.5) 50%, rgba(7,8,11,0.85) 100%)",
            }}
          />
        </div>
      </Sequence>

      {/* 🏷️ OVERLAY DE TENSIÓN PSICOLÓGICA CON IDENTIDAD OFICIAL MDC */}
      <div
        style={{
          position: "absolute",
          top: 220,
          left: 180,
          maxWidth: 1600,
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
            border: "1.5px solid rgba(239, 68, 68, 0.6)",
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
            EXPEDIENTE MDC · LA PARADOJA DEL ÉXITO
          </span>
        </div>
        <h1
          style={{
            fontFamily: "Cabinet Grotesk, Montserrat, sans-serif",
            fontSize: 88,
            fontWeight: 950,
            color: "#FFFFFF",
            margin: "20px 0 0 0",
            lineHeight: 1.1,
            letterSpacing: 1,
            textShadow: "0 10px 40px rgba(0,0,0,0.95), 0 0 50px rgba(239,68,68,0.3)",
          }}
        >
          <TypewriterText
            text="EL DEPORTE DE ÉLITE NO TIENE PIEDAD"
            startFrame={8}
            durationInFrames={36}
            currentFrame={frame}
            cursorColor="#EF4444"
          />
        </h1>
      </div>

      {/* 📊 BADGE INFERIOR: DIAGNÓSTICO DEL CALVARIO */}
      <div
        style={{
          position: "absolute",
          bottom: 160,
          left: 180,
          maxWidth: 1500,
          opacity: subEntrance,
          transform: `translateY(${(1 - subEntrance) * 20}px)`,
          background: "rgba(18, 21, 30, 0.92)",
          border: "1.5px solid rgba(245, 197, 24, 0.4)",
          backdropFilter: "blur(18px)",
          borderRadius: 20,
          padding: "24px 38px",
          display: "flex",
          alignItems: "center",
          gap: 32,
          boxShadow: "0 20px 50px rgba(0,0,0,0.85), 0 0 30px rgba(245, 197, 24, 0.15)",
          zIndex: 30,
        }}
      >
        <div
          style={{
            width: 6,
            height: 60,
            backgroundColor: "#F5C518",
            borderRadius: 3,
            boxShadow: "0 0 12px #F5C518",
          }}
        />
        <div>
          <div style={{ fontSize: 18, color: "rgba(255,255,255,0.6)", fontWeight: 700, letterSpacing: 2 }}>
            REALIDAD DE LA ALTA COMPETENCIA
          </div>
          <div
            style={{
              fontSize: 30,
              color: "#FFFFFF",
              fontWeight: 700,
              marginTop: 4,
              lineHeight: 1.35,
            }}
          >
            Puedes ser el goleador más letal... pero el mundo te juzga por el metal en tus vitrinas.
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};
