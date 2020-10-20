import Main from '../../views/main.vue';

const ProgramList = () => import(/* webpackChunkName: "program-list" */'../../views/New.vue');

// 促销模块路由定义文件
export default [
  {
    path: '/new',
    component: Main,
    name: 'channel',
    meta: {
      title: '渠道节目管理', icon: 'iconfont icondingdanguanli', privileges: [''], position: 100,
    },
    children: [
      {
        name: 'program_list',
        path: '',
        component: ProgramList,
        meta: {
          noCache: true, icon: 'iconfont icon-kehuguanxiguanli', privileges: [''], title: '节目列表',
        },
      },
    ],
  },
];
