package com.serviceanimefw.serviceanimefw.Repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.serviceanimefw.serviceanimefw.Entity.Usuario;

@Repository
public interface LoginRepository extends JpaRepository<Usuario, Long> {

    @Query(value = "Select * from usuario where usuario = :usuarioT and password = :passwordT", nativeQuery = true)
    Optional<Usuario> LoginVerification(@Param("usuarioT") String usuario, @Param("passwordT") String password);

}
