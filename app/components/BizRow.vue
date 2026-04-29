<script setup lang="ts">
// Card de negocio. Nome + descricao + link "visitar ->" em mono.
defineProps<{
  name: string
  description: string
  url: string
}>()
</script>

<template>
  <article class="biz-row">
    <div class="biz-body">
      <h3 class="biz-name">{{ name }}</h3>
      <p class="biz-desc">{{ description }}</p>
    </div>
    <a
      :href="url"
      target="_blank"
      rel="noopener noreferrer"
      class="biz-link"
      :aria-label="`Visitar ${name}`"
    >
      visitar &rarr;
    </a>
  </article>
</template>

<style scoped>
.biz-row {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 24px;
  padding: 18px 0;
  border-bottom: 0.5px solid var(--border);
}

.biz-row:last-child {
  border-bottom: none;
}

.biz-body {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 6px;
  max-width: 560px;
}

.biz-name {
  font-family: var(--font-sans);
  font-size: 15px;
  font-weight: 500;
  letter-spacing: -0.005em;
  color: var(--text-primary);
  margin: 0;
}

.biz-desc {
  font-family: var(--font-sans);
  font-size: 13.5px;
  line-height: 1.5;
  color: var(--text-secondary);
  margin: 0;
}

.biz-link {
  font-family: var(--font-mono);
  font-size: 12px;
  color: var(--text-tertiary);
  text-transform: lowercase;
  flex-shrink: 0;
  padding-top: 2px;
  transition: color 0.15s ease;
}

.biz-link:hover {
  color: var(--text-primary);
}

@media (max-width: 600px) {
  .biz-row {
    flex-direction: column;
    gap: 10px;
  }
}
</style>
