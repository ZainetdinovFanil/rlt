<template>
  <div class="hello">
    <p>Count: {{ counterStore.count }}</p>
    <button @click="counterStore.increment">Increment</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useCounterStore } from '@/store/counter';

export default defineComponent({
  name: 'HelloWorld',
  setup() {
    const counterStore = useCounterStore();

    return {
      counterStore,
    };
  },
});
</script>

<style lang="scss" scoped>
.hello {
  h1 {
    color: blue;
  }
}
</style>
