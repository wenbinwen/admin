import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
//用于存储数据
var state = {
  count : 1,
}
//改变state数据
var mutations={

  incCount(){

    ++state.count;
  }
}
//实例化vuex
const store = new Vuex.Store({
  state,
  mutations
})

export default store
