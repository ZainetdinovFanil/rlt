<template>
  <div class="inventory_item-block">
    <div v-if="item" >
    <InventorySvg :item="item" :height="54" :width="54"></InventorySvg>
    </div>

    <div v-else class="inventory_item-inner"></div>
  </div>
</template>
  
  <script lang="ts" setup>
import { defineProps, PropType } from "vue";
import InventorySvg from "./InventorySvg.vue";
interface Item {
  faceColor: string;
  bgColor: string;
  count: number;
}

const props = defineProps({
  item: {
    type: Object as PropType<Item | null>,
    required: true,
  },
});
</script>
  
<style lang="scss" scoped>
.inventory_item {
  &-block {
    position: relative;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
  }
  &-inner {
    height: 54px;
    width: 54px;
  }
  svg{
    cursor: pointer;
  }
}
</style>
  