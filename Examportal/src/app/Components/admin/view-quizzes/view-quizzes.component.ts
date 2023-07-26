import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { QuizService } from 'src/app/Services/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-quizzes',
  templateUrl: './view-quizzes.component.html',
  styleUrls: ['./view-quizzes.component.css']
})
export class ViewQuizzesComponent implements OnInit {

  // quizzes = [
  //   {
  //     id: 1,
  //     title: 'C++ mcq',
  //     description: 'C++ mcq test',
  //     noOfQuestion: 30,
  //     maxMarks: 50,
  //     category: {
  //       title: ' programming'
  //     }

  //   },
  //   {
  //     id: 1,
  //     title: 'C++ mcq',
  //     description: 'C++ mcq test',
  //     noOfQuestions: 30,
  //     maxMarks: 50,
  //     category: {
  //       title: ' programming'
  //     }

  //   }
  // ]
  quizzes:any;

  constructor(private quizService: QuizService, private router : Router) { }

  ngOnInit(): void {
    // throw new Error('Method not implemented.');
    this.quizService.getQuizzes().subscribe(

      (data: any) => {
        this.quizzes = data;
        console.log(data);
      },
      (err: any) => {
        Swal.fire(
          'Error',
          'Error loading quizzes '
        )
      });


  }

  deleteQuiz(qid:any) {
    Swal.fire({
      icon: 'info',
      title: 'Are you sure you want to delete?',
      confirmButtonText: 'Delete',
      showCancelButton: true,
    }).then((result) => {
      if (result.isConfirmed) {
        this.quizService.deleteQuiz(qid).subscribe(
          (data) => {
            this.ngOnInit();
            Swal.fire('Success!', 'Quiz Deleted ', 'success');
          },
          (error) => {
            Swal.fire('Error!', 'server loading error', 'error');
          }
        );
      }
    });
  }

  updateQuiz(qid: any) {
    this.router.navigate(['/admin-dashboard/update-quiz/', qid]);
  }

  viewQuestion(qid: any, title:string) {
    console.log(qid, title);
    this.router.navigate(['/admin-dashboard/view-questions/',{qid,title}]);
  }
}
