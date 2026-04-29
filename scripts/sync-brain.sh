#!/usr/bin/env bash
set -euo pipefail

BRAIN="/Users/mazini/Library/Mobile Documents/iCloud~md~obsidian/Documents/Mazini SB/1. Projetos/Marca Mazini/marketing/brain"

if [ ! -d "$BRAIN" ]; then
  echo "ERRO: vault nao encontrado em $BRAIN"
  echo "Verificar se o iCloud esta sincronizado e o vault Obsidian esta montado."
  exit 1
fi

mkdir -p .brain-ref

echo "-> Sincronizando .brain-ref/ com o vault..."

cp "$BRAIN/design.md" .brain-ref/design.md && echo "  ok design.md"
cp "$BRAIN/voice.md" .brain-ref/voice.md && echo "  ok voice.md"
cp "$BRAIN/decisions/posicionamento-2026-04.md" .brain-ref/posicionamento.md && echo "  ok posicionamento.md"
cp "$BRAIN/context/_handoff.md" .brain-ref/handoff.md && echo "  ok handoff.md"
cp "$BRAIN/context/journey.md" .brain-ref/journey.md && echo "  ok journey.md"

echo ""
echo "Sync concluido. Ultima sincronizacao: $(date)"
