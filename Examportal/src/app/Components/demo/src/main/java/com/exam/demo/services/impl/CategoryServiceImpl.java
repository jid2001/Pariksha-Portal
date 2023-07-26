package com.exam.demo.services.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.exam.demo.models.QuizCategory.Category;
import com.exam.demo.repo.CategoryRepository;
import com.exam.demo.services.CategoryService;

@Service
public class CategoryServiceImpl implements CategoryService{

	
	@Autowired
	private CategoryRepository categoryRepository;
	
	
	@Override
	public Category addCategory(Category category) {
		// TODO Auto-generated method stub
		return this.categoryRepository.save(category);
	}

	@Override
	public Category updateCategory(Category category) {
		// TODO Auto-generated method stub
		return this.categoryRepository.save(category);
	}

	@Override
	public List<Category> getCategories() {
		// TODO Auto-generated method stub
		return this.categoryRepository.findAll();
	}

	@Override
	public Category getCategoryById(Long id) {
		// TODO Auto-generated method stub
		return this.categoryRepository.findById(id).get();
	}

	@Override
	public void deleteCategory(long id) {
		// TODO Auto-generated method stub
		this.categoryRepository.deleteById(id);
		
	}
	
}
