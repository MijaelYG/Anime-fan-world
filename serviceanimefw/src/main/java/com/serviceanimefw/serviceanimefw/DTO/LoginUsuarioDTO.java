package com.serviceanimefw.serviceanimefw.DTO;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@Setter
@Getter
public class LoginUsuarioDTO {
    private String usuario;

    private String password;
}
