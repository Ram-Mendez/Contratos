package com.ram.contratos.contratosrest.entities;

import jakarta.persistence.*;

import java.util.*;

@Entity
@Table(name = "administrator", uniqueConstraints = {
        @UniqueConstraint(columnNames = {
                "contratos_id",
                "autoridad_id",
                "user_id"
        })
})
public class AdministratorEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @ManyToOne()
    @JoinColumn
    private ContratoEntity contratos;

    @ManyToOne()
    @JoinColumn
    private AuthorityEntity autoridad;

    @ManyToOne()
    @JoinColumn
    private UserEntity user;

    public void setContratos(ContratoEntity contratos) {
        this.contratos = contratos;
    }

    public UserEntity getUser() {
        return user;
    }

    public void setUser(UserEntity user) {
        this.user = user;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public ContratoEntity getContratos() {
        return contratos;
    }

    public void setContrato(ContratoEntity contratos) {
        this.contratos = contratos;
    }

    public AuthorityEntity getAutoridad() {
        return autoridad;
    }

    public void setAutoridad(AuthorityEntity autoridad) {
        this.autoridad = autoridad;
    }


}
