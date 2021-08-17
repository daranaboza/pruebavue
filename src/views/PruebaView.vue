<!--Vista simple-->
<template>
  <div>
    <h1>Hola chavales {{ nameProduct }}</h1>
    <br>
    <!--    Al usar 'v-bind:' o ':' en un atributo html, las variables de JS no hacen falta ponerlas entre "{{}}"-->
    <!--    @ == v-on => @mouseover == v-on:mouseover-->
    <!--    : == v-bind:atributo- => :href="value" == v-bind:href="value"-->
    <!--    Mas info => https://es.vuejs.org/v2/guide/events.html -->
    <input @click="count" type="button" :value="'Has clickado '+ numeroVeces +' veces'">
    <input @click="changeNameUserMutation" type="button" :value="'Cambia nombre en el state'">
    <input @click="changeNameFunctionAction" type="button" :value="'Cambia nombre en el state con un Action'">
    <br>
<!--    Uso de evento personalizado para recoger valores de un componente hijo-->
<!--    <BaseInput label="Prueba"  @pepe="actualiza"></BaseInput>-->
<!--    Uso de v-model para bindear los datos recibidos desde el componente hijo-->
    <BaseInput label="Titulo"  v-model="title"></BaseInput>
    <BaseInput label="Subtitulo"  v-model="subtitle"></BaseInput>
    <p>{{title}}</p>
    <p>{{subtitle}}</p>
    <img :src="chuckIcon">
    <p>{{chuckJoke}}</p>
  </div>
</template>

<script>
import BaseInput from "@/components/BaseInput";
// import axios from "axios";

export default {
  name: "PruebaView",
  components: {BaseInput},
  data() {
    return {
      numeroVeces: 0,
      title:'',
      subtitle:'',
      chuckJoke:'',
      chuckIcon:''

    }
  },
  mounted() {

this.$axiosPropio.get('https://api.chucknorris.io/jokes/random').then((response)=>{
   console.log(response)

   this.chuckJoke= response.data.value;
   this.chuckIcon= response.data.icon_url;
 }).catch((error)=>{
   console.log('No se ha cogido la API: '+ error)
 })

    //Ejemplo API con AJAX

   /* const ajax = new XMLHttpRequest();

    ajax.onload= ()=> {
      console.log(JSON.parse(ajax.responseText).value)
    }


    ajax.open('GET','https://api.chucknorris.io/jokes/random',true);
    ajax.send()*/


  },
  //Aqí se declaran los métodos o funciones
  methods: {
    //Pueden declararse así
    count: function () {
      this.numeroVeces += 1
    },
    //O pueden declararse así (shorthand method)
    changeNameUserMutation() {
      //Esta funcion hace una llamada a una "mutation" de 'Vuex' en el 'store', no es recomendable hacerlo así
      this.$store.commit('CHANGE_USER_NAME');
    },
    changeNameFunctionAction() {
      //Esta función hace una llamada a un "action" de 'Vuex' en el 'store', es la manera recomendable de hacer cambios en el 'store'
      this.$store.dispatch('changeNameAction')
    },
    //Ejemplo de uso de función personalizada para actualizar 'title' en la vista
// actualiza(value){
//       this.title= value
// }
  },
  //Otro "tipo de funciones" la mayor diferencia es que sus resultados se cachean y solo se ejecutan cuando ha habido un cambio en sus propiedades, en el caso de los 'state' de 'Vuex' => ver 'computed en NavBar.vue'
  //Nota: Se puede observar en algunas ocasiones que se usa como si fuera la propiedad "data"
  // Mas info=> https://es.vuejs.org/v2/guide/computed.html
  computed: {
    //Esto devuelve un state de un modulo en 'store.js'
    nameProduct() {
      return this.$store.state.firstModule.product.name
    },
  }
}
</script>

<style scoped>

</style>