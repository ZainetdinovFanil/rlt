<!-- BlockSkeleton.vue -->
<template>
    <div class="block-skeleton">
  <!--     <div class="block-skeleton__item"></div> -->
      <div class="block-skeleton__item"></div>
     <!--  <div class="block-skeleton__item"></div> -->
    </div>
  </template>
  
  <script lang="ts" setup>
  </script>
  
  <style scoped>
  .block-skeleton {
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 100%;
  }
  
  .block-skeleton__item {
    background: linear-gradient(90deg, #3C3C3C 0%, #444444 51.04%, #333333 100%);
    border-radius: 8px;
    height: 100%;
    width: 100%;
    position: relative;
    overflow: hidden;
  }
  
  .block-skeleton__item::after {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.5), transparent);
    position: absolute;
    top: 0;
    left: 0;
    animation: shimmer 1.5s infinite;
  }
  
  @keyframes shimmer {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(100%);
    }
  }
  </style>
  