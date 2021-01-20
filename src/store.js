import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    counter: 1,
    valorJugadorUno: 0,
    valorJugadorDos: 0
  },
  mutations: {
    lanzarDado (state) {
      state.counter++
    },
    lanzaDadoJugador (state, newData) {
      if(newData === 1) {
        state.valorJugadorUno = Math.floor((Math.random()*6) + 1);
      } else {
        state.valorJugadorDos = Math.floor((Math.random()*6) + 1);
      }
      
    },
  }
})
