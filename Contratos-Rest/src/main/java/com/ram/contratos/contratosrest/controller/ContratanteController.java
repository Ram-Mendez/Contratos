package com.ram.contratos.contratosrest.controller;


import com.ram.contratos.contratosrest.entities.ContractingEntity;
import com.ram.contratos.contratosrest.entities.ContratoEntity;
import com.ram.contratos.contratosrest.repository.ContracterRepository;
import com.ram.contratos.contratosrest.repository.ContratosRepository;
import jakarta.persistence.EntityNotFoundException;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@RestController
public class ContratanteController {

    @Autowired
    private ContracterRepository contracterRepository;
    @Autowired
    private ContratosRepository contratosRepository;

    @GetMapping("/entidad-contratante")
    public Iterable<ContractingEntity> getContractingEntity() {
        return contracterRepository.findAll();
    }

    @GetMapping("/entidad-contratante/{id}")
    public ContractingEntity getContractingEntityById(@PathVariable Integer id) {
        return contracterRepository.findById(id).orElse(null);
    }

    @PostMapping("/entidad-contratante")
    public ContractingEntity createContractingEntity(@RequestBody ContractingEntity contracter) {
        return contracterRepository.save(contracter);
    }

    @PutMapping("/entidad-contratante/{id}")
    public ContractingEntity updateContractingEntity(@PathVariable Integer id, @RequestBody ContractingEntity contracter) {
        return contracterRepository.save(contracter);
    }

    @DeleteMapping("/entidad-contratante/{id}")
    @Transactional
    public void deleteContractingEntityById(@PathVariable Integer id) {
        if (!contracterRepository.existsById(id)) {
            throw new EntityNotFoundException("ContractingEntity with id " + id + " not found");
        }

        List<ContratoEntity> contratos = contratosRepository.findByContractingEntityId(id);
        if (!contratos.isEmpty()) {
            contratosRepository.deleteAll(contratos);
        }

        contracterRepository.deleteById(id);
    }

}
