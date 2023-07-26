import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'src/app/Services/category.service';
import { QuizService } from 'src/app/Services/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-quiz',
  templateUrl: './update-quiz.component.html',
  styleUrls: ['./update-quiz.component.css']
})
export class UpdateQuizComponent implements OnInit {

  id = 0;
  quiz: any;
  categories: any;

  constructor(
    private quizService: QuizService,
     private _route: ActivatedRoute,
      private categoryService: CategoryService,
      private router : Router,
      private snackbar : MatSnackBar
      ) { }
  ngOnInit(): void {

    this.id = this._route.snapshot.params['qid'];


    this.quizService.getQuiz(this.id).subscribe(
      (data) => {
        console.log(data);
        this.quiz = data;
      },
      (err) => {
        console.log(err);
      }
    );

    this.categoryService.getCategory().subscribe(
      (data) => {
        this.categories = data;
      },
      (error) => {
        console.log(error);
      }
    );


    throw new Error('Method not implemented.');
  }

  updateQuiz() {
    if (this.quiz.title.trim() == '' || this.quiz.title == null) {
      this.snackbar.open('Title is required', 'ok', {
        duration: 3000,
        verticalPosition: 'top',
        horizontalPosition: 'right',
      });

      return;
    }

    this.quizService.updateQuiz(this.quiz).subscribe(
      (data) => {
        console.log(data);
        Swal.fire('Done', 'Quiz is Updated', 'success').then((e) => {
          this.router.navigate(['/admin-dashboard/quizzes']);
        });
      },
      (error) => {
        this.snackbar.open('Quiz could not be updated', 'ok', {
          duration: 3000,
          verticalPosition: 'top',
          horizontalPosition: 'right',
        });
      }
    );
  }

}
