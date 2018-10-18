<template>
  <div class="c-header">
    <c-header-top></c-header-top>
    <c-header-bottom></c-header-bottom>
  </div>
</template>

<script>
  import cHeaderTop from './c-header-top';
  import cHeaderBottom from './c-header-bottom';
  export default {
    name: 'c-header',
    components: { cHeaderTop, cHeaderBottom },
    data () {
      return {

      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .c-header {

  }
</style>
