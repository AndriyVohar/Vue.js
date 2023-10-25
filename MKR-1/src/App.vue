<template>
  <div>
    <router-link to="/" class="link-to-add">Головна</router-link>
    <router-link to="/add" class="link-to-add">Add new enterprise</router-link>
    <router-link to="/about" class="link-to-add">About</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
// В усіх завданнях розробити Vue додаток з такими функціональними можливостями:
// • ========	створення компонентів (обов»язково окремо для відображення одного елемента даних і списку) - 20;
// • ========	фільтрація елементів даних – 5;
// • ========	вилучення елементів даних - 5;
// • ========	роутинг (принаймні 3 сторінки-компоненти) - 10;

// 4.	Довідник покупця. База торгівельних підприємств міста: назва, адреса та телефон, спеціалізація, час роботи.
// Організувати вибір магазину за довільним запитом.

export default {
  name: "App",
  components: {},
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
