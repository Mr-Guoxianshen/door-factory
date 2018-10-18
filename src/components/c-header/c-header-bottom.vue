<template>
  <div class="c-header-full">
    <div class="c-header-bottom">
      <h1><a href="/"><img src="../../assets/logo_name.jpg"></a></h1>
      <p>全国统一服务热线<br /><span>13712345678</span></p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'c-header-bottom',
    data () {
      return {

      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .c-header-bottom {
    height: 110px;
    width: 1200px;
    margin: 0 auto;
  }
  .c-header-bottom h1 {
    float: left;
    padding: 25px 19px 0 0;
    width: 400px;
    font-size: 0;
  }
  .c-header-bottom a {
    display: inline-block;
    width: 120px;
  }
  .c-header-bottom a img {
    width: 100%;
  }
  .c-header-bottom p {

  }
</style>
