package com.ram.contratos.contratosrest.repository;

import com.ram.contratos.contratosrest.entities.ContratoEntity;
import com.ram.contratos.contratosrest.entities.InventoryNodeEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.*;

@Repository
public interface NodeRepository extends JpaRepository<InventoryNodeEntity, Integer> {
    List<InventoryNodeEntity> findByContratoAndParentIsNull(ContratoEntity contrato);


}
