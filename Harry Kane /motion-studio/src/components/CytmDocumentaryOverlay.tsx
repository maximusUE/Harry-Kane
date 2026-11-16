import React from "react";
import {
  AbsoluteFill,
  Img,
  interpolate,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";

export interface CytmDocumentaryOverlayProps {
  channelName?: string;
  dossierName?: string;
  telemetryTag?: string;
  showTimecode?: boolean;
  showViewfinder?: boolean;
  showAudioBars?: boolean;
  opacity?: number;
}

export const CytmDocumentaryOverlay: React.FC<CytmDocumentaryOverlayProps> = ({
  channelName = "MENTALIDAD DE CAMPEÓN",
  dossierName = "HARRY KANE · EL PURGATORIO DE LAS 6 FINALES",
  telemetryTag = "EXPEDIENTE MDC · BLOQUE 3",
  showTimecode = true,
  showViewfinder = true,
  showAudioBars = true,
  opacity = 1,
}) => {
  const frame = useCurrentFrame();
  const { fps, width, height } = useVideoConfig();

  const isVertical = width < height; // 9:16
  const is4K = width >= 3840;
  const scale = is4K ? 2 : 1;

  // Pulsing gold & crimson glow animation
  const pulse = interpolate(Math.sin(frame / 14), [-1, 1], [0.96, 1.04]);
  const goldGlow = interpolate(Math.sin(frame / 14), [-1, 1], [12, 28]);

  // Formatted Timecode: HH:MM:SS:FF
  const totalSeconds = Math.floor(frame / fps);
  const frames = String(frame % fps).padStart(2, "0");
  const seconds = String(totalSeconds % 60).padStart(2, "0");
  const minutes = String(Math.floor(totalSeconds / 60) % 60).padStart(2, "0");
  const hours = String(Math.floor(totalSeconds / 3600)).padStart(2, "0");
  const timecodeString = `TC ${hours}:${minutes}:${seconds}:${frames}`;

  // Audio Telemetry Bars animation in MDC palette (#F5C518, #EF4444, #FFE57F, #FFFFFF)
  const bar1 = Math.abs(Math.sin(frame / 4)) * 100;
  const bar2 = Math.abs(Math.sin(frame / 3.2 + 1)) * 100;
  const bar3 = Math.abs(Math.cos(frame / 4.5)) * 100;
  const bar4 = Math.abs(Math.sin(frame / 5 + 2)) * 100;

  const topOffset = isVertical ? 140 : is4K ? 72 : 36;
  const sideOffset = isVertical ? 40 : is4K ? 96 : 48;

  if (isVertical) {
    return (
      <AbsoluteFill
        style={{
          pointerEvents: "none",
          zIndex: 900,
          opacity,
          fontFamily:
            "'Figtree', -apple-system, BlinkMacSystemFont, 'SF Pro Display', sans-serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: `${topOffset}px`,
            left: `${sideOffset}px`,
            right: `${sideOffset}px`,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {/* Píldora Superior Izquierda: Logo Diseño 2 + MENTALIDAD DE CAMPEÓN */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              padding: "8px 20px 8px 10px",
              borderRadius: "999px",
              backgroundColor: "rgba(7, 8, 11, 0.9)",
              border: "1.5px solid rgba(245, 197, 24, 0.55)",
              backdropFilter: "blur(16px)",
              boxShadow: "0 8px 24px rgba(0, 0, 0, 0.8)",
            }}
          >
            <div
              style={{
                width: "36px",
                height: "36px",
                borderRadius: "50%",
                overflow: "hidden",
                border: "1.5px solid #F5C518",
                boxShadow: `0 0 ${goldGlow * 0.5}px rgba(245, 197, 24, 0.5)`,
              }}
            >
              <Img
                src={staticFile("mdc_logo_oficial.png")}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
            <span
              style={{
                color: "#FFFFFF",
                fontSize: "16px",
                fontWeight: 900,
                letterSpacing: "2.5px",
                textTransform: "uppercase",
              }}
            >
              MENTALIDAD DE <span style={{ color: "#F5C518" }}>CAMPEÓN</span>
            </span>
          </div>

          {/* Píldora Superior Derecha: Timecode */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              padding: "10px 18px",
              borderRadius: "999px",
              backgroundColor: "rgba(7, 8, 11, 0.9)",
              border: "1px solid rgba(239, 68, 68, 0.45)",
              backdropFilter: "blur(16px)",
            }}
          >
            <span
              style={{
                color: "#FFFFFF",
                fontSize: "14px",
                fontWeight: 700,
                letterSpacing: "2px",
                fontFamily: "monospace",
              }}
            >
              {timecodeString}
            </span>
            <div
              style={{
                width: "8px",
                height: "8px",
                borderRadius: "50%",
                backgroundColor: "#EF4444",
                boxShadow: "0 0 10px #EF4444",
              }}
            />
          </div>
        </div>
      </AbsoluteFill>
    );
  }

  // 16:9 CINEMATIC 4K / 1080p MASTER LAYOUT — IDENTIDAD OFICIAL DISEÑO 2 (MDC)
  const pillPadding = `${12 * scale}px ${30 * scale}px ${12 * scale}px ${14 * scale}px`;
  const rightPillPadding = `${14 * scale}px ${32 * scale}px`;
  const logoSize = `${48 * scale}px`;
  const mainFontSize = `${17 * scale}px`;
  const subFontSize = `${13 * scale}px`;
  const pillBorderRadius = `${999 * scale}px`;

  return (
    <AbsoluteFill
      style={{
        pointerEvents: "none",
        zIndex: 900,
        opacity,
        fontFamily:
          "'Figtree', -apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Segoe UI', Roboto, sans-serif",
      }}
    >
      {/* 🧠 PÍLDORA SUPERIOR IZQUIERDA: LOGO OFICIAL DISEÑO 2 (CEREBRO CIRCUITO + MDC) + MENTALIDAD DE CAMPEÓN */}
      <div
        style={{
          position: "absolute",
          top: `${topOffset}px`,
          left: `${sideOffset}px`,
          display: "flex",
          alignItems: "center",
          gap: `${16 * scale}px`,
          padding: pillPadding,
          borderRadius: pillBorderRadius,
          backgroundColor: "rgba(7, 8, 11, 0.88)",
          border: `${Math.max(1, 1.5 * scale)}px solid rgba(245, 197, 24, 0.55)`,
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          boxShadow: `0 ${12 * scale}px ${36 * scale}px rgba(0, 0, 0, 0.85), 0 0 ${24 * scale}px rgba(245, 197, 24, 0.15)`,
        }}
      >
        {/* Medallón Circular Oficial Diseño 2: Cerebro Mitad Circuito / Mitad Córtex + MDC */}
        <div
          style={{
            position: "relative",
            width: logoSize,
            height: logoSize,
            borderRadius: "50%",
            overflow: "hidden",
            border: `${1.5 * scale}px solid #F5C518`,
            boxShadow: `0 0 ${goldGlow * scale}px rgba(245, 197, 24, 0.45)`,
            transform: `scale(${pulse})`,
            backgroundColor: "#07080B",
            flexShrink: 0,
          }}
        >
          <Img
            src={staticFile("mdc_logo_oficial.png")}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <span
            style={{
              color: "#FFFFFF",
              fontSize: mainFontSize,
              fontWeight: 900,
              letterSpacing: `${3.5 * scale}px`,
              textTransform: "uppercase",
              lineHeight: 1.1,
              textShadow: "0 2px 10px rgba(0, 0, 0, 0.95)",
            }}
          >
            MENTALIDAD DE{" "}
            <span
              style={{
                color: "#F5C518",
                textShadow: "0 0 18px rgba(245, 197, 24, 0.55)",
              }}
            >
              CAMPEÓN
            </span>
          </span>
          <span
            style={{
              color: "#FDE68A",
              fontSize: `${10.5 * scale}px`,
              fontWeight: 700,
              letterSpacing: `${2.8 * scale}px`,
              textTransform: "uppercase",
              marginTop: `${3 * scale}px`,
              opacity: 0.92,
              fontFamily: "monospace",
            }}
          >
            MDC · PSICOLOGÍA DE ÉLITE &amp; CINE DOCUMENTAL
          </span>
        </div>
      </div>

      {/* 🎬 PÍLDORA SUPERIOR DERECHA: EXPEDIENTE + TELEMETRÍA OFICIAL MDC */}
      <div
        style={{
          position: "absolute",
          top: `${topOffset}px`,
          right: `${sideOffset}px`,
          display: "flex",
          alignItems: "center",
          gap: `${18 * scale}px`,
          padding: rightPillPadding,
          borderRadius: pillBorderRadius,
          backgroundColor: "rgba(7, 8, 11, 0.88)",
          border: `${Math.max(1, 1.5 * scale)}px solid rgba(245, 197, 24, 0.32)`,
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          boxShadow: `0 ${12 * scale}px ${36 * scale}px rgba(0, 0, 0, 0.85)`,
        }}
      >
        {/* Crimson Live Pulse Dot */}
        <div
          style={{
            width: `${9 * scale}px`,
            height: `${9 * scale}px`,
            borderRadius: "50%",
            backgroundColor: "#EF4444",
            boxShadow: `0 0 ${12 * scale}px #EF4444, 0 0 ${22 * scale}px #EF4444`,
          }}
        />

        {/* Dossier Title */}
        <span
          style={{
            color: "#FFFFFF",
            fontSize: `${15.5 * scale}px`,
            fontWeight: 800,
            letterSpacing: `${2.8 * scale}px`,
            textTransform: "uppercase",
            textShadow: "0 2px 8px rgba(0, 0, 0, 0.9)",
          }}
        >
          {dossierName}
        </span>

        {/* Separator Pipe */}
        <div
          style={{
            width: `${1.5 * scale}px`,
            height: `${22 * scale}px`,
            backgroundColor: "rgba(245, 197, 24, 0.35)",
          }}
        />

        {/* Telemetry Tag with Live Timecode */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: `${10 * scale}px`,
          }}
        >
          <span
            style={{
              color: "#F5C518",
              fontSize: subFontSize,
              fontWeight: 800,
              letterSpacing: `${2.5 * scale}px`,
              textTransform: "uppercase",
            }}
          >
            {telemetryTag}
          </span>

          {showTimecode && (
            <span
              style={{
                color: "#F8FAFC",
                fontSize: subFontSize,
                fontWeight: 700,
                letterSpacing: `${1.5 * scale}px`,
                fontFamily: "monospace",
                backgroundColor: "rgba(18, 21, 30, 0.85)",
                padding: `${4 * scale}px ${10 * scale}px`,
                borderRadius: `${6 * scale}px`,
                border: "1px solid rgba(245, 197, 24, 0.3)",
              }}
            >
              {timecodeString}
            </span>
          )}

          {/* Animated Mini Audio Wave/VU Telemetry in Official MDC Palette */}
          {showAudioBars && (
            <div
              style={{
                display: "flex",
                alignItems: "flex-end",
                gap: `${3 * scale}px`,
                height: `${16 * scale}px`,
                paddingLeft: `${4 * scale}px`,
              }}
            >
              <div
                style={{
                  width: `${3 * scale}px`,
                  height: `${Math.max(4 * scale, (bar1 / 100) * 16 * scale)}px`,
                  backgroundColor: "#F5C518",
                  borderRadius: "1px",
                }}
              />
              <div
                style={{
                  width: `${3 * scale}px`,
                  height: `${Math.max(4 * scale, (bar2 / 100) * 16 * scale)}px`,
                  backgroundColor: "#EF4444",
                  borderRadius: "1px",
                }}
              />
              <div
                style={{
                  width: `${3 * scale}px`,
                  height: `${Math.max(4 * scale, (bar3 / 100) * 16 * scale)}px`,
                  backgroundColor: "#FFE57F",
                  borderRadius: "1px",
                }}
              />
              <div
                style={{
                  width: `${3 * scale}px`,
                  height: `${Math.max(4 * scale, (bar4 / 100) * 16 * scale)}px`,
                  backgroundColor: "#FFFFFF",
                  borderRadius: "1px",
                }}
              />
            </div>
          )}
        </div>
      </div>

      {/* 🧭 TECHNICAL VIEWFINDER CORNER RETICLES & OFFICIAL MDC WATERMARK */}
      {showViewfinder && (
        <>
          {/* Top Left */}
          <div
            style={{
              position: "absolute",
              top: `${46 * scale}px`,
              left: `${46 * scale}px`,
              width: `${38 * scale}px`,
              height: `${38 * scale}px`,
              borderTop: `${2 * scale}px solid rgba(245, 197, 24, 0.5)`,
              borderLeft: `${2 * scale}px solid rgba(245, 197, 24, 0.5)`,
            }}
          />
          {/* Top Right */}
          <div
            style={{
              position: "absolute",
              top: `${46 * scale}px`,
              right: `${46 * scale}px`,
              width: `${38 * scale}px`,
              height: `${38 * scale}px`,
              borderTop: `${2 * scale}px solid rgba(245, 197, 24, 0.5)`,
              borderRight: `${2 * scale}px solid rgba(245, 197, 24, 0.5)`,
            }}
          />
          {/* Bottom Left */}
          <div
            style={{
              position: "absolute",
              bottom: `${46 * scale}px`,
              left: `${46 * scale}px`,
              width: `${38 * scale}px`,
              height: `${38 * scale}px`,
              borderBottom: `${2 * scale}px solid rgba(245, 197, 24, 0.5)`,
              borderLeft: `${2 * scale}px solid rgba(245, 197, 24, 0.5)`,
            }}
          />
          {/* Bottom Right */}
          <div
            style={{
              position: "absolute",
              bottom: `${46 * scale}px`,
              right: `${46 * scale}px`,
              width: `${38 * scale}px`,
              height: `${38 * scale}px`,
              borderBottom: `${2 * scale}px solid rgba(245, 197, 24, 0.5)`,
              borderRight: `${2 * scale}px solid rgba(245, 197, 24, 0.5)`,
            }}
          />

          {/* Bottom Left Subtle Telemetry Bar */}
          <div
            style={{
              position: "absolute",
              bottom: `${52 * scale}px`,
              left: `${102 * scale}px`,
              display: "flex",
              alignItems: "center",
              gap: `${20 * scale}px`,
              opacity: 0.72,
              fontSize: `${12.5 * scale}px`,
              fontWeight: 700,
              color: "#94A3B8",
              letterSpacing: `${2.5 * scale}px`,
              fontFamily: "monospace",
            }}
          >
            <span>MDC ARCHIVE // 4K UHD // 30 FPS</span>
            <span style={{ color: "#F5C518" }}>·</span>
            <span>OBSIDIAN &amp; IMPERIAL GOLD</span>
            <span style={{ color: "#F5C518" }}>·</span>
            <span style={{ color: "#EF4444" }}>REC ● MASTER -11.5 LUFS</span>
          </div>

          {/* Bottom Right Official MDC Watermark Badge (Diseño 2) */}
          <div
            style={{
              position: "absolute",
              bottom: `${44 * scale}px`,
              right: `${102 * scale}px`,
              display: "flex",
              alignItems: "center",
              gap: `${12 * scale}px`,
              opacity: 0.82,
              backgroundColor: "rgba(7, 8, 11, 0.75)",
              padding: `${6 * scale}px ${16 * scale}px ${6 * scale}px ${8 * scale}px`,
              borderRadius: `${999 * scale}px`,
              border: `1px solid rgba(245, 197, 24, 0.35)`,
            }}
          >
            <div
              style={{
                width: `${28 * scale}px`,
                height: `${28 * scale}px`,
                borderRadius: "50%",
                overflow: "hidden",
                border: `1px solid #F5C518`,
              }}
            >
              <Img
                src={staticFile("mdc_watermark_150.png")}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
            <span
              style={{
                fontSize: `${12 * scale}px`,
                fontWeight: 800,
                color: "#F8FAFC",
                letterSpacing: `${2.5 * scale}px`,
                fontFamily: "monospace",
              }}
            >
              MENTALIDAD DE <span style={{ color: "#F5C518" }}>CAMPEÓN</span> · MDC
            </span>
          </div>
        </>
      )}
    </AbsoluteFill>
  );
};
