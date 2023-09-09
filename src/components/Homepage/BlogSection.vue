<script setup lang="ts"></script>

<template>
  <CustomContainer section-id="blog-section" sheet-style="bg-background text-center">
    <VResponsive class="mx-auto">
      <p class="subtitle">Our Stories</p>
      <h3 class="title">News</h3>
      <VRow class="px-sm-16 mt-8">
        <VCol cols="12" sm="6" md="4">
          <BlogCard />
        </VCol>
        <VCol cols="12" sm="6" md="4">
          <!-- <BlogCard /> -->
        </VCol>
        <VCol cols="12" sm="6" md="4">
          <!-- <BlogCard /> -->
        </VCol>
      </VRow>
    </VResponsive>
  </CustomContainer>
</template>
