import json
import os
import faster_whisper

# Path to cached model snapshot
SNAPSHOT_DIR = os.path.expanduser("~/.cache/huggingface/hub/models--deepdml--faster-whisper-large-v3-turbo-ct2/snapshots")
snapshot_folders = os.listdir(SNAPSHOT_DIR)
model_path = os.path.join(SNAPSHOT_DIR, snapshot_folders[0])
print(f"Loading Whisper model from {model_path}...")

model = faster_whisper.WhisperModel(model_path, device="cpu", compute_type="int8")

audio_p1 = "/Users/cesarue/Desktop/CYTM/motion-studio/public/bloque2_part1.wav"
audio_p2 = "/Users/cesarue/Desktop/CYTM/motion-studio/public/bloque2_part2.wav"

print("Transcribing Part 1...")
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

p1_duration = 38.49  # exact duration of part 1 in seconds

print("Transcribing Part 2...")
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
print(f"Total words Part 1: {len(words_p1)}")
print(f"Total words Part 2: {len(words_p2)}")
print(f"Total words Master: {len(all_words)}")

out_master = "/Users/cesarue/Desktop/CYTM/motion-studio/public/bloque2_words.json"
out_short = "/Users/cesarue/Desktop/CYTM/motion-studio/public/bloque2_short_words.json"

with open(out_master, "w", encoding="utf-8") as f:
    json.dump(all_words, f, ensure_ascii=False, indent=2)

with open(out_short, "w", encoding="utf-8") as f:
    json.dump(words_p2_standalone, f, ensure_ascii=False, indent=2)

print(f"Saved master words to {out_master}")
print(f"Saved short words to {out_short}")

