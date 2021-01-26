<template>
  <div id="app">
    <!-- <router-view  @authenticated="setAuthenticated"/> -->
    <router-view></router-view>
  </div>
    
</template>

<script>
export default {
  name: 'App',
    data() {
        return {
            // authenticated: false,
        }
    },
    // mounted() {
    //     if (!this.authenticated) {
    //         this.$router.replace({ name: "Login" });
    //     }
    // },
    methods: {
        setAuthenticated(status) {
            this.authenticated = status;
        }
    }
}
</script>

<style lang="scss">
body {
  margin: 0;
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
}

</style>
