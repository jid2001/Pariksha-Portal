import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { CategoryService } from 'src/app/Services/category.service';
import { QuizService } from 'src/app/Services/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-quiz',
  templateUrl: './add-quiz.component.html',
  styleUrls: ['./add-quiz.component.css']
})
export class AddQuizComponent implements OnInit {

  quiz = {
    title : '',
    description: '',
    maxMarks : 0,
    noOfQuestion : 0,
    active : false,
    category : {
      id: 0
    },

  };

  categories! : any;
  constructor(private _cat : CategoryService, private quizService : QuizService , private snacbar : MatSnackBar,
    private router : Router) { }
  ngOnInit(): void {
    this._cat.getCategory().subscribe(
      (data : any)=>{
        this.categories = data;
      },
      (error)=>{
        console.log(error);
      }
    )
    throw new Error('Method not implemented.');

  }
  formSubmit() :void{

    if(this.quiz.title.length === 0 || (this.quiz.title == null)){ 
      this.snacbar.open("Titel is requiered", 'Okay', {
        duration: 3000
      })
      return;
    }

    this.quizService.addQuiz(this.quiz).subscribe(
      (data : any)=>{
        Swal.fire(
          'Success',
          'Quiz added successfully',
           'success'
      )
      this.quiz= {
        title : '',
    description: '',
    maxMarks : 0,
    noOfQuestion : 0,
    active : false,
    category : {
      id: 0
    },

      }
        this.router.navigate(['/admin-dashboard/quizzes']);

        
        console.log(data);
      },
      (error)=>{
        console.log(error);
        Swal.fire(
          'error',
          'Error adding quiz',
          'error'
        )
      }
    )


  };

  //

  
}
