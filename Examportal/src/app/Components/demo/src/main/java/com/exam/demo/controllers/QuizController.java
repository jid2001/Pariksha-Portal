package com.exam.demo.controllers;

import java.util.List;

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

import com.exam.demo.models.QuizCategory.Quiz;
import com.exam.demo.services.QuizService;

@RestController
@RequestMapping("/quiz")
@CrossOrigin("*")
public class QuizController {
	
	@Autowired
	private QuizService quizService;
	
	
	// add quiz
	
	@PostMapping("/")
	public ResponseEntity<Quiz> addQuiz(@RequestBody Quiz quiz){
		return ResponseEntity.ok(this.quizService.addQuiz(quiz));
	}
	
	// update quiz
	
	@PutMapping("/")
	public ResponseEntity<Quiz> updateQuiz(@RequestBody Quiz quiz){
		return ResponseEntity.ok(this.quizService.updatQuiz(quiz));
	}
	
	// get quiz
	
	@GetMapping("/")
	public ResponseEntity<List<Quiz>> getQuizzes(){
		return ResponseEntity.ok(this.quizService.getQuizzes());
	}
	
	// get by id 
	
	@GetMapping("/{id}")
	public Quiz getQuizById(@PathVariable("id") long id) {
		return this.quizService.getQuizeById(id);
	}
	
	
	// delete quiz
	
	@DeleteMapping("/{id}")
	public void deleteQuiz(@PathVariable("id") Long id) {
//		System.out.println(id instanceof Long);
		
		this.quizService.deleteQuiz(id);
	}
	

}
