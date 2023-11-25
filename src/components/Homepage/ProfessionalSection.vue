<script setup lang="ts">

// assets
import LifestyleImg from '@/assets/images/downloads_lifestyle_images.webp';
import DownloadImg from '@/assets/images/downloads_models.webp';
import PackshotImg from '@/assets/images/downloads_packshots.webp';
import ProductspecImg from '@/assets/images/downloads_products_specifications.webp';
</script>

<template>
  <CustomContainer section-id="professionals" sheet-style="text-center">
    <VResponsive class="mx-auto">
      <p class="subtitle">Work with Us</p>
      <h3 class="title">Professionals Section</h3>
      <VRow class="px-sm-16 mt-8">
        <VCol cols="12" sm="6" md="3">
          <ProfessionalSectionCard :image="PackshotImg" title="Packshots" />
        </VCol>
        <VCol cols="12" sm="6" md="3">
          <ProfessionalSectionCard :image="LifestyleImg" title="Lifestyle Images" />
        </VCol>
        <VCol cols="12" sm="6" md="3">
          <ProfessionalSectionCard :image="DownloadImg" title="2D, 3D & Revit Files" />
        </VCol>
        <VCol cols="12" sm="6" md="3">
          <ProfessionalSectionCard :image="ProductspecImg" title="Product Specifications" />
        </VCol>
      </VRow>
    </VResponsive>
  </CustomContainer>
</template>
