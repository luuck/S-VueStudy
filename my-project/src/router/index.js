import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Chapter1 from '@/chapter1/Chapter1'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }, {
      path: '/Chapter1',
      name: 'Chapter1',
      component: Chapter1
    }
  ]
})
