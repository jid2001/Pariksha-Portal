package com.exam.demo;

import java.io.Console;
import java.util.HashSet;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.servlet.config.CorsBeanDefinitionParser;
import org.springframework.web.servlet.config.annotation.CorsRegistration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import com.exam.demo.models.Roles;
import com.exam.demo.models.User;
import com.exam.demo.models.UserRoles;
import com.exam.demo.services.UserService;

@SpringBootApplication
public class DemoApplication  {
	
	@Autowired
	private UserService userService;

	public static void main(String[] args) {
		SpringApplication.run(DemoApplication.class, args);
			System.out.println("Code Started Succesfully......!");
	
	}

	// Globle level cros origni 
//	@Bean
//	public WebMvcConfigurer corsConfigurer() {
//		return new WebMvcConfigurer() {
//			@Override
//			public void addCorsMappings(CorsRegistry registry) {
//				registry.addMapping("/**").allowedOrigins("http://localhost:4200");
//			}
//		};
//		
//	}
//	
//		// creating a test user
//		
//		
//		User user1 = new User();
//		user1.setFirstName("Jidnyesh");
//		user1.setLastName("Patil");
//		user1.setUsername("Jid_2001");
//		user1.setEmailId("abc@123.com");
//		user1.setPassword("abc");
//		
//		
//		Roles roles = new Roles();
//		
//		roles.setRoleId(1L);
//		
//		roles.setRoleName("Admin");
//		
//		Set<UserRoles> urset = new HashSet<>();
//		UserRoles ur = new UserRoles();
//		
//		ur.setRoles(roles);
//		
//		ur.setUser(user1);
//		
//		urset.add(ur);
//		
//		
//		User user = this.userService.createUser(user1, urset);
//		
//		if(user != null)
//		System.out.println(user.getUsername());
//		
				
				
	

}
