<template>
  <!-- 选择logo组件 -->
  <div class="switch-logo" title="选择浏览器">
<!--    <img :src="logoData[selectedNow].imgSrc" alt="LOGO" @click="toggleFlag" >-->
    <span class="logoList-arrow" @click="toggleFlag">
      <i class="el-icon-s-promotion"></i>
      <i class="el-icon-minus"></i>
    </span>
    <!-- tranition是vue的过渡效果 -->
    <transition name="logofade">
      <ul v-if="logoListFlag
      " class="logoList" @mouseleave="mouseLeaveList">
        <li class="logoItem" v-for="(logo, index) in logoData" :key="index"
            @mouseover="logoListHover(index)" :class="{selectback:index===logoNow}"
            @click="logoSelected(index)">
          <img :src="logo.imgSrc" alt="LogoSelect">
        </li>
      </ul>
    </transition>
  </div>
</template>

<script>
// export defult是es6中的方法，将整个花括号对象暴露出去;
export default {
  // name: 'switchLogo',
  data: function () {
    return {
      selectedNow: 0,
      logoNow: -1,
      logoListFlag: false,
      mouseLeaveFlag: false,
      logoData: [{
        'imgSrc': require('./images/baidu_logo.png')
      },
      {
        'imgSrc': require('./images/360_logo.png')
      }, {
        'imgSrc': require('./images/sougou_logo.png')
      }]
    }
  },
  methods: {
    toggleFlag: function () {
      this.logoListFlag = !this.logoListFlag
      this.mouseLeaveFlag = true
    },
    logoListHover: function (index) {
      this.logoNow = index
    },
    logoSelected: function (index) {
      this.selectedNow = index
      this.logoListFlag = false
      // 触发父组件的自定义事件，向父组件传参数,selectNow是选择了哪个搜索引擎的索引，父组件得到了之后就可以指定搜索时跳转到哪个搜索引擎
      this.$emit('getindex', this.selectedNow)
    },
    mouseLeaveList: function () {
      // 鼠标离开列表事件
      this.mouseLeaveFlag = false
      this.logoListFlag = false
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .switch-logo
    display: flex;
    margin-left 10px
    font-size 25px
    justify-content center
    align-items center
    cursor pointer
    flex-wrap nowrap
    .logoList-arrow
      display flex
      .el-icon-minus
        transform rotate(90deg)
        font-size 20px
        margin-left -5px

  .logoList {
    width: 150px;
    left: 50%
    padding 0
  }

  .logoList li {
    width: 100%;
    height: 80px;
    background-color: #FEFEFE; /*少个封号报错*/
    line-height: 80px;
    padding-top: 1px;
  }

  .logoList li img {
    width: 100%;
    margin-top: 10px;
  }

  .logofade-enter-active,
  .logofade-leave-active {
    transition: all  .5s;
  }

  .logofade-enter,
  .logofade-leave-active {
    opacity: 0;
    transform: translateY(20px);
  }
  .selectback{background-color: #eee !important;cursor: pointer}
</style>
