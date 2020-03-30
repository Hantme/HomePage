<template>
  <div class="inputFrame">
    <div class="search-input">
      <!-- $event是实参，表示event对象 -->
      <!--    <span class="sw">LOGO</span>-->
      <switchLogo></switchLogo>
      <div class="inputBox">
        <input type="text" v-model="keyword" placeholder=" :)" @keydown.enter="search()">
        <!-- 这是一个小叉叉，点击它可清除输入框内容 -->
      </div>
      <div class="clear" v-show="keyword">
      <span class="search-reset" @click="clearInput()">
        <i class="el-icon-close"></i>
      </span>
      </div>
      <!--      @keydown.down="selectDown()" @keydown.up.prevent="selectUp()"-->
      <div class="search-select" v-if="0">
      </div>
    </div>
  </div>
</template>

<script>

import switchLogo from './switchLogo'
export default {
  name: 'searchEngine',
  components: {
    switchLogo
  },
  data: function () {
    return {
      myData: [], // 用来接收ajax得到的数据
      keyword: '', // v-model绑定的输入框的value
      now: -1,
      searchIndex: 0,
      logoData: [{
        name: '百度搜索',
        searchSrc: 'https://www.baidu.com/s?ie=utf-8&f=8&rsv_bp=0&rsv_idx=1&tn=baidu&wd='
      }, {
        name: '搜狗搜索',
        searchSrc: 'https://www.sogou.com/web?query='
      }]
    }
  },
  methods: {
    search: function () {
      // 打开对应的搜索界面
      window.open(this.logoData[this.searchIndex].searchSrc + this.keyword)
    },
    clearInput: function () {
      this.keyword = ''
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .inputFrame
    display flex
    justify-content center
  .search-input
    transition-duration .5s
    margin-top  18%
    position relative
    background: #fff;
    display: flex;
    border: 1px solid #dfe1e5;
    box-shadow: 3px black
    border-radius: 24px;
    height: 44px;
    width: 582px;
    opacity 0.8
    &:hover
      opacity 1
  .inputBox
    display: flex;
    flex: 100%;
    input
      height: 44px;
      width 100%
      font-size: 18px
      margin-right 20px
      overflow: hidden;
      outline none

  .search-btn
    height 45px
    width 100px
    border 1px solid mediumseagreen
    background-color mediumseagreen
    color white
    font-size 16px
    font-weight: bold
    float left
    cursor pointer
    opacity 0.8

  .search-select
    top: 45px;
    width: 500px;
    box-sizing: border-box;
    z-index: 999;

    li
      border: 1px solid #d4d4d4;
      border-top: none;
      border-bottom: none;
      background-color: #fff;
      width: 100%

  .search-select-option {
    box-sizing: border-box;
    padding: 7px 10px;
  }

  .selectback
    background-color: #eee !important;
    cursor: pointer

  input::-ms-clear {
    display: none
  }

  .clear
    display: flex
    align-items center
    width 30px
    .search-reset
      line-height: 21px
      cursor: pointer
      font-size: 20px
      margin-left -5px
      color grey

  .search-select-list {
    transition: all 0.5s
  }

  .itemfade-enter,
  .itemfade-leave-active {
    opacity: 0;
  }

  .itemfade-leave-active {
    position: absolute;
  }

  .search-select
    ul
      margin: 0
      text-align: left
</style>
