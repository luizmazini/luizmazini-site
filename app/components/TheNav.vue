<script setup lang="ts">
const route = useRoute()
const isHome = computed(() => route.path === '/')
const menuOpen = ref(false)

const links = [
  { label: 'ensaios', anchor: '#ensaios' },
  { label: 'agora', anchor: '#agora' },
  { label: 'contato', anchor: '#contato' },
]

const close = () => { menuOpen.value = false }
watch(() => route.path, close)
</script>

<template>
  <header class="nav">
    <div class="nav-inner">
      <NuxtLink to="/" class="logo" aria-label="Voltar pra home">
        mazini
      </NuxtLink>

      <!-- Desktop: links diretos -->
      <nav class="nav-links" aria-label="Navegacao principal">
        <template v-for="link in links" :key="link.label">
          <a v-if="isHome" :href="link.anchor" class="nav-link">{{ link.label }}</a>
          <NuxtLink v-else :to="`/${link.anchor}`" class="nav-link">{{ link.label }}</NuxtLink>
        </template>
      </nav>

      <!-- Mobile: hamburger -->
      <button
        type="button"
        class="hamburger"
        :aria-expanded="menuOpen"
        aria-label="Abrir menu"
        @click="menuOpen = !menuOpen"
      >
        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true">
          <path v-if="menuOpen" d="M18 6L6 18M6 6l12 12" />
          <path v-else d="M3 6h18M3 12h18M3 18h18" />
        </svg>
      </button>
    </div>

    <!-- Mobile: dropdown -->
    <div v-if="menuOpen" class="nav-mobile-menu" aria-label="Menu mobile">
      <template v-for="link in links" :key="link.label">
        <a v-if="isHome" :href="link.anchor" class="nav-mobile-link" @click="close">{{ link.label }}</a>
        <NuxtLink v-else :to="`/${link.anchor}`" class="nav-mobile-link" @click="close">{{ link.label }}</NuxtLink>
      </template>
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

/* Desktop links */
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

/* Hamburger — só mobile */
.hamburger {
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  color: var(--text-primary);
  padding: 0;
  line-height: 0;
}

/* Mobile dropdown */
.nav-mobile-menu {
  display: none;
  border-top: 0.5px solid var(--border);
  background: var(--bg);
  padding: 20px 24px;
  flex-direction: column;
  gap: 20px;
}

.nav-mobile-link {
  font-family: var(--font-sans);
  font-size: 15px;
  font-weight: 400;
  color: var(--text-secondary);
  text-transform: lowercase;
  transition: color 0.15s ease;
  display: block;
}

.nav-mobile-link:hover {
  color: var(--text-primary);
}

@media (max-width: 600px) {
  .nav-inner {
    padding: 18px 24px;
  }

  .nav-links {
    display: none;
  }

  .hamburger {
    display: flex;
  }

  .nav-mobile-menu {
    display: flex;
  }
}
</style>
