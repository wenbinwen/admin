<template>
  <div id="app_login">
    测试啊-------------{{this.$store.state.count}}
    <button @click="incCount()">点击</button>
  </div>
</template>

<script>
  //引入
  import store from '../store/store.js'
  export default {
    data(){
      return {
        msg:'test'
      }
    },
    store,
    methods:{
      incCount(){
        this.$store.commit('incCount');
      }
    }
  }
</script>

<style>

</style>
