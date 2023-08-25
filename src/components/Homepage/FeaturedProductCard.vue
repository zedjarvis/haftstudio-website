<script setup lang="ts">

// props
const props = defineProps<{
  image: string;
  title: string;
  designer: string;
}>()
</script>

<template>
  <VCard :elevation="3" class="bg-background pb-10">
    <RouterLink to="/">
      <VImg :src="props.image" height="435" cover />
    </RouterLink>
    <RouterLink to="/">
      <p class="pt-4 font-pacifico text-xl text-secondary line-clamp-1 mb-8">{{ props.title }}</p>
    </RouterLink>
    <RouterLink to="/">
      <p class="mt-2 d-block w-full p-2 text-center text-xs font-description font-italic text-primary">{{ props.designer
      }}</p>
    </RouterLink>
  </VCard>
</template>
