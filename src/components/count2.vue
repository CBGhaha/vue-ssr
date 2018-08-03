<template>
  <div id='page2'>
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
    data(){
      return {
        name: "page2",
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
