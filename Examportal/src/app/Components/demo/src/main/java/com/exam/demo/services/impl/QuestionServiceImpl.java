package com.exam.demo.services.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.exam.demo.models.QuizCategory.Questions;
import com.exam.demo.models.QuizCategory.Quiz;
import com.exam.demo.repo.QuestionRepository;
import com.exam.demo.services.QuestionService;

@Service
public class QuestionServiceImpl implements QuestionService{

	
	@Autowired
	private QuestionRepository questionRepository;
	
	
	@Override
	public Questions addQuestions(Questions questions) {
		// TODO Auto-generated method stub
		return this.questionRepository.save(questions);
	}

	@Override
	public Questions updateQuestions(Questions questions) {
		// TODO Auto-generated method stub
		return this.questionRepository.save(questions);
	}

	@Override
	public List<Questions> getAllQuestions() {
		// TODO Auto-generated method stub
		return this.questionRepository.findAll();
	}

	@Override
	public Questions getQuestionsById(Long id) {
		// TODO Auto-generated method stub
		return this.questionRepository.findById(id).get();
	}

	@Override
	public List<Questions> getQuestionsOfQuiz(Quiz quiz) {
		// TODO Auto-generated method stub
		return this.questionRepository.findByQuiz(quiz);
	}

	@Override
	public void deleteQuestionById(Long id) {
		// TODO Auto-generated method stub
		this.questionRepository.deleteById(id);
		
	}

	

}
