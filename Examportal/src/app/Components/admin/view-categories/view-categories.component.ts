import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/Services/category.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-categories',
  templateUrl: './view-categories.component.html',
  styleUrls: ['./view-categories.component.css']
})
export class ViewCategoriesComponent implements OnInit {
  // categories = [
  //   {
  //       "id": 1,
  //       "title": "Programming Languages",
  //       "description": "This  category contians quizzes on programming language"
  //   },
  //   {
  //       "id": 52,
  //       "title": "Aptitude languages",
  //       "description": "This  category contians  Aptitude  quizzes"
  //   },
  //   {
  //     "id": 1,
  //     "title": "Programming Languages",
  //     "description": "This  category contians quizzes on programming language"
  // },
  // {
  //     "id": 52,
  //     "title": "Aptitude languages",
  //     "description": "This  category contians  Aptitude  quizzes"
  // }
  // ]
categories:any;
  constructor(private categoryService : CategoryService) {}

  ngOnInit(): void {
    this.categoryService.getCategory().subscribe(
      (data)=>{
        this.categories = data;
        console.log(data);
      },
      (error)=>{
          Swal.fire(
            "Error loading categories"
          )
      }
      
      
    )
    
  }
 

  
}
