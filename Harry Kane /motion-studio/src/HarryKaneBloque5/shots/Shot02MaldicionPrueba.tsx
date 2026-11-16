import React from "react";
import {
  AbsoluteFill,
  interpolate,
  spring,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
  Img,
} from "remotion";
import { TypewriterText } from "../../components/TypewriterText";

/**
 * 🎬 SHOT 02: LA FALACIA DE LA MALDICIÓN Y LA PRUEBA DE CONVICCIÓN
 * Global Frames: 480 -> 877 (16.00s -> 29.22s | 397 frames = 13.22s)
 * "La maldición no existía. La maldición solo era la prueba que la vida le puso enfrente para ver si su convicción era más fuerte que la opinión de millones de extraños."
 */
export const Shot02MaldicionPrueba: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const entrance = spring({
    frame,
    fps,
    config: { damping: 18, mass: 0.9 },
  });

  const cardSlam = spring({
    frame: Math.max(0, frame - 90),
    fps,
    config: { damping: 14, stiffness: 190, mass: 0.8 },
  });

  return (
    <AbsoluteFill style={{ width: 3840, height: 2160, overflow: "hidden", backgroundColor: "#07080B" }}>
      <div style={{ position: "absolute", inset: 0, overflow: "hidden" }}>
        <Img
          src={staticFile("estadio_lluvia_nocturna_focos.jpg")}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            filter: "contrast(1.35) brightness(0.42) saturate(0.85)",
            transform: `scale(${interpolate(frame, [0, 397], [1.0, 1.07], { extrapolateRight: "clamp" })})`,
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(circle at center, rgba(239, 68, 68, 0.2) 0%, rgba(7, 8, 11, 0.94) 80%)",
          }}
        />

        {/* Panel Central con la Ley de la Convicción */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            paddingTop: 120,
            zIndex: 25,
          }}
        >
          <div
            style={{
              padding: "64px 100px",
              backgroundColor: "rgba(18, 21, 30, 0.94)",
              border: "3px solid #EF4444",
              borderRadius: 32,
              boxShadow: "0 35px 90px rgba(0,0,0,0.95), 0 0 60px rgba(239, 68, 68, 0.35)",
              textAlign: "center",
              maxWidth: 2400,
              opacity: cardSlam,
              transform: `scale(${interpolate(cardSlam, [0, 1], [0.92, 1.0])})`,
            }}
          >
            <div style={{ fontSize: 26, fontWeight: 900, color: "#EF4444", letterSpacing: 6 }}>
              PRINCIPIO FUNDAMENTAL · MDC
            </div>
            <div
              style={{
                fontSize: 84,
                fontWeight: 950,
                color: "#FFFFFF",
                fontFamily: "Cabinet Grotesk, Montserrat, sans-serif",
                marginTop: 20,
                letterSpacing: 1,
                lineHeight: 1.15,
              }}
            >
              “LA MALDICIÓN NUNCA EXISTIÓ”
            </div>
            <div
              style={{
                fontSize: 34,
                color: "#94A3B8",
                fontWeight: 600,
                marginTop: 20,
                maxWidth: 1800,
                lineHeight: 1.4,
              }}
            >
              Era solo el filtro implacable de la vida para medir si tu convicción interior supera el ruido de millones de extraños.
            </div>
          </div>
        </div>
      </div>

      {/* 🏷️ OVERLAY DE TÍTULO SUPERIOR SINCRONIZADO AL AUDIO */}
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
            backgroundColor: "rgba(18, 21, 30, 0.9)",
            border: "1.5px solid rgba(239, 68, 68, 0.75)",
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
              backgroundColor: "#EF4444",
              boxShadow: "0 0 14px #EF4444",
            }}
          />
          <span
            style={{
              fontFamily: "Cabinet Grotesk, Montserrat, sans-serif",
              fontSize: 24,
              fontWeight: 900,
              letterSpacing: 4,
              color: "#EF4444",
              textTransform: "uppercase",
            }}
          >
            EXPEDIENTE MDC · VERDAD DEFINITIVA // EL FILTRO DE LA VIDA
          </span>
        </div>

        <h1
          style={{
            fontFamily: "Cabinet Grotesk, Montserrat, sans-serif",
            fontSize: 82,
            fontWeight: 950,
            color: "#FFFFFF",
            margin: "20px 0 0 0",
            letterSpacing: 1,
            textShadow: "0 10px 40px rgba(0,0,0,0.95), 0 0 50px rgba(239,68,68,0.35)",
          }}
        >
          <TypewriterText
            text="LA MALDICIÓN NUNCA EXISTIÓ"
            startFrame={2}
            durationInFrames={34}
            currentFrame={frame}
            cursorColor="#EF4444"
          />
        </h1>
      </div>
    </AbsoluteFill>
  );
};

