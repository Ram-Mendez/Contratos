package com.ram.contratos.contratosrest.classes;

import com.ram.contratos.contratosrest.entities.AuthorityEntity;

import java.util.*;

public class AdministratorDto {
    private int id;
    private Integer contrato;
    private Integer autoridad;
    private Integer user;

    public Integer getUser() {
        return user;
    }

    public void setUser(Integer user) {
        this.user = user;
    }

    public Integer getAutoridad() {
        return autoridad;
    }

    public void setAutoridad(Integer autoridad) {
        this.autoridad = autoridad;
    }

    public Integer getContrato() {
        return contrato;
    }

    public void setContrato(Integer contrato) {
        this.contrato = contrato;
    }


    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

}
