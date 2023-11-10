<!-- В усіх завданнях розробити Vue додаток з такими функціональними можливостями:
- створення компонентів (обов»язково окремо для відображення одного елемента
даних і списку) - 20;
- фільтрація елементів даних – 5;
- вилучення елементів даних - 5;
- роутинг (принаймні 3 сторінки-компоненти) - 10;
4. Довідник покупця. База торгівельних підприємств міста: назва, адреса та телефон,
спеціалізація, час роботи. Організувати вибір магазину за довільним запитом. -->
<template>
  <div>
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link :to="{name: 'companies'}">Companies</router-link> |
      <router-link to="/about">About</router-link>
    </nav>
    <router-view/>    
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
