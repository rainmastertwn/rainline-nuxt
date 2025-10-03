<script lang="ts" setup>
import AOS from 'aos'
import 'aos/dist/aos.css'
import Header from './layout/header.vue'
import Footer from './layout/footer.vue'

onMounted(() => {
  AOS.init({
    once: true
  })
})

// TODO
useHead({
  title: 'Rain LINE PP 截水溝',
  meta: [
    {
      name: 'viewport',
      content:
        'width=device-width, height=device-height, initial-scale=1.0, shrink-to-fit=no, maximum-scale=1.0, minimum-scale=1.0, viewport-fit=cover'
    },
    {
      name: 'description',
      content:
        'Rain LINE PP 截水溝採100%回收料製作，為一種可塑性高，易於切成任何尺寸，質量輕、易於搬運、易於調整的一種新型地面排水溝材料'
    },
    {
      name: 'author',
      content: 'Rain LINE'
    },
    {
      name: 'thumbnail',
      content: '/shareImage.jpg'
    },
    {
      property: 'og:image',
      content: '/shareImage.jpg'
    },
    {
      property: 'og:url',
      content: 'https://rainline.com.tw/'
    },
    {
      property: 'og:type',
      content: 'website'
    },
    {
      property: 'og:title',
      content: 'Rain LINE PP'
    },
    {
      property: 'og:image',
      content: '/shareImage.jpg'
    },
    {
      property: 'og:description',
      content:
        'Rain LINE PP截水溝採100%回收料製作，為一種可塑性高，易於切成任何尺寸，質量輕、易於搬運、易於調整的一種新型地面排水溝材料'
    }
  ],
  // google fonts setting
  link: [
    {
      rel: 'preconnect',
      href: 'https://fonts.googleapis.com'
    },
    {
      rel: 'preconnect',
      href: 'https://fonts.gstatic.com',
      crossorigin: 'anonymous'
    },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@400;500;700&display=swap'
    }
  ]
  // lottie js
  // script: [
  //   {
  //     src: 'https://cdnjs.cloudflare.com/ajax/libs/bodymovin/5.12.2/lottie.min.js',
  //     integrity:
  //       'sha512-jEnuDt6jfecCjthQAJ+ed0MTVA++5ZKmlUcmDGBv2vUI/REn6FuIdixLNnQT+vKusE2hhTk2is3cFvv5wA+Sgg==',
  //     crossorigin: 'anonymous',
  //     referrerpolicy: 'no-referrer',
  //     defer: true
  //   }
  // ]
})
</script>

<template>
  <div>
    <Header />
    <NuxtPage />
    <Footer />
  </div>
</template>

<style lang="scss">
@use '~/assets/css/main';

html,
body {
  padding: 0;
  margin: 0;
  font-size: 16px;
  font-family: 'Noto Sans TC', sans-serif;
  color: #555;
  background-color: var(--color-white-set);
  letter-spacing: 0.1rem;
}

// set mobile/pad can not swipe to left / right
body {
  overflow: hidden scroll;
  width: 100% !important; // fixed mobile dialog toggle bug
}
</style>
