import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue'),
  },
  {
    path: '/product/1',
    name: 'Product1',
    component: () => import('../views/product/1.vue'),
  },
  {
    path: '/product/2',
    name: 'Product2',
    component: () => import('../views/product/2.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
