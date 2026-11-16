import React from "react";
import {
  AbsoluteFill,
  Sequence,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { MedicalTelemetry } from "../effects/MedicalTelemetry";
import { TranscendenceWindow } from "../../components/TranscendenceWindow";
import { TypewriterText } from "../../components/TypewriterText";

export const Shot08InjuryNorwich: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Duración total del plano: 135 frames (Global 2550 - 2685 | 85.00s - 89.50s)
  // Audio exacto: "y la dura lesión de pie en 2013 que frenó en seco su cuerpo."

  const entrance = spring({
    frame,
    fps,
    config: { damping: 18, mass: 0.8 },
  });

  // Glitch jitter matching the SFX at frame 0-30
  const isGlitching = frame < 30;
  const chromaticShift = isGlitching ? Math.sin(frame * 2.5) * 8 : 0;

  return (
    <AbsoluteFill
      style={{
        width: 3840,
        height: 2160,
        overflow: "hidden",
        backgroundColor: "#06070B",
        filter: isGlitching ? `drop-shadow(${chromaticShift}px 0 #EF4444)` : "none",
      }}
    >
      {/* 🎬 PLANO LESIÓN DE PIE EN 2013 (Frames 0 - 135 | 4.5s) */}
      <Sequence from={0} durationInFrames={135}>
        <div style={{ position: "absolute", inset: 0, overflow: "hidden" }}>
          <TranscendenceWindow
            variant="video"
            src="broll/broll_14_injury_limp.mp4"
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
              top: "16%",
              left: "140px",
              zIndex: 20,
              maxWidth: "2800px",
              transform: `scale(${Math.max(0, entrance)})`,
            }}
          >
            <div
              style={{
                display: "inline-block",
                padding: "14px 36px",
                backgroundColor: "rgba(239, 68, 68, 0.22)",
                border: "2px solid rgba(239, 68, 68, 0.6)",
                borderRadius: "100px",
                fontSize: "36px",
                fontWeight: 900,
                color: "#EF4444",
                letterSpacing: "6px",
                textTransform: "uppercase",
                marginBottom: "24px",
                backdropFilter: "blur(12px)",
              }}
            >
              AÑO 2013 · ALERTA MÉDICA DE CANTERA
            </div>

            <h1
              style={{
                fontSize: "155px",
                fontWeight: 950,
                color: "#FFFFFF",
                lineHeight: 1.1,
                margin: 0,
                letterSpacing: "-2px",
                textShadow: "0 20px 80px rgba(0,0,0,0.95), 0 0 80px rgba(239, 68, 68, 0.4)",
              }}
            >
              <TypewriterText
                text="LESIÓN DE PIE EN 2013: CUERPO FRENADO EN SECO"
                startFrame={2}
                durationInFrames={42}
                currentFrame={frame}
                cursorColor="#EF4444"
              />
            </h1>
          </div>
        </div>
      </Sequence>

      {/* 🏥 MEDICAL TELEMETRY HUD */}
      <MedicalTelemetry
        isGlitching={isGlitching}
        alertText="FRACTURA DEL QUINTO METATARSIANO · FRENADO EN SECO"
      />

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
