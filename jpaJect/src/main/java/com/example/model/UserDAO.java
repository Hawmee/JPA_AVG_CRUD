package com.example.model;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;
import java.util.List;

public class UserDAO {

    private final EntityManagerFactory emf = Persistence.createEntityManagerFactory("UserPU");

    public void createUser(User user){
        EntityManager em = emf.createEntityManager();
        em.getTransaction().begin();
        em.persist(user);
        em.getTransaction().commit();
        em.close();
    }

    public User displayUser(Long id){
        EntityManager em = emf.createEntityManager();
        User user = em.find(User.class,id);
        em.close();
        return user;
    }

    public List<User> displayALlUser(){
        EntityManager em = emf.createEntityManager();
        List<User> users = em.createQuery("SELECT user from User user",User.class).getResultList();
        em.close();
        return users;
    }

    public void updateUser (User user){
        EntityManager em = emf.createEntityManager();
        em.getTransaction().begin();
        em.merge(user);
        em.getTransaction().commit();
        em.close();
    }

    public void deleteUser (Long id){
        EntityManager em = emf.createEntityManager();
        em.getTransaction().begin();
        User user = em.find(User.class , id);
        if (user != null){
            em.remove(user);
        }
        em.getTransaction().commit();
        em.close();
    }
}
