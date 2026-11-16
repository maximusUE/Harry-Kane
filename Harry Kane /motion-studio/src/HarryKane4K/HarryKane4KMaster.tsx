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

export const HarryKane4KMaster: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: "#07080B", width: 3840, height: 2160 }}>
      {/* 🎙️ Pista Maestra de Voz (Depurada y Normalizada a -14 LUFS) */}
      <Audio src={staticFile("voice_master_clean.wav")} volume={1} />

      {/* 🎵 Música Ambiental Cinemática con Ducking automático (-22 dB) */}
      <Audio src={staticFile("ambient_soundtrack.mp3")} volume={0.12} />

      {/* 🔊 EFECTOS DE SONIDO AL MILISEGUNDO DE CADA PALABRA / CORTE */}
      <Sequence from={0} durationInFrames={40}>
        <Audio src={staticFile("sfx/aire.mp3")} volume={0.4} />
      </Sequence>
      <Sequence from={60} durationInFrames={40}>
        <Audio src={staticFile("sfx/whoosh.mp3")} volume={0.5} />
      </Sequence>
      <Sequence from={150} durationInFrames={40}>
        <Audio src={staticFile("sfx/barrido.mp3")} volume={0.5} />
      </Sequence>
      <Sequence from={321} durationInFrames={40}>
        <Audio src={staticFile("sfx/transicion.mp3")} volume={0.45} />
      </Sequence>
      <Sequence from={402} durationInFrames={30}>
        <Audio src={staticFile("sfx/pop.mp3")} volume={0.4} />
      </Sequence>
      {/* Impacto justo en "el Balón de Oro" */}
      <Sequence from={621} durationInFrames={60}>
        <Audio src={staticFile("sfx/impact-bass-1.mp3")} volume={0.75} />
      </Sequence>
      {/* Click / Flash en Instagram */}
      <Sequence from={684} durationInFrames={30}>
        <Audio src={staticFile("sfx/click.mp3")} volume={0.5} />
      </Sequence>
      <Sequence from={975} durationInFrames={60}>
        <Audio src={staticFile("sfx/riser.mp3")} volume={0.35} />
      </Sequence>
      {/* Golpe stamp de La Gran Mentira */}
      <Sequence from={1245} durationInFrames={40}>
        <Audio src={staticFile("sfx/golpe.mp3")} volume={0.65} />
      </Sequence>
      {/* Golpe bajo en "15 AÑOS" */}
      <Sequence from={1305} durationInFrames={60}>
        <Audio src={staticFile("sfx/impact-bass-2.mp3")} volume={0.7} />
      </Sequence>
      {/* Glitch en titulares / Kane curse */}
      <Sequence from={1584} durationInFrames={40}>
        <Audio src={staticFile("sfx/glitch-1.mp3")} volume={0.45} />
      </Sequence>
      {/* Swell en el túnel del estadio */}
      <Sequence from={2040} durationInFrames={60}>
        <Audio src={staticFile("sfx/swell.mp3")} volume={0.5} />
      </Sequence>
      {/* Impacto en "ESTE VIDEO SE TRATA DE TI" */}
      <Sequence from={2445} durationInFrames={60}>
        <Audio src={staticFile("sfx/whoosh.mp3")} volume={0.6} />
      </Sequence>
      {/* Espejo 1 */}
      <Sequence from={2865} durationInFrames={40}>
        <Audio src={staticFile("sfx/transicion-b.mp3")} volume={0.45} />
      </Sequence>
      {/* Espejo 2 */}
      <Sequence from={3075} durationInFrames={40}>
        <Audio src={staticFile("sfx/transicion-c.mp3")} volume={0.45} />
      </Sequence>
      {/* Espejo 3 */}
      <Sequence from={3282} durationInFrames={35}>
        <Audio src={staticFile("sfx/bloque.mp3")} volume={0.4} />
      </Sequence>
      {/* Subida en "Regálate los próximos minutos" */}
      <Sequence from={3555} durationInFrames={50}>
        <Audio src={staticFile("sfx/subida.mp3")} volume={0.5} />
      </Sequence>
      {/* Fanfarria clímax inicial */}
      <Sequence from={3945} durationInFrames={90}>
        <Audio src={staticFile("sfx/fanfarria.mp3")} volume={0.6} />
      </Sequence>
      {/* Impacto final en "A MENOS QUE DECIDA RENDIRSE" */}
      <Sequence from={4310} durationInFrames={60}>
        <Audio src={staticFile("sfx/impact-bass-1.mp3")} volume={0.8} />
      </Sequence>

      {/* 🎬 17 PLANOS CINEMATOGRÁFICOS EXACTOS (SINCRONIZACIÓN MILIMÉTRICA) */}

      {/* Plano 01: "París" (0s - 2.00s) */}
      <Sequence from={0} durationInFrames={60}>
        <Shot01Paris />
      </Sequence>

      {/* Plano 02: "26 de octubre de 2026" (2.00s - 5.00s) */}
      <Sequence from={60} durationInFrames={90}>
        <Shot02Date />
      </Sequence>

      {/* Plano 03: "Ante las miradas de los mejores futbolistas del planeta..." (5.00s - 10.70s) */}
      <Sequence from={150} durationInFrames={171}>
        <Shot03TuxedoGala />
      </Sequence>

      {/* Plano 04: "cámaras que transmiten a más de 150 países" (10.70s - 13.40s) */}
      <Sequence from={321} durationInFrames={81}>
        <Shot04Broadcast />
      </Sequence>

      {/* Plano 05: "un hombre de 33 años... con el que sueña cada niño que pateó una botella..." (13.40s - 20.70s) */}
      <Sequence from={402} durationInFrames={219}>
        <Shot05StreetKid />
      </Sequence>

      {/* Plano 06: "...el Balón de Oro." (20.70s - 22.80s) [HIT CLÍMAX 1] */}
      <Sequence from={621} durationInFrames={63}>
        <Shot06BallonDor />
      </Sequence>

      {/* Plano 07: "La gente ve la foto en Instagram. Ve el esmoquin perfecto..." (22.80s - 32.50s) */}
      <Sequence from={684} durationInFrames={291}>
        <Shot07Instagram />
      </Sequence>

      {/* Plano 08: "Y el cerebro humano... qué afortunado... qué talento natural... nació para triunfar." (32.50s - 43.50s) */}
      <Sequence from={975} durationInFrames={330}>
        <Shot08TheLie />
      </Sequence>

      {/* Plano 09: "Lo que el mundo prefiere olvidar... es que durante 15 años consecutivos..." (43.50s - 52.80s) */}
      <Sequence from={1305} durationInFrames={279}>
        <Shot09FifteenYears />
      </Sequence>

      {/* Plano 10: "Crearon canciones para burlarse de él... The Kane Curse... eterno segundón..." (52.80s - 68.00s) */}
      <Sequence from={1584} durationInFrames={456}>
        <Shot10PressClips />
      </Sequence>

      {/* Plano 11: "Quince años viendo cómo otros levantaban copas... en el túnel de los estadios..." (68.00s - 81.50s) */}
      <Sequence from={2040} durationInFrames={405}>
        <Shot11DefeatTears />
      </Sequence>

      {/* Plano 12: "Pero este video no se trata de Harry Kane. Se trata de ti..." (81.50s - 95.50s) */}
      <Sequence from={2445} durationInFrames={420}>
        <Shot12AboutYou />
      </Sequence>

      {/* Plano 13: "Espejo 1: 20 kilos de más y vergüenza al espejo..." (95.50s - 102.50s) */}
      <Sequence from={2865} durationInFrames={210}>
        <Shot13MirrorBody />
      </Sequence>

      {/* Plano 14: "Espejo 2: La lesión que te apartó del deporte..." (102.50s - 109.40s) */}
      <Sequence from={3075} durationInFrames={207}>
        <Shot14MirrorInjury />
      </Sequence>

      {/* Plano 15: "Espejo 3: Tu negocio quebró, endeudado hasta el cuello..." (109.40s - 118.50s) */}
      <Sequence from={3282} durationInFrames={273}>
        <Shot15MirrorDebt />
      </Sequence>

      {/* Plano 16: "Si sientes que pesa una maldición... regálate los próximos minutos." (118.50s - 131.50s) */}
      <Sequence from={3555} durationInFrames={390}>
        <Shot16DirectStare />
      </Sequence>

      {/* Plano 17: "Nadie está condenado a perder para siempre... a menos que decida rendirse." (131.50s - 146.50s) */}
      <Sequence from={3945} durationInFrames={450}>
        <Shot17ClimaxRedemption />
      </Sequence>

      {/* 👑 OVERLAY DOCUMENTAL CYTM OFICIAL */}
      <CytmDocumentaryOverlay
        channelName="CYTM SPORTS"
        dossierName="HARRY KANE · EXPEDIENTE 2004-2026"
        telemetryTag="TELEMETRÍA OFICIAL"
      />
    </AbsoluteFill>
  );
};
