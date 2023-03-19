<template>
    <div class="card">
        <div class="card__card-body">
            <div class="card__card-body__img">
                <img :src="producto?.imagen" alt="">
            </div>
            <div class="card__card-body__content">
                <div class="card__card-body__name">
                    <p>{{ producto?.descripcion }}</p>
                    <div class="dropdown">
                        <button class="btn"><img src="../../../assets/icons/options-icons.svg" alt=""></button>
                        <div class="dropdown-content">
                            <a href="#"><img src="../../../assets/icons/icon-edit.svg" alt=""> Edit</a>
                            <a class="btn-delete" href="#">
                                <img src="../../../assets/icons/Delete icon.svg" alt="">
                                <ModalEliminar class="btn-principal--primary" buttonLabel="Delete">
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic laboriosam eum blanditiis perspiciatis pariatur impedit, aperiam cupiditate, quis aliquid autem esse minima delectus, facilis facere ex ut accusantium architecto maiores.</p>
                                    <div class="d-flex-cent">
                                        <button class="btn-principal--primary btn-modal--secondary" @click="handleCloseModal">Cancel</button>
                                    <button class="btn-principal--primary btn-modal--primary" @click="handleCloseModal">Acept</button>
                                    </div>
                                </ModalEliminar>
                            </a>
                        </div>
                    </div>
                </div>
                <p>valor: {{ producto?.valor }}</p>
                <div class="card-time-rating">
                    <p><img src="../../../assets/icons/reloj-icon.svg" alt="">(Time)</p>
                    <span>
                        <img src="../../../assets/icons/star-complete-icon.svg" alt="">
                        <img src="../../../assets/icons/star-complete-icon.svg" alt="">
                        <img src="../../../assets/icons/star-complete-icon.svg" alt="">
                        <img src="../../../assets/icons/star-complete-icon.svg" alt="">
                        <img src="../../../assets/icons/star-empty-icon.svg" alt="">
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
import ModalEliminar from '../modalElimi/ModalEliminar.vue';

export default {
    name: "ProductCard",
    props: {
        producto: {
            type: Object,
            required: true
        }
    },
    components: { ModalEliminar },
    methods: {
        handleCloseModal() {
            console.log('El botón del Popout fue presionado');
        }

    }
}
</script>
  