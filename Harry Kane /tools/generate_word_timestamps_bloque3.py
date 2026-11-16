#!/usr/bin/env python3
"""
Generador de Marcas de Tiempo Palabra por Palabra y Subtítulos Dinámicos para Bloque 3
CYTM - Don César Media Agency
"""

import os
import json
import faster_whisper
import soundfile as sf

def main():
    SNAPSHOT_DIR = os.path.expanduser("~/.cache/huggingface/hub/models--deepdml--faster-whisper-large-v3-turbo-ct2/snapshots")
    snapshot_folders = os.listdir(SNAPSHOT_DIR)
    model_path = os.path.join(SNAPSHOT_DIR, snapshot_folders[0])
    print(f"🎙️ Cargando modelo Whisper desde: {model_path}...")

    model = faster_whisper.WhisperModel(model_path, device="cpu", compute_type="int8")

    audio_p1 = "/Users/cesarue/Desktop/CYTM/motion-studio/public/bloque3_part1.wav"
    audio_p2 = "/Users/cesarue/Desktop/CYTM/motion-studio/public/bloque3_part2.wav"

    data_p1, sr1 = sf.read(audio_p1)
    p1_duration = round(len(data_p1) / sr1, 2)
    print(f"Duración Pista 1: {p1_duration}s")

    data_p2, sr2 = sf.read(audio_p2)
    p2_duration = round(len(data_p2) / sr2, 2)
    print(f"Duración Pista 2: {p2_duration}s")
    print(f"Duración Total Master: {round(p1_duration + p2_duration, 2)}s")

    print("\n📝 Transcribiendo Parte 1 (Historia de las 6 Finales)...")
    segments_p1, _ = model.transcribe(audio_p1, word_timestamps=True, language="es")
    words_p1 = []
    for seg in segments_p1:
        for w in seg.words:
            clean_word = w.word.strip()
            if clean_word:
                words_p1.append({
                    "word": clean_word,
                    "start": round(w.start, 2),
                    "end": round(w.end, 2),
                    "part": 1
                })

    print("📝 Transcribiendo Parte 2 (El Espejo y Reflexión)...")
    segments_p2, _ = model.transcribe(audio_p2, word_timestamps=True, language="es")
    words_p2 = []
    words_p2_standalone = []
    for seg in segments_p2:
        for w in seg.words:
            clean_word = w.word.strip()
            if clean_word:
                words_p2_standalone.append({
                    "word": clean_word,
                    "start": round(w.start, 2),
                    "end": round(w.end, 2)
                })
                words_p2.append({
                    "word": clean_word,
                    "start": round(w.start + p1_duration, 2),
                    "end": round(w.end + p1_duration, 2),
                    "part": 2
                })

    all_words = words_p1 + words_p2
    print(f"\n📊 Total palabras Parte 1: {len(words_p1)}")
    print(f"📊 Total palabras Parte 2: {len(words_p2)}")
    print(f"📊 Total palabras Master: {len(all_words)}")

    out_master_words = "/Users/cesarue/Desktop/CYTM/motion-studio/public/bloque3_words.json"
    out_short_words = "/Users/cesarue/Desktop/CYTM/motion-studio/public/bloque3_short_words.json"

    with open(out_master_words, "w", encoding="utf-8") as f:
        json.dump(all_words, f, ensure_ascii=False, indent=2)

    with open(out_short_words, "w", encoding="utf-8") as f:
        json.dump(words_p2_standalone, f, ensure_ascii=False, indent=2)

    # Agrupación de subtítulos dinámicos (3-4 palabras con corte por puntuación o pausa)
    def build_chunks(words_list, max_words=4):
        chunks = []
        current = []
        for i, w in enumerate(words_list):
            current.append(w)
            has_punct = any(w['word'].endswith(p) for p in ['.', ',', ':', ';', '!', '?'])
            has_pause = False
            if i < len(words_list) - 1:
                gap = words_list[i+1]['start'] - w['end']
                if gap > 0.35:
                    has_pause = True
            if has_punct or has_pause or len(current) >= max_words:
                chunks.append({
                    'start': current[0]['start'],
                    'end': current[-1]['end'] + 0.15,
                    'text': ' '.join([x['word'] for x in current]),
                    'words': current
                })
                current = []
        if current:
            chunks.append({
                'start': current[0]['start'],
                'end': current[-1]['end'] + 0.15,
                'text': ' '.join([x['word'] for x in current]),
                'words': current
            })
        return chunks

    chunks_master = build_chunks(all_words)
    chunks_short = build_chunks(words_p2_standalone)

    out_master_chunks = "/Users/cesarue/Desktop/CYTM/motion-studio/public/bloque3_subtitle_chunks.json"
    out_short_chunks = "/Users/cesarue/Desktop/CYTM/motion-studio/public/bloque3_short_subtitle_chunks.json"

    with open(out_master_chunks, "w", encoding="utf-8") as f:
        json.dump(chunks_master, f, ensure_ascii=False, indent=2)

    with open(out_short_chunks, "w", encoding="utf-8") as f:
        json.dump(chunks_short, f, ensure_ascii=False, indent=2)

    print(f"✅ Generados {len(chunks_master)} chunks de subtítulos para Master: {out_master_chunks}")
    print(f"✅ Generados {len(chunks_short)} chunks de subtítulos para Short: {out_short_chunks}")

if __name__ == '__main__':
    main()

