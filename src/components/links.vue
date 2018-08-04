<template>
  <div id='links'>
    <ul>
      <router-link to="/">page1</router-link>
      <router-link to="/page2">page2</router-link>
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
