<script setup lang="ts">

// props
const props = defineProps<{
  image: string;
  title: string;
  designer: string;
}>()
</script>

<template>
  <VCard rounded="0" :elevation="0" class="bg-background pb-0">
    <RouterLink to="/">
      <VImg :src="props.image" :height="333" cover />
    </RouterLink>
    <RouterLink to="/">
      <p class="pt-4 font-pacifico text-xl text-secondary line-clamp-1 mb-8" style="font-weight: 100;">{{ props.title }}</p>
    </RouterLink>
    <RouterLink to="/">
      <p class="mt-2 d-block w-full p-2 text-center text-xs font-description font-italic text-primary">{{ props.designer
      }}</p>
    </RouterLink>
  </VCard>
</template>
