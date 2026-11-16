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
 * 🎬 SHOT 04: LA LEY DE LOS HOMBRES TERCOS
 * Global Frames: 1418 -> 1799 (47.27s -> 59.99s | 381 frames = 12.70s)
 * - Fase A (f0 - f153 | 47.27s - 52.37s): "Escúchame con claridad: La gloria no está reservada para los niños prodigio."
 * - Fase B (f153 - f381 | 52.37s - 59.99s): "La gloria está reservada para los hombres tercos. Para los que caen cinco veces y se levantan seis con la mandíbula apretada."
 */
export const Shot04HombresTercos: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const entrance = spring({
    frame,
    fps,
    config: { damping: 18, mass: 0.9 },
  });

  const cardEntrance = spring({
    frame: Math.max(0, frame - 153),
    fps,
    config: { damping: 14, stiffness: 200 },
  });

  const isPhaseB = frame >= 153;

  return (
    <AbsoluteFill style={{ width: 3840, height: 2160, overflow: "hidden", backgroundColor: "#07080B" }}>
      <div style={{ position: "absolute", inset: 0, overflow: "hidden" }}>
        <Img
          src={staticFile("cesped_confeti_derrota_final.jpg")}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            filter: "contrast(1.3) brightness(0.48) saturate(0.85)",
            transform: `scale(${interpolate(frame, [0, 381], [1.0, 1.07], { extrapolateRight: "clamp" })})`,
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(circle at center, rgba(245, 197, 24, 0.16) 0%, rgba(7, 8, 11, 0.94) 80%)",
          }}
        />

        {/* Panel Central de Mandíbula Apretada */}
        {isPhaseB && (
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
                padding: "60px 96px",
                backgroundColor: "rgba(18, 21, 30, 0.94)",
                border: "3px solid #F5C518",
                borderRadius: 32,
                boxShadow: "0 35px 90px rgba(0,0,0,0.95), 0 0 60px rgba(245, 197, 24, 0.35)",
                textAlign: "center",
                maxWidth: 2300,
                opacity: cardEntrance,
                transform: `scale(${interpolate(cardEntrance, [0, 1], [0.94, 1.0])})`,
              }}
            >
              <div style={{ fontSize: 24, fontWeight: 900, color: "#F5C518", letterSpacing: 6 }}>
                LEY SUPREMA DE LA GRANDEZA · MDC
              </div>
              <div
                style={{
                  fontSize: 84,
                  fontWeight: 950,
                  color: "#FFFFFF",
                  fontFamily: "Cabinet Grotesk, Montserrat, sans-serif",
                  marginTop: 18,
                  lineHeight: 1.15,
                }}
              >
                “CAEN 5 VECES · SE LEVANTAN 6”
              </div>
              <div
                style={{
                  fontSize: 34,
                  color: "#38BDF8",
                  fontWeight: 800,
                  marginTop: 18,
                  letterSpacing: 2,
                }}
              >
                CON LA MANDÍBULA APRETADA Y LA MIRADA AL FRENTE
              </div>
            </div>
          </div>
        )}
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
            border: "1.5px solid rgba(245, 197, 24, 0.75)",
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
              ? "EXPEDIENTE MDC · CÓDIGO DE HIERRO // HOMBRES TERCOS"
              : "EXPEDIENTE MDC · LA VERDAD DEL ÉXITO // SIN PRODIGIOS"}
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
              text="LA GLORIA ES PARA LOS HOMBRES TERCOS"
              startFrame={154}
              durationInFrames={32}
              currentFrame={frame}
              cursorColor="#F5C518"
            />
          ) : (
            <TypewriterText
              text="NO ESTÁ RESERVADA PARA PRODIGIOS"
              startFrame={2}
              durationInFrames={32}
              currentFrame={frame}
              cursorColor="#38BDF8"
            />
          )}
        </h1>
      </div>
    </AbsoluteFill>
  );
};

