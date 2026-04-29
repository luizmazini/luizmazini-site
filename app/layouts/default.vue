<script setup lang="ts">
// Layout default: Nav + slot + Footer + ThemeToggle.
</script>

<template>
  <div class="layout">
    <TheNav />
    <main class="layout-main">
      <slot />
    </main>
    <TheFooter />
    <ThemeToggle />
  </div>
</template>

<style scoped>
.layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.layout-main {
  flex: 1;
  max-width: 816px;
  margin: 0 auto;
  width: 100%;
}
</style>
