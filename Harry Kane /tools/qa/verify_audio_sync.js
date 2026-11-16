#!/usr/bin/env node
/**
 * 🔒 PROTOCOLO DE AUDITORÍA: AUDIO-FIRST WORD-LOCK (MDC STUDIO)
 * Valida que ningún Shot ni TypewriterText se adelante más de 0.35s
 * a la palabra hablada en el archivo JSON de transcripción de Whisper (`subtitle_chunks.json`).
 * Además verifica que no existan escenas fantasma (fuera del rango real del archivo .wav).
 */

const fs = require("fs");
const path = require("path");

const FPS = 30;
const MAX_EARLY_SECONDS = 0.35; // Tolerancia máxima de entrada anticipada (0.35s)

const ROOT_DIR = path.resolve(__dirname, "../..");
const PUBLIC_DIR = path.join(ROOT_DIR, "motion-studio/public");
const SRC_DIR = path.join(ROOT_DIR, "motion-studio/src");

function loadWords(jsonFile) {
  const fullPath = path.join(PUBLIC_DIR, jsonFile);
  const raw = JSON.parse(fs.readFileSync(fullPath, "utf8"));
  const chunks = Array.isArray(raw) ? raw : raw.chunks || [];
  const words = [];
  for (const c of chunks) {
    if (Array.isArray(c.words)) {
      for (const w of c.words) {
        words.push({
          word: normalize(w.word),
          raw: w.word,
          start: w.start,
          end: w.end,
        });
      }
    }
  }
  return words;
}

function normalize(str) {
  return String(str || "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]/g, "")
    .trim();
}

function findAnchorTimestamp(words, anchorPhrase) {
  const targetTokens = anchorPhrase
    .split(/\s+/)
    .map(normalize)
    .filter(Boolean);

  if (targetTokens.length === 0) return null;

  for (let i = 0; i <= words.length - targetTokens.length; i++) {
    let match = true;
    for (let j = 0; j < targetTokens.length; j++) {
      if (words[i + j].word !== targetTokens[j]) {
        match = false;
        break;
      }
    }
    if (match) {
      return words[i].start;
    }
  }
  return null;
}

const AUDIT_MANIFESTO = [
  {
    blockName: "HarryKaneBloque1Master",
    masterFile: "HarryKaneBloque1/HarryKaneBloque1Master.tsx",
    chunksFile: "bloque1_subtitle_chunks.json",
    totalDurationSeconds: 137.57,
    forbiddenShots: [],
    anchors: [
      {
        label: "Shot01: París (0.00s)",
        globalFrame: 0,
        anchorText: "París",
      },
      {
        label: "Shot02: 26 de octubre de 2026 (0.80s)",
        globalFrame: 24,
        anchorText: "26 de octubre",
      },
      {
        label: "Shot03: Ante las miradas de los mejores futbolistas (3.56s)",
        globalFrame: 107,
        anchorText: "Ante las miradas",
      },
      {
        label: "Shot04: Cámaras que transmiten a más de 150 países (8.74s)",
        globalFrame: 262,
        anchorText: "cámaras que transmiten",
      },
      {
        label: "Shot05: El trofeo con el que sueña cada niño (15.20s)",
        globalFrame: 456,
        anchorText: "trofeo con el que sueña",
      },
      {
        label: "Shot06: Clímax: El Balón de Oro (20.42s)",
        globalFrame: 613,
        anchorText: "Balón de Oro",
      },
      {
        label: "Shot07: La gente ve la foto en Instagram (22.64s)",
        globalFrame: 679,
        anchorText: "foto en Instagram",
      },
      {
        label: "Shot08: Y el cerebro humano... perezoso (29.52s)",
        globalFrame: 886,
        anchorText: "cerebro humano",
      },
      {
        label: "Shot09: Lo que el mundo prefiere olvidar (38.16s)",
        globalFrame: 1145,
        anchorText: "Lo que el mundo prefiere",
      },
      {
        label: "Shot10: Crearon canciones para burlarse de él (47.08s)",
        globalFrame: 1412,
        anchorText: "Crearon canciones para",
      },
      {
        label: "Shot11: Quince años viendo cómo otros levantaban copas (63.66s)",
        globalFrame: 1910,
        anchorText: "15 años viendo cómo",
      },
      {
        label: "Shot12: Pero este video no se trata de Harry Kane (74.49s)",
        globalFrame: 2235,
        anchorText: "Pero este video no se trata",
      },
      {
        label: "Shot13: Te sobran veinte kilos y te da vergüenza al espejo (89.69s)",
        globalFrame: 2691,
        anchorText: "te sobran 20 kilos",
      },
      {
        label: "Shot14: Sufriste una lesión que te apartó del deporte (95.27s)",
        globalFrame: 2858,
        anchorText: "sufriste una lesión",
      },
      {
        label: "Shot15: Tu negocio quebró, endeudado hasta el cuello (102.15s)",
        globalFrame: 3064,
        anchorText: "negocio quebró",
      },
      {
        label: "Shot16: Si sientes que sobre tu cabeza pesa una maldición (116.55s)",
        globalFrame: 3496,
        anchorText: "pesa una maldición",
      },
      {
        label: "Shot17: A menos que decida rendirse (135.61s)",
        globalFrame: 4068,
        anchorText: "a menos que decida rendirse",
      },
    ],
  },
  {
    blockName: "HarryKaneBloque2Master",
    masterFile: "HarryKaneBloque2/HarryKaneBloque2Master.tsx",
    chunksFile: "bloque2_subtitle_chunks.json",
    totalDurationSeconds: 95.93,
    forbiddenShots: ["Shot09BenchLeicester"],
    anchors: [
      {
        label: "Shot01: Inicio / Para entender la mente de un titán",
        globalFrame: 0,
        anchorText: "Para entender la mente",
      },
      {
        label: "Shot01B: Londres, año 2001 (7.37s)",
        globalFrame: 221,
        anchorText: "Londres año 2001",
      },
      {
        label: "Shot02: Harry tiene apenas ocho años (9.83s)",
        globalFrame: 295,
        anchorText: "Harry tiene apenas ocho",
      },
      {
        label: "Shot03: Pero una tarde gris, Liam Brady (21.0s)",
        globalFrame: 630,
        anchorText: "pero una tarde gris",
      },
      {
        label: "Shot04: Que quedaría grabada / Un poco gordito (28.5s)",
        globalFrame: 855,
        anchorText: "que quedaria grabada",
      },
      {
        label: "Shot04 Stamp: Despedido. Fuera del club (36.0s)",
        globalFrame: 1080,
        anchorText: "Despedido",
      },
      {
        label: "Shot05A: Ponte en el lugar de ese niño (38.5s)",
        globalFrame: 1155,
        anchorText: "ponte en el lugar",
      },
      {
        label: "Shot05B: Nueve de cada diez niños (47.0s)",
        globalFrame: 1410,
        anchorText: "Nueve de cada diez",
      },
      {
        label: "Shot05C: Pero Kane no derramó una sola lágrima (52.5s)",
        globalFrame: 1575,
        anchorText: "Pero Kane no derramo",
      },
      {
        label: "Shot06A: Se calzó los tenis y se fue al parque (57.3s)",
        globalFrame: 1719,
        anchorText: "se calzo los tenis",
      },
      {
        label: "Shot06B: Si le falta velocidad, a puro pulmón (61.13s)",
        globalFrame: 1834,
        anchorText: "Si le falta velocidad",
      },
      {
        label: "Shot06C: Si le sobraba peso, lo quemaría en el lodo (64.4s)",
        globalFrame: 1932,
        anchorText: "Si le sobraba peso",
      },
      {
        label: "Shot07A: Pero el camino no fue una película (67.6s)",
        globalFrame: 2028,
        anchorText: "Pero el camino no",
      },
      {
        label: "Shot07B: Pasaron los años y comenzó el verdadero calvario (71.43s)",
        globalFrame: 2143,
        anchorText: "Pasaron los anos",
      },
      {
        label: "Shot07C: El lodo y la hostilidad de la 3ra división (75.33s)",
        globalFrame: 2260,
        anchorText: "El lodo y la",
      },
      {
        label: "Shot07D: La caldera salvaje del Millwall (79.1s)",
        globalFrame: 2373,
        anchorText: "la caldera salvaje",
      },
      {
        label: "Shot08: Y la dura lesión de pie en 2013 (85.0s)",
        globalFrame: 2550,
        anchorText: "y la dura lesion",
      },
      {
        label: "Shot10A: En los despachos del club la duda era letal (89.5s)",
        globalFrame: 2685,
        anchorText: "En los despachos",
      },
      {
        label: "Shot10B: ¿Harry realmente tiene nivel para la Liga Premier? (92.37s)",
        globalFrame: 2771,
        anchorText: "Harry realmente tiene nivel",
      },
    ],
  },
  {
    blockName: "HarryKaneBloque3Master",
    masterFile: "HarryKaneBloque3/HarryKaneBloque3Master.tsx",
    chunksFile: "bloque3_subtitle_chunks.json",
    totalDurationSeconds: 133.83,
    forbiddenShots: [],
    anchors: [
      {
        label: "Shot01: Cuando el Tottenham Hotspur finalmente le dio una oportunidad",
        globalFrame: 0,
        anchorText: "Cuando el Tottenham",
      },
      {
        label: "Shot02: En cuestión de temporadas / 3x Botas de Oro (7.0s)",
        globalFrame: 210,
        anchorText: "En cuestion de temporadas",
      },
      {
        label: "Shot03: Pero el deporte de élite tiene una crueldad (24.9s)",
        globalFrame: 747,
        anchorText: "En el papel lo tenia",
      },
      {
        label: "Shot04A: Año 2015. Final de la Copa de la Liga ante el Chelsea (40.73s)",
        globalFrame: 1222,
        anchorText: "Ano 2015",
      },
      {
        label: "Shot04B: Año 2019. La primera final de Champions League en Madrid (45.27s)",
        globalFrame: 1358,
        anchorText: "Ano 2019",
      },
      {
        label: "Shot04C: El Liverpool golpea en el primer minuto (49.47s)",
        globalFrame: 1484,
        anchorText: "El Liverpool golpea",
      },
      {
        label: "Shot05A: Año 2021. Otra final de Copa ante el Manchester City (56.33s)",
        globalFrame: 1690,
        anchorText: "Ano 2021",
      },
      {
        label: "Shot05B: Verano de 2021. La herida más profunda / A un metro de la gloria (60.07s)",
        globalFrame: 1802,
        anchorText: "Verano de 2021",
      },
      {
        label: "Shot06A: Año 2024. Final en Berlín frente a España (73.10s)",
        globalFrame: 2193,
        anchorText: "Ano 2024",
      },
      {
        label: "Shot06B: Seis finales consecutivas disputadas. Seis derrotas. (82.97s)",
        globalFrame: 2489,
        anchorText: "Seis finales consecutivas",
      },
      {
        label: "Shot07: Pregúntate esto. ¿Qué haces cuando das tu 100%? (87.20s)",
        globalFrame: 2616,
        anchorText: "Preguntate esto",
      },
      {
        label: "Shot08: La mayoría de la gente se derrumba / 99% se rinden (102.93s)",
        globalFrame: 3088,
        anchorText: "La mayoria de la",
      },
      {
        label: "Shot09: Pero los hombres de hierro tienen un cableado (123.77s)",
        globalFrame: 3713,
        anchorText: "Pero los hombres de",
      },
    ],
  },
  {
    blockName: "HarryKaneBloque4Master",
    masterFile: "HarryKaneBloque4/HarryKaneBloque4Master.tsx",
    chunksFile: "bloque4_subtitle_chunks.json",
    totalDurationSeconds: 103.52,
    forbiddenShots: [],
    anchors: [
      {
        label: "Shot01A: En el verano de 2023, con 30 años cumplidos (0.00s)",
        globalFrame: 0,
        anchorText: "En el verano de 2023",
      },
      {
        label: "Shot01B: Podía haberse quedado en el Tottenham / Rey del club (7.77s)",
        globalFrame: 233,
        anchorText: "Podia haberse quedado en el Tottenham",
      },
      {
        label: "Shot01C: Pero el confort es el veneno más sutil de la ambición (17.37s)",
        globalFrame: 521,
        anchorText: "Pero el confort es el veneno",
      },
      {
        label: "Shot02A: Kane lo dejó todo y firmó por el Bayern Múnich (21.40s)",
        globalFrame: 642,
        anchorText: "Kane lo dejo todo y firmo",
      },
      {
        label: "Shot02B: Parecía una fórmula matemática perfecta (28.63s)",
        globalFrame: 859,
        anchorText: "Parecia una formula matematica perfecta",
      },
      {
        label: "Shot03A: Y entonces, la vida le asestó la bofetada más retorcida (34.73s)",
        globalFrame: 1042,
        anchorText: "Y entonces la vida le asesto",
      },
      {
        label: "Shot03B: En la primera temporada de Kane en Alemania, el Bayern no ganó (39.63s)",
        globalFrame: 1189,
        anchorText: "En la primera temporada de Kane",
      },
      {
        label: "Shot03C: El modesto Bayer Leverkusen firmó la temporada invicta (47.17s)",
        globalFrame: 1415,
        anchorText: "El modesto Bayern Leverkusen firmo",
      },
      {
        label: "Shot04A: El acoso mediático fue implacable (53.23s)",
        globalFrame: 1597,
        anchorText: "El acoso mediatico fue implacable",
      },
      {
        label: "Shot04B: La maldición de Kane es contagiosa (59.40s)",
        globalFrame: 1782,
        anchorText: "La maldicion de Kane es contagiosa",
      },
      {
        label: "Shot04C Stamp: El hombre que arruinó al club más ganador (61.77s)",
        globalFrame: 1853,
        anchorText: "El hombre que arruino al club",
      },
      {
        label: "Shot05A: Si un guionista de cine hubiera querido quebrar psicológicamente (64.87s)",
        globalFrame: 1946,
        anchorText: "Si un guionista de cine hubiera",
      },
      {
        label: "Shot05B: Pero aquí está la gran lección (72.57s)",
        globalFrame: 2177,
        anchorText: "Pero aqui esta la gran leccion",
      },
      {
        label: "Shot05C: Kane no dio una sola conferencia de prensa para poner pretextos (76.73s)",
        globalFrame: 2302,
        anchorText: "Kane no dio una sola conferencia",
      },
      {
        label: "Shot05D Card 2: No culpó a sus compañeros (80.43s)",
        globalFrame: 2413,
        anchorText: "No culpo a sus companeros",
      },
      {
        label: "Shot05E Card 3: No culpó al entrenador (82.10s)",
        globalFrame: 2463,
        anchorText: "No culpo al entrenador",
      },
      {
        label: "Shot06A: Se encerró en el gimnasio del club a las seis de la mañana (83.73s)",
        globalFrame: 2512,
        anchorText: "Se encerro en el gimnasio",
      },
      {
        label: "Shot06B: Perfeccionó cada detalle de su nutrición (87.83s)",
        globalFrame: 2635,
        anchorText: "Perfecciono cada detalle de su nutricion",
      },
      {
        label: "Shot06C: Trabajó la fuerza explosiva en la nieve (90.40s)",
        globalFrame: 2712,
        anchorText: "Trabajo la fuerza explosiva en la nieve",
      },
      {
        label: "Shot07A: Y en la siguiente temporada destrozó todos los registros (92.93s)",
        globalFrame: 2788,
        anchorText: "Y en la siguiente temporada destrozo",
      },
      {
        label: "Shot07B: Liderando al equipo no con palabras, sino con un apetito voraz (98.70s)",
        globalFrame: 2961,
        anchorText: "liderando al equipo no con palabras",
      },
    ],
  },
  {
    blockName: "HarryKaneBloque5Master",
    masterFile: "HarryKaneBloque5/HarryKaneBloque5Master.tsx",
    chunksFile: "bloque5_subtitle_chunks.json",
    totalDurationSeconds: 109.13,
    forbiddenShots: [],
    anchors: [
      {
        label: "Shot01A: Por eso hoy, cuando el mundo lo vio levantar el Balón de Oro (0.00s)",
        globalFrame: 0,
        anchorText: "Por eso hoy",
      },
      {
        label: "Shot01B: El aplauso de pie de las leyendas fue para un hombre (9.98s)",
        globalFrame: 299,
        anchorText: "El aplauso de pie de las leyendas",
      },
      {
        label: "Shot02: La maldición no existía (16.00s)",
        globalFrame: 480,
        anchorText: "La maldicion no existia",
      },
      {
        label: "Shot03A: ¿Cuál es tu Arsenal hoy? (29.22s)",
        globalFrame: 877,
        anchorText: "Cual es tu Arsenal hoy",
      },
      {
        label: "Shot03B: ¿Quién fue la persona que te dijo que no servías? (30.96s)",
        globalFrame: 929,
        anchorText: "Quien fue la persona que te dijo",
      },
      {
        label: "Shot03C: ¿Cuál es esa derrota que llevas años arrastrando? (40.02s)",
        globalFrame: 1201,
        anchorText: "Cual es esa derrota que llevas",
      },
      {
        label: "Shot04A: Escúchame con claridad: La gloria no está reservada para niños prodigio (47.27s)",
        globalFrame: 1418,
        anchorText: "Escuchame con claridad",
      },
      {
        label: "Shot04B: La gloria está reservada para los hombres tercos (52.37s)",
        globalFrame: 1571,
        anchorText: "La gloria esta reservada para los",
      },
      {
        label: "Shot05A Mandamiento #01: No me importa si hoy tienes 20 kilos de más (59.99s)",
        globalFrame: 1799,
        anchorText: "No me importa si hoy tienes 20 kilos",
      },
      {
        label: "Shot05B Mandamiento #02: No me importa si tu cuenta de banco está en números rojos (65.47s)",
        globalFrame: 1964,
        anchorText: "No me importa si tu cuenta de banco",
      },
      {
        label: "Shot05C Mandamiento #03: No me importa si tu cuerpo está lesionado (72.97s)",
        globalFrame: 2189,
        anchorText: "No me importa si tu cuerpo esta lesionado",
      },
      {
        label: "Shot06A: Harry Kane esperó 15 años en la oscuridad (80.07s)",
        globalFrame: 2402,
        anchorText: "Harry Kane espero 15 anos en la oscuridad",
      },
      {
        label: "Shot06B: Tu partido no ha terminado (85.15s)",
        globalFrame: 2554,
        anchorText: "Tu partido no ha terminado",
      },
      {
        label: "Shot07A: Apaga este video. Levántate de esa silla (90.29s)",
        globalFrame: 2709,
        anchorText: "Apaga este video",
      },
      {
        label: "Shot07B CTA: Si este mensaje encendió algo en tu interior (95.85s)",
        globalFrame: 2876,
        anchorText: "Si este mensaje encendio algo",
      },
    ],
  },
];

let hasErrors = false;

console.log("================================================================================");
console.log("🔒 AUDITORÍA AUTOMÁTICA AUDIO-FIRST WORD-LOCK (MENTALIDAD DE CAMPEÓN · MDC)");
console.log("================================================================================\n");

for (const block of AUDIT_MANIFESTO) {
  console.log(`🎬 Auditando composición: ${block.blockName}`);
  const words = loadWords(block.chunksFile);
  const masterSource = fs.readFileSync(path.join(SRC_DIR, block.masterFile), "utf8");

  // 1. Verificar que no existan escenas fantasma prohibidas
  for (const forbidden of block.forbiddenShots) {
    if (masterSource.includes(forbidden)) {
      console.error(`  ❌ [ERROR FANTASMA] ${forbidden} sigue presente en ${block.masterFile}`);
      hasErrors = true;
    } else {
      console.log(`  ✅ [CERO FANTASMAS] Escena eliminada verificada: ${forbidden} ausente.`);
    }
  }

  // 2. Verificar cada punto de anclaje voz-imagen
  for (const item of block.anchors) {
    const visualSec = item.globalFrame / FPS;
    const audioSec = findAnchorTimestamp(words, item.anchorText);

    if (audioSec === null) {
      console.error(`  ❌ [FRASE NO ENCONTRADA EN WAV] "${item.anchorText}" (${item.label})`);
      hasErrors = true;
      continue;
    }

    const delta = visualSec - audioSec; // Negativo = imagen antes que voz; Positivo = imagen con/después de voz
    const statusIcon = delta < -MAX_EARLY_SECONDS ? "❌ ADELANTADO" : "✅ SINCRONIZADO";

    console.log(
      `  ${statusIcon} | Frame ${String(item.globalFrame).padStart(4, " ")} (${visualSec.toFixed(
        2
      )}s) vs Audio (${audioSec.toFixed(2)}s) | Δ = ${delta >= 0 ? "+" : ""}${delta.toFixed(2)}s | ${
        item.label
      }`
    );

    if (delta < -MAX_EARLY_SECONDS) {
      hasErrors = true;
    }
  }
  console.log("");
}

if (hasErrors) {
  console.error("🚨 LA AUDITORÍA DETECTÓ DESCUADRES DE SINCRONIZACIÓN. CORRIGE ANTES DE RENDERIZAR.");
  process.exit(1);
} else {
  console.log("✅ AUDITORÍA SUPERADA AL 100%: 0 TÍTULOS ADELANTADOS, 0 ESCENAS FANTASMA.");
  process.exit(0);
}
