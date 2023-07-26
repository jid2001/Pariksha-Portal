package com.exam.demo.models;

import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;

@Entity
public class UserRoles {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long userRoleId;
	
	
	// User
	@ManyToOne(fetch = FetchType.EAGER) 
	private User user;
	
	@ManyToOne
	private Roles roles;
	
	public UserRoles() {
		
	}

	public UserRoles(Long userRoleId, User user, Roles roles) {
		super();
		this.userRoleId = userRoleId;
		this.user = user;
		this.roles = roles;
	}

	public Long getUserRoleId() {
		return userRoleId;
	}

	public void setUserRoleId(Long userRoleId) {
		this.userRoleId = userRoleId;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public Roles getRoles() {
		return roles;
	}

	public void setRoles(Roles roles) {
		this.roles = roles;
	}

}
