import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/Services/category.service';

@Component({
  selector: 'app-user-sidebar',
  templateUrl: './user-sidebar.component.html',
  styleUrls: ['./user-sidebar.component.css']
})
export class UserSidebarComponent implements OnInit {
  categories: any;

  // listItems = [
  //   { linkTitle: 'Home ', link: '/user', icon: 'home' },
  //   { linkTitle: 'All Quizzes', icon: 'account_circle' },
  // ];
  constructor(private categoryService: CategoryService) {}

  ngOnInit(): void {
    this.categoryService.getCategory().subscribe((data) => {
      console.log(data);
      this.categories = data;
    },
    (error) =>{
        console.log(error);
    });
  }

}
