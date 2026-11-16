import React from "react";
import { AbsoluteFill, Audio, Sequence, staticFile } from "remotion";
import { CytmDocumentaryOverlay } from "../components/CytmDocumentaryOverlay";
import { Shot01ComfortZoneKing } from "./shots/Shot01ComfortZoneKing";
import { Shot02BayernFormula11Years } from "./shots/Shot02BayernFormula11Years";
import { Shot03TwistLeverkusenInvicto } from "./shots/Shot03TwistLeverkusenInvicto";
import { Shot04MediaStormCurse } from "./shots/Shot04MediaStormCurse";
import { Shot05ZeroExcusesSilence } from "./shots/Shot05ZeroExcusesSilence";
import { Shot06Gym6AMAndSnow } from "./shots/Shot06Gym6AMAndSnow";
import { Shot07BundesligaRecordBreaker } from "./shots/Shot07BundesligaRecordBreaker";

interface Bloque4MasterProps {
  part1Frames?: number;
  part2Frames?: number;
}

export const HarryKaneBloque4Master: React.FC<Bloque4MasterProps> = ({
  part1Frames = 1946,
  part2Frames = 1160,
}) => {
  return (
    <AbsoluteFill style={{ backgroundColor: "#07080B", width: 3840, height: 2160 }}>
      {/* 🎙️ PISTAS MAESTRAS DE VOZ (DON CÉSAR VOZ OFICIAL MX -12.5 LUFS BROADCAST) */}
      <Sequence from={0} durationInFrames={part1Frames}>
        <Audio src={staticFile("bloque4_part1.wav")} volume={1} />
      </Sequence>
      <Sequence from={part1Frames} durationInFrames={part2Frames}>
        <Audio src={staticFile("bloque4_part2.wav")} volume={1} />
      </Sequence>

      {/* 🎵 BANDA SONORA HIPNÓTICA / FLOW STATE AMBIENT (-18 LUFS MASTER) */}
      <Audio src={staticFile("hypnotic_ambient_flow.mp3")} volume={0.24} />

      {/* 🔊 EFECTOS DE SONIDO (SFX) & GUNEY MOTION KIT SINCRONIZADOS AL MILISEGUNDO DE VOZ (WORD-LOCK) */}
      {/* Shot 01 (f0 -> f642): Verano 2023 -> Rey del club (f233) -> Confort veneno (f521) */}
      <Sequence from={0} durationInFrames={40}>
        <Audio src={staticFile("sfx/guney/whoosh.wav")} volume={0.55} />
      </Sequence>
      <Sequence from={2} durationInFrames={36}>
        <Audio src={staticFile("sfx/typing_loud.mp3")} volume={0.9} />
      </Sequence>
      <Sequence from={234} durationInFrames={34}>
        <Audio src={staticFile("sfx/typing_loud.mp3")} volume={0.85} />
      </Sequence>
      <Sequence from={521} durationInFrames={50}>
        <Audio src={staticFile("sfx/impact-bass-1.mp3")} volume={0.8} />
      </Sequence>
      <Sequence from={522} durationInFrames={34}>
        <Audio src={staticFile("sfx/typing_loud.mp3")} volume={0.95} />
      </Sequence>

      {/* Shot 02 (f642 -> f1042): Bayern Múnich 11 años (f642) -> Fórmula matemática (f859) */}
      <Sequence from={642} durationInFrames={40}>
        <Audio src={staticFile("sfx/transicion.mp3")} volume={0.5} />
      </Sequence>
      <Sequence from={644} durationInFrames={34}>
        <Audio src={staticFile("sfx/typing_loud.mp3")} volume={0.9} />
      </Sequence>
      <Sequence from={860} durationInFrames={34}>
        <Audio src={staticFile("sfx/typing_loud.mp3")} volume={0.9} />
      </Sequence>

      {/* Shot 03 (f1042 -> f1597): Bofetada más retorcida (f1042) -> Cero títulos (f1189) -> Leverkusen invicto (f1415) */}
      <Sequence from={1042} durationInFrames={60}>
        <Audio src={staticFile("sfx/impact-bass-2.mp3")} volume={0.85} />
      </Sequence>
      <Sequence from={1044} durationInFrames={34}>
        <Audio src={staticFile("sfx/typing_loud.mp3")} volume={0.95} />
      </Sequence>
      <Sequence from={1190} durationInFrames={34}>
        <Audio src={staticFile("sfx/typing_loud.mp3")} volume={0.9} />
      </Sequence>
      <Sequence from={1415} durationInFrames={45}>
        <Audio src={staticFile("sfx/guney/thunk.wav")} volume={0.7} />
      </Sequence>
      <Sequence from={1416} durationInFrames={34}>
        <Audio src={staticFile("sfx/typing_loud.mp3")} volume={0.9} />
      </Sequence>

      {/* Shot 04 (f1597 -> f1946): Acoso mediático (f1597) -> Maldición contagiosa (f1782) -> Sello arruinó al Bayern (f1853) */}
      <Sequence from={1597} durationInFrames={40}>
        <Audio src={staticFile("sfx/barrido.mp3")} volume={0.55} />
      </Sequence>
      <Sequence from={1599} durationInFrames={34}>
        <Audio src={staticFile("sfx/typing_loud.mp3")} volume={0.9} />
      </Sequence>
      <Sequence from={1783} durationInFrames={34}>
        <Audio src={staticFile("sfx/typing_loud.mp3")} volume={0.95} />
      </Sequence>
      <Sequence from={1853} durationInFrames={55}>
        <Audio src={staticFile("sfx/golpe.mp3")} volume={0.85} />
      </Sequence>

      {/* Shot 05 (f1946 -> f2512): Guion más cruel (f1946) -> Gran lección (f2177) -> Cero pretextos (f2302) -> Compañeros (f2413) -> Entrenador (f2463) */}
      <Sequence from={1946} durationInFrames={60}>
        <Audio src={staticFile("sfx/whoosh-cinematic.mp3")} volume={0.7} />
      </Sequence>
      <Sequence from={1948} durationInFrames={36}>
        <Audio src={staticFile("sfx/typing_loud.mp3")} volume={0.95} />
      </Sequence>
      <Sequence from={2178} durationInFrames={32}>
        <Audio src={staticFile("sfx/typing_loud.mp3")} volume={0.9} />
      </Sequence>
      <Sequence from={2303} durationInFrames={30}>
        <Audio src={staticFile("sfx/typing_loud.mp3")} volume={0.95} />
      </Sequence>
      <Sequence from={2413} durationInFrames={40}>
        <Audio src={staticFile("sfx/guney/thunk.wav")} volume={0.65} />
      </Sequence>
      <Sequence from={2463} durationInFrames={40}>
        <Audio src={staticFile("sfx/guney/thunk.wav")} volume={0.65} />
      </Sequence>

      {/* Shot 06 (f2512 -> f2788): Gimnasio 06:00 AM (f2512) -> Nutrición (f2635) -> Fuerza en la nieve (f2712) */}
      <Sequence from={2512} durationInFrames={50}>
        <Audio src={staticFile("sfx/guney/rise.wav")} volume={0.65} />
      </Sequence>
      <Sequence from={2514} durationInFrames={32}>
        <Audio src={staticFile("sfx/typing_loud.mp3")} volume={0.95} />
      </Sequence>
      <Sequence from={2636} durationInFrames={30}>
        <Audio src={staticFile("sfx/typing_loud.mp3")} volume={0.9} />
      </Sequence>
      <Sequence from={2713} durationInFrames={28}>
        <Audio src={staticFile("sfx/typing_loud.mp3")} volume={0.9} />
      </Sequence>

      {/* Shot 07 (f2788 -> f3106): Destrozó todos los récords (f2788) -> Apetito voraz e insaciable (f2961) */}
      <Sequence from={2788} durationInFrames={90}>
        <Audio src={staticFile("sfx/fanfarria.mp3")} volume={0.65} />
      </Sequence>
      <Sequence from={2790} durationInFrames={34}>
        <Audio src={staticFile("sfx/typing_loud.mp3")} volume={0.95} />
      </Sequence>
      <Sequence from={2962} durationInFrames={32}>
        <Audio src={staticFile("sfx/typing_loud.mp3")} volume={0.95} />
      </Sequence>

      {/* 🎬 SECUENCIA DE 7 PLANOS CINEMATOGRÁFICOS SINCRONIZADOS PALABRA POR PALABRA (WORD-LOCK) */}
      {/* 1. Comfort Zone & Spurs King (0 -> 642 frames | 0.00s -> 21.40s) */}
      <Sequence from={0} durationInFrames={642}>
        <Shot01ComfortZoneKing />
      </Sequence>

      {/* 2. Bayern Múnich 11 Years & Formula (642 -> 1042 frames | 21.40s -> 34.72s) */}
      <Sequence from={642} durationInFrames={400}>
        <Shot02BayernFormula11Years />
      </Sequence>

      {/* 3. Cruel Twist & Leverkusen Invicto (1042 -> 1597 frames | 34.72s -> 53.24s) */}
      <Sequence from={1042} durationInFrames={555}>
        <Shot03TwistLeverkusenInvicto />
      </Sequence>

      {/* 4. Media Storm & Curse Headlines (1597 -> 1946 frames | 53.24s -> 64.86s) */}
      <Sequence from={1597} durationInFrames={349}>
        <Shot04MediaStormCurse />
      </Sequence>

      {/* 5. Cruel Script & Zero Excuses Stoic Code (1946 -> 2512 frames | 64.86s -> 83.74s) */}
      <Sequence from={1946} durationInFrames={566}>
        <Shot05ZeroExcusesSilence />
      </Sequence>

      {/* 6. 06:00 AM Gym, Nutrition & Snow Power (2512 -> 2788 frames | 83.74s -> 92.92s) */}
      <Sequence from={2512} durationInFrames={276}>
        <Shot06Gym6AMAndSnow />
      </Sequence>

      {/* 7. Bundesliga Record Breaker & Insatiable Appetite (2788 -> 3106 frames | 92.92s -> 103.52s) */}
      <Sequence from={2788} durationInFrames={318}>
        <Shot07BundesligaRecordBreaker />
      </Sequence>

      {/* 🎞️ CAPAS DE ACABADO DOCUMENTAL CINEMATOGRÁFICO CON IDENTIDAD OFICIAL MENTALIDAD DE CAMPEÓN (MDC) */}
      <CytmDocumentaryOverlay
        channelName="MENTALIDAD DE CAMPEÓN · MDC"
        dossierName="HARRY KANE · LA APUESTA DE MÚNICH Y EL AÑO INVICTO"
        telemetryTag="EXPEDIENTE MDC · BLOQUE 4"
        showTimecode={true}
        showViewfinder={true}
        showAudioBars={true}
      />
    </AbsoluteFill>
  );
};

