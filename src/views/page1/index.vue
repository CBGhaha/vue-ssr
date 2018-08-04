<template>
  <div id='page1'>
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
        name: "page1",
      }
    },
  }

</script>
