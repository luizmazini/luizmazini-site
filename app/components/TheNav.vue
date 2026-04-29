<script setup lang="ts">
// Nav superior. Logo `mazini` esquerda + 3 links direita.
// Anchor links pra secoes na home; rota normal em outras paginas.
const route = useRoute()
const isHome = computed(() => route.path === '/')

const links = [
  { label: 'ensaios', anchor: '#ensaios' },
  { label: 'agora', anchor: '#agora' },
  { label: 'contato', anchor: '#contato' },
]
</script>

<template>
  <header class="nav">
    <div class="nav-inner">
      <NuxtLink to="/" class="logo" aria-label="Voltar pra home">
        mazini
      </NuxtLink>

      <nav class="nav-links" aria-label="Navegacao principal">
        <template v-for="link in links" :key="link.label">
          <a
            v-if="isHome"
            :href="link.anchor"
            class="nav-link"
          >
            {{ link.label }}
          </a>
          <NuxtLink
            v-else
            :to="`/${link.anchor}`"
            class="nav-link"
          >
            {{ link.label }}
          </NuxtLink>
        </template>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.nav {
  border-bottom: 0.5px solid var(--border);
  background: var(--bg);
  position: sticky;
  top: 0;
  z-index: 50;
  backdrop-filter: saturate(140%) blur(8px);
}

.nav-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 816px;
  margin: 0 auto;
  padding: var(--nav-padding-y) var(--nav-padding-x);
}

.logo {
  font-family: var(--font-sans);
  font-size: 14px;
  font-weight: 500;
  color: var(--text-primary);
  letter-spacing: -0.01em;
  text-transform: lowercase;
}

.nav-links {
  display: flex;
  gap: 24px;
}

.nav-link {
  font-family: var(--font-sans);
  font-size: 14px;
  font-weight: 400;
  color: var(--text-secondary);
  text-transform: lowercase;
  transition: color 0.15s ease;
}

.nav-link:hover {
  color: var(--text-primary);
}

@media (max-width: 600px) {
  .nav {
    padding: 18px 24px;
  }
  .nav-links {
    gap: 16px;
  }
}
</style>
