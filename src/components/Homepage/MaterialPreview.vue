<script setup lang="ts">
// components
import { VueCompareImage } from 'vue3-compare-image';

// composables

// assets
import materialImg from '@/assets/images/pexels-maria-1.webp';
import plantImg from '@/assets/images/plant-seedlings.webp';

// variables
const { smAndDown } = useDisplay()
</script>

<template>
  <CustomContainer section-id="material-preview">
    <VResponsive class="mx-auto">
      <VRow no-gutters class="mb-md-5 px-sm-16">
        <VCol cols="12" md="6" class="text-center">
          <p class="subtitle ">Feel our love for Wood</p>
          <RouterLink to="/">
            <h3 class="title">Materials</h3>
          </RouterLink>
          <RouterLink to="/">
            <VCard :elevation="0" rounded="0" class="mx-auto pa-0">
              <VueCompareImage :left-image="materialImg" :right-image="plantImg" :slider-line-width="0" hover
                :slider-position-percentage="1" />
            </VCard>
          </RouterLink>
        </VCol>
        <VCol cols="12" md="6" class="pl-md-10 pt-10 pt-md-16">
          <p class="mt-md-16 font-description font-italic text-secondary" style="font-size:.9rem; line-height: 28px;">
            Wood is a timeless material that has been at the heart of our craft. Each
            creation embodies our passion for nature's beauty and sustainable design. With every furniture piece, we plant
            a tree, nurturing our commitment to the environment. Our artisanal touch turns wood into timeless art,
            ensuring your furniture tells a story that lasts. Join us in celebrating wood's warmth and artistry—a love
            that goes beyond design.
          </p>
          <RouterLink to="/">
            <p class="subtitle text-decoration-underline mt-16" :class="{ 'text-center': smAndDown }">
              Explore materials
            </p>
          </RouterLink>
        </VCol>
      </VRow>
    </VResponsive>
  </CustomContainer>
</template>
