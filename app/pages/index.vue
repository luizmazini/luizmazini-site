<script setup lang="ts">
// Home — single page vertical: hero + agora + ensaios + negocios + newsletter.

useSeoMeta({
  title: 'Luiz Mazini — Documentando o que faco pra crescer negocios digitais usando IA',
  description:
    'Documento e compartilho o que tenho feito pra crescer meus negocios no digital usando IA. No centro, um metodo que chamo de Cerebro de Marketing.',
  ogTitle: 'Luiz Mazini',
  ogDescription:
    'Documento e compartilho o que tenho feito pra crescer meus negocios no digital com IA plugada à um Cerebro de Marketing.',
  ogImage: 'https://luizmazini.com/og-default.png',
  ogUrl: 'https://luizmazini.com',
  ogType: 'website',
})

useHead({
  link: [
    { rel: 'canonical', href: 'https://luizmazini.com/' },
  ],
})

// ----------------- DATA -----------------
// Ensaios: hardcoded V1. URLs sao placeholders — Mazini substitui pelos slugs
// reais do Substack quando os ensaios canonicos estiverem publicados.
interface Essay {
  title: string
  date: string
  description: string
  url: string
}

const essays: Essay[] = [
  {
    title: 'Sumi 18 meses pra criar um SaaS com IA que não vendeu nada',
    date: 'abr 2026',
    description:
      'E ainda gastei dezenas de milhares de reais em ads pra descobrir que o problema não estava no produto.',
    url: 'https://mazini.substack.com/p/sumi-18-meses-pra-criar-um-produto',
  }
]

// ----------------- BUSINESSES -----------------
interface Biz {
  name: string
  description: string
  url: string
}

const negocios: Biz[] = [
  {
    name: 'Clube da Pedagoga',
    description:
      'Negócio com minha esposa, Bia. Eu opero marketing, vendas e funil - ela e o produto e o conteudo.',
    url: 'https://clubedapedagoga.com.br',
  },
  // {
  //   name: 'tintim.app',
  //   description:
  //     'SaaS brasileiro de tracking de vendas via WhatsApp. Socio investidor e conselheiro.',
  //   url: 'https://tintim.app',
  // },
  {
    name: 'Roisitive',
    description:
      'Treinamentos e mentorias para donos de agência e EUgências Digitais.',
    url: 'https://roisitive.com',
  },
]
</script>

<template>
  <div class="home">
    <!-- HERO -->
    <HeroBlock photo="/luiz-mazini.png" />

    <DividerLine />

    <!-- AGORA -->
    <NowBlock />

    <DividerLine />

    <!-- ENSAIOS -->
    <section id="publicacoes" class="essays">
      <span class="t-label">publicacoes</span>

      <div class="essays-list">
        <EssayRow
          v-for="(e, i) in essays"
          :key="e.title"
          :title="e.title"
          :date="e.date"
          :description="e.description"
          :url="e.url"
          :is-last="i === essays.length - 1"
        />
      </div>

      <SubstackEmbed publication-url="https://mazini.substack.com" />
    </section>

    <DividerLine />

    <!-- NEGOCIOS -->
    <section id="negocios" class="bizs">
      <span class="t-label">negocios</span>

      <div class="bizs-list">
        <BizRow
          v-for="b in negocios"
          :key="b.name"
          :name="b.name"
          :description="b.description"
          :url="b.url"
        />
      </div>
    </section>

    <DividerLine />

    <!-- NEWSLETTER -->
    <section id="newsletter" class="newsletter">
      <span class="t-label">newsletter</span>

      <p class="newsletter-body">
        receba meus e-mails para acompanhar minhas publicações e conteudos
        sobre IA para negócios no digital. Conteudo pratico, sem teoria.
      </p>

      <GHLForm />
    </section>

    <DividerLine />
  </div>
</template>

<style scoped>
.home {
  display: flex;
  flex-direction: column;
}

.essays,
.bizs,
.newsletter {
  padding: 56px var(--nav-padding-x);
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.essays-list {
  margin-top: 8px;
}

.bizs-list {
  margin-top: 8px;
  display: flex;
  flex-direction: column;
}

.newsletter-body {
  font-family: var(--font-sans);
  font-size: 15px;
  line-height: 1.55;
  color: var(--text-primary);
  max-width: 540px;
  margin: 0;
}

@media (max-width: 600px) {
  .essays,
  .bizs,
  .newsletter {
    padding: 40px 24px;
  }
}
</style>
