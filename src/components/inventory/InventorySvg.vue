<template>
  <svg
    :width="width"
    :height="height"
    viewBox="0 0 130 130"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect y="14.4445" width="115.556" height="115.556" :fill="item?.faceColor" />
    <g filter="url(#filter0_b_1_65)">
      <rect
        x="14.4445"
        width="115.556"
        height="115.556"
        :fill="item?.bgColor"
        fill-opacity="0.35"
      />
    </g>
    <defs>
      <filter
        id="filter0_b_1_65"
        x="2.44446"
        y="-12"
        width="139.556"
        height="139.556"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feGaussianBlur in="BackgroundImageFix" stdDeviation="6" />
        <feComposite
          in2="SourceAlpha"
          operator="in"
          result="effect1_backgroundBlur_1_65"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_backgroundBlur_1_65"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
</template>
<script setup lang="ts">
import { defineProps, PropType } from "vue";
interface Item {
  faceColor: string;
  bgColor: string;
}

const props = defineProps({
  item: {
    type: Object as PropType<Item | null>,
    required: true,
  },
  height:{
    type: Number,
    default: 16
  },
  width:{
    type: Number,
    default: 16
  },
});
</script>