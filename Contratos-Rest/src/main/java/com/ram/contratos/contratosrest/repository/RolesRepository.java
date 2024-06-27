package com.ram.contratos.contratosrest.repository;


import com.ram.contratos.contratosrest.entities.RolesEntity;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.Set;

@Repository
public interface RolesRepository extends CrudRepository<RolesEntity, Integer> {
}
