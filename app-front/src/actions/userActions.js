import { login, signup } from '../services/userService'

export const loginHandler = async (email, password) => {
  try {
    // Llamar a la función login
    const token = await login(email, password)


    // Decodificar el token
    if (token !== undefined) {
      const decodedToken = JSON.parse(atob(token.split('.')[1]))
      // const ultimoToken = decodedToken.id.tokens[decodedToken.id.tokens.length-1];
     const userAuthToken = {
      dataUser:decodedToken,
      token: token
     }
      // Crear la cookie 
      $cookies.set("authUsuarioOMG", JSON.stringify(userAuthToken), {
        expires:"1h",
        path: "/"
      })
      
      // Redirigir al usuario a la ruta /shop
      window.location.href = '/shop'
    } else {
        return {
            code: 404,
            message: 'El usuario o la contraseña son incorrectos'
          }
    }

  } catch (error) {
    console.error(error)
    // Manejar el error
    return {
      code: 500,
      message: 'error al conectarse al servidor'
    }
  }
}

// export default loginHandler;
export const handleSignup = async (data) => {
  const dataSend = {
    "email": data.email,
    "password": data.password,
    "name": data.name,
    "lastName": data.lastName
  }
  try {
    const response = await signup(dataSend)
    if(response.message === "Usuario creado con éxito."){
      // Redirigir al usuario a la ruta /shop
      window.location.href = response.redirect
    }
    console.log('Usuario creado correctamente', response)
    return response;
  } catch (error) {
    console.error(error)
  }
}
