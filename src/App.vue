<template>
  <div id="app">
    <div style='margin-top:100px'></div>
    <div class='cell'><Count1/></div>+
    <div class='cell'><Count2/></div>=
    <div class='cell'><span>{{count1+count2}}</span></div>
    <router-view></router-view>
    <Ll/>
  </div>
</template>

<script>
import Count1 from './components/count1.vue';
import Count2 from './components/count2.vue';
import Ll from './components/links.vue';
import {mapGetters, mapActions} from 'vuex';
export default {
  name: 'app',
  components:{
    Count1,
    Count2,
    Ll
  },
  computed: {
      ...mapGetters(['count1','count2'])
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
.cell{display: inline-block;vertical-align: top;}
</style>
