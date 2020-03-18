<template>
  <div id="app">
    <searchEngine id="search"></searchEngine>
  </div>

</template>

<script>
import searchEngine from './components/search/searchEngine'
export default {
  name: 'Home',
  components: {
    searchEngine
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  #search
    color: #2c3e50;
    width: 600px;
    font-family: Source Sans Pro, Helvetica, sans-serif;
    text-align: center;
    position absolute
    top: 40%;
    left: 50%;
    margin-left: -300px;
    margin-top: -100px;
</style>
