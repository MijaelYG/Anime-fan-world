export interface Usuario {
  Nombres: string;
  Apellidos: string;
  Usuario: string;
  Password: string;
  Correo:string;
}

export const fetchCrearCuentaUsuario = (usuario: Usuario): Promise<string> => {
  return fetch("http://localhost:8080/api/usuario", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(usuario),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Error en la solicitud");
      }
      return response.text();
    })
    .then((result) => {
      return result;
    })
    .catch((error) => {
      console.error("Error al obtener el post:", error);
      throw error;
    });
};
