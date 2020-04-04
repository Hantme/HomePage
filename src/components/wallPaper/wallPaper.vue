<template>
<!--  <div  :style="backgroundDiv" @click="changePic">-->
<!--  </div>-->
  <div class="wall">
<!--    <div class="bgImg" :style="{backgroundImage:`url(${imgUrl})`}">-->
      <img :src="imgUrl" alt="背景图片无法显示，请重新选择">

    <transition name="el-zoom-in-center">
      <div class="mask" v-if="box">
        <el-form class="diyImg" label-width="80px" :model="formLabelAlign">
          <el-form-item label="图片URL：">
            <el-input v-model="formLabelAlign.url"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click.native="setPic(), showBox()">立即创建</el-button>
            <el-button @click="showBox">取消</el-button>
          </el-form-item>
        </el-form>
      </div>
    </transition>
<!--    </div>-->
    <div class="icon">
      <i class="el-icon-s-open" @click="showBox" title="自定义背景"></i>
      <i class="el-icon-magic-stick" @click="changePic" title="随机一下！"></i>
    </div>
    <div class="board"></div>
  </div>
</template>

<script>
export default {
  name: 'wallPaper',
  data: function () {
    return {
      imgArr: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10'],
      imgArrIndex: 1,
      imgIndex: 10,
      random: 54,
      imgUrl: '',
      box: false,
      formLabelAlign: {
        url: ''
      }
    }
  },
  mounted () {
    this.changePic()
  },
  methods: {
    showBox () {
      this.formLabelAlign = {}
      this.box = !this.box
    },
    changePic () {
      this.imgArrIndex = Math.floor(Math.random() * 54 + 1)
      this.imgUrl = this.imgArrIndex < 10 ? require('../../common/wallPaper/acg,gy_' + this.imgArr[this.imgArrIndex] + '.jpg')
        : require('../../common/wallPaper/acg,gy_' + this.imgArrIndex + '.jpg')
      console.log(this.imgArrIndex)
    },
    setPic () {
      this.imgUrl = this.formLabelAlign.url
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .wall
    width 100%
    height 100%
    display flex
    justify-content center
    position relative
  img
    margin 0
    object-fit: cover
    width 100%
    height 100%
    position fixed
    vertical-align bottom
  .bgImg
    background-size contain
    background-repeat: no-repeat
    background-position: center
    display flex
    left 0px
    top 0px
    width auto
    height auto
    position fixed
  .icon
    position fixed
    bottom 50px
    right 15px
    color grey
    font-size 25px
    cursor pointer
    z-index 500
  .board
    position fixed
    bottom 40px
    right 11px
    width 25px
    height 70px
    border-radius 20px
    background-color: #fff
    padding 35px 5px 5px 5px
    opacity 0.7
  i
    display block
    margin-top 5px
    &:hover
      transform scale(1.2)
  .mask
    position: fixed
    top: 0
    left: 0
    right: 0
    bottom: 0
    display flex
    align-items center
    justify-content center
    z-index 1
    .diyImg
      z-index 2
      position relative
      text-align center
      width 400px
      height 150px
      background-color: #fff
      border-radius 20px
      padding 30px
  .fade-enter-active, .fade-leave-active
    transition: opacity .5s

  .fade-enter, .fade-leave-active
    opacity: 0
</style>
