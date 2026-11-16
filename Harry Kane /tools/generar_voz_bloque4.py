#!/usr/bin/env python3
"""
Generador Maestro de Voz para Bloque 4: Don César - Voz Oficial MX
Usa OmniVoice con el perfil oficial de Don César (03_MUESTRA_REFERENCIA_7S.wav)
y genera los audios para la Parte 1 (La Apuesta de Múnich y el Año Invicto)
y Parte 2 (Silencio ante la Burla, Gimnasio a las 6 AM y Récord Goleador),
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
    "En el verano de 2023, con treinta años cumplidos, Harry Kane tomó la decisión más arriesgada de su carrera.",
    "Podía haberse quedado en el Tottenham. Era el ídolo intocable, el capitán, el rey del club. Tenía un contrato multimillonario garantizado de por vida.",
    "Pero el confort es el veneno más sutil de la ambición.",
    "Kane lo dejó todo y firmó por el Bayern Múnich. Un club que había ganado la Bundesliga durante once años seguidos. Parecía una fórmula matemática perfecta: llego a Alemania y gano mi primer trofeo en seis meses.",
    "Y entonces, la vida le asestó la bofetada más retorcida de su historia.",
    "En la primera temporada de Kane en Alemania, el Bayern no ganó absolutamente nada por primera vez en más de una década. El modesto Bayer Leverkusen firmó la temporada invicta más legendaria en la historia del país.",
    "El acoso mediático fue implacable. En Inglaterra y en Europa los titulares eran salvajes: La Maldición de Kane es contagiosa. El hombre que arruinó al club más ganador de Alemania."
]

PARTE2_CHUNKS = [
    "Si un guionista de cine hubiera querido quebrar psicológicamente a un personaje, no habría escrito un guion más cruel.",
    "Pero aquí está la gran lección: mientras la prensa se reía, Kane no dio una sola conferencia de prensa para poner pretextos. No culpó a sus compañeros. No culpó al entrenador.",
    "Se encerró en el gimnasio del club a las seis de la mañana. Perfeccionó cada detalle de su nutrición. Trabajó la fuerza explosiva en la nieve.",
    "Y en la siguiente temporada destrozó todos los registros goleadores de la liga alemana, liderando al equipo no con palabras, sino con un apetito voraz e insaciable."
]

def synthesize_chunks(model, chunks, out_path, seed=1277811400):
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

    raw_dir = '/Users/cesarue/Desktop/CYTM/Harry Kane /00_VOZ_OFICIAL_DON_CESAR/BLOQUE_4_RAW'
    os.makedirs(raw_dir, exist_ok=True)
    raw_p1 = os.path.join(raw_dir, 'bloque4_part1_raw.wav')
    raw_p2 = os.path.join(raw_dir, 'bloque4_part2_raw.wav')

    synthesize_chunks(model, PARTE1_CHUNKS, raw_p1, seed=1277811401)
    synthesize_chunks(model, PARTE2_CHUNKS, raw_p2, seed=1277811501)

    pub_dir = '/Users/cesarue/Desktop/CYTM/motion-studio/public'
    inv_dir = '/Users/cesarue/Desktop/CYTM/Harry Kane /Material de Investigacion '

    master_audio(
        raw_p1,
        os.path.join(pub_dir, 'bloque4_part1.wav'),
        os.path.join(pub_dir, 'bloque4_part1.mp3')
    )
    master_audio(
        raw_p2,
        os.path.join(pub_dir, 'bloque4_part2.wav'),
        os.path.join(pub_dir, 'bloque4_part2.mp3')
    )

    # Respaldo en Material de Investigación
    subprocess.run(["cp", "-f", os.path.join(pub_dir, 'bloque4_part1.wav'), os.path.join(inv_dir, 'bloque4_part1.wav')], check=True)
    subprocess.run(["cp", "-f", os.path.join(pub_dir, 'bloque4_part2.wav'), os.path.join(inv_dir, 'bloque4_part2.wav')], check=True)
    print("✅ Respaldo completado en Material de Investigación.")

if __name__ == '__main__':
    main()

