<template>
  <div id="app">
    {{msg}}
    <!--使用-->
    <hello></hello>
    <login></login>
    <req></req>
    <mainT></mainT>

  </div>
</template>

<script>
  //1. 引入组件
  //2. 挂载组件
  //3. 在模板中使用
  import Login from './views/Login.vue';
  import MainT from './views/Main.vue';
  import Hello from './components/HelloWorld.vue';
  import re from './views/Request.vue';
  export default {
    data(){
      return {
        msg : '测试组件'
      }
    },
    components:{
      'login':Login,
      'hello':Hello,
      'mainT':MainT,
      'req':re
    }
  }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
