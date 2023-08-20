<script setup lang="ts">
// composables
import { useWindowSize, useWindowScroll, useLocalStorage } from '@vueuse/core';

// assets
import img1 from "~/assets/images/1.webp"
import img2 from "~/assets/images/2.webp"
import img3 from "~/assets/images/3.webp"
import img4 from "~/assets/images/4.webp"
import img5 from "~/assets/images/5.webp"
import img6 from "~/assets/images/6.webp"
import img7 from "~/assets/images/7.webp"
import img8 from "~/assets/images/8.webp"
import img9 from "~/assets/images/9.webp"
import img10 from "~/assets/images/10.webp"
import nevaChair from "~/assets/images/neva_chair_cover.webp"
import invitoTable from "~/assets/images/invito_table_cover.webp"
import latusTable from "~/assets/images/latus_table_cover.webp"
import nevaLounge from "~/assets/images/neva_lounge_trimmed_cover.webp"

definePageMeta({
  layout: "home-layout",
})

useHead({
  title: "Home"
})

// variables
const { width, height } = useWindowSize();
const { x, y } = useWindowScroll()

const carousel = useLocalStorage('home-carousel', 1)
const windowScrollPos = useLocalStorage('home-window-scroll-pos', y.value)

watch(y, () => {
  windowScrollPos.value = y.value
})

onMounted(() => {
  window.scrollTo({
    top: windowScrollPos.value,
    left: 0,
    behavior: 'smooth',
  })
})
</script>

<template>
  <!-- HOME SECTION -->
  <section id="hero">
    <VSheet>
      <VCard :elevation="0" rounded="0" :height="height">
        <VCarousel :height="height" v-model="carousel" hide-delimiter-background show-arrows="hover" continuous cycle
          touch>
          <VCarouselItem :value="1" :src="img1" cover :width="width" :height="height" />
          <VCarouselItem :value="2" :src="img2" cover :width="width" :height="height" />
          <VCarouselItem :value="3" :src="img3" cover :width="width" :height="height" />
          <VCarouselItem :value="4" :src="img4" cover :width="width" :height="height" />
          <VCarouselItem :value="5" :src="img5" cover :width="width" :height="height" />
          <VCarouselItem :value="6" :src="img6" cover :width="width" :height="height" />
          <VCarouselItem :value="7" :src="img7" cover :width="width" :height="height" />
          <VCarouselItem :value="8" :src="img8" cover :width="width" :height="height" />
          <VCarouselItem :value="9" :src="img9" cover :width="width" :height="height" />
          <VCarouselItem :value="10" :src="img10" cover :width="width" :height="height" />
        </VCarousel>
      </VCard>
    </VSheet>
  </section>

  <!-- ABOUT SECTION  -->
  <IndexAboutSection />


  <!-- MATERIAL PREVIEW SECTION  -->
  <IndexMaterialPreview />


  <!-- PRODUCT SECTION  -->
  <section id="products">
    <VSheet class="d-flex justify-center text-center" style="background-color: rgb(var(--v-theme-background));">
      <VContainer class="pt-16 pb-16">
        <VResponsive class="mx-auto">
          <p class="subtitle">Featured products</p>
          <h3 class="title">Bestsellers</h3>
          <VRow class="md-px-16 mt-8">
            <VCol cols="6" md="3">
              <NuxtLink to="/">
                <VImg :src="nevaChair" />
              </NuxtLink>
              <NuxtLink to="/">
                <p class="pt-4 font-pacifico text-xl text-secondary line-clamp-1 mb-8">Neva Chair</p>
              </NuxtLink>
              <NuxtLink to="/">
                <p class="mt-2 block w-full p-2 text-center text-xs text-primary">Haft Studio</p>
              </NuxtLink>
            </VCol>
            <VCol cols="6" md="3">
              <NuxtLink to="/">
                <VImg :src="invitoTable" />
              </NuxtLink>
              <NuxtLink to="/">
                <p class="pt-4 font-pacifico text-xl text-secondary line-clamp-1 mb-8">Invito Table</p>
              </NuxtLink>
              <NuxtLink to="/">
                <p class="mt-2 block w-full p-2 text-center text-xs text-primary">Haft Studio</p>
              </NuxtLink>
            </VCol>
            <VCol cols="6" md="3">
              <NuxtLink to="/">
                <VImg :src="nevaLounge" />
              </NuxtLink>
              <NuxtLink to="/">
                <p class="pt-4 font-pacifico text-xl text-secondary line-clamp-1 mb-8">Neva Lounge</p>
              </NuxtLink>
              <NuxtLink to="/">
                <p class="mt-2 block w-full p-2 text-center text-xs text-primary">Haft Studio</p>
              </NuxtLink>
            </VCol>
            <VCol cols="6" md="3">
              <NuxtLink to="/">
                <VImg :src="latusTable" />
              </NuxtLink>
              <NuxtLink to="/">
                <p class="pt-4 text-xl text-secondary line-clamp-1 mb-6 font-pacifico">Latus Table</p>
              </NuxtLink>
              <NuxtLink to="/">
                <p class="mt-2 block w-full p-2 text-center text-xs text-primary font-inter">Haft Studio</p>
              </NuxtLink>
            </VCol>
          </VRow>
        </VResponsive>
      </VContainer>
    </VSheet>
  </section>



  <!-- CATALOG SECTION  -->
  <section id="catalogs">
    <VSheet class="d-flex justify-center text-center" style="background-color: rgb(var(--v-theme-background));">
      <VContainer class="pt-16 pb-16">
        <VResponsive class="mx-auto">
          <p class="subtitle">New Releases</p>
          <h3 class="title">Catalogs</h3>
          <VRow class="md-px-16 mt-8">

          </VRow>
        </VResponsive>
      </VContainer>
    </VSheet>
  </section>

  <!-- WORK WITH US SECTION  -->
  <section id="professionals">
    <VSheet class="d-flex justify-center text-center" style="background-color: rgb(var(--v-theme-background));">
      <VContainer class="pt-16 pb-16">
        <VResponsive class="mx-auto">
          <p class="subtitle">Work with Us</p>
          <h3 class="title">Professionals Section</h3>
          <VRow class="md-px-16 mt-8">

          </VRow>
        </VResponsive>
      </VContainer>
    </VSheet>
  </section>

  <!-- BLOG SECTION  -->
  <section id="professionals">
    <VSheet class="d-flex justify-center text-center" style="background-color: rgb(var(--v-theme-background));">
      <VContainer class="pt-16 pb-16">
        <VResponsive class="mx-auto">
          <p class="subtitle">Our Stories</p>
          <h3 class="title">The Blog</h3>
          <VRow class="md-px-16 mt-8">
          </VRow>
        </VResponsive>
      </VContainer>
    </VSheet>
  </section>
</template>

<style lang="scss" scoped>
.about {
  font-family: Marat, ui-serif, Georgia, Cambria, 'Times New Roman', Times, serif;
}
</style>


<!-- <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
<link rel="manifest" href="/site.webmanifest"> -->
