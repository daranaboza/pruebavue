<!--Vista simple-->
<template>
  <div>
    <h1>Hola chavales</h1>
    <br>
<!--    Al usar 'v-bind:' o ':' en un atributo html, las variables de JS no hacen falta ponerlas entre "{{}}"-->
<!--    @ == v-on => @mouseover == v-on:mouseover-->
<!--    : == v-bind:atributo- => :href="value" == v-bind:href="value"-->
<!--    Mas info => https://es.vuejs.org/v2/guide/events.html -->
    <input @click="sumaAlBoton" type="button" :value="'Has clickado '+ numeroVeces +' veces'">

  </div>
</template>

<script>
export default {
  name: "PruebaView",
  data(){
    return{
      numeroVeces:0
    }
  },
  //Aqí se declaran los métodos o funciones
  methods:{
    sumaAlBoton:function (){
      this.numeroVeces+=1
    }
  },
  //Otro "tipo de funciones" la mayor diferencia es que sus resultados se cachean y solo se ejecutan cuando ha habido un cambio en sus propiedades
  //Nota: Se puede observar en algunas ocasiones que se usa como si fuera la propiedad "data"
  // Mas info=> https://es.vuejs.org/v2/guide/computed.html
  computed:{

  }
}
</script>

<style scoped>

</style>