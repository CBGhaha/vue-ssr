<template>
  <div id='page2'>
    <div class='title'>{{name}}</div>
    <ul>
      <li class="lis" v-for="(value,index) in initAjax.ajax1.data.userNewsJson" :key="index">
          <img class='imgs' :src="value.coverImage"/>
      </li>
    </ul>
  </div>
</template>
<style scoped>
  .lis{display: inline-block;}
  .imgs{width: 100px;height: 50px}
  .title{margin-bottom: 30px}
</style>
<script>
  import {mapGetters, mapActions} from 'vuex';
  export default{
    name:'page2',
    data(){
      return {
        name: "page2",
      }
    },
    computed:{
      ...mapGetters(['initAjax']),
    }
  }
</script>
