<template lang="html">
  <div>
    <Heador/>
    <Nav/>
    <HotSearch/>
  </div>
</template>

<script>
  import Heador from '../public/header'
  import Nav from '../public/nav'
  import HotSearch from './hot-search'

  export default {
    name: 'index',
    // 注册
    components: {
      Heador,
      Nav,
      HotSearch
    }
  }
</script>

<style lang="scss">
</style>
