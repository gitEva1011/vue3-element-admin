<template>
  <div id="app">
    <div @click="change">首页</div>
  </div>
</template>

<script>
// import index from './views/index'

export default {
  name: 'Layout',
  components: {
    // index
  },
  methods: {
    change(){
      this.$router.push({path: "/redirect"})
    }
  }
}
</script>

<style>

</style>
