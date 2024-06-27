package com.ram.contratos.contratosrest.controller;

import com.ram.contratos.contratosrest.classes.AuthorityDto;
import com.ram.contratos.contratosrest.entities.AuthorityEntity;
import com.ram.contratos.contratosrest.entities.ContratoEntity;
import com.ram.contratos.contratosrest.repository.AuthorityRepository;
import com.ram.contratos.contratosrest.repository.ContratosRepository;
import jakarta.persistence.EntityNotFoundException;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@RestController
public class AutoridadController {

    @Autowired
    private AuthorityRepository authorityRepository;
    @Autowired
    private ContratosRepository contratosRepository;

    @GetMapping("/entidad-autoridad")
    public Iterable<AuthorityEntity> getAuthorities() {
        return authorityRepository.findAll();
    }

    @GetMapping("/entidad-autoridad/{id}")
    public AuthorityEntity getAuthorityById(@PathVariable Integer id) {
        return authorityRepository.findById(id).orElse(null);
    }

    @PostMapping("/entidad-autoridad")
    public AuthorityEntity createAuthority(@RequestBody AuthorityDto authorityDto) {
        AuthorityEntity authority = new AuthorityEntity();
        authority.setName(authorityDto.getName());
        authority.setCifDni(authorityDto.getCifDni());
        authority.setAddress(authorityDto.getAddress());
        authority.setMunicipality(authorityDto.getMunicipality());
        authority.setZipCode(authorityDto.getZipCode());
        authority.setCountry(authorityDto.getCountry());
        authority.setPhone(authorityDto.getPhone());
        return authorityRepository.save(authority);

    }

    @PutMapping("/entidad-autoridad/{id}")
    public AuthorityEntity updateAuthority(@PathVariable Integer id, @RequestBody AuthorityEntity authority) {
        return authorityRepository.save(authority);
    }


    @DeleteMapping("/entidad-autoridad/{id}")
    @Transactional
    public void deleteAuthority(@PathVariable Integer id) {
        if (!authorityRepository.existsById(id)) {
            throw new EntityNotFoundException("AuthorityEntity with id " + id + " not found");
        }
        List<ContratoEntity> contratos = contratosRepository.findByAuthorityEntityId(id);
        if (!contratos.isEmpty()) {
            contratosRepository.deleteAll(contratos);
        }
        authorityRepository.deleteById(id);
    }
}

