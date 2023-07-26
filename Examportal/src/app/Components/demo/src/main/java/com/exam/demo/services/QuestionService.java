package com.exam.demo.services;

import java.util.List;

import com.exam.demo.models.QuizCategory.Questions;
import com.exam.demo.models.QuizCategory.Quiz;

public interface QuestionService {

	public Questions addQuestions(Questions questions);
	
	public Questions updateQuestions(Questions questions);
	
	public List<Questions> getAllQuestions();
	
	public Questions getQuestionsById(Long id);
	
	public List<Questions> getQuestionsOfQuiz(Quiz quiz);
	
	public void deleteQuestionById(Long id);
	
}
