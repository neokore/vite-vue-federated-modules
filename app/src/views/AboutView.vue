<script setup lang="ts">
import AboutStore from '../components/AboutStore.vue';
</script>

<template>
  <div class="about">
    <h1>This is an about page</h1>
    <Suspense>
      <AboutStore />

      <template #fallback> Loading... </template>
    </Suspense>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    display: flex;
    align-items: center;
  }
}
</style>
