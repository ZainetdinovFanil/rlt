<template>
  <div class="app_container">
    <InvetoryView></InvetoryView>
  </div>
</template>

<script lang="ts" setup>
import { Options, Vue } from "vue-class-component";
import HelloWorld from "./components/HelloWorld.vue";
import InvetoryView from "./components/views/InvetoryView.vue";
</script>

<style lang="sass"  scoped>
.app_container
  padding: 32px 32px 0
  flex: 1
  width: 100%
  max-width: 850px
  margin: auto
</style>
<style>
* {
  box-sizing: border-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
}
body {
  min-height: 100vh;
  margin: 0;
  display: flex;
  background: #1d1d1d;
}
</style>
