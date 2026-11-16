#!/usr/bin/env python3
"""
Generador de Voz Oficial V2 (Jorge Documental MX - es-MX-JorgeNeural)
Lee 02_TEXTO_LIMPIO_VOICESTUDIO_POR_BLOQUES.md directamente sin alteraciones
fonéticas artificiales (aprovechando el diccionario bilingüe nativo de Jorge),
con cadencia natural (--rate=-3%, --pitch=-2Hz) y normalización transparente
a norma broadcast YouTube (-14 LUFS, 48kHz stereo).
"""

import argparse
import asyncio
import os
import re
import subprocess
import edge_tts

BASE_DIR = "/Users/cesarue/Desktop/CYTM/Harry Kane "
TEXT_FILE = os.path.join(BASE_DIR, "02_TEXTO_LIMPIO_VOICESTUDIO_POR_BLOQUES.md")
OUT_DIR = os.path.join(BASE_DIR, "00_VOZ_OFICIAL_JORGE_MX_V2")

VOICE = "es-MX-JorgeNeural"
RATE = "-3%"
PITCH = "-2Hz"

# Cadena limpia y transparente: respeta 100% el timbre natural de test_jorge_clubes.mp3
AF_CHAIN = "highpass=f=75,loudnorm=I=-14:TP=-1.0:LRA=7"


def parse_blocks(md_path: str) -> dict[int, str]:
    with open(md_path, "r", encoding="utf-8") as f:
        content = f.read()

    blocks = {}
    pattern = re.compile(r"## BLOQUE (\d+)\s*\n(.*?)(?=\n---\s*\n## BLOQUE |\Z)", re.DOTALL)
    for match in pattern.finditer(content):
        num = int(match.group(1))
        text = match.group(2).strip()
        text = re.sub(r"\n---\s*$", "", text).strip()
        blocks[num] = text
    return blocks


def get_duration(path: str) -> float:
    res = subprocess.run(
        ["ffprobe", "-v", "error", "-show_entries", "format=duration", "-of", "default=noprint_wrappers=1:nokey=1", path],
        capture_output=True, text=True, check=True
    )
    return float(res.stdout.strip())


async def synth_block(num: int, text: str):
    raw_mp3 = os.path.join(OUT_DIR, f"bloque{num}_raw.mp3")
    wav_out = os.path.join(OUT_DIR, f"bloque{num}_jorge_mx_master.wav")
    mp3_out = os.path.join(OUT_DIR, f"bloque{num}_jorge_mx_master.mp3")

    words = len(text.split())
    print(f"🎙️ Sintetizando Bloque {num} ({words} palabras, tono limpio nativo)...")
    for attempt in range(1, 4):
        try:
            communicate = edge_tts.Communicate(text, VOICE, rate=RATE, pitch=PITCH)
            await communicate.save(raw_mp3)
            break
        except Exception as e:
            if attempt == 3:
                raise
            print(f"⚠️ Reintentando Bloque {num} (intento {attempt}/3) tras error: {e}")
            await asyncio.sleep(2)

    subprocess.run(
        ["ffmpeg", "-y", "-i", raw_mp3, "-af", AF_CHAIN, "-ar", "48000", "-ac", "2", "-c:a", "pcm_s16le", wav_out],
        check=True, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL
    )
    subprocess.run(
        ["ffmpeg", "-y", "-i", wav_out, "-c:a", "libmp3lame", "-b:a", "320k", mp3_out],
        check=True, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL
    )
    os.remove(raw_mp3)

    dur = get_duration(wav_out)
    print(f"✅ Bloque {num} listo -> {dur:.2f}s ({dur/60:.2f} min)")
    return dur


async def main():
    parser = argparse.ArgumentParser(description="Genera audio Jorge MX por bloque.")
    parser.add_argument(
        "--bloques",
        type=int,
        nargs="+",
        help="Números de bloque a regenerar (ej. --bloques 3 6). Si se omite, regenera todos.",
    )
    args = parser.parse_args()

    os.makedirs(OUT_DIR, exist_ok=True)
    blocks = parse_blocks(TEXT_FILE)
    if not blocks:
        raise RuntimeError("No se encontraron bloques en el archivo de texto.")

    target_nums = sorted(args.bloques) if args.bloques else sorted(blocks.keys())
    total_dur = 0.0
    for num in target_nums:
        if num not in blocks:
            print(f"⚠️ Bloque {num} no encontrado en {TEXT_FILE}, omitiendo.")
            continue
        total_dur += await synth_block(num, blocks[num])

    print(f"\n🏁 DURACIÓN PROCESADA: {total_dur:.2f}s ({int(total_dur//60)}m {total_dur%60:.1f}s)")


if __name__ == "__main__":
    asyncio.run(main())
