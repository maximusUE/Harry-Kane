#!/usr/bin/env bash
# Generates a 4x3 visual QA contact sheet for any video
VIDEO="$1"
OUTPUT="${2:-qa_sheet.jpg}"

if [ -z "$VIDEO" ]; then
  echo "Usage: bash tools/qa/contact_sheet.sh <path_to_video.mp4> [output_sheet.jpg]"
  exit 1
fi

ffmpeg -y -v error -i "$VIDEO" -vf "select='not(mod(n\,120))',scale=480:-1,tile=4x3" -frames:v 1 "$OUTPUT"
echo "Contact sheet generated at: $OUTPUT"

