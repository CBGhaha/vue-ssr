<template>
  <div id='count1'>
    <input type="text" @input="numChange"/>
    {{errorMsg}}
  </div>
</template>
<style scoped>

</style>
<script>
  import {mapGetters, mapActions} from 'vuex';
  export default{
    name:'count1',
    data(){
      return {
        name: "count1",
        errorMsg:''
      }
    },
    methods: {
      ...mapActions(['action_count1']),
      numChange:function(e){
        let value=Number(e.target.value);
        console.log(value);
        if(isNaN(value)){
            this.errorMsg='请输入数字';
            return;
        }
      this.action_count1(value||0)
      },

    }
  }

</script>
