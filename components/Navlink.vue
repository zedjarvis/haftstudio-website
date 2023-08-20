<script setup lang="ts">
// props
const props = defineProps<{
  title: string;
  url?: string;
}>();

const { title, url } = toRefs(props);

const link = computed(() => url?.value ? url.value : title.value)
</script>

<template>
  <NuxtLink :to="link">
    <p class="nav-link">{{ title }}
    </p>
  </NuxtLink>
</template>

<style lang="scss" scoped>
.nav-link {
  font-family: Inter, 'Source sans pro', sans-serif;
  font-size: .70rem !important;
  line-height: 1rem !important;
  text-transform: capitalize !important;
  color: rgb(var(--v-theme-secondary));

  cursor: pointer;

  &:hover {
    color: rgb(var(--v-theme-primary)) !important;
  }
}
</style>
