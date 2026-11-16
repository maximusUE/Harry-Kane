import React from "react";
import {
  AbsoluteFill,
  Sequence,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { RainOverlay } from "../effects/RainOverlay";
import { TranscendenceWindow } from "../../components/TranscendenceWindow";
import { TypewriterText } from "../../components/TypewriterText";

export const Shot06RainRunLodo: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Duración total del plano: 309 frames (Global 1719 - 2028 | 57.30s - 67.60s)
  // Corte 1 (f0 - f115 | 57.30s - 61.13s): "...se calzó los tenis y se fue al parque a correr bajo una lluvia helada."
  // Corte 2 (f115 - f213 | 61.13s - 64.40s): "Si le falta velocidad, la fabricaría a puro pulmón."
  // Corte 3 (f213 - f309 | 64.40s - 67.60s): "Si le sobraba peso, lo quemaría en el lodo."

  const entrance1 = spring({
    frame,
    fps,
    config: { damping: 18, mass: 0.8 },
  });

  const entrance2 = spring({
    frame: frame - 115,
    fps,
    config: { damping: 18, mass: 0.8 },
  });

  const entrance3 = spring({
    frame: frame - 213,
    fps,
    config: { damping: 18, mass: 0.8 },
  });

  return (
    <AbsoluteFill style={{ width: 3840, height: 2160, overflow: "hidden", backgroundColor: "#06070B" }}>
      {/* 🎬 CORTE 1 Y 2 (Frames 0 - 213 | Global 1719 - 1932 | 57.30s - 64.40s): Tenis corriendo bajo lluvia helada + A puro pulmón */}
      <Sequence from={0} durationInFrames={213}>
        <div style={{ position: "absolute", inset: 0, overflow: "hidden" }}>
          <TranscendenceWindow
            variant="video"
            src="broll/broll_08_shoes_running.mp4"
            frame={frame}
            width="100%"
            height="100%"
            borderRadius={0}
            borderGold={false}
            subtleZoom={true}
          />

          {/* Sub-corte 1 (f0 - f115 | 57.30s - 61.13s): SE FUE AL PARQUE A CORRER BAJO LLUVIA HELADA */}
          {frame < 115 && (
            <div
              style={{
                position: "absolute",
                top: "20%",
                left: "140px",
                zIndex: 20,
                maxWidth: "2800px",
                transform: `scale(${Math.max(0, entrance1)})`,
              }}
            >
              <div
                style={{
                  display: "inline-block",
                  padding: "14px 36px",
                  backgroundColor: "rgba(56, 189, 248, 0.2)",
                  border: "2px solid rgba(56, 189, 248, 0.6)",
                  borderRadius: "100px",
                  fontSize: "36px",
                  fontWeight: 900,
                  color: "#38BDF8",
                  letterSpacing: "6px",
                  textTransform: "uppercase",
                  marginBottom: "24px",
                  backdropFilter: "blur(12px)",
                }}
              >
                LA RESPUESTA INMEDIATA · LONDRES
              </div>

              <h1
                style={{
                  fontSize: "145px",
                  fontWeight: 950,
                  color: "#FFFFFF",
                  lineHeight: 1.1,
                  margin: 0,
                  letterSpacing: "-2px",
                  textShadow: "0 20px 60px rgba(0,0,0,0.95)",
                }}
              >
                <TypewriterText
                  text="CORRER EN EL PARQUE BAJO LLUVIA HELADA"
                  startFrame={2}
                  durationInFrames={38}
                  currentFrame={frame}
                  cursorColor="#38BDF8"
                />
              </h1>
            </div>
          )}

          {/* Sub-corte 2 (f115 - f213 | 61.13s - 64.40s): SI FALTABA VELOCIDAD: A PURO PULMÓN */}
          {frame >= 115 && (
            <div
              style={{
                position: "absolute",
                top: "20%",
                left: "140px",
                zIndex: 20,
                maxWidth: "2800px",
                transform: `scale(${Math.max(0, entrance2)})`,
              }}
            >
              <div
                style={{
                  display: "inline-block",
                  padding: "14px 36px",
                  backgroundColor: "rgba(56, 189, 248, 0.2)",
                  border: "2px solid rgba(56, 189, 248, 0.6)",
                  borderRadius: "100px",
                  fontSize: "36px",
                  fontWeight: 900,
                  color: "#38BDF8",
                  letterSpacing: "6px",
                  textTransform: "uppercase",
                  marginBottom: "24px",
                  backdropFilter: "blur(12px)",
                }}
              >
                LA RESPUESTA DEL TITÁN
              </div>

              <h1
                style={{
                  fontSize: "155px",
                  fontWeight: 950,
                  color: "#FFFFFF",
                  lineHeight: 1.1,
                  margin: 0,
                  letterSpacing: "-2px",
                  textShadow: "0 20px 60px rgba(0,0,0,0.95)",
                }}
              >
                <TypewriterText
                  text='"SI FALTABA VELOCIDAD: A PURO PULMÓN"'
                  startFrame={116}
                  durationInFrames={40}
                  currentFrame={frame}
                  cursorColor="#38BDF8"
                />
              </h1>
            </div>
          )}
        </div>
      </Sequence>

      {/* 🎬 CORTE 3 (Frames 213 - 309 | Global 1932 - 2028 | 64.40s - 67.60s): "Si le sobraba peso, lo quemaría en el lodo." */}
      <Sequence from={213} durationInFrames={96}>
        <div style={{ position: "absolute", inset: 0, overflow: "hidden" }}>
          <TranscendenceWindow
            variant="video"
            src="broll/broll_09_running_rain.mp4"
            frame={frame - 213}
            width="100%"
            height="100%"
            borderRadius={0}
            borderGold={false}
            subtleZoom={true}
          />

          <div
            style={{
              position: "absolute",
              top: "20%",
              left: "140px",
              zIndex: 20,
              maxWidth: "2800px",
              transform: `scale(${Math.max(0, entrance3)})`,
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
                marginBottom: "24px",
                backdropFilter: "blur(12px)",
              }}
            >
              FORJANDO LA MENTALIDAD
            </div>

            <h1
              style={{
                fontSize: "155px",
                fontWeight: 950,
                color: "#FFFFFF",
                lineHeight: 1.1,
                margin: 0,
                letterSpacing: "-2px",
                textShadow: "0 20px 60px rgba(0,0,0,0.95)",
              }}
            >
              <TypewriterText
                text='"SI SOBRABA PESO: LO QUEMARÍA EN EL LODO"'
                startFrame={214}
                durationInFrames={40}
                currentFrame={frame}
                cursorColor="#F5C518"
              />
            </h1>
          </div>
        </div>
      </Sequence>

      {/* 🌧️ Lluvia y Relámpagos */}
      <RainOverlay intensity={1.0} lightningFrames={[35, 120, 220]} speed={2.0} />

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
