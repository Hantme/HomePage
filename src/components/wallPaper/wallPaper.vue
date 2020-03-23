<template>
<!--  <div  :style="backgroundDiv" @click="changePic">-->
<!--  </div>-->
  <div class="wall">
<!--    <div class="bgImg" :style="{backgroundImage:`url(${imgUrl})`}">-->
      <img :src="imgUrl" alt="背景图片">
<!--    </div>-->
    <div class="icon">
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
      imgArr: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10'],
      imgArrIndex: 1,
      imgIndex: 10,
      imgUrl: require('../../common/wallPaper/acg,gy_' + '02' + '.jpg')
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
      this.imgUrl = this.imgArrIndex < 9 ? require('../../common/wallPaper/acg,gy_' + this.imgArr[++this.imgArrIndex] + '.jpg')
        : require('../../common/wallPaper/acg,gy_' + ++this.imgIndex + '.jpg')
      console.log(this.imgArrIndex, this.imgIndex)
    },
    setSite () {
      console.log('setting!')
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
  i
    display block
    margin-top 5px
    &:hover
      color white

</style>
