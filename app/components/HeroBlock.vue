<script setup lang="ts">
defineProps<{
  // Caminho relativo a /public. V1 default: /luiz-mazini.jpg.
  // Se nao existir, fallback pra letra "M".
  photo?: string
}>()
</script>

<template>
  <section class="hero">
    <div class="hero-text">
      <h1 class="hero-tese">
        IA boa nao vem de prompt bom. Vem de <AccentMark>contexto</AccentMark> bom.
      </h1>

      <p class="hero-apoio">
        Documento e compartilho o que tenho feito pra crescer meus 3 negocios digitais
        com IA. No centro tem um metodo que eu chamo de Cerebro de Marketing.
      </p>
    </div>

    <div class="hero-photo">
      <NuxtImg
        v-if="photo"
        :src="photo"
        alt="Luiz Mazini"
        width="96"
        height="96"
        fit="cover"
        :modifiers="{ gravity: 'north' }"
        loading="eager"
        class="hero-photo-img"
      />
      <span v-else class="hero-photo-fallback" aria-hidden="true">M</span>
    </div>
  </section>
</template>

<style scoped>
.hero {
  padding: var(--hero-padding-top) var(--nav-padding-x) 56px;
  max-width: 720px;
  display: flex;
  align-items: flex-start;
  gap: 32px;
}

.hero-text {
  flex: 1;
  min-width: 0;
}

.hero-photo {
  width: 96px;
  height: 96px;
  border-radius: 50%;
  overflow: hidden;
  flex-shrink: 0;
  background: var(--border);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 6px;
}

.hero-photo-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center top;
  display: block;
}

.hero-photo-fallback {
  font-family: var(--font-sans);
  font-size: 28px;
  font-weight: 500;
  color: var(--text-secondary);
  letter-spacing: -0.02em;
}

.hero-tese {
  font-family: var(--font-sans);
  font-size: 36px;
  line-height: 1.18;
  letter-spacing: -0.02em;
  font-weight: 600;
  color: var(--text-primary);
  margin: 0 0 20px;
}

.hero-apoio {
  font-family: var(--font-sans);
  font-size: 16px;
  line-height: 1.6;
  font-weight: 400;
  color: var(--text-secondary);
  max-width: 540px;
  margin: 0;
}

@media (max-width: 600px) {
  .hero {
    padding: 56px 24px 40px;
    flex-direction: column-reverse;
    gap: 20px;
  }
  .hero-photo {
    width: 72px;
    height: 72px;
    margin-top: 0;
  }
  .hero-tese {
    font-size: 28px;
  }
  .hero-apoio {
    font-size: 15px;
  }
}
</style>
