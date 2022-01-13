import Vue from 'vue'
import Router from 'vue-router'
import Homepage from '../components/Homepage.vue'
import Single from '../components/Single.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Homepage',
      component: Homepage,
    },
    {
      path: '/story/:id',
      name: 'Single',
      component: Single,
    },
  ],
})
