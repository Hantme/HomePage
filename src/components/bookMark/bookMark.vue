<template>
  <div class="site">
    <div id="newSiteSetBox" v-show="0" style="margin-top: -150px;">
      <div class="newSiteSetListBox" style="margin-top:30px; ">
        <div class="nssBoxName">网址</div>
        <input id="nssUrlInput" maxlength="3000" type="text" placeholder="输入或粘贴网址url" name="">
        <div id="nssZhuaqu" title="如果输入的网址根目录没有图标将随机分配默认图标">获取图标</div>

      </div>
      <div class="newSiteSetListBox">
        <div class="nssBoxName">名称</div>
        <input id="nssNameInput" maxlength="50" type="text" placeholder="鼠标停留时显示的网站名称" name="">
      </div>
      <div class="newSiteSetListBox">
        <div class="nssBoxName">图标</div>
        <input id="nssIconInput" maxlength="3000" type="text" placeholder="填入网站图标url，建议正方形或圆形" name="">
        <div id="nssIconBox">
          <div><img id="nssIcon" src="images/white0.5.png"></div>
        </div>

      </div>
      <div id="nssConfirmBox">
        <div id="nssCancel">取消</div>
        <div id="nssConfirm">确认</div>
      </div>
    </div>
    <ul>
      <a :href="site.url" target="_blank" v-for="(site,index) in siteArray" :key="index">
        <li>
          <div class="edit" v-if="edit"> <!--class on-->
            <div class="remove" @click.prevent="remove(site)">
              <el-button
                plain
                @click="open1" class="btn">
                <i class="iconfont icon-shanchu1" name></i>
              </el-button>
            </div>
            <div class="add" @click.prevent="changeSite(site)">
              <i class="iconfont icon-bianjiqianbixieshuru2"></i>
            </div>
          </div>
          <img :src="iconBaseUrl+site.url" alt="ICO">
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
        <el-form class="addSite" label-width="80px" :model="formLabelAlign">
          <el-form-item label="网址：">
            <el-input v-model="formLabelAlign.url"></el-input>
          </el-form-item>
          <el-form-item label="名称：">
            <el-input v-model="formLabelAlign.name"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click.native="add(), showBox(), open1()">确定</el-button>
            <el-button @click="showBox">取消</el-button>
          </el-form-item>
        </el-form>
      </div>
    </transition>
    <i class="el-icon-s-tools" @click="changeEdit" name="修改收藏夹"></i>
  </div>
</template>

<script>
export default {
  name: 'bookMark',
  data () {
    return {
      edit: false,
      box: false,
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
      }],
      formLabelAlign: {
        name: '',
        url: ''
      }
    }
  },
  methods: {
    open1 () {
      this.$notify({
        message: 'Success！',
        type: 'success'
      })
    },
    changeEdit () {
      this.edit = !this.edit
    },
    showBox () {
      this.formLabelAlign = {}
      this.box = !this.box
    },
    remove (e) {
      console.log('rd: closeVideo -> item', e)
      this.siteArray.splice(this.siteArray.findIndex(item => item.name === e.name), 1)
    },
    changeSite (e) {
      console.log('rd: ThisVideo -> item', e, this.siteArray.findIndex(item => item.name === e.name))
      let index = this.siteArray.findIndex(item => item.name === e.name)
      this.showBox()
      this.formLabelAlign.name = this.siteArray[index].name
      this.formLabelAlign.url = this.siteArray[index].url
    },
    add () {
      this.siteArray.push({
        url: this.formLabelAlign.url,
        name: this.formLabelAlign.name
      })
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .btn
    border none
    width 0
    height 0
    padding 0
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

  #siteSetBlackBg {
    width: 100%;
    height: 100%;
    position: fixed;

    z-index: 900;
    display: none;
  }

  #newSiteSetBox {
    width: 500px;
    height: 300px;
    border-radius: 4px;
    background-color: white;
    position: absolute;
    margin-top: -200px;
    margin-left: -250px;
    top: 50%;
    left: 50%;
    box-shadow: 0 4px 10px rgba(0, 0, 0, .3);
    font-size: 16px;
  }

  #newSiteSetBox input::-webkit-input-placeholder { /*WebKit browsers*/

    color: #cccccc;

  }

  #newSiteSetBox input::-moz-input-placeholder { /*Mozilla Firefox*/

    color: #cccccc;

  }

  #newSiteSetBox input::-ms-input-placeholder { /*Internet Explorer*/

    color: #cccccc;

  }

  .newSiteSetListBox {
    width: 400px;
    height: 49px;
    margin: 10px 0 0 50px;
    background-color:;
    border-bottom: 1px solid #cccccc;
  }

  .nssBoxName {
    color: #4d4d4d;
    width: 40px;
    height: 49px;
    line-height: 47px;
    background-color:;
    float: left;
  }

  #nssUrlInput {
    font-size: 16px;
    width: 220px;
    padding-left: 10px;
    height: 49px;
    float: left;
    border: 0 none;
    outline: none;
  }

  #nssNameInput {
    font-size: 16px;
    width: 340px;
    padding-left: 10px;
    height: 49px;
    float: left;
    border: 0 none;
    outline: none;
  }

  #nssIconInput {
    font-size: 16px;
    width: 300px;
    padding-left: 10px;
    height: 49px;
    float: left;
    border: 0 none;
    outline: none;
  }

  #nssZhuaqu {
    font-size: 14px;
    color: #4d4d4d;
    width: 120px;
    height: 30px;
    border-radius: 50px;
    text-align: center;
    border: 1px solid #cccccc;
    float: right;
    line-height: 30px;
    margin-top: 9px;
    cursor: pointer;
  }

  #nssZhuaqu:hover {
    border: 1px solid #b3b3b3;
  }

  #nssIconBox {
    width: 40px;
    height: 40px;
    border-radius: 50px;
    border: 1px solid #cccccc;
    float: right;
    margin-top: 0px;
  }

  #nssIconBox div {
    width: 20px;
    height: 20px;
    border-radius: 4px;
    overflow: hidden;

    margin: 10px 0 0 10px;
  }

  #nssIconBox div img {
    width: 20px;
  }

  #nssConfirmBox {
    width: 260px;
    height: 40px;
    background-color:;
    position: absolute;
    bottom: 26px;
    left: 50%;
    margin-left: -130px;
    font-size: 16px;
  }

  #nssConfirm {
    width: 120px;
    height: 40px;
    cursor: pointer;
    background-color: #4489f6;
    border-radius: 4px;
    color: white;
    float: left;
    text-align: center;
    line-height: 40px;
    margin-left: 20px;
  }

  #nssConfirm:hover {
    background-color: #2c7bf6;
  }

  #nssCancel {
    width: 118px;
    height: 38px;
    border: 1px solid #cccccc;
    cursor: pointer;
    background-color: white;
    border-radius: 4px;
    color: #333333;
    float: left;
    text-align: center;
    line-height: 40px;
  }

  #nssCancel:hover {
    border: 1px solid #b3b3b3;
  }
</style>
