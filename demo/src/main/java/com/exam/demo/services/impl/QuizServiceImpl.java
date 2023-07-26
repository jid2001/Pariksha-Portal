package com.exam.demo.services.impl;

import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.exam.demo.models.QuizCategory.Quiz;
import com.exam.demo.repo.QuizRepository;
import com.exam.demo.services.QuizService;

@Service
public class QuizServiceImpl implements QuizService {

	
	@Autowired
	
	private QuizRepository quizRepository;
	
	
	@Override
	public Quiz addQuiz(Quiz quiz) {
		// TODO Auto-generated method stub
		return this.quizRepository.save(quiz);
	}

	@Override
	public Quiz updatQuiz(Quiz quiz) {
		// TODO Auto-generated method stub
		return this.quizRepository.save(quiz);
	}

	@Override
	public List<Quiz> getQuizzes() {
		// TODO Auto-generated method stub
		return this.quizRepository.findAll();
	}

	@Override
	public Quiz getQuizeById(Long id) {
		// TODO Auto-generated method stub
		return this.quizRepository.findById(id).get();
	}

	@Override
	public void deleteQuiz(Long id) {
		// TODO Auto-generated method stub
		
		this.quizRepository.deleteById(id);
		
	}

}
