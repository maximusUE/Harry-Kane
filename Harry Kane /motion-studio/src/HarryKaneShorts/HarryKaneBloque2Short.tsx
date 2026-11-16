import React from "react";
import {
  AbsoluteFill,
  Audio,
  Img,
  interpolate,
  Sequence,
  spring,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { CytmDocumentaryOverlay } from "../components/CytmDocumentaryOverlay";
import { WordByWordSubtitles } from "../components/WordByWordSubtitles";
import subtitleChunks from "../../public/bloque2_subtitle_chunks.json";
import { RainOverlay } from "../HarryKaneBloque2/effects/RainOverlay";

export const HarryKaneBloque2Short: React.FC = () => {
  const frame = useCurrentFrame();

  // Subtle global camera drift
  const bgZoom = interpolate(frame, [0, 1740], [1.0, 1.12]);

  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#07080B",
        width: 1080,
        height: 1920,
        fontFamily:
          "-apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Segoe UI', Roboto, sans-serif",
        overflow: "hidden",
      }}
    >
      {/* 🎙️ PISTAS MAESTRAS DE VOZ DON CÉSAR (-11.7 LUFS) */}
      <Sequence from={0} durationInFrames={1155}>
        <Audio src={staticFile("bloque2_part1.wav")} volume={1} />
      </Sequence>
      <Sequence from={1155} durationInFrames={585}>
        <Audio src={staticFile("bloque2_part2.wav")} volume={1} />
      </Sequence>

      {/* 🎵 BANDA SONORA HIPNÓTICA / FLOW STATE AMBIENT */}
      <Audio src={staticFile("hypnotic_ambient_flow.mp3")} volume={0.28} />

      {/* 🔊 EFECTOS DE SONIDO SINCRONIZADOS AL CORTE */}
      <Sequence from={0} durationInFrames={40}>
        <Audio src={staticFile("sfx/whoosh.mp3")} volume={0.5} />
      </Sequence>
      <Sequence from={240} durationInFrames={40}>
        <Audio src={staticFile("sfx/transicion.mp3")} volume={0.5} />
      </Sequence>
      <Sequence from={540} durationInFrames={40}>
        <Audio src={staticFile("sfx/barrido.mp3")} volume={0.5} />
      </Sequence>
      <Sequence from={870} durationInFrames={40}>
        <Audio src={staticFile("sfx/transicion-b.mp3")} volume={0.5} />
      </Sequence>
      {/* GOLPE STAMP DESPEDIDO (Frame 1060) */}
      <Sequence from={1060} durationInFrames={60}>
        <Audio src={staticFile("sfx/impact-bass-1.mp3")} volume={0.85} />
      </Sequence>
      <Sequence from={1060} durationInFrames={40}>
        <Audio src={staticFile("sfx/golpe.mp3")} volume={0.7} />
      </Sequence>
      {/* Whoosh Reflexión */}
      <Sequence from={1155} durationInFrames={50}>
        <Audio src={staticFile("sfx/whoosh-cinematic.mp3")} volume={0.55} />
      </Sequence>
      {/* Riser Clímax */}
      <Sequence from={1470} durationInFrames={60}>
        <Audio src={staticFile("sfx/riser.mp3")} volume={0.4} />
      </Sequence>
      {/* Impacto Clímax: A Puro Pulmón / En el Barro */}
      <Sequence from={1620} durationInFrames={70}>
        <Audio src={staticFile("sfx/impact-bass-2.mp3")} volume={0.85} />
      </Sequence>

      {/* 🌌 FONDO RADIAL CINEMÁTICO 9:16 */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(circle at 50% 40%, rgba(220, 38, 38, 0.14) 0%, rgba(10, 12, 18, 0.95) 70%, #050608 100%)",
          transform: `scale(${bgZoom})`,
        }}
      />

      {/* ======================================================== */}
      {/* 🎬 ESCENA 1: EL ORIGEN DE UNA ETIQUETA (Frames 0 - 240)    */}
      {/* ======================================================== */}
      <Sequence from={0} durationInFrames={240}>
        <Scene01HookOrigin />
      </Sequence>

      {/* ======================================================== */}
      {/* 🎬 ESCENA 2: EL NIÑO DE HALE END (Frames 240 - 540)        */}
      {/* ======================================================== */}
      <Sequence from={240} durationInFrames={300}>
        <Scene02KidArsenal />
      </Sequence>

      {/* ======================================================== */}
      {/* 🎬 ESCENA 3: LA SENTENCIA EN HIGHBURY (Frames 540 - 870)   */}
      {/* ======================================================== */}
      <Sequence from={540} durationInFrames={330}>
        <Scene03HighburyVerdict />
      </Sequence>

      {/* ======================================================== */}
      {/* 🎬 ESCENA 4: DESPEDIDO POR GORDITO (Frames 870 - 1155)     */}
      {/* ======================================================== */}
      <Sequence from={870} durationInFrames={285}>
        <Scene04ChubbyDespido />
      </Sequence>

      {/* ======================================================== */}
      {/* 🎬 ESCENA 5: EL ESPEJO: 9 DE CADA 10 (Frames 1155 - 1470)  */}
      {/* ======================================================== */}
      <Sequence from={1155} durationInFrames={315}>
        <Scene05MirrorNine />
      </Sequence>

      {/* ======================================================== */}
      {/* 🎬 ESCENA 6: A PURO PULMÓN Y EN EL BARRO (1470 - 1740)    */}
      {/* ======================================================== */}
      <Sequence from={1470} durationInFrames={270}>
        <Scene06ClimaxRain />
      </Sequence>

      {/* 💬 SUBTÍTULOS DINÁMICOS PALABRA POR PALABRA (KARAOKE GOLD/CYAN) */}
      <WordByWordSubtitles
        frame={frame}
        chunks={subtitleChunks as any}
        variant="9x16"
        bottomOffset={440}
        fontSize={50}
      />

      {/* 👑 OVERLAY DOCUMENTAL CYTM OFICIAL (ZONA SEGURA SUPERIOR) */}
      <CytmDocumentaryOverlay channelName="CYTM SPORTS" />

      {/* 🛡️ Viñeta cinematográfica vertical */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          boxShadow: "inset 0 0 160px rgba(0, 0, 0, 0.9)",
          pointerEvents: "none",
        }}
      />
    </AbsoluteFill>
  );
};

// =============================================================
// SUB-COMPONENTES DE ESCENAS VERTICALES 9:16
// =============================================================

const Scene01HookOrigin: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const entrance = spring({
    frame,
    fps,
    config: { damping: 16, mass: 0.8 },
  });
  const opacity = interpolate(frame, [0, 15, 220, 240], [0, 1, 1, 0]);

  return (
    <AbsoluteFill
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        opacity,
        padding: "0 60px",
        textAlign: "center",
        zIndex: 10,
      }}
    >
      <span
        style={{
          color: "#38BDF8",
          fontSize: "30px",
          fontWeight: 800,
          letterSpacing: "6px",
          textTransform: "uppercase",
          marginBottom: "20px",
        }}
      >
        LONDRES · AÑO 2001
      </span>
      <h1
        style={{
          transform: `scale(${entrance})`,
          fontSize: "76px",
          fontWeight: 950,
          color: "#FFFFFF",
          lineHeight: 1.15,
          margin: 0,
          letterSpacing: "-1px",
          textShadow: "0 10px 40px rgba(0,0,0,0.9)",
        }}
      >
        EL ORIGEN DE <br />
        <span
          style={{
            color: "#F5C518",
            textShadow: "0 0 40px rgba(245, 197, 24, 0.5)",
          }}
        >
          UNA ETIQUETA
        </span>
      </h1>
      <div
        style={{
          width: `${interpolate(frame, [15, 60], [0, 180])}px`,
          height: "5px",
          backgroundColor: "#F5C518",
          marginTop: "30px",
          boxShadow: "0 0 20px #F5C518",
        }}
      />
    </AbsoluteFill>
  );
};

const Scene02KidArsenal: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const entrance = spring({
    frame,
    fps,
    config: { damping: 18, mass: 0.9 },
  });
  const zoom = interpolate(frame, [0, 300], [1.02, 1.14]);
  const opacity = interpolate(frame, [0, 15, 280, 300], [0, 1, 1, 0]);

  return (
    <AbsoluteFill
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        opacity,
        zIndex: 10,
        paddingBottom: "120px", // space for subtitles
      }}
    >
      {/* 3D Photo Card of Harry Kane 8 years old */}
      <div
        style={{
          transform: `scale(${entrance})`,
          width: "780px",
          height: "900px",
          borderRadius: "36px",
          overflow: "hidden",
          boxShadow:
            "0 30px 80px rgba(0,0,0,0.95), 0 0 70px rgba(220, 38, 38, 0.3)",
          border: "3px solid rgba(255, 255, 255, 0.2)",
          position: "relative",
          backgroundColor: "#0B0D13",
        }}
      >
        <Img
          src={staticFile("kane_arsenal_kid_2001.png")}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transform: `scale(${zoom})`,
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to top, rgba(7, 8, 11, 0.85) 0%, transparent 50%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "30px",
            left: "30px",
            right: "30px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "12px 24px",
            backgroundColor: "rgba(18, 18, 22, 0.85)",
            borderRadius: "16px",
            border: "1px solid rgba(255, 255, 255, 0.15)",
          }}
        >
          <span
            style={{
              fontSize: "24px",
              color: "#FFFFFF",
              fontWeight: 800,
              letterSpacing: "2px",
            }}
          >
            HARRY KANE (8 AÑOS)
          </span>
          <span
            style={{
              fontSize: "20px",
              color: "#EF4444",
              fontWeight: 900,
              fontFamily: "monospace",
            }}
          >
            ARSENAL U-9
          </span>
        </div>
      </div>
    </AbsoluteFill>
  );
};

const Scene03HighburyVerdict: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const entrance = spring({
    frame,
    fps,
    config: { damping: 16, mass: 0.8 },
  });
  const opacity = interpolate(frame, [0, 15, 310, 330], [0, 1, 1, 0]);

  return (
    <AbsoluteFill
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        opacity,
        padding: "0 60px",
        textAlign: "center",
        zIndex: 10,
        paddingBottom: "100px",
      }}
    >
      <div
        style={{
          padding: "12px 28px",
          backgroundColor: "rgba(220, 38, 38, 0.2)",
          border: "1.5px solid rgba(239, 68, 68, 0.5)",
          borderRadius: "100px",
          marginBottom: "24px",
          fontSize: "24px",
          fontWeight: 800,
          color: "#FCA5A5",
          letterSpacing: "4px",
          textTransform: "uppercase",
        }}
      >
        DESPACHOS DE HIGHBURY
      </div>
      <h2
        style={{
          transform: `scale(${entrance})`,
          fontSize: "72px",
          fontWeight: 950,
          color: "#FFFFFF",
          lineHeight: 1.15,
          margin: "0 0 30px 0",
          textShadow: "0 10px 40px rgba(0,0,0,0.9)",
        }}
      >
        UNA SENTENCIA <br />
        <span
          style={{
            color: "#EF4444",
            textShadow: "0 0 40px rgba(239, 68, 68, 0.6)",
          }}
        >
          LAPIDARIA
        </span>
      </h2>
      <div
        style={{
          padding: "16px 32px",
          backgroundColor: "rgba(15, 23, 42, 0.8)",
          borderRadius: "18px",
          border: "1px solid rgba(255, 255, 255, 0.15)",
          fontSize: "26px",
          color: "#CBD5E1",
          maxWidth: "700px",
        }}
      >
        <span style={{ fontWeight: 800, color: "#FFFFFF" }}>Liam Brady</span>{" "}
        · Cantera Arsenal
      </div>
    </AbsoluteFill>
  );
};

const Scene04ChubbyDespido: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const entrance = spring({
    frame,
    fps,
    config: { damping: 16, mass: 0.8 },
  });

  // Stamp impact at frame 170 (approx frame 1040 in master)
  const stampEntrance = spring({
    frame: frame - 170,
    fps,
    config: { damping: 10, mass: 0.5 },
  });

  const shake =
    frame >= 170 && frame < 195
      ? Math.sin((frame - 170) * 1.5) * Math.max(0, 1 - (frame - 170) / 25) * 16
      : 0;

  const opacity = interpolate(frame, [0, 15, 265, 285], [0, 1, 1, 0]);

  return (
    <AbsoluteFill
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        opacity,
        zIndex: 10,
        transform: `translate(${shake}px, ${shake * 0.5}px)`,
        paddingBottom: "100px",
      }}
    >
      {/* Newspaper Cutout */}
      <div
        style={{
          transform: `scale(${entrance})`,
          width: "920px",
          borderRadius: "28px",
          overflow: "hidden",
          boxShadow:
            "0 30px 80px rgba(0,0,0,0.95), 0 0 60px rgba(220, 38, 38, 0.3)",
          border: "2px solid rgba(255, 255, 255, 0.2)",
          position: "relative",
          backgroundColor: "#10121A",
        }}
      >
        <Img
          src={staticFile("titular_arsenal_chubby.png")}
          style={{ width: "100%", height: "auto", display: "block" }}
        />
      </div>

      {/* Brutal Stamp Slam */}
      {frame >= 170 && (
        <div
          style={{
            position: "absolute",
            transform: `scale(${Math.max(0, stampEntrance)}) rotate(-8deg)`,
            padding: "24px 60px",
            backgroundColor: "rgba(220, 38, 38, 0.96)",
            border: "8px solid #FFFFFF",
            borderRadius: "24px",
            boxShadow: "0 20px 60px rgba(0,0,0,0.9), 0 0 60px #EF4444",
            zIndex: 30,
            textAlign: "center",
          }}
        >
          <span
            style={{
              fontSize: "76px",
              fontWeight: 950,
              color: "#FFFFFF",
              letterSpacing: "6px",
              textTransform: "uppercase",
              display: "block",
              lineHeight: 1,
            }}
          >
            DESPEDIDO
          </span>
          <span
            style={{
              fontSize: "26px",
              fontWeight: 800,
              color: "#FCA5A5",
              letterSpacing: "4px",
              marginTop: "8px",
              display: "block",
            }}
          >
            FUERA DEL CLUB
          </span>
        </div>
      )}
    </AbsoluteFill>
  );
};

const Scene05MirrorNine: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const entrance = spring({
    frame,
    fps,
    config: { damping: 16, mass: 0.8 },
  });

  const countVal = Math.min(
    9,
    Math.round(
      interpolate(frame, [20, 80], [1, 9], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
      })
    )
  );

  const opacity = interpolate(frame, [0, 15, 290, 315], [0, 1, 1, 0]);

  return (
    <AbsoluteFill
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        opacity,
        zIndex: 10,
        padding: "0 60px",
        textAlign: "center",
        paddingBottom: "120px",
      }}
    >
      <span
        style={{
          color: "#38BDF8",
          fontSize: "28px",
          fontWeight: 800,
          letterSpacing: "6px",
          textTransform: "uppercase",
          marginBottom: "20px",
        }}
      >
        EL ESPEJO DE LA REALIDAD
      </span>

      <div
        style={{
          transform: `scale(${entrance})`,
          padding: "36px 60px",
          backgroundColor: "rgba(239, 68, 68, 0.16)",
          border: "3px solid rgba(239, 68, 68, 0.6)",
          borderRadius: "28px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          boxShadow: "0 20px 60px rgba(0,0,0,0.8), 0 0 50px rgba(239, 68, 68, 0.3)",
          backdropFilter: "blur(16px)",
          marginBottom: "30px",
        }}
      >
        <span
          style={{
            fontSize: "120px",
            fontWeight: 950,
            color: "#EF4444",
            lineHeight: 1,
          }}
        >
          {countVal} / 10
        </span>
        <span
          style={{
            fontSize: "30px",
            fontWeight: 800,
            color: "#FCA5A5",
            letterSpacing: "3px",
            marginTop: "10px",
          }}
        >
          HABRÍAN TIRADO LA TOALLA
        </span>
      </div>

      <p
        style={{
          fontSize: "34px",
          color: "rgba(255, 255, 255, 0.85)",
          lineHeight: 1.45,
          maxWidth: "800px",
          margin: 0,
        }}
      >
        Escuchar a los 8 años que tu cuerpo no sirve... que la genética te cerró
        las puertas.
      </p>
    </AbsoluteFill>
  );
};

const Scene06ClimaxRain: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const entrance = spring({
    frame,
    fps,
    config: { damping: 16, mass: 0.8 },
  });

  const pulseBlue = interpolate(Math.sin(frame / 8), [-1, 1], [0.6, 1.0]);
  const pulseGold = interpolate(Math.cos(frame / 8), [-1, 1], [0.6, 1.0]);

  return (
    <AbsoluteFill
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 10,
        padding: "0 60px",
        textAlign: "center",
        paddingBottom: "100px",
      }}
    >
      <RainOverlay intensity={1.2} lightningFrames={[30, 110, 200]} speed={2.2} />

      <div
        style={{
          transform: `scale(${entrance})`,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "24px",
        }}
      >
        <div
          style={{
            padding: "10px 24px",
            backgroundColor: "rgba(56, 189, 248, 0.18)",
            border: "1.5px solid #38BDF8",
            borderRadius: "100px",
            fontSize: "24px",
            fontWeight: 800,
            color: "#38BDF8",
            letterSpacing: "4px",
            textTransform: "uppercase",
          }}
        >
          LA RESPUESTA DEL TITÁN
        </div>

        <h1
          style={{
            fontSize: "76px",
            fontWeight: 950,
            color: "#FFFFFF",
            lineHeight: 1.15,
            margin: 0,
            textShadow: "0 10px 40px rgba(0,0,0,0.9)",
          }}
        >
          SI FALTABA VELOCIDAD: <br />
          <span
            style={{
              color: "#38BDF8",
              fontSize: "86px",
              textShadow: `0 0 50px rgba(56, 189, 248, ${pulseBlue})`,
            }}
          >
            A PURO PULMÓN
          </span>
        </h1>

        <h1
          style={{
            fontSize: "76px",
            fontWeight: 950,
            color: "#FFFFFF",
            lineHeight: 1.15,
            margin: 0,
            textShadow: "0 10px 40px rgba(0,0,0,0.9)",
          }}
        >
          SI SOBRABA PESO: <br />
          <span
            style={{
              color: "#F5C518",
              fontSize: "86px",
              textShadow: `0 0 50px rgba(245, 197, 24, ${pulseGold})`,
            }}
          >
            EN EL LODO
          </span>
        </h1>
      </div>
    </AbsoluteFill>
  );
};

