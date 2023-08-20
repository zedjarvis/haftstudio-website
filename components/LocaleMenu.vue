<script setup lang="ts">

// composables
import { useLocalStorage } from "@vueuse/core";



const appLocale = useLocalStorage('locale', 'en')
const { locale } = useI18n();

const menu = ref(false)

// hooks
onMounted(() => {
  locale.value = appLocale.value
})

watch(appLocale, () => {
  locale.value = appLocale.value
})
</script>

<template>
  <VBtn size="small" :ripple="false" variant="plain" class="text-capitalize ma-0 pa-0">
    {{ appLocale }}
    <VMenu v-model="menu" activator="parent">
      <VList rounded="0" density="compact" class="pa-0 ma-0 w-auto">
        <VListItem class="pa-1 text-caption" density="compact" title="EN" @click="appLocale = 'en'" />
        <VListItem class="pa-1 text-caption" density="compact" title="SW" @click="appLocale = 'en'" />
        <VListItem class="pa-1 text-caption" density="compact" title="FR" @click="appLocale = 'en'" />
        <VListItem class="pa-1 text-caption" density="compact" title="中国人" @click="appLocale = 'en'" />
      </VList>
    </VMenu>
  </VBtn>
</template>
