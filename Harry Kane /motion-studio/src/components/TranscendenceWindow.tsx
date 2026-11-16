import React from "react";
import {
  Img,
  interpolate,
  spring,
  staticFile,
  useVideoConfig,
  Video,
} from "remotion";

export interface TranscendenceWindowProps {
  variant: "video" | "cutout" | "tabloid";
  src: string;
  frame: number;
  width?: string | number;
  height?: string | number;
  scale?: number;
  aspectRatio?: "16:9" | "9:16" | "4:3" | "auto";
  borderRadius?: number;
  borderGold?: boolean;
  boxShadow?: string;
  subtleZoom?: boolean;
  style?: React.CSSProperties;
}

export const TranscendenceWindow: React.FC<TranscendenceWindowProps> = ({
  variant,
  src,
  frame,
  width = "100%",
  height = "100%",
  scale = 1.0,
  aspectRatio = "16:9",
  borderRadius = 16,
  borderGold = true,
  boxShadow,
  subtleZoom = true,
  style = {},
}) => {
  const { fps } = useVideoConfig();

  // Gentle breathing / Ken Burns zoom (1.0 to 1.05, clamped to avoid infinite zoom distortion)
  const zoom = subtleZoom
    ? interpolate(frame, [0, 240], [1.0, 1.05], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
      })
    : 1.0;

  // Spring entrance
  const entrance = spring({
    frame,
    fps,
    config: { damping: 18, mass: 0.9 },
  });

  if (variant === "video") {
    return (
      <div
        style={{
          position: "relative",
          width,
          height,
          overflow: "hidden",
          borderRadius,
          border: borderGold ? "1px solid rgba(245, 197, 24, 0.35)" : "none",
          boxShadow:
            boxShadow ||
            "0 30px 90px rgba(0,0,0,0.9), 0 0 40px rgba(245, 197, 24, 0.08)",
          ...style,
        }}
      >
        <Video
          src={staticFile(src)}
          delayRenderTimeoutInMilliseconds={120000}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            filter: "contrast(1.18) brightness(0.9) saturate(1.05)",
            transform: `scale(${zoom * scale})`,
          }}
        />
        {/* Cinematic Vignette Overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(180deg, rgba(6,7,11,0.55) 0%, rgba(6,7,11,0.05) 50%, rgba(6,7,11,0.75) 100%)",
            pointerEvents: "none",
          }}
        />
      </div>
    );
  }

  if (variant === "cutout") {
    return (
      <div
        style={{
          position: "relative",
          width,
          height,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transform: `scale(${entrance * scale})`,
          ...style,
        }}
      >
        <Img
          src={staticFile(src)}
          style={{
            maxWidth: "100%",
            maxHeight: "100%",
            objectFit: "contain",
            filter:
              "drop-shadow(0 40px 100px rgba(0,0,0,0.95)) drop-shadow(0 0 25px rgba(245, 197, 24, 0.12))",
            transform: `scale(${zoom})`,
          }}
        />
      </div>
    );
  }

  // Tabloid / Press Headline
  return (
    <div
      style={{
        position: "relative",
        width,
        height,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        perspective: 1200,
        transform: `scale(${entrance * scale})`,
        ...style,
      }}
    >
      <div
        style={{
          transform: `rotateX(3deg) rotateY(-2deg) scale(${zoom})`,
          boxShadow:
            boxShadow ||
            "0 45px 120px rgba(0,0,0,0.95), 0 0 50px rgba(255,255,255,0.06)",
          borderRadius: 12,
          overflow: "hidden",
          border: "1px solid rgba(255,255,255,0.15)",
        }}
      >
        <Img
          src={staticFile(src)}
          style={{
            display: "block",
            maxWidth: "100%",
            maxHeight: "100%",
            objectFit: "contain",
          }}
        />
      </div>
    </div>
  );
};

