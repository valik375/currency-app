<template>
  <div class="card">
    <slot />
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.card {
  border: 1px solid var(--border-color);
  border-radius: .4rem;
}
</style>
