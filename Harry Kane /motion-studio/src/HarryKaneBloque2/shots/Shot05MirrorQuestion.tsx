import React from "react";
import {
  AbsoluteFill,
  interpolate,
  Sequence,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { Cinematic4KBackground } from "../../HarryKane4K/Cinematic4KBackground";
import { TranscendenceWindow } from "../../components/TranscendenceWindow";
import { TypewriterText } from "../../components/TypewriterText";

export const Shot05MirrorQuestion: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Duración total del plano: 564 frames (Global 1155 - 1719 | 38.50s - 57.30s)
  // Corte 1 (f0 - f255 | 38.50s - 47.00s): "Ponte en el lugar de ese niño. Escuchar a los 8 años que tu cuerpo no sirve, que la genética te cerró las puertas antes de empezar."
  // Corte 2 (f255 - f420 | 47.00s - 52.50s): "Nueve de cada diez niños habrían tirado los tacos al closet para no volver a pisar una cancha."
  // Corte 3 (f420 - f564 | 52.50s - 57.30s): "Pero Kane no derramó una sola lágrima en público. Hizo algo desconcertante..."

  const entrance = spring({
    frame,
    fps,
    config: { damping: 18, mass: 0.9 },
  });

  const subTextOpacity = interpolate(frame, [45, 65], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Contador 1 -> 9 sincronizado exactamente cuando dice "Nueve de cada diez niños" (localFrame 255 = 47.0s)
  const countVal = Math.min(
    9,
    Math.round(
      interpolate(frame, [255, 290], [1, 9], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
      })
    )
  );

  const statBounce = spring({
    frame: frame - 255,
    fps,
    config: { damping: 12, mass: 0.8 },
  });

  const pactEntrance = spring({
    frame: frame - 420,
    fps,
    config: { damping: 16, mass: 0.9 },
  });

  return (
    <AbsoluteFill style={{ width: 3840, height: 2160, overflow: "hidden", backgroundColor: "#06070B" }}>
      {/* 🎬 CORTE 1 (Frames 0 - 255 | Global 1155 - 1410 | 38.50s - 47.00s):
          "Ponte en el lugar de ese niño. Escuchar a los ocho años que tu cuerpo no sirve..." */}
      <Sequence from={0} durationInFrames={255}>
        <div style={{ position: "absolute", inset: 0, overflow: "hidden" }}>
          <Cinematic4KBackground theme="deepNavy" intensity={1.6} />

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              height: "100%",
              textAlign: "center",
              padding: "0 240px",
              zIndex: 10,
            }}
          >
            <span
              style={{
                fontSize: "46px",
                fontWeight: 800,
                color: "#38BDF8",
                letterSpacing: "14px",
                textTransform: "uppercase",
                marginBottom: "36px",
                textShadow: "0 0 30px rgba(56, 189, 248, 0.4)",
              }}
            >
              EL ESPEJO DE LA REALIDAD · 8 AÑOS DE EDAD
            </span>

            <h1
              style={{
                transform: `scale(${Math.max(0, entrance)})`,
                fontSize: "180px",
                fontWeight: 950,
                color: "#FFFFFF",
                letterSpacing: "-3px",
                lineHeight: 1.12,
                margin: "0 0 48px 0",
                maxWidth: "3100px",
                textShadow: "0 20px 80px rgba(0,0,0,0.95)",
              }}
            >
              <TypewriterText
                text='"PONTE EN EL LUGAR DE ESE NIÑO"'
                startFrame={1}
                durationInFrames={42}
                currentFrame={frame}
                cursorColor="#38BDF8"
              />
            </h1>

            <div
              style={{
                opacity: subTextOpacity,
                padding: "36px 64px",
                backgroundColor: "rgba(12, 16, 26, 0.85)",
                border: "2px solid rgba(56, 189, 248, 0.4)",
                borderRadius: "24px",
                maxWidth: "2400px",
                backdropFilter: "blur(16px)",
              }}
            >
              <p
                style={{
                  fontSize: "58px",
                  color: "#F8FAFC",
                  fontWeight: 800,
                  lineHeight: 1.4,
                  margin: 0,
                  textShadow: "0 4px 20px rgba(0,0,0,0.9)",
                }}
              >
                “Escuchar a los ocho años que tu cuerpo no sirve... que la genética te cerró las puertas antes de empezar.”
              </p>
            </div>
          </div>
        </div>
      </Sequence>

      {/* 🎬 CORTE 2 Y 3 (Frames 255 - 564 | Global 1410 - 1719 | 47.00s - 57.30s):
          47.00s: "Nueve de cada diez niños habrían tirado los tacos al closet..."
          52.50s: "Pero Kane no derramó una sola lágrima en público..." */}
      <Sequence from={255} durationInFrames={309}>
        <div style={{ position: "absolute", inset: 0, overflow: "hidden" }}>
          <TranscendenceWindow
            variant="video"
            src="broll/broll_03_childhood_pitch.mp4"
            frame={frame - 255}
            width="100%"
            height="100%"
            borderRadius={0}
            borderGold={false}
            subtleZoom={true}
          />

          {/* Sub-corte 2A (Frames 255 - 420 | 47.00s - 52.50s): 9 DE CADA 10 NIÑOS */}
          {frame < 420 && (
            <div
              style={{
                position: "absolute",
                inset: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                zIndex: 20,
              }}
            >
              <div
                style={{
                  padding: "48px 96px",
                  backgroundColor: "rgba(12, 15, 23, 0.90)",
                  border: "3px solid rgba(239, 68, 68, 0.75)",
                  borderRadius: "32px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  transform: `scale(${Math.max(0, statBounce)})`,
                  boxShadow:
                    "0 30px 90px rgba(0,0,0,0.95), 0 0 70px rgba(239, 68, 68, 0.3)",
                  backdropFilter: "blur(20px)",
                }}
              >
                <span
                  style={{
                    fontSize: "170px",
                    fontWeight: 950,
                    color: "#EF4444",
                    lineHeight: 1,
                  }}
                >
                  {countVal} DE CADA 10 NIÑOS
                </span>
                <span
                  style={{
                    fontSize: "48px",
                    fontWeight: 900,
                    color: "#FFFFFF",
                    letterSpacing: "5px",
                    marginTop: "20px",
                    textTransform: "uppercase",
                  }}
                >
                  HABRÍAN TIRADO LOS TACOS AL CLOSET PARA SIEMPRE
                </span>
              </div>
            </div>
          )}

          {/* Sub-corte 2B (Frames 420 - 564 | 52.50s - 57.30s): NINGUNA LÁGRIMA EN PÚBLICO */}
          {frame >= 420 && (
            <div
              style={{
                position: "absolute",
                bottom: "180px",
                left: "140px",
                padding: "36px 64px",
                backgroundColor: "rgba(10, 12, 18, 0.92)",
                borderLeft: "10px solid #F5C518",
                borderRadius: "0 24px 24px 0",
                maxWidth: "2500px",
                backdropFilter: "blur(16px)",
                transform: `scale(${Math.max(0, pactEntrance)})`,
                transformOrigin: "left center",
                boxShadow: "0 24px 70px rgba(0,0,0,0.9)",
                zIndex: 25,
              }}
            >
              <div
                style={{
                  fontSize: "34px",
                  color: "#F5C518",
                  fontWeight: 900,
                  letterSpacing: "6px",
                  textTransform: "uppercase",
                }}
              >
                EL PACTO EN SILENCIO · CERO LÁGRIMAS EN PÚBLICO
              </div>
              <div
                style={{
                  fontSize: "72px",
                  color: "#FFFFFF",
                  fontWeight: 950,
                  marginTop: "12px",
                  lineHeight: 1.15,
                }}
              >
                <TypewriterText
                  text="NO DERRAMÓ UNA SOLA LÁGRIMA EN PÚBLICO"
                  startFrame={422}
                  durationInFrames={42}
                  currentFrame={frame}
                  cursorColor="#F5C518"
                />
              </div>
            </div>
          )}
        </div>
      </Sequence>

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
