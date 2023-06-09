import { createApp } from 'vue'
import App from './App.vue'
import { Field, Form, ErrorMessage, defineRule, configure } from 'vee-validate'
import { required, email, min } from '@vee-validate/rules'
import { localize, setLocale } from '@vee-validate/i18n'
import es from '@vee-validate/i18n/dist/locale/es.json'
import router from './router'
import VueCookies from 'vue-cookies'


import './assets/styles/style.scss'


// Configurar las reglas de validación
defineRule('required', required)
defineRule('email', email)
defineRule('min', min)

// Configurar mensajes de error en español
localize('es', es)
setLocale('es')

// Configurar las opciones globales de VeeValidate
configure({
  validateOnInput: true,
})

const app = createApp(App)

// Registrar los componentes de VeeValidate de manera global
app.component('Field', Field)
app.component('Form', Form)
app.component('ErrorMessage', ErrorMessage)
app.use(router)
app.use(VueCookies, {
  expires:"1h",
  // path: "/",
  // domain:
})
app.mount('#app')




