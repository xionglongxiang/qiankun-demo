const routes = [
  { path: '/', name: 'home', meta: {
    keepAlive: true
  },component: () => import(/* webpackChunkName: "home" */ '@/views/Home') },
  { path: '/about', name: 'about', component: () => import(/* webpackChunkName: "about" */ '@/views/About') },
];

export default routes;
