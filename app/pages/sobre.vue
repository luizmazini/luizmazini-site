<script setup lang="ts">
// /sobre — destilacao editorial dos beats canonicos do journey.md.
// Voz: pt-BR, friccao primeiro, sem "Nao e X. E Y.", sem ornamento.

useSeoMeta({
  title: 'Sobre — Luiz Mazini',
  description:
    'Trajetoria do Luiz Mazini: da primeira venda de R$ 1.500 em 2012 a operar 3 negocios digitais com IA hoje. Cicatrizes, numeros e a tese do Cerebro de Marketing.',
  ogTitle: 'Sobre Luiz Mazini',
  ogDescription:
    'Trajetoria do Luiz Mazini: da primeira venda de R$ 1.500 em 2012 a operar 3 negocios digitais com IA hoje.',
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
        Documento e compartilho o que tenho feito pra crescer meus 3 negocios
        digitais com IA. No centro tem um metodo que eu chamo de
        <AccentMark>Cerebro de Marketing</AccentMark>.
      </p>
    </header>

    <DividerLine />

    <!-- AGORA -->
    <section class="sobre-section">
      <span class="t-label">agora</span>
      <p>
        Moro em Campinas com a Bia, minha esposa. Opero 3 negocios:
        <strong>Clube da Pedagoga</strong> (com a Bia, no nicho de educacao
        infantil), sou socio investidor do <strong>tintim.app</strong> (SaaS
        brasileiro de tracking de vendas via WhatsApp) e toco a
        <strong>Roisitive</strong> (afiliacao Go High Level e treinamentos
        legado pra donos de agencia).
      </p>
      <p>
        Construo o Cerebro de Marketing em publico no Substack. Refaco o funil
        de IA do Clube com a Bia. Reaqueco a lista legada de 100 mil donos de
        agencia via 1 e-mail por dia escrito com IA.
      </p>
    </section>

    <DividerLine />

    <!-- TRAJETORIA -->
    <section class="sobre-section">
      <span class="t-label">trajetoria</span>

      <h2 class="sobre-h2">2012, Sorocaba. Primeira venda: R$ 1.500.</h2>
      <p>
        Sai da empresa de eletronica em que trabalhava com 4 amigos depois de
        passar 2 anos tentando criar duas redes sociais que nao foram pra lugar
        nenhum (uma de bares e baladas, outra de futebol). Em 2012, livro de
        800 paginas era a unica forma de aprender a programar. Cheguei na
        conclusao de que ideia sem execucao tecnica nao virava nada e fui
        estudar marketing digital, 16 horas por dia, com o curso 8Ps do
        <strong>Conrado Adolpho</strong>.
      </p>
      <p>
        Stefano, dono de uma agencia em Sorocaba, achou meu flyer no para-brisa
        do carro saindo de uma balada. Ligou na segunda-feira. Reuniao de duas
        horas, PDF de 90 paginas. Pedi R$ 4 mil de mensalidade. Os socios pediram
        contraoferta. Fechei R$ 1.500 ali, na hora. Era pouco, mas era a porta.
      </p>

      <h2 class="sobre-h2">2014, Campinas. Passo atras de 7x.</h2>
      <p>
        Em 2014, ja com consultoria rodando bem em Sorocaba, larguei tudo pra
        ser <strong>gerente de afiliados</strong> do Conrado Adolpho. Sairio
        sete vezes menor do que eu fazia sozinho. A logica era simples: em vez
        de comprar o proximo curso dele, eu queria ver o que ele fazia quando
        desligava a camera. Morei sozinho pela primeira vez. Aprendi a vender
        infoproduto. A licao-ancora do Conrado: <em>velocidade de execucao</em>.
        O segredo nao e algo oculto, e a velocidade.
      </p>
      <p>
        Lancei o Afiliado Zen. Comprei carro a vista, viajei pra Nova Zelandia,
        Queenstown, Asia. 3 meses fora. Voltei pra casa da minha mae em Sorocaba.
        Ai a coach Carolini Calaca me deu o diagnostico em 1 frase: <em>"voce
          esta estagnado porque esta confortavel demais. Voce precisa de boleto
          pra pagar."</em> Aluguei casa no mesmo dia.
      </p>

      <h2 class="sobre-h2">2017. Cachorros Incriveis: ~8 mil alunos, sem rosto.</h2>
      <p>
        Ja estava de saco cheio de botar minha cara em produto. Nao sou o cara
        que grava stories o dia inteiro. Decidi criar uma marca <em>sem
          rosto</em>, vendavel, repassavel. Border Collie era minha referencia.
        Mercado pet brasileiro tinha pouca oferta especializada. Convidei a
        <strong>Carol Dias</strong> (ex-gerente do Conrado, amiga) pra ser
        socia. Testamos curso de adestramento DIY (mercado nao comprava no
        Brasil), olhamos curso de brigadeiro gourmet vendendo milhoes, e
        chegamos no biscoito saudavel pra cachorro.
      </p>
      <p>
        Curso de R$ 97. <strong>~8 mil alunos</strong>. Time de 13 a 14 pessoas
        no pico (gestao de time nunca foi meu perfil). Faturamento acumulado da
        marca: <strong>~R$ 1 a 1,5 milhao</strong>. Vendi pro <strong>Edipo
          Tolentino</strong> em 2020 por R$ 150 a 200 mil parcelado em R$ 15
        mil/mes.
      </p>
      <p>
        A licao mais dura: <em>tirar o rosto nao destrava o teto. Negocio sem
          rosto tem teto proprio, so muda de natureza.</em>
      </p>

      <h2 class="sobre-h2">2018-2022. Consultoria de R$ 60 mil/mes e Clube SSM.</h2>
      <p>
        Vendi o Cachorros Incriveis e fiquei meio perdido. Voltei pra
        consultoria, agora cobrando R$ 60 mil/mes (em 2012 era R$ 1.500). Salto
        de 40x em 6 anos com cicatriz de operacao propria no meio. Comecei a
        fazer lives despretensiosas no YouTube. Uma delas: "como vender
        consultoria". Choveu mensagem de gente fechando primeiro cliente. Daí
        nasceu o <strong>Clube SSM</strong>. <strong>Gregory</strong> foi o
        aluno 01. Quatro anos depois ainda esta la dentro porque da resultado.
      </p>
      <p>
        Em paralelo, lancei a <strong>Maquina Comercial</strong> (programa
        high-ticket de aceleracao pra agencias) e a <strong>Agencia
          Hibrida</strong>. Receita de afiliacao Go High Level em dolar, firme.
      </p>

      <h2 class="sobre-h2">2021. Clube da Pedagoga: o insight foi DELA.</h2>
      <p>
        A Bia era professora de educacao infantil em escola particular de
        Sorocaba. Acordava 5h da manha, voltava a tarde e ainda planejava
        atividades pra o dia seguinte. Atividades super-ludicas com material
        basico, tampinha de garrafa, rolinho de papel. Eu disse: vamos lancar
        algo digital pra voce ter renda propria.
      </p>
      <p>
        Tentei aplicar o manual do infoproduto: tutoriais de 40 minutos no
        YouTube, vender o molde da atividade. Nao pegou. Aí a Bia me falou
        algo que eu, com 13 anos de marketing digital, nao tinha visto:
        <em>"Ninguem assiste video de 40 minutos pra fazer uma atividade. Tem
          que ser videozinho de 1 minuto, mostrando a mao fazendo."</em> So o
        dono do negocio conhece o publico. Refizemos o funil. <strong>~490 mil
          seguidores</strong> no Instagram da Bia hoje. Faturamento em torno de
        R$ 20 a 40 mil/mes, mirando R$ 100 mil. Bia saiu da escola.
      </p>

      <h2 class="sobre-h2">2024-2025, Porto. Sabatico e GoBilly.</h2>
      <p>
        Tirei meses pra morar em Portugal com a Bia. Cidadania portuguesa pelo
        meu avo. Receita recorrente em dolar (afiliacao GHL) bancou tudo. 1 a
        2 horas de trabalho por dia. Espaço mental pra pensar
        reposicionamento. Esse vault que sustenta o Cerebro de Marketing nasceu
        ali.
      </p>
      <p>
        Tambem virou socio do <strong>Diego Carmona</strong> em um SaaS chamado
        <strong>GoBilly</strong>. SaaS pra agencias fazerem cobranca, contrato e
        nota fiscal automatica. Construi grande parte do produto sozinho via
        vibe coding em Nuxt.js. Lancamento frio: <strong>R$ 10 mil em
          anuncios</strong>, 80 contas criadas, 25 trials com cartao,
        <strong>0 uso real</strong>. Nem o cara que pagou usou o produto.
      </p>
      <p>
        Sumi. Entendi tres coisas: produto que resolve dor real nao basta (a
        dor era infrequente, o produto era boring de explicar); pra fazer ele
        funcionar, precisaria de muito branding, muito dinheiro, muito tempo;
        e principalmente, se o GoBilly virasse grande, eu ia ter que ter time,
        gerencia, reuniao. <strong>Meu valor central e liberdade.</strong>
        Gestao queima minha energia. Pivotei pra outra coisa.
      </p>

      <h2 class="sobre-h2">2026. tintim.app, ~R$ 1 milhao de MRR.</h2>
      <p>
        Em 2022 o <strong>Moa (Moacir Moda)</strong>, CEO do <strong>tintim.app</strong>,
        me procurou pra ajudar com comercial. Tinha 1 cliente pagante. Troquei
        fee por equity (12,5% em opcao de compra). Estruturei o funil de
        vendas. Indiquei o <strong>Junior</strong> (closer do meu time da
        Maquina Comercial) — entrou como founder operacional via vesting. O
        Diego Carmona entrou como co-investidor quando o MRR estava em R$ 200
        a 300 mil.
      </p>
      <p>
        Hoje o tintim faz ~<strong>R$ 1 milhao de MRR</strong> (8 digitos por
        ano). Nao opero. Board mensal com Moa e Diego, abrir portas no meu
        ICP, conversa estrategica. E so.
      </p>
    </section>

    <DividerLine />

    <!-- TESE -->
    <section class="sobre-section">
      <span class="t-label">a tese de hoje</span>

      <h2 class="sobre-h2">Cerebro de Marketing</h2>
      <p>
        Tenho operado 3 negocios digitais com automacao + IA + skills, sozinho,
        sem time grande. Aprendi que <strong>IA boa nao vem de prompt bom. Vem
          de contexto bom.</strong>
      </p>
      <p>
        Cerebro de Marketing e a infraestrutura de contexto estruturado (ICP,
        voz, Big Idea, oferta, acervo de provas, funis vivos, decisoes datadas)
        que muna a IA pra entregar marketing especifico do meu negocio. Sem
        isso, a IA entrega lixo bem escrito. Com isso, ela vira executora —
        nao oraculo, nao guru, executora.
      </p>
      <p>
        E sobre isso que escrevo no Substack. Nao e teoria. E o que estou
        operando, agora, nos meus 3 negocios.
      </p>
    </section>

    <DividerLine />

    <!-- VALORES -->
    <section class="sobre-section">
      <span class="t-label">como eu opero</span>
      <p>
        Sou introvertido. Detesto reuniao. Prefiro automacao a delegacao —
        quase sempre. Negocio que precisa de palco gasta minha energia, mesmo
        quando da certo. Por isso optei por <em>documentar</em>, nao ensinar
        ao vivo. Documentar e operacao primeiro, performance depois.
      </p>
      <p>
        Leio em torno de 100 livros por ano em tempos mortos. Costumo dizer
        que quando comecei, tudo era mato. Hoje, com IA, o sujeito que tem ideia
        em fim de semana destrava ela em fim de semana. Em 2012 isso era
        impossivel. Essa e a minha vinganca geracional.
      </p>
    </section>

    <DividerLine />

    <!-- CTA -->
    <section class="sobre-section">
      <span class="t-label">onde leio voce</span>
      <p>
        Mais a fundo no <a
          href="https://mazini.substack.com"
          target="_blank"
          rel="noopener noreferrer"
          class="sobre-link"
        >Substack</a>. Pra contato direto, escreve em
        <a href="mailto:e.luizmazini@gmail.com" class="sobre-link">e.luizmazini@gmail.com</a>.
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
