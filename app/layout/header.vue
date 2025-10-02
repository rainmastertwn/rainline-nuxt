<script lang="ts" setup>
import HeaderMenu from './headerMenu.vue'
</script>

<template>
  <header class="bg-white-set sticky top-0 z-[1000]">
    <div class="header-box relative z-[999]">
      <div class="container flex items-center justify-between py-4 lg:py-6">
        <div class="flex items-center">
          <NuxtLink href="/">
            <img
              class="h-[50px] w-[50px] lg:h-[65px] lg:w-[65px]"
              src="~/assets/images/rainline-logo.png"
            />
          </NuxtLink>

          <div class="ml-2 flex flex-row items-center lg:ml-4">
            <NuxtLink href="/">
              <h3 class="text-xl font-bold uppercase lg:text-3xl xl:text-4xl">
                Rain Line PP 截水溝
              </h3>
            </NuxtLink>

            <img
              class="mb-1 ml-2 hidden w-[25px] cursor-pointer transition-all duration-300 sm:block lg:ml-4 lg:w-[40px]"
              src="~/assets/images/logo.png"
            />
          </div>
        </div>

        <HeaderMenu />
      </div>
    </div>
    <!-- <div class="relative z-[998]">
      <div class="container flex justify-end"></div>
    </div> -->
  </header>
</template>

<style lang="scss" scoped>
.header-box {
  box-shadow: 0 1px 8px rgb(0, 0, 0, 0.5);
}
</style>
