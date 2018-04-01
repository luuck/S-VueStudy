<template lang="html">
  <div class="m-bottom">
      <a href="javascript:;" class="btn-openapp">打开APP，发现更多好音乐></a>
       <!--<p class="copyright">网易公司版权所有©1997-2018   杭州乐读科技有限公司运营</p>-->
      <p>by Luuck edit at 2018</p>
  </div>
</template>

<script>
  export default {
  }
</script>

<style lang="scss">
  .m-bottom{
    position: relative;
    top: 401px; /*no*/
    width: 100%;
    background: url(../assets/img/recommand_bg_2x.png) no-repeat;
    height: 800px;
    background-size: cover;
    text-align: center;
    .btn-openapp{
      position: absolute;
      top:50%;
      left: 50%;
      transform: translate(-50%,-50%);
      padding: 50px;
      width: 60%;
      border-radius: 70px;
      border:1px solid #d33a31; /*no*/
      font-size: 60px;
      color: #d33a31;
      text-align: center;
      line-height: 1;
      display: inline-block;
    }
    p{
      position: absolute;
      top:65%;
      width: 100%;
      font-size: 12px; /*no*/
      color: #888;
    }
  }
</style>
