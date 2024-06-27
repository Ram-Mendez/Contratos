package com.ram.contratos.contratosrest.classes;

public class UserLoginModel {
    private String email;
    private String password;

    public UserLoginModel(String email, String password) {
        this.email = email;
        this.password = password;
    }

    public UserLoginModel() {
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getPassword() {
        return password;
    }

}
