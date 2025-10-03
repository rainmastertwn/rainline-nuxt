<script lang="ts" setup>
import BannerSection from '~/components/index/bannerSection.vue'
import IntroSection from '~/components/index/introSection.vue'
import ProductSection from '~/components/index/productSection.vue'
import ApplicationSection from '~/components/index/applicationSection.vue'
</script>

<template>
  <!-- banner section -->
  <BannerSection class="mb-16" banner="index" />
  <!-- intro section -->
  <IntroSection class="mb-16" />
  <!-- product section -->
  <ProductSection class="mb-16" />
  <!-- application section -->
  <ApplicationSection class="mb-16" />

  <!-- demo -->
  <div class="h-[300px] w-full"></div>
</template>
