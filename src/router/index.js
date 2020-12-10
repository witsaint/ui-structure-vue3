import { createRouter, createWebHistory } from 'vue-router';
import Main from '../views/main.vue';
import form from './modules/form';

export const routes = [
  {
    path: '',
    component: Main,
    meta: { noCache: true, title: '首页', position: 0 },
    children: [].concat(form),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});


export default router;
