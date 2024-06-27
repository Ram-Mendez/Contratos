package com.ram.contratos.contratosrest.entities;

import jakarta.persistence.*;

import java.time.LocalDate;

@Entity
@Table(name = "contratos")
public class ContratoEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    @Column
    private String name;

    @Column(name = "creation_date")
    private LocalDate creationDate;
    @Column(name = "start_date")
    private LocalDate startDate;
    @ManyToOne(cascade = CascadeType.PERSIST)
    @JoinColumn()
    private ContractingEntity contractingEntity;
    @ManyToOne(cascade = CascadeType.PERSIST)
    @JoinColumn()
    private AuthorityEntity authorityEntity;


    public LocalDate getStartDate() {
        return startDate;
    }


    public void setStartDate(LocalDate startDate) {
        this.startDate = startDate;
    }


    public LocalDate getCreationDate() {
        return creationDate;
    }

    public void setCreationDate(LocalDate creationDate) {
        this.creationDate = creationDate;
    }


    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }


    public ContractingEntity getContractingEntity() {
        return contractingEntity;
    }

    public void setContractingEntity(ContractingEntity contractingEntity) {
        this.contractingEntity = contractingEntity;
    }

    public AuthorityEntity getAuthorityEntity() {
        return authorityEntity;
    }

    public void setAuthorityEntity(AuthorityEntity authorityEntity) {
        this.authorityEntity = authorityEntity;
    }
}
