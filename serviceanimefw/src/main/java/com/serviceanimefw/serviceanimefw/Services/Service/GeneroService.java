package com.serviceanimefw.serviceanimefw.Services.Service;

import java.util.List;

import com.serviceanimefw.serviceanimefw.DTO.GeneroDTO;

public interface GeneroService {

    List<GeneroDTO> ObtenerTodosLosGeneros();
    GeneroDTO ObtenerGeneroPorId(Long id);
}