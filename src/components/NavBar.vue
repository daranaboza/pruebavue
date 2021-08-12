<!--Componente-->
<template>
  <div id="nav">
    <!--    Primera manera de declarar rutas(no recomendable)-->
<!--    "inicio" es una variable, su valor viene de 'App.vue' cuando se renderiza este componente (NavBar.vue) y es declarado o recogido en "props:"-->
    <router-link to="/">{{ inicio }}</router-link>
    |
    <router-link to="/about">About</router-link>
    |
    <!--    Segunda manera de declarar rutas(recomendable)-->
<!--    "tituloPrueba" es una variable, tanto la variable como su valor están definidos en "data()"-->
    <router-link :to="{name : 'PruebaView'}">{{ tituloPrueba }}</router-link>
    <p>{{user}}</p>
  </div>
</template>

<script>
/*
La funcion export nos permite usar el componente en otra parte de nuestra app
Es recomendable ponerle el mismo nombre/name al componente que le hemos puesto al fichero
En "props" especificamos los atributos pasados al componente desde donde se declara
La "propiedad" 'data' en los componentes debe ser una función para que cada componente apunte a sus propios datos
*/
export default {
  name: "NavBar",
  props:['inicio'],
  data() {
    return {
      ruta1: '/ruta1',
      ruta2: '/ruta2',
      tituloPrueba:'Prueba',
    }
  },
  methods:{

  },
  computed:{
    /*
    Otra manera de definir la 'data' de nuestro componente.
    En esta ocasión al usar el 'state' del 'store' de 'Vuex' es necesario hacerlo así para que el valor(en este caso el nombre/name) de 'user' cambie de manera reactiva
     */
    user(){
      return  this.$store.state.user.name
    }
  }

}
</script>

<!--El atributo "scoped" significa que los estilos aquí declarados solo afectarán a este componente-->
<!--En el html renderizado debería aparecer algo asi => data-v129485781, lo cual significa que está "scopeado" el estilo para ese componente-->
<style scoped>

</style>