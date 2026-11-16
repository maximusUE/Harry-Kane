import React from "react";
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { Cinematic4KBackground } from "../Cinematic4KBackground";

export const Shot16DirectStare: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // ZOOM DE ÉNFASIS 3: Acercamiento íntimo e inquebrantable
  const emphasisZoom = interpolate(frame, [0, 390], [0.96, 1.22], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const card1 = spring({ frame: frame - 15, fps, config: { damping: 14 } });
  const card2 = spring({ frame: frame - 250, fps, config: { damping: 14 } });

  const opacity = interpolate(frame, [0, 15, 365, 390], [0, 1, 1, 0]);

  return (
    <AbsoluteFill style={{ width: 3840, height: 2160, overflow: "hidden" }}>
      <Cinematic4KBackground theme="gold" intensity={1.2} />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
          transform: `scale(${emphasisZoom})`,
          opacity,
          textAlign: "center",
          padding: "0 100px",
        }}
      >
        <div
          style={{
            transform: `scale(${Math.max(0, card1)})`,
            width: "1600px",
            backgroundColor: "rgba(10, 12, 18, 0.88)",
            border: "3px solid rgba(229, 184, 66, 0.45)",
            borderRadius: "40px",
            boxShadow: "0 50px 140px rgba(0, 0, 0, 0.95)",
            padding: "80px 100px",
            marginBottom: "30px",
          }}
        >
          <div style={{ fontSize: "140px", marginBottom: "30px" }}>👁️🔥</div>
          <h2
            style={{
              color: "#FFFFFF",
              fontSize: "72px",
              fontWeight: 900,
              letterSpacing: "-1px",
              margin: 0,
              fontFamily: "system-ui, -apple-system, sans-serif",
            }}
          >
            NO TE PIDO QUE ME CREAS A CIEGAS
          </h2>
          <p
            style={{
              color: "#CBD5E1",
              fontSize: "38px",
              fontStyle: "italic",
              fontFamily: "Georgia, serif",
              marginTop: "20px",
              lineHeight: 1.4,
              margin: "20px 0 0 0",
            }}
          >
            "Si hoy sientes que sobre tu cabeza pesa una maldición..."
          </p>

          {frame >= 250 && (
            <div
              style={{
                transform: `scale(${Math.max(0, card2)})`,
                marginTop: "40px",
                borderTop: "2px solid rgba(229, 184, 66, 0.3)",
                paddingTop: "35px",
              }}
            >
              <span
                style={{
                  color: "#E5B842",
                  fontSize: "52px",
                  fontWeight: 900,
                  letterSpacing: "6px",
                  fontFamily: "system-ui, sans-serif",
                  textTransform: "uppercase",
                  display: "block",
                }}
              >
                Solo regálate los próximos minutos
              </span>
            </div>
          )}
        </div>
      </div>
    </AbsoluteFill>
  );
};
