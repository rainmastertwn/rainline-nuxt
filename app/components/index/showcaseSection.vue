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
        class="case relative overflow-hidden rounded-xl"
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
        <h4 class="z-1 text-white text-xl">{{ item.title }}</h4>
      </div>
    </div>

    <div class="flex items-center justify-center animate-up delay-3">
      <NuxtLink>
        <ButtonBorder borderSize="medium" wider>更多實績案例</ButtonBorder>
      </NuxtLink>
    </div>
  </section>
</template>
