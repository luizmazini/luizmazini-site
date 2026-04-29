<script setup lang="ts">
// Row de ensaio na lista. Hover: padding-left 8px com transicao 0.15s.
defineProps<{
  title: string
  date: string
  description: string
  url: string
  isLast?: boolean
}>()
</script>

<template>
  <a
    :href="url"
    target="_blank"
    rel="noopener noreferrer"
    class="essay-row"
    :class="{ 'is-last': isLast }"
  >
    <div class="essay-head">
      <h3 class="essay-title">{{ title }}</h3>
      <span class="essay-date">{{ date }}</span>
    </div>
    <p class="essay-desc">{{ description }}</p>
  </a>
</template>

<style scoped>
.essay-row {
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 18px 0;
  border-bottom: 0.5px solid var(--border);
  transition: padding-left 0.15s ease;
}

.essay-row:hover {
  padding-left: 8px;
}

.essay-row.is-last {
  border-bottom: none;
}

.essay-head {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 16px;
}

.essay-title {
  font-family: var(--font-sans);
  font-size: 15.5px;
  font-weight: 500;
  letter-spacing: -0.005em;
  line-height: 1.4;
  color: var(--text-primary);
  margin: 0;
  flex: 1;
}

.essay-date {
  font-family: var(--font-mono);
  font-size: 12px;
  color: var(--text-tertiary);
  flex-shrink: 0;
}

.essay-desc {
  font-family: var(--font-sans);
  font-size: 13.5px;
  line-height: 1.5;
  color: var(--text-secondary);
  max-width: 540px;
  margin: 0;
}

@media (max-width: 600px) {
  .essay-head {
    flex-direction: column;
    align-items: flex-start;
    gap: 4px;
  }
}
</style>
