#!/usr/bin/env python3
"""
CYTM Media Research & Asset Scout Toolkit
Permite auditar URLs de YouTube, verificar metraje disponible, rastrear hechos,
y cortar clips bajo doctrina de Fair Use (1.08x anti-Content ID).
"""

import sys
import json
import subprocess
import os

def audit_youtube_url(url: str):
    print(f"🔍 Auditando URL: {url}...")
    cmd = ["/opt/homebrew/bin/yt-dlp", "--dump-single-json", "--no-warnings", "--simulate", url]
    try:
        res = subprocess.run(cmd, capture_output=True, text=True, check=True)
        data = json.loads(res.stdout)
    except Exception as e:
        print(f"❌ Error al consultar con yt-dlp: {e}")
        return

    title = data.get("title", "Desconocido")
    duration_s = data.get("duration", 0)
    uploader = data.get("uploader", "Desconocido")
    resolution = data.get("resolution", "1080p")
    chapters = data.get("chapters") or []

    print("\n=======================================================")
    print(f"📌 TÍTULO: {title}")
    print(f"📺 CANAL: {uploader}")
    print(f"⏱️  DURACIÓN: {duration_s} segundos (~ {round(duration_s/60, 1)} minutos)")
    print(f"📐 RESOLUCIÓN NATIVA: {resolution}")
    print(f"📑 CAPÍTULOS DETECTADOS: {len(chapters)}")
    print("=======================================================")

    if chapters:
        print("\n📜 ESTRUCTURA DE CAPÍTULOS:")
        for i, c in enumerate(chapters, 1):
            start = round(c.get("start_time", 0), 1)
            end = round(c.get("end_time", 0), 1)
            dur = round(end - start, 1)
            print(f"  {i}. [{start}s - {end}s] ({dur}s): {c.get('title')}")
    
    # Evaluación de viabilidad
    print("\n🎯 DICTAMEN DE VIABILIDAD PARA LA AGENCIA:")
    if duration_s >= 600 and "1080" in str(resolution):
        print("  ✅ EXCELENTE: El video tiene metraje extenso en 1080p para abastecer múltiples bloques.")
    elif duration_s >= 180:
        print("  ⚠️ ACEPTABLE: Cubre un bloque específico o escenas puntuales.")
    else:
        print("  ❌ INSUFICIENTE: Muy corto, requerirá complementar con B-roll adicional.")

def generate_bloque_manifest(bloque_name: str, out_dir: str):
    """Genera un manifiesto indexado de recursos para Remotion."""
    manifest_path = os.path.join(out_dir, "MANIFIESTO_RECURSOS.json")
    items = []
    
    if os.path.exists(out_dir):
        for root, _, files in os.walk(out_dir):
            for f in sorted(files):
                if f.endswith((".mp4", ".png", ".jpg", ".jpeg", ".webp")) and not f.startswith("."):
                    full_p = os.path.join(root, f)
                    rel_p = os.path.relpath(full_p, out_dir)
                    items.append({
                        "archivo": f,
                        "ruta_relativa": rel_p,
                        "tipo": "video" if f.endswith(".mp4") else "imagen",
                        "tamano_kb": round(os.path.getsize(full_p) / 1024, 1)
                    })
                    
    manifest = {
        "bloque": bloque_name,
        "total_archivos": len(items),
        "recursos": items
    }
    
    with open(manifest_path, "w", encoding="utf-8") as f:
        json.dump(manifest, f, indent=2, ensure_ascii=False)
        
    print(f"✅ Manifiesto guardado en: {manifest_path} ({len(items)} recursos indexados)")

if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Uso: media_scout_tools.py [audit <url> | manifest <bloque_nombre> <directorio>]")
        sys.exit(1)
        
    action = sys.argv[1]
    if action == "audit":
        if len(sys.argv) < 3:
            print("Error: falta URL")
            sys.exit(1)
        audit_youtube_url(sys.argv[2])
    elif action == "manifest":
        if len(sys.argv) < 4:
            print("Error: faltan argumentos (bloque_nombre y directorio)")
            sys.exit(1)
        generate_bloque_manifest(sys.argv[2], sys.argv[3])
    else:
        print(f"Acción desconocida: {action}")

