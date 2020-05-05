<template>
  <div id="home">
    {{ msg }}
    <Hello></Hello>
  </div>
</template>
<script>
import Hello from '@/components/Hello.vue'
export default {
  name: 'home',
  data() {
    return {
      msg: 'home'
    }
  },
  components: {
    Hello
  },
  created() {
    // eslint-disable-next-line
    alert('home!');
  }
}
</script>
<style lang="less" scoped>
  #home {
    font-size: 24px;
    color: green;
  }
</style>
