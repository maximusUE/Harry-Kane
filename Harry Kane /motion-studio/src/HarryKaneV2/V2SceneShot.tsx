import React from "react";
import {
  AbsoluteFill,
  Img,
  interpolate,
  Loop,
  OffthreadVideo,
  staticFile,
  useCurrentFrame,
} from "remotion";
import { Perspective3DCard } from "../components/Perspective3DCard";
import { TypewriterText } from "../components/TypewriterText";
import { V2Shot } from "./types";

interface V2SceneShotProps {
  shot: V2Shot;
  isFirstShot?: boolean;
}

export const V2SceneShot: React.FC<V2SceneShotProps> = ({
  shot,
  isFirstShot = false,
}) => {
  const frame = useCurrentFrame();
  const {
    durationInFrames,
    mediaType,
    mediaSrc,
    subhead,
    headline,
    accentColor = "#F5C518",
    headlineCard,
    zoomFrom = 1.0,
    zoomTo = 1.08,
    panX = [0, 0],
    videoLoopFrames = 90,
  } = shot;

  const scale = interpolate(
    frame,
    [0, Math.max(1, durationInFrames)],
    [zoomFrom, zoomTo],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
  );

  const translateX = interpolate(
    frame,
    [0, Math.max(1, durationInFrames)],
    panX,
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
  );

  const fadeIn = isFirstShot
    ? 1
    : interpolate(frame, [0, 8], [0, 1], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
      });

  const fadeOut = interpolate(
    frame,
    [Math.max(0, durationInFrames - 8), durationInFrames],
    [1, 0],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
  );

  const opacity = Math.min(fadeIn, fadeOut);

  const mediaStyle: React.CSSProperties = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    transform: `scale(${scale}) translateX(${translateX}px)`,
    filter: "contrast(1.12) brightness(0.84) saturate(1.04)",
  };

  return (
    <AbsoluteFill
      style={{
        width: 3840,
        height: 2160,
        overflow: "hidden",
        backgroundColor: "#07080B",
        opacity,
      }}
    >
      {mediaType === "video" ? (
        <Loop durationInFrames={videoLoopFrames}>
          <OffthreadVideo src={staticFile(mediaSrc)} muted style={mediaStyle} />
        </Loop>
      ) : (
        <Img src={staticFile(mediaSrc)} style={mediaStyle} />
      )}

      {/* Cinematic Vignette & Contrast Gradient */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(180deg, rgba(7,8,11,0.72) 0%, rgba(7,8,11,0.18) 38%, rgba(7,8,11,0.35) 68%, rgba(7,8,11,0.92) 100%)",
          pointerEvents: "none",
        }}
      />

      {/* Optional Floating 3D Press Headline / Evidence Card */}
      {headlineCard && (
        <Perspective3DCard
          x={headlineCard.x ?? 2280}
          y={headlineCard.y ?? 420}
          width={headlineCard.width ?? 1320}
          height={headlineCard.height ?? 860}
          color={accentColor}
          from="right"
          entranceFrame={6}
        >
          <div
            style={{
              width: "100%",
              height: "100%",
              position: "relative",
              overflow: "hidden",
              borderRadius: "24px",
              backgroundColor: "#0D1017",
            }}
          >
            <Img
              src={staticFile(headlineCard.imageSrc)}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
            {headlineCard.label && (
              <div
                style={{
                  position: "absolute",
                  bottom: 24,
                  left: 28,
                  padding: "10px 24px",
                  borderRadius: "10px",
                  backgroundColor: "rgba(7,8,11,0.88)",
                  border: `2px solid ${accentColor}`,
                  color: "#FFFFFF",
                  fontSize: "34px",
                  fontWeight: 800,
                  letterSpacing: "0.08em",
                  fontFamily:
                    "'Figtree', -apple-system, BlinkMacSystemFont, sans-serif",
                }}
              >
                {headlineCard.label}
              </div>
            )}
          </div>
        </Perspective3DCard>
      )}

      {/* Optional Documentary Editorial Headline */}
      {(subhead || headline) && (
        <div
          style={{
            position: "absolute",
            left: 140,
            bottom: 390,
            maxWidth: headlineCard ? 1960 : 2800,
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            pointerEvents: "none",
            zIndex: 40,
            fontFamily:
              "'Figtree', -apple-system, BlinkMacSystemFont, 'SF Pro Display', sans-serif",
          }}
        >
          {subhead && (
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "16px",
                alignSelf: "flex-start",
                padding: "12px 28px",
                borderRadius: "999px",
                backgroundColor: "rgba(7,8,11,0.82)",
                border: `2px solid ${accentColor}`,
                color: accentColor,
                fontSize: "36px",
                fontWeight: 800,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
              }}
            >
              {subhead}
            </div>
          )}

          {headline && (
            <div
              style={{
                fontSize: "104px",
                fontWeight: 900,
                lineHeight: 1.06,
                color: "#FFFFFF",
                textShadow:
                  "0 10px 40px rgba(0,0,0,0.95), 0 2px 12px rgba(0,0,0,0.9)",
                letterSpacing: "-0.02em",
                borderLeft: `12px solid ${accentColor}`,
                paddingLeft: "36px",
              }}
            >
              <TypewriterText
                text={headline}
                startFrame={4}
                durationInFrames={Math.min(
                  34,
                  Math.max(12, Math.floor(durationInFrames * 0.35))
                )}
                currentFrame={frame}
                cursorColor={accentColor}
                showCursor={frame < 65}
              />
            </div>
          )}
        </div>
      )}
    </AbsoluteFill>
  );
};

