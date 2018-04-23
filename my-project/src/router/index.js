import Vue from 'vue'
import Router from 'vue-router'
import Recommand from '@/recommand/index'
import HotRank from '@/hot-rank/index'
import Search from '@/search/index'

import ShoppingCart from '@/components/shopping-cart'
import Chat from '@/components/chat'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Chat',
      component: Chat
    },
    {
      path: '/shoppingCart',
      name: 'shoppingCart',
      component: ShoppingCart
    },
    {
      path: '/recommand', // edit by 91
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
