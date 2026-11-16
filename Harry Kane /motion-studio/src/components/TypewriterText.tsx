import React from "react";
import { interpolate } from "remotion";

interface TypewriterTextProps {
  text: string;
  startFrame: number;
  durationInFrames: number;
  currentFrame: number;
  style?: React.CSSProperties;
  cursorColor?: string;
  showCursor?: boolean;
}

export const TypewriterText: React.FC<TypewriterTextProps> = ({
  text,
  startFrame,
  durationInFrames,
  currentFrame,
  style = {},
  cursorColor = "#38BDF8",
  showCursor = true,
}) => {
  if (currentFrame < startFrame) {
    return null;
  }

  const progress = interpolate(
    currentFrame,
    [startFrame, startFrame + durationInFrames],
    [0, text.length],
    {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    }
  );

  const visibleLength = Math.floor(progress);
  const visibleText = text.slice(0, visibleLength);
  const isFinished = currentFrame >= startFrame + durationInFrames;

  // Blinking cursor: 8 frames on, 8 frames off
  const isCursorVisible = showCursor && (!isFinished || Math.floor((currentFrame - startFrame) / 10) % 2 === 0);

  return (
    <span style={{ display: "inline-block", ...style }}>
      {visibleText}
      {isCursorVisible && (
        <span
          style={{
            color: cursorColor,
            marginLeft: "6px",
            opacity: 0.9,
            display: "inline-block",
            transform: "translateY(-2px)",
          }}
        >
          █
        </span>
      )}
    </span>
  );
};

