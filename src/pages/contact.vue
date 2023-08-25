<script setup lang="ts">
// seo
useHead({
  titleTemplate: '%s | Haft Studio',
  title: 'Contact Us',
})

// unplugin vuerouter
definePage({
  name: 'ContactPage',
})
</script>

<template>
  <section id="contact">
    <VSheet class="d-flex justify-center py-16 text-center" style="background-color: rgb(var(--v-theme-background));">
      <VContainer class="text-center">
        <VResponsive class="mx-auto" width="600">
          <h1 class="title text-secondary">Contact Us.</h1>
          <p class="my-16 font-description font-italic text-secondary" style="line-height: 2.5rem; font-size: medium;">
            Established in 2011, Haft Studio's visionary pursuit is enriched by its use of unique materials like
            matope-crete, timber, stone, and papyrus reeds.This creative force harmoniously melds an African aesthetic
            into urban landscapes, setting new benchmarks in creativity, authenticity, and reliability.
          </p>
          <h3 class="subtitle">WORKSHOP AND OFFICE ADDRESS</h3>
          <p class="font-description font-italic text-secondary mb-10" style="font-size: medium;">Haft Studio, 19 Link
            Road,
            Karen, Nairobi, Kenya
          </p>
          <h3 class="subtitle">GENERAL INQUIRIES / OFFERS & CONTRACTS / DESIGN PROPOSALS</h3>
          <p class="font-description font-italic"><a href="mailto:info@haftstuio.ke">info@haftstudio.ke</a></p>
          <p class="font-description font-italic"><a href="tel:+254113581586">+254 113 581 586</a></p>
        </VResponsive>
      </VContainer>
    </VSheet>
  </section>
</template>
