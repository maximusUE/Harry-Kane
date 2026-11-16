import React from "react";
import {
  AbsoluteFill,
  Audio,
  Easing,
  Img,
  Sequence,
  interpolate,
  spring,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";

const OBSIDIAN = "#07080B";
const GOLD = "#F5C518";
const CRIMSON = "#EF4444";
const INK = "#F4F1EA";

interface BeatInfo {
  code: string;
  label: string;
  start: number;
  end: number;
}

const BEATS: BeatInfo[] = [
  { code: "01", label: "ORIGEN · SPURS", start: 0, end: 68 },
  { code: "02", label: "CAPITÁN · INGLATERRA", start: 68, end: 132 },
  { code: "03", label: "SIN TREGUA", start: 132, end: 195 },
  { code: "04", label: "CAMPEÓN · BAYERN", start: 195, end: 240 },
  { code: "05", label: "LEYENDA · MDC", start: 240, end: 285 },
];

const getImpactFlash = (frame: number, hitFrame: number, peak = 0.36): number => {
  const rel = frame - hitFrame;
  if (rel < 0 || rel > 3) return 0;
  return interpolate(rel, [0, 1, 3], [peak, peak * 0.65, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
};

const getMicroShake = (
  frame: number,
  hitFrame: number,
  amplitude = 10,
  duration = 9
): { x: number; y: number } => {
  const rel = frame - hitFrame;
  if (rel < 0 || rel >= duration) return { x: 0, y: 0 };
  const decay = 1 - rel / duration;
  const x = Math.sin(rel * 2.7) * amplitude * decay;
  const y = Math.cos(rel * 3.4) * (amplitude * 0.65) * decay;
  return { x, y };
};

export const HarryKaneMdcEditClip: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps, durationInFrames } = useVideoConfig();

  // Active beat metadata for discrete HUD
  const activeBeat =
    BEATS.find((b) => frame >= b.start && frame < b.end) ?? BEATS[BEATS.length - 1];

  // Global camera shake summed from beat impacts
  const shake2 = getMicroShake(frame, 68, 10, 9);
  const shake3 = getMicroShake(frame, 132, 11, 10);
  const shake4 = getMicroShake(frame, 195, 13, 10);
  const shake5 = getMicroShake(frame, 240, 12, 10);
  const shakeX = shake2.x + shake3.x + shake4.x + shake5.x;
  const shakeY = shake2.y + shake3.y + shake4.y + shake5.y;

  // Global brief white/gold flash on key hits (3 frames, low opacity)
  const flashOpacity = Math.max(
    getImpactFlash(frame, 68, 0.34),
    getImpactFlash(frame, 132, 0.32),
    getImpactFlash(frame, 195, 0.38),
    getImpactFlash(frame, 240, 0.4)
  );

  // Opening horizontal wipe from black (frames 0 -> 14)
  const wipeProgress = interpolate(frame, [0, 14], [0, 1], {
    easing: Easing.out(Easing.cubic),
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const wipeRightPct = (1 - wipeProgress) * 100;
  const wipeBlur = interpolate(frame, [0, 14], [14, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const wipeStreakX = wipeProgress * 1080;
  const wipeStreakOpacity = interpolate(frame, [0, 3, 12, 16], [0, 0.9, 0.5, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Subtle loop-friendly end dip (frames 279 -> 284)
  const endDipOpacity = interpolate(frame, [279, 284], [0, 0.85], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Top HUD reveal after opening wipe
  const hudOpacity = interpolate(frame, [8, 18], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Music volume envelope
  const musicVolume = interpolate(
    frame,
    [0, 12, durationInFrames - 15, durationInFrames - 1],
    [0, 0.28, 0.28, 0],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
  );

  // Beat 1 animations (0 - 68)
  const b1Spring = spring({
    frame: Math.max(0, frame - 2),
    fps,
    config: { damping: 14, mass: 0.85, stiffness: 155 },
  });
  const b1Blur = interpolate(b1Spring, [0, 0.85, 1], [12, 1.5, 0], {
    extrapolateRight: "clamp",
  });
  const b1TranslateX = interpolate(b1Spring, [0, 1], [180, 0]);
  const b1Scale = interpolate(frame, [0, 68], [1.0, 1.07], {
    extrapolateRight: "clamp",
  });
  const stadiumZoom1 = interpolate(frame, [0, 195], [1.08, 1.2], {
    extrapolateRight: "clamp",
  });

  // Beat 2 animations (68 - 132)
  const b2Rel = frame - 68;
  const b2Spring = spring({
    frame: Math.max(0, b2Rel),
    fps,
    config: { damping: 13, mass: 0.8, stiffness: 170 },
  });
  const b2Blur = interpolate(b2Spring, [0, 0.85, 1], [14, 1.5, 0], {
    extrapolateRight: "clamp",
  });
  const b2TranslateX = interpolate(b2Spring, [0, 1], [-220, 0]);
  const b2Scale = interpolate(b2Rel, [0, 64], [1.01, 1.08], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Beat 3 animations (132 - 195)
  const b3Rel = frame - 132;
  const b3Spring = spring({
    frame: Math.max(0, b3Rel),
    fps,
    config: { damping: 14, mass: 0.85, stiffness: 165 },
  });
  const b3Blur = interpolate(b3Spring, [0, 0.85, 1], [14, 1.5, 0], {
    extrapolateRight: "clamp",
  });
  const b3TranslateY = interpolate(b3Spring, [0, 1], [210, 0]);
  const b3Scale = interpolate(b3Rel, [0, 63], [1.0, 1.08], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Beat 4A animations (195 - 240)
  const b4Rel = frame - 195;
  const b4Spring = spring({
    frame: Math.max(0, b4Rel),
    fps,
    config: { damping: 15, mass: 0.9, stiffness: 150 },
  });
  const b4Blur = interpolate(b4Spring, [0, 0.85, 1], [10, 1, 0], {
    extrapolateRight: "clamp",
  });
  const b4Scale = interpolate(b4Rel, [0, 45], [1.14, 1.04], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Beat 4B animations (240 - 285)
  const b5Rel = frame - 240;
  const b5Spring = spring({
    frame: Math.max(0, b5Rel),
    fps,
    config: { damping: 15, mass: 0.9, stiffness: 150 },
  });
  const b5Blur = interpolate(b5Spring, [0, 0.85, 1], [9, 1, 0], {
    extrapolateRight: "clamp",
  });
  const b5Scale = interpolate(b5Rel, [0, 45], [1.12, 1.02], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const lockupSpring = spring({
    frame: Math.max(0, b5Rel - 4),
    fps,
    config: { damping: 16, mass: 0.8, stiffness: 160 },
  });
  const lockupY = interpolate(lockupSpring, [0, 1], [60, 0]);

  return (
    <AbsoluteFill
      style={{
        backgroundColor: OBSIDIAN,
        width: 1080,
        height: 1440,
        overflow: "hidden",
      }}
    >
      {/* Embedded local font faces */}
      <style>{`
        @font-face {
          font-family: 'Big Shoulders Display';
          src: url('${staticFile("fonts/big-shoulders-display-900.woff2")}') format('woff2');
          font-weight: 900;
        }
        @font-face {
          font-family: 'Inter';
          src: url('${staticFile("fonts/inter-var.woff2")}') format('woff2');
          font-weight: 100 900;
        }
        @font-face {
          font-family: 'JetBrains Mono';
          src: url('${staticFile("fonts/jetbrains-mono-700.woff2")}') format('woff2');
          font-weight: 700;
        }
      `}</style>

      {/* AUDIO LAYER (used in .mp4 render) */}
      <Audio
        src={staticFile("hypnotic_ambient_flow.mp3")}
        loop
        volume={musicVolume}
      />

      <Sequence from={0} durationInFrames={45}>
        <Audio src={staticFile("sfx/whoosh-cinematic.mp3")} volume={0.75} />
      </Sequence>
      <Sequence from={10} durationInFrames={40}>
        <Audio src={staticFile("sfx/impact-bass-1.mp3")} volume={0.68} />
      </Sequence>
      <Sequence from={66} durationInFrames={35}>
        <Audio src={staticFile("sfx/guney/whoosh.wav")} volume={0.65} />
      </Sequence>
      <Sequence from={68} durationInFrames={40}>
        <Audio src={staticFile("sfx/guney/thunk.wav")} volume={0.75} />
      </Sequence>
      <Sequence from={132} durationInFrames={40}>
        <Audio src={staticFile("sfx/impact-bass-1.mp3")} volume={0.76} />
      </Sequence>
      <Sequence from={148} durationInFrames={50}>
        <Audio src={staticFile("sfx/riser.mp3")} volume={0.52} />
      </Sequence>
      <Sequence from={195} durationInFrames={45}>
        <Audio src={staticFile("sfx/guney/thunk.wav")} volume={0.85} />
      </Sequence>
      <Sequence from={195} durationInFrames={45}>
        <Audio src={staticFile("sfx/whoosh-cinematic.mp3")} volume={0.48} />
      </Sequence>
      <Sequence from={240} durationInFrames={45}>
        <Audio src={staticFile("sfx/impact-bass-1.mp3")} volume={0.85} />
      </Sequence>

      {/* MAIN REVEAL + CAMERA SHAKE CONTAINER */}
      <AbsoluteFill
        style={{
          clipPath: `inset(0 ${wipeRightPct}% 0 0)`,
          filter: wipeBlur > 0.1 ? `blur(${wipeBlur}px)` : undefined,
          transform: `translate3d(${shakeX}px, ${shakeY}px, 0)`,
        }}
      >
        {/* STAGE 1-3 SHARED STADIUM ATMOSPHERE (Frames 0 - 195) */}
        {frame < 195 && (
          <AbsoluteFill>
            <Img
              src={staticFile("estadio_lluvia_nocturna_focos.jpg")}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "50% 35%",
                transform: `scale(${stadiumZoom1})`,
                filter:
                  frame >= 132
                    ? "contrast(1.18) saturate(0.7) brightness(0.65)"
                    : frame >= 68
                      ? "contrast(1.12) saturate(0.85) brightness(0.75)"
                      : "contrast(1.08) brightness(0.82)",
              }}
            />

            {/* Obsidian & Gold / Crimson Atmospheric Gradients */}
            <AbsoluteFill
              style={{
                background:
                  frame >= 132
                    ? "radial-gradient(circle at 50% 42%, rgba(239,68,68,0.22) 0%, rgba(7,8,11,0.78) 65%, rgba(7,8,11,0.96) 100%)"
                    : frame >= 68
                      ? "radial-gradient(circle at 50% 40%, rgba(245,197,24,0.16) 0%, rgba(7,8,11,0.72) 65%, rgba(7,8,11,0.95) 100%)"
                      : "radial-gradient(circle at 50% 38%, rgba(255,255,255,0.18) 0%, rgba(7,8,11,0.68) 62%, rgba(7,8,11,0.94) 100%)",
              }}
            />

            {/* Subtle Diagonal Editorial Grid Accent */}
            <AbsoluteFill
              style={{
                backgroundImage:
                  "repeating-linear-gradient(135deg, rgba(245,197,24,0.04) 0px, rgba(245,197,24,0.04) 1px, transparent 1px, transparent 56px)",
                opacity: 0.75,
              }}
            />
          </AbsoluteFill>
        )}

        {/* BEAT 1: TOTTENHAM CUTOUT (Frames 0 - 68) */}
        {frame < 68 && (
          <AbsoluteFill>
            {/* Giant Kinetic Background Type */}
            <div
              style={{
                position: "absolute",
                top: 230,
                left: 0,
                right: 0,
                textAlign: "center",
                fontFamily: "'Big Shoulders Display', sans-serif",
                fontSize: 280,
                lineHeight: 0.88,
                letterSpacing: 8,
                color: "transparent",
                WebkitTextStroke: "2px rgba(245, 197, 24, 0.32)",
                transform: `scale(${interpolate(b1Spring, [0, 1], [1.18, 1])})`,
                opacity: interpolate(b1Spring, [0, 1], [0, 0.9]),
                userSelect: "none",
              }}
            >
              ORIGEN
            </div>

            {/* Soft White/Gold Halo Behind Player */}
            <div
              style={{
                position: "absolute",
                width: 780,
                height: 780,
                left: "50%",
                top: 260,
                transform: "translateX(-50%)",
                borderRadius: "50%",
                background:
                  "radial-gradient(circle, rgba(255,255,255,0.34) 0%, rgba(245,197,24,0.18) 38%, transparent 72%)",
                mixBlendMode: "screen",
                filter: "blur(24px)",
              }}
            />

            {/* Tottenham Cutout */}
            <div
              style={{
                position: "absolute",
                bottom: -30,
                left: 0,
                right: 0,
                display: "flex",
                justifyContent: "center",
                transform: `translateX(${b1TranslateX}px) scale(${b1Scale})`,
                filter:
                  b1Blur > 0.1
                    ? `blur(${b1Blur}px) drop-shadow(0 0 28px rgba(255,255,255,0.45)) drop-shadow(0 24px 44px rgba(0,0,0,0.9))`
                    : "drop-shadow(0 0 28px rgba(255,255,255,0.45)) drop-shadow(0 24px 44px rgba(0,0,0,0.9))",
              }}
            >
              <Img
                src={staticFile("harry_kane_spurs_cutout.png")}
                style={{
                  height: 1180,
                  width: "auto",
                  objectFit: "contain",
                }}
              />
            </div>
          </AbsoluteFill>
        )}

        {/* BEAT 2: ENGLAND CUTOUT COLLAGE (Frames 68 - 132) */}
        {frame >= 68 && frame < 132 && (
          <AbsoluteFill>
            {/* Ghosted Collage Layer of Previous Stage */}
            <Img
              src={staticFile("harry_kane_spurs_cutout.png")}
              style={{
                position: "absolute",
                bottom: 40,
                left: -90,
                height: 1020,
                width: "auto",
                opacity: 0.16,
                filter: "grayscale(1) contrast(1.4) blur(2px)",
              }}
            />

            {/* Giant Kinetic Background Type */}
            <div
              style={{
                position: "absolute",
                top: 210,
                left: 0,
                right: 0,
                textAlign: "center",
                fontFamily: "'Big Shoulders Display', sans-serif",
                fontSize: 250,
                lineHeight: 0.88,
                letterSpacing: 6,
                color: "rgba(245, 197, 24, 0.16)",
                WebkitTextStroke: "2px rgba(255, 255, 255, 0.25)",
                transform: `scale(${interpolate(b2Spring, [0, 1], [1.16, 1])})`,
                userSelect: "none",
              }}
            >
              CAPITÁN
            </div>

            {/* White/Gold Rim Halo */}
            <div
              style={{
                position: "absolute",
                width: 820,
                height: 820,
                left: "50%",
                top: 240,
                transform: "translateX(-50%)",
                borderRadius: "50%",
                background:
                  "radial-gradient(circle, rgba(255,255,255,0.36) 0%, rgba(245,197,24,0.22) 42%, transparent 74%)",
                mixBlendMode: "screen",
                filter: "blur(26px)",
              }}
            />

            {/* England Cutout */}
            <div
              style={{
                position: "absolute",
                bottom: -40,
                left: 0,
                right: 0,
                display: "flex",
                justifyContent: "center",
                transform: `translateX(${b2TranslateX}px) scale(${b2Scale})`,
                filter:
                  b2Blur > 0.1
                    ? `blur(${b2Blur}px) drop-shadow(0 0 30px rgba(255,255,255,0.48)) drop-shadow(0 26px 48px rgba(0,0,0,0.92))`
                    : "drop-shadow(0 0 30px rgba(255,255,255,0.48)) drop-shadow(0 26px 48px rgba(0,0,0,0.92))",
              }}
            >
              <Img
                src={staticFile("harry_kane_england_cutout.png")}
                style={{
                  height: 1210,
                  width: "auto",
                  objectFit: "contain",
                }}
              />
            </div>
          </AbsoluteFill>
        )}

        {/* BEAT 3: DESPAIR / RESILIENCE CUTOUT (Frames 132 - 195) */}
        {frame >= 132 && frame < 195 && (
          <AbsoluteFill>
            {/* Ghosted Collage Layer of England Stage */}
            <Img
              src={staticFile("harry_kane_england_cutout.png")}
              style={{
                position: "absolute",
                bottom: 50,
                right: -110,
                height: 1040,
                width: "auto",
                opacity: 0.15,
                filter: "grayscale(1) contrast(1.45) blur(2px)",
              }}
            />

            {/* Giant Kinetic Background Type */}
            <div
              style={{
                position: "absolute",
                top: 220,
                left: 0,
                right: 0,
                textAlign: "center",
                fontFamily: "'Big Shoulders Display', sans-serif",
                fontSize: 220,
                lineHeight: 0.9,
                letterSpacing: 6,
                color: "rgba(239, 68, 68, 0.2)",
                WebkitTextStroke: "2px rgba(245, 197, 24, 0.28)",
                transform: `scale(${interpolate(b3Spring, [0, 1], [1.15, 1])})`,
                userSelect: "none",
              }}
            >
              SIN TREGUA
            </div>

            {/* Dramatic Crimson/Gold Halo */}
            <div
              style={{
                position: "absolute",
                width: 820,
                height: 820,
                left: "50%",
                top: 280,
                transform: "translateX(-50%)",
                borderRadius: "50%",
                background:
                  "radial-gradient(circle, rgba(245,197,24,0.28) 0%, rgba(239,68,68,0.25) 44%, transparent 74%)",
                mixBlendMode: "screen",
                filter: "blur(28px)",
              }}
            />

            {/* Despair Cutout */}
            <div
              style={{
                position: "absolute",
                bottom: -35,
                left: 0,
                right: 0,
                display: "flex",
                justifyContent: "center",
                transform: `translateY(${b3TranslateY}px) scale(${b3Scale})`,
                filter:
                  b3Blur > 0.1
                    ? `blur(${b3Blur}px) drop-shadow(0 0 28px rgba(245,197,24,0.42)) drop-shadow(0 28px 48px rgba(0,0,0,0.95))`
                    : "drop-shadow(0 0 28px rgba(245,197,24,0.42)) drop-shadow(0 28px 48px rgba(0,0,0,0.95))",
              }}
            >
              <Img
                src={staticFile("harry_kane_despair_cutout.png")}
                style={{
                  height: 1170,
                  width: "auto",
                  objectFit: "contain",
                }}
              />
            </div>
          </AbsoluteFill>
        )}

        {/* BEAT 4A: BAYERN / TROPHY LIFT (Frames 195 - 240) */}
        {frame >= 195 && frame < 240 && (
          <AbsoluteFill>
            <Img
              src={staticFile("kane_titan_02_lift_trophy.jpg")}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "50% 24%",
                transform: `scale(${b4Scale})`,
                filter:
                  b4Blur > 0.1
                    ? `blur(${b4Blur}px) contrast(1.08) saturate(1.1)`
                    : "contrast(1.08) saturate(1.1)",
              }}
            />
            <AbsoluteFill
              style={{
                background:
                  "linear-gradient(180deg, rgba(7,8,11,0.72) 0%, rgba(7,8,11,0.1) 38%, rgba(7,8,11,0.22) 70%, rgba(7,8,11,0.88) 100%)",
              }}
            />
            {/* Gold Rim Glow */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "radial-gradient(circle at 50% 35%, rgba(245,197,24,0.24) 0%, transparent 62%)",
                mixBlendMode: "screen",
              }}
            />
            {/* Kinetic Champion Header */}
            <div
              style={{
                position: "absolute",
                bottom: 110,
                left: 64,
                right: 64,
                textAlign: "center",
                fontFamily: "'Big Shoulders Display', sans-serif",
                fontSize: 168,
                lineHeight: 0.9,
                letterSpacing: 6,
                color: GOLD,
                textShadow: "0 12px 36px rgba(0,0,0,0.95)",
                transform: `scale(${interpolate(b4Spring, [0, 1], [1.14, 1])})`,
              }}
            >
              CAMPEÓN
            </div>
          </AbsoluteFill>
        )}

        {/* BEAT 4B: CLIMAX BALLON D'OR + MDC LOCKUP (Frames 240 - 285) */}
        {frame >= 240 && (
          <AbsoluteFill>
            <Img
              src={staticFile("kane_titan_01_kiss_ballondor.jpg")}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "20% 22%",
                transform: `scale(${b5Scale})`,
                filter:
                  b5Blur > 0.1
                    ? `blur(${b5Blur}px) contrast(1.1) saturate(1.12)`
                    : "contrast(1.1) saturate(1.12)",
              }}
            />
            <AbsoluteFill
              style={{
                background:
                  "linear-gradient(180deg, rgba(7,8,11,0.68) 0%, rgba(7,8,11,0.08) 38%, rgba(7,8,11,0.25) 68%, rgba(7,8,11,0.92) 100%)",
              }}
            />
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "radial-gradient(circle at 50% 40%, rgba(245,197,24,0.28) 0%, transparent 60%)",
                mixBlendMode: "screen",
              }}
            />

            {/* End-card MDC Seal Lockup */}
            <div
              style={{
                position: "absolute",
                bottom: 84,
                left: 60,
                right: 60,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 14,
                opacity: lockupSpring,
                transform: `translateY(${lockupY}px)`,
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 18,
                  padding: "14px 28px",
                  borderRadius: 999,
                  backgroundColor: "rgba(7, 8, 11, 0.86)",
                  border: `1.5px solid rgba(245, 197, 24, 0.65)`,
                  boxShadow: "0 14px 36px rgba(0, 0, 0, 0.75)",
                }}
              >
                <Img
                  src={staticFile("mdc_logo_oficial.png")}
                  style={{
                    width: 52,
                    height: 52,
                    borderRadius: "50%",
                    objectFit: "cover",
                  }}
                />
                <div
                  style={{
                    fontFamily: "'Big Shoulders Display', sans-serif",
                    fontSize: 44,
                    letterSpacing: 4,
                    color: INK,
                  }}
                >
                  MENTALIDAD DE CAMPEÓN{" "}
                  <span style={{ color: GOLD }}>· MDC</span>
                </div>
              </div>
            </div>
          </AbsoluteFill>
        )}

        {/* PERIMETER OBSIDIAN VIGNETTE */}
        <AbsoluteFill
          style={{
            boxShadow: "inset 0 0 140px rgba(7, 8, 11, 0.92)",
            pointerEvents: "none",
          }}
        />
      </AbsoluteFill>

      {/* HORIZONTAL WIPE LUMINOUS EDGE STREAK (Frames 0 - 15) */}
      {wipeStreakOpacity > 0 && (
        <div
          style={{
            position: "absolute",
            top: 0,
            bottom: 0,
            left: wipeStreakX - 18,
            width: 36,
            background:
              "linear-gradient(90deg, transparent 0%, rgba(245,197,24,0.85) 50%, #FFFFFF 75%, transparent 100%)",
            filter: "blur(8px)",
            opacity: wipeStreakOpacity,
            pointerEvents: "none",
          }}
        />
      )}

      {/* DISCRETE TOP HUD: MDC OBSIDIAN / GOLD BRANDING */}
      <div
        style={{
          position: "absolute",
          top: 44,
          left: 44,
          right: 44,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          opacity: hudOpacity,
          pointerEvents: "none",
        }}
      >
        {/* Top-Left MDC Pill */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            padding: "8px 18px 8px 10px",
            borderRadius: 999,
            backgroundColor: "rgba(7, 8, 11, 0.82)",
            border: "1px solid rgba(245, 197, 24, 0.45)",
            boxShadow: "0 8px 24px rgba(0, 0, 0, 0.55)",
          }}
        >
          <Img
            src={staticFile("mdc_logo_oficial.png")}
            style={{
              width: 38,
              height: 38,
              borderRadius: "50%",
              objectFit: "cover",
            }}
          />
          <span
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 700,
              fontSize: 18,
              letterSpacing: 1.8,
              color: INK,
            }}
          >
            MENTALIDAD DE CAMPEÓN <span style={{ color: GOLD }}>· MDC</span>
          </span>
        </div>

        {/* Top-Right Beat Telemetry Pill */}
        <div
          style={{
            padding: "10px 18px",
            borderRadius: 999,
            backgroundColor: "rgba(7, 8, 11, 0.78)",
            border: `1px solid ${
              activeBeat.code === "03"
                ? "rgba(239, 68, 68, 0.5)"
                : "rgba(245, 197, 24, 0.35)"
            }`,
            fontFamily: "'JetBrains Mono', monospace",
            fontWeight: 700,
            fontSize: 16,
            letterSpacing: 1.4,
            color: activeBeat.code === "03" ? CRIMSON : GOLD,
          }}
        >
          {activeBeat.code} // {activeBeat.label}
        </div>
      </div>

      {/* BRIEF 3-FRAME IMPACT FLASH */}
      {flashOpacity > 0 && (
        <AbsoluteFill
          style={{
            backgroundColor: "#FFFDF5",
            opacity: flashOpacity,
            pointerEvents: "none",
          }}
        />
      )}

      {/* SUBTLE END DIP FOR SEAMLESS GIF LOOP */}
      {endDipOpacity > 0 && (
        <AbsoluteFill
          style={{
            backgroundColor: OBSIDIAN,
            opacity: endDipOpacity,
            pointerEvents: "none",
          }}
        />
      )}
    </AbsoluteFill>
  );
};
