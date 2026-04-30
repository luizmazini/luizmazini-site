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

## Variaveis de ambiente

Copie `.env.example` para `.env.local` e preencha:

```bash
cp .env.example .env.local
```

| Variavel | Descricao |
|---|---|
| `NUXT_PUBLIC_CF_ANALYTICS_TOKEN` | Token do Cloudflare Web Analytics |
| `NUXT_PUBLIC_GHL_FORM_ID` | ID do form de newsletter no Go High Level |
| `NUXT_PUBLIC_GHL_FORM_URL` | URL do endpoint do form GHL |

## Estrutura

```
luizmazini-site/
├── app/
│   ├── app.vue
│   ├── layouts/default.vue
│   ├── pages/{index,sobre}.vue
│   ├── components/         # componentes Vue
│   └── assets/css/main.css
├── public/
│   ├── favicon.svg
│   ├── og-default.png
│   ├── llms.txt            # GEO — contexto para LLMs
│   └── luiz-mazini.png
├── nuxt.config.ts
├── tailwind.config.ts
└── wrangler.toml
```

## SEO / GEO

- `useSeoMeta()` em todas as paginas + `useHead` com `canonical`.
- `@nuxtjs/seo` ativo: gera `sitemap.xml`, `robots.txt`, OG meta tags.
- `Schema.org Person` no JSON-LD via `schemaOrg.identity`.
- `Schema.org AboutPage` em `/sobre`.
- `robots.txt` com `Allow: /` pra crawlers de IA (GPTBot, ClaudeBot, PerplexityBot, etc).
- `/llms.txt` em `public/` com bio estruturada pra LLMs.
- HTML semantico e H1 unico por pagina.

## Deploy — Cloudflare Pages

1. Cloudflare Dashboard → Pages → Create project → Connect to Git.
2. Build settings:
    - Framework preset: **Nuxt**
    - Build command: `bun run generate`
    - Build output directory: `dist`
    - Node version: **20**
3. Custom domains: `luizmazini.com` e `www.luizmazini.com`.

A action em `.github/workflows/deploy.yml` gera artifact de build em PRs para preview.

## License

MIT
