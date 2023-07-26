package com.exam.demo.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.exam.demo.models.QuizCategory.Category;

public interface CategoryRepository extends JpaRepository<Category, Long>{

}
