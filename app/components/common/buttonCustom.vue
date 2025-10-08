<script lang="ts" setup></script>

<template>
  <NuxtLink
    class="custom-btn relative overflow-hidden border-1 w-full border-red-secondary bg-white-set rounded-[50px] py-2 px-4 text-center cursor-pointer text-red-secondary"
  >
    領域展開
  </NuxtLink>
</template>

<style lang="scss" scoped>
.custom-btn {
  transition:
    background 0.3s ease,
    border 0.3s ease;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transition: all 0.3s ease;
  }

  &::after {
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: 16px;
    width: 100%;
    height: 100%;
    transition: margin 0.5s ease;
    content: '';
    transform: translate(-50%, -50%);
  }

  &:hover {
    border: 1px solid transparent;

    &::before {
      background: url('~/assets/images/common/field-expansion-bg.png');
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
    }

    &::after {
      margin-top: 0;
      background: url('~/assets/images/common/field-expansion-icon.png');
      background-position: center;
      background-repeat: no-repeat;
    }
  }
}
</style>
