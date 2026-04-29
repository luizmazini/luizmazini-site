<script setup lang="ts">
// Root app component. Define meta SEO default + provider de cor.
useHead({
  htmlAttrs: { lang: 'pt-BR' },
})

useSeoMeta({
  titleTemplate: '%s',
  ogSiteName: 'Luiz Mazini',
  ogLocale: 'pt_BR',
  twitterCard: 'summary_large_image',
  twitterSite: '@luizmazini',
  twitterCreator: '@luizmazini',
})
</script>

<template>
  <div class="app-root">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
