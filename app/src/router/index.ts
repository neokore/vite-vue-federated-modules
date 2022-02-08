/* eslint-disable @typescript-eslint/ban-ts-comment */
import { defineAsyncComponent } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
      name: 'home',
      // @ts-ignore
      component: /*defineAsyncComponent(*/() => import('home/Main')/*)*/,
      props: {
        basePath: '/home'
      }
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    }
  ]
});

export default router;
