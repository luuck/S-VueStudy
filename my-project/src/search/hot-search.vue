<template lang="html">
  <div class="m-search">
    <!--<div class="ipt-wrap">
      <input type="text" placeholder="搜索歌曲、歌手、专辑">
    </div>-->
    <div class="inputcover">
      <!--<i class="u-svg u-svg-srch"></i>-->
      <input type="search" name="search" class="input" placeholder="搜索" value="" autocomplete="off">
      <!--<label class="holder">搜索歌曲、歌手、专辑</label>--><figure class="close"><i class="u-svg u-svg-empty"></i></figure>
    </div>
    <div class="hot-search-wrap">
      <a href="javascript:;" v-for="item in items" :key="item.id">{{item.name}}</a>
    </div>
  </div>
</template>
<script>

  export default {
    data() {
      return {
        items: [{
          name: '渺小却伟大',
          link: ''
        }, {
          name: '田馥甄',
          link: ''
        }, {
          name: '林宥嘉',
          link: ''
        }, {
          name: 'Welcome To New York',
          link: ''
        },{
          name: '梁咏琪',
          link: ''
        }, {
          name: '陈粒',
          link: ''
        }]
      }
    }
  }
</script>

<style lang="scss">
  .m-search{
    margin-top: 104px; /*no*/
    overflow: hidden;
    .inputcover {
      position: relative;
      top: 10px; /*no*/
      width: 90%;
      overflow: hidden;
      margin: 0 auto;
      height: 30px; /*no*/
      padding: 0 30px; /*no*/
      box-sizing: border-box;
      background: #ebecec;
      border-radius: 30px; /*no*/
      text-align: left;
      .input {
        width: 100%;
        height: 30px; /*no*/
        line-height: 18px; /*no*/
        background: transparent;
        font-size: 12px; /*no*/
        color: #333;
        border: none;
        outline: none;
        position: absolute;
      }
    }
    /*.ipt-wrap{
      input{
        margin-top: 20px; !*no*!
        width: 90%;
        height: 30px; !*no*!
        line-height: 18px; !*no*!
        !*background: transparent;*!
        font-size: 14px; !*no*!
        color: #333;
        border:1px solid #d3d4da; !*no*!
        outline: none;
        border-radius: 1%;
        background-color: #ebecec;
      }
    }*/
    a{
      padding: 30px;
      border-radius: 60px;
      border:1px solid #d3d4da; /*no*/
      font-size: 60px;
      color: #333;
      text-align: center;
      line-height: 1;
      display: inline-block;
      float: left;
      margin-left: 10px; /*no*/
      margin-top: 18px; /*no*/
    }
  }
</style>
