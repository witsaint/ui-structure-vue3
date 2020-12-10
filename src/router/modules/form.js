import Main from '../../views/main.vue';

const Row = () => import(/* webpackChunkName: "form" */'../../views/form/Row.vue');
const Input = () => import(/* webpackChunkName: "form" */'../../views/form/input.vue');

// 促销模块路由定义文件
export default [
  {
    path: '/row',
    component: Row,
    name: 'row',
    meta: {
    },
  },
  {
    path: '/input',
    component: Input,
    name: 'input',
    meta: {
    },
  },
];
