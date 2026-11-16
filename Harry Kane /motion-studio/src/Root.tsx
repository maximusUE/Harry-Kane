import { Composition, Folder } from "remotion";
import { HelloWorld } from "./HelloWorld";
import { Logo } from "./HelloWorld/Logo";
import { Title } from "./HelloWorld/Title";
import { HarryKaneBloque1Master } from "./HarryKaneBloque1/HarryKaneBloque1Master";
import { HarryKaneBloque2Master } from "./HarryKaneBloque2/HarryKaneBloque2Master";
import { HarryKaneBloque3Master } from "./HarryKaneBloque3/HarryKaneBloque3Master";
import { HarryKaneBloque4Master } from "./HarryKaneBloque4/HarryKaneBloque4Master";
import { HarryKaneBloque5Master } from "./HarryKaneBloque5/HarryKaneBloque5Master";
import { HarryKaneHookShort } from "./HarryKaneShorts/HarryKaneHookShort";
import { HarryKaneBloque1Short } from "./HarryKaneShorts/HarryKaneBloque1Short";
import { HarryKaneBloque2Short } from "./HarryKaneShorts/HarryKaneBloque2Short";
import { HarryKaneBloque3Short } from "./HarryKaneShorts/HarryKaneBloque3Short";
import { HarryKaneBloque4Short } from "./HarryKaneShorts/HarryKaneBloque4Short";
import { HarryKaneBloque5Short } from "./HarryKaneShorts/HarryKaneBloque5Short";
import { ListoParaEditar } from "./ListoParaEditar";
import { HarryKaneV2BloqueMaster } from "./HarryKaneV2/HarryKaneV2BloqueMaster";
import { HarryKaneMdcEditClip } from "./HarryKaneV2/HarryKaneMdcEditClip";

export const RemotionRoot: React.FC = () => {
  return (
    <>
      {/* 🇲🇽 V2 MASTERS (ES-MX-JORGENEURAL, AUDIO-FIRST WORD-LOCK, 16:9 4K -> RENDER 1080P) */}
      <Folder name="HarryKaneV2">
        <Composition
          id="HarryKaneV2Bloque1"
          component={HarryKaneV2BloqueMaster}
          durationInFrames={3632}
          fps={30}
          width={3840}
          height={2160}
          defaultProps={{ bloque: 1 as const }}
        />
        <Composition
          id="HarryKaneV2Bloque2"
          component={HarryKaneV2BloqueMaster}
          durationInFrames={4816}
          fps={30}
          width={3840}
          height={2160}
          defaultProps={{ bloque: 2 as const }}
        />
        <Composition
          id="HarryKaneV2Bloque3"
          component={HarryKaneV2BloqueMaster}
          durationInFrames={4468}
          fps={30}
          width={3840}
          height={2160}
          defaultProps={{ bloque: 3 as const }}
        />
        <Composition
          id="HarryKaneV2Bloque4"
          component={HarryKaneV2BloqueMaster}
          durationInFrames={4048}
          fps={30}
          width={3840}
          height={2160}
          defaultProps={{ bloque: 4 as const }}
        />
        <Composition
          id="HarryKaneV2Bloque5"
          component={HarryKaneV2BloqueMaster}
          durationInFrames={2158}
          fps={30}
          width={3840}
          height={2160}
          defaultProps={{ bloque: 5 as const }}
        />
        <Composition
          id="HarryKaneV2Bloque6"
          component={HarryKaneV2BloqueMaster}
          durationInFrames={4167}
          fps={30}
          width={3840}
          height={2160}
          defaultProps={{ bloque: 6 as const }}
        />
        <Composition
          id="HarryKaneMdcEditClip"
          component={HarryKaneMdcEditClip}
          durationInFrames={285}
          fps={30}
          width={1080}
          height={1440}
        />
      </Folder>
      {/* 👑 COMPOSICIÓN MAESTRA EN 4K (17 PLANOS CINEMATOGRÁFICOS): HARRY KANE (16:9) */}
      <Composition
        id="HarryKaneBloque1Master"
        component={HarryKaneBloque1Master}
        durationInFrames={4127}
        fps={30}
        width={3840}
        height={2160}
      />
      <Composition
        id="HarryKane4KMaster"
        component={HarryKaneBloque1Master}
        durationInFrames={4127}
        fps={30}
        width={3840}
        height={2160}
      />

      {/* 🎬 BLOQUE 2 EN 4K (10 PLANOS CINEMATOGRÁFICOS): EL DESCARTE & EL CALVARIO DE LAS CESIONES (16:9) */}
      <Composition
        id="HarryKaneBloque2Master"
        component={HarryKaneBloque2Master}
        durationInFrames={2878}
        fps={30}
        width={3840}
        height={2160}
      />

      {/* 🎬 BLOQUE 3 EN 4K (9 PLANOS CINEMATOGRÁFICOS): EL PURGATORIO DE LAS 6 FINALES (16:9) */}
      <Composition
        id="HarryKaneBloque3Master"
        component={HarryKaneBloque3Master}
        durationInFrames={4015}
        fps={30}
        width={3840}
        height={2160}
        defaultProps={{
          part1Frames: 2616,
          part2Frames: 1399,
        }}
      />
      <Composition
        id="HarryKaneBloque3"
        component={HarryKaneBloque3Master}
        durationInFrames={4015}
        fps={30}
        width={3840}
        height={2160}
        defaultProps={{
          part1Frames: 2616,
          part2Frames: 1399,
        }}
      />

      {/* 🎬 BLOQUE 4 EN 4K (7 PLANOS CINEMATOGRÁFICOS): LA APUESTA DE MÚNICH Y EL AÑO INVICTO (16:9) */}
      <Composition
        id="HarryKaneBloque4Master"
        component={HarryKaneBloque4Master}
        durationInFrames={3106}
        fps={30}
        width={3840}
        height={2160}
        defaultProps={{
          part1Frames: 1946,
          part2Frames: 1160,
        }}
      />

      {/* 🎬 BLOQUE 5 EN 4K (7 PLANOS CINEMATOGRÁFICOS): LA CONSAGRACIÓN Y EL LLAMADO A TU VIDA (16:9) */}
      <Composition
        id="HarryKaneBloque5Master"
        component={HarryKaneBloque5Master}
        durationInFrames={3274}
        fps={30}
        width={3840}
        height={2160}
        defaultProps={{
          part1Frames: 1418,
          part2Frames: 1856,
        }}
      />

      {/* 📱 GANCHO VERTICAL DE ALTO IMPACTO (TIKTOK / REELS / SHORTS) (9:16) */}
      <Composition
        id="HarryKaneHookShort"
        component={HarryKaneHookShort}
        durationInFrames={690}
        fps={30}
        width={1080}
        height={1920}
      />

      {/* 📱 BLOQUE 1 VERTICAL (9:16) - EL ESPEJO & A MENOS QUE DECIDA RENDIRSE (63.08 SEGUNDOS) */}
      <Composition
        id="HarryKaneBloque1Short"
        component={HarryKaneBloque1Short}
        durationInFrames={1892}
        fps={30}
        width={1080}
        height={1920}
      />

      {/* 📱 BLOQUE 2 VERTICAL (9:16) - EL NIÑO DESCARTADO POR GORDITO (58 SEGUNDOS) */}
      <Composition
        id="HarryKaneBloque2Short"
        component={HarryKaneBloque2Short}
        durationInFrames={1740}
        fps={30}
        width={1080}
        height={1920}
      />

      {/* 📱 BLOQUE 3 VERTICAL (9:16) - LOS HOMBRES DE HIERRO & LA FACTURA PENDIENTE (46 SEGUNDOS) */}
      <Composition
        id="HarryKaneBloque3Short"
        component={HarryKaneBloque3Short}
        durationInFrames={1399}
        fps={30}
        width={1080}
        height={1920}
      />

      {/* 📱 BLOQUE 4 VERTICAL (9:16) - CERO EXCUSAS EN MÚNICH & RÉCORD EN BUNDESLIGA (38.6 SEGUNDOS) */}
      <Composition
        id="HarryKaneBloque4Short"
        component={HarryKaneBloque4Short}
        durationInFrames={1160}
        fps={30}
        width={1080}
        height={1920}
      />

      {/* 📱 BLOQUE 5 VERTICAL (9:16) - LA GLORIA ES PARA LOS HOMBRES TERCOS & LLAMADO A LA ACCIÓN (61.8 SEGUNDOS) */}
      <Composition
        id="HarryKaneBloque5Short"
        component={HarryKaneBloque5Short}
        durationInFrames={1856}
        fps={30}
        width={1080}
        height={1920}
      />

      {/* 🚀 VÍDEO DE PRUEBA (5 SEGUNDOS): LISTO PARA EDITAR */}
      <Composition
        id="ListoParaEditar"
        component={ListoParaEditar}
        durationInFrames={150}
        fps={30}
        width={1920}
        height={1080}
      />

      <Folder name="Elements">
        <Composition
          id="Logo"
          component={Logo}
          durationInFrames={150}
          fps={30}
          width={1920}
          height={1080}
          defaultProps={{
            logoColor1: "#91EAE4",
            logoColor2: "#86A8E7",
          }}
        />
        <Composition
          id="Title"
          component={Title}
          durationInFrames={115}
          fps={30}
          width={1920}
          height={1080}
          defaultProps={{
            titleText: "Welcome to Remotion",
            titleColor: "#000000",
          }}
        />
      </Folder>

      <Composition
        id="HelloWorld"
        component={HelloWorld}
        durationInFrames={150}
        fps={30}
        width={1920}
        height={1080}
        defaultProps={{
          titleText: "Welcome to Remotion",
          titleColor: "#000000",
        }}
      />
    </>
  );
};
