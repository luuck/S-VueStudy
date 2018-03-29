<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>hello</p>
   <router-link :to="{ name: 'Chapter1' }">跳转</router-link>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'start'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

h2{
  span{color: red;font-size: 12px;}
}
  p{
    font-size: 40px;
  }

</style>
