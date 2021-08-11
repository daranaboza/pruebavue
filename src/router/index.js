//Aquí va todo lo relacionado con las "Views" y sus rutas
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import PruebaView from "@/views/PruebaView";

Vue.use(VueRouter)

const routes = [
/*
Aquí se declaran las rutas
 */
  {
    //path: la URL que se mostrará en el navegador
    path: '/',
    //name: nombre con el cual nos podremos referir a la ruta sin necesidad de usar la URL como tal
    name: 'Home',
    //component: el "componente" o en este caso mejor dicho la "vista/view" a mostrar, en Vue las vistas son componentes.
    //Nota: Como ejemplo de buena práctica los componentes que se comporten como "vistas" deberán crearse en la carpeta "views"
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path:'/prueba',
    name:'PruebaView',
    component: PruebaView
  }
]
//Instancia de VueRouter
const router = new VueRouter({
  //mode: aquí se especifica el modo de rutas que queramos
  //Nota: para usar el sistema de rutas de HTML5 y eliminar el "#" de nuestra URL usar 'history' como modo
  mode:'history',
  routes
})

export default router
