import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './urlFile';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  getActiveQuizzes() {
    return this.http.get(`${baseUrl}/quiz/active`);
  }

  constructor(private http : HttpClient) { }

  public getQuizzes(){
    return this.http.get(`${baseUrl}/quiz/`)
  }

  public addQuiz(quiz : any){
     return this.http.post(`${baseUrl}/quiz/`,quiz)
  }

  // get quiz by id
  public getQuiz(qid: any) {
    return this.http.get(`${baseUrl}/quiz/${qid}`);
  }

  //update quiz

  public updateQuiz(data: any) {
    return this.http.put(`${baseUrl}/quiz/`, data);
  }
  public deleteQuiz(qid: any) {
    return this.http.delete(`${baseUrl}/quiz/${qid}`);
  }

  public getActiveQuizzesOfCategory(cid: any) {
    return this.http.get(`${baseUrl}category/active/${cid}`);
  }
}
