<script lang="ts" setup></script>

<template>
  <section class="container">
    <h3 class="mb-6 text-red-secondary text-center text-3xl font-bold animate-up delay-1">
      相關企業及產品
    </h3>
    <div class="flex flex-col lg:flex-row items-center justify-center mb-16 animate-up delay-2">
      <a
        class="share-link mr-0 lg:mr-16 flex items-center mb-6 lg:mb-0"
        href="https://www.coinn.com.tw"
        target="_blank"
      >
        <img class="mr-3 w-[35px] h-auto" src="~/assets/images/coinn-logo.png" loading="lazy" />
        <div class="flex flex-col text-center">
          <h3 class="blue text-2xl font-bold">意動創新有限公司</h3>
          <p class="font-light text-sm leading-none">www.coinn.com.tw</p>
        </div>
      </a>
      <a class="share-link flex items-center" href="https://www.rainsave.com.tw" target="_blank">
        <img class="mr-3 w-[40px] h-auto" src="~/assets/images/rainsave-logo.svg" loading="lazy" />
        <div class="flex flex-col text-center">
          <h3 class="blue text-2xl font-bold">RAIN SAVE 儲集框架</h3>
          <p class="font-light text-sm leading-none">www.rainsave.com.tw</p>
        </div>
      </a>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.share-link {
  &:hover {
    h3::after {
      // transform: scaleX(1);
      height: 100%;
    }
  }

  h3 {
    position: relative;

    &::after {
      position: absolute;
      bottom: 0;
      left: -4px;
      width: calc(100% + 8px);
      height: 0;
      opacity: 0.2;
      transition: all 0.3s ease;

      // transition: transform 0.25s ease-out;
      content: '';

      // transform: scaleX(0);

      // underline position
      transform-origin: bottom center;
    }

    &.red::after {
      background-color: #f24646;
    }

    &.blue::after {
      background-color: #193b8b;
    }
  }
}
</style>
