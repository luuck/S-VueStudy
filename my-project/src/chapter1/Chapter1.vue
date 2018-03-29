<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>你好{{ username }}</h2>
    <router-link :to="{ name: 'HelloWorld' }">跳转</router-link>
  </div>
</template>

<script>
  export default {
    name: 'Chapter1',
    data () {
      return {
        msg: 'start'
      }
    },
    computed: {
      username(){
        return this.msg
      }
    }
  }
</script>

<style lang="scss" scoped>


</style>
