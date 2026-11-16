import React from "react";
import {
  AbsoluteFill,
  Img,
  interpolate,
  Sequence,
  staticFile,
  useCurrentFrame,
} from "remotion";
import { Cinematic4KBackground } from "../../HarryKane4K/Cinematic4KBackground";

// 💥 CONSTANTES & FÍSICA DE FRACTURA / DESINTEGRACIÓN (SEGUNDO 0:13 | FRAME 115-138)
const HEADLINE_CHARS = "HARRY TIENE SOLO 8 AÑOS".split("");

// Desplazamientos y rotaciones balísticas pseudo-aleatorias deterministas por letra
const CHAR_PHYSICS = [
  { dx: -380, dy: -140, rot: -80, scale: 0.3 },  // 0: H
  { dx: -320, dy: 60, rot: 45, scale: 0.25 },    // 1: A
  { dx: -280, dy: -90, rot: -75, scale: 0.35 },  // 2: R
  { dx: -230, dy: 80, rot: 55, scale: 0.25 },    // 3: R
  { dx: -190, dy: -160, rot: -95, scale: 0.3 },  // 4: Y
  { dx: 0, dy: 0, rot: 0, scale: 1 },             // 5: ' '
  { dx: -140, dy: -120, rot: 40, scale: 0.35 },  // 6: T
  { dx: -100, dy: 70, rot: -50, scale: 0.25 },   // 7: I
  { dx: -60, dy: -150, rot: 65, scale: 0.35 },   // 8: E
  { dx: -20, dy: 65, rot: -45, scale: 0.3 },     // 9: N
  { dx: 30, dy: -130, rot: 60, scale: 0.25 },    // 10: E
  { dx: 0, dy: 0, rot: 0, scale: 1 },             // 11: ' '
  { dx: 60, dy: 85, rot: -70, scale: 0.35 },     // 12: S
  { dx: 110, dy: -150, rot: 50, scale: 0.35 },   // 13: O
  { dx: 160, dy: 75, rot: -65, scale: 0.25 },    // 14: L
  { dx: 210, dy: -160, rot: 80, scale: 0.3 },    // 15: O
  { dx: 0, dy: 0, rot: 0, scale: 1 },             // 16: ' '
  { dx: 260, dy: 70, rot: -95, scale: 0.35 },    // 17: 8
  { dx: 0, dy: 0, rot: 0, scale: 1 },             // 18: ' '
  { dx: 310, dy: -150, rot: 60, scale: 0.3 },    // 19: A
  { dx: 360, dy: 75, rot: -80, scale: 0.25 },    // 20: Ñ
  { dx: 410, dy: -130, rot: 70, scale: 0.35 },   // 21: O
  { dx: 460, dy: 90, rot: -90, scale: 0.3 },     // 22: S
];

// Micro-esquirlas y partículas incandescentes expulsadas en el estallido
const SHARD_PARTICLES = [
  { vx: -420, vy: -120, size: 10, rot: 220, color: "#EF4444" },
  { vx: -360, vy: 90, size: 14, rot: -180, color: "#F5C518" },
  { vx: -480, vy: -50, size: 8, rot: 310, color: "#FFFFFF" },
  { vx: -290, vy: 110, size: 12, rot: -240, color: "#EF4444" },
  { vx: -200, vy: -160, size: 15, rot: 150, color: "#FCA5A5" },
  { vx: -120, vy: 100, size: 10, rot: -300, color: "#F5C518" },
  { vx: -50, vy: -170, size: 12, rot: 270, color: "#FFFFFF" },
  { vx: 40, vy: 95, size: 9, rot: -190, color: "#EF4444" },
  { vx: 110, vy: -160, size: 14, rot: 210, color: "#F5C518" },
  { vx: 190, vy: 85, size: 11, rot: -280, color: "#FFFFFF" },
  { vx: 270, vy: -150, size: 13, rot: 160, color: "#EF4444" },
  { vx: 340, vy: 100, size: 9, rot: -220, color: "#FCA5A5" },
  { vx: 420, vy: -130, size: 15, rot: 290, color: "#F5C518" },
  { vx: 470, vy: 80, size: 10, rot: -170, color: "#FFFFFF" },
  { vx: 520, vy: -60, size: 12, rot: 340, color: "#EF4444" },
  { vx: -310, vy: -140, size: 11, rot: -130, color: "#F5C518" },
  { vx: -160, vy: 90, size: 13, rot: 250, color: "#FFFFFF" },
  { vx: 160, vy: -140, size: 8, rot: -210, color: "#EF4444" },
  { vx: 310, vy: 95, size: 12, rot: 180, color: "#F5C518" },
  { vx: 0, vy: -180, size: 16, rot: -90, color: "#FFFFFF" },
  { vx: -80, vy: 85, size: 10, rot: 280, color: "#EF4444" },
  { vx: 80, vy: 90, size: 11, rot: -260, color: "#F5C518" },
];

// 🌟 PARTÍCULAS DORADAS / DESTELLOS DE AMBICIÓN (CORTE 3: SUEÑA DESPIERTO CON CONVERTIRSE...)
const DREAM_PARTICLES = Array.from({ length: 36 }, (_, i) => ({
  x: 200 + ((i * 101) % 3440),
  yBase: 1350 + ((i * 67) % 650),
  speed: 1.1 + (i % 5) * 0.4,
  size: 5 + (i % 5) * 3,
  color: i % 3 === 0 ? "#F5C518" : i % 3 === 1 ? "#EF4444" : "#FFFFFF",
  swayAmp: 25 + (i % 4) * 15,
  swayFreq: 0.04 + (i % 3) * 0.02,
}));

export const Shot02ArsenalKid: React.FC = () => {
  const frame = useCurrentFrame();

  const zoom1 = interpolate(frame, [0, 140], [1.02, 1.12], {
    extrapolateRight: "clamp",
  });

  const zoom2 = interpolate(frame, [140, 225], [1.0, 1.07], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill style={{ width: 3840, height: 2160, overflow: "hidden", backgroundColor: "#07080B" }}>
      {/* 🎬 CORTE 1 (Frames 0 - 140 | 4.66s): FOTO REAL DE HARRY KANE A LOS 8 AÑOS EN EL ARSENAL */}
      <Sequence from={0} durationInFrames={140}>
        <div style={{ position: "absolute", inset: 0, overflow: "hidden" }}>
          <Cinematic4KBackground theme="crimson" intensity={1.1} />

          {/* Central Portrait Container (slightly raised to leave ample space for lower-third title) */}
          <div
            style={{
              position: "absolute",
              top: "140px",
              left: "50%",
              transform: `translateX(-50%) scale(${zoom1})`,
              width: "1060px",
              height: "1380px",
              borderRadius: "28px",
              overflow: "hidden",
              border: "4px solid rgba(239, 68, 68, 0.7)",
              boxShadow: "0 30px 90px rgba(0,0,0,0.95), 0 0 70px rgba(220, 38, 38, 0.4)",
            }}
          >
            {/* Real 8-year-old Harry Kane in red Dreamcast Arsenal jersey */}
            <Img
              src={staticFile("kane_arsenal_kid_real_2001.png")}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center 20%",
                filter: "contrast(1.1) saturate(1.1)",
              }}
            />

            {/* Red Gradient overlay at bottom */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(180deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.3) 60%, rgba(10,12,18,0.95) 100%)",
              }}
            />

            {/* Archival Stamp */}
            <div
              style={{
                position: "absolute",
                bottom: "35px",
                left: "35px",
                right: "35px",
                backgroundColor: "rgba(10, 12, 18, 0.92)",
                backdropFilter: "blur(14px)",
                padding: "20px 28px",
                borderRadius: "18px",
                border: "1.5px solid rgba(239, 68, 68, 0.4)",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div>
                <div style={{ color: "#EF4444", fontWeight: 900, fontSize: "24px", letterSpacing: "3px" }}>
                  ARSENAL FC · CANTERA HALE END
                </div>
                <div style={{ color: "#FFFFFF", fontWeight: 800, fontSize: "28px", marginTop: "4px" }}>
                  HARRY KANE (8 AÑOS) · DREAMCAST
                </div>
              </div>
              <div
                style={{
                  backgroundColor: "rgba(239,68,68,0.2)",
                  padding: "8px 18px",
                  borderRadius: "8px",
                  border: "1px solid #EF4444",
                  color: "#FCA5A5",
                  fontSize: "18px",
                  fontWeight: 900,
                  letterSpacing: "2px",
                }}
              >
                REGISTRO 2001
              </div>
            </div>
          </div>

          {/* 👑 PIE DE PÁGINA (LOWER THIRD) - TÍTULO ILUMINADO & FRACTURA CINEMATOGRÁFICA EN SEGUNDO 0:13 */}
          {(() => {
            const typingProgress = interpolate(frame, [10, 50], [0, HEADLINE_CHARS.length], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
            });
            const visibleLength = Math.floor(typingProgress);

            // Cursor visible únicamente durante el tecleo (frames 10 a 50)
            const showCursor = frame >= 10 && frame < 50;

            // Momento exacto de fractura: frame 115 (~0:13) hasta el frame 138
            const isShattering = frame >= 115;
            const shatterRaw = interpolate(frame, [115, 138], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
            });
            const shatterProgress = Math.pow(shatterRaw, 1.15); // Aceleración outward progresiva y natural

            // Desvanecimiento del badge superior
            const badgeOpacity = interpolate(frame, [115, 128], [1, 0], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
            });
            const badgeY = interpolate(frame, [115, 128], [0, -35], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
            });
            const badgeBlur = interpolate(frame, [115, 128], [0, 8], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
            });

            // Disolución y ensanchamiento de la barra luminosa inferior
            const barScaleX = 1 + shatterRaw * 0.45;
            const barOpacity = Math.max(0, 1 - shatterRaw * 1.25);
            const barBlur = shatterRaw * 16;

            // Destello de impacto cinemático al instante frame 115
            const shockwaveProgress = interpolate(frame, [115, 126], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
            });
            const shockwaveOpacity =
              frame >= 115 && frame <= 126 ? (1 - shockwaveProgress) * 0.9 : 0;
            const shockwaveScale = 0.6 + shockwaveProgress * 1.5;

            return (
              <div
                style={{
                  position: "absolute",
                  bottom: "165px",
                  left: 0,
                  right: 0,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  zIndex: 30,
                  pointerEvents: "none",
                }}
              >
                {/* Destello de impacto cinemático al fracturarse (Frame 115-126) */}
                {shockwaveOpacity > 0 && (
                  <div
                    style={{
                      position: "absolute",
                      width: "1800px",
                      height: "360px",
                      transform: `scale(${shockwaveScale})`,
                      background:
                        "radial-gradient(ellipse at center, rgba(255, 255, 255, 0.95) 0%, rgba(239, 68, 68, 0.6) 35%, rgba(245, 197, 24, 0.3) 60%, transparent 80%)",
                      opacity: shockwaveOpacity,
                      filter: "blur(10px)",
                      pointerEvents: "none",
                    }}
                  />
                )}

                {/* Micro-esquirlas incandescentes proyectadas (Frame 115-138) */}
                {isShattering &&
                  frame < 138 &&
                  SHARD_PARTICLES.map((shard, idx) => {
                    const sx = shard.vx * shatterProgress;
                    const sy = shard.vy * shatterProgress + 35 * Math.pow(shatterRaw, 2);
                    const sOp = Math.max(0, 1 - shatterRaw * 1.2);
                    return (
                      <div
                        key={idx}
                        style={{
                          position: "absolute",
                          width: `${shard.size}px`,
                          height: `${shard.size}px`,
                          backgroundColor: shard.color,
                          borderRadius: "2px",
                          transform: `translate(${sx}px, ${sy}px) rotate(${shard.rot * shatterProgress}deg)`,
                          opacity: sOp,
                          boxShadow: `0 0 16px ${shard.color}`,
                          pointerEvents: "none",
                        }}
                      />
                    );
                  })}

                {/* Badge de Expediente con punto pulsante */}
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "16px",
                    padding: "12px 34px",
                    backgroundColor: "rgba(15, 18, 26, 0.92)",
                    border: "1.5px solid rgba(239, 68, 68, 0.6)",
                    borderRadius: "100px",
                    backdropFilter: "blur(16px)",
                    boxShadow:
                      "0 8px 24px rgba(0,0,0,0.6), 0 0 30px rgba(239, 68, 68, 0.25)",
                    marginBottom: "20px",
                    opacity: badgeOpacity,
                    transform: `translateY(${badgeY}px)`,
                    filter: `blur(${badgeBlur}px)`,
                  }}
                >
                  <div
                    style={{
                      width: "14px",
                      height: "14px",
                      borderRadius: "50%",
                      backgroundColor: "#EF4444",
                      boxShadow: "0 0 18px #EF4444, 0 0 35px #EF4444",
                    }}
                  />
                  <span
                    style={{
                      fontFamily: "Cabinet Grotesk, Montserrat, sans-serif",
                      fontSize: "28px",
                      fontWeight: 900,
                      color: "#FCA5A5",
                      letterSpacing: "6px",
                      textTransform: "uppercase",
                    }}
                  >
                    EXPEDIENTE INFANTIL · 2001
                  </span>
                </div>

                {/* Titular Imponente e Iluminado (140px, Letras Desintegrándose) */}
                <h2
                  style={{
                    fontSize: "140px",
                    fontWeight: 950,
                    color: "#FFFFFF",
                    margin: 0,
                    lineHeight: 1.05,
                    letterSpacing: "6px",
                    textTransform: "uppercase",
                    textAlign: "center",
                    fontFamily: "Cabinet Grotesk, Montserrat, sans-serif",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexWrap: "nowrap",
                  }}
                >
                  {HEADLINE_CHARS.map((char, i) => {
                    // Durante el tecleo (frames 10-50), omitir letras no alcanzadas
                    if (!isShattering && i >= visibleLength) {
                      return null;
                    }

                    if (char === " ") {
                      return (
                        <span
                          key={i}
                          style={{
                            display: "inline-block",
                            width: "36px",
                          }}
                        >
                          &nbsp;
                        </span>
                      );
                    }

                    if (!isShattering) {
                      return (
                        <span
                          key={i}
                          style={{
                            display: "inline-block",
                            textShadow:
                              "0 0 30px rgba(255, 255, 255, 0.75), 0 0 70px rgba(239, 68, 68, 0.5), 0 12px 40px rgba(0, 0, 0, 0.95)",
                          }}
                        >
                          {char}
                        </span>
                      );
                    }

                    // Dinámica de fractura por letra individual (Frames 115-138)
                    const phys = CHAR_PHYSICS[i] || { dx: 0, dy: 0, rot: 0, scale: 1 };
                    const tx = phys.dx * shatterProgress;
                    const ty = phys.dy * shatterProgress + 35 * Math.pow(shatterRaw, 2);
                    const rot = phys.rot * shatterProgress;
                    const scale = 1 - (1 - phys.scale) * shatterProgress;
                    const opacity = Math.max(0, 1 - shatterRaw * 1.15);
                    const blur = shatterRaw * 14;

                    return (
                      <span
                        key={i}
                        style={{
                          display: "inline-block",
                          transform: `translate(${tx}px, ${ty}px) rotate(${rot}deg) scale(${scale})`,
                          opacity,
                          filter: `blur(${blur}px)`,
                          textShadow: `0 0 ${30 * (1 - shatterRaw)}px rgba(255, 255, 255, 0.75), 0 0 ${60 * (1 - shatterRaw)}px rgba(239, 68, 68, 0.5)`,
                        }}
                      >
                        {char}
                      </span>
                    );
                  })}

                  {showCursor && (
                    <span
                      style={{
                        display: "inline-block",
                        width: "12px",
                        height: "125px",
                        backgroundColor: "#EF4444",
                        marginLeft: "14px",
                        borderRadius: "3px",
                        boxShadow: "0 0 20px #EF4444, 0 0 40px #EF4444",
                      }}
                    />
                  )}
                </h2>

                {/* Barra luminosa de acento inferior con gradiente rojo/dorado */}
                <div
                  style={{
                    marginTop: "24px",
                    width: "720px",
                    height: "6px",
                    borderRadius: "3px",
                    background:
                      "linear-gradient(90deg, transparent 0%, #EF4444 25%, #F5C518 50%, #EF4444 75%, transparent 100%)",
                    boxShadow:
                      "0 0 25px rgba(239, 68, 68, 0.8), 0 0 45px rgba(245, 197, 24, 0.6)",
                    transform: `scaleX(${barScaleX})`,
                    opacity: barOpacity,
                    filter: `blur(${barBlur}px)`,
                  }}
                />
              </div>
            );
          })()}
        </div>
      </Sequence>

      {/* 🎬 CORTE 2 (Frames 140 - 225 | 2.83s | Global 425 - 510): FOTO DEL EQUIPO COMPLETO ARSENAL Y FOCO EN KANE */}
      <Sequence from={140} durationInFrames={85}>
        <div style={{ position: "absolute", inset: 0, overflow: "hidden" }}>
          <div
            style={{
              position: "absolute",
              inset: 0,
              transform: `scale(${zoom2})`,
              transition: "transform 0.1s linear",
            }}
          >
            <Img
              src={staticFile("arsenal_academy_team_dreamcast_2001.png")}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                filter: "contrast(1.15) brightness(0.85) saturate(1.1)",
              }}
            />
          </div>

          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "radial-gradient(circle at 20% 75%, rgba(239,68,68,0.2) 0%, rgba(6,7,11,0.85) 75%)",
            }}
          />

          {/* Yellow Focus Ring over Young Harry Kane (front row, left side) */}
          <div
            style={{
              position: "absolute",
              left: "620px",
              bottom: "120px",
              width: "580px",
              height: "900px",
              borderRadius: "28px",
              border: "4px solid #F5C518",
              boxShadow: "0 0 50px rgba(245, 197, 24, 0.6), inset 0 0 30px rgba(245, 197, 24, 0.2)",
              pointerEvents: "none",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: "-26px",
                left: "24px",
                backgroundColor: "#F5C518",
                color: "#07080B",
                padding: "8px 24px",
                borderRadius: "12px",
                fontWeight: 900,
                fontSize: "26px",
                letterSpacing: "2px",
              }}
            >
              HARRY KANE #9
            </div>
          </div>

          {/* Badge Archivo Histórico Superior */}
          <div
            style={{
              position: "absolute",
              top: "220px",
              right: "160px",
              display: "flex",
              alignItems: "center",
              gap: "16px",
              padding: "14px 34px",
              backgroundColor: "rgba(10, 12, 18, 0.92)",
              backdropFilter: "blur(16px)",
              borderRadius: "100px",
              border: "1.5px solid rgba(245, 197, 24, 0.6)",
              boxShadow: "0 10px 30px rgba(0,0,0,0.8), 0 0 25px rgba(245, 197, 24, 0.2)",
              zIndex: 30,
            }}
          >
            <div
              style={{
                width: "12px",
                height: "12px",
                borderRadius: "50%",
                backgroundColor: "#F5C518",
                boxShadow: "0 0 14px #F5C518",
              }}
            />
            <span
              style={{
                fontFamily: "Cabinet Grotesk, Montserrat, sans-serif",
                fontSize: "26px",
                fontWeight: 900,
                color: "#FFFFFF",
                letterSpacing: "4px",
                textTransform: "uppercase",
              }}
            >
              CANTERA ARSENAL FC · PLANTILLA SUB-9 (2001)
            </span>
          </div>
        </div>
      </Sequence>

      {/* 🎬 CORTE 3 (Frames 225 - 345 | 4.0s | Global 510 - 630): TITULAR MONUMENTAL E ILUMINADO "SUEÑA DESPIERTO..." */}
      <Sequence from={225} durationInFrames={120}>
        {(() => {
          const c3Frame = frame - 225;

          // Animación de Entrada Suave (Frames 0 - 24 de Corte 3 | Global 510 - 534)
          const enterProgress = interpolate(c3Frame, [0, 24], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          });
          const enterScale = interpolate(enterProgress, [0, 1], [0.93, 1.0]);
          const enterY = interpolate(enterProgress, [0, 1], [40, 0]);
          const enterOpacity = enterProgress;

          // Animación de Salida Cinemática (Frames 102 - 120 de Corte 3 | Global 612 - 630)
          const exitProgress = interpolate(c3Frame, [102, 120], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          });
          const exitOpacity = 1 - exitProgress;
          const exitY = -exitProgress * 25;
          const exitBlur = exitProgress * 12;

          const containerOpacity = enterOpacity * exitOpacity;
          const containerY = enterY + exitY;
          const containerScale = enterScale;

          // Pulso rítmico dorado para el badge y halo
          const pulse = Math.sin(c3Frame * 0.12) * 0.15 + 0.85;

          return (
            <div style={{ position: "absolute", inset: 0, overflow: "hidden" }}>
              {/* Fondo Cinemático: Estadio majestuoso bajo la lluvia y focos nocturnos (El sueño del goleador) */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  transform: `scale(${1.0 + c3Frame * 0.0006})`,
                }}
              >
                <Img
                  src={staticFile("estadio_lluvia_nocturna_focos.jpg")}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    filter: "contrast(1.2) brightness(0.65) saturate(1.1)",
                  }}
                />
              </div>

              {/* Degradados cinematográficos multicapa para garantizar contraste supremo */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "radial-gradient(circle at center, rgba(10, 14, 24, 0.4) 0%, rgba(6, 8, 12, 0.88) 70%, rgba(4, 5, 8, 0.98) 100%)",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(180deg, rgba(6,7,11,0.7) 0%, rgba(6,7,11,0.1) 40%, rgba(6,7,11,0.3) 60%, rgba(6,7,11,0.92) 100%)",
                }}
              />

              {/* Partículas doradas flotantes de ambición e ilusión infantil */}
              {DREAM_PARTICLES.map((p, idx) => {
                const py = p.yBase - c3Frame * p.speed * 2.2;
                const px = p.x + Math.sin(c3Frame * p.swayFreq + idx) * p.swayAmp;
                const pOp = Math.sin((c3Frame + idx * 5) * 0.08) * 0.35 + 0.65;
                return (
                  <div
                    key={idx}
                    style={{
                      position: "absolute",
                      left: `${px}px`,
                      top: `${py}px`,
                      width: `${p.size}px`,
                      height: `${p.size}px`,
                      borderRadius: "50%",
                      backgroundColor: p.color,
                      opacity: pOp * containerOpacity,
                      boxShadow: `0 0 ${p.size * 2.5}px ${p.color}`,
                      pointerEvents: "none",
                    }}
                  />
                );
              })}

              {/* Halo de luz central (Bloom multicapa) detrás del texto */}
              <div
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: `translate(-50%, -50%) scale(${containerScale})`,
                  width: "2400px",
                  height: "800px",
                  background:
                    "radial-gradient(ellipse at center, rgba(245, 197, 24, 0.16) 0%, rgba(239, 68, 68, 0.12) 40%, transparent 75%)",
                  filter: "blur(40px)",
                  opacity: containerOpacity * pulse,
                  pointerEvents: "none",
                }}
              />

              {/* Contenedor Principal del Gran Titular Iluminado */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  transform: `translateY(${containerY}px) scale(${containerScale})`,
                  opacity: containerOpacity,
                  filter: `blur(${exitBlur}px)`,
                  zIndex: 25,
                  pointerEvents: "none",
                }}
              >
                {/* Badge Institucional Iluminado */}
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "16px",
                    padding: "14px 38px",
                    backgroundColor: "rgba(12, 16, 26, 0.94)",
                    border: "1.5px solid rgba(245, 197, 24, 0.6)",
                    borderRadius: "100px",
                    backdropFilter: "blur(20px)",
                    boxShadow:
                      "0 10px 30px rgba(0,0,0,0.7), 0 0 35px rgba(245, 197, 24, 0.35)",
                    marginBottom: "36px",
                  }}
                >
                  <div
                    style={{
                      width: "14px",
                      height: "14px",
                      borderRadius: "50%",
                      backgroundColor: "#F5C518",
                      boxShadow: "0 0 16px #F5C518, 0 0 30px #EF4444",
                    }}
                  />
                  <span
                    style={{
                      fontFamily: "Cabinet Grotesk, Montserrat, sans-serif",
                      fontSize: "28px",
                      fontWeight: 900,
                      color: "#FDE047",
                      letterSpacing: "6px",
                      textTransform: "uppercase",
                    }}
                  >
                    ILUSIÓN INFANTIL · CANTERA ARSENAL FC 2001
                  </span>
                </div>

                {/* Línea 1 del Gran Titular */}
                <h1
                  style={{
                    margin: 0,
                    fontSize: "92px",
                    fontWeight: 900,
                    color: "#F1F5F9",
                    letterSpacing: "8px",
                    textTransform: "uppercase",
                    textAlign: "center",
                    fontFamily: "Cabinet Grotesk, Montserrat, sans-serif",
                    lineHeight: 1.1,
                    textShadow:
                      "0 0 25px rgba(255, 255, 255, 0.5), 0 0 50px rgba(245, 197, 24, 0.3), 0 10px 30px rgba(0,0,0,0.9)",
                  }}
                >
                  SUEÑA DESPIERTO CON CONVERTIRSE
                </h1>

                {/* Línea 2 del Gran Titular: EN EL PRÓXIMO GRAN GOLEADOR */}
                <h1
                  style={{
                    margin: "18px 0 0 0",
                    fontSize: "136px",
                    fontWeight: 950,
                    color: "#FFFFFF",
                    letterSpacing: "8px",
                    textTransform: "uppercase",
                    textAlign: "center",
                    fontFamily: "Cabinet Grotesk, Montserrat, sans-serif",
                    lineHeight: 1.05,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "28px",
                    textShadow:
                      "0 0 40px rgba(255, 255, 255, 0.85), 0 0 85px rgba(245, 197, 24, 0.7), 0 0 130px rgba(239, 68, 68, 0.4), 0 15px 45px rgba(0,0,0,0.95)",
                  }}
                >
                  <span>EN EL PRÓXIMO</span>
                  <span
                    style={{
                      color: "#F5C518",
                      textShadow:
                        "0 0 45px rgba(245, 197, 24, 0.95), 0 0 90px rgba(245, 197, 24, 0.7), 0 0 140px rgba(239, 68, 68, 0.5), 0 15px 45px rgba(0,0,0,0.95)",
                    }}
                  >
                    GRAN GOLEADOR
                  </span>
                </h1>

                {/* Barra Luminosa Inferior de Acento Dorado & Carmesí */}
                <div
                  style={{
                    marginTop: "36px",
                    width: "880px",
                    height: "7px",
                    borderRadius: "4px",
                    background:
                      "linear-gradient(90deg, transparent 0%, #F5C518 20%, #EF4444 50%, #F5C518 80%, transparent 100%)",
                    boxShadow:
                      "0 0 25px rgba(245, 197, 24, 0.85), 0 0 45px rgba(239, 68, 68, 0.6)",
                  }}
                />
              </div>

              {/* Viñeta Cinematográfica Perimetral */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  boxShadow: "inset 0 0 260px rgba(0,0,0,0.92)",
                  pointerEvents: "none",
                }}
              />
            </div>
          );
        })()}
      </Sequence>
    </AbsoluteFill>
  );
};
