package com.ram.contratos.contratosrest.controller;

import com.fasterxml.jackson.annotation.JsonAutoDetect;
import com.ram.contratos.contratosrest.classes.AdministratorDto;
import com.ram.contratos.contratosrest.entities.AdministratorEntity;
import com.ram.contratos.contratosrest.entities.RolesEntity;
import com.ram.contratos.contratosrest.repository.*;
import jakarta.transaction.Transactional;
import org.apache.catalina.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashSet;
import java.util.Set;

@RestController
public class AdministratorController {

    @Autowired
    private AdministratorRepository administratorRepository;
    @Autowired
    private AuthorityRepository authorityRepository;
    @Autowired
    private ContratosRepository contratoRepository;
    @Autowired
    private UserRepository userRepository;

    @GetMapping("/administrators")
    public Iterable<AdministratorEntity> getAdministrators() {
        return administratorRepository.findAll();
    }

    @GetMapping("/administrator/{id}")
    public AdministratorEntity getAdministrator(@PathVariable int id) {
        return administratorRepository.findById(id).orElseThrow(() -> new RuntimeException("Administrator not found"));
    }

    @PostMapping("/add-administrator")
    public AdministratorEntity createAdministrator(@RequestBody AdministratorDto administrator) {

        AdministratorEntity administratorEntity = new AdministratorEntity();
        administratorEntity.setContrato(contratoRepository.findById(administrator.getContrato()).orElseThrow(() -> new RuntimeException("Contract not found")));
        administratorEntity.setAutoridad(authorityRepository.findById(administrator.getAutoridad()).orElseThrow(() -> new RuntimeException("Authority not found")));
        administratorEntity.setUser(userRepository.findById(administrator.getUser()).orElseThrow(() -> new RuntimeException("User not found")));


        return administratorRepository.save(administratorEntity);
    }

    @PutMapping("/update-administrator/{id}")
    public AdministratorEntity updateAdministrator(@PathVariable int id, @RequestBody AdministratorDto administrator) {
        AdministratorEntity administratorEntity = administratorRepository.findById(id).orElseThrow(() -> new RuntimeException("Administrator not found"));

        administratorEntity.setContrato(contratoRepository.findById(administrator.getContrato()).orElseThrow(() -> new RuntimeException("Contract not found")));
        administratorEntity.setAutoridad(authorityRepository.findById(administrator.getAutoridad()).orElseThrow(() -> new RuntimeException("Authority not found")));
        administratorEntity.setUser(userRepository.findById(administrator.getUser()).orElseThrow(() -> new RuntimeException("User not found")));

        return administratorRepository.save(administratorEntity);
    }

    @DeleteMapping("/delete-administrator/{id}")
    @Transactional
    public void deleteAdministrator(@PathVariable int id) {


        administratorRepository.deleteById(id);
    }

}

