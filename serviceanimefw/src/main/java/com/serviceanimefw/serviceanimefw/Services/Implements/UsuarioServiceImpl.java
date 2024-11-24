package com.serviceanimefw.serviceanimefw.Services.Implements;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCrypt;
import org.springframework.stereotype.Service;

import com.serviceanimefw.serviceanimefw.DTO.UsuarioDTO;
import com.serviceanimefw.serviceanimefw.Entity.Rol;
import com.serviceanimefw.serviceanimefw.Entity.Usuario;
import com.serviceanimefw.serviceanimefw.Repositories.RolRepository;
import com.serviceanimefw.serviceanimefw.Repositories.UsuarioRepository;
import com.serviceanimefw.serviceanimefw.Services.Service.UsuarioService;

@Service
public class UsuarioServiceImpl implements UsuarioService {

    @Autowired
    UsuarioRepository usuarioRepository;

    @Autowired
    RolRepository rolRepository;

    @Override
    public List<UsuarioDTO> ObtenerTodosLosUsuarios() {
        List<Usuario> usuario = usuarioRepository.findAll();
        return usuario.stream().map(this::mapearDTO).collect(Collectors.toList());
    }

    @Override
    public UsuarioDTO ObtenerUsuarioPorId(Long id) {
        Usuario usuario = usuarioRepository.findById(id).get();
        UsuarioDTO usuarioDTO = mapearDTO(usuario);
        return usuarioDTO;
    }

    @Override
    public String AgregarUsuario(UsuarioDTO usuarioDTO) {
        Optional<Rol> rol = rolRepository.findById(usuarioDTO.getId_rol());
        if(rol.isPresent()){
            String password = BCrypt.hashpw(usuarioDTO.getPassword(), BCrypt.gensalt());
            usuarioDTO.setPassword(password);
            Usuario usuario = mapearEntidad(usuarioDTO);
            usuario.setRol(rol.get());
            usuarioRepository.save(usuario);
            return "El usuario fue registrado correctamente.";
        }else{
            return "El rol no existe.";
        }
    }

    @Override
    public String ActualizarUsuario(UsuarioDTO usuarioDTO) {
        if(usuarioDTO.getId() == null){
            return "El ID es necesario para actualizar.";
        }
        Optional<Rol> rol = rolRepository.findById(usuarioDTO.getId_rol());

        if(rol.isPresent()){
            Usuario usuario = mapearEntidad(usuarioDTO);
            usuarioRepository.save(usuario);
            return "El usuario fue actualizado correctamente.";
        }
        return "EHubo un error al actualizar el usuario.";

    }

    @Override
    public UsuarioDTO VerificarSesion(UsuarioDTO usuarioDTO) {
        //Usuario usuario = mapearEntidad(usuarioDTO);
        return usuarioDTO;
    }
 
    private UsuarioDTO mapearDTO(Usuario usuario){
        UsuarioDTO usuarioDTO = new UsuarioDTO();
        usuarioDTO.setId(usuario.getId());
        usuarioDTO.setNombres(usuario.getNombres());
        usuarioDTO.setApellidos(usuario.getApellidos());
        usuarioDTO.setCorreo(usuario.getCorreo());
        usuarioDTO.setUsuario(usuario.getUsuario());
        usuarioDTO.setPassword(usuario.getPassword());
        usuarioDTO.setEstado(usuario.getEstado());
        usuarioDTO.setId_rol(usuario.getRol().getId());

        return usuarioDTO;
    }

    private Usuario mapearEntidad(UsuarioDTO usuarioDTO){
        Usuario usuario = new Usuario();
        usuario.setId(usuarioDTO.getId());
        usuario.setNombres(usuarioDTO.getNombres());
        usuario.setApellidos(usuarioDTO.getApellidos());
        usuario.setCorreo(usuarioDTO.getCorreo());
        usuario.setUsuario(usuarioDTO.getUsuario());
        usuario.setPassword(usuarioDTO.getPassword());
        usuario.setEstado(usuarioDTO.getEstado());

        return usuario;
    }

}
