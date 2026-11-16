# 🎙️ Bóveda de la Voz Oficial de Don César (CYTM)

Esta carpeta contiene todos los activos originales y de calibración de la **Voz Oficial Mexicana de Don César**, diseñada para narración de documentales deportivos en YouTube, Shorts y TikTok.

---

## 📁 Contenido de esta Carpeta

| Archivo | Descripción | Uso |
| :--- | :--- | :--- |
| **`01_AUDIO_ORIGINAL_COMPLETO.wav`** | Toma completa original generada en VoiceStudio (38.5s). | Archivo de referencia histórico. |
| **`02_AUDIO_MASTER_BROADCAST.wav`** | Versión masterizada a norma broadcast (-14 LUFS, 24-bit 48kHz). | Estándar de audio para YouTube. |
| **`03_MUESTRA_REFERENCIA_7S.wav`** | Muestra acústica pura de 7.4 segundos (sin cortes bruscos). | La muestra que usa VoiceStudio para clonar sin errores. |
| **`PERFIL_VOZ_OFICIAL.json`** | Metadatos técnicos de configuración y fonética. | Registro de especificaciones. |
| **`instalar_voz_en_voicestudio.sh`** | Script de instalación automática de 1 solo clic. | Restaura la voz en VoiceStudio en cualquier Mac. |

---

## 📍 ¿Dónde vive la voz en su Mac?

VoiceStudio almacena internamente sus perfiles en la siguiente ruta del sistema:
* **Archivo de Audio:** `~/Library/Application Support/OmniVoice/voices/6f7285dd.wav`
* **Base de Datos:** `~/Library/Application Support/OmniVoice/omnivoice.db`
* **Nombre en Pantalla:** `Don César - Voz Oficial MX`

---

## 🛡️ ¿Cómo respaldarla para que sea 100% suya de por vida?

Para respaldarla en su nube personal (Google Drive, iCloud, Dropbox) o en una memoria USB:
1. Copie esta carpeta entera: **`00_VOZ_OFICIAL_DON_CESAR`**.
2. Guárdela en su disco de respaldo o en su Google Drive.
3. Si algún día cambia de computadora Mac o reinstala VoiceStudio:
   * Abra la terminal en esta carpeta y ejecute:
     ```bash
     ./instalar_voz_en_voicestudio.sh
     ```
   * ¡Y listo! La voz aparecerá de inmediato en su VoiceStudio.

