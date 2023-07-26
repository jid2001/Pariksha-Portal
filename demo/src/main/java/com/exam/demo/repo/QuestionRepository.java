package com.exam.demo.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.exam.demo.models.QuizCategory.Questions;
import com.exam.demo.models.QuizCategory.Quiz;

public interface QuestionRepository  extends JpaRepository<Questions, Long>{

	List<Questions> findByQuiz(Quiz quiz);
}
