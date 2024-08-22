<template>
  <div class="inventory_profile">
    <img
      src="https://i.pinimg.com/736x/6e/0d/55/6e0d553afe2843c3d30f56a96fe34310.jpg"
      alt=""
      class="inventory_profile-image"
    />
    <div class="inventory_profile-sckeleton">
      <BlockSkeleton class="inventory_profile-sckeleton-block"></BlockSkeleton>
      <TextSkeleton class="inventory_profile-sckeleton-text" />
      <!-- <div class="inventory_profile-sckeleton-text">
        <TextSkeleton></TextSkeleton>
      </div> -->
      <TextSkeleton class="inventory_profile-sckeleton-subtext" />
    </div>
  </div>
</template>
<script lang="ts" setup>
import BlockSkeleton from "../base/BlockSkeleton.vue";
import TextSkeleton from "../base/TextSkeleton.vue";
</script>

<style lang="scss" scoped>
.inventory_profile {
  width: 236px;
  padding: 18px 14px 24px;
  border-radius: 12px;
  border: 1px solid #4d4d4d;
  background-color: #262626;
  &-image {
    backdrop-filter: blur(10px);
    filter: blur(10px);
    object-fit: cover;
    object-position: center;
    width: 100%;
    height: 240px;
    border-radius: 8px;
    margin-bottom: 20px;
  }
  &-sckeleton {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;
    &-block {
      height: 26px;
      padding: 0 9px;
    }
    &-text {
      height: 114px;
      width: 100%;
    }
    &-subtext {
      height: 10px;
      width: 100%;
    }
  }
}
</style>