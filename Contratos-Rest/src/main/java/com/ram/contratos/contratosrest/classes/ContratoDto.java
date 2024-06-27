package com.ram.contratos.contratosrest.classes;

import java.time.LocalDate;

public class ContratoDto {


    private Integer id;
    private String name;
    private LocalDate startDate;
    private Integer contractingEntity;
    private Integer authorityEntity;


    public LocalDate getStartDate() {
        return startDate;
    }

    public void setStartDate(LocalDate startDate) {
        this.startDate = startDate;
    }

    public Integer getContractingEntity() {
        return contractingEntity;
    }


    public void setContractingEntity(Integer contractingEntity) {
        this.contractingEntity = contractingEntity;
    }

    public Integer getAuthorityEntity() {
        return authorityEntity;
    }

    public void setAuthorityEntity(Integer authorityEntity) {
        this.authorityEntity = authorityEntity;
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
