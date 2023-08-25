<script setup lang="ts">


// variables
const { y } = useWindowScroll()
const scrollPos = useLocalStorage('index-page-scroll-pos', y.value)


// hooks
onMounted(() => {
  window.scrollTo({
    top: scrollPos.value,
  })
})

watch(y, () => {
  scrollPos.value = y.value
})

// seo
useHead({
  title: "Home",
})
</script>

<template>
  <!-- 👉 HERO SECTION  -->
  <HeroSection />


  <!-- 👉 ABOUT SECTION  -->
  <AboutSection />


  <!-- 👉 MATERIAL PREVIEW SECTION  -->
  <MaterialPreview />


  <!-- 👉 FEATURED PRODUCTS SECTION  -->
  <FeaturedProducts />


  <!-- 👉 PROFESSIONAL SECTION  -->
  <ProfessionalSection />


  <!-- 👉 BLOG SECTION  -->
  <BlogSection />
</template>

<route lang="json">
{
  "name": "HomePage",
  "meta": {
    "layout": "homeLayout"
  }
}
</route>
