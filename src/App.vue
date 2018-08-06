<template>
  <div id="app">
    <div style='margin-top:100px'></div>
    <router-view></router-view>
    <Ll/>
  </div>
</template>

<script>
import Ll from './components/links.vue';
import {mapGetters, mapActions} from 'vuex';
export default {
  name: 'app',
  components:{
    Ll
  },
}
</script>

<style>
#app {
  font-family: 'miscrosoft yahei','微软雅黑', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
li{list-style: none}
</style>
