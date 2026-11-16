import React, { useMemo } from "react";
import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";

interface Props {
  theme?: "gold" | "crimson" | "deepNavy" | "noir";
  intensity?: number;
}

export const Cinematic4KBackground: React.FC<Props> = ({
  theme = "noir",
  intensity = 1,
}) => {
  const frame = useCurrentFrame();

  // Color mappings
  const themeColors = useMemo(() => {
    switch (theme) {
      case "gold":
        return {
          glowPrimary: "rgba(229, 184, 66, 0.22)",
          glowSecondary: "rgba(245, 222, 136, 0.12)",
          particle: "rgba(229, 184, 66, 0.6)",
          accentBeam: "rgba(212, 175, 55, 0.08)",
        };
      case "crimson":
        return {
          glowPrimary: "rgba(239, 68, 68, 0.24)",
          glowSecondary: "rgba(220, 38, 38, 0.14)",
          particle: "rgba(248, 113, 113, 0.6)",
          accentBeam: "rgba(239, 68, 68, 0.09)",
        };
      case "deepNavy":
        return {
          glowPrimary: "rgba(56, 189, 248, 0.20)",
          glowSecondary: "rgba(99, 102, 241, 0.14)",
          particle: "rgba(56, 189, 248, 0.6)",
          accentBeam: "rgba(129, 140, 248, 0.09)",
        };
      case "noir":
      default:
        return {
          glowPrimary: "rgba(255, 255, 255, 0.08)",
          glowSecondary: "rgba(203, 213, 225, 0.05)",
          particle: "rgba(255, 255, 255, 0.4)",
          accentBeam: "rgba(255, 255, 255, 0.04)",
        };
    }
  }, [theme]);

  // Dynamic light breathing
  const pulse = interpolate(
    Math.sin(frame / 24),
    [-1, 1],
    [0.92, 1.12]
  );

  const orbitalX = interpolate(
    Math.sin(frame / 45),
    [-1, 1],
    [-120, 120]
  );

  const orbitalY = interpolate(
    Math.cos(frame / 35),
    [-1, 1],
    [-80, 80]
  );

  // Moving light sweep across screen
  const beamX = interpolate(
    (frame % 180) / 180,
    [0, 1],
    [-1200, 5000]
  );

  // 18 Floating organic particles with pseudo-random deterministic motion
  const particles = useMemo(() => {
    return Array.from({ length: 18 }).map((_, i) => ({
      id: i,
      x: (i * 211) % 3840,
      yBase: (i * 137) % 2160,
      size: 4 + (i % 5) * 3,
      speed: 0.6 + (i % 4) * 0.4,
      driftPhase: i * 1.3,
    }));
  }, []);

  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#07080B",
        width: 3840,
        height: 2160,
        overflow: "hidden",
      }}
    >
      {/* 1. LUZ PRINCIPAL EN ÓRBITA CONTINUA */}
      <div
        style={{
          position: "absolute",
          top: "42%",
          left: "50%",
          width: "2200px",
          height: "2200px",
          transform: `translate(calc(-50% + ${orbitalX}px), calc(-50% + ${orbitalY}px)) scale(${pulse * intensity})`,
          background: `radial-gradient(circle, ${themeColors.glowPrimary} 0%, rgba(7, 8, 11, 0) 70%)`,
          filter: "blur(140px)",
          pointerEvents: "none",
        }}
      />

      {/* 2. LUZ SECUNDARIA DE CONTRAPUNTO */}
      <div
        style={{
          position: "absolute",
          top: "30%",
          left: "25%",
          width: "1600px",
          height: "1600px",
          transform: `translate(-50%, -50%) scale(${1.2 - pulse * 0.2})`,
          background: `radial-gradient(circle, ${themeColors.glowSecondary} 0%, rgba(7, 8, 11, 0) 65%)`,
          filter: "blur(120px)",
          pointerEvents: "none",
        }}
      />

      {/* 3. HAZ DE LUZ CINEMATOGRÁFICO EN MOVIMIENTO (LIGHT SWEEP) */}
      <div
        style={{
          position: "absolute",
          top: "-200px",
          left: `${beamX}px`,
          width: "800px",
          height: "2600px",
          transform: "rotate(25deg)",
          background: `linear-gradient(90deg, transparent 0%, ${themeColors.accentBeam} 50%, transparent 100%)`,
          filter: "blur(50px)",
          pointerEvents: "none",
        }}
      />

      {/* 4. CAMPO DE PARTÍCULAS FLOTANTES EN 4K (BOKEH / POLVO ILUMINADO) */}
      {particles.map((p) => {
        const floatY = (p.yBase - frame * p.speed) % 2300;
        const driftX = Math.sin(frame / 30 + p.driftPhase) * 60;
        const currentY = floatY < -100 ? floatY + 2300 : floatY;
        const pOpacity = interpolate(
          Math.sin(frame / 20 + p.id),
          [-1, 1],
          [0.2, 0.75]
        );

        return (
          <div
            key={p.id}
            style={{
              position: "absolute",
              left: `${p.x + driftX}px`,
              top: `${currentY}px`,
              width: `${p.size * 2}px`,
              height: `${p.size * 2}px`,
              borderRadius: "50%",
              backgroundColor: themeColors.particle,
              opacity: pOpacity * intensity,
              boxShadow: `0 0 ${p.size * 4}px ${themeColors.particle}`,
              filter: `blur(${p.size > 8 ? 2 : 0}px)`,
              pointerEvents: "none",
            }}
          />
        );
      })}

      {/* 5. GRID TÉCNICO ULTRA-FINO (ESTILO DOCUMENTAL HBO) */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(255, 255, 255, 0.018) 2px, transparent 2px), linear-gradient(90deg, rgba(255, 255, 255, 0.018) 2px, transparent 2px)",
          backgroundSize: "160px 160px",
          opacity: 0.65,
          pointerEvents: "none",
        }}
      />

      {/* 6. VIÑETA OSCURA DE ENCUADRE */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(circle at center, transparent 38%, rgba(0, 0, 0, 0.88) 100%)",
          pointerEvents: "none",
        }}
      />
    </AbsoluteFill>
  );
};
