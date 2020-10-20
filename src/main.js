import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import App from '../examples/doc.vue';
// import router from './router';
import route from '../examples/route';
import store from './store';
import { createUI } from '../UI';

// style
// import '@/assets/style/index.less';
import './index.css';

const exRouter = createRouter({
  history: createWebHistory(),
  routes: route(true),
});
console.log('exRouter', route(true));
createApp(App).use(createUI(123)).use(store).use(exRouter)
  .mount('#app');
