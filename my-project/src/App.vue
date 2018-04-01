<template>
  <div id="app">
    <router-view/>
    <transition :name="transitionName">
      <!--<router-view class="child-view"></router-view>-->
    </transition>
  </div>
</template>

<script>
  export default {
    name: 'App',
    data() {
      return {transitionName: 'slide-left'}
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif, "Microsoft Yahei";
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  .child-view {
    position: absolute;
    width: 100%;
    transition: all .8s cubic-bezier(.55, 0, .1, 1);
  }

  .slide-left-enter,
  .slide-right-leave-active {
    opacity: 0;
    -webkit-transform: translate(500px, 0);
    transform: translate(500px, 0);
  }

  .slide-left-leave-active,
  .slide-right-enter {
    opacity: 0;
    -webkit-transform: translate(-500px, 0);
    transform: translate(-500px, 0);
  }
</style>
