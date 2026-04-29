<script setup lang="ts">
// Acento amarelo dual: highlight no light, texto direto no dark.
// Decisao de qual classe aplicar e feita via CSS data attr (color-mode).
//
// Uso:
//   <AccentMark>contexto</AccentMark>
//
// O texto interno deve ser SEMPRE 1 palavra (regra de escassez do
// design system). Maximo 1 ocorrencia no hero, 1-2 no corpo.
</script>

<template>
  <span class="accent-mark"><slot /></span>
</template>

<!--
  Estilos vivem em app/assets/css/main.css (.accent-mark e .dark .accent-mark)
  porque scoped CSS do Vue nao combina :global() com descendant seletor de
  forma confiavel.
-->

