import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  
  private readonly baseUrl = environment.apiUrl;
  
  constructor(private http : HttpClient) { }
  
  
  public getCategory(){
    return this.http.get(`${this.baseUrl}/category/`)
  }

  public addCategory(category : any){
    return this.http.post(`${this.baseUrl}/category/`, category)
  }
}
