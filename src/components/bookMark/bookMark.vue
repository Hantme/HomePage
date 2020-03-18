<template>
    <div>
      <ul>
        <a href="#">
          <li>
            <img src="../../common/wallPaper/acg,gy_01.jpg" alt="收藏">
          </li>
        </a>
        <a href="#">
          <li>
            <img src="../../common/wallPaper/acg,gy_02.jpg" alt="收藏">
          </li>
        </a>
        <a href="#">
          <li>
            <img src="../../common/wallPaper/acg,gy_03.jpg" alt="收藏">
          </li>
        </a>
        <a href="#">
          <li>
            <img src="../../common/wallPaper/acg,gy_04.jpg" alt="收藏">
          </li>
        </a>
      </ul>
    </div>
</template>

<script>
export default {
  name: 'bookMark'
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  div
    overflow hidden
    position absolute

  ul
    margin-top 80px
  li
    height 50px
    width 50px
    padding 0px
    border-radius 25px
    box-shadow black 5px
    overflow hidden
    display inline-block
  a
    height 30px
    width 30px
</style>
