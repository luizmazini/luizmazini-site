<script setup lang="ts">
const subscribeUrl =
  'https://mazini.substack.com/subscribe?next=https%3A%2F%2Fsubstack.com%2F%40mazini&utm_source=profile-page&utm_medium=web&utm_campaign=substack_profile&just_signed_up=true'
</script>

<template>
  <a
    :href="subscribeUrl"
    target="_blank"
    rel="noopener noreferrer"
    class="ghl-button"
  >
    assinar
  </a>
</template>

<style scoped>
.ghl-button {
  display: inline-block;
  background: var(--accent);
  color: #0A0A0A;
  border: 0;
  padding: 10px 16px;
  border-radius: var(--radius-accent);
  font-family: var(--font-sans);
  font-size: 13px;
  font-weight: 500;
  text-transform: lowercase;
  text-decoration: none;
  cursor: pointer;
  transition: opacity 0.15s ease;
  margin-top: 8px;
}

.ghl-button:hover {
  opacity: 0.85;
}
</style>
