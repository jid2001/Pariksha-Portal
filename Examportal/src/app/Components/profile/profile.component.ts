import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/Models/user';
import { LoginService } from 'src/app/Services/login.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user: any;

  constructor(private login: LoginService) { }
  ngOnInit(): void {
    this.user = this.login.getUserData();
    throw new Error('Method not implemented.');
  }

}
