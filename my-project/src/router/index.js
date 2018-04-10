import Vue from 'vue'
import Router from 'vue-router'
import Recommand from '@/recommand/index'
import HotRank from '@/hot-rank/index'
import Search from '@/search/index'
import HelloWorld from '@/components/HelloWorld'
/*import Chapter1 from '@/chapter1/Chapter1'*/

Vue.use(Router)

export default new Router({
  // mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },/*{
      path: '/Chapter1',
      name: 'Chapter1',
      component: Chapter1
    },*/
    {
      path: '/',
      name: 'recommand',
      component: Recommand
    },{
      path: '/hot-rank',
      name: 'hot-rank',
      component: HotRank
    },{
      path: '/search',
      name: 'search',
      component: Search
    }
  ]
})
