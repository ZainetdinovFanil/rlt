<!-- TextSkeleton.vue -->
<template>
    <div class="text-skeleton" ref="skeletonContainer">
      <div v-for="(line, index) in lines" :key="index" class="text-skeleton__line" :style="{ width: lineWidths[index] }"></div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'TextSkeleton',
    data() {
      return {
        lines: [],
        lineWidths: [],
      };
    },
    mounted() {
      this.generateLines();
    },
    methods: {
      generateLines() {
        const containerHeight = this.$refs.skeletonContainer.clientHeight;
        const lineHeight = 10;
        const lineCount = Math.floor(containerHeight / lineHeight);
        this.lines = Array.from({ length: lineCount });
        this.lineWidths = this.lines.map(() => `${50 + Math.random() * 50}%`);
      },
    },
  };
  </script>
  
  <style scoped>
  .text-skeleton {
    overflow: hidden;
    width: 100%;
    height: 100%;
  }
  
  .text-skeleton__line {
    background: linear-gradient(90deg, #3C3C3C 0%, #444444 51.04%, #333333 100%);
    height: 10px;
    border-radius: 4px;
    position: relative;
    overflow: hidden;
    margin-bottom: 16px;    
    margin-left: auto;
    margin-right: auto;
  }
  
  .text-skeleton__line::after {
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
  