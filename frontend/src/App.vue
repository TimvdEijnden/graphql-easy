<template>
  <div id="app">
    <categories-list></categories-list>
  </div>
</template>

<script>
import CategoriesList from './components/CategoriesList.vue'

export default {
  name: 'App',
  components: {
    CategoriesList
  }
}
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
