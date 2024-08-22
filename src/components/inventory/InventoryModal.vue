<template>
    <div class="inventory-modal" :class="showModal ? 'active' : null">
      <div class="modal-background"></div>
      <div class="modal-content">
        <slot></slot>
      </div>
    </div>
  </template>
  
  <script lang="ts" setup>
  import { ref, watch, defineProps, defineEmits, withDefaults } from "vue";
  
  interface Props {
    radius: number;
    showModal: boolean;
  }
  
  const props = withDefaults(defineProps<Props>(), {
    radius: 8,
    showModal: false,
  });
  
  const emit = defineEmits<{
    (e: "closeModal"): void;
  }>();
  </script>
  
  <style lang="scss" scoped>
  .inventory-modal {
    overflow: hidden;
    height: 100%;
    width: 0;
    position: absolute;
    right: 0;
    top: 0;
    transition: all 0.5s;
    &.active {
      width: 250px;
    }
  }
  
  .modal-background {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    backdrop-filter: blur(10px);
    filter: blur(28px);
  }
  
  .modal-content {
    position: relative;
    z-index: 1; 
    height: 100%;
    filter: none;
  }
  </style>
  