<template>
  <div id='page1'>
      {{name}}
      <router-link to="/page2">page2</router-link>
  </div>
</template>
<style scoped>

</style>
<script>
  import {mapGetters, mapActions} from 'vuex';
  export default{
    data(){
      return {
        name: "page1",
      }
    },
  }

</script>
