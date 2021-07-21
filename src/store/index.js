import { createStore } from 'vuex'
import mutations from './sStore/mutations'
import actions from './sStore/actions'
import getters from './sStore/getters' // ?

const state = {
  cartList: []
}

const store = createStore({
  state,
  mutations,
  actions,
  getters,
  modules: {
  }
})

export default store
