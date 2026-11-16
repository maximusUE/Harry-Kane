#!/bin/bash
# ==============================================================================
# INSTALADOR / RESTAURADOR DE LA VOZ OFICIAL DE DON CÉSAR EN VOICESTUDIO
# ==============================================================================
set -e

DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
TARGET_DIR="$HOME/Library/Application Support/OmniVoice"
VOICES_DIR="$TARGET_DIR/voices"
DB_PATH="$TARGET_DIR/omnivoice.db"
PROFILE_ID="6f7285dd"
NAME="Don César - Voz Oficial MX"
REF_TEXT="Para entender la mente de un titán, hay que viajar al momento exacto en que el mundo decidió ponerle una etiqueta."

echo "🎙️  Instalando la Voz Oficial de Don César en VoiceStudio..."

mkdir -p "$VOICES_DIR"

# 1. Copiar muestra acústica calibrada
cp "$DIR/03_MUESTRA_REFERENCIA_7S.wav" "$VOICES_DIR/${PROFILE_ID}.wav"
echo "✅ Archivo de audio de clonación copiado a: $VOICES_DIR/${PROFILE_ID}.wav"

# 2. Registrar en la base de datos de VoiceStudio
python3 -c "
import sqlite3, time
conn = sqlite3.connect('$DB_PATH')
cur = conn.cursor()
cur.execute('''
    INSERT INTO voice_profiles (id, name, ref_audio_path, ref_text, instruct, language, is_locked, kind, created_at)
    VALUES (?, ?, ?, ?, ?, ?, 0, 'clone', ?)
    ON CONFLICT(id) DO UPDATE SET
        name = excluded.name,
        ref_audio_path = excluded.ref_audio_path,
        ref_text = excluded.ref_text,
        language = excluded.language
''', ('$PROFILE_ID', '$NAME', '${PROFILE_ID}.wav', '$REF_TEXT', '', 'Spanish', time.time()))
conn.commit()
print('✅ Perfil registrado en la base de datos local de VoiceStudio!')
"

echo "🎉 ¡Listo! La voz '$NAME' está activa y lista para usarse en VoiceStudio."

