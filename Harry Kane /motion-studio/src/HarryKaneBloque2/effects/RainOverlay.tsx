import React, { useMemo } from "react";
import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";

interface Props {
  intensity?: number; // 0 to 1
  lightningFrames?: number[];
  speed?: number;
}

export const RainOverlay: React.FC<Props> = ({
  intensity = 0.8,
  lightningFrames = [30, 115, 210],
  speed = 1.6,
}) => {
  const frame = useCurrentFrame();

  // Deterministic raindrop generation
  const drops = useMemo(() => {
    return Array.from({ length: 70 }).map((_, i) => ({
      id: i,
      x: ((i * 197) % 3900) - 50,
      yBase: (i * 131) % 2200,
      length: 40 + (i % 5) * 25,
      thickness: 1.5 + (i % 3) * 0.8,
      speedMult: 0.8 + (i % 4) * 0.35,
      alpha: 0.25 + (i % 5) * 0.12,
    }));
  }, []);

  // Lightning flash calculation
  const lightningOpacity = useMemo(() => {
    for (const lf of lightningFrames) {
      if (frame >= lf && frame <= lf + 7) {
        return interpolate(frame - lf, [0, 2, 7], [0.55, 0.2, 0], {
          extrapolateLeft: "clamp",
          extrapolateRight: "clamp",
        });
      }
    }
    return 0;
  }, [frame, lightningFrames]);

  return (
    <AbsoluteFill style={{ pointerEvents: "none", overflow: "hidden" }}>
      {/* Lightning Flash Overlay */}
      {lightningOpacity > 0 && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundColor: "#E0F2FE",
            opacity: lightningOpacity * intensity,
            mixBlendMode: "screen",
          }}
        />
      )}

      {/* Rain Streaks */}
      <svg
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
        }}
      >
        <defs>
          <linearGradient id="rainGrad" x1="0%" y1="0%" x2="20%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.1" />
            <stop offset="70%" stopColor="#38BDF8" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#BAE6FD" stopOpacity="0.9" />
          </linearGradient>
        </defs>
        {drops.map((drop) => {
          const currentY =
            ((drop.yBase + frame * 42 * speed * drop.speedMult) % 2400) - 100;
          const slantX = drop.length * 0.28;

          return (
            <line
              key={drop.id}
              x1={drop.x}
              y1={currentY}
              x2={drop.x - slantX}
              y2={currentY + drop.length}
              stroke="url(#rainGrad)"
              strokeWidth={drop.thickness}
              strokeLinecap="round"
              opacity={drop.alpha * intensity}
            />
          );
        })}
      </svg>
    </AbsoluteFill>
  );
};
