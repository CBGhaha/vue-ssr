<template>
  <div id='count2'>
    <input type="text" @input="numChange"/>
    <br>
    <br>
    {{errorMsg}}
  </div>
</template>
<style scoped>

</style>
<script>
  import {mapGetters, mapActions} from 'vuex';
  export default{
    name:'count2',
    data(){
      return {
        name: "count2",
        errorMsg:''
      }
    },
    methods: {
      ...mapActions(['action_count2']),
      numChange:function(e){
        let value=Number(e.target.value);
        console.log(value);
        if(isNaN(value)){
            this.errorMsg='请输入数字';
            return;
        }
      this.action_count2(value||0)
      },

    }
  }

</script>
