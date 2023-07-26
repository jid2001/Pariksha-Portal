import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { User } from 'src/app/Models/user';
import { UserServiceService } from 'src/app/Services/user-service.service';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  user: User = new User;
  constructor(private userService: UserServiceService, private snacbar : MatSnackBar) { }

  ngOnInit(): void { }
  formSubmit() {
    console.log(this.user);
    // alert("Submit")

    if (this.user.username == null) {
     this.snacbar.open("Username is required", "Okay!",{
      duration: 3000
     });
      return;
    }

    // Add user
    this.userService.addUser(this.user).subscribe(
      (data) => {
        console.log(data);
        Swal.fire(
          'Success!',
          'User added successfully',
          'success'
        )
      },
      (error) => {
        console.log(error);
        this.snacbar.open("Something went wrong", "Okay!",{
          duration: 3000});
      });

  }



}



