import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import baseUrl from './urlFile';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public loginStatusSubject = new Subject<boolean>();
  static isLoggedIn() {
    throw new Error('Method not implemented.');
  }

  constructor(private http : HttpClient) { }

  // get Current User

  public getCurrentUser(){
    return this.http.get(`${baseUrl}/current-user`);
  }

  // genrate token method 

  public generateToken(loginData :any){
    return this.http.post(`${baseUrl}/generate-token`, loginData);

  }

  // function to store token in local storage 
  // setcookie

  public loginUser(token :any){
    localStorage.setItem('token', token);
  }

  //Function to check if user is logged in or not

  public isLoggedIn(){

    let token = localStorage.getItem('token');
    if(token == null || token == undefined  || token.length == 0){
      return false;
    }
    else  return true;
  }


  // Logout user : remove token from local storage

  public logoutUser(){
    localStorage.removeItem('token');
    localStorage.removeItem('userData');
  }

  // funtion to get token from local storage

  public getToken(){
    localStorage.getItem('token');
    
  }


  // Function to save User Details

  public saveUserDetails(userData: any){
    localStorage.setItem('userData', JSON.stringify(userData));
  }


  // Function to getting user details from local storage
  public getUserData(){

    let user =   localStorage.getItem('userData')

    if(user != null){
      return JSON.parse(user);
    }
    else return null;
  }
    

  

  //Get UserRole

  public getUserRole(){
    let user = this.getUserData();
    return user.authorities[0].authority;
  }


}
