package com.serviceanimefw.serviceanimefw.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import com.serviceanimefw.serviceanimefw.Entity.Usuario;

@Repository
public interface UsuarioRepository extends JpaRepository<Usuario, Long> {

    @Query(value = "Select id_rol from usuario where usuario = :usuarioT and password = :passwordT", nativeQuery = true)
    String LoginVerification(@Param("usuarioT") String usuario, @Param("passwordT") String password);
}
