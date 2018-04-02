<template lang="html">
  <div class="m-hotrank-list">
    <div class="bg">
      <span class="hot-text">热歌榜</span>
    </div>
    <ul class="recent-item">
      <li class="recent-item-li" v-for="item in items" :key="item.id">
        <div class="ritem-lf">
          <span class="rank-id" v-if="item.rankId<=3">{{item.rankId}}</span>
          <span class="rank-id s-grey" v-if="item.rankId>3">{{item.rankId}}</span>
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
    data() {
      return {
        items: [{
          rankId: 1,
          songName: '渺小却伟大',
          singer: '李易峰',
          link: ''
        }, {
          rankId: 2,
          songName: 'Call Out My Name',
          singer: 'Lady Gaga - Your Song',
          link: ''
        }, {
          rankId: 3,
          songName: '她说',
          singer: '林俊杰',
          link: ''
        }, {
          rankId: 4,
          songName: '小半',
          singer: '陈粒',
          link: ''
        }, {
          rankId: 5,
          songName: '我的爱',
          singer: '梁咏琪',
          link: ''
        },{
          rankId: 6,
          songName: '她说',
          singer: '林俊杰',
          link: ''
        }, {
          rankId: 7,
          songName: '小半',
          singer: '陈粒',
          link: ''
        }, {
          rankId: 8,
          songName: '我的爱',
          singer: '梁咏琪',
          link: ''
        }]
      }
    }
  }
</script>

<style lang="scss">
  .m-hotrank-list {
    .bg {
      position: relative;
      width: 100%;
      height: 192px; /*no*/
      top: 84px; /*no*/
      background: url(../assets/img/hot_music_bg_2x.jpg) no-repeat;
      background-size: cover;
      .hot-text {
        position: absolute;
        top: 16%;
        left: 1%; /*no*/
        background: url(../assets/img/index_icon_2x.png) no-repeat -44px -45px; /*no*/
        background-size: cover;
        width: 288px; /*no*/
        height: 136px; /*no*/
        transform: scale(.6);
        text-indent: -9999px;
      }
    }
    .recent-item {
      margin-top: 104px; /*no*/
      width: 100%;
      .recent-item-li {
        width: 94%;
        float: right;
        /*height: 30%;*/
        text-align: left;
        color: #333;
        border-bottom: 1px solid #eee;
        padding-top: 5px; /*no*/
        /*padding-bottom: 2px; !*no*!*/
        .ritem-lf {
          float: left;
          position: relative;
          .rank-id {
            position: absolute;
            left: -15px; /*no*/
            color: #df3436;
          }
          .s-grey {
            color: #999;
          }
          h3 {
            font-size: 16px; /*no*/
            font-weight: 400;
          }
          p {
            font-size: 12px; /*no*/
            color: #888;
            line-height: 20px; /*no*/
            height: 20px; /*no*/
            &:before {
              content: '';
              display: inline-block;
              vertical-align: middle;
              background: url(../assets/img/index_icon_2x.png) no-repeat 0 0;
              width: 25px; /*no*/
              height: 16px; /*no*/
              transform: scale(0.6);
              /*background-size: cover;*/
            }
          }
        }
        .ritem-rf {
          float: right;
          .play-icon {
            display: inline-block;
            background: url(../assets/img/index_icon_2x.png) no-repeat -47px 0; /*no*/
            width: 45px; /*no*/
            height: 45px; /*no*/
            transform: scale(.5);
          }
        }
      }
    }
  }
</style>
