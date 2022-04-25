<script setup lang="ts">
import HomeStore from '../../components/HomeStore.vue';
</script>

<template>
  <div>
    <h1>I'm home component!!!</h1>
    <Suspense>
      <HomeStore />

      <template #fallback> Loading... </template>
    </Suspense>
  </div>
</template>
