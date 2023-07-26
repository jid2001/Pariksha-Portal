package com.exam.demo.services;

import java.util.List;

import com.exam.demo.models.QuizCategory.Category;

public interface CategoryService {

	public Category addCategory(Category category);
	public Category updateCategory(Category category);
	
	public List<Category> getCategories();
	
	public Category getCategoryById(Long id);
	
	public void deleteCategory(long id);
}
