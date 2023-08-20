<script setup lang="ts">
// composables
import { useWindowScroll, useWindowSize } from "@vueuse/core";

// props
// export interface Props {
//   flat?: boolean;
//   scrollBehavior: string;
// }

// const props = withDefaults(defineProps<Props>(), {
//   flat: true,
//   scrollBehavior: 'elevate hide',
// })

// variables
const { x, y } = useWindowScroll();
const { height, width } = useWindowSize();
const drawer = ref<boolean | null>(null);


// const isScrolling = computed(() => y.value > 0)
// const showBackTop = computed(() => y.value > height.value + 64)

</script>

<template>
  <VToolbar :elevation="1" class="d-flex justify-between pl-md-16 pr-md-2"
    style="background-color: rgb(var(--v-theme-background));">
    <VAppBarTitle class="ml-md-16">
      <Logo />
    </VAppBarTitle>
    <VToolbarItems class="d-none d-md-flex items-center space-x-8">
      <Navlink title="Home" url="/" />
      <Navlink title="products" />
      <Navlink title="projects" />
      <Navlink title="company" />
      <Navlink title="designers" />
      <Navlink title="Blog" />
      <Navlink title="contact" />
      <VSpacer></VSpacer>
      <!-- <LocaleMenu /> -->
      <SearchItem />
      <!-- <VBtn size="small" variant="plain" class="pa-0 ma-0" icon :ripple="false">
        <VIcon>mdi-shopping-outline</VIcon> 0
      </VBtn> -->
    </VToolbarItems>
    <VBtn class="d-flex d-md-none" color="secondary" variant="plain" icon="mdi-menu" @click="drawer = true"></VBtn>
  </VToolbar>
  <VNavigationDrawer location="top" v-model="drawer" temporary width="auto">
    <VToolbar>
      <SearchItem />
      <VSpacer></VSpacer>
      <!-- <LocaleMenu /> -->
      <VSpacer></VSpacer>
      <VBtn color="secondary" variant="plain" icon="mdi-close" @click="drawer = false"></VBtn>
    </VToolbar>
    <VList class="d-flex flex-column justify-center text-center">
      <NavLinkMobile url="/" title="home" />
      <VDivider></VDivider>
      <NavLinkMobile title="products" />
      <VDivider></VDivider>
      <NavLinkMobile title="projects" />
      <VDivider></VDivider>
      <NavLinkMobile title="company" />
      <VDivider></VDivider>
      <NavLinkMobile title="designers" />
      <VDivider></VDivider>
      <NavLinkMobile title="blog" />
      <VDivider></VDivider>
      <NavLinkMobile title="contact" />
      <VDivider></VDivider>
    </VList>
  </VNavigationDrawer>
</template>

<style lang="scss" scoped></style>
