<script lang="ts" setup>
import ButtonCustom from '~/components/common/buttonCustom.vue'
</script>

<template>
  <section class="container">
    <h2 class="text-3xl mb-6 font-bold text-red-secondary text-center animate-up delay-1">
      應用領域
    </h2>
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-5 animate-up delay-2 mb-5">
      <div
        class="col-span-1 order-2 lg:order-1 lg:col-span-2 bg-gray-set overflow-hidden rounded-xl"
      >
        <img class="w-full" src="~/assets/images/index/surface.webp" />
      </div>
      <div
        class="col-span-1 order-1 lg:order-2 bg-gray-set overflow-hidden rounded-xl flex flex-col justify-between p-6 lg:p-8"
      >
        <div class="flex flex-col justify-center h-full">
          <h3 class="text-2xl mb-6 text-red-secondary text-center leading-8">表面明溝排水應用</h3>
          <p class="text-xl indent-12 leading-8 mb-6 text-justify">
            PP截水溝用於明溝時，需注意上方需乘載車輛的重量及種類，選擇相對應抗壓荷重的截水溝溝蓋。
          </p>
          <p class="text-xl indent-12 leading-8 mb-6 text-justify">
            截水溝於無乘載需求之低度通行區域等位置，在相關條件成立下，原則上可於安裝水溝完成時用原土回填後夯壓埋入即可，無須使用混凝土或其他材料固定PP預鑄水溝，是一種可快速施工並迅速收集地表水之材料之一。
          </p>
        </div>
        <div class="flex items-center justify-center">
          <ButtonCustom />
        </div>
      </div>
    </div>
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-5 animate-up delay-2 mb-5">
      <div
        class="col-span-1 order-2 lg:order-1 lg:col-span-2 bg-gray-set overflow-hidden rounded-xl"
      >
        <img class="w-full" src="~/assets/images/index/blind.webp" />
      </div>
      <div
        class="col-span-1 order-1 lg:order-2 bg-gray-set overflow-hidden rounded-xl flex flex-col justify-between p-6 lg:p-8"
      >
        <div class="flex flex-col justify-center h-full">
          <h3 class="text-2xl mb-6 text-red-secondary text-center leading-8">暗溝排水 說明</h3>
          <p class="text-xl indent-12 leading-8 mb-6 text-justify">
            PP預鑄截水溝與傳統暗溝相比具備高伸長率，可解決因地表震動造成溝身開裂，鄰近樹根酸蝕穿刺等問題。
          </p>
          <p class="text-xl indent-12 leading-8 mb-6 text-justify">
            PP預鑄截水溝用於暗溝施工時應於夯壓原土層後鋪設防沉陷網，鋪設後使用粗砂且加入適當水分壓實並以鏝刀或整平尺整平，如無特殊需求PP暗溝側邊均可以原有土壤回填後夯壓密實至溝頂後，依完成面需求使用原土繼續回填後鋪上瀝青或鋪設點焊鋼絲網後進行灌漿等後續工作。
          </p>
        </div>
        <div class="flex items-center justify-center">
          <ButtonCustom />
        </div>
      </div>
    </div>
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-5 animate-up delay-2 mb-5">
      <div
        class="col-span-1 order-2 lg:order-1 lg:col-span-2 bg-gray-set overflow-hidden rounded-xl"
      >
        <img class="w-full" src="~/assets/images/index/roof.webp" />
      </div>
      <div
        class="col-span-1 order-1 lg:order-2 bg-gray-set overflow-hidden rounded-xl flex flex-col justify-between p-6 lg:p-8"
      >
        <div class="flex flex-col justify-center h-full">
          <h3 class="text-2xl mb-6 text-red-secondary text-center leading-8">
            屋頂及樓板排水 使用
          </h3>
          <p class="text-xl indent-12 leading-8 mb-6 text-justify">
            一般屋頂以點排水型式收集屋面雨水，使用PP水溝後可將傳統點排水方式進步為線排水方式，避免堵塞或淤積於單點造成積水進而產生屋頂滲漏等問題。
          </p>
          <p class="text-xl indent-12 leading-8 mb-6 text-justify">
            屋頂排水溝應於防水層施工完成後先行埋設，埋設後再開始後續隔熱及保護層等工項。
            我司所生產的PP截水溝添加各式加強助劑，具有耐高溫不翹區，抗UV不脆化，防鹽害不腐蝕等特性，非常適用於屋頂排水。
          </p>
        </div>
        <div class="flex items-center justify-center">
          <ButtonCustom />
        </div>
      </div>
    </div>
  </section>
</template>
