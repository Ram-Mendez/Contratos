package com.ram.contratos.contratosrest.entities;

import jakarta.persistence.*;
import jdk.jfr.Name;


@Entity
public class AuthorityEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    @Column
    private String name;
    @Column(name = "cif_dni")
    private String cifDni;
    @Column
    private String address;
    @Column
    private String municipality;
    @Column(name = "zip_code")
    private String zipCode;
    @Column
    private String country;
    @Column
    private String phone;


    public String getCifDni() {
        return cifDni;
    }

    public void setCifDni(String cifDni) {
        this.cifDni = cifDni;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getMunicipality() {
        return municipality;
    }

    public void setMunicipality(String municipality) {
        this.municipality = municipality;
    }

    public String getZipCode() {
        return zipCode;
    }

    public void setZipCode(String zipCode) {
        this.zipCode = zipCode;
    }

    public String getCountry() {
        return country;
    }

    public void setCountry(String country) {
        this.country = country;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }


    public AuthorityEntity(String name) {
        this.name = name;
    }

    public AuthorityEntity() {

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
