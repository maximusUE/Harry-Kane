import React from "react";
import { AbsoluteFill, Audio, Sequence, staticFile } from "remotion";
import { CytmDocumentaryOverlay } from "../components/CytmDocumentaryOverlay";
import { Shot01BallonDorParis } from "./shots/Shot01BallonDorParis";
import { Shot02MaldicionPrueba } from "./shots/Shot02MaldicionPrueba";
import { Shot03CualEsTuArsenal } from "./shots/Shot03CualEsTuArsenal";
import { Shot04HombresTercos } from "./shots/Shot04HombresTercos";
import { Shot05ProtocoloAccion } from "./shots/Shot05ProtocoloAccion";
import { Shot06TuHistoriaEmpieza } from "./shots/Shot06TuHistoriaEmpieza";
import { Shot07LevantateYDemuestra } from "./shots/Shot07LevantateYDemuestra";

interface Bloque5MasterProps {
  part1Frames?: number;
  part2Frames?: number;
}

export const HarryKaneBloque5Master: React.FC<Bloque5MasterProps> = ({
  part1Frames = 1418,
  part2Frames = 1856,
}) => {
  return (
    <AbsoluteFill style={{ backgroundColor: "#07080B", width: 3840, height: 2160 }}>
      {/* 🎙️ PISTAS MAESTRAS DE VOZ (DON CÉSAR VOZ OFICIAL MX -12.5 LUFS BROADCAST) */}
      <Sequence from={0} durationInFrames={part1Frames}>
        <Audio src={staticFile("bloque5_part1.wav")} volume={1} />
      </Sequence>
      <Sequence from={part1Frames} durationInFrames={part2Frames}>
        <Audio src={staticFile("bloque5_part2.wav")} volume={1} />
      </Sequence>

      {/* 🎵 BANDA SONORA HIPNÓTICA / FLOW STATE AMBIENT (-18 LUFS MASTER) */}
      <Audio src={staticFile("hypnotic_ambient_flow.mp3")} volume={0.24} />

      {/* 🔊 EFECTOS DE SONIDO (SFX) & GUNEY MOTION KIT SINCRONIZADOS AL CORTE */}
      {/* Shot 01 (f0 -> f480): Balón de Oro París (f0) -> Leyendas tributo (f299) */}
      <Sequence from={0} durationInFrames={40}>
        <Audio src={staticFile("sfx/guney/whoosh.wav")} volume={0.55} />
      </Sequence>
      <Sequence from={2} durationInFrames={34}>
        <Audio src={staticFile("sfx/typing_loud.mp3")} volume={0.9} />
      </Sequence>
      <Sequence from={299} durationInFrames={40}>
        <Audio src={staticFile("sfx/fanfarria.mp3")} volume={0.6} />
      </Sequence>
      <Sequence from={300} durationInFrames={32}>
        <Audio src={staticFile("sfx/typing_loud.mp3")} volume={0.9} />
      </Sequence>

      {/* Shot 02 (f480 -> f877): La maldición no existía (f480) */}
      <Sequence from={480} durationInFrames={50}>
        <Audio src={staticFile("sfx/impact-bass-1.mp3")} volume={0.8} />
      </Sequence>
      <Sequence from={482} durationInFrames={34}>
        <Audio src={staticFile("sfx/typing_loud.mp3")} volume={0.95} />
      </Sequence>

      {/* Shot 03 (f877 -> f1418): ¿Cuál es tu Arsenal hoy? (f877) -> Quién te dijo (f929) -> Derrota excusa (f1201) */}
      <Sequence from={877} durationInFrames={40}>
        <Audio src={staticFile("sfx/barrido.mp3")} volume={0.55} />
      </Sequence>
      <Sequence from={879} durationInFrames={30}>
        <Audio src={staticFile("sfx/typing_loud.mp3")} volume={0.95} />
      </Sequence>
      <Sequence from={930} durationInFrames={34}>
        <Audio src={staticFile("sfx/typing_loud.mp3")} volume={0.9} />
      </Sequence>
      <Sequence from={1201} durationInFrames={50}>
        <Audio src={staticFile("sfx/impact-bass-2.mp3")} volume={0.8} />
      </Sequence>
      <Sequence from={1202} durationInFrames={32}>
        <Audio src={staticFile("sfx/typing_loud.mp3")} volume={0.95} />
      </Sequence>

      {/* Shot 04 (f1418 -> f1799): No para prodigios (f1418) -> Hombres tercos mandíbula (f1571) */}
      <Sequence from={1418} durationInFrames={40}>
        <Audio src={staticFile("sfx/whoosh-cinematic.mp3")} volume={0.65} />
      </Sequence>
      <Sequence from={1420} durationInFrames={32}>
        <Audio src={staticFile("sfx/typing_loud.mp3")} volume={0.9} />
      </Sequence>
      <Sequence from={1571} durationInFrames={50}>
        <Audio src={staticFile("sfx/guney/rise.wav")} volume={0.7} />
      </Sequence>
      <Sequence from={1572} durationInFrames={32}>
        <Audio src={staticFile("sfx/typing_loud.mp3")} volume={0.95} />
      </Sequence>

      {/* Shot 05 (f1799 -> f2402): 20 kilos (f1799) -> Números rojos (f1964) -> Lesionado (f2189) */}
      <Sequence from={1799} durationInFrames={40}>
        <Audio src={staticFile("sfx/guney/thunk.wav")} volume={0.65} />
      </Sequence>
      <Sequence from={1801} durationInFrames={32}>
        <Audio src={staticFile("sfx/typing_loud.mp3")} volume={0.95} />
      </Sequence>
      <Sequence from={1964} durationInFrames={40}>
        <Audio src={staticFile("sfx/guney/thunk.wav")} volume={0.65} />
      </Sequence>
      <Sequence from={1965} durationInFrames={30}>
        <Audio src={staticFile("sfx/typing_loud.mp3")} volume={0.9} />
      </Sequence>
      <Sequence from={2189} durationInFrames={40}>
        <Audio src={staticFile("sfx/guney/thunk.wav")} volume={0.65} />
      </Sequence>
      <Sequence from={2190} durationInFrames={32}>
        <Audio src={staticFile("sfx/typing_loud.mp3")} volume={0.95} />
      </Sequence>

      {/* Shot 06 (f2402 -> f2709): 15 años oscuridad (f2402) -> Tu historia empieza (f2554) */}
      <Sequence from={2402} durationInFrames={50}>
        <Audio src={staticFile("sfx/transicion.mp3")} volume={0.55} />
      </Sequence>
      <Sequence from={2404} durationInFrames={32}>
        <Audio src={staticFile("sfx/typing_loud.mp3")} volume={0.95} />
      </Sequence>
      <Sequence from={2554} durationInFrames={60}>
        <Audio src={staticFile("sfx/guney/rise.wav")} volume={0.75} />
      </Sequence>
      <Sequence from={2555} durationInFrames={32}>
        <Audio src={staticFile("sfx/typing_loud.mp3")} volume={0.95} />
      </Sequence>

      {/* Shot 07 (f2709 -> f3274): Levántate de esa silla (f2709) -> Suscríbete y batalla (f2876) */}
      <Sequence from={2709} durationInFrames={60}>
        <Audio src={staticFile("sfx/fanfarria.mp3")} volume={0.75} />
      </Sequence>
      <Sequence from={2711} durationInFrames={34}>
        <Audio src={staticFile("sfx/typing_loud.mp3")} volume={0.95} />
      </Sequence>
      <Sequence from={2876} durationInFrames={40}>
        <Audio src={staticFile("sfx/guney/whoosh.wav")} volume={0.6} />
      </Sequence>
      <Sequence from={2878} durationInFrames={32}>
        <Audio src={staticFile("sfx/typing_loud.mp3")} volume={0.95} />
      </Sequence>

      {/* 🎬 SECUENCIA DE 7 PLANOS CINEMATOGRÁFICOS SINCRONIZADOS PALABRA POR PALABRA (WORD-LOCK) */}
      {/* 1. Ballon d'Or Paris (0 -> 480 frames | 0.00s -> 16.00s) */}
      <Sequence from={0} durationInFrames={480}>
        <Shot01BallonDorParis />
      </Sequence>

      {/* 2. La Maldición no Existía (480 -> 877 frames | 16.00s -> 29.22s) */}
      <Sequence from={480} durationInFrames={397}>
        <Shot02MaldicionPrueba />
      </Sequence>

      {/* 3. ¿Cuál es tu Arsenal hoy? (877 -> 1418 frames | 29.22s -> 47.27s) */}
      <Sequence from={877} durationInFrames={541}>
        <Shot03CualEsTuArsenal />
      </Sequence>

      {/* 4. La Ley de los Hombres Tercos (1418 -> 1799 frames | 47.27s -> 59.99s) */}
      <Sequence from={1418} durationInFrames={381}>
        <Shot04HombresTercos />
      </Sequence>

      {/* 5. Protocolo de Acción Inmediata (1799 -> 2402 frames | 59.99s -> 80.07s) */}
      <Sequence from={1799} durationInFrames={603}>
        <Shot05ProtocoloAccion />
      </Sequence>

      {/* 6. Tu Partido Apenas Empieza (2402 -> 2709 frames | 80.07s -> 90.29s) */}
      <Sequence from={2402} durationInFrames={307}>
        <Shot06TuHistoriaEmpieza />
      </Sequence>

      {/* 7. Levántate y Demuestra / Outro CTA (2709 -> 3274 frames | 90.29s -> 109.13s) */}
      <Sequence from={2709} durationInFrames={565}>
        <Shot07LevantateYDemuestra />
      </Sequence>

      {/* 🎞️ CAPAS DE ACABADO DOCUMENTAL CINEMATOGRÁFICO CON IDENTIDAD OFICIAL MENTALIDAD DE CAMPEÓN (MDC) */}
      <CytmDocumentaryOverlay
        channelName="MENTALIDAD DE CAMPEÓN · MDC"
        dossierName="HARRY KANE · LA CONSAGRACIÓN Y EL LLAMADO A TU VIDA"
        telemetryTag="EXPEDIENTE MDC · BLOQUE 5 (CLÍMAX FINAL)"
        showTimecode={true}
        showViewfinder={true}
        showAudioBars={true}
      />
    </AbsoluteFill>
  );
};

