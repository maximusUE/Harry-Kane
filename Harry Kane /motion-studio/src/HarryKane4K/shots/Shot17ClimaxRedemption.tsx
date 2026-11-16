import React from "react";
import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { Cinematic4KBackground } from "../Cinematic4KBackground";

export const Shot17ClimaxRedemption: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const badgeSpring = spring({ frame, fps, config: { damping: 14, mass: 0.8 } });
  const storySpring = spring({ frame: frame - 20, fps, config: { damping: 13, mass: 0.8 } });
  const line1Spring = spring({ frame: frame - 280, fps, config: { damping: 12, mass: 0.8 } });
  const line2Spring = spring({ frame: frame - 365, fps, config: { damping: 10, mass: 0.6 } });

  const cameraScale = interpolate(frame, [0, 450], [0.94, 1.1]);
  const opacity = interpolate(frame, [0, 15, 420, 450], [0, 1, 1, 0]);

  return (
    <AbsoluteFill style={{ width: 3840, height: 2160, overflow: "hidden" }}>
      <Cinematic4KBackground theme="gold" intensity={1.7} />

      {/* Aura dorada masiva de clímax */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "2400px",
          height: "2400px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(229, 184, 66, 0.32) 0%, transparent 65%)",
          filter: "blur(150px)",
        }}
      />

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
          transform: `scale(${cameraScale})`,
          opacity,
          textAlign: "center",
          padding: "0 120px",
        }}
      >
        <div
          style={{
            transform: `scale(${Math.max(0, badgeSpring)})`,
            border: "3px solid rgba(229, 184, 66, 0.5)",
            backgroundColor: "rgba(229, 184, 66, 0.12)",
            padding: "20px 60px",
            borderRadius: "60px",
            marginBottom: "40px",
          }}
        >
          <span
            style={{
              color: "#F5DE88",
              fontSize: "36px",
              fontWeight: 900,
              letterSpacing: "8px",
              textTransform: "uppercase",
              fontFamily: "system-ui, sans-serif",
            }}
          >
            ✦ LA REDENCIÓN HISTÓRICA ✦
          </span>
        </div>

        {frame < 275 && (
          <div
            style={{
              transform: `scale(${Math.max(0, storySpring)})`,
              maxWidth: "2400px",
            }}
          >
            <p
              style={{
                color: "#E2E8F0",
                fontSize: "56px",
                fontStyle: "italic",
                fontFamily: "Georgia, serif",
                lineHeight: 1.4,
                margin: 0,
              }}
            >
              "De ser el descarte con sobrepeso de una academia al hombre más respetado del planeta..."
            </p>
          </div>
        )}

        {frame >= 275 && (
          <div style={{ maxWidth: "2800px" }}>
            <h2
              style={{
                transform: `scale(${Math.max(0, line1Spring)})`,
                fontSize: "125px",
                fontWeight: 900,
                color: "#FFFFFF",
                letterSpacing: "-2px",
                lineHeight: 1.15,
                margin: 0,
                fontFamily: "system-ui, -apple-system, sans-serif",
                textTransform: "uppercase",
              }}
            >
              Nadie está condenado a perder para siempre...
            </h2>

            {frame >= 365 && (
              <h1
                style={{
                  transform: `scale(${Math.max(0, line2Spring)})`,
                  fontSize: "165px",
                  fontWeight: 900,
                  marginTop: "35px",
                  background:
                    "linear-gradient(135deg, #FFFFFF 0%, #F5DE88 40%, #E5B842 75%, #A17F1A 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  letterSpacing: "-3px",
                  textTransform: "uppercase",
                  fontFamily: "system-ui, -apple-system, sans-serif",
                  filter: "drop-shadow(0 30px 80px rgba(229, 184, 66, 0.6))",
                  margin: "35px 0 0 0",
                }}
              >
                A menos que decida rendirse.
              </h1>
            )}
          </div>
        )}
      </div>
    </AbsoluteFill>
  );
};
