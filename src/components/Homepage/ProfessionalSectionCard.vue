<script setup lang="ts">

// props
const props = defineProps<{
  image: string;
  title: string;
}>()
</script>

<template>
  <VCard rounded="0" :elevation="0" class="pb-0">
    <RouterLink to="/">
      <VImg :src="props.image" :height="333" cover />
    </RouterLink>
    <RouterLink to="/">
      <p class="pt-4 font-pacifico text-xl text-secondary mb-8" style="font-weight: 100;">{{ props.title }}</p>
    </RouterLink>
  </VCard>
</template>
