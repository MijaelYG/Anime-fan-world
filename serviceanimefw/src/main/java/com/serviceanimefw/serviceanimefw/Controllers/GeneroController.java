package com.serviceanimefw.serviceanimefw.Controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.serviceanimefw.serviceanimefw.DTO.GeneroDTO;
import com.serviceanimefw.serviceanimefw.Services.Service.GeneroService;

@RestController
@RequestMapping("/api/genero")
public class GeneroController {

    @Autowired
    GeneroService generoService;

    @GetMapping()
    public ResponseEntity<?> BuscarTodos() {
        try {
            List<GeneroDTO> generoDTOs = generoService.ObtenerTodosLosGeneros();
            return new ResponseEntity<>(generoDTOs, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> BuscarPorId(@PathVariable Long id) {
        try {
            GeneroDTO generoDTO = generoService.ObtenerGeneroPorId(id);
            return new ResponseEntity<>(generoDTO, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    /* 
    @PostMapping()
    public ResponseEntity<?> create(@RequestBody GeneroDTO generoDTOs) {
        try {
            return new ResponseEntity<>("Create Result", HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PutMapping()
    public ResponseEntity<?> update(@RequestBody GeneroDTO generoDTOs) {
        try {
            return new ResponseEntity<>("Update Result", HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> delete(@PathVariable Integer id) {
        try {
            return new ResponseEntity<>("Destroy Result", HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    */
}
