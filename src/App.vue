<template>
  <div id="app">
    <mainPage></mainPage>
  </div>

</template>

<script>
import mainPage from './components/mainPage/mainPage'
export default {
  name: 'Home',
  components: {
    mainPage
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  #app
    width: 100%;
    height: 100%;
    padding 0
    margin 0
    min-width: 1000px;
    min-height: 500px;
    background-color: #f3f3f3;
    position relative
    overflow hidden
  body
    font-family MicroSoft YaHei
    color #333333
    font-size 16px
    line-height:1.75
</style>
