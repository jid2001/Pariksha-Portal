package com.exam.demo.controllers;

import java.util.ArrayList;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

import com.exam.demo.models.QuizCategory.Quiz;
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

import com.exam.demo.models.QuizCategory.Category;
import com.exam.demo.services.CategoryService;

@RestController
@RequestMapping("/category")
@CrossOrigin("*")
public class CategoryController {

	@Autowired
	private CategoryService categoryService;
	
	// Add categoriy api
	
	@PostMapping("/")
	public ResponseEntity<Category> addCategory(@RequestBody Category category){
		Category category1 = this.categoryService.addCategory(category);
		return ResponseEntity.ok(category1);
	}
	
	// update api
	@PutMapping("/")
	public ResponseEntity<Category> updateCategory(@RequestBody Category category){
		return ResponseEntity.ok(this.categoryService.updateCategory(category));
	}
	
	// get api
	
	@GetMapping("/")
	public ResponseEntity<List<Category>> getCategory(){
		return ResponseEntity.ok(this.categoryService.getCategories());
	}
	
	// get by id 
	@GetMapping("/{id}")
	public Category getCategoryById(@PathVariable("id") long id) {
		return this.categoryService.getCategoryById(id);
		
	}

    @GetMapping("/active/{id}")
    public ResponseEntity<?> getActiveQuizes(@PathVariable("id") long id){
        Category category = this.categoryService.getCategoryById(id);

        Set<Quiz> allQuiz = category.getQuizzes();
        List<Quiz> activeQuizList =   allQuiz.stream().filter(Quiz::isActive).toList();

        return ResponseEntity.ok(activeQuizList);
    }
	
	// delete category 
	
	@DeleteMapping("/{id}")
	public void deleteCategory(@PathVariable("id") long id) {
		this.categoryService.deleteCategory(id);
	}
	
}
