<script lang="ts" setup>
import IconLine from '~/components/icons/lineWhite.vue'
import IconYoutube from '~/components/icons/youtubeWhite.vue'
import IconFacebook from '~/components/icons/facebookWhite.vue'
const currentYear = ref(new Date().getFullYear())
</script>

<template>
  <div class="h-[80px] lg:h-[125px] mb-[-2px]">
    <svg
      class="waves w-full h-full"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      viewBox="0 24 150 28"
      preserveAspectRatio="none"
      shape-rendering="auto"
    >
      <defs>
        <path
          id="gentle-wave"
          d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
        />
      </defs>
      <g class="parallax">
        <use xlink:href="#gentle-wave" x="48" y="0" fill="rgba(240,30,51,0.4" />
        <use xlink:href="#gentle-wave" x="48" y="3" fill="rgba(240,30,51,0.3)" />
        <use xlink:href="#gentle-wave" x="48" y="5" fill="rgba(240,30,51,0.1)" />
        <use xlink:href="#gentle-wave" x="48" y="7" fill="#f02233" />
      </g>
    </svg>
  </div>
  <footer
    class="bg-red-primary px-[16px] pt-[32px] pb-[32px] text-white lg:px-0 lg:pt-[50px] lg:pb-[32px] relative"
  >
    <div class="container mx-auto">
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6 mb-8">
        <div>
          <img class="mb-2" src="~/assets/images/logo-text.png" alt="" srcset="" />
          <p class="text-white-set text-lg tracking-[2px]">112063 台北市北投區清江路247巷8號1樓</p>
        </div>
        <div class="flex flex-col items-center justify-around">
          <p class="text-white-set text-lg tracking-[2px]">
            電話：02-2898-6207 / 傳真：02-2898-6132
          </p>
          <p class="text-white-set text-lg tracking-[2px]">信箱：RL@rainline.com.tw</p>
        </div>
        <div class="flex items-center justify-center">
          <NuxtLink
            class="mr-4 border-1 border-white-set flex items-center justify-center rounded-md h-[48px] w-[48px]"
          >
            <IconLine />
          </NuxtLink>
          <NuxtLink
            class="mr-4 border-1 border-white-set flex items-center justify-center rounded-md h-[48px] w-[48px]"
          >
            <IconYoutube />
          </NuxtLink>
          <NuxtLink
            class="border-1 border-white-set flex items-center justify-center rounded-md h-[48px] w-[48px]"
          >
            <IconFacebook />
          </NuxtLink>
        </div>
      </div>
      <!-- certification icon -->
      <div class="w-full bg-white-set rounded-4xl lg:rounded-full p-4 text-center mb-8">
        <div
          class="flex lg:inline-flex flex-col lg:flex-row mx-auto items-center justify-center border-t-1 border-b-1 border-red-notice py-4"
        >
          <img class="mb-4 lg:mb-0 lg:mr-16" src="~/assets/images/ul.png" alt="" srcset="" />
          <img class="mb-4 lg:mb-0 lg:mr-16" src="~/assets/images/taf.png" alt="" srcset="" />
          <img class="mb-4 lg:mb-0 lg:mr-16" src="~/assets/images/zt.png" alt="" srcset="" />
          <img class="mb-4 lg:mb-0 lg:mr-16" src="~/assets/images/ttt.png" alt="" srcset="" />
          <img class="" src="~/assets/images/sgs.png" alt="" srcset="" />
        </div>
      </div>
      <!-- notice text -->
      <p class="text-center text-white-set text-lg mb-4">
        台灣工廠生產，品質保證，安心合作，價格實惠，質量保證<br />
        提供客戶設計專屬LOGO，專屬顏色射出
      </p>
    </div>
    <span class="flex justify-center text-base">
      Copyright © {{ currentYear }} RAINLINE. All Rights Reserved.
    </span>
  </footer>
</template>

<style lang="scss">
$header-margin: 32px;

.menu {
  a {
    position: relative;
    transition: all 0.3s;
    line-height: 1;

    &:not(:last-child) {
      margin-right: $header-margin;

      @media (width < 80rem) {
        margin-right: 16px;
      }

      @media (width < 64rem) {
        margin-right: 0;
      }

      &::before {
        position: absolute;
        top: 0;
        right: calc(-#{$header-margin} / 2);
        display: block;
        width: 1px;
        height: 100%;
        background-color: #fff;
        content: '';

        @media (width < 80rem) {
          right: -8px;
        }

        @media (width < 64rem) {
          display: none;
        }
      }
    }
  }
}

.parallax > use {
  animation: move-forever 25s cubic-bezier(0.55, 0.5, 0.45, 0.5) infinite;
}

.parallax > use:nth-child(1) {
  animation-delay: -2s;
  animation-duration: 14s;
}

.parallax > use:nth-child(2) {
  animation-delay: -3s;
  animation-duration: 20s;
}

.parallax > use:nth-child(3) {
  animation-delay: -4s;
  animation-duration: 31s;
}

.parallax > use:nth-child(4) {
  animation-delay: -5s;
  animation-duration: 40s;
}

@keyframes move-forever {
  0% {
    transform: translate3d(-90px, 0, 0);
  }

  100% {
    transform: translate3d(85px, 0, 0);
  }
}
</style>
