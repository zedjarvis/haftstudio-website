<script setup lang="ts">
// composables
import { useWindowScroll, useWindowSize } from "@vueuse/core";

// store
import { useAppStore } from '~/store';


useHead({
  titleTemplate: "%s ← Haft Studio",
})

// variables
const appStore = useAppStore();
const { locale } = useI18n();
const { x, y } = useWindowScroll();
const { height, width } = useWindowSize();
const drawer = ref<boolean | null>(null);

// computed refs
const appLocale = computed({
  get: () => appStore.getLocale,
  set: val => appStore.setLocale(val)
})

const showBackTop = computed(() => y.value > height.value + 64)

// functions
const changeLocale = (locale: string) => {
  appLocale.value = locale
}

// hooks
onMounted(() => {
  locale.value = appLocale.value
})

watch(appLocale, () => {
  locale.value = appLocale.value
  console.log(appLocale.value, appStore.locale)
})
</script>

<template>
  <VToolbar class="md:pl-16 md:pr-2">
    <VToolbarTitle class="md:ml--16">
      <Logo />
    </VToolbarTitle>
    <VSpacer></VSpacer>
    <div class="hidden lg:flex gap-8 items-center">
      <Navlink title="products" />
      <Navlink title="company" />
      <Navlink title="designers" />
      <Navlink title="work" />
      <Navlink title="contact" />
      <LocaleMenu :locale="appLocale" @change-locale="changeLocale" />
      <SearchItem />
    </div>
    <div class="flex lg:hidden mx-3">
      <VBtn color="secondary" variant="plain" icon="mdi-menu" @click="drawer = true"></VBtn>
    </div>
  </VToolbar>
  <VNavigationDrawer location="top" v-model="drawer" temporary width="auto">
    <VToolbar>
      <SearchItem />
      <VSpacer></VSpacer>
      <LocaleMenu :locale="appLocale" @change-locale="changeLocale" />
      <VSpacer></VSpacer>
      <VBtn color="secondary" variant="plain" icon="mdi-close" @click="drawer = false"></VBtn>
    </VToolbar>
    <VList class="d-flex flex-column justify-center text-center">
      <NavLinkMobile title="products" />
      <VDivider></VDivider>
      <NavLinkMobile title="company" />
      <VDivider></VDivider>
      <NavLinkMobile title="designers" />
      <VDivider></VDivider>
      <NavLinkMobile title="work" />
      <VDivider></VDivider>
      <NavLinkMobile title="contact" />
      <VDivider></VDivider>
    </VList>
  </VNavigationDrawer>
</template>

<style lang="scss" scoped></style>
