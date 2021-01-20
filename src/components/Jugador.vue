<template>
  <div>
    <h2>{{nombre}}</h2>
    <div>Imagen del jugador</div>
    <button class="btn btn-success btn-block" @click="lanzaDadoJugador(posicion)">
      Lanza el Dado
    </button>
    <div v-if="posicion==1">Resultado: {{ valorJugadorUno }}</div>
    <div v-else>{{ valorJugadorDos }}</div>
  </div>
</template>
<script>
import { mapState, mapMutations } from "vuex";
export default {
  props: {
    posicion: {
      type: Number,
      required: true,
      default: 1
    },
    nombre: {
      type: String,
      required: true,
    },
  },
  computed: {
    ...mapState(["counter", "valorJugadorUno", "valorJugadorDos"]),
  },
  methods: {
    ...mapMutations([
      "lanzarDado",
      "lanzaDadoJugador"
    ]),
  },
};
</script>