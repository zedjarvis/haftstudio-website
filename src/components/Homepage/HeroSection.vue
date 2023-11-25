<script setup lang="ts">

// assets
import img1 from '@/assets/images/1.webp';
import img10 from '@/assets/images/10.webp';
import img2 from '@/assets/images/2.webp';
import img3 from '@/assets/images/3.webp';
import img4 from '@/assets/images/4.webp';
import img5 from '@/assets/images/5.webp';
import img6 from '@/assets/images/6.webp';
import img7 from '@/assets/images/7.webp';
import img8 from '@/assets/images/8.webp';
import img9 from '@/assets/images/9.webp';

// variables
const { width, height } = useWindowSize()
const carouselItem = useLocalStorage('hero-carousel-item', 1)
const { name, xs } = useDisplay()

const sectionHeight = computed(() => {
    switch (name.value) {
      case 'xs': return height.value - 72
      case 'sm': return 'auto'
    }
    return height.value
})
</script>

<template>
    <VSheet tag="section" id="hero">
      <VCard rounded="0" elevation="0" :width="width" :height="sectionHeight">
        <VCarousel :height="sectionHeight" v-model="carouselItem" touch continuous cycle :show-arrows="false"
          hide-delimiter-background :hide-delimiters="xs">
          <VCarouselItem :value="1" :src="img1" cover />
          <VCarouselItem :value="2" :src="img2" cover />
          <VCarouselItem :value="3" :src="img3" cover />
          <VCarouselItem :value="4" :src="img4" cover />
          <VCarouselItem :value="5" :src="img5" cover />
          <VCarouselItem :value="6" :src="img6" cover />
          <VCarouselItem :value="7" :src="img7" cover />
          <VCarouselItem :value="8" :src="img8" cover />
          <VCarouselItem :value="9" :src="img9" cover />
          <VCarouselItem :value="10" :src="img10" cover />
        </VCarousel>
      </VCard>
    </VSheet>
</template>
