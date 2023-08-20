<script setup lang="ts">

// props
const props = defineProps<{
  locale: string;
}>();

// emits
const emit = defineEmits<{
  (e: 'changeLocale', localeStr: string): void
}>();


// variables
const menu = ref(false)
</script>

<template>
  <VBtn :ripple="false" variant="plain" class="text-capitalize ma-0 pa-0">
    {{ $props.locale }}
    <VMenu v-model="menu" activator="parent">
      <VList lines="one" rounded="0" density="compact" class="pa-0 ma-0 w-auto">
        <VListItem density="compact" title="EN" @click="$emit('changeLocale', 'en')" />
        <VListItem density="compact" title="SW" @click="$emit('changeLocale', 'sw')" />
        <VListItem density="compact" title="FR" @click="$emit('changeLocale', 'fr')" />
        <VListItem density="compact" title="中国人" @click="$emit('changeLocale', 'zh')" />
      </VList>
    </VMenu>
  </VBtn>
</template>
