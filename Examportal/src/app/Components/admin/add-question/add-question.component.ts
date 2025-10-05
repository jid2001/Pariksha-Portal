import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Question } from 'src/app/Models/question';
import { QuestionService } from 'src/app/Services/question.service';
import Swal from 'sweetalert2';
import  ClassicEditor from '@ckeditor/ckeditor5-build-classic';


@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css']
})
export class AddQuestionComponent implements OnInit {
  public Editor = ClassicEditor;
  

  @Input() quizId:number =0;
  @Input() title:string =""; 
  @Output() toggleComponent = new EventEmitter<boolean>();


  question: Question = new Question();
  qid: any;
  qtitle: any;
  constructor( 
    private route: ActivatedRoute,
    private questionService: QuestionService,
    private router: Router) {}
  ngOnInit(): void {
    this.qid = this.route.snapshot.params['qid'];
    this.qtitle = this.route.snapshot.params['qtitle'];

    // If parent passed quizId via @Input prefer that, otherwise fall back to route param
    const idFromInput = this.quizId && this.quizId !== 0 ? this.quizId : null;
    const finalQuizId = idFromInput ?? this.qid;
    this.question.quiz['id'] = finalQuizId;
    console.debug('AddQuestion init: quizId input=', this.quizId, 'route qid=', this.qid, 'final=', finalQuizId);
  }

  questionSubmit() {
    console.log(this.question);
    const isEmpty = (v?: string) => !v || v.trim() === '';

    // validate required fields; if invalid, close the add form (emit toggle) and stop
    if (
      isEmpty(this.question.content) ||
      isEmpty(this.question.option1) ||
      isEmpty(this.question.option2) ||
      isEmpty(this.question.option3) ||
      isEmpty(this.question.option4) ||
      isEmpty(this.question.answer)
    ) {
      console.debug('AddQuestion validation failed — emitting toggle false');
      this.toggleComponent.emit(false);
      return;
    }
    // construct payload that keeps quiz as only an id reference
    const payload = { ...this.question, quiz: { id: this.quizId } };

    this.questionService.addQuestion(payload).subscribe({
      next: (data) => {
        Swal.fire('Done', 'Question is created', 'success').then(() => {
          // emit toggle to collapse the add-question UI, then navigate back to questions
          console.debug('AddQuestion success — emitting toggle false');
          this.toggleComponent.emit(false);
          // this.router.navigate(['/admin/view-question/', this.qid, this.qtitle]);
        });
      },
      error: (err) => {
        Swal.fire('Error', 'Error in Loading', 'error');
        // ensure toggle fires even on error so parent can react
        console.debug('AddQuestion error — emitting toggle false', err);
        this.toggleComponent.emit(false);
      }
    });
  }

  onCancel() {
    console.debug('AddQuestion onCancel — emitting toggle false');
    this.toggleComponent.emit(false);
  }

}
