<script setup lang="ts">

// variables
const route = useRoute()

const currentRoute = ref(route.fullPath)

watch(route, () => {
  currentRoute.value = route.fullPath
  useHead({
    title: `Error 404: Page not Fount ${currentRoute.value}`
  })
})

// seo
useHead({
  title: `Error 404: Page not Fount ${currentRoute.value}`
})
</script>

<template>
  <section id="error">
    <VSheet class="d-flex justify-center align-center text-center py-16"
      style="background-color: rgb(var(--v-theme-background));">
      <VContainer class="text-center py-md-16">
        <VResponsive width="600" class="mx-auto">
          <h1 class="error-header">OOPS!</h1>
          <h2 class="mb-4 error-message">Error 404: Page Not Found {{ currentRoute }}</h2>
          <RouterLink to="/">
            <VBtn color="primary" variant="outlined" rounded="0">GO HOME <VIcon>mdi-arrow-right</VIcon>
            </VBtn>
          </RouterLink>
        </VResponsive>
      </VContainer>
    </VSheet>
  </section>
</template>

<style lang="scss" scoped>
.error-header {
  font-family: Inter;
  font-size: 86px;
  font-weight: 700;
  text-transform: uppercase;
  margin-bottom: 8px;
  color: rgb(var(--v-theme-secondary));
}

.error-message {
  font-family: Inter;
  font-size: 26px;
  font-weight: 700;
  text-transform: capitalize;
  color: rgb(var(--v-theme-secondary));
}
</style>
