<template>
  <div class="registration-form">
    <form class="Container-principal__form__content" @submit.prevent="submitForm">
      <h2>Enter your credentials</h2>
      <div class="general-form__input">
        <label for="name">Nombre:</label>
        <input type="text" id="name" v-model="form.name">
        <span class="error" v-if="formErrors.name">{{ formErrors.name }}</span>
      </div>
      <div class="general-form__input">
        <label for="lastName">Apellido:</label>
        <input type="text" id="lastName" v-model="form.lastName">
        <span class="error" v-if="formErrors.lastName">{{ formErrors.lastName }}</span>
      </div>
      <div class="general-form__input">
        <label for="email">Correo electrónico:</label>
        <input type="email" id="email" v-model="form.email">
        <span class="error" v-if="formErrors.email">{{ formErrors.email }}</span>
      </div>
      <div class="general-form__input">
        <label for="password">Contraseña:</label>
        <input type="password" id="password" v-model="form.password">
        <span class="error" v-if="formErrors.password">{{ formErrors.password }}</span>
      </div>
      <button class="btn-principal--primary m-t-20" type="submit">Registrarse</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: "",
        lastName: "",
        email: "",
        password: "",
      },
      formErrors: {},
    };
  },
  methods: {
    submitForm() {
      // Realizar validaciones
      this.formErrors = {};
      if (!this.form.name) {
        this.formErrors.name = "Ingrese su nombre";
      }
      if (!this.form.lastName) {
        this.formErrors.lastName = "Ingrese su apellido";
      }
      if (!this.form.email) {
        this.formErrors.email = "Ingrese su correo electrónico";
      } else if (!this.validateEmail(this.form.email)) {
        this.formErrors.email = "Ingrese un correo electrónico válido";
      }
      if (!this.form.password) {
        this.formErrors.password = "Ingrese una contraseña";
      } else if (this.form.password.length < 8) {
        this.formErrors.password = "La contraseña debe tener al menos 8 caracteres";
      }
      // Si no hay errores, enviar formulario al servidor
      if (Object.keys(this.formErrors).length === 0) {
        // Lógica para enviar el formulario al servidor
        console.log("Formulario enviado:", this.form);
      }
    },
    validateEmail(email) {
      // Validar formato de correo electrónico
      const re = /\S+@\S+\.\S+/;
      return re.test(email);
    },
  },
};
</script>
