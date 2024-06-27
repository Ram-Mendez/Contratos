package com.ram.contratos.contratosrest.repository;

import com.ram.contratos.contratosrest.entities.UserEntity;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends CrudRepository<UserEntity, Integer> {
    UserEntity findByEmail(String email);


}
