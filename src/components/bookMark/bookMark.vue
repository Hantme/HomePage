<template>
    <div class="site">
      <ul>
        <a href="#" v-for="(item,index) in siteArray" :key="index">
          <li>
              <i class="el-icon-s-platform"></i>
          </li>
        </a>
      </ul>
    </div>
</template>

<script>
export default {
  name: 'bookMark',
  computed: {
    siteArray () {
      // const site[]
      return 15
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .site
    overflow hidden
    position relative
    width 1000px
    top 50%
    text-align center
    margin-left 8%
  ul
    margin-top 100px
    list-style: none;
    font-size: 0;
  li
    list-style: none;
    width: 54px;
    height: 54px;
    padding-top: 17px;
    box-sizing: border-box;
    border-radius: 100px;
    font-size: 16px;
    margin: 0px auto 5px auto;
    box-shadow: 0 3px 6px rgba(0,0,0,.1);
    background-color: white;
    position: relative;
    opacity: 0.6
  li:hover
    opacity 1
  a
    width: 104px;
    height: 94px;
    overflow hidden
    display inline-block
</style>
