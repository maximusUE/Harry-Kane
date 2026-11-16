import React, { useMemo } from 'react';
import { interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion';

interface Perspective3DCardProps {
  x?: number;
  y?: number;
  width?: number;
  height?: number;
  depth?: number;
  color?: string;
  from?: 'below' | 'above' | 'left' | 'right';
  entranceFrame?: number;
  entranceDuration?: number;
  children?: React.ReactNode;
}

function hexToRgb(hex: string): string {
  const clean = hex.replace('#', '');
  const n = parseInt(clean, 16);
  return `${(n >> 16) & 255}, ${(n >> 8) & 255}, ${n & 255}`;
}

export const Perspective3DCard: React.FC<Perspective3DCardProps> = ({
  x = 660,
  y = 340,
  width = 600,
  height = 400,
  depth = 24,
  color = '#E8743C',
  from = 'below',
  entranceFrame = 0,
  entranceDuration = 20,
  children,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const rgb = useMemo(() => hexToRgb(color), [color]);
  const relativeFrame = Math.max(0, frame - entranceFrame);

  // Spring animation for entrance
  const entranceProgress = spring({
    frame: relativeFrame,
    fps,
    config: {
      damping: 14,
      mass: 0.8,
      stiffness: 90,
    },
  });

  // Animated Rim Drawing Progress (0 to 1)
  const rimProgress = interpolate(
    relativeFrame,
    [fps * 0.15, fps * 0.65],
    [0, 1],
    { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' }
  );

  // Initial offsets based on 'from'
  const initialTransform = useMemo(() => {
    switch (from) {
      case 'below':
        return { y: 260, rotX: 55, x: 0, rotY: 0 };
      case 'above':
        return { y: -260, rotX: -55, x: 0, rotY: 0 };
      case 'left':
        return { x: -340, rotY: -55, y: 0, rotX: 0 };
      case 'right':
        return { x: 340, rotY: 55, y: 0, rotX: 0 };
    }
  }, [from]);

  const transX = interpolate(entranceProgress, [0, 1], [initialTransform.x, 0]);
  const transY = interpolate(entranceProgress, [0, 1], [initialTransform.y, 0]);
  const rotX = interpolate(entranceProgress, [0, 1], [initialTransform.rotX, 0]);
  const rotY = interpolate(entranceProgress, [0, 1], [initialTransform.rotY, 0]);
  const scale = interpolate(entranceProgress, [0, 1], [0.85, 1]);
  const opacity = interpolate(relativeFrame, [0, 8], [0, 1], {
    extrapolateRight: 'clamp',
  });

  // Continuous subtle living tilt (breathing sine rotation)
  const t = frame / fps;
  const tiltY = Math.sin(t * 1.2) * 5;
  const tiltX = Math.cos(t * 1.0) * 3;

  return (
    <div
      style={{
        position: 'absolute',
        left: `${x}px`,
        top: `${y}px`,
        width: `${width}px`,
        height: `${height}px`,
        perspective: '1400px',
        transform: `rotateY(${tiltY.toFixed(2)}deg) rotateX(${tiltX.toFixed(2)}deg)`,
        transformStyle: 'preserve-3d',
      }}
    >
      <div
        style={{
          position: 'absolute',
          inset: 0,
          transformStyle: 'preserve-3d',
          transform: `translate3d(${transX.toFixed(1)}px, ${transY.toFixed(1)}px, 0px) rotateX(${rotX.toFixed(1)}deg) rotateY(${rotY.toFixed(1)}deg) scale(${scale.toFixed(3)})`,
          opacity,
        }}
      >
        {/* Thickness Edges */}
        {/* Top Edge */}
        <div
          style={{
            position: 'absolute',
            left: 0,
            top: 0,
            width: `${width}px`,
            height: `${depth}px`,
            background: `linear-gradient(180deg, rgba(${rgb}, 0.55), #0A0A0D)`,
            transform: `rotateX(90deg) translateZ(${-depth / 2}px)`,
            transformOrigin: '50% 0',
          }}
        />
        {/* Bottom Edge */}
        <div
          style={{
            position: 'absolute',
            left: 0,
            top: `${height - depth}px`,
            width: `${width}px`,
            height: `${depth}px`,
            background: `linear-gradient(180deg, rgba(${rgb}, 0.55), #0A0A0D)`,
            transform: `rotateX(-90deg) translateZ(${-depth / 2}px)`,
            transformOrigin: '50% 100%',
          }}
        />
        {/* Left Edge */}
        <div
          style={{
            position: 'absolute',
            left: 0,
            top: 0,
            width: `${depth}px`,
            height: `${height}px`,
            background: `linear-gradient(180deg, rgba(${rgb}, 0.55), #0A0A0D)`,
            transform: `rotateY(-90deg) translateZ(${-depth / 2}px)`,
            transformOrigin: '0 50%',
          }}
        />
        {/* Right Edge */}
        <div
          style={{
            position: 'absolute',
            left: `${width - depth}px`,
            top: 0,
            width: `${depth}px`,
            height: `${height}px`,
            background: `linear-gradient(180deg, rgba(${rgb}, 0.55), #0A0A0D)`,
            transform: `rotateY(90deg) translateZ(${-depth / 2}px)`,
            transformOrigin: '100% 50%',
          }}
        />

        {/* Card Main Face */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            borderRadius: '22px',
            background: 'linear-gradient(160deg, #1C1C22, #0E0E12)',
            boxShadow: '0 40px 90px rgba(0,0,0,0.65)',
            overflow: 'hidden',
            padding: '36px',
            boxSizing: 'border-box',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            transform: 'translateZ(0px)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
          }}
        >
          {/* Animated Neon Rim Glow Overlay */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              borderRadius: 'inherit',
              border: `2px solid rgba(${rgb}, 0.95)`,
              boxShadow: `inset 0 0 24px rgba(${rgb}, 0.40), 0 0 28px rgba(${rgb}, 0.50)`,
              clipPath: `inset(0 calc(100% * ${1 - rimProgress}) 0 0)`,
              pointerEvents: 'none',
            }}
          />

          {/* Children Content */}
          <div style={{ position: 'relative', zIndex: 2 }}>{children}</div>
        </div>
      </div>
    </div>
  );
};

