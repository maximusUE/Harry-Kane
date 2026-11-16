import React from "react";
import { AbsoluteFill, Audio, Sequence, staticFile } from "remotion";
import { CytmDocumentaryOverlay } from "../components/CytmDocumentaryOverlay";
import { Shot01Paris } from "./shots/Shot01Paris";
import { Shot02Date } from "./shots/Shot02Date";
import { Shot03TuxedoGala } from "./shots/Shot03TuxedoGala";
import { Shot04Broadcast } from "./shots/Shot04Broadcast";
import { Shot05StreetKid } from "./shots/Shot05StreetKid";
import { Shot06BallonDor } from "./shots/Shot06BallonDor";
import { Shot07Instagram } from "./shots/Shot07Instagram";
import { Shot08TheLie } from "./shots/Shot08TheLie";
import { Shot09FifteenYears } from "./shots/Shot09FifteenYears";
import { Shot10PressClips } from "./shots/Shot10PressClips";
import { Shot11DefeatTears } from "./shots/Shot11DefeatTears";
import { Shot12AboutYou } from "./shots/Shot12AboutYou";
import { Shot13MirrorBody } from "./shots/Shot13MirrorBody";
import { Shot14MirrorInjury } from "./shots/Shot14MirrorInjury";
import { Shot15MirrorDebt } from "./shots/Shot15MirrorDebt";
import { Shot16DirectStare } from "./shots/Shot16DirectStare";
import { Shot17ClimaxRedemption } from "./shots/Shot17ClimaxRedemption";

interface Bloque1MasterProps {
  part1Frames?: number;
  part2Frames?: number;
}

export const HarryKaneBloque1Master: React.FC<Bloque1MasterProps> = ({
  part1Frames = 2235,
  part2Frames = 1892,
}) => {
  return (
    <AbsoluteFill style={{ backgroundColor: "#07080B", width: 3840, height: 2160 }}>
      {/* 🎙️ PISTAS MAESTRAS DE VOZ (DON CÉSAR VOZ OFICIAL MX -12.5 LUFS BROADCAST) */}
      <Sequence from={0} durationInFrames={part1Frames}>
        <Audio src={staticFile("bloque1_part1.wav")} volume={1} />
      </Sequence>
      <Sequence from={part1Frames} durationInFrames={part2Frames}>
        <Audio src={staticFile("bloque1_part2.wav")} volume={1} />
      </Sequence>

      {/* 🎵 BANDA SONORA HIPNÓTICA / FLOW STATE AMBIENT (-18 LUFS MASTER) */}
      <Audio src={staticFile("hypnotic_ambient_flow.mp3")} volume={0.22} />

      {/* 🔊 EFECTOS DE SONIDO (SFX) SINCRONIZADOS AL MILISEGUNDO DE VOZ (AUDIO-FIRST WORD-LOCK) */}
      <Sequence from={0} durationInFrames={40}>
        <Audio src={staticFile("sfx/aire.mp3")} volume={0.45} />
      </Sequence>
      <Sequence from={24} durationInFrames={35}>
        <Audio src={staticFile("sfx/whoosh.mp3")} volume={0.5} />
      </Sequence>
      <Sequence from={107} durationInFrames={40}>
        <Audio src={staticFile("sfx/barrido.mp3")} volume={0.5} />
      </Sequence>
      <Sequence from={262} durationInFrames={40}>
        <Audio src={staticFile("sfx/transicion.mp3")} volume={0.45} />
      </Sequence>
      <Sequence from={371} durationInFrames={30}>
        <Audio src={staticFile("sfx/pop.mp3")} volume={0.4} />
      </Sequence>
      {/* Impacto justo en "el Balón de Oro" */}
      <Sequence from={613} durationInFrames={60}>
        <Audio src={staticFile("sfx/impact-bass-1.mp3")} volume={0.8} />
      </Sequence>
      {/* Click / Flash en Instagram */}
      <Sequence from={692} durationInFrames={30}>
        <Audio src={staticFile("sfx/camera_click.mp3")} volume={0.7} />
      </Sequence>
      <Sequence from={886} durationInFrames={50}>
        <Audio src={staticFile("sfx/riser.mp3")} volume={0.4} />
      </Sequence>
      {/* Golpe stamp de La Gran Mentira */}
      <Sequence from={1101} durationInFrames={40}>
        <Audio src={staticFile("sfx/golpe.mp3")} volume={0.65} />
      </Sequence>
      {/* Golpe bajo en "15 AÑOS" */}
      <Sequence from={1145} durationInFrames={60}>
        <Audio src={staticFile("sfx/impact-bass-2.mp3")} volume={0.75} />
      </Sequence>
      {/* Glitch en titulares / Kane curse */}
      <Sequence from={1412} durationInFrames={40}>
        <Audio src={staticFile("sfx/glitch-1.mp3")} volume={0.45} />
      </Sequence>
      {/* Swell en el túnel del estadio */}
      <Sequence from={1985} durationInFrames={60}>
        <Audio src={staticFile("sfx/swell.mp3")} volume={0.5} />
      </Sequence>
      {/* Impacto en "ESTE VIDEO SE TRATA DE TI" */}
      <Sequence from={2235} durationInFrames={60}>
        <Audio src={staticFile("sfx/whoosh.mp3")} volume={0.65} />
      </Sequence>
      {/* Espejo 1 */}
      <Sequence from={2696} durationInFrames={40}>
        <Audio src={staticFile("sfx/transicion-b.mp3")} volume={0.45} />
      </Sequence>
      {/* Espejo 2 */}
      <Sequence from={2884} durationInFrames={40}>
        <Audio src={staticFile("sfx/transicion-c.mp3")} volume={0.45} />
      </Sequence>
      {/* Espejo 3 */}
      <Sequence from={3064} durationInFrames={35}>
        <Audio src={staticFile("sfx/bloque.mp3")} volume={0.4} />
      </Sequence>
      {/* Subida en "Regálate los próximos minutos" */}
      <Sequence from={3514} durationInFrames={50}>
        <Audio src={staticFile("sfx/subida.mp3")} volume={0.5} />
      </Sequence>
      {/* Fanfarria clímax inicial */}
      <Sequence from={3776} durationInFrames={90}>
        <Audio src={staticFile("sfx/fanfarria.mp3")} volume={0.6} />
      </Sequence>
      {/* Impacto final en "A MENOS QUE DECIDA RENDIRSE" */}
      <Sequence from={4066} durationInFrames={60}>
        <Audio src={staticFile("sfx/impact-bass-1.mp3")} volume={0.85} />
      </Sequence>

      {/* 🎬 17 PLANOS CINEMATOGRÁFICOS EXACTOS (SINCRONIZACIÓN MILIMÉTRICA WORD-LOCK) */}

      {/* Plano 01: "París" (0s - 0.80s) */}
      <Sequence from={0} durationInFrames={24}>
        <Shot01Paris />
      </Sequence>

      {/* Plano 02: "26 de octubre de 2026" (0.80s - 3.56s) */}
      <Sequence from={24} durationInFrames={83}>
        <Shot02Date />
      </Sequence>

      {/* Plano 03: "Ante las miradas de los mejores futbolistas del planeta..." (3.56s - 8.74s) */}
      <Sequence from={107} durationInFrames={155}>
        <Shot03TuxedoGala />
      </Sequence>

      {/* Plano 04: "cámaras que transmiten a más de 150 países" (8.74s - 12.38s) */}
      <Sequence from={262} durationInFrames={109}>
        <Shot04Broadcast />
      </Sequence>

      {/* Plano 05: "un hombre de 33 años... con el que sueña cada niño que pateó una botella..." (12.38s - 20.42s) */}
      <Sequence from={371} durationInFrames={242}>
        <Shot05StreetKid />
      </Sequence>

      {/* Plano 06: "...el Balón de Oro." (20.43s - 22.64s) [HIT CLÍMAX 1] */}
      <Sequence from={613} durationInFrames={66}>
        <Shot06BallonDor />
      </Sequence>

      {/* Plano 07: "La gente ve la foto en Instagram. Ve el esmoquin perfecto..." (22.64s - 29.53s) */}
      <Sequence from={679} durationInFrames={207}>
        <Shot07Instagram />
      </Sequence>

      {/* Plano 08: "Y el cerebro humano... qué afortunado... qué talento natural... nació para triunfar." (29.53s - 38.17s) */}
      <Sequence from={886} durationInFrames={259}>
        <Shot08TheLie />
      </Sequence>

      {/* Plano 09: "Lo que el mundo prefiere olvidar... es que durante 15 años consecutivos..." (38.17s - 47.07s) */}
      <Sequence from={1145} durationInFrames={267}>
        <Shot09FifteenYears />
      </Sequence>

      {/* Plano 10: "Crearon canciones para burlarse de él... The Kane Curse... eterno segundón..." (47.07s - 63.66s) */}
      <Sequence from={1412} durationInFrames={498}>
        <Shot10PressClips />
      </Sequence>

      {/* Plano 11: "Quince años viendo cómo otros levantaban copas... en el túnel de los estadios..." (63.66s - 74.50s) */}
      <Sequence from={1910} durationInFrames={325}>
        <Shot11DefeatTears />
      </Sequence>

      {/* Plano 12: "Pero este video no se trata de Harry Kane. Se trata de ti..." (74.50s - 89.69s) */}
      <Sequence from={2235} durationInFrames={456}>
        <Shot12AboutYou />
      </Sequence>

      {/* Plano 13: "Espejo 1: 20 kilos de más y vergüenza al espejo..." (89.69s - 95.27s) */}
      <Sequence from={2691} durationInFrames={167}>
        <Shot13MirrorBody />
      </Sequence>

      {/* Plano 14: "Espejo 2: La lesión que te apartó del deporte..." (95.27s - 102.13s) */}
      <Sequence from={2858} durationInFrames={206}>
        <Shot14MirrorInjury />
      </Sequence>

      {/* Plano 15: "Espejo 3: Tu negocio quebró, endeudado hasta el cuello..." (102.13s - 116.55s) */}
      <Sequence from={3064} durationInFrames={432}>
        <Shot15MirrorDebt />
      </Sequence>

      {/* Plano 16: "Si sientes que pesa una maldición... regálate los próximos minutos." (116.55s - 125.87s) */}
      <Sequence from={3496} durationInFrames={280}>
        <Shot16DirectStare />
      </Sequence>

      {/* Plano 17: "Nadie está condenado a perder para siempre... a menos que decida rendirse." (125.87s - 137.57s) */}
      <Sequence from={3776} durationInFrames={351}>
        <Shot17ClimaxRedemption />
      </Sequence>

      {/* 👑 OVERLAY DOCUMENTAL CYTM OFICIAL */}
      <CytmDocumentaryOverlay
        channelName="MENTALIDAD DE CAMPEÓN"
        dossierName="HARRY KANE · EXPEDIENTE 2004-2026"
        telemetryTag="TELEMETRÍA OFICIAL"
      />
    </AbsoluteFill>
  );
};
