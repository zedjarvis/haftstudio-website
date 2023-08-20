<script setup lang="ts">

const { xs } = useDisplay()
</script>

<template>
  <VFooter class="footer pa-0 mx-0 mt-5 bg-background">
    <div class="inline-block h-2 w-50 bg-primary absolute top-0 left-0 right-0 mx-auto"></div>
    <VContainer fluid class="w-full h-full ma-0 pa-0 bg-surface">
      <VRow no-gutters class="px-md-16">
        <VCol class="d-flex flex-column flex-md-row justify-center mt-5 py-5">
          <Navlink class="mx-auto mx-md-4 py-4 py-md-2" url="/" title="home" />
          <VDivider :vertical="!xs"></VDivider>
          <Navlink class="mx-auto mx-md-4 py-4 py-md-2" title="products" />
          <VDivider :vertical="!xs"></VDivider>
          <Navlink class="mx-auto mx-md-4 py-4 py-md-2" title="company" />
          <VDivider :vertical="!xs"></VDivider>
          <Navlink class="mx-auto mx-md-4 py-4 py-md-2" title="Designers" />
          <VDivider :vertical="!xs"></VDivider>
          <Navlink class="mx-auto mx-md-4 py-4 py-md-2" title="Projects" />
          <VDivider :vertical="!xs"></VDivider>
          <Navlink class="mx-auto mx-md-4 py-4 py-md-2" title="Blog" />
          <VDivider :vertical="!xs"></VDivider>
          <Navlink class="mx-auto mx-md-4 py-4 py-md-2" title="Contact" />
          <VDivider v-if="xs" :vertical="!xs"></VDivider>
        </VCol>
      </VRow>
      <VRow no-gutters>
        <VCol cols="12" class="d-flex justify-center pa-3 pa-md-5 mb-4 mb-md-8">
          <VBtn color="primary" rounded variant="text" icon="mdi-twitter"></VBtn>
          <VBtn color="primary" rounded variant="text" icon="mdi-instagram"></VBtn>
          <VBtn color="primary" rounded variant="text" icon="mdi-pinterest"></VBtn>
        </VCol>
      </VRow>
      <VRow no-gutters
        class="footer-footer d-flex flex-column-reverse flex-md-row items-center text-center w-full bg-secondary py-5 px-md-16">
        <p class="py-1">&copy; 2011 - {{ new Date().getFullYear() }} Haftstudio.ke | All Rights Reserved.</p>
        <VSpacer class="d-none d-md-flex"></VSpacer>
        <NuxtLink to="/">
          <p class="px-1 py-1 text-background">Terms of Use.</p>
        </NuxtLink>
        <NuxtLink to="/">
          <p class="px-1 py-1 text-background">Privacy Policy.</p>
        </NuxtLink>
        <NuxtLink to="/">
          <p class="px-1 py-1 text-background">SiteMap.</p>
        </NuxtLink>
        <div class="bottom-block"></div>
      </VRow>
    </VContainer>
  </VFooter>
</template>

<style lang="scss" scoped>
.footer {
  font-family: Inter !important;
  font-weight: 300;
  position: relative !important;
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
</style>
