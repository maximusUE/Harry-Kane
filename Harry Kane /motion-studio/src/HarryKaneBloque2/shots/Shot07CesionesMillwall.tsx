import React from "react";
import {
  AbsoluteFill,
  Img,
  interpolate,
  Sequence,
  spring,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { TranscendenceWindow } from "../../components/TranscendenceWindow";
import { TypewriterText } from "../../components/TypewriterText";

export const Shot07CesionesMillwall: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Duración total del plano: 522 frames (Global 2028 - 2550 | 67.60s - 85.00s)
  // Corte 1A (f0 - f115 | 67.60s - 71.43s): "Pero el camino no fue una película de redención inmediata."
  // Corte 1B (f115 - f232 | 71.43s - 75.33s): "Pasaron los años y comenzó el verdadero calvario de las cesiones."
  // Corte 1C (f232 - f345 | 75.33s - 79.10s): "El lodo y la hostilidad de la tercera división con el Leyton,"
  // Corte 2  (f345 - f522 | 79.10s - 85.00s): "la caldera salvaje del Millwall, donde los defensas rivales salían a reventarte las espinillas,"

  const entranceCard = spring({
    frame: frame - 345,
    fps,
    config: { damping: 20, mass: 1 },
  });

  const zoom = interpolate(frame, [345, 522], [1.0, 1.04], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill style={{ width: 3840, height: 2160, overflow: "hidden", backgroundColor: "#06070B" }}>
      {/* 🎬 CORTE 1 (Frames 0 - 345 | Global 2028 - 2373 | 67.60s - 79.10s): Sin redención inmediata -> Calvario de las cesiones -> Leyton Orient */}
      <Sequence from={0} durationInFrames={345}>
        <div style={{ position: "absolute", inset: 0, overflow: "hidden" }}>
          <TranscendenceWindow
            variant="video"
            src="broll/broll_11_leyton_orient.mp4"
            frame={frame}
            width="100%"
            height="100%"
            borderRadius={0}
            borderGold={false}
            subtleZoom={true}
          />

          <div
            style={{
              position: "absolute",
              bottom: "180px",
              left: "140px",
              zIndex: 20,
              maxWidth: "2800px",
            }}
          >
            {/* Sub-etiqueta superior que cambia exactamente en 75.33s (f232) cuando menciona Leyton Orient */}
            <div
              style={{
                display: "inline-block",
                padding: "14px 36px",
                backgroundColor: frame >= 232 ? "rgba(220, 38, 38, 0.92)" : "rgba(245, 197, 24, 0.22)",
                border: frame >= 232 ? "2px solid #FFFFFF" : "2px solid rgba(245, 197, 24, 0.6)",
                borderRadius: "14px",
                fontSize: "36px",
                fontWeight: 900,
                color: frame >= 232 ? "#FFFFFF" : "#F5C518",
                letterSpacing: "4px",
                textTransform: "uppercase",
                marginBottom: "20px",
                backdropFilter: "blur(12px)",
              }}
            >
              {frame >= 232
                ? "3RA DIVISIÓN · LEYTON ORIENT · LODO Y HOSTILIDAD"
                : frame >= 115
                ? "AÑOS EN LAS SOMBRAS DEL FÚTBOL INGLÉS"
                : "SIN PELÍCULA DE REDENCIÓN INMEDIATA"}
            </div>

            {frame < 115 ? (
              <h1
                style={{
                  fontSize: "135px",
                  fontWeight: 950,
                  color: "#FFFFFF",
                  lineHeight: 1.08,
                  margin: 0,
                  textShadow: "0 20px 60px rgba(0,0,0,0.95)",
                }}
              >
                <TypewriterText
                  text="EL CAMINO NO FUE UNA REDENCIÓN INMEDIATA"
                  startFrame={2}
                  durationInFrames={42}
                  currentFrame={frame}
                  cursorColor="#F5C518"
                />
              </h1>
            ) : (
              <h1
                style={{
                  fontSize: "145px",
                  fontWeight: 950,
                  color: "#FFFFFF",
                  lineHeight: 1.05,
                  margin: 0,
                  textShadow: "0 20px 60px rgba(0,0,0,0.95)",
                }}
              >
                <TypewriterText
                  text="EL VERDADERO CALVARIO DE LAS CESIONES"
                  startFrame={116}
                  durationInFrames={44}
                  currentFrame={frame}
                  cursorColor="#EF4444"
                />
              </h1>
            )}
          </div>
        </div>
      </Sequence>

      {/* 🎬 CORTE 2 (Frames 345 - 522 | Global 2373 - 2550 | 79.10s - 85.00s): "la caldera salvaje del Millwall, donde los defensas rivales salían a reventarte las espinillas" */}
      <Sequence from={345} durationInFrames={177}>
        <div style={{ position: "absolute", inset: 0, overflow: "hidden" }}>
          <TranscendenceWindow
            variant="video"
            src="broll/broll_12_millwall_battle.mp4"
            frame={frame - 345}
            width="100%"
            height="100%"
            borderRadius={0}
            borderGold={false}
            subtleZoom={true}
          />

          {/* Título Izquierdo: LA CALDERA SALVAJE DEL MILLWALL */}
          <div
            style={{
              position: "absolute",
              bottom: "200px",
              left: "140px",
              zIndex: 20,
              maxWidth: "2100px",
            }}
          >
            <div
              style={{
                display: "inline-block",
                padding: "14px 36px",
                backgroundColor: "rgba(220, 38, 38, 0.9)",
                borderRadius: "14px",
                fontSize: "34px",
                fontWeight: 900,
                color: "#FFFFFF",
                letterSpacing: "4px",
                textTransform: "uppercase",
                marginBottom: "20px",
              }}
            >
              SUR DE LONDRES · THE DEN · 2012
            </div>
            <h1
              style={{
                fontSize: "125px",
                fontWeight: 950,
                color: "#FFFFFF",
                lineHeight: 1.08,
                margin: 0,
                textShadow: "0 20px 60px rgba(0,0,0,0.95)",
              }}
            >
              <TypewriterText
                text="LA CALDERA SALVAJE DEL MILLWALL"
                startFrame={347}
                durationInFrames={38}
                currentFrame={frame}
                cursorColor="#EF4444"
              />
            </h1>
          </div>

          {/* Floating 3D Card of Kane Millwall 2012 */}
          <div
            style={{
              position: "absolute",
              right: "160px",
              bottom: "140px",
              width: "1150px",
              height: "1250px",
              borderRadius: "36px",
              overflow: "hidden",
              boxShadow: "0 40px 100px rgba(0,0,0,0.95), 0 0 80px rgba(220, 38, 38, 0.4)",
              border: "3px solid rgba(255, 255, 255, 0.25)",
              backgroundColor: "#0B0D13",
              transform: `scale(${Math.max(0, entranceCard)})`,
              zIndex: 25,
            }}
          >
            <Img
              src={staticFile("kane_millwall_2012.jpg")}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "28% 40%",
                transform: `scale(${zoom})`,
              }}
            />
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: "linear-gradient(to top, rgba(7, 8, 11, 0.9) 0%, transparent 55%)",
              }}
            />
            <div
              style={{
                position: "absolute",
                bottom: "40px",
                left: "40px",
                right: "40px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div>
                <div style={{ fontSize: "38px", color: "#FFFFFF", fontWeight: 900 }}>
                  MILLWALL F.C. · 2012
                </div>
                <div style={{ fontSize: "24px", color: "#94A3B8", fontFamily: "monospace", marginTop: "4px" }}>
                  THE DEN · HOSTILIDAD ABSOLUTA
                </div>
              </div>
              <span style={{ fontSize: "28px", color: "#F5C518", fontWeight: 900, fontFamily: "monospace" }}>
                [THE CALDRON]
              </span>
            </div>
          </div>
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
