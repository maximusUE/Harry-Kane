import React from "react";
import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";

interface Props {
  heartRate?: number;
  alertText?: string;
  isGlitching?: boolean;
}

export const MedicalTelemetry: React.FC<Props> = ({
  alertText = "FRACTURA DEL QUINTO METATARSIANO DETECTADA",
  isGlitching = false,
}) => {
  const frame = useCurrentFrame();

  // Moving scanline
  const scanX = (frame * 12) % 3840;

  // Heartbeat rate animation
  const bpm = Math.round(interpolate(frame, [0, 100, 300], [135, 95, 72]));

  // Glitch jitter
  const glitchX = isGlitching ? (Math.random() - 0.5) * 20 : 0;
  const glitchY = isGlitching ? (Math.random() - 0.5) * 8 : 0;

  return (
    <AbsoluteFill
      style={{
        pointerEvents: "none",
        transform: `translate(${glitchX}px, ${glitchY}px)`,
        fontFamily: "monospace",
      }}
    >
      {/* Medical HUD Grid */}
      <div
        style={{
          position: "absolute",
          bottom: "160px",
          left: "220px",
          right: "220px",
          height: "220px",
          backgroundColor: "rgba(15, 23, 42, 0.75)",
          border: "2px solid rgba(239, 68, 68, 0.4)",
          borderRadius: "24px",
          backdropFilter: "blur(12px)",
          padding: "24px 40px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          boxShadow: "0 20px 50px rgba(0,0,0,0.8), inset 0 0 40px rgba(239, 68, 68, 0.15)",
        }}
      >
        {/* ECG Waveform SVG */}
        <div style={{ flex: 1, height: "100%", position: "relative" }}>
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              fontSize: "24px",
              fontWeight: 700,
              color: "#EF4444",
              letterSpacing: "4px",
            }}
          >
            ECG TELEMETRY // NORWICH MEDICAL ARCHIVE
          </div>

          <svg
            width="100%"
            height="140"
            viewBox="0 0 1600 140"
            preserveAspectRatio="none"
            style={{ marginTop: "30px" }}
          >
            <path
              d="M 0 70 L 200 70 L 220 50 L 240 90 L 260 20 L 280 120 L 300 70 L 500 70 L 520 50 L 540 90 L 560 20 L 580 120 L 600 70 L 800 70 L 820 50 L 840 90 L 860 20 L 880 120 L 900 70 L 1100 70 L 1120 50 L 1140 90 L 1160 20 L 1180 120 L 1200 70 L 1400 70 L 1420 50 L 1440 90 L 1460 20 L 1480 120 L 1600 70"
              fill="none"
              stroke="#EF4444"
              strokeWidth="4"
              opacity="0.8"
            />
          </svg>

          {/* Sweeping scan vertical bar */}
          <div
            style={{
              position: "absolute",
              top: 20,
              bottom: 0,
              left: `${scanX % 1600}px`,
              width: "4px",
              backgroundColor: "#FFFFFF",
              boxShadow: "0 0 16px #EF4444",
            }}
          />
        </div>

        {/* Right Info Box */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
            gap: "10px",
            paddingLeft: "40px",
            borderLeft: "2px solid rgba(239, 68, 68, 0.3)",
          }}
        >
          <div style={{ display: "flex", alignItems: "baseline", gap: "12px" }}>
            <span style={{ fontSize: "56px", fontWeight: 900, color: "#EF4444" }}>
              {bpm}
            </span>
            <span style={{ fontSize: "24px", color: "#FCA5A5", fontWeight: 700 }}>
              BPM
            </span>
          </div>
          <div
            style={{
              padding: "8px 20px",
              backgroundColor: "rgba(239, 68, 68, 0.2)",
              borderRadius: "8px",
              border: "1px solid #EF4444",
              fontSize: "20px",
              fontWeight: 800,
              color: "#FFFFFF",
              letterSpacing: "2px",
            }}
          >
            {alertText}
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};
