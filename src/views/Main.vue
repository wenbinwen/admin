<template>
  <div id="main">
      main----{{this.$store.state.count}}
  </div>

</template>

<script>
  import store from '../store/store.js'

  export default {
    data(){
      return{
        msg:'HHH'
      }
    },
    store,
	}

</script>

<style scoped>

</style>
