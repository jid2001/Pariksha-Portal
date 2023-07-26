package com.exam.demo.models.QuizCategory;

import java.util.LinkedHashSet;
import java.util.Set;

import org.hibernate.annotations.GeneratorType;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

@Entity
@Table(name = "Catogery")
public class Category {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;

	private String title;
	
	private String description;
	
	@OneToMany(mappedBy = "category", cascade = CascadeType.ALL )
	@JsonIgnore
	private Set<Quiz> quizzes= new LinkedHashSet<>();
	
	public Category () {
		
	}

	public Category(String title, String description) {
		super();
		this.title = title;
		this.description = description;
	}

	public long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}
	
	
}
