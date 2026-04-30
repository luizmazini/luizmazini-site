#!/usr/bin/env bash
set -euo pipefail

# Caminho para o vault Obsidian com os docs de referencia.
# Configure via variavel de ambiente ou edite este arquivo localmente
# (nao commitar o path — e especifico de cada maquina).
#
# Exemplo:
#   export BRAIN_PATH="/Users/seunome/path/ate/o/brain"
#   bun run sync-brain

BRAIN="${BRAIN_PATH:-}"

if [ -z "$BRAIN" ]; then
  echo "ERRO: variavel BRAIN_PATH nao definida."
  echo "Exporte o caminho do vault antes de rodar:"
  echo "  export BRAIN_PATH=\"/caminho/ate/o/brain\""
  exit 1
fi

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
