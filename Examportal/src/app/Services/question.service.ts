import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import baseUrl from './urlFile';
// const baseUrl = 'http://localhost:8080/question';
@Injectable({
  providedIn: 'root',
})
export class QuestionService {
  constructor(private http: HttpClient) {}
  public getQuestionsOfQuiz(qid: any) {
    return this.http.get(`${baseUrl}/question/quiz/${qid}`);
  }
  public getQuestionsOfQuizForUser(qid: any) {
    return this.http.get(`${baseUrl}/question/quiz/${qid}`);
  }
  public addQuestion(data: any) {
    return this.http.post(`${baseUrl}/question/`, data);
  }
  public deleteQuestion(quesId: any) {
    return this.http.delete(`${baseUrl}/question/${quesId}`);
  }
  public getQuestion(quesId:any){
    return this.http.get(`${baseUrl}/question/${quesId}`);
  }
  public updateQuestion(data: any) {
    return this.http.put(`${baseUrl}/question/`, data);
  }
}