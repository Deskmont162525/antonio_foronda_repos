// Importar Axios
import axios from 'axios'

// Definir la URL base para las peticiones
const userRoute = 'http://localhost:9000/api/users'

// Peticion de login
export const login = async (email, password) => {
  
  const dataSend = {
    email: email,
    password: password
  }
  try {
    const response = await axios.post(`${userRoute}/login`, dataSend)
    return response.data.token
  } catch (error) {
    console.error(error)
  }
}

// Peticion de signup
export const signup = async (dataSend) => {
  try {
    const response = await axios.post(`${userRoute}/signup`, dataSend)
    if (response.status === 200) {
      return {
        message: response.data.message,
        redirect: response.data.redirect
      }
    } else {
      console.error(response.data.error)
    }
  } catch (error) {
    console.error(error)
  }
}

