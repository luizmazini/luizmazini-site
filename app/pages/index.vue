<script setup lang="ts">
// Home — single page vertical: hero + agora + ensaios + negocios + newsletter.

useSeoMeta({
  title: 'Luiz Mazini — 14 Anos Vivendo de Negócios Digitais',
  description:
    'Documentando e compartilhando como penso, crio e cresço meus negócios no digital. Bastidores reais de quem vive disso há 14 anos.',
  ogTitle: 'Luiz Mazini',
  ogDescription:
    'Documentando e compartilhando como penso, crio e cresço meus negócios no digital. Bastidores reais de quem vive disso há 14 anos.',
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
    title: 'Como eu OBRIGO a IA criar conteúdo sem parecer IA',
    date: 'jun 2026',
    description:
      'O que fiz para dizer CHEGA para o "Não é sobre X. É sobre Y."...',
    url: 'https://mazini.substack.com/p/como-eu-obrigo-a-ia-criar-conteudo',
  },
    {
    title: 'Os 5 níveis de I.A. para Marketing Digital',
    date: 'jun 2026',
    description:
      'O guia definitivo pra você entender como não fazer publicações genéricas no digital',
    url: 'https://mazini.substack.com/p/os-5-niveis-de-ia-para-marketing',
  },
  {
    title: 'Pluguei um Cérebro de Marketing na IA. E não consigo mais voltar atrás.',
    date: 'mai 2026',
    description:
      'Os bastidores de como parei de melhorar prompts e comecei a alimentar contexto. E o que mudou no marketing dos meus negócios no digital.',
    url: 'https://mazini.substack.com/p/pluguei-um-cerebro-de-marketing-na',
  },
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
        sobre negócios digitais. conteúdo prático, sem teoria vazia.
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
