package com.exam.demo.controllers;

import java.util.ArrayList;
import java.util.List;
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

import com.exam.demo.models.QuizCategory.Questions;
import com.exam.demo.models.QuizCategory.Quiz;
import com.exam.demo.services.QuestionService;
import com.exam.demo.services.QuizService;

import io.jsonwebtoken.lang.Collections;

@RestController
@RequestMapping("/question")
@CrossOrigin("*")
public class QuestionController {
	
	  @Autowired
	    private QuestionService questionService;
	  
	  @Autowired
	  private QuizService quizService;
	  
	  
	    @PostMapping("/")
	    public ResponseEntity<Questions> addQuestion(@RequestBody Questions question) {
	        Questions question1 = this.questionService.addQuestions(question);
	        return ResponseEntity.ok(question1);
	    }

	    @PutMapping("/")
	    public ResponseEntity<?> updateQuestion(@RequestBody Questions question) {
	        Questions question1 = this.questionService.updateQuestions(question);
	        return ResponseEntity.ok(question1);
	    }
	    
	    // get question of perticular quiz
	    
	    @GetMapping("/quiz/{qid}")
	    public ResponseEntity<List<Questions>> getQuestionOfQuiz(@PathVariable("qid") long qid){
	    	
	    	Quiz quiz = this.quizService.getQuizeById(qid);
	    	
	    	Set<Questions> questions =  quiz.getQuestions();
	    	List<Questions> list = new ArrayList<>(questions);
	    	 if (list.size() > quiz.getNoOfQuestion()) {
	             list = list.subList(0,(int)(quiz.getNoOfQuestion()+1));
	         }
//	         Collections.shuffle(list); 
	         return ResponseEntity.ok(list);
	    	
	    }
	    
	    @GetMapping("/{quesid}")
	    public ResponseEntity<Questions> getQuestion(@PathVariable("quesid") Long quesid) {

	        return ResponseEntity.ok(this.questionService.getQuestionsById(quesid));
	    }

	    @DeleteMapping("/{quesid}")
	    public void deleteQuestion(@PathVariable("quesid") Long quesid) {
	        questionService.deleteQuestionById(quesid);
	    }


}
