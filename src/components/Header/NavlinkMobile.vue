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
  <RouterLink :to="link">
    <VListItem class="nav-link" :title="title">
    </VListItem>
  </RouterLink>
</template>

<style lang="scss">
.nav-link {
  font-family: Inter, 'Source sans pro', sans-serif;
  font-size: .75rem !important;
  line-height: 1rem !important;
  color: rgb(var(--v-theme-secondary)) !important;

  .v-list-item-title {
    text-transform: capitalize;
  }
}
</style>
