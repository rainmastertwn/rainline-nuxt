<script lang="ts" setup>
import BannerSection from '~/components/index/bannerSection.vue'
import IntroSection from '~/components/index/introSection.vue'
import ProductSection from '~/components/index/productSection.vue'
import ApplicationSection from '~/components/index/applicationSection.vue'
import ShowcaseSection from '~/components/index/showcaseSection.vue'
import VideoSection from '~/components/index/videoSection.vue'
import ProductUseCaseSection from '~/components/index/productUseCaseSection.vue'
import CompanyProfileSection from '~/components/index/companyProfileSection.vue'
import PartnerSection from '~/components/index/partnerSection.vue'
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
  <!-- showcase section -->
  <ShowcaseSection class="mb-16" />
  <!-- video section -->
  <VideoSection class="mb-16" />
  <!-- product use case section -->
  <ProductUseCaseSection class="mb-16" />
  <!-- company section -->
  <CompanyProfileSection class="mb-16" />
  <!-- partner section -->
  <PartnerSection class="mb-24" />
</template>
