import React, { useMemo } from 'react';
import { useCurrentFrame, useVideoConfig } from 'remotion';

interface CinematicBackdropProps {
  color?: string; // hex color code e.g. '#EF4444', '#3B82F6', '#E8743C'
  motesCount?: number;
  grid?: boolean;
  gridSpeed?: number;
}

// Pseudo-random deterministic generator (mulberry32)
function mulberry32(a: number) {
  return function () {
    let t = (a += 0x6d2b79f5);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function hexToRgb(hex: string): string {
  const clean = hex.replace('#', '');
  const n = parseInt(clean, 16);
  return `${(n >> 16) & 255}, ${(n >> 8) & 255}, ${n & 255}`;
}

export const CinematicBackdrop: React.FC<CinematicBackdropProps> = ({
  color = '#E8743C',
  motesCount = 28,
  grid = true,
  gridSpeed = 60,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const t = frame / fps;

  const rgb = useMemo(() => hexToRgb(color), [color]);

  // Generate static positions and phase offsets for motes
  const motes = useMemo(() => {
    const rnd = mulberry32(42);
    const list = [];
    for (let i = 0; i < motesCount; i++) {
      const size = 1.5 + rnd() * 3.5;
      const initialLeft = rnd() * 1920;
      const initialTop = 80 + rnd() * 860;
      const phase = rnd() * 6.28;
      const amp = 20 + rnd() * 45;
      const baseOpacity = 0.25 + rnd() * 0.55;
      list.push({ size, initialLeft, initialTop, phase, amp, baseOpacity });
    }
    return list;
  }, [motesCount]);

  const glowOpacity = 0.75 + 0.25 * Math.sin(t * 0.9);
  const floorOffset = (t * gridSpeed) % 110;

  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        overflow: 'hidden',
        backgroundColor: '#07070A',
        pointerEvents: 'none',
      }}
    >
      {/* Background Radial Ground */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: `radial-gradient(ellipse 90% 70% at 50% 64%, rgba(${rgb}, 0.22), rgba(7,7,10,0) 72%), #07070A`,
        }}
      />

      {/* Horizon Breathing Glow */}
      <div
        style={{
          position: 'absolute',
          left: '50%',
          top: '58%',
          width: '1500px',
          height: '280px',
          margin: '-140px 0 0 -750px',
          borderRadius: '50%',
          background: `radial-gradient(ellipse at center, rgba(${rgb}, 0.58), rgba(${rgb}, 0) 70%)`,
          filter: 'blur(35px)',
          opacity: glowOpacity,
        }}
      />

      {/* 3D Perspective Sliding Grid Floor */}
      {grid && (
        <div
          style={{
            position: 'absolute',
            left: '-40%',
            right: '-40%',
            top: '60%',
            height: '900px',
            perspective: '700px',
            perspectiveOrigin: '50% 0',
            WebkitMaskImage: 'linear-gradient(180deg, transparent 0%, #000 22%, #000 70%, transparent 100%)',
            maskImage: 'linear-gradient(180deg, transparent 0%, #000 22%, #000 70%, transparent 100%)',
          }}
        >
          <div
            style={{
              position: 'absolute',
              inset: 0,
              transformOrigin: '50% 0',
              transform: 'rotateX(72deg)',
              backgroundImage: `linear-gradient(rgba(${rgb}, 0.40) 2px, transparent 2px), linear-gradient(90deg, rgba(${rgb}, 0.40) 2px, transparent 2px)`,
              backgroundSize: '110px 110px',
              backgroundPosition: `0px ${floorOffset.toFixed(1)}px`,
            }}
          />
        </div>
      )}

      {/* Drifting Motes / Kinetic Dust Particles */}
      {motes.map((m, idx) => {
        const dx = Math.cos(m.phase + t * 0.25) * m.amp;
        const dy = -t * 8 + Math.sin(m.phase + t * 0.4) * m.amp * 0.5;
        const op = m.baseOpacity * (0.6 + 0.4 * Math.sin(m.phase * 3 + t * 1.3));

        return (
          <div
            key={idx}
            style={{
              position: 'absolute',
              left: `${m.initialLeft}px`,
              top: `${m.initialTop}px`,
              width: `${m.size.toFixed(1)}px`,
              height: `${m.size.toFixed(1)}px`,
              borderRadius: '50%',
              backgroundColor: `rgba(${rgb}, 0.95)`,
              boxShadow: `0 0 10px rgba(${rgb}, 0.85)`,
              transform: `translate(${dx.toFixed(1)}px, ${dy.toFixed(1)}px)`,
              opacity: Math.max(0, Math.min(1, op)),
            }}
          />
        );
      })}

      {/* Cinematic Vignette */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(ellipse 75% 70% at 50% 50%, transparent 55%, rgba(0,0,0,0.65) 100%)',
        }}
      />
    </div>
  );
};

