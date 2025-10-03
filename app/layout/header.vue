<script lang="ts" setup>
import { menuItems } from './menu'
import HeaderMenu from './headerMenu.vue'
import HeaderDropDown from './headerDropDown.vue'
import ButtonBorder from '~/components/common/buttonBorder.vue'

const toggleBurger = (): void => {
  console.log('mobile burger toggled')
}

const dropDownActive = ref<string>('')
const showDropdown = (label: string, dropDown?: boolean): void => {
  if (dropDown) {
    dropDownActive.value = label
  } else {
    hideDropdown()
  }
}
const hideDropdown = (): void => {
  dropDownActive.value = ''
}
</script>

<template>
  <header class="bg-white-set sticky top-0 z-[1000] w-full">
    <!-- header menu -->
    <div class="header-shadow relative z-[999]" @mouseenter="hideDropdown">
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

        <HeaderMenu @toggleBurger="toggleBurger" />
      </div>
    </div>
    <!-- nav menu -->
    <div class="relative z-[998] hidden lg:block">
      <!-- nav bar -->
      <nav class="container nav-bar absolute text-white-set w-full z-[997] flex justify-end">
        <NuxtLink
          class="nav-box flex items-center px-4 bg-[#e0e0e0] h-[40px] text-black"
          :class="{ active: dropDownActive === item.label }"
          v-for="item in menuItems"
          :key="item.label"
          @mouseenter="showDropdown(item.label, item.dropDown)"
        >
          {{ item.label }}
        </NuxtLink>
      </nav>
      <!-- dropdown menu -->
      <HeaderDropDown :dropDownActive="dropDownActive" @mouseleave="hideDropdown">
        <template v-if="dropDownActive === '產品資訊'">
          <div class="container grid grid-cols-3">
            <div class="flex flex-col items-center border-r-1 border-red-secondary px-4">
              <h3 class="text-xl text-red-secondary mb-4">Rain Line PP 截水溝</h3>
              <div class="grid grid-cols-2 gap-4">
                <div class="flex flex-col items-center">
                  <NuxtLink to="#">
                    <ButtonBorder class="mb-2">RL100</ButtonBorder>
                  </NuxtLink>
                  <ul>
                    <li class="mb-2">RL-1005</li>
                    <li class="mb-2">RL-1010</li>
                    <li class="mb-2">RL-1010(L)</li>
                    <li class="mb-2">RL-1015</li>
                    <li class="">RL-1020</li>
                  </ul>
                </div>
                <div class="flex flex-col items-center">
                  <NuxtLink to="#">
                    <ButtonBorder class="mb-2">RL150</ButtonBorder>
                  </NuxtLink>
                  <ul>
                    <li class="">RL-1515</li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="flex flex-col items-center border-r-1 border-red-secondary px-4">
              <h3 class="text-xl text-red-secondary mb-4">Rain Pit 集水陰井</h3>
              <div class="grid grid-cols-1">
                <div>
                  <NuxtLink to="#">
                    <ButtonBorder class="mb-2">RP 系列陰井</ButtonBorder>
                  </NuxtLink>
                  <div class="grid grid-cols-2">
                    <ul class="">
                      <li class="mb-2">RP-25</li>
                      <li class="mb-2">RP-30</li>
                      <li class="mb-2">RP-35</li>
                      <li class="">RP-35h</li>
                    </ul>
                    <ul class="pl-4">
                      <li class="mb-2">RP-25</li>
                      <li class="mb-2">RP-30</li>
                      <li class="mb-2">RP-35</li>
                      <li class="">RP-35h</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="flex flex-col items-center px-4">
              <h3 class="text-xl text-red-secondary mb-4">工地用臨時水溝</h3>
              <div class="grid grid-cols-1">
                <div class="flex flex-col items-center">
                  <NuxtLink to="#">
                    <ButtonBorder class="mb-2">CN 系列</ButtonBorder>
                  </NuxtLink>
                  <ul class="">
                    <li class="mb-2">CN1010L 截水溝</li>
                    <li class="mb-2">CN1015L PP水溝</li>
                    <li class="mb-2">CN2020 臨時水溝</li>
                    <li class="mb-2">CN3030 中型水溝</li>
                    <li>CN5050 大型水溝</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </template>
        <!-- <template v-if="dropDownActive === '配件相關'">
          <ul>
            <li>配件相關 1</li>
            <li>配件相關 2</li>
            <li>配件相關 3</li>
            <li>配件相關 4</li>
          </ul>
        </template> -->
        <template v-if="dropDownActive === '應用領域'">
          <div class="container grid grid-cols-3">
            <div class="flex flex-col items-center border-r-1 border-red-secondary px-4">
              <div class="">
                <div class="flex flex-col items-center">
                  <NuxtLink to="#">
                    <ButtonBorder class="mb-2">表面明溝排水應用</ButtonBorder>
                  </NuxtLink>
                  <div class="grid grid-cols-3 gap-4">
                    <ul>
                      <li class="mb-2">風雨球場</li>
                      <li class="mb-2">社區車道</li>
                      <li>徒步通道</li>
                    </ul>
                    <ul>
                      <li class="mb-2">海港碼頭</li>
                      <li class="mb-2">社區邊溝</li>
                      <li>後巷排水</li>
                    </ul>
                    <ul>
                      <li class="mb-2">公園綠地</li>
                      <li class="mb-2">人行通道</li>
                      <li>邊坡排水</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="flex flex-col items-center border-r-1 border-red-secondary px-4">
              <div class="">
                <div class="flex flex-col items-center">
                  <NuxtLink to="#">
                    <ButtonBorder class="mb-2">暗溝排水應用</ButtonBorder>
                  </NuxtLink>
                  <div class="grid grid-cols-2 gap-4">
                    <ul>
                      <li class="mb-2">戶外球場</li>
                      <li class="mb-2">社區暗溝</li>
                      <li>通學步道</li>
                    </ul>
                    <ul>
                      <li class="mb-2">臨路農地</li>
                      <li class="mb-2">學校操場</li>
                      <li>公園綠地</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="flex flex-col items-center px-4">
              <div class="grid grid-cols-1">
                <div class="flex flex-col items-center">
                  <NuxtLink to="#">
                    <ButtonBorder class="mb-2">屋頂及樓板排水使用</ButtonBorder>
                  </NuxtLink>
                  <ul class="">
                    <li class="mb-2">學校屋頂</li>
                    <li class="mb-2">海邊屋頂</li>
                    <li class="">商辦大樓</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </template>
      </HeaderDropDown>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.header-shadow {
  box-shadow: 0 1px 8px rgb(0, 0, 0, 0.5);
}

.nav-bar {
  top: 0;
  left: 50%;
  transform: translateX(-50%);

  .nav-box {
    border-radius: 0 0 16px 16px;
    transition:
      height 0.3s cubic-bezier(0.25, 0.8, 0.25, 1),
      line-height 0.3s cubic-bezier(0.25, 0.8, 0.25, 1),
      background 0.3s,
      box-shadow 0.3s;

    &:not(:last-child) {
      margin-right: 12px;
    }

    &.active,
    &:hover {
      height: 52px;
      color: var(--color-red-secondary);
      background-color: var(--color-white-set);
      box-shadow: 0 3px 8px rgb(0, 0, 0, 0.5);
    }
  }
}
</style>
