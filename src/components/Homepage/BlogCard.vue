<script setup lang="ts">

// assets
import chairImg from '@/assets/images/News_2_Mela_Chair.jpg';
</script>

<template>
  <VCard rounded="0" :elevation="0" class="bg-background">
    <VImg class="mx-auto" :src="chairImg" width="304" height="202" cover>
    </VImg>
    <h3 class="pt-4 mb-2 font-italic font-serif text-primary"
      style="font-size: 20px; line-height: 28px; font-weight: 300;">Haft Craft wood design award winner</h3>
    <p class="font-description font-italic text-secondary mb-8">Lorem ipsum, dolor sit amet consectetur adipisicing elit.
      Eos doloremque
      accusantium molestiae, ad officia eaque inventore magni aliquid dicta unde.</p>
    <RouterLink to="/">
      <p class="text-decoration-underline pa-2 ms-n2 text-primary text-uppercase" style="font-size: 12px; line-height: 1rem;">
        Read More
      </p>
    </RouterLink>
  </VCard>
</template>
