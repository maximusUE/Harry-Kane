import React from "react";
import {
  AbsoluteFill,
  Img,
  interpolate,
  Sequence,
  staticFile,
  useCurrentFrame,
  Video,
} from "remotion";
import { RainOverlay } from "../effects/RainOverlay";
import { TypewriterText } from "../../components/TypewriterText";

export const Shot01London2001: React.FC = () => {
  const frame = useCurrentFrame();

  // Subtle Ken Burns zoom 1.0 -> 1.05 on each of the 4 titan photos
  const galaScale1 = interpolate(frame, [0, 45], [1.0, 1.05], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const galaScale2 = interpolate(frame, [45, 90], [1.0, 1.05], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const galaScale3 = interpolate(frame, [90, 135], [1.0, 1.05], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const galaScale4 = interpolate(frame, [135, 180], [1.0, 1.05], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const photo5Scale = interpolate(frame, [180, 221], [1.0, 1.05], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Flashes de obturador de cámara en cada corte (frames 0, 45, 90, 135 y 180)
  const flash1 = interpolate(frame, [0, 1, 4], [0.65, 0.65, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const flash2 = interpolate(frame, [44, 45, 49], [0, 0.65, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const flash3 = interpolate(frame, [89, 90, 94], [0, 0.65, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const flash4 = interpolate(frame, [134, 135, 139], [0, 0.65, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const flash5 = interpolate(frame, [179, 180, 184], [0, 0.65, 0], {
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
      }}
    >
      {/* 🎬 FOTO 1 (Frames 0 - 45 | 0.0s - 1.5s): Kane besando el Balón de Oro */}
      <Sequence from={0} durationInFrames={45}>
        <div style={{ position: "absolute", inset: 0, overflow: "hidden" }}>
          <Img
            src={staticFile("kane_titan_01_kiss_ballondor.jpg")}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center 30%",
              transform: `scale(${galaScale1})`,
              filter: "contrast(1.12) brightness(0.95) saturate(1.08)",
            }}
          />
          {/* Atmospheric Gold Radial Gradient */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "radial-gradient(circle at 60% 45%, rgba(245, 197, 24, 0.12) 0%, rgba(6,7,11,0.7) 90%)",
            }}
          />
          {/* Camera Flash */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              backgroundColor: "#FFFFFF",
              opacity: flash1,
              pointerEvents: "none",
            }}
          />

          {/* Badge: Consagración Mundial */}
          <div
            style={{
              position: "absolute",
              bottom: 180,
              left: 180,
              display: "flex",
              alignItems: "center",
              gap: 16,
              padding: "16px 36px",
              backgroundColor: "rgba(10, 12, 18, 0.88)",
              backdropFilter: "blur(14px)",
              border: "1.5px solid rgba(245, 197, 24, 0.4)",
              borderRadius: 40,
            }}
          >
            <div
              style={{
                width: 12,
                height: 12,
                borderRadius: "50%",
                backgroundColor: "#F5C518",
                boxShadow: "0 0 16px #F5C518",
              }}
            />
            <span
              style={{
                fontFamily: "Cabinet Grotesk, sans-serif",
                fontSize: 26,
                fontWeight: 800,
                letterSpacing: 4,
                color: "#F5C518",
                textTransform: "uppercase",
              }}
            >
              PARÍS · CONSAGRACIÓN MUNDIAL
            </span>
          </div>
        </div>
      </Sequence>

      {/* 🎬 FOTO 2 (Frames 45 - 90 | 1.5s - 3.0s): Kane sosteniendo el trofeo */}
      <Sequence from={45} durationInFrames={45}>
        <div style={{ position: "absolute", inset: 0, overflow: "hidden" }}>
          <Img
            src={staticFile("kane_titan_02_lift_trophy.jpg")}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center 25%",
              transform: `scale(${galaScale2})`,
              filter: "contrast(1.12) brightness(0.95) saturate(1.08)",
            }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "radial-gradient(circle at center, rgba(6,7,11,0.15) 0%, rgba(6,7,11,0.75) 90%)",
            }}
          />
          {/* Camera Flash */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              backgroundColor: "#FFFFFF",
              opacity: flash2,
              pointerEvents: "none",
            }}
          />

          {/* Dossier Badge */}
          <div
            style={{
              position: "absolute",
              bottom: 180,
              right: 180,
              display: "flex",
              alignItems: "center",
              gap: 16,
              padding: "16px 36px",
              backgroundColor: "rgba(10, 12, 18, 0.88)",
              backdropFilter: "blur(14px)",
              border: "1.5px solid rgba(255, 255, 255, 0.2)",
              borderRadius: 40,
            }}
          >
            <span
              style={{
                fontFamily: "Cabinet Grotesk, sans-serif",
                fontSize: 26,
                fontWeight: 800,
                letterSpacing: 3,
                color: "#FFFFFF",
              }}
            >
              LA MENTE DE UN TITÁN · 2026
            </span>
          </div>
        </div>
      </Sequence>

      {/* 🎬 FOTO 3 (Frames 90 - 135 | 3.0s - 4.5s): Kane primer plano con el balón dorado */}
      <Sequence from={90} durationInFrames={45}>
        <div style={{ position: "absolute", inset: 0, overflow: "hidden" }}>
          <Img
            src={staticFile("kane_titan_03_golden_football.jpg")}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center 25%",
              transform: `scale(${galaScale3})`,
              filter: "contrast(1.14) brightness(0.94) saturate(1.1)",
            }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "radial-gradient(circle at center, rgba(6,7,11,0.2) 0%, rgba(6,7,11,0.8) 90%)",
            }}
          />
          {/* Camera Flash */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              backgroundColor: "#FFFFFF",
              opacity: flash3,
              pointerEvents: "none",
            }}
          />

          {/* Dossier Badge */}
          <div
            style={{
              position: "absolute",
              bottom: 180,
              left: 180,
              display: "flex",
              alignItems: "center",
              gap: 16,
              padding: "16px 36px",
              backgroundColor: "rgba(10, 12, 18, 0.88)",
              backdropFilter: "blur(14px)",
              border: "1.5px solid rgba(245, 197, 24, 0.35)",
              borderRadius: 40,
            }}
          >
            <span
              style={{
                fontFamily: "Cabinet Grotesk, sans-serif",
                fontSize: 26,
                fontWeight: 800,
                letterSpacing: 3,
                color: "#F5C518",
              }}
            >
              EN LA CIMA DEL MUNDO · EL MÁXIMO ARTILLERO
            </span>
          </div>
        </div>
      </Sequence>

      {/* 🎬 FOTO 4 (Frames 135 - 180 | 4.5s - 6.0s): Kane celebrando en el césped del estadio */}
      <Sequence from={135} durationInFrames={45}>
        <div style={{ position: "absolute", inset: 0, overflow: "hidden" }}>
          <Img
            src={staticFile("kane_titan_04_pitch_trophy.jpg")}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center 25%",
              transform: `scale(${galaScale4})`,
              filter: "contrast(1.12) brightness(0.96) saturate(1.1)",
            }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "radial-gradient(circle at center, rgba(6,7,11,0.15) 0%, rgba(6,7,11,0.75) 90%)",
            }}
          />
          {/* Camera Flash */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              backgroundColor: "#FFFFFF",
              opacity: flash4,
              pointerEvents: "none",
            }}
          />

          {/* Badge */}
          <div
            style={{
              position: "absolute",
              bottom: 180,
              right: 180,
              display: "flex",
              alignItems: "center",
              gap: 16,
              padding: "16px 36px",
              backgroundColor: "rgba(10, 12, 18, 0.88)",
              backdropFilter: "blur(14px)",
              border: "1.5px solid rgba(255, 255, 255, 0.25)",
              borderRadius: 40,
            }}
          >
            <span
              style={{
                fontFamily: "Cabinet Grotesk, sans-serif",
                fontSize: 26,
                fontWeight: 800,
                letterSpacing: 4,
                color: "#FFFFFF",
                textTransform: "uppercase",
              }}
            >
              LA GLORIA CONQUISTADA · EN EL CÉSPED
            </span>
          </div>
        </div>
      </Sequence>

      {/* 🎬 CORTE 5 (Frames 180 - 221 | 6.0s - 7.38s): Kane 4 - El comienzo de la historia */}
      <Sequence from={180} durationInFrames={41}>
        <div style={{ position: "absolute", inset: 0, overflow: "hidden" }}>
          <Img
            src={staticFile("kane_4.jpg")}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center center",
              transform: `scale(${photo5Scale})`,
              filter: "contrast(1.15) brightness(0.92) saturate(1.08)",
            }}
          />
          {/* Vignette & Gold Atmospheric Gradient */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "radial-gradient(circle at center, rgba(6,7,11,0.2) 0%, rgba(6,7,11,0.85) 90%)",
            }}
          />
          {/* Camera Flash */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              backgroundColor: "#FFFFFF",
              opacity: flash5,
              pointerEvents: "none",
            }}
          />

          {/* Badge */}
          <div
            style={{
              position: "absolute",
              bottom: 180,
              left: 180,
              display: "flex",
              alignItems: "center",
              gap: 16,
              padding: "16px 36px",
              backgroundColor: "rgba(10, 12, 18, 0.88)",
              backdropFilter: "blur(14px)",
              border: "1.5px solid rgba(245, 197, 24, 0.4)",
              borderRadius: 40,
            }}
          >
            <div
              style={{
                width: 12,
                height: 12,
                borderRadius: "50%",
                backgroundColor: "#F5C518",
                boxShadow: "0 0 16px #F5C518",
              }}
            />
            <span
              style={{
                fontFamily: "Cabinet Grotesk, sans-serif",
                fontSize: 26,
                fontWeight: 800,
                letterSpacing: 4,
                color: "#F5C518",
                textTransform: "uppercase",
              }}
            >
              EL COMIENZO DE LA HISTORIA · LONDRES
            </span>
          </div>
        </div>
        <RainOverlay intensity={0.35} lightningFrames={[195, 215]} speed={1.2} />
      </Sequence>

      {/* 🎬 CORTE 6 (Frames 221 - 285 | 7.38s - 9.50s): LONDRES, AÑO 2001 - EFECTO MÁQUINA DE ESCRIBIR */}
      <Sequence from={221} durationInFrames={64}>
        <div style={{ position: "absolute", inset: 0, overflow: "hidden" }}>
          {/* Dark textured stadium pitch background */}
          <Video
            src={staticFile("broll/broll_03_childhood_pitch.mp4")}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              filter: "contrast(1.3) brightness(0.4) saturate(0.8)",
              transform: `scale(${1.0 + (frame - 221) * 0.001})`,
            }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "radial-gradient(circle at center, rgba(6,7,11,0.6) 0%, rgba(6,7,11,0.96) 85%)",
            }}
          />
          <RainOverlay intensity={0.3} speed={1.0} />

          {/* Central Stage: Big Bold Typewriter Typography */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              zIndex: 20,
            }}
          >
            {/* Dossier Teletype Header */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 16,
                padding: "12px 32px",
                backgroundColor: "rgba(56, 189, 248, 0.15)",
                border: "1.5px solid rgba(56, 189, 248, 0.5)",
                borderRadius: 30,
                marginBottom: 28,
                backdropFilter: "blur(12px)",
              }}
            >
              <div
                style={{
                  width: 10,
                  height: 10,
                  borderRadius: "50%",
                  backgroundColor: "#38BDF8",
                  boxShadow: "0 0 14px #38BDF8",
                }}
              />
              <span
                style={{
                  fontFamily: "Cabinet Grotesk, sans-serif",
                  fontSize: 26,
                  fontWeight: 900,
                  letterSpacing: 6,
                  color: "#38BDF8",
                  textTransform: "uppercase",
                }}
              >
                CYTM SPORTS · RECONSTRUCCIÓN HISTÓRICA
              </span>
            </div>

            {/* Typewriter Colossal Title */}
            <h1
              style={{
                fontSize: 170,
                fontWeight: 950,
                color: "#FFFFFF",
                letterSpacing: 14,
                textTransform: "uppercase",
                margin: 0,
                fontFamily: "Cabinet Grotesk, sans-serif",
                textShadow:
                  "0 0 80px rgba(56, 189, 248, 0.45), 0 20px 40px rgba(0,0,0,0.95)",
                lineHeight: 1.1,
              }}
            >
              <TypewriterText
                text="LONDRES, AÑO 2001"
                startFrame={221}
                durationInFrames={45}
                currentFrame={frame}
                cursorColor="#38BDF8"
              />
            </h1>
          </div>
        </div>
      </Sequence>
    </AbsoluteFill>
  );
};
