<script setup lang="ts">
// Divider canonico: ponto amarelo 5x5 + linha 1px com border color.
// Assinatura visual recorrente entre TODAS as secoes.
</script>

<template>
  <div class="divider" role="separator" aria-hidden="true">
    <span class="divider-dot" />
    <span class="divider-line" />
  </div>
</template>

<style scoped>
.divider {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 0 var(--nav-padding-x);
  margin: 0;
  height: 0;
}

.divider-dot {
  width: var(--divider-dot-size);
  height: var(--divider-dot-size);
  border-radius: 50%;
  background: var(--accent);
  flex-shrink: 0;
}

.divider-line {
  flex: 1;
  height: var(--divider-line);
  background: var(--border);
}
</style>
