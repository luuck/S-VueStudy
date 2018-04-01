<template lang="html">
  <div class="m-recommand">
    <h3 class="m-recommand-h3">最新音乐</h3>
    <ul class="recent-item">
      <li class="recent-item-li" v-for="item in items" :key="item.id">
        <div class="ritem-lf">
          <h3>{{item.songName}}</h3>
          <p>{{item.singer}}-{{item.songName}}</p>
        </div>
        <div class="ritem-rf">
          <span class="play-icon"></span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data(){
    return {
      items:[{
        songName: '渺小却伟大',
        singer: '李易峰',
        link: ''
      },{
        songName: 'Call Out My Name',
        singer: 'Lady Gaga - Your Song',
        link: ''
      },{
        songName: '她说',
        singer: '林俊杰',
        link: ''
      },{
        songName: '小半',
        singer: '陈粒',
        link: ''
      },{
        songName: '我的爱',
        singer: '梁咏琪',
        link: ''
      }]
    }
  }
}
</script>

<style lang="scss">
  .m-recommand{
    .recent-item{
      width: 100%;
      .recent-item-li{
        width: 98%;
        float: right;
        /*height: 30%;*/
        text-align: left;
        color: #333;
        border-bottom: 1px solid #eee;
        padding-top: 5px; /*no*/
        /*padding-bottom: 2px; !*no*!*/
        .ritem-lf{
          float:left;
          h3{
            font-size: 16px; /*no*/
            font-weight: 400;
          }
          p{
            font-size: 12px; /*no*/
            color: #888;
            line-height: 20px;/*no*/
            height: 20px;/*no*/
            &:before{
              content: '';
              display: inline-block;
              vertical-align: middle;
              background: url(../assets/img/index_icon_2x.png) no-repeat 0 0;
              width: 25px; /*no*/
              height: 16px; /*no*/
              transform:scale(0.6);
              /*background-size: cover;*/
            }
          }
        }
        .ritem-rf{
          float: right;
          .play-icon{
            display: inline-block;
            background: url(../assets/img/index_icon_2x.png) no-repeat -47px 0; /*no*/
            width: 45px;  /*no*/
            height: 45px;  /*no*/
            transform: scale(.5);
          }
        }
      }
    }
  }
</style>
