import Vue from 'vue';
import VueRouter from 'vue-router';
import IndexView from '@/views/IndexView.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: 'home',
    name: 'site',
    component: IndexView,
    children: [
      {
        path: 'home',
        component: () => import(/*webpackChunkName:"MainHome"*/ '@/views/main/MainHome.vue'),
        children: [
          {
            name: 'region',
            path: 'region',
            component: () => import(/*webpackChunkName:"SelectRegion"*/ '@/views/main/SelectRegion.vue'),
          },
          {
            name: 'menu',
            path: 'menu',
            component: () => import(/*webpackChunkName:"SelectMenu"*/ '@/views/main/SelectMenu.vue'),
          },
        ],
      },
      {
        name: 'search_list',
        path: 'search_list',
        component: () => import(/*webpackChunkName:"SearchList"*/ '@/views/SearchList/SearchList.vue'),
      },
      {
        name: 'restaurant_detail',
        path: 'restaurant_detail',
        redirect: 'restaurant_detail/info',
        component: () =>
          import(/*webpackChunkName:"RestaurantDetail"*/ '@/views/RestaurantDetail/RestaurantDetail.vue'),
        children: [
          {
            name: 'res_info',
            path: 'info',
            component: () => import(/*webpackChunkName:"SearchList"*/ '@/views/RestaurantDetail/DetailInfo.vue'),
          },
          {
            name: 'res_menu',
            path: 'menu',
            component: () => import(/*webpackChunkName:"SearchList"*/ '@/views/RestaurantDetail/ResMenu.vue'),
          },
          {
            name: 'res_review',
            path: 'review',
            component: () => import(/*webpackChunkName:"SearchList"*/ '@/views/RestaurantDetail/ResReview.vue'),
          },
        ],
      },
    ],
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
