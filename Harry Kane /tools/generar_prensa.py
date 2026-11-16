#!/usr/bin/env python3
"""
CYTM Headline & Press Card Generator
Genera tarjetas de prensa cinematográficas en 1080p/4K con titulares reales,
marcador amarillo animado, logotipo del medio y silueta del futbolista.
"""

import sys
import os
import argparse
import subprocess

HTML_TEMPLATE = """<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@700&family=Playfair+Display:ital,wght@0,700;0,900;1,700&family=Inter:wght@400;600;800&family=Oswald:wght@700&display=swap" rel="stylesheet">
  <style>
    * {{ margin: 0; padding: 0; box-sizing: border-box; }}
    body {{
      background: #0d0f12;
      color: #111;
      font-family: 'Inter', sans-serif;
      width: 1920px;
      height: 1080px;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      padding: 0 100px;
      overflow: hidden;
      position: relative;
    }}
    .glow-bg {{
      position: absolute;
      top: -20%;
      right: -10%;
      width: 800px;
      height: 800px;
      background: radial-gradient(circle, rgba(212, 175, 55, 0.12) 0%, transparent 70%);
      pointer-events: none;
    }}
    .press-card {{
      position: relative;
      width: 1050px;
      background: #fdfcf7;
      padding: 45px 55px;
      border-radius: 4px;
      box-shadow: 0 30px 60px rgba(0,0,0,0.6), 0 0 0 1px rgba(0,0,0,0.08);
      z-index: 2;
      border-left: 6px solid #d4af37;
      transform: perspective(1000px) rotateY(-2deg) rotateX(1deg);
    }}
    .newspaper-header {{
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-bottom: 2px solid #111;
      padding-bottom: 15px;
      margin-bottom: 25px;
    }}
    .masthead {{
      font-family: 'Playfair Display', serif;
      font-size: 38px;
      font-weight: 900;
      color: #000;
      text-transform: uppercase;
    }}
    .masthead span {{
      background: {badge_color};
      color: #fff;
      padding: 2px 10px;
      margin-left: 8px;
      font-family: 'Oswald', sans-serif;
      font-size: 26px;
      letter-spacing: 1px;
    }}
    .meta-date {{
      font-size: 13px;
      font-weight: 600;
      color: #666;
      text-transform: uppercase;
      letter-spacing: 1px;
    }}
    .category-tag {{
      display: inline-block;
      background: #b91c1c;
      color: #fff;
      font-size: 12px;
      font-weight: 800;
      text-transform: uppercase;
      letter-spacing: 1.5px;
      padding: 4px 10px;
      border-radius: 2px;
      margin-bottom: 18px;
    }}
    .headline {{
      font-family: 'Playfair Display', serif;
      font-size: 44px;
      line-height: 1.18;
      font-weight: 900;
      color: #0f172a;
      margin-bottom: 20px;
      letter-spacing: -0.5px;
    }}
    .highlight {{
      background: linear-gradient(120deg, rgba(254, 240, 138, 0) 0%, rgba(254, 240, 138, 0.95) 15%, rgba(250, 204, 21, 0.95) 85%, rgba(254, 240, 138, 0) 100%);
      background-repeat: no-repeat;
      background-size: 100% 90%;
      background-position: 0 88%;
      padding: 0 6px;
      color: #000;
      box-decoration-break: clone;
      -webkit-box-decoration-break: clone;
    }}
    .standfirst {{
      font-size: 20px;
      line-height: 1.45;
      color: #334155;
      font-weight: 400;
      border-left: 3px solid #cbd5e1;
      padding-left: 18px;
      margin-bottom: 25px;
    }}
    .byline {{
      display: flex;
      align-items: center;
      gap: 15px;
      font-size: 13px;
      color: #64748b;
      font-weight: 600;
      border-top: 1px solid #e2e8f0;
      padding-top: 15px;
    }}
    .byline-author {{
      color: #0f172a;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }}
    .player-cutout {{
      position: absolute;
      right: 40px;
      bottom: -40px;
      height: 980px;
      z-index: 3;
      filter: drop-shadow(-20px 20px 35px rgba(0,0,0,0.7));
      pointer-events: none;
    }}
    .cytm-watermark {{
      position: absolute;
      top: 40px;
      right: 60px;
      display: flex;
      align-items: center;
      gap: 10px;
      background: rgba(15, 23, 42, 0.65);
      backdrop-filter: blur(8px);
      padding: 8px 16px;
      border-radius: 9999px;
      border: 1px solid rgba(255, 255, 255, 0.1);
      z-index: 10;
    }}
    .cytm-dot {{
      width: 8px;
      height: 8px;
      background: #d4af37;
      border-radius: 50%;
    }}
    .cytm-text {{
      color: #f8fafc;
      font-size: 13px;
      font-weight: 800;
      letter-spacing: 1.5px;
      font-family: 'Cinzel', serif;
    }}
  </style>
</head>
<body>
  <div class="glow-bg"></div>
  <div class="cytm-watermark">
    <div class="cytm-dot"></div>
    <div class="cytm-text">CYTM ARCHIVO DOCUMENTAL</div>
  </div>
  <div class="press-card">
    <div class="newspaper-header">
      <div class="masthead">{medio} <span>{badge}</span></div>
      <div class="meta-date">{fecha}</div>
    </div>
    <div class="category-tag">{categoria}</div>
    <h1 class="headline">{headline_html}</h1>
    <p class="standfirst">{bajada}</p>
    <div class="byline">
      <span class="byline-author">{autor}</span>
      <span>•</span>
      <span>EDICIÓN HISTÓRICA CYTM</span>
    </div>
  </div>
  {cutout_html}
</body>
</html>
"""

def main():
    parser = argparse.ArgumentParser(description="CYTM Press Card Generator")
    parser.add_argument("--medio", default="DAILY MAIL", help="Nombre del periódico")
    parser.add_argument("--badge", default="SPORT", help="Etiqueta del medio (SPORT, FOOTBALL, etc)")
    parser.add_argument("--badge-color", default="#004b97", help="Color de fondo de la etiqueta")
    parser.add_argument("--categoria", default="CRÓNICA HISTÓRICA", help="Categoría superior")
    parser.add_argument("--titular", required=True, help="Texto del titular")
    parser.add_argument("--resaltar", default="", help="Parte del titular a subrayar con amarillo")
    parser.add_argument("--bajada", default="", help="Subtítulo o cita textual explicativa")
    parser.add_argument("--fecha", default="LONDRES • ARCHIVO", help="Fecha o localización")
    parser.add_argument("--autor", default="REDACCIÓN DEPORTIVA", help="Firma del artículo")
    parser.add_argument("--cutout", default="", help="Ruta relativa o absoluta de la silueta PNG del jugador")
    parser.add_argument("--salida", required=True, help="Ruta del archivo PNG final")

    args = parser.parse_args()

    # Resaltar texto si se especifica
    headline = args.titular
    if args.resaltar and args.resaltar in headline:
        headline_html = headline.replace(args.resaltar, f'<span class="highlight">{args.resaltar}</span>')
    else:
        headline_html = headline

    # Silueta de jugador
    cutout_html = ""
    if args.cutout and os.path.exists(args.cutout):
        abs_cutout = os.path.abspath(args.cutout)
        cutout_html = f'<img src="{abs_cutout}" alt="Player Cutout" class="player-cutout">'

    # Renderizar HTML temporal
    html_content = HTML_TEMPLATE.format(
        medio=args.medio,
        badge=args.badge,
        badge_color=args.badge_color,
        categoria=args.categoria,
        fecha=args.fecha,
        headline_html=headline_html,
        bajada=args.bajada,
        autor=args.autor,
        cutout_html=cutout_html
    )

    temp_html = "/tmp/cytm_headline_temp.html"
    with open(temp_html, "w", encoding="utf-8") as f:
        f.write(html_content)

    # Renderizar a PNG usando Google Chrome headless
    chrome_path = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
    salida_abs = os.path.abspath(args.salida)
    cmd = [
        chrome_path,
        "--headless",
        f"--screenshot={salida_abs}",
        "--window-size=1920,1080",
        f"file://{temp_html}"
    ]

    print(f"📰 Generando titular estilo {args.medio}...")
    res = subprocess.run(cmd, stdout=subprocess.PIPE, stderr=subprocess.PIPE)
    if os.path.exists(salida_abs):
        print(f"✅ Titular generado con éxito en: {salida_abs}")
    else:
        print(f"❌ Error al generar titular: {res.stderr.decode()}")

if __name__ == "__main__":
    main()

