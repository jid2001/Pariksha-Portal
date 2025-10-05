package com.exam.demo.controllers;

import java.util.HashSet;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.exam.demo.models.Roles;
import com.exam.demo.models.User;
import com.exam.demo.models.UserRoles;
import com.exam.demo.repo.RoleRepository;
import com.exam.demo.services.UserService;

@CrossOrigin("*")
@RestController
@RequestMapping("/user")
public class UserController {
    @Autowired
    private UserService userService;
    @Autowired
    private RoleRepository roleRepository;

	// Post request for user
	@PostMapping("/")
	public ResponseEntity<?> createUser(@RequestBody User user) {
        try {
            Roles roles = roleRepository.findByRoleName("Normal");
            if (roles == null) {
                roles = new Roles();
                roles.setRoleName("Normal");
                roles = roleRepository.save(roles);
            }
            Set<UserRoles> urset = new HashSet<>();
            UserRoles ur = new UserRoles();
            ur.setRoles(roles);
            ur.setUser(user);
            urset.add(ur);
            User createdUser = this.userService.createUser(user, urset);
            return ResponseEntity.ok(createdUser);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

	
	// Get user by usename 
	
	@GetMapping("/{username}")
	public User getUser(@PathVariable("username") String username) {
		return this.userService.getUser(username);
	}
	
	
	// Delete user by userid
	
	@DeleteMapping("/{userId}")
	public void deleteUser(@PathVariable("userId") Long userId) {
		 this.userService.deleteByUserId(userId);
	}
	
	
	// update user by id
	@PutMapping("/{username}")
	public void updateUser(@PathVariable("username") String username, @RequestBody User user){
		
		User tempUser = this.userService.getUser(username);
		
		tempUser.setFirstName(user.getFirstName());
		tempUser.setLastName(user.getLastName());
		tempUser.setEmailId(user.getEmailId());
		tempUser.setUsername(user.getUsername());
		tempUser.setPassword(user.getPassword());
		tempUser.setUserRoles(user.getUserRoles());
		
		this.userService.save(tempUser);
		
		
	}
	
	
}