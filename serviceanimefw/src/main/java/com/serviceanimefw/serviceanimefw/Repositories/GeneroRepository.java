package com.serviceanimefw.serviceanimefw.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.serviceanimefw.serviceanimefw.Entity.Genero;

@Repository
public interface GeneroRepository extends JpaRepository<Genero, Long> {

}