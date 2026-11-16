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
import { Cinematic4KBackground } from "../../HarryKane4K/Cinematic4KBackground";
import { TargetReticle } from "../effects/TargetReticle";
import { TranscendenceWindow } from "../../components/TranscendenceWindow";
import { TypewriterText } from "../../components/TypewriterText";

export const Shot09BenchLeicester: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const entrance = spring({
    frame: frame - 100,
    fps,
    config: { damping: 20, mass: 1 },
  });

  const zoom = interpolate(frame, [100, 240], [1.02, 1.12], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill style={{ width: 3840, height: 2160, overflow: "hidden", backgroundColor: "#06070B" }}>
      {/* 🎬 CORTE 1 (Frames 0 - 100 | 3.3s): Video banquillo del Leicester y frío */}
      <Sequence from={0} durationInFrames={100}>
        <div style={{ position: "absolute", inset: 0, overflow: "hidden" }}>
          <TranscendenceWindow
            variant="video"
            src="broll/broll_15_leicester_bench.mp4"
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
            <div
              style={{
                display: "inline-block",
                padding: "14px 36px",
                backgroundColor: "rgba(229, 184, 66, 0.2)",
                border: "2px solid rgba(229, 184, 66, 0.6)",
                borderRadius: "100px",
                fontSize: "36px",
                fontWeight: 900,
                color: "#E5B842",
                letterSpacing: "6px",
                textTransform: "uppercase",
                marginBottom: "20px",
                backdropFilter: "blur(12px)",
              }}
            >
              MAYO 2013 · PLAYOFFS DE SEGUNDA DIVISIÓN
            </div>

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
                text="EL BANQUILLO DE LOS OLVIDADOS"
                startFrame={8}
                durationInFrames={45}
                currentFrame={frame}
                cursorColor="#E5B842"
              />
            </h1>
          </div>
        </div>
      </Sequence>

      {/* 🎬 CORTE 2 (Frames 100 - 240 | 4.7s): FOTO HISTÓRICA CON RETÍCULAS DE TELEMETRÍA */}
      <Sequence from={100} durationInFrames={140}>
        <div style={{ position: "absolute", inset: 0, overflow: "hidden" }}>
          <Cinematic4KBackground theme="gold" intensity={1.3} />

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
              height: "100%",
              padding: "100px",
              boxSizing: "border-box",
              zIndex: 10,
            }}
          >
            {/* Top Tag */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "16px",
                padding: "14px 36px",
                backgroundColor: "rgba(229, 184, 66, 0.15)",
                border: "1.5px solid rgba(229, 184, 66, 0.5)",
                borderRadius: "100px",
                marginBottom: "30px",
                backdropFilter: "blur(12px)",
              }}
            >
              <div
                style={{
                  width: "12px",
                  height: "12px",
                  borderRadius: "50%",
                  backgroundColor: "#E5B842",
                  boxShadow: "0 0 16px #E5B842",
                }}
              />
              <span
                style={{
                  fontSize: "44px",
                  fontWeight: 800,
                  color: "#E5B842",
                  letterSpacing: "12px",
                  textTransform: "uppercase",
                }}
              >
                MAYO 2013 · PLAYOFFS DE SEGUNDA DIVISIÓN · FOTO DE CULTO
              </span>
            </div>

            {/* 3D Photo Container with Targets */}
            <div
              style={{
                position: "relative",
                width: "2300px",
                height: "1400px",
                borderRadius: "44px",
                overflow: "hidden",
                boxShadow:
                  "0 50px 120px rgba(0,0,0,0.95), 0 0 100px rgba(229, 184, 66, 0.28)",
                border: "3px solid rgba(255, 255, 255, 0.22)",
                transform: `scale(${entrance * zoom})`,
                backgroundColor: "#0F1117",
              }}
            >
              <Img
                src={staticFile("kane_vardy_bench_2013.jpg")}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />

              {/* Golden Destiny Spotlight Sweep */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "radial-gradient(circle at 45% 40%, rgba(229, 184, 66, 0.18) 0%, transparent 60%), linear-gradient(to top, rgba(7, 8, 11, 0.85) 0%, transparent 50%)",
                  pointerEvents: "none",
                }}
              />

              {/* RETICLE 1: JAMIE VARDY (LEFT) */}
              <TargetReticle
                x={340}
                y={220}
                width={380}
                height={480}
                label="JAMIE VARDY (26 AÑOS)"
                subLabel="CAMPEÓN PREMIER LEAGUE 2016"
                color="#38BDF8"
                delay={20}
              />

              {/* RETICLE 2: HARRY KANE (RIGHT) */}
              <TargetReticle
                x={1380}
                y={220}
                width={380}
                height={480}
                label="HARRY KANE (19 AÑOS)"
                subLabel="FUTURO BALÓN DE ORO · 280 GOLES SPURS"
                color="#E5B842"
                delay={40}
              />

              {/* Overlays / Callout Badges */}
              <div
                style={{
                  position: "absolute",
                  top: "40px",
                  left: "40px",
                  padding: "16px 36px",
                  backgroundColor: "rgba(7, 8, 11, 0.88)",
                  border: "2px solid #E5B842",
                  borderRadius: "18px",
                  fontSize: "36px",
                  fontWeight: 800,
                  color: "#E5B842",
                  backdropFilter: "blur(12px)",
                }}
              >
                BANQUILLO DEL LEICESTER CITY · CASACAS FLUORESCENTES
              </div>

              <div
                style={{
                  position: "absolute",
                  bottom: "40px",
                  right: "40px",
                  padding: "20px 45px",
                  backgroundColor: "rgba(220, 38, 38, 0.92)",
                  borderRadius: "18px",
                  fontSize: "40px",
                  fontWeight: 900,
                  color: "#FFFFFF",
                  letterSpacing: "4px",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.8)",
                }}
              >
                NADIE APOSTABA UNA SOLA LIBRA POR ELLOS · NADIE.
              </div>
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
