<template>
  <div>
    <label v-if="label">{{ label }}</label>
<!--    Se puede bindear desde el padre al hijo de estas 2 formas-->
<!--    <input type="text" :value="value" @input="returnValue">-->
    <input type="text" v-model="value" @input="returnValue">
  </div>
</template>

<script>
export default {
  name: "BaseInput",
  props: ['label'],
  data() {
    return {
      value: '',
    }
  },
  methods: {
    returnValue() {
      /*
      Podemos usar eventos personalizados (véase 'pepe') o el evento input prefefinido por 'VUE' que se encarga de recibir el 'value' en el padre y se puede usar
      con 'v-model'
       */
      // this.value = event.target.value
      // return this.$emit('pepe', this.value)
      return this.$emit('input',this.value)
    }
  }
}
</script>

<style scoped>

</style>