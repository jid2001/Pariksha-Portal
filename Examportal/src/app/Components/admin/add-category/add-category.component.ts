import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CategoryService } from 'src/app/Services/category.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit{

category = {
  title :'',
  description:''
}

  constructor(private categoryService: CategoryService, private snackbar : MatSnackBar) { }
  // ngOnInit(): void { }
  ngOnInit(): void {
    console.log("add  button clicked");
    // this.formSubmit();
    // throw new Error('Method not implemented.');
  }

  formSubmit(){
    console.log("add category button clicked");
    if(this.category.title == null || this.category.title.length == 0){
      this.snackbar.open('Title is required', 'ok', {
        duration: 3000,
        verticalPosition: 'bottom',
        horizontalPosition: 'center',
      });
      return;
    }
    this.categoryService.addCategory(this.category).subscribe(
      (data)=>{
        console.log(data);
        Swal.fire(
          'Success!',
          "Category added successfully"
        )
      },
      (error)=>{
        console.log(error);
        this.snackbar.open("Failed to add category ", "",{
          duration: 3000
        })
      }
    
    )  
  }

}
