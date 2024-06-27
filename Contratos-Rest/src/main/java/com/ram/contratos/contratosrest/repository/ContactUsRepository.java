package com.ram.contratos.contratosrest.repository;

import com.ram.contratos.contratosrest.entities.ContactUsEntitty;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ContactUsRepository extends CrudRepository<ContactUsEntitty, String> {
}
