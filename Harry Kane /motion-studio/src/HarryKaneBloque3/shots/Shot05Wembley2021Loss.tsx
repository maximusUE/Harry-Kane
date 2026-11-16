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

export const Shot05Wembley2021Loss: React.FC = () => {
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
      {/* 🎬 CORTE 1 (Frames 0 - 125 | 4.17s): Wembley 2021 Penaltis contra Italia */}
      <Sequence from={0} durationInFrames={125}>
        <div style={{ position: "absolute", inset: 0, overflow: "hidden" }}>
          <Video
            src={staticFile("b3_08_wembley2021_final_heartbreak.mp4")}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              filter: "contrast(1.22) brightness(0.85) saturate(1.05)",
              transform: `scale(${interpolate(frame, [0, 125], [1.0, 1.07])})`,
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

      {/* 🎬 CORTE 2 (Frames 125 - 250 | 4.17s): Titular Daily Mail Wembley Heartbreak */}
      <Sequence from={125} durationInFrames={125}>
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
                transform: `scale(${1.0 + (frame - 125) * 0.0006})`,
              }}
            >
              <Img
                src={staticFile("titular_dailymail_euro2020_wembley_heartbreak.png")}
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

      {/* 🎬 CORTE 3 (Frames 250 - 375 | 4.17s): Kane Pasando al lado del Trofeo */}
      <Sequence from={250} durationInFrames={125}>
        <div style={{ position: "absolute", inset: 0, overflow: "hidden" }}>
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "radial-gradient(circle at 65% 50%, #1A1F2C 0%, #07080B 85%)",
            }}
          />
          <div
            style={{
              position: "absolute",
              right: 180,
              bottom: 0,
              height: "92%",
              display: "flex",
              alignItems: "flex-end",
            }}
          >
            <Img
              src={staticFile("kane_wembley_trophy_walk_2021.png")}
              style={{
                height: "100%",
                objectFit: "contain",
                filter: "drop-shadow(0 30px 80px rgba(0,0,0,0.95)) drop-shadow(0 0 30px rgba(239,68,68,0.25))",
                transform: `scale(${1.0 + (frame - 250) * 0.0006})`,
              }}
            />
          </div>
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(90deg, rgba(7,8,11,0.92) 0%, rgba(7,8,11,0.35) 55%, rgba(7,8,11,0.85) 100%)",
            }}
          />
        </div>
      </Sequence>

      {/* 🎬 CORTE 4 (Frames 375 - 503 | 4.27s): Kane England Cutout + Estadio MDC Nocturno */}
      <Sequence from={375} durationInFrames={128}>
        <div style={{ position: "absolute", inset: 0, overflow: "hidden" }}>
          <Img
            src={staticFile("mdc_stadium_bg.jpg")}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              filter: "contrast(1.3) brightness(0.55)",
              transform: `scale(${1.01 + (frame - 375) * 0.0006})`,
            }}
          />
          <div
            style={{
              position: "absolute",
              right: 220,
              bottom: 0,
              height: "94%",
              display: "flex",
              alignItems: "flex-end",
            }}
          >
            <Img
              src={staticFile("harry_kane_england_cutout.png")}
              style={{
                height: "100%",
                objectFit: "contain",
                filter: "drop-shadow(0 35px 80px rgba(0,0,0,0.95)) drop-shadow(0 0 35px rgba(245,197,24,0.3))",
                transform: `scale(${1.0 + (frame - 375) * 0.0005})`,
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
            {frame < 113
              ? "EXPEDIENTE MDC · FINAL #3 // COPA DE LA LIGA 2021"
              : "EXPEDIENTE MDC · FINAL #4 // EUROCOPA WEMBLEY 2021"}
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
            textShadow: "0 10px 40px rgba(0,0,0,0.95), 0 0 50px rgba(245,197,24,0.3)",
          }}
        >
          {frame < 113 ? (
            <TypewriterText
              text="OTRA FINAL PERDIDA ANTE MANCHESTER CITY"
              startFrame={2}
              durationInFrames={34}
              currentFrame={frame}
              cursorColor="#F5C518"
            />
          ) : (
            <TypewriterText
              text="LA HERIDA MÁS PROFUNDA: A UN METRO DE LA GLORIA"
              startFrame={114}
              durationInFrames={38}
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
            {frame < 113 ? "CARABAO CUP 2021" : "EUROCOPA 2020 · WEMBLEY"}
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
            {frame < 113
              ? "Tercera final consecutiva sin levantar el título con los Spurs."
              : "60,000 almas cantando. El trofeo más anhelado escapándose entre los dedos en los penaltis."}
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};
