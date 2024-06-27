package com.ram.contratos.contratosrest.controller;

import com.ram.contratos.contratosrest.classes.UserLoginModel;
import com.ram.contratos.contratosrest.entities.UserEntity;
import com.ram.contratos.contratosrest.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;


@RestController
public class LoginController {

    @Autowired
    private UserRepository userRepository;

    @PostMapping("/register")
    public UserEntity createUser(@RequestBody UserLoginModel user) {
        UserEntity userEntity = new UserEntity();
        userEntity.setEmail(user.getEmail());
        userEntity.setPassword(user.getPassword());
        return userRepository.save(userEntity);
    }
    @PostMapping("/login")
    public boolean login(@RequestBody UserLoginModel user) {
        UserEntity userEntity = userRepository.findByEmail(user.getEmail());
        return userEntity != null && userEntity.getPassword().equals(user.getPassword());
    }

}
