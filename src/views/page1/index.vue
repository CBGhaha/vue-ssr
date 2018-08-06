<template>
  <div id='page1'>
      <div class='title'>{{name}}</div>
      <div class='cell'><Count1></Count1></div>
      <span>+</span>
      <div class='cell'><Count2></Count2></div>
      <span>=</span>
      <div class='cell'><span>{{count1+count2}}</span></div>
  </div>
</template>
<style scoped>
.cell{display: inline-block;vertical-align: top;}
.title{margin-bottom: 30px}
</style>
<script>
  import {mapGetters, mapActions} from 'vuex';
  import Count1 from '../../components/count1.vue';
  import Count2 from '../../components/count2.vue';
  export default{
    asyncData({store}){
       return store.dispatch('action_ajax1',{level:'country'})
    },
    data(){
      return {
        name: "page1",
      }
    },
    components:{
      Count1,
      Count2
    },
    methods:{
      ...mapActions(['action_ajax1']),
    },
    computed: {
        ...mapGetters(['count1','count2'])
    },
  }

</script>
