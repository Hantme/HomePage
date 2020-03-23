<template>
    <div class="site">
      <ul>
        <a :href="site.url" v-for="(site,index) in siteArray" :key="index" >
          <li>
              <div class="edit" v-if="edit"> <!--class on-->
                <div class="remove">
                  <i class="iconfont icon-shanchu1"></i>
                </div>
                <div class="add">
                  <i class="iconfont icon-bianjiqianbixieshuru2"></i>
                </div>
              </div>
              <img :src="site.iconUrl" alt="ICO">
<!--              <i class="el-icon-s-platform" style="top: 50%"></i>-->
          </li>
        </a>
      </ul>

      <i class="el-icon-s-tools" @click="changeEdit"></i>
    </div>
</template>

<script>
export default {
  name: 'bookMark',
  data () {
    return {
      edit: false,
      siteArray: [
        {
          url: 'google.com',
          name: '谷歌',
          iconUrl: 'http://www.google.com/favicon.ico',
          visible: true
        },
        {
          visible: true
        },
        {
          visible: true
        }
      ]
    }
  },
  methods: {
    changeEdit () {
      this.edit = !this.edit
    }
  },
  computed: {
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .site
    display flex
    text-align center
    top 50%
  ul
    margin auto
    width 1000px
    display flex
    flex-wrap wrap
    justify-content center
    margin-top 100px
    font-size: 0;
    a
      width: 104px;
      height: 84px;
      display inline-block
  li
    width: 54px;
    height: 54px;
    margin auto
    padding-top: 0px;
    box-sizing: border-box;
    border-radius: 100px;
    font-size: 16px;
    box-shadow: 0 3px 6px rgba(0,0,0,.1)
    background-color: white
    position: relative
    opacity: 0.8
    transition-duration .4s
    &:hover
      opacity 1
    .edit
      display flex
      justify-content space-between
      opacity 0.9
      font-size: 15px
  .remove
    color #ef605a
    &:hover
      transform scale(1.2)
  .add
    color #4a84d9
    &:hover
      transform scale(1.2)
  img
    width 20px
    height 20px
    position absolute
    top 15px
    margin-left -10px
  .el-icon-s-tools
    position fixed
    bottom 112px
    right 15px
    color grey
    font-size 25px
    cursor pointer
</style>
