<script setup lang="ts">

// variables
const dialog = ref(false)
</script>

<template>
  <VDialog v-model="dialog" fullscreen :scrim="false" class="ma-0 pa-0">
    <template v-slot:activator="{ props }">
      <VBtn color="primary" @click="dialog = true" v-bind="props" :ripple="false" class="search-icon" variant="plain"
        icon>
        <VIcon icon="i-carbon-search"></VIcon>
      </VBtn>
    </template>
    <VCard>
      <VToolbar class="pl-md-16" style="background-color: rgb(var(--v-theme-surface));">
        <VToolbarTitle>
          <Logo />
        </VToolbarTitle>
        <VSpacer></VSpacer>
        <VBtn :ripple="false" color="primary" variant="plain" icon @click="dialog = false">
          <VIcon icon="mdi-close"></VIcon>
        </VBtn>
      </VToolbar>
      <VContainer class="text-center">
        <VResponsive class="mx-auto">
          <VTextField class="search-input" color="primary" variant="underlined" autofocus prepend-inner-icon="mdi-magnify"
            append-inner-icon="mdi-keyboard-return" placeholder="Search..." clearable
            hint="Products, Projects, Designers, Blog...">
          </VTextField>
        </VResponsive>
      </VContainer>
    </VCard>
  </VDialog>
</template>

<style lang="scss">
.search-icon {
  font-family: Inter, 'Source sans pro', sans-serif;
  font-size: .75rem !important;
  line-height: 1rem !important;
  text-transform: capitalize !important;
  padding: 0 !important;
  cursor: pointer;
}

.v-input .search-input {
  &input {
    text-align: center;
    background-color: red;
  }
}
</style>

