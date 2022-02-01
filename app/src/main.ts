/* eslint-disable @typescript-eslint/ban-ts-comment */
import { createApp, defineAsyncComponent } from 'vue';
import App from './App.vue';
import router from './router';

// @ts-ignore
const Home = defineAsyncComponent(() => import('home/Main'));

const app = createApp(App);

app.component('HomeContent', Home);

app.use(router);

app.mount('#app');
