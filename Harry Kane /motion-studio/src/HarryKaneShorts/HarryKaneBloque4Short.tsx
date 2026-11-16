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
import subtitleChunks from "../../public/bloque4_short_subtitle_chunks.json";

export const HarryKaneBloque4Short: React.FC = () => {
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
      {/* 🎙️ PISTA MAESTRA DE VOZ DON CÉSAR: PARTE 2 BLOQUE 4 (38.66s = 1160 frames) */}
      <Audio src={staticFile("bloque4_part2.wav")} volume={1} />

      {/* 🎵 BANDA SONORA HIPNÓTICA */}
      <Audio src={staticFile("hypnotic_ambient_flow.mp3")} volume={0.24} />

      {/* 🔊 SFX SINCRONIZADOS A LOS CORTES WORD-LOCK */}
      <Sequence from={0} durationInFrames={40}>
        <Audio src={staticFile("sfx/whoosh-cinematic.mp3")} volume={0.65} />
      </Sequence>
      <Sequence from={231} durationInFrames={45}>
        <Audio src={staticFile("sfx/transicion.mp3")} volume={0.55} />
      </Sequence>
      <Sequence from={356} durationInFrames={60}>
        <Audio src={staticFile("sfx/impact-bass-1.mp3")} volume={0.8} />
      </Sequence>
      <Sequence from={566} durationInFrames={50}>
        <Audio src={staticFile("sfx/guney/rise.wav")} volume={0.65} />
      </Sequence>
      <Sequence from={842} durationInFrames={90}>
        <Audio src={staticFile("sfx/fanfarria.mp3")} volume={0.65} />
      </Sequence>

      {/* 🎬 SECUENCIA VISUAL VERTICAL (9:16) SINCRONIZADA A CADA FRASE DE BLOQUE 4 PARTE 2 */}
      {/* Corte 1 (f0 -> f231 | 0.00s - 7.70s): "Si un guionista de cine hubiera querido quebrar psicológicamente..." */}
      <Sequence from={0} durationInFrames={231}>
        <div style={{ position: "absolute", inset: 0, overflow: "hidden" }}>
          <Img
            src={staticFile("tunel_vestuarios_silueta_derrota.jpg")}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              filter: "contrast(1.3) brightness(0.55)",
              transform: `scale(${interpolate(frame, [0, 231], [1.0, 1.08], { extrapolateRight: "clamp" })})`,
            }}
          />
        </div>
      </Sequence>

      {/* Corte 2 (f231 -> f356 | 7.70s - 11.88s): "Pero aquí está la gran lección: mientras la prensa se reía," */}
      <Sequence from={231} durationInFrames={125}>
        <div style={{ position: "absolute", inset: 0, overflow: "hidden" }}>
          <Img
            src={staticFile("hombre_resiliencia_ventana_lluvia.jpg")}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              filter: "contrast(1.28) brightness(0.65)",
              transform: `scale(${interpolate(frame, [231, 356], [1.0, 1.07], { extrapolateRight: "clamp" })})`,
            }}
          />
        </div>
      </Sequence>

      {/* Corte 3 (f356 -> f566 | 11.88s - 18.88s): "Kane no dio una sola conferencia de prensa... No culpó a sus compañeros. No culpó al entrenador." */}
      <Sequence from={356} durationInFrames={210}>
        <div style={{ position: "absolute", inset: 0, overflow: "hidden" }}>
          <Img
            src={staticFile("estadio_lluvia_nocturna_focos.jpg")}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              filter: "contrast(1.3) brightness(0.55)",
              transform: `scale(${interpolate(frame, [356, 566], [1.0, 1.08], { extrapolateRight: "clamp" })})`,
            }}
          />
        </div>
      </Sequence>

      {/* Corte 4 (f566 -> f766 | 18.88s - 25.56s): "Se encerró en el gimnasio del club a las seis de la mañana. Perfeccionó cada detalle de su nutrición." */}
      <Sequence from={566} durationInFrames={200}>
        <div style={{ position: "absolute", inset: 0, overflow: "hidden" }}>
          <Video
            src={staticFile("kane_remate_area.mp4")}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              filter: "contrast(1.3) brightness(0.65)",
              transform: `scale(${interpolate(frame, [566, 766], [1.0, 1.08], { extrapolateRight: "clamp" })})`,
            }}
            muted
            loop
          />
        </div>
      </Sequence>

      {/* Corte 5 (f766 -> f842 | 25.56s - 28.06s): "Trabajó la fuerza explosiva en la nieve." */}
      <Sequence from={766} durationInFrames={76}>
        <div style={{ position: "absolute", inset: 0, overflow: "hidden" }}>
          <Video
            src={staticFile("broll/broll_09_running_rain.mp4")}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              filter: "contrast(1.35) brightness(0.65) saturate(0.75) hue-rotate(185deg)",
              transform: `scale(${interpolate(frame, [766, 842], [1.02, 1.08], { extrapolateRight: "clamp" })})`,
            }}
            muted
          />
        </div>
      </Sequence>

      {/* Corte 6 (f842 -> f1160 | 28.06s - 38.66s): "Y en la siguiente temporada destrozó todos los registros goleadores... apetito voraz e insaciable." */}
      <Sequence from={842} durationInFrames={318}>
        <div style={{ position: "absolute", inset: 0, overflow: "hidden" }}>
          <Img
            src={staticFile("mdc_stadium_bg.jpg")}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              filter: "contrast(1.3) brightness(0.55)",
              transform: `scale(${interpolate(frame, [842, 1160], [1.0, 1.08], { extrapolateRight: "clamp" })})`,
            }}
          />
          <div
            style={{
              position: "absolute",
              bottom: 0,
              left: "50%",
              transform: "translateX(-50%)",
              height: "74%",
            }}
          >
            <Img
              src={staticFile("harry_kane_spurs_cutout.png")}
              style={{
                height: "100%",
                objectFit: "contain",
                filter: "drop-shadow(0 20px 45px rgba(245, 197, 24, 0.4))",
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
            MENTALIDAD DE CAMPEÓN · MDC // BLOQUE 4
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
        dossierName="HARRY KANE · CERO EXCUSAS EN MÚNICH"
        telemetryTag="MDC SHORTS · BLOQUE 4"
        showTimecode={true}
        showViewfinder={false}
        showAudioBars={true}
      />
    </AbsoluteFill>
  );
};

