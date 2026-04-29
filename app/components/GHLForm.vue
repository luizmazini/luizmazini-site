<script setup lang="ts">
// Form do GHL (placeholder). Quando o snippet real chegar, substituir
// por <iframe> ou injecao de script direta.
//
// V1: input de email + botao. Submit redireciona pra mailto pra
// nao perder leads enquanto a integracao real nao chega.
import { ref } from 'vue'

const email = ref('')
const submitted = ref(false)

const handleSubmit = (e: Event) => {
  e.preventDefault()
  if (!email.value) return
  // V1 fallback: abre mailto pre-preenchido.
  // Substituir por POST pro endpoint do GHL quando o form ID estiver disponivel.
  const subject = encodeURIComponent('quero assinar a newsletter')
  const body = encodeURIComponent(`email pra newsletter: ${email.value}`)
  window.location.href = `mailto:e.luizmazini@gmail.com?subject=${subject}&body=${body}`
  submitted.value = true
}
</script>

<template>
  <!-- TODO: substituir por embed real do GHL quando Mazini fornecer snippet -->
  <form class="ghl-form" @submit="handleSubmit">
    <input
      v-model="email"
      type="email"
      placeholder="seu@email.com"
      class="ghl-input"
      required
      aria-label="seu email"
    >
    <button type="submit" class="ghl-button">
      assinar
    </button>
  </form>

  <p v-if="submitted" class="ghl-success">
    ok, a gente fala em breve.
  </p>
</template>

<style scoped>
.ghl-form {
  display: flex;
  align-items: stretch;
  gap: 12px;
  max-width: 480px;
  margin-top: 8px;
}

.ghl-input {
  flex: 1;
  background: transparent;
  border: 0;
  border-bottom: 0.5px solid var(--border);
  padding: 10px 0;
  font-family: var(--font-mono);
  font-size: 14px;
  color: var(--text-primary);
}

.ghl-input::placeholder {
  color: var(--text-tertiary);
  font-family: var(--font-mono);
}

.ghl-input:focus {
  outline: none;
  border-bottom-color: var(--accent);
}

.ghl-button {
  background: var(--accent);
  color: #0A0A0A;
  border: 0;
  padding: 10px 16px;
  border-radius: var(--radius-accent);
  font-family: var(--font-sans);
  font-size: 13px;
  font-weight: 500;
  text-transform: lowercase;
  cursor: pointer;
  transition: opacity 0.15s ease;
}

.ghl-button:hover {
  opacity: 0.85;
}

.ghl-success {
  font-family: var(--font-mono);
  font-size: 12px;
  color: var(--text-tertiary);
  margin: 8px 0 0;
}

@media (max-width: 600px) {
  .ghl-form {
    flex-direction: column;
  }
}
</style>
