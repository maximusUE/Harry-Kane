import React from "react";
import { AbsoluteFill, Audio, Sequence, staticFile } from "remotion";
import { Shot1Paris } from "./scenes/Shot1Paris";
import { Shot2Date } from "./scenes/Shot2Date";
import { Shot3Planeta } from "./scenes/Shot3Planeta";
import { Shot4Paises } from "./scenes/Shot4Paises";
import { Shot5Sueno } from "./scenes/Shot5Sueno";
import { Shot6BalonDeOro } from "./scenes/Shot6BalonDeOro";
import { Shot7Instagram } from "./scenes/Shot7Instagram";
import { Shot8LaMentira } from "./scenes/Shot8LaMentira";
import { Scene2Struggle } from "./Scene2Struggle";
import { Scene3Reflection } from "./Scene3Reflection";

export const HarryKaneIntro: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: "#000000" }}>
      {/* Pista de Audio Maestro */}
      <Audio src={staticFile("intro_audio.mp3")} />

      {/* 🎬 MICRO-SECUENCIAS CINEMATOGRÁFICAS (0s - 40s) */}

      {/* Toma 1: "París." (0s - 3s) */}
      <Sequence from={0} durationInFrames={90}>
        <Shot1Paris />
      </Sequence>

      {/* Toma 2: "26 de octubre de 2026." (3s - 6s) */}
      <Sequence from={90} durationInFrames={90}>
        <Shot2Date />
      </Sequence>

      {/* Toma 3: "Ante las miradas de los mejores futbolistas del planeta..." (6s - 11s) */}
      <Sequence from={180} durationInFrames={150}>
        <Shot3Planeta />
      </Sequence>

      {/* Toma 4: "...cámaras que transmiten a más de 150 países..." (11s - 16s) */}
      <Sequence from={330} durationInFrames={150}>
        <Shot4Paises />
      </Sequence>

      {/* Toma 5: "...un hombre de 33 años recibe el trofeo con el que sueña cada niño..." (16s - 21s) */}
      <Sequence from={480} durationInFrames={150}>
        <Shot5Sueno />
      </Sequence>

      {/* Toma 6: "...el Balón de Oro." (21s - 27s - CLÍMAX DORADO) */}
      <Sequence from={630} durationInFrames={180}>
        <Shot6BalonDeOro />
      </Sequence>

      {/* Toma 7: "La gente ve la foto en Instagram. El esmoquin perfecto..." (27s - 33s) */}
      <Sequence from={810} durationInFrames={180}>
        <Shot7Instagram />
      </Sequence>

      {/* Toma 8: "Qué afortunado... Qué talento natural... Nació para triunfar." (33s - 40s) */}
      <Sequence from={990} durationInFrames={210}>
        <Shot8LaMentira />
      </Sequence>

      {/* 🎬 BLOQUE 2: 15 AÑOS DE BURLAS Y THE KANE CURSE (40s - 75s) */}
      <Sequence from={1200} durationInFrames={1050}>
        <Scene2Struggle />
      </Sequence>

      {/* 🎬 BLOQUE 3: ESTE VIDEO SE TRATA DE TI (75s - Final) */}
      <Sequence from={2250} durationInFrames={2320}>
        <Scene3Reflection />
      </Sequence>
    </AbsoluteFill>
  );
};
