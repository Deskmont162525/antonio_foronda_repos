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
import ProductCard from '../elements/productCard/ProductCard.vue'

export default {
    components: {
        ProductCard,
    },
    data() {
        return {
            productos: [
                {
                    nombre: "Hamburguesa",
                    imagen: "https://via.placeholder.com/150",
                    descripcion: "Una deliciosa hamburguesa con queso, lechuga y tomate",
                    fecha: "2022-01-01",
                    valor: 500,
                    rating: 4.5
                },
                {
                    nombre: "Hamburguesa",
                    imagen: "https://via.placeholder.com/150",
                    descripcion: "Una deliciosa hamburguesa con queso, lechuga y tomate",
                    fecha: "2022-01-01",
                    valor: 500,
                    rating: 4.5
                },
                {
                    nombre: "Hamburguesa",
                    imagen: "https://via.placeholder.com/150",
                    descripcion: "Una deliciosa hamburguesa con queso, lechuga y tomate",
                    fecha: "2022-01-01",
                    valor: 500,
                    rating: 4.5
                },
                {
                    nombre: "Hamburguesa",
                    imagen: "https://via.placeholder.com/150",
                    descripcion: "Una deliciosa hamburguesa con queso, lechuga y tomate",
                    fecha: "2022-01-01",
                    valor: 500,
                    rating: 4.5
                },
                {
                    nombre: "Hamburguesa",
                    imagen: "https://via.placeholder.com/150",
                    descripcion: "Una deliciosa hamburguesa con queso, lechuga y tomate",
                    fecha: "2022-01-01",
                    valor: 500,
                    rating: 4.5
                },
                {
                    nombre: "Hamburguesa",
                    imagen: "https://via.placeholder.com/150",
                    descripcion: "Una deliciosa hamburguesa con queso, lechuga y tomate",
                    fecha: "2022-01-01",
                    valor: 500,
                    rating: 4.5
                },
                {
                    nombre: "Pizza",
                    imagen: "https://via.placeholder.com/150",
                    descripcion: "Pizza de pepperoni con masa crujiente",
                    fecha: "2022-02-15",
                    valor: 800,
                    rating: 4.0
                },
                {
                    nombre: "Ensalada",
                    imagen: "https://via.placeholder.com/150",
                    descripcion: "Ensalada César con pollo a la parrilla",
                    fecha: "2022-03-25",
                    valor: 300,
                    rating: 4.8
                }
            ]
        };
    },
};
</script>
  