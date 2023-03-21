<template>
    <form class="Container-principal__form__content" @submit.prevent="submitForm">
        <h2>Enter your credentials</h2>
        <div class="general-form__input" :class="getFieldClass('email')">
            <label for="email">Email:</label>
            <input placeholder="yourname@gmail.com" id="email" v-model="form.email" type="email"
                @input="validateField('email')">
            <div v-if="formErrors.email" class="error">{{ formErrors.email }}</div>
        </div>
        <div class="general-form__input" :class="getFieldClass('password')">
            <label for="password">Contraseña:</label>
            <input placeholder="smallTiger21" id="password" v-model="form.password" type="password"
                @input="validateField('password')">
            <div v-if="formErrors.password" class="error">{{ formErrors.password }}</div>
        </div>
        <ModalLoading :isOpen="isOpen"/>
        <button class="btn-principal btn-principal--primary" type="submit">Login</button>
        
        <span class="error" v-if="errorMessage">{{ errorMessage }}</span>
    </form>
</template>
  
<script>
import { reactive, ref } from 'vue';
import { loginHandler } from '@/actions/userActions.js';
import ModalLoading from '../modalLoading/ModalLoading.vue';

export default {
    setup() {
        const form = reactive({
            email: "",
            password: "",
        });
        const formErrors = reactive({
            email: "",
            password: "",
        });
        const errorMessage = ref("");
        var isOpen =  ref(null);
        const validateField = (field) => {
            switch (field) {
                case "email":
                    if (!form.email) {
                        formErrors.email = "Por favor, ingrese su correo electrónico";
                    }
                    else {
                        formErrors.email = "";
                    }
                    break;
                case "password":
                    if (!form.password) {
                        formErrors.password = "Por favor, ingrese una contraseña";
                    }
                    else {
                        formErrors.password = "";
                    }
                    break;
                default:
                    break;
            }
        };
        const getFieldClass = (field) => {
            if (formErrors[field]) {
                return "general-form__input--error";
            }
            else if (form[field]) {
                return "general-form__input--success";
            }
            return "";
        };
        const submitForm = async () => {            
            // Capturar valores de los inputs
            const email = document.getElementById("email").value;
            const password = document.getElementById("password").value;
            // Validar campos requeridos
            validateField("email");
            validateField("password");
            // Si hay errores, no enviar formulario
            if (formErrors.email || formErrors.password) {
                return;
            }
            try {
                //activa el modal
                isOpen.value = true;
                // Llamar a la función login
                const token = await loginHandler(email, password);
                //desactiva el modal
                isOpen.value = false;
                if (token.code === 404) {
                    errorMessage.value = token.message;
                }
            }
            catch (error) {
                console.error(error);
                // Mostrar mensaje de error
            }
        };
        return {
            form,
            formErrors,
            validateField,
            getFieldClass,
            submitForm,
            errorMessage,
            isOpen,
        };
    },
    components: { ModalLoading }
};
</script>
  

