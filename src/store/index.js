import { Store } from 'vuex'
import Axios from 'axios'

const store = new Store({
  state: {
    user: 'default'
  },
  mutations: { // Synchronous
    setUser (state, payload) {
      state.user = payload
    }
  },
  actions: { // Asynchronous
    async changeUser (state, payload) {
      const ret = await Axios.get('https://randomuser.me/api/')
      const user = ret.data.results[0].name.first
      state.commit('setUser', user)
    }
  },
  getters: {
    getUser: state => state.user
  }
})

export default store
