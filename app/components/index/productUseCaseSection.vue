<script lang="ts" setup>
import CloseIcon from '~/components/common/closeIcon.vue'
import ButtonBorder from '~/components/common/buttonBorder.vue'
import method1 from '~/assets/images/index/method-1.webp'
import method2 from '~/assets/images/index/method-2.webp'
import method3 from '~/assets/images/index/method-3.webp'
import method4 from '~/assets/images/index/method-4.webp'

type Product = {
  id: number
  img: string
  title: string
  description?: string
}
const products: Product[] = [
  {
    id: 1,
    img: method1,
    title: '塑膠水溝的安裝方式',
    description:
      '塑膠PP截水溝，以下簡稱為截水溝，截水溝每單元與每單元相接的使用方式採用U型凸料邊(以下簡稱公邊)與U型凹槽(以下簡稱母邊)相接合，PP截水溝公邊具有兩個防滑動卡溝，可與母邊多點扣合。'
  },
  {
    id: 2,
    img: method2,
    title: '塑膠水溝的安裝方式',
    description:
      '打開截水溝溝蓋的方法，首先先準備一支一字的螺絲起子，準備好後觀察溝面與溝身接合之處有一個長方形小洞(12處/m)，將螺絲起子身入後往溝身反方向使力，依序操作後即可將溝蓋取出。'
  },
  {
    id: 3,
    img: method3,
    title: '截水溝如何安裝封底蓋',
    description:
      '塑膠水溝的封底蓋在母邊的安裝方式是將封底蓋由上至下卡入截水溝本體。<br/>塑膠水溝的擋板在公邊的安裝方式是將擋板直接靠入截水溝本體。'
  },
  {
    id: 4,
    img: method4,
    title: '塑膠水溝的安裝方式',
    description:
      'PP截水溝以下簡稱為預鑄水溝，預鑄水溝的L型、T型、十字型的安裝方式可採用型號為RL-T10 萬向轉接頭。<br/>連接方式為取下轉接頭頂蓋，將欲連接方向的封板以大美工刀延邊線割除，割除後將預鑄水溝依公母扣連接方式嵌合，嵌合後再將萬向轉接頭之頂蓋蓋上即可完成水溝的轉向安裝。'
  }
]

const dialogVisible = ref<boolean>(false)
const dialogContent = ref<Product | undefined>(undefined)
const toggleDialog = (id: number) => {
  dialogVisible.value = !dialogVisible.value
  dialogContent.value = products.find((item) => item.id === id)
}
</script>

<template>
  <section class="">
    <h2 class="text-3xl mb-6 font-bold text-red-secondary text-center animate-up delay-1">
      U 型溝使用方法
    </h2>

    <div
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6 animate-up delay-2 mx-4 md:mx-16 lg:mx-[80px]"
    >
      <div
        class="flex flex-col items-center cursor-pointer product-box"
        v-for="(item, index) in products"
        :key="item.id"
        @click="toggleDialog(item.id)"
      >
        <div class="w-full mb-6 rounded-xl overflow-hidden aspect-video">
          <img class="w-full h-full" :src="item.img" />
        </div>
        <div class="mx-4 lg:mx-10">
          <h4 class="text-2xl text-red-secondary text-center mb-4">{{ item.title }}</h4>
        </div>
      </div>
    </div>

    <div class="flex items-center justify-center animate-up delay-3">
      <NuxtLink>
        <ButtonBorder borderSize="medium" wider>更多使用方法</ButtonBorder>
      </NuxtLink>
    </div>

    <!-- dialog -->
    <ElDialog class="product-dialog" :show-close="false" v-model="dialogVisible" width="50%">
      <template class="relative" #header="{ close }">
        <div class="close-icon-wrap">
          <CloseIcon @click="close" />
        </div>
      </template>
      <img class="mb-6 w-full aspect-video" alt="" :src="dialogContent?.img" srcset="" />
      <h3 class="text-2xl font-bold mb-6">{{ dialogContent?.title }}</h3>
      <p class="text-xl" v-html="dialogContent?.description"></p>
    </ElDialog>
  </section>
</template>

<style lang="scss" scoped>
img {
  transition: all 0.3s ease-in-out;
}

.product-box {
  &:hover {
    img {
      transform: scale(1.1);
    }
  }
}
</style>
