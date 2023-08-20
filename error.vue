<script setup lang="ts">

interface Error {
  url: string;
  statusCode: Number;
  statusMessage: string;
  message: string;
  stack: string;
}

const props = defineProps<{
  error: Error;
}>();

const error = toRef(props, 'error')

// appropriate title
useHead({
  title: `${error.value.statusCode}: ${error.value.statusMessage}`
})

// change title when an error is encountered while still on error page
watch(error, () => {
  useHead({
    title: `${error.value.statusCode}: ${error.value.statusMessage}`
  })
})
</script>

<template>
  <VApp>
    <TheHeader />
    <VMain>
      <VSheet class="d-flex justify-center items-center text-center h-screen"
        style="background-color: rgb(var(--v-theme-background));">
        <VContainer class="text-center">
          <VResponsive width="600" class="mx-auto">
            <h1 class="error-header">OOPS!</h1>
            <h2 class="mb-4 error-message">Error {{ $props.error.statusCode }}: {{ $props.error.statusMessage }}</h2>
            <NuxtLink to="/">
              <VBtn color="primary" variant="outlined" rounded="0">GO HOME &rightarrow;</VBtn>
            </NuxtLink>
          </VResponsive>
        </VContainer>
      </VSheet>
    </VMain>
    <TheFooter />
  </VApp>
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
