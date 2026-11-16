import React from "react";
import {
  AbsoluteFill,
  interpolate,
  Sequence,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { Cinematic4KBackground } from "../../HarryKane4K/Cinematic4KBackground";
import { TranscendenceWindow } from "../../components/TranscendenceWindow";
import { TypewriterText } from "../../components/TypewriterText";

export const Shot10PremierLeagueDoubt: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Duración total del plano: 193 frames (Global 2685 - 2878 | 89.50s - 95.93s)
  // Corte 1 (f0 - f86 | 89.50s - 92.35s): "En los despachos del club la duda era letal."
  // Corte 2 (f86 - f193 | 92.35s - 95.93s): "¿Harry realmente tiene nivel para jugar en la Liga Premier?"

  const entrance = spring({
    frame: frame - 86,
    fps,
    config: { damping: 18, mass: 0.8 },
  });

  const questionGlow = interpolate(Math.sin(frame / 12), [-1, 1], [0.4, 0.9]);
  const opacity = 1;

  return (
    <AbsoluteFill style={{ width: 3840, height: 2160, overflow: "hidden", backgroundColor: "#06070B" }}>
      {/* 🎬 CORTE 1 (Frames 0 - 86 | 2.86s | 89.50s - 92.35s): Video Tottenham entrenando y dudas */}
      <Sequence from={0} durationInFrames={86}>
        <div style={{ position: "absolute", inset: 0, overflow: "hidden" }}>
          <TranscendenceWindow
            variant="video"
            src="broll/broll_16_premier_doubt.mp4"
            frame={frame}
            width="100%"
            height="100%"
            borderRadius={0}
            borderGold={false}
            subtleZoom={true}
          />

          <div
            style={{
              position: "absolute",
              bottom: "180px",
              left: "140px",
              zIndex: 20,
              maxWidth: "2800px",
            }}
          >
            <div
              style={{
                display: "inline-block",
                padding: "14px 36px",
                backgroundColor: "rgba(245, 197, 24, 0.2)",
                border: "2px solid rgba(245, 197, 24, 0.6)",
                borderRadius: "100px",
                fontSize: "36px",
                fontWeight: 900,
                color: "#F5C518",
                letterSpacing: "6px",
                textTransform: "uppercase",
                marginBottom: "20px",
                backdropFilter: "blur(12px)",
              }}
            >
              WHITE HART LANE · 2013
            </div>

            <h1
              style={{
                fontSize: "145px",
                fontWeight: 950,
                color: "#FFFFFF",
                lineHeight: 1.05,
                margin: 0,
                textShadow: "0 20px 60px rgba(0,0,0,0.95)",
              }}
            >
              <TypewriterText
                text="LA DUDA LETAL EN LOS DESPACHOS"
                startFrame={2}
                durationInFrames={40}
                currentFrame={frame}
                cursorColor="#F5C518"
              />
            </h1>
          </div>
        </div>
      </Sequence>

      {/* 🎬 CORTE 2 (Frames 86 - 193 | 3.56s | 92.35s - 95.93s): SIGNO DE INTERROGACIÓN GIGANTE Y EVALUACIÓN */}
      <Sequence from={86} durationInFrames={107}>
        <div style={{ position: "absolute", inset: 0, overflow: "hidden" }}>
          <Cinematic4KBackground theme="gold" intensity={1.5} />

          {/* Giant Question Mark Depth Element */}
          <div
            style={{
              position: "absolute",
              top: "45%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              fontSize: "900px",
              fontWeight: 950,
              color: "rgba(245, 197, 24, 0.06)",
              textShadow: `0 0 120px rgba(245, 197, 24, ${questionGlow * 0.3})`,
              userSelect: "none",
              pointerEvents: "none",
              lineHeight: 1,
            }}
          >
            ?
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              height: "100%",
              opacity,
              textAlign: "center",
              padding: "0 220px",
              zIndex: 10,
            }}
          >
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "16px",
                padding: "14px 36px",
                backgroundColor: "rgba(245, 197, 24, 0.15)",
                border: "1.5px solid rgba(245, 197, 24, 0.5)",
                borderRadius: "100px",
                marginBottom: "36px",
                backdropFilter: "blur(12px)",
              }}
            >
              <div
                style={{
                  width: "12px",
                  height: "12px",
                  borderRadius: "50%",
                  backgroundColor: "#F5C518",
                  boxShadow: "0 0 16px #F5C518",
                }}
              />
              <span
                style={{
                  fontSize: "44px",
                  fontWeight: 800,
                  color: "#F5C518",
                  letterSpacing: "14px",
                  textTransform: "uppercase",
                }}
              >
                DESPACHOS DE WHITE HART LANE · EVALUACIÓN TÉCNICA
              </span>
            </div>

            <h1
              style={{
                transform: `scale(${Math.max(0, entrance)})`,
                fontSize: "160px",
                fontWeight: 950,
                color: "#FFFFFF",
                letterSpacing: "-2px",
                lineHeight: 1.15,
                margin: "0 0 50px 0",
                maxWidth: "3300px",
                textShadow:
                  "0 20px 80px rgba(0,0,0,0.95), 0 0 100px rgba(245, 197, 24, 0.4)",
              }}
            >
              <TypewriterText
                text='"¿REALMENTE TIENE NIVEL PARA LA LIGA PREMIER?"'
                startFrame={87}
                durationInFrames={48}
                currentFrame={frame}
                cursorColor="#F5C518"
              />
            </h1>

            <div
              style={{
                width: `${interpolate(frame - 86, [15, 60], [0, 420], {
                  extrapolateLeft: "clamp",
                  extrapolateRight: "clamp",
                })}px`,
                height: "6px",
                backgroundColor: "#F5C518",
                boxShadow: "0 0 40px #F5C518",
                borderRadius: "3px",
                marginTop: "10px",
              }}
            />
          </div>
        </div>
      </Sequence>

      {/* Viñeta general */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          boxShadow: "inset 0 0 240px rgba(0,0,0,0.92)",
          pointerEvents: "none",
        }}
      />
    </AbsoluteFill>
  );
};
