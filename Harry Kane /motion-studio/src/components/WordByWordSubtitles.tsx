import React from "react";
import { interpolate, spring, useVideoConfig } from "remotion";

export interface WordTimestamp {
  word: string;
  start: number;
  end: number;
  part?: number;
}

export interface SubtitleChunk {
  start: number;
  end: number;
  text: string;
  words: WordTimestamp[];
}

interface WordByWordSubtitlesProps {
  frame: number;
  chunks: SubtitleChunk[];
  variant?: "16x9" | "9x16";
  bottomOffset?: number;
  fontSize?: number;
}

const HIGHLIGHT_KEYWORDS = [
  "titán",
  "etiqueta",
  "londres",
  "arsenal",
  "premier",
  "kane",
  "gordito",
  "despedido",
  "lodo",
  "pulmón",
  "millwall",
  "norwich",
  "leicester",
  "metatarsiano",
  "vardy",
  "goleador",
  "combustible",
  "letal",
];

export const WordByWordSubtitles: React.FC<WordByWordSubtitlesProps> = ({
  frame,
  chunks,
  variant = "16x9",
  bottomOffset,
  fontSize,
}) => {
  const { fps } = useVideoConfig();
  const currentTime = frame / fps;

  // Find active chunk with slight 0.1s grace window
  const activeChunk = chunks.find(
    (c) => currentTime >= c.start && currentTime <= c.end + 0.1
  );

  if (!activeChunk) return null;

  const isVertical = variant === "9x16";
  const defaultFontSize = isVertical ? 56 : 92;
  const actualFontSize = fontSize || defaultFontSize;
  const defaultBottom = isVertical ? 460 : 160;
  const actualBottom = bottomOffset !== undefined ? bottomOffset : defaultBottom;

  // Spring entrance for new chunk
  const chunkFrame = Math.max(0, (currentTime - activeChunk.start) * fps);
  const chunkSpring = spring({
    frame: chunkFrame,
    fps,
    config: { damping: 14, mass: 0.6, stiffness: 180 },
  });

  return (
    <div
      style={{
        position: "absolute",
        left: 0,
        right: 0,
        bottom: actualBottom,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        pointerEvents: "none",
        zIndex: 90,
      }}
    >
      <div
        style={{
          transform: `scale(${interpolate(chunkSpring, [0, 1], [0.94, 1.0])})`,
          backgroundColor: isVertical
            ? "rgba(5, 7, 12, 0.75)"
            : "rgba(7, 9, 15, 0.82)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          border: isVertical
            ? "1.5px solid rgba(255, 255, 255, 0.12)"
            : "1.5px solid rgba(245, 197, 24, 0.2)",
          boxShadow: isVertical
            ? "0 12px 40px rgba(0, 0, 0, 0.8)"
            : "0 16px 48px rgba(0, 0, 0, 0.85), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
          borderRadius: isVertical ? "20px" : "18px",
          padding: isVertical ? "16px 36px" : "16px 42px",
          maxWidth: isVertical ? "880px" : "2800px",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: isVertical ? "12px 18px" : "18px 28px",
          textAlign: "center",
        }}
      >
        {activeChunk.words.map((w, idx) => {
          const isSpoken = currentTime >= w.end;
          const isActive = currentTime >= w.start && currentTime < w.end;
          const cleanWord = w.word.toLowerCase().replace(/[^a-záéíóúüñ]/gi, "");
          const isKeyword = HIGHLIGHT_KEYWORDS.some((kw) =>
            cleanWord.includes(kw)
          );

          // Active word pop calculation
          const wordFrame = Math.max(0, (currentTime - w.start) * fps);
          const wordScale = isActive
            ? interpolate(wordFrame, [0, 3, 6], [1.0, 1.15, 1.08], {
                extrapolateRight: "clamp",
              })
            : 1.0;

          let textColor = "rgba(255, 255, 255, 0.35)"; // future word
          let textShadow = "none";
          let fontWeight = 800;

          if (isSpoken) {
            textColor = "#FFFFFF";
            fontWeight = 800;
          }

          if (isActive) {
            textColor = isKeyword ? "#38BDF8" : "#F5C518"; // Cyan for key themes, Gold for active words
            fontWeight = 950;
            textShadow = isKeyword
              ? "0 0 24px rgba(56, 189, 248, 0.9), 0 2px 8px rgba(0,0,0,0.8)"
              : "0 0 24px rgba(245, 197, 24, 0.9), 0 2px 8px rgba(0,0,0,0.8)";
          }

          return (
            <span
              key={`${idx}-${w.word}-${w.start}`}
              style={{
                fontFamily:
                  "-apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Montserrat', 'Inter', sans-serif",
                fontSize: `${actualFontSize}px`,
                fontWeight,
                color: textColor,
                textTransform: isVertical ? "uppercase" : "none",
                letterSpacing: isVertical ? "1px" : "0.5px",
                transform: `scale(${wordScale})`,
                transition: "color 0.08s ease, transform 0.08s ease",
                textShadow:
                  textShadow !== "none"
                    ? textShadow
                    : "0 2px 8px rgba(0, 0, 0, 0.9)",
                display: "inline-block",
                margin: isVertical ? "0 4px" : "0 8px",
              }}
            >
              {w.word}
            </span>
          );
        })}
      </div>
    </div>
  );
};

