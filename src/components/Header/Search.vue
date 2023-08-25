<script setup lang="ts">
import { useDisplay } from 'vuetify';

// variables
const dialog = ref(false)
const { smAndDown } = useDisplay()
</script>

<template>
  <VBtn class="ml-md-16" @click="dialog = true" :size="smAndDown ? '' : 'small'" variant="plain" icon>
    <VIcon icon="mdi-magnify"></VIcon>
  </VBtn>

  <VDialog v-model="dialog" fullscreen :scrim="false">
    <VCard>
      <VToolbar class="pl-md-16" style="background-color: rgb(var(--v-theme-surface));">
        <VToolbarTitle class="ml-md-16">
          <!-- 👉 LOGO  -->
          <TheLogo />
        </VToolbarTitle>
        <VSpacer></VSpacer>
        <VBtn :size="smAndDown ? '' : 'small'" color="primary" variant="plain" icon @click="dialog = false">
          <VIcon icon="mdi-close"></VIcon>
        </VBtn>
        <VBtn variant="plain" color="primary" size="small" icon="mdi-account-outline" />
        <VBtn variant="plain" color="primary" size="small" icon="mdi-shopping-outline" />
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
