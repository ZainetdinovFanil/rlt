<template>
  <div class="inventory">
    <div class="inventory-content">
      <InvetoryProfile></InvetoryProfile>
      <InvetoryItems></InvetoryItems>
    </div>
    <InventoryClue></InventoryClue>
  </div>
</template>
<script lang="ts" setup>
import InvetoryProfile from "../inventory/InvetoryProfile.vue";
import InvetoryItems from "../inventory/InvetoryItems.vue";
import InventoryClue from "../inventory/InventoryClue.vue";
</script>
<style lang="scss">
.inventory {
    &-content{
        display: flex;
        gap: 24px;
        height: 500px;
        margin-bottom: 24px;
    }
}
</style>
