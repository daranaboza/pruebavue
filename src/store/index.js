import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

//Modules
//Para usar modulos externos hay que importarlos
import * as event from './modules/event'

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
Esto es un módulo, sirve para fragmentar entidades y que las propiedades que podemos encontrar dentro
del 'store' de 'Vuex' estén divididas y sean mas legibles, en vez de declarar estas propiedades dentro de 'new Vuex.Store',
las declaramos dentro de módulos (los modulos pueden declararse en ficheros aparte) y posteriormente dentro de nuestra entidad
'Vuex.Store' registramos los módulos (véase más abajo)
 */
 const moduleA = {
    state: () => ({
        product:{
            id:1,
            name: 'RXT3080',
            price:1000000000000
        },
        shop:{
            id:1,
            name:'PcComponentes',
            location:'Ni idea'
        }
    }),
    mutations: {
        CHANGE_GRAPHIC_CARD_PRICE(){
             return this.product.price=10
        },
        CHANGE_SHOP_LOCATION(){
            return this.shop.location="Murcia"
        }
    },
    actions: {
        changeCardPrice(){
            this.commit('CHANGE_GRAPHIC_CARD_PRICE')
        },
        changeShopLocation(){
            this.commit('CHANGE_SHOP_LOCATION')
        }
    },
    /*
    De momento la unica manera de acceder al state de un modulo es revolviendolo en los getters
     */
    getters: {
        product: (state) => {
            return state.product
        },
        shop: (state) => {
            return state.shop
        }
    }
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export default new Vuex.Store({
    //Aquí se aloja la 'data' que puede usarse de manera global en toda nuestra App
    //Mas info => https://vuex.vuejs.org/guide/state.html
    state: {
        user: {
            name: 'Daniel'
        }
    },
    //Aquí van los métodos o funciones que se encargan de cambiar el 'state'
    //Usa 'commit' para ejecutar las funciones aqui declaradas => this.commit('NOMBRE_DE_LA_MUTATION')
    //Mas info => https://vuex.vuejs.org/guide/mutations.html
    mutations: {
        //Por convención es recomendable declarar las 'mutations' en 'UPPER_CASE'
        CHANGE_USER_NAME() {
            return this.state.user.name = "PACO"
        }
    },
    //Aquí van las funciones que llaman a las funciones dentro de 'mutations'
    //Es recomendable llamar a un 'action' desde nuestro componente y que sea la funión en 'action' quien llame a la función en 'mutations'
    //Usa 'dispacth' para ejecutar un action => this.dispatch('nombreDeLaAction')
    //Mas info => https://vuex.vuejs.org/guide/actions.html
    actions: {
        changeNameAction() {
            this.commit('CHANGE_USER_NAME')
        }
    },
    //Parecido a la propiedad 'computed' de los componentes
    //Usa 'getters' para llamar a las funciones aquí declaradas => this.getters.getActiveUsers
    //Mas info => https://vuex.vuejs.org/guide/getters.html
    getters: {},

    //Aqui van los 'modules' para hacer que nuestra 'store' sea escalable y mejor mantenida en cuanto el proyecto aumenta
    //Mas info => https://vuex.vuejs.org/guide/modules.html
    modules: {
        firstModule: moduleA,
        secondModule: event
    }
})
