<template>
    <header class="blue">

        <!-- Parte azul de bienvenida -->
        <section class="blue__container">
            <div class="blue__logo">
                <span>Logo</span>
                <img :src="logo" alt="" />
                
            </div>            
            <div class="blue__welcome-txt">
                <p>¡Welcome!</p>
                <p>Sign to start</p>
            </div>
        </section>
    </header>
    <div class="Container-principal">
        <NavBarLogin :toggle-state="toggleState" />

        <div class="Container-principal__form m-t-10" v-if="state">
            <FormRegistro />
        </div>
        <div class="Container-principal__form" v-else>
            <FormLogin />

        </div>

    </div>
</template>

<script>
import FormRegistro from '../components/elements/formRegis/FormRegistro.vue';
import FormLogin from '@/components/elements/formLogin/FormLogin.vue';
import NavBarLogin from '../components/elements/navbar/NavBarLogin.vue';
import imageLogo from '@/assets/images/logos/logo.svg';


export default {
    data() {
        return {
            state: false,
            logo: imageLogo
        };
    },
    methods: {
        toggleState() {
            this.state = !this.state;
        },
    },
    components: { NavBarLogin, FormRegistro, FormLogin }
};
</script>