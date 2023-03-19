<template>
    <div class="about">
      <HeaderUsu :toggleState="toggleState" :state="state"/>
      <div v-if="state">
        <FormCrearProduct />
    </div>
      <div v-else>
        <ProductsComponents />
      </div>
    </div>
  </template>
  
  <script>
  import FormCrearProduct from '../components/elements/formCrearP/FormCrearProduct.vue';
import HeaderUsu from '../components/elements/header/HeaderUsu.vue';
  import ProductsComponents from '../components/productsComponents/ProductsComponents.vue';
  
  export default {
    data() {
      return {
        user: {
          name: 'Nombre de usuario',
          avatar: 'ruta/a/avatar.png'
        },
        state: false
      };
    },
    components: { ProductsComponents, HeaderUsu, FormCrearProduct },
    methods: {
      toggleState() {
        this.state = !this.state;
      }
    }
  };
  </script>
  
  
  
  