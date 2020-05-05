<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>
export default {
  name: 'app',
  data() {
    return {
      msg: 'app'
    }
  }
}
</script>
<style lang="less" scoped>
  #app {
    height: 400px;
    background-color: pink;
  }
</style>
