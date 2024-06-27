package com.ram.contratos.contratosrest.controller;

import com.ram.contratos.contratosrest.classes.ContactUsModel;
import com.ram.contratos.contratosrest.entities.ContactUsEntitty;
import com.ram.contratos.contratosrest.repository.ContactUsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ContactUsController {
    @Autowired
    private ContactUsRepository contactUsRepository;

    @PostMapping("/contact-us")
    public ContactUsEntitty contactUs(@RequestBody ContactUsModel contactUsModel) {
        ContactUsEntitty customer = new ContactUsEntitty();
        customer.setName(contactUsModel.getName());
        customer.setEmail(contactUsModel.getEmail());
        customer.setMessage(contactUsModel.getMessage());

        return contactUsRepository.save(customer);
    }


}
