import { createStore } from 'vuex'

export default createStore({
  state: {
    lessons: [
      { id: 1, name: "Українська мова", selected: false, teacher: null},
      { id: 2, name: "Математика", selected: false, teacher: null},
      { id: 3, name: "Географія", selected: false, teacher: null},
      { id: 4, name: "Історія", selected: false, teacher: null},
      { id: 5, name: "Хімія", selected: false, teacher: null},
      { id: 6, name: "Фізика", selected: false, teacher: null},
    ],
    teachers: [
      { id: 1, name: "Katya" },
      { id: 2, name: "Nina" },
      { id: 3, name: "Andriy" },
      { id: 4, name: "Olena" },
      { id: 5, name: "Ivan" },
    ],
    user:null,
  },
  getters: {
    lessons: ({lessons})=> lessons,
    teachers: ({teachers})=> teachers,
  },
  mutations: {
    updateUser(state, newName){
      state.user = newName
    }
  },
  actions: {
  },
  modules: {
  }
})
