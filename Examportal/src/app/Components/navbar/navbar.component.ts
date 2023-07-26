import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/Services/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
   constructor(public login : LoginService) { }
   isLoggedIn : boolean = false;
   

   

   ngOnInit(): void {
    this.isLoggedIn = this.login.isLoggedIn();
    console.log(this.login.isLoggedIn());
   }

   logout() {

    this.login.logoutUser();
    window.location.reload();


   }


   
}
