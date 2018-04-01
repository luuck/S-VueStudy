<template lang="html">
  <div>
    <Heador/>
    <Nav/>
    <!--<RecentMusic/>-->
  </div>
</template>

<script>
  import Heador from '../public/header'
  import Nav from '../public/nav'
  import Footer from '../public/footer'
  export default {
    name: 'index',
    // 注册
    components: {
      Heador,
      Nav
    }
  }
</script>

<style lang="scss">
</style>
