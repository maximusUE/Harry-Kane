import React from "react";
import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { Cinematic4KBackground } from "../Cinematic4KBackground";

export const Shot12AboutYou: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // "Este video se trata de ti"
  const titleSpring = spring({
    frame,
    fps,
    config: { damping: 14, mass: 0.8 },
  });

  // "Detente un segundo..." (frame 120)
  const stopSpring = spring({
    frame: frame - 144,
    fps,
    config: { damping: 14, mass: 0.8 },
  });

  // "¿Cuántas veces en tu vida...?" (frame 240)
  const questionSpring = spring({
    frame: frame - 330,
    fps,
    config: { damping: 14, mass: 0.8 },
  });

  const opacity = interpolate(frame, [0, 15, 395, 420], [0, 1, 1, 0]);

  return (
    <AbsoluteFill style={{ width: 3840, height: 2160 }}>
      <Cinematic4KBackground theme="deepNavy" />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
          opacity,
          textAlign: "center",
          padding: "0 100px",
        }}
      >
        <div
          style={{
            transform: `scale(${Math.max(0, titleSpring)})`,
          }}
        >
          <span
            style={{
              color: "#94A3B8",
              fontSize: "36px",
              letterSpacing: "12px",
              textTransform: "uppercase",
              fontFamily: "system-ui, sans-serif",
              fontWeight: 800,
              display: "block",
              marginBottom: "30px",
            }}
          >
            ROMPAMOS LA CUARTA PARED POR UN MOMENTO
          </span>

          <h1
            style={{
              fontSize: "135px",
              fontWeight: 900,
              color: "#FFFFFF",
              letterSpacing: "-3px",
              lineHeight: 1.1,
              fontFamily: "system-ui, -apple-system, sans-serif",
              margin: 0,
            }}
          >
            ESTE VIDEO NO ES SOBRE HARRY KANE.
            <br />
            <span
              style={{
                background:
                  "linear-gradient(135deg, #38BDF8 0%, #818CF8 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              ESTE VIDEO SE TRATA DE TI.
            </span>
          </h1>
        </div>

        {frame >= 120 && (
          <div
            style={{
              transform: `scale(${Math.max(0, stopSpring)})`,
              marginTop: "50px",
            }}
          >
            <span
              style={{
                color: "#E2E8F0",
                fontSize: "44px",
                fontWeight: 700,
                letterSpacing: "4px",
                textTransform: "uppercase",
                fontFamily: "system-ui, sans-serif",
              }}
            >
              Detente un segundo y sé honesto contigo mismo...
            </span>
          </div>
        )}

        {frame >= 240 && (
          <div
            style={{
              transform: `scale(${Math.max(0, questionSpring)})`,
              marginTop: "45px",
              backgroundColor: "rgba(15, 23, 42, 0.85)",
              border: "3px solid rgba(56, 189, 248, 0.45)",
              padding: "26px 70px",
              borderRadius: "60px",
              backdropFilter: "blur(20px)",
              boxShadow: "0 30px 80px rgba(0, 0, 0, 0.8)",
            }}
          >
            <p
              style={{
                color: "#38BDF8",
                fontSize: "44px",
                fontStyle: "italic",
                fontFamily: "Georgia, serif",
                margin: 0,
              }}
            >
              "¿Cuántas veces en tu vida has sentido que estás en un callejón sin salida?"
            </p>
          </div>
        )}
      </div>
    </AbsoluteFill>
  );
};
