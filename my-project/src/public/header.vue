<template lang="html">
  <div>
     <div class="m-top">
       <span class="logo">网易云音乐</span>
       <a href="javascript:;" class="btn-download">下载APP</a>
     </div>
  </div>
</template>

<script>
  export default {
  }
</script>

<style lang="scss">
  .m-top{
    position: fixed;
    z-index: 10;
    top:0;
    width: 100%;
    height: 64px;  /*no*/
    line-height: 64px; /*no*/
    background-color: #C4483C;
    .logo{
      font-size: 120px;
      color: #fff;
      float: left;
      padding-left: 60px;
      &:before{
        content: '';
        /*background: url("");*/
      }
    }
    .btn-download{
      padding: 30px;
      border-radius: 60px;
      border:1px solid #fff; /*no*/
      font-size: 60px;
      color: #fff;
      text-align: center;
      line-height: 1;
      display: inline-block;
      float: right;
      margin-right: 10px; /*no*/
      margin-top: 18px; /*no*/
    }
  }
</style>
