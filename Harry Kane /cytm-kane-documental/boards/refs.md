# References

What this film must do that we have not built before: fuse four distinct Moment engines (`M1416` optical light sweep + hard-cut montage, `M1381` unfolding portrait carousel + 2-frame stepped typing, `M1186` frame-stepped kinetic slam + rotoscoped split + stepped telemetry logs, and `M1274` stepped tagline zoom + morphological ink-seed logo bloom) into one cohesive football documentary launch trailer for **Memorias del Fútbol**.

## Films

| id | source | why it was picked | read from |
| --- | --- | --- | --- |
| M1416 | Moment (Lovable aesthetics launch, dark optical sweep + geometric/footage montage) | Hook: sweeps gold-crimson stadium light through two giant words, then hard-cuts through geometric forms and three real documentary clips into kinetic rows | strip, code/index.html, REMIX.md |
| M1381 | Moment (ElevenLabs Music API launch, unfolding card carousel + HUD + stepped terminal prompt) | Proof: unfolds a hero documentary clip into a 5-card archive carousel with a sliding match-stats HUD and 2-frame stepped typing | strip, code/index.html, REMIX.md |
| M1186 | Moment (Sazabi 1.0 launch, rotoscoped swivel + oversized red kinetic slams + stepped telemetry) | Turn: slams oversized red words around a rotoscoped figure with per-letter white flashes, then scrolls career match logs one whole row per step | strip, code/index.html, REMIX.md |
| M1274 | Moment (Ideogram 4.0 launch, stepped tagline build + ×1.79 scale jump + ink-seed emblem bloom) | Call to action: builds the channel manifesto word by word, jumps ×1.79 in one frame, and blooms the MDF crest from ink seeds beside the wordmark | strip, code/index.html, REMIX.md |

## Findings

| id@time | what it does | how it is built | for this film |
| --- | --- | --- | --- |
| M1416@0.20–2.00 | Giant fixed title words (`Great` then `design`) are illuminated left-to-right by a moving radial light band leaving thin outlines behind, with a hard swap at 1.03 s | `drive(6, 31, opticalWord($('#great-word'), { cx: 925, fontPx: 590, boxRatio: 1.124, f0: 6, f1: 30, peakAt: 0.37,` | hook: sweeps golden-crimson stadium light through ` CERO` and `TÍTULOS` before the phrase `Quince años persiguiendo la gloria` |
| M1416@5.44–5.67 | First macro footage clip opens inside a centred rounded window that expands to full frame in 7 one-frame steps before hard cuts to two more clips | `[[163, 142, 128, 380], [164, 46, 42, 280], [165, 16, 14, 160], [166, 4, 2, 80], [167, 0, 0, 60], [168, 0, 0, 40], [169, 0, 0, 20], [170, 0, 0, 0]]` | hook: reveals three real *Memorias del Fútbol* documentary clips (Arsenal rejection, Champions League heartbreak, Ballon d'Or stage) |
| M1416@8.54–9.38 | Footage steps into a 6-frame rounded card over three kinetic rows that wipe in, drift right 680 px in 8 frames, and wipe from bold (650) to thin (200) | `keys(row, [256, 264, 280], { x: [0, 680, 740], '--rv': [0.27, 0.63, 1] });` | hook: lands the Ballon d'Or clip card over three rows of `HISTORIAHISTORIAHISTORIA` wiping from bold to thin |
| M1381@0.00–0.80 | Centre card unfolds from 664×470 landscape to 456×672 portrait while four blurred preview cards slide in from both sides | `keys(center, 'x', TRACKS.centerX); keys(center, 'y', TRACKS.centerY);` | proof: unfolds the Harry Kane documentary hero clip flanked by 4 blurred chapter stills from the episode |
| M1381@0.37–0.70 | A 456 px stats HUD slides down 93 px from above the centre card's top clip edge with no fade, then scales 1.0 → 1.14 with the slow push-in | `const hud = $('#hud'); active(hud, 0.367);` | proof: drops a *Memorias del Fútbol* career HUD (`406 GOLES`, `BAYERN 2025`, `BALÓN DE ORO 2026`, stars) into the hero card |
| M1381@0.10–0.90 | Fixed-pitch terminal line types in 2-frame chunks on odd frames while re-centring in steps, then swaps through 6 cipher states at 4.70 s | `typeOn(valueEl._cells, PARAMS.typeSteps);` | proof: types the episode query `archivo: "Harry Kane — Del rechazo en el Arsenal al Balón de Oro"` beneath the carousel |
| M1186@0.54–2.13 | Oversized title words snap down to size in 3–6 frames, shove earlier words left, and split around the rotoscoped subject with per-letter white flashes | `keyTrack(box, ['x', 'y', 'w', 'h'], track.keys);` | turn: slams `LA MALDICIÓN` in front of Kane and splits `TERMINÓ HOY` behind his rotoscoped silhouette |
| M1186@1.87–2.08 | Rotoscoped subject smears horizontally up to 100 px stdDeviation during the fast turn while twin light arcs flash in screen blend | `keyTrack('#mb-turn-g', ['stdDeviation'], [[1.875, 0], [1.9167, 40], [1.9583, 75], [2.0, 100], [2.0417, 30], [2.0833, 0]], v => v + ' 0', true);` | turn: drives the directional blur spike and crimson-gold arcs as Kane turns from heartbreak to triumph |
| M1186@3.12–4.71 | Two telemetry log columns rise out of the bottom red glow while scrolling upward exactly one whole 64 px line at each of 22 stepped frames | `keyTrack('.stream', ['y'], STREAM_STEPS.map((t, k) => [t, -64 * k]));` | turn: scrolls Kane's year-by-year match and trophy archive (`2004 ARSENAL`, `2019 MADRID`, `2025 BUNDESLIGA`, `2026 BALÓN DE ORO`) |
| M1274@0.03–3.50 | Tagline words cut in one by one from a fixed left edge every ~0.58 s with no fade, then jump ×1.79 larger in a single frame at 3.50 s | `words.forEach((w, i) => tl.set(w, { opacity: 1 }, snap(PARAMS.wordStart + Math.round(i * step * FPS) / FPS) - EPS));` | cta: builds `"Caer. Resistir. Hacer historia."` word by word, then steps ×1.79 larger on frame |
| M1274@4.70–5.60 | Brand emblem rises from below frame while SVG morphology erosion shrinks from 15.5 px to 0 px so the mark blooms out of scattered ink seeds | `track('#bloom-erode', 'attr', [[4.700, { radius: 15.5 }], [4.733, { radius: 13.5 }], [4.867, { radius: 10.6 }],` | cta: blooms the circular `MDF` football crest from ink seeds as it rises to frame centre |
| M1274@6.33–7.80 | Emblem contracts to 0.32 and slides left while each wordmark glyph thickens from 4.7 px erosion to 0 px left-to-right | `glyphs.forEach((g, i) => inkGrow(g, i,` | cta: docks the `MDF` crest left as `MEMORIAS DEL FÚTBOL` inks in glyph by glyph and holds |

## What we will not take

- their copy, colours, logos, backgrounds and bookends (Lovable, ElevenLabs, Sazabi, and Ideogram names, marks, and palettes stay behind)
- their subject: M1416's grapefruit/fur/barley-grass clips become real *Memorias del Fútbol* documentary clips; M1381's synthwave car and Dispatch 101 HUD become Harry Kane documentary footage, chapter stills, and football career stats; M1186's office executive and Sazabi kernel logs become Harry Kane documentary plates and year-by-year football archive telemetry; M1274's selfie photo and Ideogram brain mark become a *Memorias del Fútbol* frame and the `MDF` football emblem + wordmark
