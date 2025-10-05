import { LocationStrategy } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuestionService } from 'src/app/Services/question.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-quiz-start',
  templateUrl: './quiz-start.component.html',
  styleUrls: ['./quiz-start.component.css'],
})
export class QuizStartComponent implements OnInit {
  // route / quiz identifiers
  quizId!: number;

  // questions retrieved from server for this quiz
  quizQuestions: any[] = [];

  // results
  score = 0;
  correctCount = 0;
  attemptedCount = 0;
  maxMarks = 0;
  submitted = false;

  // timer related
  totalDurationSeconds = 0; // full quiz duration (secs)
  remainingSeconds = 0; // remaining seconds
  private tickIntervalRef: any = null;

  constructor(
    private locationStrategy: LocationStrategy,
    private route: ActivatedRoute,
    private questionService: QuestionService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.quizId = Number(this.route.snapshot.params['qid']);
    this.preventBackNavigation();
    this.loadQuizQuestions();
  }

  private loadQuizQuestions(): void {
    this.questionService.getQuestionsOfQuizForUser(this.quizId).subscribe(
      (questions: any) => {
        this.quizQuestions = questions || [];
        // ensure givenAnswer exists for each question
        this.quizQuestions.forEach((q) => (q.givenAnswer = q.givenAnswer ?? ''));
        // determine max marks from quiz meta if available
        if (this.quizQuestions.length > 0 && this.quizQuestions[0].quiz?.maxMarks) {
          this.maxMarks = Number(this.quizQuestions[0].quiz.maxMarks) || 0;
        }
        // start timer after loading questions
        this.startTimer();
      },
      (error) => {
        console.error('Failed to load quiz questions', error);
      }
    );
  }

  private preventBackNavigation(): void {
    history.pushState(null, '', location.href);
    this.locationStrategy.onPopState(() => {
      history.pushState(null, '', location.href);
    });
  }

  confirmSubmit(): void {
    Swal.fire({
      title: 'Do you want to submit the Quiz?',
      showCancelButton: true,
      confirmButtonText: 'Submit',
      icon: 'info',
    }).then((result) => {
      if (result.isConfirmed) {
        this.evaluateQuiz();
      }
    });
  }

  private evaluateQuiz(): void {
    this.submitted = true;
    // stop timer
    this.clearTimer();

    this.score = 0;
    this.correctCount = 0;
    this.attemptedCount = 0;

    const totalQuestions = this.quizQuestions.length || 1;
    const perQuestionMark = this.maxMarks > 0 ? this.maxMarks / totalQuestions : 0;

    for (const q of this.quizQuestions) {
      const given = (q.givenAnswer || '').toString().trim();
      if (given !== '') this.attemptedCount++;
      if (given === q.answer) {
        this.correctCount++;
        this.score += perQuestionMark;
      }
    }

    // round score to 2 decimals
    this.score = Math.round(this.score * 100) / 100;
  }

  private startTimer(): void {
    // default to 5 minutes if quiz meta not provided (300s)
    this.totalDurationSeconds = 300 + 3; // original had 303

    // use a quiz-scoped storage key so multiple quizzes don't conflict
    const storageKey = `quiz_timer_${this.quizId}`;
    const saved = localStorage.getItem(storageKey);
    if (saved != null && !isNaN(Number(saved)) && Number(saved) > 0) {
      this.remainingSeconds = Number(saved);
    } else {
      this.remainingSeconds = this.totalDurationSeconds;
    }

    // tick function uses arrow so `this` is lexical
    const tick = () => {
      if (this.remainingSeconds <= 0) {
        localStorage.setItem(storageKey, String(this.totalDurationSeconds));
        this.clearTimer();
        this.evaluateQuiz();
      } else {
        this.remainingSeconds = this.remainingSeconds - 1;
        localStorage.setItem(storageKey, String(this.remainingSeconds));
      }
    };

    // clear any existing interval first
    this.clearTimer();
    this.tickIntervalRef = setInterval(tick, 1000);
  }

  private clearTimer(): void {
    if (this.tickIntervalRef) {
      clearInterval(this.tickIntervalRef);
      this.tickIntervalRef = null;
    }
  }

  getFormattedTime(): string {
    const mm = Math.floor(this.remainingSeconds / 60);
    const ss = this.remainingSeconds % 60;
    return `${mm} min : ${ss} sec`;
  }

  printResult(): void {
    window.print();
  }
}