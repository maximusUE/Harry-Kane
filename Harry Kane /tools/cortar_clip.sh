#!/usr/bin/env bash
# ==============================================================================
# CYTM Video Slicer - Transformative Fair Use Clipper
# Corta fragmentos exactos de jugadas, aplica reencuadre y silencia el audio broadcast
# Uso: ./tools/cortar_clip.sh <archivo_origen> <inicio_HH:MM:SS> <duracion_segundos> <nombre_salida>
# Ejemplo: ./tools/cortar_clip.sh video.mp4 00:03:15 3 kane_gol_bayern
# ==============================================================================

set -euo pipefail

ORIGEN="${1:-}"
INICIO="${2:-}"
DURACION="${3:-}"
NOMBRE="${4:-}"

if [[ -z "$ORIGEN" || -z "$INICIO" || -z "$DURACION" || -z "$NOMBRE" ]]; then
  echo "❌ Error en los argumentos."
  echo "Uso: $0 <archivo_origen> <inicio_HH:MM:SS> <duracion_segundos> <nombre_salida>"
  echo "Ejemplo: $0 video_completo.mp4 00:01:25 3 kane_penal_euro"
  exit 1
fi

DESTINO_DIR="${5:-/Users/cesarue/Desktop/CYTM/03_CLIPS_FLOW/BLOQUE_3_PURGATORIO_FINALES/01_JUGADAS_PARTIDOS}"
mkdir -p "$DESTINO_DIR"
SALIDA="$DESTINO_DIR/${NOMBRE}.mp4"

echo "🎬 Cortando clip de $ORIGEN..."
echo "⏱  Desde: $INICIO por $DURACION segundos"
echo "🛡️  Aplicando: Escala 1.08x (Fair Use Anti-ContentID) + Silenciado de audio broadcast"

# Escala 1.08x con crop a 1920x1080 exacto para eliminar marcas de agua de esquinas
# y modificar el fingerprint visual de la Premier League/UEFA
ffmpeg -y -ss "$INICIO" -t "$DURACION" -i "$ORIGEN" \
  -vf "scale=2074:1166,crop=1920:1080" \
  -c:v libx264 -preset fast -crf 20 \
  -an \
  "$SALIDA"

echo "✅ Clip guardado con éxito en: $SALIDA"
ls -lh "$SALIDA"

