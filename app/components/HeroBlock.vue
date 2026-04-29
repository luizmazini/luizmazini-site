<script setup lang="ts">
// Hero da home. Foto pequena 64px circulo + frase-tese + paragrafo apoio.
import { useImage } from '#imports'

defineProps<{
  // Caminho relativo a /public. V1 default: /luiz-mazini.jpg.
  // Se nao existir, fallback pra letra "M".
  photo?: string
}>()
</script>

<template>
  <section class="hero">
    <div class="hero-photo">
      <img
        v-if="photo"
        :src="photo"
        alt="Luiz Mazini"
        width="64"
        height="64"
        loading="eager"
      >
      <span v-else class="hero-photo-fallback" aria-hidden="true">M</span>
    </div>

    <h1 class="hero-tese">
      IA boa nao vem de prompt bom. Vem de <AccentMark>contexto</AccentMark> bom.
    </h1>

    <p class="hero-apoio">
      Documento e compartilho o que tenho feito pra crescer meus 3 negocios digitais
      com IA. No centro tem um metodo que eu chamo de Cerebro de Marketing.
    </p>
  </section>
</template>

<style scoped>
.hero {
  padding: var(--hero-padding-top) var(--nav-padding-x) 56px;
  max-width: 720px;
}

.hero-photo {
  width: 64px;
  height: 64px;
  border-radius: 50%;
  overflow: hidden;
  margin-bottom: 32px;
  background: var(--border);
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.hero-photo img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.hero-photo-fallback {
  font-family: var(--font-sans);
  font-size: 24px;
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
  /* Garante que <AccentMark> nao quebra o leading */
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
  }
  .hero-tese {
    font-size: 28px;
  }
  .hero-apoio {
    font-size: 15px;
  }
}
</style>
