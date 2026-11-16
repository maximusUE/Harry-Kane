import React from "react";
import {
  AbsoluteFill,
  interpolate,
  Sequence,
  spring,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
  Video,
  Img,
} from "remotion";
import { TypewriterText } from "../../components/TypewriterText";

export const Shot06Berlin2024Titulares: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const entrance = spring({
    frame,
    fps,
    config: { damping: 18, mass: 0.9 },
  });

  const subEntrance = spring({
    frame: frame - 20,
    fps,
    config: { damping: 20, mass: 1 },
  });

  return (
    <AbsoluteFill style={{ width: 3840, height: 2160, overflow: "hidden", backgroundColor: "#07080B" }}>
      {/* 🎬 CORTE 1 (Frames 0 - 105 | 3.5s): Berlín 2024 Silbatazo Final Eurocopa */}
      <Sequence from={0} durationInFrames={105}>
        <div style={{ position: "absolute", inset: 0, overflow: "hidden" }}>
          <Video
            src={staticFile("b3_10_euro2024_berlin_defeat.mp4")}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              filter: "contrast(1.22) brightness(0.85) saturate(1.05)",
              transform: `scale(${interpolate(frame, [0, 105], [1.0, 1.07])})`,
            }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(180deg, rgba(7,8,11,0.8) 0%, rgba(7,8,11,0.2) 50%, rgba(7,8,11,0.92) 100%)",
            }}
          />
        </div>
      </Sequence>

      {/* 🎬 CORTE 2 (Frames 105 - 210 | 3.5s): Titular The Guardian Berlín Defeat */}
      <Sequence from={105} durationInFrames={105}>
        <div style={{ position: "absolute", inset: 0, overflow: "hidden" }}>
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "radial-gradient(circle at center, #161B26 0%, #07080B 85%)",
            }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                width: "74%",
                maxWidth: 2400,
                borderRadius: 24,
                overflow: "hidden",
                border: "2px solid rgba(245, 197, 24, 0.4)",
                boxShadow: "0 30px 80px rgba(0,0,0,0.95), 0 0 40px rgba(245, 197, 24, 0.2)",
                transform: `scale(${1.0 + (frame - 105) * 0.0006})`,
              }}
            >
              <Img
                src={staticFile("titular_guardian_euro2024_berlin_defeat.png")}
                style={{
                  width: "100%",
                  height: "auto",
                  display: "block",
                }}
              />
            </div>
          </div>
        </div>
      </Sequence>

      {/* 🎬 CORTE 3 (Frames 210 - 315 | 3.5s): Titular BILD Kane Fluch Supercup */}
      <Sequence from={210} durationInFrames={105}>
        <div style={{ position: "absolute", inset: 0, overflow: "hidden" }}>
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "radial-gradient(circle at center, #201416 0%, #07080B 85%)",
            }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                width: "74%",
                maxWidth: 2400,
                borderRadius: 24,
                overflow: "hidden",
                border: "2px solid rgba(239, 68, 68, 0.5)",
                boxShadow: "0 30px 80px rgba(0,0,0,0.95), 0 0 40px rgba(239, 68, 68, 0.25)",
                transform: `scale(${1.0 + (frame - 210) * 0.0006})`,
              }}
            >
              <Img
                src={staticFile("titular_bild_kane_fluch_supercup.png")}
                style={{
                  width: "100%",
                  height: "auto",
                  display: "block",
                }}
              />
            </div>
          </div>
        </div>
      </Sequence>

      {/* 🎬 CORTE 4 (Frames 315 - 425 | 3.67s): Kane Berlín Defeat Turf + Estadio MDC */}
      <Sequence from={315} durationInFrames={110}>
        <div style={{ position: "absolute", inset: 0, overflow: "hidden" }}>
          <Img
            src={staticFile("mdc_stadium_bg.jpg")}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              filter: "contrast(1.3) brightness(0.55)",
              transform: `scale(${1.01 + (frame - 315) * 0.0006})`,
            }}
          />
          <div
            style={{
              position: "absolute",
              right: 180,
              bottom: 0,
              height: "90%",
              display: "flex",
              alignItems: "flex-end",
            }}
          >
            <Img
              src={staticFile("kane_berlin_defeat_turf_2024.png")}
              style={{
                height: "100%",
                objectFit: "contain",
                filter: "drop-shadow(0 35px 80px rgba(0,0,0,0.95)) drop-shadow(0 0 35px rgba(239,68,68,0.3))",
                transform: `scale(${1.0 + (frame - 315) * 0.0005})`,
              }}
            />
          </div>
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(90deg, rgba(7,8,11,0.95) 0%, rgba(7,8,11,0.4) 55%, rgba(7,8,11,0.85) 100%)",
            }}
          />
        </div>
      </Sequence>

      {/* 🏷️ OVERLAY DE TÍTULO OFICIAL MDC (AUDIO-FIRST WORD-LOCK) */}
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
            border: "1.5px solid rgba(239, 68, 68, 0.6)",
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
            {frame < 297
              ? "EXPEDIENTE MDC · FINAL #6 // EUROCOPA BERLÍN 2024"
              : "EXPEDIENTE MDC · BALANCE HISTÓRICO // 2015 - 2024"}
          </span>
        </div>
        <h1
          style={{
            fontFamily: "Cabinet Grotesk, Montserrat, sans-serif",
            fontSize: 80,
            fontWeight: 950,
            color: "#FFFFFF",
            margin: "20px 0 0 0",
            letterSpacing: 1,
            textShadow: "0 10px 40px rgba(0,0,0,0.95), 0 0 50px rgba(239,68,68,0.35)",
          }}
        >
          {frame < 297 ? (
            <TypewriterText
              text="BERLÍN 2024: LA MISMA ESCENA DESGARRADORA"
              startFrame={2}
              durationInFrames={36}
              currentFrame={frame}
              cursorColor="#EF4444"
            />
          ) : (
            <TypewriterText
              text="SEIS FINALES. SEIS DERROTAS. CERO TROFEOS."
              startFrame={298}
              durationInFrames={36}
              currentFrame={frame}
              cursorColor="#EF4444"
            />
          )}
        </h1>
      </div>

      {/* 📊 BADGE INFERIOR: CONDENA Y 0 TROFEOS COLECTIVOS */}
      <div
        style={{
          position: "absolute",
          bottom: 160,
          left: 180,
          opacity: subEntrance,
          transform: `translateY(${(1 - subEntrance) * 20}px)`,
          display: "flex",
          gap: 32,
          alignItems: "center",
          zIndex: 30,
        }}
      >
        <div
          style={{
            background: "rgba(18, 21, 30, 0.92)",
            border: "1.5px solid rgba(239, 68, 68, 0.5)",
            backdropFilter: "blur(18px)",
            borderRadius: 20,
            padding: "24px 38px",
            display: "flex",
            alignItems: "center",
            gap: 28,
            boxShadow: "0 20px 50px rgba(0,0,0,0.85), 0 0 30px rgba(239, 68, 68, 0.2)",
          }}
        >
          <div
            style={{
              width: 6,
              height: 60,
              backgroundColor: "#EF4444",
              borderRadius: 3,
              boxShadow: "0 0 12px #EF4444",
            }}
          />
          <div>
            <div style={{ fontSize: 18, color: "rgba(255,255,255,0.6)", fontWeight: 700, letterSpacing: 2 }}>
              EL BALANCE INEXORABLE
            </div>
            <div
              style={{
                fontSize: 44,
                color: "#EF4444",
                fontWeight: 950,
                marginTop: 4,
                letterSpacing: 2,
                textShadow: "0 0 25px rgba(239,68,68,0.5)",
              }}
            >
              0 TROFEOS COLECTIVOS
            </div>
          </div>
        </div>

        <div
          style={{
            background: "rgba(18, 21, 30, 0.92)",
            border: "1.5px solid rgba(245, 197, 24, 0.4)",
            backdropFilter: "blur(18px)",
            borderRadius: 20,
            padding: "24px 38px",
            boxShadow: "0 20px 50px rgba(0,0,0,0.85)",
          }}
        >
          <div style={{ fontSize: 18, color: "rgba(255,255,255,0.6)", fontWeight: 700, letterSpacing: 2 }}>
            ESTATUS DE ARCHIVO
          </div>
          <div style={{ fontSize: 32, color: "#FFFFFF", fontWeight: 800, marginTop: 4 }}>
            MALDICIÓN DEPORTIVA
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};
