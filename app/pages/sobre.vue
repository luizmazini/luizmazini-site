<script setup lang="ts">
// /sobre — destilação editorial dos beats canônicos do journey.md.
// Voz: pt-BR, fricção primeiro, sem "Não é X. É Y.", sem ornamento.

useSeoMeta({
  title: 'Sobre — Luiz Mazini',
  description:
    'Trajetória do Luiz Mazini: da primeira venda de R$ 1.500 em 2012 até hoje, 14 anos de negócios digitais.',
  ogTitle: 'Sobre Luiz Mazini',
  ogDescription:
    'Trajetória do Luiz Mazini: da primeira venda de R$ 1.500 em 2012 até hoje, 14 anos de negócios digitais.',
  ogImage: 'https://luizmazini.com/og-default.png',
  ogUrl: 'https://luizmazini.com/sobre',
  ogType: 'profile',
})

useHead({
  link: [
    { rel: 'canonical', href: 'https://luizmazini.com/sobre' },
  ],
})

useSchemaOrg([
  defineWebPage({
    '@type': 'AboutPage',
    name: 'Sobre Luiz Mazini',
    url: 'https://luizmazini.com/sobre',
  }),
])
</script>

<template>
  <article class="sobre">
    <!-- HERO -->
    <header class="sobre-hero">
      <h1 class="sobre-title">sobre</h1>
      <p class="sobre-lead">
        Documentando e compartilhando como penso, crio e cresço meus negócios no digital. Bastidores reais de quem vive disso há 14 anos.
      </p>
    </header>

    <DividerLine />

    <!-- AGORA -->
    <section class="sobre-section">
      <span class="t-label">agora</span>
      <p>
        Moro em Campinas com a Bia, minha esposa. Hoje estou em três frentes:
        opero marketing e vendas do <strong>Clube da Pedagoga</strong> com ela,
        toco a <strong>Roisitive</strong> (afiliação Go High Level + legado de
        treinamentos pra agências) e sou sócio investidor do
        <strong>tintim.app</strong>, um SaaS brasileiro de tracking de vendas
        via WhatsApp.
      </p>
      <p>
        O foco público agora é documentar a construção do <strong>Cérebro de Marketing</strong>:
        transformar contexto de negócio em arquivo, regra, prova, funil e
        procedimento reutilizável pra IA gerar marketing específico. O Clube da
        Pedagoga e a própria marca Mazini são os laboratórios mais vivos.
      </p>
    </section>

    <DividerLine />

    <!-- TRAJETÓRIA -->
    <section class="sobre-section">
      <span class="t-label">trajetória</span>

      <h2 class="sobre-h2">2012, Sorocaba. R$ 1.500 e um flyer no para-brisa.</h2>
      <p>
        Não comecei em marketing. Fiz técnico em eletrônica, passei por
        engenharia sem terminar e trabalhei numa empresa de manutenção de
        equipamentos hospitalares em Sorocaba. Fui parar perto da área comercial
        e percebi uma coisa simples: quem ganhava dinheiro ali era a galera de
        vendas.
      </p>
      <p>
        Antes do marketing digital, tentei criar um CRM pra bares e baladas com
        câmera ao vivo e o Joga Fut, uma espécie de Tinder do futebol. Os dois
        morreram pela mesma razão: eu tinha ideia, mas não tinha execução
        técnica. Em 2012, aprender a programar significava encarar livro gigante
        de 800 páginas. Cursor de fim de semana ainda parecia ficção científica.
      </p>
      <p>
        Comprei o curso 8Ps do <strong>Conrado Adolpho</strong> e comecei a
        estudar marketing digital 16 horas por dia. Saindo de uma balada, vi um
        flyer no para-brisa com a assinatura da agência do
        <strong>Stefano</strong>. Liguei pra ele. O Stefano indicou um cliente:
        despachante + corretora de seguros. Reunião de duas horas, PDF de 90
        páginas, pedi R$ 4 mil de mensalidade e aceitei a contraoferta de
        <strong>R$ 1.500</strong>. Era pouco, mas foi a porta.
      </p>

      <h2 class="sobre-h2">2014, Campinas. Um passo atrás de 7x.</h2>
      <p>
        Em 2014, a consultoria regional já rodava bem. Mesmo assim, aceitei ser
        <strong>gerente de afiliados</strong> do Conrado ganhando sete vezes
        menos do que fazia sozinho. A lógica era direta: em vez de comprar o
        próximo curso dele, eu queria ver o que acontecia quando a câmera
        desligava. Morei sozinho pela primeira vez e aprendi infoproduto por
        dentro.
      </p>
      <p>
        A lição-âncora dessa fase foi velocidade de implementação. O Conrado não
        esperava o plano perfeito. Se alguém pedia um vídeo, ele gravava no
        celular, subia e em minutos a página já estava gerando lead. Depois veio
        o Afiliado Zen, carro à vista, Nova Zelândia, Ásia e a volta pra casa da
        minha mãe em Sorocaba. A Carolini Calaça olhou aquilo e mandou a frase:
        <em>"você está estagnado porque está confortável demais. Você precisa de
          boleto pra pagar."</em> Aluguei casa no mesmo dia.
      </p>

      <h2 class="sobre-h2">2017, Cachorros Incríveis. Tirar o rosto não tirou o teto.</h2>
      <p>
        Eu já estava cansado de ser o rosto do produto. Não sou o cara que grava
        story o dia inteiro expondo a vida. Queria uma marca sem depender da
        minha imagem, vendável, com operação própria. Border Collie era minha
        referência. O mercado pet brasileiro era gigante e ainda tinha pouca
        oferta especializada.
      </p>
      <p>
        Convidei a <strong>Carol Dias</strong>, ex-gerente do Conrado, pra ser
        sócia. Testamos adestramento DIY, vimos que o brasileiro não comprava
        muito esse tipo de curso, olhamos pra um curso de brigadeiro gourmet que
        faturava muito e chegamos no biscoito saudável pra cachorro. Curso de
        R$ 97. <strong>~8 mil alunos</strong>. Time de 13 a 14 pessoas no pico,
        justamente a parte que mais me drenava: gestão.
      </p>
      <p>
        Vendi a marca pro <strong>Édipo Tolentino</strong> por uma faixa de
        <strong>R$ 150 a 200 mil</strong>, parcelado em R$ 15 mil por mês. A
        lição foi cara: tirar o rosto ajuda a vender o ativo, mas não transforma
        automaticamente o negócio em algo gigante. O teto só muda de lugar.
      </p>

      <h2 class="sobre-h2">2018 em diante. R$ 60 mil/mês, Clube SSM e Roisitive.</h2>
      <p>
        Depois da venda do Cachorros Incríveis, fiquei meio perdido e voltei pra
        consultoria. Só que agora por outro preço: <strong>R$ 60 mil por mês</strong>.
        Em 2012 eu tinha fechado R$ 1.500. Em alguns anos, a cicatriz de operar
        negócio próprio mudou a ancoragem inteira.
      </p>
      <p>
        Comecei a fazer lives despretensiosas no YouTube. Uma delas era sobre
        como vender consultoria. Choveu mensagem de gente fechando o primeiro
        cliente por causa daquela live. Daí nasceu o <strong>Clube SSM</strong>,
        que depois virou parte do legado da Roisitive junto com Máquina Comercial,
        Agência Híbrida e Marketeiro Club. Hoje a Roisitive mantém a afiliação
        Go High Level e esse acervo de treinamentos pra agências. É legado ativo,
        não o palco principal da marca Mazini.
      </p>

      <h2 class="sobre-h2">Clube da Pedagoga. O insight que eu não tive.</h2>
      <p>
        A Bia era professora de educação infantil em escola particular de
        Sorocaba. Acordava 5h da manhã, voltava à tarde e ainda planejava
        atividade pro dia seguinte. Ela fazia coisas superlúdicas com material
        básico: tampinha de garrafa, rolinho de papel, estrelinha, gamificação.
        Eu olhei aquilo e falei: vamos lançar um negócio digital pra você ter
        mais liberdade.
      </p>
      <p>
        Tentei aplicar o manual do infoproduto: vídeo de 40 minutos no YouTube e
        venda do molde. Não pegou. Aí a Bia falou a frase que eu, com anos de
        marketing digital, não tinha enxergado: <em>"ninguém quer assistir vídeo
          de 40 minutos pra fazer uma atividade. Tem que ser vídeo curtinho, de
          um minuto."</em>
      </p>
      <p>
        Ela conhecia o público de verdade. Refizemos o modelo: vídeo curto DIY,
        molde grátis, comentário no Instagram, DM, oferta do Clube. Hoje são
        <strong>~490 mil seguidores</strong> no Instagram da Bia, 4 anos de
        Clube e a Bia vive 100% disso. Essa história virou uma das bases do que
        eu chamo hoje de Cérebro de Marketing: o dono do negócio tem contexto
        que nenhum prompt genérico consegue inventar.
      </p>

      <h2 class="sobre-h2">2025, Porto. Sabático entre aspas, GoBilly e uma lição cara.</h2>
      <p>
        Eu e a Bia moramos 10 a 11 meses em Portugal, com base no Porto. Foi um
        sabático entre aspas: eu ainda trabalhava, mas muitas vezes 1 ou 2 horas
        por dia. A receita recorrente em dólar da afiliação Go High Level dava
        espaço mental pra pensar no próximo movimento. O vault que sustenta este
        Cérebro de Marketing nasceu desse espaço.
      </p>
      <p>
        Nesse período também reconstruí o <strong>GoBilly</strong>, um SaaS pra
        agências fazerem cobrança, contrato e nota fiscal automática. Codando
        sozinho, via vibe coding, em Nuxt.js. No lançamento frio, coloquei
        dezenas de milhares de reais em anúncios, gerei cerca de 80 contas,
        20 a 25 trials com cartão e <strong>zero uso real</strong>. Nem o cara
        que pagou como fundador usou o produto.
      </p>
      <p>
        A lição foi simples e meio indigesta: produto que resolve dor real ainda
        pode ser ruim de vender se a dor é infrequente e chata de explicar. E se
        o GoBilly ficasse grande, eu teria que montar time, gerir gente, viver em
        reunião. Foi ali que a palavra liberdade virou critério de produto, não
        só vontade de vida.
      </p>

      <h2 class="sobre-h2">tintim.app. Sócio investidor, sem operação no dia a dia.</h2>
      <p>
        O <strong>Moa (Moacir Moda)</strong>, CEO do
        <strong>tintim.app</strong>, me procurou quando o negócio ainda tinha 1
        cliente pagante. Em vez de cobrar consultoria, troquei fee por equity:
        12,5% em opção de compra. Ajudei a estruturar o funil comercial e indiquei
        o <strong>Júnior</strong>, closer do meu time da Máquina Comercial, que
        entrou como founder operacional via vesting.
      </p>
      <p>
        Hoje o tintim faz cerca de <strong>R$ 1 milhão de MRR</strong>. Meu
        papel é board mensal com Moa e Diego Carmona, abrir portas quando faz
        sentido e conversar estratégia. Eu não opero produto, comercial, suporte
        nem tecnologia. Esse limite importa porque liberdade também é saber onde
        eu não devo sentar na cadeira do operador.
      </p>
    </section>

    <DividerLine />

    <!-- TESE -->
    <section class="sobre-section">
      <span class="t-label">a tese de hoje</span>

      <h2 class="sobre-h2">Cérebro de Marketing</h2>
      <p>
        O ponto que estou testando em público: IA melhora quando recebe contexto
        bom, não quando ganha só prompt bonito. O que separa marketing genérico
        de marketing útil é a camada que vem antes da IA escrever.
      </p>
      <p>
        Cérebro de Marketing é o nome que dou pra essa infraestrutura de
        contexto: cliente bem definido, voz documentada, oferta, provas,
        histórias, funis, decisões e aprendizados organizados de um jeito que a
        IA consegue usar. Sem isso, ela só produz texto bonito e genérico. Com
        isso, ela começa a executar em cima do que o negócio já sabe.
      </p>
      <p>
        É sobre isso que escrevo no Substack: o que estou operando, descartando,
        testando e documentando nos meus próprios negócios.
      </p>
    </section>

    <DividerLine />

    <!-- VALORES -->
    <section class="sobre-section">
      <span class="t-label">como eu opero</span>
      <p>
        Sou introvertido. Detesto reunião. Prefiro automação a delegação quase
        sempre. Negócio que depende de palco gasta energia ali, mesmo quando dá
        certo. Por isso escolhi documentar antes de ensinar ao vivo. Documentar é
        operação primeiro, performance depois.
      </p>
      <p>
        Leio em torno de 100 livros por ano em tempos mortos. Costumo dizer que
        quando comecei, tudo era mato. Hoje, com IA, o sujeito que tem uma ideia
        no fim de semana consegue destravar a primeira versão dela no próprio fim
        de semana. Em 2012 isso era impossível. Essa é a minha vingança
        geracional.
      </p>
    </section>

    <DividerLine />

    <!-- CTA -->
    <section class="sobre-section">
      <span class="t-label">onde leio você</span>
      <p>
        Mais a fundo no <a
          href="https://mazini.substack.com"
          target="_blank"
          rel="noopener noreferrer"
          class="sobre-link"
        >Substack</a>. Pra contato direto, escreve em
        <a href="mailto:falecom@luizmazini.com.br" class="sobre-link">falecom@luizmazini.com.br</a>.
      </p>
    </section>
  </article>
</template>

<style scoped>
.sobre {
  display: flex;
  flex-direction: column;
}

.sobre-hero {
  padding: var(--hero-padding-top) var(--nav-padding-x) 56px;
  max-width: 720px;
}

.sobre-title {
  font-family: var(--font-sans);
  font-size: 36px;
  font-weight: 600;
  letter-spacing: -0.02em;
  line-height: 1.18;
  text-transform: lowercase;
  color: var(--text-primary);
  margin: 0 0 24px;
}

.sobre-lead {
  font-family: var(--font-sans);
  font-size: 16px;
  line-height: 1.6;
  color: var(--text-secondary);
  max-width: 580px;
  margin: 0;
}

.sobre-section {
  padding: 56px var(--nav-padding-x);
  max-width: 720px;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.sobre-section p {
  font-family: var(--font-sans);
  font-size: 16px;
  line-height: 1.65;
  color: var(--text-primary);
  max-width: 640px;
  margin: 0;
}

.sobre-section p strong {
  font-weight: 500;
}

.sobre-section p em {
  font-style: italic;
  color: var(--text-secondary);
}

.sobre-h2 {
  font-family: var(--font-sans);
  font-size: 18px;
  font-weight: 500;
  letter-spacing: -0.01em;
  line-height: 1.32;
  color: var(--text-primary);
  margin: 24px 0 4px;
}

.sobre-section .sobre-h2:first-of-type {
  margin-top: 8px;
}

.sobre-link {
  color: var(--text-primary);
  border-bottom: 0.5px solid var(--border);
  transition: border-color 0.15s ease;
}

.sobre-link:hover {
  border-color: var(--accent);
}

@media (max-width: 600px) {
  .sobre-hero {
    padding: 56px 24px 40px;
  }
  .sobre-title {
    font-size: 30px;
  }
  .sobre-section {
    padding: 40px 24px;
  }
  .sobre-section p {
    font-size: 15px;
  }
  .sobre-h2 {
    font-size: 17px;
  }
}
</style>
