#!/bin/zsh

if [ $# -ne 2 ]; then
  echo "Uso: $0 <file> <larghezza>"
  exit 1
fi

local FILE="$1"
local LARGHEZZA="$2"

# PNG
magick "$FILE" -filter Lanczos -resize "${LARGHEZZA}x" -quality 90 "${FILE:t:r}_1x.png"
magick "$FILE" -filter Lanczos -resize "$((LARGHEZZA * 2))x" -quality 90 "${FILE:t:r}_2x.png"
magick "$FILE" -filter Lanczos -resize "$((LARGHEZZA * 3))x" -quality 90 "${FILE:t:r}_3x.png"
magick "$FILE" -quality 90 "${FILE:t:r}_full.png"

# WebP
magick "$FILE" -filter Lanczos -resize "${LARGHEZZA}x" -quality 90 "${FILE:t:r}_1x.webp"
magick "$FILE" -filter Lanczos -resize "$((LARGHEZZA * 2))x" -quality 90 "${FILE:t:r}_2x.webp"
magick "$FILE" -filter Lanczos -resize "$((LARGHEZZA * 3))x" -quality 90 "${FILE:t:r}_3x.webp"
magick "$FILE" -quality 90 "${FILE:t:r}_full.webp"

# AVIF
magick "$FILE" -filter Lanczos -resize "${LARGHEZZA}x" -quality 90 -define avif:effort=6 "${FILE:t:r}_1x.avif"
magick "$FILE" -filter Lanczos -resize "$((LARGHEZZA * 2))x" -quality 90 -define avif:effort=6 "${FILE:t:r}_2x.avif"
magick "$FILE" -filter Lanczos -resize "$((LARGHEZZA * 3))x" -quality 90 -define avif:effort=6 "${FILE:t:r}_3x.avif"
magick "$FILE" -quality 90 -define avif:effort=6 "${FILE:t:r}_full.avif"
