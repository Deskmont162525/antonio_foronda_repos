<template>
  <div class="container">
    <NavBarLogin :toggle-state="toggleState" />

    <div v-if="state">
        <FormLogin />
    </div>
    <div v-else>
        <FormLogin />
    </div>
   
  </div>
</template>

<script>
import FormLogin from '../components/elements/formLogin/FormLogin.vue';
import NavBarLogin from '../components/elements/navbar/NavBarLogin.vue';


export default {
    data() {
        return {
            state: false,
        };
    },
    methods: {
        toggleState() {
            this.state = !this.state;
        },
    },
    components: { NavBarLogin, FormLogin }
};
</script>