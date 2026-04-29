import type { Config } from 'tailwindcss'

export default {
  content: [
    './app/**/*.{vue,ts,js}',
    './app.vue',
    './content/**/*.md',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: '#F5F2EC',
          dark: '#0F0F0F',
        },
        text: {
          primary: { DEFAULT: '#0A0A0A', dark: '#EDEDED' },
          secondary: { DEFAULT: '#6B6B6B', dark: '#8A8A8A' },
          tertiary: { DEFAULT: '#9A9A9A', dark: '#6B6B6B' },
        },
        border: {
          DEFAULT: '#E8E4D6',
          dark: '#232323',
        },
        accent: '#FFD200',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'monospace'],
      },
      fontSize: {
        hero: ['36px', { lineHeight: '1.18', letterSpacing: '-0.02em', fontWeight: '600' }],
        heading: ['18px', { lineHeight: '1.32', letterSpacing: '-0.01em', fontWeight: '500' }],
        'essay-title': ['15.5px', { lineHeight: '1.4', letterSpacing: '-0.005em', fontWeight: '500' }],
        body: ['15px', { lineHeight: '1.55', fontWeight: '400' }],
        'body-lg': ['16px', { lineHeight: '1.6', fontWeight: '400' }],
        muted: ['13.5px', { lineHeight: '1.5', fontWeight: '400' }],
        label: ['11px', { lineHeight: '1.2', letterSpacing: '0.08em', fontWeight: '500' }],
        meta: ['12px', { lineHeight: '1.4', fontWeight: '400' }],
      },
      spacing: {
        'nav-y': '24px',
        'nav-x': '48px',
        'section': '48px',
        'hero-top': '80px',
      },
      borderRadius: {
        accent: '2px',
        card: '8px',
      },
    },
  },
} satisfies Config
