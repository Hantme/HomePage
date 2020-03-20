<template>
<!--  <div  :style="backgroundDiv" @click="changePic">-->
<!--  </div>-->
  <div class="wall">
    <div class="bgImg">
      <img :src="imgUrl" alt="背景图片">
    </div>
    <div class="icon">
      <i class="el-icon-s-tools" @click="setSite"></i>
      <i class="el-icon-s-open"></i>
      <i class="el-icon-magic-stick" @click="changePic"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: 'wallPaper',
  data: function () {
    return {
      imgArr: ['01', '02', '03', '04', '05', '06', '07', '08', '09'],
      imgIndex: 1,
      imgUrl: require('../../common/wallPaper/acg,gy_' + '01' + '.jpg')
    //   backgroundDiv: {
    //
    //     backgroundImage: 'url(' + require('../../common/wallPaper/acg,gy_05.jpg') + ')',
    //
    //     backgroundRepeat: 'no-repeat',
    //
    //     backgroundSize: '100% 100%'
    //
    //   }
    }
  },
  methods: {
    changePic () {
      this.imgUrl = require('../../common/wallPaper/acg,gy_' + this.imgArr[this.imgIndex++] + '.jpg')
    },
    setSite () {
      console.log('setting!')
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .wall
    position relative
  .icon
    position fixed
    bottom 50px
    right 15px
    color grey
    font-size 25px
    cursor pointer
  i
    display block
    margin-top 5px
    &:hover
      color white
  img
    background-size cover
    background-repeat: no-repeat
    background-position: center
    left 0px
    top 0px
    width auto
    height auto
    position fixed
</style>
