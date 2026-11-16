import React from "react";
import {
  AbsoluteFill,
  Sequence,
  spring,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
  Img,
} from "remotion";
import { TranscendenceWindow } from "../../components/TranscendenceWindow";
import { TypewriterText } from "../../components/TypewriterText";

export const Shot02GoldenBoots280Goals: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const entrance = spring({
    frame,
    fps,
    config: { damping: 18, mass: 0.9 },
  });

  // Kinetic typography spring for Corte 2 (frame 135+)
  const statEntrance = spring({
    frame: frame - 135,
    fps,
    config: { damping: 18, mass: 0.9 },
  });

  // Kinetic typography spring for Corte 4 (frame 405+)
  const wcEntrance = spring({
    frame: frame - 405,
    fps,
    config: { damping: 18, mass: 0.9 },
  });

  return (
    <AbsoluteFill style={{ width: 3840, height: 2160, overflow: "hidden", backgroundColor: "#07080B" }}>
      {/* 🎬 CORTE 1 (Frames 0 - 135 | 4.5s): Definición Implacable Premier League con TranscendenceWindow */}
      <Sequence from={0} durationInFrames={135}>
        <div style={{ position: "absolute", inset: 0, overflow: "hidden" }}>
          <TranscendenceWindow
            variant="video"
            src="b3_03_golden_boot_trio.mp4"
            frame={frame}
            width="100%"
            height="100%"
            borderRadius={0}
            borderGold={false}
            subtleZoom={true}
          />
        </div>
      </Sequence>

      {/* 🎬 CORTE 2 (Frames 135 - 270 | 4.5s): BIG BOLD KINETIC TYPOGRAPHY + CUTOUT 3D DE KANE */}
      <Sequence from={135} durationInFrames={135}>
        <div style={{ position: "absolute", inset: 0, overflow: "hidden" }}>
          {/* Fondo Atmosférico Noir */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "radial-gradient(circle at 65% 50%, #151D2A 0%, #07080B 85%)",
            }}
          />

          {/* CAPA 2: BIG BOLD KINETIC TYPOGRAPHY (BEHIND THE SUBJECT) */}
          <div
            style={{
              position: "absolute",
              left: 180,
              top: "24%",
              display: "flex",
              flexDirection: "column",
              gap: 16,
              zIndex: 5,
              maxWidth: "2400px",
              transform: `scale(${Math.max(0, statEntrance)})`,
            }}
          >
            {/* Pill de archivo oficial */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 16,
                padding: "12px 32px",
                backgroundColor: "rgba(245, 197, 24, 0.15)",
                border: "2px solid rgba(245, 197, 24, 0.6)",
                borderRadius: 100,
                width: "fit-content",
                backdropFilter: "blur(14px)",
              }}
            >
              <div
                style={{
                  width: 14,
                  height: 14,
                  borderRadius: "50%",
                  backgroundColor: "#F5C518",
                  boxShadow: "0 0 16px #F5C518",
                }}
              />
              <span
                style={{
                  fontFamily: "Cabinet Grotesk, Montserrat, sans-serif",
                  fontSize: 30,
                  fontWeight: 900,
                  color: "#F5C518",
                  letterSpacing: 6,
                  textTransform: "uppercase",
                }}
              >
                PREMIER LEAGUE · RÉCORD HISTÓRICO
              </span>
            </div>

            {/* BIG BOLD TITLE 1: 3 BOTAS DE ORO */}
            <div
              style={{
                fontFamily: "Cabinet Grotesk, Montserrat, sans-serif",
                fontSize: 135,
                fontWeight: 950,
                color: "#FFFFFF",
                lineHeight: 1.05,
                letterSpacing: "-2px",
                textShadow: "0 20px 60px rgba(0,0,0,0.95)",
              }}
            >
              3×{" "}
              <span
                style={{
                  color: "#F5C518",
                  textShadow: "0 0 60px rgba(245, 197, 24, 0.7)",
                }}
              >
                BOTAS DE ORO
              </span>
            </div>

            {/* BIG BOLD TITLE 2: 280 GOLES SPURS */}
            <div
              style={{
                fontFamily: "Cabinet Grotesk, Montserrat, sans-serif",
                fontSize: 110,
                fontWeight: 950,
                color: "#FFE57F",
                lineHeight: 1.1,
                letterSpacing: "-1px",
                textShadow: "0 0 50px rgba(245, 197, 24, 0.4)",
              }}
            >
              280 GOLES
            </div>

            {/* Subtítulo técnico */}
            <div
              style={{
                fontFamily: "Cabinet Grotesk, Montserrat, sans-serif",
                fontSize: 36,
                color: "rgba(255,255,255,0.8)",
                marginTop: 8,
                letterSpacing: 4,
                fontWeight: 700,
              }}
            >
              MÁXIMO GOLEADOR HISTÓRICO DEL TOTTENHAM HOTSPUR
            </div>
          </div>

          {/* CAPA 3: CUTOUT 3D DE KANE EN ESPUELA */}
          <div
            style={{
              position: "absolute",
              right: 120,
              bottom: 0,
              height: "94%",
              display: "flex",
              alignItems: "flex-end",
              zIndex: 10,
            }}
          >
            <Img
              src={staticFile("harry_kane_spurs_cutout.png")}
              style={{
                height: "100%",
                objectFit: "contain",
                filter:
                  "drop-shadow(0 40px 100px rgba(0, 0, 0, 0.98)) drop-shadow(0 0 45px rgba(245, 197, 24, 0.3))",
                transform: `scale(${1.0 + (frame - 135) * 0.0006})`,
              }}
            />
          </div>
        </div>
      </Sequence>

      {/* 🎬 CORTE 3 (Frames 270 - 405 | 4.5s): Rusia 2018 Gol Inglaterra con TranscendenceWindow */}
      <Sequence from={270} durationInFrames={135}>
        <div style={{ position: "absolute", inset: 0, overflow: "hidden" }}>
          <TranscendenceWindow
            variant="video"
            src="b3_07_russia2018_goal_england.mp4"
            frame={frame - 270}
            width="100%"
            height="100%"
            borderRadius={0}
            borderGold={false}
            subtleZoom={true}
          />
        </div>
      </Sequence>

      {/* 🎬 CORTE 4 (Frames 405 - 537 | 4.4s): Bota de Oro del Mundial de Rusia 2018 */}
      <Sequence from={405} durationInFrames={132}>
        <div style={{ position: "absolute", inset: 0, overflow: "hidden" }}>
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "radial-gradient(circle at 40% 50%, #201A10 0%, #07080B 85%)",
            }}
          />

          {/* Big Bold Typography Rusia 2018 */}
          <div
            style={{
              position: "absolute",
              left: 180,
              top: "28%",
              maxWidth: 1600,
              zIndex: 5,
              transform: `scale(${Math.max(0, wcEntrance)})`,
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
              <div style={{ width: 8, height: 36, backgroundColor: "#F5C518", borderRadius: 4 }} />
              <span
                style={{
                  fontFamily: "Cabinet Grotesk, Montserrat, sans-serif",
                  fontSize: 32,
                  fontWeight: 900,
                  letterSpacing: 6,
                  color: "#F5C518",
                }}
              >
                FIFA WORLD CUP RUSIA 2018
              </span>
            </div>
            <h2
              style={{
                fontFamily: "Cabinet Grotesk, Montserrat, sans-serif",
                fontSize: 108,
                fontWeight: 950,
                color: "#FFFFFF",
                margin: "16px 0 0 0",
                textShadow: "0 20px 60px rgba(0,0,0,0.95), 0 0 40px rgba(245,197,24,0.4)",
              }}
            >
              BOTA DE ORO MUNDIAL
            </h2>
            <div
              style={{
                fontFamily: "Cabinet Grotesk, Montserrat, sans-serif",
                fontSize: 44,
                color: "#FFE57F",
                marginTop: 20,
                fontWeight: 800,
                letterSpacing: 2,
              }}
            >
              6 GOLES COMO CAPITÁN DE INGLATERRA
            </div>
          </div>

          {/* Cutout Kane Selección */}
          <div
            style={{
              position: "absolute",
              right: 180,
              bottom: 0,
              height: "94%",
              zIndex: 10,
            }}
          >
            <Img
              src={staticFile("harry_kane_england_cutout.png")}
              style={{
                height: "100%",
                objectFit: "contain",
                filter: "drop-shadow(0 30px 80px rgba(0,0,0,0.95)) drop-shadow(0 0 35px rgba(245,197,24,0.25))",
                transform: `scale(${1.0 + (frame - 405) * 0.0006})`,
              }}
            />
          </div>
        </div>
      </Sequence>

      {/* 🏷️ TÍTULO PRINCIPAL DE ENTRADA CON IDENTIDAD MDC */}
      <div
        style={{
          position: "absolute",
          top: 220,
          left: 180,
          opacity: entrance,
          transform: `translateY(${(1 - entrance) * 25}px)`,
          zIndex: 30,
        }}
      >
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 14,
            padding: "10px 28px",
            backgroundColor: "rgba(18, 21, 30, 0.88)",
            border: "1.5px solid rgba(245, 197, 24, 0.5)",
            borderRadius: 100,
            backdropFilter: "blur(14px)",
          }}
        >
          <div style={{ width: 10, height: 10, borderRadius: "50%", backgroundColor: "#F5C518" }} />
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
            ÉPOCA DORADA INDIVIDUAL // 2016-2021
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
            text="MÁQUINA GOLEADORA IMPARABLE"
            startFrame={8}
            durationInFrames={36}
            currentFrame={frame}
            cursorColor="#F5C518"
          />
        </h1>
      </div>
    </AbsoluteFill>
  );
};
