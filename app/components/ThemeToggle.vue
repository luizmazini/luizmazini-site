<script setup lang="ts">
// Toggle 3-estados: system / light / dark.
// Visual: 3 letrinhas mono "S L D" — ativa em amarelo.
// Salva via @nuxtjs/color-mode (preference) com storageKey 'theme'.
const colorMode = useColorMode()

const setMode = (m: 'system' | 'light' | 'dark') => {
  colorMode.preference = m
}

const isActive = (m: 'system' | 'light' | 'dark') =>
  colorMode.preference === m
</script>

<template>
  <ClientOnly>
    <div class="theme-toggle" role="group" aria-label="Alternar tema">
      <button
        type="button"
        class="tt-btn"
        :class="{ active: isActive('system') }"
        aria-label="Tema do sistema"
        title="Sistema"
        @click="setMode('system')"
      >S</button>
      <button
        type="button"
        class="tt-btn"
        :class="{ active: isActive('light') }"
        aria-label="Tema claro"
        title="Claro"
        @click="setMode('light')"
      >L</button>
      <button
        type="button"
        class="tt-btn"
        :class="{ active: isActive('dark') }"
        aria-label="Tema escuro"
        title="Escuro"
        @click="setMode('dark')"
      >D</button>
    </div>
  </ClientOnly>
</template>

<style scoped>
.theme-toggle {
  position: fixed;
  bottom: 24px;
  right: 24px;
  display: flex;
  gap: 4px;
  padding: 6px 8px;
  border: 0.5px solid var(--border);
  background: var(--bg);
  border-radius: 999px;
  z-index: 60;
  font-family: var(--font-mono);
}

.tt-btn {
  background: transparent;
  border: 0;
  padding: 2px 6px;
  font-family: var(--font-mono);
  font-size: 11px;
  font-weight: 500;
  color: var(--text-tertiary);
  cursor: pointer;
  border-radius: 2px;
  transition: color 0.15s ease;
  letter-spacing: 0.04em;
}

.tt-btn:hover {
  color: var(--text-primary);
}

.tt-btn.active {
  color: var(--accent);
}
</style>
