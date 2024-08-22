<template>
  <div class="inventory_clue">
    <BlockSkeleton class="inventory_clue-sckeleton_block"></BlockSkeleton>
    <img class="inventory_clue-close_btn" alt="close" src="@/assets/close.svg" />
  </div>
</template>
<script lang="ts" setup>
import BlockSkeleton from "../base/BlockSkeleton.vue";
</script>
<style langs="scss" scoped>
.inventory_clue {
  height: 72px;
  padding: 18px 68px 18px 18px;
  border-radius: 12px;
  border: 1px solid #4d4d4d;
  background-color: #262626;
  position: relative;
}
.inventory_clue-sckeleton_block {
  height: 100%;
}
.inventory_clue-close_btn{
    position: absolute;
    right: 8px;
    top: 8px;
    cursor: pointer;
}
</style>