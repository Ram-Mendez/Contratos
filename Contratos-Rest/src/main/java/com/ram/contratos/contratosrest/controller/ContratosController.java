package com.ram.contratos.contratosrest.controller;

import com.ram.contratos.contratosrest.classes.ContratoDto;
import com.ram.contratos.contratosrest.entities.AuthorityEntity;
import com.ram.contratos.contratosrest.entities.ContractingEntity;
import com.ram.contratos.contratosrest.entities.ContratoEntity;
import com.ram.contratos.contratosrest.repository.AdministratorRepository;
import com.ram.contratos.contratosrest.repository.AuthorityRepository;
import com.ram.contratos.contratosrest.repository.ContracterRepository;
import com.ram.contratos.contratosrest.repository.ContratosRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.NoSuchElementException;

@RestController
public class ContratosController {
    @Autowired
    private ContratosRepository contratosRepository;
    @Autowired
    private AuthorityRepository authorityRepository;
    @Autowired
    private ContracterRepository contracterRepository;
    @Autowired
    private AdministratorRepository administratorRepository;

    @GetMapping("/contratos")
    public List<ContratoEntity> getContratos() {
        List<ContratoEntity> contratosList = new ArrayList<>();
        contratosRepository.findAll().forEach(contratosList::add);
        return contratosList;
    }

    @GetMapping("/contratos/{id}")
    public ContratoEntity getContrato(@PathVariable Integer id) {
        return contratosRepository.findById(id)
                .orElseThrow(() -> new NoSuchElementException("Contrato not found" + id));
    }


    @PostMapping("/contratos")
    public ContratoEntity createContrato(@RequestBody ContratoDto contratoDto) {
        AuthorityEntity authority = authorityRepository.findById(contratoDto.getAuthorityEntity())
                .orElseThrow(() -> new NoSuchElementException("Authority not found" + contratoDto.getAuthorityEntity()));
        ContractingEntity contractor = contracterRepository.findById(contratoDto.getContractingEntity())
                .orElseThrow(() -> new NoSuchElementException("Contracting entity not found" + contratoDto.getContractingEntity()));
        ContratoEntity contrato = new ContratoEntity();
        contrato.setName(contratoDto.getName());
        contrato.setAuthorityEntity(authority);
        contrato.setContractingEntity(contractor);
        contrato.setCreationDate(LocalDate.now());
        if (contratoDto.getStartDate() == null) {
            contrato.setStartDate(LocalDate.now());

        } else {
            contrato.setStartDate(contratoDto.getStartDate());
        }


        return contratosRepository.save(contrato);

    }

    @PutMapping("/contratos/{id}")
    public ContratoEntity editContrato(@PathVariable Integer id, @RequestBody ContratoDto contratoDto) {
        AuthorityEntity authority = authorityRepository.findById(contratoDto.getAuthorityEntity())
                .orElseThrow(() -> new NoSuchElementException("Authority not found" + contratoDto.getAuthorityEntity()));
        ContractingEntity contractor = contracterRepository.findById(contratoDto.getContractingEntity())
                .orElseThrow(() -> new NoSuchElementException("Contracting entity not found" + contratoDto.getContractingEntity()));
        ContratoEntity contrato = contratosRepository.findById(id)
                .orElseThrow(() -> new NoSuchElementException("Contrato not found" + id));
        contrato.setName(contratoDto.getName());
        contrato.setAuthorityEntity(authority);
        contrato.setContractingEntity(contractor);
        contrato.setStartDate(contratoDto.getStartDate());


        return contratosRepository.save(contrato);
    }

    @DeleteMapping("/contratos/{id}")
    @Transactional
    public boolean deleteContrato(@PathVariable Integer id) {
        administratorRepository.deleteByContratosId(id);
        contratosRepository.deleteById(id);
        return true;
    }

}
