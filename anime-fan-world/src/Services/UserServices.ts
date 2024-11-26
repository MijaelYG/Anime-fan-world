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
    return await response.text();
    
  } catch (error) {
    throw console.error(error);
  }
};
