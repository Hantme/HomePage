<template>
  <div  :style="backgroundDiv" @click="changePic">
  </div>
</template>

<script>
export default {
  name: 'wallPaper',
  data: function () {
    return {

      backgroundDiv: {

        backgroundImage: 'url(' + require('../../common/wallPaper/acg,gy_05.jpg') + ')',

        backgroundRepeat: 'no-repeat',

        backgroundSize: '100% 100%'

      }
    }
  },
  methods: {
    changePic () {

    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  div
    left 0px
    top 0px
    width 100%
    height 100%
    position fixed
</style>
