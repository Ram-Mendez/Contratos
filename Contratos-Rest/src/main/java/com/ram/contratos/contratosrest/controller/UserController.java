package com.ram.contratos.contratosrest.controller;

import com.ram.contratos.contratosrest.classes.NewUserDto;
import com.ram.contratos.contratosrest.entities.RolesEntity;
import com.ram.contratos.contratosrest.entities.UserEntity;
import com.ram.contratos.contratosrest.repository.RolesRepository;
import com.ram.contratos.contratosrest.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashSet;
import java.util.Set;

@RestController
public class UserController {

    @Autowired
    private UserRepository userRepository;
    @Autowired
    private RolesRepository rolesRepository;


    @GetMapping("/users")
    public Iterable<UserEntity> getUsers() {
        return userRepository.findAll();
    }

    @GetMapping("/users/{id}")
    public UserEntity getUser(@PathVariable Integer id) {
        return userRepository.findById(id).orElseThrow(() -> new RuntimeException("User not found"));
    }

    @PostMapping("/add-user")
    public UserEntity createUser(@RequestBody NewUserDto newUser) {
        UserEntity user = new UserEntity();
        user.setName(newUser.getName());
        user.setLastName(newUser.getLastName());
        user.setDni(newUser.getDni());
        user.setEmail(newUser.getEmail());
        user.setPhone(newUser.getPhone());

        Set<RolesEntity> roles = new HashSet<>();
        newUser.getRoles().forEach((roleId) -> {
            RolesEntity role = rolesRepository.findById(roleId).orElseThrow(() -> new RuntimeException("Role not found"));
            roles.add(role);
        });
        user.setRoles(roles);


        return userRepository.save(user);
    }

    @PutMapping("/users/{id}")
    public UserEntity updateUser(@PathVariable Integer id, @RequestBody NewUserDto newUser) {
        UserEntity user = userRepository.findById(id).orElseThrow(() -> new RuntimeException("User not found"));
        if (user != null) {
            user.setName(newUser.getName());
            user.setLastName(newUser.getLastName());
            user.setDni(newUser.getDni());
            user.setEmail(newUser.getEmail());
            user.setPhone(newUser.getPhone());
            Set<RolesEntity> roles = new HashSet<>();
            newUser.getRoles().forEach((roleId) -> {
                RolesEntity role = rolesRepository.findById(roleId).orElseThrow(() -> new RuntimeException("Role not found"));
                roles.add(role);
            });
            user.setRoles(roles);
            return userRepository.save(user);
        }
        return null;
    }
    @DeleteMapping("/users/{id}")
    public void deleteUser(@PathVariable Integer id) {
        userRepository.deleteById(id);
    }

}
