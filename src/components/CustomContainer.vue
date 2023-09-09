<script setup lang="ts">

// props
const props = defineProps<{
  sectionId?: string;
  sheetStyle?: string;
  containerStyle?: string;
}>()

// variables
const componentId = Math.random().toString(36).substr(2, 9);
const { width } = useWindowSize()

const ID = computed(() => props.sectionId ? props.sectionId : componentId)
</script>

<template>
  <VSheet tag="section" :id="ID" class="pb-16" :class="props.sheetStyle" :style="{ width: `${width}px` }">
    <VContainer class="pt-16 pb-16" :class="props.containerStyle">
      <slot />
    </VContainer>
  </VSheet>
</template>
