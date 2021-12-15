import { createStore } from 'vuex'

export default createStore({
  state: {
    menuList:[]
  },
  getters: {
    menuList: (state)=>{return state.menuList}
  },
  mutations: {
    setMenuList(state, menuList){
      state.menuList = menuList;
    }
  },
  actions: {
  },
  modules: {
  }
})
