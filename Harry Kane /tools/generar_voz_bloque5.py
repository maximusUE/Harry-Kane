#!/usr/bin/env python3
"""
Generador Maestro de Voz para Bloque 5: Don César - Voz Oficial MX
Usa OmniVoice con el perfil oficial de Don César (03_MUESTRA_REFERENCIA_7S.wav)
y genera los audios para la Parte 1 (La Consagración en París y La Verdad de la Maldición)
y Parte 2 (El Espejo, Tu Propio Arsenal y El Llamado a la Acción Inmediata),
masterizándolos a norma broadcast (-12.5 LUFS, 48kHz).
"""

import os
import sys
import time
import subprocess
import torch
import soundfile as sf
import numpy as np

sys.path.insert(0, '/Users/cesarue/Library/Application Support/VoiceStudio/runtime/project/backend')
sys.path.insert(0, '/Users/cesarue/Library/Application Support/VoiceStudio/runtime/project')

from omnivoice.models.omnivoice import OmniVoice

REF_AUDIO = '/Users/cesarue/Desktop/CYTM/Harry Kane /00_VOZ_OFICIAL_DON_CESAR/03_MUESTRA_REFERENCIA_7S.wav'
REF_TEXT = 'Para entender la mente de un titán, hay que viajar al momento exacto en que el mundo decidió ponerle una etiqueta.'

PARTE1_CHUNKS = [
    "Por eso hoy, cuando el mundo lo vio levantar el Balón de Oro 2026 en París, el aplauso no fue para un simple delantero que metió muchos goles.",
    "El aplauso de pie de las leyendas fue para un hombre que se negó a ser una víctima de su destino.",
    "La maldición no existía. La maldición solo era la prueba que la vida le puso enfrente para ver si su convicción era más fuerte que la opinión de millones de extraños.",
    "Ahora mírame bien y respóndete esto: ¿Cuál es tu Arsenal hoy?",
    "¿Quién fue la persona que te dijo que no servías, que estabas demasiado viejo, demasiado gordo, demasiado quebrado para lograr algo grande?",
    "¿Cuál es esa derrota que llevas años arrastrando y que usas como excusa para no volver a intentar nada con el alma?"
]

PARTE2_CHUNKS = [
    "Escúchame con claridad: La gloria no está reservada para los niños prodigio. La gloria está reservada para los hombres tercos. Para los que caen cinco veces y se levantan seis con la mandíbula apretada.",
    "No me importa si hoy tienes veinte kilos de más: sal a caminar esta misma noche.",
    "No me importa si tu cuenta de banco está en números rojos: haz ese plan financiero hoy y recorta los gastos innecesarios.",
    "No me importa si tu cuerpo está lesionado: rehabilítate con disciplina milimétrica día tras día.",
    "Harry Kane esperó quince años en la oscuridad para vivir su noche en París. Tu partido no ha terminado. Tu historia apenas está empezando en este minuto.",
    "Apaga este video. Levántate de esa silla. Y sal a demostrarle al mundo de qué estás hecho.",
    "Si este mensaje encendió algo en tu interior que estaba dormido, suscríbete y déjame en los comentarios: ¿Cuál es esa batalla que prometes ganar a partir de hoy? Te leo abajo. Nos vemos en el próximo episodio."
]

def synthesize_chunks(model, chunks, out_path, seed=1277811600):
    print(f"🎤 Sintetizando {len(chunks)} fragmentos para: {out_path}")
    waveforms = []
    sr = 24000

    for i, text in enumerate(chunks):
        t0 = time.time()
        torch.manual_seed(seed + i)
        print(f"  [{i+1}/{len(chunks)}] Generando: {text[:65]}...")
        wav = model.generate(
            text=text,
            language='Spanish',
            ref_audio=REF_AUDIO,
            ref_text=REF_TEXT,
            num_step=32,
        )
        audio = wav[0].cpu().squeeze().numpy()
        waveforms.append(audio)
        if i < len(chunks) - 1:
            waveforms.append(np.zeros(int(sr * 0.35), dtype=np.float32))
        print(f"    -> {len(audio)/sr:.2f}s en {time.time()-t0:.2f}s")

    full_audio = np.concatenate(waveforms)
    sf.write(out_path, full_audio, sr)
    dur = len(full_audio) / sr
    print(f"✅ Guardado archivo crudo: {out_path} ({dur:.2f}s)")
    return out_path

def master_audio(raw_path, final_wav_path, final_mp3_path):
    cmd_wav = [
        "ffmpeg", "-y", "-i", raw_path,
        "-af", "highpass=f=75,lowshelf=g=2.5:f=130,equalizer=f=3200:t=q:w=1.2:g=1.8,acompressor=threshold=-18dB:ratio=2.8:attack=15:release=120,loudnorm=I=-12.5:TP=-1.0:LRA=7",
        "-ar", "48000", "-ac", "2", "-c:a", "pcm_s16le",
        final_wav_path
    ]
    subprocess.run(cmd_wav, check=True, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
    cmd_mp3 = [
        "ffmpeg", "-y", "-i", final_wav_path,
        "-c:a", "libmp3lame", "-b:a", "320k",
        final_mp3_path
    ]
    subprocess.run(cmd_mp3, check=True, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
    print(f"🎚️ Masterizado Broadcast (-12.5 LUFS): {final_wav_path}")

def main():
    device = 'mps' if torch.backends.mps.is_available() else 'cpu'
    print(f"🚀 Iniciando motor OmniVoice en {device}...")
    model = OmniVoice.from_pretrained('k2-fsa/OmniVoice', device_map=device, dtype=torch.float16, load_asr=False)

    raw_dir = '/Users/cesarue/Desktop/CYTM/Harry Kane /00_VOZ_OFICIAL_DON_CESAR/BLOQUE_5_RAW'
    os.makedirs(raw_dir, exist_ok=True)
    raw_p1 = os.path.join(raw_dir, 'bloque5_part1_raw.wav')
    raw_p2 = os.path.join(raw_dir, 'bloque5_part2_raw.wav')

    synthesize_chunks(model, PARTE1_CHUNKS, raw_p1, seed=1277811601)
    synthesize_chunks(model, PARTE2_CHUNKS, raw_p2, seed=1277811701)

    pub_dir = '/Users/cesarue/Desktop/CYTM/motion-studio/public'
    inv_dir = '/Users/cesarue/Desktop/CYTM/Harry Kane /Material de Investigacion '

    final_p1 = os.path.join(pub_dir, 'bloque5_part1.wav')
    final_p1_mp3 = os.path.join(pub_dir, 'bloque5_part1.mp3')
    final_p2 = os.path.join(pub_dir, 'bloque5_part2.wav')
    final_p2_mp3 = os.path.join(pub_dir, 'bloque5_part2.mp3')

    master_audio(raw_p1, final_p1, final_p1_mp3)
    master_audio(raw_p2, final_p2, final_p2_mp3)

    # Backup en Material de Investigacion
    subprocess.run(["cp", final_p1, os.path.join(inv_dir, 'bloque5_part1.wav')], check=True)
    subprocess.run(["cp", final_p2, os.path.join(inv_dir, 'bloque5_part2.wav')], check=True)
    print("✅ Pistas maestras del Bloque 5 copiadas a public/ y respaldadas con éxito.")

if __name__ == "__main__":
    main()

