<template>
  <div id="app">
    <h1>Juega a los dados</h1>
    <div>
      <Jugador :posicion="1" nombre="Jesus"></Jugador>
      <Jugador :posicion="2" nombre="Andrés"></Jugador>
    </div>
  </div>
</template>

<script>
import Jugador from "@/components/Jugador";
export default {
  name: "app",
  components: {
    Jugador
  },
};
</script>

<style lang="stylus">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
