//Esto es el "corazón" de nuestro proyecto
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import NavBar from "@/components/NavBar";
import axios  from "axios";

/*
Aquí se registran los componentes de manera global para toda nuestra app, dado que es donde se declara la instancia de "Vue"
Para registrar componentes globales, se importan en las primeras líneas, ej: 'import NavBar from "@/components/NavBar";'
Posteriormente se llama a la instancia 'Vue' y se le comunica que comnponente vamos a registrar de manera global
Ej:
Vue.component('nombreQueVamosAUsar',ComponenteImportado);
Ahora puede usarse <NavBar> en cualquier parte de nuetra App sin necesidad de importarlo
 */


/*
Primer argumento es el nombre que va a tener cuando llames al componente
Segundo argumento es el componente a exportar de manera global
*/
Vue.component('NavBar',NavBar)

Vue.config.productionTip = false
Vue.use(axios)
//Así podemos agregar propiedades personalizadas a nuestra instancia de Vue y llamarlas usando: this.$propiedad en nuestros componentes
Vue.prototype.$axiosPropio=axios


new Vue({
  router,
  store,
  axios,
  render: h => h(App)
}).$mount('#app')
