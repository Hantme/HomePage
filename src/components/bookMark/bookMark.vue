<template>
  <div class="site">
    <ul>
      <a :href="site.url" target="_blank" v-for="(site,index) in siteArray" :key="index">
        <li>
          <div class="edit" v-if="edit"> <!--class on-->
            <div class="remove" @click.prevent="remove(site)" title="删除网址">

              <i class="iconfont icon-shanchu1" name></i>

            </div>
            <div class="add" @click.prevent="showBox(site)" title="编辑网址">
              <i class="iconfont icon-bianjiqianbixieshuru2"></i>
            </div>
          </div>
          <img :src="site.url+'/favicon.ico'" alt="">
          <img :src="iconBaseUrl+site.url" alt="">
          <span class="siteName">{{site.name}}</span>
          <!--              <i class="el-icon-s-platform" style="top: 50%"></i>-->
        </li>
      </a>
      <a href="#" v-if="edit" @click="showBox">
        <li class="newSite">
          <i class="el-icon-plus"></i>
          <!--              <i class="el-icon-s-platform" style="top: 50%"></i>-->
        </li>
      </a>
    </ul>
    <transition name="el-zoom-in-center">
      <div class="mask" v-if="box">
        <el-form class="addSite" label-width="80px" >
          <el-form-item label="网址：">
            <el-input v-model.lazy="siteArray[currentIndex].url"></el-input>
          </el-form-item>
          <el-form-item label="名称：">
            <el-input v-model.lazy="siteArray[currentIndex].name"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click.native="add(), showBox(0)">确定</el-button>
            <el-button @click="showBox">取消</el-button>
          </el-form-item>
        </el-form>
      </div>
    </transition>
    <i class="el-icon-s-tools" @click="changeEdit" title="修改收藏夹"></i>
  </div>
</template>

<script>
export default {
  name: 'bookMark',
  data () {
    return {
      edit: false,
      reEdit: false,
      box: false,
      currentIndex: 0,
      iconBaseUrl: 'http://www.google.com/s2/favicons?domain=',
      siteArray: [{
        url: 'http://www.google.com',
        name: '谷歌'
      },
      {
        url: 'http://www.bilibili.com',
        name: '哔哩哔哩'
      },
      {
        url: 'http://www.pixiv.net',
        name: 'PIXIV'
      }]
    }
  },
  mounted () {
    if (localStorage.getItem('BookMarks')) {
      this.siteArray = JSON.parse(localStorage.getItem('BookMarks'))
    }
  },
  methods: {
    changeEdit () {
      this.edit = !this.edit
    },
    showBox (e) {
      if (e.__ob__) {
        this.reEdit = true
        this.currentIndex = this.siteArray.findIndex(item => item.name === e.name)
        this.box = !this.box
      } else {
        this.reEdit = false
        this.formLabelAlign = {}
        this.box = !this.box
      }
    },
    remove (e) {
      this.$confirm('确定删除网址?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.siteArray.splice(this.siteArray.findIndex(item => item.name === e.name), 1)
        this.$message({
          type: 'success',
          message: '删除成功!'
        })
      }).catch(() => {
      })
    },
    add () {
      if (!this.reEdit) {
        this.siteArray.push({
          url: '',
          name: ''
        })
        this.currentIndex = 0
      }
    }
  },
  watch: {
    siteArray: {
      handler (newValue, oldValue) {
        localStorage.setItem('BookMarks', JSON.stringify(this.siteArray))
      }
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .siteName
    font-size 12px
    color #eeeeee
    width 60px
    position absolute
    white-space nowrap
    text-shadow 1px 1px 3px black
    transform translateX(-30px)
    bottom -15px
  .site
    display flex
    text-align center
    top 50%

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

    .addSite
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

  ul
    margin auto
    width 1000px
    display flex
    flex-wrap wrap
    justify-content center
    margin-top 100px
    font-size: 0

    a
      width: 104px;
      height: 84px;
      display inline-block

  li
    width: 54px;
    height: 54px;
    margin auto
    padding-top: 0
    box-sizing: border-box;
    border-radius: 100px;
    font-size: 16px;
    box-shadow: 0 3px 6px rgba(0, 0, 0, .1)
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

  .newSite
    padding-top 18%

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

    &:hover
      transform scale(1.2)
</style>
