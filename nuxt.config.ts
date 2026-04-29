import tailwindcss from '@tailwindcss/vite'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2026-04-29',

  modules: [
    '@nuxtjs/seo',
    '@nuxt/image',
    '@nuxt/fonts',
    '@nuxtjs/color-mode',
    '@vueuse/nuxt',
  ],

  css: ['~/assets/css/main.css'],

  vite: {
    plugins: [tailwindcss()],
  },

  // -------------- SEO --------------
  site: {
    url: 'https://luizmazini.com',
    name: 'Luiz Mazini',
    description: 'Documento e compartilho o que tenho feito pra crescer meus 3 negocios digitais com IA.',
    defaultLocale: 'pt-BR',
    indexable: true,
  },

  // -------------- Schema.org Person --------------
  schemaOrg: {
    identity: {
      type: 'Person',
      name: 'Luiz Mazini',
      url: 'https://luizmazini.com',
      sameAs: [
        'https://instagram.com/mazini',
        'https://mazini.substack.com',
        'https://linkedin.com/in/luizmazini',
        'https://x.com/luizmazini',
      ],
    },
  },

  // -------------- Robots: permitir crawlers de IA --------------
  robots: {
    groups: [
      {
        userAgent: '*',
        allow: '/',
      },
      { userAgent: 'GPTBot', allow: '/' },
      { userAgent: 'ClaudeBot', allow: '/' },
      { userAgent: 'PerplexityBot', allow: '/' },
      { userAgent: 'Google-Extended', allow: '/' },
      { userAgent: 'OAI-SearchBot', allow: '/' },
      { userAgent: 'CCBot', allow: '/' },
      { userAgent: 'Bytespider', allow: '/' },
    ],
    sitemap: 'https://luizmazini.com/sitemap.xml',
  },

  // -------------- App head --------------
  app: {
    head: {
      htmlAttrs: { lang: 'pt-BR' },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'theme-color', content: '#0F0F0F', media: '(prefers-color-scheme: dark)' },
        { name: 'theme-color', content: '#F5F2EC', media: '(prefers-color-scheme: light)' },
        { name: 'author', content: 'Luiz Mazini' },
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
      ],
    },
  },

  // -------------- Color mode --------------
  colorMode: {
    preference: 'system',
    fallback: 'dark',
    classSuffix: '',
    storageKey: 'theme',
  },

  // -------------- Fonts (Inter + JetBrains Mono via Google) --------------
  fonts: {
    families: [
      { name: 'Inter', provider: 'google', weights: [400, 500, 600], styles: ['normal', 'italic'] },
      { name: 'JetBrains Mono', provider: 'google', weights: [400, 500] },
    ],
  },

  // -------------- Nitro: SSG pra Cloudflare Pages --------------
  nitro: {
    preset: 'cloudflare-pages',
    prerender: {
      crawlLinks: true,
      routes: ['/', '/sobre', '/sitemap.xml', '/robots.txt'],
      failOnError: false,
    },
  },

  // -------------- Vue --------------
  typescript: {
    strict: true,
    typeCheck: false,
  },

  // -------------- Runtime config (env vars) --------------
  runtimeConfig: {
    public: {
      cfAnalyticsToken: process.env.NUXT_PUBLIC_CF_ANALYTICS_TOKEN || '',
      ghlFormId: process.env.NUXT_PUBLIC_GHL_FORM_ID || '',
      ghlFormUrl: process.env.NUXT_PUBLIC_GHL_FORM_URL || '',
    },
  },
})
