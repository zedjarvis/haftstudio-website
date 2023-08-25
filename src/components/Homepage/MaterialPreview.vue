<script setup lang="ts">
// composables
import { useDisplay } from 'vuetify';

// assets
import materialImg from "@/assets/images/material_overview.jpg";

// variables
const { smAndDown } = useDisplay()
</script>

<template>
  <CustomContainer section-id="material-preview">
    <VResponsive class="mx-auto" :width="smAndDown ? '600' : ''">
      <VRow no-gutters class="mb-md-10">
        <VCol cols="12" md="6" class="text-center pl-md-16">
          <p class="subtitle ">Feel our love for Wood</p>
          <RouterLink to="/">
            <h3 class="title">Materials</h3>
          </RouterLink>
          <RouterLink to="/">
            <VImg :src="materialImg" width="456" height="304" class="mx-auto" />
          </RouterLink>
        </VCol>
        <VCol cols="12" md="6" class="pr-md-15 pl-md-5 pt-16" :class="{ 'text-center': smAndDown }">
          <p class="mt-md-16 font-description font-italic text-secondary" style="font-size: medium;">
            Understanding digitally imitated materials can be demanding, and so we have
            developed a unique material overview for professionals and private clients alike to help better showcase
            the look, feel, and texture of the different materials used in our furniture, lighting and accessories.
          </p>
          <RouterLink to="/">
            <p class="subtitle text-decoration-underline mt-10 pt-md-16 mt-md-16">
              Explore materials
            </p>
          </RouterLink>
        </VCol>
      </VRow>
    </VResponsive>
  </CustomContainer>
</template>
