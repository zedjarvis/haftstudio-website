<script setup lang="ts">

// composables
import { useDisplay } from 'vuetify';

// variables
const { xs } = useDisplay()
const { width } = useWindowSize()
</script>

<template>
  <VFooter class="footer pa-0 bg-background position-relative" :style="{ width: `${width}px` }">
    <div class="top-block"></div>
    <VContainer fluid class="w-100 h-100 ma-0 pa-0 bg-surface">
      <VRow no-gutters class="px-md-16">
        <VCol class="d-flex flex-column flex-md-row justify-center mt-5 py-3">
          <Navlink class="mx-auto mx-md-6 py-4 py-md-1" url="/" title="home" />
          <VDivider :vertical="!xs"></VDivider>
          <Navlink class="mx-auto mx-md-6 py-4 py-md-2" title="products" />
          <VDivider :vertical="!xs"></VDivider>
          <Navlink class="mx-auto mx-md-6 py-4 py-md-2" title="projects" />
          <VDivider :vertical="!xs"></VDivider>
          <Navlink class="mx-auto mx-md-6 py-4 py-md-2" title="company" />
          <VDivider :vertical="!xs"></VDivider>
          <Navlink class="mx-auto mx-md-6 py-4 py-md-2" title="designers" />
          <VDivider :vertical="!xs"></VDivider>
          <Navlink class="mx-auto mx-md-6 py-4 py-md-2" title="blog" />
          <VDivider :vertical="!xs"></VDivider>
          <Navlink class="mx-auto mx-md-6 py-4 py-md-2" title="contact" />
          <VDivider v-if="xs" :vertical="!xs"></VDivider>
        </VCol>
      </VRow>
      <VRow no-gutters>
        <VCol cols="12" class="text-center mt-5">
          <p class="subtitle">Contact Us</p>
          <p class="font-description font-italic mb-3"><a href="mailto:info@haftstudio.ke">info@haftstudio.ke</a></p>
          <!-- <p class="font-description font-italic"><a href="tel:+254113581586">+254 113 581 586</a></p> -->
        </VCol>
      </VRow>
      <VRow no-gutters>
        <VCol cols="12" class="d-flex justify-center pa-3 pa-md-5 mb-4 mb-md-8">
          <VBtn color="primary" rounded="pill" variant="text" icon="mdi-facebook"></VBtn>
          <VBtn color="primary" rounded="pill" variant="text" icon="mdi-twitter"></VBtn>
          <VBtn color="primary" rounded="pill" variant="text" icon="mdi-instagram"></VBtn>
          <VBtn color="primary" rounded="pill" variant="text" icon="mdi-pinterest"></VBtn>
        </VCol>
      </VRow>
      <VRow no-gutters
        class="footer-footer d-flex flex-column-reverse flex-md-row items-center text-center w-full bg-secondary py-5 px-md-16">
        <p class="py-1">&copy; 2011 - {{ new Date().getFullYear() }} Haftstudio.ke | All Rights Reserved.</p>
        <VSpacer class="d-none d-md-flex"></VSpacer>
        <RouterLink to="/">
          <p class="px-1 py-1 text-background">Terms of Use.</p>
        </RouterLink>
        <RouterLink to="/">
          <p class="px-1 py-1 text-background">Privacy Policy.</p>
        </RouterLink>
        <p class="px-1 py-1"><a href="/sitemap.xml" class="text-background" target="_blank">SiteMap.</a></p>
        <div class="bottom-block"></div>
      </VRow>
    </VContainer>
  </VFooter>
</template>

<style lang="scss" scoped>
.footer {
  font-family: Inter !important;
  font-weight: 300;
}

.footer-footer {
  position: relative !important;
  font-size: .75rem;
  line-height: 1rem;

  .bottom-block {
    display: inline-block !important;
    position: absolute !important;
    bottom: 0 !important;
    left: 0;
    right: 0;
    margin: 0 auto;
    height: 0.5rem;
    width: 7.5rem;
    background-color: rgb(var(--v-theme-primary));
  }
}

.top-block {
  display: inline-block;
  position: absolute;
  top: 0 !important;
  left: 0;
  right: 0;
  margin: 0 auto;
  height: 0.5rem;
  width: 50%;
  background-color: rgb(var(--v-theme-primary));
}
</style>
