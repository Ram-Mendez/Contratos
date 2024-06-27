package com.ram.contratos.contratosrest.repository;

import com.ram.contratos.contratosrest.entities.AuthorityEntity;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface AuthorityRepository extends CrudRepository<AuthorityEntity, Integer> {
    boolean existsByName(String name);
    AuthorityEntity findByName(String name);
}

