import React from "react";
import {
  AbsoluteFill,
  interpolate,
  Sequence,
  spring,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
  Img,
} from "remotion";
import { TypewriterText } from "../../components/TypewriterText";

/**
 * 🎬 SHOT 07: LEVÁNTATE Y SAL A DEMOSTRARLE AL MUNDO (OUTRO & CTA)
 * Global Frames: 2709 -> 3274 (90.29s -> 109.13s | 565 frames = 18.84s)
 * - Fase A (f0 - f167 | 90.29s - 95.85s): "Apaga este video. Levántate de esa silla. Y sal a demostrarle al mundo de qué estás hecho."
 * - Fase B (f167 - f565 | 95.85s - 109.13s): "Si este mensaje encendió algo en tu interior que estaba dormido, suscríbete y déjame en los comentarios: ¿Cuál es esa batalla que prometes ganar a partir de hoy? Te leo abajo. Nos vemos en el próximo episodio."
 */
export const Shot07LevantateYDemuestra: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const entrance = spring({
    frame,
    fps,
    config: { damping: 18, mass: 0.9 },
  });

  const ctaEntrance = spring({
    frame: Math.max(0, frame - 167),
    fps,
    config: { damping: 16, stiffness: 190 },
  });

  const isPhaseB = frame >= 167;

  return (
    <AbsoluteFill style={{ width: 3840, height: 2160, overflow: "hidden", backgroundColor: "#07080B" }}>
      {/* 🎬 FASE A (f0 - f167 | 90.29s - 95.85s): "Levántate de esa silla y sal a demostrarle al mundo..." */}
      <Sequence from={0} durationInFrames={167}>
        <div style={{ position: "absolute", inset: 0, overflow: "hidden" }}>
          <Img
            src={staticFile("kane_titan_04_pitch_trophy.jpg")}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              filter: "contrast(1.28) brightness(0.5) saturate(1.1)",
              transform: `scale(${interpolate(frame, [0, 167], [1.0, 1.06], { extrapolateRight: "clamp" })})`,
            }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "radial-gradient(circle at center, rgba(245, 197, 24, 0.22) 0%, rgba(7, 8, 11, 0.94) 80%)",
            }}
          />

          <div
            style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              paddingTop: 110,
              zIndex: 25,
            }}
          >
            <div
              style={{
                padding: "60px 100px",
                backgroundColor: "rgba(18, 21, 30, 0.94)",
                border: "3.5px solid #F5C518",
                borderRadius: 32,
                boxShadow: "0 35px 90px rgba(0,0,0,0.95), 0 0 70px rgba(245, 197, 24, 0.4)",
                textAlign: "center",
              }}
            >
              <div style={{ fontSize: 26, fontWeight: 900, color: "#F5C518", letterSpacing: 6 }}>
                ORDEN DE EJECUCIÓN · MDC
              </div>
              <div
                style={{
                  fontSize: 88,
                  fontWeight: 950,
                  color: "#FFFFFF",
                  fontFamily: "Cabinet Grotesk, Montserrat, sans-serif",
                  marginTop: 18,
                  lineHeight: 1.15,
                }}
              >
                LEVÁNTATE DE ESA SILLA
              </div>
              <div
                style={{
                  fontSize: 34,
                  color: "#F5C518",
                  fontWeight: 800,
                  marginTop: 16,
                  letterSpacing: 2,
                }}
              >
                Y SAL A DEMOSTRARLE AL MUNDO DE QUÉ ESTÁS HECHO
              </div>
            </div>
          </div>
        </div>
      </Sequence>

      {/* 🎬 FASE B (f167 - f565 | 95.85s - 109.13s): CTA Suscríbete & Comentarios */}
      <Sequence from={167} durationInFrames={398}>
        <div style={{ position: "absolute", inset: 0, overflow: "hidden" }}>
          <Img
            src={staticFile("estadio_lluvia_nocturna_focos.jpg")}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              filter: "contrast(1.3) brightness(0.4) saturate(0.85)",
              transform: `scale(${interpolate(frame, [167, 565], [1.0, 1.07], { extrapolateRight: "clamp" })})`,
            }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(135deg, rgba(7,8,11,0.95) 0%, rgba(18,21,30,0.85) 50%, rgba(7,8,11,0.95) 100%)",
            }}
          />

          <div
            style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              paddingTop: 80,
              zIndex: 25,
              opacity: ctaEntrance,
              transform: `scale(${interpolate(ctaEntrance, [0, 1], [0.94, 1.0])})`,
            }}
          >
            {/* Logo Oficial MDC */}
            <div
              style={{
                width: 140,
                height: 140,
                borderRadius: "50%",
                backgroundColor: "rgba(18, 21, 30, 0.95)",
                border: "3px solid #F5C518",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 0 50px rgba(245, 197, 24, 0.4)",
              }}
            >
              <Img
                src={staticFile("mdc_logo_oficial.png")}
                style={{ width: "80%", height: "80%", objectFit: "contain" }}
              />
            </div>

            <div
              style={{
                fontSize: 28,
                fontWeight: 900,
                color: "#F5C518",
                letterSpacing: 6,
                marginTop: 24,
                textTransform: "uppercase",
              }}
            >
              MENTALIDAD DE CAMPEÓN · MDC
            </div>

            <div
              style={{
                fontSize: 68,
                fontWeight: 950,
                color: "#FFFFFF",
                fontFamily: "Cabinet Grotesk, Montserrat, sans-serif",
                marginTop: 16,
                textAlign: "center",
                maxWidth: 2200,
                lineHeight: 1.2,
              }}
            >
              ¿CUÁL ES ESA BATALLA QUE PROMETES GANAR A PARTIR DE HOY?
            </div>

            <div
              style={{
                fontSize: 32,
                color: "#94A3B8",
                fontWeight: 700,
                marginTop: 16,
                letterSpacing: 1,
              }}
            >
              TE LEO EN LOS COMENTARIOS · SUSCRÍBETE AL CANAL
            </div>

            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 20,
                marginTop: 36,
                padding: "20px 54px",
                backgroundColor: "#EF4444",
                borderRadius: 100,
                boxShadow: "0 15px 45px rgba(239, 68, 68, 0.5)",
              }}
            >
              <div
                style={{
                  width: 14,
                  height: 14,
                  borderRadius: "50%",
                  backgroundColor: "#FFFFFF",
                }}
              />
              <span
                style={{
                  fontSize: 28,
                  fontWeight: 950,
                  color: "#FFFFFF",
                  letterSpacing: 3,
                  textTransform: "uppercase",
                  fontFamily: "Cabinet Grotesk, Montserrat, sans-serif",
                }}
              >
                SUSCRÍBETE · NOS VEMOS EN EL PRÓXIMO EPISODIO
              </span>
            </div>
          </div>
        </div>
      </Sequence>

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
            border: "1.5px solid rgba(245, 197, 24, 0.8)",
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
              backgroundColor: "#F5C518",
              boxShadow: "0 0 14px #F5C518",
            }}
          />
          <span
            style={{
              fontFamily: "Cabinet Grotesk, Montserrat, sans-serif",
              fontSize: 24,
              fontWeight: 900,
              letterSpacing: 4,
              color: "#F5C518",
              textTransform: "uppercase",
            }}
          >
            {isPhaseB
              ? "EXPEDIENTE MDC · COMUNIDAD DE TITANES // EL CIERRE"
              : "EXPEDIENTE MDC · LLAMADO A LA ACCIÓN // EL VEREDICTO"}
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
            textShadow: "0 10px 40px rgba(0,0,0,0.95), 0 0 50px rgba(245,197,24,0.35)",
          }}
        >
          {isPhaseB ? (
            <TypewriterText
              text="¿CUÁL ES LA BATALLA QUE PROMETES GANAR?"
              startFrame={168}
              durationInFrames={32}
              currentFrame={frame}
              cursorColor="#F5C518"
            />
          ) : (
            <TypewriterText
              text="LEVÁNTATE Y SAL A DEMOSTRARLE AL MUNDO"
              startFrame={2}
              durationInFrames={34}
              currentFrame={frame}
              cursorColor="#F5C518"
            />
          )}
        </h1>
      </div>
    </AbsoluteFill>
  );
};

