# luizmazini.com

Site pessoal do [Luiz Mazini](https://luizmazini.com) — documentando o que tenho feito pra crescer 3 negocios digitais com IA.

## Stack

- Nuxt 4 (SSG, modo `cloudflare-pages`)
- Tailwind CSS 4 (engine Oxide via `@tailwindcss/vite`)
- TypeScript estrito
- `@nuxtjs/seo` + `@nuxt/image` + `@nuxt/fonts` + `@nuxtjs/color-mode` + `@vueuse/nuxt`
- Deploy: Cloudflare Pages

## Dev

```bash
bun install
bun run dev
```

## Build estatico

```bash
bun run generate
```

Output em `dist/` (Nuxt 4 + nitro preset `cloudflare-pages`). Servir local com `bun run preview` ou `npx wrangler pages dev dist`.

## Sync brain reference

O design system, voz, posicionamento e journey moram no vault Obsidian privado do Mazini. Copias locais ficam em `.brain-ref/` (gitignored). Pra ressincronizar:

```bash
bun run sync-brain
```

Esse comando re-copia `design.md`, `voice.md`, `posicionamento.md`, `handoff.md` e `journey.md` do vault pro `.brain-ref/`. Roda toda vez que o vault for atualizado pra manter o site em sync com a fonte da verdade.

Brain canonico mora em:
`/Users/mazini/Library/Mobile Documents/iCloud~md~obsidian/Documents/Mazini SB/1. Projetos/Marca Mazini/marketing/brain/`

## Estrutura

```
luizmazini-site/
├── app/
│   ├── app.vue
│   ├── layouts/default.vue
│   ├── pages/{index,sobre}.vue
│   ├── components/         # 11 componentes Vue
│   └── assets/css/main.css
├── public/
│   ├── favicon.svg
│   ├── og-default.png
│   ├── llms.txt            # GEO — bullet pra LLMs
│   └── luiz-mazini.png     # foto de profile
├── scripts/
│   └── sync-brain.sh
├── .brain-ref/             # gitignored — copia local do vault
├── nuxt.config.ts
├── tailwind.config.ts
└── wrangler.toml
```

## SEO / GEO

Implementado:

- `useSeoMeta()` em todas as paginas + `useHead` com `canonical`.
- `@nuxtjs/seo` ativo: gera `sitemap.xml`, `robots.txt`, OG meta tags automatico.
- `Schema.org Person` no JSON-LD via `schemaOrg.identity`.
- `Schema.org AboutPage` em `/sobre` via `useSchemaOrg([defineWebPage(...)])`.
- `robots.txt` com `Allow: /` pra `*` + bots de IA: `GPTBot`, `ClaudeBot`, `PerplexityBot`, `Google-Extended`, `OAI-SearchBot`, `CCBot`, `Bytespider`.
- `/llms.txt` em `public/` com bullet bio + tese-ancora + cicatrizes + ensaios pra LLMs entenderem o site.
- HTML semantico (`header`, `main`, `article`, `section`, `nav`, `footer`).
- H1 unico por pagina.

## Deploy — Cloudflare Pages

Caminho recomendado:

1. Criar repo publico em `github.com/luizmazini/luizmazini-site` e push.
2. Cloudflare Dashboard -> Pages -> Create project -> Connect to Git.
3. Build settings:
    - Framework preset: **Nuxt**
    - Build command: `bun run generate`
    - Build output directory: `dist`
    - Node version: **20**
4. Custom domains: adicionar `luizmazini.com` e `www.luizmazini.com`.
5. Configurar redirects 301 dos 4 dominios secundarios:
    - `luizmazini.com.br`, `mazini.com.br`, `mazini.me`, `luizmazini.me` -> `luizmazini.com/$1`.
    - Pode ser feito via Cloudflare Bulk Redirects ou Page Rules.

A action em `.github/workflows/deploy.yml` e backup — gera artifact de build em PRs pra preview.

## TODOs pendentes (V1 -> V1.1)

- [ ] Substituir token placeholder de **Cloudflare Web Analytics** (`NUXT_PUBLIC_CF_ANALYTICS_TOKEN`) apos conectar Pages.
- [ ] Substituir o form de newsletter pelo embed real do **GHL** quando o snippet/form ID estiver disponivel (`app/components/GHLForm.vue`).
- [ ] Otimizar foto de profile `public/luiz-mazini.png` (~2MB, 1023x1537). Idealmente exportar 256-512px de lado em WebP, ~30-80KB.
- [ ] Substituir lista hardcoded de **ensaios** em `app/pages/index.vue` pelos slugs reais do Substack quando os ensaios canonicos forem publicados.
- [ ] Validar URL real do **Clube da Pedagoga** (`https://clubedapedagoga.com.br`) e da **Roisitive** (`https://roisitive.com`).
- [ ] OG image final em PNG dinamico via Satori/`@vercel/og` (V1 atual e SVG -> PNG estatico).
- [ ] Confirmar handle correto do Instagram (`mazini` ou `luizmazini`?).
- [ ] V2: migrar ensaios de Substack pra Nuxt Content em MD local.
- [ ] V2: pagina de oferta high-ticket.

## License

MIT
