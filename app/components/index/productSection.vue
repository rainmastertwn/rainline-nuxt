<script lang="ts" setup></script>

<template>
  <section class="container">
    <h2 class="text-3xl mb-6 font-bold text-red-secondary text-center animate-up delay-1">
      產品資訊
    </h2>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-5 animate-up delay-2">
      <div class="product border-1 border-red-secondary rounded-xl overflow-hidden p-6">
        <img
          class="w-[80%] h-auto lg:h-full max-h-none lg:max-h-[250px] mx-auto mb-4"
          src="~/assets/images/index/product1.webp"
          alt=""
          srcset=""
        />
        <p class="text-2xl text-red-secondary text-center">Rain Line U型截水溝</p>
      </div>
      <div class="product border-1 border-red-secondary rounded-xl overflow-hidden p-6">
        <img
          class="w-[80%] h-auto lg:h-full max-h-none lg:max-h-[250px] mx-auto mb-4"
          src="~/assets/images/index/product2.webp"
          alt=""
          srcset=""
        />
        <p class="text-2xl text-red-secondary text-center">Rain Pit 集水陰井</p>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.product {
  img {
    transition: transform 0.4s cubic-bezier(0.4, 2, 0.6, 1);

    &:hover {
      transform: scale(1.1);
    }
  }
}
</style>
