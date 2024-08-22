<template>
  <div class="inventory_items">
    <div
      v-for="(row, rowIndex) in grid"
      :key="rowIndex"
      class="inventory_items-row"
    >
      <div
        class="inventory_item-wrapper"
        v-for="(item, colIndex) in row"
        :key="colIndex"
      >
        <div
          class="inventory_item"
          draggable="true"
          @dragstart="handleDragStart($event, rowIndex, colIndex)"
          @dragover.prevent
          @drop="handleDrop($event, rowIndex, colIndex)"
          @dragend="handleDragEnd($event)"
          @click="setShowDeleteModal({ item, colIndex, rowIndex })"
        >
          <InventoryItem v-if="item" :item="item"></InventoryItem>
        </div>
        <div
          class="inventory_item-count"
          v-if="item"
          @click.stop="setShowCountModal({ item, colIndex, rowIndex })"
        >
          {{ item?.count }}
        </div>
      </div>
    </div>
    <InventoryEditCountModal
      :show-modal="showCountModal"
      @closeModal="showCountModal = false"
      v-model="itemCount.item"
      @update:model-value="updateValue"
    ></InventoryEditCountModal>
    <InventoryDeleteModal
      :show-modal="showDeleteModal"
      @closeModal="showDeleteModal = false"
      :item="itemForDelete.item"
      @deleteItem="deleteItem"
    ></InventoryDeleteModal>
  </div>
</template>
  
  <script lang="ts" setup>
import { ref, onMounted } from "vue";
import InventoryItem from "@/components/inventory/InvetoryItem.vue";
import InventoryEditCountModal from "./InventoryEditCountModal.vue";
import InventoryDeleteModal from "./InventoryDeleteModal.vue";
import { useGridStore } from "@/store/inventory";

const gridStore = useGridStore();
const grid = ref(gridStore.grid);

const setShowCountModal = (item) => {
  itemCount.value = item;
  showCountModal.value = true;
};
const setShowDeleteModal = (item) => {
  itemForDelete.value = item;
  showDeleteModal.value = true;
};

interface ItemCount {
  item: { count: number };
  colIndex: number;
  rowIndex: number;
}
const itemCount = ref<ItemCount>({
  item: { count: 0 },
  colIndex: -1,
  rowIndex: -1,
});
const itemForDelete = ref<ItemCount>({
  item: { count: 0 },
  colIndex: -1,
  rowIndex: -1,
});
const showCountModal = ref(false);
const showDeleteModal = ref(false);

let draggingCell: { row: number; col: number } | null = null;

const handleDragStart = (event: DragEvent, row: number, col: number) => {
  const item = grid.value[row][col];
  if (item) {
    draggingCell = { row, col };
    event.dataTransfer.setData("text/plain", "");
    event.dataTransfer.effectAllowed = "move";

    const target = event.target as HTMLElement;
    const rect = target.getBoundingClientRect();
    const offsetX = event.clientX - rect.left;
    const offsetY = event.clientY - rect.top;

    event.dataTransfer.setDragImage(target, offsetX, offsetY);
    target.classList.add("dragging");
  } else {
    event.preventDefault();
  }
};

const handleDrop = (event: DragEvent, row: number, col: number) => {
  if (draggingCell) {
    gridStore.moveItem(draggingCell, { row, col });
    draggingCell = null;
  }
};

const handleDragEnd = (event: DragEvent) => {
  const target = event.target as HTMLElement;
  target.classList.remove("dragging");
};

onMounted(() => {
  gridStore.loadState();
  grid.value = gridStore.grid;
});
const updateValue = (value: { count: number }) => {
  console.log(value);

  gridStore.changeItemCount(
    { col: itemCount.value.colIndex, row: itemCount.value.rowIndex },
    Number(value.count)
  );
};
const deleteItem = () => {
  gridStore.removeItem(
    { col: itemForDelete.value.colIndex, row: itemForDelete.value.rowIndex }
  );
};
</script>
  
  <style lang="scss" scoped>
.inventory_items {
  position: relative;
  background: #262626;
  border-radius: 12px;
  overflow: hidden;
  &-row {
    display: flex;
  }
}
.inventory_item-wrapper {
  position: relative;
}
.inventory_item {
  border: 1px solid #4d4d4d;
  width: 105px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  &-count {
    cursor: pointer;
    position: absolute;
    right: 0;
    bottom: 0;
    padding-left: 4px;
    padding-right: 4px;
    height: 16px;
    gap: 0px;
    border-radius: 6px 0px 0px 0px;
    border: 1px solid #4d4d4d;
    border: 1px 0px 0px 0px;

    font-family: Inter;
    font-size: 10px;
    font-weight: 500;
    line-height: 12px;
    color: #ffffff;
    opacity: 0.4;

    display: flex;
    align-items: center;
    justify-content: center;
  }
}

.dragging {
  padding: 23px;
  border-radius: 20px;
  border: 1px solid #4d4d4d;
  z-index: 2;
  opacity: 0.9;
}
</style>