import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/Services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  [x: string]: any;

loginCredentials = {
  username :'',
  password : ''
}
  
  constructor(private snac : MatSnackBar, private loginService : LoginService, private router :Router) {};

  ngOnInit() :void{};

  onSubmit(){
    console.log("Login button clicked");
    if(this.loginCredentials.username == null || this.loginCredentials.username.trim() == ''){
      this.snac.open("Username is required","",{
        duration : 3000
      });
      return;
    }

    if(this.loginCredentials.password == null || this.loginCredentials.password.trim() == ''){
      this.snac.open("Password is required","",{
        duration : 3000
      });
      return;
    }

    // Call generateToken methed of login service

    this.loginService.generateToken(this.loginCredentials).subscribe(
      (data:any) => {
        console.log("Successfully generated token");
        console.log(data);

        // Save token
        this.loginService.loginUser(data.token);

        this.loginService.getCurrentUser().subscribe(
          (user : any)  => {
            this.loginService.saveUserDetails(user);
            console.log(user);

            //redirect ..ADMIN : admin dashboard

            if(this.loginService.getUserRole() == 'Admin'){
              this.router.navigate(['admin-dashboard']);
              // window.location.href = '/admin-dashboard'

            }
            else if(this.loginService.getUserRole() == 'Normal'){

            //redirect ..NOrmal : user dashboard

            window.location.href = '/user-dashboard';
            }
            else{
              // window.location.reload();
              this.loginService.logoutUser();
            }
          },
          (err) => {
            console.log("Error from getting user  ")
            console.log(err);
            this.snac.open("Somthing went Wrong !! Try Agian","", {
              duration: 3000
            })
          }
        );


        
      },
      (error)=>{
        console.log("Failed to generate token"); 
        console.log(error);
      }
    );
      


  }

  

}
