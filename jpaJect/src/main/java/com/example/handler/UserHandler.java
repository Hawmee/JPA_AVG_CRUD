package com.example.handler;

import com.example.controller.UserController;
import com.example.model.User;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.sun.net.httpserver.HttpExchange;
import com.sun.net.httpserver.HttpHandler;

import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.util.List;

public class UserHandler implements HttpHandler {
    private UserController userController = new UserController();
    private ObjectMapper om = new ObjectMapper();

    @Override
    public void handle(HttpExchange exchange) throws IOException {
        String requestedMethod = exchange.getRequestMethod();
        switch (requestedMethod){
            case "GET":
                handleGet(exchange);
                break;
            case "POST":
                handlePost(exchange);
                break;
            case "PUT":
                handlePut(exchange);
                break;
            case "DELETE":
                handleDelete(exchange);
                break;
            default:
                exchange.sendResponseHeaders(405,0);
                exchange.close();
        }
    }

    private void handleGet(HttpExchange exchange) throws IOException{
        String path = exchange.getRequestURI().getPath();
        if("/api/User".equals(path)){
            displayAllUser(exchange);
        }else {
            displayUser(exchange,Long.parseLong(path.substring("/api/User/".length())));
        }
    }

    private void displayAllUser(HttpExchange exchange) throws IOException {
        List<User> users = userController.displayAllUser();
        String response = om.writeValueAsString(users);
        sendResponse(exchange , 200 , response) ;
    }

    private void displayUser(HttpExchange exchange , Long id) throws IOException {
        User user = userController.displayUser(id);
        if(user != null){
            String response = om.writeValueAsString(user);
            sendResponse(exchange,200,response);
        }else{
            sendResponse(exchange,404,"No Such User");
        }
    }

    private void handlePost(HttpExchange exchange ) throws IOException {
        InputStream requestBody = exchange.getRequestBody();
        User user = om.readValue(requestBody , User.class);
        userController.createUser(user);
        sendResponse(exchange,201,"User Added");
    }

    private void handlePut(HttpExchange exchange) throws  IOException{
        String path = exchange.getRequestURI().getPath();
        Long id = Long.parseLong(path.substring("/api/User/".length()));


        InputStream requestBody = exchange.getRequestBody();
        User updatedUser = om.readValue(requestBody , User.class);

        User existingUser = userController.displayUser(id);

        if(existingUser != null){
            existingUser.setName(updatedUser.getName());
            existingUser.setEmail(updatedUser.getEmail());

            userController.updateUser(existingUser);
            sendResponse(exchange , 200 , "User Updated");
        }else{
            sendResponse( exchange , 404 , "User Not Found");
        }
    }

    private void handleDelete(HttpExchange exchange) throws IOException{
        String path = exchange.getRequestURI().getPath();
        Long id = Long.parseLong(path.substring("/api/User/".length()));

        User existingUser =  userController.displayUser(id);

        if(existingUser != null){
            userController.deleteUser(id);
            sendResponse(exchange , 200, "User Deleted");
        }else{
            sendResponse(exchange , 404, "User not Found");
        }
    }

    private void sendResponse(HttpExchange exchange , int statuscode , String response) throws IOException {
        exchange.sendResponseHeaders(statuscode,response.getBytes().length);
        OutputStream os = exchange.getResponseBody();
        os.write(response.getBytes());
        os.close();
    }
}
