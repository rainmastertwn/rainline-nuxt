<script lang="ts" setup>
defineProps<{
  dropDownActive: string
}>()
</script>

<template>
  <transition name="slide-down">
    <div
      class="dropdown-box absolute z-[996] top-0 left-0 pt-20 pb-10 max-h-[500px] bg-white text-black w-full"
      v-if="dropDownActive"
    >
      <slot></slot>
    </div>
  </transition>
</template>

<style lang="scss" scoped>
.dropdown-box {
  overflow: hidden;
  box-shadow:
    0 4px 6px -1px rgb(0, 0, 0, 0.1),
    0 2px 4px -2px rgb(0, 0, 0, 0.1);
}

/* 下滑動畫 */
.slide-down-enter-active,
.slide-down-leave-active {
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
}

.slide-down-enter-from,
.slide-down-leave-to {
  max-height: 0;
  opacity: 0;
  transform: translateY(-20px);
}

.slide-down-enter-to,
.slide-down-leave-from {
  max-height: 500px;
  opacity: 1;
  transform: translateY(0);
}
</style>
