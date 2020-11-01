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
  {
    path: '/product/3',
    name: 'Product3',
    component: () => import('../views/product/3.vue'),
  },
  {
    path: '/product/4',
    name: 'Product4',
    component: () => import('../views/product/4.vue'),
  },
  {
    path: '/product/5',
    name: 'Product5',
    component: () => import('../views/product/5.vue'),
  },
  {
    path: '/product/6',
    name: 'Product6',
    component: () => import('../views/product/6.vue'),
  },
  {
    path: '/product2/1',
    name: 'Product2-1',
    component: () => import('../views/product2/1.vue'),
  },
  {
    path: '/product3/1',
    name: 'Product3-1',
    component: () => import('../views/product3/1.vue'),
  },
  {
    path: '/product3/2',
    name: 'Product3-2',
    component: () => import('../views/product3/2.vue'),
  },
  {
    path: '/product4/1',
    name: 'Product4-1',
    component: () => import('../views/product4/1.vue'),
  },
  {
    path: '/product4/2',
    name: 'Product4-2',
    component: () => import('../views/product4/2.vue'),
  },
  {
    path: '/product5/1',
    name: 'Product5-1',
    component: () => import('../views/product5/1.vue'),
  },
  {
    path: '/history',
    name: 'History',
    component: () => import('../views/history.vue'),
  },
  {
    path: '/all-company',
    name: 'AllCompany',
    component: () => import('../views/all-company.vue'),
  },
  {
    path: '/cooperation',
    name: 'Cooperation',
    component: () => import('../views/cooperation.vue'),
  },
  {
    path: '/idea',
    name: 'Idea',
    component: () => import('../views/idea.vue'),
  },
  {
    path: '/copyright',
    name: 'Copyright',
    component: () => import('../views/copyright.vue'),
  },
  {
    path: '/data-statement',
    name: 'data-statement',
    component: () => import('../views/data-statement.vue'),
  },
  {
    path: '/business-rule',
    name: 'business-rule',
    component: () => import('../views/business-rule.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
