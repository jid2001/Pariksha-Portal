 package com.exam.demo.services.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.exam.demo.models.User;
import com.exam.demo.repo.UserRepository;

@Service
public class UserDetailsServiceImpl implements UserDetailsService  {

	@Autowired
	private UserRepository userRepository;
	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		
		// we have inherited user class from user details so we can return users here
		User user = this.userRepository.findByusername(username);
		  
		if(user == null ) {
			System.out.println("User Not Found");
			throw new UsernameNotFoundException("No username found  !!" );
		}
		return user;
	}

}
