<template>
  <div class="main">
    <wallPaper></wallPaper>
    <switchLogo></switchLogo>
    <searchEngine class="search"></searchEngine>
    <bookMark></bookMark>
  </div>
</template>

<script>
import bookMark from '../bookMark/bookMark'
import wallPaper from '../wallPaper/wallPaper'
import switchLogo from '../search/switchLogo'
import searchEngine from '../search/searchEngine'

export default {
  name: 'mainPage',
  components: {
    bookMark,
    wallPaper,
    switchLogo,
    searchEngine
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  main
    position relative
  .search
    color: #2c3e50;
    width: 600px;
    font-family: Source Sans Pro, Helvetica, sans-serif;
    text-align: center;
    position relative
    left: 25%;
</style>
