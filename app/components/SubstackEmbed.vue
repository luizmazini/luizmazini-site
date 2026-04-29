<script setup lang="ts">
// Widget de assinatura Substack (placeholder visual no V1, valida-se depois).
// O Substack oficial entrega um <iframe> em substack.com/embed.
// V1: link direto para o Substack, mantendo design clean.
defineProps<{
  publicationUrl?: string
}>()
</script>

<template>
  <a
    :href="publicationUrl || 'https://mazini.substack.com'"
    target="_blank"
    rel="noopener noreferrer"
    class="substack-link"
  >
    ler no substack &rarr;
  </a>
</template>

<style scoped>
.substack-link {
  display: inline-block;
  font-family: var(--font-mono);
  font-size: 12px;
  color: var(--text-tertiary);
  text-transform: lowercase;
  padding: 6px 0;
  transition: color 0.15s ease;
}

.substack-link:hover {
  color: var(--text-primary);
}
</style>
