<template lang="html">
  <div class="m-recommand">
    <h3 class="m-recommand-h3">推荐歌单</h3>
    <ul class="hot-item">
      <li class="hot-item-li" v-for="item in items" :key="item.id">
        <a :href="item.link">
          <img :src="item.img" alt="">
          <div class="play-count"><span class="ej"></span><span class="num">{{item.playCount}}</span>
          </div>
          <p>{{item.intro}}</p>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        items: [{
          link: '',
          playCount: '193万',
          intro:'不一样的烟火 张国荣的电影人生',
          img: 'http://p1.music.126.net/b863NJ0nuxzwYEAQHXrtrA==/109951163215512663.webp?imageView&thumbnail=246x0&quality=75&tostatic=0&type=webp'
        },{
          link: '',
          playCount: '73万',
          intro:'Well，Spring is coming丨乱花渐欲迷人眼',
          img: 'http://p1.music.126.net/ImfNhEZ47Wfx825XLTf-vw==/109951163214338579.webp?imageView&thumbnail=246x0&quality=75&tostatic=0&type=webp'
        },{
          link: '',
          playCount: '65万',
          intro:'• 80\'s合成器｜机械电子的怪诞语言',
          img: 'http://p1.music.126.net/ZvAMRV_UxZsYagWadiCHww==/109951163028301699.webp?imageView&thumbnail=246x0&quality=75&tostatic=0&type=webp'
        },{
          link: '',
          playCount: '11.2万',
          intro:'[ R A P] 国内顶尖制作团队的神来之笔',
          img: 'http://p1.music.126.net/38AQAqhKN4VXcMRleBCrUg==/109951163210176679.webp?imageView&thumbnail=246x0&quality=75&tostatic=0&type=webp'
        },{
          link: '',
          playCount: '604万',
          intro:'节奏带感且深邃性感 ️️这才系Deep House呀',
          img:'http://p1.music.126.net/FEo3yqX28BRwqAJapbjjTA==/18775260558101098.webp?imageView&thumbnail=246x0&quality=75&tostatic=0&type=webp'
        },{
          link: '',
          playCount: '193万',
          intro:'粤语钢琴||琴弥指尖 无词至情',
          img: 'http://p1.music.126.net/o0jgbFI_wj400LyTW9zi3Q==/109951163193550738.webp?imageView&thumbnail=246x0&quality=75&tostatic=0&type=webp'
        }]
      }
    }
  }
</script>

<style lang="scss">
  .m-recommand{
    position: relative;
    top: 120px; /*no*/
    margin-bottom: 10px; /*no*/
    .m-recommand-h3{
      position: relative;
      padding-left: 10px;  /*no*/
      margin-bottom: 10px; /*no*/
      font-size: 16px;  /*no*/
      height: 20px; /*no*/
      line-height: 20px; /*no*/
      color: #333;
      font-weight: 400;
      text-align: left;
      &:before{
        content: " ";
        position: absolute;
        left: 0;
        top: 50%;
        margin-top: -9px; /*no*/
        width: 2px; /*no*/
        height: 16px; /*no*/
        background-color: #d33a31;
      }
    }
    width: 100%;
    .hot-item{
      display: flex;
      flex-flow: row wrap;
      justify-content: space-around;

      .hot-item-li{
        position: relative;
        width: 33%;
        margin-bottom: 0; /*no*/
        img{
          width: 100%;
          height: 70%;
        }
        .play-count{
          position: absolute;
          right: 4%;
          top: 2%;
        }
        .ej{
          display: inline-block;
          background: url(../assets/img/ej.png) no-repeat;
          background-size: contain;
          width: 16px;  /*no*/
          height: 16px;  /*no*/
          vertical-align: middle;
        }
        .num{
          display: inline-block;
          font-size: 20px;
          color: #fff;
          line-height: 16px; /*no*/
          height: 16px;/*no*/
        }
        p{
          font-size: 12px; /*no*/
          color: #333;
          text-align: left;
          width: 100%;
          text-overflow: ellipsis;
          overflow: hidden;
          height: 34px; /*no*/
          /*white-space: nowrap;*/
        }
      }

    }
  }
</style>
