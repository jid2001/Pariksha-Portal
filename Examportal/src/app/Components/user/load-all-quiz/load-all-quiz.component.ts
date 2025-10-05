import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { QuizService } from 'src/app/Services/quiz.service';

@Component({
  selector: 'app-load-all-quiz',
  templateUrl: './load-all-quiz.component.html',
  styleUrls: ['./load-all-quiz.component.css'],
})
export class LoadAllQuizComponent implements OnInit {
  cid: any;
  quizzes: any = [];
 
  constructor(
    private route: ActivatedRoute,
    private quizService: QuizService,
    private snacbar : MatSnackBar
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.cid = params['cid'];
      if (this.cid == 'all') {
        this.quizService.getActiveQuizzes().subscribe(
          (data) => {
            this.quizzes = data;
            console.log(this.quizzes);
          },
          (error) => {
            console.log(error);
            alert('Could not load');
          }
        );
      } else {
        this.quizService.getActiveQuizzesOfCategory(this.cid).subscribe((data) => {
      
          this.quizzes = data;
          if(this.quizzes.length==0){
            this.snacbar.open("No Quizzes are available for this category !!","",{
              duration:3000,
            });
          }
          console.log(this.quizzes);

        },
        (error) => {
        console.log(error);
        this.snacbar.open("Something went Wrong .... ", error.error,{
          duration: 3000});
      });
      }
    });
  }
}