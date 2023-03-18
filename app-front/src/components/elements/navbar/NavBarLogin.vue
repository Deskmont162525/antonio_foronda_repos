<script>
export default {
  name: 'NavBarLogin',
  props: {
    toggleState: {
      type: Function,
      required: true
    }
  }
}
</script>

<template>
  <div class="Container-principal__acount">
    <p class="Container-principal__acount__p">No employer account yet?</p>
    <button @click="toggleState()" class="btn btn--principal btn--principal--secondary">Register</button>
  </div>
</template>  
              
<style scoped lang="scss">
// Importamos el archivo de variables
@import './navbarStyle.scss';
</style>
            

