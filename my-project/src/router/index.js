import Vue from 'vue'
import Router from 'vue-router'
import Recommand from '@/recommand/index'
import HotRank from '@/hot-rank/index'
import Search from '@/search/index'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  routes: [
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
