<script lang="ts" setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, EffectFade } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/effect-fade'
</script>

<template>
  <section>
    <Swiper :modules="[Autoplay, EffectFade]" :autoplay="{ delay: 4000 }" loop :effect="'fade'">
      <SwiperSlide>
        <img class="w-full object-cover" src="~/assets/images/index/banner1.webp" />
      </SwiperSlide>
      <SwiperSlide>
        <img class="w-full object-cover" src="~/assets/images/index/banner2.webp" />
      </SwiperSlide>
      <SwiperSlide>
        <img class="w-full object-cover" src="~/assets/images/index/banner3.webp" />
      </SwiperSlide>
      <SwiperSlide>
        <img class="w-full object-cover" src="~/assets/images/index/banner4.webp" />
      </SwiperSlide>
      <SwiperSlide>
        <img class="w-full object-cover" src="~/assets/images/index/banner5.webp" />
      </SwiperSlide>
    </Swiper>
  </section>
</template>
