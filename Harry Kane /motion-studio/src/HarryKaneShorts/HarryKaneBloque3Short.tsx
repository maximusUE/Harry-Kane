import React from "react";
import {
  AbsoluteFill,
  Audio,
  Img,
  interpolate,
  Sequence,
  staticFile,
  useCurrentFrame,
  Video,
} from "remotion";
import { CytmDocumentaryOverlay } from "../components/CytmDocumentaryOverlay";
import { WordByWordSubtitles } from "../components/WordByWordSubtitles";
import subtitleChunks from "../../public/bloque3_short_subtitle_chunks.json";

export const HarryKaneBloque3Short: React.FC = () => {
  const frame = useCurrentFrame();

  // Drift lento de cámara vertical
  const bgZoom = interpolate(frame, [0, 1500], [1.0, 1.15]);

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
      {/* 🎙️ PISTA MAESTRA DE VOZ DON CÉSAR: PARTE 2 REFLEXIÓN */}
      <Audio src={staticFile("bloque3_part2.wav")} volume={1} />

      {/* 🎵 BANDA SONORA HIPNÓTICA */}
      <Audio src={staticFile("hypnotic_ambient_flow.mp3")} volume={0.28} />

      {/* 🔊 SFX SINCRONIZADOS */}
      <Sequence from={0} durationInFrames={40}>
        <Audio src={staticFile("sfx/whoosh.mp3")} volume={0.6} />
      </Sequence>
      <Sequence from={180} durationInFrames={50}>
        <Audio src={staticFile("sfx/transicion.mp3")} volume={0.5} />
      </Sequence>
      <Sequence from={450} durationInFrames={60}>
        <Audio src={staticFile("sfx/impact-bass-1.mp3")} volume={0.75} />
      </Sequence>
      <Sequence from={750} durationInFrames={40}>
        <Audio src={staticFile("sfx/glitch-1.mp3")} volume={0.5} />
      </Sequence>
      <Sequence from={1050} durationInFrames={90}>
        <Audio src={staticFile("sfx/fanfarria.mp3")} volume={0.65} />
      </Sequence>

      {/* 🎬 SECUENCIA VISUAL VERTICAL (9:16) CON CORTES CADA 2.5 - 3.5s */}
      {/* Corte 1 (0 -> 120 frames | 4.0s): Césped con Confeti Desierto */}
      <Sequence from={0} durationInFrames={120}>
        <div style={{ position: "absolute", inset: 0, overflow: "hidden" }}>
          <Img
            src={staticFile("cesped_confeti_derrota_final.jpg")}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              filter: "contrast(1.3) brightness(0.65)",
              transform: `scale(${bgZoom})`,
            }}
          />
        </div>
      </Sequence>

      {/* Corte 2 (120 -> 240 frames | 4.0s): Kane De Rodillas en Pasto */}
      <Sequence from={120} durationInFrames={120}>
        <div style={{ position: "absolute", inset: 0, overflow: "hidden" }}>
          <Img
            src={staticFile("kane_madrid_lawn_kneeling_2019.png")}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              filter: "contrast(1.25) brightness(0.7)",
              transform: `scale(${1.02 + (frame - 120) * 0.001})`,
            }}
          />
        </div>
      </Sequence>

      {/* Corte 3 (240 -> 360 frames | 4.0s): Túnel de Vestuarios Silueta */}
      <Sequence from={240} durationInFrames={120}>
        <div style={{ position: "absolute", inset: 0, overflow: "hidden" }}>
          <Img
            src={staticFile("tunel_vestuarios_silueta_derrota.jpg")}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              filter: "contrast(1.3) brightness(0.6)",
              transform: `scale(${1.0 + (frame - 240) * 0.001})`,
            }}
          />
        </div>
      </Sequence>

      {/* Corte 4 (360 -> 500 frames | ~4.6s): Kane en el Césped Berlín */}
      <Sequence from={360} durationInFrames={140}>
        <div style={{ position: "absolute", inset: 0, overflow: "hidden" }}>
          <Img
            src={staticFile("kane_berlin_defeat_turf_2024.png")}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              filter: "contrast(1.2) brightness(0.75)",
              transform: `scale(${1.0 + (frame - 360) * 0.0008})`,
            }}
          />
        </div>
      </Sequence>

      {/* Corte 5 (500 -> 650 frames | 5.0s): Hombre en Ventana Lluvia */}
      <Sequence from={500} durationInFrames={150}>
        <div style={{ position: "absolute", inset: 0, overflow: "hidden" }}>
          <Img
            src={staticFile("hombre_resiliencia_ventana_lluvia.jpg")}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              filter: "contrast(1.3) brightness(0.7)",
              transform: `scale(${1.0 + (frame - 500) * 0.001})`,
            }}
          />
        </div>
      </Sequence>

      {/* Corte 6 (650 -> 800 frames | 5.0s): Banquillo Supercopa Leipzig */}
      <Sequence from={650} durationInFrames={150}>
        <div style={{ position: "absolute", inset: 0, overflow: "hidden" }}>
          <Img
            src={staticFile("kane_supercup_bench_sorrow_2023.png")}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              filter: "contrast(1.25) brightness(0.65)",
              transform: `scale(${1.0 + (frame - 650) * 0.0008})`,
            }}
          />
        </div>
      </Sequence>

      {/* Corte 7 (800 -> 1000 frames | ~6.6s): Kane se Levanta del Césped */}
      <Sequence from={800} durationInFrames={200}>
        <div style={{ position: "absolute", inset: 0, overflow: "hidden" }}>
          <Video
            src={staticFile("b3_05_kneeling_defeat_lawn.mp4")}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              filter: "contrast(1.25) brightness(0.85) saturate(1.1)",
              transform: `scale(${1.0 + (frame - 800) * 0.0007})`,
            }}
          />
        </div>
      </Sequence>

      {/* Corte 8 (1000 -> Fin | ~16s): Estadio con Focos + Kane Spurs Cutout Clímax */}
      <Sequence from={1000} durationInFrames={600}>
        <div style={{ position: "absolute", inset: 0, overflow: "hidden" }}>
          <Img
            src={staticFile("estadio_lluvia_nocturna_focos.jpg")}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              filter: "contrast(1.3) brightness(0.55)",
              transform: `scale(${1.0 + (frame - 1000) * 0.0004})`,
            }}
          />
          <div
            style={{
              position: "absolute",
              bottom: 0,
              left: "50%",
              transform: "translateX(-50%)",
              height: "75%",
            }}
          >
            <Img
              src={staticFile("harry_kane_spurs_cutout.png")}
              style={{
                height: "100%",
                objectFit: "contain",
                filter: "drop-shadow(0 20px 40px rgba(0, 229, 255, 0.35))",
              }}
            />
          </div>
        </div>
      </Sequence>

      {/* 🌑 GRADIENTE Y VIÑETA DE ALTO CONTRASTE */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(180deg, rgba(6,7,11,0.75) 0%, rgba(6,7,11,0.15) 35%, rgba(6,7,11,0.2) 65%, rgba(6,7,11,0.9) 100%)",
          pointerEvents: "none",
        }}
      />

      {/* 🏷️ HEADER EDITORIAL SUPERIOR VERTICAL */}
      <div
        style={{
          position: "absolute",
          top: 140,
          left: 0,
          right: 0,
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 10,
            background: "rgba(0, 229, 255, 0.12)",
            border: "1px solid rgba(0, 229, 255, 0.4)",
            borderRadius: 20,
            padding: "8px 22px",
          }}
        >
          <div style={{ width: 8, height: 8, borderRadius: "50%", backgroundColor: "#00E5FF" }} />
          <span
            style={{
              fontSize: 16,
              fontWeight: 800,
              color: "#00E5FF",
              letterSpacing: 2,
              textTransform: "uppercase",
            }}
          >
            DON CÉSAR // MENTALIDAD DE HIERRO
          </span>
        </div>
      </div>

      {/* 🔤 SUBTÍTULOS DINÁMICOS PALABRA POR PALABRA (TAMAÑO MÓVIL 9:16) */}
      <WordByWordSubtitles
        chunks={subtitleChunks as any}
        frame={frame}
        variant="9x16"
      />

      {/* 🎞️ OVERLAYS DOCUMENTALES */}
      <CytmDocumentaryOverlay
        channelName="DON CÉSAR"
        dossierName="MENTALIDAD DE HIERRO · PARTE 3"
        telemetryTag="REELS / SHORTS"
        showTimecode={true}
        showViewfinder={false}
        showAudioBars={true}
      />
    </AbsoluteFill>
  );
};

