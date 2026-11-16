import React from "react";
import {
  AbsoluteFill,
  Audio,
  Img,
  interpolate,
  Sequence,
  staticFile,
  useCurrentFrame,
} from "remotion";
import { CytmDocumentaryOverlay } from "../components/CytmDocumentaryOverlay";
import { WordByWordSubtitles } from "../components/WordByWordSubtitles";
import subtitleChunks from "../../public/bloque5_short_subtitle_chunks.json";

export const HarryKaneBloque5Short: React.FC = () => {
  const frame = useCurrentFrame();

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
      {/* 🎙️ PISTA MAESTRA DE VOZ DON CÉSAR: PARTE 2 BLOQUE 5 (61.86s = 1856 frames) */}
      <Audio src={staticFile("bloque5_part2.wav")} volume={1} />

      {/* 🎵 BANDA SONORA HIPNÓTICA */}
      <Audio src={staticFile("hypnotic_ambient_flow.mp3")} volume={0.24} />

      {/* 🔊 SFX SINCRONIZADOS */}
      <Sequence from={0} durationInFrames={40}>
        <Audio src={staticFile("sfx/whoosh-cinematic.mp3")} volume={0.65} />
      </Sequence>
      <Sequence from={153} durationInFrames={50}>
        <Audio src={staticFile("sfx/guney/rise.wav")} volume={0.7} />
      </Sequence>
      <Sequence from={381} durationInFrames={45}>
        <Audio src={staticFile("sfx/guney/thunk.wav")} volume={0.65} />
      </Sequence>
      <Sequence from={984} durationInFrames={60}>
        <Audio src={staticFile("sfx/transicion.mp3")} volume={0.6} />
      </Sequence>
      <Sequence from={1291} durationInFrames={70}>
        <Audio src={staticFile("sfx/fanfarria.mp3")} volume={0.75} />
      </Sequence>

      {/* 🎬 SECUENCIA VISUAL VERTICAL (9:16) SINCRONIZADA A CADA FRASE DE BLOQUE 5 PARTE 2 */}
      {/* Corte 1 (f0 -> f381 | 0.00s - 12.70s): "La gloria no está reservada para niños prodigio... para los hombres tercos" */}
      <Sequence from={0} durationInFrames={381}>
        <div style={{ position: "absolute", inset: 0, overflow: "hidden" }}>
          <Img
            src={staticFile("cesped_confeti_derrota_final.jpg")}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              filter: "contrast(1.3) brightness(0.55)",
              transform: `scale(${interpolate(frame, [0, 381], [1.0, 1.08], { extrapolateRight: "clamp" })})`,
            }}
          />
        </div>
      </Sequence>

      {/* Corte 2 (f381 -> f545 | 12.70s - 18.17s): "No me importa si tienes 20 kilos de más: sal a caminar..." */}
      <Sequence from={381} durationInFrames={164}>
        <div style={{ position: "absolute", inset: 0, overflow: "hidden" }}>
          <Img
            src={staticFile("estadio_lluvia_nocturna_focos.jpg")}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              filter: "contrast(1.3) brightness(0.5)",
              transform: `scale(${interpolate(frame, [381, 545], [1.0, 1.08], { extrapolateRight: "clamp" })})`,
            }}
          />
        </div>
      </Sequence>

      {/* Corte 3 (f545 -> f770 | 18.17s - 25.67s): "No me importa si tu cuenta de banco está en números rojos..." */}
      <Sequence from={545} durationInFrames={225}>
        <div style={{ position: "absolute", inset: 0, overflow: "hidden" }}>
          <Img
            src={staticFile("hombre_resiliencia_ventana_lluvia.jpg")}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              filter: "contrast(1.28) brightness(0.55)",
              transform: `scale(${interpolate(frame, [545, 770], [1.0, 1.08], { extrapolateRight: "clamp" })})`,
            }}
          />
        </div>
      </Sequence>

      {/* Corte 4 (f770 -> f984 | 25.67s - 32.80s): "No me importa si tu cuerpo está lesionado: rehabilítate con disciplina..." */}
      <Sequence from={770} durationInFrames={214}>
        <div style={{ position: "absolute", inset: 0, overflow: "hidden" }}>
          <Img
            src={staticFile("tunel_vestuarios_silueta_derrota.jpg")}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              filter: "contrast(1.3) brightness(0.5)",
              transform: `scale(${interpolate(frame, [770, 984], [1.0, 1.08], { extrapolateRight: "clamp" })})`,
            }}
          />
        </div>
      </Sequence>

      {/* Corte 5 (f984 -> f1291 | 32.80s - 43.03s): "Harry Kane esperó 15 años en la oscuridad... Tu partido no ha terminado." */}
      <Sequence from={984} durationInFrames={307}>
        <div style={{ position: "absolute", inset: 0, overflow: "hidden" }}>
          <Img
            src={staticFile("mdc_stadium_bg.jpg")}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              filter: "contrast(1.3) brightness(0.5)",
              transform: `scale(${interpolate(frame, [984, 1291], [1.0, 1.08], { extrapolateRight: "clamp" })})`,
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
              src={staticFile("kane_gala_ballondor_2024.png")}
              style={{
                height: "100%",
                objectFit: "contain",
                filter: "drop-shadow(0 20px 45px rgba(245, 197, 24, 0.45))",
              }}
            />
          </div>
        </div>
      </Sequence>

      {/* Corte 6 (f1291 -> f1856 | 43.03s - 61.86s): "Apaga este video. Levántate de esa silla... sal a demostrarle al mundo." */}
      <Sequence from={1291} durationInFrames={565}>
        <div style={{ position: "absolute", inset: 0, overflow: "hidden" }}>
          <Img
            src={staticFile("kane_titan_04_pitch_trophy.jpg")}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              filter: "contrast(1.3) brightness(0.55)",
              transform: `scale(${interpolate(frame, [1291, 1856], [1.0, 1.08], { extrapolateRight: "clamp" })})`,
            }}
          />
        </div>
      </Sequence>

      {/* 🌑 GRADIENTE Y VIÑETA DE ALTO CONTRASTE */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(180deg, rgba(7,8,11,0.82) 0%, rgba(7,8,11,0.18) 35%, rgba(7,8,11,0.25) 65%, rgba(7,8,11,0.92) 100%)",
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
            background: "rgba(245, 197, 24, 0.14)",
            border: "1px solid rgba(245, 197, 24, 0.55)",
            borderRadius: 20,
            padding: "8px 22px",
          }}
        >
          <div style={{ width: 8, height: 8, borderRadius: "50%", backgroundColor: "#F5C518" }} />
          <span
            style={{
              fontSize: 16,
              fontWeight: 800,
              color: "#F5C518",
              letterSpacing: 2,
              textTransform: "uppercase",
            }}
          >
            MENTALIDAD DE CAMPEÓN · MDC // CLÍMAX FINAL
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
        channelName="MENTALIDAD DE CAMPEÓN · MDC"
        dossierName="HARRY KANE · EL LLAMADO A TU VIDA"
        telemetryTag="MDC SHORTS · BLOQUE 5"
        showTimecode={true}
        showViewfinder={false}
        showAudioBars={true}
      />
    </AbsoluteFill>
  );
};

