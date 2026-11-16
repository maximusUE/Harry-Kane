import React from "react";
import { AbsoluteFill, Audio, Sequence, staticFile } from "remotion";
import { CytmDocumentaryOverlay } from "../components/CytmDocumentaryOverlay";
import { Shot01London2001 } from "./shots/Shot01London2001";
import { Shot02ArsenalKid } from "./shots/Shot02ArsenalKid";
import { Shot03LiamBradyVerdict } from "./shots/Shot03LiamBradyVerdict";
import { Shot04ChubbyDespido } from "./shots/Shot04ChubbyDespido";
import { Shot05MirrorQuestion } from "./shots/Shot05MirrorQuestion";
import { Shot06RainRunLodo } from "./shots/Shot06RainRunLodo";
import { Shot07CesionesMillwall } from "./shots/Shot07CesionesMillwall";
import { Shot08InjuryNorwich } from "./shots/Shot08InjuryNorwich";
import { Shot10PremierLeagueDoubt } from "./shots/Shot10PremierLeagueDoubt";

export const HarryKaneBloque2Master: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: "#07080B", width: 3840, height: 2160 }}>
      {/* 🎙️ PISTAS MAESTRAS DE VOZ (DON CÉSAR VOZ OFICIAL MX -12.1 LUFS) */}
      <Sequence from={0} durationInFrames={1155}>
        <Audio src={staticFile("bloque2_part1.wav")} volume={1} />
      </Sequence>
      <Sequence from={1155} durationInFrames={1723}>
        <Audio src={staticFile("bloque2_part2.wav")} volume={1} />
      </Sequence>

      {/* 🎵 BANDA SONORA HIPNÓTICA / FLOW STATE AMBIENT (-18 LUFS MASTER) */}
      <Audio src={staticFile("hypnotic_ambient_flow.mp3")} volume={0.18} />

      {/* 🔊 EFECTOS DE SONIDO (SFX) SINCRONIZADOS AL MILISEGUNDO DE VOZ (WORD-LOCK) */}
      <Sequence from={0} durationInFrames={40}>
        <Audio src={staticFile("sfx/whoosh.mp3")} volume={0.6} />
      </Sequence>
      {/* 📸 OBTURADOR DE CÁMARA EN CADA CORTE DE FOTO TITÁN */}
      <Sequence from={0} durationInFrames={30}>
        <Audio src={staticFile("sfx/camera_click.mp3")} volume={0.8} />
      </Sequence>
      <Sequence from={45} durationInFrames={30}>
        <Audio src={staticFile("sfx/camera_click.mp3")} volume={0.8} />
      </Sequence>
      <Sequence from={90} durationInFrames={30}>
        <Audio src={staticFile("sfx/camera_click.mp3")} volume={0.8} />
      </Sequence>
      <Sequence from={135} durationInFrames={30}>
        <Audio src={staticFile("sfx/camera_click.mp3")} volume={0.8} />
      </Sequence>
      <Sequence from={180} durationInFrames={30}>
        <Audio src={staticFile("sfx/camera_click.mp3")} volume={0.8} />
      </Sequence>

      {/* ⌨️ SHOT 01 - LONDRES, AÑO 2001 (7.38s = f221) */}
      <Sequence from={221} durationInFrames={50}>
        <Audio src={staticFile("sfx/typing_loud.mp3")} volume={1.0} />
      </Sequence>
      <Sequence from={269} durationInFrames={60}>
        <Audio src={staticFile("sfx/impact-bass-1.mp3")} volume={0.85} />
      </Sequence>
      <Sequence from={285} durationInFrames={40}>
        <Audio src={staticFile("sfx/transicion.mp3")} volume={0.55} />
      </Sequence>

      {/* ⌨️ SHOT 02 - HARRY TIENE SOLO 8 AÑOS (9.84s = f295) */}
      <Sequence from={295} durationInFrames={45}>
        <Audio src={staticFile("sfx/typing_loud.mp3")} volume={1.0} />
      </Sequence>
      <Sequence from={400} durationInFrames={35}>
        <Audio src={staticFile("sfx/shatter_break.mp3")} volume={0.85} />
      </Sequence>
      <Sequence from={510} durationInFrames={45}>
        <Audio src={staticFile("sfx/whoosh.mp3")} volume={0.5} />
      </Sequence>

      {/* 🌪️ SHOT 03 - EL VEREDICTO DE LOS TÉCNICOS (21.00s = f630) */}
      <Sequence from={630} durationInFrames={40}>
        <Audio src={staticFile("sfx/barrido.mp3")} volume={0.55} />
      </Sequence>
      <Sequence from={638} durationInFrames={42}>
        <Audio src={staticFile("sfx/typing_loud.mp3")} volume={0.9} />
      </Sequence>

      {/* 🌪️ SHOT 04 - UN POCO GORDITO Y POCO ATLÉTICO (28.50s = f855) */}
      <Sequence from={855} durationInFrames={40}>
        <Audio src={staticFile("sfx/transicion-b.mp3")} volume={0.55} />
      </Sequence>
      <Sequence from={865} durationInFrames={48}>
        <Audio src={staticFile("sfx/typing_loud.mp3")} volume={0.95} />
      </Sequence>

      {/* 💥 GOLPE BRUTAL: DESPEDIDO (36.00s = f1080) */}
      <Sequence from={1080} durationInFrames={75}>
        <Audio src={staticFile("sfx/impact-bass-1.mp3")} volume={0.9} />
      </Sequence>
      <Sequence from={1080} durationInFrames={40}>
        <Audio src={staticFile("sfx/golpe.mp3")} volume={0.8} />
      </Sequence>

      {/* 🪞 SHOT 05 - PONTE EN EL LUGAR DE ESE NIÑO (38.50s = f1155) */}
      <Sequence from={1155} durationInFrames={150}>
        <Audio src={staticFile("sfx/whoosh-cinematic.mp3")} volume={0.75} />
      </Sequence>
      <Sequence from={1156} durationInFrames={44}>
        <Audio src={staticFile("sfx/typing_loud.mp3")} volume={0.95} />
      </Sequence>
      {/* Badge 9 de cada 10 niños (47.00s = f1410) */}
      <Sequence from={1410} durationInFrames={40}>
        <Audio src={staticFile("sfx/transicion.mp3")} volume={0.55} />
      </Sequence>
      {/* No derramó una sola lágrima (52.50s = f1575) */}
      <Sequence from={1577} durationInFrames={42}>
        <Audio src={staticFile("sfx/typing_loud.mp3")} volume={0.9} />
      </Sequence>

      {/* 🌧️ SHOT 06 - CORRER BAJO LA LLUVIA (57.30s = f1719) -> A PURO PULMÓN (61.13s = f1834) -> EN EL LODO (64.40s = f1932) */}
      <Sequence from={1719} durationInFrames={80}>
        <Audio src={staticFile("sfx/riser.mp3")} volume={0.45} />
      </Sequence>
      <Sequence from={1721} durationInFrames={40}>
        <Audio src={staticFile("sfx/typing_loud.mp3")} volume={0.9} />
      </Sequence>
      <Sequence from={1835} durationInFrames={42}>
        <Audio src={staticFile("sfx/typing_loud.mp3")} volume={0.95} />
      </Sequence>
      <Sequence from={1933} durationInFrames={42}>
        <Audio src={staticFile("sfx/typing_loud.mp3")} volume={0.95} />
      </Sequence>

      {/* ⚔️ SHOT 07 - EL CALVARIO DE LAS CESIONES (71.43s = f2143) -> MILLWALL (79.10s = f2373) */}
      <Sequence from={2028} durationInFrames={40}>
        <Audio src={staticFile("sfx/transicion-c.mp3")} volume={0.5} />
      </Sequence>
      <Sequence from={2144} durationInFrames={44}>
        <Audio src={staticFile("sfx/typing_loud.mp3")} volume={0.95} />
      </Sequence>
      <Sequence from={2373} durationInFrames={90}>
        <Audio src={staticFile("sfx/impact-bass-2.mp3")} volume={0.85} />
      </Sequence>
      <Sequence from={2375} durationInFrames={40}>
        <Audio src={staticFile("sfx/typing_loud.mp3")} volume={0.95} />
      </Sequence>

      {/* 🏥 SHOT 08 - LESIÓN DE PIE EN 2013 (85.00s = f2550) */}
      <Sequence from={2550} durationInFrames={40}>
        <Audio src={staticFile("sfx/glitch-1.mp3")} volume={0.55} />
      </Sequence>
      <Sequence from={2552} durationInFrames={42}>
        <Audio src={staticFile("sfx/typing_loud.mp3")} volume={1.0} />
      </Sequence>

      {/* ❓ SHOT 10 - LA DUDA LETAL EN LOS DESPACHOS (89.50s = f2685) -> ¿TIENE NIVEL PREMIER? (92.35s = f2771) */}
      <Sequence from={2685} durationInFrames={100}>
        <Audio src={staticFile("sfx/fanfarria.mp3")} volume={0.6} />
      </Sequence>
      <Sequence from={2687} durationInFrames={42}>
        <Audio src={staticFile("sfx/typing_loud.mp3")} volume={0.95} />
      </Sequence>
      <Sequence from={2772} durationInFrames={48}>
        <Audio src={staticFile("sfx/typing_loud.mp3")} volume={0.95} />
      </Sequence>

      {/* 🎬 SECUENCIA DE PLANOS SINCRONIZADOS PALABRA POR PALABRA (WORD-LOCK) */}
      {/* 0:00.0 a 0:09.5 (285f): Para entender la mente de un titán... Londres, año 2001 */}
      <Sequence from={0} durationInFrames={285}>
        <Shot01London2001 />
      </Sequence>

      {/* 0:09.5 a 0:21.0 (345f): Harry tiene apenas 8 años... Sueña despierto con convertirse en goleador */}
      <Sequence from={285} durationInFrames={345}>
        <Shot02ArsenalKid />
      </Sequence>

      {/* 0:21.0 a 0:28.5 (225f): Pero una tarde gris, Liam Brady convoca a sus padres... */}
      <Sequence from={630} durationInFrames={225}>
        <Shot03LiamBradyVerdict />
      </Sequence>

      {/* 0:28.5 a 0:38.5 (300f): Un poco gordito y poco atlético... Despedido. Fuera del club */}
      <Sequence from={855} durationInFrames={300}>
        <Shot04ChubbyDespido />
      </Sequence>

      {/* 0:38.5 a 0:57.3 (564f): Ponte en el lugar de ese niño -> 9/10 niños (47.0s) -> Ninguna lágrima (52.5s) */}
      <Sequence from={1155} durationInFrames={564}>
        <Shot05MirrorQuestion />
      </Sequence>

      {/* 0:57.3 a 1:07.6 (309f): Correr bajo lluvia helada (57.3s) -> A puro pulmón (61.13s) -> En el lodo (64.4s) */}
      <Sequence from={1719} durationInFrames={309}>
        <Shot06RainRunLodo />
      </Sequence>

      {/* 1:07.6 a 1:25.0 (522f): Sin redención (67.6s) -> Calvario cesiones (71.4s) -> Leyton (75.3s) -> Millwall (79.1s) */}
      <Sequence from={2028} durationInFrames={522}>
        <Shot07CesionesMillwall />
      </Sequence>

      {/* 1:25.0 a 1:29.5 (135f): Y la dura lesión de pie en 2013 que frenó en seco su cuerpo */}
      <Sequence from={2550} durationInFrames={135}>
        <Shot08InjuryNorwich />
      </Sequence>

      {/* 1:29.5 a 1:35.9 (193f): En los despachos la duda era letal (89.5s) -> ¿Tiene nivel Premier League? (92.35s) */}
      <Sequence from={2685} durationInFrames={193}>
        <Shot10PremierLeagueDoubt />
      </Sequence>

      {/* 👑 OVERLAY DOCUMENTAL OFICIAL MENTALIDAD DE CAMPEÓN (MDC) */}
      <CytmDocumentaryOverlay
        channelName="MENTALIDAD DE CAMPEÓN · MDC"
        dossierName="HARRY KANE · EL DESCARTE INFANTIL"
        telemetryTag="EXPEDIENTE MDC · BLOQUE 2"
      />
    </AbsoluteFill>
  );
};
