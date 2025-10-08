<script lang="ts" setup>
import { indexCase } from '~/mock/case'
import ButtonBorder from '~/components/common/buttonBorder.vue'
</script>

<template>
  <section class="container">
    <h2 class="text-3xl mb-6 font-bold text-red-secondary text-center animate-up delay-1">
      實績案例
    </h2>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-6 animate-up delay-2">
      <div
        class="case relative overflow-hidden rounded-md"
        v-for="(item, index) in indexCase"
        :key="index"
      >
        <img
          class="z-0 w-full h-full object-cover"
          alt=""
          :src="item.imgUrl"
          srcset=""
          loading="lazy"
        />
        <div class="cover"></div>
        <h4 class="z-1 text-white text-2xl font-bold">{{ item.title }}</h4>
      </div>
    </div>

    <div class="flex items-center justify-center animate-up delay-3">
      <NuxtLink>
        <ButtonBorder borderSize="medium" wider>更多實績案例</ButtonBorder>
      </NuxtLink>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.case {
  .cover {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 0;

    // height: 64px;
    background-color: var(--color-red-secondary);
    opacity: 0.7;
    transition: all 0.3s ease;

    @media (width < 64rem) {
      height: 64px;
    }
  }

  h4 {
    position: absolute;
    bottom: 16px;
    left: 0;
    width: 100%;
    text-align: center;
    opacity: 0;
    transition: all 0.2s ease;
    transition-delay: 0.1s;

    @media (width < 64rem) {
      opacity: 1;
    }
  }

  &:hover {
    .cover {
      height: 64px;
    }

    h4 {
      opacity: 1;
    }
  }
}
</style>
