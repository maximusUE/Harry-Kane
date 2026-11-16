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

export const Shot07MirrorSacrificio: React.FC = () => {
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
      {/* 🎬 CORTE 1 (Frames 0 - 155 | 5.17s): Césped con Confeti y Silencio Sepulcral */}
      <Sequence from={0} durationInFrames={155}>
        <div style={{ position: "absolute", inset: 0, overflow: "hidden" }}>
          <Img
            src={staticFile("cesped_confeti_derrota_final.jpg")}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              filter: "contrast(1.3) brightness(0.65) saturate(0.85)",
              transform: `scale(${interpolate(frame, [0, 155], [1.0, 1.07])})`,
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

      {/* 🎬 CORTE 2 (Frames 155 - 315 | 5.33s): Kane Cutout + Emblema MDC Cerebro-Circuito + Estadio */}
      <Sequence from={155} durationInFrames={160}>
        <div style={{ position: "absolute", inset: 0, overflow: "hidden" }}>
          <Img
            src={staticFile("mdc_stadium_bg.jpg")}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              filter: "contrast(1.3) brightness(0.55)",
              transform: `scale(${1.01 + (frame - 155) * 0.0006})`,
            }}
          />
          {/* Glowing MDC Brain-Circuit Watermark Emblem in Background */}
          <div
            style={{
              position: "absolute",
              right: 480,
              top: "45%",
              transform: `translateY(-50%) scale(${1.0 + Math.sin((frame - 155) * 0.08) * 0.03})`,
              width: 750,
              height: 750,
              opacity: 0.65,
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
                filter: "drop-shadow(0 0 60px rgba(245, 197, 24, 0.5)) drop-shadow(0 0 100px rgba(245, 197, 24, 0.25))",
              }}
            />
          </div>
          {/* Kane Despair Cutout */}
          <div
            style={{
              position: "absolute",
              right: 180,
              bottom: 0,
              height: "90%",
              display: "flex",
              alignItems: "flex-end",
            }}
          >
            <Img
              src={staticFile("harry_kane_despair_cutout.png")}
              style={{
                height: "100%",
                objectFit: "contain",
                filter: "drop-shadow(0 30px 80px rgba(0,0,0,0.95)) drop-shadow(0 0 35px rgba(245,197,24,0.2))",
                transform: `scale(${1.0 + (frame - 155) * 0.0005})`,
              }}
            />
          </div>
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(90deg, rgba(7,8,11,0.95) 0%, rgba(7,8,11,0.35) 55%, rgba(7,8,11,0.85) 100%)",
            }}
          />
        </div>
      </Sequence>

      {/* 🎬 CORTE 3 (Frames 315 - 472 | 5.23s): Hombre en la Ventana Bajo la Lluvia */}
      <Sequence from={315} durationInFrames={157}>
        <div style={{ position: "absolute", inset: 0, overflow: "hidden" }}>
          <Img
            src={staticFile("hombre_resiliencia_ventana_lluvia.jpg")}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              filter: "contrast(1.3) brightness(0.65)",
              transform: `scale(${1.0 + (frame - 315) * 0.0006})`,
            }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(90deg, rgba(7,8,11,0.92) 0%, rgba(7,8,11,0.3) 50%, rgba(7,8,11,0.88) 100%)",
            }}
          />
        </div>
      </Sequence>

      {/* 🏷️ OVERLAY DE TÍTULO OFICIAL MDC */}
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
            border: "1.5px solid rgba(245, 197, 24, 0.6)",
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
            EXPEDIENTE MDC · EL ESPEJO DEL ESPECTADOR
          </span>
        </div>
        <h1
          style={{
            fontFamily: "Cabinet Grotesk, Montserrat, sans-serif",
            fontSize: 88,
            fontWeight: 950,
            color: "#FFFFFF",
            margin: "20px 0 0 0",
            letterSpacing: 1,
            textShadow: "0 10px 40px rgba(0,0,0,0.95), 0 0 50px rgba(245,197,24,0.3)",
          }}
        >
          <TypewriterText
            text="¿QUÉ HACES CUANDO DAS TU CIEN POR CIENTO?"
            startFrame={8}
            durationInFrames={42}
            currentFrame={frame}
            cursorColor="#F5C518"
          />
        </h1>
      </div>

      {/* 📊 BADGE INFERIOR: AUTO-CONFRONTACIÓN */}
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
            CRISIS EXISTENCIAL
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
            Meses de disciplina, madrugadas en silencio, cuidando cada detalle... y al final sientes que el destino se burla de ti.
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};
