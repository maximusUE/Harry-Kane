#!/usr/bin/env python3
"""
Generador Maestro de Voz para Bloque 3: Don César - Voz Oficial MX
Usa OmniVoice con el perfil oficial de Don César (03_MUESTRA_REFERENCIA_7S.wav)
y genera los audios para la Parte 1 (Historia) y Parte 2 (Reflexión).
"""

import os
import sys
import time
import torch
import soundfile as sf
import numpy as np

sys.path.insert(0, '/Users/cesarue/Library/Application Support/VoiceStudio/runtime/project/backend')
sys.path.insert(0, '/Users/cesarue/Library/Application Support/VoiceStudio/runtime/project')

from omnivoice.models.omnivoice import OmniVoice

REF_AUDIO = '/Users/cesarue/Desktop/CYTM/00_VOZ_OFICIAL_DON_CESAR/03_MUESTRA_REFERENCIA_7S.wav'
REF_TEXT = 'Para entender la mente de un titán, hay que viajar al momento exacto en que el mundo decidió ponerle una etiqueta.'

PARTE1_CHUNKS = [
    "Cuando el Tottenham Hotspur finalmente le dio una oportunidad en el primer equipo, Kane desató una tormenta.",
    "En cuestión de temporadas se convirtió en uno de los delanteros más temidos del continente. Máximo goleador de la Premier League una, dos, tres veces. Doscientos ochenta goles con la camiseta de los Spurs, y Bota de Oro del Mundial de Rusia 2018 como capitán de Inglaterra.",
    "En el papel, lo tenía todo. Pero el deporte de élite tiene una crueldad que no perdona a nadie: puedes ser el mejor en tu puesto, pero si no levantas trofeos, el mundo te juzgará como a un perdedor.",
    "Y entonces comenzó el calvario.",
    "Año 2015: Final de la Copa de la Liga ante el Chelsea de Mourinho. Año 2019: La primera final de Champions League en Madrid. El Liverpool golpea en el primer minuto y Kane termina de rodillas en el pasto, con la mirada vacía.",
    "Año 2021: Otra final de Copa ante el Manchester City. Verano de 2021: La herida más profunda. La final de la Eurocopa en Wembley ante sesenta mil compatriotas. Penales contra Italia, Inglaterra pierde, y Kane ve escapar el trofeo entre sus dedos.",
    "Año 2024: Final en Berlín frente a España. Y otra vez la misma escena desgarradora: Kane en el césped, derrotado, escuchando el silbatazo final.",
    "Seis finales consecutivas disputadas. Seis derrotas. Cero trofeos."
]

PARTE2_CHUNKS = [
    "Pregúntate esto: ¿Qué haces cuando das tu cien por ciento y las cosas salen mal?",
    "¿Qué haces cuando te sacrificas durante meses comiendo limpio, entrenando con dolor, cuidando cada peso, y al final del año sientes que no avanzaste nada?",
    "La mayoría de la gente se derrumba. Se hace la víctima. Dice: El universo me odia, Nací con mala suerte, Tengo la genética equivocada.",
    "En ese instante es donde el noventa y nueve por ciento de los hombres se rinden. Se conforman con la mediocridad porque conformarse duele menos que intentarlo y volver a fallar.",
    "Pero los hombres de hierro tienen un cableado mental diferente: no interpretan la derrota como una señal para parar, sino como una factura que todavía no han terminado de pagar."
]

def synthesize_chunks(model, chunks, out_path, seed=1277811098):
    print(f"🎤 Sintetizando {len(chunks)} fragmentos para: {out_path}")
    waveforms = []
    sr = 24000
    silence_250ms = np.zeros(int(sr * 0.25), dtype=np.float32)
    silence_400ms = np.zeros(int(sr * 0.40), dtype=np.float32)

    for i, text in enumerate(chunks):
        t0 = time.time()
        torch.manual_seed(seed + i)
        print(f"  [{i+1}/{len(chunks)}] Generando: {text[:60]}...")
        wav = model.generate(
            text=text,
            language='Spanish',
            ref_audio=REF_AUDIO,
            ref_text=REF_TEXT,
            num_step=32,
        )
        audio = wav[0].cpu().squeeze().numpy()
        waveforms.append(audio)
        # Añadir pequeña pausa natural entre oraciones
        if i < len(chunks) - 1:
            waveforms.append(silence_350ms := np.zeros(int(sr * 0.35), dtype=np.float32))
        print(f"    -> {len(audio)/sr:.2f}s en {time.time()-t0:.2f}s")

    full_audio = np.concatenate(waveforms)
    sf.write(out_path, full_audio, sr)
    dur = len(full_audio) / sr
    print(f"✅ Guardado archivo combinado: {out_path} ({dur:.2f}s)")
    return out_path

def main():
    device = 'mps' if torch.backends.mps.is_available() else 'cpu'
    print(f"🚀 Iniciando motor OmniVoice en {device}...")
    model = OmniVoice.from_pretrained('k2-fsa/OmniVoice', device_map=device, dtype=torch.float16, load_asr=False)

    os.makedirs('/Users/cesarue/Desktop/CYTM/00_VOZ_OFICIAL_DON_CESAR/BLOQUE_3_RAW', exist_ok=True)
    raw_p1 = '/Users/cesarue/Desktop/CYTM/00_VOZ_OFICIAL_DON_CESAR/BLOQUE_3_RAW/bloque3_part1_raw.wav'
    raw_p2 = '/Users/cesarue/Desktop/CYTM/00_VOZ_OFICIAL_DON_CESAR/BLOQUE_3_RAW/bloque3_part2_raw.wav'

    synthesize_chunks(model, PARTE1_CHUNKS, raw_p1)
    synthesize_chunks(model, PARTE2_CHUNKS, raw_p2)

if __name__ == '__main__':
    main()

