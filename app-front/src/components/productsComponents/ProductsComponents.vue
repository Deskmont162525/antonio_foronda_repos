<template>
    <section class="container-general">
        <div class="container-card-main">
            <div class="card-container">
                <product-card v-for="(producto, index) in productos" :key="index" :producto="producto" />
            </div>
        </div>
    </section>
</template>
  
<script>
import { obtenerProductsById } from '../../actions/userProductActions';
import ProductCard from '../elements/productCard/ProductCard.vue'

export default {
    components: {
        ProductCard,
    },
    data() {
        return {
            productos: []
        };
    },
    async mounted() {
        const token = this.$cookies.get('authUsuarioOMG')
        this.productos = await obtenerProductsById(token?.dataUser?.id?.id)
        console.log("hhfhfhfhhf", this.productos);
    }
};
</script>
  <!-- obtenerProductsById -->