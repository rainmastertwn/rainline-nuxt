<script lang="ts" setup>
import { totalCase } from '~/mock/case'
import PartnerSection from '~/components/index/partnerSection.vue'
</script>

<template>
  <section class="container mb-16 mt-16 lg:mt-[100px]">
    <!-- 實績案例 -->
    <div class="mb-20">
      <div class="w-full max-w-[1024px] mx-auto mb-10">
        <h3 class="mb-6 text-red-secondary text-center text-3xl font-bold animate-up delay-1">
          實績案例
        </h3>
        <div class="w-full h-[1px] bg-red-secondary mb-10 animate-up delay-2"></div>
        <p class="mx-auto w-full max-w-[1024px] leading-8 text-xl text-justify animate-up delay-3">
          PP
          預鑄截水溝用於多元場域中，包括公園、中庭、綠地、後巷排水、行人步道、抿石子地坪、RC地坪、屋頂與樓地板等。
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6 animate-up delay-4">
        <div
          class="case relative overflow-hidden rounded-xl"
          v-for="(item, index) in totalCase"
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
    </div>
    <!-- 案例討論 -->
    <div class="mb-20">
      <h3 class="mb-6 text-red-secondary text-center text-3xl font-bold animate-up delay-1">
        案例討論
      </h3>
      <!-- case 1 -->
      <div
        class="rounded-xl border-1 border-gray-set shadow-lg p-6 grid grid-cols-1 lg:grid-cols-2 gap-6 animate-up delay-3 mb-10"
      >
        <div class="rounded-xl bg-gray-set p-6">
          <h4 class="border-b-1 mb-4 border-red-notice text-xl text-red-notice leading-8">
            輕型水溝排不直
          </h4>
          <p class="mb-10 text-justify">
            廠商首次採用輕型水溝，儘管施工用心，仍發現水溝無法排直，對產品產生疑慮。
          </p>
          <h4 class="border-b-1 mb-4 border-red-notice text-xl text-red-notice leading-8">
            解決方案
          </h4>
          <p class="mb-10 text-justify">
            團隊協助溝通，分析施工細節，以小型挖土機將深度挖深，寬度挖寬，重新以粗砂加水將地整平，整平後拉水線排直，同時使用水平儀調整傾斜度，確保排水溝順直安裝。
          </p>
          <h4 class="border-b-1 mb-4 border-red-notice text-xl text-red-notice leading-8">成果</h4>
          <p class="mb-10 text-justify">
            溝體安裝快速且線型直，排水順暢，外觀一致，提升整體品質，廠商、設計及業主均感到滿意。
          </p>
        </div>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div class="case case-show-cover rounded-xl overflow-hidden">
            <img
              class="w-full h-full object-cover"
              src="~/assets/images/case/case-detail-1-1.jpg"
              alt=""
              srcset=""
              loading="lazy"
            />
            <div class="cover"></div>
            <h4 class="z-1 text-white text-xl">施工前問題</h4>
          </div>
          <div class="case case-show-cover rounded-xl overflow-hidden">
            <img
              class="w-full h-full object-cover"
              src="~/assets/images/case/case-detail-1-2.jpg"
              alt=""
              srcset=""
              loading="lazy"
            />
            <div class="cover"></div>
            <h4 class="z-1 text-white text-xl">改善後結果</h4>
          </div>
        </div>
      </div>
      <!-- case 2 -->
      <div
        class="rounded-xl border-1 border-gray-set shadow-lg p-6 grid grid-cols-1 lg:grid-cols-2 gap-6 animate-up delay-3"
      >
        <div class="rounded-xl bg-gray-set p-6">
          <h4 class="border-b-1 mb-4 border-red-notice text-xl text-red-notice leading-8">
            灌漿後不直
          </h4>
          <p class="mb-10 text-justify">
            廠商初次使用PP截水溝，過程中仔細拉水線，並以水平儀測量傾斜角度，各項步驟均按標準執行，但灌漿完成後卻發現水溝產生傾斜，讓現場人員感到困惑。
          </p>
          <h4 class="border-b-1 mb-4 border-red-notice text-xl text-red-notice leading-8">
            解決方案
          </h4>
          <p class="mb-10 text-justify">
            灌漿時若未先將水溝妥善固定，或缺乏臨時支撐措施，容易因浮力作用導致水溝上浮，進而影響排水坡度與直線度。針對此問題調整安裝流程，於灌漿前加強固定與支撐，確保水溝位置穩固。
          </p>
          <h4 class="border-b-1 mb-4 border-red-notice text-xl text-red-notice leading-8">成果</h4>
          <p class="mb-10 text-justify">
            經過改善後，水溝安裝筆直且坡度符合設計要求，有效解決灌漿後傾斜的問題，現場團隊對最終成果十分滿意。
          </p>
        </div>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div class="case case-show-cover rounded-xl overflow-hidden">
            <img
              class="w-full h-full object-cover"
              src="~/assets/images/case/case-detail-2-1.jpg"
              alt=""
              srcset=""
              loading="lazy"
            />
            <div class="cover"></div>
            <h4 class="z-1 text-white text-xl">施工前問題</h4>
          </div>
          <div class="case case-show-cover rounded-xl overflow-hidden">
            <img
              class="w-full h-full object-cover"
              src="~/assets/images/case/case-detail-2-2.jpg"
              alt=""
              srcset=""
              loading="lazy"
            />
            <div class="cover"></div>
            <h4 class="z-1 text-white text-xl">改善後結果</h4>
          </div>
        </div>
      </div>
    </div>

    <!-- 精神slogan -->
    <div class="my-[100px] lg:my-[200px] text-center relative animate-up delay-1">
      <h3
        class="slogan text-xl lg:text-3xl font-bold tracking-[8px] flex items-center justify-center"
      >
        用
        <p class="text-animation relative">
          <span class="black-text">謹慎</span>
          <span class="red-text text-red-secondary">謹慎</span>
        </p>
        的心態去做簡單的事
      </h3>
    </div>
    <!-- 相關連結 -->
    <!-- <PartnerSection class="mb-16 lg:mb-24" /> -->
  </section>
</template>

<style lang="scss" scoped>
.text-animation {
  position: relative;
  display: flex;
  overflow: hidden;
  height: 44px;
  line-height: 44px;
  flex-direction: column;

  span:nth-child(1) {
    animation: text-animation 6.5s ease infinite;
  }
}

@keyframes text-animation {
  0% {
    margin-top: 0;
  }

  20% {
    margin-top: 0;
  }

  40% {
    margin-top: -44px;
  }

  60% {
    margin-top: -44px;
  }

  80% {
    margin-top: 0;
  }

  100% {
    margin-top: 0;
  }
}
</style>
