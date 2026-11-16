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
 * 🎬 SHOT 04: EL ACOSO MEDIÁTICO Y "LA MALDICIÓN ES CONTAGIOSA"
 * Global Frames: 1597 -> 1946 (53.24s -> 64.86s | 349 frames = 11.63s)
 * - Fase A (f0 - f185 | 53.24s - 59.42s): "El acoso mediático fue implacable. En Inglaterra y en Europa los titulares eran salvajes:"
 * - Fase B (f185 - f349 | 59.42s - 64.86s): "La maldición de Kane es contagiosa. El hombre que arruinó al club más ganador de Alemania."
 */
export const Shot04MediaStormCurse: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const entrance = spring({
    frame,
    fps,
    config: { damping: 18, mass: 0.9 },
  });

  const stampSlam = spring({
    frame: Math.max(0, frame - 256), // 61.80s = Global f1854 -> local f257 ("El hombre que arruinó al club más ganador")
    fps,
    config: { damping: 12, stiffness: 220, mass: 0.7 },
  });

  return (
    <AbsoluteFill style={{ width: 3840, height: 2160, overflow: "hidden", backgroundColor: "#07080B" }}>
      {/* 🎬 FASE A (f0 - f185 | 53.24s - 59.42s): Portada BILD "KANE-FLUCH" */}
      <Sequence from={0} durationInFrames={185}>
        <div style={{ position: "absolute", inset: 0, overflow: "hidden" }}>
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "radial-gradient(circle at center, #241216 0%, #07080B 85%)",
            }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              paddingTop: 120,
            }}
          >
            <div
              style={{
                width: "72%",
                maxWidth: 2350,
                borderRadius: 24,
                overflow: "hidden",
                border: "2px solid rgba(239, 68, 68, 0.55)",
                boxShadow: "0 35px 90px rgba(0,0,0,0.95), 0 0 45px rgba(239, 68, 68, 0.25)",
                transform: `scale(${interpolate(frame, [0, 185], [1.0, 1.045], { extrapolateRight: "clamp" })})`,
              }}
            >
              <Img
                src={staticFile("titular_bild_kane_fluch.png")}
                style={{ width: "100%", height: "auto", display: "block" }}
              />
            </div>
          </div>
        </div>
      </Sequence>

      {/* 🎬 FASE B (f185 - f349 | 59.42s - 64.86s): "La maldición de Kane es contagiosa / El hombre que arruinó al Bayern" */}
      <Sequence from={185} durationInFrames={164}>
        <div style={{ position: "absolute", inset: 0, overflow: "hidden" }}>
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "radial-gradient(circle at center, #2B1115 0%, #07080B 85%)",
            }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              paddingTop: 120,
            }}
          >
            <div
              style={{
                width: "72%",
                maxWidth: 2350,
                borderRadius: 24,
                overflow: "hidden",
                border: "2px solid rgba(239, 68, 68, 0.65)",
                boxShadow: "0 35px 90px rgba(0,0,0,0.95), 0 0 55px rgba(239, 68, 68, 0.35)",
                transform: `scale(${interpolate(frame, [185, 349], [1.0, 1.04], { extrapolateRight: "clamp" })})`,
              }}
            >
              <Img
                src={staticFile("titular_bild_kane_fluch_supercup.png")}
                style={{ width: "100%", height: "auto", display: "block" }}
              />
            </div>
          </div>

          {/* 💥 SELLO ROJO FORENSE A LOS 61.80s (local f256): "EL HOMBRE QUE ARRUINÓ AL BAYERN" */}
          {frame >= 256 && (
            <div
              style={{
                position: "absolute",
                inset: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                zIndex: 28,
              }}
            >
              <div
                style={{
                  padding: "32px 72px",
                  backgroundColor: "rgba(185, 28, 28, 0.94)",
                  border: "4px solid #FFFFFF",
                  borderRadius: 18,
                  boxShadow: "0 35px 90px rgba(0,0,0,0.95), 0 0 60px rgba(239, 68, 68, 0.8)",
                  transform: `rotate(-5deg) scale(${interpolate(stampSlam, [0, 1], [1.6, 1.0])})`,
                  opacity: stampSlam,
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    fontSize: 64,
                    fontWeight: 950,
                    color: "#FFFFFF",
                    letterSpacing: 4,
                    fontFamily: "Cabinet Grotesk, Montserrat, sans-serif",
                  }}
                >
                  “EL HOMBRE QUE ARRUINÓ AL BAYERN”
                </div>
                <div
                  style={{
                    fontSize: 22,
                    fontWeight: 800,
                    color: "rgba(255,255,255,0.88)",
                    letterSpacing: 6,
                    marginTop: 8,
                  }}
                >
                  TITULARES DE LA PRENSA EUROPEA · 2024
                </div>
              </div>
            </div>
          )}
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
            border: "1.5px solid rgba(239, 68, 68, 0.7)",
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
            {frame < 185
              ? "EXPEDIENTE MDC · HEMEROTECA EUROPEA // TITULARES SALVAJES"
              : "EXPEDIENTE MDC · EL VEREDICTO DE LA PRENSA // 2024"}
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
            textShadow: "0 10px 40px rgba(0,0,0,0.95), 0 0 50px rgba(239,68,68,0.4)",
          }}
        >
          {frame < 185 ? (
            <TypewriterText
              text="EL ACOSO MEDIÁTICO FUE IMPLACABLE"
              startFrame={2}
              durationInFrames={34}
              currentFrame={frame}
              cursorColor="#EF4444"
            />
          ) : (
            <TypewriterText
              text="“LA MALDICIÓN DE KANE ES CONTAGIOSA”"
              startFrame={186}
              durationInFrames={34}
              currentFrame={frame}
              cursorColor="#EF4444"
            />
          )}
        </h1>
      </div>
    </AbsoluteFill>
  );
};

