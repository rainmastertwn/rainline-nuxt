<script lang="ts" setup>
import { rlCatalog, rpCatalog, docCatalog, otherCatalog } from '~/mock/download'
import PartnerSection from '~/components/index/partnerSection.vue'
</script>

<template>
  <div>
    <section class="container mb-16 mt-16 lg:mt-[100px]">
      <!-- 型錄資源下載 -->
      <div class="mb-20">
        <div class="w-full max-w-[1024px] mx-auto">
          <h3 class="mb-6 text-red-secondary text-center text-3xl font-bold animate-up delay-1">
            型錄資源下載
          </h3>
          <div class="w-full h-[1px] bg-red-secondary mb-10 animate-up delay-2"></div>
          <p
            class="mx-auto w-full max-w-[1024px] leading-8 text-xl text-justify animate-up delay-3"
          >
            本頁提供PP截水溝、PP集水陰井、PP滲透陰井等型錄與圖說，並附有排水管溝相關資料與預算供參考。
            如需更多文件或資料，歡迎來電洽詢，我們可依需求協助整理並上傳。<br />
            更多建材資訊請參考<a class="outside-link" href="https://coinn.com.tw" target="_blank">
              COINN意動創新有限公司
            </a>
            ，或瀏覽
            <a class="outside-link" href="https://rainsave.com.tw" target="_blank">
              RainSave雨水積磚頁面
            </a>
            ，內含安裝影片、3D模型及預算說明。 <br /><br />
            本頁內容附有PP截水溝，PP集水陰井，PP滲透陰井之型錄等相關詳細資料，在02601章排水管溝也附有網路所擷取之內容供參。在明溝排水部分也附有10型PP截水溝之圖說及相關預算，各型式陰井的圖說也附錄於此供客戶使用。<br /><br />
            以上如有任何需要的資料也可來電討論，我們可以再繼續整理，上傳使用者所需的相關文件與資料。
            最後可連結至<a class="outside-link" href="https://coinn.com.tw" target="_blank">
              COINN意動創新有限公司
            </a>
            ，裡面有較為廣泛的建材資料，如有使用雨水積磚需求也可連結至RainSave雨水積磚之網頁，內有安裝影片、施工影片、3D模型、使用材料數量、預算等相關資料供使用者了解使用。
          </p>
        </div>
      </div>
      <!-- 型錄區塊 -->
      <!-- 截水溝型錄 -->
      <div class="mb-20">
        <h3 class="mb-6 text-red-secondary text-center text-3xl font-bold animate-up delay-1">
          PP 截水溝簡易型錄
        </h3>
        <div class="w-full h-[1px] bg-red-secondary mb-10 animate-up delay-2"></div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 animate-up delay-3">
          <a
            class="flex flex-col catalog"
            :href="item.fileUrl"
            v-for="(item, index) in rlCatalog"
            :key="index"
            target="_blank"
          >
            <img class="mb-4" alt="" :src="item.imgUrl" srcset="" />
            <p class="text-lg tracking-widest text-center">{{ item.title }}</p>
          </a>
        </div>
      </div>
      <!-- 陰井型錄 -->
      <div class="mb-20">
        <h3 class="mb-6 text-red-secondary text-center text-3xl font-bold animate-up delay-1">
          PP陰井 簡易型錄
        </h3>
        <div class="w-full h-[1px] bg-red-secondary mb-10 animate-up delay-2"></div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 animate-up delay-3">
          <a
            class="flex flex-col catalog"
            :href="item.fileUrl"
            v-for="(item, index) in rpCatalog"
            :key="index"
            target="_blank"
          >
            <img class="mb-4" alt="" :src="item.imgUrl" srcset="" />
            <p class="text-lg tracking-widest text-center">{{ item.title }}</p>
          </a>
        </div>
      </div>
      <!-- 排水管溝規章 -->
      <div class="mb-20">
        <h3 class="mb-6 text-red-secondary text-center text-3xl font-bold animate-up delay-1">
          第02601章 排水管溝
        </h3>
        <div class="w-full h-[1px] bg-red-secondary mb-10 animate-up delay-2"></div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 animate-up delay-3">
          <a
            class="flex flex-col catalog"
            :href="item.fileUrl"
            v-for="(item, index) in docCatalog"
            :key="index"
            target="_blank"
          >
            <img class="mb-4" alt="" :src="item.imgUrl" srcset="" />
            <p class="text-lg tracking-widest text-center">{{ item.title }}</p>
          </a>
        </div>
      </div>

      <!-- auto cad -->
      <div class="mb-20">
        <h3 class="mb-6 text-red-secondary text-center text-3xl font-bold animate-up delay-1">
          AUTO CAD 平面圖及相應預算表
        </h3>
        <div class="w-full h-[1px] bg-red-secondary mb-10 animate-up delay-2"></div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 animate-up delay-3">
          <a
            class="flex flex-col catalog"
            :href="item.fileUrl"
            v-for="(item, index) in otherCatalog"
            :key="index"
            target="_blank"
          >
            <img class="mb-4" alt="" :src="item.imgUrl" srcset="" />
            <p class="text-lg tracking-widest text-center">{{ item.title }}</p>
          </a>
        </div>
      </div>

      <div class="w-full h-[1px] bg-red-secondary mb-10 animate-up delay-1"></div>

      <p class="mx-auto w-full max-w-[1024px] leading-8 text-xl text-justify animate-up delay-3">
        <span class="text-red-notice">*</span>
        以上型錄資源為最基礎型式，如需更進一步技術資料說明請洽詢總公司業務專員。<br /><br />

        <span class="text-red-notice">*</span>
        以上平面圖及相應預算表為排水明溝最基礎之型式，如有強度要求，材質要求，產品顏色要求，以及因應各種不同排水需求的相應圖說及預算請洽循總公司業務專員。<br /><br />

        <span class="text-red-notice">*</span>
        本網頁所載入之所有內容及下載資料我司已盡力使本資料符合產品實際情況，但請用戶注意產品技術資料若有修改及變動，恕不另行通知。本公司對產品應用不能擔負責任且對由於未有遵從本公司指示致使造成後果而提出的任何要求也蓋不考慮。
      </p>
    </section>
    <PartnerSection class="mb-16 lg:mb-24" />
  </div>
</template>

<style lang="scss" scoped>
.catalog {
  img {
    width: 100%;

    // height: auto;
    // aspect-ratio: 1 / 1.414;
    // object-fit: cover;
    border-radius: 0.5rem;
    box-shadow: 0 4px 6px rgb(0, 0, 0, 0.1);
    transition:
      transform 0.3s ease,
      box-shadow 0.3s ease;
  }

  &:hover img {
    transform: scale(1.025);
    box-shadow: 0 8px 16px rgb(0, 0, 0, 0.2);
  }
}
</style>
