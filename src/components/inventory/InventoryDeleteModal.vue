<template>
    <InventoryModal
      :show-modal="showModal"
      :radius="8"
      @closeModal="$emit('closeModal')"
    >
      <div class="edit-modal">
        <img
          class="edit-modal-close"
          alt="close"
          src="@/assets/close.svg"
          @click="$emit('closeModal')"
        />
        <div class="edit-modal-image">
          <InventorySvg
            :item="item"
            :height="130"
            :width="130"
          ></InventorySvg>
        </div>
        <div class="edit-modal-line"></div>
        <BlockSkeleton class="edit-modal-sckeleton-block"></BlockSkeleton>
          <TextSkeleton class="edit-modal-sckeleton-text" />
          <div class="edit-modal-btn">
            <BaseButton class="edit-modal-agreebtn" @click="updateCount" :padding="'8px 15px;'"
                    :border-radius="'8px'"
              >Удалить предмет</BaseButton
            >
        </div>
      </div>
    </InventoryModal>
  </template>
  
  <script lang="ts" setup>
  import BaseButton from "@/components/base/BaseButton.vue";
  import InventoryModal from "@/components/inventory/InventoryModal.vue";
  import BlockSkeleton from "../base/BlockSkeleton.vue";
  import TextSkeleton from "../base/TextSkeleton.vue";
  import InventorySvg from "./InventorySvg.vue";
  import { defineProps, defineEmits, ref } from "vue";
  
  const props = defineProps({
    showModal: {
      type: Boolean,
      default: false,
    },
    item: {
      type: Object,
      required: true,
    },
  });
  
  const emit = defineEmits(["deleteItem", "closeModal"]);
  
  
  const updateCount = () => {
    emit("deleteItem");
    emit("closeModal");
  };
  </script>
<style lang="scss" scoped>
.edit-modal {
  border-left: 1px solid #4d4d4d;
  padding: 8px 0;
  display: flex;
  flex-direction: column;
  align-items: end;
  justify-content: space-between;
  height: 100%;
  &-close {
    margin-right: 8px;
    height: 24px;
    width: 24px;
    cursor: pointer;
    margin-bottom: 23px;
  }
  &-image {
    margin-bottom: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
  &-line {
    background: #4d4d4d;
    height: 1px;
    margin-left: 15px;
    margin-right: 15px;
    width: 100%;
    margin-bottom: 16px;
  }
  &-sckeleton-block {
    min-height: 30px;
    margin-bottom: 24px;
    padding: 0 20px;
  }
  &-sckeleton-text {
    padding: 0 20px;
  }
  &-btn {
    border-top: 1px solid #4d4d4d;
    padding: 20px 21px;
    width: 100%;
  }
  &-agreebtn {
    width: 100%;
    overflow: hidden;
    text-wrap: nowrap;
    background: #FF8888 ;
    color: white;
    font-family: SF Pro Display;
    font-size: 14px;
    font-weight: 400;
    line-height: 17px;
    cursor: pointer;
  }
}
</style>