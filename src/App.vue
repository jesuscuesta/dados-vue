<template>
  <div id="app">
    <h1>Juega a los dados</h1>
    <div style="display:flex;">
      <Jugador :posicion="1" nombre="Jesus" style="margin: 40px;"></Jugador>
      <Jugador :posicion="2" nombre="Andrés" style="margin: 40px;"></Jugador>
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
