<script setup lang="ts">
// props
const props = defineProps<{
  title: string;
}>();
</script>

<template>
  <NuxtLink :to="`${props.title}`">
    <p class="nav-link">{{ $t(props.title) }}
    </p>
  </NuxtLink>
</template>

<style lang="scss" scoped>
.nav-link {
  font-family: Inter, 'Source sans pro', sans-serif;
  font-size: .75rem !important;
  line-height: 1rem !important;
  text-transform: capitalize !important;
  color: rgb(var(--v-theme-secondary));

  cursor: pointer;

  &:hover {
    color: rgb(var(--v-theme-primary)) !important;
  }
}
</style>
