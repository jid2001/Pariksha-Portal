package com.exam.demo.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.exam.demo.models.User;

public interface UserRepository  extends JpaRepository<User, Long>{

	User findByusername(String username);



}
