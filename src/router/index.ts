import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Api2Type from '../views/Api2Type/index.vue';
import Image2Text from '../components/Image2Text.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Api2Type',
    component: Api2Type
  },
  {
    path: '/api2ts',
    name: 'Api2Type',
    component: Api2Type
  },
  {
    path: '/image2text',
    name: 'image2text',
    component: Image2Text
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
