import React from "react";
import { interpolate, useCurrentFrame } from "remotion";

interface Props {
  x: number;
  y: number;
  width: number;
  height: number;
  label: string;
  subLabel?: string;
  color?: string;
  delay?: number;
}

export const TargetReticle: React.FC<Props> = ({
  x,
  y,
  width,
  height,
  label,
  subLabel,
  color = "#E5B842",
  delay = 0,
}) => {
  const frame = useCurrentFrame();
  const currentFrame = Math.max(0, frame - delay);

  const opacity = interpolate(currentFrame, [0, 15], [0, 1], {
    extrapolateRight: "clamp",
  });
  const scale = interpolate(currentFrame, [0, 15], [1.3, 1], {
    extrapolateRight: "clamp",
  });
  const cornerSize = 28;

  return (
    <div
      style={{
        position: "absolute",
        left: `${x}px`,
        top: `${y}px`,
        width: `${width}px`,
        height: `${height}px`,
        transform: `scale(${scale})`,
        opacity,
        pointerEvents: "none",
        zIndex: 50,
      }}
    >
      {/* Top-Left Corner */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: `${cornerSize}px`,
          height: `${cornerSize}px`,
          borderTop: `4px solid ${color}`,
          borderLeft: `4px solid ${color}`,
        }}
      />
      {/* Top-Right Corner */}
      <div
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          width: `${cornerSize}px`,
          height: `${cornerSize}px`,
          borderTop: `4px solid ${color}`,
          borderRight: `4px solid ${color}`,
        }}
      />
      {/* Bottom-Left Corner */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: `${cornerSize}px`,
          height: `${cornerSize}px`,
          borderBottom: `4px solid ${color}`,
          borderLeft: `4px solid ${color}`,
        }}
      />
      {/* Bottom-Right Corner */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          right: 0,
          width: `${cornerSize}px`,
          height: `${cornerSize}px`,
          borderBottom: `4px solid ${color}`,
          borderRight: `4px solid ${color}`,
        }}
      />

      {/* Target Tag Badge */}
      <div
        style={{
          position: "absolute",
          bottom: `-${subLabel ? 80 : 50}px`,
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          backgroundColor: "rgba(10, 12, 18, 0.9)",
          border: `2px solid ${color}`,
          borderRadius: "12px",
          padding: "8px 24px",
          whiteSpace: "nowrap",
          boxShadow: `0 8px 30px rgba(0,0,0,0.8), 0 0 20px ${color}40`,
        }}
      >
        <span
          style={{
            fontSize: "26px",
            fontWeight: 900,
            color: "#FFFFFF",
            letterSpacing: "3px",
            fontFamily: "system-ui, sans-serif",
          }}
        >
          {label}
        </span>
        {subLabel && (
          <span
            style={{
              fontSize: "18px",
              fontWeight: 700,
              color,
              letterSpacing: "2px",
              fontFamily: "monospace",
              marginTop: "4px",
            }}
          >
            {subLabel}
          </span>
        )}
      </div>
    </div>
  );
};
