package com.exam.demo.models.QuizCategory;

import java.util.HashSet;
import java.util.Set;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

@Entity
@Table(name = "Quiz")
public class Quiz {
	
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	
	private String title;
	
	private String description;

	private Long maxMarks;
	
	private Long noOfQuestion = (long) 0;
	
	private boolean active  = false;
	
	
	@ManyToOne(fetch = FetchType.EAGER)
	private Category category;
	
	
	@OneToMany(mappedBy = "quiz", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
	@JsonIgnore
	private Set<Questions> questions =  new HashSet<>();
	
	
	
	public Quiz() {
		
	}

	public Quiz(String title, String description, Long maxMarks, Long noOfQuestion, boolean active) {
		super();
		this.title = title;
		this.description = description;
		this.maxMarks = maxMarks;
		this.noOfQuestion = noOfQuestion;
		this.active = active;
	}

	public Long getId() {
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

	public Long getMaxMarks() {
		return maxMarks;
	}

	public void setMaxMarks(Long maxMarks) {
		this.maxMarks = maxMarks;
	}

	public long getNoOfQuestion() {
		return noOfQuestion;
	}

	public void setNoOfQuestion(Long noOfQuestion) {
		this.noOfQuestion = noOfQuestion;
	}

	public boolean isActive() {
		return active;
	}

	public void setActive(boolean active) {
		this.active = active;
	}
	
	
	public Category getCategory() {
		return category;
	}

	public void setCategory(Category category) {
		this.category = category;
	}

	public Set<Questions> getQuestions() {
		return questions;
	}

	public void setQuestions(Set<Questions> questions) {
		this.questions = questions;
	}

	

}
