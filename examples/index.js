// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
/* jshint esversion: 6 */
import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import route from './route';
import App from './doc';

console.log('route(true)', route(true));
const router = createRouter({
  history: createWebHistory(),
  routes: route(true),
});

createApp(App).use(router)
  .mount('#app');
