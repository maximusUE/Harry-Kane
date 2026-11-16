# Memorias del Fútbol — Harry Kane: Balón de Oro 2026

Cohesive 29.0-second 16:9 (`1920×1080`) documentary launch film built on the four attached Moment references (`@M1416`, `@M1381`, `@M1186`, `@M1274`) for **Memorias del Fútbol** (`MDF`).

## Beat Architecture & Locked vs. Swappable Layers

### 1. Locked Layers (Timing, Eases, Seams, Choreography)
- **`index.html` & `compositions/film.json`**:
  - **Beat 1 (`hook`, `0.0–9.4s`, `compositions/hook.html`, `@M1416`)**:
    - `0.00–1.02s` & `1.02–1.99s`: `isolation: isolate` + `mix-blend-mode: multiply` light-band sweeps across `CERO` and `TÍTULOS`.
    - `1.99–2.93s`: Rising golden-crimson halo under the beat line (`Quince años persiguiendo la gloria`).
    - `2.93–5.43s`: Rising stadium arc (`#s4-circle`), converging gradient discs (`#s5-left/right`), and sliding horizontal capsules (`#s6-left/right`).
    - `5.43–9.40s`: 6-step discrete rounded window expansion into full-bleed documentary cuts (`vid-arsenal`, `vid-spurs`, `vid-ballon`), stepping back at `8.53s` into a `738×415` rounded card over 3 rows of `HISTORIA` wiping weight from `800` to `200` (`--split`).
  - **Beat 2 (`proof`, `9.4–14.7s`, `compositions/proof.html`, `@M1381`)**:
    - `0.00–0.60s`: Landscape-to-portrait unfold (`595×368` → `460×690`, `power3.inOut`) of `#card-center` as side carousel cards (`#card-left`, `#card-right`, `#far-left`, `#far-right`) slide into place.
    - `0.36–3.60s`: `#hud` drop-in, stepped progress fills and star illuminations, and fixed-cell typewriter prompt beneath `#proof-line` (`Del rechazo al Balón de Oro`).
    - `3.90–5.30s`: Fast camera push (`460×690` → `580×870`), 3-frame cipher swaps (`#`, `$`, `%`, `*`, `+`), and leftward blurred carousel exit across the `14.7s` seam.
  - **Beat 3 (`turn`, `14.7–20.5s`, `compositions/turn.html`, `@M1186`)**:
    - `0.00–3.04s`: Multi-cut documentary sequence (`cut-a`, `cut-b`, `cut-c`) with rotoscoped depth sandwich (`#title-back` at `z-index: 20` behind `#fg-subject` at `z-index: 30` and `#title-front` at `z-index: 40`).
    - `3.08–5.80s`: Hard cut to golden trophy close-ups (`cut-d`, `cut-e`) under 3-phase terminal telemetry (`#boot-box` `3.12–3.88s`, `#status-box` `3.88–4.62s`, 3-column vertical match-log scroll `#cols-wrap` `4.62–5.80s`).
  - **Beat 4 (`cta`, `20.5–29.0s`, `compositions/cta.html`, `@M1274`)**:
    - `0.00–0.28s`: Outgoing documentary card (`#prev-shot`) slides upward out of frame.
    - `0.06–4.63s`: Word-by-word build of `#tagline` (`Caer, resistir y hacer historia`), 1-frame `scale(1.72)` jump cut at `3.50s`, and `power3.in` upward launch (`3.67–4.63s`).
    - `4.65–8.50s`: SVG `#ink-bloom` morphological erosion (`feMorphology operator="erode"` `radius: 4.5 -> 0`) blooming the `MDF` circular emblem (`#logo`), fast shrink (`scale: 0.42`) and horizontal dock (`x: -365`) beside `MEMORIAS DEL FÚTBOL` (`#wordmark`).

### 2. Swappable Layers (Brand, Copy, Footage)
- **Palette**: `--ground` (`#08080A`), `--ink` (`#F2EFE9`), `--accent` (`#F5C518`), `--accent-red` (`#EF002D`) in `index.html` and beat stylesheets.
- **Documentary Footage & Stills**: `assets/ui/*.mp4` and `assets/ui/*.png` can be swapped for another player's archival clips without altering any timeline keyframes.
- **Brand Marks**: `assets/brand/memorias-emblem-ink.png` and `#wordmark-row` glyphs in `compositions/cta.html`.
- **Copy**: Beat lines in `compositions/film.json` and matching text nodes (`#s3-phrase` / `#hook-line-pill`, `#proof-line` / `PROMPT`, `#turn-headline` / `.slam-word`, `#tagline` / `#cta-subline`).
