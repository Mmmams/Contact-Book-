import { createStore } from 'vuex'

export default createStore({
  state: {
    contacts : [
      {
        id : 0,
        name : 'Sergey',
        phone : '+375447938612',
        email : 'bymamykin@gmail.com',
        birthday : '1999-08-25',
      }
    ]
  },
  mutations: {
    deleteContact(state, i){
      state.contacts.splice(i,1);
    }
  },
  actions: {
   deleteContact({ commit }, i){
    commit('deleteContact', i)
   }
  },
  modules: {
  },
  getters: {
    allContacts(state){
      return state.contacts
    },
    definedContact(state,idx){
      return state.contacts[idx];
    }
  }
})
