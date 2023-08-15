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
import footerImg from "~/assets/images/chair-2.jpg"

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
      <VCarousel class="h-screen" v-model="carousel" hide-delimiters :show-arrows="false" continuous cycle touch>
        <VCarouselItem :value="1" :src="img1" cover :width="width" height="700px" />
        <VCarouselItem :value="2" :src="img2" cover :width="width" height="700px" />
        <VCarouselItem :value="3" :src="img3" cover :width="width" height="700px" />
        <VCarouselItem :value="4" :src="img4" cover :width="width" height="700px" />
        <VCarouselItem :value="5" :src="img5" cover :width="width" height="700px" />
        <VCarouselItem :value="6" :src="img6" cover :width="width" height="700px" />
        <VCarouselItem :value="7" :src="img7" cover :width="width" height="700px" />
        <VCarouselItem :value="8" :src="img8" cover :width="width" height="700px" />
        <VCarouselItem :value="9" :src="img9" cover :width="width" height="700px" />
        <VCarouselItem :value="10" :src="img10" cover :width="width" height="700px" />
      </VCarousel>
    </VSheet>
  </section>

  <!-- ABOUT SECTION  -->
  <section id="about">
    <VSheet class="d-flex justify-center text-center" style="background-color: rgb(var(--v-theme-background));">
      <VContainer class="text-center">
        <VResponsive width="600" class="mx-auto">
          <VCard rounded="0" :elevation="0" class="bg-transparent pt-16 mb-24">
            <h2 class="subtitle text-xs text-primary">{{ $t('aboutUs') }}</h2>
            <h1 class="title text-secondary">Haft Studio</h1>
            <p class="m-0 mb-0 mt-20 leading-10 about" v-html="$t('homeDesc')"></p>
          </VCard>
        </VResponsive>
      </VContainer>
    </VSheet>
  </section>

  <!-- CALL TO ACTION  -->
  <section id="cta">
    <VSheet class="d-flex justify-center text-center">
      <VImg :src="footerImg" height="500"></VImg>
    </VSheet>
  </section>
</template>

<style lang="scss" scoped>
.subtitle {
  margin-bottom: 1rem;
  letter-spacing: 4px;
  text-transform: uppercase;
  font-weight: 300;
  font-family: Inter, sans-serif;
}

.title {
  margin-top: .25rem;
  margin-bottom: 3rem;
  font-size: 1.875rem;
  line-height: 2.25rem;
  font-family: Pacifico;
  font-style: italic;
}

.about {
  font-family: Inter;
}
</style>


<!-- <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
<link rel="manifest" href="/site.webmanifest"> -->
