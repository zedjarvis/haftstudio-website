<script setup lang="ts">

// assets
import plantImg from '@/assets/images/plant-seedlings.jpg';
</script>

<template>
  <VCard rounded="0" :elevation="0" class="mx-auto text-left pb-8">
    <VImg class="align-end text-white" :src="plantImg" height="200" cover>
      <VCardTitle>Tree Planting 2022</VCardTitle>
    </VImg>
    <VCardSubtitle class="text-xs">Haft Studio at ngong forest on some date doing awesome stuff</VCardSubtitle>
    <VCardText>
      <p class="font-description text-secondary">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos doloremque
        accusantium molestiae, ad officia eaque inventore magni aliquid dicta unde.</p>
    </VCardText>
    <RouterLink to="/">
      <p class="subtitle text-decoration-underline mt-4" :class="{ 'text-center': true }">
        Read More
      </p>
    </RouterLink>
  </VCard>
</template>
