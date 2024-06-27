package com.ram.contratos.contratosrest.controller;

import com.ram.contratos.contratosrest.classes.RolesDto;
import com.ram.contratos.contratosrest.entities.RolesEntity;
import com.ram.contratos.contratosrest.entities.UserEntity;
import com.ram.contratos.contratosrest.repository.RolesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Set;

@RestController
public class RolesController {
    @Autowired
    private RolesRepository rolesRepository;

    @PostMapping("/roles")
    public RolesEntity createRole(@RequestBody RolesDto role) {
        RolesEntity createRole = new RolesEntity();
        createRole.setNombre(role.getNombre());
        createRole.setDescription(role.getDescription());
        return rolesRepository.save(createRole);
    }

    @GetMapping("/roles")
    public Iterable<RolesEntity> getRoles() {
        return rolesRepository.findAll();
    }


    @GetMapping("/roles/{id}/users")
    public Set<UserEntity> getUsersByRole(@PathVariable Integer id) {
        RolesEntity role = rolesRepository.findById(id).orElseThrow(() -> new RuntimeException("Role not found"));
        return role.getUsers();
    }

    @GetMapping("/role/{id}")
    public RolesEntity getRole(@PathVariable Integer id) {
        return rolesRepository.findById(id).orElseThrow(() -> new RuntimeException("Role not found"));
    }

    @PutMapping("/roles/{id}")
    public RolesEntity updateRole(@PathVariable Integer id, @RequestBody RolesDto role) {
        RolesEntity updateRole = rolesRepository.findById(id).orElseThrow(() -> new RuntimeException("Role not found"));
        if (updateRole != null) {
            updateRole.setNombre(role.getNombre());
            updateRole.setDescription(role.getDescription());
            return rolesRepository.save(updateRole);
        }
        return null;
    }

    @DeleteMapping("/roles/{id}")
    public void deleteRole(@PathVariable Integer id) {
        rolesRepository.deleteById(id);
    }
}
