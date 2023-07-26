package com.exam.demo.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.exam.demo.models.QuizCategory.Quiz;

public interface QuizRepository extends JpaRepository<Quiz, Long> {

}
