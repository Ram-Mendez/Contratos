package com.ram.contratos.contratosrest.repository;

import com.ram.contratos.contratosrest.entities.ContractingEntity;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ContracterRepository extends CrudRepository<ContractingEntity, Integer>{
}
