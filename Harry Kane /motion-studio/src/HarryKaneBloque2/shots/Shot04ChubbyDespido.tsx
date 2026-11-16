import React from "react";
import {
  AbsoluteFill,
  interpolate,
  spring,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
  Video,
} from "remotion";
import { TypewriterText } from "../../components/TypewriterText";

export const Shot04ChubbyDespido: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Duración total: 300 frames (10.0 segundos @ 30fps: Global 855 - 1155 | Segundos 0:28.5 - 0:38.5)

  // Entrada suave de la ficha de scouting al frame 15
  const cardEntrance = spring({
    frame: frame - 15,
    fps,
    config: { damping: 18, mass: 0.9 },
  });

  // Estampida brutal "DESPEDIDO" al frame 225 (Global 855 + 225 = 1080 = 36.0s cuando la voz dice "Despedido")
  const stampEntrance = spring({
    frame: frame - 225,
    fps,
    config: { damping: 10, mass: 0.5 },
  });

  // Sacudida de cámara (Camera Shake) del frame 225 al 255
  const shakeIntensity =
    frame >= 225 && frame < 255
      ? Math.sin((frame - 225) * 1.5) *
        Math.max(0, 1 - (frame - 225) / 30) *
        28
      : 0;

  // Destello rojo de impacto en el marco del despido (frames 225 a 245)
  const flash = interpolate(frame, [225, 228, 245], [0, 0.45, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill
      style={{
        width: 3840,
        height: 2160,
        overflow: "hidden",
        backgroundColor: "#06070B",
        transform: `translate(${shakeIntensity}px, ${shakeIntensity * 0.5}px)`,
      }}
    >
      {/* 🎬 VIDEO CLIP 2: Niño corriendo bajo la lluvia y en el lodo (Google Flow 10.4s @ 30fps) */}
      <div style={{ position: "absolute", inset: 0, overflow: "hidden" }}>
        <Video
          src={staticFile("broll/boy_running_rain_mud_10s.mp4")}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            filter: "contrast(1.2) brightness(0.8) saturate(0.9)",
            transform: `scale(${interpolate(frame, [0, 300], [1.0, 1.05], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
            })})`,
          }}
        />

        {/* Gradiente cinemático de contraste oscuro para legibilidad total */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(180deg, rgba(6,7,11,0.82) 0%, rgba(6,7,11,0.3) 45%, rgba(6,7,11,0.95) 100%)",
          }}
        />
      </div>

      {/* Red Flash Vignette on Stamp Impact */}
      {flash > 0 && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundColor: "#EF4444",
            opacity: flash,
            mixBlendMode: "overlay",
            pointerEvents: "none",
            zIndex: 40,
          }}
        />
      )}

      {/* ⌨️ Top Header: CANTERA ARSENAL FC · INFORME CONFIDENCIAL */}
      <div
        style={{
          position: "absolute",
          top: 220,
          left: 160,
          display: "flex",
          flexDirection: "column",
          gap: 16,
          zIndex: 20,
        }}
      >
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 16,
            padding: "12px 32px",
            backgroundColor: "rgba(239, 68, 68, 0.2)",
            border: "1.5px solid rgba(239, 68, 68, 0.6)",
            borderRadius: 30,
            backdropFilter: "blur(12px)",
          }}
        >
          <div style={{ width: 10, height: 10, borderRadius: "50%", backgroundColor: "#EF4444" }} />
          <span
            style={{
              fontFamily: "Cabinet Grotesk, Montserrat, sans-serif",
              fontSize: 26,
              fontWeight: 900,
              letterSpacing: 6,
              color: "#FCA5A5",
              textTransform: "uppercase",
            }}
          >
            CANTERA ARSENAL F.C. · INFORME CONFIDENCIAL
          </span>
        </div>
        <h2
          style={{
            fontFamily: "Cabinet Grotesk, Montserrat, sans-serif",
            fontSize: 78,
            fontWeight: 950,
            color: "#FFFFFF",
            margin: 0,
            letterSpacing: 3,
            textTransform: "uppercase",
            textShadow: "0 10px 40px rgba(0,0,0,0.95)",
          }}
        >
          <TypewriterText
            text='“UN POCO GORDITO Y POCO ATLÉTICO”'
            startFrame={10}
            durationInFrames={40}
            currentFrame={frame}
            cursorColor="#EF4444"
          />
        </h2>
      </div>

      {/* 📋 EXPEDIENTE CONFIDENCIAL DE SCOUTING LIAM BRADY (Ficha flotante en 3D sobre el video) */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 15,
          pointerEvents: "none",
        }}
      >
        <div
          style={{
            position: "relative",
            width: "2200px",
            padding: "60px 80px",
            backgroundColor: "rgba(10, 13, 20, 0.90)",
            backdropFilter: "blur(24px)",
            border: "2px solid rgba(239, 68, 68, 0.55)",
            borderRadius: "28px",
            boxShadow:
              "0 30px 90px rgba(0,0,0,0.95), 0 0 60px rgba(220, 38, 38, 0.22)",
            transform: `scale(${Math.max(0, cardEntrance)})`,
            display: "flex",
            flexDirection: "column",
            gap: "32px",
          }}
        >
          {/* Top Bar */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              borderBottom: "1.5px solid rgba(255,255,255,0.12)",
              paddingBottom: "20px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "18px" }}>
              <div
                style={{
                  width: "16px",
                  height: "16px",
                  borderRadius: "50%",
                  backgroundColor: "#EF4444",
                  boxShadow: "0 0 12px #EF4444",
                }}
              />
              <span
                style={{
                  color: "#EF4444",
                  fontSize: "32px",
                  fontWeight: 900,
                  letterSpacing: "4px",
                  fontFamily: "Cabinet Grotesk, Montserrat, sans-serif",
                }}
              >
                ARSENAL ACADEMY · INFORME CONFIDENCIAL DE SCOUTING
              </span>
            </div>
            <span
              style={{
                color: "#94A3B8",
                fontSize: "26px",
                fontWeight: 800,
                fontFamily: "Cabinet Grotesk, Montserrat, sans-serif",
                letterSpacing: "2px",
              }}
            >
              EVALUADOR: LIAM BRADY
            </span>
          </div>

          {/* Verdict Quote */}
          <div
            style={{
              fontSize: "52px",
              fontWeight: 900,
              color: "#FFFFFF",
              lineHeight: 1.35,
              fontStyle: "italic",
              fontFamily: "Cabinet Grotesk, Montserrat, sans-serif",
              textShadow: "0 4px 20px rgba(0,0,0,0.8)",
            }}
          >
            “Es un poco gordito, no es atlético y no creemos que tenga el futuro para ser futbolista profesional.”
          </div>

          {/* Biometric Status Row */}
          <div style={{ display: "flex", gap: "36px" }}>
            <div
              style={{
                flex: 1,
                backgroundColor: "rgba(239, 68, 68, 0.15)",
                border: "1.5px solid rgba(239, 68, 68, 0.4)",
                borderRadius: "16px",
                padding: "20px 28px",
              }}
            >
              <div
                style={{
                  color: "#FCA5A5",
                  fontSize: "22px",
                  fontWeight: 800,
                  letterSpacing: 2,
                  fontFamily: "monospace",
                }}
              >
                DICTAMEN FINAL
              </div>
              <div
                style={{
                  color: "#FFFFFF",
                  fontSize: "36px",
                  fontWeight: 950,
                  marginTop: 4,
                  fontFamily: "Cabinet Grotesk, Montserrat, sans-serif",
                }}
              >
                DESCARTADO / RECHAZADO
              </div>
            </div>
            <div
              style={{
                flex: 1,
                backgroundColor: "rgba(56, 189, 248, 0.12)",
                border: "1.5px solid rgba(56, 189, 248, 0.4)",
                borderRadius: "16px",
                padding: "20px 28px",
              }}
            >
              <div
                style={{
                  color: "#7DD3FC",
                  fontSize: "22px",
                  fontWeight: 800,
                  letterSpacing: 2,
                  fontFamily: "monospace",
                }}
              >
                EDAD DEL SUJETO
              </div>
              <div
                style={{
                  color: "#FFFFFF",
                  fontSize: "36px",
                  fontWeight: 950,
                  marginTop: 4,
                  fontFamily: "Cabinet Grotesk, Montserrat, sans-serif",
                }}
              >
                8 AÑOS DE EDAD
              </div>
            </div>
          </div>
        </div>

        {/* 💥 SELLO BRUTAL "DESPEDIDO · FUERA DEL CLUB" (Slam al frame 225 = 36.0s exactos) */}
        {frame >= 225 && (
          <div
            style={{
              position: "absolute",
              transform: `scale(${Math.max(0, stampEntrance)}) rotate(-7deg)`,
              padding: "45px 120px",
              backgroundColor: "rgba(220, 38, 38, 0.96)",
              border: "12px solid #FFFFFF",
              borderRadius: "32px",
              boxShadow:
                "0 40px 100px rgba(0,0,0,0.95), 0 0 100px #EF4444, inset 0 0 30px rgba(0,0,0,0.4)",
              zIndex: 35,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <span
              style={{
                fontSize: "155px",
                fontWeight: 950,
                color: "#FFFFFF",
                letterSpacing: "18px",
                textTransform: "uppercase",
                fontFamily: "Cabinet Grotesk, Montserrat, sans-serif",
                textShadow: "0 10px 25px rgba(0,0,0,0.9)",
                lineHeight: 1,
              }}
            >
              DESPEDIDO · FUERA DEL CLUB
            </span>
            <span
              style={{
                fontSize: "44px",
                fontWeight: 800,
                color: "#FCA5A5",
                letterSpacing: "8px",
                textTransform: "uppercase",
                fontFamily: "monospace",
                marginTop: "16px",
              }}
            >
              CANTERA ARSENAL F.C. · DICTAMEN DEFINITIVO
            </span>
          </div>
        )}
      </div>

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
