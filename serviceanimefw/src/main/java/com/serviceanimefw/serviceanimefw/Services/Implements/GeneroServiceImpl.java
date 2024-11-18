package com.serviceanimefw.serviceanimefw.Services.Implements;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.serviceanimefw.serviceanimefw.DTO.GeneroDTO;
import com.serviceanimefw.serviceanimefw.Entity.Genero;
import com.serviceanimefw.serviceanimefw.Repositories.GeneroRepository;
import com.serviceanimefw.serviceanimefw.Services.Service.GeneroService;

@Service
public class GeneroServiceImpl implements GeneroService {

    @Autowired
    GeneroRepository generoRepository;
    
    @Override
    public List<GeneroDTO> ObtenerTodosLosGeneros() {
        List<Genero> generos = generoRepository.findAll();
        return generos.stream().map(this::mapearDTO).collect(Collectors.toList());
    }

    @Override
    public GeneroDTO ObtenerGeneroPorId(Long id) {
        Genero generos = generoRepository.findById(id).get();
        GeneroDTO generosDTO = mapearDTO(generos);
        return generosDTO;
    }

    // entidad a DTO
    private GeneroDTO mapearDTO(Genero genero) {
        GeneroDTO generoDTO = new GeneroDTO();

        generoDTO.setId(genero.getId());
        generoDTO.setGenero(genero.getGenero());

        return generoDTO;
    }

    // DTO a entidad
    /*private Genero mapearEntidad(GeneroDTO generoDTO) {
        Genero genero = new Genero();

        genero.setId(generoDTO.getId());
        genero.setGenero(generoDTO.getGenero());

        return genero;
    }*/


}
