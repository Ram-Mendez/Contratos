package com.ram.contratos.contratosrest.repository;

import com.ram.contratos.contratosrest.entities.ContratoEntity;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.*;


@Repository
public interface ContratosRepository extends CrudRepository<ContratoEntity, Integer> {
    List<ContratoEntity> findByContractingEntityId(Integer contractingEntityId);

    List<ContratoEntity> findByAuthorityEntityId(Integer authorityEntityId);
}
