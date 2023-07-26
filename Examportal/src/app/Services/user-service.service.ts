import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../Models/user';
import baseUrl from './urlFile';
@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  
  constructor( private http : HttpClient) { }

  public addUser(user : User) { 
    return this.http.post(`${baseUrl}/user/`, user)
  }


}
