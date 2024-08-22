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
            :item="modelValue"
            :height="130"
            :width="130"
          ></InventorySvg>
        </div>
        <div class="edit-modal-line"></div>
        <BlockSkeleton class="edit-modal-sckeleton-block"></BlockSkeleton>
        <TextSkeleton class="edit-modal-sckeleton-text" />
        <div class="edit-modal-editor">
          <BaseInput
            v-model="count"
            :type="'number'"
            :placeholder="'Введите количество'"
            @enterClick="$emit('enterClick')"
          ></BaseInput>
          <div class="edit-modal-btns">
            <BaseButton class="edit-modal-closebtn" @click="$emit('closeModal')" :padding="'8px 18px;'"
                    :border-radius="'8px'"
              >Отмена</BaseButton
            >
            <BaseButton class="edit-modal-agreebtn" @click="updateCount" :padding="'8px 15px;'"
                    :border-radius="'8px'"
              >Подтвердить</BaseButton
            >
          </div>
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
  import BaseInput from "../base/BaseInput.vue";
  import { defineProps, defineEmits, ref } from "vue";
  
  const props = defineProps({
    showModal: {
      type: Boolean,
      default: false,
    },
    modelValue: {
      type: Object,
      required: true,
    },
  });
  
  const emit = defineEmits(["update:modelValue", "closeModal"]);
  
  const count = ref(props.modelValue.count);
  
  const updateCount = () => {
    const updatedModelValue = { ...props.modelValue, count: count.value };
    emit("update:modelValue", updatedModelValue);
    emit("closeModal");
    count.value = "";
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
  &-editor {
    border-top: 1px solid #4d4d4d;
    padding: 20px 21px;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 20px;
    width: 100%;
  }
  &-btns {
    display: flex;
    align-items: center;
    gap: 10px;
    justify-content: space-between;
    width: 100%;
  }
  &-closebtn {
    background: white;
    color: #2d2d2d;
    font-family: SF Pro Display;
    font-size: 14px;
    font-weight: 400;
    line-height: 17px;
    cursor: pointer;
  }
  &-agreebtn {
    background: #fa7272;
    color: white;
    font-family: SF Pro Display;
    font-size: 14px;
    font-weight: 400;
    line-height: 17px;
    cursor: pointer;
  }
}
</style>