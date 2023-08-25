<script setup lang="ts">

// assets
import img1 from '@/assets/images/1.jpg';
import img10 from '@/assets/images/10.jpg';
import img2 from '@/assets/images/2.jpg';
import img3 from '@/assets/images/3.jpg';
import img4 from '@/assets/images/4.jpg';
import img5 from '@/assets/images/5.jpg';
import img6 from '@/assets/images/6.jpg';
import img7 from '@/assets/images/7.jpg';
import img8 from '@/assets/images/8.jpg';
import img9 from '@/assets/images/9.jpg';

// variables
const { width, height } = useWindowSize()
const carouselItem = useLocalStorage('hero-carousel-item', 1)
</script>

<template>
  <section id="hero">
    <VSheet>
      <VCard rounded="0" elevation="0" :width="width" :height="height">
        <VCarousel :height="height" v-model="carouselItem" touch continuous cycle show-arrows="hover"
          hide-delimiter-background>
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
  </section>
</template>
