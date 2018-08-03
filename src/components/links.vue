<template>
  <div id='links'>
    <ul>
      <router-link to="/">demo1</router-link>
      <router-link to="/page2">demo2</router-link>
    </ul>
  </div>
</template>
<style scoped>

</style>
<script>
  export default{
    name: 'links',
    data(){
      return {
        name:11
      }
    },
  }

</script>
