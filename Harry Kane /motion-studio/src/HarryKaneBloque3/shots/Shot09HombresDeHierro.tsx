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

export const Shot09HombresDeHierro: React.FC = () => {
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
      {/* 🎬 CORTE 1 (Frames 0 - 100 | 3.33s): Kane se Levanta del Césped y Ajusta el Brazalete */}
      <Sequence from={0} durationInFrames={100}>
        <div style={{ position: "absolute", inset: 0, overflow: "hidden" }}>
          <Video
            src={staticFile("b3_05_kneeling_defeat_lawn.mp4")}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              filter: "contrast(1.22) brightness(0.85) saturate(1.05)",
              transform: `scale(${interpolate(frame, [0, 100], [1.0, 1.07])})`,
            }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(180deg, rgba(7,8,11,0.75) 0%, rgba(7,8,11,0.2) 50%, rgba(7,8,11,0.92) 100%)",
            }}
          />
        </div>
      </Sequence>

      {/* 🎬 CORTE 2 (Frames 100 - 200 | 3.33s): Emblema MDC Cerebro-Circuito Dorado Épico */}
      <Sequence from={100} durationInFrames={100}>
        <div style={{ position: "absolute", inset: 0, overflow: "hidden" }}>
          <Img
            src={staticFile("mdc_stadium_bg.jpg")}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              filter: "contrast(1.3) brightness(0.5)",
              transform: `scale(${1.01 + (frame - 100) * 0.0006})`,
            }}
          />
          {/* MDC Brain-Circuit Logo Pulsating in Core */}
          <div
            style={{
              position: "absolute",
              right: 320,
              top: "50%",
              transform: `translateY(-50%) scale(${1.0 + Math.sin((frame - 100) * 0.12) * 0.04})`,
              width: 750,
              height: 750,
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
                filter: "drop-shadow(0 0 70px rgba(245, 197, 24, 0.65)) drop-shadow(0 0 120px rgba(245, 197, 24, 0.35))",
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

      {/* 🎬 CORTE 3 (Frames 200 - 302 | 3.40s): Kane Triunfante + Estadio MDC Nocturno */}
      <Sequence from={200} durationInFrames={102}>
        <div style={{ position: "absolute", inset: 0, overflow: "hidden" }}>
          <Img
            src={staticFile("mdc_stadium_bg.jpg")}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              filter: "contrast(1.3) brightness(0.55)",
              transform: `scale(${1.01 + (frame - 200) * 0.0006})`,
            }}
          />
          <div
            style={{
              position: "absolute",
              right: 220,
              bottom: 0,
              height: "94%",
              display: "flex",
              alignItems: "flex-end",
            }}
          >
            <Img
              src={staticFile("harry_kane_spurs_cutout.png")}
              style={{
                height: "100%",
                objectFit: "contain",
                filter: "drop-shadow(0 35px 80px rgba(0,0,0,0.95)) drop-shadow(0 0 45px rgba(245,197,24,0.35))",
                transform: `scale(${1.0 + (frame - 200) * 0.0005})`,
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

      {/* 🏷️ OVERLAY DE TÍTULO OFICIAL MDC */}
      <div
        style={{
          position: "absolute",
          top: 220,
          left: 180,
          maxWidth: 1650,
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
            EXPEDIENTE MDC · CONCLUSIÓN BLOQUE 3
          </span>
        </div>
        <h1
          style={{
            fontFamily: "Cabinet Grotesk, Montserrat, sans-serif",
            fontSize: 84,
            fontWeight: 950,
            color: "#FFFFFF",
            margin: "20px 0 0 0",
            letterSpacing: 1,
            lineHeight: 1.15,
            textShadow: "0 10px 40px rgba(0,0,0,0.95), 0 0 50px rgba(245,197,24,0.35)",
          }}
        >
          <TypewriterText
            text="LOS HOMBRES DE HIERRO TIENEN UN CABLEADO MENTAL DIFERENTE"
            startFrame={8}
            durationInFrames={42}
            currentFrame={frame}
            cursorColor="#F5C518"
          />
        </h1>
      </div>

      {/* 📊 BADGE INFERIOR: MENTALIDAD DE HIERRO */}
      <div
        style={{
          position: "absolute",
          bottom: 160,
          left: 180,
          maxWidth: 1500,
          opacity: subEntrance,
          transform: `translateY(${(1 - subEntrance) * 20}px)`,
          background: "rgba(18, 21, 30, 0.92)",
          border: "1.5px solid rgba(245, 197, 24, 0.5)",
          backdropFilter: "blur(18px)",
          borderRadius: 20,
          padding: "24px 38px",
          display: "flex",
          alignItems: "center",
          gap: 32,
          boxShadow: "0 20px 50px rgba(0,0,0,0.85), 0 0 35px rgba(245, 197, 24, 0.2)",
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
            LEY DE LA RESILIENCIA
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
            La derrota no es el final. Es solo una factura que aún no terminas de pagar.
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};
