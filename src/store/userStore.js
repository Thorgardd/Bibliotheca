import { createStore } from 'vuex'

const userStore =  createStore({
  state: {
    userEmail: "",
    userPassword: "",
    isUserAuth: false
  },
  getters: {
    getUserEmail: (state) => {
      return state.userEmail;
    },
    getUserPassword: (state) => {
      return state.userPassword;
    },
    getIsUserAuth: () => {

    }
  },
  mutations: {
    setUserCredentials: (state, payload) => {
      state.userEmail = payload.userEmail;
      state.userPassword = payload.userPassword;
    },
    setIsUserAuth: (state, payload) => {
      /*state.isUserAuth = CheckAuth();*/
      state.isUserAuth = payload
    }
  },
  actions: {
  },
  modules: {
  }
})

export default userStore;