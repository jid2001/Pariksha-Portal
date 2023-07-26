package com.exam.demo.services;

import java.util.List;
import com.exam.demo.models.QuizCategory.Quiz;

public interface QuizService {
	
	public Quiz addQuiz(Quiz quiz);
	
	public Quiz updatQuiz(Quiz quiz);
	
	public List<Quiz> getQuizzes();
	
	public Quiz getQuizeById(Long id);
	
	
	public void deleteQuiz(Long id);
	
	 
	

}
