import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../Models/user';
import { environment } from 'src/environments/environment.development';
const baseUrl = environment.apiUrl;
@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  
  constructor( private http : HttpClient) { }

  public addUser(user : User) { 
    return this.http.post(`${baseUrl}/user/`, user)
  }


}
