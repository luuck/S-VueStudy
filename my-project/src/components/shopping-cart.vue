<template lang="html">
  <div>
    <input type="text" v-model="message" placeholder="输入..">
    <input type="text" @input="handleInput" placeholder="输入..">
    <input type="radio" name="picked" value="1" v-model="gender">男
    <input type="radio" name="picked" value="2" v-model="gender">女

    <input type="checkbox" v-model="checked" value="html" id="html">
    <label for="html">HTML</label>
    <input type="checkbox" v-model="checked" value="js" id="js">
    <label for="js">JS</label>
    <input type="checkbox" v-model="checked" value="css" id="css">
    <label for="css">CSS</label>
    <p>选择的项是：{{checked}}</p>

  </div>
</template>

<script>
export default {
  name: 'ShoppingCart',
  data(){
    return {
      message:'',
      picked: true,
      gender:'1',
      checked: ['html','css']
    }
  },
  methods:{
    handleInput: function (e) {
      this.message = e.target.value;
    }
  }
}
</script>

<style lang="scss" module>

</style>
