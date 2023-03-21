<template>
  <div class="registration-form">
    <form class="Container-principal__form__content" @submit.prevent="submitForm">
      <h2>Enter your datos</h2>
      <div class="general-form__input" v-bind:class="getFieldClass('name')">
        <label for="name">Nombre:</label>
        <input type="text" id="name" v-model="form.name" @input="validateForm('name')" @blur="fieldTouched.name = true">
        <span class="error" v-if="formErrors.name">{{ formErrors.name }}</span>
      </div>
      <div class="general-form__input" v-bind:class="getFieldClass('lastName')">
        <label for="lastName">Apellido:</label>
        <input type="text" id="lastName" v-model="form.lastName" @input="validateForm('lastName')"
          @blur="fieldTouched.lastName = true">
        <span class="error" v-if="formErrors.lastName">{{ formErrors.lastName }}</span>
      </div>
      <div class="general-form__input" v-bind:class="getFieldClass('email')">
        <label for="email">Correo electrónico:</label>
        <input type="email" id="email" v-model="form.email" @input="validateForm('email')"
          @blur="fieldTouched.email = true">
        <span class="error" v-if="formErrors.email">{{ formErrors.email }}</span>
        <span class="error" v-if="errorMessageCorreo">{{ errorMessageCorreo }}</span>
      </div>
      <div class="general-form__input" v-bind:class="getFieldClass('password')">
        <label for="password">Contraseña:</label>
        <input type="password" id="password" v-model="form.password" @input="validateForm('password')"
          @blur="fieldTouched.password = true">
        <span class="error" v-if="formErrors.password">{{ formErrors.password }}</span>
      </div>
      <div class="general-form__input" v-bind:class="getFieldClass('password2')">
        <label for="password2">Verificar Contraseña:</label>
        <input type="password" id="password2" v-model="form.password2" @input="validateForm('password2')"
          @blur="fieldTouched.password2 = true">
        <span class="error" v-if="formErrors.password2">{{ formErrors.password2 }}</span>
      </div>
      <ModalLoading :isOpen="isOpen"/>
      <button class="btn-principal--primary m-t-20" type="submit">Registrarse</button>
      <span class="error" v-if="errorMessage">{{ errorMessage }}</span>
    </form>
  </div>
</template>

<script>
import { ref } from 'vue';
import { handleSignup } from '@/actions/userActions.js';
import ModalLoading from '../modalLoading/ModalLoading.vue';

export default {
    data() {
        const errorMessage = ref("");
        const errorMessageCorreo = ref("");
        const isOpen = ref();
        return {
            form: {
                name: "",
                lastName: "",
                email: "",
                password: "",
                password2: "",
            },
            formValidation: {
                name: false,
                lastName: false,
                email: false,
                password: false,
                password2: false,
            },
            formErrors: {},
            fieldTouched: {},
            errorMessage,
            errorMessageCorreo,
            isOpen,
        };
    },
    methods: {
        async submitForm() {
            this.validateForm();
            if (Object.keys(this.formErrors).length === 0) {
                //activa el loading
                this.isOpen = true;
                const response = await handleSignup(this.form);
                 //desactiva el loading
                 this.isOpen = false;
                if (response.message === "El correo electrónico ya está en uso.") {
                    this.errorMessageCorreo = response.message;
                }
            }
            else {
                console.log("Formulario con errores");
                this.errorMessage = "Formulario con errores";
            }
        },
        validateForm(field = null) {
            this.formErrors = {};
            if (!field || field === "name") {
                if (!this.form.name) {
                    this.formValidation.name = true;
                    this.formErrors.name = "El nombre es obligatorio";
                }
                else {
                    this.formValidation.name = false;
                }
            }
            if (!field || field === "lastName") {
                if (!this.form.lastName) {
                    this.formValidation.lastName = true;
                    this.formErrors.lastName = "El apellido es obligatorio";
                }
                else {
                    this.formValidation.lastName = false;
                }
            }
            if (!field || field === "email") {
                if (!this.form.email) {
                    this.formValidation.email = true;
                    this.formErrors.email = "El correo electrónico es obligatorio";
                }
                else if (!this.isValidEmail(this.form.email)) {
                    this.formValidation.email = true;
                    this.formErrors.email = "El correo electrónico no es válido";
                }
                else {
                    this.formValidation.email = false;
                }
            }
            if (!field || field === "password") {
                if (!this.form.password) {
                    this.formValidation.password = true;
                    this.formErrors.password = "La contraseña es obligatoria";
                }
                else {
                    this.formValidation.password = false;
                }
            }
            if (!field || field === "password2") {
                if (!this.form.password2) {
                    this.formValidation.password2 = true;
                    this.formErrors.password2 = "Confirmar la contraseña es obligatorio";
                }
                else if (this.form.password !== this.form.password2) {
                    this.formValidation.password2 = true;
                    this.formErrors.password2 = "Las contraseñas no coinciden";
                }
                else {
                    this.formValidation.password2 = false;
                }
            }
            this.errorMessage = "";
        },
        isValidEmail(email) {
            // Aquí se puede agregar una validación más compleja si se requiere
            return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
        },
        getFieldClass(field) {
            if (this.fieldTouched[field] && !this.formErrors[field]) {
                this.formValidation[field] = true;
                return "general-form__input--success";
            }
            else if (this.fieldTouched[field] && this.formErrors[field]) {
                this.formValidation[field] = false;
                return "general-form__input--error";
            }
            else if (this.fieldFocused === field) {
                return "general-form__input--focused";
            }
            return "";
        },
    },
    components: { ModalLoading }
};
</script>



