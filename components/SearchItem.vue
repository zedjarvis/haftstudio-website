<script setup lang="ts">

// variables
const dialog = ref(false)
</script>

<template>
  <VBtn id="search" size="small" @click="dialog = true" :ripple="false" class="ma-0 pa-0" variant="plain" icon>
    <VIcon icon="i-carbon-search"></VIcon>
  </VBtn>

  <VDialog activator="#search" v-model="dialog" fullscreen :scrim="false">
    <VCard>
      <VToolbar class="pl-md-16" style="background-color: rgb(var(--v-theme-surface));">
        <VToolbarTitle class="ml-md-16">
          <Logo />
        </VToolbarTitle>
        <VSpacer></VSpacer>
        <VBtn :ripple="false" color="primary" variant="plain" icon @click="dialog = false">
          <VIcon icon="mdi-close"></VIcon>
        </VBtn>
      </VToolbar>
      <VContainer class="h-100 text-center">
        <VResponsive width="700" class="mx-auto">
          <VTextField class="centered-input" autofocus color="primary" variant="underlined" placeholder="Search..."
            clearable hint="Products, Projects, Designers, Blog...">
          </VTextField>
        </VResponsive>
      </VContainer>
    </VCard>
  </VDialog>
</template>

<style lang="scss">
.centered-input {
  input {
    text-align: center;
  }
}
</style>

