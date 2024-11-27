import { LoginUser } from "../Interfaces/LoginInterface";
import { Usuario } from "../Interfaces/UserInterface";

export const fetchCrearCuentaUsuario = async (usuario: Usuario) => {
  try {
    const response = await fetch("http://localhost:8080/api/usuario", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(usuario),
    });

    if (!response.ok) {
      throw new Error("Error al crear la cuenta");
    }
    return await response.json();
    
  } catch (error) {
    throw console.error(error);
  }
};

export const FetchIniciarSesion = async (usuario: LoginUser) =>{
  try {
    const response = await fetch("http://localhost:8080/api/login/iniciar",{
      method: "POST",
      headers:{
        "Content-Type": "application/json"
      },
      body: JSON.stringify(usuario),
    })
    if(!response.ok){
      throw new Error("Usuario o Contraseña Incorrectas"); 
    }
    const respuesta = await response.text();
    if(respuesta == ""){
      return false
    }else if (respuesta == "ANIMEFW2024_TOKENAUTHAFW_USER"){
      localStorage.setItem("token",respuesta);
      return true
    }else if (respuesta == "ANIMEFW2024_TOKENAUTHAFW_ADMIN_ANIMEFW170502"){
      localStorage.setItem("token",respuesta);
      return true
    }
  } catch (error) {
    throw console.error(error);
  }
}
