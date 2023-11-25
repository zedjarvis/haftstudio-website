<script setup lang="ts">

// assets
import invitoTable from "@/assets/images/invito_table_cover.webp";
import latusTable from "@/assets/images/latus_table_cover.webp";
import nevaChair from "@/assets/images/neva_chair_cover.webp";
import nevaLounge from "@/assets/images/neva_lounge_trimmed_cover.webp";

</script>

<template>
  <CustomContainer section-id="products" sheet-style="bg-background text-center">
    <VResponsive class="mx-auto">
      <p class="subtitle">Featured products</p>
      <h3 class="title">Bestsellers</h3>
      <VRow class="px-sm-16 mt-8">
        <VCol cols="6" md="3">
          <FeaturedProductCard :image="nevaChair" title="Neva Chair" designer="Haft Studio" />
        </VCol>
        <VCol cols="6" md="3">
          <FeaturedProductCard :image="invitoTable" title="Invito Table" designer="Haft Studio" />
        </VCol>
        <VCol cols="6" md="3">
          <FeaturedProductCard :image="nevaLounge" title="Neva Lounge" designer="Haft Studio" />
        </VCol>
        <VCol cols="6" md="3">
          <FeaturedProductCard :image="latusTable" title="Latus Table" designer="Haft Studio" />
        </VCol>
      </VRow>
      <RouterLink to="/products">
        <p class="subtitle text-decoration-underline mt-16">SHOP PRODUCTS</p>
      </RouterLink>
    </VResponsive>
  </CustomContainer>
</template>
