import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'


import { appRoutes } from './routes';

Vue.use(VueRouter);

const router = new VueRouter({
  routes: appRoutes,
  mode: 'history',
});

router.beforeEach((to, from, next) => {

  console.log('Before Each executed!')
  next();// next(false) abort the reuqest.
})


new Vue({
  el: '#app',
  router: router,
  render: h => h(App)
})

/*
#region [dark]

 Configure Routes:
  mode -> sets the url format used for the application
    1. hash : localhost:8080/#/, #/user, #/department (DEFAULT)
    2. history : localhost:8080, /user, /department

    NOTE: Configure server to ALWAYS return index.html

    #endregion
*/




 // scrollBehavior(to, from, savedPosition) {
  //   return { x: 0, y: 100 };
  // }