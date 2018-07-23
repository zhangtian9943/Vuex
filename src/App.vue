<template>
  <div id="app">
    <img src="./assets/logo.png">
    <vuexdemo/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import vuexdemo from './components/vuexDemo'

export default {
  name: 'App',
  components: {
    HelloWorld,
    vuexdemo
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
