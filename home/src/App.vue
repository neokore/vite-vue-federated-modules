<script lang="ts" setup>
import { useRouter } from 'vue-router';
import routes from '@/router/routes';
import RoutedSection from './views/RoutedSection/RoutedSection.vue';

// Props
const props = defineProps({
  basePath: {
    type: String,
    default: ''
  }
});

// Set dynamic routes
const router = useRouter();
routes.forEach((route) => {
  const basePathRoute = {
    ...route,
    path: `${props.basePath}${route.path}`
  };
  console.log(`Adding new route ${basePathRoute.path}`);
  router.addRoute(basePathRoute);
});
router.push(props.basePath);
</script>

<template>
  <RoutedSection />
</template>

<style>
@import './assets/base.css';
</style>
