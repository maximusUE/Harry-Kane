import React from "react";
import {
  AbsoluteFill,
  Audio,
  interpolate,
  Sequence,
  spring,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";

export const HarryKaneHookShort: React.FC = () => {
  const frame = useCurrentFrame();

  // Background slow zoom
  const bgZoom = interpolate(frame, [0, 690], [1.0, 1.15]);

  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#07080B",
        width: 1080,
        height: 1920,
        fontFamily: "system-ui, -apple-system, sans-serif",
        overflow: "hidden",
      }}
    >
      {/* 🎙️ Audio Maestro & Sound FX */}
      <Audio src={staticFile("voice_master_clean.wav")} volume={1} />
      <Audio src={staticFile("ambient_soundtrack.mp3")} volume={0.14} />

      {/* SFX Sincronizados con el Gancho Vertical */}
      <Sequence from={0} durationInFrames={40}>
        <Audio src={staticFile("sfx/aire.mp3")} volume={0.5} />
      </Sequence>
      <Sequence from={60} durationInFrames={40}>
        <Audio src={staticFile("sfx/whoosh.mp3")} volume={0.6} />
      </Sequence>
      <Sequence from={150} durationInFrames={40}>
        <Audio src={staticFile("sfx/barrido.mp3")} volume={0.55} />
      </Sequence>
      <Sequence from={360} durationInFrames={40}>
        <Audio src={staticFile("sfx/transicion.mp3")} volume={0.5} />
      </Sequence>
      <Sequence from={540} durationInFrames={60}>
        <Audio src={staticFile("sfx/riser.mp3")} volume={0.4} />
      </Sequence>
      <Sequence from={620} durationInFrames={70}>
        <Audio src={staticFile("sfx/impact-bass-1.mp3")} volume={0.9} />
      </Sequence>

      {/* 🌌 Fondo Cinemático Vertical 9:16 */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(circle at 50% 45%, rgba(229, 184, 66, 0.18) 0%, rgba(10, 12, 18, 0.95) 75%, #050608 100%)",
          transform: `scale(${bgZoom})`,
        }}
      />

      {/* Partículas y destellos de oro */}
      <div
        style={{
          position: "absolute",
          top: "20%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "700px",
          height: "700px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(229, 184, 66, 0.12) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      {/* 🏷️ Tag Superior de Marca (En Zona Segura Móvil) */}
      <div
        style={{
          position: "absolute",
          top: "140px",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          alignItems: "center",
          gap: "12px",
          padding: "10px 24px",
          borderRadius: "999px",
          backgroundColor: "rgba(255, 255, 255, 0.06)",
          border: "1px solid rgba(229, 184, 66, 0.35)",
          backdropFilter: "blur(12px)",
        }}
      >
        <span style={{ color: "#E5B842", fontSize: "22px" }}>●</span>
        <span
          style={{
            color: "#FFFFFF",
            fontSize: "20px",
            fontWeight: 800,
            letterSpacing: "4px",
            textTransform: "uppercase",
          }}
        >
          HISTORIA DE SUPERACIÓN
        </span>
      </div>

      {/* ========================================================= */}
      {/* 🎬 ESCENA 1: PARÍS (Frames 0 - 65)                         */}
      {/* ========================================================= */}
      <Sequence from={0} durationInFrames={65}>
        <SceneParis />
      </Sequence>

      {/* ========================================================= */}
      {/* 🎬 ESCENA 2: 26 DE OCTUBRE DE 2026 (Frames 65 - 150)       */}
      {/* ========================================================= */}
      <Sequence from={65} durationInFrames={85}>
        <SceneDate />
      </Sequence>

      {/* ========================================================= */}
      {/* 🎬 ESCENA 3: ANTE LAS MIRADAS DEL PLANETA (Frames 150 - 360)*/}
      {/* ========================================================= */}
      <Sequence from={150} durationInFrames={210}>
        <SceneCrowd />
      </Sequence>

      {/* ========================================================= */}
      {/* 🎬 ESCENA 4: 150 PAÍSES TRANSMITIENDO (Frames 360 - 540)  */}
      {/* ========================================================= */}
      <Sequence from={360} durationInFrames={180}>
        <SceneBroadcast />
      </Sequence>

      {/* ========================================================= */}
      {/* 🎬 ESCENA 5: EL HOMBRE DE 33 AÑOS (Frames 540 - 620)      */}
      {/* ========================================================= */}
      <Sequence from={540} durationInFrames={80}>
        <SceneAge />
      </Sequence>

      {/* ========================================================= */}
      {/* 🎬 ESCENA 6: EL CLÍMAX — EL BALÓN DE ORO (Frames 620 - 690) */}
      {/* ========================================================= */}
      <Sequence from={620} durationInFrames={70}>
        <SceneBallonDor />
      </Sequence>

      {/* 🛡️ Viñeta cinematográfica para centrar la mirada */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          boxShadow: "inset 0 0 160px rgba(0, 0, 0, 0.85)",
          pointerEvents: "none",
        }}
      />
    </AbsoluteFill>
  );
};

// ==========================================
// SUB-COMPONENTES DE ESCENAS 9:16
// ==========================================

const SceneParis: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const scale = spring({
    frame,
    fps,
    config: { damping: 13, mass: 0.7 },
  });
  const opacity = interpolate(frame, [0, 8, 55, 65], [0, 1, 1, 0]);

  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        opacity,
      }}
    >
      <h1
        style={{
          transform: `scale(${scale})`,
          fontSize: "150px",
          fontWeight: 900,
          color: "#FFFFFF",
          letterSpacing: "18px",
          textShadow: "0 0 70px rgba(229, 184, 66, 0.6)",
          margin: 0,
        }}
      >
        PARÍS
      </h1>
      <div
        style={{
          width: `${interpolate(frame, [10, 45], [0, 220])}px`,
          height: "6px",
          backgroundColor: "#E5B842",
          marginTop: "24px",
          boxShadow: "0 0 30px #E5B842",
        }}
      />
    </div>
  );
};

const SceneDate: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const entrance = spring({
    frame,
    fps,
    config: { damping: 12, mass: 0.6 },
  });
  const opacity = interpolate(frame, [0, 8, 75, 85], [0, 1, 1, 0]);

  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        opacity,
        padding: "0 60px",
        textAlign: "center",
      }}
    >
      <span
        style={{
          color: "#E5B842",
          fontSize: "36px",
          fontWeight: 800,
          letterSpacing: "6px",
          marginBottom: "16px",
          textTransform: "uppercase",
        }}
      >
        LA NOCHE FINAL
      </span>
      <h2
        style={{
          transform: `scale(${entrance})`,
          fontSize: "92px",
          fontWeight: 900,
          color: "#FFFFFF",
          lineHeight: 1.1,
          margin: 0,
        }}
      >
        26 DE OCTUBRE <br />
        <span style={{ color: "#E5B842", fontSize: "110px" }}>2026</span>
      </h2>
    </div>
  );
};

const SceneCrowd: React.FC = () => {
  const frame = useCurrentFrame();
  const opacity = interpolate(frame, [0, 10, 195, 210], [0, 1, 1, 0]);
  const zoom = interpolate(frame, [0, 210], [0.95, 1.08]);

  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        opacity,
        transform: `scale(${zoom})`,
        padding: "0 70px",
        textAlign: "center",
      }}
    >
      <div
        style={{
          fontSize: "80px",
          marginBottom: "20px",
        }}
      >
        👑
      </div>
      <h2
        style={{
          fontSize: "64px",
          fontWeight: 800,
          color: "#EAEAEA",
          lineHeight: 1.25,
          textTransform: "uppercase",
          letterSpacing: "2px",
        }}
      >
        Ante las miradas de los <br />
        <span
          style={{
            color: "#E5B842",
            fontWeight: 900,
            textShadow: "0 0 40px rgba(229, 184, 66, 0.4)",
          }}
        >
          mejores futbolistas
        </span>{" "}
        <br />
        del planeta
      </h2>
    </div>
  );
};

const SceneBroadcast: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const count = Math.round(interpolate(frame, [10, 70], [0, 150], { extrapolateRight: "clamp" }));
  const bounce = spring({ frame: frame - 10, fps, config: { damping: 10 } });
  const opacity = interpolate(frame, [0, 8, 165, 180], [0, 1, 1, 0]);

  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        opacity,
        textAlign: "center",
      }}
    >
      <span
        style={{
          color: "#A0A8B8",
          fontSize: "32px",
          fontWeight: 700,
          letterSpacing: "6px",
          marginBottom: "10px",
        }}
      >
        TRANSMISIÓN GLOBAL
      </span>
      <div
        style={{
          transform: `scale(${bounce})`,
          fontSize: "170px",
          fontWeight: 900,
          color: "#E5B842",
          lineHeight: 1,
          textShadow: "0 0 60px rgba(229, 184, 66, 0.5)",
        }}
      >
        +{count}
      </div>
      <span
        style={{
          color: "#FFFFFF",
          fontSize: "48px",
          fontWeight: 800,
          letterSpacing: "8px",
          marginTop: "16px",
        }}
      >
        PAÍSES EN VIVO
      </span>
    </div>
  );
};

const SceneAge: React.FC = () => {
  const frame = useCurrentFrame();
  const opacity = interpolate(frame, [0, 8, 70, 80], [0, 1, 1, 0]);

  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        opacity,
        padding: "0 60px",
        textAlign: "center",
      }}
    >
      <span
        style={{
          color: "#E5B842",
          fontSize: "32px",
          fontWeight: 800,
          letterSpacing: "4px",
          marginBottom: "16px",
        }}
      >
        DESPUÉS DE 15 AÑOS DE BURLAS
      </span>
      <h2
        style={{
          fontSize: "76px",
          fontWeight: 900,
          color: "#FFFFFF",
          lineHeight: 1.2,
          margin: 0,
        }}
      >
        UN HOMBRE DE <br />
        <span style={{ color: "#E5B842", fontSize: "110px" }}>33 AÑOS</span>
      </h2>
    </div>
  );
};

const SceneBallonDor: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const impact = spring({
    frame,
    fps,
    config: { damping: 9, mass: 0.5 },
  });

  const flash = interpolate(frame, [0, 4, 18], [0.95, 0.5, 0], {
    extrapolateRight: "clamp",
  });
  const shockwave = interpolate(frame, [0, 40], [0.6, 2.8]);
  const shockwaveOp = interpolate(frame, [0, 10, 40], [0.9, 0.4, 0]);

  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
      }}
    >
      {/* Flash Blanco de Apertura */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor: "#FFFFFF",
          opacity: flash,
          pointerEvents: "none",
        }}
      />

      {/* Onda expansiva dorada */}
      <div
        style={{
          position: "absolute",
          top: "45%",
          left: "50%",
          transform: `translate(-50%, -50%) scale(${shockwave})`,
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          border: "8px solid #E5B842",
          opacity: shockwaveOp,
          pointerEvents: "none",
        }}
      />

      {/* Ícono de Trofeo */}
      <div
        style={{
          width: "200px",
          height: "200px",
          borderRadius: "50%",
          backgroundColor: "rgba(229, 184, 66, 0.2)",
          border: "4px solid #E5B842",
          boxShadow: "0 0 100px rgba(229, 184, 66, 0.7)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "30px",
          transform: `scale(${impact})`,
        }}
      >
        <span style={{ fontSize: "110px" }}>🏆</span>
      </div>

      <h1
        style={{
          transform: `scale(${impact})`,
          fontSize: "92px",
          fontWeight: 900,
          letterSpacing: "4px",
          margin: 0,
          background:
            "linear-gradient(135deg, #FFFFFF 0%, #F5DE88 35%, #E5B842 70%, #997A15 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          textShadow: "0 0 60px rgba(229, 184, 66, 0.6)",
        }}
      >
        EL BALÓN <br />
        DE ORO
      </h1>
    </div>
  );
};

