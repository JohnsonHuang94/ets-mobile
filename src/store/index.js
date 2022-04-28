import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
    state(){
        return {
            msg: 'hello'
        }
    },
    mutations: {
        changeMsg(state, payload){
            state.msg = payload
        }
    },
    getters: {},
    actions: {},
    modules: {}
})

export default store