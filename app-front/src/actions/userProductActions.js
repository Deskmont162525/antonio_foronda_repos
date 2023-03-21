import { productsById } from "../services/userProdutServices";



// export default loginHandler;
export const obtenerProductsById = async (idUser) => {
    try {
      const response = await productsById(idUser)
      console.log('Productos cargados correctamente', response)
      return response;
    } catch (error) {
      console.error(error)
    }
  }