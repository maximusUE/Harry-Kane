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

export const Shot08VictimaVsResiliencia: React.FC = () => {
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
      {/* 🎬 CORTE 1 (Frames 0 - 155 | 5.17s): Duda y Focos Mediáticos */}
      <Sequence from={0} durationInFrames={155}>
        <div style={{ position: "absolute", inset: 0, overflow: "hidden" }}>
          <Video
            src={staticFile("b3_06_bayern_curse_doubt.mp4")}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              filter: "contrast(1.22) brightness(0.85) saturate(1.05)",
              transform: `scale(${interpolate(frame, [0, 155], [1.0, 1.07])})`,
            }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(180deg, rgba(7,8,11,0.8) 0%, rgba(7,8,11,0.2) 50%, rgba(7,8,11,0.92) 100%)",
            }}
          />
        </div>
      </Sequence>

      {/* 🎬 CORTE 2 (Frames 155 - 310 | 5.17s): Banquillo de la Supercopa 2023 */}
      <Sequence from={155} durationInFrames={155}>
        <div style={{ position: "absolute", inset: 0, overflow: "hidden" }}>
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "radial-gradient(circle at 65% 50%, #201416 0%, #07080B 85%)",
            }}
          />
          <div
            style={{
              position: "absolute",
              right: 180,
              bottom: 0,
              height: "92%",
              display: "flex",
              alignItems: "flex-end",
            }}
          >
            <Img
              src={staticFile("kane_supercup_bench_sorrow_2023.png")}
              style={{
                height: "100%",
                objectFit: "contain",
                filter: "drop-shadow(0 35px 80px rgba(0,0,0,0.95)) drop-shadow(0 0 35px rgba(239,68,68,0.25))",
                transform: `scale(${1.0 + (frame - 155) * 0.0006})`,
              }}
            />
          </div>
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(90deg, rgba(7,8,11,0.92) 0%, rgba(7,8,11,0.35) 55%, rgba(7,8,11,0.85) 100%)",
            }}
          />
        </div>
      </Sequence>

      {/* 🎬 CORTE 3 (Frames 310 - 465 | 5.17s): Emblema MDC Cerebro-Circuito Pulsante + Confrontación */}
      <Sequence from={310} durationInFrames={155}>
        <div style={{ position: "absolute", inset: 0, overflow: "hidden" }}>
          <Img
            src={staticFile("mdc_stadium_bg.jpg")}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              filter: "contrast(1.3) brightness(0.45)",
              transform: `scale(${1.01 + (frame - 310) * 0.0006})`,
            }}
          />
          {/* MDC Brain-Circuit Logo Pulsating in Core */}
          <div
            style={{
              position: "absolute",
              right: 320,
              top: "50%",
              transform: `translateY(-50%) scale(${1.0 + Math.sin((frame - 310) * 0.1) * 0.04})`,
              width: 720,
              height: 720,
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
                filter: "drop-shadow(0 0 70px rgba(245, 197, 24, 0.5)) drop-shadow(0 0 100px rgba(239, 68, 68, 0.35))",
              }}
            />
          </div>
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(90deg, rgba(7,8,11,0.95) 0%, rgba(7,8,11,0.4) 55%, rgba(7,8,11,0.85) 100%)",
            }}
          />
        </div>
      </Sequence>

      {/* 🎬 CORTE 4 (Frames 465 - 625 | 5.33s): Silueta en el Túnel / Enfrentar la Oscuridad */}
      <Sequence from={465} durationInFrames={160}>
        <div style={{ position: "absolute", inset: 0, overflow: "hidden" }}>
          <Img
            src={staticFile("tunel_vestuarios_silueta_derrota.jpg")}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              filter: "contrast(1.3) brightness(0.65) saturate(0.85)",
              transform: `scale(${1.0 + (frame - 465) * 0.0006})`,
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
            EXPEDIENTE MDC · LA TRAMPA DE LA VÍCTIMA
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
            textShadow: "0 10px 40px rgba(0,0,0,0.95), 0 0 50px rgba(239,68,68,0.35)",
          }}
        >
          <TypewriterText
            text="EL 99% DE LOS HOMBRES SE RINDEN AQUÍ"
            startFrame={8}
            durationInFrames={40}
            currentFrame={frame}
            cursorColor="#EF4444"
          />
        </h1>
      </div>

      {/* 📊 BADGE INFERIOR: EL ABISMO DE LA RENUNCIA */}
      <div
        style={{
          position: "absolute",
          bottom: 160,
          left: 180,
          maxWidth: 1500,
          opacity: subEntrance,
          transform: `translateY(${(1 - subEntrance) * 20}px)`,
          background: "rgba(18, 21, 30, 0.92)",
          border: "1.5px solid rgba(239, 68, 68, 0.5)",
          backdropFilter: "blur(18px)",
          borderRadius: 20,
          padding: "24px 38px",
          display: "flex",
          alignItems: "center",
          gap: 32,
          boxShadow: "0 20px 50px rgba(0,0,0,0.85), 0 0 30px rgba(239, 68, 68, 0.2)",
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
          <div style={{ fontSize: 18, color: "rgba(255,255,255,0.6)", fontWeight: 700, letterSpacing: 2 }}>
            EL ABISMO DE LA RENUNCIA
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
            "El universo me odia. Nací con mala suerte". Se refugian en la queja porque quejarse duele menos que volver a levantarse.
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};
