# 🎨 MANUAL DE MARCA Y PROMPTS MAESTROS IA — MENTALIDAD DE CAMPEÓN (MDC)

---

## 1. PALETA DE COLORES OFICIAL (HEX & RGB)

| Rol Visual | Nombre Técnico | Código HEX | RGB | Uso Principal en el Canal |
| :--- | :--- | :---: | :---: | :--- |
| **Fondo Primario** | **Obsidian Abyss** | `#07080B` | `7, 8, 11` | Fondos de logos, miniaturas, placas 3D y viñetas de contraste. |
| **Fondo Secundario** | **Carbon Slate** | `#12151E` | `18, 21, 30` | Tarjetas de datos, expedientes tácticos, HUDs de estadísticas. |
| **Acento Primario** | **Imperial Trophy Gold** | `#F5C518` | `245, 197, 24` | Cerebro de perfil mitad circuito / mitad córtex, anillo imperial y palabra `CAMPEÓN`. |
| **Luz de Oro** | **Champagne Glow** | `#FFE57F` | `255, 229, 127` | Reflectores del estadio, partículas doradas, bordes iluminados. |
| **Acento Táctico** | **High-Alert Crimson** | `#EF4444` | `239, 68, 68` | Nodos sinápticos terminales del circuito, cintas del estadio y alertas de presión. |
| **Texto Principal** | **Pure Stadium White** | `#FFFFFF` | `255, 255, 255` | Siglas `MDC`, titular `MENTALIDAD DE`, nombres de leyendas deportivas. |
| **Texto Técnico** | **Steel Silver** | `#94A3B8` | `148, 163, 184` | Subtítulos técnicos, fechas, coordenadas y etiquetas secundarias. |

---

## 2. SISTEMA TIPOGRÁFICO OFICIAL

1. **Titulares de Impacto y Miniaturas (Display):**
   - **Fuente Principal:** `Figtree Black (900)` / `Bebas Neue` (instaladas en `motion-studio/public/fonts/`).
   - **Estilo:** Mayúsculas sostenidas (`UPPERCASE`), tracking amplio (`+4%` a `+8%`), relleno blanco puro (`#FFFFFF`) y oro imperial (`#F5C518`).
2. **Expedientes Tácticos, Fechas y Telemetría (Monospace):**
   - **Fuente Principal:** `Geist Mono Bold` / `JetBrains Mono`.
3. **Subtítulos Editoriales y Narrativa:**
   - **Fuente Principal:** `Figtree ExtraBold (800)` / `Inter Bold`.

---

## 3. ARQUITECTURA GEOMÉTRICA MULTI-FORMATO (TV, PC Y MOBILE)

YouTube recorta un mismo archivo `2560 × 1440 px` en **3 vistas distintas** según el dispositivo del espectador:

| Formato / Dispositivo | Resolución Exacta | Coordenadas en el Lienzo Master (`2560×1440`) | Qué incluye nuestro diseño |
| :--- | :---: | :---: | :--- |
| **📱 Mobile (Celulares)** | `1235 × 338 px` | `X: 662 px` a `1897 px` \| `Y: 551 px` a `889 px` | **Zona Sagrada:** Medallón circular Cerebro de Perfil Circuito + `MDC` (`244×244 px`) a la izquierda + Título `MENTALIDAD DE CAMPEÓN` + Píldora multideporte sobre los reflectores dorados del estadio. |
| **💻 PC (Escritorio)** | `2560 × 423 px` | `X: 0 px` a `2560 px` \| `Y: 508 px` a `931 px` | **Franja Panorámica:** Todo el núcleo Mobile + pistas de circuito conectadas a las **Alas Editoriales Izquierda y Derecha** sobre las gradas iluminadas del estadio. |
| **📺 TV (Pantallas 4K)** | `2560 × 1440 px` | Lienzo Completo (`0,0` a `2560,1440`) | **Estadio / Coliseo Nocturno Completo:** Cielo lluvioso iluminado arriba, reflectores dorados al centro y reflejos sobre el césped mojado abajo con HUD 4K. |

---

## 4. PROMPTS MAESTROS DE IA (CEREBRO DE PERFIL CIRCUITO + `MDC` Y ESTADIO)

### A. Prompt — Diseño 1: Cerebro de Perfil Mitad Circuito / Mitad Córtex + `MDC` en Base
> **Prompt:**
> `Original luxury vector-grade emblem logo on a pure solid Obsidian Black background (#07080B). Centered inside a sleek circular Imperial Gold ring (#F5C518), a side-profile human brain facing left: the anterior/left half dissolves into clean horizontal and 45-degree geometric circuit-board tracks in luminous Imperial Gold (#F5C518) with glowing Crimson Red (#EF4444) terminal nodes, while the posterior/right half, cerebellum, and brainstem are formed by sleek minimalist organic golden contour lines. Anchored cleanly at the bottom break of the golden ring are the bold, architectural letters "MDC" in pure stadium white (#FFFFFF) with brushed gold bevels (#F5C518). Zero watermarks, flat vector precision, 1:1 square aspect ratio.`

### B. Prompt — Diseño 2: Cerebro de Perfil Mitad Circuito / Mitad Córtex + `MDC` en el Núcleo
> **Prompt:**
> `Original minimalist sports-psychology emblem logo on a pure Obsidian Black background (#07080B). Inside a razor-sharp circular Imperial Gold frame (#F5C518), a side-profile human brain where the left hemisphere consists of geometric golden printed-circuit pathways (#F5C518) with Crimson Red (#EF4444) synaptic nodes, and the right hemisphere + cerebellum + brainstem consists of smooth minimalist organic brain folds in gold. Integrated directly into the central core of the brain profile are the bold monolithic initials "MDC" in crisp white (#FFFFFF) and metallic gold (#F5C518), bridging the circuit side and organic cortex. Ultra-clean vector aesthetic, 1:1 square.`

### C. Prompt — Escenario Base: Estadio / Coliseo Nocturno Iluminado (Banner 16:9)
> **Prompt:**
> `Cinematic ultra-wide 16:9 monumental night stadium colosseum arena under heavy rain. Dramatic warm Imperial Gold stadium floodlights (#F5C518) cutting through atmospheric mist from the left and right stands, subtle glowing Crimson Red (#EF4444) LED ribbon tiers along the colosseum arches, and a dark wet pitch in the foreground reflecting the golden and crimson lights. Natural dark atmospheric center for clean typography placement, Netflix sports documentary aesthetic, 8k resolution, 16:9 widescreen, no text.`
