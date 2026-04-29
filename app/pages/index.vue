<script setup lang="ts">
// Home — single page vertical: hero + agora + ensaios + negocios + newsletter.

useSeoMeta({
  title: 'Luiz Mazini — Documentando o que faco pra crescer negocios digitais usando IA',
  description:
    'Documento e compartilho o que tenho feito pra crescer meus negocios no digital usando IA. No centro, um metodo que chamo de Cerebro de Marketing.',
  ogTitle: 'Luiz Mazini',
  ogDescription:
    'Cerebro de Marketing — a infraestrutura que faz IA virar marketing especifico em vez de lixo generico.',
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

const ensaios: Essay[] = [
  {
    title: 'Sumi 18 meses pra criar um produto com IA que nao vendeu nada',
    date: 'abr 2026',
    description:
      'A cicatriz GoBilly: 80 contas, 0 uso, R$ 10 mil em ads. E como isso virou a tese que eu carrego hoje.',
    url: 'https://mazini.substack.com',
  },
  {
    title: 'Por que prompt bom nao basta — e o que e Cerebro de Marketing',
    date: 'abr 2026',
    description:
      'Garbage in, garbage out. Sem ICP, voz, oferta, acervo e provas no contexto, IA so entrega lixo bem escrito.',
    url: 'https://mazini.substack.com',
  },
  {
    title: 'O dia em que parei de tocar agencia pra virar dono de negocio',
    date: 'mar 2026',
    description:
      'A diferenca entre operar pra cliente e operar pra mim mesmo. E o que mudou no meu PnL no primeiro ano.',
    url: 'https://mazini.substack.com',
  },
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
      'Negocio digital de nicho com minha esposa, Bia. Eu opero marketing, vendas e funil - ela e o produto e o conteudo.',
    url: 'https://clubedapedagoga.com.br',
  },
  {
    name: 'tintim.app',
    description:
      'SaaS brasileiro de tracking de vendas via WhatsApp. Socio investidor e conselheiro.',
    url: 'https://tintim.app',
  },
  {
    name: 'Roisitive',
    description:
      'Afiliacao Go High Level e treinamentos legado pra donos de agencia.',
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
    <section id="ensaios" class="essays">
      <span class="t-label">ensaios</span>

      <div class="essays-list">
        <EssayRow
          v-for="(e, i) in ensaios"
          :key="e.title"
          :title="e.title"
          :date="e.date"
          :description="e.description"
          :url="e.url"
          :is-last="i === ensaios.length - 1"
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
        1 e-mail por dia sobre IA na operacao dos 3 negocios. Conteudo pratico,
        sem teoria.
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
