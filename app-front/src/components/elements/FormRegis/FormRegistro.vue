<!-- <script>
  import { defineComponent } from 'vue';
  import { useForm } from 'vee-validate';
  import "./formRegistroStyle.scss";
  import { defineRule, configure } from 'vee-validate';
import { required, email, min, confirmed } from '@vee-validate/rules';

defineRule('required', required);
defineRule('email', email);
defineRule('min', min);
defineRule('confirmed', confirmed);

configure({
  generateMessage: ({ field }) => `El campo ${field} es inválido.`,
});
  export default defineComponent({
    setup() {
      const { handleSubmit, errors } = useForm();
  
      const form = {
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
      };
        
      const onSubmit = async () => {
        // Aquí va la lógica para enviar los datos del formulario al servidor
      };
  
      return {
        form,
        onSubmit,
        handleSubmit,
        errors // Agregamos la variable errors en el objeto de retorno
      };
    }
  });
</script> -->

<!-- <template>
    <form @submit.prevent="submitForm">
      <div>
        <label for="username">Nombre de usuario</label>
        <input type="text" id="username" v-model="form.username" v-validate="'required'"> -->
        <!-- <div v-show="errors.has('username')">{{ errors.first('username') }}</div> -->
        <!-- <div v-show="errors && errors.has('username')">{{ errors ? errors.first('username') : '' }}</div>

      </div>
      
      <div>
        <label for="email">Correo electrónico</label>
        <input type="email" id="email" v-model="form.email" v-validate="'required|email'"> -->
        <!-- <div v-show="errors.has('email')">{{ errors.first('email') }}</div> -->
        <!-- <div v-show="errors && errors.has('email')">{{ errors ? errors.first('email') : '' }}</div>

      </div>
      
      <div>
        <label for="password">Contraseña</label>
        <input type="password" id="password" v-model="form.password" v-validate="'required|min:8'"> -->
        <!-- <div v-show="errors.has('password')">{{ errors.first('password') }}</div> -->
        <!-- <div v-show="errors && errors.has('password')">{{ errors ? errors.first('password') : '' }}</div>

      </div>
  
      <div>
        <label for="confirm-password">Confirmar contraseña</label>
        <input type="password" id="confirm-password" v-model="form.confirmPassword" v-validate="'required|confirmed:password'"> -->
        <!-- <div v-show="errors.has('confirmPassword')">{{ errors.first('confirmPassword') }}</div> -->
        <!-- <div v-show="errors && errors.has('confirm-password')">{{ errors ? errors.first('confirm-password') : '' }}</div>

      </div>
  
      <button type="submit">Registrarse</button>
    </form>
  </template> -->

<script>
// import axios from 'axios';
import ButtomSubmit1 from '../../ui/buttons/ButtomSubmit1.vue';
import InputType from '../../ui/Inputs/InputType.vue';

export default {
    data() {
        return {
            username: '',
            email: '',
            password: '',
            confirmPassword: ''
        };
    },
    methods: {
        async submitForm() {
            // try {
            //     const response = await axios.post("/api/login", {
            //         email: this.email,
            //         password: this.password
            //     });
            //     console.log(response.data);
            // }
            // catch (error) {
            //     console.error(error);
            // }
        },
        handleButtonClick() {
            console.log("toma el click");
        }
    },
    components: { InputType, ButtomSubmit1 }
}
</script>
<template>
    <div class="divForm-container">
        <span class="title-form">Create your user</span>
        <form @submit.prevent="submitForm">
            <!-- <input type="email" v-model="email" required> -->
            <InputType />
            <InputType />
            <!-- <input type="password" v-model="password" required> -->
            <!-- <button type="submit">Login</button> -->

            <ButtomSubmit1 name="Botón Personalizado" :onClick="handleButtonClick" />

        </form>
    </div>
</template>


<style lang="scss" scoped>
// @import '@/assets/style.scss';

.divForm-container {
    position: absolute;
    top: 258px;
    left: 250px;

    @media (max-width: 1080px) {
        top: 150px;
        left: 150px;
    }

    @media (max-width: 768px) {
        top: 100px;
        left: 100px;
    }

    .title-form {
        width: 270px;
        height: 30px;
        font-family: 'Inter';
        font-style: normal;
        font-weight: 700;
        font-size: 25px;
        line-height: 30px;
        color: #000000;
        flex: none;
        order: 0;
        flex-grow: 0;
    }
}
</style>
  
  