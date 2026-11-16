import React from "react";
import { AbsoluteFill, Audio, Sequence, staticFile } from "remotion";
import { CytmDocumentaryOverlay } from "../components/CytmDocumentaryOverlay";
import { Shot01SpursBreakthrough } from "./shots/Shot01SpursBreakthrough";
import { Shot02GoldenBoots280Goals } from "./shots/Shot02GoldenBoots280Goals";
import { Shot03CrueldadEliteCalvario } from "./shots/Shot03CrueldadEliteCalvario";
import { Shot04Chelsea2015Madrid2019 } from "./shots/Shot04Chelsea2015Madrid2019";
import { Shot05Wembley2021Loss } from "./shots/Shot05Wembley2021Loss";
import { Shot06Berlin2024Titulares } from "./shots/Shot06Berlin2024Titulares";
import { Shot07MirrorSacrificio } from "./shots/Shot07MirrorSacrificio";
import { Shot08VictimaVsResiliencia } from "./shots/Shot08VictimaVsResiliencia";
import { Shot09HombresDeHierro } from "./shots/Shot09HombresDeHierro";

interface Bloque3MasterProps {
  part1Frames?: number;
  part2Frames?: number;
}

export const HarryKaneBloque3Master: React.FC<Bloque3MasterProps> = ({
  part1Frames = 2616,
  part2Frames = 1399,
}) => {
  return (
    <AbsoluteFill style={{ backgroundColor: "#07080B", width: 3840, height: 2160 }}>
      {/* 🎙️ PISTAS MAESTRAS DE VOZ (DON CÉSAR VOZ OFICIAL MX -12.5 LUFS BROADCAST) */}
      <Sequence from={0} durationInFrames={part1Frames}>
        <Audio src={staticFile("bloque3_part1.wav")} volume={1} />
      </Sequence>
      <Sequence from={part1Frames} durationInFrames={part2Frames}>
        <Audio src={staticFile("bloque3_part2.wav")} volume={1} />
      </Sequence>

      {/* 🎵 BANDA SONORA HIPNÓTICA / FLOW STATE AMBIENT (-18 LUFS MASTER) */}
      <Audio src={staticFile("hypnotic_ambient_flow.mp3")} volume={0.28} />

      {/* 🔊 EFECTOS DE SONIDO (SFX) & GUNEY MOTION KIT SINCRONIZADOS AL CORTE */}
      <Sequence from={0} durationInFrames={40}>
        <Audio src={staticFile("sfx/guney/whoosh.wav")} volume={0.55} />
      </Sequence>
      {/* ⌨️ Shot 01 Typewriter: Desató una tormenta */}
      <Sequence from={8} durationInFrames={35}>
        <Audio src={staticFile("sfx/typing_loud.mp3")} volume={0.9} />
      </Sequence>

      {/* Transición Shot 02 */}
      <Sequence from={210} durationInFrames={40}>
        <Audio src={staticFile("sfx/transicion.mp3")} volume={0.45} />
      </Sequence>
      {/* ⌨️ Shot 02 Typewriter & Thunk: 3x Botas de Oro */}
      <Sequence from={345} durationInFrames={40}>
        <Audio src={staticFile("sfx/typing_loud.mp3")} volume={0.9} />
      </Sequence>
      <Sequence from={345} durationInFrames={50}>
        <Audio src={staticFile("sfx/guney/thunk.wav")} volume={0.65} />
      </Sequence>
      <Sequence from={615} durationInFrames={50}>
        <Audio src={staticFile("sfx/guney/rise.wav")} volume={0.6} />
      </Sequence>

      {/* Transición Shot 03 Calvario */}
      <Sequence from={747} durationInFrames={40}>
        <Audio src={staticFile("sfx/barrido.mp3")} volume={0.5} />
      </Sequence>
      {/* ⌨️ Shot 03 Typewriter: El deporte de élite no tiene piedad */}
      <Sequence from={755} durationInFrames={45}>
        <Audio src={staticFile("sfx/typing_loud.mp3")} volume={0.95} />
      </Sequence>
      <Sequence from={987} durationInFrames={60}>
        <Audio src={staticFile("sfx/impact-bass-1.mp3")} volume={0.8} />
      </Sequence>

      {/* Transición Shot 04 Chelsea 2015 & Madrid 2019 */}
      <Sequence from={1220} durationInFrames={40}>
        <Audio src={staticFile("sfx/guney/swish.wav")} volume={0.5} />
      </Sequence>
      {/* ⌨️ Shot 04A Typewriter: Final Copa de la Liga ante el Chelsea (40.66s) */}
      <Sequence from={1222} durationInFrames={32}>
        <Audio src={staticFile("sfx/typing_loud.mp3")} volume={0.9} />
      </Sequence>
      {/* ⌨️ Shot 04B Typewriter: Primera Final de Champions en Madrid (45.24s) */}
      <Sequence from={1358} durationInFrames={32}>
        <Audio src={staticFile("sfx/typing_loud.mp3")} volume={0.85} />
      </Sequence>
      {/* ⌨️ Shot 04C Typewriter: El golpe en el primer minuto (49.44s) */}
      <Sequence from={1484} durationInFrames={34}>
        <Audio src={staticFile("sfx/typing_loud.mp3")} volume={0.9} />
      </Sequence>
      <Sequence from={1483} durationInFrames={50}>
        <Audio src={staticFile("sfx/golpe.mp3")} volume={0.75} />
      </Sequence>

      {/* Transición Shot 05 City 2021 & Wembley 2021 */}
      <Sequence from={1688} durationInFrames={60}>
        <Audio src={staticFile("sfx/whoosh-cinematic.mp3")} volume={0.65} />
      </Sequence>
      {/* ⌨️ Shot 05A Typewriter: Otra final perdida ante Manchester City (56.26s) */}
      <Sequence from={1690} durationInFrames={34}>
        <Audio src={staticFile("sfx/typing_loud.mp3")} volume={0.9} />
      </Sequence>
      {/* ⌨️ Shot 05B Typewriter: La herida más profunda: A un metro de la gloria (60.04s) */}
      <Sequence from={1802} durationInFrames={38}>
        <Audio src={staticFile("sfx/typing_loud.mp3")} volume={0.95} />
      </Sequence>
      <Sequence from={1938} durationInFrames={50}>
        <Audio src={staticFile("sfx/guney/pop_low.wav")} volume={0.6} />
      </Sequence>

      {/* Transición Shot 06 Berlín 2024 & Balance 6 Finales */}
      <Sequence from={2191} durationInFrames={70}>
        <Audio src={staticFile("sfx/impact-bass-2.mp3")} volume={0.8} />
      </Sequence>
      {/* ⌨️ Shot 06A Typewriter: Berlín 2024: La misma escena desgarradora (73.03s) */}
      <Sequence from={2193} durationInFrames={36}>
        <Audio src={staticFile("sfx/typing_loud.mp3")} volume={0.9} />
      </Sequence>
      <Sequence from={2401} durationInFrames={35}>
        <Audio src={staticFile("sfx/camera_click.mp3")} volume={0.7} />
      </Sequence>
      {/* ⌨️ Shot 06B Typewriter: Seis finales. Seis derrotas. Cero trofeos. (82.92s) */}
      <Sequence from={2489} durationInFrames={36}>
        <Audio src={staticFile("sfx/typing_loud.mp3")} volume={0.95} />
      </Sequence>

      {/* Transición Shot 07 Espejo del Espectador */}
      <Sequence from={2616} durationInFrames={60}>
        <Audio src={staticFile("sfx/whoosh-cinematic.mp3")} volume={0.7} />
      </Sequence>
      {/* ⌨️ Shot 07 Typewriter: ¿Qué haces cuando das tu cien por ciento? */}
      <Sequence from={2624} durationInFrames={50}>
        <Audio src={staticFile("sfx/typing_loud.mp3")} volume={0.95} />
      </Sequence>

      {/* Transición Shot 08 Víctima vs Resiliencia */}
      <Sequence from={3088} durationInFrames={60}>
        <Audio src={staticFile("sfx/guney/rise.wav")} volume={0.65} />
      </Sequence>
      {/* ⌨️ Shot 08 Typewriter: El 99% de los hombres se rinden aquí */}
      <Sequence from={3096} durationInFrames={50}>
        <Audio src={staticFile("sfx/typing_loud.mp3")} volume={0.95} />
      </Sequence>
      <Sequence from={3398} durationInFrames={50}>
        <Audio src={staticFile("sfx/guney/thunk.wav")} volume={0.65} />
      </Sequence>

      {/* Transición Shot 09 Hombres de Hierro Clímax */}
      <Sequence from={3713} durationInFrames={90}>
        <Audio src={staticFile("sfx/fanfarria.mp3")} volume={0.65} />
      </Sequence>
      {/* ⌨️ Shot 09 Typewriter: Los hombres de hierro tienen un cableado mental diferente */}
      <Sequence from={3721} durationInFrames={50}>
        <Audio src={staticFile("sfx/typing_loud.mp3")} volume={0.95} />
      </Sequence>
      <Sequence from={3813} durationInFrames={60}>
        <Audio src={staticFile("sfx/guney/rise.wav")} volume={0.7} />
      </Sequence>

      {/* 🎬 SECUENCIA DE 9 PLANOS CINEMATOGRÁFICOS SINCRONIZADOS A CADA FRASE DE VOZ */}
      {/* 1. Spurs Breakthrough (0 -> 210 frames | 7.0s) */}
      <Sequence from={0} durationInFrames={210}>
        <Shot01SpursBreakthrough />
      </Sequence>

      {/* 2. Golden Boots & 280 Goals (210 -> 747 frames | 17.9s) */}
      <Sequence from={210} durationInFrames={537}>
        <Shot02GoldenBoots280Goals />
      </Sequence>

      {/* 3. Crueldad del Deporte de Élite (747 -> 1220 frames | 15.7s) */}
      <Sequence from={747} durationInFrames={473}>
        <Shot03CrueldadEliteCalvario />
      </Sequence>

      {/* 4. Chelsea 2015 & Champions Madrid 2019 (1220 -> 1688 frames | 15.6s) */}
      <Sequence from={1220} durationInFrames={468}>
        <Shot04Chelsea2015Madrid2019 />
      </Sequence>

      {/* 5. Wembley 2021 Euro Heartbreak (1688 -> 2191 frames | 16.8s) */}
      <Sequence from={1688} durationInFrames={503}>
        <Shot05Wembley2021Loss />
      </Sequence>

      {/* 6. Berlín 2024 & Titulares Tabloide (2191 -> 2616 frames | 14.1s) */}
      <Sequence from={2191} durationInFrames={425}>
        <Shot06Berlin2024Titulares />
      </Sequence>

      {/* 7. Espejo del Espectador & Sacrificio (2616 -> 3088 frames | 15.7s) */}
      <Sequence from={2616} durationInFrames={472}>
        <Shot07MirrorSacrificio />
      </Sequence>

      {/* 8. Víctima vs Resiliencia (3088 -> 3713 frames | 20.8s) */}
      <Sequence from={3088} durationInFrames={625}>
        <Shot08VictimaVsResiliencia />
      </Sequence>

      {/* 9. Hombres de Hierro Clímax (3713 -> 4015 frames | 10.1s) */}
      <Sequence from={3713} durationInFrames={302}>
        <Shot09HombresDeHierro />
      </Sequence>

      {/* 🎞️ CAPAS DE ACABADO DOCUMENTAL CINEMATOGRÁFICO CON IDENTIDAD OFICIAL MENTALIDAD DE CAMPEÓN (MDC) */}
      <CytmDocumentaryOverlay
        channelName="MENTALIDAD DE CAMPEÓN"
        dossierName="HARRY KANE · EL PURGATORIO DE LAS 6 FINALES"
        telemetryTag="EXPEDIENTE MDC · BLOQUE 3"
        showTimecode={true}
        showViewfinder={true}
        showAudioBars={true}
      />
    </AbsoluteFill>
  );
};
