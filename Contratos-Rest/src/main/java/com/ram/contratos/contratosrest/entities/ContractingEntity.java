package com.ram.contratos.contratosrest.entities;

import jakarta.persistence.*;


@Entity
@Table(name = "contracting_entity")
public class ContractingEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    @Column
    private String name;



    public ContractingEntity(String name) {
        this.name = name;
    }

    public ContractingEntity() {

    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
