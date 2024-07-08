package com.example;

import com.example.handler.CORSHandler;
import com.example.handler.UserHandler;
import com.example.model.User;
import com.sun.net.httpserver.HttpServer;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;
import javax.persistence.TypedQuery;
import java.io.IOException;
import java.net.InetSocketAddress;
import java.util.List;

/**
 * Hello world!
 *
 */
@SuppressWarnings("unused")
public class App 
{
    public static void main( String[] args ) throws IOException {
        HttpServer server = HttpServer.create(new InetSocketAddress(8080),0);
        server.createContext("/api/User", new CORSHandler(new UserHandler()));
        server.setExecutor(null);
        server.start();
        System.out.println("Server running on port 8080");
    }
}
