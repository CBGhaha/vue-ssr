<template>
  <div id='page2'>
    {{name}}
  </div>
</template>
<style scoped>
</style>
<script>
  import {mapGetters, mapActions} from 'vuex';
  export default{
    data(){
      return {
        name: "page2",
      }
    },
  }
</script>
