<template>
  <div class="card" style="width: 400px">
    <img
      class="card-img-top"
      style="width: 100px; margin: 0 auto"
      src="@/assets/logo.png"
      alt="Card Player"
    />
    <div class="card-body">
      <h4 class="card-title">{{ nombre }}</h4>
      <button
        class="btn btn-success btn-block"
        @click="lanzaDadoJugador(posicion)"
      >
        Lanza el Dado
      </button>
      <div v-if="posicion == 1">Resultado: {{ valorJugadorUno }}</div>
      <div v-else>Resultado: {{ valorJugadorDos }}</div>
    </div>
  </div>
</template>
<script>
import { mapState, mapMutations } from "vuex";
export default {
  props: {
    posicion: {
      type: Number,
      required: true,
      default: 1,
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
    ...mapMutations(["lanzarDado", "lanzaDadoJugador"]),
  },
};
</script>