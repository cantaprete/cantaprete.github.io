#!/bin/zsh

if [ $# -ne 2 ]; then
  echo "Uso: $0 <file> <larghezza>"
  exit 1
fi

file=$1
larghezza=$2

larghezza_px=$((larghezza * 100 / 120))
cartella="${file%.*}"
mkdir -p "$cartella"

# PNG
convert "$file" -filter Lanczos -resize "${larghezza_px}x" -quality 90 "$cartella/1x.png"
convert "$file" -filter Lanczos -resize "$((larghezza_px * 2))x" -quality 90 "$cartella/2x.png"
convert "$file" -filter Lanczos -resize "$((larghezza_px * 3))x" -quality 90 "$cartella/3x.png"
convert "$file" -quality 90 "$cartella/full.png"

# WebP
convert "$file" -filter Lanczos -resize "${larghezza_px}x" -quality 90 "$cartella/1x.webp"
convert "$file" -filter Lanczos -resize "$((larghezza_px * 2))x" -quality 90 "$cartella/2x.webp"
convert "$file" -filter Lanczos -resize "$((larghezza_px * 3))x" -quality 90 "$cartella/3x.webp"
convert "$file" -quality 90 "$cartella/full.webp"

# AVIF
convert "$file" -filter Lanczos -resize "${larghezza_px}x" -quality 90 -define avif:effort=6 "$cartella/1x.avif"
convert "$file" -filter Lanczos -resize "$((larghezza_px * 2))x" -quality 90 -define avif:effort=6 "$cartella/2x.avif"
convert "$file" -filter Lanczos -resize "$((larghezza_px * 3))x" -quality 90 -define avif:effort=6 "$cartella/3x.avif"
convert "$file" -quality 90 -define avif:effort=6 "$cartella/full.avif"
