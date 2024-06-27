package com.ram.contratos.contratosrest.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;

import java.math.BigDecimal;
import java.util.*;
import java.util.ArrayList;
import java.util.Set;

@Entity
public class InventoryNodeEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    @ManyToOne
    @JoinColumn(name = "parent")
    @JsonIgnore
    private InventoryNodeEntity parent;

    private String description;

    @OneToMany(mappedBy = "parent", cascade = CascadeType.ALL)
    private List<InventoryNodeEntity> children = new ArrayList<>();

    @ManyToOne
    @JoinColumn(name = "contrato", nullable = false)
    private ContratoEntity contrato;

    @Column
    private BigDecimal quantity = BigDecimal.ZERO;
    @Column
    private BigDecimal price = BigDecimal.ZERO;
    @Column
    private BigDecimal vatPercentage = BigDecimal.ZERO;




    // obtiene el valor total con IVA
    public BigDecimal getTotalInclVat() {
        return price.multiply(quantity).multiply(vatPercentage.add(BigDecimal.ONE));
    }

    // obtiene el valor total sin IVA
    public BigDecimal getTotalExcVat() {
        return price.multiply(quantity);
    }

    // obtiene el valor del IVA Total
    public BigDecimal getVat() {
        return price.multiply(quantity).multiply(vatPercentage);
    }


    public BigDecimal getQuantity() {
        return quantity;
    }

    public void setQuantity(BigDecimal quantity) {
        this.quantity = quantity;
    }

    public BigDecimal getPrice() {
        return price;
    }

    public void setPrice(BigDecimal price) {
        this.price = price;
    }

    public BigDecimal getVatPercentage() {
        return vatPercentage;
    }

    public void setVatPercentage(BigDecimal vatPercentage) {
        this.vatPercentage = vatPercentage;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public InventoryNodeEntity getParent() {
        return parent;
    }

    public void setParent(InventoryNodeEntity parent) {
        this.parent = parent;
    }

    public List<InventoryNodeEntity> getChildren() {
        return children;
    }

    public void setChildren(List<InventoryNodeEntity> children) {
        this.children = children;
    }

    public ContratoEntity getContrato() {
        return contrato;
    }

    public void setContrato(ContratoEntity contrato) {
        this.contrato = contrato;
    }
}
