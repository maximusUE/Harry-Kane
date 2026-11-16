import React from "react";
import {
  AbsoluteFill,
  Audio,
  Sequence,
  staticFile,
  useCurrentFrame,
} from "remotion";
import { CytmDocumentaryOverlay } from "../components/CytmDocumentaryOverlay";
import {
  SubtitleChunk,
  WordByWordSubtitles,
} from "../components/WordByWordSubtitles";
import { V2BlockConfig } from "./types";
import { V2SceneShot } from "./V2SceneShot";

import b1Chunks from "../../public/v2_bloque1_subtitle_chunks.json";
import b2Chunks from "../../public/v2_bloque2_subtitle_chunks.json";
import b3Chunks from "../../public/v2_bloque3_subtitle_chunks.json";
import b4Chunks from "../../public/v2_bloque4_subtitle_chunks.json";
import b5Chunks from "../../public/v2_bloque5_subtitle_chunks.json";
import b6Chunks from "../../public/v2_bloque6_subtitle_chunks.json";
import { V2_BLOCKS } from "./v2TimelineData";

const CHUNKS_BY_BLOQUE: Record<1 | 2 | 3 | 4 | 5 | 6, SubtitleChunk[]> = {
  1: b1Chunks as SubtitleChunk[],
  2: b2Chunks as SubtitleChunk[],
  3: b3Chunks as SubtitleChunk[],
  4: b4Chunks as SubtitleChunk[],
  5: b5Chunks as SubtitleChunk[],
  6: b6Chunks as SubtitleChunk[],
};

export interface HarryKaneV2BloqueMasterProps {
  bloque?: 1 | 2 | 3 | 4 | 5 | 6;
}

export const HarryKaneV2BloqueMaster: React.FC<HarryKaneV2BloqueMasterProps> = ({
  bloque = 1,
}) => {
  const frame = useCurrentFrame();
  const config: V2BlockConfig = V2_BLOCKS[bloque];
  const chunks = CHUNKS_BY_BLOQUE[bloque];

  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#07080B",
        width: 3840,
        height: 2160,
      }}
    >
      {/* 🎙️ VOZ OFICIAL JORGE MX V2 (-14 LUFS BROADCAST, SINGLE-TAKE) */}
      <Audio src={staticFile(config.audioSrc)} volume={1} />

      {/* 🎵 MÚSICA DE FONDO CINEMATOGRÁFICA (LOOP) */}
      <Audio
        src={staticFile("hypnotic_ambient_flow.mp3")}
        loop
        volume={config.musicVolume ?? 0.18}
      />

      {/* 🔊 EFECTOS DE SONIDO SINCRONIZADOS A PALABRAS Y CORTES */}
      {config.sfx.map((cue, idx) => (
        <Sequence
          key={`sfx-${idx}-${cue.from}`}
          from={cue.from}
          durationInFrames={cue.durationInFrames ?? 45}
        >
          <Audio src={staticFile(cue.src)} volume={cue.volume ?? 0.55} />
        </Sequence>
      ))}

      {/* 🎬 ESCENAS AUDIO-FIRST WORD-LOCK */}
      {config.shots.map((shot, idx) => (
        <Sequence
          key={`shot-${idx}-${shot.from}`}
          from={shot.from}
          durationInFrames={shot.durationInFrames}
        >
          <V2SceneShot shot={shot} isFirstShot={idx === 0} />
        </Sequence>
      ))}

      {/* 📝 SUBTÍTULOS PALABRA POR PALABRA (WHISPER LARGE-V3-TURBO) */}
      <WordByWordSubtitles
        frame={frame}
        chunks={chunks}
        variant="16x9"
        bottomOffset={150}
        fontSize={88}
      />

      {/* 🛡️ IDENTIDAD VISUAL MENTALIDAD DE CAMPEÓN (DISEÑO 2) */}
      <CytmDocumentaryOverlay
        channelName="MENTALIDAD DE CAMPEÓN"
        dossierName={config.dossierName}
        telemetryTag={config.telemetryTag}
      />
    </AbsoluteFill>
  );
};

