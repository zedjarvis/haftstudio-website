<script setup lang="ts"></script>

<template>
  <section id="about">
    <VSheet class="d-flex justify-center text-center" style="background-color: rgb(var(--v-theme-background));">
      <VContainer class="text-center pt-16 mb-24">
        <VResponsive width="600" class="mx-auto">
          <h2 class="subtitle">{{ $t('aboutUs') }}</h2>
          <h1 class="title">Haft Studio</h1>
          <p class="m-0 mb-0 mt-20 leading-10 font-description font-italic" v-html="$t('homeDesc')"></p>
        </VResponsive>
      </VContainer>
    </VSheet>
  </section>
</template>
