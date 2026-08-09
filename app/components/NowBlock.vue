<script setup lang="ts">
// Secao "agora" — o que tenho feito agora, em 1 paragrafo curto.
// Conteudo canonico vem do prompt; bolds estruturais (Cerebro de Marketing)
// ficam em <strong> peso 500, NAO amarelos (regra de escassez).
</script>

<template>
  <section id="agora" class="now">
    <span class="t-label">agora</span>

    <p class="now-body">
      Criei um novo produto de automação para Instagram com IA. Usando o que sempre fizemos para crescer o Clube da Pedagoga...
      Produto novo pronto e em beta aberto: <a href="https://levios.app" target="_blank">levios.app</a>
    </p>

    <span class="t-meta now-meta">atualizado em agosto de 2026</span>
  </section>
</template>

<style scoped>
.now {
  padding: 56px var(--nav-padding-x);
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.now-body {
  font-family: var(--font-sans);
  font-size: 16px;
  line-height: 1.6;
  font-weight: 400;
  color: var(--text-primary);
  max-width: 600px;
  margin: 0;
}

.now-body strong {
  font-weight: 500;
  /* Bold estrutural NAO usa amarelo — apenas peso 500 */
}

.now-meta {
  margin-top: 8px;
}

@media (max-width: 600px) {
  .now {
    padding: 40px 24px;
  }
  .now-body {
    font-size: 15px;
  }
}
</style>
