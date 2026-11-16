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

export const Shot04Chelsea2015Madrid2019: React.FC = () => {
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
      {/* 🎬 CORTE 1 (Frames 0 - 115 | 3.83s): Champions League Madrid 2019 Entrada / Acción */}
      <Sequence from={0} durationInFrames={115}>
        <div style={{ position: "absolute", inset: 0, overflow: "hidden" }}>
          <Video
            src={staticFile("b3_04_champions_madrid_2019.mp4")}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              filter: "contrast(1.22) brightness(0.85) saturate(1.05)",
              transform: `scale(${interpolate(frame, [0, 115], [1.0, 1.07])})`,
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

      {/* 🎬 CORTE 2 (Frames 115 - 230 | 3.83s): Titular The Daily Telegraph Madrid 2019 */}
      <Sequence from={115} durationInFrames={115}>
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
                transform: `scale(${1.0 + (frame - 115) * 0.0006})`,
              }}
            >
              <Img
                src={staticFile("titular_telegraph_champions_madrid_2019.png")}
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

      {/* 🎬 CORTE 3 (Frames 230 - 350 | 4.0s): Kane De Rodillas en el Césped */}
      <Sequence from={230} durationInFrames={120}>
        <div style={{ position: "absolute", inset: 0, overflow: "hidden" }}>
          <Video
            src={staticFile("b3_05_kneeling_defeat_lawn.mp4")}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              filter: "contrast(1.25) brightness(0.85) saturate(1.05)",
              transform: `scale(${1.0 + (frame - 230) * 0.0007})`,
            }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(180deg, rgba(7,8,11,0.75) 0%, rgba(7,8,11,0.2) 50%, rgba(7,8,11,0.92) 100%)",
            }}
          />
        </div>
      </Sequence>

      {/* 🎬 CORTE 4 (Frames 350 - 468 | 3.93s): Kane Mirada Vacía Madrid 2019 + Estadio MDC */}
      <Sequence from={350} durationInFrames={118}>
        <div style={{ position: "absolute", inset: 0, overflow: "hidden" }}>
          <Img
            src={staticFile("mdc_stadium_bg.jpg")}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              filter: "contrast(1.3) brightness(0.55)",
              transform: `scale(${1.01 + (frame - 350) * 0.0006})`,
            }}
          />

          {/* 3D Photo Card flotante: Kane Mirada Vacía */}
          <div
            style={{
              position: "absolute",
              right: 180,
              bottom: 140,
              width: 1050,
              height: 1200,
              borderRadius: 32,
              overflow: "hidden",
              boxShadow: "0 40px 100px rgba(0,0,0,0.95), 0 0 50px rgba(239, 68, 68, 0.35)",
              border: "2px solid rgba(245, 197, 24, 0.4)",
              backgroundColor: "#12151E",
              zIndex: 20,
            }}
          >
            <Img
              src={staticFile("kane_madrid_empty_gaze_2019.png")}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                transform: `scale(${1.02 + (frame - 350) * 0.0007})`,
              }}
            />
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: "linear-gradient(to top, rgba(7,8,11,0.92) 0%, transparent 50%)",
              }}
            />
            <div
              style={{
                position: "absolute",
                bottom: 30,
                left: 30,
                right: 30,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div>
                <div style={{ fontSize: 30, fontWeight: 950, color: "#FFFFFF", letterSpacing: 1 }}>
                  WANDA METROPOLITANO · MADRID
                </div>
                <div style={{ fontSize: 22, color: "#EF4444", fontFamily: "monospace", marginTop: 4, fontWeight: 700 }}>
                  FINAL CHAMPIONS LEAGUE 2019
                </div>
              </div>
              <span style={{ fontSize: 22, color: "#F5C518", fontWeight: 800 }}>[EXPEDIENTE MDC]</span>
            </div>
          </div>

          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(90deg, rgba(7,8,11,0.95) 0%, rgba(7,8,11,0.4) 60%, rgba(7,8,11,0.85) 100%)",
            }}
          />
        </div>
      </Sequence>

      {/* 🏷️ OVERLAY DE TÍTULO CRONOLÓGICO CON IDENTIDAD OFICIAL MDC (AUDIO-FIRST WORD-LOCK) */}
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
            {frame < 137
              ? "EXPEDIENTE MDC · FINAL #1 // WEMBLEY 2015"
              : frame < 263
              ? "EXPEDIENTE MDC · FINAL #2 // MADRID 2019"
              : "EXPEDIENTE MDC · FINAL #2 // WANDA METROPOLITANO"}
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
            textShadow: "0 10px 40px rgba(0,0,0,0.95), 0 0 50px rgba(245,197,24,0.3)",
          }}
        >
          {frame < 137 ? (
            <TypewriterText
              text="FINAL COPA DE LA LIGA ANTE EL CHELSEA"
              startFrame={2}
              durationInFrames={32}
              currentFrame={frame}
              cursorColor="#F5C518"
            />
          ) : frame < 263 ? (
            <TypewriterText
              text="PRIMERA FINAL DE CHAMPIONS EN MADRID"
              startFrame={138}
              durationInFrames={32}
              currentFrame={frame}
              cursorColor="#F5C518"
            />
          ) : (
            <TypewriterText
              text="EL GOLPE EN EL PRIMER MINUTO"
              startFrame={264}
              durationInFrames={34}
              currentFrame={frame}
              cursorColor="#F5C518"
            />
          )}
        </h1>
      </div>

      {/* 📊 BADGE INFERIOR SINCRONIZADO AL AUDIO */}
      <div
        style={{
          position: "absolute",
          bottom: 160,
          left: 180,
          maxWidth: 1400,
          opacity: subEntrance,
          transform: `translateY(${(1 - subEntrance) * 20}px)`,
          background: "rgba(18, 21, 30, 0.92)",
          border: "1.5px solid rgba(245, 197, 24, 0.4)",
          backdropFilter: "blur(18px)",
          borderRadius: 20,
          padding: "24px 38px",
          display: "flex",
          alignItems: "center",
          gap: 32,
          boxShadow: "0 20px 50px rgba(0,0,0,0.85), 0 0 30px rgba(245, 197, 24, 0.15)",
          zIndex: 30,
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
            {frame < 137
              ? "COPA DE LA LIGA 2015 · WEMBLEY"
              : frame < 263
              ? "CHAMPIONS LEAGUE 2019 · MADRID"
              : "CHAMPIONS LEAGUE 2019"}
          </div>
          <div
            style={{
              fontSize: 30,
              color: "#FFFFFF",
              fontWeight: 700,
              marginTop: 4,
              lineHeight: 1.35,
            }}
          >
            {frame < 137
              ? "El Chelsea de Mourinho neutraliza a los Spurs en su primera gran final."
              : frame < 263
              ? "Primera final europea en la historia del Tottenham Hotspur."
              : "De rodillas en el césped... con la mirada vacía tras 90 minutos de frustración."}
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};
