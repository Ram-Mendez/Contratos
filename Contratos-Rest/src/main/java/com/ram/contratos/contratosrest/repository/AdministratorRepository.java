package com.ram.contratos.contratosrest.repository;

import com.ram.contratos.contratosrest.entities.AdministratorEntity;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AdministratorRepository extends CrudRepository<AdministratorEntity, Integer> {

    void deleteByContratosId(int id);
}
