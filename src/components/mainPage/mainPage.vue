<template>
  <div class="main">
    <wallPaper></wallPaper>
    <searchEngine></searchEngine>
    <bookMark></bookMark>
  </div>
</template>

<script>
import bookMark from '../bookMark/bookMark'
import wallPaper from '../wallPaper/wallPaper'
import searchEngine from '../search/searchEngine'

export default {
  name: 'mainPage',
  components: {
    bookMark,
    wallPaper,
    searchEngine
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  main
    position absolute
</style>
