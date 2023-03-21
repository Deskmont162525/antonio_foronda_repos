// Importar Axios
import axios from 'axios'

// Definir la URL base para las peticiones
const userProductRoute = 'http://localhost:9000/api/products'


// Peticion de login
export const productsById = async (idUser) => {  
  const token = $cookies.get('authUsuarioOMG')
    try {
      const response = await axios.get(`${userProductRoute}/productByUser/${idUser}`,{
        headers: { Authorization: `Bearer ${token?.token}` }
    })
      console.log("response by id", response.data)
      return response.data
    } catch (error) {
      console.error(error)
    }
  }