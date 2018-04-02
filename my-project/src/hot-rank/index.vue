<template lang="html">
  <div class="hot-rank">
    <Heador/>
    <Nav/>
    <HotRankMusic/>
  </div>
</template>

<script>
  import Heador from '../public/header'
  import Nav from '../public/nav'
  import HotRankMusic from './hot-rank-music'
  export default {
    name: 'index',
    // 注册
    components: {
      Heador,
      Nav,
      HotRankMusic
    }
  }
</script>

<style lang="scss">
  .hot-rank{
    .recent-item{
      margin-top: 0px; /*no*/
    }
  }
</style>
