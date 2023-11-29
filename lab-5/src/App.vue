<template>
  <header>
    <nav class="header-left">
      <router-link to="/home">Головна</router-link> |
      <router-link :to="{path: '/lesson/select'}">Уроки</router-link>
    </nav>
    <div class="header-right">
      <router-link to="/auth">Вхід</router-link>
      <a @click="authOut()" href="#" style="margin-left:20px;">Вихід</a>
    </div>
  </header>
  <router-view class="router-view"/>
</template>
<script>
export default{
  methods: {
    authOut() {
      window.username = null;
    }
  },
}
</script>

<style>
body {
  font-family: Arial, sans-serif;
  background-color: #f4f4f4;
  margin: 0;
  display: flex;
  justify-content: center;
  height: 100vh;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
}
header{
  display: flex;
}
.header-right{
  display: flex;
  margin-left: 10vw;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

.router-view{
  margin-top: 50px;
  margin-left: 50px;
}
</style>
