import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import App from '../examples/doc.vue';
import AppDemo from './App.vue';
import router from './router';
import route from '../examples/route';
import store from './store';
import { createUI } from '../UI';

// style
// import '@/assets/style/index.less';
import './index.css';

const docRouter = createRouter({
  history: createWebHistory(''),
  routes: route(true),
});
if (import.meta.env.MODE === 'demos') {
  createApp(AppDemo).use(createUI(123)).use(store).use(router)
    .mount('#app');
} else {
  createApp(App).use(createUI(123)).use(store).use(docRouter)
    .mount('#app');
}

