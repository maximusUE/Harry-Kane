#!/usr/bin/env bash
set -euo pipefail

# Uso: bash "Harry Kane /tools/render_bloque_v2.sh" <1|2|3|4|5|6> [final|preview]
BLOQUE="${1:-}"
MODE="${2:-final}"

if [[ ! "$BLOQUE" =~ ^[1-6]$ ]]; then
  echo "Uso: $0 <1|2|3|4|5|6> [final|preview]"
  exit 1
fi

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
STUDIO_DIR="$ROOT_DIR/motion-studio"
OUT_DIR="$ROOT_DIR/04_VIDEO_FINAL"
mkdir -p "$OUT_DIR"

COMP_ID="HarryKaneV2Bloque${BLOQUE}"
if [[ "$MODE" == "preview" ]]; then
  SCALE="0.25"
  OUT_FILE="$OUT_DIR/v2_bloque${BLOQUE}_preview.mp4"
else
  SCALE="0.5"
  OUT_FILE="$OUT_DIR/v2_bloque${BLOQUE}_1080p.mp4"
fi

echo "=== [1/4] Limpiando procesos remotion/headless huérfanos ==="
pkill -f "remotion render" || true
pkill -f "chrome-headless-shell" || true
sleep 1

echo "=== [2/4] Validando assets y TypeScript ==="
python3 - "$ROOT_DIR" <<'PY'
import os, re, sys
root = sys.argv[1]
pub = os.path.join(root, "motion-studio", "public")
tl = os.path.join(root, "motion-studio", "src", "HarryKaneV2", "v2TimelineData.ts")
with open(tl, encoding="utf-8") as f:
    text = f.read()
refs = set(re.findall(r'(?:mediaSrc|imageSrc|src|audioSrc):\s*"([^"]+)"', text))
missing = [r for r in sorted(refs) if not os.path.exists(os.path.join(pub, r))]
if missing:
    print("ERROR - Assets faltantes:", missing)
    sys.exit(1)
print(f"OK - {len(refs)} assets verificados en public/")
PY

cd "$STUDIO_DIR"
./node_modules/.bin/tsc --noEmit
echo "OK - tsc --noEmit sin errores"

echo "=== [3/4] Renderizando $COMP_ID ($MODE | scale=$SCALE) ==="
MAX_ATTEMPTS=2
ATTEMPT=1
RENDER_OK=0
while [[ $ATTEMPT -le $MAX_ATTEMPTS ]]; do
  echo "--- Intento $ATTEMPT/$MAX_ATTEMPTS ---"
  pkill -f "chrome-headless-shell" || true
  sleep 1
  if ./node_modules/.bin/remotion render "$COMP_ID" "$OUT_FILE" \
    --scale="$SCALE" \
    --timeout=240000 \
    --concurrency=2 \
    --pixel-format=yuv420p \
    --offthreadvideo-cache-size-in-bytes=268435456; then
    RENDER_OK=1
    break
  fi
  echo "Reintentando tras fallo de arranque..."
  ATTEMPT=$((ATTEMPT + 1))
  sleep 2
done

if [[ $RENDER_OK -ne 1 ]]; then
  echo "ERROR: Falló el render tras $MAX_ATTEMPTS intentos"
  exit 1
fi

echo "=== [4/4] Verificación ffprobe ==="
ffprobe -v error \
  -show_entries format=duration,size \
  -show_entries stream=codec_name,width,height,r_frame_rate,nb_frames \
  -of default=noprint_wrappers=1 "$OUT_FILE"
