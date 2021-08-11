<!--View principal de la cual van a depender todas las demás-->
<template>
  <div id="app">
<!-- ':inicio' es una propiedad personalizada, se recoge en la propiedad "props" del componente, el valor a la derecha del igual es el valor que queremos pasar   -->
<!--    En el caso de querer pasar un String como tal, debemos usar comillas dobles y dentro comillas simples-->
    <NavBar :inicio="'Inicio'"></NavBar>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
<script>
/*
Las instrucciones comentadas aquí abajo sirven para importar y usar posteriormente componentes
En el caso del componente 'NavBar' no es necesario dado que está registrado globalmente en "main.js"
 */
// import NavBar from "@/components/NavBar";
export default {
  /*
  En caso de necesitar importar y exportar algun componente, realizar como aqui abajo
   */
  // components: {NavBar,...,} Los puntos suspensivos se sustituirían por componentes importados más arriba
}
</script>