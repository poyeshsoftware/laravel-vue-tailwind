import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import state from './state'
import mutations from './mutations'
import getters from './getters'
import auth from "./auth";

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {auth},

    state,

    getters,

    actions,

    mutations
})









