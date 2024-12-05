package com.serviceanimefw.serviceanimefw.Services.Implements;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.serviceanimefw.serviceanimefw.DTO.LoginUsuarioDTO;
import com.serviceanimefw.serviceanimefw.Entity.Usuario;
import com.serviceanimefw.serviceanimefw.Repositories.LoginRepository;
import com.serviceanimefw.serviceanimefw.Services.Service.LoginService;

@Service
public class LoginServiceImpl implements LoginService {

    @Autowired
    LoginRepository loginRepository;

    @Override
    public LoginUsuarioDTO LoginUsuario(String usuario, String password) {
        Optional<Usuario> usuarioE = loginRepository.LoginVerification(usuario, password);
        if (usuarioE.isPresent()) {
            LoginUsuarioDTO loginUsuarioDTO = mapearLoginDTO(usuarioE.get());
            if (usuarioE.get().getRol().getId() == 2) {
                loginUsuarioDTO.setMessage("ANIMEFW2024_TOKENAUTHAFW_USER");
                return loginUsuarioDTO;
            } else if(usuarioE.get().getRol().getId() == 1){
                loginUsuarioDTO.setMessage("ANIMEFW2024_TOKENAUTHAFW_ADMIN_ANIMEFW170502");
                return loginUsuarioDTO;
            }else{
                loginUsuarioDTO.setMessage("El usuario no tiene un rol asignado");
                return loginUsuarioDTO;
            }
        } else {
            LoginUsuarioDTO loginUsuarioDTO = new LoginUsuarioDTO();
            loginUsuarioDTO.setMessage("El usuario no existe");
            return loginUsuarioDTO;
        }
    }

    private LoginUsuarioDTO mapearLoginDTO(Usuario usuario) {
        LoginUsuarioDTO loginUsuarioDTO = new LoginUsuarioDTO();
        loginUsuarioDTO.setId(usuario.getId());
        loginUsuarioDTO.setUsuario(usuario.getUsuario());
        loginUsuarioDTO.setPassword(usuario.getPassword());
        return loginUsuarioDTO;
    }
}
