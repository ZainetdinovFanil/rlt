<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
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
    const msg = ref('Hello, Vue 3 with TypeScript!');
    const counterStore = useCounterStore();

    return {
      msg,
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
