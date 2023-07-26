package com.exam.demo.services.impl;

import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.exam.demo.models.User;
import com.exam.demo.models.UserRoles;
import com.exam.demo.repo.RoleRepository;
import com.exam.demo.repo.UserRepository;
import com.exam.demo.services.UserService;

@Service
public class UserServiceImpl implements UserService {

	@Autowired
	private UserRepository userRepository;
	
	@Autowired
	private RoleRepository roleRepository;
	
	// Creating user 
	
	
	@Override
	public User createUser(User user, Set<UserRoles> userroles) throws Exception {
		
		User local =  this.userRepository.findByusername(user.getUsername() );
		
		if(local != null) {
			System.out.println("User Already exists  ");
			throw new Exception("User already present "); 
		}
		else {
			for(UserRoles ur: userroles) {
				roleRepository.save(ur.getRoles());
			}
			
			user.getUserRoles().addAll(userroles);
			 local = this.userRepository.save(user);
			
		}
		return local;
	}

	@Override
	public User getUser(String username) {
		// TODO Auto-generated method stub
		
		return this.userRepository.findByusername(username);
	}

	@Override
	public void deleteByUserId(Long userId) {
		
		 this.userRepository.deleteById(userId);
		
		
	}

	@Override
	public void save(User tempUser) {
		// TODO Auto-generated method stub
		this.userRepository.save(tempUser);
		
	}

	
 
}
