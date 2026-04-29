<script setup lang="ts">
// Footer. Email + cidade esquerda. 4 sociais direita.
// Hover do social: fundo amarelo + texto preto, padding 0 4px.
const socials = [
  { label: 'instagram', href: 'https://instagram.com/mazini' },
  { label: 'substack', href: 'https://mazini.substack.com' },
  { label: 'linkedin', href: 'https://linkedin.com/in/luizmazini' },
  { label: 'x', href: 'https://x.com/luizmazini' },
]
</script>

<template>
  <footer id="contato" class="footer">
    <div class="footer-left">
      <a href="mailto:e.luizmazini@gmail.com" class="footer-email">
        e.luizmazini@gmail.com
      </a>
      <span class="footer-meta">Campinas, SP &middot; Brasil</span>
    </div>

    <ul class="footer-socials" aria-label="Redes sociais">
      <li v-for="s in socials" :key="s.label">
        <a
          :href="s.href"
          target="_blank"
          rel="noopener noreferrer"
          class="footer-social"
        >
          {{ s.label }}
        </a>
      </li>
    </ul>
  </footer>
</template>

<style scoped>
.footer {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 24px;
  padding: 32px var(--nav-padding-x) 48px;
  flex-wrap: wrap;
}

.footer-left {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.footer-email {
  font-family: var(--font-mono);
  font-size: 13px;
  color: var(--text-secondary);
  transition: color 0.15s ease;
}

.footer-email:hover {
  color: var(--text-primary);
}

.footer-meta {
  font-family: var(--font-mono);
  font-size: 12px;
  color: var(--text-tertiary);
}

.footer-socials {
  display: flex;
  gap: 4px;
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-social {
  display: inline-block;
  font-family: var(--font-sans);
  font-size: 13px;
  color: var(--text-secondary);
  text-transform: lowercase;
  padding: 0 6px;
  border-radius: 2px;
  transition: background 0.12s ease, color 0.12s ease;
}

.footer-social:hover {
  background: var(--accent);
  color: #0A0A0A;
}

@media (max-width: 600px) {
  .footer {
    padding: 24px 24px 32px;
    flex-direction: column;
    align-items: flex-start;
  }
  .footer-socials {
    margin-left: -6px;
  }
}
</style>
