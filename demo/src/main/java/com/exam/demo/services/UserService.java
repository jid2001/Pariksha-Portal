package com.exam.demo.services;

import java.util.Set;

import com.exam.demo.models.User;
import com.exam.demo.models.UserRoles;

public interface UserService {
	
	
	// Service for creating user
	
	public User createUser(User user, Set<UserRoles> userroles) throws Exception; 
	
	// Service for getting user by username 
	
	public User getUser(String username);
	
	// Service for deleting user by user id

	public void deleteByUserId(Long userId);

	public void save(User tempUser);
	
	
}
