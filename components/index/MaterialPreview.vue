<script setup lang="ts">
import materialImg from "~/assets/images/material_overview.webp"
</script>

<template>
  <section id="material-preview">
    <VSheet>
      <VContainer class="pt-16 pb-16">
        <VRow no-gutters class="mb-md-10">
          <VCol cols="12" md="6" class="text-center pl-md-16">
            <p class="subtitle ">Feel our love for Wood</p>
            <NuxtLink to="/">
              <h3 class="title">Materials</h3>
            </NuxtLink>
            <NuxtLink to="/">
              <VImg :src="materialImg" width="456" height="304" class="mx-auto" />
            </NuxtLink>
          </VCol>
          <VCol cols="12" md="6" class="pr-md-16 pl-md-4 pt-16 position-relative">
            <p class="mt-md-16 font-description font-italic">Understanding digitally imitated materials can be
              demanding, and so we have
              developed a
              unique material
              overview for professionals and private clients alike to help better showcase the look, feel, and texture of
              the different materials used in our furniture, lighting and accessories.</p>
            <NuxtLink to="/">
              <p class="subtitle text-decoration-underline mt-7 mt-md-0 md:absolute bottom-12 text-center md:text-left">
                Explore materials
              </p>
            </NuxtLink>
          </VCol>
        </VRow>
      </VContainer>
    </VSheet>
  </section>
</template>
