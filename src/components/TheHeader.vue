<script setup lang="ts">

// composables
import { useDisplay } from 'vuetify';
// props
interface Props {
  flat?: boolean;
  scrollBehavior?: 'elevate' | 'elevate hide';
}

const props = withDefaults(defineProps<Props>(), {
  flat: false,
  scrollBehavior: 'elevate',
})

// variables
const drawer = ref<null | boolean>(null)
const { mdAndUp } = useDisplay()

const { flat, scrollBehavior } = toRefs(props)
</script>

<template>
  <!-- 👉 MOBILE NAV -->
  <VNavigationDrawer v-model="drawer" location="top" temporary width="auto">
    <VToolbar>
      <Search />
      <VSpacer></VSpacer>
      <VBtn color="secondary" variant="plain" icon="mdi-close" @click="drawer = false"></VBtn>
    </VToolbar>
    <VList class="d-flex flex-column justify-center text-center">
      <NavlinkMobile url="/" title="home" />
      <VDivider></VDivider>
      <NavlinkMobile title="products" />
      <VDivider></VDivider>
      <NavlinkMobile title="projects" />
      <VDivider></VDivider>
      <NavlinkMobile title="company" />
      <VDivider></VDivider>
      <NavlinkMobile title="designers" />
      <VDivider></VDivider>
      <!-- <NavlinkMobile title="blog" />
      <VDivider></VDivider> -->
      <NavlinkMobile title="contact" />
      <VDivider></VDivider>
    </VList>
  </VNavigationDrawer>

  <!-- 👉 DESKTOP NAV  -->
  <VAppBar :flat="flat" :scroll-behavior="scrollBehavior" scroll-threshold="64" class="pl-md-16 d-flex bg-background">
    <VAppBarTitle class="ml-md-16">
      <!-- 👉 LOGO  -->
      <TheLogo />
    </VAppBarTitle>
    <VSpacer v-if="mdAndUp"></VSpacer>
    <VToolbarItems class="d-none d-md-flex align-center justify-space-between">
      <Navlink class="mx-3" title="home" to="/" />
      <Navlink class="mx-3" title="products" />
      <Navlink class="mx-3" title="projects" />
      <Navlink class="mx-3" title="company" />
      <Navlink class="mx-3" title="designers" />
      <!-- <Navlink class="mx-3" title="blog" /> -->
      <Navlink class="ml-3" title="contact" />
      <!-- 👉 SEARCH  -->
      <Search />
    </VToolbarItems>
    <VBtn class="d-none d-md-flex" variant="plain" :size="mdAndUp ? 'x-small' : 'default'" icon="mdi-account-outline" />
    <VBtn class="d-none d-md-flex" variant="plain" :size="mdAndUp ? 'x-small' : 'default'" icon="mdi-shopping-outline" />
    <VAppBarNavIcon flat class="d-flex d-md-none" color="secondary" variant="plain" @click="drawer = true">
    </VAppBarNavIcon>
  </VAppBar>
</template>
