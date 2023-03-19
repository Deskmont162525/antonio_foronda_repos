<template>
    <form class="Container-principal__form__content" @submit.prevent="submitForm">
        <h2>Enter your credentials</h2>
        <div class="general-form__input--error">
            <label for="email">Email:</label>
            <input placeholder="yourname@gmail.com" id="email" v-model="form.email" type="email">
            <div v-if="formErrors.email" class="error">{{ formErrors.email }}</div>
        </div>
        <div class="general-form__input--success">
            <div class="d-flex-sb">
                <label for="password">Contraseña:</label>
                <a class="link-a" href="#">Forgot password?</a>
            </div>
            <input placeholder="smallTiger21" id="password" v-model="form.password" type="password">
            <div v-if="formErrors.password" class="error">{{ formErrors.password }}</div>
        </div>
        <div class="m-t-20">
            <input class="general-form__input__checkbox" type="checkbox">
            <label for="">Keep me signed in</label>
        </div>
        <button class="btn-principal--primary" type="submit">Login</button>
        <div class="">
            <span>Not a member?</span> <a class="link-a" href="#">Sign up</a>
        </div>
    </form>
</template>
  
<script>
import { reactive } from 'vue';

export default {
    setup() {
        const form = reactive({
            name: '',
            email: '',
            password: '',
            confirmPassword: '',
        });

        const formErrors = reactive({
            name: '',
            email: '',
            password: '',
            confirmPassword: '',
        });

        const submitForm = () => {
            // Validar campos requeridos
            if (!form.email) {
                formErrors.email = 'Por favor, ingrese su correo electrónico';
            } else {
                formErrors.email = '';
            }

            if (!form.password) {
                formErrors.password = 'Por favor, ingrese una contraseña';
            } else {
                formErrors.password = '';
            }

            // Si no hay errores, enviar formulario
            if (!Object.values(formErrors).some((error) => error)) {
                console.log('Formulario válido. Enviando...');
            }
        };

        return {
            form,
            formErrors,
            submitForm,
        };
    },
};
</script>


  