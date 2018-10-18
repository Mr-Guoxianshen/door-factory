<template>
  <div class="c-header-full">
    <div class="c-header-top">
      <div class="c-h-t-l">您好, 欢迎光临本网站!</div>
      <div class="c-h-t-r">
        <a href="/">加入收藏</a>
        <a href="/">联系我们</a>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'c-header-top',
    data () {
      return {

      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .c-header-top {
    height: 30px;
    line-height: 30px;
    width: 1200px;
    margin: 0 auto;
  }
  .c-h-t-l {
    float: left;
  }
  .c-h-t-r {
    float: right;
  }
  .c-h-t-r a {
    font-size: 14px;
    color: rgb(102, 102, 102);
    text-decoration: none;
    outline: none;
    padding: 0 5px;
  }
</style>
