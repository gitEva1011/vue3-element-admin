<template>
  <div id="app">
    登录页
    <div @click = "handleLogin">登录</div>

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
        handleLogin() {
                this.$store.dispatch('user/login', this.loginForm)
                    .then(() => {
                    this.$router.push({ path: '/' })
                    })
                    .catch(() => {
                    })
        },
  }
}
</script>

<style>

</style>
