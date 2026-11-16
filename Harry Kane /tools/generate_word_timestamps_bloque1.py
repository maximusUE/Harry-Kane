#!/usr/bin/env python3
"""
Generador de Marcas de Tiempo Palabra por Palabra y Subtítulos Dinámicos para Bloque 1
CYTM - Don César Media Agency (Protocolo Audio-First Word-Lock)
"""

import os
import json
import subprocess
import soundfile as sf
import faster_whisper

def main():
    SNAPSHOT_DIR = os.path.expanduser("~/.cache/huggingface/hub/models--deepdml--faster-whisper-large-v3-turbo-ct2/snapshots")
    snapshot_folders = os.listdir(SNAPSHOT_DIR)
    model_path = os.path.join(SNAPSHOT_DIR, snapshot_folders[0])
    print(f"🎙️ Cargando modelo Whisper desde: {model_path}...")

    model = faster_whisper.WhisperModel(model_path, device="cpu", compute_type="int8")

    audio_p1 = "/Users/cesarue/Desktop/CYTM/motion-studio/public/bloque1_part1.wav"
    audio_p2 = "/Users/cesarue/Desktop/CYTM/motion-studio/public/bloque1_part2.wav"

    data_p1, sr1 = sf.read(audio_p1)
    p1_duration = round(len(data_p1) / sr1, 2)
    print(f"Duración Pista 1: {p1_duration}s ({round(p1_duration * 30)} frames @ 30fps)")

    data_p2, sr2 = sf.read(audio_p2)
    p2_duration = round(len(data_p2) / sr2, 2)
    print(f"Duración Pista 2: {p2_duration}s ({round(p2_duration * 30)} frames @ 30fps)")
    print(f"Duración Total Master Bloque 1: {round(p1_duration + p2_duration, 2)}s ({round((p1_duration + p2_duration) * 30)} frames @ 30fps)")

    print("\n📝 Transcribiendo Parte 1 (París, El Balón de Oro y Las Burlas)...")
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

    print("📝 Transcribiendo Parte 2 (El Espejo de tu Vida y Romper la Cuarta Pared)...")
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

    def build_chunks(words_list, max_words=3):
        chunks = []
        curr = []
        for w in words_list:
            curr.append(w)
            if len(curr) >= max_words or w["word"].endswith(('.', ':', '?', '!')):
                chunks.append({
                    "text": " ".join([item["word"] for item in curr]),
                    "start": curr[0]["start"],
                    "end": curr[-1]["end"],
                    "words": curr
                })
                curr = []
        if curr:
            chunks.append({
                "text": " ".join([item["word"] for item in curr]),
                "start": curr[0]["start"],
                "end": curr[-1]["end"],
                "words": curr
            })
        return chunks

    sub_chunks = build_chunks(all_words)
    short_sub_chunks = build_chunks(words_p2_standalone)

    pub_dir = "/Users/cesarue/Desktop/CYTM/motion-studio/public"
    src_dir = "/Users/cesarue/Desktop/CYTM/motion-studio/src/HarryKaneBloque1"
    os.makedirs(src_dir, exist_ok=True)

    with open(os.path.join(pub_dir, "bloque1_words.json"), "w", encoding="utf-8") as f:
        json.dump(all_words, f, ensure_ascii=False, indent=2)

    with open(os.path.join(pub_dir, "bloque1_subtitle_chunks.json"), "w", encoding="utf-8") as f:
        json.dump(sub_chunks, f, ensure_ascii=False, indent=2)

    with open(os.path.join(pub_dir, "bloque1_short_words.json"), "w", encoding="utf-8") as f:
        json.dump(words_p2_standalone, f, ensure_ascii=False, indent=2)

    with open(os.path.join(pub_dir, "bloque1_short_subtitle_chunks.json"), "w", encoding="utf-8") as f:
        json.dump(short_sub_chunks, f, ensure_ascii=False, indent=2)

    subprocess.run(["cp", os.path.join(pub_dir, "bloque1_words.json"), os.path.join(src_dir, "bloque1_words.json")])
    subprocess.run(["cp", os.path.join(pub_dir, "bloque1_subtitle_chunks.json"), os.path.join(src_dir, "bloque1_subtitle_chunks.json")])

    print("✅ Marcas de tiempo guardadas exitosamente en public/ y src/HarryKaneBloque1/")

if __name__ == "__main__":
    main()

