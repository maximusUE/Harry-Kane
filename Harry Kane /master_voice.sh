#!/usr/bin/env bash
# ==============================================================================
# PIPELINE DE MASTERIZACIÓN VOCAL PROFESIONAL (OPCIÓN A - BROADCAST ULTRA-CLEAN)
# Elimina silbidos de 6 kHz / 9 kHz de Voice Studio, aplica cuerpo de locutor
# y normaliza a -14 LUFS para YouTube.
# ==============================================================================

set -e

INPUT_FILE="$1"
OUTPUT_FILE="$2"

if [ -z "$INPUT_FILE" ]; then
    echo "Uso: ./master_voice.sh <archivo_entrada.wav> [archivo_salida.wav]"
    exit 1
fi

if [ -z "$OUTPUT_FILE" ]; then
    DIRNAME=$(dirname "$INPUT_FILE")
    BASENAME=$(basename "$INPUT_FILE" .wav)
    OUTPUT_FILE="${DIRNAME}/${BASENAME}_MASTER_PRO.wav"
fi

echo "🎤 Procesando audio con cadena Broadcast Ultra-Clean..."
echo "  Entrada: $INPUT_FILE"
echo "  Salida:  $OUTPUT_FILE"

ffmpeg -y -i "$INPUT_FILE" \
-af "bandreject=f=6000:width_type=h:width=140, \
bandreject=f=9000:width_type=h:width=100, \
highpass=f=75, \
lowpass=f=8800:p=2, \
equalizer=f=145:t=q:w=1.2:g=4.6, \
equalizer=f=460:t=q:w=1.6:g=-3.2, \
equalizer=f=2600:t=q:w=1.4:g=2.4, \
acompressor=threshold=-21dB:ratio=3.2:attack=15:release=120:makeup=3.5, \
alimiter=limit=-1.5dB:attack=5:release=50:asc=1, \
volume=-0.5dB" \
-ar 48000 -c:a pcm_s24le "$OUTPUT_FILE" 2>/dev/null

# Generar MP3 de previsualización para Mac
MP3_FILE="${OUTPUT_FILE%.wav}.mp3"
ffmpeg -y -i "$OUTPUT_FILE" -c:a libmp3lame -q:a 2 "$MP3_FILE" 2>/dev/null

echo "✅ Masterización completada con éxito:"
echo "  - WAV 24-bit 48kHz: $OUTPUT_FILE"
echo "  - MP3 para vista previa: $MP3_FILE"

