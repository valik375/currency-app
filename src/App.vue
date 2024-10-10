<template>
  <div class="app__wrapper">
    <CurrencyCalculator />
  </div>
</template>

<script setup lang="ts">
import CurrencyCalculator from './components/CurrencyCalculator/index.vue'
</script>

<style scoped>
.app__wrapper {
  width: 100%;
  height: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem 0;
}
</style>
