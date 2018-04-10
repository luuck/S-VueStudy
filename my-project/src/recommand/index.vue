<template lang="html">
  <div>
    <Heador/>
    <Nav/>
    <HotMusic/>
    <RecentMusic/>
    <Footer/>
  </div>
</template>

<script>
  import Heador from '../public/header'
  import Nav from '../public/nav'
  import HotMusic from './hot-music'
  import RecentMusic from './recent-music'
  import Footer from '../public/footer'

  export default {
    name: 'index',
    // 注册
    components: {
      Heador,
      Nav,
      HotMusic,
      RecentMusic,
      Footer
    },
    created(){
      this.$api.get('topics', null, r=>{
        console.log(r);
      })
    }
  }
</script>

<style lang="scss">
</style>
