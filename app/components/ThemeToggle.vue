<script setup lang="ts">
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
      <!-- System: monitor -->
      <button
        type="button"
        class="tt-btn"
        :class="{ active: isActive('system') }"
        aria-label="Tema do sistema"
        title="Sistema"
        @click="setMode('system')"
      >
        <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <rect x="2" y="3" width="20" height="14" rx="2" />
          <path d="M8 21h8M12 17v4" />
        </svg>
      </button>

      <!-- Light: sol -->
      <button
        type="button"
        class="tt-btn"
        :class="{ active: isActive('light') }"
        aria-label="Tema claro"
        title="Claro"
        @click="setMode('light')"
      >
        <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true">
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
        </svg>
      </button>

      <!-- Dark: lua -->
      <button
        type="button"
        class="tt-btn"
        :class="{ active: isActive('dark') }"
        aria-label="Tema escuro"
        title="Escuro"
        @click="setMode('dark')"
      >
        <svg viewBox="0 0 24 24" width="13" height="13" fill="currentColor" aria-hidden="true">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        </svg>
      </button>
    </div>
  </ClientOnly>
</template>

<style scoped>
.theme-toggle {
  position: fixed;
  bottom: 24px;
  right: 24px;
  display: flex;
  gap: 2px;
  padding: 5px 6px;
  border: 0.5px solid var(--border);
  background: var(--bg);
  border-radius: 999px;
  z-index: 60;
}

.tt-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: 0;
  width: 26px;
  height: 26px;
  color: var(--text-tertiary);
  cursor: pointer;
  border-radius: 50%;
  transition: color 0.15s ease;
}

.tt-btn:hover {
  color: var(--text-primary);
}

.tt-btn.active {
  color: var(--accent);
}
</style>
