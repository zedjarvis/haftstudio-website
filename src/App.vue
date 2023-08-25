<script setup lang="ts">
import { useOnline } from '@vueuse/core';

const online = useOnline()

console.log(online.value, " Online")
</script>

<template>
  <VApp>
    <RouterView />
  </VApp>
</template>
