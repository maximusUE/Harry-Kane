import React from "react";
import {
  AbsoluteFill,
  Audio,
  Sequence,
  staticFile,
  useCurrentFrame,
} from "remotion";
import { CytmDocumentaryOverlay } from "../components/CytmDocumentaryOverlay";
import { WordByWordSubtitles } from "../components/WordByWordSubtitles";
import subtitleChunks from "../../public/bloque1_short_subtitle_chunks.json";

export const HarryKaneBloque1Short: React.FC = () => {
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
      {/* 🎙️ PISTA MAESTRA DE VOZ DON CÉSAR: PARTE 2 BLOQUE 1 (63.08s = 1892 frames) */}
      <Audio src={staticFile("bloque1_part2.wav")} volume={1} />

      {/* 🎵 BANDA SONORA HIPNÓTICA */}
      <Audio src={staticFile("hypnotic_ambient_flow.mp3")} volume={0.25} />

      {/* 🔊 SFX SINCRONIZADOS */}
      <Sequence from={0} durationInFrames={40}>
        <Audio src={staticFile("sfx/whoosh.mp3")} volume={0.65} />
      </Sequence>
      <Sequence from={461} durationInFrames={40}>
        <Audio src={staticFile("sfx/transicion-b.mp3")} volume={0.5} />
      </Sequence>
      <Sequence from={649} durationInFrames={40}>
        <Audio src={staticFile("sfx/transicion-c.mp3")} volume={0.5} />
      </Sequence>
      <Sequence from={829} durationInFrames={40}>
        <Audio src={staticFile("sfx/bloque.mp3")} volume={0.5} />
      </Sequence>
      <Sequence from={1279} durationInFrames={50}>
        <Audio src={staticFile("sfx/subida.mp3")} volume={0.55} />
      </Sequence>
      <Sequence from={1541} durationInFrames={60}>
        <Audio src={staticFile("sfx/fanfarria.mp3")} volume={0.65} />
      </Sequence>
      <Sequence from={1830} durationInFrames={60}>
        <Audio src={staticFile("sfx/impact-bass-1.mp3")} volume={0.85} />
      </Sequence>

      {/* 🎬 SECUENCIA VISUAL VERTICAL (9:16) */}
      {/* Corte 1 (f0 -> f461): Este video no es sobre Harry Kane. Se trata de ti. */}
      <Sequence from={0} durationInFrames={461}>
        <AbsoluteFill
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "0 60px",
            background: "radial-gradient(circle at center, rgba(30, 40, 60, 0.6) 0%, #07080B 80%)",
          }}
        >
          <div
            style={{
              padding: "12px 28px",
              borderRadius: "999px",
              border: "1px solid rgba(245, 197, 24, 0.4)",
              background: "rgba(245, 197, 24, 0.08)",
              color: "#F5C518",
              fontSize: "26px",
              fontWeight: 800,
              letterSpacing: "4px",
              marginBottom: "30px",
            }}
          >
            ROMPAMOS LA 4TA PARED
          </div>
          <div
            style={{
              fontSize: "64px",
              fontWeight: 900,
              color: "#FFFFFF",
              textAlign: "center",
              lineHeight: 1.15,
            }}
          >
            ESTE VIDEO SE TRATA DE <span style={{ color: "#38BDF8" }}>TI</span>
          </div>
        </AbsoluteFill>
      </Sequence>

      {/* Corte 2 (f461 -> f649): 20 kilos de más */}
      <Sequence from={461} durationInFrames={188}>
        <AbsoluteFill
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "0 60px",
            background: "radial-gradient(circle at center, rgba(40, 20, 25, 0.6) 0%, #07080B 80%)",
          }}
        >
          <div
            style={{
              padding: "12px 28px",
              borderRadius: "999px",
              border: "1px solid rgba(239, 68, 68, 0.4)",
              background: "rgba(239, 68, 68, 0.08)",
              color: "#EF4444",
              fontSize: "26px",
              fontWeight: 800,
              letterSpacing: "4px",
              marginBottom: "30px",
            }}
          >
            EL ESPEJO REAL
          </div>
          <div
            style={{
              fontSize: "68px",
              fontWeight: 900,
              color: "#FFFFFF",
              textAlign: "center",
              lineHeight: 1.15,
            }}
          >
            ¿TE SOBRAN <span style={{ color: "#EF4444" }}>20 KILOS?</span>
          </div>
        </AbsoluteFill>
      </Sequence>

      {/* Corte 3 (f649 -> f829): Lesión */}
      <Sequence from={649} durationInFrames={180}>
        <AbsoluteFill
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "0 60px",
            background: "radial-gradient(circle at center, rgba(30, 25, 50, 0.6) 0%, #07080B 80%)",
          }}
        >
          <div
            style={{
              padding: "12px 28px",
              borderRadius: "999px",
              border: "1px solid rgba(168, 85, 247, 0.4)",
              background: "rgba(168, 85, 247, 0.08)",
              color: "#A855F7",
              fontSize: "26px",
              fontWeight: 800,
              letterSpacing: "4px",
              marginBottom: "30px",
            }}
          >
            HERIDAS DE BATALLA
          </div>
          <div
            style={{
              fontSize: "64px",
              fontWeight: 900,
              color: "#FFFFFF",
              textAlign: "center",
              lineHeight: 1.15,
            }}
          >
            TU CUERPO <span style={{ color: "#A855F7" }}>NO TE TRAICIONÓ</span>
          </div>
        </AbsoluteFill>
      </Sequence>

      {/* Corte 4 (f829 -> f1279): Negocio Quebrado */}
      <Sequence from={829} durationInFrames={450}>
        <AbsoluteFill
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "0 60px",
            background: "radial-gradient(circle at center, rgba(50, 15, 15, 0.7) 0%, #07080B 80%)",
          }}
        >
          <div
            style={{
              padding: "12px 28px",
              borderRadius: "999px",
              border: "1px solid rgba(239, 68, 68, 0.4)",
              background: "rgba(239, 68, 68, 0.08)",
              color: "#EF4444",
              fontSize: "26px",
              fontWeight: 800,
              letterSpacing: "4px",
              marginBottom: "30px",
            }}
          >
            CRISIS FINANCIERA
          </div>
          <div
            style={{
              fontSize: "64px",
              fontWeight: 900,
              color: "#FFFFFF",
              textAlign: "center",
              lineHeight: 1.15,
            }}
          >
            ¿ENDEUDADO HASTA EL <span style={{ color: "#EF4444" }}>CUELLO?</span>
          </div>
        </AbsoluteFill>
      </Sequence>

      {/* Corte 5 (f1279 -> f1541): No te pido que me creas a ciegas */}
      <Sequence from={1279} durationInFrames={262}>
        <AbsoluteFill
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "0 60px",
            background: "radial-gradient(circle at center, rgba(30, 40, 20, 0.6) 0%, #07080B 80%)",
          }}
        >
          <div
            style={{
              fontSize: "64px",
              fontWeight: 900,
              color: "#F5C518",
              textAlign: "center",
              lineHeight: 1.15,
            }}
          >
            REGÁLATE LOS PRÓXIMOS MINUTOS
          </div>
        </AbsoluteFill>
      </Sequence>

      {/* Corte 6 (f1541 -> f1892): Nadie está condenado a perder para siempre */}
      <Sequence from={1541} durationInFrames={351}>
        <AbsoluteFill
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "0 60px",
            background: "radial-gradient(circle at center, rgba(40, 30, 10, 0.8) 0%, #07080B 80%)",
          }}
        >
          <div
            style={{
              fontSize: "60px",
              fontWeight: 900,
              color: "#FFFFFF",
              textAlign: "center",
              lineHeight: 1.15,
              marginBottom: "40px",
            }}
          >
            NADIE ESTÁ CONDENADO A PERDER
          </div>
          <div
            style={{
              fontSize: "72px",
              fontWeight: 900,
              color: "#10B981",
              textAlign: "center",
              lineHeight: 1.1,
              textShadow: "0 0 50px rgba(16, 185, 129, 0.6)",
            }}
          >
            A MENOS QUE DECIDA RENDIRSE
          </div>
        </AbsoluteFill>
      </Sequence>

      {/* 📝 SUBTÍTULOS DINÁMICOS WORD-LOCK (9:16) */}
      <WordByWordSubtitles
        chunks={subtitleChunks as any}
        frame={frame}
        variant="9x16"
      />

      {/* 👑 OVERLAY DOCUMENTAL CYTM OFICIAL */}
      <CytmDocumentaryOverlay
        channelName="MENTALIDAD DE CAMPEÓN"
        dossierName="HARRY KANE · SHORT 01"
        telemetryTag="REELS / TIKTOK / SHORTS"
      />
    </AbsoluteFill>
  );
};
