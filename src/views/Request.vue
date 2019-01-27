<template>
    <div id="requestData">
      <button @click="getData()">请求数据</button>
    </div>
</template>

<script>
    export default {
        data() {
          return {
            msg: 'This is a Request Test!'
          }
        },
      methods: {
          getData(){
            var api = 'http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page=1';
            this.$http.get(api).then(function (response) {
              console.log(response);
            },function (error) {
              console.log(error);
            });
          }
      }
    }
</script>

<style scoped>

</style>
