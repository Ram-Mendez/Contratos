package com.ram.contratos.contratosrest.classes;

import java.math.BigDecimal;

public class NodeTotals {

    private BigDecimal price;
    private BigDecimal quantity;
    private BigDecimal totalInclVat;

    public BigDecimal getTotalInclVat() {
        return totalInclVat;
    }

    public void setTotalInclVat(BigDecimal totalInclVat) {
        this.totalInclVat = totalInclVat;
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
}
