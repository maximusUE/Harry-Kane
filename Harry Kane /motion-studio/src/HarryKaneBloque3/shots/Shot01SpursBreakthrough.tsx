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

export const Shot01SpursBreakthrough: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const entrance = spring({
    frame,
    fps,
    config: { damping: 18, mass: 0.9 },
  });

  const subEntrance = spring({
    frame: frame - 15,
    fps,
    config: { damping: 20, mass: 1 },
  });

  const cameraScale = interpolate(frame, [0, 210], [1.0, 1.08]);

  return (
    <AbsoluteFill style={{ width: 3840, height: 2160, overflow: "hidden", backgroundColor: "#07080B" }}>
      {/* 🎬 CORTE 1 (Frames 0 - 70 | 2.33s): Gol y Festejo White Hart Lane */}
      <Sequence from={0} durationInFrames={70}>
        <div style={{ position: "absolute", inset: 0, overflow: "hidden" }}>
          <Video
            src={staticFile("b3_01_spurs_breakthrough.mp4")}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              filter: "contrast(1.18) brightness(0.9) saturate(1.05)",
              transform: `scale(${cameraScale})`,
            }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(180deg, rgba(7,8,11,0.75) 0%, rgba(7,8,11,0.2) 50%, rgba(7,8,11,0.9) 100%)",
            }}
          />
        </div>
      </Sequence>

      {/* 🎬 CORTE 2 (Frames 70 - 140 | 2.33s): Derby de Londres / Máscara */}
      <Sequence from={70} durationInFrames={70}>
        <div style={{ position: "absolute", inset: 0, overflow: "hidden" }}>
          <Video
            src={staticFile("b3_02_derby_north_london.mp4")}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              filter: "contrast(1.22) brightness(0.85) saturate(1.1)",
              transform: `scale(${1.0 + (frame - 70) * 0.0009})`,
            }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "radial-gradient(circle at center, rgba(7,8,11,0.3) 0%, rgba(7,8,11,0.88) 90%)",
            }}
          />
        </div>
      </Sequence>

      {/* 🎬 CORTE 3 (Frames 140 - 210 | 2.33s): Kane Cutout Épico + Estadio MDC Nocturno Iluminado */}
      <Sequence from={140} durationInFrames={70}>
        <div style={{ position: "absolute", inset: 0, overflow: "hidden" }}>
          <Img
            src={staticFile("mdc_stadium_bg.jpg")}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              filter: "brightness(0.55) contrast(1.25)",
              transform: `scale(${1.02 + (frame - 140) * 0.0008})`,
            }}
          />
          <div
            style={{
              position: "absolute",
              bottom: 0,
              right: 240,
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
                filter: "drop-shadow(0 25px 60px rgba(0,0,0,0.95)) drop-shadow(0 0 35px rgba(245,197,24,0.25))",
                transform: `scale(${1.0 + (frame - 140) * 0.0006})`,
              }}
            />
          </div>
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(90deg, rgba(7,8,11,0.92) 0%, rgba(7,8,11,0.4) 55%, rgba(7,8,11,0.85) 100%)",
            }}
          />
        </div>
      </Sequence>

      {/* 🏷️ OVERLAY EDITORIAL CINEMATOGRÁFICO CON IDENTIDAD MDC */}
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
            backgroundColor: "rgba(18, 21, 30, 0.88)",
            border: "1.5px solid rgba(245, 197, 24, 0.5)",
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
            WHITE HART LANE · 2014-2016
          </span>
        </div>
        <h1
          style={{
            fontFamily: "Cabinet Grotesk, Montserrat, sans-serif",
            fontSize: 88,
            fontWeight: 950,
            color: "#FFFFFF",
            margin: "20px 0 0 0",
            letterSpacing: 2,
            textShadow: "0 10px 40px rgba(0,0,0,0.95), 0 0 50px rgba(245,197,24,0.3)",
          }}
        >
          <TypewriterText
            text="DESATÓ UNA TORMENTA"
            startFrame={8}
            durationInFrames={32}
            currentFrame={frame}
            cursorColor="#F5C518"
          />
        </h1>
      </div>

      {/* 📊 BADGE DE DATOS BIOMÉTRICOS & RÉCORD */}
      <div
        style={{
          position: "absolute",
          bottom: 160,
          left: 180,
          opacity: subEntrance,
          transform: `translateY(${(1 - subEntrance) * 20}px)`,
          background: "rgba(18, 21, 30, 0.9)",
          border: "1.5px solid rgba(245, 197, 24, 0.4)",
          backdropFilter: "blur(16px)",
          borderRadius: 20,
          padding: "24px 38px",
          display: "flex",
          gap: 48,
          boxShadow: "0 20px 50px rgba(0,0,0,0.85), 0 0 30px rgba(245, 197, 24, 0.15)",
          zIndex: 30,
        }}
      >
        <div>
          <div style={{ fontSize: 18, color: "rgba(255,255,255,0.6)", fontWeight: 700, letterSpacing: 2 }}>
            IMPACTO INMEDIATO
          </div>
          <div
            style={{
              fontSize: 44,
              color: "#F5C518",
              fontWeight: 950,
              marginTop: 4,
              textShadow: "0 0 25px rgba(245,197,24,0.5)",
            }}
          >
            31 GOLES
          </div>
        </div>
        <div style={{ width: 1.5, backgroundColor: "rgba(245,197,24,0.3)" }} />
        <div>
          <div style={{ fontSize: 18, color: "rgba(255,255,255,0.6)", fontWeight: 700, letterSpacing: 2 }}>
            DEBUT TITULAR
          </div>
          <div style={{ fontSize: 44, color: "#FFFFFF", fontWeight: 950, marginTop: 4 }}>
            NOVIEMBRE 2014
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};
