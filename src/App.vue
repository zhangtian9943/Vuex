<template>
  <div id="app">
    <img src="./assets/logo.png">
    <vuexdemo>
    </vuexdemo>
    <testdemo>
    </testdemo>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import vuexdemo from './components/vuexDemo'
import testdemo from './components/testDemo'

export default {
  name: 'App',
  components: {
    HelloWorld,
    vuexdemo,
    testdemo
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
