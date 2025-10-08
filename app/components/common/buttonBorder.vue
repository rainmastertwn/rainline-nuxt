<script lang="ts" setup>
const props = defineProps({
  borderSize: {
    type: String,
    default: 'default'
  },
  wider: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <div
    class="rounded-[50px] text-lg border-red-secondary h-auto inline-flex items-center py-2 px-4 bg-transparent text-red-secondary hover:text-white-set hover:bg-red-secondary transition-ease duration-300"
    :class="{
      'border-1': borderSize === 'default',
      'border-2': borderSize === 'medium',
      'px-16': wider
    }"
  >
    <slot></slot>
  </div>
</template>
