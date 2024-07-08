package com.example.controller;

import com.example.model.User;
import com.example.model.UserDAO;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.sun.net.httpserver.HttpsServer;

import java.net.InetSocketAddress;
import java.util.List;

@SuppressWarnings("unused")
public class UserController {

    private UserDAO userDAO = new UserDAO();

    public List<User> displayAllUser(){
        return userDAO.displayALlUser();
    }

    public User displayUser(Long id){
        return userDAO.displayUser(id);
    }

    public void createUser (User user){
        userDAO.createUser(user);
    }

    public void updateUser(User user){
        userDAO.updateUser(user);
    }

    public void deleteUser(Long id){
        userDAO.deleteUser(id);
    }
}
