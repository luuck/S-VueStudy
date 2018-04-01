<template lang="html">
  <div>
    <ul class="m-nav">
      <li :class="classObject">
        <div @click="showCurLi(1)">
          <router-link to="/">推荐音乐</router-link>
        </div>
      </li>
      <li :class="classObject">
        <div @click="showCurLi(2)">
          <router-link to="/hot-rank">热歌榜</router-link>
        </div>
      </li>
      <li :class="classObject">
        <div @click="showCurLi(3)">
          <router-link to="/search">搜索</router-link>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        classObject: {
          'nav-li': true,
          'cur': false
        },
        iscur: 1,
        tabs: [{
          link: '/',
          name: '推荐音乐'
        }, {
          link: '/hot-rank',
          name: '热歌棒'
        }, {
          link: '/search',
          name: '搜索'
        }]
      }
    },
    methods: {
      showCurLi: function (index) {
        // this.iscur = index;
        console.log('----');
        console.log(index, this.iscur);
      }
    },
    watch:{
      $route(){
        alert("改变");
      }
    }
  }
</script>

<style lang="scss">
  .m-nav {
    width: 100%;
    height: 40px; /*no*/
    line-height: 40px; /*no*/
    position: fixed;
    z-index: 10;
    background-color: #fff;
    top: 64px; /*no*/
    border-bottom: 1px solid #eee;
    display: flex;

    .nav-li {
      float: left;
      width: 33.3%;
      flex: 1;
      font-size: 15px; /*no*/
      color: #333;;
      text-align: center;
      div {
        width: 50%;
        margin: 0 auto;
      }
    }
    .cur, .nav-li:hover {
      color: #d33a31;
      div {
        border-bottom: 1px solid #d33a31;
      }
    }

    .nav-li a {
      color: #333;
    }

    .cur a, .nav-li:hover a {
      color: #d33a31;
    }

  }
</style>
